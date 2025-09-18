import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for deployment
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Enable trailing slash for better static hosting compatibility
  trailingSlash: true,

  // Optional: Change the output directory to 'dist' for cleaner deployment
  // distDir: 'dist',

  // Optional: Prevent automatic redirects (handled by Nginx)
  // skipTrailingSlashRedirect: true,

  // Internationalization configuration (for App Router)
  // i18n is handled by middleware in App Router

  // Optimize bundle size (disabled for static export)
  // experimental: {
  //   optimizeCss: true,
  // },

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // SEO and performance headers (handled by Nginx for static export)
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'SAMEORIGIN',
  //         },
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1; mode=block',
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'strict-origin-when-cross-origin',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/_next/static/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
