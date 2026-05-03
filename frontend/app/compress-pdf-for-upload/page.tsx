import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { UploadCloud, AlertTriangle, FastForward, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF for Upload | Fix "File Too Large" Errors',
  description: 'Fix the annoying "file too large" error when uploading documents. Compress your PDF online instantly to bypass portal upload limits.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-for-upload' },
};

export default function CompressPdfForUploadPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-for-upload"
      keyword="compress pdf for upload"
      pageType="A"
      angle="problem"
      h1="Compress PDF for Upload"
      heroDescription="Is a website rejecting your PDF upload? Compress it instantly to bypass file size limits and complete your submission."
      intro="There is nothing worse than finishing a long, tedious online application form, only to click 'Submit' and get hit with a red error: 'PDF file is too large for upload.' The website won't accept your document, and you can't proceed. You need to compress your PDF for upload immediately. Our online tool is the fastest way to solve this problem. It drastically reduces the file size of your PDF, allowing you to bypass aggressive upload restrictions on government sites, job portals, and school systems."
      steps={[
        { title: 'Upload File', description: 'Drag the rejected PDF into our compression tool.' },
        { title: 'Shrink Size', description: 'Our engine compresses the document automatically.' },
        { title: 'Retry Upload', description: 'Download the much smaller PDF and successfully upload it.' },
      ]}
      features={[
        { icon: AlertTriangle, title: 'Fixes Errors', description: 'Specifically solves "file too large" portal errors.' },
        { icon: UploadCloud, title: 'Upload Ready', description: 'Optimizes PDFs perfectly for web form submissions.' },
        { icon: FastForward, title: 'Instant Fix', description: 'Get back to your application in less than 10 seconds.' },
        { icon: Check, title: 'Browser Based', description: 'No software to install; it all happens in your browser.' },
      ]}
      useCases={[
        { title: 'Job Applications', description: 'Ensure your resume uploads successfully to Workday or other ATS systems.' },
        { title: 'Visa Forms', description: 'Compress passport scans to bypass strict immigration portal limits.' },
      ]}
      midCTA={{ text: 'Compress for Upload Now →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Don\'t let file sizes stop your submission.', text: 'Compress PDF Now', href: '/compress-pdf' }}
      faqs={[
        { question: 'Why is the website rejecting my PDF?', answer: 'Many older websites and government portals have strict server limits, meaning they simply cannot process files larger than 1MB or 2MB.' },
        { question: 'Will compressing it change my document?', answer: 'The visual appearance remains largely the same. We only compress the invisible data and optimize the images, leaving the layout and text intact.' },
        { question: 'Why does the website say my PDF file is too large?', answer: 'Many portals have strict server-side limitations (often 1MB or 2MB) to save storage space. If your PDF exceeds this limit, the server will instantly reject the upload.' },
        { question: 'How do I make a PDF smaller so I can upload it?', answer: 'Upload the rejected file to our tool, select a compression level, and download the optimized version. It will now easily bypass the website\'s size restrictions.' },
      ]}
      faqTitle="Upload Errors — FAQ"
      faqSubtitle="Answers about bypassing upload restrictions"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress for Upload', href: '/compress-pdf-for-upload' },
      ]}
      themeColor="#10b981"
    />
  );
}
