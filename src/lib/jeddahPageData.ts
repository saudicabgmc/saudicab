import type { FAQItem } from '@/components/FAQSection'
import type { PricingRoute } from '@/lib/pricingData'

/*
 * Content for the Jeddah city page (/jeddah-taxi-service).
 * Prices are NOT stored here — they come from pricingData.ts so there is a single source of truth.
 * Route times/distances mirror routePageData.ts and the existing FAQs; nothing here introduces new facts.
 */

export type BText = { ar: string; en: string }

export interface JeddahService {
  iconName: string
  title: BText
  desc: BText
  href: string
  cta: BText
}

export interface JeddahLinkedRoute {
  slug: string
  label: BText
  duration: BText
  desc: BText
}

export interface JeddahLegacyRoute {
  /** null when there is no dedicated route page — the chip links to WhatsApp instead. */
  slug: string | null
  label: BText
  duration: BText
}

export interface JeddahHighlight {
  iconName: string
  title: BText
  desc: BText
}

export interface JeddahPageProps {
  cityName: BText
  citySlug: string
  citySlogan: BText
  heroImage: string
  services: JeddahService[]
  linkedRoutes: JeddahLinkedRoute[]
  legacyRoutes: JeddahLegacyRoute[]
  highlights: JeddahHighlight[]
  faqs: FAQItem[]
  pricing: PricingRoute[]
}

/* ── Hero ─────────────────────────────────────────────────────── */

export const heroContent = {
  h1: {
    en: 'Jeddah Taxi & Private Transport Service',
    ar: 'خدمة تاكسي ونقل خاص في جدة',
  },
  intro: {
    en: 'Private airport transfers, city rides, intercity journeys and chauffeur services across Jeddah with Sedan, Hyundai Staria and GMC Yukon. Route-based fares are confirmed on WhatsApp before you travel.',
    ar: 'توصيل خاص من المطار، ورحلات داخل المدينة، ورحلات بين المدن، وخدمات سائق خاص في جدة بسيدان وهيونداي ستاريا وGMC يوكون. يُؤكَّد سعر المسار عبر واتساب قبل رحلتك.',
  },
  primaryCta: { en: 'Book via WhatsApp', ar: 'احجز عبر واتساب' },
  secondaryCta: { en: 'Explore Jeddah Routes', ar: 'استكشف خطوط جدة' },
  trust: [
    { en: 'Instant WhatsApp Reply', ar: 'رد فوري عبر واتساب' },
    { en: 'No Advance Payment', ar: 'بدون دفع مسبق' },
    { en: '24/7 Booking', ar: 'حجز على مدار الساعة' },
    { en: 'Route-Based Fares', ar: 'سعر حسب المسار' },
  ] as BText[],
}

/* ── What do you need in Jeddah? (decision helper) ────────────── */

export interface NeedCard {
  iconName: string
  title: BText
  desc: BText
  cta: BText
  href: string
}

