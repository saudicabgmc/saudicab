import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/riyadh-to-doha'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/riyadh-to-doha-hero-saudi-cabs-gmc.webp', width: 1400, height: 788, alt: 'GMC Yukon with the Doha, Qatar skyline at sunset — Saudi Cabs GMC Riyadh to Doha private transfer', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Riyadh to Doha Taxi | Private Transfer to Qatar',
  description:
    'Private transfer from Riyadh to Doha, Qatar, across the Saudi-Qatar border. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
  keywords: [
    'riyadh to doha taxi', 'riyadh to qatar private transport', 'riyadh to doha private transfer',
    'saudi arabia to qatar taxi', 'riyadh doha road trip', 'private car riyadh to qatar',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Cabs GMC',
    title: 'Riyadh to Doha Taxi | Private Transfer to Qatar',
    description: 'Private transfer from Riyadh to Doha, Qatar, across the Saudi-Qatar border. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riyadh to Doha Taxi | Private Transfer to Qatar',
    description: 'Private transfer from Riyadh to Doha, Qatar, across the Saudi-Qatar border. Advance-booked, custom-coordinated trip.',
    images: [OG_IMAGE.url],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Private Transfer: Riyadh to Doha, Qatar',
  serviceType: 'International private ground transportation',
  provider: { '@id': 'https://saudicabsgmc.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Qatar' },
  ],
  url: PAGE_URL,
  description: 'Custom, advance-booked private vehicle transfer from Riyadh, Saudi Arabia to Doha, Qatar, across the Saudi-Qatar land border. Vehicle, documentation and current rate confirmed directly with the traveler before booking.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Riyadh', item: 'https://saudicabsgmc.com/riyadh-taxi-service' },
    { '@type': 'ListItem', position: 3, name: 'Riyadh to Doha', item: PAGE_URL },
  ],
}

export default function RiyadhToDohaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
