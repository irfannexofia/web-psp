import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  // Sanitize JSON-LD data to prevent XSS attacks
  const sanitizedJson = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: sanitizedJson,
      }}
    />
  );
}
