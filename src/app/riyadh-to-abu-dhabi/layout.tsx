import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/riyadh-to-abu-dhabi'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/hero-fallback-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC private transfer from Riyadh to Abu Dhabi, UAE', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Riyadh to Abu Dhabi Taxi | Private Transfer to the UAE Capital',
  description:
    'Private transfer from Riyadh to Abu Dhabi, UAE, across the Saudi-UAE border. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
  keywords: [
    'riyadh to abu dhabi taxi', 'private transfer riyadh to abu dhabi', 'saudi arabia to abu dhabi taxi',
    'riyadh abu dhabi road trip', 'private car riyadh to uae capital',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Cabs GMC',
    title: 'Riyadh to Abu Dhabi Taxi | Private Transfer to the UAE Capital',
    description: 'Private transfer from Riyadh to Abu Dhabi, UAE, across the Saudi-UAE border. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riyadh to Abu Dhabi Taxi | Private Transfer to the UAE Capital',
    description: 'Private transfer from Riyadh to Abu Dhabi, UAE, across the Saudi-UAE border.',
    images: [OG_IMAGE.url],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Private Transfer: Riyadh to Abu Dhabi, UAE',
  serviceType: 'International private ground transportation',
  provider: { '@id': 'https://saudicabsgmc.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  url: PAGE_URL,
  description: 'Custom, advance-booked private vehicle transfer from Riyadh, Saudi Arabia to Abu Dhabi, UAE, across the Saudi-UAE land border. Vehicle, documentation and current rate confirmed directly with the traveler before booking.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Riyadh', item: 'https://saudicabsgmc.com/riyadh-taxi-service' },
    { '@type': 'ListItem', position: 3, name: 'Riyadh to Abu Dhabi', item: PAGE_URL },
  ],
}

export default function RiyadhToAbuDhabiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
