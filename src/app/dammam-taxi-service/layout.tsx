import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/dammam-taxi-service'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/hero-fallback-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC private taxi service in Dammam', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Dammam Taxi & Private Transport Service',
  description:
    'Reliable private taxi and transport services in Dammam with Sedan, Hyundai Staria and GMC Yukon. City transfers and intercity trips to Makkah and Madinah with 24/7 WhatsApp booking.',
  keywords: [
    'taxi dammam', 'cab dammam', 'private driver dammam', 'dammam to makkah taxi',
    'dammam to madinah taxi', 'saudi cabs dammam', 'eastern province taxi',
    'تاكسي الدمام', 'سيارة أجرة الدمام', 'نقل خاص الدمام',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Dammam Taxi & Private Transport Service',
    description: 'Reliable private taxi and transport services in Dammam with Sedan, Hyundai Staria and GMC Yukon. City transfers and intercity trips to Makkah and Madinah with 24/7 WhatsApp booking.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dammam Taxi & Private Transport Service',
    description: 'Reliable private taxi and transport services in Dammam with Sedan, Hyundai Staria and GMC Yukon. City transfers and intercity trips to Makkah and Madinah with 24/7 WhatsApp booking.',
    images: [OG_IMAGE.url],
  },
}

const dammamLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': `${PAGE_URL}#business`,
  name: 'Saudi Cabs GMC — Dammam Taxi Service',
  url: PAGE_URL,
  telephone: '+923097811785',
  email: 'info@saudicabsgmc.com',
  image: OG_IMAGE.url,
  description: 'Private taxi and transport in Dammam: city and hotel transfers, airport pickups, business travel, and long-distance intercity routes to Makkah and Madinah. Fixed fares confirmed on WhatsApp.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dammam',
    addressRegion: 'Eastern Province',
    addressCountry: 'SA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 26.4207, longitude: 50.0888 },
  areaServed: { '@type': 'City', name: 'Dammam', sameAs: 'https://www.wikidata.org/wiki/Q182972' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00', closes: '23:59',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dammam taxi and transport services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam city and hotel transfers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam airport pickups and drop-offs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam to Makkah and Madinah intercity transport' } },
    ],
  },
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const dammamBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Dammam Taxi Service', item: PAGE_URL },
  ],
}

const dammamWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Dammam Taxi & Private Transport Service',
  url: PAGE_URL,
  inLanguage: 'en',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': `${PAGE_URL}#business` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.mk-hero-intro'] },
}

export default function DammamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dammamLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dammamBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dammamWebPageSchema) }} />
      {children}
    </>
  )
}
