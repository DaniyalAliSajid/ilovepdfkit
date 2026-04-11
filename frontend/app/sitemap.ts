import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/wordpress';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://ilovepdfkit.com'
    const routes = [
        '',
        '/about',
        '/contact',
        '/advertise-with-us',
        '/privacy-policy',
        '/terms-and-conditions',
        '/pdf-to-word',
        '/word-to-pdf',
        '/pdf-to-jpg',
        '/jpg-to-pdf',
        '/ppt-to-pdf',
        '/rotate-pdf',
        '/merge-pdf',
        '/pdf-to-ppt',
        '/add-page-numbers',
        '/delete-pdf-pages',
        '/excel-to-pdf',
        '/pdf-to-excel',
        '/pdf-to-png',
        '/png-to-pdf',
        '/protect-pdf',
        '/api-docs',
        '/blog',
    ]

    const staticUrls = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const posts = await getAllPosts();
    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.modified || post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticUrls, ...blogUrls];
}
