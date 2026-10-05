import type { FAQItem } from '@/components/FAQSection'
import type { PricingRoute } from '@/lib/pricingData'

/*
 * Content for the Madinah city page (/madinah-taxi-service).
 * Prices are NOT stored here — they come from pricingData.ts so there is a single source of truth.
 * Route times, distances and service statements mirror routePageData.ts and the existing FAQs;
 * nothing here should introduce new facts. Madinah has its own content strategy (Prophet's Mosque,
 * Madinah Airport, Quba/Uhud/Al-Baqi, Al-Markaziyah/Al-Aqiq) — it is not a reskin of the Makkah page.
 */

export type BText = { ar: string; en: string }

export interface MadinahService {
  iconName: string
  title: BText
  desc: BText
  href: string
  cta: BText
}

export interface MadinahLinkedRoute {
  /** null when there is no dedicated route page yet — the card links to WhatsApp instead. */
  slug: string | null
  label: BText
  duration: BText
  desc: BText
}

export interface MadinahHighlight {
  iconName: string
  title: BText
  desc: BText
}

export interface MadinahPageProps {
  cityName: BText
  citySlug: string
  citySlogan: BText
  heroImage: string
  services: MadinahService[]
  linkedRoutes: MadinahLinkedRoute[]
  highlights: MadinahHighlight[]
  faqs: FAQItem[]
  pricing: PricingRoute[]
}

/* ── Hero ─────────────────────────────────────────────────────── */

export const heroContent = {
  h1: {
    en: 'Madinah Taxi & Private Transport Service',
    ar: 'خدمة تاكسي ونقل خاص في المدينة المنورة',
  },
  intro: {
    en: "Private transportation in Madinah for Prophet's Mosque transfers, Madinah Airport pickups, hotel transfers, Ziyarat trips, family and group travel, and intercity journeys to Makkah, Jeddah and Taif. Route-based fares are confirmed on WhatsApp before you travel.",
    ar: 'نقل خاص في المدينة المنورة للتوصيل من وإلى المسجد النبوي الشريف، واستقبال مطار المدينة المنورة، وتوصيل الفنادق، ورحلات الزيارات، والسفر العائلي والجماعي، والرحلات بين المدن إلى مكة المكرمة وجدة والطائف. يُؤكَّد سعر المسار عبر واتساب قبل رحلتك.',
  },
  primaryCta: { en: 'Book Your Madinah Trip on WhatsApp', ar: 'احجز رحلتك في المدينة المنورة عبر واتساب' },
  secondaryCta: { en: 'View Routes & Prices', ar: 'عرض المسارات والأسعار' },
  trust: [
    { en: 'Private Vehicle', ar: 'سيارة خاصة' },
    { en: 'Route-Based Fare', ar: 'سعر حسب المسار' },
    { en: 'WhatsApp Booking', ar: 'حجز عبر واتساب' },
    { en: '24/7 Booking Support', ar: 'دعم حجز على مدار الساعة' },
  ] as BText[],
}

