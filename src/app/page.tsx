import Link from 'next/link';

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0;url=/en/" />
        <link rel="canonical" href="/en/" />
      </head>
      <body>
        <p>Redirecting to <Link href="/en/">English version</Link>...</p>
      </body>
    </html>
  );
}

