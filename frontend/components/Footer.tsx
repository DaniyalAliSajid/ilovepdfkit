'use client';

import Link from 'next/link';
import styles from '@/app/page.module.css';
import { Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer} style={{ marginTop: 'auto', width: '100%' }}>
            <div className={styles.container}>
                <div className={styles.footerLinks}>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/advertise-with-us">Advertise with Us</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    <Link href="/api-docs">Developer API</Link>
                    <a
                        href="https://github.com/DaniyalAliSajid/ilovepdfkit"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                        <Github size={16} /> GitHub
                    </a>
                </div>
                <p className={styles.copyright}>
                    © 2025 iLovePDFKit. All rights reserved.
                    <br />
                    Made with ❤️ for seamless document conversion
                </p>
            </div>
        </footer>
    );
}
