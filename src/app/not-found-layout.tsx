import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - PT. Phillippe Surya Pratama",
  description:
    "The page you are looking for doesn't exist or has been moved. PT. Phillippe Surya Pratama - Industrial Welding & Valve Repair Services.",
  keywords: [
    "404 error",
    "page not found",
    "PT Phillippe Surya Pratama",
    "industrial welding",
    "valve repair",
    "error page",
    "broken link",
    "missing page",
  ],
  robots: {
    index: false, // Don't index error pages
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phillippesuryapratama.com",
    siteName: "PT. Phillippe Surya Pratama",
    title: "Page Not Found - PT. Phillippe Surya Pratama",
    description:
      "The page you are looking for doesn't exist or has been moved. PT. Phillippe Surya Pratama - Industrial Welding & Valve Repair Services.",
  },
};

interface NotFoundLayoutProps {
  children: React.ReactNode;
}

export default function NotFoundLayout({ children }: NotFoundLayoutProps) {
  return <>{children}</>;
}
