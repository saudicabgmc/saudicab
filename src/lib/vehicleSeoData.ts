// ─────────────────────────────────────────────────────────────────────────────
// Vehicle SEO Programmatic Page Registry
// Covers ~190 pages: vehicle-city, vehicle-route, airport, high-intent, hubs
// ─────────────────────────────────────────────────────────────────────────────

const BASE = 'https://saudicabsgmc.com'
const WA   = '966569487569'

// ── Building blocks ──────────────────────────────────────────────────────────

const VEHICLES = {
  '4-seater':  { seats: 4,  label: '4-Seater',  name: 'Toyota Camry Sedan',  luggage: '2 large bags',          type: 'Sedan',   available: true  },
  '7-seater':  { seats: 7,  label: '7-Seater',  name: 'Hyundai Staria',      luggage: '5+ bags',               type: 'Van',     available: true  },
  '11-seater': { seats: 11, label: '11-Seater', name: 'Toyota Hiace',        luggage: 'large group hold',      type: 'Minibus', available: false },
  '17-seater': { seats: 17, label: '17-Seater', name: 'Toyota Coaster',      luggage: 'undercarriage storage', type: 'Coaster', available: false },
} as const

const CITIES = {
  makkah:  { name: 'Makkah',  hub: '/makkah-taxi-service'  },
  madinah: { name: 'Madinah', hub: '/madinah-taxi-service' },
  jeddah:  { name: 'Jeddah',  hub: '/jeddah-taxi-service'  },
  taif:    { name: 'Taif',    hub: '/taif-taxi-service'     },
} as const

const SERVICES = {
  'taxi':                 { label: 'Taxi',               hub: '/taxi-services'                 },
  'cab':                  { label: 'Cab',                hub: '/cab-services'                  },
  'car-rent-with-driver': { label: 'Car with Driver',    hub: '/car-rent-with-driver'          },
} as const

const AIRPORTS = {
  jeddah:  {
    code: 'JED', name: 'King Abdulaziz International Airport',
    shortName: 'Jeddah Airport (KAIA)',
    distances: {
      makkah:        { km: '~90 km',  time: '50–60 min' },
      madinah:       { km: '~420 km', time: '4–4.5 hr'  },
      taif:          { km: '~170 km', time: '~2 hr'     },
    },
  },
  madinah: {
    code: 'MED', name: 'Prince Mohammad bin Abdulaziz Airport',
    shortName: 'Madinah Airport (MED)',
    distances: {
      makkah:          { km: '~420 km', time: '4–5 hr'  },
      jeddah:          { km: '~420 km', time: '~4 hr'   },
      hotel:           { km: '~15 km',  time: '~20 min' },
      'madinah-hotel': { km: '~15 km',  time: '~20 min' },
    },
  },
  taif: {
    code: 'TIF', name: 'Taif Regional Airport',
    shortName: 'Taif Airport (TIF)',
    distances: {
      makkah:      { km: '~75 km',  time: '60–80 min' },
      jeddah:      { km: '~170 km', time: '~2 hr'     },
      'taif-city': { km: '~25 km',  time: '~30 min'   },
      city:        { km: '~25 km',  time: '~30 min'   },
    },
  },
} as const

const INTENTS = {
  vip:     { label: 'VIP',     prefVehicle: '7-seater' as const,  priceWord: 'premium',    desc: 'VIP luxury service with GMC Yukon or Hyundai Staria'     },
  cheap:   { label: 'Budget',  prefVehicle: '4-seater' as const,  priceWord: 'affordable', desc: 'affordable fixed-price rides, no hidden fees'            },
  private: { label: 'Private', prefVehicle: '4-seater' as const,  priceWord: 'fixed',      desc: 'exclusive private transfer, no shared passengers'        },
  family:  { label: 'Family',  prefVehicle: '7-seater' as const,  priceWord: 'group',      desc: 'family-friendly van with room for passengers and luggage' },
} as const

const INTERCITY_ROUTES = {
  'makkah-to-madinah':  { origin: 'makkah'  as const, dest: 'madinah' as const, km: '~430 km', time: '4–5 hr'   },
  'jeddah-to-makkah':   { origin: 'jeddah'  as const, dest: 'makkah'  as const, km: '~80 km',  time: '~60 min'  },
  'makkah-to-taif':     { origin: 'makkah'  as const, dest: 'taif'    as const, km: '~75 km',  time: '60–80 min'},
  'madinah-to-makkah':  { origin: 'madinah' as const, dest: 'makkah'  as const, km: '~430 km', time: '4–5 hr'   },
} as const

// ── Types ─────────────────────────────────────────────────────────────────────

export type VehicleKey  = keyof typeof VEHICLES
export type CityKey     = keyof typeof CITIES
export type ServiceKey  = keyof typeof SERVICES
export type AirportKey  = keyof typeof AIRPORTS
export type IntentKey   = keyof typeof INTENTS

export interface VehicleSeoFAQ     { q: string; a: string }
export interface VehicleSeoRelated { href: string; label: string; tag: string }

export interface VehicleSeoPageData {
  slug:          string
  metaTitle:     string
  metaDesc:      string
  h1:            string
  subtitle:      string
  quickAnswer:   string
  badge:         string
  pageType:      'hub' | 'vehicle-city' | 'vehicle-route' | 'airport' | 'intent-city' | 'intent-airport' | 'intent-vehicle' | 'money-route'
  vehicleName?:  string
  vehicleSeats?: number
  vehicleLuggage?: string
  vehicleAvailable?: boolean
  serviceLabel:  string
  location:      string
  distance?:     string
  travelTime?:   string
  keyFacts:      { icon: string; label: string; value: string }[]
  faqs:          VehicleSeoFAQ[]
  relatedLinks:  VehicleSeoRelated[]
  breadcrumbs:   { name: string; href: string }[]
  waMessage:     string
  schema:        object
}

// ── Schema builder ────────────────────────────────────────────────────────────

function taxiSchema(name: string, desc: string, url: string, city: string, vehicle?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description: desc,
    url,
    serviceType: 'TaxiService',
    provider: { '@type': 'LocalBusiness', '@id': `${BASE}/#business`, name: 'Saudi Cabs GMC', telephone: `+${WA}` },
    areaServed: { '@type': 'City', name: city },
    ...(vehicle ? { vehicle: { '@type': 'Car', name: vehicle } } : {}),
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `https://wa.me/${WA}`, name: 'WhatsApp Booking' },
    hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312', bestRating: '5', worstRating: '1' },
  }
}

