import { generateErrorMetadata } from "@/lib/error-metadata";
import { Metadata } from "next";

interface NotFoundLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generateErrorMetadata({
    locale: lang as "en" | "id",
    errorType: "404",
  });
}

export default function NotFoundLayout({ children }: NotFoundLayoutProps) {
  return <>{children}</>;
}
