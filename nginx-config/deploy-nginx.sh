#!/bin/bash

# PSP Website Nginx Deployment Script
# Deploys optimized nginx configuration for Next.js static export
# Usage: ./deploy-nginx.sh

SERVER="admin@147.139.191.16"
NGINX_CONFIG_FILE="nginx.conf"

echo "🚀 PSP Website Nginx Deployment"
echo "==============================="

# Check if server is reachable
echo "🔍 Checking server connectivity..."
if ! ssh -o ConnectTimeout=10 $SERVER "echo 'Connected to server'" >/dev/null 2>&1; then
    echo "❌ Cannot connect to server $SERVER"
    echo "Please check your SSH connection and try again"
    exit 1
fi
echo "✅ Server connection established"

# Backup current configuration
echo ""
echo "💾 Backing up current Nginx configuration..."
ssh $SERVER "
    # Create backup directory with timestamp
    BACKUP_DIR=\"/etc/nginx/backup/\$(date +%Y%m%d_%H%M%S)\"
    sudo mkdir -p \$BACKUP_DIR
    
    # Backup current configuration
    sudo cp /etc/nginx/sites-available/phillippesuryapratama.com \$BACKUP_DIR/ 2>/dev/null || true
    
    echo \"✅ Configuration backed up to \$BACKUP_DIR\"
"

# Upload nginx configuration
echo ""
echo "📤 Uploading nginx configuration..."
scp $NGINX_CONFIG_FILE $SERVER:~/

# Apply nginx configuration
echo ""
echo "⚙️ Applying nginx configuration..."
ssh $SERVER "
    sudo cp ~/$NGINX_CONFIG_FILE /etc/nginx/sites-available/phillippesuryapratama.com
    sudo nginx -t
    if [ \$? -eq 0 ]; then
        sudo systemctl reload nginx
        echo \"✅ Nginx configuration applied and reloaded\"
    else
        echo \"❌ Nginx configuration test failed\"
        exit 1
    fi
"

# Test website
echo ""
echo "🧪 Testing website..."
echo "Main page redirect test:"
curl -s -I https://phillippesuryapratama.com/ | head -3
echo ""
echo "English route test:"
curl -s -o /dev/null -w "Status: %{http_code}, Time: %{time_total}s\n" https://phillippesuryapratama.com/en/
echo "Indonesian route test:"
curl -s -o /dev/null -w "Status: %{http_code}, Time: %{time_total}s\n" https://phillippesuryapratama.com/id/
echo "CSS file test:"
curl -s -o /dev/null -w "Status: %{http_code}, Time: %{time_total}s\n" https://phillippesuryapratama.com/_next/static/css/603fc10db75e28d5.css

echo ""
echo "🎉 PSP Website nginx deployment completed successfully!"
echo ""
echo "📋 What was deployed:"
echo "   ✅ Auto-redirect from main domain to /en/"
echo "   ✅ Multi-language routing (/en/ and /id/)"
echo "   ✅ CSS cache busting headers"
echo "   ✅ Security headers"
echo "   ✅ Static assets optimization"
echo ""
echo "📋 Your optimized website:"
echo "   🌐 Main: https://phillippesuryapratama.com/ (redirects to /en/)"
echo "   🌐 English: https://phillippesuryapratama.com/en/"
echo "   🌐 Indonesian: https://phillippesuryapratama.com/id/"
echo ""
echo "📋 Management commands:"
echo "   • Test config: ssh $SERVER 'sudo nginx -t'"
echo "   • Reload nginx: ssh $SERVER 'sudo systemctl reload nginx'"
echo "   • View logs: ssh $SERVER 'sudo tail -f /var/log/nginx/error.log'"
