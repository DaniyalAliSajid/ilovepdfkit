import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Mail, Smartphone, Cloud, ArrowDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF Under 1MB | Fast PDF Size Reducer',
  description: 'Picture this: your email client refuses to send a 5MB attachment. Compress your PDF under 1MB quickly to guarantee safe delivery everywhere.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-under-1mb' },
};

export default function CompressPdfUnder1mbPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-under-1mb"
      keyword="compress pdf under 1mb"
      pageType="A"
      angle="use-case"
      h1="Compress PDF Under 1MB Online"
      heroDescription="The universal safe size for emails, messaging apps, and web portals. Shrink your PDFs below the 1MB mark effortlessly."
      intro="Picture this: you're trying to send an important client pitch from your phone, but the email bounces back because the attachment is too large. Getting an error message when you're in a hurry is frustrating. That's why you need to compress a PDF under 1MB. The 1MB threshold is the gold standard for digital documents—it guarantees your file will attach to any email client, upload to any web form, and open instantly on any mobile device. Our utility takes massive files and efficiently slims them down to this sweet spot."
      steps={[
        { title: 'Upload Document', description: 'Choose any PDF larger than 1MB.' },
        { title: 'Set Target', description: 'Select the Recommended compression level.' },
        { title: 'Shrink File', description: 'Hit compress to reduce the file footprint.' },
        { title: 'Download Result', description: 'Save your file, now weighing less than 1 Megabyte.' },
      ]}
      features={[
        { icon: Mail, title: 'Email Friendly', description: 'Guaranteed to bypass strict corporate email filters.' },
        { icon: Smartphone, title: 'Mobile Fast', description: 'Sub-1MB files open instantly on phones.' },
        { icon: Cloud, title: 'Cloud Storage', description: 'Save massive amounts of space on Drive and Dropbox.' },
        { icon: ArrowDown, title: 'Massive Reduction', description: 'Shrink 10MB+ files down to the 1MB target.' },
      ]}
      useCases={[
        { title: 'Corporate Emails', description: 'Many IT departments block attachments over 2MB.' },
        { title: 'Messaging Apps', description: 'Send PDFs over WhatsApp or Slack instantly.' },
        { title: 'Website Uploads', description: 'Ensure your embedded PDFs don\'t slow down your website.' },
      ]}
      midCTA={{ text: 'Shrink Below 1MB →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Never get an attachment bounce again.', text: 'Compress File Now', href: '/compress-pdf' }}
      faqs={[
        { question: 'What is the recommended PDF size for email attachments?', answer: 'While technical limits are often 25MB, keeping your file under 1MB is the ultimate best practice. It ensures the email sends instantly and doesn\'t clog the recipient\'s inbox.' },
        { question: 'Does compressing under 1MB delete pages?', answer: 'No. The file size reduction comes from compressing images, removing hidden text data, and discarding unneeded metadata. All your pages remain distinct and intact.' },
        { question: 'What if the compressed PDF is still over 1MB?', answer: 'If using "Recommended" compression doesn\'t hit the 1MB mark, switch to "Extreme Compression". If it is a massive 100-page document, you may need to split the PDF first.' },
      ]}
      faqTitle="Under 1MB FAQs"
      faqSubtitle="Understanding the 1MB file target"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress Under 1MB', href: '/compress-pdf-under-1mb' },
      ]}
      themeColor="#10b981"
    />
  );
}
