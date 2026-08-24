/**
 * CRM/ERP Routes
 * E-Tech Global AI Platform
 */

const express = require('express');
const router = express.Router();

// CRM - Customers
const customers = [
    { id: 1, name: 'Jean Dupont', email: 'jean@email.com', phone: '+229 90 00 00 00', totalOrders: 5, totalSpent: 450000, status: 'active', segment: 'VIP', createdAt: '2025-01-15' },
    { id: 2, name: 'Marie Kouassi', email: 'marie@email.com', phone: '+229 91 00 00 00', totalOrders: 2, totalSpent: 150000, status: 'active', segment: 'Regular', createdAt: '2025-06-20' },
    { id: 3, name: 'Paul Amededji', email: 'paul@email.com', phone: '+229 92 00 00 00', totalOrders: 8, totalSpent: 850000, status: 'active', segment: 'VIP', createdAt: '2024-11-10' }
];

// ERP - Orders
const orders = [
    { id: 1, customerId: 1, items: [{ product: 'iPhone 16 Pro', quantity: 1, price: 850000 }], total: 850000, status: 'delivered', createdAt: '2026-08-01' },
    { id: 2, customerId: 2, items: [{ product: 'AirPods Pro', quantity: 2, price: 150000 }], total: 300000, status: 'shipped', createdAt: '2026-08-18' },
    { id: 3, customerId: 3, items: [{ product: 'MacBook Air', quantity: 1, price: 750000 }], total: 750000, status: 'processing', createdAt: '2026-08-20' }
];

// ERP - Inventory
const inventory = [
    { id: 1, product: 'iPhone 16 Pro', sku: 'IP16PRO', quantity: 25, minStock: 5, price: 850000, cost: 650000 },
    { id: 2, product: 'AirPods Pro', sku: 'APP2', quantity: 50, minStock: 10, price: 150000, cost: 100000 },
    { id: 3, product: 'Samsung S25 Ultra', sku: 'SS25U', quantity: 3, minStock: 5, price: 980000, cost: 750000 }
];

// ===================
// CRM ROUTES
// ===================

// Get all customers
router.get('/customers', (req, res) => {
    const { segment, status } = req.query;
    
    let filtered = [...customers];
    
    if (segment) filtered = filtered.filter(c => c.segment === segment);
    if (status) filtered = filtered.filter(c => c.status === status);
    
    res.json({
        total: filtered.length,
        customers: filtered
    });
});

// Get customer by ID
router.get('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
});

// Create customer
router.post('/customers', (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email required' });
    
    const newCustomer = {
        id: customers.length + 1,
        name, email, phone,
        totalOrders: 0,
        totalSpent: 0,
        status: 'active',
        segment: 'New',
        createdAt: new Date().toISOString().split('T')[0]
    };
    customers.push(newCustomer);
    res.status(201).json({ success: true, customer: newCustomer });
});

// Get customer segments
router.get('/segments', (req, res) => {
    const segments = {
        VIP: customers.filter(c => c.segment === 'VIP').length,
        Regular: customers.filter(c => c.segment === 'Regular').length,
        New: customers.filter(c => c.segment === 'New').length,
        AtRisk: customers.filter(c => c.segment === 'AtRisk').length
    };
    res.json(segments);
});

// ===================
// ERP ROUTES
// ===================

// Get all orders
router.get('/orders', (req, res) => {
    const { status } = req.query;
    let filtered = [...orders];
    if (status) filtered = filtered.filter(o => o.status === status);
    res.json({ total: filtered.length, orders: filtered });
});

// Get order by ID
router.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
});

// Get inventory
router.get('/inventory', (req, res) => {
    const { lowStock } = req.query;
    let filtered = [...inventory];
    
    if (lowStock === 'true') {
        filtered = filtered.filter(i => i.quantity <= i.minStock);
    }
    
    res.json({
        total: filtered.length,
        lowStock: filtered.filter(i => i.quantity <= i.minStock).length,
        inventory: filtered
    });
});

// Update inventory
router.patch('/inventory/:id', (req, res) => {
    const item = inventory.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ error: 'Item not found' });
    
    Object.assign(item, req.body);
    res.json({ success: true, item });
});

// Get ERP Dashboard
router.get('/dashboard', (req, res) => {
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    const totalOrders = orders.length;
    const lowStockItems = inventory.filter(i => i.quantity <= i.minStock);
    
    res.json({
        revenue: totalRevenue,
        orders: totalOrders,
        customers: customers.length,
        lowStock: lowStockItems.length,
        inventory: {
            total: inventory.length,
            value: inventory.reduce((sum, i) => sum + (i.quantity * i.cost), 0)
        }
    });
});

module.exports = router;
