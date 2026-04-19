import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Briefcase, ShieldCheck, FileSearch, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF for Job Application | Resume PDF Compressor',
  description: 'Picture this: you are uploading your resume to a strict career portal and it fails. Compress your PDF resume to meet ATS applicant system limits.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-for-job-application' },
};

export default function CompressPdfForJobApplicationPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-for-job-application"
      keyword="compress pdf for job application"
      pageType="A"
      angle="use-case"
      h1="Compress PDF for Job Applications"
      heroDescription="Ensure your resume and portfolio upload properly to strict Applicant Tracking Systems (ATS) without losing formatting."
      intro="Picture this: you've spent weeks crafting the perfect graphic resume and portfolio. You go to upload it to the employer's Workday or Greenhouse portal, and you hit a hard 'File Too Large' error. Compressing a PDF for a job application is a delicate task. You need to hit their strict 2MB or 5MB limits, but you cannot afford for your design work to look blurry or your text to become unreadable by text-scanning bots. Our compressor is built to handle professional documents, reducing size while ensuring ATS parsers can perfectly read every word of your career history."
      steps={[
        { title: 'Upload Resume', description: 'Select your oversized CV or portfolio.' },
        { title: 'Optimize for ATS', description: 'Choose compression to shrink the file while preserving text vectors.' },
        { title: 'Save File', description: 'Download your optimized, portal-ready document.' },
        { title: 'Apply with Confidence', description: 'Submit your application without upload errors.' },
      ]}
      features={[
        { icon: Briefcase, title: 'ATS Readable', description: 'Preserves text layers so recruitment bots can parse your skills.' },
        { icon: ShieldCheck, title: 'Private Processing', description: 'Your personal data is automatically deleted from our servers.' },
        { icon: FileSearch, title: 'Sharp Graphics', description: 'Portfolio images remain professional and clear.' },
        { icon: UserCheck, title: 'Recruiter Friendly', description: 'Small files don\'t lag when HR opens them.' },
      ]}
      useCases={[
        { title: 'Design Portfolios', description: 'Shrink massive image-heavy PDFs down to manageable sizes.' },
        { title: 'Academic CVs', description: 'Combine and compress dozens of pages of research history.' },
        { title: 'Reference Checks', description: 'Send letters of recommendation without cluttering HR inboxes.' },
      ]}
      midCTA={{ text: 'Compress Resume →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Don\'t let a file size cost you the job.', text: 'Optimize Your Resume', href: '/compress-pdf' }}
      faqs={[
        { question: 'What file size does a job application portal accept?', answer: 'Most modern ATS platforms (Applicant Tracking Systems) allow up to 5MB, but many legacy or government career portals cap uploads at 1MB or 2MB. It is safest to keep your resume under 2MB.' },
        { question: 'Will compressing my resume ruin its ATS readability?', answer: 'No. ATS parsers read the hidden text layer of a PDF, not the visuals. Our compressor leaves the text layer entirely intact, ensuring bots can still scan your keywords flawlessly.' },
        { question: 'Are my personal details safe?', answer: 'Yes. Resumes contain sensitive Personal Identifiable Information (PII). We process your file over secure HTTPS and automatically purge the document from our system within hours of compression.' },
      ]}
      faqTitle="Resume Compression FAQs"
      faqSubtitle="Preparing documents for employer portals"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress for Job App', href: '/compress-pdf-for-job-application' },
      ]}
      themeColor="#10b981"
    />
  );
}
