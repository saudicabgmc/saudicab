import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/taif-taxi-service'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/location/taif.webp', width: 1672, height: 941, alt: 'Al-Hada mountain road and rose fields at sunset, Taif – Saudi Cabs GMC private taxi service', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Taif Taxi Service | Airport, Mountain & Private Transfers',
  description:
    'Book private Taif transport for airport transfers, Al-Hada, Al-Shafa, sightseeing and trips to Makkah, Jeddah or Madinah. Choose your vehicle and confirm the fare on WhatsApp.',
  keywords: [
    'taxi taif', 'cab taif', 'taif airport transfer', 'shafa taxi',
    'hada mountain taxi', 'taif rose farms tour', 'private driver taif',
    'taif to jeddah cab', 'taif to makkah taxi', 'saudi cabs taif',
    'تاكسي الطائف', 'سيارة أجرة الطائف', 'نقل شفا هدا', 'جولة مزارع الورد الطائف',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Taif Taxi Service | Airport, Mountain & Private Transfers',
    description: 'Book private Taif transport for airport transfers, Al-Hada, Al-Shafa, sightseeing and trips to Makkah, Jeddah or Madinah. Choose your vehicle and confirm the fare on WhatsApp.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taif Taxi Service | Airport, Mountain & Private Transfers',
    description: 'Book private Taif transport for airport transfers, Al-Hada, Al-Shafa, sightseeing and trips to Makkah, Jeddah or Madinah. Choose your vehicle and confirm the fare on WhatsApp.',
    images: [OG_IMAGE.url],
  },
}

const taifLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': `${PAGE_URL}#business`,
  name: 'Saudi Cabs GMC — Taif Taxi Service',
  url: PAGE_URL,
  telephone: '+923097811785',
  email: 'info@saudicabsgmc.com',
  image: OG_IMAGE.url,
  description: 'Private taxi and transport in Taif: Taif Airport transfers, mountain trips to Al-Hada and Al-Shafa, rose-farm visits, and intercity routes to Makkah, Jeddah and Madinah. Route-based fares, 24/7 booking.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Taif',
    addressRegion: 'Makkah Province',
    addressCountry: 'SA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 21.2703, longitude: 40.4158 },
  areaServed: { '@type': 'City', name: 'Taif', sameAs: 'https://www.wikidata.org/wiki/Q200047' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00', closes: '23:59',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Taif taxi and transport services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taif Airport transfers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Al-Hada and Al-Shafa mountain trips' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taif rose farm visits' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taif to Makkah, Jeddah and Madinah intercity transport' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full-day private driver' } },
    ],
  },
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const taifBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Taif Taxi Service', item: PAGE_URL },
  ],
}

const taifWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Taif Taxi Service | Airport, Mountain & Private Transfers',
  url: PAGE_URL,
  inLanguage: 'en',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': `${PAGE_URL}#business` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.mk-hero-intro'] },
}

export default function TaifLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taifLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taifBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taifWebPageSchema) }} />
      {children}
    </>
  )
}
