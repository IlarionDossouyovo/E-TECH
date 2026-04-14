/**
 * Customers API Routes
 */

const express = require('express');
const router = express.Router();

let customers = [];

// Get all customers
router.get('/', (req, res) => {
    res.json({ total: customers.length, customers });
});

// Get customer by ID
router.get('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
});

// Register customer
router.post('/register', (req, res) => {
    const { name, email, phone, password } = req.body;
    
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const existing = customers.find(c => c.email === email);
    if (existing) return res.status(400).json({ error: 'Email already registered' });
    
    const customer = {
        id: customers.length + 1,
        name,
        email,
        phone,
        newsletter: true,
        createdAt: new Date().toISOString()
    };
    
    customers.push(customer);
    res.status(201).json({ success: true, customer, discountCode: 'BIENVENUE10' });
});

// Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const customer = customers.find(c => c.email === email);
    if (!customer) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ success: true, customer });
});

// Newsletter subscription
router.post('/newsletter', (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email required' });
    res.json({ success: true, discountCode: 'BIENVENUE10' });
});

module.exports = router;