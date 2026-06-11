/**
 * E-Tech Products Database
 * Base de données complète des produits tendance mondiaux
 */

// Categories principales avec sous-catégories
export const categories = {
    electronics: {
        name: "Electronics",
        icon: "🎧",
        subcategories: [
            { id: "bluetooth-audio", name: "Audio Bluetooth" },
            { id: "fast-chargers", name: "Chargeurs rapides" },
            { id: "power-banks", name: "Power Banks" },
            { id: "gaming", name: "Gaming" },
            { id: "usb-gadgets", name: "Gadgets USB" },
            { id: "mobile-accessories", name: "Mobile Accessories" }
        ]
    },
    wearables: {
        name: "Smart Wearables",
        icon: "⌚",
        subcategories: [
            { id: "smart-watches", name: "Montres connectées" },
            { id: "smart-rings", name: "Smart Rings" },
            { id: "fitness-bracelets", name: "Bracelets fitness" },
            { id: "smart-glasses", name: "Lunettes intelligentes" },
            { id: "health-gadgets", name: "Gadgets santé" }
        ]
    },
    smartHome: {
        name: "Smart Home & Entretien",
        icon: "🏠",
        subcategories: [
            { id: "robot-vacuums", name: "Robots aspirateurs" },
            { id: "air-purifiers", name: "Purificateurs d'air" },
            { id: "smart-cameras", name: "Caméras connectées" },
            { id: "smart-cleaning", name: "Nettoyage intelligent" },
            { id: "tech-kitchen", name: "Cuisine Tech" }
        ]
    },
    decoration: {
        name: "Décoration Tech",
        icon: "💡",
        subcategories: [
            { id: "led-rgb", name: "LED RGB" },
            { id: "modern-lamps", name: "Lampes modernes" },
            { id: "gaming-neons", name: "Néons gaming" },
            { id: "galaxy-projectors", name: "Galaxy Projectors" },
            { id: "led-clocks", name: "Horloges LED" },
            { id: "wifi-frames", name: "Cadres photo Wi-Fi" }
        ]
    },
    accessories: {
        name: "Accessoires Téléphone",
        icon: "📱",
        subcategories: [
            { id: "premium-cases", name: "Coques premium" },
            { id: "wireless-chargers", name: "Charge sans fil" },
            { id: "car-mounts", name: "Supports voiture" },
            { id: "usb-c-cables", name: "Câbles USB-C" },
            { id: "mag-safe", name: "Accessoires MagSafe" }
        ]
    },
    promotions: {
        name: "Promotions",
        icon: "🔥",
        subcategories: []
    }
};

