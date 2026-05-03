import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Award, Monitor, Image, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Convert Excel to PDF High Quality | Crisp, Professional PDFs',
  description: 'Convert Excel files to high-quality PDFs. Preserve crystal clear text, sharp charts, and perfect cell borders for professional printing and presentations.',
  alternates: { canonical: 'https://ilovepdfkit.com/convert-excel-to-pdf-high-quality' },
};

export default function ConvertExcelToPdfHighQualityPage() {
  return (
    <SEOLandingPage
      slug="convert-excel-to-pdf-high-quality"
      keyword="convert excel to pdf high quality"
      pageType="A"
      angle="quality"
      h1="Convert Excel to PDF in High Quality"
      heroDescription="Don't settle for blurry charts or pixelated text. Generate crystal clear, print-ready PDFs from your Excel spreadsheets."
      intro="If you are presenting a quarterly financial review to stakeholders or printing a massive data sheet for a physical binder, a low-quality PDF simply won't cut it. Standard converters often compress the data too heavily, resulting in blurry graphs, pixelated company logos, and text that is difficult to read when zoomed in. You need to convert Excel to PDF in high quality. Our rendering engine preserves the exact vector paths of your fonts and the native resolution of your embedded charts, guaranteeing a flawlessly sharp document every single time."
      steps={[
        { title: 'Upload Spreadsheet', description: 'Upload your .xls or .xlsx file containing charts and data.' },
        { title: 'High-Res Rendering', description: 'Our engine renders fonts and graphics at maximum DPI.' },
        { title: 'Download Pristine PDF', description: 'Receive a professional, presentation-grade PDF.' },
      ]}
      features={[
        { icon: Award, title: 'Vector Fonts', description: 'Text remains crisp and infinitely zoomable.' },
        { icon: Image, title: 'Sharp Graphics', description: 'Embedded Excel charts and logos retain full resolution.' },
        { icon: Monitor, title: 'Retina Ready', description: 'Perfect for viewing on high-density 4K displays.' },
        { icon: FileCheck, title: 'Print Perfect', description: 'Generates documents optimized for professional CMYK printing.' },
      ]}
      useCases={[
        { title: 'Board Presentations', description: 'Ensure financial graphs look perfect on the big screen.' },
        { title: 'Physical Reports', description: 'Print cleanly without blurred borders or fuzzy text.' },
      ]}
      midCTA={{ text: 'Convert to High Quality →', href: '/excel-to-pdf' }}
      bottomCTA={{ headline: 'Present your data perfectly.', text: 'Convert in High Quality', href: '/excel-to-pdf' }}
      faqs={[
        { question: 'Will my charts become blurry?', answer: 'No. We process native Excel charts as vector graphics whenever possible, ensuring they remain perfectly sharp.' },
        { question: 'Is the file size much larger?', answer: 'High-quality PDFs are slightly larger than heavily compressed ones, but we use smart optimization to keep the file size reasonable without visual loss.' },
        { question: 'How do I export Excel to a high-resolution PDF?', answer: 'By using our high-quality converter, your spreadsheet is rendered at maximum DPI. Text is preserved as vector data, ensuring it remains infinitely zoomable.' },
        { question: 'Why do my Excel charts look blurry when saved as PDF?', answer: 'Standard converters heavily compress embedded images to save space. Our high-quality engine preserves the native resolution of your charts and graphs.' },
      ]}
      faqTitle="High Quality Conversion — FAQ"
      faqSubtitle="Answers about resolution and print quality"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Convert PDF', href: '/pdf-to-word' },
        { name: 'High Quality Excel to PDF', href: '/convert-excel-to-pdf-high-quality' },
      ]}
      themeColor="#6d28d9"
    />
  );
}
