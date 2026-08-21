/**
 * TV Suppliers Routes
 * E-Tech Global TV & Electronics Platform
 */

const express = require('express');
const router = express.Router();

const tvSuppliers = [
    {
        id: 1,
        company: 'Encompass',
        country: 'USA',
        website: 'https://www.encompass.com',
        type: 'Parts Supplier',
        verified: true,
        brands: ['Samsung', 'LG', 'Sony', 'Panasonic'],
        moq: 1,
        score: 4.8
    },
    {
        id: 2,
        company: 'ShopJimmy',
        country: 'USA',
        website: 'https://www.shopjimmy.com',
        type: 'Parts Supplier',
        verified: true,
        brands: ['Samsung', 'LG', 'Vizio'],
        moq: 1,
        score: 4.6
    },
    {
        id: 3,
        company: 'iFixit',
        country: 'USA',
        website: 'https://www.ifixit.com',
        type: 'Parts & Tools',
        verified: true,
        brands: ['Multiple'],
        moq: 1,
        score: 4.5
    }
];

router.get('/', (req, res) => {
    res.json({ total: tvSuppliers.length, suppliers: tvSuppliers });
});

router.get('/:id', (req, res) => {
    const supplier = tvSuppliers.find(s => s.id === parseInt(req.params.id));
    if (!supplier) return res.status(404).json({ error: 'Not found' });
    res.json(supplier);
});

module.exports = router;
