/**
 * Products API Routes
 */

const express = require('express');
const router = express.Router();

// In-memory products (replace with Google Sheets in production)
let products = [
    { id: 1, name: 'iPhone 16 Pro Max 256Go', brand: 'Apple', category: 'smartphones', price: 1450000, originalPrice: null, image: '📱', badge: 'new', rating: 5, reviews: 128, stock: 15 },
    { id: 2, name: 'AirPods Pro 2', brand: 'Apple', category: 'audio', price: 175000, originalPrice: null, image: '🎧', badge: 'bestseller', rating: 5, reviews: 256, stock: 45 },
    { id: 3, name: 'Apple Watch Ultra 2', brand: 'Apple', category: 'wearables', price: 520000, originalPrice: 600000, image: '⌚', badge: 'promo', rating: 5, reviews: 89, stock: 8 },
    { id: 4, name: 'MacBook Air M4 15"', brand: 'Apple', category: 'computers', price: 1150000, originalPrice: null, image: '💻', badge: null, rating: 5, reviews: 67, stock: 12 },
    { id: 5, name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', category: 'smartphones', price: 980000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 95, stock: 20 },
    { id: 6, name: 'Galaxy Buds3 Pro', brand: 'Samsung', category: 'audio', price: 145000, originalPrice: null, image: '🎧', badge: null, rating: 4, reviews: 78, stock: 30 },
    { id: 7, name: 'Google Pixel 9 Pro', brand: 'Google', category: 'smartphones', price: 750000, originalPrice: null, image: '📱', badge: 'new', rating: 4, reviews: 56, stock: 18 },
    { id: 8, name: 'Anker Power Bank 20000mAh', brand: 'Anker', category: 'accessories', price: 35000, originalPrice: null, image: '🔌', badge: 'bestseller', rating: 5, reviews: 234, stock: 100 }
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