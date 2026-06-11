/**
 * E-Tech Analytics Configuration
 * Google Analytics 4 and other tracking
 */

// ===================
// Google Analytics 4
// ===================

const GA_CONFIG = {
    // Get from Google Analytics → Property → Data Streams → Web → Measurement ID
    MEASUREMENT_ID: 'G-XXXXXXXXXX',
    
    // Optional: Enhanced measurements
    ENHANCED_TRACKING: true
};

/**
 * Initialize Google Analytics 4
 */
function initGA() {
    // Load gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_CONFIG.MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', GA_CONFIG.MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href
    });
}

// Track events
function trackEvent(eventName, parameters = {}) {
    if (window.gtag) {
        gtag('event', eventName, parameters);
    }
}

// ===================
// Common Events
// ===================

/**
 * Track product view
 */
function trackProductView(productId, productName, price) {
    trackEvent('view_item', {
        currency: 'USD',
        value: price,
        items: [{ item_id: productId, item_name: productName, price }]
    });
}

/**
 * Track add to cart
 */
function trackAddToCart(productId, productName, price, quantity) {
    trackEvent('add_to_cart', {
        currency: 'USD',
        value: price * quantity,
        items: [{ item_id: productId, item_name: productName, price, quantity }]
    });
}

/**
 * Track begin checkout
 */
function trackBeginCheckout(total, items) {
    trackEvent('begin_checkout', {
        currency: 'USD',
        value: total,
        items: items.map(item => ({
            item_id: item.id,
            item_name: item.name,
            price: item.price,
            quantity: item.quantity
        }))
    });
}

/**
 * Track purchase
 */
function trackPurchase(orderId, total, items) {
    trackEvent('purchase', {
        transaction_id: orderId,
        currency: 'USD',
        value: total,
        items: items.map(item => ({
            item_id: item.id,
            item_name: item.name,
            price: item.price,
            quantity: item.quantity
        }))
    });
}

/**
 * Track newsletter signup
 */
function trackNewsletterSignup(email) {
    trackEvent('sign_up', { method: 'newsletter' });
}

/**
 * Track contact form
 */
function trackContactForm(subject) {
    trackEvent('generate_lead', { method: subject });
}

// ===================
// Facebook Pixel
// ===================

const FB_PIXEL_ID = 'XXXXXXXXXXXXXXXX';

/**
 * Initialize Facebook Pixel
 */
function initFBPixel() {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', FB_PIXEL_ID);
    fbq('track', 'PageView');
}

/**
 * Track Facebook event
 */
function trackFBEvent(eventName, params = {}) {
    if (window.fbq) {
        fbq('track', eventName, params);
    }
}

// Export
if (typeof module !== 'undefined') {
    module.exports = { GA_CONFIG, initGA, trackEvent, initFBPixel, trackFBEvent };
}