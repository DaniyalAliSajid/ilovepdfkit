import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Convert Multiple Images to One PDF Free | Photo Binder",
  description: "Combine multiple photos (JPG, PNG, WEBP) into a single PDF file online free. Reorder images and set custom margins.",
  alternates: { canonical: "https://ilovepdfkit.com/convert-multiple-images-to-one-pdf" },
};

export default function ConvertMultipleImagesToOnePdfPage() {
  return (
    <SEOLandingPage
      slug="convert-multiple-images-to-one-pdf"
      keyword="convert multiple images to one pdf"
      pageType="A"
      angle="use-case"
      h1="Convert Multiple Images to One PDF"
      heroDescription="Stitch photos, scans, and graphic images into a single multi-page PDF document."
      intro="Need to send 10 different photo files to someone? Attachment limits and unorganized image files make email frustrating. Our multiple image to PDF converter lets you upload photos in any format (JPG, PNG, WEBP) and combine them into one beautifully ordered PDF document."
      steps={[
        { title: "Select Multiple Images", description: "Upload all photos and graphics at once." },
        { title: "Arrange Sequence", description: "Drag thumbnail images into correct order." },
        { title: "Download Single PDF", description: "Get a clean multi-page PDF file." }
      ]}
      features={[
        { icon: Zap, title: "Multi-Format Support", description: "Combines JPG, PNG, WEBP, and BMP seamlessly." },
        { icon: Shield, title: "Drag & Drop Reordering", description: "Arrange photo order before building PDF." },
        { icon: Lock, title: "Free & Unlimited", description: "No caps on photo count per PDF." },
        { icon: FileCheck, title: "Auto Orientation", description: "Fits landscape and portrait photos automatically." }
      ]}
      useCases={[
        { title: "Expense Receipts", description: "Bundle multiple receipt photos into one PDF report." },
        { title: "Real Estate Photos", description: "Combine property photos into a single PDF brochure." },
        { title: "Homework Submissions", description: "Stitch multi-page handwritten assignment photos." }
      ]}
      midCTA={{ text: "Convert Images to PDF →", href: "/jpg-to-pdf" }}
      bottomCTA={{ headline: "Combine all your photos into one PDF file.", text: "Combine Images Free", href: "/jpg-to-pdf" }}
      faqs={[
        { question: "Can I mix JPG and PNG files together?", answer: "Yes, our converter handles mixed image formats seamlessly." },
        { question: "How many photos can I combine in one PDF?", answer: "You can combine 50+ images into a single document at once." }
      ]}
      faqTitle="Multiple Images to PDF FAQ"
      faqSubtitle="Photo binder conversion tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "JPG to PDF", href: "/jpg-to-pdf" },
        { name: "Multiple Images to PDF", href: "/convert-multiple-images-to-one-pdf" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
