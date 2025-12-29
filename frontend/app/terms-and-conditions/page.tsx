import Link from 'next/link';
import { FileText } from 'lucide-react';
import styles from '../privacy-policy/privacy.module.css';

export const metadata = {
    title: 'Terms and Conditions - iLovePDFKit',
    description: 'Read the terms and conditions for using iLovePDFKit document conversion services.',
};

export default function TermsAndConditions() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.icon}>
                        <FileText size={48} />
                    </div>
                    <h1>Terms and Conditions</h1>
                    <p className={styles.lastUpdated}>Last Updated: December 21, 2025</p>
                </div>

                <div className={styles.content}>
                    <section>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using iLovePDFKit ("the Service"), you accept and agree to be bound by these
                            Terms and Conditions. If you do not agree to these terms, please do not use our Service.
                        </p>
                    </section>

                    <section>
                        <h2>2. Description of Service</h2>
                        <p>
                            iLovePDFKit provides online document conversion services, including but not limited to:
                        </p>
                        <ul>
                            <li>PDF to Word conversion</li>
                            <li>Word to PDF conversion</li>
                            <li>PDF to JPG conversion</li>
                            <li>JPG to PDF conversion</li>
                            <li>PowerPoint to PDF conversion</li>
                            <li>PDF rotation and manipulation</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. User Responsibilities</h2>
                        <h3>3.1 Acceptable Use</h3>
                        <p>You agree to use the Service only for lawful purposes. You must not:</p>
                        <ul>
                            <li>Upload files containing illegal, harmful, or offensive content</li>
                            <li>Upload files that violate copyright or intellectual property rights</li>
                            <li>Attempt to disrupt or compromise the Service's security</li>
                            <li>Use automated systems to access the Service excessively</li>
                            <li>Reverse engineer or attempt to extract source code</li>
                        </ul>

                        <h3>3.2 File Content</h3>
                        <p>
                            You are solely responsible for the content of files you upload. You represent and warrant that you
                            have all necessary rights to upload and convert the files.
                        </p>
                    </section>

                    <section>
                        <h2>4. File Processing and Storage</h2>
                        <ul>
                            <li>Files are processed immediately upon upload</li>
                            <li>Converted files are available for download for a limited time</li>
                            <li>All files are automatically deleted from our servers within 24 hours</li>
                            <li>We do not guarantee permanent storage of any files</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Service Limitations</h2>
                        <h3>5.1 File Size and Format</h3>
                        <p>
                            The Service may impose limitations on:
                        </p>
                        <ul>
                            <li>Maximum file size (currently 50MB per file)</li>
                            <li>Supported file formats</li>
                            <li>Number of conversions per day</li>
                            <li>Processing time and queue priority</li>
                        </ul>

                        <h3>5.2 Service Availability</h3>
                        <p>
                            While we strive for 100% uptime, we do not guarantee uninterrupted access to the Service.
                            We reserve the right to modify, suspend, or discontinue the Service at any time.
                        </p>
                    </section>

                    <section>
                        <h2>6. Intellectual Property</h2>
                        <p>
                            All content, features, and functionality of the Service, including but not limited to text, graphics,
                            logos, and software, are owned by iLovePDFKit and protected by copyright and trademark laws.
                        </p>
                    </section>

                    <section>
                        <h2>7. Disclaimer of Warranties</h2>
                        <p>
                            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                        </p>
                        <ul>
                            <li>Accuracy or quality of conversions</li>
                            <li>Uninterrupted or error-free operation</li>
                            <li>Fitness for a particular purpose</li>
                            <li>Non-infringement of third-party rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2>8. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, iLovePDFKit shall not be liable for any indirect, incidental,
                            special, consequential, or punitive damages, including but not limited to:
                        </p>
                        <ul>
                            <li>Loss of data or files</li>
                            <li>Loss of profits or revenue</li>
                            <li>Business interruption</li>
                            <li>Loss of use or goodwill</li>
                        </ul>
                    </section>

                    <section>
                        <h2>9. Indemnification</h2>
                        <p>
                            You agree to indemnify and hold harmless iLovePDFKit from any claims, damages, losses, liabilities,
                            and expenses arising from:
                        </p>
                        <ul>
                            <li>Your use of the Service</li>
                            <li>Your violation of these Terms</li>
                            <li>Your violation of any third-party rights</li>
                            <li>Content of files you upload</li>
                        </ul>
                    </section>

                    <section>
                        <h2>10. Privacy</h2>
                        <p>
                            Your use of the Service is also governed by our <Link href="/privacy-policy">Privacy Policy</Link>.
                            Please review it to understand our data practices.
                        </p>
                    </section>

                    <section>
                        <h2>11. Modifications to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                            posting. Your continued use of the Service after changes constitutes acceptance of the new Terms.
                        </p>
                    </section>

                    <section>
                        <h2>12. Termination</h2>
                        <p>
                            We may terminate or suspend your access to the Service immediately, without prior notice, for any
                            reason, including breach of these Terms.
                        </p>
                    </section>

                    <section>
                        <h2>13. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with applicable laws, without regard to
                            conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2>14. Contact Information</h2>
                        <p>
                            For questions about these Terms and Conditions, please contact us:
                        </p>
                        <ul>
                            <li>Email: support@ilovepdfkit.com</li>
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
