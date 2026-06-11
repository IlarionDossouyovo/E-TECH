# Configuration Analytics - E-Tech

## Outils configurés

| Outil | Fichier | Status |
|-------|---------|--------|
| Google Analytics 4 | `configs/analytics.js` | Prêt |
| Facebook Pixel | `configs/analytics.js` | Prêt |

---

## 1. Google Analytics 4

### Créer un compte
1. Aller sur [analytics.google.com](https://analytics.google.com)
2. "Commencer à mesurer"
3. Nom de la propriété: **E-Tech**
4. Fuseau horaire: Africa/Cotonou
5. Devise: USD

### Créer une propriété Web
1. **Créer une propriété** → Web
2. URL du site: `https://e-tech.bj`
3. Nom du flux de données: "E-Tech Website"

### Récupérer le Measurement ID
1. **Administration** → Flux de données → Web
2. Copier le **Measurement ID** (ex: `G-XXXXXXXXXX`)

### Configurer dans le code
Ouvrir `configs/analytics.js`:
```javascript
const GA_CONFIG = {
    MEASUREMENT_ID: 'G-VOTRE_ID_ICI',  // Remplacer
    ENHANCED_TRACKING: true
};
```

### Activer dans le frontend
Dans `index.html`, décommenter:
```html
<script src="../configs/analytics.js"></script>
<script>
    initGA();
</script>
```

---

## 2. Facebook Pixel

### Créer un Pixel
1. Aller sur [business.facebook.com/events-manager](https://business.facebook.com/events-manager)
2. "Créer une source de données"
3. Choisir "Pixel"

### Récupérer le Pixel ID
1. Cliquer sur le Pixel
2. Copier le **Pixel ID** (chiffres uniquement)

### Configurer dans le code
Ouvrir `configs/analytics.js`:
```javascript
const FB_PIXEL_ID = 'VOTRE_PIXEL_ID_SANS_TIRETS';
```

### Activer le Pixel
```javascript
initFBPixel();
```

---

## 3. Événements à suivre

| Événement | Code | Objectif |
|-----------|------|----------|
| Page vue | Auto | Trafic global |
| Produit vu | `trackProductView()` | Intérêt produits |
| Panier ajouté | `trackAddToCart()` | Intent Kauf |
| Checkout | `trackBeginCheckout()` | Début achat |
| Achat | `trackPurchase()` | Conversion |
| Newsletter | `trackNewsletterSignup()` | Lead |
| Contact | `trackContactForm()` | Lead |

---

## 4. Tableaux de bord

### Google Analytics
- **Rapports en temps réel**: Visiteurs actifs
- **Acquisition**: Sources de trafic
- **Engagement**: Pages, événements
- **Conversions**: Objectifs e-commerce

### Facebook Business
- **Events Manager**: Pixel tracking
- **Ads Manager**: Campagnes payantes

---

## 5. Objectifs (KPIs)

| Métrique | Target |
|----------|--------|
| Sessions/mois | 10,000+ |
| Taux de conversion | 2%+ |
| Panier moyen | $80+ |
| Temps moyen | 2+ min |
| Taux de rebond | < 60% |

---

## Checklist

| Étape | Status |
|------|--------|
| Compte GA4 créé | ⬜ |
| Measurement ID récupéré | ⬜ |
| Code configuré | ⬜ |
| Pixel Facebook | ⬜ |
| Premier test | ⬜ |

---

*Après configuration, vos analytics seront opérationnels!*