import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { ShieldAlert, RefreshCcw, DownloadCloud, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reduce PDF Size for Upload | Fix Rejected PDF Files',
  description: 'When a web form rejects your large PDF, you need a quick fix. Reduce PDF size for upload and bypass portal restrictions easily.',
  alternates: { canonical: 'https://ilovepdfkit.com/reduce-pdf-size-for-upload' },
};

export default function ReducePdfSizeForUploadPage() {
  return (
    <SEOLandingPage
      slug="reduce-pdf-size-for-upload"
      keyword="reduce pdf size for upload"
      pageType="A"
      angle="problem"
      h1="Reduce PDF Size for Uploads"
      heroDescription="Bypass frustrating 'File Too Large' errors on web forms. Shrink your PDF to meet strict upload limits in seconds."
      intro="When a web portal rejects your important document with a loud 'Error: File Exceeds Maximum Upload Size', it can stop your entire workflow. You aren't a compression expert—you just need the file to upload quickly so you can submit your form. Whether it's a tax portal, a university application, or an HR system, we fix this exact problem. Easily reduce PDF size for upload using our smart optimization engine. We automatically strip out bloated metadata and resize enormous images so your file slides perfectly under any portal's size cap."
      steps={[
        { title: 'Identify the Limit', description: 'Check the web form to see if the limit is 1MB, 2MB, or 5MB.' },
        { title: 'Upload File', description: 'Drag your oversized PDF into our converter tool.' },
        { title: 'Select Compression', description: 'Choose Extreme if the limit is very small (like 100KB).' },
        { title: 'Download & Retry', description: 'Save the new file and successfully upload it to the portal.' },
      ]}
      features={[
        { icon: ShieldAlert, title: 'Error Solver', description: 'Built specifically to bypass strict web form caps.' },
        { icon: RefreshCcw, title: 'Instant Retries', description: 'If it\'s still too big, re-compress instantly.' },
        { icon: DownloadCloud, title: 'No Installation', description: 'Fix the problem directly in your current browser tab.' },
        { icon: Activity, title: 'Quality Maintained', description: 'Documents remain professional and perfectly readable.' },
      ]}
      useCases={[
        { title: 'Tax & Govt Portals', description: 'Shrink massive W2s and tax returns for IRS portals.' },
        { title: 'Real Estate Forms', description: 'Compress multi-page lease agreements for digital signing systems.' },
        { title: 'Job Boards', description: 'Ensure your CV uploads successfully to Workday or LinkedIn.' },
      ]}
      midCTA={{ text: 'Reduce Size Now →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Never let a file size block you.', text: 'Fix Your PDF Free', href: '/compress-pdf' }}
      faqs={[
        { question: 'What if the compressed PDF is still too large for upload?', answer: 'If using our tool on the Highest Compression setting isn\'t enough, your PDF might simply have too many pages. Try using our Extract PDF tool to upload the document in multiple smaller parts.' },
        { question: 'Can I compress a password-protected PDF?', answer: 'No, web forms and our compressor both require unlocked files. You can use our Unlock PDF tool first, compress it, and then upload.' },
        { question: 'How do I know how much compression is being applied?', answer: 'Our system automatically calculates the most efficient compression ratio that balances strict file size reduction with visual clarity.' },
      ]}
      faqTitle="Upload Problem FAQs"
      faqSubtitle="Troubleshooting stubborn file uploads"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Reduce for Upload', href: '/reduce-pdf-size-for-upload' },
      ]}
      themeColor="#10b981"
    />
  );
}
