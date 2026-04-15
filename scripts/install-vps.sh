#!/bin/bash
# E-TECH - Script d'installation automatique
# VPS: Ubuntu 22.04

set -e

echo "=========================================="
echo "  E-TECH - Installation Automatique"
echo "=========================================="

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

print_step() {
    echo -e "${BLUE}[ETAPE]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[OK]${NC} $1"
}

# 1. Mise a jour du systeme
print_step "Mise a jour du systeme..."
apt update && apt upgrade -y
print_success "Systeme mis a jour"

# 2. Installation Docker
print_step "Installation de Docker..."
curl -fsSL https://get.docker.com | sh
usermod -aG docker $USER
print_success "Docker installe"

# 3. Installation Docker Compose
print_step "Installation Docker Compose..."
apt install docker-compose -y
print_success "Docker Compose installe"

# 4. Configuration du pare-feu
print_step "Configuration du pare-feu (UFW)..."
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
print_success "Pare-feu configure"

# 5. Installation de N8N
print_step "Installation de N8N..."
mkdir -p /opt/n8n
cd /opt/n8n

cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  n8n:
    image: n8nio/n8n
    container_name: n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=CHANGER_MOT_DE_PASSE
      - N8N_HOST=0.0.0.0
      - WEBHOOK_URL=https://votre-domaine.com
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
EOF

print_success "N8N pret a etre configure"

# 6. Installation de Nginx
print_step "Installation de Nginx..."
apt install nginx -y

# 7. Configuration SSL automatique
print_step "Installation de Certbot..."
apt install certbot python3-certbot-nginx -y

print_success "Installation terminee!"

echo ""
echo "=========================================="
echo "  ETAPES SUIVANTES"
echo "=========================================="
echo ""
echo "1. Redemarrer le serveur:"
echo "   sudo reboot"
echo ""
echo "2. Demarrer N8N:"
echo "   cd /opt/n8n && docker-compose up -d"
echo ""
echo "3. Configurer SSL:"
echo "   sudo certbot --nginx -d votre-domaine.com"
echo ""
echo "4. Importer les workflows N8N:"
echo "   - Aller sur http://votre-serveur:5678"
echo "   - Importer les fichiers JSON dans automation/"
echo ""
echo "5. Configurer les variables d'environnement"
echo "   dans configs/env.template"
echo ""
echo "=========================================="