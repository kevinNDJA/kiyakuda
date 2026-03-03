const SPREADSHEET_ID = "REMPLACE_PAR_TON_SPREADSHEET_ID";
const DRIVE_FOLDER_ID = "1HeImS3dG74QSnR4Tie3CJLrpLl-S38oo";

const SHEET_SIGNUPS = "Signups";
const SHEET_ORDERS = "Orders";
const SHEET_STOCKS = "Stocks";

function doPost(e) {
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    initSheets_();
    const action = data.action || "";

    if (action === "create_signup") {
      return jsonResponse(createSignup_(data));
    }
    if (action === "create_order") {
      return jsonResponse(createOrder_(data));
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

    if (action === "get_stocks") {
      return jsonResponse({ ok: true, stocks: getStocksMap_() });
    }
    if (action === "validate_order") {
      return textResponse(validateOrder_(id));
    }
    if (action === "reject_order") {
      return textResponse(rejectOrder_(id));
    }
    if (action === "validate_signup") {
      return textResponse(validateSignup_(id));
    }
    if (action === "reject_signup") {
      return textResponse(rejectSignup_(id));
    }

    return jsonResponse({ ok: true, message: "Web App active." });
  } catch (err) {
    return textResponse("Erreur: " + String(err));
  }
}

function createSignup_(data) {
  const sheet = getSheet_(SHEET_SIGNUPS);
  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const stamp = data.timestamp || new Date().toISOString();
  const id = "SIG-" + Date.now() + "-" + Math.floor(Math.random() * 10000);
  const prefix = [stamp, data.nom || "", data.prenom || ""].join("_").replace(/[^\w\-]/g, "_");

  const pieceLinks = saveManyFiles_(folder, data.piece_files || [], prefix + "_piece");
  const selfieLink = saveOneFile_(folder, data.selfie_file, prefix + "_selfie");
  const demandeLink = saveOneFile_(folder, data.demande_file, prefix + "_demande");

  const baseUrl = getWebAppUrl_();
  const validateLink = baseUrl + "?action=validate_signup&id=" + encodeURIComponent(id);
  const rejectLink = baseUrl + "?action=reject_signup&id=" + encodeURIComponent(id);

  sheet.appendRow([
    id,
    stamp,
    data.nom || "",
    data.prenom || "",
    data.type_piece || "",
    "PENDING",
    pieceLinks.join(" | "),
    selfieLink,
    demandeLink
  ]);

  return {
    ok: true,
    id: id,
    status: "PENDING",
    validate_link: validateLink,
    reject_link: rejectLink
  };
}

function createOrder_(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sheet = getSheet_(SHEET_ORDERS);
    const stocks = getStocksMap_();
    const productId = String(data.product_id || "");
    const productName = String(data.product_name || "");
    const qty = Number(data.quantity || 0);
    if (!productId || !productName || !Number.isInteger(qty) || qty <= 0) {
      return { ok: false, message: "Donnees commande invalides." };
    }
    if (typeof stocks[productId] !== "number") {
      return { ok: false, message: "Produit introuvable." };
    }
    if (qty > stocks[productId]) {
      return { ok: false, message: "Stock insuffisant." };
    }

    const id = "ORD-" + Date.now() + "-" + Math.floor(Math.random() * 10000);
    const stamp = data.timestamp || new Date().toISOString();
    const baseUrl = getWebAppUrl_();
    const validateLink = baseUrl + "?action=validate_order&id=" + encodeURIComponent(id);
    const rejectLink = baseUrl + "?action=reject_order&id=" + encodeURIComponent(id);

    sheet.appendRow([
      id,
      stamp,
      productId,
      productName,
      qty,
      "PENDING"
    ]);

    return {
      ok: true,
      id: id,
      status: "PENDING",
      validate_link: validateLink,
      reject_link: rejectLink
    };
  } finally {
    lock.releaseLock();
  }
}

function validateOrder_(id) {
  if (!id) return "Erreur: identifiant commande manquant.";
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const orderSheet = getSheet_(SHEET_ORDERS);
    const stockSheet = getSheet_(SHEET_STOCKS);
    const order = findById_(orderSheet, id);
    if (!order.found) return "Commande introuvable.";

    const status = String(order.rowValues[5] || "");
    if (status !== "PENDING") return "Commande deja traitee (" + status + ").";

    const productId = String(order.rowValues[2] || "");
    const qty = Number(order.rowValues[4] || 0);
    const stock = findStockRow_(stockSheet, productId);
    if (!stock.found) return "Produit de commande introuvable.";
    if (qty > stock.qty) return "Validation impossible: stock insuffisant.";

    stockSheet.getRange(stock.rowIndex, 2).setValue(stock.qty - qty);
    orderSheet.getRange(order.rowIndex, 6).setValue("VALIDATED");
    return "Commande validee. Stock mis a jour.";
  } finally {
    lock.releaseLock();
  }
}

