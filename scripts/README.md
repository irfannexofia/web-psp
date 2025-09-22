# Deployment Scripts for PT. Phillippe Surya Pratama

This directory contains deployment scripts for the PSP website built with Next.js.

## 📁 Files

- `build-multilang.js` - Multi-language build script with SEO optimization
- `deploy-dev.sh` - Deployment script for dev environment
- `README.md` - This documentation file

## 🚀 Quick Start

### Deploy to Development Environment

```bash
# Deploy to dev.phillippesuryapratama.com
npm run deploy
```

### Manual Deployment Steps

```bash
# 1. Build with multi-language support
npm run build:multilang

# 2. Deploy to dev server
npm run deploy:dev
```

### Local Testing

```bash
# Build and serve locally
npm run preview
```

## 🌐 Deployment Targets

### Development Environment

- **Domain**: `dev.phillippesuryapratama.com`
- **Server**: `admin@147.139.191.16`
- **Path**: `/var/www/dev.phillippesuryapratama.com`

### Production Environment (Future)

- **Domain**: `phillippesuryapratama.com`
- **Server**: `admin@147.139.191.16`
- **Path**: `/var/www/phillippesuryapratama.com`

## 🔧 Features

### Multi-language Support

- English (default): `/`
- Indonesian: `/id/`
- Indonesian redirect: `/id`

### SEO Optimization

- Static export with proper metadata
- Sitemap generation
- Robots.txt configuration
- Hreflang tags for multi-language
- Open Graph and Twitter Cards

### Performance Features

- Static file caching (1 year)
- Gzip compression
- Brotli compression
- Security headers
- SSL with auto-renewal

### Error Handling

- Custom 404 page
- Custom 500 page
- Multilingual error messages

## 📋 Prerequisites

### Local Environment

- Node.js 18+
- npm or yarn
- SSH access to server

### Server Environment

- Ubuntu 22.04 LTS
- Nginx
- Certbot (Let's Encrypt)
- SSL certificates

## 🔒 SSL Configuration

The deployment script automatically:

- Requests SSL certificate from Let's Encrypt
- Configures auto-renewal
- Sets up HTTPS redirects
- Applies security headers

## 📊 Monitoring

After deployment, verify:

1. Website accessibility: `https://dev.phillippesuryapratama.com`
2. Indonesian version: `https://dev.phillippesuryapratama.com/id/`
3. Error pages: `https://dev.phillippesuryapratama.com/404`
4. SSL certificate: Check browser security indicator
5. Performance: Google PageSpeed Insights

## 🛠️ Troubleshooting

### Build Issues

```bash
# Check Next.js configuration
cat next.config.ts

# Verify static export settings
npm run build
ls -la out/
```

### Deployment Issues

```bash
# Check server connectivity
ssh admin@147.139.191.16

# Verify nginx configuration
ssh admin@147.139.191.16 "sudo nginx -t"

# Check SSL certificate
ssh admin@147.139.191.16 "sudo certbot certificates"
```

### DNS Issues

```bash
# Check DNS resolution
nslookup dev.phillippesuryapratama.com

# Test direct IP access
curl -I http://147.139.191.16
```

## 📝 Notes

- The deployment script is based on the NetPiu deployment configuration
- All static files are served from `/var/www/dev.phillippesuryapratama.com`
- SSL certificates are automatically renewed via systemd timer
- Error pages include company branding and contact information
- Multi-language support includes proper hreflang tags for SEO

## 🔄 Updates

To update the deployment:

1. Make changes to the codebase
2. Test locally with `npm run preview`
3. Deploy with `npm run deploy`
4. Verify deployment at the target URL

## 📞 Support

For deployment issues, check:

- Server logs: `/var/log/nginx/dev.phillippesuryapratama.com.*.log`
- SSL status: `sudo certbot certificates`
- Nginx status: `sudo systemctl status nginx`
