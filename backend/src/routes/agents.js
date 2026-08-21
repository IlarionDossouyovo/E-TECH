/**
 * AI Agents Routes
 * E-Tech Global AI Platform
 * 17 AI Agents with native orchestration
 */

const express = require('express');
const router = express.Router();
const { aiManager } = require('../lib/ai-providers');

// In-memory agent registry (will be replaced with database)
const agentsRegistry = {
    ceo: {
        id: 'ceo',
        name: 'CEO Agent',
        icon: '👔',
        description: 'Strategic analysis and business intelligence',
        domain: 'business',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['analysis', 'strategy', 'reporting', 'kpi_tracking'],
        permissions: ['read_all', 'write_reports'],
        lastActivity: null,
        tasksCompleted: 0
    },
    founder: {
        id: 'founder',
        name: 'Founder AI',
        icon: '🏢',
        description: 'Personal AI assistant for the founder',
        domain: 'administration',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['search', 'analysis', 'coordination', 'recommendations'],
        permissions: ['full_access'],
        lastActivity: null,
        tasksCompleted: 0
    },
    product_manager: {
        id: 'product_manager',
        name: 'Product Manager',
        icon: '📦',
        description: 'Product research and catalog management',
        domain: 'ecommerce',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['product_research', 'classification', 'trends'],
        permissions: ['read_products', 'write_products'],
        lastActivity: null,
        tasksCompleted: 0
    },
    supplier: {
        id: 'supplier',
        name: 'Supplier Agent',
        icon: '🏭',
        description: 'Supplier research and management',
        domain: 'suppliers',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['supplier_search', 'comparison', 'verification'],
        permissions: ['read_suppliers', 'write_suppliers'],
        lastActivity: null,
        tasksCompleted: 0
    },
    ecommerce: {
        id: 'ecommerce',
        name: 'E-Commerce Agent',
        icon: '🛒',
        description: 'Catalog, pricing, and promotions',
        domain: 'ecommerce',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['catalog', 'pricing', 'seo', 'promotions'],
        permissions: ['read_products', 'write_products'],
        lastActivity: null,
        tasksCompleted: 0
    },
    gsm: {
        id: 'gsm',
        name: 'GSM Agent',
        icon: '📱',
        description: 'Mobile device identification and diagnostics',
        domain: 'gsm',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['device_identification', 'symptoms', 'diagnosis'],
        permissions: ['read_gsm', 'write_diagnostics'],
        lastActivity: null,
        tasksCompleted: 0
    },
    repair: {
        id: 'repair',
        name: 'Repair Agent',
        icon: '🔧',
        description: 'Repair procedures and maintenance',
        domain: 'repair',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['procedures', 'components', 'tools', 'maintenance'],
        permissions: ['read_repairs', 'write_repairs'],
        lastActivity: null,
        tasksCompleted: 0
    },
    electronics: {
        id: 'electronics',
        name: 'Electronics Agent',
        icon: '💡',
        description: 'Electronic components and circuits',
        domain: 'electronics',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['components', 'circuits', 'documentation'],
        permissions: ['read_electronics'],
        lastActivity: null,
        tasksCompleted: 0
    },
    security: {
        id: 'security',
        name: 'Security Agent',
        icon: '🔒',
        description: 'Security products and systems',
        domain: 'security',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['cameras', 'alarms', 'access_control'],
        permissions: ['read_security'],
        lastActivity: null,
        tasksCompleted: 0
    },
    gaming: {
        id: 'gaming',
        name: 'Gaming Agent',
        icon: '🎮',
        description: 'Gaming products and trends',
        domain: 'gaming',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['products', 'trends', 'comparisons', 'recommendations'],
        permissions: ['read_gaming'],
        lastActivity: null,
        tasksCompleted: 0
    },
    smart_home: {
        id: 'smart_home',
        name: 'Smart Home Agent',
        icon: '🏠',
        description: 'Domotics and home automation',
        domain: 'smart_home',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['domotics', 'automation', 'lighting', 'compatibility'],
        permissions: ['read_smart_home'],
        lastActivity: null,
        tasksCompleted: 0
    },
    construction: {
        id: 'construction',
        name: 'Construction Agent',
        icon: '🏗️',
        description: 'Tools and construction equipment',
        domain: 'construction',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['tools', 'equipment', 'maintenance', 'guides'],
        permissions: ['read_construction'],
        lastActivity: null,
        tasksCompleted: 0
    },
    decoration: {
        id: 'decoration',
        name: 'Decoration Agent',
        icon: '🎨',
        description: 'Interior decoration and LED lighting',
        domain: 'decoration',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['decoration', 'led', 'gaming_setup', 'trends'],
        permissions: ['read_decoration'],
        lastActivity: null,
        tasksCompleted: 0
    },
    marketing: {
        id: 'marketing',
        name: 'Marketing Agent',
        icon: '📢',
        description: 'Marketing campaigns and social media',
        domain: 'marketing',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['campaigns', 'seo', 'social_media', 'advertising'],
        permissions: ['read_marketing', 'write_marketing'],
        lastActivity: null,
        tasksCompleted: 0
    },
    blog: {
        id: 'blog',
        name: 'Blog Agent',
        icon: '✍️',
        description: 'Content creation and SEO',
        domain: 'content',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['research', 'writing', 'seo', 'translation'],
        permissions: ['read_blog', 'write_blog'],
        lastActivity: null,
        tasksCompleted: 0
    },
    customer_support: {
        id: 'customer_support',
        name: 'Customer Support',
        icon: '🎧',
        description: '24/7 customer service',
        domain: 'support',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['chat', 'email', 'faq', 'tickets', 'order_tracking'],
        permissions: ['read_customers', 'write_tickets'],
        lastActivity: null,
        tasksCompleted: 0
    },
    analytics: {
        id: 'analytics',
        name: 'Analytics Agent',
        icon: '📊',
        description: 'Business intelligence and reporting',
        domain: 'analytics',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['sales', 'traffic', 'conversion', 'performance'],
        permissions: ['read_analytics'],
        lastActivity: null,
        tasksCompleted: 0
    },
    finance: {
        id: 'finance',
        name: 'Finance Agent',
        icon: '💰',
        description: 'Financial analysis and reporting',
        domain: 'finance',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['costs', 'margins', 'revenues', 'reports'],
        permissions: ['read_finance'],
        lastActivity: null,
        tasksCompleted: 0
    },
    cybersecurity: {
        id: 'cybersecurity',
        name: 'Cybersecurity Agent',
        icon: '🛡️',
        description: 'System security monitoring',
        domain: 'security',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['monitoring', 'anomalies', 'alerts', 'audit'],
        permissions: ['read_security', 'admin_security'],
        lastActivity: null,
        tasksCompleted: 0
    },
    translation: {
        id: 'translation',
        name: 'Translation Agent',
        icon: '🌍',
        description: 'Multi-language translation',
        domain: 'content',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['french', 'english', 'spanish', 'portuguese', 'german', 'arabic'],
        permissions: ['read_translation', 'write_translation'],
        lastActivity: null,
        tasksCompleted: 0
    },
    quality_control: {
        id: 'quality_control',
        name: 'Quality Control',
        icon: '✅',
        description: 'Product and content quality verification',
        domain: 'quality',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['products', 'seo', 'translations', 'suppliers'],
        permissions: ['read_all', 'write_quality'],
        lastActivity: null,
        tasksCompleted: 0
    },
    // NEW AGENTS FOR TV EXPANSION
    tv_specialist: {
        id: 'tv_specialist',
        name: 'TV Specialist',
        icon: '📺',
        description: 'TV catalog, comparisons, compatibility, accessories, repair, diagnostics, suppliers, content, trends',
        domain: 'tv',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['tv_catalog', 'comparisons', 'compatibility', 'accessories', 'repair_diagnostics', 'suppliers', 'content', 'trends'],
        permissions: ['read_tv', 'write_tv', 'read_suppliers', 'verify_products'],
        sources: ['official_brands', 'verified_suppliers'],
        lastActivity: null,
        tasksCompleted: 0
    },
    product_data: {
        id: 'product_data',
        name: 'Product Data AI',
        icon: '📊',
        description: 'Product data verification: duplicates, models, specs, categories, images, prices, SKUs',
        domain: 'quality',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['duplicate_detection', 'model_verification', 'spec_validation', 'price_analysis'],
        permissions: ['read_products', 'write_products'],
        lastActivity: null,
        tasksCompleted: 0
    },
    affiliate: {
        id: 'affiliate',
        name: 'Affiliate Agent',
        icon: '💰',
        description: 'Affiliate program management, commissions, tracking, payouts',
        domain: 'affiliate',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['affiliate_management', 'commission_tracking', 'payouts'],
        permissions: ['read_affiliates', 'write_affiliates'],
        lastActivity: null,
        tasksCompleted: 0
    },
    blog_ai: {
        id: 'blog_ai',
        name: 'Blog AI',
        icon: '✍️',
        description: 'Blog content creation with source verification',
        domain: 'content',
        status: 'active',
        model: 'gemini-2.0-flash-exp',
        provider: 'google',
        capabilities: ['article_creation', 'content_verification', 'seo_optimization'],
        permissions: ['read_blog', 'write_blog'],
        sources_required: true,
        lastActivity: null,
        tasksCompleted: 0
    }
};

