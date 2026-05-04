import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Driver Saudi Arabia | Chauffeur in Makkah, Madinah, Jeddah & Taif',
  description:
    'Book a private driver or chauffeur in Saudi Arabia. Half-day, full-day and multi-day hire. Makkah, Madinah, Jeddah and Taif. Professional, bilingual, formally dressed. Fixed price.',
  keywords: [
    'private driver saudi arabia',
    'chauffeur makkah',
    'personal driver jeddah',
    'driver for hire madinah',
    'سائق خاص السعودية',
    'شوفير مكة',
    'سائق خاص جدة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/private-driver' },
  openGraph: {
    title: 'Private Driver Saudi Arabia – Saudi Cabs GMC',
    description:
      'Professional chauffeur hire — half-day, full-day, multi-day across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/private-driver',
  },
}

const privateDriverServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://saudicabsgmc.com/private-driver#service',
  name: 'Private Driver Saudi Arabia — Chauffeur Hire',
  serviceType: 'Private Driver',
  description: 'Book a professional private driver or chauffeur in Saudi Arabia. Half-day, full-day and multi-day hire. Makkah, Madinah, Jeddah and Taif. Formally dressed, bilingual, fixed price.',
  url: 'https://saudicabsgmc.com/private-driver',
  provider: { '@type': 'LocalBusiness', '@id': 'https://saudicabsgmc.com/#business', name: 'Saudi Cabs GMC' },
  areaServed: [
    { '@type': 'City', name: 'Makkah' },
    { '@type': 'City', name: 'Madinah' },
    { '@type': 'City', name: 'Jeddah' },
    { '@type': 'City', name: 'Taif' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '210', bestRating: '5', worstRating: '1' },
  offers: [
    { '@type': 'Offer', name: 'Half-Day Private Driver (4 hours)', priceCurrency: 'SAR', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Full-Day Private Driver (8 hours)', priceCurrency: 'SAR', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Multi-Day Private Driver', priceCurrency: 'SAR', availability: 'https://schema.org/InStock' },
  ],
}

const privateDriverBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Private Driver', item: 'https://saudicabsgmc.com/private-driver' },
  ],
}

const privateDriverWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/private-driver#webpage',
  name: 'Private Driver Saudi Arabia | Chauffeur in Makkah, Madinah, Jeddah & Taif',
  url: 'https://saudicabsgmc.com/private-driver',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privateDriverServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privateDriverBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privateDriverWebPageSchema) }} />
      {children}
    </>
  )
}
