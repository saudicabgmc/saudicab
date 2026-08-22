import type { RoutePageData } from '@/components/RoutePage'
import type { FAQItem } from '@/components/FAQSection'

const VEHICLES_STANDARD = [
  {
    nameEn: 'Sedan', nameAr: 'سيدان',
    seats: '4 Seats',
    priceNote: {
      en: 'Comfortable saloon car for up to 4 passengers. Ideal for individuals and couples. Fixed price, no meter.',
      ar: 'سيارة مريحة لـ 4 ركاب. مثالية للأفراد والعائلات الصغيرة. سعر ثابت بدون عداد.',
    },
  },
  {
    nameEn: 'Hyundai Staria', nameAr: 'ستاريا',
    seats: '7 Seats',
    priceNote: {
      en: 'Spacious van for families and groups of up to 7. Generous luggage space. Fixed price, no meter.',
      ar: 'ميني باص مريح لـ 7 ركاب مع مساحة أمتعة واسعة. سعر ثابت.',
    },
  },
  {
    nameEn: 'GMC Yukon', nameAr: 'GMC يوكون',
    seats: 'VIP — 7 Seats',
    priceNote: {
      en: 'Luxury full-size SUV for VIP travel. Built-in cooler, giant touchscreen, leather seats. Maximum comfort.',
      ar: 'سيارة SUV فاخرة لـ VIP. مبرد مدمج وشاشة لمس عملاقة ومقاعد جلدية. أقصى درجات الراحة.',
    },
  },
]

const WHY_PRIVATE_EN = [
  'No detours or shared pickups — direct door-to-door',
  'Fixed price agreed before departure, no surprises',
  'Depart at your chosen time, not the bus schedule',
  'Air-conditioned, clean vehicle for your comfort',
  'Driver waits if your flight is delayed',
  'Luggage loaded & unloaded without extra charge',
]
const WHY_PRIVATE_AR = [
  'بدون توقفات أو ركاب مشتركين — مباشر من باب لباب',
  'سعر ثابت مُتفق عليه قبل الرحلة بدون مفاجآت',
  'انطلق في وقتك أنت وليس وفق جداول الحافلات',
  'سيارة مكيفة ونظيفة لراحتك التامة',
  'السائق ينتظرك حتى لو تأخرت رحلتك',
  'تحميل الأمتعة وتفريغها مجاناً',
]

/* ─── JEDDAH AIRPORT → MAKKAH ─────────────────────────────────── */
export const jedAirportToMakkah: RoutePageData = {
  from:      { ar: 'مطار جدة الدولي', en: 'Jeddah Airport' },
  to:        { ar: 'مكة المكرمة', en: 'Makkah' },
  slug:      'jeddah-airport-to-makkah',
  duration:  '~50–60 min',
  distance:  '~90 km',
  type:      'airport',
  heroImage: '/location/makkah.webp',
  fromCitySlug: 'jeddah-taxi-service',
  toCitySlug:   'makkah-taxi-service',
  description: {
    en: 'Professional cab transfer from King Abdulaziz International Airport (KAIA) directly to Makkah hotels, Haram, or any address. Fixed price, name-board meet-and-greet, flight tracking, 24/7.',
    ar: 'توصيل احترافي من مطار الملك عبدالعزيز الدولي مباشرةً إلى فنادق مكة والحرم أو أي عنوان. سعر ثابت، استقبال بلوحة الاسم، متابعة الرحلة، ٢٤/٧.',
  },
  highlights: [
    { icon: '🪧', en: 'Name-board meet-and-greet at arrivals hall', ar: 'استقبال بلوحة الاسم في صالة الوصول' },
    { icon: '✈️', en: 'We track your flight — no extra wait charge if delayed', ar: 'نتابع رحلتك — لا رسوم إضافية عند التأخير' },
    { icon: '🧳', en: 'Luggage loaded and unloaded at no extra cost', ar: 'تحميل وتفريغ الأمتعة مجاناً' },
    { icon: '🕌', en: 'Drop-off directly at your Haram hotel or apartment', ar: 'توصيل مباشر لفندقك أو شقتك بجوار الحرم' },
    { icon: '💰', en: 'Fixed price agreed before travel — no surprises', ar: 'سعر ثابت مُتفق عليه مسبقاً — بلا مفاجآت' },
    { icon: '⏰', en: '24/7 — available for all flights, Fajr or midnight', ar: '٢٤/٧ — لجميع الرحلات، فجراً أو منتصف الليل' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'makkah-to-jeddah-airport', from: { ar: 'مكة المكرمة', en: 'Makkah' }, to: { ar: 'مطار جدة', en: 'Jeddah Airport' }, duration: '~55 min' },
    { slug: 'jeddah-to-makkah', from: { ar: 'جدة', en: 'Jeddah' }, to: { ar: 'مكة المكرمة', en: 'Makkah' }, duration: '~50 min' },
    { slug: 'jeddah-airport-to-madinah', from: { ar: 'مطار جدة', en: 'Jeddah Airport' }, to: { ar: 'المدينة المنورة', en: 'Madinah' }, duration: '~4 hrs' },
  ],
  faqs: [
    { q: { en: 'How do I meet my driver at Jeddah Airport?', ar: 'كيف أقابل السائق في مطار جدة؟' }, a: { en: 'Your driver waits at the arrivals hall (Terminal 1 or 2) holding a sign with your name. Share your flight number when booking so we can track your arrival.', ar: 'سائقك ينتظر في صالة الوصول (الصالة 1 أو 2) حاملاً لافتة باسمك. شارك رقم رحلتك عند الحجز حتى نتابع وصولك.' } },
    { q: { en: 'What if my flight is delayed?', ar: 'ماذا لو تأخرت رحلتي؟' }, a: { en: 'No problem — we monitor your flight status in real time and your driver adjusts. No extra charges for flight delays.', ar: 'لا مشكلة — نتابع حالة رحلتك بشكل مباشر والسائق يتكيف وفقاً لذلك. لا رسوم إضافية لتأخير الرحلات.' } },
    { q: { en: 'How much is a cab from Jeddah Airport to Makkah?', ar: 'كم يكلف الكاب من مطار جدة إلى مكة؟' }, a: { en: 'The fare is fixed and confirmed before departure — no meter, no surge pricing. Contact us via WhatsApp for the current rate for each vehicle type.', ar: 'الأجرة ثابتة ومؤكدة قبل الانطلاق — بلا عداد ولا أسعار متغيرة. تواصل معنا عبر واتساب للاطلاع على السعر الحالي.' } },
    { q: { en: 'Can I book a large vehicle for a family group?', ar: 'هل يمكنني حجز سيارة كبيرة لمجموعة عائلية؟' }, a: { en: 'Yes — our GMC Yukon and Hyundai Staria seat up to 7 passengers comfortably with luggage. Perfect for Hajj and Umrah families.', ar: 'نعم — GMC يوكون وهيونداي ستاريا تستوعب حتى 7 ركاب مع الأمتعة براحة. مثالية لعائلات الحج والعمرة.' } },
    { q: { en: 'Is this service available during Hajj season?', ar: 'هل هذه الخدمة متاحة في موسم الحج؟' }, a: { en: 'Yes, Saudi Cabs GMC operates throughout the year including peak Hajj and Umrah seasons. Book well in advance during Hajj for guaranteed availability.', ar: 'نعم، Saudi Cabs GMC تعمل طوال العام بما في ذلك ذروة موسم الحج والعمرة. احجز مسبقاً خلال الحج لضمان التوفر.' } },
  ],
}

