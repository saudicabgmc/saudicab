import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Saudi Cabs GMC — 24/7 Taxi Booking Support',
  description: 'Get in touch with Saudi Cabs GMC for taxi bookings, inquiries, and customer support. Available 24/7 via WhatsApp, phone, and email across Makkah, Madinah, Jeddah & Taif.',
  alternates: { canonical: 'https://saudicabsgmc.com/contact' },
  openGraph: {
    title: 'Contact Saudi Cabs GMC — 24/7 Taxi Booking',
    description: 'Reach us via WhatsApp, phone, or email for instant taxi bookings across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/contact',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Contact Saudi Cabs GMC — 24/7 Taxi Booking' }],
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://saudicabsgmc.com/contact#webpage',
  name: 'Contact Saudi Cabs GMC — 24/7 Taxi Booking Support',
  description: 'Get in touch with Saudi Cabs GMC for taxi bookings, inquiries, and customer support. Available 24/7 via WhatsApp, phone, and email across Makkah, Madinah, Jeddah & Taif.',
  url: 'https://saudicabsgmc.com/contact',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#business' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://saudicabsgmc.com/contact' },
    ],
  },
}

const localBusinessContactSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': 'https://saudicabsgmc.com/#business',
  name: 'Saudi Cabs GMC',
  url: 'https://saudicabsgmc.com',
  telephone: '+923097811785',
  email: 'info@saudicabsgmc.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SA',
    addressRegion: 'Makkah Province',
    addressLocality: 'Makkah',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 21.3891, longitude: 39.8579 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+923097811785',
      contactType: 'reservations',
      availableLanguage: ['English', 'Arabic'],
    },
    {
      '@type': 'ContactPoint',
      url: 'https://wa.me/923097811785',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    {
      '@type': 'ContactPoint',
      email: 'info@saudicabsgmc.com',
      contactType: 'customer service',
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessContactSchema) }} />
      <ContactClient />
    </>
  )
}
