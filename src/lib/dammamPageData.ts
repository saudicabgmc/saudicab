import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for the Dammam city page (/dammam-taxi-service).
 * Dammam has no confirmed per-route SAR pricing in pricingData.ts and no dedicated
 * airport route page — this page never states a fare or a specific airport route URL.
 * Route times/distances mirror routePageData.ts (dammam-to-makkah, makkah-to-dammam,
 * dammam-to-madinah — the only three real Dammam route pages; there is no
 * dammam-to-jeddah or madinah-to-dammam page) and the existing FAQs; nothing here
 * introduces new facts. Content is framed around Dammam's real role on the site: the
 * Eastern Province's gateway city and the start/end point of its longest intercity
 * routes — not a reskin of the Riyadh or Hijaz city pages.
 */

export type BText = { ar: string; en: string }

export interface DammamPageProps {
  cityName: BText
  citySlug: string
  citySlogan: BText
  faqs: FAQItem[]
}

/* ── Hero ─────────────────────────────────────────────────────── */

export const heroContent = {
  h1: {
    en: 'Dammam Taxi & Private Transport Services',
    ar: 'خدمات تاكسي ونقل خاص في الدمام',
  },
  intro: {
    en: 'Private transportation in Dammam for city transfers, hotels, airport journeys, business and personal trips, and long-distance intercity travel to Makkah and Madinah. Choose a Sedan, Hyundai Staria or GMC Yukon and confirm your trip directly via WhatsApp.',
    ar: 'نقل خاص في الدمام للتنقل داخل المدينة والفنادق ورحلات المطار والرحلات التجارية والشخصية والرحلات الطويلة بين المدن إلى مكة المكرمة والمدينة المنورة. اختر سيدان أو هيونداي ستاريا أو GMC يوكون وأكّد رحلتك مباشرة عبر واتساب.',
  },
  primaryCta: { en: 'Book via WhatsApp', ar: 'احجز عبر واتساب' },
  secondaryCta: { en: 'Explore Dammam Routes', ar: 'استكشف خطوط الدمام' },
}

export const trustItems: { iconName: string; label: BText }[] = [
  { iconName: 'MessageCircle', label: { en: '24/7 WhatsApp Booking', ar: 'حجز عبر واتساب ٢٤/٧' } },
  { iconName: 'Car', label: { en: 'Private Vehicles', ar: 'سيارات خاصة' } },
  { iconName: 'Banknote', label: { en: 'Fixed Price Confirmed Before Booking', ar: 'سعر ثابت يُؤكَّد قبل الحجز' } },
  { iconName: 'Users', label: { en: 'No Shared Rides', ar: 'بدون مشاركة الرحلة' } },
]

/* ── Dammam private taxi services ─────────────────────────────── */

export const servicesIntro: BText = {
  en: 'Saudi Cabs GMC arranges private transportation in Dammam for city and hotel transfers, business travel across the Eastern Province, and the long-distance intercity trips many travelers from Dammam need to reach Makkah and Madinah. Airport pickups and drop-offs to and from King Fahd International Airport can also be arranged — share your flight details on WhatsApp and we will confirm availability and timing.',
  ar: 'تقدم Saudi Cabs GMC نقلاً خاصاً في الدمام للتوصيل داخل المدينة والفنادق، ورحلات العمل في أنحاء المنطقة الشرقية، والرحلات الطويلة بين المدن التي يحتاجها كثير من مسافري الدمام للوصول إلى مكة المكرمة والمدينة المنورة. كما يمكن ترتيب الاستلام والتوصيل من وإلى مطار الملك فهد الدولي — شارك تفاصيل رحلتك عبر واتساب وسنؤكد لك التوفر والتوقيت.',
}

export const serviceList: { iconName: string; title: BText; desc: BText }[] = [
  {
    iconName: 'Building2',
    title: { en: 'Dammam City Transfers', ar: 'توصيل داخل الدمام' },
    desc: { en: 'Private rides between hotels, offices and destinations across Dammam.', ar: 'رحلات خاصة بين الفنادق والمكاتب والوجهات في أنحاء الدمام.' },
  },
  {
    iconName: 'Briefcase',
    title: { en: 'Hotel & Business Transfers', ar: 'توصيل الفنادق ورحلات العمل' },
    desc: { en: 'A private vehicle for meetings, hotel pickups and business travel in the Eastern Province.', ar: 'سيارة خاصة للاجتماعات والاستلام من الفنادق ورحلات العمل في المنطقة الشرقية.' },
  },
  {
    iconName: 'Plane',
    title: { en: 'Airport Transportation', ar: 'نقل من وإلى المطار' },
    desc: { en: 'Transfers to and from King Fahd International Airport, arranged by WhatsApp.', ar: 'توصيل من وإلى مطار الملك فهد الدولي، يُرتَّب عبر واتساب.' },
  },
  {
    iconName: 'Route',
    title: { en: 'Intercity Private Taxi', ar: 'تاكسي خاص بين المدن' },
    desc: { en: 'Direct private trips from Dammam to Makkah and Madinah.', ar: 'رحلات خاصة مباشرة من الدمام إلى مكة المكرمة والمدينة المنورة.' },
  },
]

/* ── Vehicles ──────────────────────────────────────────────────── */

export const vehicleBestFor: Record<'sedan' | 'staria' | 'gmc', BText> = {
  sedan: { en: 'A comfortable option for smaller groups', ar: 'خيار مريح للمجموعات الصغيرة' },
  staria: { en: 'Suitable for families and larger groups', ar: 'مناسبة للعائلات والمجموعات الكبيرة' },
  gmc: { en: 'A premium option for passengers wanting more space and comfort', ar: 'خيار فاخر للركاب الراغبين بمساحة وراحة أكبر' },
}

