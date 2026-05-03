import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Shield, UserX, Lock, Trash2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Excel to PDF No Login | Anonymous Online Converter',
  description: 'Convert Excel spreadsheets to PDF securely without creating an account or providing your email address. 100% anonymous processing.',
  alternates: { canonical: 'https://ilovepdfkit.com/excel-to-pdf-no-login' },
};

export default function ExcelToPdfNoLoginPage() {
  return (
    <SEOLandingPage
      slug="excel-to-pdf-no-login"
      keyword="excel to pdf no login"
      pageType="A"
      angle="privacy"
      h1="Excel to PDF with No Login Required"
      heroDescription="Convert your sensitive spreadsheets to PDF completely anonymously. No account creation, no email harvesting, no tracking."
      intro="It is incredibly frustrating when you just need to convert a single Excel file to PDF, but the website suddenly demands your email address, makes you verify an account, and signs you up for a newsletter you didn't want. When you're dealing with financial spreadsheets, you want privacy and anonymity, not an inbox full of spam. Our tool allows you to convert Excel to PDF with absolutely no login required. You just upload your file, we convert it securely, and you download your PDF instantly."
      steps={[
        { title: 'Upload File', description: 'Drag your Excel file in. No account needed.' },
        { title: 'Secure Conversion', description: 'Your file is encrypted and processed anonymously.' },
        { title: 'Download & Delete', description: 'Download your PDF. We delete all data automatically.' },
      ]}
      features={[
        { icon: UserX, title: 'No Account', description: 'Never provide an email, name, or password.' },
        { icon: Shield, title: 'Total Anonymity', description: 'We do not track or store who uploads what documents.' },
        { icon: Lock, title: 'TLS Encryption', description: 'Your files are transmitted using bank-grade encryption.' },
        { icon: Trash2, title: 'Auto-Deletion', description: 'All files are permanently deleted from our servers.' },
      ]}
      useCases={[
        { title: 'Payroll Data', description: 'Convert sensitive payroll spreadsheets safely.' },
        { title: 'Client Tax Forms', description: 'Process confidential financial data without digital footprints.' },
      ]}
      midCTA={{ text: 'Convert Anonymously →', href: '/excel-to-pdf' }}
      bottomCTA={{ headline: 'Protect your inbox and your data.', text: 'Convert Without Login', href: '/excel-to-pdf' }}
      faqs={[
        { question: 'Do I really not need an account?', answer: 'Yes. You can use our tool immediately without any registration process whatsoever.' },
        { question: 'What happens to my Excel file after conversion?', answer: 'Your original Excel file and the generated PDF are automatically wiped from our secure servers right after you download them.' },
        { question: 'Can I convert sensitive Excel files to PDF securely?', answer: 'Yes, our no-login converter processes all files using secure TLS encryption and instantly deletes them from the server to guarantee maximum data privacy.' },
        { question: 'How can I convert Excel to PDF without downloading software?', answer: 'Our tool is 100% web-based. You can process your spreadsheets directly in your browser without creating an account or installing any desktop applications.' },
      ]}
      faqTitle="Privacy & Security — FAQ"
      faqSubtitle="Answers about our anonymous conversion process"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Convert PDF', href: '/pdf-to-word' },
        { name: 'Excel to PDF No Login', href: '/excel-to-pdf-no-login' },
      ]}
      themeColor="#6d28d9"
    />
  );
}
