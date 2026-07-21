import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Smallpdf Alternative Free | Unlimited PDF Tools No Paywall",
  description: "Looking for a free Smallpdf alternative without 2-task daily limits or premium paywalls? Compress, merge, and convert PDFs free.",
  alternates: { canonical: "https://ilovepdfkit.com/smallpdf-alternative-free" },
};

export default function SmallpdfAlternativeFreePage() {
  return (
    <SEOLandingPage
      slug="smallpdf-alternative-free"
      keyword="smallpdf alternative free"
      pageType="D"
      angle="comparison"
      h1="The Best Free Smallpdf Alternative"
      heroDescription="Tired of hitting Smallpdf 2-task daily limits and $12/month paywalls? Switch to iLovePDFKit."
      intro="Smallpdf is a popular PDF platform, but their free tier imposes an aggressive 2-task daily limit. As soon as you process a third file, you are hit with a strict paywall demanding a monthly subscription. We believe core document utilities should be freely accessible without arbitrary task caps."
      steps={[
        { title: "No Daily Limits", description: "Process as many files as you need today without lockouts." },
        { title: "Skip the Paywall", description: "Access compression, merging, and conversion free." },
        { title: "No Account Required", description: "Use tools anonymously without creating accounts." },
        { title: "Enterprise Security", description: "Automated 256-bit SSL file purging after download." }
      ]}
      features={[
        { icon: Zap, title: "Unlimited Daily Tasks", description: "Compress 20 files or merge 50 documents without paywalls." },
        { icon: Shield, title: "No Subscription Traps", description: "No credit card popups or hidden checkout screens." },
        { icon: Lock, title: "No Registration Required", description: "Convert files instantly without giving your email." },
        { icon: FileCheck, title: "Clean Professional Output", description: "Zero watermarks added to your documents." }
      ]}
      comparisonTable={[
  {
    "feature": "High-Quality PDF Compression",
    "ilovepdfkit": true,
    "ilovepdf": true,
    "smallpdf": true,
    "adobe": true
  },
  {
    "feature": "Visual PDF Merging & Splitting",
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
    "feature": "No Account Required",
    "ilovepdfkit": true,
    "ilovepdf": true,
    "smallpdf": false,
    "adobe": false
  },
  {
    "feature": "100% Free Core Tools",
    "ilovepdfkit": true,
    "ilovepdf": false,
    "smallpdf": false,
    "adobe": false
  }
]}
      midCTA={{ text: "Try the Free Alternative →", href: "/" }}
      bottomCTA={{ headline: "Stop paying monthly fees for basic PDF processing.", text: "Switch to iLovePDFKit Free", href: "/" }}
      faqs={[
        { question: "Why is iLovePDFKit free compared to Smallpdf?", answer: "We operate efficient cloud infrastructure without massive corporate marketing overhead, passing savings to users." },
        { question: "Is the file compression quality identical?", answer: "Yes, we use industry-standard lossless compression algorithms." }
      ]}
      faqTitle="Smallpdf Alternative FAQ"
      faqSubtitle="Comparing platform features and limits"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Alternatives", href: "/smallpdf-alternative-free" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
