import type { MetadataRoute } from 'next'
import { getAllVehicleSeoSlugs } from '@/lib/vehicleSeoData'
import { blogPosts } from '@/lib/blogData'

const BASE = 'https://saudicabsgmc.com'

// Last full content/link/schema audit of the pages below that don't carry their own
// tracked date (guide pages use their real dateModified; blog posts use their real
// date/dateModified). Update this when a genuine site-wide pass is done — not on
// every build/request, which is what defeats the point of lastmod as a freshness signal.
const SITE_LAST_VERIFIED = new Date('2026-09-07')

export default function sitemap(): MetadataRoute.Sitemap {
  // Programmatic vehicle SEO pages (~190 pages)
  const vehicleSeoEntries: MetadataRoute.Sitemap = getAllVehicleSeoSlugs().map(slug => ({
    url: `${BASE}/${slug}`,
    lastModified: SITE_LAST_VERIFIED,
    changeFrequency: 'monthly',
    priority: slug.startsWith('taxi-vehicles') || slug.startsWith('taxi-services') || slug.startsWith('cab-services') || slug.startsWith('airport-taxi')
      ? 0.8
      : slug.includes('7-seater') || slug.includes('jeddah-airport')
      ? 0.75
      : 0.65,
  }))

  // Blog posts — derived from blogPosts so the sitemap can't drift out of sync with
  // actual content, and each post carries its own real date/dateModified.
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [
    // Home
    { url: BASE, lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 1.0 },

    // City hub pages
    { url: `${BASE}/makkah-taxi-service`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/madinah-taxi-service`, lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/jeddah-taxi-service`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/taif-taxi-service`,    lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 0.9 },

    // City routes sub-pages
    { url: `${BASE}/makkah-taxi-service/routes`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/madinah-taxi-service/routes`, lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/jeddah-taxi-service/routes`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/taif-taxi-service/routes`,    lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },

    // Service hub pages
    { url: `${BASE}/airport-transfer`,      lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/hajj-umrah-transport`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/private-driver`,        lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 0.85 },

    // EEAT pages
    { url: `${BASE}/contact`,        lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/team`,           lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`,          lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`,            lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/booking`,        lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/reviews`,        lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/html-sitemap`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.5 },

    // Route pages — airport
    { url: `${BASE}/jeddah-airport-to-makkah`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/makkah-to-jeddah-airport`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/jeddah-airport-to-madinah`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/madinah-airport-taxi`,        lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },

    // Route pages — intercity
    { url: `${BASE}/makkah-to-madinah`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/madinah-to-makkah`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/jeddah-to-makkah`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/makkah-to-jeddah`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/jeddah-to-taif`,     lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/taif-to-jeddah`,     lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/makkah-to-taif`,     lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/madinah-to-jeddah`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/taif-to-madinah`,    lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },

    // New Intercity Routes
    { url: `${BASE}/riyadh-to-makkah`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/riyadh-to-madinah`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/riyadh-to-jeddah`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/makkah-to-riyadh`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/taif-airport-taxi`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/taif-to-makkah`,     lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/jeddah-to-madinah`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/dammam-to-makkah`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/makkah-to-dammam`,   lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/dammam-to-madinah`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },

    // Fleet pages
    { url: `${BASE}/toyota-camry-taxi`,    lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/hyundai-staria-taxi`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gmc-yukon-hire`,       lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.7 },

    // Ziyarat tours
    { url: `${BASE}/makkah-ziyarat-tour`,  lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/madinah-ziyarat-tour`, lastModified: SITE_LAST_VERIFIED, changeFrequency: 'monthly', priority: 0.75 },

    // Interactive Map
    { url: `${BASE}/routes-map`,         lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 0.85 },

    // Definitive Guides (LLM targets) — each carries its own real dateModified,
    // matching the value set on the page itself (see each page.tsx's dateModified prop).
    { url: `${BASE}/makkah-transport-guide`,    lastModified: new Date('2026-09-03'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/jeddah-airport-guide`,      lastModified: new Date('2026-09-03'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/taxi-prices-saudi-arabia`,  lastModified: new Date('2026-09-03'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/umrah-travel-guide`,        lastModified: new Date('2026-09-07'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/hajj-transport-faq`,        lastModified: new Date('2026-09-03'), changeFrequency: 'weekly', priority: 0.9 },

    // Legal
    { url: `${BASE}/privacy-policy`,       lastModified: SITE_LAST_VERIFIED, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/terms-and-conditions`, lastModified: SITE_LAST_VERIFIED, changeFrequency: 'yearly', priority: 0.4 },

    // Blog
    { url: `${BASE}/blog`, lastModified: SITE_LAST_VERIFIED, changeFrequency: 'weekly', priority: 0.8 },
    ...blogEntries,

    // Vehicle SEO programmatic pages (~190)
    ...vehicleSeoEntries,
  ]
}
