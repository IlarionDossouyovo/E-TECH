#!/bin/bash
# E-Tech - Script d'installation rapide

set -e

echo "🚀 Installation d'E-Tech..."

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 1. Vérifier Node.js
echo -e "${YELLOW}1/5 Vérification de Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo "❌ Node.js non installé!"
    echo "   Installez Node.js depuis: https://nodejs.org"
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node --version)${NC}"

# 2. Cloner ou mettre à jour
echo -e "${YELLOW}2/5 Préparation du projet...${NC}"
if [ -d ".git" ]; then
    echo "   Projet déjà présent, mise à jour..."
    git pull origin main
else
    echo "   Clonez d'abord: git clone https://github.com/IlarionDossouyovo/E-TECH.git"
fi

# 3. Installer dépendances
echo -e "${YELLOW}3/5 Installation des dépendances...${NC}"
cd backend
npm install
echo -e "${GREEN}✓ Dépendances installées${NC}"

# 4. Configuration
echo -e "${YELLOW}4/5 Configuration...${NC}"
if [ ! -f .env ]; then
    cp ../configs/env.template .env
    echo "   ✓ Fichier .env créé"
    echo ""
    echo "⚠️  Configurez vos API keys dans: backend/.env"
    echo "   - ANTHROPIC_API_KEY"
    echo "   - STRIPE_SECRET_KEY"
    echo "   - GOOGLE_SHEETS_ID"
fi

# 5. Lancer
echo -e "${YELLOW}5/5 Lancement du serveur...${NC}"
npm start &
sleep 3

echo ""
echo -e "${GREEN}✅ E-Tech est en ligne!${NC}"
echo ""
echo "   API:        http://localhost:3000"
echo "   Health:     http://localhost:3000/api/health"
echo "   Produits:   http://localhost:3000/api/products"
echo ""
echo "   Pour arrêter: pkill -f 'node src/server.js'"
echo ""
echo "   Documentation: Voir SETUP.md"