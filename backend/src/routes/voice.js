/**
 * Voice AI Routes
 * E-Tech Voice Assistant
 */

const express = require('express');
const router = express.Router();

// Voice commands registry
const voiceCommands = {
    'analyse vente': { action: 'analytics', params: { type: 'sales' } },
    'analyse mes ventes': { action: 'analytics', params: { type: 'sales' } },
    'rapport': { action: 'report', params: {} },
    'prépare un rapport': { action: 'report', params: {} },
    'commandes': { action: 'orders', params: {} },
    'voir les commandes': { action: 'orders', params: {} },
    'produits': { action: 'products', params: {} },
    'voir les produits': { action: 'products', params: {} },
    'clients': { action: 'customers', params: {} },
    'fournisseurs': { action: 'suppliers', params: {} },
    'stocks': { action: 'inventory', params: {} },
    'revenus': { action: 'revenue', params: {} },
    'revenu': { action: 'revenue', params: {} },
    'bénéfice': { action: 'profit', params: {} },
    'ai': { action: 'ai_status', params: {} },
    'agents': { action: 'agents', params: {} },
    'système': { action: 'system', params: {} },
    'santé': { action: 'health', params: {} },
    'aide': { action: 'help', params: {} }
};

// Process voice command
router.post('/command', async (req, res) => {
    try {
        const { command, audio } = req.body;
        
        if (!command) {
            return res.status(400).json({ error: 'Command required' });
        }
        
        const commandLower = command.toLowerCase();
        let matchedCommand = null;
        let confidence = 0;
        
        for (const [key, value] of Object.entries(voiceCommands)) {
            if (commandLower.includes(key)) {
                matchedCommand = value;
                confidence = key.length / commandLower.length;
                break;
            }
        }
        
        if (!matchedCommand) {
            return res.json({
                success: false,
                message: 'Commande non reconnue. Dites "aide" pour voir les commandes disponibles.',
                suggestions: Object.keys(voiceCommands).slice(0, 5)
            });
        }
        
        // Process command based on action
        let result = {};
        
        switch (matchedCommand.action) {
            case 'analytics':
                result = {
                    type: 'Rapport de ventes',
                    data: { total: 1500000, orders: 45, growth: '+12%' }
                };
                break;
            case 'orders':
                result = { type: 'Commandes', data: { pending: 5, completed: 40 } };
                break;
            case 'products':
                result = { type: 'Produits', data: { total: 156, low_stock: 3 } };
                break;
            case 'revenue':
                result = { type: 'Revenus', data: { today: 150000, month: 4500000 } };
                break;
            case 'health':
                result = { type: 'Santé système', data: { status: 'OK', uptime: '99.9%' } };
                break;
            case 'help':
                result = {
                    type: 'Aide',
                    commands: Object.keys(voiceCommands)
                };
                break;
            default:
                result = { message: 'Commande exécutée' };
        }
        
        res.json({
            success: true,
            command: command,
            action: matchedCommand.action,
            confidence: confidence,
            result: result
        });
        
    } catch (error) {
        console.error('Voice command error:', error);
        res.status(500).json({ error: 'Voice processing failed' });
    }
});

// Get available commands
router.get('/commands', (req, res) => {
    res.json({
        total: Object.keys(voiceCommands).length,
        commands: Object.keys(voiceCommands)
    });
});

// Text-to-Speech (mock)
router.post('/speak', (req, res) => {
    const { text } = req.body;
    
    if (!text) {
        return res.status(400).json({ error: 'Text required' });
    }
    
    res.json({
        success: true,
        text: text,
        audio: null, // In production, would return audio URL
        message: 'Audio generation not implemented yet'
    });
});

module.exports = router;
