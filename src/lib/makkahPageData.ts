import type { FAQItem } from '@/components/FAQSection'
import type { PricingRoute } from '@/lib/pricingData'

/*
 * Content for the Makkah city page (/makkah-taxi-service).
 * Prices are NOT stored here — they come from pricingData.ts so there is a single source of truth.
 * Route times, distances and service statements mirror the existing site content
 * (route pages, guides and FAQs); nothing here should introduce new facts.
 */

export type BText = { ar: string; en: string }

export type MakkahServiceGroup = 'airport' | 'local' | 'religious' | 'intercity'

export interface MakkahService {
  iconName: string
  title: BText
  desc: BText
  href: string
  cta: BText
  group: MakkahServiceGroup
}

export interface MakkahLinkedRoute {
  slug: string
  label: BText
  duration: BText
}

export interface MakkahHighlight {
  iconName: string
  title: BText
  desc: BText
}

export interface MakkahPageProps {
  cityName: BText
  citySlug: string
  citySlogan: BText
  heroImage: string
  services: MakkahService[]
  linkedRoutes: MakkahLinkedRoute[]
  highlights: MakkahHighlight[]
  faqs: FAQItem[]
  pricing: PricingRoute[]
}

export const SERVICE_GROUP_LABELS: Record<MakkahServiceGroup, BText> = {
  airport: { en: 'Airport Transfers', ar: 'توصيل المطار' },
  local: { en: 'Local Makkah Transport', ar: 'التنقل داخل مكة' },
  religious: { en: 'Religious Travel', ar: 'النقل الديني' },
  intercity: { en: 'Intercity Travel', ar: 'السفر بين المدن' },
}

/* ── Hero ─────────────────────────────────────────────────────── */

export const heroContent = {
  h1: {
    en: 'Transport Services in Makkah',
    ar: 'خدمات النقل في مكة المكرمة',
  },
  intro: {
    en: 'Private taxi and transport across Makkah — from Jeddah Airport to your hotel, Holy Mosque (Haram) transfers, Hajj and Umrah transportation, Ziyarat trips and intercity travel to Madinah, Jeddah and Taif. Choose a Sedan, Hyundai Staria or GMC Yukon and confirm your fixed price on WhatsApp before you travel.',
    ar: 'تاكسي ونقل خاص في مكة المكرمة: من مطار جدة إلى فندقك، وتوصيل إلى المسجد الحرام، ونقل الحج والعمرة، ورحلات الزيارات، والسفر بين المدن إلى المدينة المنورة وجدة والطائف. اختر سيدان أو هيونداي ستاريا أو GMC يوكون وأكّد سعرك الثابت عبر واتساب قبل رحلتك.',
  },
  primaryCta: { en: 'Book Your Makkah Taxi on WhatsApp', ar: 'احجز تاكسي مكة عبر واتساب' },
  secondaryCta: { en: 'Get a Trip Price', ar: 'احصل على سعر رحلتك' },
  trust: [
    { en: 'Fixed Price', ar: 'سعر ثابت' },
    { en: 'No Hidden Fees', ar: 'بدون رسوم خفية' },
    { en: '24/7 Booking', ar: 'حجز ٢٤/٧' },
    { en: 'No Advance Payment', ar: 'بدون دفع مسبق' },
  ] as BText[],
}

/* ── Which service do you need? (decision helper) ───────────────
   Short, scannable "need → service" prompts rather than paragraphs —
   the fuller explanation for each already lives in its own section
   (Services, Vehicle Comparison, Ziyarat guide topic), so this stays
   a pointer, not a restatement. */

export interface MakkahAudience {
  iconName: string
  need: BText
  service: BText
  href: string
}

export const audiences: MakkahAudience[] = [
  {
    iconName: 'Plane',
    need: { en: 'Arriving at Jeddah Airport', ar: 'تصل إلى مطار جدة' },
    service: { en: 'Airport transfer', ar: 'توصيل من المطار' },
    href: '/jeddah-airport-to-makkah',
  },
  {
    iconName: 'Building2',
    need: { en: 'Staying near the Haram', ar: 'تقيم قرب الحرم' },
    service: { en: 'Hotel ↔ Haram transfer', ar: 'توصيل الفندق ↔ الحرم' },
    href: '#booking',
  },
  {
    iconName: 'Map',
    need: { en: 'Visiting historical sites', ar: 'تريد زيارة المواقع التاريخية' },
    service: { en: 'Ziyarat trip', ar: 'رحلة زيارات' },
    href: '/makkah-ziyarat-tour',
  },
  {
    iconName: 'Route',
    need: { en: 'Travelling on to Madinah', ar: 'متجه إلى المدينة المنورة' },
    service: { en: 'Private intercity taxi', ar: 'تاكسي خاص بين المدن' },
    href: '/makkah-to-madinah',
  },
  {
    iconName: 'Users',
    need: { en: 'Travelling with family and luggage', ar: 'تسافر مع العائلة والأمتعة' },
    service: { en: 'Hyundai Staria (7 seats)', ar: 'هيونداي ستاريا (٧ مقاعد)' },
    href: '/hyundai-staria-taxi',
  },
  {
    iconName: 'Briefcase',
    need: { en: 'Wanting VIP comfort', ar: 'تريد راحة VIP' },
    service: { en: 'GMC Yukon', ar: 'GMC يوكون' },
    href: '/gmc-yukon-hire',
  },
]

