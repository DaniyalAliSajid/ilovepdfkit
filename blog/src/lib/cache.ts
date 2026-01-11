import fs from 'fs/promises';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), '.cache');
const CACHE_FILE = path.join(CACHE_DIR, 'wordpress-posts.json');
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getCachedData<T>(
    key: string,
    fetchFn: () => Promise<T>
): Promise<T> {
    try {
        await fs.mkdir(CACHE_DIR, { recursive: true });

        const stats = await fs.stat(CACHE_FILE);
        const age = Date.now() - stats.mtimeMs;

        if (age < CACHE_DURATION) {
            const cached = await fs.readFile(CACHE_FILE, 'utf-8');
            return JSON.parse(cached);
        }
    } catch {
        // Cache miss or error, fetch fresh data
    }

    const data = await fetchFn();
    await fs.writeFile(CACHE_FILE, JSON.stringify(data, null, 2));
    return data;
}
