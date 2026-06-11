# E-Tech N8N Workflows

## Installation

1. **Installer N8N**
```bash
# Via Docker
docker run -d --name n8n -p 5678:5680 -v n8n_data:/home/node/.n8n n8nio/n8n

# Ou via npm
npm install -g n8n
n8n start
```

2. **Importer les workflows**
- Ouvrir N8N (http://localhost:5678)
- Aller dans Settings → Import Workflow
- Importer chaque fichier JSON

---

## Workflows Inclus

### 1. order-notification.json
**Déclencheur:** Webhook POST `/webhook/order-new`

**Fonction:** 
- Reçoit les nouvelles commandes
- Envoie email de confirmation au client
- Notification Slack #orders
- Sauvegarde dans Google Sheets

**Payload:**
```json
{
  "orderId": "ORD-001",
  "customerEmail": "client@email.com",
  "total": 150.00,
  "items": [...]
}
```

---

### 2. chatbot-support.json
**Déclencheur:** Webhook POST `/webhook/chatbot`

**Fonction:**
- Chatbot AI avec Claude
- Support client automatisé
- Répond en français

**Payload:**
```json
{
  "message": "Bonjour, j'ai une question"
}
```

**Réponse:**
```json
{
  "reply": "Bonjour! Comment puis-je vous aider?",
  "type": "ai"
}
```

---

### 3. inventory-sync.json
**Déclencheur:** Toutes les 6 heures

**Fonction:**
- Sync produits depuis Google Sheets
- Met à jour la base de données
- Notification Slack #inventory

---

### 4. newsletter-weekly.json
**Déclencheur:** Vendredi 9h00

**Fonction:**
- Envoie newsletter hebdomadaire
- Inclut nouveaux produits
- Promo de la semaine

---

## Configuration Requise

### Variables d'environnement N8N
```bash
# .env
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_SERVICE_ACCOUNT_JSON={...}
SLACK_TOKEN=xoxb-...
MAILCHIMP_API_KEY=...
```

### Google Sheets
Créer un Sheet avec onglets:
- **Products**: id, name, price, stock, category
- **Orders**: date, customer, items, total, status
- **Subscribers**: email, date_joined

---

## Webhooks à Configurer

| Endpoint | Usage |
|----------|-------|
| `/webhook/order-new` | Commandes |
| `/webhook/chatbot` | Support AI |
| `/webhook/contact` | Formulaire contact |

---

## Monitoring

- **Logs:** N8N Dashboard → Executions
- **Alertes:** Slack #n8n-alerts
- **Health:** GET `/webhook/health`