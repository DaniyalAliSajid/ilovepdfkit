import rss from '@astrojs/rss';
import { getAllPosts, getExcerpt } from '../lib/wordpress';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const posts = await getAllPosts();

    return rss({
        title: 'iLovePDFKit Blog',
        description: 'Tips, guides, and updates about PDF conversion',
        site: context.site || 'https://ilovepdfkit.com',
        items: (posts || []).map(post => ({
            title: post.title.rendered,
            description: getExcerpt(post),
            link: `/blog/${post.slug}`,
            pubDate: new Date(post.date)
        }))
    });
}
