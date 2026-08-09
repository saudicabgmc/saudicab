import type { RoutePageData } from '@/components/RoutePage'

/**
 * Generates AEO-grade JSON-LD schemas for a route page:
 * 1. BreadcrumbList
 * 2. TaxiService (Service)
 * 3. FAQPage (from route FAQs)
 */
export function generateRouteSchemas(data: RoutePageData) {
  const base = 'https://saudicabsgmc.com'
  const fromEn = data.from.en
  const toEn = data.to.en
  const url = `${base}/${data.slug}`

  // 1. BreadcrumbList
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: `${fromEn} → ${toEn}`, item: url },
    ],
  }

  // 2. TaxiService (Service)
  const typeLabel = data.type === 'airport'
    ? 'Airport Transfer'
    : data.type === 'pilgrimage'
    ? 'Hajj & Umrah Transport'
    : data.type === 'tour'
    ? 'Ziyarat Tour'
    : 'Intercity Taxi'

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Taxi from ${fromEn} to ${toEn}`,
    serviceType: typeLabel,
    description: data.description.en,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${base}/#business`,
      name: 'Saudi Cabs GMC',
      telephone: '+966569487569',
    },
    areaServed: [
      { '@type': 'City', name: fromEn },
      { '@type': 'City', name: toEn },
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
      availableAtOrFrom: { '@type': 'Place', name: fromEn },
    },
    termsOfService: 'Fixed price confirmed before departure. 24/7 availability.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vehicle Options',
      itemListElement: data.vehicles.map((v, i) => ({
        '@type': 'Offer',
        position: i + 1,
        name: v.nameEn,
        description: v.priceNote.en,
        eligibleQuantity: { '@type': 'QuantitativeValue', value: v.seats },
      })),
    },
  }

  // 3. FAQPage — combines route FAQs + auto-generated AEO questions
  const autoFaqs = [
    {
      '@type': 'Question',
      name: `How long does the journey from ${fromEn} to ${toEn} take?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The private cab from ${fromEn} to ${toEn} takes approximately ${data.duration} (${data.distance}). Saudi Cabs GMC offers 24/7 service with fixed pricing — no meter, no surprises.`,
      },
    },
    {
      '@type': 'Question',
      name: `How much does a taxi from ${fromEn} to ${toEn} cost?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Saudi Cabs GMC offers a fixed price for the ${fromEn} to ${toEn} route — agreed before departure with no hidden fees. Contact via WhatsApp at +966 56 948 7569 for the current rate.`,
      },
    },
    {
      '@type': 'Question',
      name: `Is there a direct taxi from ${fromEn} to ${toEn}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Yes, Saudi Cabs GMC provides direct private cab service from ${fromEn} to ${toEn}. The journey is door-to-door with no shared stops or transfers. Available 24/7.`,
      },
    },
    {
      '@type': 'Question',
      name: `What vehicles are available for the ${fromEn} to ${toEn} route?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Saudi Cabs GMC offers ${data.vehicles.map(v => `${v.nameEn} (${v.seats})`).join(', ')} for the ${fromEn} to ${toEn} journey. All vehicles are air-conditioned with fixed pricing.`,
      },
    },
  ]

  // Merge with page-specific FAQs
  const pageFaqs = data.faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q.en,
    acceptedAnswer: { '@type': 'Answer', text: faq.a.en },
  }))

  // Deduplicate by question name
  const allFaqs = [...pageFaqs, ...autoFaqs]

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs,
  }

  return [breadcrumb, service, faqPage]
}