function faqSchema(faqs: VehicleSeoFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

// ── Registry ──────────────────────────────────────────────────────────────────

const REGISTRY = new Map<string, VehicleSeoPageData>()

function reg(data: VehicleSeoPageData) { REGISTRY.set(data.slug, data) }

// ─ 1. Master Hub pages ────────────────────────────────────────────────────────

const HUB_DEFS = [
  {
    slug: 'taxi-vehicles',
    title: 'Taxi Vehicle Types in Saudi Arabia | 4, 7, 11 & 17 Seater | Saudi Cabs GMC',
    desc:  'Choose your taxi vehicle in Saudi Arabia — 4-seater Sedan, 7-seater Staria, 11-seater Hiace, or 17-seater Coaster. Fixed prices, 24/7. Book via WhatsApp.',
    h1:    'Taxi Vehicles in Saudi Arabia — All Sizes, All Routes',
    subtitle: 'Saudi Cabs GMC offers 4 vehicle sizes for every group — from a 4-seat sedan to a 17-seat coaster. Fixed price, professional driver, 24/7 across Makkah, Madinah, Jeddah & Taif.',
    qa:    'Saudi Cabs GMC offers 4-seater (Toyota Camry), 7-seater (Hyundai Staria), 11-seater (Toyota Hiace), and 17-seater (Toyota Coaster) taxis in Saudi Arabia. All fixed price, 24/7.',
    badge: 'All Vehicles',
    faqs: [
      { q: 'What taxi vehicle sizes are available in Saudi Arabia?', a: 'Saudi Cabs GMC offers 4 vehicle sizes: Toyota Camry Sedan (4 seats), Hyundai Staria Van (7 seats), Toyota Hiace (11 seats), and Toyota Coaster (17 seats). All available 24/7 on fixed prices across Makkah, Madinah, Jeddah, Taif, and major intercity routes.' },
      { q: 'Which vehicle is best for Umrah family travel in Saudi Arabia?', a: 'For families of up to 7, the Hyundai Staria 7-seater is ideal — spacious, high roof, sliding doors, and generous luggage capacity. For larger family groups, the 11-seater Toyota Hiace is recommended.' },
      { q: 'What is the largest taxi group vehicle available?', a: 'The largest standard vehicle Saudi Cabs GMC offers is the 17-seater Toyota Coaster — ideal for Hajj delegations, tour groups, and large corporate transfers. Contact us for availability.' },
    ],
  },
  {
    slug: 'taxi-services',
    title: 'Taxi Services Saudi Arabia | Makkah, Madinah, Jeddah, Taif | Saudi Cabs GMC',
    desc:  'Book private taxi services across Saudi Arabia — Makkah, Madinah, Jeddah, Taif. Fixed prices, 24/7, professional drivers. 4 to 17 seat vehicles. WhatsApp: +966 56 948 7569.',
    h1:    'Taxi Services in Saudi Arabia — Fixed Price, 24/7',
    subtitle: 'Saudi Cabs GMC provides professional private taxi services in Makkah, Madinah, Jeddah, and Taif — and all intercity routes. No meters. Confirmed price before departure.',
    qa:    'Saudi Cabs GMC offers private taxi services 24/7 across Saudi Arabia in Makkah, Madinah, Jeddah, Taif, and Riyadh. Fixed prices, professional drivers. Book via WhatsApp: +966 56 948 7569.',
    badge: 'Taxi Services',
    faqs: [
      { q: 'What taxi services does Saudi Cabs GMC provide?', a: 'Saudi Cabs GMC provides private city taxis, airport transfers, intercity routes (Makkah–Madinah, Jeddah–Makkah, etc.), Hajj & Umrah transport, and private driver hire across Saudi Arabia.' },
      { q: 'Are Saudi Cabs GMC taxis available 24/7?', a: 'Yes. Saudi Cabs GMC taxis operate 24 hours a day, 7 days a week — including during Hajj and Umrah seasons, Eid, and Ramadan.' },
      { q: 'How do I book a taxi in Saudi Arabia?', a: 'Send a WhatsApp message to +966 56 948 7569 with your pickup location, destination, date, and time. Receive a fixed price confirmation within minutes.' },
    ],
  },
  {
    slug: 'cab-services',
    title: 'Cab Services Saudi Arabia | Makkah, Madinah, Jeddah, Taif | Saudi Cabs GMC',
    desc:  'Book private cab services across Saudi Arabia. Fixed-price cabs in Makkah, Madinah, Jeddah, and Taif — 4 to 17-seat vehicles, 24/7. WhatsApp: +966 56 948 7569.',
    h1:    'Cab Services in Saudi Arabia — Fixed Price, No Meter',
    subtitle: 'Private cab service across Saudi Arabia with Saudi Cabs GMC. No meter, no hidden charges. Confirmed SAR price before every trip.',
    qa:    'Saudi Cabs GMC provides private cab services 24/7 in Makkah, Madinah, Jeddah, and Taif. Fixed prices in SAR. 4-seater, 7-seater, 11-seater, and 17-seater cabs available. Book via WhatsApp.',
    badge: 'Cab Services',
    faqs: [
      { q: 'What is the difference between a cab and a taxi in Saudi Arabia?', a: 'In Saudi Arabia, "cab" and "taxi" are used interchangeably for private hired vehicles. Saudi Cabs GMC uses both terms to describe the same fixed-price private transfer service.' },
      { q: 'Is a cab cheaper than a taxi in Saudi Arabia?', a: 'Saudi Cabs GMC offers the same fixed pricing for both taxi and cab bookings — there is no price difference. All prices are pre-agreed in SAR before the trip.' },
    ],
  },
  {
    slug: 'car-rent-with-driver',
    title: 'Car Rental with Driver Saudi Arabia | Makkah, Madinah, Jeddah | Saudi Cabs GMC',
    desc:  'Hire a car with a professional driver in Saudi Arabia. Fixed-price car rental with driver service in Makkah, Madinah, Jeddah, and Taif. Half-day, full-day, multi-day. Book via WhatsApp.',
    h1:    'Car Rental with Driver in Saudi Arabia',
    subtitle: 'Hire a private car with a professional chauffeur in Saudi Arabia. Fixed prices, bilingual drivers, airport pickups, Ziyarat tours, and intercity routes.',
    qa:    'Saudi Cabs GMC offers car rental with driver service across Saudi Arabia — Makkah, Madinah, Jeddah, Taif. Half-day, full-day, or multi-day hire. Toyota Camry, Hyundai Staria, or GMC Yukon. Book via WhatsApp: +966 56 948 7569.',
    badge: 'Car with Driver',
    faqs: [
      { q: 'What is car rental with driver in Saudi Arabia?', a: 'Car rental with driver means you hire a vehicle together with a professional driver — no need to drive yourself. Saudi Cabs GMC provides this service in Makkah, Madinah, Jeddah, and Taif for half-day, full-day, or multi-day hire.' },
      { q: 'How much does car rental with driver cost in Saudi Arabia?', a: 'Saudi Cabs GMC provides fixed-price car rental with driver quoted in SAR before the hire begins. Prices depend on vehicle type (Sedan, Staria, or GMC Yukon), duration, and route. Contact via WhatsApp for a quote.' },
      { q: 'Can I hire a car with driver for Ziyarat tours in Makkah or Madinah?', a: 'Yes. Saudi Cabs GMC offers car-with-driver hire for Ziyarat tours in both Makkah (Jabal al-Nour, Mina, Arafat, Muzdalifah) and Madinah (Quba Mosque, Masjid al-Qiblatayn, Uhud). Available for half-day or full-day.' },
    ],
  },
  {
    slug: 'airport-taxi',
    title: 'Airport Taxi Saudi Arabia | Jeddah, Madinah, Taif Airports | Saudi Cabs GMC',
    desc:  'Book an airport taxi in Saudi Arabia — Jeddah (KAIA), Madinah (MED), and Taif (TIF) airports. Fixed price, name-board pickup, flight tracking. 24/7. Book via WhatsApp.',
    h1:    'Airport Taxi in Saudi Arabia — All 3 Airports',
    subtitle: 'Saudi Cabs GMC provides fixed-price airport taxi service from Jeddah (KAIA), Madinah (MED), and Taif (TIF) airports — to all cities. Name-board meet & greet. Flight tracking included.',
    qa:    'Saudi Cabs GMC offers 24/7 airport taxi service from all three Saudi airports: Jeddah KAIA, Madinah MED, and Taif TIF. Fixed prices, flight tracking, name-board pickup. Book via WhatsApp: +966 56 948 7569.',
    badge: 'Airport Taxi',
    faqs: [
      { q: 'Which Saudi airports does Saudi Cabs GMC serve?', a: 'Saudi Cabs GMC provides airport taxi service from three airports: King Abdulaziz International Airport (KAIA/JED) in Jeddah, Prince Mohammad bin Abdulaziz Airport (MED) in Madinah, and Taif Regional Airport (TIF).' },
      { q: 'Does Saudi Cabs GMC track flights for airport pickups?', a: 'Yes. Saudi Cabs GMC monitors flight arrivals in real time. If your flight is delayed, the driver adjusts pickup time automatically — at no extra charge.' },
      { q: 'How does airport pickup work with Saudi Cabs GMC?', a: 'Your driver will be waiting at the arrivals hall with a personalised name-board. Free waiting time is 60 minutes after the actual landing time. For late arrivals beyond 60 minutes, additional waiting charges may apply.' },
    ],
  },
  {
    slug: 'airport-cab',
    title: 'Airport Cab Saudi Arabia | Jeddah, Madinah, Taif | Saudi Cabs GMC',
    desc:  'Book an airport cab in Saudi Arabia from Jeddah (KAIA), Madinah (MED), or Taif (TIF) airports. Fixed-price private cab, name-board pickup, 24/7. WhatsApp: +966 56 948 7569.',
    h1:    'Airport Cab in Saudi Arabia — Fixed Price, 24/7',
    subtitle: 'Private airport cab service from all major Saudi airports. No meters, no surprises. Confirmed SAR fare before every pickup.',
    qa:    'Saudi Cabs GMC airport cab service covers Jeddah Airport (KAIA), Madinah Airport (MED), and Taif Airport (TIF). Fixed price, 24/7, name-board meet and greet. Book via WhatsApp.',
    badge: 'Airport Cab',
    faqs: [
      { q: 'What is an airport cab in Saudi Arabia?', a: 'An airport cab (or airport taxi) is a pre-booked private vehicle that picks you up from the airport arrivals hall with a name-board. Saudi Cabs GMC provides this service from all three Saudi airports at a fixed price in SAR.' },
    ],
  },
  {
    slug: 'airport-car-rent-with-driver',
    title: 'Airport Car Rental with Driver Saudi Arabia | Saudi Cabs GMC',
    desc:  'Hire a car with driver from Saudi Arabia airports — Jeddah KAIA, Madinah MED, Taif TIF. Fixed price, name-board pickup, bilingual drivers. Book via WhatsApp.',
    h1:    'Airport Car Rental with Driver — Saudi Arabia',
    subtitle: 'Hire a car with a professional driver directly from Jeddah, Madinah, or Taif airports. Fixed price, all vehicles available.',
    qa:    'Saudi Cabs GMC provides car rental with driver from all three Saudi airports. Fixed price, 24/7, name-board pickup. Vehicles: Toyota Camry (4), Hyundai Staria (7), and larger group vehicles. Book via WhatsApp: +966 56 948 7569.',
    badge: 'Airport Car + Driver',
    faqs: [
      { q: 'Can I hire a car with driver from Jeddah Airport?', a: 'Yes. Saudi Cabs GMC provides car rental with driver from King Abdulaziz International Airport (KAIA) in Jeddah to Makkah, Madinah, and Taif. Your driver meets you at arrivals with a name-board.' },
    ],
  },
]

for (const h of HUB_DEFS) {
  reg({
    slug: h.slug, pageType: 'hub',
    metaTitle: h.title, metaDesc: h.desc,
    h1: h.h1, subtitle: h.subtitle, quickAnswer: h.qa, badge: h.badge,
    serviceLabel: 'Taxi / Cab / Car with Driver', location: 'Saudi Arabia',
    keyFacts: [
      { icon: '🚗', label: 'Vehicles', value: '4 sizes' },
      { icon: '📍', label: 'Cities', value: 'Makkah · Madinah · Jeddah · Taif' },
      { icon: '💰', label: 'Pricing', value: 'Fixed SAR' },
      { icon: '⏰', label: 'Service', value: '24/7' },
    ],
    faqs: h.faqs,
    relatedLinks: [
      { href: '/taxi-vehicles',         label: 'All Vehicle Sizes',     tag: 'Hub'  },
      { href: '/makkah-taxi-service',   label: 'Makkah Taxi Service',   tag: 'City' },
      { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah', tag: 'Airport' },
      { href: '/hajj-umrah-transport',  label: 'Hajj & Umrah Transport', tag: 'Service' },
    ],
    breadcrumbs: [{ name: 'Home', href: '/' }, { name: h.h1, href: `/${h.slug}` }],
    waMessage: "Hello, I'd like to book a private taxi in Saudi Arabia",
    schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: h.h1, url: `${BASE}/${h.slug}`, provider: { '@id': `${BASE}/#business` } },
  })
}

// ─ 2. Vehicle × Service × City (48 pages) ────────────────────────────────────

const V_KEYS:  VehicleKey[]  = ['4-seater',  '7-seater',  '11-seater',  '17-seater']
const S_KEYS:  ServiceKey[]  = ['taxi',       'cab',        'car-rent-with-driver']
const C_KEYS:  CityKey[]     = ['makkah',     'madinah',    'jeddah',     'taif']
const I_KEYS:  IntentKey[]   = ['vip',        'cheap',      'private',    'family']
const R_KEYS                 = Object.keys(INTERCITY_ROUTES) as (keyof typeof INTERCITY_ROUTES)[]

for (const vk of V_KEYS) {
  const v = VEHICLES[vk]
  for (const sk of S_KEYS) {
    const s = SERVICES[sk]
    for (const ck of C_KEYS) {
      const c = CITIES[ck]
      const slug = `${vk}-${sk}-${ck}`
      const avail = v.available ? '' : ' (contact us for availability)'
      reg({
        slug, pageType: 'vehicle-city',
        metaTitle:   `${v.label} ${s.label} in ${c.name} | ${v.name} | Saudi Cabs GMC`,
        metaDesc:    `Book a ${v.seats}-seat ${s.label.toLowerCase()} in ${c.name} — ${v.name}, fixed price, 24/7. Saudi Cabs GMC. WhatsApp: +966 56 948 7569.`,
        h1:          `${v.label} ${s.label} in ${c.name} — ${v.name}`,
        subtitle:    `${v.seats}-passenger ${s.label.toLowerCase()} service in ${c.name}. ${v.name} — ${v.luggage}. Fixed SAR price, no meter, 24/7${avail}.`,
        quickAnswer: `Saudi Cabs GMC provides a ${v.seats}-seat ${s.label.toLowerCase()} in ${c.name} using a ${v.name}. Carries up to ${v.seats} passengers with ${v.luggage}. Fixed price in SAR. Book via WhatsApp: +966 56 948 7569.`,
        badge:       `${v.label} · ${c.name}`,
        vehicleName: v.name, vehicleSeats: v.seats, vehicleLuggage: v.luggage, vehicleAvailable: v.available,
        serviceLabel: s.label, location: c.name,
        keyFacts: [
          { icon: '👥', label: 'Passengers', value: `Up to ${v.seats}` },
          { icon: '💼', label: 'Luggage',    value: v.luggage          },
          { icon: '🚗', label: 'Vehicle',    value: v.name             },
          { icon: '💰', label: 'Pricing',    value: 'Fixed SAR'        },
          { icon: '⏰', label: 'Available',  value: '24 / 7'           },
          { icon: '📍', label: 'City',       value: c.name             },
        ],
        faqs: [
          { q: `How much does a ${v.seats}-seater ${s.label.toLowerCase()} cost in ${c.name}?`,    a: `Saudi Cabs GMC provides a fixed SAR price for a ${v.seats}-seat ${s.label.toLowerCase()} in ${c.name}. No meter, no hidden fees. WhatsApp +966 56 948 7569 for the current rate.` },
          { q: `What vehicle is used for the ${v.seats}-seater ${s.label.toLowerCase()} in ${c.name}?`, a: `Saudi Cabs GMC uses a ${v.name} for ${v.seats}-seat ${s.label.toLowerCase()} service in ${c.name}. It seats ${v.seats} passengers and can carry ${v.luggage}.` },
          { q: `Is the ${v.seats}-seater ${s.label.toLowerCase()} available during Hajj in ${c.name}?`, a: `Yes. Saudi Cabs GMC operates 24/7 throughout the year including Hajj and Umrah peak seasons. Early booking is strongly recommended during Hajj.` },
          { q: `How do I book a ${v.seats}-seater ${s.label.toLowerCase()} in ${c.name}?`,          a: `WhatsApp Saudi Cabs GMC at +966 56 948 7569. Share your pickup address in ${c.name}, destination, date, and time. Receive a fixed SAR price within minutes.` },
        ],
        relatedLinks: [
          { href: c.hub,              label: `All Taxis in ${c.name}`,        tag: 'City' },
          { href: '/taxi-vehicles',   label: 'All Vehicle Sizes',             tag: 'Hub'  },
          { href: `/${vk}-taxi-${C_KEYS.find(k => k !== ck) ?? 'madinah'}`, label: `${v.label} Taxi in ${CITIES[C_KEYS.find(k => k !== ck) ?? 'madinah'].name}`, tag: 'Related' },
          { href: s.hub,              label: `All ${s.label} Services`,       tag: 'Hub'  },
        ],
        breadcrumbs: [
          { name: 'Home', href: '/' },
          { name: `${s.label} Services`, href: s.hub },
          { name: `${v.label}`, href: '/taxi-vehicles' },
          { name: c.name, href: c.hub },
        ],
        waMessage: `Hello, I'd like to book a ${v.seats}-seater ${s.label.toLowerCase()} in ${c.name}`,
        schema: { '@context': 'https://schema.org', '@graph': [ taxiSchema(`${v.label} ${s.label} in ${c.name}`, `${v.name} ${s.label.toLowerCase()} service in ${c.name} — ${v.seats} seats, ${v.luggage}, fixed price, 24/7.`, `${BASE}/${slug}`, c.name, v.name), faqSchema([ { q: `How much does a ${v.seats}-seater ${s.label.toLowerCase()} cost in ${c.name}?`, a: `Saudi Cabs GMC provides fixed SAR price. WhatsApp +966 56 948 7569.` }, { q: `Is the ${v.seats}-seater available during Hajj in ${c.name}?`, a: 'Yes, Saudi Cabs GMC operates 24/7 year-round including Hajj season.' } ]) ] },
      })
    }
  }
}

// ─ 3. Vehicle × Route (16 pages — taxi only) ─────────────────────────────────

for (const vk of V_KEYS) {
  const v = VEHICLES[vk]
  for (const rk of R_KEYS) {
    const r  = INTERCITY_ROUTES[rk]
    const oc = CITIES[r.origin]
    const dc = CITIES[r.dest]
    const slug = `${vk}-taxi-${rk}`
    reg({
      slug, pageType: 'vehicle-route',
      metaTitle:   `${v.label} Taxi ${oc.name} to ${dc.name} | ${v.name} | Saudi Cabs GMC`,
      metaDesc:    `Book a ${v.seats}-seat taxi from ${oc.name} to ${dc.name} — ${v.name}, ${r.km}, ${r.time}. Fixed price, direct, 24/7. Saudi Cabs GMC. WhatsApp: +966 56 948 7569.`,
      h1:          `${v.label} Taxi — ${oc.name} to ${dc.name}`,
      subtitle:    `${v.name} taxi from ${oc.name} to ${dc.name}. ${r.km} · ${r.time} · Fixed SAR · Door-to-door · 24/7.`,
      quickAnswer: `Saudi Cabs GMC runs a ${v.seats}-seat ${v.name} taxi from ${oc.name} to ${dc.name} — ${r.km}, approximately ${r.time}. Fixed price in SAR, no meter. Book via WhatsApp: +966 56 948 7569.`,
      badge:       `${v.label} · ${oc.name} → ${dc.name}`,
      vehicleName: v.name, vehicleSeats: v.seats, vehicleLuggage: v.luggage, vehicleAvailable: v.available,
      serviceLabel: 'Taxi', location: `${oc.name} to ${dc.name}`,
      distance: r.km, travelTime: r.time,
      keyFacts: [
        { icon: '👥', label: 'Passengers', value: `Up to ${v.seats}` },
        { icon: '📏', label: 'Distance',   value: r.km               },
        { icon: '⏱️', label: 'Travel Time', value: r.time            },
        { icon: '💼', label: 'Luggage',    value: v.luggage          },
        { icon: '💰', label: 'Pricing',    value: 'Fixed SAR'        },
        { icon: '🚪', label: 'Service',    value: 'Door-to-door'     },
      ],
      faqs: [
        { q: `How long does a ${v.seats}-seater taxi take from ${oc.name} to ${dc.name}?`,     a: `The ${v.name} taxi from ${oc.name} to ${dc.name} takes approximately ${r.time} (${r.km}). Saudi Cabs GMC provides door-to-door service with rest stops for prayers and meals.` },
        { q: `How much does a ${v.seats}-seater taxi from ${oc.name} to ${dc.name} cost?`,     a: `Saudi Cabs GMC quotes a fixed SAR price before departure — no meters, no surprises. WhatsApp +966 56 948 7569 for the current rate.` },
        { q: `Can a ${v.name} fit all my luggage for the ${oc.name}–${dc.name} route?`,        a: `Yes. The ${v.name} carries up to ${v.seats} passengers and ${v.luggage} — suitable for families with typical Hajj or Umrah luggage.` },
        { q: `Is there a direct taxi from ${oc.name} to ${dc.name} with no transfers?`,        a: `Yes. Saudi Cabs GMC provides a direct, non-stop door-to-door taxi from ${oc.name} to ${dc.name}. The driver takes you straight from your hotel to your destination hotel.` },
      ],
      relatedLinks: [
        { href: `/makkah-to-madinah`,   label: 'Makkah → Madinah Route', tag: 'Route'   },
        { href: oc.hub,                 label: `Taxi in ${oc.name}`,      tag: 'City'    },
        { href: dc.hub,                 label: `Taxi in ${dc.name}`,      tag: 'City'    },
        { href: '/taxi-vehicles',       label: 'All Vehicle Sizes',       tag: 'Hub'     },
      ],
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Routes', href: '/routes-map' },
        { name: `${oc.name} → ${dc.name}`, href: `/${rk}` },
        { name: v.label, href: `/${slug}` },
      ],
      waMessage: `Hello, I'd like to book a ${v.seats}-seater taxi from ${oc.name} to ${dc.name}`,
      schema: { '@context': 'https://schema.org', '@graph': [ taxiSchema(`${v.label} Taxi ${oc.name} to ${dc.name}`, `${v.name} direct taxi from ${oc.name} to ${dc.name}. ${r.km}, ${r.time}, fixed price.`, `${BASE}/${slug}`, oc.name, v.name) ] },
    })
  }
}

