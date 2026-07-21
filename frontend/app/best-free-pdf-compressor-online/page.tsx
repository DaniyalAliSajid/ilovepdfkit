import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Best Free PDF Compressor Online 2026 | Top Compressor Tool",
  description: "Discover the best free PDF compressor online. Compare compression ratios, speed, privacy, and file limits.",
  alternates: { canonical: "https://ilovepdfkit.com/best-free-pdf-compressor-online" },
};

export default function BestFreePdfCompressorOnlinePage() {
  return (
    <SEOLandingPage
      slug="best-free-pdf-compressor-online"
      keyword="best free pdf compressor online"
      pageType="D"
      angle="comparison"
      h1="The Best Free Online PDF Compressor in 2026"
      heroDescription="Compare top free PDF compression tools and shrink file size by up to 90% without quality loss."
      intro="Finding the best free PDF compressor online means balancing maximum file size reduction, text sharpness, processing speed, and strict user privacy. Many online tools add hidden watermarks or demand credit card upgrades. Here is why iLovePDFKit ranks as the top free PDF compressor tool available."
      steps={[
        { title: "Maximum Size Reduction", description: "Shrinks bloated 50MB PDFs down to under 5MB in seconds." },
        { title: "Text Sharpness Preservation", description: "DPI optimization ensures text stays crisp and readable." },
        { title: "No Subscription Paywall", description: "Compress unlimited files without hidden fees." },
        { title: "Automated Privacy Purging", description: "Files purged automatically hours after processing." }
      ]}
      features={[
        { icon: Zap, title: "Top Compression Ratios", description: "Reduces PDF file size up to 90% cleanly." },
        { icon: Shield, title: "Preserves Readability", description: "Maintains font rendering and document layout." },
        { icon: Lock, title: "Zero Daily Caps", description: "Compress as many files as you need free." },
        { icon: FileCheck, title: "No Watermarks", description: "Clean output guaranteed for all downloads." }
      ]}
      comparisonTable={[
  {
    "feature": "Up to 90% File Size Reduction",
    "ilovepdfkit": true,
    "ilovepdf": true,
    "smallpdf": true,
    "adobe": true
  },
  {
    "feature": "No Daily Task Limits",
    "ilovepdfkit": true,
    "ilovepdf": false,
    "smallpdf": false,
    "adobe": false
  },
  {
    "feature": "No Watermarks Added",
    "ilovepdfkit": true,
    "ilovepdf": true,
    "smallpdf": true,
    "adobe": true
  },
  {
    "feature": "100% Free Unlimited",
    "ilovepdfkit": true,
    "ilovepdf": false,
    "smallpdf": false,
    "adobe": false
  },
  {
    "feature": "No Registration Required",
    "ilovepdfkit": true,
    "ilovepdf": true,
    "smallpdf": false,
    "adobe": false
  }
]}
      midCTA={{ text: "Use Best Free Compressor →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Experience the top free PDF compressor online.", text: "Compress PDF Free", href: "/compress-pdf" }}
      faqs={[
        { question: "What makes a PDF compressor \"the best\"?", answer: "The best compressor achieves high file size reduction while preserving sharp text without charging fees." },
        { question: "Is online compression safe for personal files?", answer: "Yes, 256-bit SSL encryption and automated file purging keep your files private." }
      ]}
      faqTitle="Best PDF Compressor FAQ"
      faqSubtitle="Compression comparison guide"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "Best Free Compressor", href: "/best-free-pdf-compressor-online" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
