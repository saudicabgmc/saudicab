import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Taxi Service in Madinah | Prophet's Mosque Transfer & Airport Cab",
  description:
    "Best taxi service in Madinah (Medina). Book cab to Prophet's Mosque, Madinah Airport, Quba, Uhud & Ziyarat tours. Fixed prices, 24/7. Book via WhatsApp now.",
  keywords: [
    'taxi madinah', 'cab medina', 'taxi medina', 'madinah airport transfer',
    "prophet's mosque taxi", 'ziyarat madinah', 'private driver madinah',
    'madinah hotel transfer', 'saudi cabs madinah', 'quba mosque transfer',
    'تاكسي المدينة', 'سيارة أجرة المدينة المنورة', 'نقل مطار المدينة', 'زيارة المسجد النبوي',
  ],
  alternates: {
    canonical: 'https://saudicabsgmc.com/madinah-taxi-service',
  },
  openGraph: {
    title: 'Taxi Service in Madinah – Saudi Cabs GMC',
    description: "Book taxi in Madinah. Prophet's Mosque, airport, Ziyarat tours. Fixed prices 24/7.",
    url: 'https://saudicabsgmc.com/madinah-taxi-service',
  },
}

const madinahLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': 'https://saudicabsgmc.com/madinah-taxi-service#business',
  name: 'Saudi Cabs GMC — Madinah Taxi Service',
  url: 'https://saudicabsgmc.com/madinah-taxi-service',
  telephone: '+966569487569',
  image: 'https://saudicabsgmc.com/location/madinah.webp',
  description: "Premium taxi service in Madinah. Airport transfers, Prophet's Mosque visits, Ziyarat tours, intercity routes to Makkah, Jeddah & Taif. Fixed prices 24/7.",
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
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '620', bestRating: '5', worstRating: '1' },
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const madinahBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Madinah Taxi Service', item: 'https://saudicabsgmc.com/madinah-taxi-service' },
  ],
}

const madinahWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/madinah-taxi-service#webpage',
  name: "Taxi Service in Madinah | Prophet's Mosque Transfer & Airport Cab",
  url: 'https://saudicabsgmc.com/madinah-taxi-service',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/madinah-taxi-service#business' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
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