/* ─── MAKKAH → JEDDAH AIRPORT ──────────────────────────────────── */
export const makkahToJedAirport: RoutePageData = {
  from:      { ar: 'مكة المكرمة', en: 'Makkah' },
  to:        { ar: 'مطار جدة الدولي', en: 'Jeddah Airport' },
  slug:      'makkah-to-jeddah-airport',
  duration:  '~55–65 min',
  distance:  '~90 km',
  type:      'airport',
  heroImage: '/location/jeddah.webp',
  fromCitySlug: 'makkah-taxi-service',
  toCitySlug:   'jeddah-taxi-service',
  description: {
    en: 'Reliable drop-off from any hotel or address in Makkah to King Abdulaziz International Airport in Jeddah. Fixed price, on-time guarantee, 24/7 service.',
    ar: 'توصيل موثوق من أي فندق أو عنوان في مكة المكرمة إلى مطار الملك عبدالعزيز الدولي بجدة. سعر ثابت، ضمان المواعيد، خدمة ٢٤/٧.',
  },
  highlights: [
    { icon: '⏱️', en: 'Driver arrives at your hotel on time, every time', ar: 'السائق يصل لفندقك في الوقت المحدد دائماً' },
    { icon: '🧳', en: 'Luggage handled — no extra charge', ar: 'نساعدك في الأمتعة مجاناً' },
    { icon: '🛫', en: 'Buffer time calculated for Makkah traffic', ar: 'وقت إضافي محسوب لازدحام مكة' },
    { icon: '🕐', en: 'Book for any time — Fajr, midnight, rush hour', ar: 'احجز في أي وقت — فجراً أو منتصف الليل' },
    { icon: '💰', en: 'No surge pricing — fixed fare agreed before travel', ar: 'لا أسعار متغيرة — أجرة ثابتة مُتفق عليها' },
    { icon: '📱', en: 'Confirm via WhatsApp in minutes', ar: 'تأكيد عبر واتساب في دقائق' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'jeddah-airport-to-makkah', from: { ar: 'مطار جدة', en: 'Jeddah Airport' }, to: { ar: 'مكة المكرمة', en: 'Makkah' }, duration: '~55 min' },
    { slug: 'makkah-to-jeddah', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~50 min' },
    { slug: 'makkah-to-madinah', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4.5 hrs' },
  ],
  faqs: [
    { q: { en: 'How early should I book before my flight?', ar: 'قبل كم من الوقت يجب أن أحجز قبل رحلتي؟' }, a: { en: 'We recommend booking at least 3 to 6 hours before departure. For early morning or late night flights, book the night before. Same-day bookings are also accepted when available.', ar: 'ننصح بالحجز قبل 3 إلى 6 ساعات على الأقل من موعد الرحلة. للرحلات الصباحية الباكرة أو المتأخرة ليلاً، احجز مساء اليوم السابق. الحجوزات في نفس اليوم مقبولة حسب التوفر.' } },
    { q: { en: 'Do you pick up from all Makkah hotels?', ar: 'هل تستلم من جميع فنادق مكة؟' }, a: { en: 'Yes, we pick up from all Makkah hotels and addresses including Al-Aziziyah, Al-Shisha, Al-Haram area, Ajyad, and all surrounding neighborhoods.', ar: 'نعم، نستلم من جميع فنادق ومواقع مكة بما فيها العزيزية والشيشة ومنطقة الحرم وأجياد وجميع الأحياء المحيطة.' } },
    { q: { en: 'Is the driver punctual for early morning flights?', ar: 'هل السائق دقيق في المواعيد للرحلات الصباحية الباكرة؟' }, a: { en: 'Yes, Saudi Cabs GMC operates 24/7 including pre-dawn. Our drivers are accustomed to Fajr pickups and early morning airport runs. We never miss a flight.', ar: 'نعم، Saudi Cabs GMC تعمل ٢٤/٧ بما في ذلك ما قبل الفجر. سائقونا معتادون على الاستلام في وقت الفجر والمطارات الباكرة. لا نفوّت أي رحلة.' } },
  ],
}

/* ─── MAKKAH → MADINAH ─────────────────────────────────────────── */
export const makkahToMadinah: RoutePageData = {
  from:      { ar: 'مكة المكرمة', en: 'Makkah' },
  to:        { ar: 'المدينة المنورة', en: 'Madinah' },
  slug:      'makkah-to-madinah',
  duration:  '~4.5 hrs',
  distance:  '~430 km',
  type:      'intercity',
  heroImage: '/location/madinah.webp',
  fromCitySlug: 'makkah-taxi-service',
  toCitySlug:   'madinah-taxi-service',
  description: {
    en: "The most requested pilgrim route — private cab from Makkah to the Prophet's City of Madinah. Comfortable vehicles, fixed price, no stops, door-to-door.",
    ar: 'أكثر خطوط الحجاج طلباً — كاب خاص من مكة المكرمة إلى مدينة النبي ﷺ. سيارات مريحة، سعر ثابت، بدون توقفات، من الباب للباب.',
  },
  highlights: [
    { icon: '🕌', en: 'Drop-off directly at your hotel near the Prophet\'s Mosque', ar: 'توصيل مباشر لفندقك بجوار المسجد النبوي' },
    { icon: '🛣️', en: 'Smooth 430 km highway journey — no stops', ar: 'رحلة سلسة ٤٣٠ كم عبر الطريق السريع بدون توقفات' },
    { icon: '🧳', en: 'Spacious vehicle for pilgrims with heavy luggage', ar: 'سيارة واسعة للحجاج ذوي الأمتعة الثقيلة' },
    { icon: '🌙', en: 'Available any time — travel after Isha, before Fajr', ar: 'متاح في أي وقت — سافر بعد العشاء أو قبل الفجر' },
    { icon: '💰', en: 'Fixed pilgrim rate — no meter, no surge', ar: 'سعر حاج ثابت — بلا عداد ولا ارتفاع مفاجئ' },
    { icon: '👨‍✈️', en: 'Driver familiar with all Madinah hotel districts', ar: 'سائق يعرف جميع أحياء فنادق المدينة المنورة' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: {
    en: ['No multiple stops to drop other passengers', 'Depart when you want — even at 2 AM after Tahajjud', 'Air-conditioned comfort for the full 4.5-hour journey', 'Driver knows shortest route avoiding delays', 'Best choice for elderly pilgrims and families with children', 'Fixed price — cheaper than multiple short trips'],
    ar: ['بدون توقفات لإنزال ركاب آخرين', 'انطلق متى تشاء — حتى الساعة 2 فجراً بعد التهجد', 'راحة مكيفة طوال رحلة 4.5 ساعة', 'السائق يعرف أسرع الطرق لتجنب التأخير', 'الخيار الأمثل لكبار السن والعائلات مع الأطفال', 'سعر ثابت — أوفر من رحلات قصيرة متعددة'],
  },
  relatedRoutes: [
    { slug: 'madinah-to-makkah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~4.5 hrs' },
    { slug: 'jeddah-airport-to-madinah', from: { ar: 'مطار جدة', en: 'Jeddah Airport' }, to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4 hrs' },
    { slug: 'makkah-to-jeddah-airport', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'مطار جدة', en: 'Jeddah Airport' }, duration: '~55 min' },
  ],
  faqs: [
    { q: { en: 'How long is the drive from Makkah to Madinah?', ar: 'كم تستغرق الرحلة من مكة إلى المدينة؟' }, a: { en: 'The private car journey from Makkah to Madinah takes approximately 4 to 4.5 hours on the Makkah–Madinah Expressway (about 430 km). Traffic near the cities can add 20–30 minutes during peak times.', ar: 'تستغرق رحلة السيارة الخاصة من مكة إلى المدينة حوالي 4 إلى 4.5 ساعة عبر طريق الحرمين السريع (حوالي 430 كم). الازدحام بالقرب من المدن قد يضيف 20-30 دقيقة في أوقات الذروة.' } },
    { q: { en: 'Can I stop for prayers or rest during the trip?', ar: 'هل يمكنني التوقف للصلاة أو الراحة خلال الرحلة؟' }, a: { en: 'Yes, our drivers are happy to stop at rest areas and prayer stops along the highway. Just let your driver know your preferences when booking or at the start of the journey.', ar: 'نعم، سائقونا يسعدون بالتوقف عند مواقع الراحة ومحطات الصلاة على الطريق السريع. أخبر سائقك بتفضيلاتك عند الحجز أو في بداية الرحلة.' } },
    { q: { en: 'Is private cab better than the Haramain Train for Makkah to Madinah?', ar: 'هل الكاب الخاص أفضل من قطار الحرمين للمكة-المدينة؟' }, a: { en: 'For pilgrims with luggage and families, private cab is often more convenient — door-to-door, no transfers, no crowds. The Haramain Train is faster (2.5 hrs) but requires going to the station and handling luggage separately.', ar: 'للحجاج مع الأمتعة والعائلات، الكاب الخاص غالباً أكثر ملاءمةً — من الباب للباب، بدون نقل، بدون ازدحام. قطار الحرمين أسرع (2.5 ساعة) لكن يتطلب الذهاب للمحطة والتعامل مع الأمتعة بشكل منفصل.' } },
    { q: { en: 'Do you offer group discounts for large pilgrim groups?', ar: 'هل تقدمون خصومات للمجموعات الكبيرة من الحجاج؟' }, a: { en: 'Yes, Saudi Cabs GMC offers special group rates and multi-vehicle packages for large pilgrim groups. Contact us via WhatsApp with your group size and travel dates for a customized quote.', ar: 'نعم، Saudi Cabs GMC تقدم أسعاراً خاصة للمجموعات وباقات متعددة السيارات للمجموعات الكبيرة. تواصل معنا عبر واتساب مع حجم مجموعتك وتواريخ السفر للحصول على عرض مخصص.' } },
  ],
}

/* ─── MADINAH → MAKKAH ─────────────────────────────────────────── */
export const madinahToMakkah: RoutePageData = {
  from:      { ar: 'المدينة المنورة', en: 'Madinah' },
  to:        { ar: 'مكة المكرمة', en: 'Makkah' },
  slug:      'madinah-to-makkah',
  duration:  '~4–4.5 hrs',
  distance:  '~430 km',
  type:      'intercity',
  heroImage: '/location/makkah.webp',
  fromCitySlug: 'madinah-taxi-service',
  toCitySlug:   'makkah-taxi-service',
  description: {
    en: 'Private cab from Madinah to Makkah — the sacred twin-city pilgrim route. Hotel pickup, direct highway transfer, fixed price, all vehicles available.',
    ar: 'كاب خاص من المدينة المنورة إلى مكة المكرمة — خط الحجاج بين البلدين الحرمين. استلام من الفندق، توصيل مباشر عبر الطريق السريع، سعر ثابت.',
  },
  highlights: [
    { icon: '🕌', en: 'Pickup from your Madinah hotel near the Prophet\'s Mosque', ar: 'استلام من فندقك في المدينة بجوار المسجد النبوي' },
    { icon: '🚗', en: 'Direct 430 km drive — no transfers, no shared stops', ar: 'قيادة مباشرة 430 كم — بدون نقل ولا توقفات مشتركة' },
    { icon: '🕋', en: 'Drop-off at Makkah hotels or directly near the Haram', ar: 'توصيل لفنادق مكة أو مباشرة بالقرب من الحرم' },
    { icon: '⏱️', en: 'Depart at your preferred time — day or night', ar: 'انطلق في وقتك المفضل — نهاراً أو ليلاً' },
    { icon: '💰', en: 'Fixed inter-city fare — transparent pricing', ar: 'أجرة ثابتة بين المدن — تسعير شفاف' },
    { icon: '🧕', en: 'Family-friendly — suitable for elderly and children', ar: 'مناسبة للعائلات — ملائمة لكبار السن والأطفال' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'makkah-to-madinah', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4.5 hrs' },
    { slug: 'madinah-airport-taxi', from: { ar: 'مطار المدينة', en: 'Madinah Airport' }, to: { ar: 'المسجد النبوي', en: "Prophet's Mosque" }, duration: '~30 min' },
    { slug: 'madinah-to-jeddah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~4 hrs' },
  ],
  faqs: [
    { q: { en: 'What is the best time to travel from Madinah to Makkah?', ar: 'ما أفضل وقت للسفر من المدينة إلى مكة؟' }, a: { en: 'Early morning (after Fajr) or late evening (after Isha) are typically the least congested times. Avoid peak Hajj season days when millions travel simultaneously.', ar: 'الصباح الباكر (بعد الفجر) أو المساء المتأخر (بعد العشاء) هما الأوقات الأقل ازدحاماً. تجنب أيام ذروة موسم الحج حين يسافر الملايين في نفس الوقت.' } },
    { q: { en: 'Can I book a return trip from Madinah to Makkah?', ar: 'هل يمكنني حجز رحلة ذهاباً وإياباً بين المدينة ومكة؟' }, a: { en: 'Yes, Saudi Cabs GMC offers round-trip packages between Madinah and Makkah at a discounted rate. Book both legs together for the best price.', ar: 'نعم، Saudi Cabs GMC تقدم باقات ذهاباً وإياباً بين المدينة ومكة بسعر مخفض. احجز الرحلتين معاً للحصول على أفضل سعر.' } },
  ],
}

/* ─── JEDDAH → MAKKAH ──────────────────────────────────────────── */
export const jeddahToMakkah: RoutePageData = {
  from:      { ar: 'جدة', en: 'Jeddah' },
  to:        { ar: 'مكة المكرمة', en: 'Makkah' },
  slug:      'jeddah-to-makkah',
  duration:  '~50 min',
  distance:  '~85 km',
  type:      'intercity',
  heroImage: '/location/makkah.webp',
  fromCitySlug: 'jeddah-taxi-service',
  toCitySlug:   'makkah-taxi-service',
  description: {
    en: 'The busiest route in the region — private cab from Jeddah to Makkah for Umrah, Hajj, and daily visits. Door-to-door, fixed price, all hours.',
    ar: 'أكثر خطوط المنطقة حركةً — كاب خاص من جدة إلى مكة للعمرة والحج والزيارات اليومية. من الباب للباب، سعر ثابت، جميع الساعات.',
  },
  highlights: [
    { icon: '🕋', en: 'Direct pickup from any Jeddah address or hotel', ar: 'استلام مباشر من أي عنوان أو فندق في جدة' },
    { icon: '⚡', en: '~50 minutes — fastest route via Makkah highway', ar: 'حوالي 50 دقيقة — أسرع طريق عبر طريق مكة السريع' },
    { icon: '🕌', en: 'Drop-off at Haram, hotel, or any Makkah address', ar: 'توصيل للحرم أو الفندق أو أي عنوان بمكة' },
    { icon: '💰', en: 'Fixed daily price — no surge for peak hours', ar: 'سعر يومي ثابت — لا ارتفاع في ساعات الذروة' },
    { icon: '📱', en: 'WhatsApp booking — confirmed in minutes', ar: 'حجز واتساب — تأكيد خلال دقائق' },
    { icon: '⏰', en: 'Available 24/7 for all prayer times', ar: 'متاح ٢٤/٧ لجميع أوقات الصلاة' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'makkah-to-jeddah', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~50 min' },
    { slug: 'jeddah-airport-to-makkah', from: { ar: 'مطار جدة', en: 'Jeddah Airport' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~55 min' },
    { slug: 'jeddah-to-taif', from: { ar: 'جدة', en: 'Jeddah' }, to: { ar: 'الطائف', en: 'Taif' }, duration: '~1.5 hrs' },
  ],
  faqs: [
    { q: { en: 'How long does the cab take from Jeddah to Makkah?', ar: 'كم يستغرق الكاب من جدة إلى مكة؟' }, a: { en: 'Under normal traffic, the Jeddah to Makkah private cab journey takes approximately 50 minutes. During peak times or Hajj season it may be 70–90 minutes.', ar: 'في ظروف السير العادية، تستغرق رحلة الكاب الخاص من جدة إلى مكة حوالي 50 دقيقة. في أوقات الذروة أو موسم الحج قد تصل إلى 70-90 دقيقة.' } },
    { q: { en: 'Is there a cab from Jeddah to Makkah at night?', ar: 'هل يوجد كاب من جدة إلى مكة في الليل؟' }, a: { en: 'Yes, Saudi Cabs GMC is available 24/7 including after Isha prayer, midnight, and pre-Fajr. Book anytime via WhatsApp.', ar: 'نعم، Saudi Cabs GMC متاحة ٢٤/٧ بما في ذلك بعد صلاة العشاء ومنتصف الليل وما قبل الفجر. احجز في أي وقت عبر واتساب.' } },
  ],
}

/* ─── MAKKAH → JEDDAH ──────────────────────────────────────────── */
export const makkahToJeddah: RoutePageData = {
  from:      { ar: 'مكة المكرمة', en: 'Makkah' },
  to:        { ar: 'جدة', en: 'Jeddah' },
  slug:      'makkah-to-jeddah',
  duration:  '~50 min',
  distance:  '~85 km',
  type:      'intercity',
  heroImage: '/location/jeddah.webp',
  fromCitySlug: 'makkah-taxi-service',
  toCitySlug:   'jeddah-taxi-service',
  description: {
    en: 'Private cab from Makkah to Jeddah — for airport drop-offs, business, or leisure. Pickup from your hotel or apartment, door-to-door, fixed price.',
    ar: 'كاب خاص من مكة المكرمة إلى جدة — للمطار أو الأعمال أو الترفيه. استلام من فندقك أو شقتك، من الباب للباب، سعر ثابت.',
  },
  highlights: [
    { icon: '🕌', en: 'Pickup from Haram area hotels or any Makkah location', ar: 'استلام من فنادق منطقة الحرم أو أي موقع في مكة' },
    { icon: '🏖️', en: 'Drop-off at any Jeddah district — Corniche, downtown, airport', ar: 'توصيل لأي حي جدة — الكورنيش، وسط المدينة، المطار' },
    { icon: '⚡', en: '~50-minute scenic highway ride', ar: 'حوالي 50 دقيقة عبر الطريق السريع' },
    { icon: '💼', en: 'Ideal for business travelers leaving Makkah', ar: 'مثالي لرجال الأعمال المغادرين من مكة' },
    { icon: '💰', en: 'Fixed price — same rate regardless of traffic', ar: 'سعر ثابت — نفس الأجرة بغض النظر عن الازدحام' },
    { icon: '⏰', en: 'On-time guarantee — we watch the clock for you', ar: 'ضمان الوقت — نراقب الساعة من أجلك' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'jeddah-to-makkah', from: { ar: 'جدة', en: 'Jeddah' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~50 min' },
    { slug: 'makkah-to-jeddah-airport', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'مطار جدة', en: 'Jeddah Airport' }, duration: '~55 min' },
    { slug: 'makkah-to-taif', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'الطائف', en: 'Taif' }, duration: '~1.5 hrs' },
  ],
  faqs: [
    { q: { en: 'Can I book a one-way cab from Makkah to Jeddah?', ar: 'هل يمكنني حجز كاب ذهاباً فقط من مكة إلى جدة؟' }, a: { en: 'Yes, Saudi Cabs GMC offers one-way trips. Book a return trip together for a better rate.', ar: 'نعم، Saudi Cabs GMC تقدم رحلات ذهاباً فقط. احجز رحلة الذهاب والعودة معاً للحصول على سعر أفضل.' } },
  ],
}

/* ─── JEDDAH → TAIF ────────────────────────────────────────────── */
export const jeddahToTaif: RoutePageData = {
  from:      { ar: 'جدة', en: 'Jeddah' },
  to:        { ar: 'الطائف', en: 'Taif' },
  slug:      'jeddah-to-taif',
  duration:  '~1.5 hrs',
  distance:  '~100 km',
  type:      'intercity',
  heroImage: '/location/taif.webp',
  fromCitySlug: 'jeddah-taxi-service',
  toCitySlug:   'taif-taxi-service',
  description: {
    en: 'Private cab from Jeddah to Taif via the scenic Al-Hada mountain road. Families\' favorite summer escape — cool weather, rose farms, mountain resorts.',
    ar: 'كاب خاص من جدة إلى الطائف عبر طريق الهدا الجبلي الخلاب. الوجهة الصيفية المفضلة للعائلات — أجواء باردة ومزارع ورد ومنتجعات جبلية.',
  },
  highlights: [
    { icon: '⛰️', en: 'Scenic Al-Hada mountain road with stunning views', ar: 'طريق الهدا الجبلي الخلاب بمناظر رائعة' },
    { icon: '🌹', en: 'Arrive in the Rose Capital of Saudi Arabia', ar: 'الوصول إلى عاصمة الورد في المملكة' },
    { icon: '❄️', en: 'Escape Jeddah heat — Taif is 10–15°C cooler in summer', ar: 'هروب من حر جدة — الطائف أبرد بـ 10-15 درجة في الصيف' },
    { icon: '🏨', en: 'Drop-off at any Taif hotel, resort, or address', ar: 'توصيل لأي فندق أو منتجع أو عنوان في الطائف' },
    { icon: '👨‍👩‍👧‍👦', en: 'Family vehicle options — GMC Yukon for groups of 7', ar: 'خيارات سيارات عائلية — GMC يوكون لمجموعات من 7' },
    { icon: '💰', en: 'Fixed rate — popular summer route well-priced', ar: 'سعر ثابت — خط صيفي شهير بسعر جيد' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'taif-to-jeddah', from: { ar: 'الطائف', en: 'Taif' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~1.5 hrs' },
    { slug: 'makkah-to-taif', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'الطائف', en: 'Taif' }, duration: '~1.5 hrs' },
    { slug: 'jeddah-to-makkah', from: { ar: 'جدة', en: 'Jeddah' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~50 min' },
  ],
  faqs: [
    { q: { en: 'Is the Al-Hada mountain road safe?', ar: 'هل طريق الهدا الجبلي آمن؟' }, a: { en: 'Yes, the Al-Hada mountain road is paved and well-maintained. Our drivers are highly experienced on this route and know every curve. The views are spectacular.', ar: 'نعم، طريق الهدا الجبلي مرصوف وصيانته منتظمة. سائقونا ذوو خبرة عالية على هذا الطريق ويعرفون كل منعطف. المناظر رائعة.' } },
    { q: { en: 'When is the best time to travel from Jeddah to Taif?', ar: 'ما أفضل وقت للسفر من جدة إلى الطائف؟' }, a: { en: 'Summer (June–September) is the most popular time — Taif weather is perfect while Jeddah is very hot. The rose season (February–April) is also beautiful. The route is popular year-round.', ar: 'الصيف (يونيو–سبتمبر) هو الوقت الأكثر شعبية — طقس الطائف مثالي بينما جدة حارة جداً. موسم الورد (فبراير–أبريل) جميل أيضاً. الخط شهير طوال العام.' } },
  ],
}

/* ─── TAIF → JEDDAH ────────────────────────────────────────────── */
export const taifToJeddah: RoutePageData = {
  from:      { ar: 'الطائف', en: 'Taif' },
  to:        { ar: 'جدة', en: 'Jeddah' },
  slug:      'taif-to-jeddah',
  duration:  '~1.5 hrs',
  distance:  '~100 km',
  type:      'intercity',
  heroImage: '/location/jeddah.webp',
  fromCitySlug: 'taif-taxi-service',
  toCitySlug:   'jeddah-taxi-service',
  description: {
    en: 'Private cab from Taif back to Jeddah — via the Al-Hada mountain descent. Airport connection, hotel drop-off, or any Jeddah destination. Fixed fare, 24/7.',
    ar: 'كاب خاص من الطائف إلى جدة — عبر منحدر الهدا الجبلي. توصيل للمطار أو الفندق أو أي وجهة في جدة. أجرة ثابتة، ٢٤/٧.',
  },
  highlights: [
    { icon: '⛰️', en: 'Stunning Al-Hada descent — scenic mountain views', ar: 'منحدر الهدا الرائع — مناظر جبلية خلابة' },
    { icon: '✈️', en: 'Timed pickups for Jeddah Airport connections', ar: 'استلام موقّت للرحلات عبر مطار جدة' },
    { icon: '🏨', en: 'Drop-off anywhere in Jeddah — hotel, home, or office', ar: 'توصيل لأي مكان في جدة — فندق أو منزل أو مكتب' },
    { icon: '🛣️', en: 'Smooth 100 km highway — comfortable ride', ar: '100 كم طريق سريع سلس — رحلة مريحة' },
    { icon: '💰', en: 'Same fixed rate regardless of traffic', ar: 'نفس السعر الثابت بغض النظر عن الازدحام' },
    { icon: '📱', en: 'Book via WhatsApp — instant confirmation', ar: 'احجز عبر واتساب — تأكيد فوري' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'jeddah-to-taif', from: { ar: 'جدة', en: 'Jeddah' }, to: { ar: 'الطائف', en: 'Taif' }, duration: '~1.5 hrs' },
    { slug: 'makkah-to-taif', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'الطائف', en: 'Taif' }, duration: '~1.5 hrs' },
    { slug: 'taif-to-madinah', from: { ar: 'الطائف', en: 'Taif' }, to: { ar: 'المدينة', en: 'Madinah' }, duration: '~5 hrs' },
  ],
  faqs: [
    { q: { en: 'Can I book a cab from Taif to Jeddah Airport?', ar: 'هل يمكنني حجز كاب من الطائف إلى مطار جدة؟' }, a: { en: 'Yes, Saudi Cabs GMC offers direct Taif to Jeddah Airport trips. We add buffer time for the mountain road and airport arrival. Book at least 3–4 hours before your flight.', ar: 'نعم، Saudi Cabs GMC تقدم رحلات مباشرة من الطائف إلى مطار جدة. نضيف وقتاً إضافياً للطريق الجبلي والوصول للمطار. احجز قبل رحلتك بـ3-4 ساعات على الأقل.' } },
  ],
}

/* ─── MAKKAH → TAIF ────────────────────────────────────────────── */
export const makkahToTaif: RoutePageData = {
  from:      { ar: 'مكة المكرمة', en: 'Makkah' },
  to:        { ar: 'الطائف', en: 'Taif' },
  slug:      'makkah-to-taif',
  duration:  '~1.5 hrs',
  distance:  '~90 km',
  type:      'intercity',
  heroImage: '/location/taif.webp',
  fromCitySlug: 'makkah-taxi-service',
  toCitySlug:   'taif-taxi-service',
  description: {
    en: 'Private cab from Makkah to Taif — through the beautiful mountain road connecting the holy city to the Rose Capital. Fixed rate, door-to-door.',
    ar: 'كاب خاص من مكة المكرمة إلى الطائف — عبر الطريق الجبلي الجميل الذي يربط البلد الحرام بعاصمة الورد. سعر ثابت، من الباب للباب.',
  },
  highlights: [
    { icon: '🕌', en: 'Pickup directly from your Makkah hotel or Haram area', ar: 'استلام مباشرة من فندقك في مكة أو منطقة الحرم' },
    { icon: '⛰️', en: 'Scenic mountain road — an experience in itself', ar: 'طريق جبلي خلاب — تجربة بحد ذاتها' },
    { icon: '🌹', en: 'Arrive in Taif — Saudi\'s mountain resort city', ar: 'الوصول إلى الطائف — مدينة المنتجعات الجبلية في السعودية' },
    { icon: '🕌', en: 'Great for pilgrims visiting both cities', ar: 'رائعة للحجاج الزائرين لكلتا المدينتين' },
    { icon: '💰', en: 'Fixed fare — no meter', ar: 'أجرة ثابتة — بلا عداد' },
    { icon: '⏰', en: '24/7 availability', ar: 'توفر ٢٤/٧' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'taif-to-jeddah', from: { ar: 'الطائف', en: 'Taif' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~1.5 hrs' },
    { slug: 'jeddah-to-taif', from: { ar: 'جدة', en: 'Jeddah' }, to: { ar: 'الطائف', en: 'Taif' }, duration: '~1.5 hrs' },
    { slug: 'makkah-to-jeddah', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~50 min' },
  ],
  faqs: [
    { q: { en: 'Is there a direct road from Makkah to Taif?', ar: 'هل يوجد طريق مباشر من مكة إلى الطائف؟' }, a: { en: 'Yes, the Makkah–Taif highway is direct and well-maintained. The mountain section offers beautiful scenery. Travel time is approximately 1.5 hours with a private cab.', ar: 'نعم، طريق مكة–الطائف السريع مباشر وصيانته منتظمة. القسم الجبلي يتميز بمناظر جميلة. وقت الرحلة حوالي 1.5 ساعة بالكاب الخاص.' } },
  ],
}

/* ─── MADINAH → JEDDAH ─────────────────────────────────────────── */
export const madinahToJeddah: RoutePageData = {
  from:      { ar: 'المدينة المنورة', en: 'Madinah' },
  to:        { ar: 'جدة', en: 'Jeddah' },
  slug:      'madinah-to-jeddah',
  duration:  '~4 hrs',
  distance:  '~390 km',
  type:      'intercity',
  heroImage: '/location/jeddah.webp',
  fromCitySlug: 'madinah-taxi-service',
  toCitySlug:   'jeddah-taxi-service',
  description: {
    en: "Private cab from Madinah to Jeddah — comfortable highway transfer from the Prophet's City to the Bride of the Red Sea. Hotel pickup, direct route, fixed price.",
    ar: 'كاب خاص من المدينة المنورة إلى جدة — توصيل مريح عبر الطريق السريع من مدينة النبي إلى عروس البحر الأحمر. استلام من الفندق، طريق مباشر، سعر ثابت.',
  },
  highlights: [
    { icon: '🕌', en: 'Pickup from your hotel near the Prophet\'s Mosque', ar: 'استلام من فندقك بجوار المسجد النبوي' },
    { icon: '🌊', en: 'Arrive in Jeddah — Red Sea city & shopping hub', ar: 'الوصول لجدة — مدينة البحر الأحمر ومركز التسوق' },
    { icon: '🛣️', en: 'Direct 390 km highway — no changes, no stops', ar: 'طريق سريع مباشر 390 كم — بدون تنقلات أو توقفات' },
    { icon: '✈️', en: 'Connect to Jeddah Airport for onward flights', ar: 'التوصيل لمطار جدة للرحلات التالية' },
    { icon: '💰', en: 'Fixed transparent fare — no surprises', ar: 'أجرة ثابتة شفافة — بلا مفاجآت' },
    { icon: '📱', en: 'Easy WhatsApp booking — confirmed fast', ar: 'حجز واتساب سهل — تأكيد سريع' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'madinah-to-makkah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~4.5 hrs' },
    { slug: 'madinah-airport-taxi', from: { ar: 'مطار المدينة', en: 'Madinah Airport' }, to: { ar: 'المسجد النبوي', en: "Prophet's Mosque" }, duration: '~30 min' },
    { slug: 'jeddah-to-makkah', from: { ar: 'جدة', en: 'Jeddah' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~50 min' },
  ],
  faqs: [
    { q: { en: 'How long is the Madinah to Jeddah cab journey?', ar: 'كم تستغرق رحلة الكاب من المدينة إلى جدة؟' }, a: { en: 'The private cab trip from Madinah to Jeddah takes approximately 4 hours on the highway (about 390 km). Traffic at city exits can add 20–30 minutes.', ar: 'تستغرق رحلة الكاب الخاص من المدينة إلى جدة حوالي 4 ساعات عبر الطريق السريع (حوالي 390 كم). قد يضيف الازدحام عند مخارج المدن 20-30 دقيقة.' } },
    { q: { en: 'Can I connect to Jeddah Airport from Madinah?', ar: 'هل يمكنني التوصيل لمطار جدة من المدينة؟' }, a: { en: 'Yes, Saudi Cabs GMC offers direct Madinah to Jeddah Airport transfers. Add buffer time — we recommend booking with a 5-hour window before your flight to account for the drive and airport procedures.', ar: 'نعم، Saudi Cabs GMC تقدم توصيلاً مباشراً من المدينة إلى مطار جدة. أضف وقتاً إضافياً — ننصح بالحجز مع نافذة 5 ساعات قبل رحلتك لحساب وقت القيادة وإجراءات المطار.' } },
  ],
}

/* ─── MADINAH AIRPORT TAXI ─────────────────────────────────────── */
export const madinahAirportTaxi: RoutePageData = {
  from:      { ar: 'مطار المدينة المنورة', en: 'Madinah Airport' },
  to:        { ar: 'المسجد النبوي', en: "Prophet's Mosque" },
  slug:      'madinah-airport-taxi',
  duration:  '~25–35 min',
  distance:  '~18 km',
  type:      'airport',
  heroImage: '/location/madinah.webp',
  fromCitySlug: 'madinah-taxi-service',
  toCitySlug:   'madinah-taxi-service',
  description: {
    en: "Professional cab from Prince Mohammad bin Abdulaziz Airport (MED) directly to the Prophet's Mosque, your hotel, or any Madinah address. Name-board pickup, fixed price, 24/7.",
    ar: 'كاب احترافي من مطار الأمير محمد بن عبدالعزيز مباشرةً إلى المسجد النبوي أو فندقك أو أي عنوان في المدينة المنورة. استقبال بلوحة الاسم، سعر ثابت، ٢٤/٧.',
  },
  highlights: [
    { icon: '🪧', en: 'Name-board meet-and-greet at arrivals hall', ar: 'استقبال بلوحة الاسم في صالة الوصول' },
    { icon: '✈️', en: 'Flight tracking — driver adjusts for delays', ar: 'متابعة الرحلة — السائق يتكيف مع التأخير' },
    { icon: '🕌', en: 'Direct to Prophet\'s Mosque or your hotel', ar: 'مباشر للمسجد النبوي أو فندقك' },
    { icon: '🧳', en: 'Luggage assistance at no extra charge', ar: 'مساعدة في الأمتعة مجاناً' },
    { icon: '💰', en: 'Fixed price — no meter, no surge', ar: 'سعر ثابت — بلا عداد ولا ارتفاع' },
    { icon: '⏰', en: '24/7 — every flight, every hour', ar: '٢٤/٧ — كل رحلة، كل ساعة' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'madinah-to-makkah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~4.5 hrs' },
    { slug: 'madinah-to-jeddah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~4 hrs' },
    { slug: 'jeddah-airport-to-madinah', from: { ar: 'مطار جدة', en: 'Jeddah Airport' }, to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4 hrs' },
  ],
  faqs: [
    { q: { en: 'How do I book a cab from Madinah Airport?', ar: 'كيف أحجز كاب من مطار المدينة؟' }, a: { en: 'Send a WhatsApp message to Saudi Cabs GMC with your flight number, arrival time, and hotel name. Your driver will be at arrivals with your name sign. Book at least 6 hours before landing.', ar: 'أرسل رسالة واتساب لـ Saudi Cabs GMC مع رقم رحلتك ووقت الوصول واسم فندقك. سائقك سيكون في الوصول بلافتة باسمك. احجز قبل الهبوط بـ6 ساعات على الأقل.' } },
    { q: { en: 'How far is Madinah Airport from the Prophet\'s Mosque?', ar: 'كم تبعد مطار المدينة عن المسجد النبوي؟' }, a: { en: "Prince Mohammad bin Abdulaziz Airport is approximately 18 km from Al-Masjid An-Nabawi. The private cab journey takes 25–35 minutes depending on traffic.", ar: 'يبعد مطار الأمير محمد بن عبدالعزيز حوالي 18 كم عن المسجد النبوي الشريف. تستغرق رحلة الكاب الخاص 25-35 دقيقة حسب حالة السير.' } },
  ],
}

/* ─── JEDDAH AIRPORT → MADINAH ─────────────────────────────────── */
export const jedAirportToMadinah: RoutePageData = {
  from:      { ar: 'مطار جدة الدولي', en: 'Jeddah Airport' },
  to:        { ar: 'المدينة المنورة', en: 'Madinah' },
  slug:      'jeddah-airport-to-madinah',
  duration:  '~3.5–4 hrs',
  distance:  '~390 km',
  type:      'airport',
  heroImage: '/location/madinah.webp',
  fromCitySlug: 'jeddah-taxi-service',
  toCitySlug:   'madinah-taxi-service',
  description: {
    en: "Direct transfer from King Abdulaziz International Airport in Jeddah all the way to Madinah. Popular for pilgrims flying into Jeddah and heading to the Prophet's Mosque first.",
    ar: 'توصيل مباشر من مطار الملك عبدالعزيز الدولي بجدة حتى المدينة المنورة. شائع للحجاج المسافرين إلى جدة والمتجهين إلى المسجد النبوي أولاً.',
  },
  highlights: [
    { icon: '🪧', en: 'Airport pickup with name board at KAIA arrivals', ar: 'استقبال بلوحة الاسم في صالة وصول مطار جدة' },
    { icon: '🛣️', en: 'Direct 390 km highway to Madinah — no transfers', ar: '390 كم طريق سريع مباشر إلى المدينة — بدون نقل' },
    { icon: '🕌', en: 'Drop-off at Prophet\'s Mosque area hotels', ar: 'توصيل لفنادق منطقة المسجد النبوي' },
    { icon: '🧳', en: 'Spacious vehicles for heavy Hajj luggage', ar: 'سيارات واسعة للأمتعة الثقيلة للحجاج' },
    { icon: '✈️', en: 'Flight monitoring — no extra charge for delays', ar: 'متابعة الرحلة — بلا رسوم إضافية للتأخير' },
    { icon: '💰', en: 'Fixed price agreed before travel', ar: 'سعر ثابت مُتفق عليه قبل السفر' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'jeddah-airport-to-makkah', from: { ar: 'مطار جدة', en: 'Jeddah Airport' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~55 min' },
    { slug: 'madinah-to-makkah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~4.5 hrs' },
    { slug: 'madinah-airport-taxi', from: { ar: 'مطار المدينة', en: 'Madinah Airport' }, to: { ar: 'المسجد النبوي', en: "Prophet's Mosque" }, duration: '~30 min' },
  ],
  faqs: [
    { q: { en: 'Is it possible to go straight from Jeddah Airport to Madinah?', ar: 'هل يمكن الذهاب مباشرة من مطار جدة إلى المدينة؟' }, a: { en: 'Yes, Saudi Cabs GMC offers this popular pilgrim route. Your driver picks you up at KAIA arrivals and drives directly to Madinah (about 390 km, 4 hours). No transfers needed.', ar: 'نعم، Saudi Cabs GMC تقدم هذا الخط الشهير للحجاج. سائقك يستقبلك في صالة وصول مطار جدة ويقود مباشرةً إلى المدينة (حوالي 390 كم، 4 ساعات). لا حاجة لتنقلات.' } },
  ],
}

/* ─── TAIF → MADINAH ───────────────────────────────────────────── */
export const taifToMadinah: RoutePageData = {
  from:      { ar: 'الطائف', en: 'Taif' },
  to:        { ar: 'المدينة المنورة', en: 'Madinah' },
  slug:      'taif-to-madinah',
  duration:  '~5 hrs',
  distance:  '~520 km',
  type:      'intercity',
  heroImage: '/location/madinah.webp',
  fromCitySlug: 'taif-taxi-service',
  toCitySlug:   'madinah-taxi-service',
  description: {
    en: "Long-distance private cab from Taif to Madinah — ideal for pilgrims combining a Taif mountain stay with Madinah ziyarat. Direct route, fixed fare.",
    ar: 'كاب خاص على المدى الطويل من الطائف إلى المدينة المنورة — مثالي للحجاج الذين يجمعون إقامة في جبال الطائف مع زيارة المدينة. طريق مباشر، أجرة ثابتة.',
  },
  highlights: [
    { icon: '🌹', en: 'Depart from the scenic Rose City of Taif', ar: 'الانطلاق من مدينة الورد الجميلة الطائف' },
    { icon: '🕌', en: 'Arrive at the Prophet\'s Mosque, Madinah', ar: 'الوصول إلى المسجد النبوي بالمدينة المنورة' },
    { icon: '🛣️', en: 'Direct 520 km highway trip', ar: 'رحلة مباشرة 520 كم عبر الطريق السريع' },
    { icon: '💰', en: 'Fixed long-distance rate — transparent pricing', ar: 'سعر ثابت للمسافات الطويلة — تسعير شفاف' },
    { icon: '🧳', en: 'Ample luggage space in all vehicles', ar: 'مساحة وافرة للأمتعة في جميع السيارات' },
    { icon: '⏰', en: 'Book in advance for guaranteed availability', ar: 'احجز مسبقاً لضمان التوفر' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'taif-to-jeddah', from: { ar: 'الطائف', en: 'Taif' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~1.5 hrs' },
    { slug: 'makkah-to-madinah', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4.5 hrs' },
    { slug: 'madinah-to-makkah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~4.5 hrs' },
  ],
  faqs: [
    { q: { en: 'How do I travel from Taif to Madinah?', ar: 'كيف أسافر من الطائف إلى المدينة؟' }, a: { en: 'Saudi Cabs GMC offers a direct private cab from Taif to Madinah — approximately 520 km and 5 hours. We pick you up from your hotel or any Taif address and drop you directly at your Madinah destination.', ar: 'Saudi Cabs GMC تقدم كاباً خاصاً مباشراً من الطائف إلى المدينة — حوالي 520 كم و5 ساعات. نستلمك من فندقك أو أي عنوان في الطائف ونوصلك مباشرة لوجهتك في المدينة.' } },
  ],
}

/* ─── TAIF → MAKKAH ────────────────────────────────────────────── */
export const taifToMakkah: RoutePageData = {
  from:      { ar: 'الطائف', en: 'Taif' },
  to:        { ar: 'مكة المكرمة', en: 'Makkah' },
  slug:      'taif-to-makkah',
  duration:  '~1.5 hrs',
  distance:  '~90 km',
  type:      'intercity',
  heroImage: '/location/makkah.webp',
  fromCitySlug: 'taif-taxi-service',
  toCitySlug:   'makkah-taxi-service',
  description: {
    en: 'Private cab from Taif to Makkah — descend from the mountain resort city straight to the Holy Mosque. Ideal for pilgrims combining a Taif retreat with Umrah. Fixed price, door-to-door.',
    ar: 'كاب خاص من الطائف إلى مكة المكرمة — انحدر من مدينة المنتجعات الجبلية مباشرةً إلى الحرم المكي الشريف. مثالي للحجاج الذين يجمعون استرخاءً بالطائف مع العمرة. سعر ثابت، من الباب للباب.',
  },
  highlights: [
    { icon: '⛰️', en: 'Scenic mountain descent from Taif via Al-Hada', ar: 'منحدر جبلي خلاب من الطائف عبر الهدا' },
    { icon: '🕋', en: 'Arrive directly at Makkah hotels or near the Haram', ar: 'الوصول مباشرةً لفنادق مكة أو بجوار الحرم' },
    { icon: '🌹', en: 'Start in the Rose City, end at the Holy City', ar: 'ابدأ من مدينة الورد وانتهِ في البلد الحرام' },
    { icon: '💰', en: 'Fixed fare — agreed before departure', ar: 'أجرة ثابتة — مُتفق عليها قبل الانطلاق' },
    { icon: '🧳', en: 'Luggage loaded and unloaded at no extra cost', ar: 'تحميل وتفريغ الأمتعة مجاناً' },
    { icon: '⏰', en: '24/7 — book for any time of day', ar: '٢٤/٧ — احجز في أي وقت من اليوم' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'makkah-to-taif', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'الطائف', en: 'Taif' }, duration: '~1.5 hrs' },
    { slug: 'taif-to-jeddah', from: { ar: 'الطائف', en: 'Taif' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~1.5 hrs' },
    { slug: 'makkah-to-jeddah-airport', from: { ar: 'مكة', en: 'Makkah' }, to: { ar: 'مطار جدة', en: 'Jeddah Airport' }, duration: '~55 min' },
  ],
  faqs: [
    { q: { en: 'How long is the drive from Taif to Makkah?', ar: 'كم تستغرق الرحلة من الطائف إلى مكة؟' }, a: { en: 'The private cab journey from Taif to Makkah takes approximately 1.5 hours (about 90 km). The mountain road section is scenic but adds some time compared to a flat highway.', ar: 'تستغرق رحلة الكاب الخاص من الطائف إلى مكة حوالي 1.5 ساعة (حوالي 90 كم). الطريق الجبلي خلاب لكنه يضيف بعض الوقت مقارنةً بالطريق المسطح.' } },
    { q: { en: 'Can I book this route during Hajj season?', ar: 'هل يمكنني حجز هذا الخط في موسم الحج؟' }, a: { en: 'Yes, Saudi Cabs GMC operates all year including Hajj peak season. We strongly recommend booking at least 24 hours in advance during Hajj for guaranteed availability.', ar: 'نعم، Saudi Cabs GMC تعمل طوال العام بما في ذلك ذروة موسم الحج. ننصح بشدة بالحجز قبل 24 ساعة على الأقل خلال الحج لضمان التوفر.' } },
  ],
}

/* ─── JEDDAH → MADINAH ─────────────────────────────────────────── */
export const jeddahToMadinah: RoutePageData = {
  from:      { ar: 'جدة', en: 'Jeddah' },
  to:        { ar: 'المدينة المنورة', en: 'Madinah' },
  slug:      'jeddah-to-madinah',
  duration:  '~4 hrs',
  distance:  '~390 km',
  type:      'intercity',
  heroImage: '/location/madinah.webp',
  fromCitySlug: 'jeddah-taxi-service',
  toCitySlug:   'madinah-taxi-service',
  description: {
    en: "Private cab from Jeddah to Madinah — straight to the Prophet's Mosque from the Bride of the Red Sea. Popular with pilgrims connecting from Jeddah. Fixed price, comfortable, door-to-door.",
    ar: 'كاب خاص من جدة إلى المدينة المنورة — مباشرةً إلى المسجد النبوي من عروس البحر الأحمر. شائع بين الحجاج القادمين عبر جدة. سعر ثابت، مريح، من الباب للباب.',
  },
  highlights: [
    { icon: '🌊', en: 'Pickup from any Jeddah hotel, home or airport area', ar: 'استلام من أي فندق أو منزل أو منطقة مطار في جدة' },
    { icon: '🕌', en: "Drop-off at the Prophet's Mosque or your hotel", ar: 'توصيل للمسجد النبوي أو فندقك' },
    { icon: '🛣️', en: 'Direct 390 km highway — no transfers', ar: '390 كم طريق سريع مباشر — بدون تنقلات' },
    { icon: '💰', en: 'Fixed price agreed before departure', ar: 'سعر ثابت مُتفق عليه قبل الانطلاق' },
    { icon: '🧳', en: 'Spacious vehicle options — up to 7 seats + luggage', ar: 'خيارات سيارات واسعة — حتى 7 مقاعد + أمتعة' },
    { icon: '⏰', en: '24/7 service — depart at your preferred time', ar: 'خدمة ٢٤/٧ — انطلق في وقتك المفضل' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'madinah-to-jeddah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'جدة', en: 'Jeddah' }, duration: '~4 hrs' },
    { slug: 'jeddah-airport-to-madinah', from: { ar: 'مطار جدة', en: 'Jeddah Airport' }, to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4 hrs' },
    { slug: 'jeddah-to-makkah', from: { ar: 'جدة', en: 'Jeddah' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~50 min' },
  ],
  faqs: [
    { q: { en: 'How long does the Jeddah to Madinah cab take?', ar: 'كم يستغرق كاب جدة إلى المدينة؟' }, a: { en: 'The private cab from Jeddah to Madinah takes approximately 4 hours (about 390 km via the highway). Peak traffic at city exits may add 20–30 minutes.', ar: 'الكاب الخاص من جدة إلى المدينة يستغرق حوالي 4 ساعات (حوالي 390 كم عبر الطريق السريع). قد تضيف ذروة المرور عند مخارج المدن 20-30 دقيقة.' } },
    { q: { en: 'Is this route available for Umrah pilgrims from Jeddah?', ar: 'هل هذا الخط متاح للمعتمرين القادمين من جدة؟' }, a: { en: "Yes, this is one of the most popular Umrah routes. Many pilgrims fly into Jeddah and head to Madinah first before Makkah. Saudi Cabs GMC serves this route daily.", ar: 'نعم، هذا أحد أشهر خطوط العمرة. يسافر كثير من المعتمرين إلى جدة ثم يتجهون إلى المدينة أولاً قبل مكة. Saudi Cabs GMC تخدم هذا الخط يومياً.' } },
  ],
}

/* ─── RIYADH → MAKKAH ─────────────────────────────────────────── */
export const riyadhToMakkah: RoutePageData = {
  from:      { ar: 'الرياض', en: 'Riyadh' },
  to:        { ar: 'مكة المكرمة', en: 'Makkah' },
  slug:      'riyadh-to-makkah',
  duration:  '~8–9 hrs',
  distance:  '~900 km',
  type:      'intercity',
  heroImage: '/location/makkah.webp',
  fromCitySlug: 'makkah-taxi-service',
  toCitySlug:   'makkah-taxi-service',
  description: {
    en: 'Private long-distance cab from Riyadh to Makkah — the most popular cross-region pilgrim route in Saudi Arabia. Comfortable vehicles, fixed price, door-to-door, 24/7 service.',
    ar: 'كاب خاص للمسافات الطويلة من الرياض إلى مكة المكرمة — أشهر خطوط الحجاج عبر المناطق في المملكة. سيارات مريحة، سعر ثابت، من الباب للباب، خدمة ٢٤/٧.',
  },
  highlights: [
    { icon: '🕋', en: 'Drop-off directly at Haram hotels or Makkah address', ar: 'توصيل مباشر لفنادق الحرم أو أي عنوان في مكة' },
    { icon: '🛣️', en: 'Direct ~900 km journey via Makkah Expressway', ar: 'رحلة مباشرة ~900 كم عبر طريق مكة السريع' },
    { icon: '🌙', en: 'Night travel available — depart after Isha or Fajr', ar: 'السفر الليلي متاح — انطلق بعد العشاء أو الفجر' },
    { icon: '💰', en: 'Fixed long-distance fare — no surprises', ar: 'أجرة ثابتة للمسافات الطويلة — بلا مفاجآت' },
    { icon: '🧳', en: 'Spacious vehicles for heavy Hajj luggage', ar: 'سيارات واسعة للأمتعة الثقيلة للحجاج' },
    { icon: '⏰', en: '24/7 — book for any departure time', ar: '٢٤/٧ — احجز لأي وقت انطلاق' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: {
    en: [
      'Door-to-door — no bus stations or transfers',
      'Depart at your own time, not a fixed schedule',
      'Rest stops for prayers and meals along the way',
      'Ideal for families and elderly pilgrims with luggage',
      'Fixed price — far cheaper than multiple short trips',
      'Driver experienced on the Riyadh–Makkah highway',
    ],
    ar: [
      'من الباب للباب — بدون محطات حافلات أو نقل',
      'انطلق في وقتك أنت وليس وفق جدول ثابت',
      'توقفات للراحة والصلاة والوجبات على طول الطريق',
      'مثالي للعائلات وكبار السن مع الأمتعة',
      'سعر ثابت — أوفر بكثير من رحلات قصيرة متعددة',
      'سائق ذو خبرة على طريق الرياض–مكة السريع',
    ],
  },
  relatedRoutes: [
    { slug: 'jeddah-to-makkah',         from: { ar: 'جدة', en: 'Jeddah' },        to: { ar: 'مكة', en: 'Makkah' },   duration: '~50 min' },
    { slug: 'makkah-to-madinah',        from: { ar: 'مكة', en: 'Makkah' },        to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4.5 hrs' },
    { slug: 'jeddah-airport-to-makkah', from: { ar: 'مطار جدة', en: 'Jeddah Airport' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~55 min' },
  ],
  faqs: [
    { q: { en: 'How long is the drive from Riyadh to Makkah?', ar: 'كم تستغرق الرحلة من الرياض إلى مكة؟' }, a: { en: 'The private cab journey from Riyadh to Makkah takes approximately 8 to 9 hours (around 900 km). This includes rest stops for prayers and meals. Night travel is recommended to avoid traffic.', ar: 'تستغرق رحلة الكاب الخاص من الرياض إلى مكة حوالي 8 إلى 9 ساعات (حوالي 900 كم). يشمل ذلك توقفات للراحة والصلاة والوجبات. يُنصح بالسفر الليلي لتجنب الازدحام.' } },
    { q: { en: 'Can I book a Riyadh to Makkah cab for Umrah?', ar: 'هل يمكنني حجز كاب من الرياض إلى مكة للعمرة؟' }, a: { en: 'Yes, Saudi Cabs GMC offers direct Riyadh to Makkah transfers for Umrah pilgrims year-round. Book in advance — especially during Ramadan and Hajj season when demand is very high.', ar: 'نعم، Saudi Cabs GMC تقدم توصيلاً مباشراً من الرياض إلى مكة للمعتمرين طوال العام. احجز مسبقاً — خاصةً خلال رمضان وموسم الحج حين يكون الطلب مرتفعاً جداً.' } },
    { q: { en: 'What vehicle is best for a family from Riyadh to Makkah?', ar: 'ما أفضل سيارة للعائلة من الرياض إلى مكة؟' }, a: { en: 'For families of up to 7, we recommend the GMC Yukon or Hyundai Staria — both offer spacious interiors, generous luggage space, and maximum comfort for long journeys. Contact us via WhatsApp to discuss your group size.', ar: 'للعائلات حتى 7 أشخاص، نوصي بـ GMC يوكون أو هيونداي ستاريا — كلاهما يوفر مقصورة واسعة ومساحة أمتعة كبيرة وراحة قصوى للرحلات الطويلة. تواصل معنا عبر واتساب لمناقشة حجم مجموعتك.' } },
  ],
}

/* ─── RIYADH → MADINAH ────────────────────────────────────────── */
export const riyadhToMadinah: RoutePageData = {
  from:      { ar: 'الرياض', en: 'Riyadh' },
  to:        { ar: 'المدينة المنورة', en: 'Madinah' },
  slug:      'riyadh-to-madinah',
  duration:  '~9–10 hrs',
  distance:  '~970 km',
  type:      'intercity',
  heroImage: '/location/madinah.webp',
  fromCitySlug: 'madinah-taxi-service',
  toCitySlug:   'madinah-taxi-service',
  description: {
    en: "Private long-distance cab from Riyadh to Madinah — direct to the Prophet's Mosque. Popular Umrah pilgrim route, comfortable vehicles, fixed price, 24/7 service.",
    ar: 'كاب خاص للمسافات الطويلة من الرياض إلى المدينة المنورة — مباشرةً إلى المسجد النبوي. خط شهير للمعتمرين، سيارات مريحة، سعر ثابت، خدمة ٢٤/٧.',
  },
  highlights: [
    { icon: '🕌', en: "Drop-off at the Prophet's Mosque or your hotel", ar: 'توصيل للمسجد النبوي أو فندقك' },
    { icon: '🛣️', en: 'Direct ~970 km highway journey', ar: 'رحلة مباشرة ~970 كم عبر الطريق السريع' },
    { icon: '🌙', en: 'Night travel recommended — depart after Isha', ar: 'السفر الليلي موصى به — انطلق بعد العشاء' },
    { icon: '💰', en: 'Fixed long-distance rate — transparent pricing', ar: 'سعر ثابت للمسافات الطويلة — تسعير شفاف' },
    { icon: '🧳', en: 'Spacious vehicles for pilgrims with luggage', ar: 'سيارات واسعة للحجاج مع الأمتعة' },
    { icon: '⏰', en: '24/7 availability — book anytime', ar: 'توفر ٢٤/٧ — احجز في أي وقت' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: {
    en: [
      'Door-to-door — pickup from your Riyadh home or hotel',
      'No bus stations, no crowded terminals',
      'Prayer & meal rest stops along the highway',
      'Best for families and elderly pilgrims',
      'Fixed price — no hidden charges on a long journey',
      'Experienced driver on the Riyadh–Madinah route',
    ],
    ar: [
      'من الباب للباب — استلام من منزلك أو فندقك بالرياض',
      'بدون محطات حافلات أو صالات مزدحمة',
      'توقفات للصلاة والوجبات على طول الطريق',
      'الأفضل للعائلات وكبار السن من الحجاج',
      'سعر ثابت — بلا رسوم خفية في الرحلات الطويلة',
      'سائق ذو خبرة على طريق الرياض–المدينة',
    ],
  },
  relatedRoutes: [
    { slug: 'riyadh-to-makkah',  from: { ar: 'الرياض', en: 'Riyadh' },   to: { ar: 'مكة', en: 'Makkah' },    duration: '~8.5 hrs' },
    { slug: 'madinah-to-makkah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'مكة', en: 'Makkah' },    duration: '~4.5 hrs' },
    { slug: 'madinah-to-jeddah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'جدة', en: 'Jeddah' },   duration: '~4 hrs' },
  ],
  faqs: [
    { q: { en: 'How long is the drive from Riyadh to Madinah?', ar: 'كم تستغرق الرحلة من الرياض إلى المدينة؟' }, a: { en: 'The private cab from Riyadh to Madinah takes approximately 9 to 10 hours (about 970 km). Night driving is advised to avoid peak traffic near both cities.', ar: 'يستغرق الكاب الخاص من الرياض إلى المدينة حوالي 9 إلى 10 ساعات (حوالي 970 كم). يُنصح بالقيادة الليلية لتجنب ذروة المرور بالقرب من كلتا المدينتين.' } },
    { q: { en: 'Can I travel from Riyadh to Madinah for Umrah?', ar: 'هل يمكنني السفر من الرياض إلى المدينة للعمرة؟' }, a: { en: 'Yes, many pilgrims start their Umrah journey in Madinah first. Saudi Cabs GMC offers direct Riyadh to Madinah transfers year-round, including Ramadan.', ar: 'نعم، يبدأ كثير من المعتمرين رحلة عمرتهم في المدينة أولاً. Saudi Cabs GMC تقدم توصيلاً مباشراً من الرياض إلى المدينة طوال العام، بما في ذلك رمضان.' } },
  ],
}

/* ─── RIYADH → JEDDAH ──────────────────────────────────────────── */
export const riyadhToJeddah: RoutePageData = {
  from:      { ar: 'الرياض', en: 'Riyadh' },
  to:        { ar: 'جدة', en: 'Jeddah' },
  slug:      'riyadh-to-jeddah',
  duration:  '~9 hrs',
  distance:  '~950 km',
  type:      'intercity',
  heroImage: '/location/jeddah.webp',
  fromCitySlug: 'jeddah-taxi-service',
  toCitySlug:   'jeddah-taxi-service',
  description: {
    en: 'Private cab from Riyadh to Jeddah — the longest domestic route in Saudi Arabia. Direct highway journey to the Bride of the Red Sea. Fixed price, comfortable, 24/7.',
    ar: 'كاب خاص من الرياض إلى جدة — أطول خط محلي في المملكة. رحلة مباشرة عبر الطريق السريع إلى عروس البحر الأحمر. سعر ثابت، مريح، ٢٤/٧.',
  },
  highlights: [
    { icon: '🌊', en: 'Arrive at Jeddah — Red Sea city & business hub', ar: 'الوصول لجدة — مدينة البحر الأحمر ومركز الأعمال' },
    { icon: '🛣️', en: 'Direct 950 km highway — no transfers needed', ar: '950 كم طريق سريع مباشر — بدون تنقلات' },
    { icon: '✈️', en: 'Connect to Jeddah Airport for international flights', ar: 'التوصيل لمطار جدة للرحلات الدولية' },
    { icon: '💼', en: 'Popular route for business travelers', ar: 'خط شهير لرجال الأعمال' },
    { icon: '💰', en: 'Fixed price agreed before departure', ar: 'سعر ثابت مُتفق عليه قبل الانطلاق' },
    { icon: '⏰', en: '24/7 — depart at your preferred time', ar: '٢٤/٧ — انطلق في وقتك المفضل' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: {
    en: [
      'Door-to-door — no transfers or connections',
      'Private & comfortable for a 9-hour journey',
      'Stop for prayers and meals at highway rest areas',
      'Arrive directly at your Jeddah hotel or office',
      'Fixed price — no surge on a long trip',
      'GMC Yukon available for maximum VIP comfort',
    ],
    ar: [
      'من الباب للباب — بدون تنقلات أو رحلات متعددة',
      'خاص ومريح لرحلة 9 ساعات',
      'توقف للصلاة والوجبات في محطات الطريق',
      'الوصول مباشرةً لفندقك أو مكتبك بجدة',
      'سعر ثابت — بلا ارتفاع في الرحلات الطويلة',
      'GMC يوكون متاح لأقصى راحة VIP',
    ],
  },
  relatedRoutes: [
    { slug: 'riyadh-to-makkah',          from: { ar: 'الرياض', en: 'Riyadh' },  to: { ar: 'مكة', en: 'Makkah' },   duration: '~8.5 hrs' },
    { slug: 'jeddah-to-makkah',          from: { ar: 'جدة', en: 'Jeddah' },    to: { ar: 'مكة', en: 'Makkah' },   duration: '~50 min' },
    { slug: 'jeddah-airport-to-makkah',  from: { ar: 'مطار جدة', en: 'Jeddah Airport' }, to: { ar: 'مكة', en: 'Makkah' }, duration: '~55 min' },
  ],
  faqs: [
    { q: { en: 'How long does the Riyadh to Jeddah cab take?', ar: 'كم يستغرق كاب الرياض إلى جدة؟' }, a: { en: 'The private cab journey from Riyadh to Jeddah is approximately 9 hours (about 950 km via the highway). Traffic near both cities can add 30–60 minutes.', ar: 'رحلة الكاب الخاص من الرياض إلى جدة تستغرق حوالي 9 ساعات (حوالي 950 كم عبر الطريق السريع). قد تضيف حركة المرور بالقرب من كلتا المدينتين 30-60 دقيقة.' } },
    { q: { en: 'Can I book a Riyadh to Jeddah cab for the airport?', ar: 'هل يمكنني حجز كاب من الرياض إلى مطار جدة؟' }, a: { en: 'Yes, Saudi Cabs GMC offers direct Riyadh to Jeddah Airport transfers. We recommend a 12-hour buffer time. Book at least one day in advance.', ar: 'نعم، Saudi Cabs GMC تقدم توصيلاً مباشراً من الرياض إلى مطار جدة. ننصح بمساحة زمنية 12 ساعة. احجز قبل يوم واحد على الأقل.' } },
  ],
}

/* ─── TAIF AIRPORT TAXI ─────────────────────────────────────────── */
export const taifAirportTaxi: RoutePageData = {
  from:      { ar: 'مطار الطائف', en: 'Taif Airport' },
  to:        { ar: 'مدينة الطائف', en: 'Taif City' },
  slug:      'taif-airport-taxi',
  duration:  '~20–30 min',
  distance:  '~28 km',
  type:      'airport',
  heroImage: '/location/taif.webp',
  fromCitySlug: 'taif-taxi-service',
  toCitySlug:   'taif-taxi-service',
  description: {
    en: 'Professional cab from Taif Regional Airport (TIF) directly to your hotel, resort, or any Taif address. Name-board pickup, fixed price, 24/7 availability.',
    ar: 'كاب احترافي من مطار الطائف الإقليمي مباشرةً إلى فندقك أو منتجعك أو أي عنوان في الطائف. استقبال بلوحة الاسم، سعر ثابت، توفر ٢٤/٧.',
  },
  highlights: [
    { icon: '🪧', en: 'Name-board meet-and-greet at arrivals hall', ar: 'استقبال بلوحة الاسم في صالة الوصول' },
    { icon: '✈️', en: 'Flight monitoring — no extra charge for delays', ar: 'متابعة الرحلة — بلا رسوم إضافية للتأخير' },
    { icon: '🌹', en: 'Arrive in the Rose City with total comfort', ar: 'الوصول لمدينة الورد براحة تامة' },
    { icon: '🏨', en: 'Drop-off at all Taif hotels, resorts & addresses', ar: 'توصيل لجميع فنادق ومنتجعات وعناوين الطائف' },
    { icon: '💰', en: 'Fixed fare — no meter, no surge pricing', ar: 'أجرة ثابتة — بلا عداد ولا أسعار متغيرة' },
    { icon: '⏰', en: '24/7 — every flight, every hour', ar: '٢٤/٧ — لكل رحلة وكل ساعة' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: { en: WHY_PRIVATE_EN, ar: WHY_PRIVATE_AR },
  relatedRoutes: [
    { slug: 'taif-to-jeddah',  from: { ar: 'الطائف', en: 'Taif' }, to: { ar: 'جدة', en: 'Jeddah' },   duration: '~1.5 hrs' },
    { slug: 'taif-to-makkah', from: { ar: 'الطائف', en: 'Taif' }, to: { ar: 'مكة', en: 'Makkah' },   duration: '~1.5 hrs' },
    { slug: 'jeddah-to-taif', from: { ar: 'جدة', en: 'Jeddah' }, to: { ar: 'الطائف', en: 'Taif' },   duration: '~1.5 hrs' },
  ],
  faqs: [
    { q: { en: 'How far is Taif Airport from the city center?', ar: 'كم يبعد مطار الطائف عن وسط المدينة؟' }, a: { en: 'Taif Regional Airport (TIF) is approximately 28 km from the city center. The private cab journey takes 20–30 minutes depending on traffic.', ar: 'يبعد مطار الطائف الإقليمي حوالي 28 كم عن وسط المدينة. تستغرق رحلة الكاب الخاص 20-30 دقيقة حسب حركة المرور.' } },
    { q: { en: 'Can I book a cab from Taif Airport to Makkah?', ar: 'هل يمكنني حجز كاب من مطار الطائف إلى مكة؟' }, a: { en: 'Yes, Saudi Cabs GMC offers direct transfers from Taif Airport to Makkah (~90 km, ~1.5 hrs). Book in advance via WhatsApp.', ar: 'نعم، Saudi Cabs GMC تقدم توصيلاً مباشراً من مطار الطائف إلى مكة (~90 كم، ~1.5 ساعة). احجز مسبقاً عبر واتساب.' } },
  ],
}

/* ─── MAKKAH → RIYADH ──────────────────────────────────────────── */
export const makkahToRiyadh: RoutePageData = {
  from:      { ar: 'مكة المكرمة', en: 'Makkah' },
  to:        { ar: 'الرياض', en: 'Riyadh' },
  slug:      'makkah-to-riyadh',
  duration:  '~8–9 hrs',
  distance:  '~900 km',
  type:      'intercity',
  heroImage: '/location/makkah.webp',
  fromCitySlug: 'makkah-taxi-service',
  toCitySlug:   'makkah-taxi-service',
  description: {
    en: 'Private cab from Makkah to Riyadh — the return journey after Umrah or Hajj. Pickup directly from your Haram hotel, comfortable ride back to the capital. Fixed price, door-to-door.',
    ar: 'كاب خاص من مكة المكرمة إلى الرياض — رحلة العودة بعد العمرة أو الحج. استلام مباشر من فندقك بجوار الحرم، رحلة عودة مريحة للعاصمة. سعر ثابت، من الباب للباب.',
  },
  highlights: [
    { icon: '🕋', en: 'Pickup directly from your Makkah hotel or Haram area', ar: 'استلام مباشرةً من فندقك في مكة أو منطقة الحرم' },
    { icon: '🛣️', en: 'Direct ~900 km return journey to Riyadh', ar: 'رحلة عودة مباشرة ~900 كم إلى الرياض' },
    { icon: '🌙', en: 'Night travel available — depart after Isha or Fajr', ar: 'السفر الليلي متاح — انطلق بعد العشاء أو الفجر' },
    { icon: '💰', en: 'Fixed fare — same rate regardless of traffic', ar: 'أجرة ثابتة — نفس السعر بغض النظر عن الازدحام' },
    { icon: '🧳', en: 'Large vehicles available for Hajj luggage', ar: 'سيارات كبيرة متاحة لأمتعة الحج' },
    { icon: '⏰', en: '24/7 — book your return trip anytime', ar: '٢٤/٧ — احجز رحلة عودتك في أي وقت' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: {
    en: [
      'Door-to-door — from Haram hotel straight to your Riyadh home',
      'No crowded bus terminals after a tiring pilgrimage',
      'Rest and prayer stops scheduled along the route',
      'Comfortable return journey for exhausted pilgrims',
      'Fixed price — book a round trip for the best rate',
      'Trusted by thousands of pilgrims returning to Riyadh',
    ],
    ar: [
      'من الباب للباب — من فندق الحرم مباشرةً لمنزلك بالرياض',
      'بلا محطات حافلات مزدحمة بعد رحلة حج أو عمرة مضنية',
      'توقفات للراحة والصلاة مجدولة على طول الطريق',
      'رحلة عودة مريحة للحجاج المتعبين',
      'سعر ثابت — احجز ذهاباً وإياباً للحصول على أفضل سعر',
      'موثوق به من قِبل آلاف الحجاج العائدين إلى الرياض',
    ],
  },
  relatedRoutes: [
    { slug: 'riyadh-to-makkah',  from: { ar: 'الرياض', en: 'Riyadh' },  to: { ar: 'مكة', en: 'Makkah' },   duration: '~8.5 hrs' },
    { slug: 'makkah-to-madinah', from: { ar: 'مكة', en: 'Makkah' },    to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4.5 hrs' },
    { slug: 'makkah-to-jeddah',  from: { ar: 'مكة', en: 'Makkah' },    to: { ar: 'جدة', en: 'Jeddah' },   duration: '~50 min' },
  ],
  faqs: [
    { q: { en: 'How long is the cab from Makkah to Riyadh?', ar: 'كم يستغرق الكاب من مكة إلى الرياض؟' }, a: { en: 'The private cab from Makkah to Riyadh takes 8 to 9 hours (approximately 900 km). We recommend departing at night after Isha prayer to avoid daytime traffic.', ar: 'يستغرق الكاب الخاص من مكة إلى الرياض 8 إلى 9 ساعات (حوالي 900 كم). نوصي بالانطلاق ليلاً بعد صلاة العشاء لتجنب ازدحام النهار.' } },
    { q: { en: 'Can I book a round trip Makkah to Riyadh and back?', ar: 'هل يمكنني حجز رحلة ذهاباً وإياباً بين مكة والرياض؟' }, a: { en: 'Yes, Saudi Cabs GMC offers round-trip packages between Makkah and Riyadh at a discounted rate. Book both legs together via WhatsApp for the best price.', ar: 'نعم، Saudi Cabs GMC تقدم باقات ذهاباً وإياباً بين مكة والرياض بسعر مخفض. احجز كلا الرحلتين معاً عبر واتساب للحصول على أفضل سعر.' } },
  ],
}

/* ─── DAMMAM → MAKKAH ───────────────────────────────────────────── */
export const dammamToMakkah: RoutePageData = {
  from:      { ar: 'الدمام', en: 'Dammam' },
  to:        { ar: 'مكة المكرمة', en: 'Makkah' },
  slug:      'dammam-to-makkah',
  duration:  '~8–9 hrs',
  distance:  '~870 km',
  type:      'intercity',
  heroImage: '/location/makkah.webp',
  fromCitySlug: 'makkah-taxi-service',
  toCitySlug:   'makkah-taxi-service',
  description: {
    en: 'Private taxi from Dammam to Makkah — door-to-door intercity cab from the Eastern Province to the Holy City. Fixed price, comfortable vehicles, 24/7 service. Ideal for Umrah and Hajj pilgrims.',
    ar: 'تاكسي خاص من الدمام إلى مكة المكرمة — كاب بين المدن من المنطقة الشرقية إلى المدينة المقدسة. سعر ثابت، سيارات مريحة، خدمة ٢٤/٧. مثالي للمعتمرين والحجاج.',
  },
  highlights: [
    { icon: '🕋', en: 'Drop-off at Haram hotels or any Makkah address', ar: 'توصيل لفنادق الحرم أو أي عنوان في مكة' },
    { icon: '🛣️', en: 'Direct ~870 km journey via Riyadh bypass', ar: 'رحلة مباشرة ~870 كم عبر الطريق السريع' },
    { icon: '🌙', en: 'Night travel recommended — depart after Isha', ar: 'السفر الليلي موصى به — انطلق بعد العشاء' },
    { icon: '💰', en: 'Fixed long-distance fare — no surprises', ar: 'أجرة ثابتة للمسافات الطويلة — بلا مفاجآت' },
    { icon: '🧳', en: 'Spacious vehicles for Hajj & Umrah luggage', ar: 'سيارات واسعة لأمتعة الحج والعمرة' },
    { icon: '⏰', en: '24/7 — book any departure time', ar: '٢٤/٧ — احجز في أي وقت' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: {
    en: [
      'Door-to-door — no bus terminals or layovers',
      'Fixed price from Dammam to Makkah, no hidden fees',
      'Rest and prayer stops along the highway',
      'Ideal for families and elderly with heavy luggage',
      'Depart at your time — not a fixed bus schedule',
      'Driver experienced on the Dammam–Makkah highway',
    ],
    ar: [
      'من الباب للباب — بلا محطات أو توقفات',
      'سعر ثابت من الدمام إلى مكة، بلا رسوم خفية',
      'توقفات للراحة والصلاة على طول الطريق السريع',
      'مثالي للعائلات وكبار السن مع الأمتعة الثقيلة',
      'انطلق في وقتك — وليس وفق جدول الحافلات',
      'سائق ذو خبرة على طريق الدمام–مكة السريع',
    ],
  },
  relatedRoutes: [
    { slug: 'makkah-to-madinah', from: { ar: 'مكة', en: 'Makkah' },   to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4.5 hrs' },
    { slug: 'dammam-to-madinah', from: { ar: 'الدمام', en: 'Dammam' }, to: { ar: 'المدينة', en: 'Madinah' }, duration: '~9–10 hrs' },
    { slug: 'riyadh-to-makkah',  from: { ar: 'الرياض', en: 'Riyadh' }, to: { ar: 'مكة', en: 'Makkah' },   duration: '~8.5 hrs' },
  ],
  faqs: [
    { q: { en: 'How long is the taxi from Dammam to Makkah?', ar: 'كم يستغرق التاكسي من الدمام إلى مكة؟' }, a: { en: 'The private taxi from Dammam to Makkah takes approximately 8 to 9 hours (about 870 km). The route passes via Riyadh. Night travel is recommended to avoid peak traffic.', ar: 'يستغرق التاكسي الخاص من الدمام إلى مكة حوالي 8 إلى 9 ساعات (حوالي 870 كم). يمر الطريق عبر الرياض. يُوصى بالسفر الليلي لتجنب ذروة المرور.' } },
    { q: { en: 'How far is Dammam from Makkah?', ar: 'كم المسافة من الدمام إلى مكة؟' }, a: { en: 'Dammam to Makkah is approximately 870 km by road. The journey takes 8–9 hours by private taxi. Saudi Cabs GMC offers this route with a fixed price confirmed before departure.', ar: 'المسافة من الدمام إلى مكة حوالي 870 كم بالطريق. تستغرق الرحلة 8-9 ساعات بالتاكسي الخاص. Saudi Cabs GMC تقدم هذا الطريق بسعر ثابت مؤكد قبل الانطلاق.' } },
    { q: { en: 'Can I book a Dammam to Makkah taxi for Umrah?', ar: 'هل يمكنني حجز تاكسي من الدمام إلى مكة للعمرة؟' }, a: { en: 'Yes. Saudi Cabs GMC provides direct Dammam to Makkah private taxis for Umrah pilgrims year-round. Book in advance via WhatsApp at +92 309 7811785, especially during Ramadan and Hajj season.', ar: 'نعم. Saudi Cabs GMC توفر تاكسي خاص مباشر من الدمام إلى مكة للمعتمرين طوال العام. احجز مسبقاً عبر واتساب على +92 309 7811785، خاصةً خلال رمضان وموسم الحج.' } },
    { q: { en: 'What is the taxi fare from Dammam to Makkah?', ar: 'ما هي أجرة التاكسي من الدمام إلى مكة؟' }, a: { en: 'Saudi Cabs GMC offers a fixed price for the Dammam to Makkah route, confirmed via WhatsApp before departure. The fare depends on vehicle type (4-seater, 7-seater, or VIP GMC Yukon). Contact us for the current rate.', ar: 'Saudi Cabs GMC تقدم سعراً ثابتاً لمسار الدمام إلى مكة، يُؤكد عبر واتساب قبل الانطلاق. تعتمد الأجرة على نوع السيارة (4 مقاعد، 7 مقاعد، أو GMC يوكون VIP). تواصل معنا للحصول على السعر الحالي.' } },
  ],
}

/* ─── MAKKAH → DAMMAM ───────────────────────────────────────────── */
export const makkahToDammam: RoutePageData = {
  from:      { ar: 'مكة المكرمة', en: 'Makkah' },
  to:        { ar: 'الدمام', en: 'Dammam' },
  slug:      'makkah-to-dammam',
  duration:  '~8–9 hrs',
  distance:  '~870 km',
  type:      'intercity',
  heroImage: '/location/makkah.webp',
  fromCitySlug: 'makkah-taxi-service',
  toCitySlug:   'makkah-taxi-service',
  description: {
    en: 'Private taxi from Makkah to Dammam — the return journey from the Holy City to the Eastern Province. Pickup from your Haram hotel, comfortable ride home. Fixed price, door-to-door, 24/7.',
    ar: 'تاكسي خاص من مكة المكرمة إلى الدمام — رحلة العودة من المدينة المقدسة إلى المنطقة الشرقية. استلام من فندقك بجوار الحرم، رحلة مريحة للبيت. سعر ثابت، من الباب للباب، ٢٤/٧.',
  },
  highlights: [
    { icon: '🕋', en: 'Pickup directly from your Makkah hotel or Haram area', ar: 'استلام مباشرةً من فندقك في مكة أو منطقة الحرم' },
    { icon: '🛣️', en: 'Direct ~870 km return journey to Dammam', ar: 'رحلة عودة مباشرة ~870 كم إلى الدمام' },
    { icon: '🌙', en: 'Night travel available — depart after Isha or Fajr', ar: 'السفر الليلي متاح — انطلق بعد العشاء أو الفجر' },
    { icon: '💰', en: 'Fixed fare — transparent pricing, no meter', ar: 'أجرة ثابتة — تسعير شفاف بدون عداد' },
    { icon: '🧳', en: 'Large vehicles for heavy Hajj & Umrah luggage', ar: 'سيارات كبيرة لأمتعة الحج والعمرة الثقيلة' },
    { icon: '⏰', en: '24/7 — book your return trip anytime', ar: '٢٤/٧ — احجز رحلة عودتك في أي وقت' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: {
    en: [
      'Door-to-door — from Haram hotel straight to your Dammam home',
      'No crowded bus terminals after a tiring pilgrimage',
      'Rest and prayer stops on the Makkah–Dammam highway',
      'Comfortable return journey for exhausted pilgrims',
      'Fixed price — book a round trip for the best rate',
      'Trusted by thousands of Eastern Province pilgrims',
    ],
    ar: [
      'من الباب للباب — من فندق الحرم مباشرةً لمنزلك بالدمام',
      'بلا محطات حافلات مزدحمة بعد رحلة حج أو عمرة مضنية',
      'توقفات للراحة والصلاة على طريق مكة–الدمام السريع',
      'رحلة عودة مريحة للحجاج المتعبين',
      'سعر ثابت — احجز ذهاباً وإياباً للحصول على أفضل سعر',
      'موثوق به من قِبل آلاف الحجاج من المنطقة الشرقية',
    ],
  },
  relatedRoutes: [
    { slug: 'dammam-to-makkah',  from: { ar: 'الدمام', en: 'Dammam' }, to: { ar: 'مكة', en: 'Makkah' },   duration: '~8.5 hrs' },
    { slug: 'makkah-to-madinah', from: { ar: 'مكة', en: 'Makkah' },   to: { ar: 'المدينة', en: 'Madinah' }, duration: '~4.5 hrs' },
    { slug: 'riyadh-to-makkah',  from: { ar: 'الرياض', en: 'Riyadh' }, to: { ar: 'مكة', en: 'Makkah' },   duration: '~8.5 hrs' },
  ],
  faqs: [
    { q: { en: 'How long is the cab from Makkah to Dammam?', ar: 'كم يستغرق الكاب من مكة إلى الدمام؟' }, a: { en: 'The private cab from Makkah to Dammam takes 8 to 9 hours (approximately 870 km). We recommend departing at night after Isha prayer to avoid daytime traffic.', ar: 'يستغرق الكاب الخاص من مكة إلى الدمام 8 إلى 9 ساعات (حوالي 870 كم). نوصي بالانطلاق ليلاً بعد صلاة العشاء لتجنب ازدحام النهار.' } },
    { q: { en: 'How far is Makkah from Dammam?', ar: 'كم المسافة من مكة إلى الدمام؟' }, a: { en: 'Makkah to Dammam is approximately 870 km by road. The journey takes 8–9 hours by private taxi via the highway.', ar: 'المسافة من مكة إلى الدمام حوالي 870 كم بالطريق. تستغرق الرحلة 8-9 ساعات بالتاكسي الخاص عبر الطريق السريع.' } },
    { q: { en: 'Can I book a round trip Makkah to Dammam?', ar: 'هل يمكنني حجز رحلة ذهاباً وإياباً بين مكة والدمام؟' }, a: { en: 'Yes. Saudi Cabs GMC offers round-trip packages between Makkah and Dammam. Book both legs together via WhatsApp at +92 309 7811785 for the best combined rate.', ar: 'نعم. Saudi Cabs GMC تقدم باقات ذهاباً وإياباً بين مكة والدمام. احجز الرحلتين معاً عبر واتساب على +92 309 7811785 للحصول على أفضل سعر مجمع.' } },
  ],
}

/* ─── DAMMAM → MADINAH ──────────────────────────────────────────── */
export const dammamToMadinah: RoutePageData = {
  from:      { ar: 'الدمام', en: 'Dammam' },
  to:        { ar: 'المدينة المنورة', en: 'Madinah' },
  slug:      'dammam-to-madinah',
  duration:  '~9–10 hrs',
  distance:  '~1,000 km',
  type:      'intercity',
  heroImage: '/location/madinah.webp',
  fromCitySlug: 'madinah-taxi-service',
  toCitySlug:   'madinah-taxi-service',
  description: {
    en: "Private taxi from Dammam to Madinah — direct door-to-door intercity cab from the Eastern Province to the Prophet's City. Fixed price, comfortable vehicles, 24/7. Popular Umrah route.",
    ar: 'تاكسي خاص من الدمام إلى المدينة المنورة — كاب مباشر من باب لباب من المنطقة الشرقية إلى مدينة النبي. سعر ثابت، سيارات مريحة، ٢٤/٧. مسار عمرة شهير.',
  },
  highlights: [
    { icon: '🕌', en: "Drop-off at the Prophet's Mosque or your hotel", ar: 'توصيل للمسجد النبوي أو فندقك' },
    { icon: '🛣️', en: 'Direct ~1,000 km highway journey', ar: 'رحلة مباشرة ~1,000 كم عبر الطريق السريع' },
    { icon: '🌙', en: 'Night travel recommended — depart after Isha', ar: 'السفر الليلي موصى به — انطلق بعد العشاء' },
    { icon: '💰', en: 'Fixed long-distance rate — agreed before departure', ar: 'سعر ثابت للمسافات الطويلة — مُتفق عليه قبل الانطلاق' },
    { icon: '🧳', en: 'Spacious vehicles for pilgrims with luggage', ar: 'سيارات واسعة للحجاج مع الأمتعة' },
    { icon: '⏰', en: '24/7 availability — book anytime', ar: 'توفر ٢٤/٧ — احجز في أي وقت' },
  ],
  vehicles: VEHICLES_STANDARD,
  whyPrivate: {
    en: [
      'Door-to-door from Dammam directly to your Madinah hotel',
      'No bus terminals, no layovers — single continuous journey',
      'Rest and prayer stops scheduled on the highway',
      'Ideal for families and elderly Umrah pilgrims',
      'Fixed price — much more economical than multiple legs',
      'Driver experienced on the Eastern Province–Madinah route',
    ],
    ar: [
      'من الباب للباب من الدمام مباشرةً لفندقك بالمدينة',
      'بلا محطات حافلات أو توقفات — رحلة واحدة متواصلة',
      'توقفات للراحة والصلاة مجدولة على الطريق السريع',
      'مثالي للعائلات وكبار السن من معتمري المنطقة الشرقية',
      'سعر ثابت — أوفر بكثير من رحلات متعددة',
      'سائق ذو خبرة على مسار المنطقة الشرقية–المدينة المنورة',
    ],
  },
  relatedRoutes: [
    { slug: 'dammam-to-makkah',  from: { ar: 'الدمام', en: 'Dammam' },   to: { ar: 'مكة', en: 'Makkah' },    duration: '~8.5 hrs' },
    { slug: 'madinah-to-makkah', from: { ar: 'المدينة', en: 'Madinah' }, to: { ar: 'مكة', en: 'Makkah' },    duration: '~4.5 hrs' },
    { slug: 'riyadh-to-madinah', from: { ar: 'الرياض', en: 'Riyadh' },   to: { ar: 'المدينة', en: 'Madinah' }, duration: '~9–10 hrs' },
  ],
  faqs: [
    { q: { en: 'How long is the taxi from Dammam to Madinah?', ar: 'كم يستغرق التاكسي من الدمام إلى المدينة؟' }, a: { en: 'The private taxi from Dammam to Madinah takes approximately 9 to 10 hours (about 1,000 km). The route passes through Riyadh. Night travel is highly recommended.', ar: 'يستغرق التاكسي الخاص من الدمام إلى المدينة حوالي 9 إلى 10 ساعات (حوالي 1,000 كم). يمر الطريق عبر الرياض. السفر الليلي موصى به بشدة.' } },
    { q: { en: 'How far is Dammam from Madinah?', ar: 'كم المسافة من الدمام إلى المدينة؟' }, a: { en: 'Dammam to Madinah is approximately 1,000 km by road. This makes it one of the longest intercity taxi routes Saudi Cabs GMC operates. A fixed price is confirmed before departure.', ar: 'المسافة من الدمام إلى المدينة حوالي 1,000 كم بالطريق. هذا يجعلها من أطول مسارات التاكسي بين المدن التي تشغلها Saudi Cabs GMC. يُؤكد سعر ثابت قبل الانطلاق.' } },
    { q: { en: 'Can I book a Dammam to Madinah taxi for Umrah?', ar: 'هل يمكنني حجز تاكسي من الدمام إلى المدينة للعمرة؟' }, a: { en: 'Yes. Saudi Cabs GMC operates direct Dammam to Madinah transfers for Umrah pilgrims. Many pilgrims from the Eastern Province start their Umrah journey in Madinah first. Book via WhatsApp: +92 309 7811785.', ar: 'نعم. Saudi Cabs GMC تشغل توصيلات مباشرة من الدمام إلى المدينة للمعتمرين. كثير من حجاج المنطقة الشرقية يبدأون عمرتهم من المدينة المنورة أولاً. احجز عبر واتساب: +92 309 7811785.' } },
    { q: { en: 'What is the taxi fare from Dammam to Madinah?', ar: 'ما أجرة التاكسي من الدمام إلى المدينة؟' }, a: { en: 'The fare for Dammam to Madinah taxi is fixed and confirmed before departure. Contact Saudi Cabs GMC via WhatsApp at +92 309 7811785 for the current rate. Prices vary by vehicle type (Sedan, Staria, or GMC Yukon).', ar: 'أجرة التاكسي من الدمام إلى المدينة ثابتة ومؤكدة قبل الانطلاق. تواصل مع Saudi Cabs GMC عبر واتساب على +92 309 7811785 للحصول على السعر الحالي. تختلف الأسعار حسب نوع السيارة.' } },
  ],
}

/* ─── MASTER EXPORT MAP ─────────────────────────────────────────── */
export const allRoutePages: Record<string, RoutePageData> = {
  'jeddah-airport-to-makkah':  jedAirportToMakkah,
  'makkah-to-jeddah-airport':  makkahToJedAirport,
  'makkah-to-madinah':         makkahToMadinah,
  'madinah-to-makkah':         madinahToMakkah,
  'jeddah-to-makkah':          jeddahToMakkah,
  'makkah-to-jeddah':          makkahToJeddah,
  'jeddah-to-taif':            jeddahToTaif,
  'taif-to-jeddah':            taifToJeddah,
  'makkah-to-taif':            makkahToTaif,
  'madinah-to-jeddah':         madinahToJeddah,
  'madinah-airport-taxi':      madinahAirportTaxi,
  'jeddah-airport-to-madinah': jedAirportToMadinah,
  'taif-to-madinah':           taifToMadinah,
  'taif-to-makkah':            taifToMakkah,
  'jeddah-to-madinah':         jeddahToMadinah,
  'riyadh-to-makkah':          riyadhToMakkah,
  'riyadh-to-madinah':         riyadhToMadinah,
  'riyadh-to-jeddah':          riyadhToJeddah,
  'taif-airport-taxi':         taifAirportTaxi,
  'makkah-to-riyadh':          makkahToRiyadh,
  'dammam-to-makkah':          dammamToMakkah,
  'makkah-to-dammam':          makkahToDammam,
  'dammam-to-madinah':         dammamToMadinah,
}
