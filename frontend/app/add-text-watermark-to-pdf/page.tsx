import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Add Text Watermark to PDF Online Free | Stamp Documents",
  description: "Stamp custom text watermarks (\"Confidential\", \"Draft\", \"Sample\") on PDF pages free online.",
  alternates: { canonical: "https://ilovepdfkit.com/add-text-watermark-to-pdf" },
};

export default function AddTextWatermarkToPdfPage() {
  return (
    <SEOLandingPage
      slug="add-text-watermark-to-pdf"
      keyword="add text watermark to pdf"
      pageType="A"
      angle="use-case"
      h1="Add Text Watermark to PDF"
      heroDescription="Stamp custom text phrases across your PDF pages with adjustable fonts, colors, and angles."
      intro={`Need to mark a document as "SAMPLE", "DO NOT COPY", or "FOR INTERNAL USE ONLY"? Adding a text watermark is the fastest way to signal document status to readers. Customize text string, font size, color, opacity, and rotation angle to fit your exact brand preferences.`}
      steps={[
        { title: "Upload PDF File", description: "Select the PDF document." },
        { title: "Type Watermark Text", description: "Input your text string and set styling." },
        { title: "Download Stamped PDF", description: "Save your customized PDF." }
      ]}
      features={[
        { icon: Zap, title: "Custom Text & Font", description: "Type any phrase and adjust font size, color, and angle." },
        { icon: Shield, title: "Diagonal Rotation", description: "Rotate text 45° across pages for maximum coverage." },
        { icon: Lock, title: "No Account Needed", description: "Stamp documents anonymously without signups." },
        { icon: FileCheck, title: "Batch Page Stamping", description: "Stamps all pages automatically in seconds." }
      ]}
      useCases={[
        { title: "Sample Documents", description: "Stamp \"SAMPLE ONLY\" on product demonstration PDFs." },
        { title: "Internal Policy Files", description: "Mark HR documents \"FOR INTERNAL USE ONLY\"." },
        { title: "Pre-Release Reports", description: "Stamp \"EMBARGOED\" on media press releases." }
      ]}
      midCTA={{ text: "Add Text Watermark →", href: "/protect-pdf" }}
      bottomCTA={{ headline: "Stamp text phrases across your PDF pages.", text: "Add Text Watermark", href: "/protect-pdf" }}
      faqs={[
        { question: "What text phrases are most common?", answer: "\"CONFIDENTIAL\", \"DRAFT\", \"SAMPLE\", \"COPY\", and \"APPROVED\" are popular choices." },
        { question: "Will the watermark obscure my text?", answer: "Setting opacity to 15-25% ensures your underlying text remains perfectly legible." }
      ]}
      faqTitle="Text Watermark FAQ"
      faqSubtitle="Custom text stamping tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Protect PDF", href: "/protect-pdf" },
        { name: "Text Watermark", href: "/add-text-watermark-to-pdf" }
      ]}
      themeColor="#1e3a8a"
    />
  );
}
