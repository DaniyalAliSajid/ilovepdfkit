const WP_BASE_URL = import.meta.env.WP_BASE_URL || 'https://cms.ilovepdfkit.com';
const WP_API_URL = `${WP_BASE_URL}/wp-json/wp/v2`;

export interface WPPost {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    modified: string;
    _embedded?: {
        author?: Array<{
            name: string;
            avatar_urls?: { [key: string]: string };
        }>;
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
            media_details?: { width: number; height: number };
        }>;
        'wp:term'?: Array<Array<{
            name: string;
            slug: string;
        }>>;
    };
}

export async function getAllPosts(): Promise<WPPost[]> {
    try {
        const response = await fetch(`${WP_API_URL}/posts?_embed&per_page=100&status=publish`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    try {
        const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);
        if (!response.ok) return null;
        const posts = await response.json();
        return posts[0] || null;
    } catch (error) {
        console.error(`Failed to fetch post ${slug}:`, error);
        return null;
    }
}

export function stripHTML(html: string): string {
    return html
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .trim();
}

export function getExcerpt(post: WPPost, maxLength = 160): string {
    const excerpt = stripHTML(post.excerpt?.rendered || post.content?.rendered || '');
    return excerpt.length > maxLength
        ? excerpt.substring(0, maxLength).trim() + '...'
        : excerpt;
}

export function getFeaturedImage(post: WPPost): { url: string; alt: string } | null {
    const media = post._embedded?.['wp:featuredmedia']?.[0];
    if (!media?.source_url) return null;
    return {
        url: media.source_url,
        alt: media.alt_text || post.title.rendered
    };
}

export function getAuthor(post: WPPost): { name: string; avatar?: string } {
    const author = post._embedded?.author?.[0];
    return {
        name: author?.name || 'iLovePDFKit',
        avatar: author?.avatar_urls?.['96']
    };
}

export function getCategories(post: WPPost): string[] {
    const terms = post._embedded?.['wp:term']?.[0] || [];
    return terms.map(term => term.name);
}
