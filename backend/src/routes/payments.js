/**
 * Payments API Routes
 */

const express = require('express');
const router = express.Router();

// Payment methods available
const PAYMENT_METHODS = {
    card: { name: 'Carte Bancaire', providers: ['Visa', 'Mastercard', 'Amex'] },
    mobile_money: { name: 'Mobile Money', providers: ['MTN', 'Moov'] },
    paypal: { name: 'PayPal' },
    bank_transfer: { name: 'Virement Bancaire' },
    cash: { name: 'Paiement à la Livraison' }
};

// Get payment methods
router.get('/methods', (req, res) => {
    res.json(PAYMENT_METHODS);
});

// Create payment intent (Stripe)
router.post('/intent', (req, res) => {
    const { amount, currency = 'XOF' } = req.body;
    
    // In production: Integrate with Stripe
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const paymentIntent = await stripe.paymentIntents.create({ amount, currency });
    
    const mockIntent = {
        id: `pi_${Date.now()}`,
        client_secret: `pi_secret_${Date.now()}`,
        amount,
        currency,
        status: 'requires_payment_method'
    };
    
    res.json(mockIntent);
});

// Confirm payment
router.post('/confirm', (req, res) => {
    const { paymentIntentId } = req.body;
    // In production: Verify with Stripe
    res.json({ success: true, status: 'succeeded' });
});

// Mobile Money initialization
router.post('/mobile-money/init', (req, res) => {
    const { operator, phone, amount } = req.body;
    
    // In production: Call MTN/Moov API
    res.json({
        success: true,
        reference: `MM-${Date.now()}`,
        message: `Un USSD a été envoyé à ${phone}`
    });
});

// Webhook for payment notifications
router.post('/webhook', (req, res) => {
    const event = req.body;
    // Handle payment events
    console.log('Payment event:', event.type);
    res.json({ received: true });
});

module.exports = router;