// lib/seo-pages.config.ts
// Central dataset for all programmatic SEO pages.
// To add a Phase 2 page: add one entry here with phase: 2, then create app/[slug]/page.tsx
// Build-time duplicate-slug validation runs at the bottom of this file.

export type Cluster = 'compress' | 'organize' | 'convert' | 'security' | 'general';
export type PageType = 'A' | 'B' | 'C' | 'D';
export type Angle =
  | 'problem'
  | 'speed'
  | 'quality'
  | 'privacy'
  | 'use-case'
  | 'how-to'
  | 'audience'
  | 'comparison';

export interface SEOPageConfig {
  slug: string;        // URL path segment — must be globally unique
  keyword: string;     // exact target search keyword
  tool: string;        // primary tool slug this page maps to
  modifier: string;    // keyword modifier category
  page_type: PageType; // A=tool-intent B=how-to C=audience D=comparison
  angle: Angle;        // content variation angle (controls intro, FAQ, use-case)
  cluster: Cluster;    // SEO topic cluster for internal linking
  themeColor: string;  // hex — from cluster color system
  phase: 1 | 2 | 3;   // release phase (only phase:1 is built now)
}

export const SEO_PAGES_CONFIG: SEOPageConfig[] = [
  // ─── PHASE 1 — 39 pages ─────────────────────────────────────────────────

  // COMPRESS — SIZE
  { slug: 'compress-pdf-to-100kb', keyword: 'compress pdf to 100kb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'problem', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-to-200kb', keyword: 'compress pdf to 200kb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-to-300kb', keyword: 'compress pdf to 300kb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'speed', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-to-500kb', keyword: 'compress pdf to 500kb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'quality', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-under-1mb', keyword: 'compress pdf under 1mb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 1 },

  // COMPRESS — USE-CASE
  { slug: 'compress-pdf-for-email', keyword: 'compress pdf for email', tool: 'compress-pdf', modifier: 'email', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-for-whatsapp', keyword: 'compress pdf for whatsapp', tool: 'compress-pdf', modifier: 'whatsapp', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-for-job-application', keyword: 'compress pdf for job application', tool: 'compress-pdf', modifier: 'job', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-without-losing-quality', keyword: 'compress pdf without losing quality', tool: 'compress-pdf', modifier: 'quality', page_type: 'A', angle: 'quality', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-no-login', keyword: 'compress pdf no login', tool: 'compress-pdf', modifier: 'no-login', page_type: 'A', angle: 'privacy', cluster: 'compress', themeColor: '#10b981', phase: 1 },

  // COMPRESS — PROBLEM
  { slug: 'reduce-pdf-size-for-upload', keyword: 'reduce pdf size for upload', tool: 'compress-pdf', modifier: 'upload', page_type: 'A', angle: 'problem', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'pdf-file-too-large-fix', keyword: 'pdf file too large fix', tool: 'compress-pdf', modifier: 'problem', page_type: 'A', angle: 'problem', cluster: 'compress', themeColor: '#10b981', phase: 1 },

  // MERGE
  { slug: 'merge-pdf-online-free', keyword: 'merge pdf online free', tool: 'merge-pdf', modifier: 'free', page_type: 'A', angle: 'speed', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },
  { slug: 'merge-multiple-pdf-files', keyword: 'merge multiple pdf files', tool: 'merge-pdf', modifier: 'multiple', page_type: 'A', angle: 'use-case', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },
  { slug: 'merge-pdf-no-signup', keyword: 'merge pdf no signup', tool: 'merge-pdf', modifier: 'no-signup', page_type: 'A', angle: 'privacy', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },
  { slug: 'merge-pdf-without-upload', keyword: 'merge pdf without upload', tool: 'merge-pdf', modifier: 'privacy', page_type: 'A', angle: 'privacy', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },

  // SPLIT / EXTRACT / DELETE
  { slug: 'split-pdf-by-pages', keyword: 'split pdf by pages', tool: 'split-pdf', modifier: 'pages', page_type: 'A', angle: 'use-case', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },
  { slug: 'extract-pages-from-pdf', keyword: 'extract pages from pdf', tool: 'split-pdf', modifier: 'extract', page_type: 'A', angle: 'problem', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },
  { slug: 'delete-pages-from-pdf', keyword: 'delete pages from pdf', tool: 'delete-pdf-pages', modifier: 'delete', page_type: 'A', angle: 'speed', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },
  { slug: 'rearrange-pdf-pages-online', keyword: 'rearrange pdf pages online', tool: 'delete-pdf-pages', modifier: 'reorder', page_type: 'A', angle: 'use-case', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },

  // CONVERT
  { slug: 'pdf-to-word-editable', keyword: 'pdf to word editable', tool: 'pdf-to-word', modifier: 'editable', page_type: 'A', angle: 'use-case', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
  { slug: 'pdf-to-excel-online', keyword: 'pdf to excel online', tool: 'pdf-to-excel', modifier: 'excel', page_type: 'A', angle: 'use-case', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
  { slug: 'pdf-to-jpg-high-quality', keyword: 'pdf to jpg high quality', tool: 'pdf-to-jpg', modifier: 'quality', page_type: 'A', angle: 'quality', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
  { slug: 'jpg-to-pdf-no-login', keyword: 'jpg to pdf no login', tool: 'jpg-to-pdf', modifier: 'no-login', page_type: 'A', angle: 'privacy', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
  { slug: 'word-to-pdf-online-free', keyword: 'word to pdf online free', tool: 'word-to-pdf', modifier: 'free', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },

  // SECURITY
  { slug: 'remove-password-from-pdf', keyword: 'remove password from pdf', tool: 'unlock-pdf', modifier: 'unlock', page_type: 'A', angle: 'problem', cluster: 'security', themeColor: '#1e3a8a', phase: 1 },
  { slug: 'protect-pdf-with-password', keyword: 'protect pdf with password', tool: 'protect-pdf', modifier: 'protect', page_type: 'A', angle: 'use-case', cluster: 'security', themeColor: '#1e3a8a', phase: 1 },

  // EDIT
  { slug: 'add-page-numbers-to-pdf', keyword: 'add page numbers to pdf', tool: 'add-page-numbers', modifier: 'numbering', page_type: 'A', angle: 'use-case', cluster: 'security', themeColor: '#1e3a8a', phase: 1 },

  // AUDIENCE
  { slug: 'pdf-tools-for-students', keyword: 'pdf tools for students', tool: 'general', modifier: 'students', page_type: 'C', angle: 'audience', cluster: 'general', themeColor: '#6d28d9', phase: 1 },
  { slug: 'pdf-tools-for-freelancers', keyword: 'pdf tools for freelancers', tool: 'general', modifier: 'freelancers', page_type: 'C', angle: 'audience', cluster: 'general', themeColor: '#6d28d9', phase: 1 },
  { slug: 'pdf-tools-for-business', keyword: 'pdf tools for business', tool: 'general', modifier: 'business', page_type: 'C', angle: 'audience', cluster: 'general', themeColor: '#6d28d9', phase: 1 },

  // HOW-TO
  { slug: 'how-to-compress-pdf-to-100kb', keyword: 'how to compress pdf to 100kb', tool: 'compress-pdf', modifier: 'how-to', page_type: 'B', angle: 'how-to', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'how-to-merge-pdf-files-online', keyword: 'how to merge pdf files online', tool: 'merge-pdf', modifier: 'how-to', page_type: 'B', angle: 'how-to', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },
  { slug: 'how-to-split-pdf-pages', keyword: 'how to split pdf pages', tool: 'split-pdf', modifier: 'how-to', page_type: 'B', angle: 'how-to', cluster: 'organize', themeColor: '#8b5cf6', phase: 1 },
  { slug: 'how-to-convert-pdf-to-word-editable', keyword: 'how to convert pdf to word editable', tool: 'pdf-to-word', modifier: 'how-to', page_type: 'B', angle: 'how-to', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
  { slug: 'how-to-remove-password-from-pdf', keyword: 'how to remove password from pdf', tool: 'unlock-pdf', modifier: 'how-to', page_type: 'B', angle: 'how-to', cluster: 'security', themeColor: '#1e3a8a', phase: 1 },

  // COMPARISON
  { slug: 'best-pdf-tools-free', keyword: 'best pdf tools free', tool: 'general', modifier: 'best', page_type: 'D', angle: 'comparison', cluster: 'general', themeColor: '#6d28d9', phase: 1 },
  { slug: 'ilovepdf-alternative-free', keyword: 'ilovepdf alternative free', tool: 'general', modifier: 'comparison', page_type: 'D', angle: 'comparison', cluster: 'general', themeColor: '#6d28d9', phase: 1 },

  // ─── PHASE 2 (commented out — not built yet) ────────────────────────────
  // { slug: 'compress-pdf-to-1mb', keyword: 'compress pdf to 1mb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 2 },
  // { slug: 'compress-pdf-for-google-drive', keyword: 'compress pdf for google drive', tool: 'compress-pdf', modifier: 'cloud', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 2 },
  // { slug: 'watermark-pdf-online', keyword: 'watermark pdf online', tool: 'watermark-pdf', modifier: 'watermark', page_type: 'A', angle: 'use-case', cluster: 'security', themeColor: '#1e3a8a', phase: 2 },
];

// ─── BUILD-TIME DUPLICATE SLUG VALIDATION ────────────────────────────────────
// This runs when the module is imported. Any duplicate slug causes an immediate
// build failure with a clear error message identifying the offending slug.
const _slugs = SEO_PAGES_CONFIG.map((p) => p.slug);
const _uniqueSlugs = new Set(_slugs);
if (_slugs.length !== _uniqueSlugs.size) {
  const dupe = _slugs.find((s, i) => _slugs.indexOf(s) !== i);
  throw new Error(
    `[seo-pages.config] Duplicate slug detected: "${dupe}". Each slug must be globally unique.`
  );
}
