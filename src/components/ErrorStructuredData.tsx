interface ErrorStructuredDataProps {
  errorType: "404" | "500";
  locale: "en" | "id";
}

const ErrorStructuredData = ({
  errorType,
  locale,
}: ErrorStructuredDataProps) => {
  const is404 = errorType === "404";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: is404
      ? locale === "id"
        ? "Halaman Tidak Ditemukan"
        : "Page Not Found"
      : locale === "id"
        ? "Kesalahan Server"
        : "Server Error",
    description: is404
      ? locale === "id"
        ? "Halaman yang Anda cari tidak ada atau telah dipindahkan."
        : "The page you are looking for doesn't exist or has been moved."
      : locale === "id"
        ? "Terjadi kesalahan di sisi kami. Kami sedang memperbaikinya."
        : "Something went wrong on our end. We're working to fix it.",
    url: `https://phillippesuryapratama.com/${locale}/`,
    mainEntity: {
      "@type": "Organization",
      name: "PT. Phillippe Surya Pratama",
      url: "https://phillippesuryapratama.com",
      logo: "https://phillippesuryapratama.com/assets/images/logo-navbar.svg",
      description:
        locale === "id"
          ? "Spesialis dalam Layanan Las Industri dan Perbaikan Valve"
          : "Specialist in Industrial Welding and Valve Repair Service",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ruko Villa Taman Bandara Blok N8/15",
        addressLocality: "Dadap, Kosambi",
        addressRegion: "Tangerang",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-21-22556661",
        contactType: "customer service",
        availableLanguage: ["English", "Indonesian"],
      },
      sameAs: ["https://phillippesuryapratama.com"],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: locale === "id" ? "Beranda" : "Home",
          item: `https://phillippesuryapratama.com/${locale}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: is404
            ? locale === "id"
              ? "Halaman Tidak Ditemukan"
              : "Page Not Found"
            : locale === "id"
              ? "Kesalahan Server"
              : "Server Error",
          item: `https://phillippesuryapratama.com/${locale}/`,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default ErrorStructuredData;
