// E-Tech AI Agents Chat
let currentAgent = '';

const agentPrompts = {
    'vendeur': 'Je suis votre assistant commercial E-Tech. Je peux vous aider a trouver les meilleurs produits.',
    'support': 'Je suis le support client E-Tech. Je peux repondre a vos questions sur les commandes.',
    'marketing': 'Je suis votre expert marketing E-Tech. Je suggerer des strategies pour augmenter vos ventes.',
    'inventory': 'Je gere votre inventaire E-Tech. Je peux verifier les stocks.'
};

function openChat(el) {
    var name = el.querySelector('.agent-name').textContent;
    var icon = el.querySelector('.agent-icon').textContent;
    currentAgent = name.replace('E-Tech AI ', '').toLowerCase();
    
    document.getElementById('chatName').textContent = name;
    document.getElementById('chatIcon').textContent = icon;
    document.getElementById('chatMessages').innerHTML = '<div class="chat-msg ai">' + agentPrompts[currentAgent] + '</div>';
    document.getElementById('chatPanel').classList.add('active');
}

function closeChat() {
    document.getElementById('chatPanel').classList.remove('active');
}

function sendMessage() {
    var input = document.getElementById('chatInput');
    var msg = input.value.trim();
    if (!msg) return;
    
    var messages = document.getElementById('chatMessages');
    messages.innerHTML += '<div class="chat-msg user">' + msg + '</div>';
    
    setTimeout(function() {
        var response = 'Je traite votre demande...';
        if (currentAgent === 'vendeur') response = 'Je vous recommande: iPhone 16 Pro, Galaxy S25 Ultra.';
        if (currentAgent === 'support') response = 'Quel est votre numero de commande?';
        if (currentAgent === 'marketing') response = 'Votre ROI est de 312%!';
        if (currentAgent === 'inventory') response = '12 produits en stock faible.';
        
        messages.innerHTML += '<div class="chat-msg ai">' + response + '</div>';
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
    
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}
