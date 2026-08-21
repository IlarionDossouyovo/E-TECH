/**
 * Repairs Routes
 * E-Tech Global AI Platform - GSM Repair Management
 */

const express = require('express');
const router = express.Router();

// In-memory repairs database
const repairs = [
    {
        id: 1,
        customerName: 'Jean Dupont',
        phone: '+229 90 00 00 00',
        device: 'iPhone 14 Pro',
        brand: 'Apple',
        issue: 'Écran cassé',
        status: 'completed',
        cost: 45000,
        technician: 'Technicien A',
        createdAt: '2026-08-15T10:00:00Z',
        completedAt: '2026-08-16T14:00:00Z'
    },
    {
        id: 2,
        customerName: 'Marie Kouassi',
        phone: '+229 91 00 00 00',
        device: 'Samsung Galaxy S23',
        brand: 'Samsung',
        issue: 'Batterie',
        status: 'in_progress',
        cost: 25000,
        technician: 'Technicien B',
        createdAt: '2026-08-20T09:00:00Z',
        completedAt: null
    }
];

// Diagnostic templates
const diagnosticTemplates = {
    iphone: {
        common_issues: [
            { issue: 'Écran noir', probability: 30, solutions: ['Remplacer écran', 'Vérifier nappe'] },
            { issue: 'Ne charge pas', probability: 25, solutions: ['Nettoyer connecteur', 'Remplacer batterie'] },
            { issue: 'Wifi ne fonctionne pas', probability: 20, solutions: ['Réinitialiser', 'Remplacer antenne'] },
            { issue: 'Problème audio', probability: 15, solutions: ['Vérifier haut-parleur', 'Nettoyer'] },
            { issue: 'Caméra ne marche pas', probability: 10, solutions: ['Remplacer caméra', 'Vérifier nappe'] }
        ]
    },
    samsung: {
        common_issues: [
            { issue: 'Écran noir', probability: 35, solutions: ['Remplacer écran', 'Vérifier connecteur'] },
            { issue: 'Ne charge pas', probability: 30, solutions: ['Nettoyer port', 'Remplacer batterie'] },
            { issue: 'Eau', probability: 20, solutions: ['Séchage', 'Nettoyage professionnel'] },
            { issue: 'Bluetooth', probability: 15, solutions: ['Réinitialiser', 'Remplacer antenne'] }
        ]
    }
};

// Get all repairs
router.get('/', (req, res) => {
    const { status, brand } = req.query;
    
    let filtered = [...repairs];
    
    if (status) {
        filtered = filtered.filter(r => r.status === status);
    }
    
    if (brand) {
        filtered = filtered.filter(r => r.brand.toLowerCase() === brand.toLowerCase());
    }
    
    res.json({
        total: filtered.length,
        repairs: filtered
    });
});

// Get repair by ID
router.get('/:id', (req, res) => {
    const repair = repairs.find(r => r.id === parseInt(req.params.id));
    
    if (!repair) {
        return res.status(404).json({ error: 'Repair not found' });
    }
    
    res.json(repair);
});

// Create new repair
router.post('/', (req, res) => {
    const { customerName, phone, device, brand, issue, estimatedCost } = req.body;
    
    if (!customerName || !device || !issue) {
        return res.status(400).json({ error: 'Customer name, device, and issue are required' });
    }
    
    const newRepair = {
        id: repairs.length + 1,
        customerName,
        phone: phone || '',
        device,
        brand: brand || 'Unknown',
        issue,
        status: 'pending',
        cost: estimatedCost || 0,
        technician: null,
        createdAt: new Date().toISOString(),
        completedAt: null
    };
    
    repairs.push(newRepair);
    
    res.status(201).json({
        success: true,
        repair: newRepair
    });
});

// Update repair status
router.patch('/:id', (req, res) => {
    const repair = repairs.find(r => r.id === parseInt(req.params.id));
    
    if (!repair) {
        return res.status(404).json({ error: 'Repair not found' });
    }
    
    const { status, cost, technician, notes } = req.body;
    
    if (status) {
        repair.status = status;
        if (status === 'completed') {
            repair.completedAt = new Date().toISOString();
        }
    }
    
    if (cost !== undefined) repair.cost = cost;
    if (technician) repair.technician = technician;
    if (notes) repair.notes = notes;
    
    res.json({
        success: true,
        repair
    });
});

// Get diagnostic template
router.get('/diagnostic/:brand', (req, res) => {
    const { brand } = req.params;
    const template = diagnosticTemplates[brand.toLowerCase()];
    
    if (!template) {
        return res.json({
            brand,
            common_issues: [
                { issue: 'Problème générique', probability: 50, solutions: ['Diagnostic requis'] }
            ]
        });
    }
    
    res.json(template);
});

module.exports = router;
