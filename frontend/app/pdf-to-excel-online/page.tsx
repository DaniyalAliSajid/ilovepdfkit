import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { TableProperties, Calculator, FastForward, Focus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PDF to Excel Online | Convert Tables to Spreadsheets',
  description: 'Stop typing data manually. Convert PDF to Excel online to extract tables and data instantly into a usable spreadsheet format.',
  alternates: { canonical: 'https://ilovepdfkit.com/pdf-to-excel-online' },
};

export default function PdfToExcelOnlinePage() {
  return (
    <SEOLandingPage
      slug="pdf-to-excel-online"
      keyword="pdf to excel online"
      pageType="A"
      angle="speed"
      h1="Convert PDF to Excel Online"
      heroDescription="Extract financial tables and data charts from PDFs into perfectly formatted Excel spreadsheets. Stop doing manual data entry."
      intro="If you have ever spent three hours manually typing numbers from a PDF financial report into an Excel spreadsheet, you know it is the most soul-crushing busywork imaginable. When dealing with bank statements or accounting ledgers, manual transcription invites catastrophic human error. You need to convert PDF to Excel online, and you need it to be completely accurate. Our automated data-extraction tool scans your document, recognizes the grid structures of tables, and neatly exports the data into an `.xlsx` file. What used to take hours of mind-numbing typing now takes less than ten seconds, giving you back your time to actually analyze the data."
      steps={[
        { title: 'Upload Data PDF', description: 'Drag your PDF bank statements or reports into the converter.' },
        { title: 'AI Extraction', description: 'Our system identifies columns, rows, and data tables.' },
        { title: 'Format to Spreadsheet', description: 'The data is restructured into a native Excel format.' },
        { title: 'Download XLSX', description: 'Open your new spreadsheet and start running formulas immediately.' },
      ]}
      features={[
        { icon: TableProperties, title: 'Accurate Tables', description: 'Columns and rows are maintained perfectly.' },
        { icon: Calculator, title: 'Ready for Formulas', description: 'Numbers are extracted as data, not useless text.' },
        { icon: FastForward, title: 'Hours Saved', description: 'Eliminates the need for manual data entry completely.' },
        { icon: Focus, title: 'Multi-Page Support', description: 'Extracts data across dozens of pages simultaneously.' },
      ]}
      useCases={[
        { title: 'Bank Statements', description: 'Turn PDF banking ledgers into usable Excel expense trackers.' },
        { title: 'Inventory Lists', description: 'Update stock levels from supplier PDF catalogs.' },
        { title: 'Financial Audits', description: 'Cross-reference numbers from annual reports in your own spreadsheets.' },
      ]}
      midCTA={{ text: 'Extract Data Now →', href: '/pdf-to-excel' }}
      bottomCTA={{ headline: 'Stop typing out numbers.', text: 'Convert to Excel Free', href: '/pdf-to-excel' }}
      faqs={[
        { question: 'Will the converted Excel file retain my formulas?', answer: 'PDFs do not contain formulas; they only contain the final calculated numbers. The Excel file will display the exact numbers shown in the PDF, allowing you to build your own formulas around them.' },
        { question: 'Does it extract plain text, or just tables?', answer: 'Our engine is specifically optimized to look for tabular data (rows and columns). It will try to format standard text into logical cells, but it performs best on data structured like a spreadsheet.' },
        { question: 'Is my financial data secure?', answer: 'Absolutely. We do not look at, analyze, or sell your data. Every file you upload is secured via HTTPS and is automatically deleted from our servers once the conversion is finished.' },
      ]}
      faqTitle="PDF to Excel FAQs"
      faqSubtitle="Answers on data extraction"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Convert to Excel', href: '/pdf-to-excel' },
        { name: 'Convert PDF to Excel', href: '/pdf-to-excel-online' },
      ]}
      themeColor="#6d28d9"
    />
  );
}
