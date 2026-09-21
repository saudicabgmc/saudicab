import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/makkah-taxi-service'
// Real dimensions of /public/hero/makkah-hero-saudi-cabs-gmc.webp (the old OG image was declared 1200x630 but is actually 600x400).
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/makkah-hero-saudi-cabs-gmc.webp', width: 2000, height: 1333, alt: 'Makkah taxi and private transport service – Saudi Cabs GMC', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Makkah Taxi & Private Transport Services',
  description:
    'Private Makkah taxi for Jeddah Airport transfers, Haram and hotel trips, Umrah, Hajj and Ziyarat. Fixed prices, 24/7, no advance payment. Book on WhatsApp.',
  keywords: [
    'taxi makkah', 'cab mecca', 'taxi mecca', 'makkah airport transfer',
    'jeddah airport to makkah', 'umrah taxi', 'hajj transport makkah',
    'private driver makkah', 'makkah hotel transfer', 'saudi cabs makkah',
    'تاكسي مكة', 'سيارة أجرة مكة المكرمة', 'نقل مطار جدة مكة', 'تاكسي عمرة',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Makkah Taxi & Private Transport Services – Saudi Cabs GMC',
    description: 'Private taxi in Makkah: Jeddah Airport transfers, Holy Mosque and hotel trips, Hajj, Umrah and Ziyarat. Fixed prices, 24/7.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makkah Taxi & Private Transport Services – Saudi Cabs GMC',
    description: 'Private taxi in Makkah: Jeddah Airport transfers, Holy Mosque and hotel trips, Hajj, Umrah and Ziyarat. Fixed prices, 24/7.',
    images: [OG_IMAGE.url],
  },
}

const makkahLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': `${PAGE_URL}#business`,
  name: 'Saudi Cabs GMC — Makkah Taxi Service',
  url: PAGE_URL,
  telephone: '+923097811785',
  email: 'info@saudicabsgmc.com',
  image: OG_IMAGE.url,
  description: 'Private taxi and transport in Makkah: Jeddah Airport (KAIA) transfers, Holy Mosque and hotel transfers, Hajj & Umrah transportation, Ziyarat trips and intercity routes to Madinah, Jeddah and Taif. Fixed prices, 24/7 booking.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Makkah',
    addressRegion: 'Makkah Province',
    addressCountry: 'SA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 21.3891, longitude: 39.8579 },
  areaServed: { '@type': 'City', name: 'Makkah', sameAs: 'https://www.wikidata.org/wiki/Q42788' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Makkah taxi and transport services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jeddah Airport to Makkah transfer' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Holy Mosque and hotel transfers in Makkah' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Makkah Ziyarat tours' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hajj and holy sites transport' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Makkah to Madinah private taxi' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Makkah to Jeddah taxi' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private driver in Makkah' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family and group transport' } },
    ],
  },
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const makkahBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Makkah Taxi Service', item: PAGE_URL },
  ],
}

const makkahWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Makkah Taxi & Private Transport Services',
  url: PAGE_URL,
  inLanguage: 'en',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': `${PAGE_URL}#business` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.mk-hero-intro'] },
}

export default function MakkahLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makkahLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makkahBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makkahWebPageSchema) }} />
      {children}
    </>
  )
}
