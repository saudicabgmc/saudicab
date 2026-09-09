import type { Metadata } from 'next'
import BookingClient from './BookingClient'

export const metadata: Metadata = {
  title: 'Book a Taxi | Saudi Cabs GMC — Instant Fixed-Price Booking',
  description: 'Book a taxi or private driver anywhere in Saudi Arabia in minutes. Choose your vehicle, pickup, and destination — get an instant fixed price confirmed on WhatsApp.',
  alternates: { canonical: 'https://saudicabsgmc.com/booking' },
  openGraph: {
    title: 'Book a Taxi — Saudi Cabs GMC',
    description: 'Instant fixed-price taxi booking across Makkah, Madinah, Jeddah, and Taif. Confirmed on WhatsApp in minutes.',
    url: 'https://saudicabsgmc.com/booking',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Book a Taxi — Saudi Cabs GMC' }],
  },
}

const bookingPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/booking#webpage',
  name: 'Book a Taxi — Saudi Cabs GMC',
  description: 'Book a taxi or private driver anywhere in Saudi Arabia in minutes. Choose your vehicle, pickup, and destination — get an instant fixed price confirmed on WhatsApp.',
  url: 'https://saudicabsgmc.com/booking',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Book a Taxi', item: 'https://saudicabsgmc.com/booking' },
    ],
  },
}

export default function BookingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingPageSchema) }} />
      <BookingClient />
    </>
  )
}
