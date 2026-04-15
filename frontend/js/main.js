// Complete Product Database - All Categories 2025
const allProducts = {
    smartphones: [
        // iPhone 16 Series
        { id: 1, name: 'iPhone 16 Pro Max 512Go', brand: 'Apple', category: 'smartphones', price: 1650000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 128, specs: { screen: '6.9"', battery: '5000mAh', camera: '48MP' } },
        { id: 2, name: 'iPhone 16 Pro Max 256Go', brand: 'Apple', category: 'smartphones', price: 1450000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 128 },
        { id: 3, name: 'iPhone 16 Pro 256Go', brand: 'Apple', category: 'smartphones', price: 1150000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 89 },
        { id: 4, name: 'iPhone 16 Plus 256Go', brand: 'Apple', category: 'smartphones', price: 980000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 67 },
        { id: 5, name: 'iPhone 16 256Go', brand: 'Apple', category: 'smartphones', price: 850000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 45 },
        
        // Samsung Galaxy S25
        { id: 6, name: 'Galaxy S25 Ultra 1To', brand: 'Samsung', category: 'smartphones', price: 1350000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 95 },
        { id: 7, name: 'Galaxy S25 Ultra 512Go', brand: 'Samsung', category: 'smartphones', price: 1180000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 95 },
        { id: 8, name: 'Galaxy S25 Ultra 256Go', brand: 'Samsung', category: 'smartphones', price: 980000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 95 },
        { id: 9, name: 'Galaxy S25+ 256Go', brand: 'Samsung', category: 'smartphones', price: 750000, originalPrice: null, image: '📱', rating: 4, reviews: 67 },
        { id: 10, name: 'Galaxy S25 256Go', brand: 'Samsung', category: 'smartphones', price: 620000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 45 },
        
        // Samsung Fold/Flip
        { id: 11, name: 'Galaxy Z Fold 6', brand: 'Samsung', category: 'smartphones', price: 1450000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 23 },
        { id: 12, name: 'Galaxy Z Flip 6', brand: 'Samsung', category: 'smartphones', price: 850000, originalPrice: null, image: '📱', rating: 4, reviews: 56 },
        
        // Google Pixel
        { id: 13, name: 'Pixel 10 Pro 256Go', brand: 'Google', category: 'smartphones', price: 850000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 34 },
        { id: 14, name: 'Pixel 10 256Go', brand: 'Google', category: 'smartphones', price: 650000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 34 },
        { id: 15, name: 'Pixel 9 Pro 256Go', brand: 'Google', category: 'smartphones', price: 750000, originalPrice: null, image: '📱', rating: 4, reviews: 56 },
        
        // Xiaomi
        { id: 16, name: 'Xiaomi 15 Ultra 512Go', brand: 'Xiaomi', category: 'smartphones', price: 1100000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 45 },
        { id: 17, name: 'Xiaomi 15 Ultra 256Go', brand: 'Xiaomi', category: 'smartphones', price: 950000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 45 },
        { id: 18, name: 'Xiaomi 15 Pro 256Go', brand: 'Xiaomi', category: 'smartphones', price: 750000, originalPrice: null, image: '📱', rating: 4, reviews: 34 },
        
        // OnePlus
        { id: 19, name: 'OnePlus 13 512Go', brand: 'OnePlus', category: 'smartphones', price: 820000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 78 },
        { id: 20, name: 'OnePlus 13 256Go', brand: 'OnePlus', category: 'smartphones', price: 720000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 78 },
        
        // OPPO
        { id: 21, name: 'OPPO Find X8 Pro', brand: 'OPPO', category: 'smartphones', price: 850000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 28 },
        { id: 22, name: 'OPPO Find X8', brand: 'OPPO', category: 'smartphones', price: 650000, originalPrice: null, image: '📱', rating: 4, reviews: 28 },
        
        // Vivo
        { id: 23, name: 'Vivo X100 Pro', brand: 'Vivo', category: 'smartphones', price: 750000, originalPrice: null, image: '📱', rating: 4, reviews: 20 },
        
        // Nothing
        { id: 24, name: 'Nothing Phone (2a) Plus', brand: 'Nothing', category: 'smartphones', price: 450000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 15 },
        
        // Mid-range
        { id: 25, name: 'Galaxy A55', brand: 'Samsung', category: 'smartphones', price: 280000, originalPrice: null, image: '📱', rating: 4, reviews: 189 },
        { id: 26, name: 'OPPO A79 5G', brand: 'OPPO', category: 'smartphones', price: 280000, originalPrice: null, image: '📱', rating: 3, reviews: 45 }
    ],
    
    computers: [
        // MacBook M4
        { id: 101, name: 'MacBook Pro 16" M4 Max', brand: 'Apple', category: 'computers', price: 4500000, originalPrice: null, image: '💻', badge: 'new', rating: 5, reviews: 12 },
        { id: 102, name: 'MacBook Pro 16" M4 Pro', brand: 'Apple', category: 'computers', price: 3200000, originalPrice: null, image: '💻', badge: 'new', rating: 5, reviews: 15 },
        { id: 103, name: 'MacBook Pro 14" M4 Max', brand: 'Apple', category: 'computers', price: 3500000, originalPrice: null, image: '💻', badge: 'new', rating: 5, reviews: 20 },
        { id: 104, name: 'MacBook Pro 14" M4 Pro', brand: 'Apple', category: 'computers', price: 2200000, originalPrice: null, image: '💻', badge: 'new', rating: 5, reviews: 25 },
        { id: 105, name: 'MacBook Air 15" M4', brand: 'Apple', category: 'computers', price: 1350000, originalPrice: null, image: '💻', badge: 'new', rating: 5, reviews: 34 },
        { id: 106, name: 'MacBook Air 13" M4', brand: 'Apple', category: 'computers', price: 1150000, originalPrice: null, image: '💻', badge: 'new', rating: 5, reviews: 45 },
        
        // Dell
        { id: 107, name: 'Dell XPS 15 OLED', brand: 'Dell', category: 'computers', price: 1450000, originalPrice: null, image: '💻', rating: 4, reviews: 89 },
        { id: 108, name: 'Dell XPS 13 OLED', brand: 'Dell', category: 'computers', price: 1250000, originalPrice: null, image: '💻', rating: 4, reviews: 67 },
        
        // HP
        { id: 109, name: 'HP Spectre x360 14"', brand: 'HP', category: 'computers', price: 1050000, originalPrice: null, image: '💻', badge: 'bestseller', rating: 4, reviews: 56 },
        
        // Gaming
        { id: 110, name: 'ASUS ROG Zephyrus G16', brand: 'ASUS', category: 'computers', price: 1850000, originalPrice: null, image: '🎮', badge: 'new', rating: 5, reviews: 23 },
        { id: 111, name: 'MSI Raider A18 HX', brand: 'MSI', category: 'computers', price: 2200000, originalPrice: null, image: '🎮', badge: 'new', rating: 5, reviews: 18 },
        { id: 112, name: 'Alienware m18 X', brand: 'Alienware', category: 'computers', price: 2450000, originalPrice: null, image: '🎮', badge: 'new', rating: 5, reviews: 12 },
        { id: 113, name: 'Razer Blade 18', brand: 'Razer', category: 'computers', price: 2350000, originalPrice: null, image: '🎮', badge: 'new', rating: 5, reviews: 15 }
    ],
    
    audio: [
        // AirPods
        { id: 201, name: 'AirPods Pro 3', brand: 'Apple', category: 'audio', price: 220000, originalPrice: null, image: '🎧', badge: 'new', rating: 5, reviews: 128 },
        { id: 202, name: 'AirPods Pro 2 USB-C', brand: 'Apple', category: 'audio', price: 175000, originalPrice: null, image: '🎧', badge: 'bestseller', rating: 5, reviews: 256 },
        { id: 203, name: 'AirPods Max 2025', brand: 'Apple', category: 'audio', price: 550000, originalPrice: null, image: '🎧', badge: 'new', rating: 5, reviews: 45 },
        { id: 204, name: 'AirPods 4', brand: 'Apple', category: 'audio', price: 125000, originalPrice: null, image: '🎧', rating: 4, reviews: 89 },
        
        // Samsung
        { id: 205, name: 'Galaxy Buds3 Pro', brand: 'Samsung', category: 'audio', price: 180000, originalPrice: null, image: '🎧', badge: 'new', rating: 4, reviews: 45 },
        { id: 206, name: 'Galaxy Buds3', brand: 'Samsung', category: 'audio', price: 120000, originalPrice: null, image: '🎧', rating: 4, reviews: 78 },
        
        // Sony
        { id: 207, name: 'Sony WH-1000XM6', brand: 'Sony', category: 'audio', price: 350000, originalPrice: null, image: '🎧', badge: 'new', rating: 5, reviews: 123 },
        { id: 208, name: 'Sony WH-1000XM5', brand: 'Sony', category: 'audio', price: 285000, originalPrice: null, image: '🎧', rating: 5, reviews: 123 },
        { id: 209, name: 'Sony WF-1000XM5', brand: 'Sony', category: 'audio', price: 250000, originalPrice: null, image: '🎧', rating: 5, reviews: 89 },
        
        // Bose
        { id: 210, name: 'Bose QC Ultra', brand: 'Bose', category: 'audio', price: 320000, originalPrice: null, image: '🎧', badge: 'new', rating: 5, reviews: 89 },
        
        // Speakers
        { id: 211, name: 'Sonos Arc 2', brand: 'Sonos', category: 'audio', price: 680000, originalPrice: null, image: '🔊', badge: 'new', rating: 5, reviews: 45 },
        { id: 212, name: 'Sonos Era 300', brand: 'Sonos', category: 'audio', price: 420000, originalPrice: null, image: '🔊', badge: 'new', rating: 5, reviews: 34 }
    ],
    
    wearables: [
        // Apple Watch
        { id: 301, name: 'Apple Watch Ultra 3', brand: 'Apple', category: 'wearables', price: 650000, originalPrice: null, image: '⌚', badge: 'new', rating: 5, reviews: 45 },
        { id: 302, name: 'Apple Watch Ultra 2', brand: 'Apple', category: 'wearables', price: 520000, originalPrice: 600000, image: '⌚', badge: 'promo', rating: 5, reviews: 89 },
        { id: 303, name: 'Apple Watch Series 10', brand: 'Apple', category: 'wearables', price: 380000, originalPrice: null, image: '⌚', badge: 'new', rating: 5, reviews: 156 },
        { id: 304, name: 'Apple Watch Series 9', brand: 'Apple', category: 'wearables', price: 320000, originalPrice: null, image: '⌚', rating: 5, reviews: 156 },
        
        // Samsung
        { id: 305, name: 'Galaxy Watch Ultra', brand: 'Samsung', category: 'wearables', price: 380000, originalPrice: null, image: '⌚', badge: 'new', rating: 4, reviews: 45 },
        { id: 306, name: 'Galaxy Watch 7', brand: 'Samsung', category: 'wearables', price: 280000, originalPrice: null, image: '⌚', rating: 4, reviews: 78 },
        
        // Fitbit
        { id: 307, name: 'Fitbit Charge 7', brand: 'Fitbit', category: 'wearables', price: 95000, originalPrice: null, image: '⌚', badge: 'new', rating: 4, reviews: 234 },
        { id: 308, name: 'Garmin Fenix 8', brand: 'Garmin', category: 'wearables', price: 550000, originalPrice: null, image: '⌚', badge: 'new', rating: 5, reviews: 34 },
        
        // Smart Home
        { id: 309, name: 'Google Nest Hub 2', brand: 'Google', category: 'wearables', price: 95000, originalPrice: null, image: '🏠', rating: 4, reviews: 45 },
        { id: 310, name: 'Amazon Echo Show 15', brand: 'Amazon', category: 'wearables', price: 280000, originalPrice: null, image: '🏠', badge: 'new', rating: 4, reviews: 67 }
    ],
    
    accessories: [
        // Phone Cases
        { id: 401, name: 'OtterBox Defender', brand: 'OtterBox', category: 'accessories', price: 30000, originalPrice: null, image: '📱', rating: 5, reviews: 89 },
        { id: 402, name: 'Spigen Ultra Hybrid', brand: 'Spigen', category: 'accessories', price: 18000, originalPrice: null, image: '📱', rating: 4, reviews: 156 },
        { id: 403, name: 'UAG Blaze', brand: 'UAG', category: 'accessories', price: 28000, originalPrice: null, image: '📱', rating: 5, reviews: 45 },
        { id: 404, name: 'Mous Limitless', brand: 'Mous', category: 'accessories', price: 35000, originalPrice: null, image: '📱', rating: 4, reviews: 34 },
        
        // Chargers
        { id: 405, name: 'Belkin 15W Sans Fil', brand: 'Belkin', category: 'accessories', price: 55000, originalPrice: null, image: '⚡', badge: 'new', rating: 5, reviews: 67 },
        { id: 406, name: 'Anker 100W Gan', brand: 'Anker', category: 'accessories', price: 65000, originalPrice: null, image: '⚡', badge: 'new', rating: 5, reviews: 234 },
        { id: 407, name: 'Anker Chargeur Rapide', brand: 'Anker', category: 'accessories', price: 25000, originalPrice: null, image: '⚡', rating: 5, reviews: 234 },
        
        // Power Banks
        { id: 408, name: 'Anker 30 000mAh', brand: 'Anker', category: 'accessories', price: 75000, originalPrice: null, image: '🔋', badge: 'new', rating: 5, reviews: 234 },
        { id: 409, name: 'Anker 20 000mAh', brand: 'Anker', category: 'accessories', price: 45000, originalPrice: null, image: '🔋', badge: 'bestseller', rating: 5, reviews: 234 },
        
        // Computer Accessories
        { id: 410, name: 'Logitech MX Master 4S', brand: 'Logitech', category: 'accessories', price: 95000, originalPrice: null, image: '🖱️', rating: 5, reviews: 89 },
        { id: 411, name: 'Logitech MX Keys', brand: 'Logitech', category: 'accessories', price: 75000, originalPrice: null, image: '⌨️', rating: 5, reviews: 67 },
        { id: 412, name: 'Samsung T9 2To', brand: 'Samsung', category: 'accessories', price: 195000, originalPrice: null, image: '💾', badge: 'new', rating: 5, reviews: 45 },
        { id: 413, name: 'Logitech Brio 4K', brand: 'Logitech', category: 'accessories', price: 125000, originalPrice: null, image: '📷', rating: 5, reviews: 56 }
    ],
    
    security: [
        // IP Cameras
        { id: 501, name: 'Reolink RLC-811A 4K', brand: 'Reolink', category: 'security', price: 145000, originalPrice: null, image: '📹', badge: 'new', rating: 5, reviews: 45 },
        { id: 502, name: 'Hikvision DS-2CD2387G2 4K', brand: 'Hikvision', category: 'security', price: 180000, originalPrice: null, image: '📹', badge: 'new', rating: 5, reviews: 34 },
        { id: 503, name: 'Dahua IPC-HFW2849 4K', brand: 'Dahua', category: 'security', price: 165000, originalPrice: null, image: '📹', rating: 4, reviews: 28 },
        { id: 504, name: 'Reolink Argus 3 Pro', brand: 'Reolink', category: 'security', price: 85000, originalPrice: null, image: '📹', badge: 'bestseller', rating: 5, reviews: 89 },
        { id: 505, name: 'Eufy S350 4K', brand: 'Eufy', category: 'security', price: 195000, originalPrice: null, image: '📹', badge: 'new', rating: 5, reviews: 23 },
        
        // PTZ
        { id: 506, name: 'Hikvision PTZ 4K', brand: 'Hikvision', category: 'security', price: 350000, originalPrice: null, image: '📹', badge: 'new', rating: 5, reviews: 15 },
        
        // Wifi/Solar
        { id: 508, name: 'Reolink Go Plus 4G', brand: 'Reolink', category: 'security', price: 120000, originalPrice: null, image: '📹', rating: 4, reviews: 56 },
        
        // Doorbell
        { id: 510, name: 'Ring Video Doorbell Pro', brand: 'Ring', category: 'security', price: 145000, originalPrice: null, image: '🔔', badge: 'new', rating: 5, reviews: 67 },
        
        // DVR/NVR
        { id: 513, name: 'Hikvision NVR 8CH 4K', brand: 'Hikvision', category: 'security', price: 280000, originalPrice: null, image: '📀', rating: 5, reviews: 23 },
        
        // Access Control
        { id: 517, name: 'Zkteco Access Control', brand: 'Zkteco', category: 'security', price: 185000, originalPrice: null, image: '🔐', rating: 5, reviews: 12 }
    ]
};

// Get all products as flat array
function getAllProducts() {
    return [
        ...allProducts.smartphones,
        ...allProducts.computers,
        ...allProducts.audio,
        ...allProducts.wearables,
        ...allProducts.accessories
    ];
}

// Get products by category
function getProductsByCategory(category) {
    return allProducts[category] || [];
}

// Get product by ID
function getProductById(id) {
    return getAllProducts().find(p => p.id === id);
}

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