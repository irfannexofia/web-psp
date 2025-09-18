import { Metadata } from "next";

interface MetadataConfig {
  locale: "en" | "id";
}

const translations = {
  en: {
    title:
      "PT. Phillippe Surya Pratama | Industrial Welding & Valve Repair Services",
    description:
      "PT. Phillippe Surya Pratama delivers reliable industrial welding and valve repair services with skilled technicians and years of field experience. Supporting mining, oil & gas, manufacturing, and power generation sectors.",
    keywords: [
      "industrial welding",
      "valve repair",
      "welding services",
      "industrial services",
      "mining equipment",
      "oil gas services",
      "manufacturing",
      "power generation",
      "PT Phillippe Surya Pratama",
      "PSP",
      "welding alloys",
      "industrial maintenance",
      "metal fabrication",
      "technical consultation",
      "preventive maintenance",
      "GEKA alloys",
      "Starlet equipment",
      "welding materials",
      "valve maintenance",
      "industrial equipment repair",
      "heavy industry services",
      "ISO 9001 certified",
      "ISO 45001 certified",
      "SBUJK certified",
      "Tangerang welding services",
      "Indonesia industrial services",
    ],
    openGraph: {
      title:
        "PT. Phillippe Surya Pratama - Industrial Welding & Valve Repair Services",
      description:
        "Professional industrial welding and valve repair services with skilled technicians and years of field experience. Supporting mining, oil & gas, manufacturing, and power generation sectors.",
      locale: "en_US",
    },
  },
  id: {
    title:
      "PT. Phillippe Surya Pratama | Layanan Las Industri & Perbaikan Valve",
    description:
      "PT. Phillippe Surya Pratama menyediakan layanan las industri dan perbaikan valve yang dapat diandalkan dengan teknisi berpengalaman dan pengalaman lapangan bertahun-tahun. Mendukung sektor pertambangan, minyak & gas, manufaktur, dan pembangkit listrik.",
    keywords: [
      "las industri",
      "perbaikan valve",
      "layanan las",
      "layanan industri",
      "peralatan pertambangan",
      "layanan minyak gas",
      "manufaktur",
      "pembangkit listrik",
      "PT Phillippe Surya Pratama",
      "PSP",
      "paduan las",
      "pemeliharaan industri",
      "fabrikasi logam",
      "konsultasi teknis",
      "pemeliharaan preventif",
      "paduan GEKA",
      "peralatan Starlet",
      "bahan las",
      "pemeliharaan valve",
      "perbaikan peralatan industri",
      "layanan industri berat",
      "bersertifikat ISO 9001",
      "bersertifikat ISO 45001",
      "bersertifikat SBUJK",
      "layanan las Tangerang",
      "layanan industri Indonesia",
    ],
    openGraph: {
      title:
        "PT. Phillippe Surya Pratama - Layanan Las Industri & Perbaikan Valve",
      description:
        "Layanan las industri dan perbaikan valve profesional dengan teknisi berpengalaman dan pengalaman lapangan bertahun-tahun. Mendukung sektor pertambangan, minyak & gas, manufaktur, dan pembangkit listrik.",
      locale: "id_ID",
    },
  },
};

export function generateMetadata(config: MetadataConfig): Metadata {
  const t = translations[config.locale];
  const baseUrl = "https://phillippesuryapratama.com";
  const url = config.locale === "id" ? `${baseUrl}/id/` : `${baseUrl}/en/`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t.title,
      template: `%s | PT. PHILLIPPE SURYA PRATAMA`,
    },
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: "PT. Phillippe Surya Pratama" }],
    creator: "PT. Phillippe Surya Pratama",
    publisher: "PT. Phillippe Surya Pratama",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: t.openGraph.locale,
      url: url,
      siteName: "PT. Phillippe Surya Pratama",
      title: t.openGraph.title,
      description: t.openGraph.description,
      images: [
        {
          url: "https://phillippesuryapratama.com/hero-section.webp",
          width: 1200,
          height: 630,
          alt: t.openGraph.title,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.openGraph.title,
      description: t.openGraph.description,
      images: ["https://phillippesuryapratama.com/hero-section.webp"],
    },
    verification: {
      google: "your-google-search-console-verification-code",
    },
    manifest: "/manifest.json",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/logo-navbar.svg",
    },
    other: {
      "msapplication-TileColor": "#fd8706",
      "theme-color": "#fd8706",
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/`,
        id: `${baseUrl}/id/`,
      },
    },
  };
}
