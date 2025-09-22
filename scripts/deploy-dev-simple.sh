#!/bin/bash

# PT. Phillippe Surya Pratama Website Deployment Script for Next.js
# Multi-language Support (English/Indonesian) with Performance & SEO Optimization
# SSL Auto-Renewal, Dynamic Metadata, Hreflang Support
# Usage: ./scripts/deploy-dev-simple.sh

SERVER="admin@147.139.191.16"
SERVER_PATH="/var/www/dev.phillippesuryapratama.com"
DOMAIN="dev.phillippesuryapratama.com"

echo "🚀 PSP Website Deployment (Next.js + Multi-language) - DEV"
echo "=========================================================="

# Build the Next.js project with multi-language support
echo "🔨 Building Next.js project with multi-language support..."
node scripts/build-multilang.js

if [ $? -ne 0 ]; then
    echo "❌ Multi-language build failed! Please fix errors before deploying."
    exit 1
fi

echo "✅ Multi-language build successful!"

# Check if out directory exists (static export)
if [ ! -d "out" ]; then
    echo "❌ Static export failed! 'out' directory not found."
    echo "💡 Make sure next.config.ts is configured for static export."
    exit 1
fi

# Upload the built files
echo "📤 Uploading static files to server..."
scp -r out/ $SERVER:~/

