import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ilovepdfkit.com'),
  title: {
    default: "ILOVEPDFKIT - Free Online PDF Converter & Tools",
    template: "%s | ILOVEPDFKIT"
  },
  description: "Transform your documents with pixel-perfect accuracy. Convert between PDF, Word, PowerPoint, and images. Free, secure, and fast document conversion tools. No registration required.",
  keywords: "PDF converter, PDF to Word, Word to PDF, PDF tools, document conversion, free PDF converter, online PDF tools, edit PDF, merge PDF, split PDF",
  authors: [{ name: "ILOVEPDFKIT" }],
  alternates: {
    canonical: './',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8b5cf6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-W8Z4N7RN7B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "ILOVEPDFKIT",
                  "url": "https://ilovepdfkit.com",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://ilovepdfkit.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "ILOVEPDFKIT",
                  "applicationCategory": "ProductivityApplication",
                  "operatingSystem": "Any",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                }
              ]
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
