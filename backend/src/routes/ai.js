/**
 * AI Routes - Native AI Orchestrator
 * E-Tech Global AI Platform
 */

const express = require('express');
const router = express.Router();
const { aiManager } = require('../lib/ai-providers');

// Health check for all AI providers
router.get('/health', async (req, res) => {
    try {
        const health = await aiManager.checkAllHealth();
        const cost = aiManager.getCurrentCost();
        
        res.json({
            status: 'OK',
            providers: health,
            cost,
            timestamp: new Date().toISOString()
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Chat endpoint
router.post('/chat', async (req, res) => {
    const { messages, provider, model, temperature, maxTokens } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Messages array required' });
    }
    
    try {
        const response = await aiManager.chat(messages, {
            provider,
            model,
            temperature,
            maxTokens
        });
        
        res.json({
            success: true,
            response: response.content,
            metadata: {
                model: response.model,
                provider: response.provider,
                fallback: response.fallback || false
            }
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Generate endpoint (single prompt)
router.post('/generate', async (req, res) => {
    const { prompt, provider, model, temperature, maxTokens } = req.body;
    
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt required' });
    }
    
    try {
        const response = await aiManager.generate(prompt, {
            provider,
            model,
            temperature,
            maxTokens
        });
        
        res.json({
            success: true,
            response: response.content,
            metadata: {
                model: response.model,
                provider: response.provider,
                fallback: response.fallback || false
            }
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Cost tracking
router.get('/cost', (req, res) => {
    res.json(aiManager.getCurrentCost());
});

// Model list
router.get('/models', async (req, res) => {
    try {
        const health = await aiManager.checkAllHealth();
        
        const models = {
            google: health.google?.models || [],
            ollama: health.ollama?.models || []
        };
        
        res.json({
            available: models,
            defaultProvider: aiManager.defaultProvider
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = router;