// Produits tendance mondiaux
export const products = [
    // ============ ELECTRONICS ============
    {
        id: "ec001",
        name: "Écouteurs Bluetooth ANC Pro 3ème Génération",
        category: "electronics",
        subcategory: "bluetooth-audio",
        price: 89.99,
        originalPrice: 129.99,
        currency: "USD",
        description: "Découvrez le son haute fidélité avec ces écouteurs Bluetooth ANC de dernière génération. Réduction active du bruit, autonomie 32h, charge rapide USB-C.",
        features: [
            "Réduction Active du Bruit (ANC)",
            "Bluetooth 5.3 ultra-stable",
            "Autonomie 32 heures",
            "Charge rapide USB-C",
            "Étanche IPX5",
            "Microphone intégré"
        ],
        advantages: [
            "Son cristallin haute résolution",
            "Confort optimal pour usage prolongé",
            "Parfaits pour les voyages",
            "Appels mains libres nets"
        ],
        faq: [
            { q: "Quelle est l'autonomie réelle ?", a: "32 heures avec le boîtier de charge, 8 heures par charge unique." },
            { q: "Compatible avec iPhone ?", a: "Oui, Bluetooth 5.3 compatible avec tous appareils iOS et Android." },
            { q: "Résistants à la transpiration ?", a: "Oui, certification IPX5 pour transpiration et pluie légère." }
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["écouteurs", "bluetooth", "ANC", "audio", "sans fil"],
        placeholder: true,
        seo: {
            title: "Écouteurs Bluetooth ANC Pro - E-Tech",
            description: "Écouteurs Bluetooth ANC haute fidélité avec 32h autonomie. Réduction active du bruit, charge rapide USB-C.",
            keywords: "écouteurs bluetooth ANC, earbuds sans fil, headphones USB-C"
        }
    },
    {
        id: "ec002",
        name: "Chargeur MagSafe 3-en-1 Intelligent",
        category: "electronics",
        subcategory: "fast-chargers",
        price: 59.99,
        originalPrice: 79.99,
        currency: "USD",
        description: "Station de charge 3-en-1 compatible MagSafe. Chargez votre iPhone, Apple Watch et AirPods simultanément. Design compact premium.",
        features: [
            "Charge 3 appareils simultanément",
            "Compatible MagSafe",
            "LED indicateurs de charge",
            "Protection surchauffe",
            "Design compact aluminium"
        ],
        advantages: [
            "Finis les cables emmêlés",
            "Charge optimisée par appareil",
            "Sécurisé et certifié"
        ],
        faq: [
            { q: "Fonctionne avec Android ?", a: "Oui, charge Qi disponible pour tous appareils compatibles." },
            { q: "Puissance totale ?", a: "15W pour iPhone, 5W pour Watch, 5W pour AirPods." }
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["chargeur", "magsafe", "3-en-1", "wireless"],
        seo: {
            title: "Chargeur MagSafe 3-en-1 - E-Tech",
            description: "Station de charge 3-en-1 MagSafe pour iPhone, Watch et AirPods.",
            keywords: "chargeur magsafe, station charge, wireless charger"
        }
    },
    {
        id: "ec003",
        name: "Power Bank Magnétique 20000mAh",
        category: "electronics",
        subcategory: "power-banks",
        price: 49.99,
        originalPrice: 69.99,
        currency: "USD",
        description: "Power Bank haute capacité 20000mAh avec charge magnétique MagSafe. Charge sans fil rapide et double port USB-C.",
        features: [
            "Capacité 20000mAh",
            "Charge magnétique 15W",
            "Double port USB-C 65W",
            "Afficheur LED digital",
            "Design fin portable"
        ],
        advantages: [
            "3 appareils en même temps",
            "Pratique en déplacement",
            "Charge ultra-rapide"
        ],
        faq: [
            { q: "Nombre de charges iPhone ?", a: "Environ 4-5 charges complètes." },
            { q: "Type-C peut charger laptop ?", a: "Oui, jusqu'à 65W pour MacBook." }
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["power bank", "batterie externe", "20000mah", "magSafe"],
        seo: {
            title: "Power Bank 20000mAh MagSafe - E-Tech",
            description: "Power Bank 20000mAh avec charge magnétique 15W et USB-C 65W.",
            keywords: "power bank 20000mah, batterie externe USB-C"
        }
    },
    {
        id: "ec004",
        name: "Chargeur GaN 100W 4 Ports",
        category: "electronics",
        subcategory: "fast-chargers",
        price: 44.99,
        originalPrice: 59.99,
        currency: "USD",
        description: "Chargeur GaN nouvelle génération 100W. 4 ports pour charger tous vos appareils. Compact et ultra-puissant.",
        features: [
            "Technologie GaN",
            "100W total",
            "4 ports (2 USB-C, 2 USB-A)",
            "Charge intelligente",
            "Portable"
        ],
        advantages: [
            "Un seul chargeur pour tout",
            "Rapide et efficace",
            "Format voyage"
        ],
        faq: [
            { q: "Compatible MacBook Pro ?", a: "Oui, charge 100W suffisante." }
        ],
        images: ["/images/products/gan-charger-1.jpg"],
        tags: ["chargeur", "gan", "100w", "usb-c"],
        seo: {
            title: "Chargeur GaN 100W 4 Ports - E-Tech",
            description: "Chargeur GaN 100W avec 4 ports pour tous vos appareils.",
            keywords: "chargeur gan, chargeur usb-c, chargeur rapide"
        }
    },

    // ============ WEARABLES ============
    {
        id: "wr001",
        name: "Smart Ring Titanium - Génération 2026",
        category: "wearables",
        subcategory: "smart-rings",
        price: 299.99,
        originalPrice: 399.99,
        currency: "USD",
        description: "Bague connectée en titane avec suivi santé avancé. Monitorage fréquence cardiaque, sommeil, température corporelle et notifications.",
        features: [
            "Titane Grade 5",
            "Capteurs santé avancés",
            "Suivi sommeil",
            "Notifications discrètes",
            "Autonomie 7 jours",
            "Étanche 100m"
        ],
        advantages: [
            "Discret et élégant",
            "Santé 24/7",
            "Mode sommeil optimal"
        ],
        faq: [
            { q: "Tailles disponibles ?", a: "Oui, 5-13 US." },
            { q: "Application mobile ?", a: "iOS et Android." }
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["smart ring", "bague connectée", "titanium", "santé"],
        seo: {
            title: "Smart Ring Titanium 2026 - E-Tech",
            description: "Bague connectée titane avec suivi santé complet.",
            keywords: "smart ring, bague connectée, wearable santé"
        }
    },
    {
        id: "wr002",
        name: "Montre Connectée Ultra Pro GPS",
        category: "wearables",
        subcategory: "smart-watches",
        price: 249.99,
        originalPrice: 349.99,
        currency: "USD",
        description: "Montre connectée professionnelle avec GPS intégré, ECG, SpO2 et autonomie 14 jours.",
        features: [
            "GPS intégré",
            "ECG & SpO2",
            "Autonomie 14 jours",
            "Étanche 50m",
            "Écran AMOLED",
            "Assistant vocal"
        ],
        advantages: [
            "Sport et santé",
            "Autonomie exceptionnelle",
            "Écran lumineux"
        ],
        faq: [{ q: "Compatible Garmin ?", a: "Non, écosystème indépendant." }],
        images: ["/images/products/placeholder.svg"],
        tags: ["montre connectée", "smartwatch", "GPS", "ECG"],
        seo: {
            title: "Montre Connectée Ultra Pro - E-Tech",
            description: "Montre connectée GPS 14 jours autonomie avec ECG.",
            keywords: "montre connectée gps smartwatch ecg"
        }
    },
    {
        id: "wr003",
        name: "Lunettes Bluetooth AI avec Audio",
        category: "wearables",
        subcategory: "smart-glasses",
        price: 179.99,
        originalPrice: 229.99,
        currency: "USD",
        description: "Lunettes connectées avec haut-parleurs intégrés et microphone AI. Appels, musique et assistant vocal.",
        features: [
            "Haut-parleurs ouverts",
            "Microphone AI",
            "Protection UV400",
            "Monture légère",
            "Appels mains libres"
        ],
        advantages: [
            "Style et tech",
            "Confort toute journée",
            "Musique sans écouteurs"
        ],
        faq: [{ q: "Verres correcteurs ?", a: "Options disponibles." }],
        images: ["/images/products/placeholder.svg"],
        tags: ["lunettes bluetooth", "smart glasses", "audio"],
        seo: {
            title: "Lunettes Bluetooth AI - E-Tech",
            description: "Lunettes connectées avec audio et microphone AI.",
            keywords: "lunettes bluetooth, smart glasses audio"
        }
    },

    // ============ SMART HOME ============
    {
        id: "sh001",
        name: "Robot Aspirateur Lidar Ultra",
        category: "smartHome",
        subcategory: "robot-vacuums",
        price: 399.99,
        originalPrice: 549.99,
        currency: "USD",
        description: "Robot aspirateur avec navigation Lidar dernière génération. Aspiration 5000Pa, serpillière vibrante et vidage automatique.",
        features: [
            "Navigation Lidar",
            "Aspiration 5000Pa",
            "Serpillière vibrante",
            "Vidage automatique",
            "Cartographie multiple",
            "Contrôle vocal"
        ],
        advantages: [
            "Nettoyage autonome",
            "Coins accessibles",
            "Programmable"
        ],
        faq: [{ q: "Surface max ?", a: "Hasta 200m²." }],
        images: ["/images/products/placeholder.svg"],
        tags: ["robot aspirateur", "lidar", "nettoyage"],
        seo: {
            title: "Robot Aspirateur Lidar Ultra - E-Tech",
            description: "Robot aspirateur Lidar avec aspiration 5000Pa et vidage automatique.",
            keywords: "robot aspirateur lidar nettoyage automatique"
        }
    },
    {
        id: "sh002",
        name: "Purificateur d'Air HEPA 99.97%",
        category: "smartHome",
        subcategory: "air-purifiers",
        price: 199.99,
        originalPrice: 279.99,
        currency: "USD",
        description: "Purificateur professionnel HEPA H13. Capteurs AQ et contrôle app. Pour espaces jusqu'à 50m².",
        features: [
            "Filtre HEPA H13",
            "Capteurs AQ",
            "Mode silencieux",
            "Contrôle app",
            "CADR 400m³/h"
        ],
        advantages: [
            "Air pur 99.97%",
            "Silencieux",
            "Smartphone control"
        ],
        faq: [{ q: "Consommation ?", a: "45W max." }],
        images: ["/images/products/placeholder.svg"],
        tags: ["purificateur", "hepa", "air"],
        seo: {
            title: "Purificateur d'Air HEPA - E-Tech",
            description: "Purificateur HEPA H13 avec capteurs et contrôle app.",
            keywords: "purificateur d'air hepa smart"
        }
    },
    {
        id: "sh003",
        name: "Caméra de Sécurité 4K WiFi",
        category: "smartHome",
        subcategory: "smart-cameras",
        price: 129.99,
        originalPrice: 179.99,
        currency: "USD",
        description: "Caméra 4K avec vision nocturne couleur, detection IA et alarme. Cloud et SD disponibles.",
        features: [
            "Résolution 4K",
            "Vision nocturne couleur",
            "Detection IA",
            "Alarme intégrée",
            "Audio bidirectionnel",
            "Stockage cloud/SD"
        ],
        advantages: [
            "Image claire",
            "Securité complete",
            "Installation facile"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["caméra", "4k", "securité"],
        seo: {
            title: "Caméra 4K WiFi - E-Tech",
            description: "Caméra de sécurité 4K avec vision nocturne et detection IA.",
            keywords: "caméra securité 4k wifi"
        }
    },

    // ============ DECORATION ============
    {
        id: "dc001",
        name: "Kit LED RGB Gaming 16 Millions Couleurs",
        category: "decoration",
        subcategory: "led-rgb",
        price: 39.99,
        originalPrice: 59.99,
        currency: "USD",
        description: "Bandes LED 10m controlables via app. 16 millions de couleurs, sync musique et effets dynamiques.",
        features: [
            "10 mètres",
            "16M couleurs",
            "Control app",
            "Sync musique",
            "Effets dynamiques",
            "Sync TV"
        ],
        advantages: [
            "Ambiance gaming",
            "Sync musique",
            "Facile installer"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["led", "rgb", "gaming", "ambiance"],
        seo: {
            title: "Kit LED RGB Gaming - E-Tech",
            description: "Bandes LED 10m 16M couleurs avec sync musique.",
            keywords: "led rgb gaming sync musique"
        }
    },
    {
        id: "dc002",
        name: "Projecteur Galaxie Planétarium",
        category: "decoration",
        subcategory: "galaxy-projectors",
        price: 79.99,
        originalPrice: 99.99,
        currency: "USD",
        description: "Projecteur de ciel étoilé avec nebuleuse. Rotation 360° et timer. Créez votre univers.",
        features: [
            "Ciel étoilé + nébuleuse",
            "Rotation 360°",
            "Timer intégré",
            "Multiple couleurs",
            "Télécommande",
            "Silencieux"
        ],
        advantages: [
            "Ambiance détente",
            "Parfait enfants",
            "Cadeau idéal"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["projecteur", "galaxie", "planétarium"],
        seo: {
            title: "Projecteur Galaxie - E-Tech",
            description: "Projecteur ciel étoilé et nébuleuse.",
            keywords: "projecteur galaxie planétarium"
        }
    },
    {
        id: "dc003",
        name: "Horloge LED Murale WiFi",
        category: "decoration",
        subcategory: "led-clocks",
        price: 49.99,
        originalPrice: 69.99,
        currency: "USD",
        description: "Horloge LED murale RGB synchronisée WiFi. Température et humidité. Contrôle app.",
        features: [
            "Synchronisation NTP",
            "RGB dynamique",
            "Température",
            "Humidité",
            "Contrôle app",
            "Modes multiples"
        ],
        advantages: [
            "Moderne et utile",
            "Sync automatique",
            "Lisible jour/nuit"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["horloge", "led", "wifi"],
        seo: {
            title: "Horloge LED WiFi - E-Tech",
            description: "Horloge LED murale avec WiFi et capteurs.",
            keywords: "horloge led wifi temperature"
        }
    },

    // ============ ACCESSORIES ============
    {
        id: "ac001",
        name: "Coque Premium MagSafe Anti-choc",
        category: "accessories",
        subcategory: "premium-cases",
        price: 29.99,
        originalPrice: 39.99,
        currency: "USD",
        description: "Coque ultra-protectrice compatible MagSafe. Protection chute 3m, design slim premium.",
        features: [
            "Protection 3m",
            "MagSafe intégré",
            "Design slim",
            "Antichoc",
            "Garantie vie"
        ],
        advantages: [
            "保护 optimale",
            "Style premium",
            "MagSafe functional"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["coque", "magsafe", "protection"],
        seo: {
            title: "Coque MagSafe Anti-choc - E-Tech",
            description: "Coque premium MagSafe antichoc.",
            keywords: "coque magsafe antichoc"
        }
    },
    {
        id: "ac002",
        name: "Support Voiture MagNétique",
        category: "accessories",
        subcategory: "car-mounts",
        price: 24.99,
        originalPrice: 34.99,
        currency: "USD",
        description: "Support voiture magnétique360°. Installation tableau ou grille ventilation.",
        features: [
            "Aimant puissant",
            "360° rotatif",
            "Installation multiple",
            "One-hand grab",
            "Compact"
        ],
        advantages: [
            "Securité conduite",
            "Facile installer",
            "Universel"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["support", "voiture", "magnetique"],
        seo: {
            title: "Support Voiture Magnétique - E-Tech",
            description: "Support voiture magnétique360°.",
            keywords: "support voiture magnetique"
        }
    },
    {
        id: "ac003",
        name: "Câble USB-C 100W Nylon Tressé",
        category: "accessories",
        subcategory: "usb-c-cables",
        price: 19.99,
        originalPrice: 29.99,
        currency: "USD",
        description: "Câble USB-C vers USB-C 100W. Nylon tressé, transfert données rapide, certification E-Mark.",
        features: [
            "100W charge",
            "USB 3.2 Gen2",
            "Nylon tressé",
            "E-Mark certifié",
            "1.5m longueur"
        ],
        advantages: [
            "Charge ultra-rapide",
            "Durable",
            "Transfert rapide"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["cable", "usb-c", "100w"],
        seo: {
            title: "Câble USB-C 100W - E-Tech",
            description: "Câble USB-C 100W nylon tressé.",
            keywords: "cable usb-c 100w"
        }
    },

    // ============ PROMOTIONS ============
    {
        id: "pm001",
        name: "Mini Imprimante Portable Stickers",
        category: "electronics",
        subcategory: "usb-gadgets",
        price: 69.99,
        originalPrice: 99.99,
        currency: "USD",
        description: "Imprimante portable pour stickers et photos. Connexion Bluetooth, batterie rechargeable. Créez vos propres étiquettes.",
        features: [
            "Bluetooth",
            "Batterie rechargeable",
            "Papier thermique",
            "App mobile",
            "Compacte"
        ],
        advantages: [
            "Portable",
            "Créez vos stickers",
            "Fun et utile"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["imprimante", "portable", "stickers"],
        seo: {
            title: "Mini Imprimante Portable - E-Tech",
            description: "Imprimante stickers portable Bluetooth.",
            keywords: "mini imprimante portable stickers"
        }
    },
    {
        id: "pm002",
        name: "Clavier Gaming RGB Mécanique",
        category: "electronics",
        subcategory: "gaming",
        price: 89.99,
        originalPrice: 129.99,
        currency: "USD",
        description: "Clavier mécanique RGB avec switches rouges. Rétroéclairage 16M couleurs, anti-ghosting complet.",
        features: [
            "Switches rouges",
            "RGB 16M",
            "Anti-ghosting",
            "Pieds ajustables",
            "Câble tressé"
        ],
        advantages: [
            "Gaming optimal",
            "Personnalisable",
            "Durable"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["clavier", "gaming", "rgb", "mecanique"],
        seo: {
            title: "Clavier Gaming RGB Mécanique - E-Tech",
            description: "Clavier mécanique RGB gaming.",
            keywords: "clavier gaming rgb mecanique"
        }
    },
    {
        id: "pm003",
        name: "Mini Projecteur Portable 1080p",
        category: "electronics",
        subcategory: "usb-gadgets",
        price: 149.99,
        originalPrice: 199.99,
        currency: "USD",
        description: "Mini projecteur LED 1080p. Portable, batterie intégrée, HDMI/USB/TV sticks.",
        features: [
            "Résolution 1080p",
            "Batterie intégrée",
            "HDMI/USB",
            "Focus manuel",
            "Haut-parleur",
            "Sac transport"
        ],
        advantages: [
            "Cinéma partout",
            "Portable",
            "Multi-connections"
        ],
        images: ["/images/products/placeholder.svg"],
        tags: ["projecteur", "portable", "1080p"],
        seo: {
            title: "Mini Projecteur 1080p - E-Tech",
            description: "Mini projecteur portable 1080p avec batterie.",
            keywords: "mini projecteur portable 1080p"
        }
    }
];

// Fonction pour obtenir les produits par catégorie
export function getProductsByCategory(categoryId) {
    return products.filter(p => p.category === categoryId);
}

// Fonction pour obtenir les produits par sous-catégorie
export function getProductsBySubcategory(subcategoryId) {
    return products.filter(p => p.subcategory === subcategoryId);
}

// Fonction pour rechercher des produits
export function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
}

// Fonction pour obtenir un produit par ID
export function getProductById(productId) {
    return products.find(p => p.id === productId);
}

// Fonction pour obtenir les produits en promotion
export function getPromotions() {
    return products.filter(p => p.originalPrice > p.price);
}

// Fonction pour obtenir les best sellers
// ============ ADDITIONAL PRODUCTS ============
    {
        id: "pm004",
        name: "Webcam 4K HDR avec Micro",
        category: "electronics",
        subcategory: "usb-gadgets",
        price: 89.99,
        originalPrice: 129.99,
        currency: "USD",
        description: "Webcam 4K avec HDR et microphone intégré. Parfait pour streaming et appels vidéo.",
        features: ["4K HDR", "Microphone intégré", "Autofocus", "Correction lumière"],
        advantages: ["Streaming pro", "Appels nets", "Plug & Play"],
        images: ["/images/products/placeholder.svg"],
        tags: ["webcam", "4k", "streaming"],
        seo: { title: "Webcam 4K HDR - E-Tech", description: "Webcam 4K HDR streaming", keywords: "webcam 4k hdr streaming" }
    },
    {
        id: "pm005",
        name: "Souris Gaming RGB 16000 DPI",
        category: "electronics",
        subcategory: "gaming",
        price: 34.99,
        originalPrice: 49.99,
        currency: "USD",
        description: "Souris gaming RGB avec 16000 DPI. 6 boutons programmables et éclairage RGB.",
        features: ["16000 DPI", "RGB éclairage", "6 boutons", "Cable tressé"],
        advantages: ["Précision", "Confort", "Durable"],
        images: ["/images/products/placeholder.svg"],
        tags: ["souris", "gaming", "rgb"],
        seo: { title: "Souris Gaming RGB - E-Tech", description: "Souris gaming 16000 DPI", keywords: "souris gaming rgb" }
    },
    {
        id: "pm006",
        name: "Tapis de Souris XXL 90x40cm",
        category: "electronics",
        subcategory: "gaming",
        price: 19.99,
        originalPrice: 29.99,
        currency: "USD",
        description: "Tapis de souris extra-large pour setup gaming complet. Surface hydrofuge.",
        features: ["90x40cm", "Surface lisse", "Base antidérapante", "Lavable"],
        advantages: ["Couverture complète", "Précision", "Facile nettoyer"],
        images: ["/images/products/placeholder.svg"],
        tags: ["tapis", "gaming", "xxl"],
        seo: { title: "Tapis XXL Gaming - E-Tech", description: "Tapis gaming XXL", keywords: "tapis gaming xxl" }
    },
    {
        id: "wr004",
        name: "Bracelet Fitness Connecté",
        category: "wearables",
        subcategory: "fitness-bracelets",
        price: 49.99,
        originalPrice: 79.99,
        currency: "USD",
        description: "Bracelet fitness avec suivi cœur, sommeil et notifications.",
        features: ["Suivi FC", "Suivi sommeil", "Notifications", "Étanche"],
        advantages: ["Léger", "Autonomie 10 jours", "Prix accesble"],
        images: ["/images/products/placeholder.svg"],
        tags: ["bracelet", "fitness", "connecté"],
        seo: { title: "Bracelet Fitness - E-Tech", description: "Bracelet fitness connecté", keywords: "bracelet fitness" }
    },
    {
        id: "wr005",
        name: "Capteur de Température Connecté",
        category: "wearables",
        subcategory: "health-gadgets",
        price: 39.99,
        originalPrice: 59.99,
        currency: "USD",
        description: "Capteur de température et humidité connecté. Alerts smartphone.",
        features: ["Temp + Humidité", "Alertes app", "Historique", "Compact"],
        advantages: ["Maison connectée", "Alertes temps réel"],
        images: ["/images/products/placeholder.svg"],
        tags: ["capteur", "température", "maison"],
        seo: { title: "Capteur Température - E-Tech", description: "Capteur température connecté", keywords: "capteur temperature smart" }
    },
    {
        id: "sh004",
        name: "Ampoule LED WiFi RGB",
        category: "smartHome",
        subcategory: "smart-cleaning",
        price: 14.99,
        originalPrice: 24.99,
        currency: "USD",
        description: "Ampoule LED connectee WiFi. 16M couleurs controlables via app.",
        features: ["WiFi", "16M couleurs", "Control app", "E14/E27"],
        advantages: ["Ambiance customizable", "Économie énergie"],
        images: ["/images/products/placeholder.svg"],
        tags: ["ampoule", "led", "wifi", "rgb"],
        seo: { title: "Ampoule LED WiFi - E-Tech", description: "Ampoule LED WiFi RGB", keywords: "ampoule led wifi rgb" }
    },
    {
        id: "sh005",
        name: "Prise Connectée Smart",
        category: "smartHome",
        subcategory: "smart-cleaning",
        price: 19.99,
        originalPrice: 29.99,
        currency: "USD",
        description: "Prise connectée avec contrôle vocal et app. Programmable.",
        features: ["WiFi", "Contrôle vocal", "Programmable", "Consommation"],
        advantages: ["Control à distance", "Économie énergie"],
        images: ["/images/products/placeholder.svg"],
        tags: ["prise", "connectée", "smart"],
        seo: { title: "Prise Connectée - E-Tech", description: "Prise connectée WiFi", keywords: "prise smart wifi" }
    },
    {
        id: "dc004",
        name: "Bande LED USB-C 2m",
        category: "decoration",
        subcategory: "led-rgb",
        price: 24.99,
        originalPrice: 34.99,
        currency: "USD",
        description: "Bande LED 2m avec接头 USB-C. Parfait pour laptop et bureau.",
        features: ["USB-C", "2m", "RGB", "Auto-adhésif"],
        advantages: ["Portable", "Alimentation directe"],
        images: ["/images/products/placeholder.svg"],
        tags: ["led", "usb-c", "bureau"],
        seo: { title: "Bande LED USB-C - E-Tech", description: "Bande LED USB-C 2m", keywords: "led usb-c bureau" }
    },
    {
        id: "dc005",
        name: "Cadre Photo Numérique WiFi 10\"",
        category: "decoration",
        subcategory: "wifi-frames",
        price: 129.99,
        originalPrice: 179.99,
        currency: "USD",
        description: "Cadre photo numérique WiFi 10 pouces. Stockage cloud et application.",
        features: ["10 pouces", "WiFi", "Cloud storage", "App mobile"],
        advantages: ["Photos toujours visibles", "Mise à jour remote"],
        images: ["/images/products/placeholder.svg"],
        tags: ["cadre", "photo", "numérique", "wifi"],
        seo: { title: "Cadre Photo WiFi - E-Tech", description: "Cadre photo numérique WiFi", keywords: "cadre photo wifi" }
    },
    {
        id: "ac004",
        name: "Hub USB-C 7-en-1",
        category: "accessories",
        subcategory: "usb-c-cables",
        price: 39.99,
        originalPrice: 59.99,
        currency: "USD",
        description: "Hub USB-C multiport: HDMI 4K, USB-A, SD, TF, PD 100W.",
        features: ["HDMI 4K", "USB-A x2", "SD + TF", "PD 100W"],
        advantages: ["Setup complet", "Portable"],
        images: ["/images/products/placeholder.svg"],
        tags: ["hub", "usb-c", "multiport"],
        seo: { title: "Hub USB-C 7-en-1 - E-Tech", description: "Hub USB-C 7-en-1", keywords: "hub usb-c multiport" }
    },
    {
        id: "ac005",
        name: "Cable HDMI 2.1 2m",
        category: "accessories",
        subcategory: "usb-c-cables",
        price: 24.99,
        originalPrice: 39.99,
        currency: "USD",
        description: "Cable HDMI 2.1 ultra-rapide. 48Gbps, 8K60Hz, 4K120Hz.",
        features: ["HDMI 2.1", "48Gbps", "8K60Hz", "2m"],
        advantages: ["8K ready", "Durable"],
        images: ["/images/products/placeholder.svg"],
        tags: ["cable", "hdmi", "8k"],
        seo: { title: "Cable HDMI 2.1 - E-Tech", description: "Cable HDMI 2.1 8K", keywords: "cable hdmi 2.1 8k" }
    }
];

export function getBestSellers() {
    return products.slice(0, 8);
}

export function getNewProducts() {
    return products.slice(-6);
}

export default {
    categories,
    products,
    getProductsByCategory,
    getProductsBySubcategory,
    searchProducts,
    getProductById,
    getPromotions,
    getBestSellers,
    getNewProducts
};