import Link from 'next/link';
import { Target, Zap, Users, Award, ArrowLeft } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'About Us - Document Converter Pro',
};

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <Link href="/" className="flex items-center text-blue-600 font-semibold mb-8 hover:underline" style={{ color: '#667eea', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <ArrowLeft size={20} className="mr-2" style={{ marginRight: '0.5rem' }} /> Back to Home
            </Link>

            <div className={styles.header}>
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.subtitle}>
                    We're on a mission to make document conversion simple, fast, and accessible to everyone.
                </p>
            </div>

            <div className={styles.section}>
                <div className={styles.card}>
                    <h2 className={styles.sectionTitle}>Our Story</h2>
                    <p className={styles.text}>
                        Document Converter Pro was born from a simple idea: document conversion should be effortless.
                        We noticed that many existing tools either compromised on quality or were too complex to use.
                        That's why we built a solution that combines pixel-perfect accuracy with an intuitive, beautiful interface.
                    </p>
                    <p className={styles.text}>
                        Today, we're proud to serve thousands of users worldwide, helping them convert documents
                        while preserving every detail - from fonts and images to formatting and layout.
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={`${styles.sectionTitle} text-center`} style={{ textAlign: 'center' }}>Our Values</h2>
                <div className={styles.grid}>
                    {[
                        { icon: Target, title: 'Precision', desc: 'We obsess over every pixel to ensure your documents are converted with absolute accuracy.', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
                        { icon: Zap, title: 'Speed', desc: 'Time is valuable. Our optimized engine delivers lightning-fast conversions without compromise.', gradient: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)' },
                        { icon: Users, title: 'User-First', desc: 'Every feature we build starts with one question: How can we make this better for our users?', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
                        { icon: Award, title: 'Excellence', desc: 'We are never satisfied with "good enough." We constantly push for excellence in everything we do.', gradient: 'linear-gradient(135deg, #f56565 0%, #c53030 100%)' }
                    ].map((value, index) => (
                        <div key={index} className={styles.valueCard}>
                            <div className={styles.valueIcon} style={{ background: value.gradient }}>
                                <value.icon size={32} />
                            </div>
                            <h3 className={styles.valueTitle}>{value.title}</h3>
                            <p className={styles.valueDesc}>{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>



            <div className={styles.cta}>
                <h3 className={styles.sectionTitle}>Ready to get started?</h3>
                <Link href="/" className="btn-premium" style={{ display: 'inline-block', textDecoration: 'none' }}>
                    Start Converting Now
                </Link>
            </div>
        </div>
    );
}