export const needCards: NeedCard[] = [
  {
    iconName: 'Plane',
    title: { en: 'Jeddah Airport Transfer', ar: 'توصيل مطار جدة' },
    desc: { en: 'Pickup and drop-off at King Abdulaziz International Airport.', ar: 'استقبال وتوديع في مطار الملك عبدالعزيز الدولي.' },
    cta: { en: 'Airport Transfer', ar: 'توصيل من المطار' },
    href: '/airport-transfer',
  },
  {
    iconName: 'Car',
    title: { en: 'Jeddah City Taxi', ar: 'تاكسي داخل جدة' },
    desc: { en: 'A private ride anywhere in Jeddah — hotels, malls, meetings or a night out.', ar: 'رحلة خاصة إلى أي مكان في جدة — الفنادق أو المولات أو الاجتماعات أو سهرة مسائية.' },
    cta: { en: 'Get a Trip Price', ar: 'احصل على سعر رحلتك' },
    href: '/booking',
  },
  {
    iconName: 'Route',
    title: { en: 'Jeddah → Makkah', ar: 'جدة ← مكة المكرمة' },
    desc: { en: 'A direct private trip, about 50 minutes under normal traffic.', ar: 'رحلة خاصة مباشرة، نحو ٥٠ دقيقة في ظروف السير العادية.' },
    cta: { en: 'Jeddah → Makkah', ar: 'جدة ← مكة' },
    href: '/jeddah-to-makkah',
  },
  {
    iconName: 'Map',
    title: { en: 'Jeddah → Madinah', ar: 'جدة ← المدينة المنورة' },
    desc: { en: "A direct private trip to the Prophet's Mosque, about 4 hours.", ar: 'رحلة خاصة مباشرة إلى المسجد النبوي، نحو ٤ ساعات.' },
    cta: { en: 'Jeddah → Madinah', ar: 'جدة ← المدينة' },
    href: '/jeddah-to-madinah',
  },
  {
    iconName: 'Mountain',
    title: { en: 'Jeddah → Taif', ar: 'جدة ← الطائف' },
    desc: { en: 'A scenic mountain-road trip, about 1.5 hours.', ar: 'رحلة عبر طريق جبلي خلاب، نحو ١.٥ ساعة.' },
    cta: { en: 'Jeddah → Taif', ar: 'جدة ← الطائف' },
    href: '/jeddah-to-taif',
  },
  {
    iconName: 'UserRound',
    title: { en: 'Private Chauffeur', ar: 'سائق خاص' },
    desc: { en: 'Ask about a private driver for the day for meetings, shopping or multiple stops.', ar: 'اسأل عن سائق خاص لليوم للاجتماعات أو التسوق أو عدة محطات.' },
    cta: { en: 'Ask on WhatsApp', ar: 'اسأل عبر واتساب' },
    href: 'https://wa.me/923097811785',
  },
  {
    iconName: 'Users',
    title: { en: 'Family & Group Transport', ar: 'نقل العائلات والمجموعات' },
    desc: { en: 'Choose the 7-seat Hyundai Staria or GMC Yukon for larger groups and luggage.', ar: 'اختر هيونداي ستاريا أو GMC يوكون (٧ مقاعد) للمجموعات الكبيرة والأمتعة.' },
    cta: { en: 'View Vehicles', ar: 'عرض السيارات' },
    href: '/hyundai-staria-taxi',
  },
  {
    iconName: 'Building2',
    title: { en: 'Hotel Transfer', ar: 'توصيل الفنادق' },
    desc: { en: 'Share your hotel name and destination — we confirm the pickup and fare.', ar: 'شارك اسم فندقك والوجهة — نؤكد لك الاستلام والسعر.' },
    cta: { en: 'Ask on WhatsApp', ar: 'اسأل عبر واتساب' },
    href: 'https://wa.me/923097811785',
  },
]

/* ── King Abdulaziz Airport: the transfer journey ─────────────── */

export interface ArrivalStep {
  n: string
  title: BText
  desc: BText
}

export const arrivalSteps: ArrivalStep[] = [
  { n: '1', title: { en: 'Share your flight number', ar: 'شارك رقم رحلتك' }, desc: { en: 'So we can track your arrival time.', ar: 'لنتابع وقت وصولك.' } },
  { n: '2', title: { en: 'We confirm your pickup', ar: 'نؤكد نقطة استلامك' }, desc: { en: 'Terminal 1 or Terminal 2, with your name.', ar: 'الصالة 1 أو الصالة 2، بلوحة باسمك.' } },
  { n: '3', title: { en: 'Choose your vehicle', ar: 'اختر سيارتك' }, desc: { en: 'Sedan, Hyundai Staria or GMC Yukon.', ar: 'سيدان، أو هيونداي ستاريا، أو GMC يوكون.' } },
  { n: '4', title: { en: 'Receive your fare on WhatsApp', ar: 'استلم سعرك عبر واتساب' }, desc: { en: 'Confirmed before you travel — no advance payment.', ar: 'يُؤكَّد قبل رحلتك — دون أي دفع مسبق.' } },
  { n: '5', title: { en: 'Travel to your destination', ar: 'تنتقل إلى وجهتك' }, desc: { en: 'Door-to-door, to your hotel or address.', ar: 'من باب إلى باب، إلى فندقك أو عنوانك.' } },
]

/* ── Who private transport in Jeddah is useful for ────────────── */

