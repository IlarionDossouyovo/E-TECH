# 🚀 E-Tech - Guide d'Installation Locale

## Prérequis

```bash
# Node.js 18+
node --version  # Doit être >= 18.0.0

# Git
git --version
```

---

## Installation sur Votre Machine

### 1. Cloner le Projet

```bash
git clone https://github.com/IlarionDossouyovo/E-TECH.git
cd E-TECH
```

### 2. Installer les Dépendances Backend

```bash
cd backend
npm install
```

### 3. Configuration

```bash
# Copier le fichier .env
cp configs/env.template backend/.env

# Éditer avec vos API keys
nano backend/.env
```

**API Keys à configurer:**
- `ANTHROPIC_API_KEY` - Clé Anthropic Claude
- `STRIPE_SECRET_KEY` - Clé Stripe
- `GOOGLE_SHEETS_ID` - ID Google Sheets

### 4. Lancer le Backend

```bash
cd backend
npm start
```

Le serveur API sera sur **http://localhost:3000**

### 5. Lancer le Frontend (optionnel)

Ouvrir simplement `frontend/index.html` dans un navigateur, ou utiliser un serveur HTTP:

```bash
# Avec Python
cd frontend
python3 -m http.server 8080

# Ou avec Node.js
npx serve .
```

---

## Commandes de Développement

```bash
# Backend
cd backend
npm start        # Production
npm run dev     # Développement avec nodemon

# Vérifier que tout fonctionne
curl http://localhost:3000/api/health
```

---

## Structure des API

| Endpoint | Description |
|----------|-------------|
| `GET /api/health` | Health check |
| `GET /api/products` | Liste produits |
| `GET /api/products/:id` | Produit par ID |
| `GET /api/products/meta/categories` | Catégories |
| `GET /api/products/meta/brands` | Marques |
| `POST /api/orders` | Créer commande |
| `GET /api/orders` | Liste commandes |
| `GET /api/payments/methods` | Méthodes paiement |
| `POST /api/payments/intent` | Stripe payment intent |
| `POST /api/payments/mobile-money/init` | Mobile Money |

---

## Déploiement Production

### VPS (Contabo/DigitalOcean)

1. **Installer Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

2. **Installer PM2** (gestion processus)
```bash
sudo npm install -g pm2
```

3. **Déployer**
```bash
cd backend
pm2 start src/server.js --name e-tech-api
pm2 startup  # Pour redémarrage auto
```

4. **N8N** (Automation)
```bash
docker pull n8nio/n8n
docker run -d -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n
```

5. **SSL** (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d e-tech.bj
```

---

## Résumé des Commandes

```bash
# Clone
git clone https://github.com/IlarionDossouyovo/E-TECH.git
cd E-TECH

# Setup
cd backend
npm install
cp ../configs/env.template .env

# Lancer
npm start

# Tester
curl http://localhost:3000/api/health
curl http://localhost:3000/api/products
```

---

*Mis à jour: Juin 2025*