import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Convert PDF to Excel with Columns Free | iLovePDFKit",
  description: "Extract PDF data into structured Excel columns and rows without misaligned cells. Free online PDF to XLSX converter.",
  alternates: { canonical: "https://ilovepdfkit.com/convert-pdf-to-excel-with-columns" },
};

export default function ConvertPdfToExcelWithColumnsPage() {
  return (
    <SEOLandingPage
      slug="convert-pdf-to-excel-with-columns"
      keyword="convert pdf to excel with columns"
      pageType="A"
      angle="quality"
      h1="Convert PDF to Excel with Columns"
      heroDescription="Extract tabular PDF data into perfectly aligned Microsoft Excel columns and rows."
      intro="Copying financial tables or invoices from a PDF into Excel often pastes everything into a single mangled column. Our specialized PDF to Excel extraction engine analyzes visual table grids, separating numerical data cleanly into individual Excel columns and rows."
      steps={[
        { title: "Upload PDF Table", description: "Select the PDF containing financial data or tables." },
        { title: "Column Grid Analysis", description: "Auto-detect table headers, columns, and rows." },
        { title: "Download Excel XLSX", description: "Get a clean, formula-ready spreadsheet." }
      ]}
      features={[
        { icon: Zap, title: "Column Alignment", description: "No multi-line text spilling into wrong columns." },
        { icon: Shield, title: "Number Format Preservation", description: "Retains currency, percentage, and date formats." },
        { icon: Lock, title: "No Subscription", description: "Extract unlimited spreadsheet data free." },
        { icon: FileCheck, title: "Multi-Page Tables", description: "Stitches multi-page tables into a single sheet." }
      ]}
      useCases={[
        { title: "Bank Statement Analysis", description: "Convert PDF bank statements into Excel spreadsheets." },
        { title: "Invoice Data Extraction", description: "Extract line-item invoice data for accounting." },
        { title: "Sales & Inventory Reports", description: "Analyze sales PDF tables in Excel." }
      ]}
      midCTA={{ text: "Convert PDF to Excel →", href: "/pdf-to-excel" }}
      bottomCTA={{ headline: "Extract clean PDF columns into Excel XLSX.", text: "Convert to Excel Free", href: "/pdf-to-excel" }}
      faqs={[
        { question: "Will my numbers remain formula-friendly?", answer: "Yes, numbers are converted as raw numerical data, not image text." },
        { question: "What if a table spans multiple PDF pages?", answer: "Our converter intelligently merges multi-page tables into a continuous sheet." }
      ]}
      faqTitle="PDF to Excel Columns FAQ"
      faqSubtitle="Clean table extraction guidance"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PDF to Excel", href: "/pdf-to-excel" },
        { name: "With Columns", href: "/convert-pdf-to-excel-with-columns" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