// Agent system prompts
const agentPrompts = {
    ceo: `Tu es le CEO Agent d'E-Tech. Analyse les données бизнес pour fournir des insights stratégiques sur les ventes, la croissance, les performances et les opportunités.`,
    founder: `Tu es l'assistant personnel du fondateur d'E-Tech. Tu as accès aux informations autorisées de l'entreprise. Fournis des synthèses, recherches, rapports et coordonne les autres agents.`,
    product_manager: `Tu es le Product Manager d'E-Tech. Recherche des produits, classe-les, analyse les caractéristiques, variantes et tendances.`,
    supplier: `Tu es le Supplier Agent d'E-Tech. Recherche des fournisseurs, compare les prix, MOQ, délais et vérifie les certifications. NE JAMAIS inventer une certification.`,
    ecommerce: `Tu es l'E-Commerce Agent d'E-Tech. Gère le catalogue, les catégories, prix, stock, promotions et SEO.`,
    gsm: `Tu es le GSM Agent d'E-Tech. Identifie les appareils mobiles, analyse les symptômes, propose un diagnostic assisté. Marque toujours: "Diagnostic assisté par IA — confirmation par technicien recommandée."`,
    repair: `Tu es le Repair Agent d'E-Tech. Propose des procédures de réparation, composants, outils et maintenance.`,
    electronics: `Tu es l'Electronics Agent d'E-Tech. Documente les composants, circuits et maintenance électronique.`,
    security: `Tu es le Security Agent d'E-Tech. Documente les produits de sécurité: caméras, alarmes, contrôle d'accès.`,
    gaming: `Tu es le Gaming Agent d'E-Tech. Recommande des produits gaming, tendances et comparatifs.`,
    smart_home: `Tu es le Smart Home Agent d'E-Tech. Documente la domotique, automatisation et compatibilité.`,
    construction: `Tu es le Construction Agent d'E-Tech. Documente les outils, équipements et guides.`,
    decoration: `Tu es le Decoration Agent d'E-Tech. Propose des conseils en décoration, LED et setup gaming.`,
    marketing: `Tu es le Marketing Agent d'E-Tech. Crée des campagnes, gère le SEO et les réseaux sociaux.`,
    blog: `Tu es le Blog Agent d'E-Tech. Rédige des articles, optimise le SEO et la traduction.`,
    customer_support: `Tu es le Customer Support Agent d'E-Tech. Réponds aux clients 24/7 par chat, email, FAQ.`,
    analytics: `Tu es l'Analytics Agent d'E-Tech. Analyse les ventes, trafic, conversion et performance.`,
    finance: `Tu es le Finance Agent d'E-Tech. Analyse les coûts, marges, revenus et génère des rapports. NE PAS effectuer d'opérations financières critiques seul.`,
    cybersecurity: `Tu es le Cybersecurity Agent d'E-Tech. Surveille les anomalies, permissions et sécurité du système.`,
    translation: `Tu es le Translation Agent d'E-Tech. Traduis entre: français, anglais, espagnol, portugais, allemand, arabe.`,
    quality_control: `Tu es le Quality Control Agent d'E-Tech. Vérifie les fiches produits, caractéristiques, prix, images et SEO.`,
    // NEW TV AGENTS
    tv_specialist: `Tu es le TV Specialist Agent d'E-Tech. TU NE DOIS JAMAIS INVENTER des caractéristiques, prix ou fournisseurs. Utilise uniquement les sources officielles: sites web des marques, fournisseurs vérifiés. Marque clairement les informations non vérifiées.`,
    product_data: `Tu es le Product Data AI d'E-Tech. Vérifie les données produits: détecte les doublons, valide les modèles, caractéristiques, catégories, images, prix, SKU, fournisseurs, compatibilité.`,
    affiliate: `Tu es l'Affiliate Agent d'E-Tech. Gère le programme d'affiliation: inscription, liens, clics, conversions, commissions, paiements.`,
    blog_ai: `Tu es le Blog AI d'E-Tech. Crée des articles vérifiés. TU NE DOIS PAS inventer. Ajoute toujours des sources. Marque les informations non vérifiées. Évite les hallucinations.`
};

