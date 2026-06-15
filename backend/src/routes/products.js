/**
 * Products API Routes
 */

const express = require('express');
const router = express.Router();

// In-memory products (replace with Google Sheets in production)
let products = [
    // Smartphones - Apple
    { id: 1, name: 'iPhone 16 Pro Max 512Go', brand: 'Apple', category: 'smartphones', price: 1650000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 128, stock: 15 },
    { id: 2, name: 'iPhone 16 Pro Max 256Go', brand: 'Apple', category: 'smartphones', price: 1450000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 128, stock: 15 },
    { id: 3, name: 'iPhone 16 Pro 256Go', brand: 'Apple', category: 'smartphones', price: 1150000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 95, stock: 20 },
    { id: 4, name: 'iPhone 16 Plus 256Go', brand: 'Apple', category: 'smartphones', price: 980000, originalPrice: null, image: '📱', badge: null, rating: 4, reviews: 65, stock: 18 },
    { id: 5, name: 'iPhone 16 256Go', brand: 'Apple', category: 'smartphones', price: 850000, originalPrice: null, image: '📱', badge: null, rating: 4, reviews: 45, stock: 25 },
    // Smartphones - Samsung
    { id: 6, name: 'Samsung Galaxy S25 Ultra 512Go', brand: 'Samsung', category: 'smartphones', price: 1180000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 95, stock: 12 },
    { id: 7, name: 'Samsung Galaxy S25 Ultra 256Go', brand: 'Samsung', category: 'smartphones', price: 980000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 95, stock: 20 },
    { id: 8, name: 'Samsung Galaxy S25+ 256Go', brand: 'Samsung', category: 'smartphones', price: 750000, originalPrice: null, image: '📱', badge: null, rating: 4, reviews: 78, stock: 22 },
    { id: 9, name: 'Samsung Galaxy S25 256Go', brand: 'Samsung', category: 'smartphones', price: 620000, originalPrice: null, image: '📱', badge: null, rating: 4, reviews: 56, stock: 30 },
    { id: 10, name: 'Samsung Galaxy Z Fold 6 256Go', brand: 'Samsung', category: 'smartphones', price: 1450000, originalPrice: null, image: '📱', badge: 'promo', rating: 5, reviews: 45, stock: 5 },
    { id: 11, name: 'Samsung Galaxy Z Flip 6 256Go', brand: 'Samsung', category: 'smartphones', price: 850000, originalPrice: null, image: '📱', badge: null, rating: 4, reviews: 38, stock: 8 },
    // Smartphones - Google
    { id: 12, name: 'Google Pixel 10 Pro 256Go', brand: 'Google', category: 'smartphones', price: 850000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 56, stock: 18 },
    { id: 13, name: 'Google Pixel 9 Pro 256Go', brand: 'Google', category: 'smartphones', price: 750000, originalPrice: null, image: '📱', badge: null, rating: 4, reviews: 56, stock: 18 },
    { id: 14, name: 'Google Pixel 9 256Go', brand: 'Google', category: 'smartphones', price: 550000, originalPrice: null, image: '📱', badge: null, rating: 4, reviews: 35, stock: 25 },
    // Smartphones - Xiaomi
    { id: 15, name: 'Xiaomi 15 Ultra 512Go', brand: 'Xiaomi', category: 'smartphones', price: 1100000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 42, stock: 8 },
    { id: 16, name: 'Xiaomi 15 Ultra 256Go', brand: 'Xiaomi', category: 'smartphones', price: 950000, originalPrice: null, image: '📱', badge: null, rating: 5, reviews: 42, stock: 10 },
    { id: 17, name: 'Xiaomi 15 Pro 256Go', brand: 'Xiaomi', category: 'smartphones', price: 750000, originalPrice: null, image: '📱', badge: null, rating: 4, reviews: 38, stock: 15 },
    { id: 18, name: 'Xiaomi 15 256Go', brand: 'Xiaomi', category: 'smartphones', price: 580000, originalPrice: null, image: '📱', badge: null, rating: 4, reviews: 28, stock: 20 },
    // Smartphones - OnePlus
    { id: 19, name: 'OnePlus 13 512Go', brand: 'OnePlus', category: 'smartphones', price: 820000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 32, stock: 12 },
    { id: 20, name: 'OnePlus 13 256Go', brand: 'OnePlus', category: 'smartphones', price: 720000, originalPrice: null, image: '📱', badge: null, rating: 5, reviews: 32, stock: 15 },
    // Audio - Apple
    { id: 21, name: 'AirPods Pro 2', brand: 'Apple', category: 'audio', price: 175000, originalPrice: null, image: '🎧', badge: 'bestseller', rating: 5, reviews: 256, stock: 45 },
    { id: 22, name: 'AirPods 4', brand: 'Apple', category: 'audio', price: 125000, originalPrice: null, image: '🎧', badge: null, rating: 4, reviews: 128, stock: 60 },
    { id: 23, name: 'AirPods Max', brand: 'Apple', category: 'audio', price: 450000, originalPrice: 500000, image: '🎧', badge: 'promo', rating: 5, reviews: 89, stock: 15 },
    // Audio - Samsung
    { id: 24, name: 'Galaxy Buds3 Pro', brand: 'Samsung', category: 'audio', price: 145000, originalPrice: null, image: '🎧', badge: null, rating: 4, reviews: 78, stock: 30 },
    { id: 25, name: 'Galaxy Buds3', brand: 'Samsung', category: 'audio', price: 95000, originalPrice: null, image: '🎧', badge: 'bestseller', rating: 4, reviews: 156, stock: 50 },
    // Wearables - Apple
    { id: 26, name: 'Apple Watch Ultra 2', brand: 'Apple', category: 'wearables', price: 520000, originalPrice: 600000, image: '⌚', badge: 'promo', rating: 5, reviews: 89, stock: 8 },
    { id: 27, name: 'Apple Watch Series 10 45mm', brand: 'Apple', category: 'wearables', price: 380000, originalPrice: null, image: '⌚', badge: 'new', rating: 5, reviews: 145, stock: 25 },
    { id: 28, name: 'Apple Watch SE 40mm', brand: 'Apple', category: 'wearables', price: 220000, originalPrice: null, image: '⌚', badge: null, rating: 4, reviews: 78, stock: 35 },
    // Wearables - Samsung
    { id: 29, name: 'Samsung Galaxy Watch 7 44mm', brand: 'Samsung', category: 'wearables', price: 280000, originalPrice: null, image: '⌚', badge: 'new', rating: 4, reviews: 65, stock: 20 },
    { id: 30, name: 'Samsung Galaxy Watch Ultra', brand: 'Samsung', category: 'wearables', price: 450000, originalPrice: null, image: '⌚', badge: null, rating: 5, reviews: 38, stock: 10 },
    // Computers - Apple
    { id: 31, name: 'MacBook Pro 16" M4 Max', brand: 'Apple', category: 'computers', price: 3200000, originalPrice: null, image: '💻', badge: 'new', rating: 5, reviews: 67, stock: 5 },
    { id: 32, name: 'MacBook Pro 14" M4 Pro', brand: 'Apple', category: 'computers', price: 1850000, originalPrice: null, image: '💻', badge: 'new', rating: 5, reviews: 45, stock: 8 },
    { id: 33, name: 'MacBook Air 15" M4', brand: 'Apple', category: 'computers', price: 1150000, originalPrice: null, image: '💻', badge: null, rating: 5, reviews: 67, stock: 12 },
    { id: 34, name: 'MacBook Air 13" M4', brand: 'Apple', category: 'computers', price: 950000, originalPrice: null, image: '💻', badge: null, rating: 5, reviews: 89, stock: 15 },
    // Computers - Dell
    { id: 35, name: 'Dell XPS 15 OLED', brand: 'Dell', category: 'computers', price: 1450000, originalPrice: null, image: '💻', badge: null, rating: 4, reviews: 45, stock: 8 },
    { id: 36, name: 'Dell XPS 13 Plus', brand: 'Dell', category: 'computers', price: 1250000, originalPrice: null, image: '💻', badge: null, rating: 4, reviews: 38, stock: 10 },
    // Computers - HP
    { id: 37, name: 'HP Spectre x360 14"', brand: 'HP', category: 'computers', price: 1350000, originalPrice: null, image: '💻', badge: null, rating: 4, reviews: 32, stock: 6 },
    // Accessories
    { id: 38, name: 'Anker Power Bank 20000mAh', brand: 'Anker', category: 'accessories', price: 35000, originalPrice: null, image: '🔌', badge: 'bestseller', rating: 5, reviews: 234, stock: 100 },
    { id: 39, name: 'Apple USB-C Charger 35W', brand: 'Apple', category: 'accessories', price: 25000, originalPrice: null, image: '🔌', badge: null, rating: 4, reviews: 156, stock: 80 },
    { id: 40, name: 'Samsung 45W Charger', brand: 'Samsung', category: 'accessories', price: 28000, originalPrice: null, image: '🔌', badge: null, rating: 4, reviews: 89, stock: 60 },
    { id: 41, name: 'Belkin USB-C Cable 1m', brand: 'Belkin', category: 'accessories', price: 12000, originalPrice: null, image: '🔌', badge: null, rating: 4, reviews: 234, stock: 150 },
    { id: 42, name: 'OtterBox Case iPhone 16', brand: 'OtterBox', category: 'accessories', price: 18000, originalPrice: null, image: '📱', badge: null, rating: 5, reviews: 78, stock: 50 },
    { id: 43, name: 'Spigen Case iPhone 16 Pro', brand: 'Spigen', category: 'accessories', price: 8000, originalPrice: null, image: '📱', badge: 'bestseller', rating: 5, reviews: 345, stock: 120 },
    { id: 44, name: 'Screen Protector iPhone', brand: 'Spigen', category: 'accessories', price: 5000, originalPrice: null, image: '🛡️', badge: 'bestseller', rating: 5, reviews: 567, stock: 200 }
];

// Get all products
router.get('/', (req, res) => {
    const { category, brand, minPrice, maxPrice, sort, search } = req.query;
    let filtered = [...products];
    
    if (category) filtered = filtered.filter(p => p.category === category);
    if (brand) filtered = filtered.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
    if (minPrice) filtered = filtered.filter(p => p.price >= parseInt(minPrice));
    if (maxPrice) filtered = filtered.filter(p => p.price <= parseInt(maxPrice));
    if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }
    
    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    
    res.json({ total: filtered.length, products: filtered });
});

// Get single product
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

// Get categories
router.get('/meta/categories', (req, res) => {
    const categories = [...new Set(products.map(p => p.category))];
    res.json(categories);
});

// Get brands
router.get('/meta/brands', (req, res) => {
    const brands = [...new Set(products.map(p => p.brand))];
    res.json(brands);
});

module.exports = router;