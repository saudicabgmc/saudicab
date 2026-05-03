import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import BackToTop from '@/components/BackToTop'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://saudicabsgmc.com'),
  title: {
    default: 'Saudi Cabs GMC | Best Taxi Service in Makkah, Madinah, Jeddah & Taif',
    template: '%s | Saudi Cabs GMC',
  },
  description:
    'Book your taxi, cab, or private driver in Makkah, Madinah, Jeddah, and Taif. Airport transfers, Umrah trips & intercity routes. Fixed prices, 24/7 available. Book via WhatsApp now.',
  keywords: [
    'taxi makkah', 'taxi madinah', 'taxi jeddah', 'taxi taif',
    'cab saudi arabia', 'private driver makkah', 'airport transfer jeddah',
    'umrah transport', 'hajj taxi', 'saudi cabs gmc',
    'GMC yukon hire saudi arabia', 'hyundai staria taxi saudi arabia',
    'jeddah airport to makkah taxi', 'makkah to madinah private car',
    'سيارة أجرة مكة', 'تاكسي المدينة', 'كاب جدة', 'نقل مطار السعودية',
    'حجز تاكسي مكة المكرمة', 'سائق خاص السعودية',
  ],
  authors: [{ name: 'Saudi Cabs GMC', url: 'https://saudicabsgmc.com' }],
  creator: 'Saudi Cabs GMC',
  publisher: 'Saudi Cabs GMC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://saudicabsgmc.com',
    siteName: 'Saudi Cabs GMC',
    title: 'Saudi Cabs GMC | Best Taxi Service in Makkah, Madinah, Jeddah & Taif',
    description:
      'Book your taxi, cab, or private driver in Makkah, Madinah, Jeddah, and Taif. Fixed prices, 24/7 available.',
    images: [
      {
        url: '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp',
        width: 1200,
        height: 630,
        alt: 'Saudi Cabs GMC – Premium Taxi & Private Driver Service Saudi Arabia',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saudi Cabs GMC | Best Taxi Service in Saudi Arabia',
    description: 'Book your taxi in Makkah, Madinah, Jeddah & Taif. Fixed prices, 24/7.',
    images: ['/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp'],
  },
  verification: {
    google: 'saudicabsgmc-google-verify',
  },
  category: 'transportation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  // ── 1. LocalBusiness + TaxiService ──────────────────────────────
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TaxiService'],
    '@id': 'https://saudicabsgmc.com/#business',
    name: 'Saudi Cabs GMC',
    alternateName: ['Saudi Cabs', 'GMC Taxi Saudi Arabia', 'كاب سعودي GMC', 'سعودي كابس'],
    url: 'https://saudicabsgmc.com',
    telephone: '+966569487569',
    image: [
      'https://saudicabsgmc.com/logo-saudi-cabs-gmc.webp',
      'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp',
      'https://saudicabsgmc.com/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp',
    ],
    logo: {
      '@type': 'ImageObject',
      url: 'https://saudicabsgmc.com/logo-saudi-cabs-gmc.webp',
      width: 200,
      height: 200,
    },
    description: 'Saudi Cabs GMC is a premium private taxi and chauffeur service operating 24/7 across Saudi Arabia — Makkah, Madinah, Jeddah, Taif, and Riyadh. We specialise in Hajj & Umrah pilgrimage transport, airport transfers from King Abdulaziz International Airport (KAIA), and intercity routes. Fixed prices, no meters, professional English- and Arabic-speaking drivers. Vehicles: Toyota Camry Sedan, Hyundai Staria 7-seat van, and GMC Yukon VIP luxury SUV.',
    slogan: 'Fixed Price. Professional Drivers. 24/7 Across Saudi Arabia.',
    foundingDate: '2020',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
    areaServed: [
      { '@type': 'City', name: 'Makkah', sameAs: 'https://www.wikidata.org/wiki/Q42788' },
      { '@type': 'City', name: 'Madinah', sameAs: 'https://www.wikidata.org/wiki/Q40083' },
      { '@type': 'City', name: 'Jeddah', sameAs: 'https://www.wikidata.org/wiki/Q41261' },
      { '@type': 'City', name: 'Taif', sameAs: 'https://www.wikidata.org/wiki/Q200047' },
      { '@type': 'City', name: 'Riyadh', sameAs: 'https://www.wikidata.org/wiki/Q3692' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: 'Makkah Province',
      addressLocality: 'Makkah',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 21.3891, longitude: 39.8579 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    currenciesAccepted: 'SAR',
    paymentAccepted: 'Cash, Bank Transfer, WhatsApp Pay',
    hasMap: 'https://saudicabsgmc.com/routes-map',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1200',
      bestRating: '5',
      worstRating: '1',
    },
    email: 'info@saudicabsgmc.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+966569487569',
        contactType: 'reservations',
        availableLanguage: ['English', 'Arabic'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        url: 'https://wa.me/966569487569',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        email: 'info@saudicabsgmc.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    sameAs: [
      'https://wa.me/966569487569',
      'https://www.youtube.com/@saudicabsgmc',
      'https://www.facebook.com/saudicabsgmc',
      'https://www.instagram.com/saudicabsgmc',
      'https://x.com/saudicabsgmc',
      'https://www.linkedin.com/company/saudicabsgmc',
      'https://www.tiktok.com/@saudicabsgmc',
    ],
    // GEO: vehicle fleet as offers for AI entity recognition
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Saudi Cabs GMC Fleet & Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TaxiService',
            name: 'Sedan Taxi – Toyota Camry',
            description: 'Comfortable sedan taxi for up to 4 passengers. Suitable for airport transfers, city rides, and intercity routes across Saudi Arabia.',
            vehicle: {
              '@type': 'Car',
              name: 'Toyota Camry',
              vehicleTransmission: 'Automatic',
              numberOfDoors: 4,
              seatingCapacity: 4,
            },
          },
          priceCurrency: 'SAR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TaxiService',
            name: 'Hyundai Staria Van – 7 Seats',
            description: 'Spacious 7-seat Hyundai Staria van for families, groups, and pilgrims. Generous luggage space — ideal for Hajj and Umrah transport.',
            vehicle: {
              '@type': 'BusOrCoach',
              name: 'Hyundai Staria',
              seatingCapacity: 7,
            },
          },
          priceCurrency: 'SAR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TaxiService',
            name: 'GMC Yukon VIP – Luxury SUV',
            description: 'VIP GMC Yukon luxury SUV for up to 7 passengers. Features built-in cooler, giant touchscreen, and premium leather seats. The top choice for executive and business travel in Saudi Arabia.',
            vehicle: {
              '@type': 'Car',
              name: 'GMC Yukon',
              vehicleModelDate: '2024',
              bodyType: 'SUV',
              seatingCapacity: 7,
            },
          },
          priceCurrency: 'SAR',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
    // AEO: speakable content for voice assistants
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.section-subtitle', '[data-speakable]'],
    },
    // LLM: service mentions for entity graph
    mentions: [
      { '@type': 'LandmarkOrHistoricalBuilding', name: 'Masjid al-Haram', sameAs: 'https://www.wikidata.org/wiki/Q193230' },
      { '@type': 'LandmarkOrHistoricalBuilding', name: 'Masjid an-Nabawi', sameAs: 'https://www.wikidata.org/wiki/Q210768' },
      { '@type': 'Airport', name: 'King Abdulaziz International Airport', iataCode: 'JED', sameAs: 'https://www.wikidata.org/wiki/Q623767' },
      { '@type': 'TrainStation', name: 'Haramain High Speed Railway', sameAs: 'https://www.wikidata.org/wiki/Q18633936' },
    ],
  }

  // ── 2. Organization (AI/LLM entity recognition) ─────────────────
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://saudicabsgmc.com/#organization',
    name: 'Saudi Cabs GMC',
    legalName: 'Saudi Cabs GMC',
    url: 'https://saudicabsgmc.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://saudicabsgmc.com/logo-saudi-cabs-gmc.webp',
      width: 200,
      height: 200,
    },
    description: 'Saudi Cabs GMC is a premium taxi and private transport company operating 24/7 across Saudi Arabia, serving pilgrims, families, and business travelers. Founded in 2020, we provide fixed-price transportation between Makkah, Madinah, Jeddah, Taif, and Riyadh.',
    foundingDate: '2020',
    knowsAbout: [
      'Private taxi service in Makkah',
      'Airport transfers from King Abdulaziz International Airport Jeddah',
      'Hajj pilgrimage transportation Saudi Arabia',
      'Umrah transport packages Makkah Madinah',
      'Private driver hire Saudi Arabia',
      'Intercity taxi routes Saudi Arabia',
      'GMC Yukon VIP hire Saudi Arabia',
      'Hyundai Staria group taxi Saudi Arabia',
      'Toyota Camry sedan taxi Saudi Arabia',
      'Madinah to Makkah private car',
      'Jeddah to Makkah taxi fare',
      'Riyadh to Makkah long distance taxi',
    ],
    knowsLanguage: ['en', 'ar'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966569487569',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    email: 'info@saudicabsgmc.com',
    sameAs: [
      'https://wa.me/966569487569',
      'https://www.youtube.com/@saudicabsgmc',
      'https://www.facebook.com/saudicabsgmc',
      'https://www.instagram.com/saudicabsgmc',
      'https://x.com/saudicabsgmc',
      'https://www.linkedin.com/company/saudicabsgmc',
      'https://www.tiktok.com/@saudicabsgmc',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Professional Certified Chauffeurs',
        description: 'All Saudi Cabs GMC drivers are trained, background-checked, and certified professional chauffeurs.',
      },
    ],
  }

  // ── 3. WebSite with SearchAction ─────────────────────────────────
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://saudicabsgmc.com/#website',
    name: 'Saudi Cabs GMC',
    url: 'https://saudicabsgmc.com',
    description: 'Book taxi, private driver, and airport transfers across Saudi Arabia. Fixed prices for Makkah, Madinah, Jeddah, Taif, and Riyadh.',
    inLanguage: ['en', 'ar'],
    publisher: { '@id': 'https://saudicabsgmc.com/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://saudicabsgmc.com/routes-map?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // ── 4. HowTo — Booking Process ───────────────────────────────────
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Book a Taxi in Saudi Arabia with Saudi Cabs GMC',
    description: 'Book a fixed-price private taxi anywhere in Saudi Arabia in 3 simple steps via WhatsApp. No app required.',
    totalTime: 'PT5M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'SAR', value: '0', description: 'Free to book — pay only for your trip' },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Contact via WhatsApp',
        text: 'Send a WhatsApp message to +966 56 948 7569 with your pickup location, destination, date, and preferred time. Available 24/7 in English and Arabic.',
        url: 'https://wa.me/966569487569',
        image: 'https://saudicabsgmc.com/booking/step-1-book-whatsapp.webp',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Get an Instant Fixed Price',
        text: 'Receive a fixed price quote within minutes. No meters, no hidden fees. Choose your vehicle: Toyota Camry Sedan (4 seats), Hyundai Staria (7 seats), or GMC Yukon VIP (7 seats).',
        url: 'https://saudicabsgmc.com',
        image: 'https://saudicabsgmc.com/booking/step-2-confirmation.webp',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Your Driver Arrives On Time',
        text: 'Your certified professional driver arrives at your door at the agreed time. For airport pickups, the driver waits at the arrivals hall with a personalised name board.',
        url: 'https://saudicabsgmc.com',
        image: 'https://saudicabsgmc.com/booking/step-3-driver-arrival.webp',
      },
    ],
  }

  // ── 5. FAQPage — AI Overview & Answer Engine targets ─────────────
  const globalFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I book a taxi in Makkah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To book a taxi in Makkah, contact Saudi Cabs GMC via WhatsApp at +966 56 948 7569. Send your pickup location, destination, and preferred time. You will receive a fixed price confirmation within minutes. The service operates 24/7 and supports both English and Arabic.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a taxi from Jeddah Airport to Makkah cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Saudi Cabs GMC offers a fixed-price taxi from King Abdulaziz International Airport (KAIA) in Jeddah to Makkah with no meter and no surge pricing. The journey is approximately 90 km and takes 50–60 minutes. Contact us via WhatsApp for the current rate. Vehicles available: Sedan, Hyundai Staria, or GMC Yukon.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is private taxi better than the Haramain Train from Makkah to Madinah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For pilgrims with luggage or families, a private taxi from Makkah to Madinah is more convenient — door-to-door with no station transfers. The Haramain High Speed Railway is faster (about 2.5 hours vs 4–5 hours by car) but requires travelling to a station. Saudi Cabs GMC private taxis depart from your hotel directly, carry all your luggage, and make prayer stops en route.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Saudi Cabs GMC operate during Hajj season?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Saudi Cabs GMC operates 24/7 throughout the year including peak Hajj and Umrah seasons. We provide dedicated Hajj transport between Makkah, Madinah, Mina, Arafat, and Muzdalifah. Vehicles: Toyota Camry Sedan, Hyundai Staria (7 seats), and GMC Yukon (VIP 7 seats). Early booking is strongly recommended during Hajj.',
        },
      },
      {
        '@type': 'Question',
        name: 'What vehicles are available for group travel in Saudi Arabia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Saudi Cabs GMC offers three vehicle types: (1) Toyota Camry Sedan for up to 4 passengers; (2) Hyundai Staria van for up to 7 passengers with generous luggage space — ideal for families and pilgrims; (3) GMC Yukon 2024 luxury SUV for VIP travel with up to 7 passengers, featuring a built-in cooler, giant touchscreen, and premium leather seats.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to drive from Riyadh to Makkah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A private cab from Riyadh to Makkah takes approximately 8 to 9 hours (around 900 km). Night travel is recommended to avoid peak traffic. Saudi Cabs GMC provides direct door-to-door service on this long-distance route with planned rest stops for prayers and meals.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is Jeddah Airport from Makkah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'King Abdulaziz International Airport (KAIA) in Jeddah is approximately 90 km from Masjid al-Haram in Makkah. A private taxi takes about 50 to 60 minutes. Saudi Cabs GMC offers personalised name-board meet-and-greet pickup at the airport arrivals hall.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is it from Makkah to Madinah by taxi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Makkah to Madinah is approximately 430 km by road and takes 4 to 5 hours by private taxi with Saudi Cabs GMC. The trip includes a rest stop. Door-to-door service from your hotel in Makkah directly to your hotel in Madinah — no station transfers required.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the taxi fare from Jeddah to Makkah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The taxi fare from Jeddah city to Makkah with Saudi Cabs GMC is a fixed price in SAR agreed before departure — no meters, no surprises. The distance is approximately 80–100 km depending on your exact pick-up point in Jeddah. Contact via WhatsApp at +966 56 948 7569 for the latest rate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do Saudi Cabs GMC drivers speak English?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Saudi Cabs GMC drivers are bilingual and communicate in both English and Arabic. Bookings are handled in English or Arabic via WhatsApp. All written communications, pricing, and booking confirmations are available in both languages.',
        },
      },
    ],
  }

  // ── 6. ItemList — Route Index for GEO/LLM ───────────────────────
  const routeListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Saudi Cabs GMC — All Taxi Routes in Saudi Arabia',
    description: 'Complete list of private taxi and transfer routes served by Saudi Cabs GMC across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/routes-map',
    numberOfItems: 20,
    itemListElement: [
      { '@type': 'ListItem', position: 1,  name: 'Jeddah Airport to Makkah',   url: 'https://saudicabsgmc.com/jeddah-airport-to-makkah' },
      { '@type': 'ListItem', position: 2,  name: 'Makkah to Jeddah Airport',   url: 'https://saudicabsgmc.com/makkah-to-jeddah-airport' },
      { '@type': 'ListItem', position: 3,  name: 'Jeddah Airport to Madinah',  url: 'https://saudicabsgmc.com/jeddah-airport-to-madinah' },
      { '@type': 'ListItem', position: 4,  name: 'Makkah to Madinah',          url: 'https://saudicabsgmc.com/makkah-to-madinah' },
      { '@type': 'ListItem', position: 5,  name: 'Madinah to Makkah',          url: 'https://saudicabsgmc.com/madinah-to-makkah' },
      { '@type': 'ListItem', position: 6,  name: 'Jeddah to Makkah',           url: 'https://saudicabsgmc.com/jeddah-to-makkah' },
      { '@type': 'ListItem', position: 7,  name: 'Makkah to Jeddah',           url: 'https://saudicabsgmc.com/makkah-to-jeddah' },
      { '@type': 'ListItem', position: 8,  name: 'Jeddah to Madinah',          url: 'https://saudicabsgmc.com/jeddah-to-madinah' },
      { '@type': 'ListItem', position: 9,  name: 'Madinah to Jeddah',          url: 'https://saudicabsgmc.com/madinah-to-jeddah' },
      { '@type': 'ListItem', position: 10, name: 'Makkah to Taif',             url: 'https://saudicabsgmc.com/makkah-to-taif' },
      { '@type': 'ListItem', position: 11, name: 'Taif to Makkah',             url: 'https://saudicabsgmc.com/taif-to-makkah' },
      { '@type': 'ListItem', position: 12, name: 'Jeddah to Taif',             url: 'https://saudicabsgmc.com/jeddah-to-taif' },
      { '@type': 'ListItem', position: 13, name: 'Taif to Jeddah',             url: 'https://saudicabsgmc.com/taif-to-jeddah' },
      { '@type': 'ListItem', position: 14, name: 'Makkah to Riyadh',           url: 'https://saudicabsgmc.com/makkah-to-riyadh' },
      { '@type': 'ListItem', position: 15, name: 'Riyadh to Makkah',           url: 'https://saudicabsgmc.com/riyadh-to-makkah' },
      { '@type': 'ListItem', position: 16, name: 'Riyadh to Madinah',          url: 'https://saudicabsgmc.com/riyadh-to-madinah' },
      { '@type': 'ListItem', position: 17, name: 'Riyadh to Jeddah',           url: 'https://saudicabsgmc.com/riyadh-to-jeddah' },
      { '@type': 'ListItem', position: 18, name: 'Madinah Airport Taxi',       url: 'https://saudicabsgmc.com/madinah-airport-taxi' },
      { '@type': 'ListItem', position: 19, name: 'Taif Airport Taxi',          url: 'https://saudicabsgmc.com/taif-airport-taxi' },
      { '@type': 'ListItem', position: 20, name: 'Taif to Madinah',            url: 'https://saudicabsgmc.com/taif-to-madinah' },
    ],
  }

  // ── 7. SiteNavigationElement — Navigation Schema ─────────────────
  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Main Navigation',
    url: 'https://saudicabsgmc.com',
    hasPart: [
      { '@type': 'SiteNavigationElement', name: 'Home', url: 'https://saudicabsgmc.com/' },
      { '@type': 'SiteNavigationElement', name: 'Makkah Taxi', url: 'https://saudicabsgmc.com/makkah-taxi-service' },
      { '@type': 'SiteNavigationElement', name: 'Madinah Taxi', url: 'https://saudicabsgmc.com/madinah-taxi-service' },
      { '@type': 'SiteNavigationElement', name: 'Jeddah Taxi', url: 'https://saudicabsgmc.com/jeddah-taxi-service' },
      { '@type': 'SiteNavigationElement', name: 'Taif Taxi', url: 'https://saudicabsgmc.com/taif-taxi-service' },
      { '@type': 'SiteNavigationElement', name: 'Routes Map', url: 'https://saudicabsgmc.com/routes-map' },
      { '@type': 'SiteNavigationElement', name: 'Blog', url: 'https://saudicabsgmc.com/blog' },
      { '@type': 'SiteNavigationElement', name: 'Contact', url: 'https://saudicabsgmc.com/contact' },
      { '@type': 'SiteNavigationElement', name: 'Team', url: 'https://saudicabsgmc.com/team' },
    ],
  }

  const schemas = [
    localBusinessSchema,
    organizationSchema,
    websiteSchema,
    howToSchema,
    globalFaqSchema,
    routeListSchema,
    siteNavigationSchema,
  ]

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Makkah, Saudi Arabia" />
        <meta name="geo.position" content="21.3891;39.8579" />
        <meta name="ICBM" content="21.3891, 39.8579" />
        <meta name="theme-color" content="#0B3D2E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  )
}
