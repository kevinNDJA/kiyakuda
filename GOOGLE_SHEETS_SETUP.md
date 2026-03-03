# Google Drive + Google Sheets Setup (Validation centralisee)

Objectif:
- stock global centralise,
- commandes en attente puis validation/rejet par email,
- inscriptions en attente puis validation/rejet par email,
- fichiers d'inscription enregistres dans Drive.

Dossier Drive cible:
`https://drive.google.com/drive/folders/1HeImS3dG74QSnR4Tie3CJLrpLl-S38oo`

## 1) Creer le Google Sheets
1. Ouvre le dossier Drive.
2. Cree un fichier Google Sheets (ex: `Kiyakuda_Backoffice`).
3. Copie l'ID du fichier (dans son URL).

Note: les onglets `Signups`, `Orders`, `Stocks` seront crees automatiquement par Apps Script.

## 2) Configurer Apps Script
1. Ouvre `https://script.new`.
2. Remplace `Code.gs` par le contenu de `apps_script_Code.gs`.
3. Renseigne:
- `SPREADSHEET_ID` = ID du Google Sheets.
- `DRIVE_FOLDER_ID` est deja renseigne (ton dossier).

## 3) Deployer en Web App
1. `Deploy` -> `New deployment`.
2. Type: `Web app`.
3. Execute as: `Me`.
4. Access: `Anyone with the link`.
5. Deploie et copie l'URL Web App.

## 4) Connecter le site
1. Ouvre `user.html` et colle l'URL dans `APPS_SCRIPT_URL`.
2. Ouvre `produit.html` et colle la meme URL dans `APPS_SCRIPT_URL`.

## 5) Fonctionnement
- `produit.html`
  - lit le stock via `action=get_stocks`,
  - cree une commande `PENDING` via `action=create_order`,
  - envoie un email avec liens `validate_order` / `reject_order`.
- `user.html`
  - cree une inscription `PENDING` via `action=create_signup`,
  - upload les fichiers dans Drive,
  - envoie un email avec liens `validate_signup` / `reject_signup`.

## 6) Test rapide
1. Passe une commande et soumets une inscription.
2. Ouvre l'email admin et clique `VALIDER` ou `REJETER`.
3. Verifie:
- statut dans les onglets `Orders` / `Signups`,
- stock mis a jour seulement apres `validate_order`,
- fichiers presents dans le dossier Drive.
