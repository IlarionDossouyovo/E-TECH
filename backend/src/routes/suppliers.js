/**
 * Suppliers Routes
 * E-Tech Global AI Platform
 */

const express = require('express');
const router = express.Router();

// In-memory supplier database
const suppliers = [
    {
        id: 1,
        name: 'Shenzhen Electronics Co.',
        country: 'Chine',
        website: 'https://shenzhen-elec.com',
        email: 'contact@shenzhen-elec.com',
        phone: '+86 755 8888 8888',
        products: ['Smartphones', 'Tablettes', 'Accessoires'],
        moq: 50,
        leadTime: '15-20 jours',
        certifications: ['CE', 'RoHS', 'ISO9001'],
        rating: 4.5,
        status: 'active',
        verified: true
    },
    {
        id: 2,
        name: 'TechParts Europe',
        country: 'Allemagne',
        website: 'https://techparts-eu.de',
        email: 'sales@techparts-eu.de',
        phone: '+49 30 1234 5678',
        products: ['Composants', 'Circuits', 'Outils'],
        moq: 100,
        leadTime: '7-10 jours',
        certifications: ['CE', 'TUV'],
        rating: 4.8,
        status: 'active',
        verified: true
    },
    {
        id: 3,
        name: 'Gulf Trading LLC',
        country: 'EAU',
        website: 'https://gulftrading.ae',
        email: 'info@gulftrading.ae',
        phone: '+971 4 888 8888',
        products: ['Gaming', 'Smart Home', 'Security'],
        moq: 25,
        leadTime: '10-15 jours',
        certifications: ['CE'],
        rating: 4.2,
        status: 'active',
        verified: false
    }
];

// Get all suppliers
router.get('/', (req, res) => {
    const { country, category, verified } = req.query;
    
    let filtered = [...suppliers];
    
    if (country) {
        filtered = filtered.filter(s => s.country.toLowerCase().includes(country.toLowerCase()));
    }
    
    if (category) {
        filtered = filtered.filter(s => 
            s.products.some(p => p.toLowerCase().includes(category.toLowerCase()))
        );
    }
    
    if (verified === 'true') {
        filtered = filtered.filter(s => s.verified);
    }
    
    res.json({
        total: filtered.length,
        suppliers: filtered
    });
});

// Get supplier by ID
router.get('/:id', (req, res) => {
    const supplier = suppliers.find(s => s.id === parseInt(req.params.id));
    
    if (!supplier) {
        return res.status(404).json({ error: 'Supplier not found' });
    }
    
    res.json(supplier);
});

// Add new supplier
router.post('/', (req, res) => {
    const { name, country, website, email, phone, products, moq, leadTime } = req.body;
    
    if (!name || !country) {
        return res.status(400).json({ error: 'Name and country are required' });
    }
    
    const newSupplier = {
        id: suppliers.length + 1,
        name,
        country,
        website: website || '',
        email: email || '',
        phone: phone || '',
        products: products || [],
        moq: moq || 0,
        leadTime: leadTime || 'N/A',
        certifications: [],
        rating: 0,
        status: 'pending',
        verified: false
    };
    
    suppliers.push(newSupplier);
    
    res.status(201).json({
        success: true,
        supplier: newSupplier
    });
});

// Update supplier
router.patch('/:id', (req, res) => {
    const supplier = suppliers.find(s => s.id === parseInt(req.params.id));
    
    if (!supplier) {
        return res.status(404).json({ error: 'Supplier not found' });
    }
    
    Object.assign(supplier, req.body);
    
    res.json({
        success: true,
        supplier
    });
});

// Verify supplier (set verified status)
router.post('/:id/verify', (req, res) => {
    const supplier = suppliers.find(s => s.id === parseInt(req.params.id));
    
    if (!supplier) {
        return res.status(404).json({ error: 'Supplier not found' });
    }
    
    const { verified, certifications } = req.body;
    
    supplier.verified = verified !== undefined ? verified : true;
    if (certifications) {
        supplier.certifications = certifications;
    }
    
    res.json({
        success: true,
        supplier
    });
});

// Get supplier score
router.get('/:id/score', (req, res) => {
    const supplier = suppliers.find(s => s.id === parseInt(req.params.id));
    
    if (!supplier) {
        return res.status(404).json({ error: 'Supplier not found' });
    }
    
    // Calculate score based on various factors
    const score = {
        overall: supplier.rating,
        quality: Math.min(5, supplier.rating + 0.3),
        delivery: supplier.verified ? 4.5 : 3.5,
        price: 4.0,
        communication: 4.2,
        verified: supplier.verified,
        certifications: supplier.certifications.length
    };
    
    res.json({
        supplierId: supplier.id,
        supplierName: supplier.name,
        score,
        lastUpdated: new Date().toISOString()
    });
});

module.exports = router;
