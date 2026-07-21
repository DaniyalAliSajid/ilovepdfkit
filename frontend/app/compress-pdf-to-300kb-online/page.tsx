import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Compress PDF to 300KB Online Free | Fast & Secure",
  description: "Shrink PDF file size under 300KB fast online. Perfect for job portals, university uploads, and email attachments.",
  alternates: { canonical: "https://ilovepdfkit.com/compress-pdf-to-300kb-online" },
};

export default function CompressPdfTo300kbOnlinePage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-to-300kb-online"
      keyword="compress pdf to 300kb online"
      pageType="A"
      angle="speed"
      h1="Compress PDF to 300KB Fast Online"
      heroDescription="Target exact 300KB size requirements with fast cloud processing and zero quality loss."
      intro="Need your PDF file size under 300KB? Many employment portals and college submission forms mandate a 300KB maximum payload. Our online compressor strips unnecessary meta stream data and re-indexes graphics to hit 300KB in under 5 seconds."
      steps={[
        { title: "Drop your PDF", description: "Select any PDF file up to 50MB." },
        { title: "Process in Cloud", description: "Automatic 300KB size target optimization." },
        { title: "Save & Submit", description: "Download your optimized 300KB file instantly." }
      ]}
      features={[
        { icon: Zap, title: "Lightning Speed", description: "Process files in seconds directly in browser." },
        { icon: Shield, title: "Encrypted", description: "256-bit SSL transfer protects your documents." },
        { icon: Lock, title: "Zero Storage", description: "Files deleted within hours automatically." },
        { icon: FileCheck, title: "High Visual Clarity", description: "Maintains document layout and font structure." }
      ]}
      useCases={[
        { title: "Job Applications", description: "Upload resumes under strict 300KB ATS portal caps." },
        { title: "Academic Submissions", description: "Submit assignments under 300KB portal limits." },
        { title: "Email Attachments", description: "Send small PDF attachments without bouncing." }
      ]}
      midCTA={{ text: "Compress to 300KB Now →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Shrink your document under 300KB.", text: "Compress Free", href: "/compress-pdf" }}
      faqs={[
        { question: "How do I ensure my PDF stays under 300KB?", answer: "Select Recommended or Extreme Compression to guarantee sub-300KB output." },
        { question: "Is this tool free online?", answer: "Yes, 100% free without signups or watermarks." }
      ]}
      faqTitle="300KB Compression FAQ"
      faqSubtitle="Instant online PDF sizing"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "Compress to 300KB", href: "/compress-pdf-to-300kb-online" }
      ]}
      themeColor="#10b981"
    />
  );
}
