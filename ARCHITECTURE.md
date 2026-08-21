# E-Tech Global AI Platform - Architecture

## Vue d'Ensemble

E-Tech est une plateforme e-commerce complète avec:
- **Frontend**: HTML/CSS/JS moderne
- **Backend**: Node.js/Express API
- **AI**: Google Gemini + Ollama (Native, pas N8N)
- **Database**: PostgreSQL (préparé)
- **Cache**: Redis (préparé)

## Architecture du Système

```
Frontend (HTML/CSS/JS)
        ↓
API Gateway (Express)
        ↓
┌─────────────────────────────────────┐
│         AUTHENTICATION              │
│    JWT + Session + MFA              │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│         AI ORCHESTRATOR             │
│  ┌─────────────────────────────┐   │
│  │    AI Provider Manager      │   │
│  │  ┌─────────┐  ┌─────────┐  │   │
│  │  │ Google  │  │ Ollama  │  │   │
│  │  │ Gemini  │  │ Local   │  │   │
│  │  └─────────┘  └─────────┘  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│        AGENT ROUTER                │
│  CEO, Founder, GSM, Repair, etc.   │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│        TOOLS & APIS                │
│  Products, Orders, CRM, ERP        │
└─────────────────────────────────────┘
```

## API Endpoints

### AI
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/ai/health` | Health check |
| POST | `/api/ai/chat` | Chat |
| POST | `/api/ai/generate` | Generate |

### Agents
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/agents` | List agents |
| POST | `/api/agents/:id/run` | Run agent |

### E-Commerce
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Products |
| GET | `/api/orders` | Orders |
| GET | `/api/crm/customers` | CRM |

## Security

- JWT Authentication
- MFA support
- Rate limiting
- Audit logging
- RBAC

## Développement

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
# Servir avec python ou npx serve
```
