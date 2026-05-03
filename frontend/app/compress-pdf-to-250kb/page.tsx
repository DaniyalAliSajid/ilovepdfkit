import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Target, Monitor, DownloadCloud, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF to 250KB Free Online | Reduce PDF Size to 250KB',
  description: 'Picture this: your grant application PDF needs to be under 250KB. Achieve the exact file size you need for portals and applications instantly and free.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-to-250kb' },
};

export default function CompressPdfTo250kbPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-to-250kb"
      keyword="compress pdf to 250kb"
      pageType="A"
      angle="use-case"
      h1="Compress PDF to 250KB Online"
      heroDescription="Shrink your PDF documents down to 250KB without losing readability. Perfect for strict online submission portals."
      intro="Picture this: your grant application PDF is ready, but the submission portal enforces a hard 250KB limit. Compressing a PDF to exactly 250KB can feel like a balancing act between file size and legible text. Our compression engine provides the perfect middle ground. By choosing the right compression profile, you can easily compress a PDF to 250KB, ensuring your important documents meet application guidelines while retaining the visual clarity demanded by reviewers."
      steps={[
        { title: 'Select PDF', description: 'Upload the document you want to shrink to 250KB.' },
        { title: 'Choose Compression', description: 'Select the Recommended or Extreme compression mode based on your original file size.' },
        { title: 'Process File', description: 'Click Convert and wait a few seconds.' },
        { title: 'Verify Size', description: 'Download your file and verify it meets the 250KB threshold.' },
      ]}
      features={[
        { icon: Target, title: 'Precision Reduction', description: 'Smart image downsampling hits strict size targets.' },
        { icon: Monitor, title: 'Cross-device', description: 'Compress files from your PC, Mac, or mobile phone.' },
        { icon: DownloadCloud, title: 'No Watermarks', description: 'Your file remains clean and professional.' },
        { icon: Eye, title: 'Preserved Quality', description: 'Text remains sharp enough for reviewers to read.' },
      ]}
      useCases={[
        { title: 'Grant Applications', description: 'Many academic and research grant portals cap submissions at 250KB.' },
        { title: 'Email Attachments', description: 'Ensure your file sails through strict corporate email filters.' },
      ]}
      midCTA={{ text: 'Compress to 250KB Now →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Hit your file size target.', text: 'Compress PDF to 250KB', href: '/compress-pdf' }}
      faqs={[
        { question: 'Will my text become blurry at 250KB?', answer: 'No. While high-resolution images are compressed heavily, vector text is preserved so that it remains sharp and readable.' },
        { question: 'Which compression mode should I choose?', answer: 'If your file is around 500KB, use Recommended. If it is over 2MB, choose Extreme Compression to ensure it drops below 250KB.' },
        { question: 'Can I compress a PDF to exactly 250KB?', answer: 'File sizes vary based on content, but our targeted compression algorithms are designed to get your file as close to, or just under, the 250KB limit as possible.' },
        { question: 'How do I reduce a scanned document size to 250KB?', answer: 'Scanned PDFs are essentially large images. Our tool selectively downscales these scanned images to 144dpi, drastically reducing size while keeping the scan legible.' },
      ]}
      faqTitle="Compress to 250KB — FAQ"
      faqSubtitle="Answers about reducing to a specific size"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress to 250KB', href: '/compress-pdf-to-250kb' },
      ]}
      themeColor="#10b981"
    />
  );
}
