# E-Tech API Documentation

## Base URL
```
http://localhost:3001/api
```

---

## Health Check

### GET /api/health
Vérifie que le serveur fonctionne.

**Réponse:**
```json
{
  "status": "OK",
  "service": "E-Tech API",
  "timestamp": "2026-08-21T12:00:00Z"
}
```

---

## AI Endpoints

### GET /api/ai/health
Vérifie les providers AI disponibles.

**Réponse:**
```json
{
  "google": "available",
  "ollama": "unavailable",
  "default": "google"
}
```

### POST /api/ai/chat
Envoyer un message à l'IA.

**Body:**
```json
{
  "message": "Bonjour, comment ça va?",
  "provider": "google"
}
```

**Réponse:**
```json
{
  "response": "Bonjour! Je vais bien...",
  "provider": "google",
  "model": "gemini-2.0-flash-exp"
}
```

---

## Agents Endpoints

### GET /api/agents
Liste de tous les agents disponibles.

**Réponse:**
```json
{
  "total": 20,
  "agents": [
    { "id": 1, "name": "CEO Agent", "status": "active", "description": "Direction stratégique" },
    { "id": 2, "name": "Founder AI", "status": "active", "description": "Assistant fondateur" }
  ]
}
```

### POST /api/agents/:id/run
Exécuter un agent.

**Body:**
```json
{
  "task": "Analyse les ventes du mois",
  "params": {}
}
```

---

## Founder Endpoints

### GET /api/founder/dashboard
Dashboard du fondateur.

**Réponse:**
```json
{
  "revenue": 1500000,
  "orders": 45,
  "customers": 120,
  "pendingApprovals": 3
}
```

### POST /api/founder/ai
Chat avec le Founder AI.

**Body:**
```json
{
  "message": "Donne-moi le résumé des ventes"
}
```

---

## Products Endpoints

### GET /api/products
Liste des produits.

**Réponse:**
```json
{
  "total": 50,
  "products": [
    { "id": 1, "name": "iPhone 16 Pro", "price": 850000 }
  ]
}
```

---

## Orders Endpoints

### GET /api/orders
Liste des commandes.

### POST /api/orders
Créer une commande.

**Body:**
```json
{
  "customerId": 1,
  "items": [{ "productId": 1, "quantity": 1 }],
  "total": 850000
}
```

---

## CRM/ERP Endpoints

### GET /api/crm/customers
Liste des clients.

### GET /api/erp/inventory
Inventaire produits.

### GET /api/erp/dashboard
Dashboard ERP.

---

## Suppliers Endpoints

### GET /api/suppliers
Liste des fournisseurs.

### POST /api/suppliers
Ajouter un fournisseur.

---

## Repairs Endpoints

### GET /api/repairs
Liste des réparations.

### POST /api/repairs
Créer une réparation.

### GET /api/repairs/diagnostic/:brand
Diagnostic pour une marque.

---

*Documentation API - E-Tech 2026*
