import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for the Taif city page (/taif-taxi-service).
 * Taif has no confirmed per-route SAR pricing in pricingData.ts, so this page
 * never states a fare — fares are confirmed on WhatsApp once the itinerary is known.
 * Route times/distances mirror routePageData.ts and the existing FAQs; nothing here
 * introduces new facts. Taif's identity (mountain roads, Al-Hada, Al-Shafa, rose farms)
 * is deliberately distinct from Makkah/Madinah/Jeddah — not a reskin of those pages.
 */

export type BText = { ar: string; en: string }

export interface TaifPageProps {
  cityName: BText
  citySlug: string
  citySlogan: BText
  heroImage: string
  faqs: FAQItem[]
}

/* ── Hero ─────────────────────────────────────────────────────── */

export const heroContent = {
  h1: {
    en: 'Taif Taxi & Private Transport Service',
    ar: 'خدمة تاكسي ونقل خاص في الطائف',
  },
  intro: {
    en: 'Private transport around Taif for airport transfers, hotels, the mountain roads of Al-Hada and Al-Shafa, sightseeing trips and journeys to Makkah, Jeddah and Madinah. Choose a Sedan, Hyundai Staria or GMC Yukon and confirm your fare on WhatsApp.',
    ar: 'نقل خاص في الطائف لتوصيل المطار والفنادق وطرق الهدا وشفا الجبلية ورحلات المشاهدة والسفر إلى مكة المكرمة وجدة والمدينة المنورة. اختر سيدان أو هيونداي ستاريا أو GMC يوكون وأكّد سعرك عبر واتساب.',
  },
  primaryCta: { en: 'Book via WhatsApp', ar: 'احجز عبر واتساب' },
  secondaryCta: { en: 'Explore Taif Routes', ar: 'استكشف خطوط الطائف' },
}

export const natureStrip: BText[] = [
  { en: '🌹 Rose Capital of Arabia', ar: '🌹 مدينة الورد الطائفي' },
  { en: '⛰️ Scenic Mountain Roads', ar: '⛰️ طرق جبلية خلابة' },
  { en: '🌿 Fresh Mountain Air', ar: '🌿 هواء جبلي منعش' },
  { en: '🌡️ Cool Pleasant Climate', ar: '🌡️ مناخ معتدل' },
]

