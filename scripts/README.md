# Build Scripts for PT. Phillippe Surya Pratama

This directory contains build and deployment scripts for the PSP website.

## Available Scripts

### `build-multilang.js`

Multi-language build script that handles:

- Next.js static export build
- Multi-language structure validation
- SEO metadata optimization
- Language-specific file copying
- Certificate file copying
- Sitemap and robots.txt validation

#### Usage

```bash
# Run the multi-language build
npm run build:multilang

# Or run directly
node scripts/build-multilang.js
```

#### What it does

1. **Build Process**: Runs `npm run build` to create static export
2. **Structure Validation**: Checks for required language directories and files
3. **File Copying**: Copies language-specific manifests and assets
4. **SEO Validation**: Validates sitemap and robots.txt
5. **Certificate Handling**: Copies certificate files to output directory
6. **Build Summary**: Provides detailed build report

#### Output

The script generates a static export in the `./out` directory with:

- `/en/` - English version (default)
- `/id/` - Indonesian version
- Multi-language sitemap with hreflang tags
- Language-specific manifests
- Certificate files
- Optimized assets

## Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "build:multilang": "node scripts/build-multilang.js",
    "start": "next start",
    "lint": "next lint",
    "serve": "npx serve out",
    "preview": "npm run build:multilang && npm run serve"
  }
}
```

## Development Workflow

1. **Development**: `npm run dev`
2. **Build**: `npm run build:multilang`
3. **Preview**: `npm run preview`
4. **Deploy**: Upload `./out` directory to server

## Multi-Language Structure

```
out/
├── en/                 # English version
│   ├── index.html
│   └── ...
├── id/                 # Indonesian version
│   ├── index.html
│   └── ...
├── certificates/       # Certificate files
├── sitemap.xml        # Multi-language sitemap
├── robots.txt         # SEO robots file
└── manifest.json      # PWA manifest
```

## SEO Features

- Multi-language sitemap with hreflang tags
- Language-specific metadata
- Canonical URLs
- Open Graph tags
- Twitter Card support
- Structured data ready

## Troubleshooting

### Build Fails

- Ensure `next.config.ts` has `output: "export"`
- Check that all required files exist
- Verify TypeScript compilation

### Missing Language Files

- Check `src/app/[lang]/dictionaries/` directory
- Ensure both `en.json` and `id.json` exist
- Validate JSON syntax

### SEO Issues

- Verify sitemap.xml contains hreflang tags
- Check robots.txt references sitemap
- Validate metadata in browser dev tools
