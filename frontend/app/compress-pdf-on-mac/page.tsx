import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Compress PDF on Mac Free Online | No Software Required",
  description: "Easily compress PDF files on macOS (MacBook, iMac) online free without Preview app or Adobe Acrobat.",
  alternates: { canonical: "https://ilovepdfkit.com/compress-pdf-on-mac" },
};

export default function CompressPdfOnMacPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-on-mac"
      keyword="compress pdf on mac"
      pageType="A"
      angle="speed"
      h1="Compress PDF Files on Mac"
      heroDescription="Quickly shrink PDF size on Safari or Chrome on macOS without complex Preview Quartz filters."
      intro="Compressing PDFs on macOS using Preview often results in blurry text or corrupted files due to unoptimized Quartz filters. Our web-based PDF compression tool works directly in Safari or Chrome on any MacBook or iMac, giving you crisp quality and small file sizes in seconds."
      steps={[
        { title: "Open on Mac", description: "Access via Safari, Chrome, or Firefox on macOS." },
        { title: "Upload PDF", description: "Drag and drop your file into the browser." },
        { title: "Download Small PDF", description: "Save your compressed PDF to Mac Finder." }
      ]}
      features={[
        { icon: Zap, title: "Safari Optimized", description: "Works seamlessly across all macOS browsers." },
        { icon: Shield, title: "Private & Secure", description: "No local software installation or permissions needed." },
        { icon: Lock, title: "No Subscription", description: "Skip Mac App Store paid compression utilities." },
        { icon: FileCheck, title: "No Blur Output", description: "Avoids blurry text issues common with Preview Quartz." }
      ]}
      useCases={[
        { title: "Mac Users Without Acrobat", description: "Compress files without paying for Adobe Acrobat Mac." },
        { title: "Email Attachments on Mail App", description: "Send small PDFs through Apple Mail app." },
        { title: "Airdrop Preparation", description: "Shrink PDFs for quick Airdrop sharing." }
      ]}
      midCTA={{ text: "Compress PDF on Mac →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Fast PDF compression for macOS.", text: "Compress Free on Mac", href: "/compress-pdf" }}
      faqs={[
        { question: "Do I need Adobe Acrobat for Mac?", answer: "No, our online tool handles all compression in browser without any apps." },
        { question: "Does this work on M1/M2/M3 Apple Silicon Macs?", answer: "Yes, works 100% in any browser on Apple Silicon and Intel Macs." }
      ]}
      faqTitle="Mac PDF Compression FAQ"
      faqSubtitle="Optimized for macOS users"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "On Mac", href: "/compress-pdf-on-mac" }
      ]}
      themeColor="#10b981"
    />
  );
}
