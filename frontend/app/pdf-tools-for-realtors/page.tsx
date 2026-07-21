import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF Tools for Realtors & Real Estate Agents | Free Suite",
  description: "Compress real estate listing flyers, merge closing disclosure packets, and sign purchase contracts online free.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-tools-for-realtors" },
};

export default function PdfToolsForRealtorsPage() {
  return (
    <SEOLandingPage
      slug="pdf-tools-for-realtors"
      keyword="pdf tools for realtors"
      pageType="C"
      angle="audience"
      h1="PDF Tools for Realtors & Real Estate Agents"
      heroDescription="Streamline real estate paperwork: compress listing packages, merge disclosures, and sign contracts on mobile."
      intro="In real estate, speed closes deals. But dealing with bloated 40MB property listing packets, separate MLS disclosure PDFs, and signed purchase agreements can slow down closings. We built a specialized suite of free PDF tools designed specifically for real estate agents and brokers."
      steps={[
        { title: "Compress Listing Flyers", description: "Shrink property photo PDFs to under 2MB for fast emailing." },
        { title: "Merge Disclosure Packets", description: "Stitch inspection reports, disclosures, and addendums together." },
        { title: "Sign On-The-Go", description: "Add client electronic signatures directly on mobile." }
      ]}
      features={[
        { icon: Zap, title: "Fast Client Emailing", description: "Compress heavy photo listing packets for instant delivery." },
        { icon: Shield, title: "Closing Packet Assembly", description: "Combine all transaction PDFs into one master file." },
        { icon: Lock, title: "Mobile Friendly", description: "Process documents on your iPhone or iPad at open houses." },
        { icon: FileCheck, title: "100% Free Suite", description: "No software subscriptions cutting into your commissions." }
      ]}
      toolSpotlights={[
        { name: "Compress Listing Packets", href: "/compress-pdf", description: "Shrink heavy property listing PDFs for MLS uploads.", icon: Zap },
        { name: "Merge Closing Packets", href: "/merge-pdf", description: "Stitch disclosures, title files, and contracts into one packet.", icon: Shield },
        { name: "Sign Purchase Contracts", href: "/protect-pdf", description: "Add electronic client signatures quickly.", icon: Lock }
      ]}
      midCTA={{ text: "Explore Realtor PDF Suite →", href: "/" }}
      bottomCTA={{ headline: "Close deals faster with free real estate PDF tools.", text: "Use Realtor Suite Free", href: "/" }}
      faqs={[
        { question: "Can I compress real estate listing PDFs with photos?", answer: "Yes, our compressor reduces file size up to 90% while keeping house photos crisp." },
        { question: "Is it safe for confidential client closing files?", answer: "Yes, 256-bit encryption protects files and deletes them after processing." }
      ]}
      faqTitle="Realtor PDF Suite FAQ"
      faqSubtitle="Real estate document workflow tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Realtor Tools", href: "/pdf-tools-for-realtors" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
