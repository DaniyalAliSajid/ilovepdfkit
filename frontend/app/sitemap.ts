import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
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
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
