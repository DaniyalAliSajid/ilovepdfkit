const path = require('path');
const fs = require('fs');

const configContent = fs.readFileSync(path.join(__dirname, '../frontend/lib/seo-pages.config.ts'), 'utf8');
const linkingContent = fs.readFileSync(path.join(__dirname, '../frontend/lib/seo-linking.ts'), 'utf8');

// Match all slugs in config
const slugMatches = [...configContent.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
const uniqueSlugs = new Set(slugMatches);

console.log(`Total slugs in config: ${slugMatches.length}`);
console.log(`Unique slugs in config: ${uniqueSlugs.size}`);

if (slugMatches.length !== uniqueSlugs.size) {
  const dupe = slugMatches.find((s, i) => slugMatches.indexOf(s) !== i);
  console.error(`ERROR: Duplicate slug found: ${dupe}`);
  process.exit(1);
}

// Check that every slug has a folder app/[slug]/page.tsx
let missingPages = 0;
for (const slug of slugMatches) {
  const pagePath = path.join(__dirname, `../frontend/app/${slug}/page.tsx`);
  if (!fs.existsSync(pagePath)) {
    console.error(`MISSING PAGE: frontend/app/${slug}/page.tsx`);
    missingPages++;
  }
}

// Match all cluster map keys in linking
const clusterMapKeys = [...linkingContent.matchAll(/'([a-z0-9-]+)':\s*\{\s*cluster:/g)].map(m => m[1]);
console.log(`Total slugs in CLUSTER_MAP: ${clusterMapKeys.length}`);

let missingLinks = 0;
for (const slug of slugMatches) {
  if (!clusterMapKeys.includes(slug)) {
    console.error(`MISSING IN CLUSTER_MAP: ${slug}`);
    missingLinks++;
  }
}

if (missingPages === 0 && missingLinks === 0) {
  let phase1Count = 0;
  let phase2Count = 0;
  configContent.split('\n').forEach(line => {
    if (line.includes('slug:')) {
      if (line.includes('phase: 1')) phase1Count++;
      if (line.includes('phase: 2')) phase2Count++;
    }
  });
  console.log('✅ ALL VERIFICATIONS PASSED PERFECTLY!');
  console.log(`Total Programmatic SEO Catalog: ${slugMatches.length} Active Pages (${phase1Count} Phase 1 + ${phase2Count} Phase 2)`);
} else {
  console.error(`Validation failed with ${missingPages} missing pages and ${missingLinks} missing link keys.`);
  process.exit(1);
}
