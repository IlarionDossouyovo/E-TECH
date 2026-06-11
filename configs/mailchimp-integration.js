/**
 * E-Tech Mailchimp Integration
 * Configure your Mailchimp account for newsletter subscriptions
 */

const MAILCHIMP_CONFIG = {
    // Get from Mailchimp Dashboard → Account → Extras → API Keys
    API_KEY: 'YOUR_MAILCHIMP_API_KEY',
    
    // Get from Mailchimp Dashboard → Audience → Settings → Audience name and defaults
    LIST_ID: 'YOUR_AUDIENCE_LIST_ID',
    
    // Your datacenter (last part of API key, e.g., 'us1', 'us2')
    DATACENTER: 'us1',
    
    // Tags for segmentation
    TAGS: ['website', 'newsletter']
};

/**
 * Subscribe email to newsletter
 * Call this from your form handler
 */
async function subscribeToNewsletter(email, tags = []) {
    const url = `https://${MAILCHIMP_CONFIG.DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_CONFIG.LIST_ID}/members`;
    
    const data = {
        email_address: email,
        status: 'subscribed',
        tags: [...MAILCHIMP_CONFIG.TAGS, ...tags],
        merge_fields: {
            SOURCE: 'E-Tech Website'
        }
    };
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `apikey ${MAILCHIMP_CONFIG.API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            return { success: true, message: 'Abonnement réussi!' };
        } else if (response.status === 400) {
            const error = await response.json();
            if (error.title === 'Member Exists') {
                return { success: true, message: 'Déjà abonné!' };
            }
            return { success: false, message: error.detail };
        }
        throw new Error('Subscription failed');
    } catch (error) {
        console.error('Newsletter error:', error);
        return { success: false, message: 'Erreur. Réessayez plus tard.' };
    }
}

/**
 * Unsubscribe from newsletter
 */
async function unsubscribeFromNewsletter(email) {
    const subscriberHash = await getSubscriberHash(email);
    const url = `https://${MAILCHIMP_CONFIG.DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_CONFIG.LIST_ID}/members/${subscriberHash}`;
    
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': `apikey ${MAILCHIMP_CONFIG.API_KEY}`
            }
        });
        return { success: response.ok };
    } catch (error) {
        return { success: false };
    }
}

/**
 * Get subscriber hash (MD5 of lowercase email)
 */
async function getSubscriberHash(email) {
    // Simple hash for demo - in production use proper MD5
    return email.toLowerCase();
}

// Export for use in frontend
if (typeof module !== 'undefined') {
    module.exports = { MAILCHIMP_CONFIG, subscribeToNewsletter, unsubscribeFromNewsletter };
}