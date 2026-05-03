import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Target, FileWarning, Zap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF to 1MB Online Free | Reduce PDF Size',
  description: 'When an upload portal restricts your document to exactly 1MB, use our compression tool to shrink your PDF instantly while keeping high quality.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-to-1mb' },
};

export default function CompressPdfTo1mbPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-to-1mb"
      keyword="compress pdf to 1mb"
      pageType="A"
      angle="problem"
      h1="Compress PDF to 1MB — Free Online Tool"
      heroDescription="Your PDF was rejected because it's over 1MB. Shrink it down instantly to bypass strict portal limitations while preserving quality."
      intro='You just compiled a beautiful portfolio or report, but the online portal flashes an error: "File too large (max 1MB)". Hitting this file size limit is common but incredibly frustrating, especially when you need images and text to remain high quality. Our specific compress PDF to 1MB tool is built to solve this. It intelligently removes invisible metadata and optimizes images to squeeze your document right under the 1MB threshold without destroying the visual appeal.'
      steps={[
        { title: 'Upload PDF', description: 'Drag and drop your oversized file into the upload zone.' },
        { title: 'Select Compression', description: 'Choose our recommended compression setting to target 1MB.' },
        { title: 'Download & Verify', description: 'Save the new file and check that it passes the 1MB requirements.' },
      ]}
      features={[
        { icon: Target, title: 'Precision Targeting', description: 'Algorithms designed to hit the 1MB target perfectly.' },
        { icon: FileWarning, title: 'Bypass Restrictions', description: 'Never get blocked by a 1MB upload error again.' },
        { icon: Zap, title: 'Fast Processing', description: 'Reduces large file sizes significantly in seconds.' },
        { icon: CheckCircle, title: 'Great Quality', description: 'Balances file size reduction with excellent visual fidelity.' },
      ]}
      useCases={[
        { title: 'Software Portals', description: 'Standard enterprise software portals often enforce 1MB limits on documents.' },
        { title: 'School Assignments', description: 'Learning management systems frequently cap student uploads at 1MB.' },
      ]}
      midCTA={{ text: 'Compress to 1MB Now →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Beat the 1MB file limit.', text: 'Compress PDF Free', href: '/compress-pdf' }}
      faqs={[
        { question: 'Will my document still look good?', answer: 'Yes! 1MB is a generous size limit for compression, allowing us to retain excellent image quality and perfectly crisp text.' },
        { question: 'What if my PDF is 50MB?', answer: 'If your file is exceptionally large, you must select the Extreme Compression option to ensure it successfully compresses down to 1MB.' },
        { question: 'How do I compress a PDF file to less than 1MB without losing quality?', answer: 'Using our "Recommended Compression" mode, we remove invisible structural data without heavily impacting image quality, easily bringing most files under 1MB.' },
        { question: 'Is 1MB a good size for a PDF attachment?', answer: 'Yes, 1MB is universally accepted by almost all email clients, university portals, and enterprise software systems, making it the ideal target size.' },
      ]}
      faqTitle="Compress to 1MB — FAQ"
      faqSubtitle="Answers for standard file size limits"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress to 1MB', href: '/compress-pdf-to-1mb' },
      ]}
      themeColor="#10b981"
    />
  );
}
