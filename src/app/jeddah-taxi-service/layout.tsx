import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/jeddah-taxi-service'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/jeddah-hero-saudi-cabs-gmc.webp', width: 750, height: 536, alt: 'King Fahd Fountain at sunset, Jeddah – Saudi Cabs GMC private taxi service', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Jeddah Taxi Service | Airport Transfers & Private Transport',
  description:
    'Book private Jeddah taxi and airport transfers to Makkah, Madinah and Taif. Choose Sedan, Hyundai Staria or GMC Yukon with route-based fares confirmed before booking.',
  keywords: [
    'taxi jeddah', 'cab jeddah', 'jeddah airport taxi', 'king abdulaziz airport transfer',
    'jeddah to makkah taxi', 'jeddah corniche cab', 'private driver jeddah',
    'jeddah airport pickup', 'saudi cabs jeddah', 'jeddah business transfer',
    'تاكسي جدة', 'سيارة أجرة جدة', 'نقل مطار الملك عبدالعزيز', 'تاكسي جدة مكة',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Jeddah Taxi Service | Airport Transfers & Private Transport',
    description: 'Book private Jeddah taxi and airport transfers to Makkah, Madinah and Taif. Choose Sedan, Hyundai Staria or GMC Yukon with route-based fares confirmed before booking.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeddah Taxi Service | Airport Transfers & Private Transport',
    description: 'Book private Jeddah taxi and airport transfers to Makkah, Madinah and Taif. Choose Sedan, Hyundai Staria or GMC Yukon with route-based fares confirmed before booking.',
    images: [OG_IMAGE.url],
  },
}

const jeddahLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': `${PAGE_URL}#business`,
  name: 'Saudi Cabs GMC — Jeddah Taxi Service',
  url: PAGE_URL,
  telephone: '+923097811785',
  email: 'info@saudicabsgmc.com',
  image: OG_IMAGE.url,
  description: 'Private taxi and transport in Jeddah: King Abdulaziz International Airport (KAIA) transfers, city rides, business and chauffeur services, and intercity routes to Makkah, Madinah and Taif. Route-based fares, 24/7 booking.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jeddah',
    addressRegion: 'Makkah Province',
    addressCountry: 'SA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 21.5433, longitude: 39.1728 },
  areaServed: { '@type': 'City', name: 'Jeddah', sameAs: 'https://www.wikidata.org/wiki/Q41261' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00', closes: '23:59',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Jeddah taxi and transport services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'King Abdulaziz Airport transfers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jeddah city transport' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jeddah to Makkah, Madinah and Taif intercity transport' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private driver and chauffeur service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family and group transport' } },
    ],
  },
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const jeddahBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Jeddah Taxi Service', item: PAGE_URL },
  ],
}

const jeddahWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Jeddah Taxi Service | Airport Transfers & Private Transport',
  url: PAGE_URL,
  inLanguage: 'en',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': `${PAGE_URL}#business` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.mk-hero-intro'] },
}

export default function JeddahLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jeddahLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jeddahBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jeddahWebPageSchema) }} />
      {children}
    </>
  )
}
