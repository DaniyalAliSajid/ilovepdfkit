import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Compress PDF to 50KB Online Free | iLovePDFKit",
  description: "Reduce PDF file size to under 50KB for government forms, photo uploads, and strict online portals. Free, secure, no login needed.",
  alternates: { canonical: "https://ilovepdfkit.com/compress-pdf-to-50kb" },
};

export default function CompressPdfTo50kbPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-to-50kb"
      keyword="compress pdf to 50kb"
      pageType="A"
      angle="problem"
      h1="Compress PDF to 50KB Online Free"
      heroDescription="When strict upload limits reject your PDF, compress it to under 50KB in seconds while preserving clear text."
      intro="Online application portals, visa forms, and government sites often have extreme file size limits capping uploads at 50KB. Uploading an uncompressed PDF will cause immediate errors. Our compress PDF to 50KB tool uses heavy image re-sampling and structural optimization to shrink your file down to 50KB without making text unreadable."
      steps={[
        { title: "Upload PDF", description: "Select or drag your file into the box." },
        { title: "Select Max Compression", description: "Choose Extreme Compression to target under 50KB." },
        { title: "Compress & Download", description: "Get your 50KB file ready for instant upload." }
      ]}
      features={[
        { icon: Zap, title: "Extreme Compression", description: "Reduces size up to 98% for tiny portal limits." },
        { icon: Shield, title: "Privacy First", description: "Files are processed securely and deleted automatically." },
        { icon: Lock, title: "No Account", description: "No registration, credit card, or email needed." },
        { icon: FileCheck, title: "Legible Text", description: "Optimizes images while retaining crisp typography." }
      ]}
      useCases={[
        { title: "Government Application Portals", description: "Passport and tax forms capping uploads at 50KB." },
        { title: "ID & Signature Attachments", description: "Strict 50KB limits on photo or signature PDFs." },
        { title: "Scholarship Forms", description: "Student portals requiring tiny document attachments." }
      ]}
      midCTA={{ text: "Compress to 50KB Now →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Bypass the 50KB limit now.", text: "Compress PDF Free", href: "/compress-pdf" }}
      faqs={[
        { question: "Can I compress any PDF to 50KB?", answer: "Most PDFs under 10 pages can be compressed to 50KB. For multi-page image files, splitting pages first yields the best results." },
        { question: "Will my text be readable at 50KB?", answer: "Yes, our engine prioritizes text layer preservation over bitmap resolution." }
      ]}
      faqTitle="Compress to 50KB FAQ"
      faqSubtitle="Answers for strict 50KB limits"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "Compress to 50KB", href: "/compress-pdf-to-50kb" }
      ]}
      themeColor="#10b981"
    />
  );
}
