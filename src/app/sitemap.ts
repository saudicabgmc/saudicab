import type { MetadataRoute } from 'next'
import { getAllVehicleSeoSlugs } from '@/lib/vehicleSeoData'

const BASE = 'https://saudicabsgmc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Programmatic vehicle SEO pages (~190 pages)
  const vehicleSeoEntries: MetadataRoute.Sitemap = getAllVehicleSeoSlugs().map(slug => ({
    url: `${BASE}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: slug.startsWith('taxi-vehicles') || slug.startsWith('taxi-services') || slug.startsWith('cab-services') || slug.startsWith('airport-taxi')
      ? 0.8
      : slug.includes('7-seater') || slug.includes('jeddah-airport')
      ? 0.75
      : 0.65,
  }))

  return [
    // Home
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },

    // City hub pages
    { url: `${BASE}/makkah-taxi-service`,  lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/madinah-taxi-service`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/jeddah-taxi-service`,  lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/taif-taxi-service`,    lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // City routes sub-pages
    { url: `${BASE}/makkah-taxi-service/routes`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/madinah-taxi-service/routes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/jeddah-taxi-service/routes`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/taif-taxi-service/routes`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Service hub pages
    { url: `${BASE}/airport-transfer`,      lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/hajj-umrah-transport`,  lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/private-driver`,        lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },

    // EEAT pages
    { url: `${BASE}/contact`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/team`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/booking`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/reviews`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/html-sitemap`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },

    // Route pages — airport
    { url: `${BASE}/jeddah-airport-to-makkah`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/makkah-to-jeddah-airport`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/jeddah-airport-to-madinah`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/madinah-airport-taxi`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Route pages — intercity
    { url: `${BASE}/makkah-to-madinah`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/madinah-to-makkah`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/jeddah-to-makkah`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/makkah-to-jeddah`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/jeddah-to-taif`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/taif-to-jeddah`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/makkah-to-taif`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/madinah-to-jeddah`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/taif-to-madinah`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },

    // New Intercity Routes
    { url: `${BASE}/riyadh-to-makkah`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/riyadh-to-madinah`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/riyadh-to-jeddah`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/makkah-to-riyadh`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/taif-airport-taxi`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/taif-to-makkah`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/jeddah-to-madinah`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/dammam-to-makkah`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/makkah-to-dammam`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/dammam-to-madinah`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Fleet pages
    { url: `${BASE}/toyota-camry-taxi`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/hyundai-staria-taxi`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gmc-yukon-hire`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Ziyarat tours
    { url: `${BASE}/makkah-ziyarat-tour`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/madinah-ziyarat-tour`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },

    // Interactive Map
    { url: `${BASE}/routes-map`,         lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },

    // Definitive Guides (LLM targets)
    { url: `${BASE}/makkah-transport-guide`,    lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/jeddah-airport-guide`,      lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/taxi-prices-saudi-arabia`,  lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/umrah-travel-guide`,        lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/hajj-transport-faq`,        lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // Legal
    { url: `${BASE}/privacy-policy`,       lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },

    // Blog
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/blog/how-to-travel-jeddah-airport-to-makkah`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/best-places-makkah-ziyarat`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/haramain-train-vs-private-taxi-makkah-madinah`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/hajj-transport-guide-2026`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/riyadh-to-makkah-complete-guide`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/gmc-yukon-vs-staria-family-umrah`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/hajj-2026-transport-makkah-traffic-tips`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },

    // Vehicle SEO programmatic pages (~190)
    ...vehicleSeoEntries,
  ]
}

