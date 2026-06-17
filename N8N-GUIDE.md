# Guide Complet N8N E-Tech

## 🚀 Résumé

Ce guide vous aide à configurer les 12 workflows E-Tech dans N8N.

**Techno:** Ollama (localhost:11434) + Email (SMTP)

---

## Étape 1: Credentials Email

1. Ouvrir **http://localhost:5678**
2. Cliquer **Settings** (engrenage en bas à gauche)
3. **Credentials** → **Add credential**
4. Chercher **Email Send (SMTP)** et cliquer
5. Remplir:
   ```
   Name: E-Tech Email
   Host: smtp.gmail.com
   Port: 587
   User: electronbusiness07@gmail.com
   Password: [votre mot de passe Gmail]
   From Email: electronbusiness07@gmail.com
   ```
6. **Save**

---

## Étape 2: Importer les Workflows

Pour chaque fichier JSON:

1. **Workflows** (menu gauche)
2. **Import from file** (bouton en haut à droite)
3. Choisir le fichier (ex: `analytics-ai.json`)
4. **Save**
5. Répéter pour les 12 fichiers

---

## Étape 3: Configurer Chaque Workflow

### 3.1 Analytics (analytics-ai.json)

1. Cliquer sur le workflow **E-Tech AI - Analytics**
2. Cliquer sur le node **Ollama AI** (carré gris)
3. Dans les paramètres:
   - **Body Parameters** → **prompt** → Cliquer sur l'engrenage → **Expression**
   - Entrer le prompt:
   ```
   {{"Tu es l'analyste E-Tech. Génère un rapport quotidien avec: 1) Ventes du jour 2) Top 3 produits 3) Alertes stock 4) Recommandations pour demain. Format: Markdown avec émojis."}}
   ```
4. **Save**

### 3.2 Configurer Email

1. Cliquer sur le node **Send Email**
2. Dans les paramètres:
   - **SMTP**: Sélectionner **E-Tech Email** (créé à l'étape 1)
   - **To Email**: `electronbusiness07@gmail.com`
3. **Save**

---

## Répéter pour Chaque Workflow

| Workflow | Prompt Clé |
|----------|------------|
| Analytics | "Tu es l'analyste E-Tech..." |
| Competitor | "Tu es l'agent veille concurrentielle..." |
| Content | "Tu es le rédacteur content E-Tech..." |
| Customer Service | "Tu es le support client E-Tech..." |
| Email Marketing | "Tu es le marketer E-Tech..." |
| Finance | "Tu es l'agent financier E-Tech..." |
| Inventory | "Tu es l'agent inventaire E-Tech..." |
| Marketing | "Tu es le marketer E-Tech..." |
| Master | "Tu es l'orchestrateur E-Tech..." |
| Product Sourcing | "Tu es l'agent sourcing E-Tech..." |
| Sales | "Tu es l'agent ventes E-Tech..." |
| Social Media | "Tu es le social media manager..." |

---

## Étape 4: Activer

1. Dans chaque workflow, cliquer sur le bouton **Activate** (switch en haut à droite)
2. Le cercle devient vert

---

## 📋 Checklist Final

- [ ] Credentials SMTP créés
- [ ] 12 workflows importés
- [ ] Prompts configurés dans chaque HTTP node
- [ ] Workflows activés

---

## 💡 Tips

**Pour tester:**
1. Cliquer sur le node **Trigger**
2. Cliquer **Execute Workflow** (bouton en haut)
3. Voir les logs en bas

**Pour voir les résultat:**
- Les emails arriveront dans electronbusiness07@gmail.com

---

*Créé: Juin 2026*