/* ── Which Madinah transport service do you need? ────────────────
   Visual, user-focused decision cards — each links straight to the
   service or page that answers it, so this stays a pointer rather
   than a restatement of the Services section below it. */

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
    title: { en: 'Arriving at Madinah Airport', ar: 'تصل إلى مطار المدينة المنورة' },
    desc: { en: 'Private pickup to your hotel or accommodation.', ar: 'استقبال خاص إلى فندقك أو مكان إقامتك.' },
    cta: { en: 'Airport Transfer', ar: 'توصيل من المطار' },
    href: '/madinah-airport-taxi',
  },
  {
    iconName: 'Building2',
    title: { en: "Going to the Prophet's Mosque", ar: 'متجه إلى المسجد النبوي الشريف' },
    desc: { en: 'Hotel-to-mosque transportation when you need a private ride.', ar: 'توصيل من فندقك إلى المسجد النبوي عند حاجتك لرحلة خاصة.' },
    cta: { en: 'Book a Local Trip', ar: 'اطلب رحلة محلية' },
    href: '/booking',
  },
  {
    iconName: 'Map',
    title: { en: "Visiting Madinah's Islamic Sites", ar: 'تريد زيارة المواقع الإسلامية' },
    desc: { en: 'Private transport for Ziyarat, including sites such as Quba and Uhud.', ar: 'نقل خاص لرحلات الزيارات، وتشمل مواقع مثل قباء وأحد.' },
    cta: { en: 'Madinah Ziyarat', ar: 'زيارات المدينة المنورة' },
    href: '/madinah-ziyarat-tour',
  },
  {
    iconName: 'Route',
    title: { en: 'Travelling to Makkah', ar: 'متجه إلى مكة المكرمة' },
    desc: { en: 'Private door-to-door intercity transport.', ar: 'نقل خاص بين المدن من باب إلى باب.' },
    cta: { en: 'Madinah → Makkah', ar: 'المدينة ← مكة' },
    href: '/madinah-to-makkah',
  },
  {
    iconName: 'Users',
    title: { en: 'Travelling with Family', ar: 'تسافر مع العائلة' },
    desc: { en: 'Choose a 7-seat Staria or GMC Yukon when your group needs more space.', ar: 'اختر هيونداي ستاريا أو GMC يوكون (٧ مقاعد) عندما تحتاج مجموعتك مساحة أكبر.' },
    cta: { en: 'View Vehicles', ar: 'عرض السيارات' },
    href: '/hyundai-staria-taxi',
  },
  {
    iconName: 'Briefcase',
    title: { en: 'Need a Driver During Your Stay', ar: 'تحتاج سائقاً خلال إقامتك' },
    desc: { en: 'Ask about private-driver availability for visits, shopping and appointments.', ar: 'اسأل عن توفر سائق خاص للزيارات والتسوق والمواعيد.' },
    cta: { en: 'Ask on WhatsApp', ar: 'اسأل عبر واتساب' },
    href: 'https://wa.me/923097811785',
  },
]

/* ── Services (5–6 categories, not 8 repetitive cards) ───────── */

