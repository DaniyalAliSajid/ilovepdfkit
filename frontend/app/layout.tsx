import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "ILOVEPDFKIT - Free Online PDF Converter & Tools",
  description: "Transform your documents with pixel-perfect accuracy. Convert between PDF, Word, PowerPoint, and images. Free, secure, and fast document conversion tools.",
  keywords: "PDF converter, PDF to Word, Word to PDF, PDF tools, document conversion, free PDF converter",
  authors: [{ name: "ILOVEPDFKIT" }],
  viewport: "width=device-width, initial-scale=1",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
