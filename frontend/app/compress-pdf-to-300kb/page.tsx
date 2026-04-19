import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Clock, FastForward, Timer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF to 300KB Instantly | Fast & Free PDF Resizer',
  description: 'In 20 seconds, your massive PDF can shrink to under 300KB. Compress files at lightning speed without installing any software.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-to-300kb' },
};

export default function CompressPdfTo300kbPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-to-300kb"
      keyword="compress pdf to 300kb"
      pageType="A"
      angle="speed"
      h1="Compress PDF to 300KB in Seconds"
      heroDescription="Nobody likes waiting for large files to upload. Resize your PDF to 300KB instantly with our high-speed compression servers."
      intro="In 10 seconds, your massive PDF can shrink to under 300KB. When you're on a deadline, sitting around waiting for a 15MB file to upload over a slow connection is agonizing. You need to compress a PDF to 300KB, and you need it done right now. Our engine bypasses slow client-side processing, using dedicated cloud infrastructure to crush file sizes almost instantly. Whether it's an eBook, a manual, or a dense portfolio, get your file optimized at lightning speed."
      steps={[
        { title: 'Upload Fast', description: 'Drag your PDF into the upload zone.' },
        { title: 'Hit Compress', description: 'Select your compression level and click.' },
        { title: 'Instant Processing', description: 'Wait less than 5 seconds for the cloud engine.' },
        { title: 'Download Promptly', description: 'Grab your 300KB file and keep moving.' },
      ]}
      features={[
        { icon: FastForward, title: 'Instant Action', description: 'No waiting in queues or configuring settings.' },
        { icon: CloudLightning, title: 'Cloud Powered', description: 'Offloads processing to our fast web servers.' },
        { icon: Clock, title: 'No Installation', description: 'Skip the heavy desktop software setups.' },
        { icon: Timer, title: 'Batch Processing', description: 'Merge and compress multiple files rapidly.' },
      ]}
      useCases={[
        { title: 'Last-minute Deadlines', description: 'When the submission window closes in 5 minutes.' },
        { title: 'Slow Connections', description: 'Quick sharing on 3G mobile networks.' },
        { title: 'Quick Emails', description: 'Bypass corporate email attachment limits instantly.' },
      ]}
      midCTA={{ text: 'Compress Fast →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Stop waiting for uploads.', text: 'Compress your PDF now', href: '/compress-pdf' }}
      faqs={[
        { question: 'Will compressing a PDF the fast way reduce image quality?', answer: 'Our high-speed algorithms are optimized to retain readability. Images are compressed smartly to hit the 300KB target while maintaining visual integrity.' },
        { question: 'Do I need to create an account to compress a PDF quickly?', answer: 'No. You can compress files instantly without logging in, verifying an email, or setting up a profile.' },
        { question: 'Is my PDF deleted after compression?', answer: 'Yes. For your privacy and security, all files are purged from our servers shortly after you download the result.' },
      ]}
      faqTitle="300KB Compression FAQs"
      faqSubtitle="Answers about speed, quality, and privacy"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress to 300KB', href: '/compress-pdf-to-300kb' },
      ]}
      themeColor="#10b981"
    />
  );
}

// Custom icon since CloudLightning is not imported
function CloudLightning(props: any) {
    return <Zap {...props} />;
}