export const services: MadinahService[] = [
  {
    iconName: 'Plane',
    title: { en: 'Madinah Airport Transfers', ar: 'توصيل مطار المدينة المنورة' },
    desc: {
      en: "Pickup and drop-off between Madinah Airport and your hotel. Share your flight number, accommodation name, passenger count and any extra luggage when you book. See what to expect <a href=\"/blog/madinah-airport-to-hotel-what-to-expect\" style=\"color:#0d3328;font-weight:700;\">arriving at Madinah Airport</a>.",
      ar: 'استقبال وتوديع بين مطار المدينة المنورة وفندقك. شارك رقم رحلتك واسم مكان إقامتك وعدد الركاب وأي أمتعة إضافية عند الحجز. راجع <a href="/blog/madinah-airport-to-hotel-what-to-expect" style="color:#0d3328;font-weight:700;">ماذا تتوقع عند الوصول لمطار المدينة</a>.',
    },
    href: '/madinah-airport-taxi',
    cta: { en: 'Route details & price', ar: 'تفاصيل الخط والسعر' },
  },
  {
    iconName: 'Building2',
    title: { en: "Prophet's Mosque & Hotel Transfers", ar: 'توصيل المسجد النبوي والفنادق' },
    desc: {
      en: 'Trips between your hotel or apartment and Al-Masjid An-Nabawi. Pickup and drop-off points near the mosque can depend on local traffic and access arrangements, especially around busy prayer times.',
      ar: 'رحلات بين فندقك أو شقتك والمسجد النبوي الشريف. قد تعتمد نقاط الاستلام والتوصيل قرب المسجد على حركة المرور وترتيبات الوصول المحلية، خصوصاً في أوقات الصلاة المزدحمة.',
    },
    href: '/booking',
    cta: { en: 'Get a trip price', ar: 'احصل على سعر رحلتك' },
  },
  {
    iconName: 'Map',
    title: { en: 'Madinah Ziyarat', ar: 'زيارات المدينة المنورة' },
    desc: {
      en: 'Private transport for visiting Islamic and historical sites in and around Madinah, including Quba and Mount Uhud, with a driver and vehicle for your group only.',
      ar: 'نقل خاص لزيارة المواقع الإسلامية والتاريخية في المدينة المنورة وما حولها، بما فيها قباء وجبل أحد، بسائق وسيارة لمجموعتك فقط.',
    },
    href: '/madinah-ziyarat-tour',
    cta: { en: 'View Madinah Ziyarat', ar: 'عرض زيارات المدينة' },
  },
  {
    iconName: 'Route',
    title: { en: 'Intercity Travel', ar: 'السفر بين المدن' },
    desc: {
      en: 'Private trips from Madinah to Makkah, Jeddah, Taif and Yanbu. Each route has a confirmed fare and leaves on your schedule rather than a shared departure time.',
      ar: 'رحلات خاصة من المدينة المنورة إلى مكة المكرمة وجدة والطائف وينبع. لكل مسار سعر مؤكد، وتنطلق الرحلة في الوقت الذي يناسبك دون موعد انطلاق مشترك.',
    },
    href: '/madinah-to-makkah',
    cta: { en: 'Intercity routes & prices', ar: 'خطوط وأسعار بين المدن' },
  },
  {
    iconName: 'Users',
    title: { en: 'Family & Group Transport', ar: 'نقل العائلات والمجموعات' },
    desc: {
      en: 'Sedan for up to 4 passengers, or the 7-seat Hyundai Staria and GMC Yukon when your group or luggage needs more room.',
      ar: 'سيدان لـ٤ ركاب كحد أقصى، أو هيونداي ستاريا وGMC يوكون بسعة ٧ مقاعد عندما تحتاج مجموعتك أو أمتعتك مساحة أكبر.',
    },
    href: '/hyundai-staria-taxi',
    cta: { en: 'View Hyundai Staria', ar: 'عرض هيونداي ستاريا' },
  },
  {
    iconName: 'Briefcase',
    title: { en: 'Private Driver', ar: 'سائق خاص' },
    desc: {
      en: 'Ask about a private driver for visits, shopping or appointments during your stay in Madinah, subject to availability.',
      ar: 'اسأل عن سائق خاص للزيارات أو التسوق أو المواعيد خلال إقامتك في المدينة المنورة، حسب التوفر.',
    },
    href: '/private-driver',
    cta: { en: 'Ask about a private driver', ar: 'استفسر عن سائق خاص' },
  },
]

/* ── Arriving at Madinah Airport? ─────────────────────────────── */

export interface ArrivalStep {
  n: string
  title: BText
  desc: BText
}

export const arrivalSteps: ArrivalStep[] = [
  { n: '1', title: { en: 'Share your flight number', ar: 'شارك رقم رحلتك' }, desc: { en: 'So we can track your arrival time.', ar: 'لنتابع وقت وصولك.' } },
  { n: '2', title: { en: 'Tell us your hotel', ar: 'أخبرنا باسم فندقك' }, desc: { en: 'Or your exact accommodation address in Madinah.', ar: 'أو عنوان إقامتك الدقيق في المدينة المنورة.' } },
  { n: '3', title: { en: 'Tell us your passenger count', ar: 'أخبرنا بعدد الركاب' }, desc: { en: 'So the right vehicle can be arranged.', ar: 'لترتيب السيارة المناسبة.' } },
  { n: '4', title: { en: 'Choose your vehicle', ar: 'اختر سيارتك' }, desc: { en: 'Sedan, Hyundai Staria or GMC Yukon.', ar: 'سيدان، أو هيونداي ستاريا، أو GMC يوكون.' } },
  { n: '5', title: { en: 'Receive your fare on WhatsApp', ar: 'استلم سعر رحلتك عبر واتساب' }, desc: { en: 'The route price is confirmed before you travel — no advance payment required.', ar: 'يُؤكَّد سعر المسار قبل رحلتك — دون أي دفع مسبق.' } },
  { n: '6', title: { en: 'Confirm your pickup', ar: 'أكّد تفاصيل استلامك' }, desc: { en: 'Your driver waits at arrivals with your name once details are confirmed.', ar: 'ينتظرك سائقك في صالة الوصول بلوحة باسمك بعد تأكيد التفاصيل.' } },
]

