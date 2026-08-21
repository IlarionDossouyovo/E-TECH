# E-Tech Global AI Platform - Documentation Complète

## 📋 Résumé du Projet

**E-Tech** est une plateforme e-commerce complète avec intelligence artificielle, développée pour le marché africain (Bénin).

### Caractéristiques Principales
- 🛒 E-commerce multi-domaines (Electronics, Gaming, Smart Home, etc.)
- 🤖 20 Agents IA intégrés
- 👑 Founder Center avec Voice AI
- 📊 CRM/ERP complet
- 🔧 Gestion Réparations GSM
- 🏭 Gestion Fournisseurs
- 📰 Blog par domaine

---

## 🚀 Installation Rapide

### Prérequis
- Node.js 18+
- Python 3.8+ (pour le frontend)
- Git

### Étapes

```bash
# 1. Cloner le projet
git clone https://github.com/IlarionDossouyovo/E-TECH.git
cd E-TECH

# 2. Backend
cd backend
npm install
copy ..\configs\env.template .env
# Éditer .env avec vos clés API
npm start

# 3. Frontend (autre terminal)
cd frontend
python -m http.server 8081
```

---

## 🌐 URLs

| Service | URL |
|---------|-----|
| Backend API | http://localhost:3001 |
| Frontend | http://localhost:8081 |
| Health | http://localhost:3001/api/health |

---

## 📡 API Endpoints

### AI
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/ai/health` | Vérifier les providers AI |
| POST | `/api/ai/chat` | Discuter avec l'IA |
| POST | `/api/ai/generate` | Générer du contenu |

### Agents (20 Agents)
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/agents` | Liste des agents |
| POST | `/api/agents/:id/run` | Exécuter un agent |

### Founder
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/founder/dashboard` | Dashboard |
| POST | `/api/founder/ai` | Founder AI |

### E-commerce
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Produits |
| GET | `/api/orders` | Commandes |
| GET | `/api/customers` | Clients |

### CRM/ERP
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/crm/customers` | Clients CRM |
| GET | `/api/erp/inventory` | Inventaire |
| GET | `/api/erp/orders` | Commandes |

---

## 🤖 Les 20 Agents IA

1. **CEO Agent** - Direction stratégique
2. **Founder AI** - Assistant personnel du fondateur
3. **Product Manager** - Gestion produits
4. **Supplier Agent** - Relations fournisseurs
5. **E-Commerce Agent** - Ventes en ligne
6. **GSM Agent** - Réparations téléphone
7. **Repair Agent** - Service réparation
8. **Electronics Agent** - Électronique
9. **Security Agent** - Sécurité
10. **Gaming Agent** - Gaming
11. **Smart Home Agent** - Domotique
12. **Construction Agent** - Construction
13. **Decoration Agent** - Décoration
14. **Marketing Agent** - Marketing
15. **Blog Agent** - Rédaction blog
16. **Customer Support** - Support client
17. **Analytics Agent** - Analyse données
18. **Finance Agent** - Finance
19. **Cybersecurity Agent** - Cybersécurité
20. **Translation Agent** - Traduction

---

## 🔧 Configuration

### Variables d'Environnement

```env
# API Keys
GOOGLE_API_KEY=votre_clé_google
GOOGLE_MODEL=gemini-2.0-flash-exp

# Ollama (optionnel)
OLLAMA_URL=http://localhost:11434

# Configuration
AI_DEFAULT_PROVIDER=google
PORT=3001
NODE_ENV=development
```

---

## 🐳 Docker

```bash
# Lancer avec Docker
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down
```

---

## 📁 Structure du Projet

```
E-TECH/
├── backend/
│   ├── src/
│   │   ├── lib/
│   │   │   └── ai-providers.js    # AI Manager
│   │   └── routes/
│   │       ├── ai.js               # AI endpoints
│   │       ├── agents.js           # 20 agents
│   │       ├── founder.js          # Founder
│   │       ├── crm.js             # CRM/ERP
│   │       ├── suppliers.js        # Fournisseurs
│   │       └── repairs.js          # Réparations
│   └── package.json
├── frontend/
│   ├── pages/
│   ├── css/
│   └── js/
├── configs/
│   └── env.template
├── docker-compose.yml
└── README.md
```

---

## ✅ Checklist de Déploiement

- [ ] Node.js installé
- [ ] Dependencies installées
- [ ] .env configuré
- [ ] API Key Google configuré
- [ ] Serveur démarré
- [ ] Frontend accessible

---

*Document généré automatiquement - 2026*
