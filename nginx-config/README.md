# PSP Website Nginx Configuration

## 🚀 Overview

This directory contains the optimized nginx configuration for the PSP (PT. Phillippe Surya Pratama) website. The configuration is designed for Next.js static export with multi-language support.

## 📁 Files

- `nginx.conf` - Main nginx configuration file
- `deploy-nginx.sh` - Deployment script
- `README.md` - This documentation

## 🎯 Features

### ✅ Multi-language Support
- **Main domain**: `https://phillippesuryapratama.com/` → Auto-redirect to `/en/`
- **English**: `https://phillippesuryapratama.com/en/`
- **Indonesian**: `https://phillippesuryapratama.com/id/`

### ✅ Performance Optimizations
- **Auto-redirect**: Main domain redirects to English by default
- **Cache busting**: CSS and JS files with no-cache headers
- **Static assets**: Optimized caching for images, fonts, etc.
- **Security headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection

### ✅ Next.js Static Export Support
- **Static files**: Proper handling of `/_next/static/` files
- **MIME types**: Correct content-type for CSS and JS
- **Routing**: Proper handling of multi-language routes

## 🛠️ Usage

### Deploy Configuration
```bash
cd nginx-config
chmod +x deploy-nginx.sh
./deploy-nginx.sh
```

### Manual Deployment
```bash
# Upload configuration
scp nginx.conf admin@147.139.191.16:~/

# Apply configuration
ssh admin@147.139.191.16 "
    sudo cp ~/nginx.conf /etc/nginx/sites-available/phillippesuryapratama.com
    sudo nginx -t
    sudo systemctl reload nginx
"
```

## 🔧 Configuration Details

### Auto-redirect
```nginx
location = / {
    return 301 https://$host/en/;
}
```

### Multi-language Routes
```nginx
# Indonesian route
location = /id/ {
    try_files /id/index.html =404;
}

# English route  
location = /en/ {
    try_files /en/index.html =404;
}
```

### CSS Cache Busting
```nginx
location ~* \.css$ {
    add_header Content-Type "text/css";
    add_header Cache-Control "no-cache, no-store, must-revalidate";
    add_header Pragma "no-cache";
    add_header Expires "0";
}
```

## 📊 Testing

### Test Auto-redirect
```bash
curl -I https://phillippesuryapratama.com/
# Should return: HTTP/2 301
# Location: https://phillippesuryapratama.com/en/
```

### Test Multi-language
```bash
# English
curl -s https://phillippesuryapratama.com/en/ | grep -o '<title>[^<]*</title>'

# Indonesian
curl -s https://phillippesuryapratama.com/id/ | grep -o '<title>[^<]*</title>'
```

### Test CSS Loading
```bash
curl -I https://phillippesuryapratama.com/_next/static/css/603fc10db75e28d5.css
# Should return: content-type: text/css
```

## 🚨 Troubleshooting

### Common Issues

1. **CSS not loading**: Check if cache busting headers are applied
2. **Multi-language not working**: Verify file paths in `/var/www/phillippesuryapratama.com/`
3. **Auto-redirect not working**: Check nginx configuration syntax

### Debug Commands

```bash
# Test nginx configuration
ssh admin@147.139.191.16 'sudo nginx -t'

# Check nginx status
ssh admin@147.139.191.16 'sudo systemctl status nginx'

# View error logs
ssh admin@147.139.191.16 'sudo tail -f /var/log/nginx/error.log'

# Check file permissions
ssh admin@147.139.191.16 'ls -la /var/www/phillippesuryapratama.com/'
```

## 📈 Performance

- **Response time**: < 0.06s for all routes
- **CSS loading**: Optimized with cache busting
- **Static assets**: 1-day cache for images and fonts
- **Security**: Modern security headers

## 🔄 Maintenance

### Regular Tasks
- Monitor nginx error logs
- Check SSL certificate expiration
- Verify multi-language routing
- Test CSS loading

### Updates
- Update nginx configuration as needed
- Test changes in staging environment
- Backup configuration before changes
- Monitor website performance after updates

## 📞 Support

For issues or questions regarding this nginx configuration:
- Check nginx error logs
- Verify file permissions
- Test configuration syntax
- Monitor website performance
