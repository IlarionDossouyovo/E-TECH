# Configuration Réseaux Sociaux - E-Tech

## Pages à créer

| Réseau | Handle | Objectif |
|--------|--------|----------|
| Facebook | @E-Tech.bj | Community, promos |
| Instagram | @etech.bj | Visuel, produits |
| WhatsApp | +229 XX XX XX XX | Support client |
| TikTok | @etech.bj | Viral, Gen Z |
| YouTube | @etech-bj | Reviews, tutos |
| X/Twitter | @etech_bj | Actualités |

---

## 1. Facebook

### Créer une Page
1. Aller sur [facebook.com/pages](https://facebook.com/pages)
2. Cliquer "Créer une page"
3. Catégorie: "Shopping/Retail"
4. Remplir les infos

### Configuration
- **Nom**: E-Tech - Premium Electronics
- **Description**: Boutique d'électronique premium au Bénin. Smartphones, accessoires, objets connectés. Livraison mondiale.
- **Catégorie**: Shopping/Retail
- **Site web**: https://e-tech.bj

### Pixel Facebook
1. **Events Manager** → **Data Sources** → **Pixels**
2. Copier le Pixel ID dans `configs/settings.js`

---

## 2. Instagram

### Créer un Compte Professionnel
1. Télécharger l'app Instagram
2. "Créer un nouveau compte"
3. Passer en compte professionnel: Paramètres → Compte → Passer au compte professionnel

### Connecter à Facebook
1. Paramètres → Comptes connectés
2. Connecter votre page Facebook

---

## 3. WhatsApp Business

### Créer un Compte
1. Télécharger [WhatsApp Business](https://business.whatsapp.com)
2. Créer le profil E-Tech

### Configurer le Quick Reply
- Message de bienvenue: "Bonjour! Bienvenue chez E-Tech. Comment puis-je vous aider?"
- Horaires: "Disponible 24/7 pour vos commandes"

### Générer le Lien
- Remplacer dans le code: `https://wa.me/22900000000`
- Format: `https://wa.me/VOTRE_NUMERO_SANS_LE_0`

---

## 4. TikTok

### Créer un Compte Pro
1. Télécharger TikTok
2. "S'inscrire"
3. Passer en TikTok Pro (paramètres)

### Categories à utiliser
- #etech #tech #gadget #benin #cotonou #shopping

---

## 5. YouTube

### Créer une Chaîne
1. Aller sur [youtube.com](https://youtube.com)
2. Créer une chaîne
3. Personnaliser:

```
Nom: E-Tech - Premium Electronics
Description: Votre boutique d'électronique au Bénin. 
Reviews, déballages et guides tech.
Lien: e-tech.bj
```

---

## 6. Intégration dans le Site

### Icônes sociales (footer)
Les liens sont déjà configurés dans `index.html` et `social-media.html`

### Bouton WhatsApp Flottant
Ajouter dans `index.html`:
```html
<a href="https://wa.me/22900000000" class="whatsapp-float">
    <img src="images/whatsapp-icon.svg" alt="WhatsApp">
</a>
```

---

## Checklist

| Réseau | Status | Lien |
|--------|--------|------|
| Facebook | ⬜ | facebook.com/etech.bj |
| Instagram | ⬜ | instagram.com/etech.bj |
| WhatsApp | ⬜ | wa.me/229... |
| TikTok | ⬜ | tiktok.com/@etech.bj |
| YouTube | ⬜ | youtube.com/@etech-bj |
| X/Twitter | ⬜ | twitter.com/etech_bj |

---

## Outils de Gestion

- **Meta Business Suite**: Facebook + Instagram
- **WhatsApp Business**: Support client
- **Later** ou **Buffer**: Planifier posts
- **Canva**: Créer visuels

---

*Une fois configuré, linker vos pages dans le site!*