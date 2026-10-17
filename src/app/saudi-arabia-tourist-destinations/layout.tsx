import type { Metadata } from 'next'

const PAGE_URL = 'https://saudicabsgmc.com/saudi-arabia-tourist-destinations'
const OG_IMAGE = { url: 'https://saudicabsgmc.com/hero/hero-fallback-saudi-cabs-gmc.webp', width: 800, height: 533, alt: 'Saudi Cabs GMC — tourist destinations in Saudi Arabia', type: 'image/webp' }

export const metadata: Metadata = {
  title: 'Tourist Destinations in Saudi Arabia & Nearby Countries',
  description:
    'A traveler guide to Saudi Arabia\'s top destinations — Makkah, Madinah, Jeddah, Taif, Riyadh, Diriyah, Dammam, AlUla and Abha — plus nearby Doha, Dubai, Abu Dhabi, Manama, Kuwait City, Muscat and Jordan, with private transport links where our service genuinely reaches.',
  keywords: [
    'saudi arabia tourist destinations', 'places to visit in saudi arabia', 'alula saudi arabia',
    'diriyah unesco', 'abha asir', 'taif rose season', 'riyadh attractions', 'jeddah al-balad',
    'saudi arabia travel guide', 'private transport saudi arabia tourist sites',
    'gcc tourist destinations', 'doha qatar travel', 'dubai uae travel', 'petra jordan travel',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Saudi Cabs GMC',
    title: 'Tourist Destinations in Saudi Arabia & Nearby Countries | Saudi Cabs GMC',
    description: 'A traveler guide to Saudi Arabia\'s top destinations and nearby countries, with private transport links where our service genuinely reaches.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tourist Destinations in Saudi Arabia & Nearby Countries | Saudi Cabs GMC',
    description: 'A traveler guide to Saudi Arabia\'s top destinations and nearby countries, with private transport links where our service genuinely reaches.',
    images: [OG_IMAGE.url],
  },
}

const DESTINATIONS = [
  { name: 'Makkah', description: 'Islam\'s holiest site, home to Al-Masjid al-Haram and the Kaaba.', url: 'https://saudicabsgmc.com/makkah-ziyarat-tour' },
  { name: 'Madinah', description: "The Prophet's City, home to Masjid an-Nabawi.", url: 'https://saudicabsgmc.com/madinah-ziyarat-tour' },
  { name: 'Jeddah', description: 'Red Sea coastal city with the UNESCO-listed Al-Balad old town and the Corniche.', url: 'https://saudicabsgmc.com/jeddah-taxi-service' },
  { name: 'Taif', description: 'Hejaz mountain retreat known for rose farms and Shubra Palace.', url: 'https://saudicabsgmc.com/taif-taxi-service' },
  { name: 'Riyadh', description: 'Modern Saudi capital, home to Masmak Fortress and the National Museum.', url: 'https://saudicabsgmc.com/riyadh-taxi-service' },
  { name: 'Diriyah', description: 'UNESCO World Heritage At-Turaif District, birthplace of the first Saudi state.', url: 'https://saudicabsgmc.com/riyadh-taxi-service' },
  { name: 'Dammam', description: 'Gulf coast hub with the Dammam Corniche and King Fahd Causeway.', url: 'https://saudicabsgmc.com/dammam-taxi-service' },
  { name: 'AlUla', description: "Home to Hegra, Saudi Arabia's first UNESCO World Heritage Site.", url: PAGE_URL },
  { name: 'Abha', description: 'Green highland city in the Asir Mountains.', url: PAGE_URL },
  { name: 'Doha', description: "Qatar's modern capital, with Souq Waqif and the Museum of Islamic Art.", url: 'https://saudicabsgmc.com/riyadh-to-doha' },
  { name: 'Dubai', description: 'A global UAE hub known for Burj Khalifa and Palm Jumeirah.', url: 'https://saudicabsgmc.com/riyadh-to-dubai' },
  { name: 'Abu Dhabi', description: 'The UAE capital, home to Sheikh Zayed Grand Mosque and Louvre Abu Dhabi.', url: 'https://saudicabsgmc.com/riyadh-to-abu-dhabi' },
  { name: 'Manama', description: "Bahrain's island capital, with the UNESCO-listed Bahrain Fort.", url: 'https://saudicabsgmc.com/riyadh-to-bahrain' },
  { name: 'Kuwait City', description: "Kuwait's seafront capital, home to the iconic Kuwait Towers.", url: 'https://saudicabsgmc.com/riyadh-to-kuwait' },
  { name: 'Muscat', description: "Oman's capital, with Sultan Qaboos Grand Mosque and the Mutrah Corniche.", url: 'https://saudicabsgmc.com/riyadh-to-muscat' },
  { name: 'Jordan', description: 'Home to Petra and Wadi Rum, reached by a confirmed cross-border private transfer.', url: PAGE_URL },
]

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}#collection`,
  url: PAGE_URL,
  name: 'Tourist Destinations in Saudi Arabia & Nearby Countries',
  description: 'A traveler guide to Saudi Arabia\'s top destinations and nearby countries, with private transport links where Saudi Cabs GMC service genuinely reaches.',
  about: {
    '@type': 'ItemList',
    itemListElement: DESTINATIONS.map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristDestination',
        name: d.name,
        description: d.description,
        url: d.url,
      },
    })),
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Tourist Destinations', item: PAGE_URL },
  ],
}

export default function TouristDestinationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
