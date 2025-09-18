import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PT. PHILLIPPE SURYA PRATAMA",
  description: "Industrial Welding & Valve Repair Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
