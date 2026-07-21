import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "JPG to PDF High Resolution Free | Convert Images to PDF",
  description: "Convert JPG images to high-resolution PDF without losing photo quality. Free online JPG to PDF converter tool.",
  alternates: { canonical: "https://ilovepdfkit.com/jpg-to-pdf-converter-high-resolution" },
};

export default function JpgToPdfConverterHighResolutionPage() {
  return (
    <SEOLandingPage
      slug="jpg-to-pdf-converter-high-resolution"
      keyword="jpg to pdf converter high resolution"
      pageType="A"
      angle="quality"
      h1="JPG to PDF High Resolution Converter"
      heroDescription="Turn JPG, JPEG photos, and graphic scans into HD print-ready PDF documents."
      intro="Converting images to PDF often results in compressed, blurry graphics. Our high-resolution JPG to PDF converter maintains 100% of your original image DPI, color space, and sharp detail, creating pristine PDF documents ideal for printing, portfolio submissions, and official uploads."
      steps={[
        { title: "Upload JPG Images", description: "Select one or multiple high-res photos." },
        { title: "Configure Page Layout", description: "Set page margins, orientation, and image sizing." },
        { title: "Download HD PDF", description: "Save your high-definition PDF file." }
      ]}
      features={[
        { icon: Zap, title: "HD Quality Retention", description: "Preserves 300+ DPI print-ready image clarity." },
        { icon: Shield, title: "Batch Conversion", description: "Convert dozens of JPG photos into a single PDF." },
        { icon: Lock, title: "Free & Private", description: "No watermarks or image data retention." },
        { icon: FileCheck, title: "Custom Orientation", description: "Auto-detects portrait or landscape dimensions." }
      ]}
      useCases={[
        { title: "Photo Portfolios", description: "Compile high-res photography into a professional PDF portfolio." },
        { title: "Scanned Document Receipts", description: "Convert document photos into official PDF attachments." },
        { title: "Graphic Design Exports", description: "Convert poster and flyer JPGs into print PDFs." }
      ]}
      midCTA={{ text: "Convert JPG to HD PDF →", href: "/jpg-to-pdf" }}
      bottomCTA={{ headline: "Convert JPG photos to high-resolution PDFs.", text: "Convert JPG Free", href: "/jpg-to-pdf" }}
      faqs={[
        { question: "Will my image quality drop after converting to PDF?", answer: "No, our high-resolution mode preserves original pixel dimensions." },
        { question: "Can I combine multiple JPG photos into one PDF?", answer: "Yes, select multiple images to merge them into a multi-page PDF." }
      ]}
      faqTitle="JPG to High-Res PDF FAQ"
      faqSubtitle="Image quality preservation tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "JPG to PDF", href: "/jpg-to-pdf" },
        { name: "High Resolution", href: "/jpg-to-pdf-converter-high-resolution" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
