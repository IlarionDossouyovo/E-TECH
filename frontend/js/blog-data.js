/**
 * E-Tech Blog Database
 * Articles de blog générés automatiquement par catégorie
 */

export const blogCategories = {
    electronics: {
        name: "Electronics",
        icon: "🎧",
        description: "Les gadgets électroniques tendance"
    },
    wearables: {
        name: "Wearables",
        icon: "⌚",
        description: "Les objets connectés du futur"
    },
    smartHome: {
        name: "Smart Home",
        icon: "🏠",
        description: "La maison intelligente"
    },
    decoration: {
        name: "Décoration",
        icon: "💡",
        description: "Tendances LED et gaming"
    }
};

export const blogPosts = [
    // ============ ELECTRONICS ============
    {
        id: "elec001",
        title: "Les gadgets électroniques tendance en 2026",
        category: "electronics",
        excerpt: "Découvrez les appareils électroniques qui font vibrer le monde tech cette année. Des innovations révolutionnaires aux accessoires indispensables.",
        content: `
## Les must-have de 2026

L'année 2026 marque un tournant dans l'univers de l'électronique grand public. Voici les tendances qui dominent le marché :

### 1. Chargeurs GaN
La technologie GaN (Nitrure de Gallium) révolutionne la charge. Ces chargeurs sont :
- **Plus compacts** : jusqu'à 50% plus petits
- **Plus puissants** : jusqu'à 100W
- **Moins chauffants** : efficacité supérieure

### 2. Écouteurs ANC
La réduction active du bruit devient un standard. Les modèles 2026 offrent :
- ANC adaptatif automatique
- Transparence intelligente
- Autonomie 30h+

### 3. Power Banks nouvelle génération
Les batteries externes évoluent :
- Charge magnétique MagSafe
- Capacités 20000-30000mAh
- Affichage digital LED
- Ports USB-C 65W

### 4. Gadgets USB-C
L'USB-C devient universel :
- Hubs multiports
- Adaptateurs vidéo
- Stockage portable

## Notre sélection E-Tech

Nous avons sélectionné les meilleurs produits pour vous. Cliquez sur chaque catégorie pour découvrir notre collection exclusive.
        `,
        image: "/images/blog/electronics-2026.jpg",
        author: "E-Tech Team",
        date: "2026-06-01",
        readTime: "5 min",
        tags: ["gadgets", "2026", "tendance", "électronique"],
        seo: {
            title: "Gadgets électroniques tendance 2026 | E-Tech",
            description: "Découvrez les gadgets électroniques les plus tendance de 2026.",
            keywords: "gadgets electroniques 2026, tendance tech"
        }
    },
    {
        id: "elec002",
        title: "Comment choisir un chargeur rapide",
        category: "electronics",
        excerpt: "Guide complet pour sélectionner le chargeur idéal pour vos appareils. Puissance, protocole, sécurité : tout ce qu'il faut savoir.",
        content: `
## Pourquoi un bon chargeur compte

Choisir le bon chargeur est essentiel pour :
- **Préserver votre batterie** : un chargeur inadapté peut l'endommager
- **Gagner du temps** : la charge rapide varie de 5W à 100W
- **Sécuriser vos appareils** : les certifications comptent

## Les critères essentiels

### 1. La puissance (Watts)
- **5W** : Charge lente de base
- **18W** : Quick Charge
- **30W** : Charge rapide
- **65W** : Chargeur universel laptop
- **100W** : Chargeurboost

### 2. Les protocoles
- **USB-PD** : Universel, recommandé
- **Quick Charge** : Qualcomm
- **SuperCharge** : Huawei
- **VOOC** : Oppo

### 3. Le nombre de ports
- 1 port : Usage simple
- 2-3 ports : Multi-appareils
- 4+ ports : Setup complet

## Notre recommandation

Pour un usage polyvalent, nous recommandons :
- Chargeur GaN 65W 2 ports USB-C
- Certification USB-PD
- Protection surchauffe
        `,
        image: "/images/blog/charger-guide.jpg",
        author: "E-Tech Team",
        date: "2026-05-15",
        readTime: "4 min",
        tags: ["chargeur", "guide", "usb-c", "rapide"],
        seo: {
            title: "Comment choisir un chargeur rapide | E-Tech",
            description: "Guide pour choisir le chargeur rapide idéal.",
            keywords: "choisir chargeur rapide, guide chargeur usb-c"
        }
    },
    {
        id: "elec003",
        title: "Top 10 accessoires électroniques indispensables",
        category: "electronics",
        excerpt: "La sélection E-Tech des accessoires qu every tech-addict devrait avoir. Qualité, utilité et style au rendez-vous.",
        content: `
## Top 10 E-Tech

Voici notre sélection exclusive des accessoires incontournabes :

1. **Chargeur GaN 100W** - Le cœur de votre setup
2. **Power Bank 20000mAh** - L'énergie partout
3. **Écouteurs ANC** - Votre bulle sonore
4. **Câble USB-C premium** - La connexion fiable
5. **Hub USB-C** - L'extension polyvalente
6. **Support MagSafe** - Le comodidad quotidien
7. **Webcam HD** - Pour vos appels
8. **Clavier mécanique** - La précision
9. **Souris portable** - L'ergonomie
10. **Adaptateur HDMI** - L'affichage optimal

## Pourquoi ces produits ?

Chaque accessory a été sélectionné pour :
- Qualité de fabrication
- Utilité quotidienne
- Rapport qualité-prix
- Durabilité
        `,
        image: "/images/blog/top-accessories.jpg",
        author: "E-Tech Team",
        date: "2026-05-01",
        readTime: "3 min",
        tags: ["accessoires", "top 10", "indispensable"],
        seo: {
            title: "Top 10 accessoires électroniques | E-Tech",
            description: "Les 10 accessoires incontournabes.",
            keywords: "top accessoires electroniques"
        }
    },

    // ============ WEARABLES ============
    {
        id: "wear001",
        title: "Smart Ring vs Montre connectée",
        category: "wearables",
        excerpt: "Comparatif complet entre les bagues et montres connectées. Quel wearable choisir selon votre mode de vie ?",
        content: `
## Le match : Smart Ring vs Smartwatch

Deux approches différentes pour la santé connectée :

### Smart Ring
**Avantages :**
- Ultra-discret
- Confort maximal
- Santé 24/7
- Prix accessible
- Batterie 7 jours

**Inconvénients :**
- Écran limité
- Fonctionnalités réduites

### Montre Connectée
**Avantages :**
- Écran interactif
- GPS intégré
- Plus de fonctionnalités
- Apps dédiées

**Inconvénients :**
- Encombrant
- Batterie 1-2 jours
- Prix élevé

## Notre verdict

Choisissez selon votre usage :
- **Minimaliste + santé** → Smart Ring
- **Sportif + fonctionnalités** → Montre
- **Les deux** → Combinaison idéale
        `,
        image: "/images/blog/smart-ring-vs-watch.jpg",
        author: "E-Tech Team",
        date: "2026-04-20",
        readTime: "4 min",
        tags: ["smart ring", "montre connectée", "comparatif"],
        seo: {
            title: "Smart Ring vs Montre connectée | E-Tech",
            description: "Comparatif smart ring vs montre connectée.",
            keywords: "smart ring vs montre connectée"
        }
    },
    {
        id: "wear002",
        title: "Les wearables du futur",
        category: "wearables",
        excerpt: "Vers où se dirige la technologie portable ? IA, santé predictive et design nouvelle génération.",
        content: `
## L'avenir des wearables

### 2026-2027 : La révolution IA

Les wearables deviennent des assistants de santé :

#### Health Predictive
- Détection précoce des maladies
- Alertes santé en temps réel
- Suivi génétique intégré

#### IA Personnalisée
- Conseils adaptés à votre profil
- Entraînement personnalisé
- Sommeil optimisé

#### Design Innovant
- Bijoux connectés
- Vêtements tech
- Tatouages temporaires

## Ce qui arrive

1. **Smart Ring 2.0** - Plus de capteurs
2. **Lunettes AR** - Réalité augmentée
3. **Vêtements connected** - Santé intégrée
4. **Implantables** - Sous la peau
        `,
        image: "/images/blog/wearables-future.jpg",
        author: "E-Tech Team",
        date: "2026-04-01",
        readTime: "3 min",
        tags: ["wearables", "futur", "IA"],
        seo: {
            title: "Les wearables du futur | E-Tech",
            description: "L'avenir des wearables connectés.",
            keywords: "wearables futur technologie"
        }
    },

    // ============ SMART HOME ============
    {
        id: "home001",
        title: "Pourquoi les maisons intelligentes explosent",
        category: "smartHome",
        excerpt: "La domotique connaît une croissance exponentielle. Voici pourquoi et comment en profiter.",
        content: `
## La révolution Smart Home

### Pourquoi ça explose

1. **Prix accessibles** : -60% en 3 ans
2. **Facilité d'installation** : Plug & Play
3. **Économies d'énergie** : jusqu'à 30%
4. **Confort** : Maison adaptée à vos habitudes
5. **Sécurité** : Protection active

## Les essentiels

### Gestion énergie
- Thermostat intelligent
- Prises connectées
- Éclairage LED

### Sécurité
- Caméras IP
- Détecteurs mouvement
- Serrures connectées

### Confort
- Robot aspirateur
- Purificateur d'air
- Assistant vocal

## Notre approche

Commencez simple et agrandissez progressivement :
1. Ampoules connectées
2. Prises intelligentes
3. Caméra
4. Robot aspirateur
5. Maison complète
        `,
        image: "/images/blog/smart-home.jpg",
        author: "E-Tech Team",
        date: "2026-03-15",
        readTime: "4 min",
        tags: ["smart home", "domotique", "maison connectée"],
        seo: {
            title: "Pourquoi les maisons intelligentes | E-Tech",
            description: "La révolution de la maison connectée.",
            keywords: "maison intelligente domotique"
        }
    },
    {
        id: "home002",
        title: "Guide complet : Robot aspirateur",
        category: "smartHome",
        excerpt: "Tout savoir avant d'acheter. Types, fonctionnalités, marques et conseils d'installation.",
        content: `
## Guide Robot Aspirateur

### Les types

1. **Aspiration seule** - Basique
2. **Aspiration + Serpillière** - Complet
3. **Vidage automatique** - Premium
4. **Station laveuse** - Haut de gamme

### Les technologies clés

#### Navigation
- **Lidar** : Cartographie précise
- **Caméra** : Reconnaissance objets
- **Gyroscope** : Déplacement basique

#### Puissance
- 2000Pa : Appartement
- 3500Pa : Maison moyenne
- 5000Pa : Grande surface

### Notre sélection

**Rapport qualité-prix :**
- Robot Lidar 3500Pa
- Serpillière vibrante
- Application mobile

**Premium :**
- Robot Lidar Ultra
- Vidage automatique
- Station laveuse
        `,
        image: "/images/blog/robot-guide.jpg",
        author: "E-Tech Team",
        date: "2026-03-01",
        readTime: "5 min",
        tags: ["robot aspirateur", "guide", "nettoyage"],
        seo: {
            title: "Guide robot aspirateur | E-Tech",
            description: "Guide complet robot aspirateur.",
            keywords: "guide robot aspirateur"
        }
    },

    // ============ DECORATION ============
    {
        id: "deco001",
        title: "Tendances LED et Gaming 2026",
        category: "decoration",
        excerpt: "Créez votre ambiance gaming parfaite. Les tendances décoration tech du moment.",
        content: `
## Ambiance Gaming Parfaite

### Les tendances LED

1. **RGB addressable** - 16M couleurs
2. **Sync musique** - Lumière qui danse
3. **Sync écran** - Immersion totale
4. **Néons flexibles** - Formes créatives

### Setup idéal

#### Bureau
- Bande LED sous bureau
- RGB clavier/souris
- Panneau arrière LED
- Aéroglow ventilateurs

#### Périphériques
- Clavier mécanique RGB
- Souris 16000 DPI
- Casque surround
- Tapis XXL LED

### Inspiration

**Cyberpunk** : Néons roses et bleus
**Minimaliste** : Blanc froid
**Gamer pro** : RGB complet
**Relaxation** : Lumière douce
        `,
        image: "/images/blog/led-gaming.jpg",
        author: "E-Tech Team",
        date: "2026-02-15",
        readTime: "3 min",
        tags: ["led", "gaming", "ambiance", "rgb"],
        seo: {
            title: "Tendances LED gaming 2026 | E-Tech",
            description: "Tendances LED et gaming.",
            keywords: "led gaming rgb decoration"
        }
    },
    {
        id: "deco002",
        title: "Créer une ambiance futuriste",
        category: "decoration",
        excerpt: "Transformez votre espace en sanctuaire tech. Design, lumière et technologie réuniés.",
        content: `
## Ambiance Futuriste

### Le concept

Un espace où technologie et esthétique se rencontrent :

#### Éclairage
- LED strips RGB
- Lampes design
- Projecteurs galaxy
- Horloges LED

#### Mobilier
- Bureau gaming ergonomique
- Fauteuil racing
- Gestion cables

#### Tech display
- Écrans suspendus
- Cadres photo WiFi
-Bornes d'exposition

### Éléments clés

1. **Lumière ambiante** - Fondamental
2. **Organisation** - Câbles cachés
3. **Personnalité** - Vos couleurs
4. **Confort** - Ergonomie

## Résultat

Un espace :
- Inspirant
- Fonctionnel
- Unique
- Relaxant
        `,
        image: "/images/blog/futuristic.jpg",
        author: "E-Tech Team",
        date: "2026-02-01",
        readTime: "3 min",
        tags: ["futuriste", "ambiance", "decoration"],
        seo: {
            title: "Créer ambiance futuriste | E-Tech",
            description: "Guide décoration tech.",
            keywords: "ambiance futuriste decoration"
        }
    }
];