/* ── How can we help in Taif? (decision helper) ───────────────── */

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
    title: { en: 'Taif Airport Transfer', ar: 'توصيل مطار الطائف' },
    desc: { en: 'Pickup and drop-off at Taif Regional Airport, about 28 km from downtown.', ar: 'استقبال وتوديع في مطار الطائف الإقليمي، على بعد نحو ٢٨ كم من وسط المدينة.' },
    cta: { en: 'Airport Transfer', ar: 'توصيل من المطار' },
    href: '/taif-airport-taxi',
  },
  {
    iconName: 'Mountain',
    title: { en: 'Al-Hada Trip', ar: 'رحلة الهدا' },
    desc: { en: 'A scenic mountain road about 20 minutes from downtown, known for its cable car and viewpoints.', ar: 'طريق جبلي خلاب على بعد نحو ٢٠ دقيقة من وسط المدينة، يشتهر بالتلفريك والمطلات.' },
    cta: { en: 'Plan an Al-Hada Trip', ar: 'خطط لرحلة الهدا' },
    href: 'https://wa.me/923097811785',
  },
  {
    iconName: 'TreePine',
    title: { en: 'Al-Shafa Trip', ar: 'رحلة شفا' },
    desc: { en: 'A higher, cooler mountain retreat about 30 minutes from downtown — a favorite for families in summer.', ar: 'منتجع جبلي أعلى وأكثر برودة على بعد نحو ٣٠ دقيقة من وسط المدينة — مفضل للعائلات في الصيف.' },
    cta: { en: 'Plan a Shafa Trip', ar: 'خطط لرحلة شفا' },
    href: 'https://wa.me/923097811785',
  },
  {
    iconName: 'Leaf',
    title: { en: 'Taif Rose Farm Visit', ar: 'زيارة مزارع الورد' },
    desc: { en: 'Visit the rose farms around Al-Hada and the mountain villages during the rose season.', ar: 'زُر مزارع الورد حول الهدا والقرى الجبلية خلال موسم الورد.' },
    cta: { en: 'Ask About a Rose Farm Trip', ar: 'اسأل عن رحلة مزارع الورد' },
    href: 'https://wa.me/923097811785',
  },
  {
    iconName: 'Car',
    title: { en: 'Taif City Transfer', ar: 'تاكسي داخل الطائف' },
    desc: { en: 'A private ride anywhere in Taif — hotels, downtown, markets or shopping.', ar: 'رحلة خاصة إلى أي مكان في الطائف — الفنادق أو وسط المدينة أو الأسواق.' },
    cta: { en: 'Get a Trip Price', ar: 'احصل على سعر رحلتك' },
    href: '/booking',
  },
  {
    iconName: 'Clock',
    title: { en: 'Full-Day Private Driver', ar: 'سائق خاص ليوم كامل' },
    desc: { en: 'A custom day covering several mountain stops, with the fare based on your itinerary.', ar: 'يوم مخصص يغطي عدة محطات جبلية، ويعتمد السعر على برنامج رحلتك.' },
    cta: { en: 'Plan My Taif Trip', ar: 'خطط لرحلتي في الطائف' },
    href: 'https://wa.me/923097811785',
  },
  {
    iconName: 'Route',
    title: { en: 'Taif → Makkah', ar: 'الطائف ← مكة المكرمة' },
    desc: { en: 'A direct private trip via the Al-Hada mountain road, about 1.5 hours.', ar: 'رحلة خاصة مباشرة عبر طريق الهدا الجبلي، نحو ١.٥ ساعة.' },
    cta: { en: 'Taif → Makkah', ar: 'الطائف ← مكة' },
    href: '/taif-to-makkah',
  },
  {
    iconName: 'Map',
    title: { en: 'Taif → Jeddah', ar: 'الطائف ← جدة' },
    desc: { en: 'A direct private trip, about 1.5 hours via the main highway.', ar: 'رحلة خاصة مباشرة، نحو ١.٥ ساعة عبر الطريق الرئيسي.' },
    cta: { en: 'Taif → Jeddah', ar: 'الطائف ← جدة' },
    href: '/taif-to-jeddah',
  },
]

/* ── Taif Airport ──────────────────────────────────────────────── */

export const airportSteps: { n: string; title: BText; desc: BText }[] = [
  { n: '1', title: { en: 'Arrival at Taif Airport', ar: 'الوصول إلى مطار الطائف' }, desc: { en: 'Share your flight details on WhatsApp before you land.', ar: 'شارك تفاصيل رحلتك عبر واتساب قبل الهبوط.' } },
  { n: '2', title: { en: 'Pickup', ar: 'الاستلام' }, desc: { en: 'Your driver meets you at arrivals with your name.', ar: 'سائقك ينتظرك في صالة الوصول بلوحة باسمك.' } },
  { n: '3', title: { en: 'Choose your vehicle', ar: 'اختر سيارتك' }, desc: { en: 'Sedan, Hyundai Staria or GMC Yukon.', ar: 'سيدان، أو هيونداي ستاريا، أو GMC يوكون.' } },
  { n: '4', title: { en: 'On to your hotel or destination', ar: 'إلى فندقك أو وجهتك' }, desc: { en: 'The city, a resort, or straight to the mountains.', ar: 'وسط المدينة أو منتجع أو مباشرة إلى الجبال.' } },
]

/* ── Mountain travel overview (editorial, no cards) ───────────── */

export const mountainOverview: BText = {
  en: "Many Taif trips don't end in the city center. Al-Hada and Al-Shafa, along with viewpoints, resorts and rest houses in the surrounding hills, are a normal part of a Taif visit — especially for families and groups planning more than one stop. A private vehicle means you are not tied to a fixed tour schedule between these spots.",
  ar: 'لا تنتهي كثير من رحلات الطائف عند وسط المدينة. فالهدا وشفا، إلى جانب المطلات والمنتجعات والاستراحات في التلال المحيطة، جزء معتاد من زيارة الطائف — خصوصاً للعائلات والمجموعات التي تخطط لأكثر من محطة. السيارة الخاصة تعني أنك لست مقيداً بجدول جولة ثابت بين هذه المواقع.',
}