export const arrivalNote: BText = {
  en: 'Airport travel time can vary with traffic and pickup conditions — the drive to central Madinah hotels is usually about 25–35 minutes.',
  ar: 'قد يختلف وقت الرحلة من المطار حسب حركة المرور وظروف الاستلام — تستغرق الرحلة إلى فنادق وسط المدينة المنورة عادةً من ٢٥ إلى ٣٥ دقيقة.',
}

/* ── Staying near the Prophet's Mosque? ───────────────────────── */

export const mosqueSection = {
  intro: {
    en: "Many visitors stay around the Central Area (Al-Markaziyah), within walking distance of Al-Masjid An-Nabawi, while others stay farther out. Share your hotel name or accommodation address and your destination, and we will confirm the pickup and drop-off details.",
    ar: 'يقيم كثير من الزوار في المنطقة المركزية، على مسافة قريبة من المسجد النبوي الشريف، بينما يقيم آخرون في مناطق أبعد. شاركنا اسم فندقك أو عنوان إقامتك والوجهة، وسنؤكد تفاصيل الاستلام والتوصيل.',
  },
  points: [
    { en: 'Hotel or accommodation name', ar: 'اسم الفندق أو مكان الإقامة' },
    { en: 'Pickup and drop-off destination', ar: 'وجهة الاستلام والتوصيل' },
    { en: 'Preferred pickup time', ar: 'الوقت المفضل للاستلام' },
  ] as BText[],
  caveat: {
    en: "Traffic and access arrangements around the Prophet's Mosque can change, particularly during busy prayer periods, so nearby pickup points may shift slightly.",
    ar: 'قد تتغير حركة المرور وترتيبات الوصول حول المسجد النبوي الشريف، خاصة في أوقات الصلاة المزدحمة، فقد تتغير نقاط الاستلام القريبة قليلاً تبعاً لذلك.',
  },
}

/* ── Madinah Ziyarat by private vehicle ───────────────────────── */

export const ziyaratSection = {
  value: {
    en: 'With a private vehicle, your group can travel between selected sites without sharing the ride with other passengers.',
    ar: 'بسيارة خاصة، يمكن لمجموعتك التنقل بين المواقع المختارة دون مشاركة الرحلة مع ركاب آخرين.',
  },
  sites: [
    { en: 'Quba', ar: 'قباء' },
    { en: 'Mount Uhud', ar: 'جبل أحد' },
    { en: 'Al-Baqi', ar: 'البقيع' },
  ] as BText[],
  caveat: {
    en: 'The exact itinerary and duration should be confirmed before booking.',
    ar: 'يجب تأكيد المسار والمدة الدقيقة قبل الحجز.',
  },
}

/* ── Family travel: vehicle comparison ────────────────────────── */

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
    bestFor: { en: 'Best when the group is small and luggage is manageable.', ar: 'مناسبة عندما تكون المجموعة صغيرة والأمتعة محدودة.' },
  },
  {
    key: 'staria',
    name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' },
    seats: { en: 'Up to 7 passengers', ar: 'حتى ٧ ركاب' },
    bestFor: { en: 'Better suited to families or groups who want more cabin space.', ar: 'أنسب للعائلات والمجموعات التي تحتاج مساحة أكبر.' },
  },
  {
    key: 'gmc',
    name: { en: 'GMC Yukon', ar: 'GMC يوكون' },
    seats: { en: 'Up to 7 passengers', ar: 'حتى ٧ ركاب' },
    bestFor: { en: 'Suited to travelers who prefer an SUV format and VIP-oriented travel.', ar: 'مناسبة لمن يفضل سيارة دفع رباعي وتنقلاً فاخراً.' },
  },
]

