import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for the Riyadh city page (/riyadh-taxi-service).
 * Riyadh has no confirmed per-route SAR pricing in pricingData.ts and no dedicated
 * airport route page — this page never states a fare or a specific airport route URL.
 * Route times/distances mirror routePageData.ts (riyadh-to-makkah, riyadh-to-madinah,
 * riyadh-to-jeddah, makkah-to-riyadh) and the existing FAQs; nothing here introduces
 * new facts. Riyadh's content is framed around its real role in the site: the capital,
 * and the starting/ending point for the site's longest intercity routes — not a
 * reskin of Makkah/Madinah/Jeddah/Taif.
 */

export type BText = { ar: string; en: string }

export interface RiyadhPageProps {
  cityName: BText
  citySlug: string
  citySlogan: BText
  faqs: FAQItem[]
}

/* ── Hero ─────────────────────────────────────────────────────── */

export const heroContent = {
  h1: {
    en: 'Riyadh Taxi & Private Transport Services',
    ar: 'خدمات تاكسي ونقل خاص في الرياض',
  },
  intro: {
    en: 'Reliable private transportation in Riyadh for city transfers, airport journeys and long-distance trips to major Saudi cities. Choose a comfortable Sedan, Hyundai Staria or GMC Yukon and confirm your trip directly via WhatsApp.',
    ar: 'نقل خاص موثوق في الرياض للتنقل داخل المدينة ورحلات المطار والرحلات الطويلة إلى المدن السعودية الرئيسية. اختر سيدان مريحة أو هيونداي ستاريا أو GMC يوكون وأكّد رحلتك مباشرة عبر واتساب.',
  },
  primaryCta: { en: 'Book via WhatsApp', ar: 'احجز عبر واتساب' },
  secondaryCta: { en: 'Explore Riyadh Routes', ar: 'استكشف خطوط الرياض' },
}

export const trustItems: { iconName: string; label: BText }[] = [
  { iconName: 'MessageCircle', label: { en: '24/7 WhatsApp Booking', ar: 'حجز عبر واتساب ٢٤/٧' } },
  { iconName: 'Car', label: { en: 'Private Vehicles', ar: 'سيارات خاصة' } },
  { iconName: 'Banknote', label: { en: 'Fixed Price Confirmed Before Booking', ar: 'سعر ثابت يُؤكَّد قبل الحجز' } },
  { iconName: 'Users', label: { en: 'No Shared Rides', ar: 'بدون مشاركة الرحلة' } },
]

/* ── Riyadh private taxi services ─────────────────────────────── */

export const servicesIntro: BText = {
  en: 'Saudi Cabs GMC arranges private transportation in Riyadh for city transfers and hotel pickups, business and personal travel, and long-distance intercity journeys. Airport pickups and drop-offs to and from King Khalid International Airport can also be arranged — share your flight details on WhatsApp and we will confirm availability and timing.',
  ar: 'تقدم Saudi Cabs GMC نقلاً خاصاً في الرياض للتنقل داخل المدينة والاستلام من الفنادق، ورحلات العمل والرحلات الشخصية، والرحلات الطويلة بين المدن. كما يمكن ترتيب الاستلام والتوصيل من وإلى مطار الملك خالد الدولي — شارك تفاصيل رحلتك عبر واتساب وسنؤكد لك التوفر والتوقيت.',
}

export const serviceList: { iconName: string; title: BText; desc: BText }[] = [
  {
    iconName: 'Building2',
    title: { en: 'City & Hotel Transfers', ar: 'توصيل داخل المدينة والفنادق' },
    desc: { en: 'Private rides between hotels, offices and destinations across Riyadh.', ar: 'رحلات خاصة بين الفنادق والمكاتب والوجهات في جميع أنحاء الرياض.' },
  },
  {
    iconName: 'Plane',
    title: { en: 'Airport Pickups & Drop-offs', ar: 'استلام وتوصيل من المطار' },
    desc: { en: 'Transfers to and from King Khalid International Airport, arranged by WhatsApp.', ar: 'توصيل من وإلى مطار الملك خالد الدولي، يُرتَّب عبر واتساب.' },
  },
  {
    iconName: 'Briefcase',
    title: { en: 'Business & Personal Travel', ar: 'رحلات العمل والرحلات الشخصية' },
    desc: { en: 'A private vehicle for meetings, appointments or personal errands around the capital.', ar: 'سيارة خاصة للاجتماعات أو المواعيد أو المشاوير الشخصية في العاصمة.' },
  },
  {
    iconName: 'Route',
    title: { en: 'Long-Distance Intercity Trips', ar: 'رحلات طويلة بين المدن' },
    desc: { en: 'Direct private trips from Riyadh to Makkah, Madinah and Jeddah.', ar: 'رحلات خاصة مباشرة من الرياض إلى مكة المكرمة والمدينة المنورة وجدة.' },
  },
]

