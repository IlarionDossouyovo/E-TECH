# Guide de Déploiement E-Tech

## Options de Déploiement

### Option 1 : Static Hosting (Frontend Only)

Le frontend fonctionne en static (HTML/CSS/JS).

#### Vercel (Recommandé)
```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer
cd frontend
vercel

# Ou via GitHub
# Connecter le repo GitHub à Vercel
# Déploiement automatique à chaque push
```

#### Netlify
```bash
# Drag & drop du dossier frontend
# Ou via CLI
npm i -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages
```bash
# Créer un dossier docs (pour GitHub Pages)
cp -r frontend/* docs/

# Activer GitHub Pages dans Settings
```

---

### Option 2 : VPS (Backend + Frontend)

#### Prérequis
- VPS avec Node.js 18+
- Nginx
- Certificat SSL (Let's Encrypt)

#### Installation
```bash
# 1. Cloner le projet
git clone https://github.com/IlarionDossouyovo/E-TECH.git
cd E-TECH

# 2. Installer les dépendances
cd backend
npm install

# 3. Configurer .env
cp ../configs/env.template .env
nano .env  # Remplir les clés API

# 4. Configurer PM2
pm2 start src/server.js --name e-tech-api

# 5. Configurer Nginx
sudo nano /etc/nginx/sites-available/e-tech
```

Configuration Nginx :
```nginx
server {
    listen 80;
    server_name e-tech.bj www.e-tech.bj;

    location / {
        root /var/www/E-TECH/frontend;
        index index.html;
    }

    location /api {
        proxy_pass http://localhost:3000;
    }
}
```

```bash
# 6. Activer SSL
sudo certbot --nginx -d e-tech.bj -d www.e-tech.bj
```

---

### Option 3 : Docker

```bash
# Créer Dockerfile
nano Dockerfile
```

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY backend/ .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Builder et runner
docker build -t e-tech-api .
docker run -p 3000:3000 -e .env e-tech-api
```

---

## Checklist Post-Déploiement

| Tâche | Status |
|------|--------|
| SSL/https activé | ⬜ |
| Paiements testés | ⬜ |
| Emails transactionnels | ⬜ |
| Analytics configuré | ⬜ |
| Robots.txt | ⬜ |
| Sitemap.xml | ⬜ |

---

## Monitoring

- **Uptime** : UptimeRobot ou Pingdom
- **Logs** : `pm2 logs`
- **Erreurs** : Sentry.io

---

## Dépannage

### Le site ne charge pas
```bash
# Vérifier Nginx
sudo nginx -t
sudo systemctl restart nginx

# Vérifier les permissions
sudo chown -R www-data:www-data /var/www/E-TECH/frontend
```

### API ne répond pas
```bash
# Vérifier PM2
pm2 status
pm2 logs
```

### Paiements ne fonctionnent pas
- Vérifier les clés API dans .env
- Vérifier les webhooks Stripe

---

**E-Tech est prêt ! 🚀**