# Create server directory and setup files
echo "📁 Setting up server directory..."
ssh $SERVER "
    # Create directory structure
    sudo mkdir -p $SERVER_PATH
    
    # Copy static files
    sudo cp -r ~/out/* $SERVER_PATH/
    
    # Set proper ownership
    sudo chown -R www-data:www-data $SERVER_PATH/
    sudo chmod -R 755 $SERVER_PATH/
    
    # Cleanup temp files
    rm -rf ~/out
"

# Configure Nginx for PSP dev domain with maximum optimizations
echo "⚙️  Configuring Nginx with maximum performance optimizations..."
ssh $SERVER "
    sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null << 'EOF'
server {
    listen 443 ssl http2;
    server_name $DOMAIN;
    
    root $SERVER_PATH;
    index index.html index.htm;
    
    # SSL Configuration with modern security
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security headers with CSP
    add_header X-Frame-Options 'SAMEORIGIN' always;
    add_header X-Content-Type-Options 'nosniff' always;
    add_header X-XSS-Protection '1; mode=block' always;
    add_header Referrer-Policy 'strict-origin-when-cross-origin' always;
    add_header Permissions-Policy 'camera=(), microphone=(), geolocation=()' always;
    add_header Strict-Transport-Security 'max-age=31536000; includeSubDomains; preload' always;
    add_header Content-Security-Policy 'default-src \\'self\\'; script-src \\'self\\' \\'unsafe-inline\\' \\'unsafe-eval\\'; style-src \\'self\\' \\'unsafe-inline\\'; img-src \\'self\\' data: https:; font-src \\'self\\' data:; connect-src \\'self\\';' always;
    
    # SEO headers
    add_header X-Robots-Tag 'index, follow' always;
    
    # Performance optimizations
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    
    # Handle Next.js static export routing with fallback (optimized for trailing slash)
    location / {
        try_files \$uri \$uri.html \$uri/ /index.html;
        
        # Cache control for HTML files
        location ~* \.html$ {
            expires 1h;
            add_header Cache-Control 'public, must-revalidate';
            add_header Vary 'Accept-Encoding, Accept-Language';
        }
    }
    
    # Handle trailing slash redirects (Next.js static export compatibility)
    location ~ ^/(.+)/$ {
        try_files \$uri \$uri.html /index.html;
    }
    
    # Handle files without trailing slash
    location ~ ^/(.+)$ {
        try_files \$uri \$uri.html \$uri/ /index.html;
    }
    
    # Optimize static assets with aggressive caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp|avif)$ {
        expires 1y;
        add_header Cache-Control 'public, immutable';
        add_header Vary 'Accept-Encoding';
        access_log off;
        
        # Enable CORS for fonts
        location ~* \.(woff|woff2|ttf|eot)$ {
            add_header Access-Control-Allow-Origin '*';
            expires 1y;
            add_header Cache-Control 'public, immutable';
        }
    }
    
    # Handle Next.js specific files with maximum caching
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control 'public, immutable';
        add_header Vary 'Accept-Encoding';
        access_log off;
        
        # Enable Brotli compression for Next.js assets
        location ~* \.js$ {
            add_header Content-Encoding br;
            add_header Vary 'Accept-Encoding';
        }
    }
    
    # Handle favicon with caching
    location = /favicon.ico {
        expires 1y;
        add_header Cache-Control 'public, immutable';
        access_log off;
    }
    
    # Handle robots.txt
    location = /robots.txt {
        expires 1d;
        add_header Cache-Control 'public';
        access_log off;
    }
    
    # Handle sitemap.xml
    location = /sitemap.xml {
        expires 1d;
        add_header Cache-Control 'public';
        access_log off;
    }
    
    # Handle multi-language manifest files
    location ~* \.(webmanifest|manifest\.json)$ {
        expires 1d;
        add_header Cache-Control 'public';
        add_header Content-Type 'application/manifest+json';
        add_header Vary 'Accept-Language';
        access_log off;
    }
    
    # Specific handling for Indonesian manifest
    location = /manifest-id.json {
        expires 1d;
        add_header Cache-Control 'public';
        add_header Content-Type 'application/manifest+json';
        add_header Vary 'Accept-Language';
        access_log off;
    }
    
    # Handle certificates with proper MIME type
    location /certificates/ {
        expires 1d;
        add_header Cache-Control 'public';
        add_header Content-Type 'application/pdf';
        access_log off;
    }
    
    # Gzip compression with maximum optimization
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_comp_level 9;
    gzip_proxied any;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        text/csv
        application/javascript
        application/xml+rss
        application/json
        application/xml
        application/xhtml+xml
        application/rss+xml
        application/atom+xml
        image/svg+xml
        font/woff
        font/woff2
        application/font-woff
        application/font-woff2;
    
    # Brotli compression (if available)
    brotli on;
    brotli_comp_level 6;
    brotli_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json
        application/xml
        image/svg+xml
        font/woff
        font/woff2;
    
    # Block access to sensitive files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    location ~ /(node_modules|\.git|\.env|\.DS_Store|Thumbs\.db) {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Custom error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /500.html;
    
    # Optimized logging
    access_log /var/log/nginx/$DOMAIN.access.log combined buffer=16k flush=5s;
    error_log /var/log/nginx/$DOMAIN.error.log warn;
}

# Redirect HTTP to HTTPS with proper handling
server {
    listen 80;
    server_name $DOMAIN;
    
    # Redirect to HTTPS with proper status code
    return 301 https://$DOMAIN\$request_uri;
}
EOF

    # Enable the site
    sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
    
    # Test Nginx configuration
    sudo nginx -t
    
    if [ \$? -eq 0 ]; then
        sudo systemctl reload nginx
        echo '✅ Nginx configuration updated and reloaded'
    else
        echo '❌ Nginx configuration test failed'
        exit 1
    fi
"

# Setup SSL with Let's Encrypt and Auto-Renewal
echo "🔒 Setting up SSL certificate with auto-renewal..."
ssh $SERVER "
    # Install certbot if not already installed
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
    
    # Get SSL certificate
    sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@phillippesuryapratama.com
    
    # Setup auto-renewal
    sudo systemctl enable certbot.timer
    sudo systemctl start certbot.timer
    
    echo '✅ SSL certificate installed with auto-renewal'
"

# Create SEO files if they don't exist
echo "📄 Setting up SEO files..."
ssh $SERVER "
    # Create robots.txt if it doesn't exist
    if [ ! -f '$SERVER_PATH/robots.txt' ]; then
        sudo tee $SERVER_PATH/robots.txt > /dev/null << 'ROBOTS'
User-agent: *
Allow: /

# Sitemap
Sitemap: https://$DOMAIN/sitemap.xml

# Block unnecessary crawlers
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /
ROBOTS
        sudo chown www-data:www-data $SERVER_PATH/robots.txt
    fi
    
    # Create sitemap.xml with multi-language support if it doesn't exist
    if [ ! -f '$SERVER_PATH/sitemap.xml' ]; then
        sudo tee $SERVER_PATH/sitemap.xml > /dev/null << 'SITEMAP'
<?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'
        xmlns:xhtml='http://www.w3.org/1999/xhtml'>
    <!-- English version (default) -->
    <url>
        <loc>https://$DOMAIN/</loc>
        <lastmod>$(date -u +%Y-%m-%dT%H:%M:%S+00:00)</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        <xhtml:link rel='alternate' hreflang='en' href='https://$DOMAIN/' />
        <xhtml:link rel='alternate' hreflang='id' href='https://$DOMAIN/id/' />
        <xhtml:link rel='alternate' hreflang='x-default' href='https://$DOMAIN/' />
    </url>
    <!-- Indonesian version -->
    <url>
        <loc>https://$DOMAIN/id/</loc>
        <lastmod>$(date -u +%Y-%m-%dT%H:%M:%S+00:00)</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
        <xhtml:link rel='alternate' hreflang='en' href='https://$DOMAIN/' />
        <xhtml:link rel='alternate' hreflang='id' href='https://$DOMAIN/id/' />
        <xhtml:link rel='alternate' hreflang='x-default' href='https://$DOMAIN/' />
    </url>
    <!-- Indonesian redirect route -->
    <url>
        <loc>https://$DOMAIN/id</loc>
        <lastmod>$(date -u +%Y-%m-%dT%H:%M:%S+00:00)</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>
SITEMAP
        sudo chown www-data:www-data $SERVER_PATH/sitemap.xml
    fi
"

# Verify deployment
echo ""
echo "🔍 Verifying deployment..."
sleep 5

# Check if domain resolves correctly
IP_CHECK=$(nslookup $DOMAIN | grep -A1 "Name:" | tail -1 | awk '{print $2}')
if [ "$IP_CHECK" = "147.139.191.16" ]; then
    echo "✅ DNS resolution correct: $IP_CHECK"
else
    echo "⚠️  DNS may not have propagated yet. Current IP: $IP_CHECK"
fi

# Test HTTP response
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN 2>/dev/null || echo "000")
if [ "$HTTP_STATUS" -eq 200 ]; then
    echo "✅ Website is accessible with SSL!"
    echo "🌐 Website: https://$DOMAIN"
    
    # Test performance
    echo ""
    echo "⚡ Performance Check:"
    curl -s -o /dev/null -w "Response Time: %{time_total}s\n" https://$DOMAIN
    curl -s -o /dev/null -w "Download Size: %{size_download} bytes\n" https://$DOMAIN
    
else
    echo "⚠️  Website not yet accessible (HTTP Status: $HTTP_STATUS)"
    echo "💡 This might be due to DNS propagation delay (up to 24 hours)"
    echo "🔧 You can test directly: curl http://147.139.191.16"
fi

echo ""
echo "🎉 Deployment completed!"
echo ""
echo "📋 Performance Features Enabled:"
echo "   ✅ Static file caching (1 year)"
echo "   ✅ Gzip compression"
echo "   ✅ Security headers"
echo "   ✅ SSL with auto-renewal"
echo "   ✅ SEO optimization"
echo "   ✅ Multi-language support (EN/ID)"
echo "   ✅ Dynamic metadata"
echo "   ✅ Hreflang tags"
echo "   ✅ Error pages (404/500)"
echo ""
echo "📋 Next Steps:"
echo "   1. Test website: https://$DOMAIN"
echo "   2. Test Indonesian version: https://$DOMAIN/id/"
echo "   3. Test Indonesian redirect: https://$DOMAIN/id"
echo "   4. Test error pages: https://$DOMAIN/404, https://$DOMAIN/500"
echo "   5. Monitor performance: Google PageSpeed Insights"
echo "   6. Submit sitemap to Google Search Console"
echo "   7. Verify hreflang tags in Google Search Console"
echo "   8. Setup Google Analytics (optional)"
echo ""
echo "🔧 SSL Auto-Renewal Status:"
echo "   • Certificate expires: $(ssh $SERVER 'sudo certbot certificates 2>/dev/null | grep -A1 "$DOMAIN" | grep "Expiry Date" | cut -d: -f2- | xargs')"
echo "   • Auto-renewal: Enabled via systemd timer"
echo "   • Same setup as: phillippesuryapratama.com & anugerahpancawisesa.com"
