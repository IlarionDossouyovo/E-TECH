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

# 5. Configuration des variables d'environnement AI
print_step "Configuration AI..."
mkdir -p /opt/etech

cat > /opt/etech/.env << 'EOF'
# E-Tech AI Configuration
GOOGLE_API_KEY=your_google_api_key
GOOGLE_MODEL=gemini-2.0-flash-exp
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=llama3.1:8b
AI_DEFAULT_PROVIDER=google
AI_FALLBACK_ENABLED=true
EOF

print_success "Configuration AI creee"

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
echo "2. Configurer les variables AI:"
echo "   nano /opt/etech/.env"
echo "   # Ajouter votre GOOGLE_API_KEY"
echo ""
echo "3. Configurer SSL:"
echo "   sudo certbot --nginx -d votre-domaine.com"
echo ""
echo "4. Les agents IA sont prets dans le backend"
echo "   - API: http://localhost:3001/api/ai"
echo "   - Agents: http://localhost:3001/api/agents"
echo ""
echo "5. Configurer les variables d'environnement"
echo "   dans configs/env.template"
echo ""
echo "=========================================="