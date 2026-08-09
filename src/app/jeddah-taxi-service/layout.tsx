import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taxi Service in Jeddah | King Abdulaziz Airport Transfer & Cab',
  description:
    'Best taxi service in Jeddah. Book cab from King Abdulaziz International Airport, Corniche, malls & business districts. Fixed prices, 24/7. Book via WhatsApp now.',
  keywords: [
    'taxi jeddah', 'cab jeddah', 'jeddah airport taxi', 'king abdulaziz airport transfer',
    'jeddah to makkah taxi', 'jeddah corniche cab', 'private driver jeddah',
    'jeddah airport pickup', 'saudi cabs jeddah', 'jeddah business transfer',
    'تاكسي جدة', 'سيارة أجرة جدة', 'نقل مطار الملك عبدالعزيز', 'تاكسي جدة مكة',
  ],
  alternates: {
    canonical: 'https://saudicabsgmc.com/jeddah-taxi-service',
  },
  openGraph: {
    title: 'Taxi Service in Jeddah – Saudi Cabs GMC',
    description: 'Book taxi in Jeddah. Airport transfers, Corniche, Makkah. Fixed prices 24/7.',
    url: 'https://saudicabsgmc.com/jeddah-taxi-service',
    images: [{ url: 'https://saudicabsgmc.com/location/jeddah.webp', width: 1200, height: 630, alt: 'Taxi Service in Jeddah – Saudi Cabs GMC' }],
  },
}

const jeddahLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': 'https://saudicabsgmc.com/jeddah-taxi-service#business',
  name: 'Saudi Cabs GMC — Jeddah Taxi Service',
  url: 'https://saudicabsgmc.com/jeddah-taxi-service',
  telephone: '+966569487569',
  image: 'https://saudicabsgmc.com/location/jeddah.webp',
  description: 'Premium taxi service in Jeddah. King Abdulaziz Airport (KAIA) transfers, Corniche, business districts, intercity routes to Makkah, Madinah & Taif. Fixed prices 24/7.',
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
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const jeddahBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Jeddah Taxi Service', item: 'https://saudicabsgmc.com/jeddah-taxi-service' },
  ],
}

const jeddahWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/jeddah-taxi-service#webpage',
  name: 'Taxi Service in Jeddah | King Abdulaziz Airport Transfer & Cab',
  url: 'https://saudicabsgmc.com/jeddah-taxi-service',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/jeddah-taxi-service#business' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
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
