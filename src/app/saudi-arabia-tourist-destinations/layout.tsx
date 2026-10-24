import type { Metadata } from 'next'
import { destinations } from '@/lib/touristDestinationsData'

const PAGE_URL = 'https://saudicabsgmc.com/saudi-arabia-tourist-destinations'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/hero-fallback-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC — tourist destinations in Saudi Arabia', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Tourist Destinations in Saudi Arabia & Nearby Countries',
  description:
    'A traveler guide to Saudi Arabia\'s top destinations — Makkah, Madinah, Jeddah, Taif, Riyadh, Diriyah, Dammam, AlUla and Abha — plus nearby Doha, Dubai, Abu Dhabi, Manama, Kuwait City, Muscat and Jordan, with private transport links where our service genuinely reaches.',
  keywords: [
    'saudi arabia tourist destinations', 'places to visit in saudi arabia', 'alula saudi arabia',
    'diriyah unesco', 'abha asir', 'taif rose season', 'riyadh attractions', 'jeddah al-balad',
    'saudi arabia travel guide', 'private transport saudi arabia tourist sites',
    'gcc tourist destinations', 'doha qatar travel', 'dubai uae travel', 'petra jordan travel',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Tourist Destinations in Saudi Arabia & Nearby Countries | Saudi Cabs GMC',
    description: 'A traveler guide to Saudi Arabia\'s top destinations and nearby countries, with private transport links where our service genuinely reaches.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tourist Destinations in Saudi Arabia & Nearby Countries | Saudi Cabs GMC',
    description: 'A traveler guide to Saudi Arabia\'s top destinations and nearby countries, with private transport links where our service genuinely reaches.',
    images: [OG_IMAGE.url],
  },
}

/*
 * The schema's destination list is derived directly from `destinations`
 * (the same data the page's cards render) rather than a separately
 * hand-maintained array, so the two can never drift apart. They
 * previously did: this file's own list described AlUla/Abha/Jordan with
 * placeholder self-links and, for Jordan, claimed "a confirmed
 * cross-border private transfer" — an overclaim with no supporting
 * evidence anywhere else in the codebase, now corrected at the source
 * in touristDestinationsData.ts (status changed to 'inquire' for all
 * three — fixed 2026-10-24).
 */
const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}#collection`,
  url: PAGE_URL,
  name: 'Tourist Destinations in Saudi Arabia & Nearby Countries',
  description: 'A traveler guide to Saudi Arabia\'s top destinations and nearby countries, with private transport links where Saudi Cabs GMC service genuinely reaches.',
  about: {
    '@type': 'ItemList',
    itemListElement: destinations.map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristDestination',
        name: d.name.en,
        description: d.tagline.en,
        url: d.serviceLinks[0] ? `https://saudicabsgmc.com${d.serviceLinks[0].href}` : PAGE_URL,
      },
    })),
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Tourist Destinations', item: PAGE_URL },
  ],
}

export default function TouristDestinationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
