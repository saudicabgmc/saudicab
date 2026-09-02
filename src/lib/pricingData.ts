type BText = { ar: string; en: string }

export interface VehicleRate {
  key: 'sedan' | 'staria' | 'gmc'
  name: BText
  seats: string
  price: number
}

export type PricingCategory = 'airport' | 'madinah' | 'ziyarat' | 'intercity'

export interface PricingRoute {
  id: string
  from: BText
  to: BText
  category: PricingCategory
  rates: VehicleRate[]
}

export const categoryLabel: Record<PricingCategory, BText> = {
  airport:  { ar: '✈ توصيل المطار', en: '✈ Airport Transfers' },
  madinah:  { ar: '🕌 توصيل المدينة المنورة', en: '🕌 Madinah Transfers' },
  ziyarat:  { ar: '🕋 جولات الزيارات', en: '🕋 Ziyarat Services' },
  intercity: { ar: '🚗 رحلات بين المدن', en: '🚗 Intercity Transfers' },
}

export const categoryColor: Record<PricingCategory, string> = {
  airport:  '#0B3D2E',
  madinah:  '#0F5132',
  ziyarat:  '#198754',
  intercity: '#7C3AED',
}

export const vehicleImages: Record<string, string> = {
  sedan:  '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp',
  staria: '/fleet/hyundai-staria-placeholder-saudi-cabs-gmc.webp',
  gmc:    '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp',
}

const mkRates = (sedan: number, staria: number, gmc: number): VehicleRate[] => [
  { key: 'sedan',  name: { ar: 'سيدان',           en: 'Sedan'           }, seats: '4',  price: sedan  },
  { key: 'staria', name: { ar: 'ستاريا (7 مقاعد)', en: 'Staria (7 Seats)' }, seats: '7',  price: staria },
  { key: 'gmc',    name: { ar: 'GMC (7 مقاعد)',    en: 'GMC (7 Seats)'   }, seats: '7',  price: gmc    },
]

export const allPricingRoutes: PricingRoute[] = [
  /* ── Airport Transfers ───────────────────────────────────────── */
  {
    id: 'jed-makkah',
    from: { ar: 'مطار جدة الدولي', en: 'Jeddah Airport' },
    to:   { ar: 'مكة المكرمة (الفندق)', en: 'Makkah Hotel' },
    category: 'airport',
    rates: mkRates(330, 380, 530),
  },
  {
    id: 'makkah-jed',
    from: { ar: 'مكة المكرمة (الفندق)', en: 'Makkah Hotel' },
    to:   { ar: 'مطار جدة الدولي', en: 'Jeddah Airport' },
    category: 'airport',
    rates: mkRates(305, 355, 530),
  },
  {
    id: 'jed-madinah',
    from: { ar: 'مطار جدة الدولي', en: 'Jeddah Airport' },
    to:   { ar: 'المدينة المنورة (الفندق)', en: 'Madinah Hotel' },
    category: 'airport',
    rates: mkRates(505, 555, 1030),
  },

  /* ── Madinah Transfers ───────────────────────────────────────── */
  {
    id: 'mad-hotel',
    from: { ar: 'مطار المدينة المنورة', en: 'Madinah Airport' },
    to:   { ar: 'المدينة المنورة (الفندق)', en: 'Madinah Hotel' },
    category: 'madinah',
    rates: mkRates(230, 260, 380),
  },
  {
    id: 'hotel-mad',
    from: { ar: 'المدينة المنورة (الفندق)', en: 'Madinah Hotel' },
    to:   { ar: 'مطار المدينة المنورة', en: 'Madinah Airport' },
    category: 'madinah',
    rates: mkRates(210, 230, 380),
  },

  /* ── Intercity Transfers ─────────────────────────────────────── */
  {
    id: 'makkah-madinah',
    from: { ar: 'مكة المكرمة', en: 'Makkah' },
    to:   { ar: 'المدينة المنورة', en: 'Madinah' },
    category: 'intercity',
    rates: mkRates(350, 400, 680),
  },
  {
    id: 'madinah-makkah',
    from: { ar: 'المدينة المنورة', en: 'Madinah' },
    to:   { ar: 'مكة المكرمة', en: 'Makkah' },
    category: 'intercity',
    rates: mkRates(350, 400, 680),
  },

  /* ── Ziyarat Services ────────────────────────────────────────── */
  {
    id: 'ziyarat-makkah',
    from: { ar: 'مكة المكرمة', en: 'Makkah' },
    to:   { ar: 'جولة زيارات مكة المكرمة', en: 'Makkah Ziyarat Tour' },
    category: 'ziyarat',
    rates: mkRates(250, 320, 500),
  },
  {
    id: 'ziyarat-madinah',
    from: { ar: 'المدينة المنورة', en: 'Madinah' },
    to:   { ar: 'جولة الزيارات', en: 'Ziyarat Tour' },
    category: 'ziyarat',
    rates: mkRates(250, 300, 400),
  },
]

/* Helper: filter by IDs */
export const getPricing = (...ids: string[]) =>
  allPricingRoutes.filter(r => ids.includes(r.id))

/* Helper: dynamically match route and lookup rate */
export function findRoutePrice(fromName: string, toName: string, vehicleKey: string): number | null {
  if (!fromName || !toName || !vehicleKey) return null
  const clean = (s: string) => s.toLowerCase().trim()
  const f = clean(fromName)
  const t = clean(toName)

  let routeId = ''
  
  const isJeddahAp = f.includes('jeddah airport') || f.includes('مطار جدة')
  const isMadinahAp = f.includes('madinah airport') || f.includes('مطار المدينة')
  const isMakkah = f.includes('makkah') || f.includes('مكة')
  const isMadinah = f.includes('madinah') || f.includes('المدينة')
  const isHotel = f.includes('hotel') || f.includes('فندق') || f.includes('الفندق')
  const isZiyarat = t.includes('ziyarat') || t.includes('زيارات') || t.includes('جولة')

  const toJeddahAp = t.includes('jeddah airport') || t.includes('مطار جدة')
  const toMadinahAp = t.includes('madinah airport') || t.includes('مطار المدينة')
  const toMakkah = t.includes('makkah') || t.includes('مكة')
  const toMadinah = t.includes('madinah') || t.includes('المدينة')
  const toHotel = t.includes('hotel') || t.includes('فندق') || t.includes('الفندق')

  if (isJeddahAp && toMakkah) {
    routeId = 'jed-makkah'
  } else if (isMakkah && toJeddahAp) {
    routeId = 'makkah-jed'
  } else if (isJeddahAp && toMadinah) {
    routeId = 'jed-madinah'
  } else if (isMadinahAp && (toHotel || toMadinah)) {
    routeId = 'mad-hotel'
  } else if ((isHotel || isMadinah) && toMadinahAp) {
    routeId = 'hotel-mad'
  } else if (isMakkah && toMadinah) {
    routeId = 'makkah-madinah'
  } else if (isMadinah && toMakkah) {
    routeId = 'madinah-makkah'
  } else if (isMakkah && isZiyarat) {
    routeId = 'ziyarat-makkah'
  } else if (isMadinah && isZiyarat) {
    routeId = 'ziyarat-madinah'
  }

  if (routeId) {
    const route = allPricingRoutes.find(r => r.id === routeId)
    if (route) {
      const rate = route.rates.find(r => r.key === vehicleKey)
      return rate ? rate.price : null
    }
  }
  return null
}

