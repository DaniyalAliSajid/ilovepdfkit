'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        <div className={styles.brandIcon}>
          <FileText size={24} />
        </div>
        <span>ILOVEPDFKIT</span>
      </Link>
      <div className={styles.navLinks}>
        <Link
          href="/"
          className={`${styles.navLink} ${pathname === '/' ? styles.activeNavLink : ''}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${styles.navLink} ${pathname === '/about' ? styles.activeNavLink : ''}`}
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className={`${styles.navLink} ${pathname === '/contact' ? styles.activeNavLink : ''}`}
        >
          Contact Us
        </Link>
        <Link href="/pdf-to-word" className={styles.ctaButton} target="_blank">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