/* ── Al-Hada experience ────────────────────────────────────────── */

export const alHada = {
  text: {
    en: "Al-Hada is about 20 minutes from downtown Taif and one of the most-visited mountain spots in the region, known for its cable car and viewpoints over the valley. A private vehicle can take you from your hotel directly to Al-Hada, and on toward Makkah afterward if that's part of your trip.",
    ar: 'تبعد الهدا نحو ٢٠ دقيقة عن وسط الطائف، وهي من أكثر المواقع الجبلية زيارة في المنطقة، وتشتهر بالتلفريك والمطلات على الوادي. يمكن للسيارة الخاصة أخذك من فندقك مباشرة إلى الهدا، ومتابعة الطريق نحو مكة المكرمة لاحقاً إن كانت ضمن خطة رحلتك.',
  },
}

/* ── Al-Shafa experience ──────────────────────────────────────── */

export const alShafa = {
  text: {
    en: 'Al-Shafa sits higher than Al-Hada, about 30 minutes from downtown Taif, with a noticeably cooler climate — a reason families often plan a Shafa trip during the summer. A private vehicle suited to mountain roads means your group and luggage travel together, with pickup from your hotel or resort.',
    ar: 'تقع شفا أعلى من الهدا، على بعد نحو ٣٠ دقيقة من وسط الطائف، بمناخ أكثر برودة بشكل ملحوظ — وهو سبب تخطيط العائلات لرحلة شفا غالباً خلال الصيف. السيارة الخاصة المناسبة للطرق الجبلية تعني سفر مجموعتكم وأمتعتكم معاً، مع استلام من فندقكم أو منتجعكم.',
  },
}

/* ── Rose farms ────────────────────────────────────────────────── */

export const roseFarms = {
  text: {
    en: "The rose farms around Al-Hada and the surrounding mountain villages are one of Taif's signature experiences, open mainly during the rose season from February to April. A private vehicle lets you visit the farms at your own pace, with a driver who knows the mountain roads around them.",
    ar: 'تُعد مزارع الورد حول الهدا والقرى الجبلية المحيطة من أبرز تجارب الطائف، وتفتح أساساً في موسم الورد من فبراير إلى أبريل. تتيح لك السيارة الخاصة زيارة المزارع بالسرعة التي تناسبك، مع سائق يعرف الطرق الجبلية المحيطة بها.',
  },
}

/* ── Full-day private driver ──────────────────────────────────── */

export const fullDay = {
  intro: {
    en: 'Request a private vehicle for a custom day around Taif. A typical itinerary moves from your hotel to the mountains and back — the exact stops and the final fare depend on where you want to go.',
    ar: 'اطلب سيارة خاصة ليوم مخصص في الطائف. يتنقل البرنامج المعتاد من فندقك إلى الجبال والعودة — تعتمد المحطات والسعر النهائي على الوجهات التي تختارها.',
  },
  stops: [
    { en: 'Hotel', ar: 'الفندق' },
    { en: 'Al-Hada', ar: 'الهدا' },
    { en: 'Al-Shafa', ar: 'شفا' },
    { en: 'Sightseeing', ar: 'جولة مشاهدة' },
    { en: 'Return to Hotel', ar: 'العودة للفندق' },
  ] as BText[],
}

/* ── Intercity routes ──────────────────────────────────────────── */

export interface LinkedRoute {
  slug: string
  label: BText
  duration: BText
  desc: BText
}

