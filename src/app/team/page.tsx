import type { Metadata } from 'next'
import TeamClient from './TeamClient'

export const metadata: Metadata = {
  title: 'Our Team | Saudi Cabs GMC — Professional Drivers & Support',
  description: 'Meet the Saudi Cabs GMC team: professional drivers, dispatch coordinators, and customer support serving pilgrims and travelers across Saudi Arabia.',
  alternates: { canonical: 'https://saudicabsgmc.com/team' },
  openGraph: {
    title: 'Our Team — Saudi Cabs GMC',
    description: 'Professional drivers and 24/7 support serving pilgrims across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/team',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Our Team — Saudi Cabs GMC' }],
  },
}

const teamPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://saudicabsgmc.com/team#webpage',
  name: 'Our Team — Saudi Cabs GMC Professional Drivers & Support',
  description: 'Meet the Saudi Cabs GMC team: professional drivers, dispatch coordinators, and customer support serving pilgrims and travelers across Saudi Arabia.',
  url: 'https://saudicabsgmc.com/team',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Our Team', item: 'https://saudicabsgmc.com/team' },
    ],
  },
}

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamPageSchema) }} />
      <TeamClient />
    </>
  )
}
