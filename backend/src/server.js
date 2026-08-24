/**
 * E-Tech API Server
 * Backend pour E-Commerce E-Tech
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const customersRouter = require('./routes/customers');
const paymentRouter = require('./routes/payments');
const aiRouter = require('./routes/ai');
const agentsRouter = require('./routes/agents');
const founderRouter = require('./routes/founder');
const suppliersRouter = require('./routes/suppliers');
const repairsRouter = require('./routes/repairs');
const crmRouter = require('./routes/crm');
const tvSuppliersRouter = require('./routes/tv-suppliers');
const voiceRouter = require('./routes/voice');

// API Routes
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/customers', customersRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/ai', aiRouter);
app.use('/api/agents', agentsRouter);
app.use('/api/founder', founderRouter);
app.use('/api/suppliers', suppliersRouter);
app.use('/api/repairs', repairsRouter);
app.use('/api/crm', crmRouter);
// app.use('/api/erp', crmRouter); // Removed duplicate
app.use('/api/tv-suppliers', tvSuppliersRouter);
app.use('/api/voice', voiceRouter);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        service: 'E-Tech API',
        timestamp: new Date().toISOString()
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 E-Tech API running on port ${PORT}`);
});

module.exports = app;