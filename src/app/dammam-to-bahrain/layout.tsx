import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/dammam-to-bahrain'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/hero-fallback-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC private transfer from Dammam to Bahrain', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Dammam to Bahrain Taxi | Private Transfer via King Fahd Causeway',
  description:
    'Private transfer from Dammam or Khobar to Manama, Bahrain via the King Fahd Causeway. Advance-booked, custom-coordinated trip. Contact us on WhatsApp to confirm feasibility and current rates.',
  keywords: [
    'dammam to bahrain taxi', 'khobar to bahrain taxi', 'king fahd causeway taxi',
    'dammam to manama private transfer', 'eastern province to bahrain taxi',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Cabs GMC',
    title: 'Dammam to Bahrain Taxi | Private Transfer via King Fahd Causeway',
    description: 'Private transfer from Dammam or Khobar to Manama, Bahrain via the King Fahd Causeway. Advance-booked, custom-coordinated trip.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dammam to Bahrain Taxi | Private Transfer via King Fahd Causeway',
    description: 'Private transfer from Dammam or Khobar to Manama, Bahrain via the King Fahd Causeway.',
    images: [OG_IMAGE.url],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Private Transfer: Dammam to Manama, Bahrain',
  serviceType: 'International private ground transportation',
  provider: { '@id': 'https://saudicabsgmc.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Bahrain' },
  ],
  url: PAGE_URL,
  description: 'Custom, advance-booked private vehicle transfer from Dammam/Khobar, Saudi Arabia to Manama, Bahrain via the King Fahd Causeway. Vehicle, documentation and current rate confirmed directly with the traveler before booking.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Dammam', item: 'https://saudicabsgmc.com/dammam-taxi-service' },
    { '@type': 'ListItem', position: 3, name: 'Dammam to Bahrain', item: PAGE_URL },
  ],
}

export default function DammamToBahrainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
