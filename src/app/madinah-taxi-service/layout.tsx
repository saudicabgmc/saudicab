import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/madinah-taxi-service'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/madinah-hero-saudi-cabs-gmc.webp', width: 736, height: 414, alt: "Private taxi service near Al-Masjid An-Nabawi, Madinah – Saudi Cabs GMC", type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Madinah Taxi Service | Private Airport & City Transfers',
  description:
    "Book a private Madinah taxi for airport transfers, Prophet's Mosque trips, Ziyarat and travel to Makkah, Jeddah or Taif. Route-based fares confirmed on WhatsApp.",
  keywords: [
    'taxi madinah', 'cab medina', 'taxi medina', 'madinah airport transfer',
    "prophet's mosque taxi", 'ziyarat madinah', 'private driver madinah',
    'madinah hotel transfer', 'saudi cabs madinah', 'quba mosque transfer',
    'تاكسي المدينة', 'سيارة أجرة المدينة المنورة', 'نقل مطار المدينة', 'زيارة المسجد النبوي',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Madinah Taxi Service | Private Airport & City Transfers',
    description: "Book a private Madinah taxi for airport transfers, Prophet's Mosque trips, Ziyarat and travel to Makkah, Jeddah or Taif. Route-based fares confirmed on WhatsApp.",
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madinah Taxi Service | Private Airport & City Transfers',
    description: "Book a private Madinah taxi for airport transfers, Prophet's Mosque trips, Ziyarat and travel to Makkah, Jeddah or Taif. Route-based fares confirmed on WhatsApp.",
    images: [OG_IMAGE.url],
  },
}

const madinahLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': `${PAGE_URL}#business`,
  name: 'Saudi Cabs GMC — Madinah Taxi Service',
  url: PAGE_URL,
  telephone: '+923097811785',
  email: 'info@saudicabsgmc.com',
  image: OG_IMAGE.url,
  description: "Private taxi and transport in Madinah: Madinah Airport transfers, Prophet's Mosque and hotel transfers, Ziyarat trips to Quba, Uhud and Al-Baqi, and intercity routes to Makkah, Jeddah and Taif. Route-based fares, 24/7 booking.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madinah',
    addressRegion: 'Madinah Province',
    addressCountry: 'SA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 24.5247, longitude: 39.5692 },
  areaServed: { '@type': 'City', name: 'Madinah', sameAs: 'https://www.wikidata.org/wiki/Q40083' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00', closes: '23:59',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Madinah taxi and transport services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Madinah Airport transfers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Prophet's Mosque and hotel transfers" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Madinah Ziyarat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Madinah to Makkah, Jeddah and Taif intercity transport' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family and group transport' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private driver in Madinah' } },
    ],
  },
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const madinahBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Madinah Taxi Service', item: PAGE_URL },
  ],
}

const madinahWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Madinah Taxi Service | Private Airport & City Transfers',
  url: PAGE_URL,
  inLanguage: 'en',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': `${PAGE_URL}#business` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.mk-hero-intro'] },
}

export default function MadinahLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(madinahLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(madinahBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(madinahWebPageSchema) }} />
      {children}
    </>
  )
}
