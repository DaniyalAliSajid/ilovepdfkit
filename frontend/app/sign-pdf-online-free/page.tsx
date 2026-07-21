import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sign PDF Online Free | Electronic Signature Tool",
  description: "Add your electronic signature to PDF documents free online. Draw, type, or upload signature image to sign contracts.",
  alternates: { canonical: "https://ilovepdfkit.com/sign-pdf-online-free" },
};

export default function SignPdfOnlineFreePage() {
  return (
    <SEOLandingPage
      slug="sign-pdf-online-free"
      keyword="sign pdf online free"
      pageType="A"
      angle="speed"
      h1="Sign PDF Online Free"
      heroDescription="Sign contracts, agreements, and forms online fast without printing or scanning."
      intro="Printing out a PDF contract just to sign it with a pen and scan it back in wastes paper and hours of time. Our free electronic PDF signature tool lets you draw your signature with your mouse or touchscreen, type a stylized script signature, or upload a photo signature to sign any document in seconds."
      steps={[
        { title: "Upload PDF Contract", description: "Select the document you need to sign." },
        { title: "Create Signature", description: "Draw, type, or upload your signature image." },
        { title: "Place & Download", description: "Drag signature onto document line and save." }
      ]}
      features={[
        { icon: Zap, title: "Draw, Type, or Upload", description: "Flexible signature creation options." },
        { icon: Shield, title: "Legal E-Signatures", description: "Creates valid electronic signature stamps." },
        { icon: Lock, title: "100% Free Tool", description: "No subscription traps or signature count limits." },
        { icon: FileCheck, title: "Mobile Touch Screen Support", description: "Sign smoothly on smartphone or tablet screens." }
      ]}
      useCases={[
        { title: "Employment Contracts", description: "Sign offer letters and onboarding packets." },
        { title: "Rental Agreements", description: "Sign lease contracts and tenant disclosures." },
        { title: "Vendor NDAs", description: "Sign non-disclosure agreements instantly." }
      ]}
      midCTA={{ text: "Sign PDF Document Free →", href: "/protect-pdf" }}
      bottomCTA={{ headline: "Sign contracts and PDF forms electronically in seconds.", text: "Sign PDF Free", href: "/protect-pdf" }}
      faqs={[
        { question: "Is my electronic signature legally binding?", answer: "Yes, electronic signatures are legally recognized under ESIGN and eIDAS acts for most commercial contracts." },
        { question: "Can I draw my signature on a phone touchscreen?", answer: "Yes, open our tool on your phone to draw a signature with your finger." }
      ]}
      faqTitle="Sign PDF Online FAQ"
      faqSubtitle="Electronic signature guidance"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Protect PDF", href: "/protect-pdf" },
        { name: "Sign PDF", href: "/sign-pdf-online-free" }
      ]}
      themeColor="#1e3a8a"
    />
  );
}
