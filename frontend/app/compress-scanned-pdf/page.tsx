import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Compress Scanned PDF Online Free | Shrink Image-Heavy PDFs",
  description: "Scanned PDFs are bloated and huge. Compress scanned PDF files online free up to 90% without sacrificing text readability.",
  alternates: { canonical: "https://ilovepdfkit.com/compress-scanned-pdf" },
};

export default function CompressScannedPdfPage() {
  return (
    <SEOLandingPage
      slug="compress-scanned-pdf"
      keyword="compress scanned pdf"
      pageType="A"
      angle="problem"
      h1="Compress Scanned PDF Files Online"
      heroDescription="Shrink massive image-heavy scanned PDFs down to manageable sizes cleanly."
      intro="Scanned documents created by physical scanners or phone scanner apps consist of heavy bitmap images, causing file sizes to balloon to 30MB+ for just a few pages. Our scanned PDF compression algorithm downsamples image DPI and removes redundant color profiles so your document shrinks drastically while staying completely legible."
      steps={[
        { title: "Upload Scanned PDF", description: "Select your heavy image-based PDF scan." },
        { title: "DPI Downsampling", description: "Automated scan image optimization." },
        { title: "Download Clean PDF", description: "Save a lightweight, easy-to-share PDF." }
      ]}
      features={[
        { icon: Zap, title: "Heavy Size Reduction", description: "Shrink 50MB scanned PDFs down to under 5MB." },
        { icon: Shield, title: "Document Safety", description: "Zero risk of data leakage or exposure." },
        { icon: Lock, title: "Free Access", description: "Unlimited scanned PDF compression." },
        { icon: FileCheck, title: "OCR Friendly", description: "Keeps scanned text clear for OCR searchability." }
      ]}
      useCases={[
        { title: "Scanned Contracts", description: "Reduce size of signed physical paper contracts." },
        { title: "Book & Chapter Scans", description: "Compress multi-page book scans for easy reading." },
        { title: "Receipts & Receipts Scans", description: "Archive expense receipts without taking up storage." }
      ]}
      midCTA={{ text: "Compress Scanned PDF →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Turn heavy scanned PDFs into small files.", text: "Compress Scans Free", href: "/compress-pdf" }}
      faqs={[
        { question: "Why are scanned PDFs so much larger than normal PDFs?", answer: "Scanned PDFs store every page as a full-page photo rather than editable text vector instructions." },
        { question: "Can I compress scans made from phone apps like CamScanner?", answer: "Yes, mobile app scans compress extremely well with our tool." }
      ]}
      faqTitle="Scanned PDF Compression FAQ"
      faqSubtitle="Optimize heavy scanned documents"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "Scanned PDF", href: "/compress-scanned-pdf" }
      ]}
      themeColor="#10b981"
    />
  );
}
