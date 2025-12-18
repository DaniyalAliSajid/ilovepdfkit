import Link from 'next/link';
import { FileText, Zap, Lock, Target, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background blobs for depth */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroIconWrapper}>
            <div className={styles.heroIcon}>
              <FileText size={72} color="white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className={styles.title}>Document Converter Pro</h1>
          <p className={styles.subtitle}>
            Transform your documents with pixel-perfect accuracy. Convert between PDF and Word formats while preserving images, fonts, and formatting.
          </p>
          <div className={styles.heroDivider}></div>
        </div>
      </section>

      {/* Tools Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Choose Your Conversion Tool</h2>
          <div className={styles.toolsGrid}>
            {/* PDF to Word */}
            <div className={`${styles.toolCard} ${styles.pdfToWordCard}`}>
              <div className={styles.toolIcon}>📄</div>
              <h3 className={styles.toolTitle}>PDF to Word</h3>
              <p className={styles.toolDesc}>
                Convert PDF documents to editable Word files with perfect formatting preservation
              </p>
              <ul className={styles.toolFeatures}>
                <li>✓ Preserve images and layout</li>
                <li>✓ Maintain fonts and styles</li>
                <li>✓ Keep page count intact</li>
              </ul>
              <Link href="/pdf-to-word" className={styles.toolButton} target="_blank">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>

            {/* Word to PDF */}
            <div className={`${styles.toolCard} ${styles.wordToPdfCard}`}>
              <div className={styles.toolIcon}>📝</div>
              <h3 className={styles.toolTitle}>Word to PDF</h3>
              <p className={styles.toolDesc}>
                Convert Word documents to professional PDF files with complete fidelity
              </p>
              <ul className={styles.toolFeatures}>
                <li>✓ Preserve all formatting</li>
                <li>✓ Keep images intact</li>
                <li>✓ Maintain document structure</li>
              </ul>
              <Link href="/word-to-pdf" className={styles.toolButton} target="_blank">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Document Converter Pro?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} style={{ background: 'var(--primary-gradient)' }}>
                <Zap size={30} />
              </div>
              <h3>Lightning Fast</h3>
              <p>Convert documents in seconds with our optimized conversion engine</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} style={{ background: 'var(--secondary-gradient)' }}>
                <Lock size={30} />
              </div>
              <h3>Secure & Private</h3>
              <p>Your files are processed securely and never stored on our servers</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} style={{ background: 'var(--primary-gradient)' }}>
                <Target size={30} />
              </div>
              <h3>Pixel Perfect</h3>
              <p>Maintain exact formatting, images, fonts, and layout accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} glass`}>
              <TrendingUp size={28} color="#667eea" />
              <div className={styles.statValue}>29,166+</div>
              <div className={styles.statLabel}>Conversions</div>
            </div>
            <div className={`${styles.statCard} glass`}>
              <Users size={28} color="#667eea" />
              <div className={styles.statValue}>29,166+</div>
              <div className={styles.statLabel}>Happy Users</div>
            </div>
            <div className={`${styles.statCard} glass`}>
              <Award size={28} color="#667eea" />
              <div className={styles.statValue}>29%</div>
              <div className={styles.statLabel}>Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerSocials}>
            <div className={styles.socialIcon}><Users size={20} /></div>
            <div className={styles.socialIcon}><TrendingUp size={20} /></div>
            <div className={styles.socialIcon}><Award size={20} /></div>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/about">About Us</Link>
            <span>•</span>
            <Link href="/contact">Contact Us</Link>
          </div>
          <p className={styles.copyright}>
            © 2025 Document Converter Pro. All rights reserved.
            <br />
            Made with ❤️ for seamless document conversion
          </p>
        </div>
      </footer>
    </main>
  );
}
