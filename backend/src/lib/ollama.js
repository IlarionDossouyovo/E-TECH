/**
 * Ollama API Client
 * Alternative à Anthropic pour les agents IA
 */

const fetch = require('node-fetch');

class OllamaClient {
    constructor(options = {}) {
        this.baseUrl = options.baseUrl || 'http://localhost:11434';
        this.model = options.model || 'llama3.1:8b';
        this.systemPrompt = options.systemPrompt || 'You are a helpful AI assistant.';
    }

    /**
     * Chat completion
     */
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
            totalTokens: data.prompt_eval_count + data.eval_count
        };
    }

    /**
     * Generate (single prompt)
     */
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
            totalTokens: data.prompt_eval_count + data.eval_count
        };
    }

    /**
     * Check if Ollama is running
     */
    async checkHealth() {
        try {
            const response = await fetch(`${this.baseUrl}/api/tags`);
            if (response.ok) {
                const models = await response.json();
                return {
                    available: true,
                    models: models.models.map(m => m.name)
                };
            }
            return { available: false };
        } catch (e) {
            return { available: false, error: e.message };
        }
    }
}

/**
 * E-Tech AI Agents utilisant Ollama
 */
class ETechAI {
    constructor() {
        this.ollama = new OllamaClient({
            model: 'llama3.1:8b'
        });
    }

    /**
     * Customer Service AI
     */
    async handleSupport(message, customerContext = {}) {
        const systemPrompt = `Tu es le assistant client d'E-Tech, une boutique d'electronique premium au Benin.
Reponds de maniere professionnelle et empathique.
Produits: Smartphones, Ordinateurs, Audio, Accessoires, Objets Connectes.
Delai: 2-3 jours au Benin, 5-10 jours international.`;

        const messages = [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: message }
        ];

        return await this.ollama.chat(messages);
    }

    /**
     * Sales AI - Product recommendations
     */
    async recommendProduct(customerPrefs) {
        const prompt = `Based on these preferences: ${JSON.stringify(customerPrefs)}, 
recommend the best product from our catalog. Keep it short.`;

        return await this.ollama.generate(prompt);
    }

    /**
     * Marketing AI - Generate content
     */
    async generateMarketingContent(topic, tone = 'professional') {
        const prompt = `Genere un contenu marketing pour E-Tech (electronique au Benin).
Sujet: ${topic}
Ton: ${tone}
KEEP IT SHORT (max 2 phrases).`;

        return await this.ollama.generate(prompt);
    }

    /**
     * Analytics AI - Summarize data
     */
    async summarizeAnalytics(data) {
        const prompt = `Analyse ces donnees e-commerce et donne 3 cles:
${JSON.stringify(data)}
Format: • Insight 1...`;

        return await this.ollama.generate(prompt);
    }

    /**
     * Check AI availability
     */
    async checkHealth() {
        return await this.ollama.checkHealth();
    }
}

module.exports = { OllamaClient, ETechAI };