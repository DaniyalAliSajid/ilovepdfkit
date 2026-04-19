import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight, CheckCircle, ChevronRight, XCircle } from 'lucide-react';
import styles from './SEOLandingPage.module.css';
import FAQ from './FAQ';
import { getInternalLinks, InternalLinks } from '@/lib/seo-linking';

interface SEOLandingPageProps {
  keyword: string;
  slug: string;
  pageType: 'A' | 'B' | 'C' | 'D';
  angle: 'problem' | 'speed' | 'quality' | 'privacy' | 'use-case' | 'how-to' | 'audience' | 'comparison';
  h1: string;
  heroDescription: string;
  intro: string;
  steps: { title: string; description: string }[];
  features: { icon: LucideIcon; title: string; description: string }[];
  useCases?: { title: string; description: string }[];
  toolSpotlights?: { name: string; href: string; description: string; icon: LucideIcon }[];
  comparisonTable?: { feature: string; ilovepdfkit: boolean; ilovepdf: boolean; smallpdf: boolean; adobe: boolean }[];
  midCTA: { text: string; href: string };
  bottomCTA: { headline: string; text: string; href: string };
  faqs: { question: string; answer: string }[];
  faqTitle: string;
  faqSubtitle: string;
  breadcrumbs: { name: string; href: string }[];
  themeColor: string;
  internalLinksOverride?: Partial<InternalLinks>;
}

export default function SEOLandingPage(props: SEOLandingPageProps) {
  // Resolve internal links auto-magically
  const autoLinks = getInternalLinks(props.slug);
  const links = { ...autoLinks, ...props.internalLinksOverride };

  // Generate Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": props.breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": crumb.name,
      "item": `https://ilovepdfkit.com${crumb.href}`
    }))
  };

  let howToSchema = null;
  if (props.pageType === 'B') {
    howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": props.h1,
      "description": props.heroDescription,
      "step": props.steps.map((step, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": step.title,
        "text": step.description,
        "url": `https://ilovepdfkit.com/${props.slug}#step${i + 1}`
      }))
    };
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}

      {/* 1. Hero & Breadcrumbs */}
      <section className={styles.seoHero}>
        
        <nav className={styles.breadcrumbNav} aria-label="breadcrumb">
          <ol className={styles.breadcrumbList}>
            {props.breadcrumbs.map((crumb, i) => (
              <li key={i} className={styles.breadcrumbItem}>
                {i > 0 && <ChevronRight size={14} className={styles.breadcrumbSeparator} />}
                {i === props.breadcrumbs.length - 1 ? (
                  <span className={styles.breadcrumbCurrent}>{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className={styles.breadcrumbLink}>{crumb.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.container}>
          <h1 className={styles.h1}>{props.h1}</h1>
          <p className={styles.heroDescription}>{props.heroDescription}</p>
          <Link 
            href={links.parentTool.href}
            className={styles.heroCta}
            style={{ backgroundColor: props.themeColor }}
          >
            {links.parentTool.text} <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* 2. Intro */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <p className={styles.seoIntro}>{props.intro}</p>
          
          {/* How-To Steps */}
          <div className={styles.howToGrid}>
            {props.steps.map((step, i) => (
              <div key={i} className={styles.stepCard} id={`step${i + 1}`} style={{ '--bg-color': props.themeColor } as React.CSSProperties}>
                <div 
                  className={styles.stepCardBefore} 
                  style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', backgroundColor: props.themeColor }} 
                />
                <div 
                  className={styles.stepNumber} 
                  style={{ backgroundColor: `${props.themeColor}15`, color: props.themeColor }}
                >
                  {i + 1}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.midCtaArea}>
            <Link 
              href={props.midCTA.href} 
              className={styles.midCta}
              style={{ backgroundColor: props.themeColor }}
            >
              {props.midCTA.text}
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            {props.features.map((feature, i) => (
              <div key={i} className={styles.featureCard}>
                <div 
                  className={styles.featureIcon}
                  style={{ backgroundColor: `${props.themeColor}15`, color: props.themeColor }}
                >
                  <feature.icon size={24} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Type-Specific Sections (Use Cases / Spotlight / Comparison) */}
      {(props.pageType === 'A' || props.pageType === 'B') && props.useCases && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>When to use this tool</h2>
            </div>
            <div className={styles.useCasesGrid}>
              {props.useCases.map((uc, i) => (
                <div key={i} className={styles.useCaseCard} style={{ borderColor: props.themeColor }}>
                  <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                  <p className={styles.useCaseDesc}>{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {props.pageType === 'C' && props.toolSpotlights && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Essential Tools</h2>
            </div>
            <div className={styles.toolSpotlightGrid}>
              {props.toolSpotlights.map((tool, i) => (
                <Link key={i} href={tool.href} className={styles.spotlightCard}>
                  <div 
                    className={styles.spotlightIcon}
                    style={{ backgroundColor: `${props.themeColor}15`, color: props.themeColor }}
                  >
                    <tool.icon size={24} />
                  </div>
                  <div className={styles.spotlightContent}>
                    <h3>{tool.name}</h3>
                    <p>{tool.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {props.pageType === 'D' && props.comparisonTable && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>How We Compare</h2>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className={styles.ourCol}>iLovePDFKit</th>
                    <th>iLovePDF</th>
                    <th>Smallpdf</th>
                    <th>Adobe</th>
                  </tr>
                </thead>
                <tbody>
                  {props.comparisonTable.map((row, i) => (
                    <tr key={i}>
                      <td>{row.feature}</td>
                      <td className={styles.ourCol}>
                        {row.ilovepdfkit ? <CheckCircle size={20} color={props.themeColor} /> : <XCircle size={20} color="#e5e7eb" />}
                      </td>
                      <td>{row.ilovepdf ? <CheckCircle size={20} color="#10b981" /> : <XCircle size={20} color="#e5e7eb" />}</td>
                      <td>{row.smallpdf ? <CheckCircle size={20} color="#10b981" /> : <XCircle size={20} color="#e5e7eb" />}</td>
                      <td>{row.adobe ? <CheckCircle size={20} color="#10b981" /> : <XCircle size={20} color="#e5e7eb" />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 5. Related Tools (ABOVE FAQ) */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.relatedTools}>
            <h2>Do More With PDFs</h2>
            <div className={styles.pillRow}>
              {/* Parent */}
              <Link href={links.parentTool.href} className={styles.toolPill} style={{ borderColor: props.themeColor }}>
                {links.parentTool.text}
              </Link>
              {/* Siblings */}
              {links.relatedInCluster.map((link, i) => (
                <Link key={`cluster-${i}`} href={link.href} className={styles.toolPill}>
                  {link.text}
                </Link>
              ))}
              {/* Cross-Cluster */}
              <Link href={links.crossCluster.href} className={styles.toolPill}>
                {links.crossCluster.text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ (reusing existing component which handles FAQPage schema) */}
      <div className={styles.container}>
        <FAQ
          title={props.faqTitle}
          subtitle={props.faqSubtitle}
          customFaqs={props.faqs}
        />
      </div>

      {/* 7. Bottom CTA Banner */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaBanner} style={{ backgroundColor: props.themeColor }}>
            <h2>{props.bottomCTA.headline}</h2>
            <Link 
              href={props.bottomCTA.href} 
              className={styles.ctaBannerBtn}
              style={{ color: props.themeColor }}
            >
              {props.bottomCTA.text} <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
