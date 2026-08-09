import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hajj & Umrah Transport Saudi Arabia | Makkah, Madinah & Holy Sites',
  description:
    'Dedicated Hajj and Umrah taxi service in Saudi Arabia. Transfers between Makkah, Madinah, Mina, Arafat & Muzdalifah. Licensed vehicles, 24/7 pilgrimage transport. Book via WhatsApp.',
  keywords: [
    'hajj transport',
    'umrah taxi',
    'makkah madinah taxi',
    'pilgrimage transport saudi arabia',
    'mina arafat transfer',
    'نقل الحج والعمرة',
    'تاكسي عمرة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/hajj-umrah-transport' },
  openGraph: {
    title: 'Hajj & Umrah Transport – Saudi Cabs GMC',
    description: 'Dedicated pilgrimage transfers between Makkah, Madinah & the holy sites.',
    url: 'https://saudicabsgmc.com/hajj-umrah-transport',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Hajj & Umrah Transport – Saudi Cabs GMC' }],
  },
}

const hajjServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://saudicabsgmc.com/hajj-umrah-transport#service',
  name: 'Hajj & Umrah Transport Saudi Arabia',
  serviceType: 'Pilgrimage Transport',
  description: 'Dedicated Hajj and Umrah taxi service. Transfers between Makkah, Madinah, Mina, Arafat & Muzdalifah. Licensed vehicles, 24/7 pilgrimage transport.',
  url: 'https://saudicabsgmc.com/hajj-umrah-transport',
  provider: { '@type': 'LocalBusiness', '@id': 'https://saudicabsgmc.com/#business', name: 'Saudi Cabs GMC' },
  areaServed: [
    { '@type': 'City', name: 'Makkah' },
    { '@type': 'City', name: 'Madinah' },
    { '@type': 'Place', name: 'Mina' },
    { '@type': 'Place', name: 'Arafat' },
    { '@type': 'Place', name: 'Muzdalifah' },
  ],
  offers: { '@type': 'Offer', priceCurrency: 'SAR', availability: 'https://schema.org/InStock' },
  audience: { '@type': 'Audience', audienceType: 'Hajj and Umrah pilgrims' },
}

const hajjBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Hajj & Umrah Transport', item: 'https://saudicabsgmc.com/hajj-umrah-transport' },
  ],
}

const hajjWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/hajj-umrah-transport#webpage',
  name: 'Hajj & Umrah Transport Saudi Arabia | Makkah, Madinah & Holy Sites',
  url: 'https://saudicabsgmc.com/hajj-umrah-transport',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hajjServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hajjBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hajjWebPageSchema) }} />
      {children}
    </>
  )
}