/* ── Pickup across Madinah (kept short — not a neighbourhood list) ── */

export const pickupAreas = {
  intro: {
    en: 'Pickups can be arranged from the Central Area (Al-Markaziyah), the Quba area, Al-Aqiq, and hotels and apartments elsewhere in Madinah.',
    ar: 'يمكن ترتيب الاستلام من المنطقة المركزية، ومنطقة قباء، والعقيق، والفنادق والشقق في مناطق أخرى من المدينة المنورة.',
  },
  note: {
    en: 'Share your hotel or exact accommodation name when you book, and we will confirm your pickup point.',
    ar: 'شاركنا اسم فندقك أو عنوان إقامتك الدقيق عند الحجز، وسنؤكد نقطة الاستلام.',
  },
}

/* ── How much does a taxi cost in Madinah? (stated once) ──────── */

export const priceAnswer: BText = {
  en: 'Fares depend on the route and vehicle. Madinah Airport to a Madinah hotel is currently listed from 230 SAR by Sedan, 260 SAR by Hyundai Staria and 380 SAR by GMC Yukon. Prices are per vehicle, not per person.',
  ar: 'تعتمد الأسعار على المسار والسيارة. تبدأ أسعار مطار المدينة المنورة إلى فندق في المدينة من ٢٣٠ ريال بالسيدان، و٢٦٠ ريال بهيونداي ستاريا، و٣٨٠ ريال بـGMC يوكون. الأسعار للسيارة الواحدة وليست للفرد.',
}

/* ── Why choose Saudi Cabs GMC ─────────────────────────────────── */

export const highlights: MadinahHighlight[] = [
  {
    iconName: 'Car',
    title: { en: 'Private Travel', ar: 'رحلة خاصة' },
    desc: { en: 'Your vehicle is for your group rather than a shared ride.', ar: 'السيارة لمجموعتك فقط وليست رحلة مشتركة.' },
  },
  {
    iconName: 'Banknote',
    title: { en: 'Clear Fare Before Booking', ar: 'سعر واضح قبل الحجز' },
    desc: { en: 'The route fare is confirmed through WhatsApp before the trip.', ar: 'يُؤكَّد سعر المسار عبر واتساب قبل الرحلة.' },
  },
  {
    iconName: 'Users',
    title: { en: 'Vehicle Choice', ar: 'خيار السيارة' },
    desc: { en: 'Sedan, Hyundai Staria and GMC Yukon depending on group size and preference.', ar: 'سيدان وهيونداي ستاريا وGMC يوكون بحسب حجم مجموعتك وتفضيلك.' },
  },
  {
    iconName: 'MapPin',
    title: { en: 'Local Route Knowledge', ar: 'معرفة محلية بالمسارات' },
    desc: { en: 'The service covers Madinah Airport, hotels, intercity routes and popular Islamic sites.', ar: 'تغطي الخدمة مطار المدينة المنورة والفنادق والمسارات بين المدن والمواقع الإسلامية المعروفة.' },
  },
]

/* ── How booking works ────────────────────────────────────────── */

export interface BookingStep {
  n: string
  title: BText
  desc: BText
}

export const bookingSteps: BookingStep[] = [
  { n: '1', title: { en: 'Send Your Details', ar: 'أرسل تفاصيل رحلتك' }, desc: { en: 'Pickup, destination, date, time and passengers.', ar: 'الاستلام والوجهة والتاريخ والوقت وعدد الركاب.' } },
  { n: '2', title: { en: 'Choose Your Vehicle', ar: 'اختر سيارتك' }, desc: { en: 'Sedan, Hyundai Staria or GMC Yukon.', ar: 'سيدان أو هيونداي ستاريا أو GMC يوكون.' } },
  { n: '3', title: { en: 'Receive Your Fare', ar: 'استلم سعرك' }, desc: { en: 'The route price is confirmed through WhatsApp.', ar: 'يُؤكَّد سعر المسار عبر واتساب.' } },
  { n: '4', title: { en: 'Confirm Your Pickup', ar: 'أكّد استلامك' }, desc: { en: 'Receive the agreed pickup details.', ar: 'استلم تفاصيل الاستلام المتفق عليها.' } },
]

