import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Mail, Zap, XCircle, FileType2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF for Email | Fix "File Too Large" Error',
  description: 'Picture this: you are trying to email a client, but your attachment won\'t send. Compress PDF for email to bypass 25MB limits instantly.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-for-email' },
};

export default function CompressPdfForEmailPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-for-email"
      keyword="compress pdf for email"
      pageType="A"
      angle="use-case"
      h1="Compress PDF for Email Attachments"
      heroDescription="Bypass Gmail, Outlook, and corporate email attachment limits. Shrink your PDF to send it anywhere."
      intro="Picture this: you've spent hours finalizing a beautiful presentation. You click 'Send' to email it to your boss, only to get an immediate bounce-back message: 'Attachment limits exceeded.' Most major email providers like Gmail and Outlook cap attachments at 20MB or 25MB. If you have graphics-heavy documents, you will hit this wall quickly. You need to compress a PDF for email specifically to get under these limits without ruining the document's appearance. Our tool scales down massive files so they slide right through any corporate email firewall."
      steps={[
        { title: 'Upload your file', description: 'Drag your oversized PDF into our converter.' },
        { title: 'Choose compression', description: 'Select "Recommended" to maintain high email quality.' },
        { title: 'Compress instantly', description: 'Our servers shrink the file to an email-friendly size.' },
        { title: 'Download & Attach', description: 'Check the new file size and attach it to your email safely.' },
      ]}
      features={[
        { icon: Mail, title: 'Bypass Limits', description: 'Easily get under standard 20MB or 25MB email caps.' },
        { icon: Zap, title: 'Fast Sending', description: 'Smaller files mean your emails send and receive instantly.' },
        { icon: XCircle, title: 'No Bounces', description: 'Avoid embarrassing "file too large" rejection emails.' },
        { icon: FileType2, title: 'Format Preserved', description: 'Your email recipient sees exactly what you see.' },
      ]}
      useCases={[
        { title: 'Sales Pitches', description: 'Send heavy pitch decks without relying on external cloud links.' },
        { title: 'Architectural Plans', description: 'Compress drafted blueprints that normally exceed 50MB.' },
        { title: 'Client Reports', description: 'Deliver quarterly reports with charts directly to their inbox.' },
      ]}
      midCTA={{ text: 'Compress for Email →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Make your PDF email-ready.', text: 'Start Compressing Now', href: '/compress-pdf' }}
      faqs={[
        { question: 'What is the recommended PDF size for email attachments?', answer: 'To ensure your email sends quickly and does not use up your recipient\'s inbox quota, we recommend keeping your PDFs under 5MB. Our compressor easily achieves this for most documents.' },
        { question: 'Why does Gmail say my PDF is too large?', answer: 'Gmail has a strict 25MB limit for incoming and outgoing attachments. If you try to attach a 30MB PDF, it forces you to use Google Drive. Compressing the file avoids this issue.' },
        { question: 'Will compressing my PDF change the layout?', answer: 'No. Our compression primarily targets image resolution and background metadata. The actual layout, pagination, and text of your document remain exactly as you designed them.' },
      ]}
      faqTitle="Email Compression FAQs"
      faqSubtitle="Sending PDFs without the hassle"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress for Email', href: '/compress-pdf-for-email' },
      ]}
      themeColor="#10b981"
    />
  );
}
