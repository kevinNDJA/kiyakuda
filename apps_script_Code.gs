const SPREADSHEET_ID = "1U8CAL-BP4LcHHGDlAMGNgcsOmasFFcjpYzJJumHqHA8";
const SHEET_ORDERS = "Orders";
const MERCHANT_EMAIL = "bahamkevinsonn@gmail.com";
const FLUTTERWAVE_SECRET_KEY = "REMPLACE_PAR_TA_CLE_SECRETE_FLUTTERWAVE";
const SHOP_NAME = "Kiyakuda";

function doPost(e) {
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    initSheets_();
    const action = data.action || "";

    if (action === "create_order") {
      return jsonResponse(createOrder_(data.order || {}));
    }
    if (action === "create_card_payment") {
      return jsonResponse(createCardPayment_(data.order || {}, data.redirectUrl || ""));
    }

    return jsonResponse({ ok: false, message: "Action POST inconnue." });
  } catch (err) {
    return jsonResponse({ ok: false, message: String(err) });
  }
}

function doGet(e) {
  try {
    initSheets_();
    const action = (e.parameter && e.parameter.action) || "";
    const id = (e.parameter && e.parameter.id) || "";

    if (action === "validate_order") {
      return textResponse(validateOrder_(id));
    }
    if (action === "reject_order") {
      return textResponse(rejectOrder_(id));
    }

    return textResponse("Web App Kiyakuda active.");
  } catch (err) {
    return textResponse("Erreur: " + String(err));
  }
}

function createOrder_(order) {
  if (!order.reference || !order.customer || !order.customer.email) {
    return { ok: false, message: "Commande invalide." };
  }

  const sheet = getSheet_(SHEET_ORDERS);
  const itemsLabel = (order.items || [])
    .map(function (item) {
      return item.name + " x" + item.qty + (item.variant ? " - " + item.variant : "");
    })
    .join(" | ");

  sheet.appendRow([
    order.reference,
    order.createdAt || new Date().toISOString(),
    order.customer.lastName || "",
    order.customer.firstName || "",
    order.customer.email || "",
    order.customer.phone || "",
    order.customer.city || "",
    (order.shipping && order.shipping.label) || "",
    (order.shipping && order.shipping.fee) || 0,
    order.subtotal || 0,
    order.total || 0,
    itemsLabel,
    "PENDING"
  ]);

  sendMerchantOrderMail_(order);
  return { ok: true, reference: order.reference, status: "PENDING" };
}

