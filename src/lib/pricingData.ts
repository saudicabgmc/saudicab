type BText = { ar: string; en: string }

export interface VehicleRate {
  key: 'sedan' | 'staria' | 'gmc'
  name: BText
  seats: string
  price: number
}

export type PricingCategory = 'airport' | 'madinah' | 'ziyarat'

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
}

export const categoryColor: Record<PricingCategory, string> = {
  airport:  '#0B3D2E',
  madinah:  '#0F5132',
  ziyarat:  '#198754',
}

export const vehicleImages: Record<string, string> = {
  sedan:  'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80',
  staria: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=600&q=80',
  gmc:    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
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
    from: { ar: 'مطار جدة', en: 'Jeddah Airport' },
    to:   { ar: 'فندق مكة المكرمة', en: 'Makkah Hotel' },
    category: 'airport',
    rates: mkRates(330, 380, 530),
  },
  {
    id: 'makkah-jed',
    from: { ar: 'فندق مكة المكرمة', en: 'Makkah Hotel' },
    to:   { ar: 'مطار جدة', en: 'Jeddah Airport' },
    category: 'airport',
    rates: mkRates(305, 355, 530),
  },
  {
    id: 'jed-madinah',
    from: { ar: 'مطار جدة', en: 'Jeddah Airport' },
    to:   { ar: 'فندق المدينة المنورة', en: 'Madinah Hotel' },
    category: 'airport',
    rates: mkRates(505, 555, 1030),
  },

  /* ── Madinah Transfers ───────────────────────────────────────── */
  {
    id: 'mad-hotel',
    from: { ar: 'مطار المدينة المنورة', en: 'Madinah Airport' },
    to:   { ar: 'الفندق', en: 'Hotel' },
    category: 'madinah',
    rates: mkRates(230, 260, 380),
  },
  {
    id: 'hotel-mad',
    from: { ar: 'الفندق', en: 'Hotel' },
    to:   { ar: 'مطار المدينة المنورة', en: 'Madinah Airport' },
    category: 'madinah',
    rates: mkRates(210, 230, 380),
  },

  /* ── Ziyarat Services ────────────────────────────────────────── */
  {
    id: 'ziyarat-makkah',
    from: { ar: 'مكة المكرمة', en: 'Makkah' },
    to:   { ar: 'جولة الزيارات (نصف يوم)', en: 'Ziyarat Tour (Half Day)' },
    category: 'ziyarat',
    rates: mkRates(250, 300, 400),
  },
  {
    id: 'ziyarat-madinah',
    from: { ar: 'المدينة المنورة', en: 'Madinah' },
    to:   { ar: 'جولة الزيارات (نصف يوم)', en: 'Ziyarat Tour (Half Day)' },
    category: 'ziyarat',
    rates: mkRates(250, 300, 400),
  },
]

/* Helper: filter by IDs */
export const getPricing = (...ids: string[]) =>
  allPricingRoutes.filter(r => ids.includes(r.id))
