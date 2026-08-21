# E-TECH GLOBAL - GUIDE COMPLET

## 🚀 LANCEMENT RAPIDE

### Option 1: Script Automatique
```powershell
# Dans le dossier E-TECH-main
.\scripts\launch.bat
```

### Option 2: Manuel

**Terminal 1 - Backend:**
```powershell
cd backend
npm install
copy ..\configs\env.template .env
notepad .env
npm start
```

**Terminal 2 - Frontend:**
```powershell
cd frontend
python -m http.server 8081
```

---

## 🌐 URLS

| Service | URL |
|---------|-----|
| Backend API | http://localhost:3001 |
| Frontend | http://localhost:8081 |
| Health | http://localhost:3001/api/health |

---

## 📱 PAGES DISPONIBLES

### Pages Principales
- `/index.html` - Accueil
- `/dashboard.html` - Dashboard
- `/agents.html` - AI Agents Center
- `/founder-center.html` - Founder Center

### Pages TV
- `/tv-home-entertainment.html` - Catalogue TV
- `/tv-repair.html` - Réparation TV
- `/tv-accessories.html` - Accessoires
- `/suppliers-tv.html` - Fournisseurs
- `/blog-tv.html` - Blog TV

### Blogs par Marque
- `/blog-tv-samsung.html`
- `/blog-tv-lg.html`
- `/blog-tv-sony.html`
- `/blog-tv-tcl.html`
- `/blog-tv-hisense.html`

### Pages E-Commerce
- `/smartphones.html`
- `/computers.html`
- `/gaming.html`
- `/smart-home.html`
- `/security.html`

---

## 🤖 AGENTS IA (24)

1. CEO Agent
2. Founder AI
3. Product Manager
4. Supplier Agent
5. E-Commerce Agent
6. GSM Agent
7. Repair Agent
8. Electronics Agent
9. Security Agent
10. Gaming Agent
11. Smart Home Agent
12. Construction Agent
13. Decoration Agent
14. Marketing Agent
15. Blog Agent
16. Customer Support
17. Analytics Agent
18. Finance Agent
19. Cybersecurity Agent
20. Translation Agent
21. Quality Control
22. **TV Specialist** (NOUVEAU)
23. **Product Data AI** (NOUVEAU)
24. **Affiliate Agent** (NOUVEAU)

---

## 📡 API ENDPOINTS

| Endpoint | Description |
|----------|-------------|
| `/api/ai/chat` | Chat AI |
| `/api/agents` | Liste agents |
| `/api/founder/dashboard` | Dashboard Founder |
| `/api/products` | Produits |
| `/api/orders` | Commandes |
| `/api/customers` | Clients |
| `/api/tv-suppliers` | Fournisseurs TV |
| `/api/voice/command` | Commande vocale |

---

## 🔧 CONFIGURATION .ENV

```env
GOOGLE_API_KEY=votre_cle
GOOGLE_MODEL=gemini-2.0-flash-exp
OLLAMA_URL=http://localhost:11434
AI_DEFAULT_PROVIDER=google
PORT=3001
```

---

## ⬇️ MISE A JOUR

```powershell
# Via Git
cd E-TECH-main
git pull origin main
```

---

## 📊 STATISTIQUES

- Pages: 45
- Routes API: 12
- Agents IA: 24
- Documentation: 10+ fichiers

---

*E-Tech Global - 2026*
