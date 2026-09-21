import type { FAQItem } from '@/components/FAQSection'
import type { PricingRoute } from '@/lib/pricingData'

/*
 * Content for the Makkah city page (/makkah-taxi-service).
 * Prices are NOT stored here — they come from pricingData.ts so there is a single source of truth.
 * Route times, distances and service statements mirror the existing site content
 * (route pages, guides and FAQs); nothing here should introduce new facts.
 */

export type BText = { ar: string; en: string }

export interface MakkahService {
  iconName: string
  title: BText
  desc: BText
  href: string
  cta: BText
}

export interface MakkahRouteCard {
  from: BText
  to: BText
  time: BText
  /** Existing internal route page. When absent the card opens WhatsApp with a pre-filled message. */
  href?: string
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
  routes: MakkahRouteCard[]
  linkedRoutes: MakkahLinkedRoute[]
  highlights: MakkahHighlight[]
  faqs: FAQItem[]
  pricing: PricingRoute[]
}

/* ── Hero ─────────────────────────────────────────────────────── */

export const heroContent = {
  h1: {
    en: 'Makkah Taxi & Private Transport Services',
    ar: 'خدمة تاكسي ونقل خاص في مكة المكرمة',
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

/* ── Trip types ───────────────────────────────────────────────── */

export interface MakkahAudience {
  iconName: string
  title: BText
  desc: BText
  href: string
  linkLabel: BText
}

export const audiences: MakkahAudience[] = [
  {
    iconName: 'Moon',
    title: { en: 'Umrah Travelers', ar: 'المعتمرون' },
    desc: {
      en: 'Arriving at Jeddah Airport or coming from Madinah for Umrah? Book a private transfer to your Makkah hotel, then ride between your hotel and the Holy Mosque whenever you need. Your fare is confirmed on WhatsApp before you travel.',
      ar: 'هل تصل إلى مطار جدة أو تأتي من المدينة المنورة للعمرة؟ احجز توصيلاً خاصاً إلى فندقك في مكة، ثم تنقّل بين الفندق والحرم متى احتجت. يُؤكَّد سعرك عبر واتساب قبل رحلتك.',
    },
    href: '/umrah-travel-guide',
    linkLabel: { en: 'Umrah Travel Guide', ar: 'دليل سفر العمرة' },
  },
  {
    iconName: 'Users',
    title: { en: 'Families & Groups', ar: 'العائلات والمجموعات' },
    desc: {
      en: 'Travelling with children, parents or luggage? The Hyundai Staria and GMC Yukon each seat 7, so everyone rides together in one private vehicle. Prices are per vehicle, not per person.',
      ar: 'هل تسافر مع الأطفال أو الوالدين أو أمتعة كثيرة؟ تتسع هيونداي ستاريا وGMC يوكون لـ٧ ركاب لكل منهما، فيسافر الجميع معاً في سيارة خاصة واحدة. الأسعار للسيارة الواحدة وليس للفرد.',
    },
    href: '/hyundai-staria-taxi',
    linkLabel: { en: 'Hyundai Staria Taxi', ar: 'تاكسي هيونداي ستاريا' },
  },
  {
    iconName: 'Tent',
    title: { en: 'Hajj Travelers', ar: 'الحجاج' },
    desc: {
      en: 'Hajj days bring heavy traffic and official access rules. Arrange transport to Mina, Arafat and Muzdalifah ahead of time, allow for journey times that vary, and read our Hajj transport answers before you book.',
      ar: 'تشهد أيام الحج ازدحاماً شديداً وأنظمة وصول رسمية. رتّب نقلك إلى منى وعرفات ومزدلفة مسبقاً، واحسب حساب اختلاف أوقات الرحلات، واطّلع على إجاباتنا حول نقل الحج قبل الحجز.',
    },
    href: '/hajj-transport-faq',
    linkLabel: { en: 'Hajj Transport FAQ', ar: 'الأسئلة الشائعة لنقل الحج' },
  },
  {
    iconName: 'Briefcase',
    title: { en: 'Business & Private Travel', ar: 'الأعمال والتنقل الخاص' },
    desc: {
      en: 'Need a comfortable ride to a meeting, an appointment or the airport? Book a private Sedan or a GMC Yukon VIP for a point-to-point trip, or ask about a private driver for the day.',
      ar: 'تحتاج إلى رحلة مريحة إلى اجتماع أو موعد أو المطار؟ احجز سيدان خاصاً أو GMC يوكون VIP لرحلة من نقطة إلى أخرى، أو اسأل عن سائق خاص ليوم كامل.',
    },
    href: '/private-driver',
    linkLabel: { en: 'Private Driver', ar: 'سائق خاص' },
  },
]

/* ── How booking works ────────────────────────────────────────── */

export const bookingSteps: { n: string; title: BText; desc: BText }[] = [
  {
    n: '01',
    title: { en: 'Send Your Trip Details', ar: 'أرسل تفاصيل رحلتك' },
    desc: {
      en: 'Pickup, destination, date, time and passenger information — through the form on this page or on WhatsApp.',
      ar: 'موقع الاستلام والوجهة والتاريخ والوقت وعدد الركاب — عبر النموذج في هذه الصفحة أو عبر واتساب.',
    },
  },
  {
    n: '02',
    title: { en: 'Choose Your Vehicle', ar: 'اختر سيارتك' },
    desc: {
      en: 'Sedan for up to 4 passengers, Hyundai Staria or GMC Yukon (VIP) for up to 7.',
      ar: 'سيدان لـ٤ ركاب كحد أقصى، وهيونداي ستاريا أو GMC يوكون (VIP) لـ٧ ركاب كحد أقصى.',
    },
  },
  {
    n: '03',
    title: { en: 'Confirm Your Price', ar: 'أكّد سعرك' },
    desc: {
      en: 'Receive the route price and confirm through WhatsApp. No advance payment is required.',
      ar: 'استلم سعر الرحلة وأكّده عبر واتساب. لا يلزم أي دفع مسبق.',
    },
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
      en: 'During Hajj, heavy traffic and official crowd-control and access rules can change routes and journey times, especially to Mina and Arafat. Book early, keep your schedule flexible, and check the guidance before you plan.',
      ar: 'خلال الحج، قد يغيّر الازدحام الشديد وأنظمة إدارة الحشود والوصول الرسمية المسارات وأوقات الرحلات، خصوصاً إلى منى وعرفات. احجز مبكراً، وكن مرناً في جدولك، واطّلع على الإرشادات قبل التخطيط.',
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
