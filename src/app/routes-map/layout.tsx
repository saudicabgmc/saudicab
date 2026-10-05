import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/routes-map'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/hero-fallback-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC route network across Saudi Arabia', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Saudi Arabia Route Map | All Taxi Routes',
  description: 'Interactive map of Saudi Cabs GMC intercity and airport taxi routes across Makkah, Madinah, Jeddah, Taif, Riyadh and Dammam. Route-based fares confirmed before booking — explore any city or route to view details and book via WhatsApp.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Saudi Arabia Route Map | All Taxi Routes',
    description: 'Interactive map of Saudi Cabs GMC intercity and airport taxi routes across Makkah, Madinah, Jeddah, Taif, Riyadh and Dammam.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saudi Arabia Route Map | All Taxi Routes',
    description: 'Interactive map of Saudi Cabs GMC intercity and airport taxi routes across Makkah, Madinah, Jeddah, Taif, Riyadh and Dammam.',
    images: [OG_IMAGE.url],
  },
}

const routesMapBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Route Network Map', item: PAGE_URL },
  ],
}

export default function RoutesMapLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(routesMapBreadcrumbSchema) }} />
      {children}
    </>
  )
}
