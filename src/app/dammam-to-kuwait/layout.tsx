import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/dammam-to-kuwait'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/hero-fallback-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC private transfer from Dammam to Kuwait City', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Dammam to Kuwait Taxi | Private Transfer to Kuwait City',
  description:
    'Private transfer from Dammam to Kuwait City across the Saudi-Kuwait border. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
  keywords: [
    'dammam to kuwait taxi', 'eastern province to kuwait taxi', 'dammam to kuwait city private transfer',
    'khobar to kuwait taxi', 'private car dammam to kuwait',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Cabs GMC',
    title: 'Dammam to Kuwait Taxi | Private Transfer to Kuwait City',
    description: 'Private transfer from Dammam to Kuwait City across the Saudi-Kuwait border. Advance-booked, custom-coordinated trip.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dammam to Kuwait Taxi | Private Transfer to Kuwait City',
    description: 'Private transfer from Dammam to Kuwait City across the Saudi-Kuwait border.',
    images: [OG_IMAGE.url],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Private Transfer: Dammam to Kuwait City',
  serviceType: 'International private ground transportation',
  provider: { '@id': 'https://saudicabsgmc.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Kuwait' },
  ],
  url: PAGE_URL,
  description: 'Custom, advance-booked private vehicle transfer from Dammam, Saudi Arabia to Kuwait City, across the Saudi-Kuwait land border. Vehicle, documentation and current rate confirmed directly with the traveler before booking.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Dammam', item: 'https://saudicabsgmc.com/dammam-taxi-service' },
    { '@type': 'ListItem', position: 3, name: 'Dammam to Kuwait', item: PAGE_URL },
  ],
}

export default function DammamToKuwaitLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
