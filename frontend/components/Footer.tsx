'use client';

import Link from 'next/link';
import styles from '@/app/page.module.css'; // Reusing homepage styles for now, or we can move to footer.module.css

export default function Footer() {
    return (
        <footer className={styles.footer} style={{ marginTop: 'auto', width: '100%' }}>
            <div className={styles.container}>
                <div className={styles.footerLinks}>
                    <Link href="/about">About Us</Link>
                    <span>•</span>
                    <Link href="/contact">Contact Us</Link>
                    <span>•</span>
                    <Link href="/advertise-with-us">Advertise with Us</Link>
                    <span>•</span>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <span>•</span>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </div>
                <p className={styles.copyright}>
                    © 2025 ILOVEPDFKIT. All rights reserved.
                    <br />
                    Made with ❤️ for seamless document conversion
                </p>
            </div>
        </footer>
    );
}
