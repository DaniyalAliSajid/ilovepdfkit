import Link from 'next/link';
import {
  ArrowRight,
  FileText,
  Settings,
  Zap,
  Lock,
  Target,
  FileType,
  Presentation,
  RotateCw,
  FileImage,
  ImageIcon,
  Images,
  MonitorPlay,
  Files,
  Minimize2,
  Table,
  Hash,
  FileX,
  Scissors,
  Unlock,
  Wand2,
  MessageSquare,
  Sparkles
} from 'lucide-react';

import styles from './page.module.css';
import FAQ from '@/components/FAQ';



export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background blobs for depth */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Free Online PDF Converter & Tools - iLovePDFKit</h1>
          <p className={styles.subtitle}>
            Transform your documents with pixel-perfect accuracy. Convert between PDF, Word, PowerPoint, Excel, and Image formats while preserving images, fonts, and formatting. 100% Free, Secure, and No Registration Required.
          </p>
        </div>
      </section>

      {/* Core Tools Section */}
      <section id="tools-section" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Choose Your Conversion Tool</h2>
          <div className={styles.toolsGrid}>
            {/* PDF to Word */}
            <div className={`${styles.toolCard} ${styles.pdfToWordCard} `}>
              <div className={styles.toolIcon}><FileText size={48} /></div>
              <h3 className={styles.toolTitle}>PDF to Word</h3>
              <p className={styles.toolDesc}>
                Convert PDF documents to editable Word files with perfect formatting preservation
              </p>
              <ul className={styles.toolFeatures}>
                <li>Preserve images and layout</li>
                <li>Maintain fonts and styles</li>
                <li>Keep page count intact</li>
              </ul>
              <Link href="/pdf-to-word" className={styles.toolButton} aria-label="Start Converting PDF to Word">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>

            {/* Word to PDF */}
            <div className={`${styles.toolCard} ${styles.wordToPdfCard} `}>
              <div className={styles.toolIcon}><FileType size={48} /></div>
              <h3 className={styles.toolTitle}>Word to PDF</h3>

              <p className={styles.toolDesc}>
                Convert Word documents to professional PDF files with complete fidelity
              </p>
              <ul className={styles.toolFeatures}>
                <li>Preserve all formatting</li>
                <li>Keep images intact</li>
                <li>Maintain document structure</li>
              </ul>
              <Link href="/word-to-pdf" className={styles.toolButton} aria-label="Start Converting Word to PDF">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>
            {/* PDF to JPG */}
            <div className={`${styles.toolCard} ${styles.pdfToJpgCard} `}>
              <div className={styles.toolIcon}><FileImage size={48} /></div>
              <h3 className={styles.toolTitle}>PDF to JPG</h3>

              <p className={styles.toolDesc}>
                Extract images or convert PDF pages into high-quality JPG images
              </p>
              <ul className={styles.toolFeatures}>
                <li>High resolution output</li>
                <li>Batch extraction</li>
                <li>Preservation of colors</li>
              </ul>
              <Link href="/pdf-to-jpg" className={styles.toolButton} aria-label="Start Converting PDF to JPG">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>

            {/* JPG to PDF */}
            <div className={`${styles.toolCard} ${styles.jpgToPdfCard} `}>
              <div className={styles.toolIcon}><Images size={48} /></div>
              <h3 className={styles.toolTitle}>JPG to PDF</h3>

              <p className={styles.toolDesc}>
                Combine multiple images into a single professional PDF document
              </p>
              <ul className={styles.toolFeatures}>
                <li>Merge multiple images</li>
                <li>Auto-alignment</li>
                <li>Compressed output</li>
              </ul>
              <Link href="/jpg-to-pdf" className={styles.toolButton} aria-label="Start Converting JPG to PDF">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>

            {/* PDF to PNG */}
            <div className={`${styles.toolCard} ${styles.pdfToPngCard} `}>
              <div className={styles.toolIcon}><FileImage size={48} /></div>
              <h3 className={styles.toolTitle}>PDF to PNG</h3>
              <p className={styles.toolDesc}>
                Convert PDF pages to high-quality PNG images with transparency support
              </p>
              <ul className={styles.toolFeatures}>
                <li>Best quality</li>
                <li>Fast extraction</li>
                <li>Secure processing</li>
              </ul>
              <Link href="/pdf-to-png" className={styles.toolButton} aria-label="Start PDF to PNG Conversion">
                Extract PNG <ArrowRight size={18} />
              </Link>
            </div>

            {/* PNG to PDF */}
            <div className={`${styles.toolCard} ${styles.pngToPdfCard} `}>
              <div className={styles.toolIcon}><ImageIcon size={48} /></div>
              <h3 className={styles.toolTitle}>PNG to PDF</h3>
              <p className={styles.toolDesc}>
                Turn your PNG images into a single PDF document in seconds
              </p>
              <ul className={styles.toolFeatures}>
                <li>Multiple files</li>
                <li>Set order</li>
                <li>Instant merge</li>
              </ul>
              <Link href="/png-to-pdf" className={styles.toolButton} aria-label="Start PNG to PDF Conversion">
                Convert PNG <ArrowRight size={18} />
              </Link>
            </div>

            {/* PPT to PDF */}
            <div className={`${styles.toolCard} ${styles.pptToPdfCard} `}>
              <div className={styles.toolIcon}><MonitorPlay size={48} /></div>
              <h3 className={styles.toolTitle}>PPT to PDF</h3>

              <p className={styles.toolDesc}>
                Convert PowerPoint presentations to PDF while keeping animations and layout
              </p>
              <ul className={styles.toolFeatures}>
                <li>100% layout accuracy</li>
                <li>Crystal clear text</li>
                <li>Fast processing</li>
              </ul>
              <Link href="/ppt-to-pdf" className={styles.toolButton} aria-label="Start Converting PowerPoint to PDF">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>

            {/* Rotate PDF */}
            <div className={`${styles.toolCard} ${styles.rotatePdfCard} `}>
              <div className={styles.toolIcon}><RotateCw size={48} /></div>
              <h3 className={styles.toolTitle}>Rotate PDF</h3>

              <p className={styles.toolDesc}>
                Rotate your PDF pages clockwise by 90, 180, or 270 degrees easily
              </p>
              <ul className={styles.toolFeatures}>
                <li>Multi-angle support</li>
                <li>Instant processing</li>
                <li>High quality output</li>
              </ul>
              <Link href="/rotate-pdf" className={styles.toolButton} aria-label="Start Rotating PDF Pages">
                Start Rotating <ArrowRight size={18} />
              </Link>
            </div>

            {/* Merge PDF */}
            <div className={`${styles.toolCard} ${styles.mergePdfCard} `}>
              <div className={styles.toolIcon}><Files size={48} /></div>
              <h3 className={styles.toolTitle}>Merge PDF</h3>

              <p className={styles.toolDesc}>
                Combine multiple PDF files into one single document
              </p>
              <ul className={styles.toolFeatures}>
                <li>Merge unlimited files</li>
                <li>Preserve order</li>
                <li>Fast processing</li>
              </ul>
              <Link href="/merge-pdf" className={styles.toolButton} aria-label="Start Merging PDF Files">
                Start Merging <ArrowRight size={18} />
              </Link>
            </div>



            {/* PDF to PPT */}
            <div className={`${styles.toolCard} ${styles.pdfToPptCard} `}>
              <div className={styles.toolIcon}><MonitorPlay size={48} /></div>
              <h3 className={styles.toolTitle}>PDF to PPT</h3>

              <p className={styles.toolDesc}>
                Convert PDF documents to PowerPoint presentations easily
              </p>
              <ul className={styles.toolFeatures}>
                <li>Visual fidelity</li>
                <li>Edit slides</li>
                <li>Fast conversion</li>
              </ul>
              <Link href="/pdf-to-ppt" className={styles.toolButton} aria-label="Start Converting PDF to PowerPoint">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>

            {/* Add Page Numbers */}
            <div className={`${styles.toolCard} ${styles.addPageNumbersCard} `}>
              <div className={styles.toolIcon}><Hash size={48} /></div>
              <h3 className={styles.toolTitle}>Add Page Numbers</h3>

              <p className={styles.toolDesc}>
                Add page numbers to your PDF documents with custom positioning
              </p>
              <ul className={styles.toolFeatures}>
                <li>Custom position</li>
                <li>Formatting options</li>
                <li>Batch processing</li>
              </ul>
              <Link href="/add-page-numbers" className={styles.toolButton} aria-label="Start Adding Page Numbers to PDF">
                Start Adding <ArrowRight size={18} />
              </Link>
            </div>

            {/* PDF to Excel */}
            <div className={`${styles.toolCard} ${styles.pdfToExcelCard} `}>
              <div className={styles.toolIcon}><Table size={48} /></div>
              <h3 className={styles.toolTitle}>PDF to Excel</h3>

              <p className={styles.toolDesc}>
                Extract tables from PDF documents into editable Excel spreadsheets
              </p>
              <ul className={styles.toolFeatures}>
                <li>Table extraction</li>
                <li>Multi-page support</li>
                <li>Preserve data structure</li>
              </ul>
              <Link href="/pdf-to-excel" className={styles.toolButton} aria-label="Start Converting PDF to Excel">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>

            {/* Excel to PDF */}
            <div className={`${styles.toolCard} ${styles.excelToPdfCard} `}>
              <div className={styles.toolIcon}><Table size={48} /></div>
              <h3 className={styles.toolTitle}>Excel to PDF</h3>

              <p className={styles.toolDesc}>
                Convert Excel spreadsheets to PDF while preserving formatting and charts
              </p>
              <ul className={styles.toolFeatures}>
                <li>Multi-sheet support</li>
                <li>Preserve formatting</li>
                <li>Include charts</li>
              </ul>
              <Link href="/excel-to-pdf" className={styles.toolButton} aria-label="Start Converting Excel to PDF">
                Start Converting <ArrowRight size={18} />
              </Link>
            </div>

            {/* Delete PDF Pages */}
            <div className={`${styles.toolCard} ${styles.deletePdfPagesCard} `}>
              <div className={styles.toolIcon}><FileX size={48} /></div>
              <h3 className={styles.toolTitle}>Delete PDF Pages</h3>

              <p className={styles.toolDesc}>
                Remove unwanted pages from your PDF document visually
              </p>
              <ul className={styles.toolFeatures}>
                <li>Visual page selector</li>
                <li>Batch deletion</li>
                <li>Instant preview</li>
              </ul>
              <Link href="/delete-pdf-pages" className={styles.toolButton} aria-label="Start Deleting PDF Pages">
                Delete Pages <ArrowRight size={18} />
              </Link>
            </div>

            {/* Protect PDF */}
            <div className={`${styles.toolCard} ${styles.protectPdfCard} `}>
              <div className={styles.toolIcon}><Lock size={48} /></div>
              <h3 className={styles.toolTitle}>Protect PDF</h3>

              <p className={styles.toolDesc}>
                Secure your PDF files with a password to prevent unauthorized access
              </p>
              <ul className={styles.toolFeatures}>
                <li>AES-256 encryption</li>
                <li>Set custom passwords</li>
                <li>Secure processing</li>
              </ul>
              <Link href="/protect-pdf" className={styles.toolButton} aria-label="Start Protecting PDF">
                Protect PDF <ArrowRight size={18} />
              </Link>
            </div>

            {/* Compress PDF */}
            <div className={`${styles.toolCard} ${styles.compressPdfCard} `}>
              <div className={styles.toolIcon}><Minimize2 size={48} /></div>
              <h3 className={styles.toolTitle}>Compress PDF</h3>
              <p className={styles.toolDesc}>
                Reduce document file size without sacrificing visual quality
              </p>
              <ul className={styles.toolFeatures}>
                <li>Smart image processing</li>
                <li>Multiple compression levels</li>
                <li>Best size-to-quality ratio</li>
              </ul>
              <Link href="/compress-pdf" className={styles.toolButton} aria-label="Start Compressing PDF">
                Compress PDF <ArrowRight size={18} />
              </Link>
            </div>

            {/* Split PDF */}
            <div className={`${styles.toolCard} ${styles.splitPdfCard} `}>
              <div className={styles.toolIcon}><Scissors size={48} /></div>
              <h3 className={styles.toolTitle}>Split PDF</h3>
              <p className={styles.toolDesc}>
                Extract pages from a PDF document into separate files easily
              </p>
              <ul className={styles.toolFeatures}>
                <li>Extract specific pages</li>
                <li>Visual page selection</li>
                <li>Organized ZIP output</li>
              </ul>
              <Link href="/split-pdf" className={styles.toolButton} aria-label="Start Splitting PDF">
                Split PDF <ArrowRight size={18} />
              </Link>
            </div>

            {/* Unlock PDF */}
            <div className={`${styles.toolCard} ${styles.unlockPdfCard} `}>
              <div className={styles.toolIcon}><Unlock size={48} /></div>
              <h3 className={styles.toolTitle}>Unlock PDF</h3>
              <p className={styles.toolDesc}>
                Remove passwords and owner restrictions from protected documents
              </p>
              <ul className={styles.toolFeatures}>
                <li>Remove copy/print locks</li>
                <li>Instant decryption</li>
                <li>Secure processing</li>
              </ul>
              <Link href="/unlock-pdf" className={styles.toolButton} aria-label="Start Unlocking PDF">
                Unlock PDF <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className={styles.aiSection}>
        <div className={styles.container}>
          <h2 className={styles.aiTitle}>
            <Sparkles style={{ color: '#8b5cf6' }} size={36} /> AI-Powered PDF Tools
          </h2>
          <p className={styles.aiSubtitle}>
            Use AI to summarize documents and get answers instantly
          </p>
          
          <div className={styles.aiGrid}>
            {/* AI PDF Summarizer */}
            <div className={`${styles.toolCard} ${styles.aiCard} ${styles.aiSummarizerCard}`}>
              <div className={styles.newBadge}>NEW</div>
              <div className={styles.toolIcon}><Wand2 size={48} /></div>
              <h3 className={styles.toolTitle}>AI PDF Summarizer</h3>
              <p className={styles.toolDesc}>
                Generate fast AI-powered summaries from your PDF
              </p>
              <ul className={styles.toolFeatures}>
                <li>Extract key insights</li>
                <li>Save hours of reading</li>
                <li>Detailed structured output</li>
              </ul>
              <Link href="/pdf-summarizer" className={styles.aiButton} aria-label="Summarize PDF with AI">
                Summarize Now <ArrowRight size={18} />
              </Link>
            </div>

            {/* Chat with PDF */}
            <div className={`${styles.toolCard} ${styles.aiCard} ${styles.chatWithPdfCard}`}>
              <div className={styles.newBadge}>NEW</div>
              <div className={styles.toolIcon}><MessageSquare size={48} /></div>
              <h3 className={styles.toolTitle}>Chat with PDF</h3>
              <p className={styles.toolDesc}>
                Ask questions and explore your PDF with AI
              </p>
              <ul className={styles.toolFeatures}>
                <li>Contextual answers</li>
                <li>Multi-turn conversation</li>
                <li>Understand complex concepts</li>
              </ul>
              <Link href="/chat-with-pdf" className={styles.aiButton} aria-label="Chat with PDF Assistant">
                Start Chatting <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>





      {/* Why Choose Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose iLovePDFKit?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} style={{ background: 'var(--gradient-primary)' }}>
                <Zap size={30} />
              </div>
              <h3>Lightning Fast</h3>
              <p>Convert documents in seconds with our optimized conversion engine</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} style={{ background: 'var(--gradient-accent)' }}>
                <Lock size={30} />
              </div>
              <h3>Secure & Private</h3>
              <p>Your files are processed securely and never stored on our servers</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} style={{ background: 'var(--gradient-primary)' }}>
                <Target size={30} />
              </div>
              <h3>Pixel Perfect</h3>
              <p>Maintain exact formatting, images, fonts, and layout accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

    </main>
  );
}
