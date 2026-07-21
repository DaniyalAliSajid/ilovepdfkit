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
  { slug: 'compress-pdf-to-150kb', keyword: 'compress pdf to 150kb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'problem', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-to-250kb', keyword: 'compress pdf to 250kb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-to-1mb', keyword: 'compress pdf to 1mb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'problem', cluster: 'compress', themeColor: '#10b981', phase: 1 },

  // COMPRESS — USE-CASE
  { slug: 'compress-pdf-for-email', keyword: 'compress pdf for email', tool: 'compress-pdf', modifier: 'email', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-for-whatsapp', keyword: 'compress pdf for whatsapp', tool: 'compress-pdf', modifier: 'whatsapp', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-for-job-application', keyword: 'compress pdf for job application', tool: 'compress-pdf', modifier: 'job', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-without-losing-quality', keyword: 'compress pdf without losing quality', tool: 'compress-pdf', modifier: 'quality', page_type: 'A', angle: 'quality', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-no-login', keyword: 'compress pdf no login', tool: 'compress-pdf', modifier: 'no-login', page_type: 'A', angle: 'privacy', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-for-upload', keyword: 'compress pdf for upload', tool: 'compress-pdf', modifier: 'upload', page_type: 'A', angle: 'problem', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-fast-online', keyword: 'compress pdf fast online', tool: 'compress-pdf', modifier: 'fast', page_type: 'A', angle: 'speed', cluster: 'compress', themeColor: '#10b981', phase: 1 },
  { slug: 'compress-pdf-high-quality', keyword: 'compress pdf high quality', tool: 'compress-pdf', modifier: 'quality', page_type: 'A', angle: 'quality', cluster: 'compress', themeColor: '#10b981', phase: 1 },

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
  { slug: 'excel-to-pdf-online-free', keyword: 'excel to pdf online free', tool: 'excel-to-pdf', modifier: 'free', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
  { slug: 'excel-to-pdf-without-formatting', keyword: 'excel to pdf without formatting', tool: 'excel-to-pdf', modifier: 'formatting', page_type: 'A', angle: 'problem', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
  { slug: 'excel-to-pdf-fast', keyword: 'excel to pdf fast', tool: 'excel-to-pdf', modifier: 'fast', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
  { slug: 'excel-to-pdf-no-login', keyword: 'excel to pdf no login', tool: 'excel-to-pdf', modifier: 'no-login', page_type: 'A', angle: 'privacy', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
  { slug: 'convert-excel-to-pdf-high-quality', keyword: 'convert excel to pdf high quality', tool: 'excel-to-pdf', modifier: 'quality', page_type: 'A', angle: 'quality', cluster: 'convert', themeColor: '#6d28d9', phase: 1 },
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

  // ─── PHASE 2 — 51 pages ─────────────────────────────────────────────────

  // COMPRESS PHASE 2
  { slug: 'compress-pdf-to-50kb', keyword: 'compress pdf to 50kb', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'problem', cluster: 'compress', themeColor: '#10b981', phase: 2 },
  { slug: 'compress-pdf-to-300kb-online', keyword: 'compress pdf to 300kb online', tool: 'compress-pdf', modifier: 'size', page_type: 'A', angle: 'speed', cluster: 'compress', themeColor: '#10b981', phase: 2 },
  { slug: 'compress-pdf-for-gmail', keyword: 'compress pdf for gmail', tool: 'compress-pdf', modifier: 'email', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 2 },
  { slug: 'compress-pdf-for-google-drive', keyword: 'compress pdf for google drive', tool: 'compress-pdf', modifier: 'cloud', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 2 },
  { slug: 'compress-pdf-for-portal-upload', keyword: 'compress pdf for portal upload', tool: 'compress-pdf', modifier: 'upload', page_type: 'A', angle: 'problem', cluster: 'compress', themeColor: '#10b981', phase: 2 },
  { slug: 'compress-scanned-pdf', keyword: 'compress scanned pdf', tool: 'compress-pdf', modifier: 'scanned', page_type: 'A', angle: 'problem', cluster: 'compress', themeColor: '#10b981', phase: 2 },
  { slug: 'compress-pdf-on-mac', keyword: 'compress pdf on mac', tool: 'compress-pdf', modifier: 'platform', page_type: 'A', angle: 'speed', cluster: 'compress', themeColor: '#10b981', phase: 2 },
  { slug: 'compress-pdf-mobile-free', keyword: 'compress pdf mobile free', tool: 'compress-pdf', modifier: 'mobile', page_type: 'A', angle: 'use-case', cluster: 'compress', themeColor: '#10b981', phase: 2 },

  // ORGANIZE PHASE 2
  { slug: 'merge-scanned-pdf-files', keyword: 'merge scanned pdf files', tool: 'merge-pdf', modifier: 'scanned', page_type: 'A', angle: 'use-case', cluster: 'organize', themeColor: '#8b5cf6', phase: 2 },
  { slug: 'combine-pdf-files-free', keyword: 'combine pdf files free', tool: 'merge-pdf', modifier: 'combine', page_type: 'A', angle: 'speed', cluster: 'organize', themeColor: '#8b5cf6', phase: 2 },
  { slug: 'merge-pdf-large-files', keyword: 'merge pdf large files', tool: 'merge-pdf', modifier: 'large', page_type: 'A', angle: 'problem', cluster: 'organize', themeColor: '#8b5cf6', phase: 2 },
  { slug: 'split-pdf-into-single-pages', keyword: 'split pdf into single pages', tool: 'split-pdf', modifier: 'single-page', page_type: 'A', angle: 'use-case', cluster: 'organize', themeColor: '#8b5cf6', phase: 2 },
  { slug: 'extract-specific-pages-from-pdf', keyword: 'extract specific pages from pdf', tool: 'split-pdf', modifier: 'specific-pages', page_type: 'A', angle: 'problem', cluster: 'organize', themeColor: '#8b5cf6', phase: 2 },
  { slug: 'remove-blank-pages-from-pdf', keyword: 'remove blank pages from pdf', tool: 'delete-pdf-pages', modifier: 'blank-pages', page_type: 'A', angle: 'problem', cluster: 'organize', themeColor: '#8b5cf6', phase: 2 },
  { slug: 'rotate-and-save-pdf', keyword: 'rotate and save pdf', tool: 'delete-pdf-pages', modifier: 'rotate', page_type: 'A', angle: 'use-case', cluster: 'organize', themeColor: '#8b5cf6', phase: 2 },
  { slug: 'organize-pdf-pages-free', keyword: 'organize pdf pages free', tool: 'delete-pdf-pages', modifier: 'organize', page_type: 'A', angle: 'speed', cluster: 'organize', themeColor: '#8b5cf6', phase: 2 },

  // CONVERT PHASE 2
  { slug: 'pdf-to-word-without-losing-formatting', keyword: 'pdf to word without losing formatting', tool: 'pdf-to-word', modifier: 'formatting', page_type: 'A', angle: 'quality', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'convert-scanned-pdf-to-word', keyword: 'convert scanned pdf to word', tool: 'pdf-to-word', modifier: 'scanned', page_type: 'A', angle: 'problem', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'pdf-to-docx-converter-free', keyword: 'pdf to docx converter free', tool: 'pdf-to-word', modifier: 'docx', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'convert-pdf-to-excel-with-columns', keyword: 'convert pdf to excel with columns', tool: 'pdf-to-excel', modifier: 'columns', page_type: 'A', angle: 'quality', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'pdf-to-xlsx-online-free', keyword: 'pdf to xlsx online free', tool: 'pdf-to-excel', modifier: 'xlsx', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'convert-pdf-to-powerpoint-free', keyword: 'convert pdf to powerpoint free', tool: 'pdf-to-ppt', modifier: 'ppt', page_type: 'A', angle: 'use-case', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'pdf-to-ppt-editable-slides', keyword: 'pdf to ppt editable slides', tool: 'pdf-to-ppt', modifier: 'editable', page_type: 'A', angle: 'quality', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'ppt-to-pdf-converter-online', keyword: 'ppt to pdf converter online', tool: 'ppt-to-pdf', modifier: 'online', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'jpg-to-pdf-converter-high-resolution', keyword: 'jpg to pdf converter high resolution', tool: 'jpg-to-pdf', modifier: 'resolution', page_type: 'A', angle: 'quality', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'png-to-pdf-converter-free', keyword: 'png to pdf converter free', tool: 'png-to-pdf', modifier: 'png', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'convert-multiple-images-to-one-pdf', keyword: 'convert multiple images to one pdf', tool: 'jpg-to-pdf', modifier: 'batch', page_type: 'A', angle: 'use-case', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'word-to-pdf-high-resolution', keyword: 'word to pdf high resolution', tool: 'word-to-pdf', modifier: 'resolution', page_type: 'A', angle: 'quality', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'convert-doc-to-pdf-online', keyword: 'convert doc to pdf online', tool: 'word-to-pdf', modifier: 'doc', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'pdf-to-png-transparent-hd', keyword: 'pdf to png transparent hd', tool: 'pdf-to-png', modifier: 'transparent', page_type: 'A', angle: 'quality', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'txt-to-pdf-online-free', keyword: 'txt to pdf online free', tool: 'general', modifier: 'txt', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'html-to-pdf-converter-free', keyword: 'html to pdf converter free', tool: 'general', modifier: 'html', page_type: 'A', angle: 'speed', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },
  { slug: 'convert-vector-pdf-to-svg', keyword: 'convert vector pdf to svg', tool: 'general', modifier: 'svg', page_type: 'A', angle: 'use-case', cluster: 'convert', themeColor: '#6d28d9', phase: 2 },

  // SECURITY & EDIT PHASE 2
  { slug: 'watermark-pdf-online-free', keyword: 'watermark pdf online free', tool: 'protect-pdf', modifier: 'watermark', page_type: 'A', angle: 'use-case', cluster: 'security', themeColor: '#1e3a8a', phase: 2 },
  { slug: 'add-text-watermark-to-pdf', keyword: 'add text watermark to pdf', tool: 'protect-pdf', modifier: 'text-watermark', page_type: 'A', angle: 'use-case', cluster: 'security', themeColor: '#1e3a8a', phase: 2 },
  { slug: 'flatten-pdf-form-fields', keyword: 'flatten pdf form fields', tool: 'protect-pdf', modifier: 'flatten', page_type: 'A', angle: 'problem', cluster: 'security', themeColor: '#1e3a8a', phase: 2 },
  { slug: 'redact-sensitive-info-pdf', keyword: 'redact sensitive info pdf', tool: 'protect-pdf', modifier: 'redact', page_type: 'A', angle: 'privacy', cluster: 'security', themeColor: '#1e3a8a', phase: 2 },
  { slug: 'sign-pdf-online-free', keyword: 'sign pdf online free', tool: 'protect-pdf', modifier: 'sign', page_type: 'A', angle: 'speed', cluster: 'security', themeColor: '#1e3a8a', phase: 2 },
  { slug: 'compress-password-protected-pdf', keyword: 'compress password protected pdf', tool: 'compress-pdf', modifier: 'encrypted-compress', page_type: 'A', angle: 'problem', cluster: 'security', themeColor: '#1e3a8a', phase: 2 },
  { slug: 'unlock-pdf-without-password', keyword: 'unlock pdf without password', tool: 'unlock-pdf', modifier: 'bypass', page_type: 'A', angle: 'problem', cluster: 'security', themeColor: '#1e3a8a', phase: 2 },
  { slug: 'add-header-and-footer-to-pdf', keyword: 'add header and footer to pdf', tool: 'add-page-numbers', modifier: 'header-footer', page_type: 'A', angle: 'use-case', cluster: 'security', themeColor: '#1e3a8a', phase: 2 },

  // AUDIENCE PHASE 2
  { slug: 'pdf-tools-for-realtors', keyword: 'pdf tools for realtors', tool: 'general', modifier: 'realtors', page_type: 'C', angle: 'audience', cluster: 'general', themeColor: '#6d28d9', phase: 2 },
  { slug: 'pdf-tools-for-lawyers', keyword: 'pdf tools for lawyers', tool: 'general', modifier: 'lawyers', page_type: 'C', angle: 'audience', cluster: 'general', themeColor: '#6d28d9', phase: 2 },
  { slug: 'pdf-tools-for-accountants', keyword: 'pdf tools for accountants', tool: 'general', modifier: 'accountants', page_type: 'C', angle: 'audience', cluster: 'general', themeColor: '#6d28d9', phase: 2 },
  { slug: 'pdf-tools-for-teachers', keyword: 'pdf tools for teachers', tool: 'general', modifier: 'teachers', page_type: 'C', angle: 'audience', cluster: 'general', themeColor: '#6d28d9', phase: 2 },
  { slug: 'pdf-tools-for-job-seekers', keyword: 'pdf tools for job seekers', tool: 'general', modifier: 'job-seekers', page_type: 'C', angle: 'audience', cluster: 'general', themeColor: '#6d28d9', phase: 2 },

  // COMPARISONS PHASE 2
  { slug: 'smallpdf-alternative-free', keyword: 'smallpdf alternative free', tool: 'general', modifier: 'smallpdf', page_type: 'D', angle: 'comparison', cluster: 'general', themeColor: '#6d28d9', phase: 2 },
  { slug: 'adobe-acrobat-alternative-free', keyword: 'adobe acrobat alternative free', tool: 'general', modifier: 'adobe', page_type: 'D', angle: 'comparison', cluster: 'general', themeColor: '#6d28d9', phase: 2 },
  { slug: 'pdf2go-alternative-free', keyword: 'pdf2go alternative free', tool: 'general', modifier: 'pdf2go', page_type: 'D', angle: 'comparison', cluster: 'general', themeColor: '#6d28d9', phase: 2 },
  { slug: 'sejda-alternative-free', keyword: 'sejda alternative free', tool: 'general', modifier: 'sejda', page_type: 'D', angle: 'comparison', cluster: 'general', themeColor: '#6d28d9', phase: 2 },
  { slug: 'best-free-pdf-compressor-online', keyword: 'best free pdf compressor online', tool: 'general', modifier: 'best-compressor', page_type: 'D', angle: 'comparison', cluster: 'general', themeColor: '#6d28d9', phase: 2 },
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
