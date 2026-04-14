/**
 * Orders API Routes
 */

const express = require('express');
const router = express.Router();

let orders = [];

// Get all orders
router.get('/', (req, res) => {
    res.json({ total: orders.length, orders });
});

// Get order by ID
router.get('/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
});

// Create new order
router.post('/', (req, res) => {
    const { customer, items, shipping, payment } = req.body;
    
    if (!customer || !items || items.length === 0) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingCost = subtotal >= 50000 ? 0 : 2500;
    const vat = Math.round(subtotal * 0.18);
    const total = subtotal + shippingCost + vat;
    
    const order = {
        id: orders.length + 1,
        orderNumber: `ET-${Date.now()}`,
        customer,
        items,
        subtotal,
        shippingCost,
        vat,
        total,
        shipping,
        payment,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    orders.push(order);
    
    res.status(201).json(order);
});

// Update order status
router.patch('/:id/status', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).json({ error: 'Order not found' });
    
    const { status } = req.body;
    order.status = status;
    order.updatedAt = new Date().toISOString();
    
    res.json(order);
});

module.exports = router;