import type { Metadata } from 'next'
import FaqClient from './FaqClient'
import { homeFaqs, makkahFaqs, madinahFaqs, jeddahFaqs, taifFaqs } from '@/lib/faqData'

export const metadata: Metadata = {
  title: 'FAQ | Saudi Cabs GMC — Taxi & Private Driver Questions Answered',
  description: 'Answers to the most common questions about booking a taxi or private driver with Saudi Cabs GMC across Makkah, Madinah, Jeddah, and Taif — pricing, airport pickups, Hajj & Umrah transport, and more.',
  alternates: { canonical: 'https://saudicabsgmc.com/faq' },
  openGraph: {
    title: 'Frequently Asked Questions — Saudi Cabs GMC',
    description: 'Everything you need to know about booking a fixed-price taxi or private driver in Saudi Arabia.',
    url: 'https://saudicabsgmc.com/faq',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'FAQ — Saudi Cabs GMC' }],
  },
}

const allFaqs = [...homeFaqs, ...makkahFaqs, ...madinahFaqs, ...jeddahFaqs, ...taifFaqs]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://saudicabsgmc.com/faq#webpage',
  name: 'Frequently Asked Questions — Saudi Cabs GMC',
  description: 'Answers to the most common questions about booking a taxi or private driver with Saudi Cabs GMC across Makkah, Madinah, Jeddah, and Taif.',
  url: 'https://saudicabsgmc.com/faq',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://saudicabsgmc.com/faq' },
    ],
  },
  mainEntity: allFaqs.map(f => ({
    '@type': 'Question',
    name: f.q.en,
    acceptedAnswer: { '@type': 'Answer', text: f.a.en },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <FaqClient />
    </>
  )
}
