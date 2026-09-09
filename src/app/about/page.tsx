import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us | Saudi Cabs GMC — Premium Taxi & Private Driver Service',
  description: 'Saudi Cabs GMC is a premium private taxi and chauffeur company serving Makkah, Madinah, Jeddah, and Taif. Fixed prices, experienced drivers, 24/7 availability.',
  alternates: { canonical: 'https://saudicabsgmc.com/about' },
  openGraph: {
    title: 'About Saudi Cabs GMC',
    description: 'Premium private taxi and chauffeur service across Saudi Arabia. Fixed prices, experienced drivers, 24/7.',
    url: 'https://saudicabsgmc.com/about',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'About Saudi Cabs GMC' }],
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://saudicabsgmc.com/about#webpage',
  name: 'About Saudi Cabs GMC',
  description: 'Saudi Cabs GMC is a premium private taxi and chauffeur company serving Makkah, Madinah, Jeddah, and Taif.',
  url: 'https://saudicabsgmc.com/about',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://saudicabsgmc.com/about' },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <AboutClient />
    </>
  )
}
