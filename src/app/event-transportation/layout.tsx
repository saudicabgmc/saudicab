import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/event-transportation'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC GMC Yukon for event and wedding guest transportation', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Event Transportation Saudi Arabia | Wedding, Corporate & VIP Transfers',
  description:
    'Private event transportation in Makkah, Madinah, Jeddah, Taif, Riyadh and Dammam — wedding guests, corporate events, conferences, VIP guests and private functions. Share your event details and get a quote on WhatsApp.',
  keywords: [
    'event transportation saudi arabia', 'wedding guest transport saudi arabia', 'corporate event transport',
    'conference transfer saudi arabia', 'vip transport saudi arabia', 'group transport makkah',
    'wedding car hire jeddah', 'نقل فعاليات السعودية', 'نقل ضيوف الأعراس', 'نقل مؤتمرات',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Event Transportation Saudi Arabia | Saudi Cabs GMC',
    description: 'Private event transportation for weddings, corporate events, conferences, VIP guests and private functions across Makkah, Madinah, Jeddah, Taif, Riyadh and Dammam.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Transportation Saudi Arabia | Saudi Cabs GMC',
    description: 'Private event transportation for weddings, corporate events, conferences, VIP guests and private functions across Saudi Arabia.',
    images: [OG_IMAGE.url],
  },
}

const eventServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Event Transportation — Saudi Cabs GMC',
  serviceType: 'Event and group private transportation',
  description: 'Coordinated private transport for wedding guests, corporate events, conferences, VIP guests and private functions, with Sedan, Hyundai Staria and GMC Yukon vehicles. Quote confirmed individually per event on WhatsApp.',
  url: PAGE_URL,
  provider: { '@type': 'LocalBusiness', '@id': 'https://saudicabsgmc.com/#business', name: 'Saudi Cabs GMC' },
  areaServed: [
    { '@type': 'City', name: 'Makkah' },
    { '@type': 'City', name: 'Madinah' },
    { '@type': 'City', name: 'Jeddah' },
    { '@type': 'City', name: 'Taif' },
    { '@type': 'City', name: 'Riyadh' },
    { '@type': 'City', name: 'Dammam' },
  ],
}

const eventBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Event Transportation', item: PAGE_URL },
  ],
}

const eventWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Event Transportation Saudi Arabia | Wedding, Corporate & VIP Transfers',
  url: PAGE_URL,
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': `${PAGE_URL}#service` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1'] },
}

export default function EventTransportationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventWebPageSchema) }} />
      {children}
    </>
  )
}
