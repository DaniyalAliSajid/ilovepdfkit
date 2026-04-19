import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Lock, EyeOff, ShieldCheck, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Merge PDF Without Uploading | Browser-based PDF Combine',
  description: 'Your file. Your rules. Merge PDFs directly in your web browser with maximum privacy. Fast, secure, and fully confidential.',
  alternates: { canonical: 'https://ilovepdfkit.com/merge-pdf-without-upload' },
};

export default function MergePdfWithoutUploadPage() {
  return (
    <SEOLandingPage
      slug="merge-pdf-without-upload"
      keyword="merge pdf without upload"
      pageType="A"
      angle="privacy"
      h1="Merge PDF Safely Online"
      heroDescription="Combine confidential documents securely using modern encryption. Keep your private files safe from prying eyes."
      intro="Your file. Your rules. When you are dealing with highly sensitive legal contracts, NDAs, or medical records, you might be hesitant to trust a free online tool. You want the highest tier of security. We provide enterprise-grade SSL encryption for every single file transfer. When you need to merge PDFs securely, our tool ensures your files travel through an encrypted tunnel, are merged dynamically in memory, and are immediately marked for deletion. We respect your confidentiality above everything else."
      steps={[
        { title: 'Secure Selection', description: 'Choose your sensitive PDFs.' },
        { title: 'Encrypted Transfer', description: 'Files are sent via strict 256-bit SSL encryption.' },
        { title: 'Memory Merge', description: 'The PDFs are stitched together dynamically.' },
        { title: 'Wipe & Download', description: 'You receive the file, and our system securely shreds the data.' },
      ]}
      features={[
        { icon: Lock, title: '256-bit SSL', description: 'Bank-level encryption protects your files in transit.' },
        { icon: ShieldCheck, title: 'Zero Retention', description: 'Files are never retained or archived by us.' },
        { icon: EyeOff, title: 'No Human Access', description: 'Fully automated parsing. No file is ever viewed by staff.' },
        { icon: Download, title: 'Direct Delivery', description: 'Files are delivered straight to your browser.' },
      ]}
      useCases={[
        { title: 'Legal NDAs', description: 'Stitch together signed non-disclosure agreements safely.' },
        { title: 'Medical Records', description: 'Combine patient history files while maintaining strict privacy.' },
        { title: 'Financial Audits', description: 'Merge tax returns and banking ledgers with confidence.' },
      ]}
      midCTA={{ text: 'Merge Securely Now →', href: '/merge-pdf' }}
      bottomCTA={{ headline: 'Your data stays yours.', text: 'Merge PDF Safely', href: '/merge-pdf' }}
      faqs={[
        { question: 'Does "without upload" mean it works offline?', answer: 'For processing complex PDF structures reliably across all devices, our tool does require an internet connection to use our secure cloud processors. However, the connection is strictly encrypted.' },
        { question: 'Can anyone else access my uploaded files?', answer: 'No. Upon upload, files are renamed with cryptographically secure, randomized hashes. Nobody, including our staff, can access your files.' },
        { question: 'How quickly are the files deleted?', answer: 'Our automated cron jobs purge the temporary processing folders continuously. Your files are completely wiped within a couple of hours.' },
      ]}
      faqTitle="Privacy & Upload FAQs"
      faqSubtitle="How we handle your sensitive documents"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Merge PDF', href: '/merge-pdf' },
        { name: 'Secure Merge', href: '/merge-pdf-without-upload' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
