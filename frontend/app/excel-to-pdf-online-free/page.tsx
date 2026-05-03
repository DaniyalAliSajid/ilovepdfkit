import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Clock, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Excel to PDF Online Free | Convert XLS to PDF Instantly',
  description: 'Convert your Excel spreadsheets to PDF online for free. Incredibly fast, no hidden fees, and preserves your formatting instantly.',
  alternates: { canonical: 'https://ilovepdfkit.com/excel-to-pdf-online-free' },
};

export default function ExcelToPdfOnlineFreePage() {
  return (
    <SEOLandingPage
      slug="excel-to-pdf-online-free"
      keyword="excel to pdf online free"
      pageType="A"
      angle="speed"
      h1="Excel to PDF Online — 100% Free"
      heroDescription="Convert your .xls and .xlsx files to PDF in seconds. No hidden fees, no credit cards, completely free."
      intro="When you need to send a financial report or a data sheet, sending an editable Excel file is risky. You want a locked, professional PDF. But you shouldn't have to pay for an expensive software license just to convert a simple spreadsheet. Our free online Excel to PDF converter is designed to instantly transform your workbooks into presentation-ready PDFs without costing you a dime. It's fast, entirely web-based, and built to handle your spreadsheets efficiently."
      steps={[
        { title: 'Upload Spreadsheet', description: 'Drag and drop your Excel file (.xls or .xlsx) into the converter.' },
        { title: 'Instant Conversion', description: 'Our servers instantly convert the data into a clean PDF format.' },
        { title: 'Download PDF', description: 'Save your free PDF directly to your device.' },
      ]}
      features={[
        { icon: Zap, title: 'Lightning Fast', description: 'Converts massive spreadsheets in under 3 seconds.' },
        { icon: Shield, title: '100% Secure', description: 'Your files are processed securely and deleted automatically.' },
        { icon: CheckCircle, title: 'Completely Free', description: 'No hidden paywalls or subscription requirements.' },
        { icon: Clock, title: 'No Waiting', description: 'Skip the queues and get your PDF instantly.' },
      ]}
      useCases={[
        { title: 'Invoices', description: 'Convert Excel invoice templates into uneditable PDFs for clients.' },
        { title: 'Financial Reports', description: 'Share quarterly earnings without risking data manipulation.' },
      ]}
      midCTA={{ text: 'Convert Excel to PDF Now →', href: '/excel-to-pdf' }}
      bottomCTA={{ headline: 'Fast, free, and flawless.', text: 'Convert Now', href: '/excel-to-pdf' }}
      faqs={[
        { question: 'Is this tool really free?', answer: 'Yes! Our Excel to PDF converter is 100% free to use for standard conversions.' },
        { question: 'Do I need to create an account?', answer: 'No, you can convert your files immediately without signing up or providing an email.' },
        { question: 'How do I save Excel as PDF without losing formatting?', answer: 'Our online converter automatically detects column widths and scales your spreadsheet so it fits perfectly on a PDF page without cutting off data.' },
        { question: 'Is it safe to convert Excel to PDF online?', answer: 'Absolutely. We use end-to-end encryption to process your files, and your original spreadsheets are automatically deleted from our servers immediately after conversion.' },
      ]}
      faqTitle="Free Excel to PDF — FAQ"
      faqSubtitle="Answers about our free conversion service"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Convert PDF', href: '/pdf-to-word' },
        { name: 'Excel to PDF Free', href: '/excel-to-pdf-online-free' },
      ]}
      themeColor="#6d28d9"
    />
  );
}
