import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        "/admin/",
        "/api/",
        "/_next/",
        "/404",
        "/500",
        "/error",
        "/not-found",
      ],
    },
    sitemap: "https://phillippesuryapratama.com/sitemap.xml",
  };
}