// ─ 4. Airport pages ──────────────────────────────────────────────────────────

interface AirportPageSpec {
  slug:      string
  airport:   AirportKey
  destKey:   string
  serviceKey?: ServiceKey
  vehicleKey?: VehicleKey
  direction: 'from' | 'to'
}

const AIRPORT_SPECS: AirportPageSpec[] = [
  // JED generic service
  ...(['taxi','cab','car-rent-with-driver'] as ServiceKey[]).flatMap(sk =>
    (['makkah','madinah','taif'] as const).map(dk => ({
      slug: `${sk}-jeddah-airport-to-${dk}`, airport: 'jeddah' as AirportKey, destKey: dk, serviceKey: sk, direction: 'from' as const,
    }))
  ),
  { slug: 'taxi-makkah-to-jeddah-airport',   airport: 'jeddah',  destKey: 'makkah',  serviceKey: 'taxi', direction: 'to' },
  { slug: 'taxi-madinah-to-jeddah-airport',  airport: 'jeddah',  destKey: 'madinah', serviceKey: 'taxi', direction: 'to' },
  // JED vehicle-specific
  ...(['4-seater','7-seater','11-seater','17-seater'] as VehicleKey[]).flatMap(vk =>
    (['makkah','madinah','taif'] as const).map(dk => ({
      slug: `${vk}-taxi-jeddah-airport-to-${dk}`, airport: 'jeddah' as AirportKey, destKey: dk, vehicleKey: vk, serviceKey: 'taxi' as ServiceKey, direction: 'from' as const,
    }))
  ),
  // MED generic
  ...(['taxi','cab','car-rent-with-driver'] as ServiceKey[]).flatMap(sk =>
    (['makkah','madinah-hotel','jeddah'] as const).map(dk => ({
      slug: `${sk}-madinah-airport-to-${dk}`, airport: 'madinah' as AirportKey, destKey: dk, serviceKey: sk, direction: 'from' as const,
    }))
  ),
  { slug: 'taxi-makkah-to-madinah-airport', airport: 'madinah', destKey: 'makkah', serviceKey: 'taxi', direction: 'to' },
  // MED vehicle-specific
  ...(['4-seater','7-seater','11-seater','17-seater'] as VehicleKey[]).flatMap(vk =>
    (['makkah','hotel'] as const).map(dk => ({
      slug: `${vk}-taxi-madinah-airport-to-${dk}`, airport: 'madinah' as AirportKey, destKey: dk, vehicleKey: vk, serviceKey: 'taxi' as ServiceKey, direction: 'from' as const,
    }))
  ),
  // TIF generic
  ...(['taxi','cab','car-rent-with-driver'] as ServiceKey[]).flatMap(sk =>
    (['makkah','taif-city','jeddah'] as const).map((dk, i) => {
      if (sk === 'car-rent-with-driver' && i === 2) return null
      return { slug: `${sk}-taif-airport-to-${dk}`, airport: 'taif' as AirportKey, destKey: dk, serviceKey: sk, direction: 'from' as const }
    }).filter(Boolean)
  ) as AirportPageSpec[],
  { slug: 'car-rent-with-driver-taif-airport-to-taif', airport: 'taif', destKey: 'taif', serviceKey: 'car-rent-with-driver', direction: 'from' },
  // TIF vehicle-specific
  ...(['4-seater','7-seater','11-seater','17-seater'] as VehicleKey[]).map(vk => ({
    slug: `${vk}-taxi-taif-airport-to-makkah`, airport: 'taif' as AirportKey, destKey: 'makkah', vehicleKey: vk, serviceKey: 'taxi' as ServiceKey, direction: 'from' as const,
  })),
  { slug: '4-seater-taxi-taif-airport-to-city', airport: 'taif', destKey: 'city', vehicleKey: '4-seater', serviceKey: 'taxi', direction: 'from' },
]