export const linkedRoutes: LinkedRoute[] = [
  {
    slug: 'taif-to-makkah',
    label: { en: 'Taif → Makkah', ar: 'الطائف ← مكة المكرمة' },
    duration: { en: '~1.5 hrs', ar: '١.٥ ساعة' },
    desc: { en: 'A scenic trip via the Al-Hada mountain road.', ar: 'رحلة خلابة عبر طريق الهدا الجبلي.' },
  },
  {
    slug: 'makkah-to-taif',
    label: { en: 'Makkah → Taif', ar: 'مكة المكرمة ← الطائف' },
    duration: { en: '~1.5 hrs', ar: '١.٥ ساعة' },
    desc: { en: 'The return leg, popular for a cooler mountain break from Makkah.', ar: 'رحلة العودة، شائعة لاستراحة جبلية باردة من مكة.' },
  },
  {
    slug: 'taif-to-jeddah',
    label: { en: 'Taif → Jeddah', ar: 'الطائف ← جدة' },
    duration: { en: '~1.5 hrs', ar: '١.٥ ساعة' },
    desc: { en: 'A direct trip via the main highway, about 100 km.', ar: 'رحلة مباشرة عبر الطريق الرئيسي، نحو ١٠٠ كم.' },
  },
  {
    slug: 'jeddah-to-taif',
    label: { en: 'Jeddah → Taif', ar: 'جدة ← الطائف' },
    duration: { en: '~1.5 hrs', ar: '١.٥ ساعة' },
    desc: { en: "Taif's hotels and mountain resorts, reached directly from Jeddah.", ar: 'فنادق الطائف ومنتجعاتها الجبلية، تصل إليها مباشرة من جدة.' },
  },
  {
    slug: 'taif-to-madinah',
    label: { en: 'Taif → Madinah', ar: 'الطائف ← المدينة المنورة' },
    duration: { en: '~5 hrs', ar: '٥ ساعات' },
    desc: { en: 'A longer private trip, about 520 km, for visitors continuing on from Taif.', ar: 'رحلة خاصة أطول، نحو ٥٢٠ كم، للزوار المتجهين من الطائف.' },
  },
  {
    slug: 'taif-airport-taxi',
    label: { en: 'Taif Airport → City Center', ar: 'مطار الطائف ← وسط المدينة' },
    duration: { en: '~20–30 min', ar: '٢٠ إلى ٣٠ دقيقة' },
    desc: { en: 'Pickup from Taif Regional Airport to downtown and nearby hotels.', ar: 'استلام من مطار الطائف الإقليمي إلى وسط المدينة والفنادق القريبة.' },
  },
]

export const legacyRoute = { label: { en: 'Taif → Riyadh', ar: 'الطائف ← الرياض' }, duration: { en: '~8 hrs', ar: '٨ ساعات' } }

/* ── Where can we take you in Taif? (areas) ───────────────────── */

export interface AreaItem {
  iconName: string
  name: BText
  desc: BText
  relevance: BText
}

export const areas: AreaItem[] = [
  {
    iconName: 'Mountain',
    name: { en: 'Al-Hada', ar: 'الهدا' },
    desc: { en: 'Mountain road about 20 minutes out, known for the cable car and valley viewpoints.', ar: 'طريق جبلي على بعد نحو ٢٠ دقيقة، يشتهر بالتلفريك ومطلات الوادي.' },
    relevance: { en: 'A quick trip from most hotels.', ar: 'رحلة قصيرة من معظم الفنادق.' },
  },
  {
    iconName: 'TreePine',
    name: { en: 'Al-Shafa', ar: 'شفا' },
    desc: { en: 'A higher, cooler mountain retreat about 30 minutes out.', ar: 'منتجع جبلي أعلى وأكثر برودة على بعد نحو ٣٠ دقيقة.' },
    relevance: { en: 'Popular for summer family trips.', ar: 'شائع لرحلات العائلات الصيفية.' },
  },
  {
    iconName: 'Building2',
    name: { en: 'Downtown Taif (Al-Faisaliyah)', ar: 'وسط الطائف (الفيصلية)' },
    desc: { en: "Taif's commercial and hotel center, where most accommodation is located.", ar: 'المركز التجاري والفندقي في الطائف، حيث تتوفر أغلب أماكن الإقامة.' },
    relevance: { en: 'Most pickups start here.', ar: 'أغلب رحلات الاستلام تبدأ من هنا.' },
  },
  {
    iconName: 'Leaf',
    name: { en: 'Wadi Qarn', ar: 'وادي قرن' },
    desc: { en: "A scenic mountain valley on Taif's natural sightseeing route.", ar: 'وادٍ جبلي خلاب ضمن مسار الجولات الطبيعية في الطائف.' },
    relevance: { en: 'Often included in a full-day mountain tour.', ar: 'يُدرج غالباً ضمن جولة جبلية ليوم كامل.' },
  },
  {
    iconName: 'MapPin',
    name: { en: 'Al-Rudaf Park', ar: 'حديقة الرضف' },
    desc: { en: 'A park area often visited alongside Shafa and the cable car on a mountain sightseeing day.', ar: 'منطقة متنزه تُزار غالباً مع شفا والتلفريك في يوم مشاهدة جبلي.' },
    relevance: { en: 'Good for a family stop.', ar: 'مناسبة لمحطة عائلية.' },
  },
]

