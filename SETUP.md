# Guide de Configuration E-Tech

Ce guide vous explique comment configurer les API et services nécessaires pour mettre E-Tech en production.

## 1. Variables d'Environnement

Copiez le fichier template :
```bash
cp configs/env.template .env
```

Remplissez les valeurs dans `.env`.

---

## 2. Paiements

### Stripe (Mondial)
1. Créez un compte sur [stripe.com](https://stripe.com)
2. Allez dans Dashboard → Developers → API Keys
3. Copiez `STRIPE_SECRET_KEY` (sk_live_...)
4. Copiez `STRIPE_WEBHOOK_SECRET` dans Webhooks

### PayPal (Mondial)
1. Créez un compte [developer.paypal.com](https://developer.paypal.com)
2. Allez dans Dashboard → Apps & Credentials
3. Créez une app et copiez les clés

### Flutterwave (Afrique)
1. Créez un compte sur [flutterwave.com](https://flutterwave.com)
2. Dashboard → Settings → API Keys
3. Copiez les clés publiques et secrètes

### Paystack (Afrique)
1. Créez un compte sur [paystack.com](https://paystack.com)
2. Settings → API Keys
3. Copiez les clés

---

## 3. IA / Automatisation

### Anthropic Claude
1. Créez un compte sur [anthropic.com](https://anthropic.com)
2. Platform Settings → API Keys
3. Copiez `ANTHROPIC_API_KEY`

### N8N (Automation)
1. Installez N8N sur votre VPS
2. Copiez l'URL dans `N8N_URL`
3. Générez une clé d'encryption 32 caractères

---

## 4. Newsletter

### Mailchimp
1. Créez un compte sur [mailchimp.com](https://mailchimp.com)
2. Allez dans Account → Extras → API Keys
3. Copiez `MAILCHIMP_API_KEY`
4. Trouvez votre `MAILCHIMP_LIST_ID` dans Audience → Settings

---

## 5. Analytics

### Google Analytics
1. Créez un projet sur [analytics.google.com](https://analytics.google.com)
2. Créez une propriété et copiez le Measurement ID (G-XXXXXXX)

### Facebook Pixel
1. Allez dans Events Manager
2. Copiez votre Pixel ID

---

## 6. Réseaux Sociaux

Pour activer les liens WhatsApp, modifiez dans le code :
```html
<a href="https://wa.me/VOTRE_NUMERO" class="whatsapp-float">
```

---

## 7. Google Sheets (Base de données)

1. Créez un projet Google Cloud
2. Activez Google Sheets API
3. Créez un Service Account
4. Téléchargez le JSON et copiez dans `GOOGLE_SERVICE_ACCOUNT_JSON`
5. Partagez votre Sheet avec l'email du Service Account

---

## 8. Démarrage Backend

```bash
cd backend
npm install
npm start
```

L'API sera disponible sur `http://localhost:3000`

---

## Checklist

| Service | Status |
|---------|--------|
| Stripe | ⬜ |
| PayPal | ⬜ |
| Flutterwave | ⬜ |
| Paystack | ⬜ |
| Anthropic | ⬜ |
| N8N | ⬜ |
| Mailchimp | ⬜ |
| GA4 | ⬜ |
| Facebook Pixel | ⬜ |

Une fois configuré, lancez le déploiement !