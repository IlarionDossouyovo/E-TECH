/**
 * E-Tech Frontend JavaScript
 * Boutique E-Commerce Premium d'Électronique
 */

// ===================
// Configuration
// ===================
const CONFIG = {
    apiBaseUrl: '/api',
    currency: 'FCFA',
    currencySymbol: 'F',
    freeShippingThreshold: 50000,
    defaultCurrency: 'FCFA'
};

// ===================
// State Management
// ===================
let cart = JSON.parse(localStorage.getItem('e-tech-cart')) || [];
let products = [];
let isLoading = false;

// ===================
// Utility Functions
// ===================

/**
 * Format price in FCA
 */
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        maximumFractionDigits: 0
    }).format(price);
}

/**
 * Save cart to localStorage
 */
function saveCart() {
    localStorage.setItem('e-tech-cart', JSON.stringify(cart));
    updateCartUI();
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Simple notification - could be enhanced with toast library
    alert(message);
}

// ===================
// Cart Functions
// ===================

/**
 * Add product to cart
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        // Try to find in static products
        const staticProducts = {
            1: { id: 1, name: 'iPhone 16 Pro Max 256Go', price: 1450000, brand: 'Apple' },
            2: { id: 2, name: 'AirPods Pro 2ème Génération', price: 175000, brand: 'Apple' },
            3: { id: 3, name: 'Apple Watch Ultra 2', price: 520000, brand: 'Apple' },
            4: { id: 4, name: 'MacBook Air M4 15"', price: 1150000, brand: 'Apple' }
        };
        product = staticProducts[productId];
    }
    
    if (product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        showNotification(`${product.name} ajouté au panier!`);
    }
}

/**
 * Remove product from cart
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

/**
 * Update product quantity in cart
 */
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
        }
    }
}

/**
 * Get cart total
 */
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Get cart item count
 */
function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

/**
 * Get shipping cost
 */
function getShippingCost() {
    return getCartTotal() >= CONFIG.freeShippingThreshold ? 0 : 2500;
}

// ===================

// Update UI
function updateCartUI() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = getCartCount();
    }
}

/**
 * Newsletter subscription
 */
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // In production, this would call the API
    showNotification(`Merci! Code BIENVENUE10 appliqué (-10%)`);
    event.target.reset();
}

// ===================
// Product Loading
// ===================

/**
 * Load products from API (placeholder - would connect to backend/N8N)
 */
async function loadProducts() {
    isLoading = true;
    
    try {
        // In production: const response = await fetch(`${CONFIG.apiBaseUrl}/products`);
        // const products = await response.json();
        
        // Static fallback - simulating API response
        products = [
            {
                id: 1,
                name: 'iPhone 16 Pro Max 256Go',
                brand: 'Apple',
                price: 1450000,
                originalPrice: null,
                image: '📱',
                badge: 'new',
                rating: 5,
                reviews: 128
            },
            {
                id: 2,
                name: 'AirPods Pro 2ème Génération',
                brand: 'Apple',
                price: 175000,
                originalPrice: null,
                image: '🎧',
                badge: 'bestseller',
                rating: 5,
                reviews: 256
            },
            {
                id: 3,
                name: 'Apple Watch Ultra 2',
                brand: 'Apple',
                price: 520000,
                originalPrice: 600000,
                image: '⌚',
                badge: 'promo',
                rating: 5,
                reviews: 89
            },
            {
                id: 4,
                name: 'MacBook Air M4 15"',
                brand: 'Apple',
                price: 1150000,
                originalPrice: null,
                image: '💻',
                badge: null,
                rating: 5,
                reviews: 67
            }
        ];
        
        renderProducts();
    } catch (error) {
        console.error('Error loading products:', error);
    } finally {
        isLoading = false;
    }
}

/**
 * Render products to grid
 */
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            ${product.badge ? `<div class="product-card__badges">
                <span class="product-badge product-badge--${product.badge}">
                    ${product.badge === 'new' ? 'Nouveau' : 
                      product.badge === 'bestseller' ? 'Best-Seller' : 
                      `-${Math.round((1 - product.price/product.originalPrice) * 100)}%`}
                </span>
            </div>` : ''}
            <div class="product-card__image">
                <div style="font-size: 80px;">${product.image}</div>
            </div>
            <div class="product-card__quick-view">Aperçu Rapide</div>
            <div class="product-card__content">
                <p class="product-card__brand">${product.brand}</p>
                <h3 class="product-card__name">${product.name}</h3>
                <div class="product-card__rating">
                    <span class="stars">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-card__price">
                    <span class="product-card__price-current">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `<span class="product-card__price-original">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                <div class="product-card__actions">
                    <button class="product-card__btn product-card__btn--cart" onclick="addToCart(${product.id})">
                        Ajouter au Panier
                    </button>
                    <button class="product-card__btn product-card__btn--wishlist" onclick="toggleWishlist(${product.id})">
                        ♡
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Toggle wishlist
 */
function toggleWishlist(productId) {
    // In production, this would save to backend
    showNotification('Produit ajouté aux favoris!');
}

// ===================
// Search Functions
// ===================

/**
 * Search products
 */
function searchProducts(query) {
    if (!query) return products;
    
    const lowerQuery = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) ||
        product.brand.toLowerCase().includes(lowerQuery)
    );
}

// ===================
// Currency Functions
// ===================

/**
 * Convert price between currencies
 */
async function convertCurrency(amount, from, to) {
    try {
        const response = await fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`);
        const data = await response.json();
        return amount * data.rates[to];
    } catch (error) {
        console.error('Currency conversion error:', error);
        return amount;
    }
}

// ===================
// Newsletter
// ===================

/**
 * Subscribe to newsletter
 */
async function subscribeToNewsletter(email) {
    try {
        // In production: send to API/N8N
        console.log('Newsletter subscription:', email);
        return { success: true, code: 'BIENVENUE10' };
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return { success: false };
    }
}

// ===================
// Contact Functions
// ===================

/**
 * Submit contact form
 */
async function submitContactForm(formData) {
    try {
        // In production: send to API/N8N for Customer Service AI
        console.log('Contact form submission:', formData);
        return { success: true };
    } catch (error) {
        console.error('Contact form error:', error);
        return { success: false };
    }
}

// ===================
// Initialization
// ===================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart UI
    updateCartUI();
    
    // Load products
    loadProducts();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
        getShippingCost,
        formatPrice,
        subscribeNewsletter,
        searchProducts
    };
}