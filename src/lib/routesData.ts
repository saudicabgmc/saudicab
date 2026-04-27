type BText = { ar: string; en: string }

export type RouteType = 'airport' | 'intercity' | 'pilgrimage' | 'tour' | 'local'

export interface RouteEntry {
  from: BText
  to: BText
  type: RouteType
  duration: string
  distance: string
  desc: BText
}

export interface CityRoutesData {
  cityName: BText
  citySlogan: BText
  heroDesc: BText
  routes: RouteEntry[]
}

export const routeTypeLabel: Record<RouteType, BText> = {
  airport:     { ar: 'توصيل المطار',        en: 'Airport Transfer' },
  intercity:   { ar: 'رحلات بين المدن',      en: 'Intercity' },
  pilgrimage:  { ar: 'الحج والعمرة',         en: 'Pilgrimage' },
  tour:        { ar: 'جولات سياحية',         en: 'Sightseeing Tour' },
  local:       { ar: 'داخل المدينة',         en: 'Local' },
}

export const routeTypeColor: Record<RouteType, string> = {
  airport:    '#1e3a8a',
  intercity:  '#7c3aed',
  pilgrimage: '#b45309',
  tour:       '#065f46',
  local:      '#9f1239',
}

/* ─── MAKKAH ─────────────────────────────────────────────────── */
export const makkahRoutes: CityRoutesData = {
  cityName:   { ar: 'مكة المكرمة', en: 'Makkah' },
  citySlogan: { ar: 'توصيل موثوق من وإلى أطهر بقاع الأرض', en: 'Reliable transfers to and from the holiest city on earth' },
  heroDesc: {
    ar: 'نوفر جميع رحلات النقل في مكة المكرمة — من توصيل الحرم وخدمات الحج والعمرة إلى الرحلات بين المدن. سائقون محترفون وأسعار ثابتة على مدار الساعة.',
    en: 'We cover every transport route in Makkah — from Haram transfers and Hajj & Umrah services to long-distance intercity trips. Professional drivers and fixed prices, 24/7.',
  },
  routes: [
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'مطار الملك عبدالعزيز، جدة', en: 'King Abdulaziz Airport, Jeddah' },
      type: 'airport', duration: '~60 min', distance: '~90 km',
      desc: { ar: 'توصيل احترافي من مكة إلى مطار جدة الدولي مع ضمان الوصول في الوقت المحدد.', en: 'Professional transfer from Makkah to Jeddah International Airport with guaranteed on-time arrival.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'جدة', en: 'Jeddah' },
      type: 'intercity', duration: '~50 min', distance: '~85 km',
      desc: { ar: 'أشهر الخطوط بين المدينتين — رحلة يومية مريحة بسعر ثابت.', en: 'The most popular route between the two cities — a comfortable daily trip at a fixed price.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'المدينة المنورة', en: 'Madinah' },
      type: 'intercity', duration: '~4.5 hrs', distance: '~430 km',
      desc: { ar: 'رحلة الحجاج المفضلة بين البلدين الحرمين بسيارة خاصة مريحة.', en: 'The preferred pilgrim route between the two holy cities in a comfortable private car.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'الطائف', en: 'Taif' },
      type: 'intercity', duration: '~1.5 hrs', distance: '~90 km',
      desc: { ar: 'طريق الجبال الخلاب من مكة إلى مدينة الورد الطائف.', en: 'The scenic mountain road from Makkah to the Rose City of Taif.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'منى', en: 'Mina' },
      type: 'pilgrimage', duration: '~20 min', distance: '~8 km',
      desc: { ar: 'توصيل الحجاج إلى خيام منى في موسم الحج مع سائقين خبراء بالطرق.', en: 'Pilgrim transfer to the tents of Mina during Hajj season with drivers expert in all routes.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'عرفات', en: 'Arafat' },
      type: 'pilgrimage', duration: '~30 min', distance: '~20 km',
      desc: { ar: 'رحلة إلى جبل عرفات — ركن الحج الأعظم — مع سائق موثوق.', en: 'Trip to Mount Arafat — the greatest pillar of Hajj — with a trusted and experienced driver.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'مزدلفة', en: 'Muzdalifah' },
      type: 'pilgrimage', duration: '~25 min', distance: '~15 km',
      desc: { ar: 'توصيل الحجاج إلى مزدلفة ضمن رحلة المشاعر المقدسة.', en: 'Pilgrim transfer to Muzdalifah as part of the sacred sites journey during Hajj.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'جبل النور (غار حراء)', en: 'Jabal Al-Nour (Hira Cave)' },
      type: 'tour', duration: '~10 min', distance: '~5 km',
      desc: { ar: 'زيارة جبل النور حيث نزل الوحي أول مرة على النبي ﷺ.', en: 'Visit Jabal Al-Nour where the first revelation descended upon the Prophet ﷺ.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'جبل ثور', en: 'Jabal Thawr' },
      type: 'tour', duration: '~15 min', distance: '~7 km',
      desc: { ar: 'زيارة جبل ثور حيث لجأ النبي ﷺ في هجرته المباركة.', en: "Visit Jabal Thawr where the Prophet ﷺ took refuge during his blessed migration." },
    },
    {
      from: { ar: 'الحرم المكي', en: 'Al-Masjid Al-Haram' },
      to:   { ar: 'العزيزية', en: 'Al-Aziziyah' },
      type: 'local', duration: '~15 min', distance: '~6 km',
      desc: { ar: 'توصيل سريع من الحرم إلى أحياء العزيزية لحجاج الفنادق والشقق.', en: 'Quick transfer from the Haram to Al-Aziziyah neighborhoods for pilgrims in hotels and apartments.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'الرياض', en: 'Riyadh' },
      type: 'intercity', duration: '~9 hrs', distance: '~900 km',
      desc: { ar: 'رحلة مباشرة من مكة المكرمة إلى العاصمة الرياض بسيارات مريحة.', en: 'Direct long-distance trip from Makkah to the capital Riyadh in comfortable vehicles.' },
    },
    {
      from: { ar: 'مكة المكرمة', en: 'Makkah' },
      to:   { ar: 'ينبع', en: 'Yanbu' },
      type: 'intercity', duration: '~5 hrs', distance: '~480 km',
      desc: { ar: 'رحلة مريحة من مكة المكرمة إلى ينبع على ساحل البحر الأحمر.', en: 'Comfortable trip from Makkah to Yanbu on the Red Sea coast.' },
    },
  ],
}

/* ─── MADINAH ────────────────────────────────────────────────── */
export const madinahRoutes: CityRoutesData = {
  cityName:   { ar: 'المدينة المنورة', en: 'Madinah' },
  citySlogan: { ar: 'خدمة نقل راقية في رحاب مدينة النبي ﷺ', en: 'Premium transport service in the city of the Prophet ﷺ' },
  heroDesc: {
    ar: 'نصحبك في كل رحلاتك بالمدينة المنورة — من المسجد النبوي الشريف إلى المطار والمزارات الإسلامية والرحلات بين المدن. خدمة 24 ساعة بأسعار ثابتة.',
    en: 'We accompany you on every journey in Madinah — from the Prophet\'s Mosque to the airport, Islamic landmarks, and intercity trips. 24-hour service at fixed prices.',
  },
  routes: [
    {
      from: { ar: 'مطار الأمير محمد بن عبدالعزيز', en: 'Prince Mohammad bin Abdulaziz Airport' },
      to:   { ar: 'المسجد النبوي الشريف', en: "Al-Masjid An-Nabawi" },
      type: 'airport', duration: '~30 min', distance: '~18 km',
      desc: { ar: 'استقبال مباشر من المطار إلى المسجد النبوي مع خدمة حمل الأمتعة.', en: 'Direct pickup from the airport to the Prophet\'s Mosque with luggage-carry service.' },
    },
    {
      from: { ar: 'المدينة المنورة', en: 'Madinah' },
      to:   { ar: 'مكة المكرمة', en: 'Makkah' },
      type: 'intercity', duration: '~4.5 hrs', distance: '~430 km',
      desc: { ar: 'الخط الأكثر طلباً للحجاج — رحلة مريحة بين الحرمين الشريفين.', en: 'The most requested pilgrim route — a comfortable trip between the Two Holy Mosques.' },
    },
    {
      from: { ar: 'المدينة المنورة', en: 'Madinah' },
      to:   { ar: 'جدة', en: 'Jeddah' },
      type: 'intercity', duration: '~4 hrs', distance: '~390 km',
      desc: { ar: 'رحلة مباشرة مريحة من المدينة إلى جدة عروس البحر الأحمر.', en: 'A comfortable direct trip from Madinah to Jeddah, the Bride of the Red Sea.' },
    },
    {
      from: { ar: 'المدينة المنورة', en: 'Madinah' },
      to:   { ar: 'الطائف', en: 'Taif' },
      type: 'intercity', duration: '~5 hrs', distance: '~520 km',
      desc: { ar: 'رحلة بين المدينة المنورة ومدينة الورد الطائف بسيارة خاصة مريحة.', en: 'A trip between Madinah and the Rose City of Taif in a comfortable private car.' },
    },
    {
      from: { ar: 'المدينة المنورة', en: 'Madinah' },
      to:   { ar: 'ينبع', en: 'Yanbu' },
      type: 'intercity', duration: '~2.5 hrs', distance: '~220 km',
      desc: { ar: 'رحلة قصيرة من المدينة المنورة إلى مدينة ينبع الصناعية والساحلية.', en: 'A short trip from Madinah to the industrial and coastal city of Yanbu.' },
    },
    {
      from: { ar: 'المسجد النبوي', en: "Prophet's Mosque" },
      to:   { ar: 'مسجد قباء', en: 'Masjid Quba' },
      type: 'local', duration: '~10 min', distance: '~5 km',
      desc: { ar: 'زيارة مسجد قباء أول مسجد بُني في الإسلام — صلاة ركعتين كعمرة.', en: 'Visit Masjid Quba, the first mosque built in Islam — praying two rak\'ahs equals Umrah.' },
    },
    {
      from: { ar: 'المسجد النبوي', en: "Prophet's Mosque" },
      to:   { ar: 'جبل أحد', en: 'Mount Uhud' },
      type: 'tour', duration: '~15 min', distance: '~7 km',
      desc: { ar: 'زيارة موقع غزوة أحد وجبل الرماة والشهداء الكرام رضوان الله عليهم.', en: 'Visit the site of the Battle of Uhud, Mount Archers, and the revered martyrs.' },
    },
    {
      from: { ar: 'المسجد النبوي', en: "Prophet's Mosque" },
      to:   { ar: 'مقبرة البقيع', en: 'Al-Baqi Cemetery' },
      type: 'local', duration: '~5 min', distance: '~0.5 km',
      desc: { ar: 'زيارة جنة البقيع حيث يرقد كثير من صحابة النبي ﷺ وآل بيته الكرام.', en: "Visit Al-Baqi Cemetery where many of the Prophet's ﷺ companions and family rest." },
    },
    {
      from: { ar: 'المدينة المنورة', en: 'Madinah' },
      to:   { ar: 'مسجد القبلتين', en: 'Masjid Al-Qiblatayn' },
      type: 'tour', duration: '~15 min', distance: '~6 km',
      desc: { ar: 'زيارة مسجد القبلتين حيث تحولت القبلة من بيت المقدس إلى الكعبة المشرفة.', en: 'Visit Masjid Al-Qiblatayn where the Qibla was changed from Jerusalem to Makkah.' },
    },
    {
      from: { ar: 'المدينة المنورة', en: 'Madinah' },
      to:   { ar: 'بدر', en: 'Badr' },
      type: 'tour', duration: '~2 hrs', distance: '~150 km',
      desc: { ar: 'زيارة ميدان بدر الكبرى أول انتصار للمسلمين مع سائق مرشد محترف.', en: 'Visit the field of the great Battle of Badr, the first Muslim victory, with a professional guide driver.' },
    },
    {
      from: { ar: 'المدينة المنورة', en: 'Madinah' },
      to:   { ar: 'الرياض', en: 'Riyadh' },
      type: 'intercity', duration: '~6 hrs', distance: '~980 km',
      desc: { ar: 'رحلة طويلة مريحة من المدينة المنورة إلى العاصمة الرياض.', en: 'A long, comfortable trip from Madinah to the capital city of Riyadh.' },
    },
    {
      from: { ar: 'المدينة المنورة', en: 'Madinah' },
      to:   { ar: 'العُلا', en: 'Al-Ula' },
      type: 'tour', duration: '~4 hrs', distance: '~330 km',
      desc: { ar: 'رحلة سياحية إلى مدينة العُلا الأثرية وصخور الحجر التاريخية.', en: 'A sightseeing trip to the ancient city of Al-Ula and the historical Hegra (Mada\'in Saleh) rock formations.' },
    },
  ],
}

/* ─── JEDDAH ─────────────────────────────────────────────────── */
export const jeddahRoutes: CityRoutesData = {
  cityName:   { ar: 'جدة', en: 'Jeddah' },
  citySlogan: { ar: 'من مطار الملك عبدالعزيز إلى كل مكان في المملكة', en: 'From King Abdulaziz Airport to everywhere in the Kingdom' },
  heroDesc: {
    ar: 'سواء كنت قادماً من المطار أو تبحث عن رحلة بين المدن أو جولة على الكورنيش — Saudi Cabs GMC تغطي كل خطوط جدة بأسعار ثابتة وسائقين محترفين.',
    en: 'Whether arriving from the airport, heading on an intercity trip, or touring the Corniche — Saudi Cabs GMC covers every Jeddah route with fixed prices and professional drivers.',
  },
  routes: [
    {
      from: { ar: 'مطار الملك عبدالعزيز الدولي', en: 'King Abdulaziz International Airport' },
      to:   { ar: 'وسط جدة', en: 'Downtown Jeddah' },
      type: 'airport', duration: '~30 min', distance: '~25 km',
      desc: { ar: 'استقبال احترافي من صالة 1 أو 2 في المطار الجديد مع خدمة حمل الأمتعة.', en: 'Professional meet-and-greet from Terminal 1 or 2 of the new airport with luggage assistance.' },
    },
    {
      from: { ar: 'مطار الملك عبدالعزيز الدولي', en: 'King Abdulaziz International Airport' },
      to:   { ar: 'مكة المكرمة', en: 'Makkah' },
      type: 'airport', duration: '~50 min', distance: '~85 km',
      desc: { ar: 'أكثر رحلات المطار طلباً — توصيل مباشر من المطار إلى فنادق مكة والحرم.', en: 'The most requested airport route — direct transfer from the airport to Makkah hotels and Haram.' },
    },
    {
      from: { ar: 'مطار الملك عبدالعزيز الدولي', en: 'King Abdulaziz International Airport' },
      to:   { ar: 'المدينة المنورة', en: 'Madinah' },
      type: 'airport', duration: '~4 hrs', distance: '~390 km',
      desc: { ar: 'توصيل مباشر من مطار جدة إلى المدينة المنورة — خيار مريح للحجاج والزوار.', en: 'Direct transfer from Jeddah Airport to Madinah — a comfortable option for pilgrims and visitors.' },
    },
    {
      from: { ar: 'جدة', en: 'Jeddah' },
      to:   { ar: 'مكة المكرمة', en: 'Makkah' },
      type: 'intercity', duration: '~50 min', distance: '~85 km',
      desc: { ar: 'أكثر الخطوط تشغيلاً من جدة — رحلة يومية للحجاج والمعتمرين وزوار الحرم.', en: 'The busiest route from Jeddah — a daily trip for pilgrims, Umrah visitors, and Haram visitors.' },
    },
    {
      from: { ar: 'جدة', en: 'Jeddah' },
      to:   { ar: 'المدينة المنورة', en: 'Madinah' },
      type: 'intercity', duration: '~4 hrs', distance: '~390 km',
      desc: { ar: 'رحلة مريحة من عروس البحر الأحمر إلى مدينة النبي ﷺ.', en: "A comfortable trip from the Bride of the Red Sea to the city of the Prophet ﷺ." },
    },
    {
      from: { ar: 'جدة', en: 'Jeddah' },
      to:   { ar: 'الطائف', en: 'Taif' },
      type: 'intercity', duration: '~1.5 hrs', distance: '~100 km',
      desc: { ar: 'طريق الهدا الجبلي من جدة إلى الطائف — وجهة الصيف المفضلة للعائلات.', en: "The Al-Hada mountain road from Jeddah to Taif — families' favorite summer destination." },
    },
    {
      from: { ar: 'جدة', en: 'Jeddah' },
      to:   { ar: 'رابغ', en: 'Rabigh' },
      type: 'intercity', duration: '~1.5 hrs', distance: '~120 km',
      desc: { ar: 'رحلة شمالاً من جدة إلى مدينة رابغ الساحلية على البحر الأحمر.', en: 'A trip north from Jeddah to the coastal city of Rabigh on the Red Sea.' },
    },
    {
      from: { ar: 'جدة', en: 'Jeddah' },
      to:   { ar: 'ينبع', en: 'Yanbu' },
      type: 'intercity', duration: '~3.5 hrs', distance: '~340 km',
      desc: { ar: 'رحلة ساحلية من جدة شمالاً إلى مدينة ينبع الصناعية والبحرية.', en: 'A coastal trip from Jeddah northward to the industrial and maritime city of Yanbu.' },
    },
    {
      from: { ar: 'جدة', en: 'Jeddah' },
      to:   { ar: 'الرياض', en: 'Riyadh' },
      type: 'intercity', duration: '~10 hrs', distance: '~950 km',
      desc: { ar: 'أطول خطوطنا — رحلة مريحة من جدة إلى العاصمة الرياض بسيارات فاخرة.', en: 'Our longest route — a comfortable trip from Jeddah to the capital Riyadh in luxury vehicles.' },
    },
    {
      from: { ar: 'جدة', en: 'Jeddah' },
      to:   { ar: 'مدينة الملك عبدالله الاقتصادية', en: 'King Abdullah Economic City' },
      type: 'intercity', duration: '~1.5 hrs', distance: '~100 km',
      desc: { ar: 'رحلة إلى المدينة الاقتصادية الجديدة شمال جدة — مثالية لرجال الأعمال.', en: 'Trip to the new economic city north of Jeddah — ideal for business travelers.' },
    },
    {
      from: { ar: 'كورنيش جدة', en: 'Jeddah Corniche' },
      to:   { ar: 'جدة التاريخية (البلد)', en: 'Historic Jeddah (Al-Balad)' },
      type: 'tour', duration: '~20 min', distance: '~8 km',
      desc: { ar: 'جولة من الكورنيش إلى جدة التاريخية — التراث العمراني العالمي اليونسكو.', en: "Tour from the Corniche to Historic Jeddah Al-Balad — UNESCO World Heritage site." },
    },
    {
      from: { ar: 'جدة', en: 'Jeddah' },
      to:   { ar: 'القنفذة', en: 'Al-Qunfudhah' },
      type: 'intercity', duration: '~3 hrs', distance: '~280 km',
      desc: { ar: 'رحلة جنوباً على ساحل البحر الأحمر من جدة إلى القنفذة.', en: 'A southward trip along the Red Sea coast from Jeddah to Al-Qunfudhah.' },
    },
  ],
}

/* ─── TAIF ───────────────────────────────────────────────────── */
export const taifRoutes: CityRoutesData = {
  cityName:   { ar: 'الطائف', en: 'Taif' },
  citySlogan: { ar: 'من جبال الطائف الخلابة إلى كل مكان في المملكة', en: 'From the scenic mountains of Taif to everywhere in the Kingdom' },
  heroDesc: {
    ar: 'استكشف طرق الطائف الجبلية الخلابة واستمتع برحلات الورد والمنتجعات مع خدمات الكاب الاحترافية بين المدن. أسعار ثابتة وسائقون يعرفون كل طريق.',
    en: 'Explore the scenic mountain roads of Taif, enjoy rose farm visits and resort trips, with professional intercity cab services. Fixed prices and drivers who know every road.',
  },
  routes: [
    {
      from: { ar: 'مطار الطائف', en: 'Taif Airport' },
      to:   { ar: 'وسط مدينة الطائف', en: 'Downtown Taif' },
      type: 'airport', duration: '~25 min', distance: '~30 km',
      desc: { ar: 'استقبال من مطار الطائف مع خدمة اللوحات وحمل الأمتعة إلى فندقك.', en: 'Airport pickup with name-board service and luggage assistance to your hotel.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'جدة', en: 'Jeddah' },
      type: 'intercity', duration: '~1.5 hrs', distance: '~100 km',
      desc: { ar: 'أشهر الخطوط من الطائف — مناظر جبلية خلابة على طريق الهدا.', en: 'The most popular route from Taif — breathtaking mountain views along the Al-Hada road.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'مكة المكرمة', en: 'Makkah' },
      type: 'intercity', duration: '~1.5 hrs', distance: '~90 km',
      desc: { ar: 'رحلة الحجاج بين الطائف والحرم المكي عبر الطريق الجبلي.', en: 'Pilgrim route between Taif and the Holy Mosque through the scenic mountain road.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'المدينة المنورة', en: 'Madinah' },
      type: 'intercity', duration: '~5 hrs', distance: '~520 km',
      desc: { ar: 'رحلة طويلة مريحة من الطائف إلى مدينة النور.', en: 'A long, comfortable trip from Taif to the City of Light (Madinah).' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'الرياض', en: 'Riyadh' },
      type: 'intercity', duration: '~8 hrs', distance: '~800 km',
      desc: { ar: 'رحلة مريحة عبر الطريق السريع من الطائف إلى العاصمة الرياض.', en: 'A comfortable highway trip from Taif to the capital city of Riyadh.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'شفا', en: 'Shafa' },
      type: 'tour', duration: '~30 min', distance: '~35 km',
      desc: { ar: 'جولة إلى منتجع شفا الجبلي — أعلى نقطة في المنطقة مع إطلالات خلابة.', en: 'Tour to Shafa mountain resort — the highest point in the area with breathtaking panoramic views.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'هدا', en: 'Hada' },
      type: 'tour', duration: '~20 min', distance: '~20 km',
      desc: { ar: 'جولة إلى هدا الجبل — وجهة سياحية شهيرة بمنتجعاتها وطبيعتها الجميلة.', en: 'Tour to Hada Al-Jabal — a famous tourist destination with resorts and beautiful nature.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'مزارع الورد الطائفي', en: 'Taif Rose Farms' },
      type: 'tour', duration: '~25 min', distance: '~20 km',
      desc: { ar: 'زيارة مزارع الورد الطائفي الشهيرة ومصانع عطر الورد الأصيل في موسم الإزهار.', en: 'Visit the famous Taif rose farms and authentic rose perfume factories during the blooming season.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'وادي قرن', en: 'Wadi Qarn' },
      type: 'tour', duration: '~40 min', distance: '~45 km',
      desc: { ar: 'جولة إلى وادي قرن — واحد من أجمل الوديان الجبلية في محيط الطائف.', en: 'Tour to Wadi Qarn — one of the most beautiful mountain valleys in the Taif area.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'حديقة الرضف', en: 'Al-Rudaf Park' },
      type: 'local', duration: '~15 min', distance: '~8 km',
      desc: { ar: 'توصيل إلى حديقة الرضف — أشهر متنزهات الطائف للعائلات.', en: 'Transfer to Al-Rudaf Park — the most famous family park in Taif.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'الهوية', en: 'Al-Hawiyah' },
      type: 'local', duration: '~45 min', distance: '~50 km',
      desc: { ar: 'رحلة إلى منطقة الهوية الجبلية — موقع شلال طبيعي رائع.', en: 'Trip to the Al-Hawiyah mountain area — home to a spectacular natural waterfall.' },
    },
    {
      from: { ar: 'الطائف', en: 'Taif' },
      to:   { ar: 'شفا ← هدا (جولة مشتركة)', en: 'Shafa + Hada Combined Tour' },
      type: 'tour', duration: '~45 min', distance: '~55 km',
      desc: { ar: 'جولة جبلية مشتركة بسائق خاص تشمل شفا وهدا وأجمل المناطق الجبلية.', en: 'A combined mountain tour with private driver covering Shafa, Hada, and the best scenic areas.' },
    },
  ],
}