function rejectOrder_(id) {
  if (!id) return "Erreur: identifiant commande manquant.";
  const orderSheet = getSheet_(SHEET_ORDERS);
  const order = findById_(orderSheet, id);
  if (!order.found) return "Commande introuvable.";
  const status = String(order.rowValues[5] || "");
  if (status !== "PENDING") return "Commande deja traitee (" + status + ").";
  orderSheet.getRange(order.rowIndex, 6).setValue("REJECTED");
  return "Commande rejetee.";
}

function validateSignup_(id) {
  if (!id) return "Erreur: identifiant inscription manquant.";
  const sheet = getSheet_(SHEET_SIGNUPS);
  const entry = findById_(sheet, id);
  if (!entry.found) return "Inscription introuvable.";
  const status = String(entry.rowValues[5] || "");
  if (status !== "PENDING") return "Inscription deja traitee (" + status + ").";
  sheet.getRange(entry.rowIndex, 6).setValue("VALIDATED");
  return "Inscription validee.";
}

function rejectSignup_(id) {
  if (!id) return "Erreur: identifiant inscription manquant.";
  const sheet = getSheet_(SHEET_SIGNUPS);
  const entry = findById_(sheet, id);
  if (!entry.found) return "Inscription introuvable.";
  const status = String(entry.rowValues[5] || "");
  if (status !== "PENDING") return "Inscription deja traitee (" + status + ").";
  sheet.getRange(entry.rowIndex, 6).setValue("REJECTED");
  return "Inscription rejetee.";
}

function getStocksMap_() {
  const sheet = getSheet_(SHEET_STOCKS);
  const last = sheet.getLastRow();
  const map = {};
  if (last < 2) return map;
  const values = sheet.getRange(2, 1, last - 1, 3).getValues();
  for (let i = 0; i < values.length; i += 1) {
    const id = String(values[i][0] || "");
    const qty = Number(values[i][1] || 0);
    if (id) map[id] = qty;
  }
  return map;
}

function initSheets_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const signupSheet = ensureSheet_(ss, SHEET_SIGNUPS, ["id", "timestamp", "nom", "prenom", "type_piece", "status", "piece_links", "selfie_link", "demande_link"]);
  const orderSheet = ensureSheet_(ss, SHEET_ORDERS, ["id", "timestamp", "product_id", "product_name", "quantity", "status"]);
  const stockSheet = ensureSheet_(ss, SHEET_STOCKS, ["product_id", "stock", "product_name"]);

  if (stockSheet.getLastRow() < 2) {
    stockSheet.appendRow(["sac", 12, "Sac a dos urbain"]);
    stockSheet.appendRow(["chaussure", 8, "Chaussures sport"]);
    stockSheet.appendRow(["casque", 15, "Casque audio"]);
  }
  if (signupSheet.getLastRow() < 1 || orderSheet.getLastRow() < 1) {
    // no-op, entetes deja assures
  }
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

function findById_(sheet, id) {
  const last = sheet.getLastRow();
  if (last < 2) return { found: false };
  const values = sheet.getRange(2, 1, last - 1, sheet.getLastColumn()).getValues();
  for (let i = 0; i < values.length; i += 1) {
    if (String(values[i][0] || "") === id) {
      return { found: true, rowIndex: i + 2, rowValues: values[i] };
    }
  }
  return { found: false };
}

function findStockRow_(sheet, productId) {
  const last = sheet.getLastRow();
  if (last < 2) return { found: false };
  const values = sheet.getRange(2, 1, last - 1, 3).getValues();
  for (let i = 0; i < values.length; i += 1) {
    if (String(values[i][0] || "") === productId) {
      return { found: true, rowIndex: i + 2, qty: Number(values[i][1] || 0) };
    }
  }
  return { found: false };
}

function getWebAppUrl_() {
  const serviceUrl = ScriptApp.getService().getUrl();
  return serviceUrl || "";
}

function saveManyFiles_(folder, files, prefix) {
  const out = [];
  for (let i = 0; i < files.length; i += 1) {
    out.push(saveOneFile_(folder, files[i], prefix + "_" + (i + 1)));
  }
  return out.filter(Boolean);
}

function saveOneFile_(folder, fileObj, fallbackName) {
  if (!fileObj || !fileObj.base64) return "";
  const bytes = Utilities.base64Decode(fileObj.base64);
  const mimeType = fileObj.type || "application/octet-stream";
  const originalName = fileObj.name || fallbackName;
  const safeName = (fallbackName + "_" + originalName).replace(/[^\w.\-]/g, "_");
  const blob = Utilities.newBlob(bytes, mimeType, safeName);
  const created = folder.createFile(blob);
  return created.getUrl();
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
