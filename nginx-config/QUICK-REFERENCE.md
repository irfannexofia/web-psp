# PSP Website Nginx - Quick Reference

## 🚀 Quick Commands

### Deploy Configuration
```bash
cd nginx-config
./deploy-nginx.sh
```

### Manual Commands
```bash
# Test configuration
ssh admin@147.139.191.16 'sudo nginx -t'

# Reload nginx
ssh admin@147.139.191.16 'sudo systemctl reload nginx'

# Check status
ssh admin@147.139.191.16 'sudo systemctl status nginx'

# View logs
ssh admin@147.139.191.16 'sudo tail -f /var/log/nginx/error.log'
```

## 🌐 Website URLs

- **Main**: https://phillippesuryapratama.com/ (redirects to /en/)
- **English**: https://phillippesuryapratama.com/en/
- **Indonesian**: https://phillippesuryapratama.com/id/

## 🧪 Testing Commands

### Test Auto-redirect
```bash
curl -I https://phillippesuryapratama.com/
# Should return: HTTP/2 301
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

## 🔧 Configuration Features

- ✅ **Auto-redirect**: Main domain → /en/
- ✅ **Multi-language**: /en/ and /id/ routes
- ✅ **CSS cache busting**: No-cache headers
- ✅ **Security headers**: X-Frame-Options, X-Content-Type-Options
- ✅ **Static assets**: Optimized caching
- ✅ **Next.js support**: /_next/static/ handling

## 📊 Performance

- **Response time**: < 0.06s
- **CSS loading**: Cache busting enabled
- **Static assets**: 1-day cache
- **Security**: Modern headers

## 🚨 Emergency Commands

### Restore Backup
```bash
ssh admin@147.139.191.16 'sudo cp /etc/nginx/backup/*/phillippesuryapratama.com /etc/nginx/sites-available/phillippesuryapratama.com && sudo systemctl restart nginx'
```

### Check Server Resources
```bash
ssh admin@147.139.191.16 'htop'
ssh admin@147.139.191.16 'df -h'
ssh admin@147.139.191.16 'free -h'
```

## 📈 Monitoring

### Health Check
```bash
# Test all routes
curl -s -o /dev/null -w "Main: %{http_code}\n" https://phillippesuryapratama.com/
curl -s -o /dev/null -w "EN: %{http_code}\n" https://phillippesuryapratama.com/en/
curl -s -o /dev/null -w "ID: %{http_code}\n" https://phillippesuryapratama.com/id/
curl -s -o /dev/null -w "CSS: %{http_code}\n" https://phillippesuryapratama.com/_next/static/css/603fc10db75e28d5.css
```

### Performance Test
```bash
# Test response times
curl -w "@curl-format.txt" -o /dev/null -s https://phillippesuryapratama.com/en/
```

## 🔄 Regular Maintenance

### Weekly
- Check nginx error logs
- Monitor website performance
- Verify multi-language routing

### Monthly  
- Check SSL certificate expiration
- Review access logs
- Update system packages

### Quarterly
- Update nginx configuration
- Review security headers
- Performance optimization
