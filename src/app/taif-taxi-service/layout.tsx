import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taxi Service in Taif | Mountain Tours, Shafa & Airport Transfer',
  description:
    'Best taxi service in Taif. Book cab to Shafa, Hada, rose farms, Taif Airport & mountain resorts. Fixed prices, 24/7. Book via WhatsApp now.',
  keywords: [
    'taxi taif', 'cab taif', 'taif airport transfer', 'shafa taxi',
    'hada mountain taxi', 'taif rose farms tour', 'private driver taif',
    'taif to jeddah cab', 'taif to makkah taxi', 'saudi cabs taif',
    'تاكسي الطائف', 'سيارة أجرة الطائف', 'نقل شفا هدا', 'جولة مزارع الورد الطائف',
  ],
  alternates: {
    canonical: 'https://saudicabsgmc.com/taif-taxi-service',
  },
  openGraph: {
    title: 'Taxi Service in Taif – Saudi Cabs GMC',
    description: 'Book taxi in Taif. Shafa, Hada, rose farms, airport transfers. Fixed prices 24/7.',
    url: 'https://saudicabsgmc.com/taif-taxi-service',
    images: [{ url: 'https://saudicabsgmc.com/location/taif.webp', width: 1200, height: 630, alt: 'Taxi Service in Taif – Saudi Cabs GMC' }],
  },
}

const taifLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': 'https://saudicabsgmc.com/taif-taxi-service#business',
  name: 'Saudi Cabs GMC — Taif Taxi Service',
  url: 'https://saudicabsgmc.com/taif-taxi-service',
  telephone: '+923097811785',
  image: 'https://saudicabsgmc.com/location/taif.webp',
  description: 'Premium taxi service in Taif. Mountain tours to Shafa & Hada, rose farm visits, Taif Airport transfers, intercity routes to Makkah & Jeddah. Fixed prices 24/7.',
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
  parentOrganization: { '@id': 'https://saudicabsgmc.com/#organization' },
}

const taifBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Taif Taxi Service', item: 'https://saudicabsgmc.com/taif-taxi-service' },
  ],
}

const taifWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/taif-taxi-service#webpage',
  name: 'Taxi Service in Taif | Mountain Tours, Shafa & Airport Transfer',
  url: 'https://saudicabsgmc.com/taif-taxi-service',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/taif-taxi-service#business' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
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
