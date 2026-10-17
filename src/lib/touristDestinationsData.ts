export type BText = { en: string; ar: string }

export interface DestinationHighlight {
  name: BText
  desc: BText
}

export interface ServiceLink {
  href: string
  label: BText
}

export interface Destination {
  id: string
  name: BText
  region: BText
  tagline: BText
  summary: BText
  highlights: DestinationHighlight[]
  goodToKnow?: BText
  status: 'serviced' | 'inquire'
  heroImage?: string
  gradient: [string, string]
  icon: 'Landmark' | 'Waves' | 'Mountain' | 'Building2' | 'Building' | 'Map'
  serviceLinks: ServiceLink[]
  /** Shows a WhatsApp booking CTA on the card even when status is 'serviced' and
   *  serviceLinks is empty (no dedicated route/service page exists yet to link to). */
  whatsappCta?: boolean
}

export const destinations: Destination[] = [
  {
    id: 'makkah',
    name: { en: 'Makkah', ar: 'مكة المكرمة' },
    region: { en: "The Holy City", ar: 'المدينة المقدسة' },
    tagline: { en: "Islam's holiest site and the spiritual heart of every pilgrimage.", ar: 'أقدس موقع في الإسلام وقلب كل رحلة حج أو عمرة.' },
    summary: {
      en: 'Home to Al-Masjid al-Haram and the Kaaba, Makkah draws millions of Muslims each year for Hajj and Umrah. Nearby historic sites like Jabal al-Nour and Jabal Thawr carry deep significance for pilgrims.',
      ar: 'مكة المكرمة هي موطن المسجد الحرام والكعبة المشرفة، وتستقبل الملايين من المسلمين سنوياً لأداء الحج والعمرة. وتحمل مواقع تاريخية قريبة من الحرم كجبل النور وجبل ثور دلالة روحية عميقة للحجاج.',
    },
    highlights: [
      { name: { en: 'Al-Masjid al-Haram', ar: 'المسجد الحرام' }, desc: { en: 'The Grand Mosque surrounding the Kaaba — the direction of prayer for over a billion Muslims.', ar: 'المسجد الذي يحيط بالكعبة المشرفة — قبلة أكثر من مليار مسلم.' } },
      { name: { en: 'Jabal al-Nour', ar: 'جبل النور' }, desc: { en: 'Home to the Cave of Hira, where the first revelation of the Quran descended.', ar: 'يضم غار حراء الذي نزل فيه أول وحي من القرآن الكريم.' } },
      { name: { en: 'Jabal Thawr', ar: 'جبل ثور' }, desc: { en: 'The cave that sheltered the Prophet ﷺ during the migration to Madinah.', ar: 'الغار الذي احتمى به النبي ﷺ خلال هجرته إلى المدينة المنورة.' } },
    ],
    goodToKnow: { en: 'Makkah is restricted to Muslims only — our Makkah routes and Ziyarat tours serve Muslim travelers exclusively.', ar: 'مكة المكرمة مقتصرة على المسلمين فقط — تخدم خطوطنا وجولات الزيارة في مكة المسافرين المسلمين دون غيرهم.' },
    status: 'serviced',
    heroImage: '/location/makkah.webp',
    gradient: ['#071f17', '#0b3d2e'],
    icon: 'Landmark',
    serviceLinks: [
      { href: '/makkah-ziyarat-tour', label: { en: 'Makkah Ziyarat Tour', ar: 'جولة زيارات مكة' } },
      { href: '/makkah-taxi-service', label: { en: 'Makkah Taxi Service', ar: 'خدمة تاكسي مكة' } },
    ],
  },
  {
    id: 'madinah',
    name: { en: 'Madinah', ar: 'المدينة المنورة' },
    region: { en: "The Prophet's City", ar: 'مدينة النبي ﷺ' },
    tagline: { en: 'A city of profound peace, home to the Prophet\'s Mosque and centuries of Islamic history.', ar: 'مدينة مليئة بالسكينة، تضم المسجد النبوي الشريف وقروناً من التاريخ الإسلامي.' },
    summary: {
      en: 'Madinah centers on Masjid an-Nabawi, the Prophet\'s Mosque, and holds some of Islam\'s earliest landmarks — from the first mosque ever built to the battlefield of Uhud.',
      ar: 'تتمحور المدينة المنورة حول المسجد النبوي الشريف، وتضم بعضاً من أقدم معالم الإسلام — من أول مسجد بُني إلى ساحة معركة أحد.',
    },
    highlights: [
      { name: { en: 'Masjid an-Nabawi', ar: 'المسجد النبوي' }, desc: { en: "The Prophet's Mosque, second holiest site in Islam.", ar: 'المسجد النبوي، ثاني أقدس موقع في الإسلام.' } },
      { name: { en: 'Masjid Quba', ar: 'مسجد قباء' }, desc: { en: 'The first mosque built in Islam, just outside the city center.', ar: 'أول مسجد بُني في الإسلام، على أطراف المدينة.' } },
      { name: { en: 'Jabal Uhud', ar: 'جبل أحد' }, desc: { en: 'The mountain and battlefield central to early Islamic history.', ar: 'الجبل وساحة المعركة ذات الأهمية المحورية في التاريخ الإسلامي المبكر.' } },
    ],
    status: 'serviced',
    heroImage: '/location/madinah.webp',
    gradient: ['#0B3D2E', '#0F5132'],
    icon: 'Landmark',
    serviceLinks: [
      { href: '/madinah-ziyarat-tour', label: { en: 'Madinah Ziyarat Tour', ar: 'جولة زيارات المدينة' } },
      { href: '/madinah-taxi-service', label: { en: 'Madinah Taxi Service', ar: 'خدمة تاكسي المدينة' } },
    ],
  },
  {
    id: 'jeddah',
    name: { en: 'Jeddah', ar: 'جدة' },
    region: { en: 'Gateway to the Red Sea', ar: 'بوابة البحر الأحمر' },
    tagline: { en: 'A coastal city balancing a UNESCO-listed old town with a modern waterfront corniche.', ar: 'مدينة ساحلية تجمع بين بلدة تاريخية مسجلة في اليونسكو وكورنيش حديث على الواجهة البحرية.' },
    summary: {
      en: "Jeddah is most travelers' entry point to Saudi Arabia, and it rewards a little extra time — Al-Balad's coral-stone lanes and the Red Sea Corniche are both easy half-day outings.",
      ar: 'تُعد جدة نقطة الدخول الأولى لكثير من الزوار إلى المملكة، وتستحق وقتاً إضافياً لاستكشافها — من أزقة البلد المرجانية إلى كورنيش البحر الأحمر، وكلاهما يمكن زيارته في نصف يوم.',
    },
    highlights: [
      { name: { en: 'Al-Balad', ar: 'البلد' }, desc: { en: 'Jeddah\'s historic old town, a UNESCO World Heritage Site known for coral-stone buildings and the Souq Al-Alawi.', ar: 'البلد التاريخي في جدة، المسجل في قائمة التراث العالمي لليونسكو، ويشتهر بمبانيه المرجانية وسوق العلوي.' } },
      { name: { en: 'The Corniche', ar: 'الكورنيش' }, desc: { en: 'A Red Sea waterfront promenade past the King Fahd Fountain and the Floating Mosque.', ar: 'ممشى على واجهة البحر الأحمر يمر بنافورة الملك فهد والمسجد العائم.' } },
      { name: { en: 'Obhur', ar: 'أبحر' }, desc: { en: 'A northern coastal district known for beach chalets, about 30 km from downtown.', ar: 'حي ساحلي شمالي يشتهر بالشاليهات الشاطئية، على بعد نحو ٣٠ كم من وسط المدينة.' } },
    ],
    status: 'serviced',
    heroImage: '/location/jeddah.webp',
    gradient: ['#073042', '#0e5b74'],
    icon: 'Waves',
    serviceLinks: [
      { href: '/jeddah-taxi-service', label: { en: 'Jeddah Taxi Service', ar: 'خدمة تاكسي جدة' } },
    ],
  },
  {
    id: 'taif',
    name: { en: 'Taif', ar: 'الطائف' },
    region: { en: 'The Mountain Retreat', ar: 'المصيف الجبلي' },
    tagline: { en: 'Cooler highland air, rose farms and mountain roads above the Hejaz plain.', ar: 'هواء جبلي أكثر برودة، ومزارع ورد، وطرق جبلية تعلو سهل الحجاز.' },
    summary: {
      en: 'Perched above Makkah and Jeddah on the Hejaz mountains, Taif has long been a seasonal retreat from the heat, known for its rose harvest, the Al-Hada viewpoints, and the 19th-century Shubra Palace.',
      ar: 'تقع الطائف فوق جبال الحجاز، وتُعد منذ زمن طويل مصيفاً موسمياً هرباً من الحر، وتشتهر بموسم قطف الورد ومناظر طريق الهدا الجبلي وقصر شُبرا الذي يعود للقرن التاسع عشر.',
    },
    highlights: [
      { name: { en: 'Al-Hada & Al-Shafa', ar: 'الهدا وشفا' }, desc: { en: 'Winding mountain roads with viewpoints and a noticeably cooler climate than the coast.', ar: 'طرق جبلية متعرجة بمناظر خلابة ومناخ أكثر برودة بوضوح من الساحل.' } },
      { name: { en: 'Rose Farms', ar: 'مزارع الورد' }, desc: { en: "Taif's famous Damask rose harvest runs roughly from February to April.", ar: 'موسم قطف الورد الطائفي الشهير يمتد تقريباً من فبراير إلى أبريل.' } },
      { name: { en: 'Shubra Palace', ar: 'قصر شبرا' }, desc: { en: 'A 19th-century Ottoman-era palace in the city, now preserved as a museum.', ar: 'قصر يعود للعهد العثماني في القرن التاسع عشر، ويُحفظ اليوم كمتحف.' } },
    ],
    status: 'serviced',
    heroImage: '/location/taif.webp',
    gradient: ['#3a2a1a', '#6b4226'],
    icon: 'Mountain',
    serviceLinks: [
      { href: '/taif-taxi-service', label: { en: 'Taif Taxi Service', ar: 'خدمة تاكسي الطائف' } },
    ],
  },
  {
    id: 'riyadh',
    name: { en: 'Riyadh', ar: 'الرياض' },
    region: { en: 'The Modern Capital', ar: 'العاصمة الحديثة' },
    tagline: { en: "Where restored mud-brick history meets one of the region's fastest-growing skylines.", ar: 'حيث يلتقي التاريخ الطيني المُرمم بأحد أسرع آفاق المدن نمواً في المنطقة.' },
    summary: {
      en: 'Riyadh pairs its historic core — Masmak Fortress and the National Museum — with a fast-changing modern city of towers, boulevards and seasonal events.',
      ar: 'تجمع الرياض بين نواتها التاريخية — قلعة المصمك والمتحف الوطني — ومدينة حديثة سريعة التغير من الأبراج والبوليفارد والفعاليات الموسمية.',
    },
    highlights: [
      { name: { en: 'Masmak Fortress', ar: 'قلعة المصمك' }, desc: { en: 'A 19th-century clay-and-mudbrick fort central to the founding of modern Saudi Arabia.', ar: 'حصن طيني من القرن التاسع عشر له دور محوري في تأسيس المملكة الحديثة.' } },
      { name: { en: 'National Museum', ar: 'المتحف الوطني' }, desc: { en: 'A well-regarded overview of Arabian Peninsula history, from pre-Islamic times to today.', ar: 'عرض شامل ومُقدَّر لتاريخ الجزيرة العربية، من العصور ما قبل الإسلام إلى اليوم.' } },
      { name: { en: 'Edge of the World', ar: 'حافة العالم' }, desc: { en: 'A dramatic desert escarpment outside the city — a popular day trip, though the hike itself is usually arranged through specialized desert-tour operators rather than a standard taxi route.', ar: 'هضبة صحراوية مثيرة خارج المدينة — رحلة نهارية شائعة، إلا أن المسار الصحراوي نفسه يُرتَّب عادة عبر متخصصين في الجولات الصحراوية لا عبر خط تاكسي عادي.' } },
    ],
    status: 'serviced',
    gradient: ['#1b2735', '#28384d'],
    icon: 'Building2',
    serviceLinks: [
      { href: '/riyadh-taxi-service', label: { en: 'Riyadh Taxi Service', ar: 'خدمة تاكسي الرياض' } },
    ],
  },
  {
    id: 'diriyah',
    name: { en: 'Diriyah', ar: 'الدرعية' },
    region: { en: 'Birthplace of the First Saudi State', ar: 'مهد الدولة السعودية الأولى' },
    tagline: { en: "A restored mud-brick city on Riyadh's edge, and one of Saudi Arabia's most important heritage sites.", ar: 'مدينة طينية مُرممة على أطراف الرياض، وأحد أهم المواقع التراثية في المملكة.' },
    summary: {
      en: "Just northwest of central Riyadh, Diriyah's At-Turaif District is a UNESCO World Heritage Site — the restored 18th-century seat of the first Saudi state, now surrounded by the restaurants and walkways of Bujairi Terrace.",
      ar: 'تقع منطقة الطريف في الدرعية شمال غرب وسط الرياض، وهي مسجلة في قائمة التراث العالمي لليونسكو — المقر المُرمم للدولة السعودية الأولى في القرن الثامن عشر، وتحيط به اليوم مطاعم وممرات حي البجيري.',
    },
    highlights: [
      { name: { en: 'At-Turaif District', ar: 'حي الطريف' }, desc: { en: 'The restored historic core of Diriyah — a UNESCO World Heritage Site.', ar: 'النواة التاريخية المُرممة للدرعية — مسجلة في التراث العالمي لليونسكو.' } },
      { name: { en: 'Bujairi Terrace', ar: 'حي البجيري' }, desc: { en: 'A dining and walkway district facing At-Turaif across the Wadi Hanifah valley.', ar: 'حي مطاعم وممرات يواجه حي الطريف عبر وادي حنيفة.' } },
    ],
    goodToKnow: { en: 'Diriyah is a short trip from central Riyadh, arranged as part of a Riyadh booking rather than its own route.', ar: 'تبعد الدرعية مسافة قصيرة عن وسط الرياض، ويمكن ترتيب الزيارة كجزء من حجز الرياض وليس كخط مستقل.' },
    status: 'serviced',
    gradient: ['#4a3420', '#7a5230'],
    icon: 'Building',
    serviceLinks: [
      { href: '/riyadh-taxi-service', label: { en: 'Arrange via Riyadh Taxi Service', ar: 'رتب الزيارة عبر خدمة تاكسي الرياض' } },
    ],
  },
  {
    id: 'dammam',
    name: { en: 'Dammam', ar: 'الدمام' },
    region: { en: 'The Gulf Coast', ar: 'ساحل الخليج' },
    tagline: { en: "The Eastern Province's waterfront hub, facing the Arabian Gulf.", ar: 'مركز المنطقة الشرقية الساحلي، على ضفاف الخليج العربي.' },
    summary: {
      en: 'Dammam and neighboring Khobar form Saudi Arabia\'s main Gulf-coast urban area, with a long Corniche, family-friendly waterfront parks, and easy access to the King Fahd Causeway toward Bahrain.',
      ar: 'تشكل الدمام والخبر المجاورة لها المركز الحضري الرئيسي على ساحل الخليج في المملكة، وتضمان كورنيشاً طويلاً وحدائق ساحلية مناسبة للعائلات، إضافة إلى سهولة الوصول إلى جسر الملك فهد المتجه إلى البحرين.',
    },
    highlights: [
      { name: { en: 'Dammam Corniche', ar: 'كورنيش الدمام' }, desc: { en: 'A long Gulf-front waterfront promenade with parks and family spots.', ar: 'ممشى طويل على واجهة الخليج يضم حدائق ومرافق عائلية.' } },
      { name: { en: 'Half Moon Bay', ar: 'نصف القمر' }, desc: { en: 'A popular beach area south of Khobar, known for its curved shoreline.', ar: 'منطقة شاطئية شائعة جنوب الخبر، تشتهر بخط ساحلها المنحني.' } },
      { name: { en: 'King Fahd Causeway', ar: 'جسر الملك فهد' }, desc: { en: 'The road link to Bahrain, about 50 km from central Dammam.', ar: 'الطريق الرابط مع البحرين، على مسافة نحو ٥٠ كم من وسط الدمام.' } },
    ],
    status: 'serviced',
    gradient: ['#063449', '#0a6a8a'],
    icon: 'Waves',
    serviceLinks: [
      { href: '/dammam-taxi-service', label: { en: 'Dammam Taxi Service', ar: 'خدمة تاكسي الدمام' } },
    ],
  },
  {
    id: 'alula',
    name: { en: 'AlUla', ar: 'العلا' },
    region: { en: "Saudi Arabia's Open-Air Museum", ar: 'متحف المملكة المفتوح' },
    tagline: { en: 'Ancient Nabataean tombs carved into sandstone, among the Kingdom\'s most striking landscapes.', ar: 'مقابر نبطية منحوتة في الصخر الرملي، وسط أحد أكثر المناظر الطبيعية إثارة في المملكة.' },
    summary: {
      en: "AlUla is home to Hegra, Saudi Arabia's first UNESCO World Heritage Site and the Nabataean civilization's southern capital, alongside striking formations like Elephant Rock and the AlUla Old Town ruins.",
      ar: 'تضم العلا مدائن صالح (الحِجر)، أول موقع تراث عالمي لليونسكو في المملكة والعاصمة الجنوبية للحضارة النبطية، إلى جانب تكوينات صخرية مذهلة كصخرة الفيل وآثار بلدة العلا القديمة.',
    },
    highlights: [
      { name: { en: "Hegra (Mada'in Salih)", ar: 'مدائن صالح (الحِجر)' }, desc: { en: "Saudi Arabia's first UNESCO World Heritage Site — monumental Nabataean tombs carved into sandstone.", ar: 'أول موقع تراث عالمي لليونسكو في المملكة — مقابر نبطية ضخمة منحوتة في الصخر الرملي.' } },
      { name: { en: 'Elephant Rock', ar: 'صخرة الفيل' }, desc: { en: "A naturally sculpted sandstone formation, one of AlUla's best-known landmarks.", ar: 'تكوين صخري رملي منحوت طبيعياً، من أشهر معالم العلا.' } },
      { name: { en: 'AlUla Old Town', ar: 'بلدة العلا القديمة' }, desc: { en: 'A historic mudbrick settlement inhabited for centuries, now open to visitors.', ar: 'مستوطنة طينية تاريخية كانت مأهولة لقرون، وهي اليوم مفتوحة للزوار.' } },
    ],
    goodToKnow: { en: "AlUla is well outside our regular service area. If you'd like to arrange a long-distance private transfer there, contact us on WhatsApp to check feasibility and routing before booking.", ar: 'تقع العلا خارج نطاق خدمتنا المعتاد. إذا كنت ترغب في ترتيب رحلة خاصة طويلة إليها، تواصل معنا عبر واتساب للتحقق من إمكانية التنفيذ ومسار الرحلة قبل الحجز.' },
    status: 'serviced',
    gradient: ['#5c3a2e', '#a85c3f'],
    icon: 'Map',
    serviceLinks: [],
    whatsappCta: true,
  },
  {
    id: 'abha',
    name: { en: 'Abha', ar: 'أبها' },
    region: { en: 'The Green Mountains of the South', ar: 'جبال الجنوب الخضراء' },
    tagline: { en: "Highland scenery and a cooler climate in Saudi Arabia's southwest.", ar: 'مناظر جبلية مرتفعة ومناخ أكثر برودة في جنوب غرب المملكة.' },
    summary: {
      en: 'Perched in the Asir Mountains, Abha is known for a noticeably cooler climate, green highland scenery that\'s rare in Saudi Arabia, and the Al Soudah cable car overlooking the surrounding valleys.',
      ar: 'تقع أبها في جبال عسير، وتشتهر بمناخ أكثر برودة بشكل ملحوظ ومناظر جبلية خضراء نادرة في المملكة، إضافة إلى تلفريك السودة المطل على الوديان المحيطة.',
    },
    highlights: [
      { name: { en: 'Asir National Park', ar: 'منتزه عسير الوطني' }, desc: { en: 'Highland terrain, cooler weather and hiking trails across the Asir escarpment.', ar: 'تضاريس جبلية ومناخ أكثر برودة ومسارات تنزه عبر منحدرات عسير.' } },
      { name: { en: 'Al Soudah', ar: 'السودة' }, desc: { en: "Home to Saudi Arabia's highest peak area and a cable car with valley views.", ar: 'موطن أعلى منطقة قمم في المملكة، ويضم تلفريكاً بمناظر للوديان.' } },
      { name: { en: 'Abha Lake Park', ar: 'حديقة بحيرة أبها' }, desc: { en: 'A lakeside park in the city, popular in the cooler months.', ar: 'حديقة على بحيرة في المدينة، شائعة في الأشهر الأكثر برودة.' } },
    ],
    goodToKnow: { en: "Abha is well outside our regular service area. If you'd like to arrange a long-distance private transfer there, contact us on WhatsApp to check feasibility and routing before booking.", ar: 'تقع أبها خارج نطاق خدمتنا المعتاد. إذا كنت ترغب في ترتيب رحلة خاصة طويلة إليها، تواصل معنا عبر واتساب للتحقق من إمكانية التنفيذ ومسار الرحلة قبل الحجز.' },
    status: 'serviced',
    gradient: ['#1c3d2a', '#2f6b45'],
    icon: 'Mountain',
    serviceLinks: [],
    whatsappCta: true,
  },
]

