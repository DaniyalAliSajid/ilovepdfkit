import Link from 'next/link';
import { Shield } from 'lucide-react';
import styles from './privacy.module.css';

export const metadata = {
    title: 'Privacy Policy - ILOVEPDFKIT',
    description: 'Learn how ILOVEPDFKIT protects your privacy and handles your data during document conversion.',
};

export default function PrivacyPolicy() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.icon}>
                        <Shield size={48} />
                    </div>
                    <h1>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last Updated: December 21, 2025</p>
                </div>

                <div className={styles.content}>
                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to ILOVEPDFKIT. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy explains how we handle your information when you use our document conversion services.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <h3>2.1 Files You Upload</h3>
                        <p>
                            When you use our conversion services, you upload files (PDF, Word, PowerPoint, Excel, images) for processing.
                            These files are temporarily stored on our servers only for the duration of the conversion process.
                        </p>

                        <h3>2.2 Automatically Collected Information</h3>
                        <p>We may collect:</p>
                        <ul>
                            <li>IP address and browser type</li>
                            <li>Device information and operating system</li>
                            <li>Usage data and conversion statistics</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Process your document conversions</li>
                            <li>Improve our services and user experience</li>
                            <li>Analyze usage patterns and optimize performance</li>
                            <li>Prevent fraud and ensure security</li>
                            <li>Communicate important service updates</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. File Security and Storage</h2>
                        <p>
                            <strong>Your files are never stored permanently.</strong> All uploaded files are:
                        </p>
                        <ul>
                            <li>Processed immediately upon upload</li>
                            <li>Automatically deleted from our servers within 24 hours</li>
                            <li>Encrypted during transmission using SSL/TLS</li>
                            <li>Never shared with third parties</li>
                            <li>Never used for training or any other purpose</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Data Sharing and Disclosure</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties.
                            We may share information only in the following circumstances:
                        </p>
                        <ul>
                            <li>With your explicit consent</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect our rights and prevent fraud</li>
                            <li>With service providers who assist in operations (under strict confidentiality)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Cookies and Tracking</h2>
                        <p>
                            We use cookies to enhance your experience. You can control cookie preferences through your browser settings.
                            Types of cookies we use:
                        </p>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings</li>
                        </ul>
                    </section>

                    <section>
                        <h2>7. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal data</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to processing of your data</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2>8. Children's Privacy</h2>
                        <p>
                            Our services are not directed to children under 13. We do not knowingly collect personal information
                            from children. If you believe we have collected data from a child, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2>9. International Data Transfers</h2>
                        <p>
                            Your data may be processed in countries other than your own. We ensure appropriate safeguards are in place
                            to protect your information in accordance with this privacy policy.
                        </p>
                    </section>

                    <section>
                        <h2>10. Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. We will notify you of any significant changes by
                            posting the new policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>

                    <section>
                        <h2>11. Contact Us</h2>
                        <p>
                            If you have questions about this privacy policy or our data practices, please contact us:
                        </p>
                        <ul>
                            <li>Email: privacy@ilovepdfkit.com</li>
                            <li>Contact Page: <Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </section>
                </div>

                <div className={styles.footer}>
                    <Link href="/" className={styles.backButton}>
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
