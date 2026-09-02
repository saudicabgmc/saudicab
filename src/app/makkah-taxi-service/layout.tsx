import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taxi Service in Makkah | Airport Transfer, Umrah & Intercity Cab',
  description:
    'Taxi service in Makkah (Mecca). Book cab to Holy Mosque, Jeddah Airport transfers, Umrah trips, Mina & Arafat. Fixed prices, 24/7. Book via WhatsApp now.',
  keywords: [
    'taxi makkah', 'cab mecca', 'taxi mecca', 'makkah airport transfer',
    'jeddah airport to makkah', 'umrah taxi', 'hajj transport makkah',
    'private driver makkah', 'makkah hotel transfer', 'saudi cabs makkah',
    'تاكسي مكة', 'سيارة أجرة مكة المكرمة', 'نقل مطار جدة مكة', 'تاكسي عمرة',
  ],
  alternates: {
    canonical: 'https://saudicabsgmc.com/makkah-taxi-service',
  },
  openGraph: {
    title: 'Taxi Service in Makkah – Saudi Cabs GMC',
    description: 'Book taxi in Makkah. Umrah transfers, Jeddah Airport, Holy Mosque. Fixed prices 24/7.',
    url: 'https://saudicabsgmc.com/makkah-taxi-service',
    images: [{ url: 'https://saudicabsgmc.com/location/makkah.webp', width: 1200, height: 630, alt: 'Taxi Service in Makkah – Saudi Cabs GMC' }],
  },
}

const makkahLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': 'https://saudicabsgmc.com/makkah-taxi-service#business',
  name: 'Saudi Cabs GMC — Makkah Taxi Service',
  url: 'https://saudicabsgmc.com/makkah-taxi-service',
  telephone: '+923097811785',
  image: 'https://saudicabsgmc.com/location/makkah.webp',
  description: 'Premium taxi service in Makkah. Airport transfers from Jeddah Airport (KAIA), Umrah & Hajj transport, intercity routes to Madinah, Jeddah & Taif. Fixed prices 24/7.',
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
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const makkahBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Makkah Taxi Service', item: 'https://saudicabsgmc.com/makkah-taxi-service' },
  ],
}

const makkahWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/makkah-taxi-service#webpage',
  name: 'Taxi Service in Makkah | Airport Transfer, Umrah & Intercity Cab',
  url: 'https://saudicabsgmc.com/makkah-taxi-service',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/makkah-taxi-service#business' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
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
