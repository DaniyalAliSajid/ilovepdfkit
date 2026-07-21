import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sejda Alternative Free | Unlimited Online PDF Processing",
  description: "Looking for a free Sejda alternative without 3-task hourly limits or 50MB file size caps? Compress & edit PDFs free.",
  alternates: { canonical: "https://ilovepdfkit.com/sejda-alternative-free" },
};

export default function SejdaAlternativeFreePage() {
  return (
    <SEOLandingPage
      slug="sejda-alternative-free"
      keyword="sejda alternative free"
      pageType="D"
      angle="comparison"
      h1="The Best Free Sejda Alternative"
      heroDescription="Bypass Sejda 3-task hourly restrictions and 50MB caps with an unlimited free PDF suite."
      intro="Sejda PDF provides good tools, but their free tier locks you out after processing just 3 tasks per hour, and caps document size at 50MB or 200 pages. When working on urgent projects, waiting an hour for your next task is frustrating. iLovePDFKit gives you unlimited document processing freedom."
      steps={[
        { title: "No Hourly Wait Times", description: "Process consecutive files without hourly countdown timers." },
        { title: "No 200-Page Caps", description: "Compress and merge multi-page documents easily." },
        { title: "No Account Required", description: "Use tools anonymously without registering." },
        { title: "Secure & Private", description: "256-bit SSL encryption with automated file purging." }
      ]}
      features={[
        { icon: Zap, title: "Zero Hourly Limits", description: "No 3-task hourly caps blocking your workflow." },
        { icon: Shield, title: "Heavy Page Processing", description: "Supports documents over 200 pages cleanly." },
        { icon: Lock, title: "No Registration Required", description: "Instant processing without giving your email." },
        { icon: FileCheck, title: "No Watermarks", description: "Output files remain 100% clean and professional." }
      ]}
      comparisonTable={[
  {
    "feature": "High-Quality Compression & Merging",
    "ilovepdfkit": true,
    "ilovepdf": true,
    "smallpdf": true,
    "adobe": true
  },
  {
    "feature": "No Hourly Task Caps",
    "ilovepdfkit": true,
    "ilovepdf": false,
    "smallpdf": false,
    "adobe": true
  },
  {
    "feature": "Large Multi-Page Processing",
    "ilovepdfkit": true,
    "ilovepdf": true,
    "smallpdf": true,
    "adobe": true
  },
  {
    "feature": "100% Free Core Suite",
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
      midCTA={{ text: "Try Sejda Alternative →", href: "/" }}
      bottomCTA={{ headline: "Work without hourly document task caps.", text: "Switch to iLovePDFKit Free", href: "/" }}
      faqs={[
        { question: "Why does Sejda limit free users to 3 tasks per hour?", answer: "Sejda uses hourly caps to force users into purchasing $5/week or $63/year paid passes." },
        { question: "Does iLovePDFKit have any hourly timers?", answer: "No, you can process as many files as you need continuously." }
      ]}
      faqTitle="Sejda Alternative FAQ"
      faqSubtitle="Comparing task caps and document limits"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Alternatives", href: "/sejda-alternative-free" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