for (const spec of AIRPORT_SPECS) {
  const ap   = AIRPORTS[spec.airport]
  const svc  = SERVICES[spec.serviceKey ?? 'taxi']
  const veh  = spec.vehicleKey ? VEHICLES[spec.vehicleKey] : null
  const raw  = spec.destKey.replace(/-/g, ' ')
  const dest = raw.charAt(0).toUpperCase() + raw.slice(1)
  const seats = veh ? `${veh.seats}-seat ` : ''
  const vName = veh ? veh.name : ''
  const dir   = spec.direction === 'from'
    ? `from ${ap.shortName} to ${dest}`
    : `from ${dest} to ${ap.shortName}`
  const routeData = ap.distances[spec.destKey as keyof typeof ap.distances]
  const km   = routeData?.km   ?? ''
  const time = routeData?.time ?? ''
  reg({
    slug: spec.slug, pageType: 'airport',
    metaTitle:   `${seats ? seats.trim() + ' ' : ''}${svc.label} ${dir} | Saudi Cabs GMC`,
    metaDesc:    `Book a ${seats}${svc.label.toLowerCase()} ${dir}${km ? ` (${km}, ${time})` : ''}. Fixed price, name-board pickup, 24/7. Saudi Cabs GMC. WhatsApp: +966 56 948 7569.`,
    h1:          `${seats ? seats.trim() + ' ' : ''}${svc.label} — ${dir.charAt(0).toUpperCase() + dir.slice(1)}`,
    subtitle:    `Fixed-price ${svc.label.toLowerCase()} ${dir}${km ? `. ${km} · ${time}` : ''}. Name-board meet & greet. Flight tracking. 24/7.`,
    quickAnswer: `Saudi Cabs GMC provides a${seats ? ' ' + seats.trim() : ''} ${svc.label.toLowerCase()} ${dir}${km ? ` — ${km}, approximately ${time}` : ''}. Fixed price in SAR. Name-board pickup at arrivals. Book via WhatsApp: +966 56 948 7569.`,
    badge:       `${ap.code} · ${svc.label}`,
    ...(veh ? { vehicleName: veh.name, vehicleSeats: veh.seats, vehicleLuggage: veh.luggage, vehicleAvailable: veh.available } : {}),
    serviceLabel: svc.label, location: ap.shortName,
    distance: km, travelTime: time,
    keyFacts: [
      { icon: '✈️', label: 'Airport',    value: ap.shortName                 },
      { icon: '📍', label: 'Destination', value: dest                        },
      ...(km   ? [{ icon: '📏', label: 'Distance',   value: km   }] : []),
      ...(time ? [{ icon: '⏱️', label: 'Travel Time', value: time }] : []),
      { icon: '💰', label: 'Pricing',    value: 'Fixed SAR'                  },
      { icon: '🪧', label: 'Pickup',     value: 'Name-board at arrivals'     },
    ],
    faqs: [
      { q: `How do I book a${seats ? ' ' + seats.trim() : ''} ${svc.label.toLowerCase()} ${dir}?`,    a: `WhatsApp Saudi Cabs GMC at +966 56 948 7569 with your flight details, number of passengers, and luggage. Receive a fixed SAR price within minutes. Your driver will meet you at arrivals with a name-board.` },
      { q: `How long does it take ${dir}?`,                                                            a: time ? `The journey ${dir} takes approximately ${time} (${km}). Travel time may vary depending on traffic.` : `Contact Saudi Cabs GMC via WhatsApp for the estimated travel time for this route.` },
      { q: `Does Saudi Cabs GMC track flights at ${ap.shortName}?`,                                   a: `Yes. Saudi Cabs GMC monitors all incoming flights at ${ap.name} (${ap.code}). If your flight is delayed, the driver automatically adjusts — at no extra charge.` },
      { q: `What ${svc.label.toLowerCase()} vehicles are available ${dir}?`,                          a: veh ? `For this route, Saudi Cabs GMC uses a ${veh.name} — ${veh.seats} seats, ${veh.luggage}.` : `Saudi Cabs GMC offers 4-seater (Toyota Camry), 7-seater (Hyundai Staria), 11-seater, and 17-seater vehicles. Choose your vehicle when booking via WhatsApp.` },
    ],
    relatedLinks: [
      { href: '/airport-taxi',            label: 'All Airport Taxis',        tag: 'Hub'     },
      { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah', tag: 'Airport' },
      { href: '/taxi-vehicles',           label: 'All Vehicle Sizes',        tag: 'Hub'     },
    ],
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Airport Taxis', href: '/airport-taxi' },
      { name: `${ap.shortName}`, href: `/${svc.label.toLowerCase()}-${spec.airport}-airport-to-makkah` },
    ],
    waMessage: `Hello, I'd like to book a ${seats}${svc.label.toLowerCase()} ${dir}`,
    schema: { '@context': 'https://schema.org', '@graph': [ taxiSchema(`${svc.label} ${dir}`, `Fixed-price ${svc.label.toLowerCase()} ${dir}${km ? ` (${km}, ${time})` : ''}. Name-board pickup, flight tracking.`, `${BASE}/${spec.slug}`, dest, vName || undefined) ] },
  })
}

