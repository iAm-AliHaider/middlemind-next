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
  title: "MiddleMind — The Intelligence Layer for Modern Enterprise",
  description:
    "MiddleMind designs and deploys AI systems that transform how enterprises operate — from intelligent voice agents to end-to-end ERP automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-white text-foreground`}>
        {children}
      </body>
    </html>
  );
}
