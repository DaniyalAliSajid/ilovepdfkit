import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Rotate and Save PDF Online Free | Fix Page Orientation",
  description: "Rotate sideways or upside-down PDF pages 90 or 180 degrees and save permanently. Free online PDF rotator.",
  alternates: { canonical: "https://ilovepdfkit.com/rotate-and-save-pdf" },
};

export default function RotateAndSavePdfPage() {
  return (
    <SEOLandingPage
      slug="rotate-and-save-pdf"
      keyword="rotate and save pdf"
      pageType="A"
      angle="use-case"
      h1="Rotate and Save PDF Pages Online"
      heroDescription="Fix upside-down or sideways pages and save permanent orientation updates."
      intro="Scanned a document upside down or sideways? Opening rotated pages is frustrating for readers. Our online PDF page rotator lets you turn individual pages or the entire document 90°, 180°, or 270° clockwise or counter-clockwise and save the changes permanently."
      steps={[
        { title: "Upload PDF", description: "Select the file with misoriented pages." },
        { title: "Rotate Pages", description: "Click rotate buttons for specific or all pages." },
        { title: "Save & Download", description: "Download your permanently oriented PDF." }
      ]}
      features={[
        { icon: Zap, title: "Permanent Orientation", description: "Saves rotation permanently across all viewers." },
        { icon: Shield, title: "Visual Controls", description: "Rotate individual pages or all pages at once." },
        { icon: Lock, title: "Free & Secure", description: "No software installation required." },
        { icon: FileCheck, title: "No Re-compression Loss", description: "Rotates layout without degrading image quality." }
      ]}
      useCases={[
        { title: "Landscape Tables", description: "Orient wide spreadsheet pages correctly for reading." },
        { title: "Sideways Scans", description: "Fix pages scanned horizontally by mistake." },
        { title: "Mobile Camera Uploads", description: "Correct orientation of mobile photo scans." }
      ]}
      midCTA={{ text: "Rotate and Save PDF →", href: "/delete-pdf-pages" }}
      bottomCTA={{ headline: "Fix document page orientation permanently.", text: "Rotate PDF Free", href: "/delete-pdf-pages" }}
      faqs={[
        { question: "Will the rotation stay saved when opened in Adobe Reader?", answer: "Yes, rotation metadata is written permanently to the file." },
        { question: "Can I rotate only page 2 while keeping other pages untouched?", answer: "Yes, rotate controls can be applied per page." }
      ]}
      faqTitle="Rotate PDF FAQ"
      faqSubtitle="Permanent page orientation"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Organize PDF", href: "/delete-pdf-pages" },
        { name: "Rotate & Save PDF", href: "/rotate-and-save-pdf" }
      ]}
      themeColor="#8b5cf6"
    />
  );
}
