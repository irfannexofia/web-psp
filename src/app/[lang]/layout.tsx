import logo from "@/assets/images/logo-navbar.svg";
import "@/assets/scss/style.scss";
import StructuredData from "@/components/StructuredData";
import AppProviders from "@/components/wrappers/AppProviders";
import { generateMetadata as generateMetadataFn } from "@/lib/metadata";
import { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "./dictionaries";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generateMetadataFn({ locale: lang as "en" | "id" });
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "id");

  return (
    <html lang={lang}>
      <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body className={`antialiased`}>
        <StructuredData dictionary={dictionary} locale={lang} />
        <div id="splash-screen">
          <Image
            alt="PSP Logo"
            width={120}
            height={40}
            src={logo}
            style={{ height: "8%", width: "auto" }}
            priority
          />
        </div>
        <div id="__next_splash">
          <AppProviders>{children}</AppProviders>
        </div>
      </body>
    </html>
  );
}