/* ── Fleet: "best for" lines (shown on the fleet cards) ───────── */

export const vehicleBestFor: Record<'sedan' | 'staria' | 'gmc', BText> = {
  sedan: {
    en: 'Up to 4 passengers — individuals, couples and small families',
    ar: 'حتى ٤ ركاب — الأفراد والأزواج والعائلات الصغيرة',
  },
  staria: {
    en: 'Up to 7 passengers — families and pilgrim groups with luggage',
    ar: 'حتى ٧ ركاب — العائلات ومجموعات الحجاج مع الأمتعة',
  },
  gmc: {
    en: 'Up to 7 passengers — VIP and premium travel',
    ar: 'حتى ٧ ركاب — للتنقل الفاخر وVIP',
  },
}

/* ── How to choose your vehicle (comparison) ─────────────────── */

export interface VehicleCompareCard {
  key: 'sedan' | 'staria' | 'gmc'
  name: BText
  bestFor: BText[]
}

export const vehicleComparison: VehicleCompareCard[] = [
  {
    key: 'sedan',
    name: { en: 'Sedan', ar: 'سيدان' },
    bestFor: [
      { en: '1–4 passengers', ar: '١–٤ ركاب' },
      { en: 'Small luggage', ar: 'أمتعة خفيفة' },
      { en: 'Couples and small families', ar: 'الأزواج والعائلات الصغيرة' },
    ],
  },
  {
    key: 'staria',
    name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' },
    bestFor: [
      { en: 'Families and groups', ar: 'العائلات والمجموعات' },
      { en: 'Up to 7 passengers', ar: 'حتى ٧ ركاب' },
      { en: 'More luggage space', ar: 'مساحة أمتعة أكبر' },
    ],
  },
  {
    key: 'gmc',
    name: { en: 'GMC Yukon', ar: 'GMC يوكون' },
    bestFor: [
      { en: 'VIP and private travel', ar: 'تنقل VIP وخاص' },
      { en: 'Families wanting SUV comfort', ar: 'عائلات تفضل راحة الدفع الرباعي' },
      { en: 'Up to 7 passengers', ar: 'حتى ٧ ركاب' },
    ],
  },
]

/* ── What to expect ───────────────────────────────────────────── */

export interface ExpectStep {
  title: BText
  desc: BText
}

export const whatToExpect: ExpectStep[] = [
  {
    title: { en: 'Before your trip', ar: 'قبل رحلتك' },
    desc: {
      en: 'Send your pickup location, destination, date, time and passenger details through the form or on WhatsApp.',
      ar: 'أرسل موقع الاستلام والوجهة والتاريخ والوقت وعدد الركاب عبر النموذج أو واتساب.',
    },
  },
  {
    title: { en: 'Before pickup', ar: 'قبل الاستلام' },
    desc: {
      en: 'We confirm the vehicle, fare and pickup details with you on WhatsApp — no advance payment is required.',
      ar: 'نؤكد معك السيارة والسعر وتفاصيل الاستلام عبر واتساب — دون أي دفع مسبق.',
    },
  },
  {
    title: { en: 'During the journey', ar: 'أثناء الرحلة' },
    desc: {
      en: 'You travel privately in the vehicle you chose, rather than sharing the ride with other passengers.',
      ar: 'تسافر بشكل خاص في السيارة التي اخترتها، دون مشاركة الرحلة مع ركاب آخرين.',
    },
  },
  {
    title: { en: 'For airport pickups', ar: 'لاستقبال المطار' },
    desc: {
      en: 'Add your flight number when you book, so pickup can be coordinated around your arrival time.',
      ar: 'أضف رقم رحلتك عند الحجز، ليتم تنسيق الاستقبال وفق موعد وصولك.',
    },
  },
]

