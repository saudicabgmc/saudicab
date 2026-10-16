import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/dubai-to-riyadh'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/fleet/gmc-yukon-exterior-front-grille-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC GMC Yukon for the Dubai to Riyadh private transfer', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Dubai to Riyadh Taxi | Private Transfer to Saudi Arabia',
  description:
    'Private transfer from Dubai, UAE to Riyadh, Saudi Arabia, across the Saudi-UAE border. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
  keywords: [
    'dubai to riyadh taxi', 'uae to riyadh private transfer', 'dubai to saudi arabia taxi',
    'private car dubai to riyadh', 'dubai to riyadh road trip',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Cabs GMC',
    title: 'Dubai to Riyadh Taxi | Private Transfer to Saudi Arabia',
    description: 'Private transfer from Dubai, UAE to Riyadh, Saudi Arabia, across the Saudi-UAE border. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai to Riyadh Taxi | Private Transfer to Saudi Arabia',
    description: 'Private transfer from Dubai, UAE to Riyadh, Saudi Arabia, across the Saudi-UAE border.',
    images: [OG_IMAGE.url],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Private Transfer: Dubai, UAE to Riyadh, Saudi Arabia',
  serviceType: 'International private ground transportation',
  provider: { '@id': 'https://saudicabsgmc.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
  ],
  url: PAGE_URL,
  description: 'Custom, advance-booked private vehicle transfer from Dubai, UAE to Riyadh, Saudi Arabia, across the Saudi-UAE land border. Vehicle, documentation and current rate confirmed directly with the traveler before booking.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Dubai to Riyadh', item: PAGE_URL },
  ],
}

export default function DubaiToRiyadhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
