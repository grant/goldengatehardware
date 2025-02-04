import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldengatehardware.com"),
  title:
    "GoldenGate Hardware | Wholesale Fastener & Building Supply Distributor",
  description:
    "Leading wholesale distributor of fasteners, hardware & building supplies. Factory-direct pricing with US-based distribution and technical support.",
  keywords:
    "wholesale distributor, fasteners, screws, nuts, bolts, building supplies, construction material, hardware, sourcing agent",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WholesaleStore",
              "name": "GoldenGate Hardware",
              "description": "Wholesale distributor of fasteners and building supplies with factory-direct pricing",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "areaServed": "United States",
              "serviceType": ["Hardware Distribution", "Fastener Supply", "Building Materials"]
            }
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col bg-white text-black antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
