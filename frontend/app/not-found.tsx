import Link from 'next/link';
import { Home, FileText, Files, Minimize2, FileQuestion, UploadCloud, LayoutGrid } from 'lucide-react';
import styles from './not-found.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | iLovePDFKit',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Oops! Page Not Found</h2>
      <p className={styles.description}>
        We couldn't find the page you're looking for. The link might be broken, or the page may have been removed. 
        Don't worry, you can easily find your way back to our most popular tools below.
      </p>

      {/* Primary CTAs */}
      <div className={styles.buttonContainer}>
        <Link href="/" className={styles.primaryButton}>
          <Home size={18} />
          Go to Homepage
        </Link>
        <Link href="/compress-pdf" className={styles.primaryButton} style={{ background: '#10b981', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)' }}>
          <UploadCloud size={18} />
          Upload PDF
        </Link>
        <Link href="/#tools-section" className={styles.outlineButton}>
          <LayoutGrid size={18} />
          Try PDF Tools
        </Link>
      </div>

      {/* Tool Shortcuts */}
      <div className={styles.toolsSection}>
        <h3 className={styles.sectionTitle}>Popular Tools</h3>
        <div className={styles.toolsGrid}>
          <Link href="/compress-pdf" className={styles.toolCard}>
            <Minimize2 size={32} className={styles.toolIcon} />
            <span className={styles.toolName}>Compress PDF</span>
          </Link>
          <Link href="/merge-pdf" className={styles.toolCard}>
            <Files size={32} className={styles.toolIcon} />
            <span className={styles.toolName}>Merge PDF</span>
          </Link>
          <Link href="/pdf-to-word" className={styles.toolCard}>
            <FileText size={32} className={styles.toolIcon} />
            <span className={styles.toolName}>PDF to Word</span>
          </Link>
        </div>
      </div>

      {/* Internal SEO Links */}
      <div className={styles.linksSection}>
        <h3 className={styles.sectionTitle}>Helpful Links</h3>
        <div className={styles.linksGrid}>
          <Link href="/excel-to-pdf-online-free" className={styles.internalLink}>Excel to PDF Free</Link>
          <Link href="/compress-pdf-to-1mb" className={styles.internalLink}>Compress PDF to 1MB</Link>
          <Link href="/word-to-pdf-online-free" className={styles.internalLink}>Word to PDF Free</Link>
          <Link href="/pdf-to-jpg-high-quality" className={styles.internalLink}>PDF to JPG High Quality</Link>
          <Link href="/split-pdf-by-pages" className={styles.internalLink}>Split PDF Pages</Link>
        </div>
      </div>

    </main>
  );
}
