<?php
/**
 * E-TECH SECURITY HEADERS
 * Ajouter ce fichier a votre .htaccess ou configuration serveur
 */

// Security Headers pour Apache (.htaccess)
header("Strict-Transport-Security: max-age=31536000; includeSubDomains");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header("Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.stripe.com;");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Permissions-Policy: geolocation=(), microphone=(), camera=()");

// Protection contre les attaques
if (isset($_SERVER['REQUEST_URI']) && strpos($_SERVER['REQUEST_URI'], '..') !== false) {
    http_response_code(403);
    exit('Forbidden');
}

// Bloquer l'acces aux fichiers sensibles
$blocked_files = ['.env', '.git', 'config.php', 'database.sql'];
foreach ($blocked_files as $file) {
    if (strpos($_SERVER['REQUEST_URI'], $file) !== false) {
        http_response_code(403);
        exit('Forbidden');
    }
}
?>

<!--
Pour Nginx, ajouter ces lignes dans votre bloc server:

add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Content-Security-Policy "default-src 'self';" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;

Pour Apache (.htaccess):
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set X-XSS-Protection "1; mode=block"
-->