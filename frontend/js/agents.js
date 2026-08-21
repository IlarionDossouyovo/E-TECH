// E-Tech AI Agents - Native API Integration
// E-Tech Global AI Platform

const API_BASE = 'http://localhost:3001/api';
let currentAgent = '';
let currentAgentId = '';

// Agent prompts for the new system
const agentPrompts = {
    'ceo': 'Je suis le CEO Agent. Analyse stratégique des performances бизнес.',
    'founder': 'Je suis Founder AI, votre assistant personnel.',
    'product_manager': 'Je suis le Product Manager. Recherche et classification de produits.',
    'supplier': 'Je suis le Supplier Agent. Recherche et vérification de fournisseurs.',
    'ecommerce': 'Je suis l\'E-Commerce Agent. Gestion du catalogue et promotions.',
    'gsm': 'Je suis le GSM Agent. Diagnostic assisté des appareils mobiles.',
    'repair': 'Je suis le Repair Agent. Procédures de réparation et maintenance.',
    'electronics': 'Je suis l\'Electronics Agent. Documentation composants électroniques.',
    'security': 'Je suis le Security Agent. Produits et systèmes de sécurité.',
    'gaming': 'Je suis le Gaming Agent. Recommandations produits gaming.',
    'smart_home': 'Je suis le Smart Home Agent. Domotique et automatisation.',
    'construction': 'Je suis le Construction Agent. Outils et équipements.',
    'decoration': 'Je suis le Decoration Agent. Décoration et éclairage LED.',
    'marketing': 'Je suis le Marketing Agent. Campagnes et stratégie marketing.',
    'blog': 'Je suis le Blog Agent. Rédaction et SEO.',
    'customer_support': 'Je suis le Support Client. Réponses 24/7.',
    'analytics': 'Je suis l\'Analytics Agent. Analyse des performances.',
    'finance': 'Je suis le Finance Agent. Analyse financière.',
    'cybersecurity': 'Je suis le Cybersecurity Agent. Surveillance sécurité.',
    'translation': 'Je suis le Translation Agent. Traductions multilingues.',
    'quality_control': 'Je suis le Quality Control Agent. Vérification qualité.'
};

// Initialize - check AI health
async function initAI() {
    try {
        const response = await fetch(`${API_BASE}/ai/health`);
        const data = await response.json();
        
        // Update status indicators
        if (data.providers?.google?.available) {
            document.getElementById('google-ai').style.color = '#10b981';
            document.getElementById('google-ai').textContent = '●';
        } else {
            document.getElementById('google-ai').style.color = '#ef4444';
        }
        
        if (data.providers?.ollama?.available) {
            document.getElementById('ollama-status').style.color = '#10b981';
            document.getElementById('ollama-status').textContent = '●';
        } else {
            document.getElementById('ollama-status').style.color = '#f59e0b';
            document.getElementById('ollama-status').textContent = '○';
        }
    } catch (e) {
        console.log('API non accessible:', e.message);
    }
}

// Load agents from API
async function loadAgents() {
    try {
        const response = await fetch(`${API_BASE}/agents`);
        const data = await response.json();
        
        // Update stats
        document.getElementById('total-agents').textContent = data.total;
        document.getElementById('active-agents').textContent = data.active;
    } catch (e) {
        console.log('Erreur chargement agents:', e.message);
    }
}

// Open chat with agent
function openChat(el, event) {
    if (event) event.preventDefault();
    
    var name = el.querySelector('.agent-name').textContent;
    var icon = el.querySelector('.agent-icon').textContent;
    
    // Map name to agent ID
    currentAgentId = Object.keys(agentPrompts).find(key => 
        name.toLowerCase().includes(key.replace('_', ' '))
    ) || 'customer_support';
    
    currentAgent = name;
    
    document.getElementById('chatName').textContent = name;
    document.getElementById('chatIcon').textContent = icon;
    document.getElementById('chatMessages').innerHTML = '<div class="chat-msg ai">' + agentPrompts[currentAgentId] + '</div>';
    document.getElementById('chatPanel').classList.add('active');
}

function closeChat() {
    document.getElementById('chatPanel').classList.remove('active');
}

async function sendMessage() {
    var input = document.getElementById('chatInput');
    var msg = input.value.trim();
    if (!msg) return;
    
    var messages = document.getElementById('chatMessages');
    messages.innerHTML += '<div class="chat-msg user">' + msg + '</div>';
    
    // Show loading
    messages.innerHTML += '<div class="chat-msg ai">Traitement en cours...</div>';
    messages.scrollTop = messages.scrollHeight;
    
    try {
        const response = await fetch(`${API_BASE}/agents/${currentAgentId}/run`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task: msg })
        });
        
        const data = await response.json();
        
        // Remove loading message
        messages.removeChild(messages.lastChild);
        
        if (data.success) {
            messages.innerHTML += '<div class="chat-msg ai">' + data.response + '</div>';
        } else {
            messages.innerHTML += '<div class="chat-msg ai">Erreur: ' + (data.error || 'Réessayez plus tard') + '</div>';
        }
    } catch (e) {
        messages.removeChild(messages.lastChild);
        messages.innerHTML += '<div class="chat-msg ai">Erreur de connexion. API non disponible.</div>';
    }
    
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initAI();
    loadAgents();
});
