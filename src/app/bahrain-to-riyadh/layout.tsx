import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/bahrain-to-riyadh'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC GMC Yukon for the Bahrain to Riyadh private transfer', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Bahrain to Riyadh Taxi | Private Transfer via King Fahd Causeway',
  description:
    'Private transfer from Bahrain to Riyadh, Saudi Arabia, via the King Fahd Causeway. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
  keywords: [
    'bahrain to riyadh taxi', 'manama to riyadh private transfer', 'king fahd causeway taxi to riyadh',
    'bahrain to saudi arabia taxi', 'private car bahrain to riyadh',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Cabs GMC',
    title: 'Bahrain to Riyadh Taxi | Private Transfer via King Fahd Causeway',
    description: 'Private transfer from Bahrain to Riyadh, Saudi Arabia, via the King Fahd Causeway. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bahrain to Riyadh Taxi | Private Transfer via King Fahd Causeway',
    description: 'Private transfer from Bahrain to Riyadh, Saudi Arabia, via the King Fahd Causeway.',
    images: [OG_IMAGE.url],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Private Transfer: Bahrain to Riyadh, Saudi Arabia',
  serviceType: 'International private ground transportation',
  provider: { '@id': 'https://saudicabsgmc.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'Bahrain' },
    { '@type': 'Country', name: 'Saudi Arabia' },
  ],
  url: PAGE_URL,
  description: 'Custom, advance-booked private vehicle transfer from Bahrain to Riyadh, Saudi Arabia, via the King Fahd Causeway. Vehicle, documentation and current rate confirmed directly with the traveler before booking.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Bahrain to Riyadh', item: PAGE_URL },
  ],
}

export default function BahrainToRiyadhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
