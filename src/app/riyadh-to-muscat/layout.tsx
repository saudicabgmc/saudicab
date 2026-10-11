import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/riyadh-to-muscat'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/hero-fallback-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC private transfer from Riyadh to Muscat, Oman', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Riyadh to Muscat Taxi | Private Transfer to Oman',
  description:
    'Private transfer from Riyadh to Muscat, Oman, typically routed via the UAE. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to discuss feasibility for your journey.',
  keywords: [
    'riyadh to muscat taxi', 'riyadh to oman private transfer', 'saudi arabia to oman taxi',
    'private car riyadh to muscat',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Cabs GMC',
    title: 'Riyadh to Muscat Taxi | Private Transfer to Oman',
    description: 'Private transfer from Riyadh to Muscat, Oman, typically routed via the UAE. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to discuss feasibility for your journey.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riyadh to Muscat Taxi | Private Transfer to Oman',
    description: 'Private transfer from Riyadh to Muscat, Oman, typically routed via the UAE.',
    images: [OG_IMAGE.url],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Private Transfer: Riyadh to Muscat, Oman',
  serviceType: 'International private ground transportation',
  provider: { '@id': 'https://saudicabsgmc.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Oman' },
  ],
  url: PAGE_URL,
  description: 'Custom, individually-assessed private vehicle transfer request from Riyadh, Saudi Arabia to Muscat, Oman, typically routed via the UAE. Feasibility, documentation and current rate are confirmed directly with the traveler before any booking is accepted.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Riyadh', item: 'https://saudicabsgmc.com/riyadh-taxi-service' },
    { '@type': 'ListItem', position: 3, name: 'Riyadh to Muscat', item: PAGE_URL },
  ],
}

export default function RiyadhToMuscatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
