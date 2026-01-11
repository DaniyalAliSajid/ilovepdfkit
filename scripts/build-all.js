import { execSync } from 'child_process';
import { cpSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');

console.log('🚀 Building iLovePDFKit...');
console.log('📍 Current Directory:', process.cwd());
console.log('🏠 Project Root:', root);

try {
    const isWindows = process.platform === 'win32';
    const shell = isWindows ? 'powershell.exe' : true;
    const options = { stdio: 'inherit', cwd: root, shell };

    // 1. Build Astro blog
    console.log('📝 Installing blog dependencies...');
    execSync('npm install', { ...options, cwd: join(root, 'blog') });
    console.log('📝 Building blog content...');
    execSync('npm run build', { ...options, cwd: join(root, 'blog') });

    // 2. Build Next.js frontend
    console.log('\n🎨 Installing frontend dependencies...');
    execSync('npm install', { ...options, cwd: join(root, 'frontend') });
    console.log('\n🎨 Building main site frontend...');
    execSync('npm run build', { ...options, cwd: join(root, 'frontend') });

    // 3. Copy blog to frontend output
    console.log('\n📦 Merging outputs...');
    const blogDist = join(root, 'blog', 'dist');
    const frontendOut = join(root, 'frontend', 'out');
    const blogOut = join(frontendOut, 'blog');

    mkdirSync(blogOut, { recursive: true });
    cpSync(blogDist, blogOut, { recursive: true });

    console.log('\n✅ Build complete!');
} catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
}
