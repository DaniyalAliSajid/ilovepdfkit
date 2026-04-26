import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Briefcase, CreditCard, Lock, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PDF Tools for Freelancers | Invoice & Contract Manager',
  description: 'Manage your freelance business easily. Compress portfolios, merge invoices, and secure contracts with the best free PDF tools for freelancers.',
  alternates: { canonical: 'https://ilovepdfkit.com/pdf-tools-for-freelancers' },
};

export default function PdfToolsForFreelancersPage() {
  return (
    <SEOLandingPage
      slug="pdf-tools-for-freelancers"
      keyword="pdf tools for freelancers"
      pageType="C"
      angle="audience"
      h1="The Essential PDF Toolkit for Freelancers"
      heroDescription="Manage client contracts, compress massive portfolios, and organize your invoices without paying for expensive software subscriptions."
      intro="Running a freelance business means wearing every hat: you are the talent, the sales team, and the accounting department. When a client requests a signed NDA or when you need to email a hefty design portfolio, fighting with clunky PDF documents slows down your workflow and costs you money. You shouldn't have to surrender $15 a month just to stitch two invoices together. Our suite of PDF tools for freelancers gives you enterprise-grade utilityâ€”compressing, merging, and securing documentsâ€”completely free. Handle your paperwork in seconds so you can get back to billable hours."
      steps={[
        { title: 'Choose Your Tool', description: 'Select the right tool for contracts, portfolios, or invoices below.' },
        { title: 'Upload Document', description: 'Drag your client files into our secure, encrypted browser utility.' },
        { title: 'Process Instantly', description: 'We format, compress, or merge your files in seconds.' },
        { title: 'Submit to Client', description: 'Download your professional, watermark-free PDF ready for email.' },
      ]}
      features={[
        { icon: Briefcase, title: 'Professional Output', description: 'No cheap watermarks or branding on your client deliverables.' },
        { icon: Lock, title: 'Client Confidentiality', description: 'All files are processed over HTTPS and auto-deleted immediately.' },
        { icon: CreditCard, title: 'Zero Overhead', description: 'Keep your business expenses low. Our tools are 100% free.' },
        { icon: Share2, title: 'Email Optimized', description: 'Shrink massive pitch decks to easily bypass email limits.' },
      ]}
      toolSpotlights={[
        { name: 'Compress Portfolio (PDF)', href: '/compress-pdf', description: 'Shrink heavy graphic design or writing portfolios so they attach cleanly to client emails.', icon: Briefcase },
        { name: 'Merge Invoices (PDF)', href: '/merge-pdf', description: 'Combine your W9, monthly invoice, and timesheet into a single clean PDF for the accounting department.', icon: CreditCard },
        { name: 'Protect NDAs (PDF)', href: '/protect-pdf', description: 'Add strict AES password encryption to sensitive client contracts before emailing them.', icon: Lock },
      ]}
      midCTA={{ text: 'Optimize Your Workflow â†’', href: '/' }}
      bottomCTA={{ headline: 'Spend time on clients, not files.', text: 'Use Free PDF Tools', href: '/' }}
      faqs={[
        { question: 'Will using a free tool add watermarks to my client documents?', answer: 'Never. We know that sending a contract or portfolio with a messy "Compressed by FreePDF" watermark looks highly unprofessional. We will never alter the visual content of your files.' },
        { question: 'How secure are my client NDAs and contracts?', answer: 'We understand that client confidentiality is paramount for freelancers. We utilize 256-bit SSL encryption for all transfers, and we guarantee that your files are permanently deleted from our temporary processing servers shortly after you download them.' },
        { question: 'Can I use these tools on my phone?', answer: 'Yes. If a client needs a document urgently while you are away from your desk, you can access and use all our tools perfectly through your mobile browser.' },
      ]}
      faqTitle="Freelancer Toolkit FAQs"
      faqSubtitle="Answers on managing your business files"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Freelancer Tools', href: '/pdf-tools-for-freelancers' },
      ]}
      themeColor="#6d28d9"
      internalLinksOverride={{ parentTool: { href: '/', text: 'View All Tools' } }}
    />
  );
}