/* ── Travelling with family ───────────────────────────────────── */

export const familyTravel = {
  intro: {
    en: 'A few practical points to help you pick the right vehicle when you are travelling with children, elderly parents or extra luggage.',
    ar: 'نقاط عملية تساعدك على اختيار السيارة المناسبة عند السفر مع الأطفال أو الوالدين كبار السن أو أمتعة إضافية.',
  },
  points: [
    {
      en: 'The Sedan carries up to 4 passengers with small luggage — fine for a couple or a small family travelling light.',
      ar: 'يتسع السيدان لـ٤ ركاب كحد أقصى مع أمتعة خفيفة — مناسب لزوجين أو عائلة صغيرة بأمتعة قليلة.',
    },
    {
      en: 'For a larger family or a group with multiple bags, the Hyundai Staria (7 seats) is usually more practical — everyone and the luggage travel together in one vehicle.',
      ar: 'للعائلات الكبيرة أو المجموعات بعدة حقائب، تُعد هيونداي ستاريا (٧ مقاعد) أكثر عملية عادةً — يسافر الجميع والأمتعة معاً في سيارة واحدة.',
    },
    {
      en: 'The GMC Yukon also seats 7 and suits families who prefer an SUV.',
      ar: 'تتسع GMC يوكون أيضاً لـ٧ ركاب وتناسب العائلات التي تفضل سيارة الدفع الرباعي.',
    },
    {
      en: 'Mention children, elderly travelers or extra bags when you book, so the right vehicle can be confirmed in advance.',
      ar: 'اذكر وجود أطفال أو مسافرين كبار السن أو حقائب إضافية عند الحجز، ليتم تأكيد السيارة المناسبة مسبقاً.',
    },
  ] as BText[],
}

/* ── Makkah Transport Guide ───────────────────────────────────── */

export interface GuideTopic {
  title: BText
  body: BText
  links: { href: string; label: BText }[]
}

