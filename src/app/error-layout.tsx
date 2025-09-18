import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server Error - PT. Phillippe Surya Pratama",
  description:
    "Something went wrong on our end. We're working to fix it. PT. Phillippe Surya Pratama - Industrial Welding & Valve Repair Services.",
  keywords: [
    "500 error",
    "server error",
    "internal server error",
    "PT Phillippe Surya Pratama",
    "industrial welding",
    "valve repair",
    "technical issue",
    "maintenance",
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
    title: "Server Error - PT. Phillippe Surya Pratama",
    description:
      "Something went wrong on our end. We're working to fix it. PT. Phillippe Surya Pratama - Industrial Welding & Valve Repair Services.",
  },
};

interface ErrorLayoutProps {
  children: React.ReactNode;
}

export default function ErrorLayout({ children }: ErrorLayoutProps) {
  return <>{children}</>;
}
