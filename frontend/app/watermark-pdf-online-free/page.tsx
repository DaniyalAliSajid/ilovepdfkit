import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Watermark PDF Online Free | Add Text & Image Watermarks",
  description: "Add custom text or logo image watermarks to PDF files free online. Protect document copyright and stamp \"CONFIDENTIAL\".",
  alternates: { canonical: "https://ilovepdfkit.com/watermark-pdf-online-free" },
};

export default function WatermarkPdfOnlineFreePage() {
  return (
    <SEOLandingPage
      slug="watermark-pdf-online-free"
      keyword="watermark pdf online free"
      pageType="A"
      angle="use-case"
      h1="Watermark PDF Online Free"
      heroDescription="Protect your PDF documents by stamping custom text or logo watermarks across every page."
      intro={`Sharing draft contracts, financial reports, or creative work without copyright protection leaves your intellectual property vulnerable to unauthorized distribution. Our free online PDF watermark tool lets you stamp custom text like "CONFIDENTIAL", "DRAFT", or upload your company logo watermark across all pages.`}
      steps={[
        { title: "Upload PDF", description: "Select the file you want to watermark." },
        { title: "Customize Watermark", description: "Choose text or image logo, opacity, and rotation." },
        { title: "Download Watermarked PDF", description: "Save your protected document instantly." }
      ]}
      features={[
        { icon: Zap, title: "Text & Image Stamps", description: "Add custom text strings or PNG logo stamps." },
        { icon: Shield, title: "Opacity & Position Control", description: "Adjust watermark transparency, angle, and grid position." },
        { icon: Lock, title: "100% Free Protection", description: "Protect unlimited documents without subscriptions." },
        { icon: FileCheck, title: "All Pages Stamping", description: "Applies watermark seamlessly across every page." }
      ]}
      useCases={[
        { title: "Draft Contracts", description: "Stamp \"DRAFT FOR REVIEW\" on unfinalized legal agreements." },
        { title: "Copyright Protection", description: "Add company logo watermarks to photography portfolios." },
        { title: "Confidential Audits", description: "Mark sensitive financial reports as \"STRICTLY CONFIDENTIAL\"." }
      ]}
      midCTA={{ text: "Watermark PDF Free →", href: "/protect-pdf" }}
      bottomCTA={{ headline: "Protect your PDF copyright with custom watermarks.", text: "Watermark PDF Free", href: "/protect-pdf" }}
      faqs={[
        { question: "Can someone easily remove the watermark?", answer: "Our tool flattens the watermark into document layers to prevent basic editing removal." },
        { question: "Can I control the watermark transparency?", answer: "Yes, adjust opacity sliders so your document remains easily readable behind the stamp." }
      ]}
      faqTitle="Watermark PDF FAQ"
      faqSubtitle="Document protection guidance"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Protect PDF", href: "/protect-pdf" },
        { name: "Watermark PDF", href: "/watermark-pdf-online-free" }
      ]}
      themeColor="#1e3a8a"
    />
  );
}
