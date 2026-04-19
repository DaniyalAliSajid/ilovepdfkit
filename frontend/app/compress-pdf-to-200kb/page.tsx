import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Target, Monitor, DownloadCloud, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF to 200KB Free Online | Reduce PDF Size to 200KB',
  description: 'Picture this: your grant application PDF needs to be under 200KB. Achieve the exact file size you need for portals and applications instantly and free.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-to-200kb' },
};

export default function CompressPdfTo200kbPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-to-200kb"
      keyword="compress pdf to 200kb"
      pageType="A"
      angle="use-case"
      h1="Compress PDF to 200KB Online"
      heroDescription="Shrink your PDF documents down to 200KB without losing readability. Perfect for strict online submission portals."
      intro="Picture this: your grant application PDF is ready, but the submission portal enforces a hard 200KB limit. Compressing a PDF to exactly 200KB can feel like a balancing act between file size and legible text. Our compression engine provides the perfect middle ground. By choosing the right compression profile, you can easily compress a PDF to 200KB, ensuring your important documents meet application guidelines while retaining the visual clarity demanded by reviewers."
      steps={[
        { title: 'Select PDF', description: 'Upload the document you want to shrink to 200KB.' },
        { title: 'Choose Compression', description: 'Select the Recommended or Extreme compression mode based on your original file size.' },
        { title: 'Process File', description: 'Click Convert and wait 5 seconds.' },
        { title: 'Verify Size', description: 'Download your file and quickly verify it meets the 200KB threshold.' },
      ]}
      features={[
        { icon: Target, title: 'Precision Reduction', description: 'Smart image downsampling hits strict size targets.' },
        { icon: Monitor, title: 'Cross-device', description: 'Compress files from your PC, Mac, or mobile phone.' },
        { icon: DownloadCloud, title: 'No Watermarks', description: 'Your file remains clean and professional.' },
        { icon: Eye, title: 'Visual Clarity', description: 'Letters and graphs stay sharp post-compression.' },
      ]}
      useCases={[
        { title: 'Grant Applications', description: 'Research grants typically require supporting documents under 200KB.' },
        { title: 'Immigration Forms', description: 'Government visa portals enforce small file sizes for passports.' },
        { title: 'Insurance Claims', description: 'Reduce medical receipts and invoices for claim processing.' },
      ]}
      midCTA={{ text: 'Reduce Size Now →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Hit your 200KB target.', text: 'Start Compressing Free', href: '/compress-pdf' }}
      faqs={[
        { question: 'What is the recommended PDF size for email attachments compared to 200KB?', answer: 'While most emails accept up to 25MB, keeping your PDFs under 200KB ensures instant loading on mobile devices and saves inbox storage.' },
        { question: 'Does WhatsApp have a PDF file size limit?', answer: 'WhatsApp limits document sharing to 100MB, but sending a 200KB file is much faster and saves cellular data for the recipient.' },
        { question: 'What file size does a standard job application portal accept?', answer: 'Many legacy ATS platforms prefer resumes under 200KB to ensure fast processing by text-parsing algorithms.' },
      ]}
      faqTitle="200KB Compression FAQs"
      faqSubtitle="Use-case specific questions for PDF sizing"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress to 200KB', href: '/compress-pdf-to-200kb' },
      ]}
      themeColor="#10b981"
    />
  );
}
