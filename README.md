# E-Tech � молнии

**Boutique E-Commerce Premium d'Électronique Internationale au Bénin**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Presentation

E-Tech est une plateforme e-commerce premium specialisee dans la vente d'electronique au Benin et en Afrique de l'Ouest. Nous proposons :

- 100% produits authentiques certifies
- Garantie internationale 1-3 ans
- Livraison rapide (2-3 jours Benin)
- Support client 24/7 (IA + humain)

## Stack Technique

### Frontend
- **HTML/CSS/JS** - Custom (pas Wix)
- Design responsive mobile-first
- Palette : Bleu Nuit (#0A1929) + Or Champagne (#D4AF37)

### Backend
- **Node.js/Express** - API REST
- Base de donnees : Google Sheets (Phase 1-2)

### Automation
- **N8N** - 12 agents IA automatises
- **Anthropic Claude** - Intelligence artificielle

## Structure du Projet

```
E-TECH/
├── frontend/              # Pages HTML
│   ├── index.html        # Page d'accueil
│   ├── products.html   # Catalogue produits
│   ├── cart.html      # Panier d'achat
│   ├── checkout.html  # Page de commande
│   ├── contact.html  # Page de contact
│   ├── css/         # Styles CSS
│   └── js/          # JavaScript
├── backend/            # API Node.js
│   └── src/
│       ├── server.js   # Serveur principal
│       └── routes/   # Routes API
├── automation/        # Workflows N8N
│   └── n8n-workflows/
│       ├── master-ai-orchestrator.json
│       ├── product-sourcing-ai.json
│       ├── customer-service-ai.json
│       ├── sales-ai.json
│       ├── marketing-ai.json
│       ├── content-ai.json
│       ├── social-media-ai.json
│       ├── analytics-ai.json
│       ├── inventory-ai.json
│       ├── finance-ai.json
│       ├── email-marketing-ai.json
│       └── competitor-intelligence-ai.json
├── configs/           # Configuration
└── data/             # Modeles donnees
```

## Installation

### 1. Cloner le projet
```bash
git clone https://github.com/IlarionDossouyovo/E-TECH.git
cd E-TECH
```

### 2. Frontend (HTML statique)
```bash
#Ouvrir frontend/index.html dans un navigateur
#ou deployer sur un serveur HTTP
```

### 3. Backend (Optionnel)
```bash
cd backend
npm install
npm start
# API disponible sur http://localhost:3000
```

### 4. N8N Automation
```bash
# Installer N8N sur VPS (Contabo)
docker pull n8nio/n8n
docker run -d -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n

# Importer les 12 workflows JSON dans N8N
```

### 5. Configuration
```bash
cp configs/env.template .env
# Remplir lesAPI keys
```

## Fonctionnalites

### Pages Frontend
- [x] Page d'accueil premium
- [x] Catalogue produits avec filtres
- [x] Panier d'achat (localStorage)
- [x] Checkout
- [x] Contact

### API Backend
- [x] Products CRUD
- [x] Orders管理
- [x] Customers authentication
- [x] Payments (Stripe, Mobile Money)

### Automation N8N (12 Agents)
1. **Master AI Orchestrator** - Rapports quotidiens
2. **Product Sourcing AI** - Recherche produits (6h)
3. **Marketing AI** - Reseaux sociaux (3x/jour)
4. **Sales AI** - Paniers abandonnes (30 min)
5. **Customer Service AI** - Support WhatsApp 24/7
6. **Content AI** - Articles blog (2/semaine)
7. **Social Media AI** - Engagement
8. **Analytics AI** - Analyse KPIs
9. **Inventory AI** - Suivi stock
10. **Finance AI** - Rapports financiers
11. **Email Marketing AI** - Campagnes email
12. **Competitor Intelligence AI** - Veille concurrnts

## Categories de Produits

1. **Smartphones** - iPhone, Samsung, Pixel, Xiaomi
2. **Ordinateurs** - MacBook, Dell, HP
3. **Audio** - AirPods, Galaxy Buds, Casques
4. **Accessoires** - Coques, Chargeurs, cables
5. **Objets Connectes** - Montres, Fitbit
6. **Gaming** - Consoles, PC

## Configuration Requise

### Variables d'environnement
```
ANTHROPIC_API_KEY=sk-ant-...
STRIPE_SECRET_KEY=sk_live_...
GOOGLE_SHEETS_ID=...
N8N_URL=https://...
```

## Licence

MIT License - Copyright 2025 E-Tech

## Contact

- Email: support@e-tech.bj
- WhatsApp: +229 XX XX XX XX
- Site: e-tech.bj