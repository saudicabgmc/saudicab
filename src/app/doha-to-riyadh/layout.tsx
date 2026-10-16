import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/doha-to-riyadh'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC GMC Yukon for the Doha to Riyadh private transfer', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Doha to Riyadh Taxi | Private Transfer to Saudi Arabia',
  description:
    'Private transfer from Doha, Qatar to Riyadh, Saudi Arabia, across the Qatar-Saudi border. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
  keywords: [
    'doha to riyadh taxi', 'qatar to riyadh private transfer', 'doha to saudi arabia taxi',
    'private car doha to riyadh', 'doha to riyadh road trip',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Cabs GMC',
    title: 'Doha to Riyadh Taxi | Private Transfer to Saudi Arabia',
    description: 'Private transfer from Doha, Qatar to Riyadh, Saudi Arabia, across the Qatar-Saudi border. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doha to Riyadh Taxi | Private Transfer to Saudi Arabia',
    description: 'Private transfer from Doha, Qatar to Riyadh, Saudi Arabia, across the Qatar-Saudi border.',
    images: [OG_IMAGE.url],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Private Transfer: Doha, Qatar to Riyadh, Saudi Arabia',
  serviceType: 'International private ground transportation',
  provider: { '@id': 'https://saudicabsgmc.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'Country', name: 'Saudi Arabia' },
  ],
  url: PAGE_URL,
  description: 'Custom, advance-booked private vehicle transfer from Doha, Qatar to Riyadh, Saudi Arabia, across the Qatar-Saudi land border. Vehicle, documentation and current rate confirmed directly with the traveler before booking.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Doha to Riyadh', item: PAGE_URL },
  ],
}

export default function DohaToRiyadhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