export const guideTopics: GuideTopic[] = [
  {
    title: { en: 'Booking a taxi in Makkah', ar: 'حجز تاكسي في مكة' },
    body: {
      en: 'Send your pickup point, destination, date, time and number of passengers through the form or on WhatsApp. We reply with the route fare and pickup details for you to confirm — no advance payment is required. For hotel pickups, include the hotel name.',
      ar: 'أرسل موقع الاستلام والوجهة والتاريخ والوقت وعدد الركاب عبر النموذج أو واتساب. نرد عليك بسعر الرحلة وتفاصيل الاستلام لتؤكدها — دون أي دفع مسبق. وعند الاستلام من فندق، اذكر اسم الفندق.',
    },
    links: [{ href: '/makkah-transport-guide', label: { en: 'Makkah Transport Guide', ar: 'دليل النقل في مكة' } }],
  },
  {
    title: { en: 'Jeddah Airport to Makkah', ar: 'من مطار جدة إلى مكة' },
    body: {
      en: 'King Abdulaziz International Airport (JED) is roughly 90 km from Makkah, and the transfer usually takes about 55–90 minutes depending on traffic. Add your flight number when you book so pickup details can be confirmed for your arrival. Fares are listed in the pricing section above.',
      ar: 'يبعد مطار الملك عبدالعزيز الدولي (JED) نحو 90 كم عن مكة، وتستغرق الرحلة عادةً من 55 إلى 90 دقيقة حسب حركة المرور. أضف رقم رحلتك عند الحجز ليتم تأكيد تفاصيل الاستقبال وفق موعد وصولك. الأسعار موضحة في قسم الأسعار أعلاه.',
    },
    links: [
      { href: '/jeddah-airport-to-makkah', label: { en: 'Jeddah Airport to Makkah', ar: 'مطار جدة إلى مكة' } },
      { href: '/blog/how-to-travel-jeddah-airport-to-makkah', label: { en: 'Airport to Makkah travel tips', ar: 'نصائح السفر من المطار إلى مكة' } },
      { href: '/blog/makkah-to-jeddah-airport-by-taxi', label: { en: 'Makkah to Jeddah Airport guide', ar: 'دليل مكة إلى مطار جدة' } },
    ],
  },
  {
    title: { en: 'Hotel & Holy Mosque transfers', ar: 'التوصيل بين الفنادق والحرم' },
    body: {
      en: 'Trips between your hotel or apartment and the Holy Mosque are available day and night. Access near the Haram can be limited and busy around prayer times, so allow extra time and share your hotel name so we can confirm pickup details.',
      ar: 'تتوفر الرحلات بين فندقك أو شقتك والحرم المكي ليلاً ونهاراً. قد يكون الوصول قرب الحرم محدوداً ومزدحماً في أوقات الصلاة، لذا امنح نفسك وقتاً إضافياً وشاركنا اسم فندقك لنؤكد تفاصيل الاستلام.',
    },
    links: [{ href: '#booking', label: { en: 'Get a trip price', ar: 'احصل على سعر رحلتك' } }],
  },
  {
    title: { en: 'Makkah to Madinah private transport', ar: 'النقل الخاص من مكة إلى المدينة' },
    body: {
      en: 'The road trip is about 430 km and takes roughly 4.5–5 hours depending on traffic and conditions. A private car leaves on your schedule and can collect you from, and drop you at, your hotel. If you are weighing it against the train, our comparison explains the difference.',
      ar: 'تبلغ الرحلة البرية نحو 430 كم وتستغرق تقريباً من 4.5 إلى 5 ساعات حسب حركة المرور وحالة الطريق. تنطلق السيارة الخاصة في الموعد الذي يناسبك ويمكنها استلامك من فندقك وإيصالك إليه. وإن كنت تقارنها بالقطار، فمقارنتنا توضح الفرق.',
    },
    links: [
      { href: '/makkah-to-madinah', label: { en: 'Makkah to Madinah Taxi', ar: 'تاكسي مكة إلى المدينة' } },
      { href: '/blog/haramain-train-vs-private-taxi-makkah-madinah', label: { en: 'Haramain train vs private taxi', ar: 'قطار الحرمين أم تاكسي خاص' } },
    ],
  },
  {
    title: { en: 'Makkah Ziyarat transportation', ar: 'النقل لزيارات مكة' },
    body: {
      en: 'A Ziyarat trip gives you a private driver and vehicle for the duration you choose, so you can visit historical Islamic sites in Makkah at your own pace. Confirm the sites, duration and fare on WhatsApp before the trip.',
      ar: 'تمنحك رحلة الزيارات سائقاً خاصاً وسيارة للمدة التي تختارها، لتزور المواقع الإسلامية التاريخية في مكة براحتك. أكّد المواقع والمدة والسعر عبر واتساب قبل الرحلة.',
    },
    links: [
      { href: '/makkah-ziyarat-tour', label: { en: 'Makkah Ziyarat Tour', ar: 'جولة زيارات مكة' } },
      { href: '/blog/best-places-makkah-ziyarat', label: { en: 'Places to visit for Ziyarat', ar: 'أفضل أماكن الزيارة في مكة' } },
    ],
  },
  {
    title: { en: 'Hajj-season considerations', ar: 'اعتبارات موسم الحج' },
    body: {
      en: 'Mina (~7 km from central Makkah), Arafat (~20 km) and Muzdalifah (~9 km) are reached by road during Hajj, but heavy traffic and official crowd-control and access rules can change routes and journey times, especially to Mina and Arafat. Book early, keep your schedule flexible, and check the guidance before you plan.',
      ar: 'تُقطع المسافة إلى منى (نحو ٧ كم من وسط مكة) وعرفات (نحو ٢٠ كم) ومزدلفة (نحو ٩ كم) براً خلال الحج، لكن الازدحام الشديد وأنظمة إدارة الحشود والوصول الرسمية قد تغيّر المسارات وأوقات الرحلات، خصوصاً إلى منى وعرفات. احجز مبكراً، وكن مرناً في جدولك، واطّلع على الإرشادات قبل التخطيط.',
    },
    links: [
      { href: '/hajj-transport-faq', label: { en: 'Hajj Transport FAQ', ar: 'الأسئلة الشائعة لنقل الحج' } },
      { href: '/hajj-umrah-transport', label: { en: 'Hajj & Umrah Transport', ar: 'نقل الحج والعمرة' } },
    ],
  },
]

export const relatedGuides: { href: string; label: BText }[] = [
  { href: '/makkah-transport-guide', label: { en: 'Makkah Transport Guide', ar: 'دليل النقل في مكة' } },
  { href: '/umrah-travel-guide', label: { en: 'Umrah Travel Guide', ar: 'دليل سفر العمرة' } },
  { href: '/hajj-transport-faq', label: { en: 'Hajj Transport FAQ', ar: 'الأسئلة الشائعة لنقل الحج' } },
  { href: '/taxi-prices-saudi-arabia', label: { en: 'Taxi Prices in Saudi Arabia', ar: 'أسعار التاكسي في السعودية' } },
]
