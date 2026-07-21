import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF to PNG Transparent HD Free | High Res Image Extractor",
  description: "Extract PDF pages into high-resolution PNG images with transparent background support. Free online converter tool.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-to-png-transparent-hd" },
};

export default function PdfToPngTransparentHdPage() {
  return (
    <SEOLandingPage
      slug="pdf-to-png-transparent-hd"
      keyword="pdf to png transparent hd"
      pageType="A"
      angle="quality"
      h1="PDF to PNG Transparent HD Extractor"
      heroDescription="Convert PDF pages into crisp, high-resolution PNG images with transparent backgrounds."
      intro="Need to convert PDF vector logos or graphics into PNG images for web design or presentations? Converting to JPG creates lossy background blocks. Our PDF to PNG converter extracts high-definition PNG images while preserving clean alpha transparency channels."
      steps={[
        { title: "Upload PDF", description: "Select the vector or document PDF." },
        { title: "Configure PNG HD", description: "Select HD resolution and transparency mode." },
        { title: "Download PNG Images", description: "Save crisp PNG images to your device." }
      ]}
      features={[
        { icon: Zap, title: "Transparent Alpha", description: "Supports transparent background extraction." },
        { icon: Shield, title: "HD 300 DPI Export", description: "Generates ultra-sharp PNG images for graphic design." },
        { icon: Lock, title: "Free Image Extractor", description: "No hidden subscription costs." },
        { icon: FileCheck, title: "Per-Page Extraction", description: "Extract all pages or individual images." }
      ]}
      useCases={[
        { title: "Web Graphics", description: "Extract PDF logos into transparent web PNGs." },
        { title: "Presentation Assets", description: "Insert PDF diagrams into PowerPoint as transparent PNGs." },
        { title: "UI Design Mockups", description: "Export PDF vector UI designs into PNG mockups." }
      ]}
      midCTA={{ text: "Convert PDF to HD PNG →", href: "/pdf-to-png" }}
      bottomCTA={{ headline: "Extract crisp transparent PNG images from PDF.", text: "Convert to PNG Free", href: "/pdf-to-png" }}
      faqs={[
        { question: "Does it preserve transparency for PDF logos?", answer: "Yes, transparent background layers in vector PDFs are exported as alpha transparent PNGs." },
        { question: "What resolution are the PNG files?", answer: "You can extract up to 300 DPI high-definition images." }
      ]}
      faqTitle="PDF to PNG HD FAQ"
      faqSubtitle="Transparent image extraction tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PDF to PNG", href: "/pdf-to-png" },
        { name: "Transparent HD", href: "/pdf-to-png-transparent-hd" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
