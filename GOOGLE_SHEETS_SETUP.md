# Google Drive + Google Sheets Setup

Goal: save seller registration data into Google Sheets and upload files into your Drive folder:
`https://drive.google.com/drive/folders/1HeImS3dG74QSnR4Tie3CJLrpLl-S38oo`

## 1) Create the sheet
1. Open your Drive folder above.
2. Create a Google Sheets file (example: `Inscriptions_Kiyakuda`).
3. In the first sheet (`Feuille 1`), add headers in row 1:
`timestamp | nom | prenom | type_piece | piece_links | selfie_link | demande_link`

## 2) Apps Script
1. Open `https://script.new`.
2. Replace `Code.gs` with project file: `apps_script_Code.gs`.
3. In `Code.gs`, set:
- `SPREADSHEET_ID` (from Google Sheets URL)
- `SHEET_NAME` (default is `Feuille 1`)
- `DRIVE_FOLDER_ID` is already set to your folder ID

## 3) Deploy Web App
1. Click `Deploy` -> `New deployment`.
2. Type: `Web app`.
3. Execute as: `Me`.
4. Who has access: `Anyone with the link`.
5. Deploy and copy the Web App URL.

## 4) Connect website
1. Open `user.html`.
2. Find `const APPS_SCRIPT_URL = "";`
3. Paste your Web App URL there.

## 5) Test flow
1. Open `user.html` in browser.
2. Fill the form + select files.
3. Submit.
4. Check:
- files created in your Drive folder
- links written in your Google Sheet

## Notes
- Current client limit in `user.html`: 8 MB per file.
- If files are too large, reduce file size or implement backend chunk upload.
