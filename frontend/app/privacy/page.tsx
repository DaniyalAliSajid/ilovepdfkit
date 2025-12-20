'use client';

import Link from 'next/link';
import { Shield, ArrowLeft, Lock, Eye, FileText, Globe } from 'lucide-react';
import styles from '../legal.module.css';

export default function PrivacyPolicy() {
    const lastUpdated = "December 20, 2025";

    return (
        <div className={styles.container}>
            <Link href="/" style={{ color: '#667eea', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
            </Link>

            <header className={styles.header}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
            </header>

            <div className={styles.contentWrapper}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <Shield size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Our Commitment to Privacy
                    </h2>
                    <p className={styles.text}>
                        At ILOVEPDFKIT, we take your privacy seriously. This Policy explains how we handle your data when you use our services. Our core principle is: <strong>Your files are your business, not ours.</strong>
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <Lock size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Data Security & File Handling
                    </h2>
                    <p className={styles.text}>
                        We process your files solely for the purpose of conversion. Here is how we ensure your data stays safe:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>No Storage:</strong> Files are never stored on our servers permanently. They are kept in temporary memory during processing and deleted immediately after.</li>
                        <li className={styles.listItem}><strong>Encryption:</strong> All data transfers are protected by SSL/TLS encryption.</li>
                        <li className={styles.listItem}><strong>No Access:</strong> Our staff and third parties do not have access to your uploaded files.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <Eye size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Information We Collect
                    </h2>
                    <p className={styles.text}>
                        We collect minimal information to provide and improve our services:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>Usage Data:</strong> Anonymous statistics like conversion types and error rates to help us maintain service quality.</li>
                        <li className={styles.listItem}><strong>Cookies:</strong> We use basic cookies to remember your preferences and for site analytics.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <Globe size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Third-Party Services
                    </h2>
                    <p className={styles.text}>
                        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, so long as those parties agree to keep this information confidential.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <FileText size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Contact Us
                    </h2>
                    <p className={styles.text}>
                        If you have any questions regarding this Privacy Policy, you may contact us at:
                        <br />
                        <a href="mailto:support@ilovepdfkit.com" style={{ color: '#667eea', fontWeight: 600 }}>support@ilovepdfkit.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