export const cityTransport = {
  intro: {
    en: 'A private car in Jeddah means you are not sharing a ride or a schedule — useful whether you are visiting hotels and the Corniche, moving between meetings, or travelling as a family with luggage.',
    ar: 'السيارة الخاصة في جدة تعني أنك لا تشارك الرحلة أو الجدول مع أحد — مفيدة سواء كنت تتنقل بين الفنادق والكورنيش، أو بين الاجتماعات، أو تسافر مع عائلتك وأمتعتك.',
  },
  audiences: [
    { title: { en: 'Families', ar: 'العائلات' }, desc: { en: 'Extra luggage and child seats are easier to arrange in a private vehicle.', ar: 'ترتيب الأمتعة الإضافية ومقاعد الأطفال أسهل في سيارة خاصة.' } },
    { title: { en: 'Tourists', ar: 'السياح' }, desc: { en: 'Visit the Corniche and Al-Balad at your own pace, without a fixed tour schedule.', ar: 'زُر الكورنيش والبلد بالسرعة التي تناسبك، دون جدول جولة ثابت.' } },
    { title: { en: 'Business Travelers', ar: 'مسافرو الأعمال' }, desc: { en: 'Move between meetings and the airport without waiting for a taxi.', ar: 'تنقل بين الاجتماعات والمطار دون انتظار تاكسي.' } },
    { title: { en: 'Couples & Groups', ar: 'الأزواج والمجموعات' }, desc: { en: 'One fare for the group, not a per-person fare.', ar: 'سعر واحد للمجموعة، لا سعر للفرد.' } },
  ] as { title: BText; desc: BText }[],
}

/* ── Corniche + city experience ───────────────────────────────── */

export const cornicheSection = {
  text: {
    en: 'The Corniche stretches along the Red Sea waterfront, past the King Fahd Fountain and the Floating Mosque, with stops such as Al-Shallal Theme Park along the way. A private vehicle lets you move between these spots and back to your hotel without arranging a separate ride for each stop.',
    ar: 'يمتد الكورنيش على طول واجهة البحر الأحمر، بجانب نافورة الملك فهد والمسجد العائم، مع محطات مثل منتزه الشلال على الطريق. السيارة الخاصة تتيح لك التنقل بين هذه المواقع والعودة إلى فندقك دون ترتيب رحلة منفصلة لكل محطة.',
  },
}

/* ── Family & group vehicle comparison ────────────────────────── */

export interface VehicleCompareCard {
  key: 'sedan' | 'staria' | 'gmc'
  name: BText
  seats: BText
  bestFor: BText
}

export const vehicleComparison: VehicleCompareCard[] = [
  {
    key: 'sedan',
    name: { en: 'Sedan', ar: 'سيدان' },
    seats: { en: 'Up to 4 passengers', ar: 'حتى ٤ ركاب' },
    bestFor: { en: 'Good for smaller trips around the city or to the airport.', ar: 'مناسب للرحلات الصغيرة داخل المدينة أو إلى المطار.' },
  },
  {
    key: 'staria',
    name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' },
    seats: { en: 'Up to 7 passengers', ar: 'حتى ٧ ركاب' },
    bestFor: { en: 'Better for families or groups travelling together with luggage.', ar: 'أفضل للعائلات أو المجموعات التي تسافر معاً مع الأمتعة.' },
  },
  {
    key: 'gmc',
    name: { en: 'GMC Yukon', ar: 'GMC يوكون' },
    seats: { en: 'Up to 7 passengers', ar: 'حتى ٧ ركاب' },
    bestFor: { en: 'Suited to VIP or luxury-oriented travel.', ar: 'مناسبة للتنقل الفاخر أو VIP.' },
  },
]

export const vehicleBestFor: Record<'sedan' | 'staria' | 'gmc', BText> = {
  sedan: { en: 'Up to 4 passengers — solo travelers, couples and small families', ar: 'حتى ٤ ركاب — الأفراد والأزواج والعائلات الصغيرة' },
  staria: { en: 'Up to 7 passengers — families and groups with luggage', ar: 'حتى ٧ ركاب — العائلات والمجموعات مع الأمتعة' },
  gmc: { en: 'Up to 7 passengers — business and VIP travel', ar: 'حتى ٧ ركاب — لرحلات الأعمال وVIP' },
}

/* ── Business / chauffeur ─────────────────────────────────────── */

