# Kiyakuda - commandes, emails et paiement carte

## 1. Google Sheet
1. Cree un Google Sheet.
2. Copie son identifiant depuis l'URL.

## 2. Apps Script
1. Ouvre `https://script.new`.
2. Colle le contenu de `apps_script_Code.gs`.
3. `SPREADSHEET_ID` est deja renseigne avec ton Google Sheet. Change-le seulement si tu remplaces de fichier.
4. Verifie `MERCHANT_EMAIL`.
5. Pour la carte, remplace `FLUTTERWAVE_SECRET_KEY` par ta cle secrete Flutterwave.

## 3. Deploiement
1. `Deploy` -> `New deployment`
2. Type: `Web app`
3. Execute as: `Me`
4. Access: `Anyone`
5. Deploie puis copie l'URL `exec`.

## 4. Connexion du site
1. Ouvre `app.js`
2. Renseigne `APPS_SCRIPT_URL`
3. Sauvegarde

## 5. Fonctionnement
- quand le client envoie la commande, la boutique recoit un email avec les liens `Valider` et `Rejeter`
- apres clic sur `Valider`, le client recoit automatiquement un email de confirmation
- le bouton carte cree un lien de paiement Flutterwave heberge puis redirige le client dessus
- apres retour du paiement, la commande reste en attente de validation par la boutique
