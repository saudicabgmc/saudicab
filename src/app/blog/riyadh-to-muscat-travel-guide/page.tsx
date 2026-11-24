import { Metadata } from 'next'
import RiyadhToMuscatGuide from '@/components/RiyadhToMuscatGuide'
import { riyadhToMuscatGuideFaqs } from '@/lib/riyadhToMuscatGuideFaqData'

const PAGE_URL = 'https://saudicabsgmc.com/blog/riyadh-to-muscat-travel-guide'
const PAGE_TITLE = 'Riyadh to Muscat: Distance, Driving Route, Border Crossing & Travel Guide (2026)'
const PAGE_DESCRIPTION = 'A complete guide to the Riyadh-Muscat road trip: real distance, the direct Empty Quarter border crossing, visa rules, best time to travel, and taxi vs driving in 2026.'
// Real dimensions of public/location/muscat.webp, confirmed via sharp (547x365) — not the
// 1200x630/800x533 placeholder figures used elsewhere on the site, to avoid repeating the
// OG-image-dimension mismatch bug found and fixed on other pages this project.
const OG_IMAGE = { url: 'https://saudicabsgmc.com/location/muscat.webp', width: 547, height: 365, alt: 'Muscat, Oman' }
const DATE_PUBLISHED = '2026-11-24'

export const metadata: Metadata = {
  title: 'Riyadh to Muscat Travel Guide 2026 | Distance & Border Crossing',
  description: PAGE_DESCRIPTION,
  keywords: [
    'riyadh to muscat', 'riyadh to muscat distance', 'riyadh to muscat border crossing',
    'riyadh to muscat driving route', 'saudi arabia to oman road trip', 'empty quarter border crossing',
    'riyadh muscat taxi', 'oman visa saudi travelers', 'muscat travel guide',
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
// read from riyadhToMuscatGuideFaqs (exported by the component) so they can never drift apart.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: riyadhToMuscatGuideFaqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function RiyadhToMuscatTravelGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RiyadhToMuscatGuide />
    </>
  )
}
