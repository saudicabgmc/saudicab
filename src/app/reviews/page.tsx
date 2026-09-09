import type { Metadata } from 'next'
import ReviewsClient from './ReviewsClient'

export const metadata: Metadata = {
  title: 'Reviews | Saudi Cabs GMC — What Our Passengers Say',
  description: 'Read what passengers say about Saudi Cabs GMC — fixed-price taxi and private driver service across Makkah, Madinah, Jeddah, and Taif.',
  alternates: { canonical: 'https://saudicabsgmc.com/reviews' },
  openGraph: {
    title: 'Passenger Reviews — Saudi Cabs GMC',
    description: 'Read what passengers say about booking a taxi or private driver with Saudi Cabs GMC.',
    url: 'https://saudicabsgmc.com/reviews',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Reviews — Saudi Cabs GMC' }],
  },
}

const reviewsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://saudicabsgmc.com/reviews#webpage',
  name: 'Passenger Reviews — Saudi Cabs GMC',
  description: 'Read what passengers say about Saudi Cabs GMC — fixed-price taxi and private driver service across Makkah, Madinah, Jeddah, and Taif.',
  url: 'https://saudicabsgmc.com/reviews',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://saudicabsgmc.com/reviews' },
    ],
  },
}

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsPageSchema) }} />
      <ReviewsClient />
    </>
  )
}
