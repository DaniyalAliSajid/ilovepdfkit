import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF to 100KB Online Free | iLovePDFKit',
  description: 'When a government e-portal or hospital form rejects your 8MB PDF, reduce it to under 100KB instantly. Free, secure, and no signup needed.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-to-100kb' },
};

export default function CompressPdfTo100kbPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-to-100kb"
      keyword="compress pdf to 100kb"
      pageType="A"
      angle="problem"
      h1="Compress PDF to 100KB — Free Online Tool"
      heroDescription="Your PDF was rejected. The portal says 'max 100KB'. Here's how to fix it in seconds without losing readability."
      intro='When a government e-portal, a hospital form, or a university admissions page says "File too large (max 100KB)", you can feel stuck. Your scanned document might be 5MB, and you need it shrunk drastically. Our compress PDF to 100KB tool is built specifically for this problem. It uses heavy compression algorithms to strip away invisible metadata and optimize images down to the pixel, ensuring your file slips right under the 100KB limit while keeping the text perfectly crisp.'
      steps={[
        { title: 'Upload your PDF', description: 'Drag and drop your oversized file into the box above.' },
        { title: 'Select compression level', description: 'Choose "Extreme Compression" to guarantee a file size closest to 100KB.' },
        { title: 'Click Compress', description: 'Our servers process your file in under 10 seconds.' },
        { title: 'Download & Upload', description: 'Save your compressed PDF, ready to bypass any portal restrictions.' },
      ]}
      features={[
        { icon: Zap, title: 'Extreme Compression', description: 'Reduces file size by up to 95% for strict portal limits.' },
        { icon: Shield, title: 'Privacy-first', description: 'Your file is processed securely and deleted automatically.' },
        { icon: Lock, title: 'No account needed', description: 'No signup, no email requirements, no hidden fees.' },
        { icon: FileCheck, title: 'Quality preserved', description: 'Text stays completely legible even at extreme compression.' },
      ]}
      useCases={[
        { title: 'Government Portals', description: 'Visa applications and tax portals strictly require 100KB file caps.' },
        { title: 'University Admissions', description: 'Student portals often cap ID uploads at exactly 100KB.' },
        { title: 'HR Systems', description: 'Strict ATS platforms reject resumes over 100KB.' },
      ]}
      midCTA={{ text: 'Compress to 100KB Now →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Bypass the 100KB limit now.', text: 'Compress PDF Free', href: '/compress-pdf' }}
      faqs={[
        { question: 'Can I compress a PDF to exactly 100KB?', answer: 'Our "Extreme Compression" setting targets the smallest possible size based on the layout of your file, often bringing it well under 100KB without destroying readability.' },
        { question: 'What compression level should I choose for a 100KB target?', answer: 'Always choose the "Extreme Compression" option to achieve maximum file size reduction.' },
        { question: 'Why is my compressed PDF still slightly over 100KB?', answer: 'If your PDF contains dozens of unoptimized high-resolution images, you might need to use our Split PDF tool to separate the pages before compressing.' },
      ]}
      faqTitle="Compress to 100KB — FAQ"
      faqSubtitle="Answers for strict file size limits"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress to 100KB', href: '/compress-pdf-to-100kb' },
      ]}
      themeColor="#10b981"
    />
  );
}
