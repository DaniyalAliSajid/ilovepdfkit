import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Compress PDF Mobile Free | iPhone & Android Tool",
  description: "Compress PDF files on your smartphone free. Works on iPhone (iOS) and Android without downloading apps.",
  alternates: { canonical: "https://ilovepdfkit.com/compress-pdf-mobile-free" },
};

export default function CompressPdfMobileFreePage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-mobile-free"
      keyword="compress pdf mobile free"
      pageType="A"
      angle="use-case"
      h1="Compress PDF on Mobile (iPhone & Android)"
      heroDescription="Shrink PDF file size directly from your smartphone browser with zero app installs."
      intro="Need to compress a PDF file while on the go? You do not need to install space-consuming mobile apps from the App Store or Google Play Store. Our mobile-optimized web tool lets you upload, compress, and download small PDFs directly from your iPhone, iPad, or Android phone browser."
      steps={[
        { title: "Tap to Upload", description: "Select PDF from Files app or Files manager." },
        { title: "Mobile Compression", description: "Fast cloud processing optimized for phones." },
        { title: "Save to Phone", description: "Save small PDF directly to your device." }
      ]}
      features={[
        { icon: Zap, title: "No App Install", description: "Saves phone storage space with browser execution." },
        { icon: Shield, title: "100% Private", description: "Encrypted transfer for personal mobile documents." },
        { icon: Lock, title: "Free Mobile Tool", description: "No in-app purchases or subscription popups." },
        { icon: FileCheck, title: "Data Saver", description: "Uses minimal cellular data to transfer files." }
      ]}
      useCases={[
        { title: "iPhone & iPad Users", description: "Compress files directly from Files app on iOS." },
        { title: "Android Mobile Users", description: "Shrink PDFs from Google Drive or Downloads on Android." },
        { title: "On-the-Go File Sharing", description: "Compress and email PDFs while away from desktop." }
      ]}
      midCTA={{ text: "Compress PDF on Mobile →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Shrink PDFs on your phone in seconds.", text: "Compress Mobile Free", href: "/compress-pdf" }}
      faqs={[
        { question: "Does this work on iPhone Safari?", answer: "Yes, works seamlessly on iOS Safari, Chrome for mobile, and iPadOS." },
        { question: "Do I need to download an APK or app?", answer: "No apps required; runs entirely in your web browser." }
      ]}
      faqTitle="Mobile Compression FAQ"
      faqSubtitle="Smartphone PDF tools"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "Mobile Free", href: "/compress-pdf-mobile-free" }
      ]}
      themeColor="#10b981"
    />
  );
}
