import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Target, FileWarning, Eye, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Excel to PDF Without Formatting Issues | Clean Conversion',
  description: 'Convert Excel to PDF without messed up formatting, cut off columns, or weird page breaks. Get a perfectly scaled PDF every time.',
  alternates: { canonical: 'https://ilovepdfkit.com/excel-to-pdf-without-formatting' },
};

export default function ExcelToPdfWithoutFormattingPage() {
  return (
    <SEOLandingPage
      slug="excel-to-pdf-without-formatting"
      keyword="excel to pdf without formatting"
      pageType="A"
      angle="problem"
      h1="Excel to PDF Without Formatting Issues"
      heroDescription="Tired of your spreadsheets getting cut off or split across dozens of tiny pages? Convert them perfectly scaled."
      intro="There is nothing more frustrating than carefully designing an Excel spreadsheet, only to have the PDF conversion completely butcher the formatting. Columns get pushed to page 2, margins disappear, and the data becomes unreadable. Our intelligent Excel to PDF converter solves this problem instantly. It analyzes the width of your spreadsheet and automatically scales the content to fit standard PDF page sizes without breaking your layout or truncating important data columns."
      steps={[
        { title: 'Upload Excel', description: 'Select the badly formatting-prone spreadsheet.' },
        { title: 'Smart Scaling', description: 'Our engine detects the column widths and scales them automatically.' },
        { title: 'Download PDF', description: 'Get a clean, perfectly formatted PDF document.' },
      ]}
      features={[
        { icon: Target, title: 'Auto-Scaling', description: 'Intelligently scales wide spreadsheets to fit the page.' },
        { icon: FileWarning, title: 'No Cut Columns', description: 'Prevents the dreaded "one column on page 2" issue.' },
        { icon: Eye, title: 'Print-Ready', description: 'Generates PDFs with perfect margins for physical printing.' },
        { icon: FileCheck, title: 'Cell Integrity', description: 'Keeps all cell borders, colors, and text alignments intact.' },
      ]}
      useCases={[
        { title: 'Financial Dashboards', description: 'Preserve complex multi-column financial dashboards exactly as intended.' },
        { title: 'Project Timelines', description: 'Keep wide Gantt charts readable on a single PDF page.' },
      ]}
      midCTA={{ text: 'Fix Formatting Now →', href: '/excel-to-pdf' }}
      bottomCTA={{ headline: 'Stop fighting with page breaks.', text: 'Convert Perfectly', href: '/excel-to-pdf' }}
      faqs={[
        { question: 'Will this fix columns getting cut off?', answer: 'Yes! Our tool automatically scales the content to ensure all columns fit within the width of the PDF page.' },
        { question: 'Does it keep my cell colors and borders?', answer: 'Absolutely. All visual styling, including cell fills, borders, and bold text, is preserved perfectly.' },
        { question: 'Why does my Excel to PDF get cut off?', answer: 'Standard converters do not respect Excel\'s print area settings, causing columns to spill over. Our tool analyzes the entire grid and auto-scales it to fit the PDF boundaries.' },
        { question: 'How do I fit a wide Excel spreadsheet on one page PDF?', answer: 'Just upload your wide spreadsheet to our converter. Our system automatically applies "Fit to Page" scaling so all your columns appear seamlessly on a single page.' },
      ]}
      faqTitle="Formatting Solutions — FAQ"
      faqSubtitle="Answers about preserving your spreadsheet layout"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Convert PDF', href: '/pdf-to-word' },
        { name: 'Fix Excel Formatting', href: '/excel-to-pdf-without-formatting' },
      ]}
      themeColor="#6d28d9"
    />
  );
}
