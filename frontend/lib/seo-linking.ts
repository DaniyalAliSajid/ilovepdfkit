// lib/seo-linking.ts
// Automated internal linking resolution for programmatic SEO pages.
// Usage: call getInternalLinks(slug) in each page.tsx to get all 4 links.
// No manual link passing is needed. System auto-scales to 300+ pages.

import { SEO_PAGES_CONFIG } from './seo-pages.config';

// ─── TYPES ───────────────────────────────────────────────────────────────────

type ClusterName = 'compress' | 'organize' | 'convert' | 'security' | 'general';

interface ClusterEntry {
  cluster: ClusterName;
  primary: string;      // hub tool slug; '' for general cluster (uses homepage)
  crossCluster: string; // slug of cross-cluster bridge page/tool
}

export interface InternalLinks {
  parentTool: { text: string; href: string };         // primary tool page (or homepage)
  relatedInCluster: { text: string; href: string }[]; // 2 sibling pages in same cluster
  crossCluster: { text: string; href: string };       // 1 cross-cluster bridge link
  conversionPage: { text: string; href: string };     // bottom CTA target (= parentTool)
}

// ─── CLUSTER MAP ─────────────────────────────────────────────────────────────
// Every Phase 1 slug is mapped here. Adding a Phase 2 slug requires one entry.
// 'general' cluster pages use primary: '' which resolves to the homepage.