/* ── Vehicle "best for" lines (shown on the fleet cards) ──────── */

export const vehicleBestFor: Record<'sedan' | 'staria' | 'gmc', BText> = {
  sedan: { en: 'Couples, individuals and smaller trips', ar: 'الأزواج والأفراد والرحلات الصغيرة' },
  staria: { en: 'Families and groups, up to 7 passengers', ar: 'العائلات والمجموعات، حتى ٧ ركاب' },
  gmc: { en: 'VIP and premium private travel', ar: 'التنقل الفاخر وVIP' },
}

/* ── Why choose Saudi Cabs GMC in Taif ─────────────────────────── */

export interface Highlight { iconName: string; title: BText; desc: BText }

export const highlights: Highlight[] = [
  { iconName: 'Mountain', title: { en: 'Taif-Focused Transport', ar: 'نقل مخصص للطائف' }, desc: { en: 'Trips built around how people actually move around Taif — hotels, the mountains and the airport, not just point-to-point fares.', ar: 'رحلات مبنية على كيفية تنقل الناس فعلياً في الطائف — الفنادق والجبال والمطار، وليس مجرد أسعار من نقطة لأخرى.' } },
  { iconName: 'Car', title: { en: 'Vehicle Choice', ar: 'خيار السيارة' }, desc: { en: 'Sedan, Hyundai Staria or GMC Yukon depending on your group and preference.', ar: 'سيدان أو هيونداي ستاريا أو GMC يوكون بحسب مجموعتك وتفضيلك.' } },
  { iconName: 'Route', title: { en: 'Intercity Coverage', ar: 'تغطية بين المدن' }, desc: { en: 'Direct routes to Makkah, Jeddah and Madinah, each with its own route page and travel-time estimate.', ar: 'خطوط مباشرة إلى مكة المكرمة وجدة والمدينة المنورة، لكل منها صفحة خاصة وتقدير لوقت الرحلة.' } },
  { iconName: 'MessageCircle', title: { en: 'WhatsApp Booking', ar: 'حجز عبر واتساب' }, desc: { en: 'Send your pickup, destination and vehicle preference and get the fare confirmed before you travel.', ar: 'أرسل موقع الاستلام والوجهة وسيارتك المفضلة واستلم السعر مؤكداً قبل رحلتك.' } },
  { iconName: 'Banknote', title: { en: 'Route-Based Fares', ar: 'سعر حسب المسار' }, desc: { en: 'The price is set by route and itinerary, not a meter — agreed with you before the trip starts.', ar: 'يُحدَّد السعر حسب المسار والبرنامج وليس بعداد — ويُتفق عليه معك قبل بدء الرحلة.' } },
]

/* ── Taif transport questions (direct-answer AEO block) ────────
   Distinct from the FAQ accordion below — short factual answers
   formatted for assistants and search snippets. */

export interface AeoQA { q: BText; a: BText }

