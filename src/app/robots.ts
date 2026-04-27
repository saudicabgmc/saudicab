import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://saudicabsgmc.com/sitemap.xml',
    host: 'https://saudicabsgmc.com',
  }
}
