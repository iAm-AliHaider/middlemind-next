import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MiddleMind — AI Product Studio. We Build What Others Can't.",
  description:
    "MiddleMind is an AI Product Studio that builds what others can't. From voice agents to enterprise automation — if you can imagine it, we can build it.",
  openGraph: {
    title: "MiddleMind — AI Product Studio. We Build What Others Can't.",
    description: "MiddleMind is an AI Product Studio that builds what others can't. From voice agents to enterprise automation — if you can imagine it, we can build it.",
    url: "https://middlemind.ai",
    siteName: "MiddleMind",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://middlemind.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MiddleMind AI Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MiddleMindAI",
    creator: "@MiddleMindAI",
  },
  alternates: {
    canonical: "https://middlemind.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MiddleMind",
    url: "https://middlemind.ai",
    logo: "https://middlemind.ai/logo.png",
    sameAs: [
      "https://github.com/iAm-AliHaider",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@middlemind.ai",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic", "German"],
    },
  };

  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