// ─ 5. High-intent city pages (48 pages) ──────────────────────────────────────

for (const ik of I_KEYS) {
  const intent = INTENTS[ik]
  for (const sk of S_KEYS) {
    const s = SERVICES[sk]
    for (const ck of C_KEYS) {
      const c   = CITIES[ck]
      const v   = VEHICLES[intent.prefVehicle]
      const slug = `${ik}-${sk}-${ck}`
      reg({
        slug, pageType: 'intent-city',
        metaTitle:   `${intent.label} ${s.label} in ${c.name} | ${v.name} | Saudi Cabs GMC`,
        metaDesc:    `Book a ${intent.desc} ${s.label.toLowerCase()} in ${c.name}. Saudi Cabs GMC — ${v.name}, fixed SAR price, 24/7. WhatsApp: +966 56 948 7569.`,
        h1:          `${intent.label} ${s.label} in ${c.name}`,
        subtitle:    `${intent.desc.charAt(0).toUpperCase() + intent.desc.slice(1)} in ${c.name} with Saudi Cabs GMC. ${v.name} — up to ${v.seats} passengers, ${v.luggage}. Fixed price, 24/7.`,
        quickAnswer: `Saudi Cabs GMC offers a ${intent.desc} ${s.label.toLowerCase()} in ${c.name} — typically using a ${v.name} (${v.seats} seats). Fixed SAR price, no hidden fees. Book via WhatsApp: +966 56 948 7569.`,
        badge:       `${intent.label} · ${c.name}`,
        vehicleName: v.name, vehicleSeats: v.seats, vehicleLuggage: v.luggage, vehicleAvailable: v.available,
        serviceLabel: s.label, location: c.name,
        keyFacts: [
          { icon: '⭐', label: 'Service',    value: intent.label                 },
          { icon: '🚗', label: 'Vehicle',    value: v.name                       },
          { icon: '👥', label: 'Passengers', value: `Up to ${v.seats}`           },
          { icon: '💰', label: 'Pricing',    value: `${intent.priceWord} SAR`    },
          { icon: '📍', label: 'City',       value: c.name                       },
          { icon: '⏰', label: 'Available',  value: '24 / 7'                     },
        ],
        faqs: [
          { q: `What is a ${intent.label} ${s.label.toLowerCase()} in ${c.name}?`,               a: `A ${intent.label} ${s.label.toLowerCase()} from Saudi Cabs GMC in ${c.name} means ${intent.desc}. The recommended vehicle is the ${v.name} (${v.seats} seats, ${v.luggage}).` },
          { q: `How much does a ${intent.label} ${s.label.toLowerCase()} cost in ${c.name}?`,   a: `Saudi Cabs GMC provides a ${intent.priceWord} fixed SAR price for ${intent.label.toLowerCase()} ${s.label.toLowerCase()} in ${c.name}. WhatsApp +966 56 948 7569 for the latest rate.` },
          { q: `Is the ${intent.label} ${s.label.toLowerCase()} available during Hajj in ${c.name}?`, a: `Yes. Saudi Cabs GMC operates 24/7 year-round including Hajj and Umrah seasons. Early booking is essential during peak periods.` },
          { q: `How do I book a ${intent.label} ${s.label.toLowerCase()} in ${c.name}?`,         a: `WhatsApp Saudi Cabs GMC at +966 56 948 7569. Mention you need a ${intent.label.toLowerCase()} ${s.label.toLowerCase()} in ${c.name}. Receive a fixed price within minutes.` },
        ],
        relatedLinks: [
          { href: c.hub,            label: `All ${s.label}s in ${c.name}`, tag: 'City' },
          { href: `/taxi-vehicles`, label: 'All Vehicle Sizes',            tag: 'Hub'  },
          { href: s.hub,            label: `All ${s.label} Services`,      tag: 'Hub'  },
        ],
        breadcrumbs: [
          { name: 'Home', href: '/' },
          { name: `${s.label} Services`, href: s.hub },
          { name: c.name, href: c.hub },
          { name: intent.label, href: `/${slug}` },
        ],
        waMessage: `Hello, I'd like to book a ${intent.label.toLowerCase()} ${s.label.toLowerCase()} in ${c.name}`,
        schema: { '@context': 'https://schema.org', '@graph': [ taxiSchema(`${intent.label} ${s.label} in ${c.name}`, `${intent.desc} ${s.label.toLowerCase()} service in ${c.name}. ${v.name}, fixed price, 24/7.`, `${BASE}/${slug}`, c.name, v.name) ] },
      })
    }
  }
}