export const businessSection = {
  text: {
    en: 'A private driver for the day can cover multiple meetings, hotel transfers and conference visits without booking a separate ride for each stop. Share your schedule on WhatsApp and we will confirm the vehicle and fare.',
    ar: 'يمكن لسائق خاص لليوم تغطية عدة اجتماعات وتوصيلات فندقية وزيارات مؤتمرات دون حجز رحلة منفصلة لكل محطة. شارك جدولك عبر واتساب وسنؤكد لك السيارة والسعر.',
  },
}

/* ── Jeddah areas (kept short — coverage, not SEO padding) ────── */

export interface AreaItem {
  iconName: string
  name: BText
  desc: BText
  relevance: BText
}

export const areas: AreaItem[] = [
  {
    iconName: 'ShoppingBag',
    name: { en: 'Al-Balad', ar: 'البلد' },
    desc: { en: "Jeddah's historic old town, a UNESCO World Heritage Site known for its coral-stone buildings and Souq Al-Alawi.", ar: 'قلب جدة التاريخي، مسجل ضمن مواقع التراث العالمي لليونسكو، ويشتهر بمبانيه المرجانية وسوق العلوي.' },
    relevance: { en: 'Good for shopping and sightseeing trips.', ar: 'مناسب لرحلات التسوق والتصوير.' },
  },
  {
    iconName: 'Building2',
    name: { en: 'King Road (Business District)', ar: 'طريق الملك (الحي التجاري)' },
    desc: { en: "Jeddah's main commercial corridor, lined with business towers, malls and hotels.", ar: 'الممر التجاري الرئيسي في جدة، ويضم أبراج الأعمال والمولات والفنادق.' },
    relevance: { en: 'Good for meetings and corporate transfers.', ar: 'مناسب للاجتماعات والتوصيل لرجال الأعمال.' },
  },
  {
    iconName: 'Waves',
    name: { en: 'Obhur', ar: 'أبحر' },
    desc: { en: 'The northern coastal district, about 30 km from central Jeddah, known for beach chalets and resorts.', ar: 'المنطقة الساحلية الشمالية، على بعد نحو ٣٠ كم من وسط جدة، وتشتهر بالشاليهات والمنتجعات.' },
    relevance: { en: 'A popular weekend destination.', ar: 'وجهة شائعة لعطلات نهاية الأسبوع.' },
  },
  {
    iconName: 'Building',
    name: { en: 'Al-Hamra', ar: 'الحمراء' },
    desc: { en: 'An upscale district near the Corniche with hotels, restaurants and premium residential areas.', ar: 'حي راقٍ قريب من الكورنيش يضم فنادق ومطاعم ومناطق سكنية مميزة.' },
    relevance: { en: 'One of the most-requested hotel pickup areas.', ar: 'من أكثر مناطق استلام الفنادق طلباً.' },
  },
  {
    iconName: 'Map',
    name: { en: 'Al-Rawdah', ar: 'الروضة' },
    desc: { en: 'A central district mixing offices, malls and restaurants, close to King Road.', ar: 'حي مركزي يجمع بين المكاتب والمولات والمطاعم، بالقرب من طريق الملك.' },
    relevance: { en: 'Convenient for hotel and office transfers.', ar: 'مناسب لتوصيل الفنادق والمكاتب.' },
  },
]

/* ── Why choose Saudi Cabs GMC ─────────────────────────────────── */

export const highlights: JeddahHighlight[] = [
  { iconName: 'MessageCircle', title: { en: 'WhatsApp Booking', ar: 'حجز عبر واتساب' }, desc: { en: 'Send your trip details and get a fare confirmed on WhatsApp — no app to download.', ar: 'أرسل تفاصيل رحلتك واستلم سعراً مؤكداً عبر واتساب — دون تحميل أي تطبيق.' } },
  { iconName: 'Banknote', title: { en: 'Route-Based Fares', ar: 'سعر حسب المسار' }, desc: { en: 'The price is set by route, not a meter — confirmed before you travel.', ar: 'يُحدَّد السعر حسب المسار وليس بعداد — ويُؤكَّد قبل رحلتك.' } },
  { iconName: 'Car', title: { en: 'Vehicle Choice', ar: 'خيار السيارة' }, desc: { en: 'Sedan, Hyundai Staria or GMC Yukon depending on your group and preference.', ar: 'سيدان أو هيونداي ستاريا أو GMC يوكون بحسب مجموعتك وتفضيلك.' } },
  { iconName: 'Plane', title: { en: 'Airport Coverage', ar: 'تغطية المطار' }, desc: { en: 'Regular pickups and drop-offs at King Abdulaziz International Airport.', ar: 'استقبال وتوديع منتظم في مطار الملك عبدالعزيز الدولي.' } },
  { iconName: 'Shield', title: { en: 'No Advance Payment', ar: 'بدون دفع مسبق' }, desc: { en: 'Pay your driver directly — no deposit required to confirm a booking.', ar: 'الدفع لسائقك مباشرة — دون أي عربون مطلوب لتأكيد الحجز.' } },
]