const CLUSTER_MAP: Record<string, ClusterEntry> = {
  // ── COMPRESS ─────────────────────────────────────────────────────────────
  'compress-pdf-to-100kb':              { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-to-200kb':              { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-to-300kb':              { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'protect-pdf' },
  'compress-pdf-to-500kb':              { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-under-1mb':             { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-for-email':             { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-for-whatsapp':          { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'jpg-to-pdf' },
  'compress-pdf-for-job-application':   { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'word-to-pdf' },
  'compress-pdf-without-losing-quality':{ cluster: 'compress', primary: 'compress-pdf', crossCluster: 'pdf-to-jpg' },
  'compress-pdf-no-login':              { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'reduce-pdf-size-for-upload':         { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'pdf-file-too-large-fix':             { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'split-pdf' },
  'how-to-compress-pdf-to-100kb':       { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-to-150kb':              { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-to-250kb':              { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-to-1mb':                { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-for-upload':            { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-fast-online':           { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'pdf-to-word' },
  'compress-pdf-high-quality':          { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'pdf-to-word' },

  // ── ORGANIZE ─────────────────────────────────────────────────────────────
  'merge-pdf-online-free':              { cluster: 'organize', primary: 'merge-pdf', crossCluster: 'compress-pdf' },
  'merge-multiple-pdf-files':           { cluster: 'organize', primary: 'merge-pdf', crossCluster: 'compress-pdf' },
  'merge-pdf-no-signup':                { cluster: 'organize', primary: 'merge-pdf', crossCluster: 'compress-pdf' },
  'merge-pdf-without-upload':           { cluster: 'organize', primary: 'merge-pdf', crossCluster: 'protect-pdf' },
  'how-to-merge-pdf-files-online':      { cluster: 'organize', primary: 'merge-pdf', crossCluster: 'compress-pdf' },
  'split-pdf-by-pages':                 { cluster: 'organize', primary: 'split-pdf', crossCluster: 'compress-pdf' },
  'extract-pages-from-pdf':             { cluster: 'organize', primary: 'split-pdf', crossCluster: 'pdf-to-word' },
  'how-to-split-pdf-pages':             { cluster: 'organize', primary: 'split-pdf', crossCluster: 'compress-pdf' },
  'delete-pages-from-pdf':              { cluster: 'organize', primary: 'delete-pdf-pages', crossCluster: 'compress-pdf' },
  'rearrange-pdf-pages-online':         { cluster: 'organize', primary: 'delete-pdf-pages', crossCluster: 'merge-pdf' },

  // ── CONVERT ──────────────────────────────────────────────────────────────
  'pdf-to-word-editable':               { cluster: 'convert', primary: 'pdf-to-word', crossCluster: 'compress-pdf' },
  'how-to-convert-pdf-to-word-editable':{ cluster: 'convert', primary: 'pdf-to-word', crossCluster: 'merge-pdf' },
  'pdf-to-excel-online':                { cluster: 'convert', primary: 'pdf-to-excel', crossCluster: 'compress-pdf' },
  'pdf-to-jpg-high-quality':            { cluster: 'convert', primary: 'pdf-to-jpg', crossCluster: 'compress-pdf' },
  'jpg-to-pdf-no-login':                { cluster: 'convert', primary: 'jpg-to-pdf', crossCluster: 'compress-pdf' },
  'word-to-pdf-online-free':            { cluster: 'convert', primary: 'word-to-pdf', crossCluster: 'compress-pdf' },
  'excel-to-pdf-online-free':           { cluster: 'convert', primary: 'excel-to-pdf', crossCluster: 'compress-pdf' },
  'excel-to-pdf-without-formatting':    { cluster: 'convert', primary: 'excel-to-pdf', crossCluster: 'merge-pdf' },
  'excel-to-pdf-fast':                  { cluster: 'convert', primary: 'excel-to-pdf', crossCluster: 'compress-pdf' },
  'excel-to-pdf-no-login':              { cluster: 'convert', primary: 'excel-to-pdf', crossCluster: 'protect-pdf' },
  'convert-excel-to-pdf-high-quality':  { cluster: 'convert', primary: 'excel-to-pdf', crossCluster: 'compress-pdf' },

  // ── SECURITY ─────────────────────────────────────────────────────────────
  'remove-password-from-pdf':           { cluster: 'security', primary: 'unlock-pdf', crossCluster: 'compress-pdf' },
  'how-to-remove-password-from-pdf':    { cluster: 'security', primary: 'unlock-pdf', crossCluster: 'protect-pdf' },
  'protect-pdf-with-password':          { cluster: 'security', primary: 'protect-pdf', crossCluster: 'compress-pdf' },
  'add-page-numbers-to-pdf':            { cluster: 'security', primary: 'add-page-numbers', crossCluster: 'merge-pdf' },

  // ── COMPRESS PHASE 2 ─────────────────────────────────────────────────────
  'compress-pdf-to-50kb':              { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-to-300kb-online':       { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'protect-pdf' },
  'compress-pdf-for-gmail':             { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-for-google-drive':      { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-for-portal-upload':     { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-scanned-pdf':               { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'pdf-to-word' },
  'compress-pdf-on-mac':                { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'merge-pdf' },
  'compress-pdf-mobile-free':           { cluster: 'compress', primary: 'compress-pdf', crossCluster: 'jpg-to-pdf' },

  // ── ORGANIZE PHASE 2 ─────────────────────────────────────────────────────
  'merge-scanned-pdf-files':           { cluster: 'organize', primary: 'merge-pdf', crossCluster: 'compress-pdf' },
  'combine-pdf-files-free':            { cluster: 'organize', primary: 'merge-pdf', crossCluster: 'compress-pdf' },
  'merge-pdf-large-files':             { cluster: 'organize', primary: 'merge-pdf', crossCluster: 'compress-pdf' },
  'split-pdf-into-single-pages':        { cluster: 'organize', primary: 'split-pdf', crossCluster: 'compress-pdf' },
  'extract-specific-pages-from-pdf':    { cluster: 'organize', primary: 'split-pdf', crossCluster: 'pdf-to-word' },
  'remove-blank-pages-from-pdf':        { cluster: 'organize', primary: 'delete-pdf-pages', crossCluster: 'compress-pdf' },
  'rotate-and-save-pdf':               { cluster: 'organize', primary: 'delete-pdf-pages', crossCluster: 'merge-pdf' },
  'organize-pdf-pages-free':           { cluster: 'organize', primary: 'delete-pdf-pages', crossCluster: 'merge-pdf' },

  // ── CONVERT PHASE 2 ──────────────────────────────────────────────────────
  'pdf-to-word-without-losing-formatting': { cluster: 'convert', primary: 'pdf-to-word', crossCluster: 'compress-pdf' },
  'convert-scanned-pdf-to-word':        { cluster: 'convert', primary: 'pdf-to-word', crossCluster: 'compress-pdf' },
  'pdf-to-docx-converter-free':         { cluster: 'convert', primary: 'pdf-to-word', crossCluster: 'compress-pdf' },
  'convert-pdf-to-excel-with-columns':  { cluster: 'convert', primary: 'pdf-to-excel', crossCluster: 'compress-pdf' },
  'pdf-to-xlsx-online-free':            { cluster: 'convert', primary: 'pdf-to-excel', crossCluster: 'compress-pdf' },
  'convert-pdf-to-powerpoint-free':     { cluster: 'convert', primary: 'pdf-to-ppt', crossCluster: 'compress-pdf' },
  'pdf-to-ppt-editable-slides':         { cluster: 'convert', primary: 'pdf-to-ppt', crossCluster: 'compress-pdf' },
  'ppt-to-pdf-converter-online':        { cluster: 'convert', primary: 'ppt-to-pdf', crossCluster: 'compress-pdf' },
  'jpg-to-pdf-converter-high-resolution': { cluster: 'convert', primary: 'jpg-to-pdf', crossCluster: 'compress-pdf' },
  'png-to-pdf-converter-free':          { cluster: 'convert', primary: 'png-to-pdf', crossCluster: 'compress-pdf' },
  'convert-multiple-images-to-one-pdf': { cluster: 'convert', primary: 'jpg-to-pdf', crossCluster: 'compress-pdf' },
  'word-to-pdf-high-resolution':        { cluster: 'convert', primary: 'word-to-pdf', crossCluster: 'compress-pdf' },
  'convert-doc-to-pdf-online':          { cluster: 'convert', primary: 'word-to-pdf', crossCluster: 'compress-pdf' },
  'pdf-to-png-transparent-hd':          { cluster: 'convert', primary: 'pdf-to-png', crossCluster: 'compress-pdf' },
  'txt-to-pdf-online-free':             { cluster: 'convert', primary: '', crossCluster: 'compress-pdf' },
  'html-to-pdf-converter-free':        { cluster: 'convert', primary: '', crossCluster: 'compress-pdf' },
  'convert-vector-pdf-to-svg':          { cluster: 'convert', primary: '', crossCluster: 'compress-pdf' },

  // ── SECURITY PHASE 2 ─────────────────────────────────────────────────────
  'watermark-pdf-online-free':          { cluster: 'security', primary: 'protect-pdf', crossCluster: 'compress-pdf' },
  'add-text-watermark-to-pdf':          { cluster: 'security', primary: 'protect-pdf', crossCluster: 'compress-pdf' },
  'flatten-pdf-form-fields':            { cluster: 'security', primary: 'protect-pdf', crossCluster: 'compress-pdf' },
  'redact-sensitive-info-pdf':          { cluster: 'security', primary: 'protect-pdf', crossCluster: 'compress-pdf' },
  'sign-pdf-online-free':               { cluster: 'security', primary: 'protect-pdf', crossCluster: 'compress-pdf' },
  'compress-password-protected-pdf':    { cluster: 'security', primary: 'compress-pdf', crossCluster: 'unlock-pdf' },
  'unlock-pdf-without-password':        { cluster: 'security', primary: 'unlock-pdf', crossCluster: 'compress-pdf' },
  'add-header-and-footer-to-pdf':       { cluster: 'security', primary: 'add-page-numbers', crossCluster: 'merge-pdf' },

  // ── GENERAL PHASE 1 ──────────────────────────────────────────────────────
  'pdf-tools-for-students':             { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'pdf-tools-for-freelancers':          { cluster: 'general', primary: '', crossCluster: 'merge-pdf' },
  'pdf-tools-for-business':             { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'best-pdf-tools-free':                { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'ilovepdf-alternative-free':          { cluster: 'general', primary: '', crossCluster: 'merge-pdf' },

  // ── GENERAL PHASE 2 ──────────────────────────────────────────────────────
  'pdf-tools-for-realtors':             { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'pdf-tools-for-lawyers':              { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'pdf-tools-for-accountants':          { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'pdf-tools-for-teachers':             { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'pdf-tools-for-job-seekers':          { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'smallpdf-alternative-free':          { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'adobe-acrobat-alternative-free':     { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'pdf2go-alternative-free':            { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
  'sejda-alternative-free':             { cluster: 'general', primary: '', crossCluster: 'merge-pdf' },
  'best-free-pdf-compressor-online':    { cluster: 'general', primary: '', crossCluster: 'compress-pdf' },
};

// ─── ANCHOR TEXT VARIATIONS ──────────────────────────────────────────────────
// 4 anchor text patterns per tool. Rotated deterministically based on the
// calling page's slug hash — same page always gets the same anchor text,
// but different pages calling the same tool get varied anchors.

const ANCHOR_VARIATIONS: Record<string, string[]> = {
  'compress-pdf':     ['Compress PDF free', 'compress your PDF', 'reduce PDF file size', 'online PDF compressor'],
  'merge-pdf':        ['Merge PDF files', 'combine PDFs online', 'merge your PDFs free', 'PDF merger tool'],
  'split-pdf':        ['Split PDF pages', 'extract PDF pages', 'split PDF online free', 'PDF page splitter'],
  'delete-pdf-pages': ['Delete PDF pages', 'remove pages from PDF', 'trim your PDF', 'PDF page remover'],
  'pdf-to-word':      ['convert PDF to Word', 'PDF to Word free', 'editable Word from PDF', 'PDF to Word converter'],
  'word-to-pdf':      ['Word to PDF free', 'convert Word to PDF', 'make PDF from Word', 'DOCX to PDF'],
  'pdf-to-jpg':       ['PDF to JPG free', 'convert PDF to image', 'extract JPG from PDF', 'PDF to image tool'],
  'jpg-to-pdf':       ['JPG to PDF free', 'convert image to PDF', 'images to PDF online', 'photo to PDF'],
  'pdf-to-excel':     ['PDF to Excel online', 'convert PDF to spreadsheet', 'extract tables from PDF', 'PDF to XLSX'],
  'protect-pdf':      ['protect PDF with password', 'encrypt your PDF', 'password-protect PDF', 'secure PDF file'],
  'unlock-pdf':       ['remove PDF password', 'unlock PDF free', 'decrypt your PDF', 'PDF password remover'],
  'add-page-numbers': ['add page numbers to PDF', 'number PDF pages', 'paginate your PDF', 'PDF page numbering'],
  'excel-to-pdf':     ['Excel to PDF free', 'convert Excel to PDF', 'spreadsheet to PDF', 'XLSX to PDF'],
  'pdf-to-ppt':       ['PDF to PowerPoint free', 'convert PDF to PPT', 'PDF to editable presentation', 'PDF to slides'],
  'ppt-to-pdf':       ['PowerPoint to PDF free', 'convert PPT to PDF', 'presentation to PDF', 'PPTX to PDF'],
  'pdf-to-png':       ['PDF to PNG free', 'extract PNG from PDF', 'convert PDF to PNG image', 'PDF to HD PNG'],
  'png-to-pdf':       ['PNG to PDF free', 'convert PNG to PDF', 'image to PDF online', 'PNG document converter'],
};

/** Deterministic anchor text rotation — same (slug, tool) pair always → same anchor */
function pickAnchor(callerSlug: string, toolSlug: string): string {
  const variants = ANCHOR_VARIATIONS[toolSlug] ?? [toolSlug];
  const hash = callerSlug
    .split('')
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return variants[hash % variants.length];
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

/**
 * Returns 4 internal links for any Phase 1 slug:
 *  - parentTool    : hub tool page (homepage for general cluster)
 *  - relatedInCluster: 2 sibling pages from the same cluster
 *  - crossCluster  : 1 bridge link to a different cluster
 *  - conversionPage: same as parentTool (rendered separately as bottom CTA)
 *
 * @throws if the slug is not registered in CLUSTER_MAP
 */
export function getInternalLinks(currentSlug: string): InternalLinks {
  const meta = CLUSTER_MAP[currentSlug];
  if (!meta) {
    throw new Error(
      `[seo-linking] Slug "${currentSlug}" is not registered in CLUSTER_MAP. ` +
        `Add an entry before creating the page.`
    );
  }

  const { cluster, primary, crossCluster } = meta;

  // 1. Parent tool — homepage for general cluster pages
  const parentTool =
    primary === ''
      ? { text: 'Try All Free PDF Tools', href: '/' }
      : { text: pickAnchor(currentSlug, primary), href: `/${primary}` };

  // 2. Up to 2 sibling pages in the same cluster (excludes self)
  const relatedInCluster = Object.entries(CLUSTER_MAP)
    .filter(([slug, entry]) => slug !== currentSlug && entry.cluster === cluster)
    .slice(0, 2)
    .map(([slug]) => {
      const config = SEO_PAGES_CONFIG.find((p) => p.slug === slug);
      const toolForAnchor = config?.tool && config.tool !== 'general' ? config.tool : slug;
      return {
        text: pickAnchor(currentSlug, toolForAnchor),
        href: `/${slug}`,
      };
    });

  // 3. One cross-cluster link
  const crossClusterLink = {
    text: pickAnchor(currentSlug, crossCluster),
    href: `/${crossCluster}`,
  };

  return {
    parentTool,
    relatedInCluster,
    crossCluster: crossClusterLink,
    conversionPage: parentTool, // same target — different CTA copy applied at render
  };
}