// ─ 6. High-intent airport pages (8 pages) ────────────────────────────────────

const INTENT_AIRPORT_SPECS = [
  { slug: 'vip-taxi-jeddah-airport',     ik: 'vip'     as IntentKey, airport: 'jeddah'  as AirportKey },
  { slug: 'cheap-taxi-jeddah-airport',   ik: 'cheap'   as IntentKey, airport: 'jeddah'  as AirportKey },
  { slug: 'private-taxi-jeddah-airport', ik: 'private' as IntentKey, airport: 'jeddah'  as AirportKey },
  { slug: 'vip-taxi-madinah-airport',    ik: 'vip'     as IntentKey, airport: 'madinah' as AirportKey },
  { slug: 'cheap-taxi-madinah-airport',  ik: 'cheap'   as IntentKey, airport: 'madinah' as AirportKey },
  { slug: 'private-taxi-madinah-airport',ik: 'private' as IntentKey, airport: 'madinah' as AirportKey },
  { slug: 'vip-taxi-taif-airport',       ik: 'vip'     as IntentKey, airport: 'taif'    as AirportKey },
  { slug: 'cheap-taxi-taif-airport',     ik: 'cheap'   as IntentKey, airport: 'taif'    as AirportKey },
]

for (const spec of INTENT_AIRPORT_SPECS) {
  const intent = INTENTS[spec.ik]
  const ap     = AIRPORTS[spec.airport]
  const v      = VEHICLES[intent.prefVehicle]
  reg({
    slug: spec.slug, pageType: 'intent-airport',
    metaTitle:   `${intent.label} Airport Taxi — ${ap.shortName} | Saudi Cabs GMC`,
    metaDesc:    `Book a ${intent.desc} airport taxi at ${ap.shortName}. Saudi Cabs GMC — ${v.name}, fixed SAR price, name-board pickup, 24/7. WhatsApp: +966 56 948 7569.`,
    h1:          `${intent.label} Airport Taxi — ${ap.shortName}`,
    subtitle:    `${intent.desc.charAt(0).toUpperCase() + intent.desc.slice(1)} taxi service at ${ap.name} (${ap.code}). Name-board pickup · Flight tracking · Fixed SAR · 24/7.`,
    quickAnswer: `Saudi Cabs GMC offers a ${intent.desc} airport taxi at ${ap.shortName} — typically in a ${v.name}. Name-board pickup at arrivals. Fixed SAR price. Book via WhatsApp: +966 56 948 7569.`,
    badge:       `${intent.label} · ${ap.code}`,
    vehicleName: v.name, vehicleSeats: v.seats, vehicleLuggage: v.luggage, vehicleAvailable: v.available,
    serviceLabel: 'Taxi', location: ap.shortName,
    keyFacts: [
      { icon: '✈️', label: 'Airport',    value: ap.shortName                  },
      { icon: '⭐', label: 'Service',    value: intent.label                  },
      { icon: '🚗', label: 'Vehicle',    value: v.name                        },
      { icon: '💰', label: 'Pricing',    value: `${intent.priceWord} SAR`     },
      { icon: '🪧', label: 'Pickup',     value: 'Name-board at arrivals'      },
      { icon: '⏰', label: 'Available',  value: '24 / 7'                      },
    ],
    faqs: [
      { q: `What is a ${intent.label} airport taxi at ${ap.shortName}?`,          a: `A ${intent.label} airport taxi from Saudi Cabs GMC at ${ap.shortName} means ${intent.desc}. Your driver meets you at arrivals with a name-board in a ${v.name}.` },
      { q: `How much does a ${intent.label} airport taxi cost at ${ap.shortName}?`, a: `Saudi Cabs GMC provides a fixed SAR price for ${intent.label.toLowerCase()} airport taxi service at ${ap.shortName}. WhatsApp +966 56 948 7569 for the current rate.` },
      { q: `Does Saudi Cabs GMC track flights at ${ap.shortName}?`,               a: `Yes. Saudi Cabs GMC tracks all arrivals at ${ap.name} (${ap.code}). If your flight is delayed, your driver waits — no extra charge.` },
    ],
    relatedLinks: [
      { href: '/airport-taxi',             label: 'All Airport Taxis',         tag: 'Hub'     },
      { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah',  tag: 'Airport' },
      { href: '/taxi-vehicles',            label: 'All Vehicle Sizes',         tag: 'Hub'     },
    ],
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Airport Taxis', href: '/airport-taxi' },
      { name: ap.shortName, href: `/${spec.slug}` },
    ],
    waMessage: `Hello, I'd like to book a ${intent.label.toLowerCase()} airport taxi at ${ap.shortName}`,
    schema: { '@context': 'https://schema.org', '@graph': [ taxiSchema(`${intent.label} Airport Taxi at ${ap.shortName}`, `${intent.desc} airport taxi at ${ap.name}. ${v.name}, fixed price, name-board pickup.`, `${BASE}/${spec.slug}`, ap.shortName, v.name) ] },
  })
}

