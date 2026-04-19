import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { UserX, Shield, Trash2, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF No Login | Fast Anonymous PDF Compressor',
  description: 'Your file. Your rules. Compress PDF documents with no login, no accounts, and no email required. 100% free and private.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-no-login' },
};

export default function CompressPdfNoLoginPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-no-login"
      keyword="compress pdf no login"
      pageType="A"
      angle="privacy"
      h1="Compress PDF Online — No Login Required"
      heroDescription="Skip the signup screens. Reduce your PDF file size instantly without creating an account or handing over your email address."
      intro="Your file. Your rules. No email required, no account created, and no subscriptions to cancel later. When you need to quickly compress a PDF, the last thing you want is to hit a paywall asking for your credit card or a prompt telling you to 'register to download'. We built our system to be frictionless. You can compress a PDF with no login instantly right from your browser. We respect your time and your data privacy—upload your file, get your compressed result, and move on with your day."
      steps={[
        { title: 'Upload Anonymously', description: 'Drag and drop your file. We don\'t ask who you are.' },
        { title: 'Compress', description: 'Our servers process the file immediately.' },
        { title: 'Direct Download', description: 'Get your file instantly. No email verification hoops.' },
        { title: 'Auto-Delete', description: 'Walk away knowing your data is automatically securely wiped.' },
      ]}
      features={[
        { icon: UserX, title: 'No Registration', description: 'Zero accounts. Zero passwords. Zero friction.' },
        { icon: Shield, title: 'Private Processing', description: 'Files are processed over encrypted HTTPS connections.' },
        { icon: Trash2, title: 'Auto Wipe', description: 'All uploaded and processed files are deleted automatically.' },
        { icon: Clock, title: 'No Queueing', description: 'Unregistered users don\'t wait in slow processing lines.' },
      ]}
      useCases={[
        { title: 'Public Computers', description: 'Safely compress files at libraries without leaving a trace.' },
        { title: 'Quick Tasks', description: 'Perfect for when you just need one file fixed fast.' },
        { title: 'Confidential Docs', description: 'Ensure your financial PDFs aren\'t tied to a user account.' },
      ]}
      midCTA={{ text: 'Compress Without Login →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'No accounts. Just answers.', text: 'Compress Your PDF Fast', href: '/compress-pdf' }}
      faqs={[
        { question: 'Is my PDF deleted after compression if I don\'t have an account?', answer: 'Yes. In fact, because there are no user accounts, there is nowhere for us to store your files long-term. All data is automatically wiped from our temporary processing servers within hours.' },
        { question: 'Do I need to create an account to compress a PDF for free?', answer: 'Absolutely not. Our core PDF compression tools are 100% free with no login required.' },
        { question: 'Is there a hidden watermark since it is free?', answer: 'No. We do not insert intrusive watermarks or branding on your compressed documents.' },
      ]}
      faqTitle="Anonymous Compression FAQs"
      faqSubtitle="Understanding our no-login policy"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress No Login', href: '/compress-pdf-no-login' },
      ]}
      themeColor="#10b981"
    />
  );
}