function createCardPayment_(order, redirectUrl) {
  if (!order.reference || !order.customer || !order.customer.email || !order.total) {
    return { ok: false, message: "Paiement carte impossible pour cette commande." };
  }

  if (!FLUTTERWAVE_SECRET_KEY || FLUTTERWAVE_SECRET_KEY.indexOf("REMPLACE_") === 0) {
    return { ok: false, message: "Paiement carte indisponible." };
  }

  const payload = {
    tx_ref: order.reference,
    amount: String(order.total),
    currency: "XOF",
    redirect_url: redirectUrl || ScriptApp.getService().getUrl(),
    payment_options: "card",
    customer: {
      email: order.customer.email,
      name: [order.customer.firstName || "", order.customer.lastName || ""].join(" ").trim(),
      phonenumber: order.customer.phone || ""
    },
    customizations: {
      title: SHOP_NAME,
      description: "Paiement carte commande " + order.reference
    },
    meta: {
      order_reference: order.reference,
      shipping_region: (order.shipping && order.shipping.label) || ""
    },
    configurations: {
      session_duration: 30,
      max_retry_attempt: 3
    }
  };

  const response = UrlFetchApp.fetch("https://api.flutterwave.com/v3/payments", {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + FLUTTERWAVE_SECRET_KEY
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const raw = response.getContentText() || "{}";
  const result = JSON.parse(raw);
  const code = response.getResponseCode();

  if (code >= 200 && code < 300 && result.status === "success" && result.data && result.data.link) {
    return { ok: true, link: result.data.link };
  }

  return { ok: false, message: result.message || "Impossible de creer le lien de paiement carte." };
}

function validateOrder_(reference) {
  const order = findByReference_(reference);
  if (!order.found) return "Commande introuvable.";
  if (String(order.rowValues[12] || "") !== "PENDING") return "Commande deja traitee.";

  order.sheet.getRange(order.rowIndex, 13).setValue("VALIDATED");
  sendCustomerValidationMail_(order.rowValues);
  return "Commande validee. Email client envoye.";
}

function rejectOrder_(reference) {
  const order = findByReference_(reference);
  if (!order.found) return "Commande introuvable.";
  if (String(order.rowValues[12] || "") !== "PENDING") return "Commande deja traitee.";

  order.sheet.getRange(order.rowIndex, 13).setValue("REJECTED");
  sendCustomerRejectionMail_(order.rowValues);
  return "Commande rejetee. Email client envoye.";
}

function sendMerchantOrderMail_(order) {
  const baseUrl = ScriptApp.getService().getUrl();
  const validateLink = baseUrl + "?action=validate_order&id=" + encodeURIComponent(order.reference);
  const rejectLink = baseUrl + "?action=reject_order&id=" + encodeURIComponent(order.reference);

  const html = [
    "<h2>Nouvelle commande Kiyakuda</h2>",
    "<p><strong>Reference:</strong> " + order.reference + "</p>",
    "<p><strong>Client:</strong> " + order.customer.firstName + " " + order.customer.lastName + "</p>",
    "<p><strong>Email:</strong> " + order.customer.email + "</p>",
    "<p><strong>Telephone:</strong> " + order.customer.phone + "</p>",
    "<p><strong>Ville:</strong> " + order.customer.city + "</p>",
    "<p><strong>Livraison:</strong> " + order.shipping.label + " - " + order.shipping.fee + " FCFA</p>",
    "<p><strong>Total:</strong> " + order.total + " FCFA</p>",
    "<p><strong>Produits:</strong></p>",
    "<ul>" + (order.items || []).map(function (item) {
      return "<li>" + item.name + " x" + item.qty + (item.variant ? " - " + item.variant : "") + "</li>";
    }).join("") + "</ul>",
    '<p><a href="' + validateLink + '">Valider la commande</a></p>',
    '<p><a href="' + rejectLink + '">Rejeter la commande</a></p>'
  ].join("");

  MailApp.sendEmail({
    to: MERCHANT_EMAIL,
    subject: "Nouvelle commande Kiyakuda - " + order.reference,
    htmlBody: html
  });
}

function sendCustomerValidationMail_(row) {
  MailApp.sendEmail({
    to: row[4],
    subject: "Votre commande Kiyakuda est validee",
    htmlBody: [
      "<h2>Commande validee</h2>",
      "<p>Bonjour " + row[3] + ",</p>",
      "<p>Votre commande " + row[0] + " a ete validee par la boutique.</p>",
      "<p>Le retrait ou la livraison suivra selon les indications communiquees, avec possibilite de retrait en station dediee si ce mode est retenu.</p>"
    ].join("")
  });
}

function sendCustomerRejectionMail_(row) {
  MailApp.sendEmail({
    to: row[4],
    subject: "Votre commande Kiyakuda n'a pas pu etre validee",
    htmlBody: [
      "<h2>Commande non validee</h2>",
      "<p>Bonjour " + row[3] + ",</p>",
      "<p>Votre commande " + row[0] + " n'a pas pu etre validee pour le moment.</p>",
      "<p>Merci de reprendre contact avec la boutique si besoin.</p>"
    ].join("")
  });
}

function initSheets_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  ensureSheet_(ss, SHEET_ORDERS, [
    "reference",
    "created_at",
    "last_name",
    "first_name",
    "email",
    "phone",
    "city",
    "shipping_region",
    "shipping_fee",
    "subtotal",
    "total",
    "items",
    "status"
  ]);
}

function ensureSheet_(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) sh.appendRow(headers);
  return sh;
}

function getSheet_(name) {
  return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(name);
}

function findByReference_(reference) {
  const sheet = getSheet_(SHEET_ORDERS);
  const last = sheet.getLastRow();
  if (last < 2) return { found: false };
  const values = sheet.getRange(2, 1, last - 1, sheet.getLastColumn()).getValues();
  for (let i = 0; i < values.length; i += 1) {
    if (String(values[i][0] || "") === String(reference || "")) {
      return { found: true, sheet: sheet, rowIndex: i + 2, rowValues: values[i] };
    }
  }
  return { found: false };
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function textResponse(message) {
  return ContentService
    .createTextOutput(String(message))
    .setMimeType(ContentService.MimeType.TEXT);
}
