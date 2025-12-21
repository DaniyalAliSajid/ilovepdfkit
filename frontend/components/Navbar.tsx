'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FileText, Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTools = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on mobile

    // If we're on the homepage, scroll to the section
    if (pathname === '/') {
      const toolsSection = document.getElementById('tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      router.push('/#tools-section');
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          <div className={styles.brandIcon}>
            <FileText size={24} />
          </div>
          <span>ILOVEPDFKIT</span>
        </Link>

        {/* Desktop Navigation */}
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
          <a href="#tools-section" onClick={scrollToTools} className={styles.ctaButton}>
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          <div className={styles.drawerBackdrop} onClick={closeMenu} />
          <div className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <div className={styles.drawerBrand}>
                <div className={styles.brandIcon}>
                  <FileText size={24} />
                </div>
                <span>ILOVEPDFKIT</span>
              </div>
              <button
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className={styles.drawerLinks}>
              <Link
                href="/"
                className={`${styles.drawerLink} ${pathname === '/' ? styles.activeDrawerLink : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${styles.drawerLink} ${pathname === '/about' ? styles.activeDrawerLink : ''}`}
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`${styles.drawerLink} ${pathname === '/contact' ? styles.activeDrawerLink : ''}`}
                onClick={closeMenu}
              >
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className={`${styles.drawerLink} ${pathname === '/privacy-policy' ? styles.activeDrawerLink : ''}`}
                onClick={closeMenu}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className={`${styles.drawerLink} ${pathname === '/terms-and-conditions' ? styles.activeDrawerLink : ''}`}
                onClick={closeMenu}
              >
                Terms & Conditions
              </Link>
              <Link
                href="/advertise-with-us"
                className={`${styles.drawerLink} ${pathname === '/advertise-with-us' ? styles.activeDrawerLink : ''}`}
                onClick={closeMenu}
              >
                Advertise with us
              </Link>

              <a
                href="#tools-section"
                onClick={scrollToTools}
                className={styles.drawerCtaButton}
              >
                Get Started
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
