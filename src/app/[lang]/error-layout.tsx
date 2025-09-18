import { generateErrorMetadata } from "@/lib/error-metadata";
import { Metadata } from "next";

interface ErrorLayoutProps {
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
    errorType: "500",
  });
}

export default function ErrorLayout({ children }: ErrorLayoutProps) {
  return <>{children}</>;
}
