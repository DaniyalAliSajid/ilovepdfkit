import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: [
            'https://ilovepdfkit.com/sitemap.xml',
            'https://ilovepdfkit.com/blog/sitemap.xml'
        ],
    }
}
