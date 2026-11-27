import { Metadata } from 'next'
import DammamToBahrainGuide from '@/components/DammamToBahrainGuide'
import { dammamToBahrainGuideFaqs } from '@/lib/dammamToBahrainGuideFaqData'

const PAGE_URL = 'https://saudicabsgmc.com/blog/dammam-to-bahrain-travel-guide'
const PAGE_TITLE = 'Dammam to Bahrain: Complete Guide to Private Transfers & the King Fahd Causeway'
const PAGE_DESCRIPTION = 'Planning a Dammam to Bahrain trip? Distance, the King Fahd Causeway, documents and visa rules, vehicle options, and how to request a private transfer quote.'
// Real dimensions of public/location/manama.webp, confirmed via sharp (597x335) — not a
// placeholder figure, to avoid the OG-image-dimension mismatch bug found and fixed
// elsewhere on this site.
const OG_IMAGE = { url: 'https://saudicabsgmc.com/location/manama.webp', width: 597, height: 335, alt: 'Manama, Bahrain' }
const DATE_PUBLISHED = '2026-11-27'

export const metadata: Metadata = {
  title: 'Dammam to Bahrain Travel Guide | King Fahd Causeway & Transfers',
  description: PAGE_DESCRIPTION,
  keywords: [
    'dammam to bahrain', 'dammam to manama', 'dammam to bahrain private transfer',
    'dammam to bahrain taxi', 'saudi arabia to bahrain transport', 'king fahd causeway travel',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'article',
    publishedTime: DATE_PUBLISHED,
    siteName: 'Saudi Cabs GMC',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${PAGE_URL}#article`,
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: { '@type': 'ImageObject', url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_PUBLISHED,
  author: { '@type': 'Organization', name: 'Saudi Cabs GMC Team', url: 'https://saudicabsgmc.com/team' },
  articleSection: 'Intercity Travel',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://saudicabsgmc.com/#organization',
    name: 'Saudi Cabs GMC',
    logo: { '@type': 'ImageObject', url: 'https://saudicabsgmc.com/logo-saudi-cabs-gmc.webp', width: 200, height: 200 },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  inLanguage: 'en',
  isPartOf: { '@id': 'https://saudicabsgmc.com/blog#blog' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://saudicabsgmc.com/blog' },
    { '@type': 'ListItem', position: 3, name: PAGE_TITLE, item: PAGE_URL },
  ],
}

// Single source of truth for the FAQPage schema and the visible accordion — both
// read from dammamToBahrainGuideFaqs (exported by the data file) so they can never drift apart.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: dammamToBahrainGuideFaqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function DammamToBahrainTravelGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DammamToBahrainGuide />
    </>
  )
}