// ─ 7. Intent × Vehicle × City (8 explicit pages) ─────────────────────────────

const INTENT_VEHICLE_SPECS = [
  { slug: 'vip-7-seater-taxi-makkah',        ik: 'vip'     as IntentKey, vk: '7-seater'  as VehicleKey, ck: 'makkah'  as CityKey },
  { slug: 'cheap-7-seater-taxi-makkah',      ik: 'cheap'   as IntentKey, vk: '7-seater'  as VehicleKey, ck: 'makkah'  as CityKey },
  { slug: 'family-7-seater-taxi-madinah',    ik: 'family'  as IntentKey, vk: '7-seater'  as VehicleKey, ck: 'madinah' as CityKey },
  { slug: 'private-7-seater-taxi-jeddah',    ik: 'private' as IntentKey, vk: '7-seater'  as VehicleKey, ck: 'jeddah'  as CityKey },
  { slug: 'vip-11-seater-taxi-makkah',       ik: 'vip'     as IntentKey, vk: '11-seater' as VehicleKey, ck: 'makkah'  as CityKey },
  { slug: 'cheap-11-seater-taxi-madinah',    ik: 'cheap'   as IntentKey, vk: '11-seater' as VehicleKey, ck: 'madinah' as CityKey },
  { slug: 'vip-17-seater-taxi-makkah',       ik: 'vip'     as IntentKey, vk: '17-seater' as VehicleKey, ck: 'makkah'  as CityKey },
  { slug: 'private-17-seater-taxi-jeddah',   ik: 'private' as IntentKey, vk: '17-seater' as VehicleKey, ck: 'jeddah'  as CityKey },
]

