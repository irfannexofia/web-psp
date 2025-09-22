import { Dictionary } from "@/types/dictionary";
import JsonLd from "./JsonLd";

interface StructuredDataProps {
  dictionary: Dictionary;
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT. Phillippe Surya Pratama",
    alternateName: "PSP",
    url: "https://phillippesuryapratama.com",
    logo: "https://phillippesuryapratama.com/assets/images/logo-navbar.svg",
    description:
      locale === "id"
        ? "PT. Phillippe Surya Pratama menyediakan layanan las industri dan perbaikan valve yang dapat diandalkan dengan teknisi berpengalaman dan pengalaman lapangan bertahun-tahun. Mendukung sektor pertambangan, minyak & gas, manufaktur, dan pembangkit listrik."
        : "PT. Phillippe Surya Pratama delivers reliable industrial welding and valve repair services with skilled technicians and years of field experience. Supporting mining, oil & gas, manufacturing, and power generation sectors.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruko Villa Taman Bandara Blok N8/15, Dadap, Kosambi",
      addressLocality: "Tangerang",
      addressRegion: "Banten",
      addressCountry: {
        "@type": "Country",
        name: "Indonesia",
      },
      postalCode: "15211",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+62-21-22556661",
        contactType: "customer service",
        availableLanguage: ["English", "Indonesian"],
        areaServed: "Indonesia",
      },
      {
        "@type": "ContactPoint",
        email: "psp_yanto@yahoo.com",
        contactType: "customer service",
        availableLanguage: ["English", "Indonesian"],
        areaServed: "Indonesia",
      },
    ],
    foundingDate: "2010",
    numberOfEmployees: "10-50",
    sameAs: [],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name:
            locale === "id"
              ? "Layanan Las Industri"
              : "Industrial Welding Services",
          description:
            locale === "id"
              ? "Layanan las industri profesional dengan berbagai metode las dan bahan berkualitas tinggi"
              : "Professional industrial welding services with various welding methods and high-quality materials",
          provider: {
            "@type": "Organization",
            name: "PT. Phillippe Surya Pratama",
          },
        },
        areaServed: "Indonesia",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name:
            locale === "id"
              ? "Layanan Perbaikan Valve"
              : "Valve Repair Services",
          description:
            locale === "id"
              ? "Layanan perbaikan dan pemeliharaan valve industri dengan standar internasional"
              : "Industrial valve repair and maintenance services with international standards",
          provider: {
            "@type": "Organization",
            name: "PT. Phillippe Surya Pratama",
          },
        },
        areaServed: "Indonesia",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: locale === "id" ? "Paduan Las GEKA" : "GEKA Welding Alloys",
          description:
            locale === "id"
              ? "Paduan las berkualitas tinggi untuk berbagai aplikasi industri"
              : "High-quality welding alloys for various industrial applications",
          brand: {
            "@type": "Brand",
            name: "GEKA",
          },
        },
        areaServed: "Indonesia",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: locale === "id" ? "Peralatan Starlet" : "Starlet Equipment",
          description:
            locale === "id"
              ? "Peralatan industri berkualitas tinggi untuk berbagai kebutuhan industri"
              : "High-quality industrial equipment for various industrial needs",
          brand: {
            "@type": "Brand",
            name: "Starlet",
          },
        },
        areaServed: "Indonesia",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 9001:2015",
        description: "Quality Management System Certification",
        credentialCategory: "certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 45001:2018",
        description:
          "Occupational Health and Safety Management System Certification",
        credentialCategory: "certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "SBUJK Certificate",
        description: "Construction Business Entity Certificate",
        credentialCategory: "certification",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PT. Phillippe Surya Pratama",
    url: "https://phillippesuryapratama.com",
    description:
      locale === "id"
        ? "Layanan las industri dan perbaikan valve profesional - PT. Phillippe Surya Pratama"
        : "Professional industrial welding and valve repair services - PT. Phillippe Surya Pratama",
    inLanguage: locale === "id" ? "id-ID" : "en-US",
    publisher: {
      "@type": "Organization",
      name: "PT. Phillippe Surya Pratama",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://phillippesuryapratama.com/{search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "id" ? "Beranda" : "Home",
        item: "https://phillippesuryapratama.com",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PT. Phillippe Surya Pratama",
    image: "https://phillippesuryapratama.com/assets/images/logo-navbar.svg",
    telephone: "+62-21-22556661",
    email: "psp_yanto@yahoo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruko Villa Taman Bandara Blok N8/15, Dadap, Kosambi",
      addressLocality: "Tangerang",
      addressRegion: "Banten",
      addressCountry: {
        "@type": "Country",
        name: "Indonesia",
      },
      postalCode: "15211",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.2088",
      longitude: "106.8456",
    },
    url: "https://phillippesuryapratama.com",
    priceRange: "$$",
    openingHours: "Mo-Fr 08:00-17:00",
    paymentAccepted: "Cash, Bank Transfer",
    currenciesAccepted: "IDR",
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
    </>
  );
}
