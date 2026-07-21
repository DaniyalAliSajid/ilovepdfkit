import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF to XLSX Online Free | Fast PDF Spreadsheet Converter",
  description: "Convert PDF to XLSX spreadsheet format free online. Fast, secure, and compatible with Microsoft Excel 365.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-to-xlsx-online-free" },
};

export default function PdfToXlsxOnlineFreePage() {
  return (
    <SEOLandingPage
      slug="pdf-to-xlsx-online-free"
      keyword="pdf to xlsx online free"
      pageType="A"
      angle="speed"
      h1="PDF to XLSX Online Free"
      heroDescription="Convert PDF tables directly into Microsoft Excel XLSX spreadsheets fast."
      intro="Need your PDF tables converted to modern .xlsx format? Our online PDF to XLSX converter extracts structured spreadsheet data directly in your browser, enabling fast data editing in Microsoft Excel, Apple Numbers, or Google Sheets."
      steps={[
        { title: "Select PDF", description: "Upload your PDF spreadsheet file." },
        { title: "Extract Data", description: "Automated table grid parsing." },
        { title: "Download XLSX", description: "Save your editable Excel spreadsheet." }
      ]}
      features={[
        { icon: Zap, title: "XLSX Export", description: "Native XLSX format compatible with modern Excel." },
        { icon: Shield, title: "Secure Transfer", description: "Files encrypted and deleted automatically." },
        { icon: Lock, title: "100% Free", description: "No credit card or registration required." },
        { icon: FileCheck, title: "Clean Cell Formatting", description: "Keeps cells separated and organized." }
      ]}
      useCases={[
        { title: "Financial Modeling", description: "Import PDF data tables into Excel financial models." },
        { title: "Tax Prep", description: "Extract tax form tables into spreadsheets." },
        { title: "Data Analytics", description: "Analyze PDF data sets using Excel tools." }
      ]}
      midCTA={{ text: "Convert PDF to XLSX →", href: "/pdf-to-excel" }}
      bottomCTA={{ headline: "Turn PDF tables into editable XLSX spreadsheets.", text: "Convert to XLSX Free", href: "/pdf-to-excel" }}
      faqs={[
        { question: "Is this converter free for large tables?", answer: "Yes, completely free regardless of table size." },
        { question: "Can I open XLSX files in Google Sheets?", answer: "Yes, XLSX files upload seamlessly into Google Sheets." }
      ]}
      faqTitle="PDF to XLSX FAQ"
      faqSubtitle="Spreadsheet conversion tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PDF to Excel", href: "/pdf-to-excel" },
        { name: "PDF to XLSX", href: "/pdf-to-xlsx-online-free" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