// Fonction pour obtenir les articles par catégorie
export function getPostsByCategory(categoryId) {
    return blogPosts.filter(p => p.category === categoryId);
}

// Fonction pour rechercher des articles
export function searchPosts(query) {
    const lowerQuery = query.toLowerCase();
    return blogPosts.filter(p => 
        p.title.toLowerCase().includes(lowerQuery) ||
        p.excerpt.toLowerCase().includes(lowerQuery) ||
        p.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
}

// Fonction pour obtenir un article par ID
export function getPostById(postId) {
    return blogPosts.find(p => p.id === postId);
}

// Fonction pour obtenir les derniers articles
// ============ ADDITIONAL ARTICLES ============
    {
        id: "guide-achat-casque-2026",
        title: "Guide d'Achat: Comment Choisir le Casque Audio Parfait",
        category: "Guides",
        icon: "🎧",
        excerpt: "Guide complet pour choisir votre casque audio: ANC, filaire, true wireless... On vous dit tout!",
        content: "Guide complet pour choisir votre casque audio...",
        readTime: "8 min",
        date: "10 Jun 2026",
        tags: ["casque", "audio", "guide", "achat"],
        image: "/images/blog/casque.jpg"
    },
    {
        id: "review-smartwatch-pro",
        title: "Test: Smartwatch Pro - La Montre Connectée Polyvalente",
        category: "Reviews",
        icon: "⌚",
        excerpt: "Notre test complet de la Smartwatch Pro: autonomie, fonctionnalités, rapport qualité-prix.",
        content: "Test complet de la Smartwatch Pro...",
        readTime: "6 min",
        date: "8 Jun 2026",
        tags: ["montre", "connectée", "test", "review"],
        image: "/images/blog/smartwatch.jpg"
    },
    {
        id: "tendances-tech-juin-2026",
        title: "Les 5 Tendances Tech de Juin 2026",
        category: "Tendances",
        icon: "📈",
        excerpt: "IA, VR, objets connectés... Découvrez les tendances qui marqueront ce mois.",
        content: "Les tendances tech de ce mois...",
        readTime: "5 min",
        date: "5 Jun 2026",
        tags: ["tendances", "2026", "innovation"],
        image: "/images/blog/tendances.jpg"
    },
    {
        id: "astuces-smartphone",
        title: "5 Astuces Pour Optimiser Votre Smartphone",
        category: "Astuces",
        icon: "💡",
        excerpt: "Prolongez la batterie, gagnez en vitesse... Nos meilleures astuces smartphone!",
        content: "Astuces pour optimiser votre smartphone...",
        readTime: "4 min",
        date: "3 Jun 2026",
        tags: ["smartphone", "astuces", "batterie"],
        image: "/images/blog/astuces.jpg"
    },
    {
        id: "comparatif-powerbank",
        title: "Comparatif: Les Meilleures Power Banks 2026",
        category: "Guides",
        icon: "🔋",
        excerpt: "Quelle power bank choisir? Notre comparatif des meilleures batteries externes.",
        content: "Comparatif power banks...",
        readTime: "7 min",
        date: "1 Jun 2026",
        tags: ["powerbank", "batterie", "comparatif"],
        image: "/images/blog/powerbank.jpg"
    }
];

export function getLatestPosts(count = 4) {
    return blogPosts.slice(0, count);
}

export default {
    blogCategories,
    blogPosts,
    getPostsByCategory,
    searchPosts,
    getPostById,
    getLatestPosts
};