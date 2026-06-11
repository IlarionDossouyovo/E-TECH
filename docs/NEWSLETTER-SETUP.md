# Configuration Mailchimp - E-Tech

## 1. Créer un compte Mailchimp

1. Aller sur [mailchimp.com](https://mailchimp.com)
2. S'inscrire avec votre email professionnel (contact@e-tech.bj)
3. Confirmer l'email

---

## 2. Configurer l'Audience (Liste)

1. **Audience** → **Créer une audience**
2. Remplir les détails:
   - Nom: "E-Tech Clients"
   - Adresse par défaut: contact@e-tech.bj
   - Ville: Cotonou
   - Pays: Benin

3. **Paramètres** → **Audience name and defaults**
   - Copier le **List ID** (ex: `abc123def4`)

---

## 3. Créer une API Key

1. **Compte** → **Extras** → **API keys**
2. **Créer une clé API**
3. Nommer: "E-Tech Website"
4. Copier la clé (ex: `xxxxxxxx-us1`)

---

## 4. Mettre à jour le code

Ouvrir `configs/mailchimp-integration.js`:

```javascript
const MAILCHIMP_CONFIG = {
    API_KEY: 'votre-clé-api-ici-us1',  // Remplacer
    LIST_ID: 'votre-list-id-ici',      // Remplacer
    DATACENTER: 'us1',              // Modifier selon votre clé
    TAGS: ['website', 'newsletter']
};
```

---

## 5. Intégrer dans le frontend

Le formulaire est déjà dans `index.html`. Pour activer Mailchimp:

1. Modifier `frontend/js/main.js`
2. Remplacer `subscribeNewsletter()` avec l'appel API

```javascript
async function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Appeler votre API backend
    const result = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    
    const data = await result.json();
    showNotification(data.message);
}
```

---

## 6. Créer une Campaign

1. **Campaigns** → **Create campaign**
2. **Regular campaign**
3. Remplir:
   - From name: "E-Tech"
   - Reply-to: contact@e-tech.bj
   - Subject: "Vos offres exclusives E-Tech"

4. **Design email** → Choisir un template
5. **Send** → Envoyer ou programmer

---

## 7. Automation (Optionnel)

**Automations** → **Customer journey**:
- Bienvenue nouveaux subscribers
- Abandoned cart
- Achat récent

---

## Checklist

| Étape | Status |
|------|--------|
| Compte créé | ⬜ |
| Audience configurée | ⬜ |
| API Key générée | ⬜ |
| Code mis à jour | ⬜ |
| Premier email envoyé | ⬜ |

---

## Statistiques

Surveiller dans **Audience** → **Stats:
- Taux d'ouverture (target: 25%+)
- Taux de clic (target: 3%+)
- Désabonnements (< 1%)

---

*Après configuration, les subscribers seront automatiquement ajoutés à Mailchimp!*