/* ── Jeddah transport questions (direct-answer AEO block) ─────
   Distinct from the FAQ accordion below — short factual answers
   formatted for assistants and search snippets. */

export interface AeoQA {
  q: BText
  a: BText
}

export const aeoQA: AeoQA[] = [
  {
    q: { en: 'What is the best way to get from Jeddah Airport to Makkah?', ar: 'ما أفضل طريقة للسفر من مطار جدة إلى مكة المكرمة؟' },
    a: { en: 'A private car is the most direct way — about 50–60 minutes with no transfers, with the fare confirmed before you travel.', ar: 'السيارة الخاصة هي الطريقة الأكثر مباشرة — نحو ٥٠ إلى ٦٠ دقيقة دون أي تنقلات، ويُؤكَّد السعر قبل رحلتك.' },
  },
  {
    q: { en: 'How much is a private taxi from Jeddah Airport to Makkah?', ar: 'كم سعر تاكسي خاص من مطار جدة إلى مكة المكرمة؟' },
    a: { en: '330 SAR by Sedan, 380 SAR by Hyundai Staria or 530 SAR by GMC Yukon, per vehicle.', ar: '٣٣٠ ريال بالسيدان، و٣٨٠ ريال بهيونداي ستاريا، و٥٣٠ ريال بـGMC يوكون، للسيارة الواحدة.' },
  },
  {
    q: { en: 'How long does Jeddah to Makkah take by private car?', ar: 'كم تستغرق الرحلة من جدة إلى مكة المكرمة بسيارة خاصة؟' },
    a: { en: 'About 50 minutes under normal traffic; 70–90 minutes during peak times or Hajj season.', ar: 'نحو ٥٠ دقيقة في ظروف السير العادية؛ ومن ٧٠ إلى ٩٠ دقيقة في أوقات الذروة أو موسم الحج.' },
  },
  {
    q: { en: 'Can I book a private taxi from Jeddah to Madinah?', ar: 'هل يمكنني حجز تاكسي خاص من جدة إلى المدينة المنورة؟' },
    a: { en: 'Yes, a direct private trip takes about 4 hours (around 390 km).', ar: 'نعم، تستغرق الرحلة الخاصة المباشرة نحو ٤ ساعات (حوالي ٣٩٠ كم).' },
  },
  {
    q: { en: 'What vehicle should a family choose in Jeddah?', ar: 'ما السيارة التي يجب أن تختارها العائلة في جدة؟' },
    a: { en: 'The Hyundai Staria or GMC Yukon, both seating up to 7, are usually more practical than a Sedan for families with luggage.', ar: 'تُعد هيونداي ستاريا أو GMC يوكون، وكلاهما يتسع لـ٧ ركاب، أكثر عملية من السيدان للعائلات التي لديها أمتعة.' },
  },
  {
    q: { en: 'Can I book a private driver in Jeddah?', ar: 'هل يمكنني حجز سائق خاص في جدة؟' },
    a: { en: 'Yes, ask about a private driver for the day for meetings, shopping or multiple stops, subject to availability.', ar: 'نعم، اسأل عن سائق خاص لليوم للاجتماعات أو التسوق أو عدة محطات، حسب التوفر.' },
  },
  {
    q: { en: 'Does Saudi Cabs GMC provide Jeddah airport transfers?', ar: 'هل تقدم Saudi Cabs GMC توصيلاً من مطار جدة؟' },
    a: { en: 'Yes, pickup and drop-off at King Abdulaziz International Airport (Terminal 1 and 2), confirmed on WhatsApp before you travel.', ar: 'نعم، استقبال وتوديع في مطار الملك عبدالعزيز الدولي (الصالة 1 والصالة 2)، ويُؤكَّد ذلك عبر واتساب قبل رحلتك.' },
  },
]