for (const spec of INTENT_VEHICLE_SPECS) {
  const intent = INTENTS[spec.ik]
  const v = VEHICLES[spec.vk]
  const c = CITIES[spec.ck]
  reg({
    slug: spec.slug, pageType: 'intent-vehicle',
    metaTitle:   `${intent.label} ${v.label} Taxi in ${c.name} | ${v.name} | Saudi Cabs GMC`,
    metaDesc:    `Book a ${intent.desc} ${v.seats}-seat taxi in ${c.name} — ${v.name}, fixed SAR price, 24/7. Saudi Cabs GMC. WhatsApp: +966 56 948 7569.`,
    h1:          `${intent.label} ${v.label} Taxi in ${c.name}`,
    subtitle:    `${intent.desc.charAt(0).toUpperCase() + intent.desc.slice(1)} with a ${v.name} in ${c.name}. ${v.seats} passengers · ${v.luggage} · Fixed SAR · 24/7.`,
    quickAnswer: `Saudi Cabs GMC provides a ${intent.desc} ${v.seats}-seat taxi in ${c.name} using a ${v.name}. Fixed SAR price, no meter. Book via WhatsApp: +966 56 948 7569.`,
    badge:       `${intent.label} · ${v.label} · ${c.name}`,
    vehicleName: v.name, vehicleSeats: v.seats, vehicleLuggage: v.luggage, vehicleAvailable: v.available,
    serviceLabel: 'Taxi', location: c.name,
    keyFacts: [
      { icon: '⭐', label: 'Service',    value: intent.label          },
      { icon: '🚗', label: 'Vehicle',    value: v.name                },
      { icon: '👥', label: 'Passengers', value: `Up to ${v.seats}`   },
      { icon: '💼', label: 'Luggage',    value: v.luggage             },
      { icon: '💰', label: 'Pricing',    value: `${intent.priceWord} SAR` },
      { icon: '📍', label: 'City',       value: c.name                },
    ],
    faqs: [
      { q: `What does a ${intent.label} ${v.label} taxi in ${c.name} include?`,   a: `A ${intent.label} ${v.label} taxi from Saudi Cabs GMC in ${c.name} means ${intent.desc} in a ${v.name} — ${v.seats} seats, ${v.luggage}.` },
      { q: `How much does a ${intent.label} ${v.label} taxi cost in ${c.name}?`, a: `Saudi Cabs GMC provides a fixed SAR price. WhatsApp +966 56 948 7569 for the current rate for a ${intent.label.toLowerCase()} ${v.seats}-seat taxi in ${c.name}.` },
    ],
    relatedLinks: [
      { href: c.hub,                    label: `All Taxis in ${c.name}`, tag: 'City' },
      { href: `/7-seater-taxi-${spec.ck}`, label: `7-Seater Taxi in ${c.name}`, tag: 'Vehicle' },
      { href: '/taxi-vehicles',         label: 'All Vehicle Sizes',      tag: 'Hub'  },
    ],
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Taxi Services', href: '/taxi-services' },
      { name: c.name, href: c.hub },
      { name: `${intent.label} ${v.label}`, href: `/${spec.slug}` },
    ],
    waMessage: `Hello, I'd like to book a ${intent.label.toLowerCase()} ${v.seats}-seat taxi in ${c.name}`,
    schema: { '@context': 'https://schema.org', '@graph': [ taxiSchema(`${intent.label} ${v.label} Taxi in ${c.name}`, `${intent.desc} ${v.seats}-seat ${v.name} taxi in ${c.name}. Fixed price, 24/7.`, `${BASE}/${spec.slug}`, c.name, v.name) ] },
  })
}

// ─ 8. Money route pages (4 pages) ────────────────────────────────────────────

const MONEY_ROUTE_SPECS = [
  { slug: 'cheap-makkah-to-madinah-taxi',    ik: 'cheap'   as IntentKey, rk: 'makkah-to-madinah'  as keyof typeof INTERCITY_ROUTES },
  { slug: 'vip-makkah-to-madinah-taxi',      ik: 'vip'     as IntentKey, rk: 'makkah-to-madinah'  as keyof typeof INTERCITY_ROUTES },
  { slug: 'private-jeddah-to-makkah-taxi',   ik: 'private' as IntentKey, rk: 'jeddah-to-makkah'   as keyof typeof INTERCITY_ROUTES },
  { slug: 'family-makkah-to-taif-taxi',      ik: 'family'  as IntentKey, rk: 'makkah-to-taif'     as keyof typeof INTERCITY_ROUTES },
]

for (const spec of MONEY_ROUTE_SPECS) {
  const intent = INTENTS[spec.ik]
  const r  = INTERCITY_ROUTES[spec.rk]
  const v  = VEHICLES[intent.prefVehicle]
  const oc = CITIES[r.origin]
  const dc = CITIES[r.dest]
  reg({
    slug: spec.slug, pageType: 'money-route',
    metaTitle:   `${intent.label} Taxi ${oc.name} to ${dc.name} | ${v.name} | Saudi Cabs GMC`,
    metaDesc:    `Book a ${intent.desc} taxi from ${oc.name} to ${dc.name} — ${r.km}, ${r.time}. ${v.name}, fixed SAR, 24/7. Saudi Cabs GMC. WhatsApp: +966 56 948 7569.`,
    h1:          `${intent.label} Taxi — ${oc.name} to ${dc.name}`,
    subtitle:    `${intent.desc.charAt(0).toUpperCase() + intent.desc.slice(1)} from ${oc.name} to ${dc.name}. ${r.km} · ${r.time} · ${v.name} · Fixed SAR.`,
    quickAnswer: `Saudi Cabs GMC provides a ${intent.desc} taxi from ${oc.name} to ${dc.name} — ${r.km}, ${r.time}, in a ${v.name}. Fixed SAR price. Book via WhatsApp: +966 56 948 7569.`,
    badge:       `${intent.label} · ${oc.name} → ${dc.name}`,
    vehicleName: v.name, vehicleSeats: v.seats, vehicleLuggage: v.luggage, vehicleAvailable: v.available,
    serviceLabel: 'Taxi', location: `${oc.name} to ${dc.name}`,
    distance: r.km, travelTime: r.time,
    keyFacts: [
      { icon: '⭐', label: 'Service',    value: intent.label          },
      { icon: '📏', label: 'Distance',   value: r.km                  },
      { icon: '⏱️', label: 'Travel Time', value: r.time              },
      { icon: '🚗', label: 'Vehicle',    value: v.name                },
      { icon: '💰', label: 'Pricing',    value: `${intent.priceWord} SAR` },
      { icon: '🚪', label: 'Service',    value: 'Door-to-door'        },
    ],
    faqs: [
      { q: `How much does a ${intent.label} taxi from ${oc.name} to ${dc.name} cost?`, a: `Saudi Cabs GMC provides a ${intent.priceWord} fixed SAR price for the ${oc.name}–${dc.name} route. WhatsApp +966 56 948 7569 for the current rate.` },
      { q: `How long does a ${intent.label} taxi take from ${oc.name} to ${dc.name}?`, a: `The ${oc.name}–${dc.name} trip takes approximately ${r.time} (${r.km}). Saudi Cabs GMC provides door-to-door service with rest stops.` },
      { q: `What vehicle is used for the ${intent.label} taxi from ${oc.name} to ${dc.name}?`, a: `For the ${intent.label} ${oc.name}–${dc.name} taxi, Saudi Cabs GMC typically uses a ${v.name} — ${v.seats} seats, ${v.luggage}.` },
    ],
    relatedLinks: [
      { href: `/${spec.rk}`,          label: `${oc.name} → ${dc.name} Route`, tag: 'Route'  },
      { href: oc.hub,                 label: `Taxi in ${oc.name}`,            tag: 'City'   },
      { href: dc.hub,                 label: `Taxi in ${dc.name}`,            tag: 'City'   },
      { href: '/taxi-vehicles',       label: 'All Vehicle Sizes',             tag: 'Hub'    },
    ],
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Routes', href: '/routes-map' },
      { name: `${oc.name} → ${dc.name}`, href: `/${spec.rk}` },
      { name: intent.label, href: `/${spec.slug}` },
    ],
    waMessage: `Hello, I'd like to book a ${intent.label.toLowerCase()} taxi from ${oc.name} to ${dc.name}`,
    schema: { '@context': 'https://schema.org', '@graph': [ taxiSchema(`${intent.label} Taxi ${oc.name} to ${dc.name}`, `${intent.desc} taxi from ${oc.name} to ${dc.name}. ${r.km}, ${r.time}. ${v.name}, fixed price.`, `${BASE}/${spec.slug}`, oc.name, v.name) ] },
  })
}

// ── Public API ────────────────────────────────────────────────────────────────

export function getAllVehicleSeoSlugs(): string[] {
  return Array.from(REGISTRY.keys())
}

export function getVehicleSeoPageData(slug: string): VehicleSeoPageData | null {
  return REGISTRY.get(slug) ?? null
}
