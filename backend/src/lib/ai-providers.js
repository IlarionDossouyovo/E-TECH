/**
 * AI Provider Manager
 * Unified interface for Google Gemini and Ollama
 * E-Tech Global AI Platform
 */

const fetch = require('node-fetch');

/**
 * Base AI Provider Interface
 */
class BaseAIProvider {
    constructor(config) {
        this.config = config;
    }

    async chat(messages, options = {}) {
        throw new Error('Not implemented');
    }

    async generate(prompt, options = {}) {
        throw new Error('Not implemented');
    }

    async checkHealth() {
        throw new Error('Not implemented');
    }
}

/**
 * Google Gemini Provider
 */
class GoogleProvider extends BaseAIProvider {
    constructor(config = {}) {
        super(config);
        this.apiKey = config.apiKey || process.env.GOOGLE_API_KEY;
        this.model = config.model || process.env.GOOGLE_MODEL || 'gemini-2.0-flash-exp';
        this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta';
    }

    async chat(messages, options = {}) {
        const url = `${this.baseUrl}/models/${this.model}:generateContent?key=${this.apiKey}`;
        
        // Convert messages to Gemini format
        const contents = this.convertMessages(messages);
        
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: options.temperature || 0.7,
                    maxOutputTokens: options.maxTokens || parseInt(process.env.GOOGLE_MAX_TOKENS) || 8192,
                    topP: options.topP || 0.95,
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Google AI error: ${error.error?.message || response.statusText}`);
        }

        const data = await response.json();
        return {
            content: data.candidates?.[0]?.content?.parts?.[0]?.text || '',
            done: true,
            model: this.model,
            provider: 'google'
        };
    }

    async generate(prompt, options = {}) {
        const messages = [{ role: 'user', content: prompt }];
        return await this.chat(messages, options);
    }

    convertMessages(messages) {
        const contents = [];
        for (const msg of messages) {
            if (msg.role === 'system') continue; // Gemini handles system differently
            contents.push({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }]
            });
        }
        return contents;
    }

    async checkHealth() {
        try {
            const url = `${this.baseUrl}/models?key=${this.apiKey}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                return {
                    available: true,
                    provider: 'google',
                    models: data.models?.map(m => m.name) || []
                };
            }
            return { available: false, error: `HTTP ${response.status}` };
        } catch (e) {
            return { available: false, error: e.message };
        }
    }
}

/**
 * Ollama Provider (Local)
 */
class OllamaProvider extends BaseAIProvider {
    constructor(config = {}) {
        super(config);
        this.baseUrl = config.baseUrl || process.env.OLLAMA_URL || 'http://localhost:11434';
        this.model = config.model || process.env.OLLAMA_MODEL || 'llama3.1:8b';
    }

    async chat(messages, options = {}) {
        const response = await fetch(`${this.baseUrl}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: options.model || this.model,
                messages: messages,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`Ollama error: ${response.status}`);
        }

        const data = await response.json();
        return {
            content: data.message.content,
            done: data.done,
            totalTokens: data.prompt_eval_count + data.eval_count,
            model: this.model,
            provider: 'ollama'
        };
    }

    async generate(prompt, options = {}) {
        const response = await fetch(`${this.baseUrl}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: options.model || this.model,
                prompt: prompt,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`Ollama error: ${response.status}`);
        }

        const data = await response.json();
        return {
            content: data.response,
            done: data.done,
            totalTokens: data.prompt_eval_count + data.eval_count,
            model: this.model,
            provider: 'ollama'
        };
    }

    async checkHealth() {
        try {
            const response = await fetch(`${this.baseUrl}/api/tags`);
            if (response.ok) {
                const models = await response.json();
                return {
                    available: true,
                    provider: 'ollama',
                    models: models.models?.map(m => m.name) || []
                };
            }
            return { available: false };
        } catch (e) {
            return { available: false, error: e.message };
        }
    }
}

/**
 * AI Provider Manager
 * Handles provider selection, fallback, cost control
 */
class AIProviderManager {
    constructor() {
        this.defaultProvider = process.env.AI_DEFAULT_PROVIDER || 'google';
        this.fallbackEnabled = process.env.AI_FALLBACK_ENABLED === 'true';
        this.maxCostPerDay = parseFloat(process.env.AI_MAX_COST_PER_DAY) || 10;
        this.currentCost = 0;
        
        this.providers = {
            google: new GoogleProvider(),
            ollama: new OllamaProvider()
        };
    }

    /**
     * Get the appropriate provider
     */
    getProvider(preferredProvider = null) {
        const providerName = preferredProvider || this.defaultProvider;
        return this.providers[providerName] || this.providers.google;
    }

    /**
     * Chat with automatic fallback
     */
    async chat(messages, options = {}) {
        const primaryProvider = this.getProvider(options.provider);
        
        try {
            const result = await primaryProvider.chat(messages, options);
            this.trackCost(result);
            return result;
        } catch (error) {
            console.log(`Primary provider failed: ${error.message}`);
            
            if (this.fallbackEnabled && options.provider !== 'ollama') {
                console.log('Falling back to Ollama...');
                try {
                    const fallbackResult = await this.providers.ollama.chat(messages, options);
                    this.trackCost(fallbackResult);
                    return { ...fallbackResult, fallback: true };
                } catch (fallbackError) {
                    console.log(`Fallback also failed: ${fallbackError.message}`);
                }
            }
            
            throw error;
        }
    }

    /**
     * Generate with automatic fallback
     */
    async generate(prompt, options = {}) {
        const primaryProvider = this.getProvider(options.provider);
        
        try {
            const result = await primaryProvider.generate(prompt, options);
            this.trackCost(result);
            return result;
        } catch (error) {
            if (this.fallbackEnabled && options.provider !== 'ollama') {
                try {
                    const fallbackResult = await this.providers.ollama.generate(prompt, options);
                    this.trackCost(fallbackResult);
                    return { ...fallbackResult, fallback: true };
                } catch (fallbackError) {
                    throw error;
                }
            }
            throw error;
        }
    }

    /**
     * Check health of all providers
     */
    async checkAllHealth() {
        const results = {};
        
        for (const [name, provider] of Object.entries(this.providers)) {
            results[name] = await provider.checkHealth();
        }
        
        return results;
    }

    /**
     * Track cost (simplified estimation)
     */
    trackCost(result) {
        // Simplified cost tracking
        // In production, use actual token counts and pricing
        const estimatedCost = 0.001; // Placeholder
        this.currentCost += estimatedCost;
    }

    /**
     * Get current cost
     */
    getCurrentCost() {
        return {
            today: this.currentCost,
            limit: this.maxCostPerDay,
            remaining: this.maxCostPerDay - this.currentCost
        };
    }

    /**
     * Reset daily cost
     */
    resetDailyCost() {
        this.currentCost = 0;
    }
}

// Export singleton
const aiManager = new AIProviderManager();

module.exports = {
    AIProviderManager,
    GoogleProvider,
    OllamaProvider,
    aiManager
};