/* ── Madinah transport questions (direct-answer AEO block) ─────
   Distinct from the FAQ accordion below — short, factual answers
   formatted for assistants and search snippets, not an accordion. */

export interface AeoQA {
  q: BText
  a: BText
}

export const aeoQA: AeoQA[] = [
  {
    q: { en: 'How do I get from Madinah Airport to my hotel?', ar: 'كيف أصل من مطار المدينة المنورة إلى فندقي؟' },
    a: {
      en: 'Share your flight number, hotel name and passenger count. We confirm your vehicle and fare on WhatsApp, and your driver meets you at arrivals.',
      ar: 'شارك رقم رحلتك واسم فندقك وعدد الركاب. نؤكد السيارة والسعر عبر واتساب، وينتظرك سائقك في صالة الوصول.',
    },
  },
  {
    q: { en: 'How long does Madinah to Makkah take by private car?', ar: 'كم تستغرق الرحلة من المدينة المنورة إلى مكة المكرمة بسيارة خاصة؟' },
    a: {
      en: 'Approximately 4 to 4.5 hours, subject to traffic and road conditions on the Haramain Expressway.',
      ar: 'تقريباً من ٤ إلى ٤.٥ ساعة، حسب حركة المرور وحالة الطريق على طريق الحرمين السريع.',
    },
  },
  {
    q: { en: 'Can I book a private taxi to Quba Mosque?', ar: 'هل يمكنني حجز تاكسي خاص إلى مسجد قباء؟' },
    a: {
      en: 'Yes — Quba is one of the most requested Ziyarat stops. See the Madinah Ziyarat tour for details.',
      ar: 'نعم — قباء من أكثر محطات الزيارة طلباً. راجع جولة زيارات المدينة المنورة للتفاصيل.',
    },
  },
  {
    q: { en: 'Can I travel from Madinah to Jeddah by private taxi?', ar: 'هل يمكنني السفر من المدينة المنورة إلى جدة بتاكسي خاص؟' },
    a: {
      en: 'Yes, a direct private trip to Jeddah city or Jeddah Airport takes about 4 hours.',
      ar: 'نعم، تستغرق الرحلة الخاصة المباشرة إلى مدينة جدة أو مطارها نحو ٤ ساعات.',
    },
  },
  {
    q: { en: 'Can families book a 7-seat taxi in Madinah?', ar: 'هل يمكن للعائلات حجز تاكسي بسعة ٧ مقاعد في المدينة المنورة؟' },
    a: {
      en: 'Yes, the Hyundai Staria and GMC Yukon both seat up to 7, subject to availability.',
      ar: 'نعم، تتسع هيونداي ستاريا وGMC يوكون لـ٧ ركاب، حسب التوفر.',
    },
  },
  {
    q: { en: 'How much does Madinah Airport to hotel cost?', ar: 'كم تكلفة الرحلة من مطار المدينة المنورة إلى الفندق؟' },
    a: {
      en: 'From 230 SAR by Sedan, 260 SAR by Hyundai Staria or 380 SAR by GMC Yukon, per vehicle.',
      ar: 'من ٢٣٠ ريال بالسيدان، و٢٦٠ ريال بهيونداي ستاريا، و٣٨٠ ريال بـGMC يوكون، للسيارة الواحدة.',
    },
  },
  {
    q: { en: 'Can I book transport early in the morning?', ar: 'هل يمكنني حجز نقل في الصباح الباكر؟' },
    a: {
      en: 'Booking support is available 24/7, though actual pickup availability depends on drivers near your location at that time.',
      ar: 'دعم الحجز متاح على مدار الساعة، لكن توفر الاستلام الفعلي يعتمد على توفر السائقين بالقرب من موقعك في ذلك الوقت.',
    },
  },
]
