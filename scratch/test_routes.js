const http = require('http');

const testSlugs = [
  'compress-pdf-to-50kb',               // Type A
  'how-to-compress-pdf-to-100kb',      // Type B
  'pdf-tools-for-realtors',            // Type C
  'smallpdf-alternative-free'          // Type D
];

function fetchPage(slug) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000/${slug}`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          html: data
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function runTests() {
  console.log('Starting local route verification tests on http://localhost:3000 ...\n');
  for (const slug of testSlugs) {
    console.log(`--------------------------------------------------`);
    console.log(`Testing Route: /${slug}`);
    try {
      const response = await fetchPage(slug);
      console.log(`Status Code: ${response.statusCode}`);
      if (response.statusCode !== 200) {
        console.error(`❌ FAILED: Status code is ${response.statusCode}`);
        continue;
      }
      
      const html = response.html;
      
      // 1. Check title tag
      const titleMatch = html.match(/<title>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'NOT FOUND';
      console.log(`Title: "${title}"`);
      
      // 2. Check meta description
      const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || html.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
      const desc = descMatch ? descMatch[1] : 'NOT FOUND';
      console.log(`Meta Description: "${desc}"`);

      // 3. Check canonical link
      const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i) || html.match(/<link\s+href="([^"]+)"\s+rel="canonical"/i);
      const canonical = canonicalMatch ? canonicalMatch[1] : 'NOT FOUND';
      console.log(`Canonical Link: "${canonical}"`);
      
      // 4. Check schema markup
      const ldJsonMatches = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
      console.log(`Found ${ldJsonMatches.length} application/ld+json script blocks.`);
      
      let parsedSchemas = [];
      for (const block of ldJsonMatches) {
        try {
          const parsed = JSON.parse(block.trim());
          parsedSchemas.push(parsed);
        } catch (e) {
          // ignore or note
        }
      }
      
      const schemaTypes = parsedSchemas.map(s => s['@type']);
      console.log(`Schema Types: ${schemaTypes.join(', ')}`);
      
      // Check for specific schemas
      const hasBreadcrumb = schemaTypes.includes('BreadcrumbList');
      const hasHowTo = schemaTypes.includes('HowTo');
      const hasFAQ = schemaTypes.includes('FAQPage');
      
      console.log(`Has Breadcrumb Schema: ${hasBreadcrumb ? '✅' : '❌'}`);
      if (slug.startsWith('how-to-')) {
        console.log(`Has HowTo Schema: ${hasHowTo ? '✅' : '❌'}`);
      }
      console.log(`Has FAQ Schema: ${hasFAQ ? '✅' : '❌'}`);
      
      // Check for internal links
      const linksCount = [...html.matchAll(/href="\/[^"]+"/g)].length;
      console.log(`Internal Links Count: ${linksCount}`);
      
      if (title !== 'NOT FOUND' && desc !== 'NOT FOUND' && canonical !== 'NOT FOUND' && hasBreadcrumb && hasFAQ) {
        console.log(`🟢 SUCCESS: Page /${slug} is fully optimized for SEO/AEO/GEO.`);
      } else {
        console.error(`❌ FAILED optimization checks for /${slug}`);
      }
    } catch (err) {
      console.error(`❌ ERROR fetching /${slug}:`, err.message);
    }
  }
}

runTests();
