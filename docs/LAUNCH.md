# 🚀 GUIDE DE LANCEMENT E-TECH

## Mon Recommendation: Etapes dans l'ordre

---

## ETAPE 1: Acheter le Domaine (Maintenant)

**Action:** Acheter `e-tech.bj` ou `.com`

**Où:**
- Namecheap (~$12/an)
- GoDaddy
-OVH

**Prix:** ~10-15€/an

---

## ETAPE 2: Commander le VPS (Aujourd'hui)

**Recommandation:** Contabo (meilleur rapport qualité/prix)

| VPS | Prix | RAM | Stockage |
|-----|------|-----|----------|
| VPS S | 9,99€/mois | 8GB | 100GB SSD |
| VPS M | 14,99€/mois | 16GB | 200GB SSD |

**Lien:** contabo.com

---

## ETAPE 3: Installer le Serveur (Demain)

### Option A: Automatique (Recommandée)

```bash
# Copier le script sur le VPS
scp scripts/install-vps.sh root@IP_DU_VPS:/tmp/

# Executer
ssh root@IP_DU_VPS
bash /tmp/install-vps.sh
```

### Option B: Manuelle

```bash
# 1. Connecter au VPS en SSH
ssh root@IP_VPS

# 2. Mettre a jour
apt update && apt upgrade -y

# 3. Installer Docker
curl -fsSL https://get.docker.com | sh

# 4. Lancer N8N
docker run -d --name n8n -p 5678:5678 n8nio/n8n
```

---

## ETAPE 4: Configurer N8N

1. **Acceder:** `http://VOTRE_IP:5678`
2. **Creer compte admin**
3. **Importer workflows:**
   - Aller dans Settings > Import
   - Importer les 12 fichiers JSON dans `automation/n8n-workflows/`

---

## ETAPE 5: Configurer Paiements

### Stripe (Le plus important)

1. **Creer compte:** stripe.com
2. **Obtenir les clés:**
   - Publishable Key (pk_...)
   - Secret Key (sk_...)
3. **Les ajouter dans:**
   - Fichier `configs/env.template`
   - Backend `backend/src/routes/payments.js`

### PayPal

1. **Developer:** developer.paypal.com
2. **Creer App**
3. **Recuperer Client ID + Secret**

---

## ETAPE 6: Deployer le Site

### Option A: Simple (Netlify/Vercel - Gratuit)

```bash
# 1. Mettre le site en ligne
# 2. Connecter domaine
# 3. SSL automatique
```

### Option B: VPS (Plus de controle)

```bash
# 1. Uploader les fichiers
scp -r frontend/* root@IP_VPS:/var/www/html/

# 2. Configurer Nginx
nano /etc/nginx/sites-available/e-tech

# 3. SSL
certbot --nginx -d e-tech.bj
```

---

## ETAPE 7: Tester

| Test | Action |
|------|--------|
| Panier | Ajouter produit, verifier prix |
| Checkout | Simuler commande |
| Paiement | Tester avec Stripe test mode |
| Mobile | Verifier responsive |
| Performance | Lighthouse test |

---

## ⏱️ MON CALENDRIER RECOMMANDE

| Jour | Action |
|------|--------|
| Jour 1 | Acheter domaine + VPS |
| Jour 2 | Installer serveur + N8N |
| Jour 3 | Configurer Stripe + API keys |
| Jour 4 | Importer workflows + tester |
| Jour 5 | Deployer site + test final |
| Jour 6 | Lancement! |

---

## 💰 BUDGET TOTAL

| Poste | Prix |
|-------|------|
| Domaine | 15€/an |
| VPS Contabo | 10€/mois |
| Stripe (gratuit au debut) | 0€ |
| **Total annee 1** | ~135€ |

---

## 🎯 CE QUE JE VOUS CONSEILLE DE FAIRE

1. **Acheter domaine** aujourd'hui
2. **Commander VPS** demain
3. **Me dire quand pret** - Je prepare script complet
4. **On lance!**

---

*Quel est votre budget et disponibilite?*