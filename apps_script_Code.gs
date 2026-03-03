const SPREADSHEET_ID = "REMPLACE_PAR_TON_SPREADSHEET_ID";
const SHEET_NAME = "Feuille 1";
const DRIVE_FOLDER_ID = "1HeImS3dG74QSnR4Tie3CJLrpLl-S38oo";

function doPost(e) {
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse({ ok: false, message: "Feuille introuvable." });
    }

    const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    const stamp = data.timestamp || new Date().toISOString();
    const prefix = [stamp, data.nom || "", data.prenom || ""].join("_").replace(/[^\w\-]/g, "_");

    const pieceLinks = saveManyFiles_(folder, data.piece_files || [], prefix + "_piece");
    const selfieLink = saveOneFile_(folder, data.selfie_file, prefix + "_selfie");
    const demandeLink = saveOneFile_(folder, data.demande_file, prefix + "_demande");

    sheet.appendRow([
      stamp,
      data.nom || "",
      data.prenom || "",
      data.type_piece || "",
      pieceLinks.join(" | "),
      selfieLink,
      demandeLink
    ]);

    return jsonResponse({ ok: true, piece_links: pieceLinks, selfie_link: selfieLink, demande_link: demandeLink });
  } catch (err) {
    return jsonResponse({ ok: false, message: String(err) });
  }
}

function doGet() {
  return jsonResponse({ ok: true, message: "Web App active." });
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
