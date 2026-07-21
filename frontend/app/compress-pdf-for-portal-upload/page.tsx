import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Compress PDF for Portal Upload | Fix Upload Errors",
  description: "Fix \"File Too Large\" errors on government, banking, and university portals. Compress PDF for portal upload free.",
  alternates: { canonical: "https://ilovepdfkit.com/compress-pdf-for-portal-upload" },
};

export default function CompressPdfForPortalUploadPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-for-portal-upload"
      keyword="compress pdf for portal upload"
      pageType="A"
      angle="problem"
      h1="Compress PDF for Portal Uploads"
      heroDescription={`Bypass strict web form caps and fix "File Too Large" portal errors instantly.`}
      intro="Web portals for immigration, job applications, tax filings, and banking have rigid file size thresholds. If your PDF is even 100KB over the limit, the server rejects it. Our portal compression engine ensures your document complies with all system upload requirements."
      steps={[
        { title: "Upload PDF", description: "Drop your rejected PDF into the box." },
        { title: "Compress File", description: "Auto-adjust size parameters for online portals." },
        { title: "Upload to Portal", description: "Download your ready-to-submit document." }
      ]}
      features={[
        { icon: Zap, title: "Portal Ready", description: "Fits strict upload requirements perfectly." },
        { icon: Shield, title: "100% Confidential", description: "Confidential handling of official forms." },
        { icon: Lock, title: "No Registration", description: "No account needed to process files." },
        { icon: FileCheck, title: "Form Preserved", description: "Maintains interactive form fields and signatures." }
      ]}
      useCases={[
        { title: "Immigration & Visa Portals", description: "Upload passports and certificates without rejection." },
        { title: "State Tax Portals", description: "Submit tax documentation under portal caps." },
        { title: "Banking & Mortgage Applications", description: "Upload financial statements smoothly." }
      ]}
      midCTA={{ text: "Fix Portal Upload Error →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Bypass web portal upload restrictions.", text: "Compress for Portal", href: "/compress-pdf" }}
      faqs={[
        { question: "Why do portals reject large PDF files?", answer: "Portals set file size caps to save server bandwidth and prevent database overload." },
        { question: "Will interactive PDF fields stay editable?", answer: "Yes, form structure and signature metadata are preserved during compression." }
      ]}
      faqTitle="Portal Upload Compression FAQ"
      faqSubtitle="Fix online submission errors"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "Portal Upload", href: "/compress-pdf-for-portal-upload" }
      ]}
      themeColor="#10b981"
    />
  );
}
