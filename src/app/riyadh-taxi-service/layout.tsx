import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/riyadh-taxi-service'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/hero-fallback-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC private taxi service in Riyadh', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Riyadh Taxi & Private Transport Service',
  description:
    'Reliable private taxi and transport services in Riyadh, with airport transfers and intercity trips to Makkah, Madinah and Jeddah. Book via WhatsApp 24/7.',
  keywords: [
    'taxi riyadh', 'cab riyadh', 'private driver riyadh', 'riyadh to makkah taxi',
    'riyadh to madinah taxi', 'riyadh to jeddah taxi', 'saudi cabs riyadh',
    'تاكسي الرياض', 'سيارة أجرة الرياض', 'نقل خاص الرياض',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Riyadh Taxi & Private Transport Service | Saudi Cabs GMC',
    description: 'Reliable private taxi and transport services in Riyadh, with airport transfers and intercity trips to Makkah, Madinah and Jeddah. Book via WhatsApp 24/7.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riyadh Taxi & Private Transport Service | Saudi Cabs GMC',
    description: 'Reliable private taxi and transport services in Riyadh, with airport transfers and intercity trips to Makkah, Madinah and Jeddah. Book via WhatsApp 24/7.',
    images: [OG_IMAGE.url],
  },
}

const riyadhLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': `${PAGE_URL}#business`,
  name: 'Saudi Cabs GMC — Riyadh Taxi Service',
  url: PAGE_URL,
  telephone: '+923097811785',
  email: 'info@saudicabsgmc.com',
  image: OG_IMAGE.url,
  description: 'Private taxi and transport in Riyadh: city and hotel transfers, airport pickups, business travel, and long-distance intercity routes to Makkah, Madinah and Jeddah. Fixed fares confirmed on WhatsApp.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressRegion: 'Riyadh Province',
    addressCountry: 'SA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 24.7136, longitude: 46.6753 },
  areaServed: { '@type': 'City', name: 'Riyadh', sameAs: 'https://www.wikidata.org/wiki/Q3806' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00', closes: '23:59',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Riyadh taxi and transport services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Riyadh city and hotel transfers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Riyadh airport pickups and drop-offs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Riyadh to Makkah, Madinah and Jeddah intercity transport' } },
    ],
  },
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const riyadhBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Riyadh Taxi Service', item: PAGE_URL },
  ],
}

const riyadhWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Riyadh Taxi & Private Transport Service | Saudi Cabs GMC',
  url: PAGE_URL,
  inLanguage: 'en',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': `${PAGE_URL}#business` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.mk-hero-intro'] },
}

export default function RiyadhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(riyadhLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(riyadhBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(riyadhWebPageSchema) }} />
      {children}
    </>
  )
}
