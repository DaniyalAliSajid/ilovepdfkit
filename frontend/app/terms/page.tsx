'use client';

import Link from 'next/link';
import { Gavel, ArrowLeft, CheckCircle, AlertCircle, FileText, HelpCircle } from 'lucide-react';
import styles from '../legal.module.css';

export default function TermsAndConditions() {
    const lastUpdated = "December 20, 2025";

    return (
        <div className={styles.container}>
            <Link href="/" style={{ color: '#667eea', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
            </Link>

            <header className={styles.header}>
                <h1 className={styles.title}>Terms & Conditions</h1>
                <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
            </header>

            <div className={styles.contentWrapper}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <Gavel size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Agreement to Terms
                    </h2>
                    <p className={styles.text}>
                        By accessing or using ILOVEPDFKIT, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <CheckCircle size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Acceptable Use
                    </h2>
                    <p className={styles.text}>
                        You agree to use our services only for lawful purposes. You are prohibited from:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Uploading malicious software or viruses.</li>
                        <li className={styles.listItem}>Attempting to reverse engineer or disrupt the conversion engine.</li>
                        <li className={styles.listItem}>Using the service for any illegal or unauthorized purpose.</li>
                        <li className={styles.listItem}>Uploading content that violates copyright or other intellectual property rights.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <AlertCircle size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Disclaimer of Liability
                    </h2>
                    <p className={styles.text}>
                        ILOVEPDFKIT provides its services "as is" without any warranty. While we strive for "Pixel Perfect" results:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>We do not guarantee 100% accuracy for all document types.</li>
                        <li className={styles.listItem}>We are not liable for any loss of data or business disruption.</li>
                        <li className={styles.listItem}>You are responsible for maintaining backups of your original documents.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <FileText size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Intellectual Property
                    </h2>
                    <p className={styles.text}>
                        The content, logo, and technology behind ILOVEPDFKIT are protected by copyright and intellectual property laws. You may not reproduce or distribute any part of the service without our permission.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <HelpCircle size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Changes to Terms
                    </h2>
                    <p className={styles.text}>
                        We reserve the right to modify these terms at any time. Your continued use of the service after changes constitutes acceptance of the new terms.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <HelpCircle size={24} style={{ marginRight: '0.75rem', color: '#667eea' }} />
                        Contact
                    </h2>
                    <p className={styles.text}>
                        For any questions about these Terms, please reach out to:
                        <br />
                        <a href="mailto:support@ilovepdfkit.com" style={{ color: '#667eea', fontWeight: 600 }}>support@ilovepdfkit.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
