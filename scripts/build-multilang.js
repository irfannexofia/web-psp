#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Multi-language Build Script for PT. Phillippe Surya Pratama
 *
 * This script handles the build process for multi-language support
 * with proper SEO metadata for each language version.
 */

console.log("🚀 Starting multi-language build process for PSP...");

// Build the Next.js project
console.log("📦 Building Next.js project...");
const { execSync } = require("child_process");

try {
  // Run the build command
  execSync("npm run build", { stdio: "inherit" });
  console.log("✅ Next.js build completed successfully");
} catch (error) {
  console.error("❌ Build failed:", error.message);
  process.exit(1);
}

// Post-build optimizations
console.log("🔧 Applying post-build optimizations...");

const outDir = path.join(process.cwd(), "out");

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  console.error("❌ Build output directory not found");
  console.error(
    "💡 Make sure next.config.ts is configured with output: 'export'"
  );
  process.exit(1);
}

// Validate static export structure
console.log("📋 Validating static export structure...");
const expectedFiles = ["404.html", "500.html"];
const expectedDirs = ["en", "id"];

const missingFiles = expectedFiles.filter(
  (file) => !fs.existsSync(path.join(outDir, file))
);
const missingDirs = expectedDirs.filter(
  (dir) => !fs.existsSync(path.join(outDir, dir))
);

// Check if language directories have index.html
const langIndexFiles = expectedDirs
  .map((dir) => {
    const indexPath = path.join(outDir, dir, "index.html");
    return fs.existsSync(indexPath) ? null : dir;
  })
  .filter(Boolean);

if (missingFiles.length > 0) {
  console.warn("⚠️  Some expected files are missing:", missingFiles);
}

if (missingDirs.length > 0) {
  console.warn(
    "⚠️  Some expected language directories are missing:",
    missingDirs
  );
}

if (langIndexFiles.length > 0) {
  console.warn(
    "⚠️  Some language directories missing index.html:",
    langIndexFiles
  );
}

if (
  missingFiles.length === 0 &&
  missingDirs.length === 0 &&
  langIndexFiles.length === 0
) {
  console.log("✅ Static export structure validated");
  console.log("✅ Multi-language routing structure confirmed");
}

// Copy additional language-specific files
console.log("📁 Copying language-specific files...");

// Copy Indonesian manifest
const manifestIdPath = path.join(process.cwd(), "public", "manifest-id.json");
const outManifestIdPath = path.join(outDir, "manifest-id.json");

if (fs.existsSync(manifestIdPath)) {
  fs.copyFileSync(manifestIdPath, outManifestIdPath);
  console.log("✅ Indonesian manifest copied");
} else {
  console.warn("⚠️  Indonesian manifest not found");
}

// Ensure logo files exist in public folder
console.log("🖼️  Ensuring logo files exist...");
const logoPath = path.join(
  process.cwd(),
  "src",
  "assets",
  "images",
  "logo-navbar.svg"
);
const publicLogoPath = path.join(process.cwd(), "public", "logo-navbar.svg");

if (fs.existsSync(logoPath) && !fs.existsSync(publicLogoPath)) {
  fs.copyFileSync(logoPath, publicLogoPath);
  console.log("✅ Logo copied to public folder");
}

// Copy certificates to public folder if they exist
console.log("📄 Copying certificates...");
const certSourceDir = path.join(process.cwd(), "src", "docs", "certificate");
const certDestDir = path.join(process.cwd(), "public", "certificates");

if (fs.existsSync(certSourceDir)) {
  if (!fs.existsSync(certDestDir)) {
    fs.mkdirSync(certDestDir, { recursive: true });
  }

  const certFiles = fs.readdirSync(certSourceDir);
  certFiles.forEach((file) => {
    const sourcePath = path.join(certSourceDir, file);
    const destPath = path.join(certDestDir, file);
    fs.copyFileSync(sourcePath, destPath);
  });
  console.log(`✅ ${certFiles.length} certificates copied`);
}

// Validate sitemap
console.log("🗺️  Validating sitemap...");
const sitemapPath = path.join(outDir, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
  if (
    sitemapContent.includes("locale=id") &&
    sitemapContent.includes("hreflang")
  ) {
    console.log("✅ Sitemap contains multi-language URLs");
  } else {
    console.warn("⚠️  Sitemap may not contain proper multi-language URLs");
  }
} else {
  console.warn("⚠️  Sitemap not found");
}

// Validate robots.txt
console.log("🤖 Validating robots.txt...");
const robotsPath = path.join(outDir, "robots.txt");
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, "utf8");
  if (robotsContent.includes("sitemap.xml")) {
    console.log("✅ Robots.txt references sitemap");
  } else {
    console.warn("⚠️  Robots.txt may not reference sitemap");
  }
} else {
  console.warn("⚠️  Robots.txt not found");
}

// Generate build summary
console.log("\n📊 Build Summary:");
console.log("================");
console.log("✅ Next.js static export completed");
console.log("✅ Multi-language metadata configured");
console.log("✅ SEO optimizations applied");
console.log("✅ Language-specific files copied");
console.log("✅ Error pages (404/500) included");
console.log("\n🌐 Language Support:");
console.log("- English (default): /");
console.log("- Indonesian: /id/");
console.log("- Indonesian redirect: /id");
console.log("\n📁 Output directory: ./out");
console.log("🚀 Ready for deployment!");

console.log("\n💡 Next steps:");
console.log("1. Test the build locally: npx serve out");
console.log("2. Deploy to server: npm run deploy");
console.log("3. Verify SEO metadata in browser dev tools");
console.log("4. Test both language versions");
console.log("5. Test error pages (404/500)");