/* ── Vehicles ──────────────────────────────────────────────────── */

export const vehicleBestFor: Record<'sedan' | 'staria' | 'gmc', BText> = {
  sedan: { en: 'A comfortable option for smaller groups', ar: 'خيار مريح للمجموعات الصغيرة' },
  staria: { en: 'Suitable for families and larger groups', ar: 'مناسبة للعائلات والمجموعات الكبيرة' },
  gmc: { en: 'A premium option for passengers wanting more space and comfort', ar: 'خيار فاخر للركاب الراغبين بمساحة وراحة أكبر' },
}

/* ── Riyadh intercity routes ───────────────────────────────────── */

export interface LinkedRoute {
  slug: string
  label: BText
  duration: BText
  desc: BText
}

export const linkedRoutes: LinkedRoute[] = [
  {
    slug: 'riyadh-to-makkah',
    label: { en: 'Riyadh → Makkah', ar: 'الرياض ← مكة المكرمة' },
    duration: { en: '~8–9 hrs', ar: '٨ إلى ٩ ساعات' },
    desc: { en: 'A long-distance private trip, about 900 km, with rest stops along the way.', ar: 'رحلة خاصة طويلة، نحو ٩٠٠ كم، مع توقفات للراحة على الطريق.' },
  },
  {
    slug: 'riyadh-to-madinah',
    label: { en: 'Riyadh → Madinah', ar: 'الرياض ← المدينة المنورة' },
    duration: { en: '~9–10 hrs', ar: '٩ إلى ١٠ ساعات' },
    desc: { en: 'A direct private trip to the Prophet\'s Mosque, about 970 km.', ar: 'رحلة خاصة مباشرة إلى المسجد النبوي، نحو ٩٧٠ كم.' },
  },
  {
    slug: 'riyadh-to-jeddah',
    label: { en: 'Riyadh → Jeddah', ar: 'الرياض ← جدة' },
    duration: { en: '~9 hrs', ar: '٩ ساعات' },
    desc: { en: 'A direct private trip via the highway, about 950 km.', ar: 'رحلة خاصة مباشرة عبر الطريق السريع، نحو ٩٥٠ كم.' },
  },
  {
    slug: 'makkah-to-riyadh',
    label: { en: 'Makkah → Riyadh', ar: 'مكة المكرمة ← الرياض' },
    duration: { en: '~8–9 hrs', ar: '٨ إلى ٩ ساعات' },
    desc: { en: 'The return leg from Makkah back to the capital, about 900 km.', ar: 'رحلة العودة من مكة المكرمة إلى العاصمة، نحو ٩٠٠ كم.' },
  },
]

/* ── Riyadh to major cities (short, no overreach) ─────────────── */

export const majorCitiesNote: BText = {
  en: 'Riyadh is the starting and ending point for some of the longest private trips Saudi Cabs GMC operates — direct routes connect the capital with Makkah, Madinah and Jeddah. These are long-distance journeys, usually booked in advance, with the vehicle and fare confirmed on WhatsApp before you travel.',
  ar: 'تُعد الرياض نقطة انطلاق ووصول لبعض أطول الرحلات الخاصة التي تشغّلها Saudi Cabs GMC — إذ تربط خطوط مباشرة العاصمة بمكة المكرمة والمدينة المنورة وجدة. هذه رحلات طويلة، تُحجز عادةً مسبقاً، ويتم تأكيد السيارة والسعر عبر واتساب قبل سفرك.',
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