/* ── Dammam intercity routes (only the 3 real pages) ───────────── */

export interface LinkedRoute {
  slug: string
  label: BText
  duration: BText
  desc: BText
}

export const linkedRoutes: LinkedRoute[] = [
  {
    slug: 'dammam-to-makkah',
    label: { en: 'Dammam → Makkah', ar: 'الدمام ← مكة المكرمة' },
    duration: { en: '~8–9 hrs', ar: '٨ إلى ٩ ساعات' },
    desc: { en: 'A long-distance private trip, about 870 km, passing via Riyadh.', ar: 'رحلة خاصة طويلة، نحو ٨٧٠ كم، تمر عبر الرياض.' },
  },
  {
    slug: 'makkah-to-dammam',
    label: { en: 'Makkah → Dammam', ar: 'مكة المكرمة ← الدمام' },
    duration: { en: '~8–9 hrs', ar: '٨ إلى ٩ ساعات' },
    desc: { en: 'The return leg from Makkah back to the Eastern Province, about 870 km.', ar: 'رحلة العودة من مكة المكرمة إلى المنطقة الشرقية، نحو ٨٧٠ كم.' },
  },
  {
    slug: 'dammam-to-madinah',
    label: { en: 'Dammam → Madinah', ar: 'الدمام ← المدينة المنورة' },
    duration: { en: '~9–10 hrs', ar: '٩ إلى ١٠ ساعات' },
    desc: { en: "One of the longest routes Saudi Cabs GMC operates, about 1,000 km to the Prophet's Mosque.", ar: 'من أطول المسارات التي تشغّلها Saudi Cabs GMC، نحو ١٬٠٠٠ كم إلى المسجد النبوي.' },
  },
]

/* ── Dammam to major cities (short, no overreach) ─────────────── */

export const majorCitiesNote: BText = {
  en: 'Dammam is the starting point for some of the longest private trips Saudi Cabs GMC operates — direct routes connect the Eastern Province with Makkah and Madinah, usually travelling via Riyadh. Many travelers from Dammam and the surrounding Eastern Province book these trips for Umrah or to visit the Prophet\'s Mosque. These are long-distance journeys, usually booked in advance, with the vehicle and fare confirmed on WhatsApp before you travel.',
  ar: 'تُعد الدمام نقطة انطلاق لبعض أطول الرحلات الخاصة التي تشغّلها Saudi Cabs GMC — إذ تربط خطوط مباشرة المنطقة الشرقية بمكة المكرمة والمدينة المنورة، وعادةً ما تمر عبر الرياض. يحجز كثير من مسافري الدمام والمنطقة الشرقية هذه الرحلات لأداء العمرة أو لزيارة المسجد النبوي. هذه رحلات طويلة، تُحجز عادةً مسبقاً، ويتم تأكيد السيارة والسعر عبر واتساب قبل سفرك.',
}

/* ── Why book with Saudi Cabs GMC ─────────────────────────────── */

export interface Highlight { iconName: string; title: BText; desc: BText }

export const highlights: Highlight[] = [
  { iconName: 'Car', title: { en: 'Private Vehicle, No Shared Ride', ar: 'سيارة خاصة بدون مشاركة' }, desc: { en: 'Your vehicle is booked for your group only — direct pickup and drop-off, with no other passengers.', ar: 'تُحجز السيارة لمجموعتك فقط — استلام وتوصيل مباشر دون ركاب آخرين.' } },
  { iconName: 'Users', title: { en: 'Vehicle Choice', ar: 'خيار السيارة' }, desc: { en: 'Sedan, Hyundai Staria or GMC Yukon depending on your group size and preference.', ar: 'سيدان أو هيونداي ستاريا أو GMC يوكون بحسب حجم مجموعتك وتفضيلك.' } },
  { iconName: 'MessageCircle', title: { en: 'WhatsApp Booking', ar: 'حجز عبر واتساب' }, desc: { en: 'Send your trip details and get a reply with the vehicle and fare — no app to download.', ar: 'أرسل تفاصيل رحلتك واستلم رداً بالسيارة والسعر — دون تحميل أي تطبيق.' } },
  { iconName: 'Banknote', title: { en: 'Fare Confirmed Before You Travel', ar: 'سعر مؤكد قبل سفرك' }, desc: { en: 'The fare for your route is agreed with you on WhatsApp before the trip starts.', ar: 'يُتفق على سعر مسارك معك عبر واتساب قبل بدء الرحلة.' } },
]

/* ── How booking works ────────────────────────────────────────── */

export interface BookingStep { n: string; title: BText; desc: BText }

export const bookingSteps: BookingStep[] = [
  { n: '1', title: { en: 'Send your trip details on WhatsApp', ar: 'أرسل تفاصيل رحلتك عبر واتساب' }, desc: { en: 'Pickup, destination, date and passenger count.', ar: 'الاستلام والوجهة والتاريخ وعدد الركاب.' } },
  { n: '2', title: { en: 'Confirm vehicle and fare', ar: 'أكّد السيارة والسعر' }, desc: { en: 'We reply with the vehicle options and the fare for your trip.', ar: 'نرد عليك بخيارات السيارة وسعر رحلتك.' } },
  { n: '3', title: { en: 'Meet your driver and travel', ar: 'قابل سائقك وسافر' }, desc: { en: 'Your driver meets you at the agreed pickup point.', ar: 'يقابلك سائقك عند نقطة الاستلام المتفق عليها.' } },
]