export const aeoQA: AeoQA[] = [
  {
    q: { en: 'What is the best way to travel around Taif?', ar: 'ما أفضل طريقة للتنقل في الطائف؟' },
    a: { en: 'A private car is the most flexible option, since Taif trips often combine the city, Al-Hada and Al-Shafa in one outing.', ar: 'السيارة الخاصة هي الخيار الأكثر مرونة، لأن رحلات الطائف غالباً ما تجمع بين المدينة والهدا وشفا في خرجة واحدة.' },
  },
  {
    q: { en: 'How do I get from Taif Airport to the city?', ar: 'كيف أصل من مطار الطائف إلى المدينة؟' },
    a: { en: 'A private transfer takes about 20–30 minutes to downtown Taif. Share your flight details on WhatsApp and your driver will be waiting at arrivals.', ar: 'يستغرق التوصيل الخاص نحو ٢٠ إلى ٣٠ دقيقة إلى وسط الطائف. شارك تفاصيل رحلتك عبر واتساب وسيكون سائقك بانتظارك في صالة الوصول.' },
  },
  {
    q: { en: 'Can I book a private car to Al-Shafa?', ar: 'هل يمكنني حجز سيارة خاصة إلى شفا؟' },
    a: { en: 'Yes, Al-Shafa is about 30 minutes from downtown Taif. Send your hotel and preferred time on WhatsApp to arrange the trip.', ar: 'نعم، تبعد شفا نحو ٣٠ دقيقة عن وسط الطائف. أرسل اسم فندقك والوقت المفضل عبر واتساب لترتيب الرحلة.' },
  },
  {
    q: { en: 'Can I visit Al-Hada by private taxi?', ar: 'هل يمكنني زيارة الهدا بتاكسي خاص؟' },
    a: { en: 'Yes, Al-Hada is about 20 minutes from downtown Taif and a common stop on the way to or from Makkah.', ar: 'نعم، تبعد الهدا نحو ٢٠ دقيقة عن وسط الطائف، وهي محطة شائعة في الطريق من وإلى مكة المكرمة.' },
  },
  {
    q: { en: 'Can I visit Taif rose farms by private car?', ar: 'هل يمكنني زيارة مزارع الورد الطائفي بسيارة خاصة؟' },
    a: { en: 'Yes, a private vehicle can take you to the rose farms around Al-Hada, mainly open during the rose season from February to April.', ar: 'نعم، يمكن للسيارة الخاصة أخذك إلى مزارع الورد حول الهدا، وهي مفتوحة أساساً في موسم الورد من فبراير إلى أبريل.' },
  },
  {
    q: { en: 'How long does Taif to Makkah take?', ar: 'كم تستغرق الرحلة من الطائف إلى مكة المكرمة؟' },
    a: { en: 'About 1.5 hours via the Al-Hada mountain road, depending on traffic.', ar: 'نحو ١.٥ ساعة عبر طريق الهدا الجبلي، حسب حركة المرور.' },
  },
  {
    q: { en: 'How long does Taif to Jeddah take?', ar: 'كم تستغرق الرحلة من الطائف إلى جدة؟' },
    a: { en: 'About 1.5 hours via the main highway, roughly 100 km.', ar: 'نحو ١.٥ ساعة عبر الطريق الرئيسي، على مسافة تقارب ١٠٠ كم.' },
  },
  {
    q: { en: 'Which vehicle is best for a family trip in Taif?', ar: 'ما أفضل سيارة لرحلة عائلية في الطائف؟' },
    a: { en: 'The Hyundai Staria or GMC Yukon, both seating up to 7, are usually more practical than a Sedan for families with luggage over multiple mountain stops.', ar: 'تُعد هيونداي ستاريا أو GMC يوكون، وكلاهما يتسع لـ٧ ركاب، أكثر عملية من السيدان للعائلات التي لديها أمتعة وعدة محطات جبلية.' },
  },
  {
    q: { en: 'Can I book a private driver for a full day?', ar: 'هل يمكنني حجز سائق خاص ليوم كامل؟' },
    a: { en: 'Yes, a private vehicle can be arranged for a custom day covering several Taif stops. The fare depends on the itinerary and is confirmed on WhatsApp.', ar: 'نعم، يمكن ترتيب سيارة خاصة ليوم مخصص يغطي عدة محطات في الطائف. يعتمد السعر على البرنامج ويُؤكَّد عبر واتساب.' },
  },
]