export interface DestinationFaq { q: BText; a: BText }

export const destinationFaqs: DestinationFaq[] = [
  {
    q: { en: 'Which destinations can I book a private transfer to right now?', ar: 'إلى أي الوجهات يمكنني حجز توصيل خاص الآن؟' },
    a: { en: 'Makkah, Madinah, Jeddah, Taif, Riyadh (including day trips to nearby Diriyah) and Dammam all have active Saudi Cabs GMC service. AlUla and Abha are outside our regular coverage — contact us on WhatsApp to check feasibility before booking.', ar: 'تتوفر خدمة Saudi Cabs GMC النشطة في مكة والمدينة وجدة والطائف والرياض (بما يشمل رحلات نهارية إلى الدرعية القريبة) والدمام. أما العلا وأبها فهما خارج نطاق تغطيتنا المعتاد — تواصل معنا عبر واتساب للتحقق من إمكانية التنفيذ قبل الحجز.' },
  },
  {
    q: { en: 'Is Makkah open to non-Muslim visitors?', ar: 'هل مكة المكرمة مفتوحة للزوار غير المسلمين؟' },
    a: { en: 'No. Makkah is restricted to Muslims only, and our Makkah routes and Ziyarat tours serve Muslim travelers exclusively.', ar: 'لا. مكة المكرمة مقتصرة على المسلمين فقط، وتخدم خطوطنا وجولات الزيارة فيها المسافرين المسلمين دون غيرهم.' },
  },
  {
    q: { en: 'Can I visit Diriyah as a day trip from Riyadh?', ar: 'هل يمكنني زيارة الدرعية كرحلة نهارية من الرياض؟' },
    a: { en: 'Yes — Diriyah\'s At-Turaif District and Bujairi Terrace sit just outside central Riyadh and are typically visited as part of a Riyadh booking rather than a separate route.', ar: 'نعم — يقع حي الطريف وحي البجيري في الدرعية على أطراف وسط الرياض، وتتم زيارتهما عادة كجزء من حجز الرياض وليس كخط منفصل.' },
  },
  {
    q: { en: 'Do you offer private transport to AlUla or Abha?', ar: 'هل تقدمون نقلاً خاصاً إلى العلا أو أبها؟' },
    a: { en: 'Both are well outside our regular service area. We do not advertise a fixed route or price for either, but you are welcome to contact us on WhatsApp to discuss feasibility for a custom long-distance trip.', ar: 'كلتا الوجهتين تقعان خارج نطاق خدمتنا المعتاد. لا نعرض خطاً أو سعراً ثابتاً لأي منهما، لكن يمكنك التواصل معنا عبر واتساب لمناقشة إمكانية تنظيم رحلة مخصصة طويلة المسافة.' },
  },
  {
    q: { en: "What's the best time to visit Taif for the rose season?", ar: 'ما أفضل وقت لزيارة الطائف في موسم الورد؟' },
    a: { en: "Taif's Damask rose harvest runs roughly from February to April, alongside cooler highland weather than the coast year-round.", ar: 'يمتد موسم قطف الورد الطائفي تقريباً من فبراير إلى أبريل، إلى جانب مناخ جبلي أكثر برودة من الساحل على مدار العام.' },
  },
]
