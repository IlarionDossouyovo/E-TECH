/**
 * N8N Webhook Routes
 * Connect frontend to N8N automation
 */

const express = require('express');
const router = express.Router();

// Webhook for new order (triggers Sales AI, Inventory AI)
router.post('/webhook/order', (req, res) => {
    const order = req.body;
    console.log('📦 New order webhook:', order.orderNumber);
    // Forward to N8N for automation
    res.json({ received: true, trigger: 'order_created' });
});

// Webhook for new customer (triggers Welcome sequence)
router.post('/webhook/customer', (req, res) => {
    const customer = req.body;
    console.log('👤 New customer webhook:', customer.email);
    res.json({ received: true, trigger: 'customer_registered' });
});

// Webhook for abandoned cart (triggers Sales AI recovery)
router.post('/webhook/cart-abandoned', (req, res) => {
    const cart = req.body;
    console.log('🛒 Abandoned cart webhook');
    res.json({ received: true, trigger: 'cart_abandoned' });
});

// Webhook for support ticket (triggers Customer Service AI)
router.post('/webhook/support', (req, res) => {
    const ticket = req.body;
    console.log('🎫 Support ticket webhook:', ticket.subject);
    res.json({ received: true, trigger: 'support_ticket' });
});

// Webhook for payment success
router.post('/webhook/payment-success', (req, res) => {
    const payment = req.body;
    console.log('✅ Payment success webhook:', payment.orderId);
    res.json({ received: true, trigger: 'payment_success' });
});

// Webhook for inventory low stock
router.post('/webhook/low-stock', (req, res) => {
    const product = req.body;
    console.log('⚠️ Low stock webhook:', product.name);
    res.json({ received: true, trigger: 'low_stock' });
});

// Manual trigger endpoints
router.post('/trigger/analytics', (req, res) => {
    res.json({ triggered: 'analytics_ai' });
});

router.post('/trigger/sourcing', (req, res) => {
    res.json({ triggered: 'product_sourcing_ai' });
});

router.post('/trigger/marketing', (req, res) => {
    res.json({ triggered: 'marketing_ai' });
});

router.post('/trigger/product-scrape', (req, res) => {
    res.json({ triggered: 'competitor_intelligence_ai' });
});

module.exports = router;