// Get all agents
router.get('/', (req, res) => {
    const agents = Object.values(agentsRegistry);
    
    const summary = {
        total: agents.length,
        active: agents.filter(a => a.status === 'active').length,
        paused: agents.filter(a => a.status === 'paused').length,
        error: agents.filter(a => a.status === 'error').length,
        agents: agents.map(a => ({
            id: a.id,
            name: a.name,
            icon: a.icon,
            description: a.description,
            domain: a.domain,
            status: a.status,
            model: a.model,
            provider: a.provider,
            lastActivity: a.lastActivity,
            tasksCompleted: a.tasksCompleted
        }))
    };
    
    res.json(summary);
});

// Get specific agent
router.get('/:agentId', (req, res) => {
    const { agentId } = req.params;
    const agent = agentsRegistry[agentId];
    
    if (!agent) {
        return res.status(404).json({ error: 'Agent not found' });
    }
    
    res.json(agent);
});

// Run agent task
router.post('/:agentId/run', async (req, res) => {
    const { agentId } = req.params;
    const { task, context } = req.body;
    
    const agent = agentsRegistry[agentId];
    if (!agent) {
        return res.status(404).json({ error: 'Agent not found' });
    }
    
    if (agent.status !== 'active') {
        return res.status(400).json({ error: 'Agent is not active' });
    }
    
    try {
        const systemPrompt = agentPrompts[agentId];
        const messages = [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: task }
        ];
        
        const response = await aiManager.chat(messages, {
            provider: agent.provider,
            model: agent.model
        });
        
        // Update agent activity
        agent.lastActivity = new Date().toISOString();
        agent.tasksCompleted += 1;
        
        res.json({
            success: true,
            agent: agentId,
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

// Update agent status
router.patch('/:agentId/status', (req, res) => {
    const { agentId } = req.params;
    const { status } = req.body;
    
    const agent = agentsRegistry[agentId];
    if (!agent) {
        return res.status(404).json({ error: 'Agent not found' });
    }
    
    const validStatuses = ['active', 'paused', 'error', 'maintenance', 'waiting_approval'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }
    
    agent.status = status;
    res.json({ success: true, agent });
});

// Agent builder - create custom agent
router.post('/builder', (req, res) => {
    const { name, description, domain, model, provider, capabilities, permissions } = req.body;
    
    if (!name || !domain) {
        return res.status(400).json({ error: 'Name and domain are required' });
    }
    
    const id = name.toLowerCase().replace(/\s+/g, '_');
    
    if (agentsRegistry[id]) {
        return res.status(400).json({ error: 'Agent already exists' });
    }
    
    agentsRegistry[id] = {
        id,
        name,
        icon: '🤖',
        description: description || '',
        domain,
        status: 'waiting_approval',
        model: model || 'gemini-2.0-flash-exp',
        provider: provider || 'google',
        capabilities: capabilities || [],
        permissions: permissions || ['read_basic'],
        lastActivity: null,
        tasksCompleted: 0
    };
    
    res.status(201).json({
        success: true,
        message: 'Agent created and waiting for approval',
        agent: agentsRegistry[id]
    });
});

// Get agent logs (placeholder)
router.get('/:agentId/logs', (req, res) => {
    res.json({
        agentId: req.params.agentId,
        logs: [],
        message: 'Logs feature coming soon'
    });
});

module.exports = router;
