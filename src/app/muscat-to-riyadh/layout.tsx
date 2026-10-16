import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/muscat-to-riyadh'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC GMC Yukon for the Muscat to Riyadh private transfer', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Muscat to Riyadh Taxi | Private Transfer via UAE',
  description:
    'Private transfer from Muscat, Oman to Riyadh, Saudi Arabia, transiting the UAE. A custom, feasibility-first trip with two border crossings. Contact us on WhatsApp to discuss your route before booking.',
  keywords: [
    'muscat to riyadh taxi', 'oman to riyadh private transfer', 'muscat to saudi arabia taxi',
    'private car muscat to riyadh', 'oman to saudi arabia road trip',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Cabs GMC',
    title: 'Muscat to Riyadh Taxi | Private Transfer via UAE',
    description: 'Private transfer from Muscat, Oman to Riyadh, Saudi Arabia, transiting the UAE. A custom, feasibility-first trip with two border crossings. Contact us on WhatsApp to discuss your route before booking.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muscat to Riyadh Taxi | Private Transfer via UAE',
    description: 'Private transfer from Muscat, Oman to Riyadh, Saudi Arabia, transiting the UAE.',
    images: [OG_IMAGE.url],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Private Transfer: Muscat, Oman to Riyadh, Saudi Arabia',
  serviceType: 'International private ground transportation',
  provider: { '@id': 'https://saudicabsgmc.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'Oman' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
  ],
  url: PAGE_URL,
  description: 'Custom, advance-booked private vehicle transfer from Muscat, Oman to Riyadh, Saudi Arabia, transiting the UAE with two international border crossings. Feasibility, vehicle, documentation and current rate confirmed directly with the traveler before booking.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Muscat to Riyadh', item: PAGE_URL },
  ],
}

export default function MuscatToRiyadhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
