import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airport Transfer Saudi Arabia | Jeddah, Madinah & Taif Airports',
  description:
    'Professional airport transfer service from all Saudi airports. Name-board pickup, flight tracking, fixed price. Jeddah (KAIA), Madinah (MED) & Taif airports. Book via WhatsApp.',
  keywords: [
    'airport transfer saudi arabia',
    'jeddah airport taxi',
    'madinah airport transfer',
    'kaia taxi',
    'airport pickup makkah',
    'نقل مطار السعودية',
    'تاكسي مطار جدة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/airport-transfer' },
  openGraph: {
    title: 'Airport Transfer Saudi Arabia – Saudi Cabs GMC',
    description: 'Name-board pickup, flight tracking & fixed prices across all Saudi airports.',
    url: 'https://saudicabsgmc.com/airport-transfer',
  },
}

const airportServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://saudicabsgmc.com/airport-transfer#service',
  name: 'Airport Transfer Saudi Arabia',
  serviceType: 'Airport Transfer',
  description: 'Professional airport transfer service from all Saudi airports. Name-board pickup, flight tracking, fixed price. Jeddah (KAIA), Madinah (MED) & Taif airports.',
  url: 'https://saudicabsgmc.com/airport-transfer',
  provider: { '@type': 'LocalBusiness', '@id': 'https://saudicabsgmc.com/#business', name: 'Saudi Cabs GMC' },
  areaServed: [
    { '@type': 'City', name: 'Makkah' },
    { '@type': 'City', name: 'Madinah' },
    { '@type': 'City', name: 'Jeddah' },
    { '@type': 'City', name: 'Taif' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '430', bestRating: '5', worstRating: '1' },
  offers: { '@type': 'Offer', priceCurrency: 'SAR', availability: 'https://schema.org/InStock' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Airport Transfer Vehicles',
    itemListElement: [
      { '@type': 'Offer', name: 'Sedan — 4 Seats', description: 'Toyota Camry sedan for airport transfers' },
      { '@type': 'Offer', name: 'Staria — 7 Seats', description: 'Hyundai Staria van for family airport transfers' },
      { '@type': 'Offer', name: 'GMC Yukon — VIP 7 Seats', description: 'Luxury GMC Yukon SUV for VIP airport transfers' },
    ],
  },
}

const airportBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Airport Transfer', item: 'https://saudicabsgmc.com/airport-transfer' },
  ],
}

const airportWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/airport-transfer#webpage',
  name: 'Airport Transfer Saudi Arabia | Jeddah, Madinah & Taif Airports',
  url: 'https://saudicabsgmc.com/airport-transfer',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airportServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airportBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airportWebPageSchema) }} />
      {children}
    </>
  )
}
