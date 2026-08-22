export interface BlogPost {
  slug: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  content: { en: string; ar: string };
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-travel-jeddah-airport-to-makkah',
    title: {
      en: 'How to Travel from Jeddah Airport to Makkah: Train vs Taxi',
      ar: 'كيفية السفر من مطار جدة إلى مكة: القطار مقابل التاكسي',
    },
    excerpt: {
      en: 'A complete guide for Umrah pilgrims arriving at King Abdulaziz International Airport.',
      ar: 'دليل شامل للمعتمرين القادمين إلى مطار الملك عبدالعزيز الدولي.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">You just landed at King Abdulaziz International Airport (KAIA) in Jeddah and Makkah is calling. You have two main options: the Haramain High-Speed Train or a private taxi. Here is everything you need to know to make the right choice.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Option 1 — Haramain High-Speed Train</h2>
<p style="margin-bottom:1rem;">The Haramain Train runs between Jeddah and Makkah in around 55 minutes. It is modern, air-conditioned, and runs several times a day.</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Journey time:</strong> ~55 minutes Jeddah Station to Makkah Station</li>
  <li style="margin-bottom:0.5rem;"><strong>Cost:</strong> SAR 45–100 depending on class</li>
  <li style="margin-bottom:0.5rem;"><strong>Problem 1:</strong> The Jeddah train station is NOT at the airport — you need a separate taxi to reach it (~20 min, SAR 40–60)</li>
  <li style="margin-bottom:0.5rem;"><strong>Problem 2:</strong> Makkah Train Station is in Al-Rusayfah area — still need another taxi to your hotel</li>
  <li style="margin-bottom:0.5rem;"><strong>Problem 3:</strong> Tickets sell out weeks in advance during Ramadan and Hajj season</li>
  <li style="margin-bottom:0.5rem;"><strong>Problem 4:</strong> Managing heavy luggage on platforms and in carriages is exhausting</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Option 2 — Private Taxi (Recommended for Families)</h2>
<p style="margin-bottom:1rem;">A private cab meets you directly at the arrivals hall with a name board, loads your luggage, and drops you at the exact door of your hotel in Makkah. No connections, no platforms, no waiting.</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Journey time:</strong> ~50–70 minutes depending on traffic</li>
  <li style="margin-bottom:0.5rem;"><strong>Cost:</strong> Fixed SAR price agreed in advance — no meter, no surprises</li>
  <li style="margin-bottom:0.5rem;"><strong>Door-to-door:</strong> Arrivals hall at KAIA directly to your hotel in Makkah</li>
  <li style="margin-bottom:0.5rem;"><strong>Flight tracking:</strong> Your driver monitors your flight — if delayed, he waits at no extra charge</li>
  <li style="margin-bottom:0.5rem;"><strong>Available 24/7:</strong> Land at 3 AM after a long journey — your driver is already there</li>
  <li style="margin-bottom:0.5rem;"><strong>Luggage included:</strong> Zamzam bottles, strollers, large bags — all handled</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Which Vehicle Should You Book?</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>1–3 passengers:</strong> Standard sedan (most affordable)</li>
  <li style="margin-bottom:0.5rem;"><strong>4–7 passengers:</strong> Hyundai Staria — spacious, high roof, sliding doors (great for elderly)</li>
  <li style="margin-bottom:0.5rem;"><strong>VIP groups:</strong> GMC Yukon — leather seats, built-in cooler, premium comfort</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Verdict: Train vs Taxi</h2>
<p style="margin-bottom:1rem;">For solo travelers with minimal luggage, the train is a fine option if you book tickets well in advance. For families, elderly pilgrims, groups with luggage, or anyone arriving outside peak train hours — a private taxi from Jeddah Airport to Makkah is the clear winner. It is simpler, door-to-door, and often works out cheaper once you factor in the taxi to/from the station.</p>

<p style="margin-bottom:1rem;"><strong>Saudi Cabs GMC</strong> operates 24/7 with fixed prices, flight tracking, and professional bilingual drivers. Book via WhatsApp at least 24 hours before your arrival.</p>`,
      ar: `<p style="margin-bottom:1rem;">وصلت للتو إلى مطار الملك عبدالعزيز الدولي في جدة ومكة المكرمة تناديك. لديك خياران رئيسيان: قطار الحرمين السريع أو التاكسي الخاص. إليك كل ما تحتاج معرفته لاتخاذ القرار الصحيح.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">الخيار الأول — قطار الحرمين السريع</h2>
<p style="margin-bottom:1rem;">يقطع قطار الحرمين المسافة بين جدة ومكة في نحو 55 دقيقة. إنه حديث ومكيّف ويعمل عدة مرات يومياً.</p>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>مشكلة 1:</strong> محطة جدة للقطار ليست في المطار — تحتاج تاكسي منفصلاً للوصول إليها</li>
  <li style="margin-bottom:0.5rem;"><strong>مشكلة 2:</strong> محطة مكة في الرصيفة — ستحتاج تاكسياً آخر للفندق</li>
  <li style="margin-bottom:0.5rem;"><strong>مشكلة 3:</strong> تذاكره تنفد أسابيع مسبقاً في رمضان والحج</li>
  <li style="margin-bottom:0.5rem;"><strong>مشكلة 4:</strong> حمل الأمتعة الثقيلة على الأرصفة مرهق جداً</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">الخيار الثاني — التاكسي الخاص (مُوصى به للعائلات)</h2>
<p style="margin-bottom:1rem;">الكاب الخاص يستقبلك في صالة الوصول بلوحة باسمك، يحمل أمتعتك، ويوصلك لباب فندقك في مكة مباشرةً. بدون تنقلات، بدون انتظار.</p>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>وقت الرحلة:</strong> 50–70 دقيقة حسب الحركة المرورية</li>
  <li style="margin-bottom:0.5rem;"><strong>سعر ثابت:</strong> متفق عليه مسبقاً — بدون عداد أو مفاجآت</li>
  <li style="margin-bottom:0.5rem;"><strong>تتبع الرحلة:</strong> سائقك يتابع رحلتك — في حال التأخير ينتظر بدون رسوم إضافية</li>
  <li style="margin-bottom:0.5rem;"><strong>متاح 24/7:</strong> هبطت الساعة 3 صباحاً؟ سائقك موجود</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">الحكم النهائي</h2>
<p style="margin-bottom:1rem;">للعائلات والحجاج وكبار السن وأصحاب الأمتعة الثقيلة — التاكسي الخاص من مطار جدة إلى مكة هو الخيار الأوضح. أبسط، من الباب للباب، وغالباً أرخص حين تحسب تكاليف التنقل من وإلى محطة القطار.</p>

<p style="margin-bottom:1rem;"><strong>Saudi Cabs GMC</strong> تعمل 24/7 بأسعار ثابتة وتتبع للرحلات وسائقين محترفين ثنائيي اللغة. احجز عبر واتساب قبل وصولك بـ 24 ساعة على الأقل.</p>`,
    },
    date: '2026-05-01',
    image: '/location/makkah.webp',
  },
  {
    slug: 'best-places-makkah-ziyarat',
    title: {
      en: 'Top 5 Historical Places to Visit During Makkah Ziyarat',
      ar: 'أفضل 5 أماكن تاريخية لزيارتها خلال جولة مكة',
    },
    excerpt: {
      en: 'Discover the most important Islamic historical sites to visit during your stay in Makkah.',
      ar: 'اكتشف أهم المواقع الإسلامية التاريخية لزيارتها أثناء إقامتك في مكة.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">Visiting Makkah for Umrah or Hajj is a once-in-a-lifetime spiritual experience. Beyond the Holy Mosque itself, the city holds dozens of historical Islamic sites that carry deep significance. Here are the top 5 Ziyarat locations every pilgrim should visit — and how to reach them.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">1. Jabal al-Nour — Cave of Hira (غار حراء)</h2>
<p style="margin-bottom:1rem;">Perhaps the most spiritually significant site outside the Haram. This is where Angel Jibreel (AS) delivered the first revelation of the Quran to Prophet Muhammad ﷺ in 610 CE. The mountain is a 45-minute climb (about 1,300 steps). Visit early morning to avoid the midday heat.</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Distance from Haram:</strong> ~4 km north</li>
  <li style="margin-bottom:0.5rem;"><strong>Best time to visit:</strong> Before 8 AM or after Asr</li>
  <li style="margin-bottom:0.5rem;"><strong>Taxi tip:</strong> Ask your driver to wait — the climb takes 1–1.5 hours round trip</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">2. Jabal Thawr — Cave of Thawr (غار ثور)</h2>
<p style="margin-bottom:1rem;">This is where the Prophet ﷺ and his companion Abu Bakr al-Siddiq (RA) took refuge for three days during the Hijra migration to Madinah in 622 CE. The mountain is south of Makkah and steeper than Jabal al-Nour — plan at least 2 hours for the climb.</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Distance from Haram:</strong> ~6 km south</li>
  <li style="margin-bottom:0.5rem;"><strong>Difficulty:</strong> More challenging than Jabal al-Nour — bring water</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">3. Plain of Arafat (عرفات)</h2>
<p style="margin-bottom:1rem;">The standing at Arafat (Wuquf) on the 9th of Dhul Hijjah is the central pillar of Hajj — without it, Hajj is not complete. The plain can accommodate over two million pilgrims. Jabal al-Rahmah (Mountain of Mercy) rises from the plain where Adam and Eve are said to have reunited after descending from Paradise.</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Distance from Haram:</strong> ~20 km east</li>
  <li style="margin-bottom:0.5rem;"><strong>When to visit outside Hajj:</strong> Any time — many pilgrims visit for du\'a</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">4. Muzdalifah & Mina</h2>
<p style="margin-bottom:1rem;">Muzdalifah is where pilgrims spend the night after Arafat and collect pebbles for the symbolic stoning of the devil (Rami al-Jamarat) in Mina. The Jamarat Bridge in Mina is one of the largest structures in the world, built to accommodate the massive flow of Hajj pilgrims during the ritual stoning.</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Muzdalifah distance:</strong> ~12 km from Makkah</li>
  <li style="margin-bottom:0.5rem;"><strong>Mina distance:</strong> ~8 km from Makkah</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">5. Jannat al-Mualla (مقبرة المعلاة)</h2>
<p style="margin-bottom:1rem;">This ancient cemetery, located near the Masjid al-Haram, is the resting place of many of the Prophet\'s ﷺ closest relatives including Sayyidah Khadijah (RA), his first wife, and Abdul Muttalib, his grandfather. It is a deeply moving site for any pilgrim.</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Distance from Haram:</strong> Walking distance — ~10 minutes</li>
  <li style="margin-bottom:0.5rem;"><strong>Opening hours:</strong> Open after Fajr and Asr prayers</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">How to Visit All 5 Sites in One Day</h2>
<p style="margin-bottom:1rem;">Book a dedicated Ziyarat tour vehicle with Saudi Cabs GMC. Our drivers know every site, the best entry points, and the ideal visiting sequence to avoid congestion. A full Makkah Ziyarat tour (all 5 sites) typically takes 6–8 hours. WhatsApp us at +92 309 7811785 to arrange a private guide driver for your group.</p>`,
      ar: `<p style="margin-bottom:1rem;">زيارة مكة المكرمة للعمرة أو الحج هي تجربة روحية لا تُنسى. فضلاً عن المسجد الحرام، تضم المدينة عشرات المواقع الإسلامية التاريخية التي تحمل دلالات عميقة. إليك أبرز 5 مواقع زيارة يجب على كل حاج ومعتمر الذهاب إليها.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">1. جبل النور — غار حراء</h2>
<p style="margin-bottom:1rem;">من أعظم المواقع الروحية خارج الحرم. هنا نزل الوحي الأول على النبي محمد ﷺ عام 610م عندما جاءه جبريل عليه السلام بأول آيات القرآن الكريم. يستغرق الصعود نحو 45 دقيقة (~1300 درجة). يُنصح بالزيارة في الصباح الباكر.</p>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>المسافة عن الحرم:</strong> ~4 كم شمالاً</li>
  <li style="margin-bottom:0.5rem;"><strong>نصيحة:</strong> اطلب من السائق الانتظار — الصعود يستغرق 1–1.5 ساعة ذهاباً وإياباً</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">2. جبل ثور — غار ثور</h2>
<p style="margin-bottom:1rem;">الغار الذي اختبأ فيه النبي ﷺ وأبو بكر الصديق رضي الله عنه ثلاثة أيام أثناء الهجرة عام 622م. يقع جنوب مكة وهو أصعب صعوداً من جبل النور.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">3. سهل عرفات</h2>
<p style="margin-bottom:1rem;">الوقوف بعرفات في التاسع من ذي الحجة هو ركن الحج الأعظم — لا حج بدونه. يمتد السهل لاستيعاب أكثر من مليوني حاج، ويتوسطه جبل الرحمة.</p>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>المسافة عن الحرم:</strong> ~20 كم شرقاً</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">4. مزدلفة ومنى</h2>
<p style="margin-bottom:1rem;">في مزدلفة يبيت الحجاج ليلة العاشر من ذي الحجة ويجمعون حصى الجمرات. في منى يؤدون رمي الجمرات على جسر الجمرات العملاق الذي صُمِّم لاستيعاب ملايين الحجاج.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">5. مقبرة المعلاة</h2>
<p style="margin-bottom:1rem;">من أعرق مقابر مكة، تضم رفات السيدة خديجة رضي الله عنها زوج النبي ﷺ الأولى، وعبد المطلب جده. تقع على مقربة من المسجد الحرام وتفتح بعد صلاتي الفجر والعصر.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">كيف تزور المواقع الخمسة في يوم واحد</h2>
<p style="margin-bottom:1rem;">احجز سيارة جولة زيارات خاصة مع Saudi Cabs GMC. سائقونا يعرفون كل موقع وأفضل الأوقات والمسارات لتجنب الازدحام. جولة الزيارات الكاملة تستغرق 6–8 ساعات. تواصل معنا عبر واتساب: 923097811785+</p>`,
    },
    date: '2026-04-15',
    image: '/location/makkah.webp',
  },
  // ── Article 3 ────────────────────────────────────────────────────
  {
    slug: 'haramain-train-vs-private-taxi-makkah-madinah',
    title: {
      en: 'Haramain Train vs Private Taxi: Which is Better for Makkah to Madinah?',
      ar: 'قطار الحرمين مقابل التاكسي الخاص: أيهما أفضل من مكة إلى المدينة؟',
    },
    excerpt: {
      en: 'A detailed comparison to help Umrah pilgrims choose the best transport between Makkah and Madinah.',
      ar: 'مقارنة تفصيلية تساعد المعتمرين على اختيار أفضل وسيلة نقل بين مكة والمدينة.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">One of the most common questions for Umrah pilgrims is: <strong>Should I take the Haramain Train or a private taxi from Makkah to Madinah?</strong> The answer depends on your group size, luggage, and how you want to travel.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Quick Answer</h2>
<p style="margin-bottom:1rem;">For families with luggage, elderly pilgrims, or groups of 3+, a <strong>private taxi is more convenient</strong>. For solo travelers or couples traveling light, the train can be faster.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Haramain High-Speed Train</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Speed:</strong> ~2.5 hours (much faster than driving)</li>
  <li style="margin-bottom:0.5rem;"><strong>Con:</strong> You must travel to the train station — not door-to-door</li>
  <li style="margin-bottom:0.5rem;"><strong>Con:</strong> Luggage is your responsibility on the platform and train</li>
  <li style="margin-bottom:0.5rem;"><strong>Con:</strong> Tickets must be booked in advance and often sell out during peak season</li>
  <li style="margin-bottom:0.5rem;"><strong>Con:</strong> Drops you at Makkah Station — still need another taxi to your hotel</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Private Taxi (Saudi Cabs GMC)</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Door-to-door:</strong> Pickup from your Makkah hotel, drop-off at your Madinah hotel</li>
  <li style="margin-bottom:0.5rem;"><strong>Luggage:</strong> Driver loads and unloads — no extra charge</li>
  <li style="margin-bottom:0.5rem;"><strong>Schedule:</strong> Depart whenever you want — even at 2 AM after Tahajjud</li>
  <li style="margin-bottom:0.5rem;"><strong>Prayer stops:</strong> Stop for Salah and meals along the way</li>
  <li style="margin-bottom:0.5rem;"><strong>Fixed price:</strong> Agreed before departure — no surprises</li>
  <li style="margin-bottom:0.5rem;"><strong>Journey time:</strong> ~4.5 hours</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Verdict</h2>
<p style="margin-bottom:1rem;">For most pilgrims — especially families and those with luggage — a private cab from Makkah to Madinah offers more convenience, comfort, and true door-to-door service. The extra 2 hours is worth the peace of mind.</p>`,
      ar: `<p style="margin-bottom:1rem;">من أكثر الأسئلة شيوعاً بين المعتمرين: <strong>هل أركب قطار الحرمين أم أخذ تاكسي خاص من مكة إلى المدينة؟</strong> تعتمد الإجابة على حجم مجموعتك وأمتعتك وطريقة سفرك المفضلة.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">الإجابة السريعة</h2>
<p style="margin-bottom:1rem;">للعائلات والحجاج كبار السن أو المجموعات من 3 أشخاص فأكثر، <strong>التاكسي الخاص أكثر راحةً</strong>. للمسافرين المنفردين أو الأزواج بأمتعة خفيفة، قد يكون القطار أسرع.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">قطار الحرمين السريع</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>السرعة:</strong> ~2.5 ساعة (أسرع بكثير من القيادة)</li>
  <li style="margin-bottom:0.5rem;"><strong>عيب:</strong> يجب التنقل إلى المحطة — ليس من الباب للباب</li>
  <li style="margin-bottom:0.5rem;"><strong>عيب:</strong> الأمتعة على عاتقك على الرصيف وداخل القطار</li>
  <li style="margin-bottom:0.5rem;"><strong>عيب:</strong> تذاكره تنفد سريعاً في المواسم</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">التاكسي الخاص (Saudi Cabs GMC)</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>من الباب للباب:</strong> استلام من فندقك بمكة وتوصيل لفندقك بالمدينة</li>
  <li style="margin-bottom:0.5rem;"><strong>الأمتعة:</strong> السائق يحمّل ويفرّغ — مجاناً</li>
  <li style="margin-bottom:0.5rem;"><strong>المواعيد:</strong> انطلق وقتما تشاء</li>
  <li style="margin-bottom:0.5rem;"><strong>توقفات الصلاة:</strong> نتوقف للصلاة والوجبات على الطريق</li>
  <li style="margin-bottom:0.5rem;"><strong>سعر ثابت:</strong> متفق عليه مسبقاً</li>
</ul>`,
    },
    date: '2026-05-02',
    image: '/location/madinah.webp',
  },
  // ── Article 4 ────────────────────────────────────────────────────
  {
    slug: 'hajj-transport-guide-2026',
    title: {
      en: 'Hajj Transport Guide 2026: How to Book Private Cab for Hajj in Saudi Arabia',
      ar: 'دليل نقل الحج 2026: كيفية حجز كاب خاص للحج في المملكة',
    },
    excerpt: {
      en: 'Everything you need to know about booking reliable private transport for Hajj 2026.',
      ar: 'كل ما تحتاج معرفته لحجز وسيلة نقل موثوقة لموسم الحج 2026.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">Hajj season brings millions of pilgrims to Saudi Arabia, making transport one of the most critical logistics to plan. Here is a complete guide to booking private cab transport for Hajj 2026.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Why Book Private Cab for Hajj?</h2>
<p style="margin-bottom:1rem;">During Hajj, public transport is overcrowded and schedules are unpredictable. A private cab gives you:</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">Guaranteed seat — no waiting in queues</li>
  <li style="margin-bottom:0.5rem;">Door-to-door pickup from your hotel in Makkah or Madinah</li>
  <li style="margin-bottom:0.5rem;">Flexible timing — travel after Fajr, Isha, or any time you choose</li>
  <li style="margin-bottom:0.5rem;">Space for Hajj luggage without extra charges</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Key Routes During Hajj 2026</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Jeddah Airport → Makkah</strong> — ~90 km, ~1 hour</li>
  <li style="margin-bottom:0.5rem;"><strong>Makkah → Madinah</strong> — ~430 km, ~4.5 hours</li>
  <li style="margin-bottom:0.5rem;"><strong>Madinah → Makkah</strong> — ~430 km, ~4.5 hours</li>
  <li style="margin-bottom:0.5rem;"><strong>Makkah → Jeddah Airport</strong> — ~90 km, ~1 hour</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">How to Book — 3 Steps</h2>
<ol style="padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">WhatsApp Saudi Cabs GMC at +92 309 7811785</li>
  <li style="margin-bottom:0.5rem;">Share your pickup location, destination, date, time, and group size</li>
  <li style="margin-bottom:0.5rem;">Receive your fixed price confirmation and driver details</li>
</ol>

<p style="margin-bottom:1rem;"><strong>Book at least 2–4 weeks in advance</strong> during Hajj season to guarantee availability.</p>`,
      ar: `<p style="margin-bottom:1rem;">يُقبل ملايين الحجاج على المملكة في موسم الحج، مما يجعل وسيلة النقل من أهم الأمور التي يجب التخطيط لها مسبقاً. إليك الدليل الكامل لحجز نقل خاص لحج 2026.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">لماذا تحجز كاباً خاصاً للحج؟</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">مقعد مضمون — بدون انتظار في الطوابير</li>
  <li style="margin-bottom:0.5rem;">استلام من الباب للباب من فندقك</li>
  <li style="margin-bottom:0.5rem;">مرونة في المواعيد — سافر في أي وقت</li>
  <li style="margin-bottom:0.5rem;">مساحة للأمتعة بدون رسوم إضافية</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">كيفية الحجز — 3 خطوات</h2>
<ol style="padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">تواصل مع Saudi Cabs GMC عبر واتساب: 923097811785+</li>
  <li style="margin-bottom:0.5rem;">أرسل موقع الاستلام والوجهة والتاريخ وعدد الركاب</li>
  <li style="margin-bottom:0.5rem;">استلم تأكيد السعر الثابت وبيانات السائق</li>
</ol>`,
    },
    date: '2026-05-02',
    image: '/location/makkah.webp',
  },
  // ── Article 5 ────────────────────────────────────────────────────
  {
    slug: 'riyadh-to-makkah-complete-guide',
    title: {
      en: 'Riyadh to Makkah by Taxi: Complete 2026 Travel Guide',
      ar: 'من الرياض إلى مكة بالتاكسي: الدليل الشامل 2026',
    },
    excerpt: {
      en: 'Everything you need to know about the 900 km private cab journey from Riyadh to Makkah.',
      ar: 'كل ما تحتاج معرفته عن رحلة الكاب الخاص على مسافة 900 كم من الرياض إلى مكة.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">Traveling from Riyadh to Makkah by private taxi is the most popular long-distance pilgrim route in Saudi Arabia. Here is everything you need to know.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Key Facts</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Distance:</strong> ~900 km</li>
  <li style="margin-bottom:0.5rem;"><strong>Drive time:</strong> 8–9 hours</li>
  <li style="margin-bottom:0.5rem;"><strong>Route:</strong> Via the Riyadh–Makkah Expressway (Highway 40)</li>
  <li style="margin-bottom:0.5rem;"><strong>Best time to travel:</strong> After Isha prayer to avoid daytime traffic</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Is Private Taxi the Best Option?</h2>
<p style="margin-bottom:1rem;">Yes — for families and pilgrims with luggage, a private cab from Riyadh to Makkah is far more convenient than buses or flights. You get door-to-door service, flexible departure time, and prayer stops along the route.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Best Vehicle for Riyadh to Makkah</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Sedan:</strong> For 1–3 passengers traveling light</li>
  <li style="margin-bottom:0.5rem;"><strong>Hyundai Staria:</strong> For families up to 7 with luggage</li>
  <li style="margin-bottom:0.5rem;"><strong>GMC Yukon:</strong> VIP comfort for long journeys — built-in cooler, leather seats</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Tips for a Comfortable Journey</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">Book at least 48 hours in advance</li>
  <li style="margin-bottom:0.5rem;">Travel at night — cooler and less traffic</li>
  <li style="margin-bottom:0.5rem;">Plan prayer stops at highway rest areas</li>
  <li style="margin-bottom:0.5rem;">Carry water and light snacks for the 8-hour journey</li>
</ul>`,
      ar: `<p style="margin-bottom:1rem;">يُعدّ السفر من الرياض إلى مكة بالكاب الخاص أشهر خطوط الحجاج لمسافات طويلة في المملكة. إليك كل ما تحتاج معرفته.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">أبرز المعلومات</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>المسافة:</strong> ~900 كم</li>
  <li style="margin-bottom:0.5rem;"><strong>وقت الرحلة:</strong> 8–9 ساعات</li>
  <li style="margin-bottom:0.5rem;"><strong>أفضل وقت للسفر:</strong> بعد صلاة العشاء لتجنب الازدحام</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">أفضل سيارة للرحلة</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>سيدان:</strong> لـ 1–3 ركاب بأمتعة خفيفة</li>
  <li style="margin-bottom:0.5rem;"><strong>ستاريا:</strong> للعائلات حتى 7 أشخاص مع أمتعة</li>
  <li style="margin-bottom:0.5rem;"><strong>GMC يوكون:</strong> راحة VIP للرحلات الطويلة</li>
</ul>`,
    },
    date: '2026-05-02',
    image: '/location/makkah.webp',
  },
  // ── Article 6 ────────────────────────────────────────────────────
  {
    slug: 'gmc-yukon-vs-staria-family-umrah',
    title: {
      en: 'GMC Yukon vs Hyundai Staria: Best Vehicle for Family Umrah in Saudi Arabia',
      ar: 'GMC يوكون مقابل هيونداي ستاريا: أفضل سيارة للعمرة العائلية',
    },
    excerpt: {
      en: 'Choosing the right vehicle for your family Umrah trip. A side-by-side comparison of Saudi Cabs GMC fleet.',
      ar: 'اختيار السيارة المناسبة لرحلة عمرتك العائلية. مقارنة جنباً إلى جنب لأسطول Saudi Cabs GMC.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">Planning a family Umrah trip in Saudi Arabia? Choosing the right vehicle is key to a comfortable pilgrimage. Saudi Cabs GMC offers two 7-seat options: the GMC Yukon and the Hyundai Staria.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">GMC Yukon — VIP Luxury SUV</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Seats:</strong> 7 passengers (VIP)</li>
  <li style="margin-bottom:0.5rem;"><strong>Features:</strong> Built-in cooler, giant touchscreen, premium leather seats</li>
  <li style="margin-bottom:0.5rem;"><strong>Best for:</strong> VIP families, long-distance routes (Riyadh–Makkah), business travelers</li>
  <li style="margin-bottom:0.5rem;"><strong>Luggage:</strong> Large boot for Hajj bags</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Hyundai Staria — Spacious Family Van</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Seats:</strong> 7 passengers (comfortable)</li>
  <li style="margin-bottom:0.5rem;"><strong>Features:</strong> High roof, panoramic windows, sliding doors (easy for elderly)</li>
  <li style="margin-bottom:0.5rem;"><strong>Best for:</strong> Families with children, elderly pilgrims, groups with heavy luggage</li>
  <li style="margin-bottom:0.5rem;"><strong>Luggage:</strong> Very generous rear cargo space</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Which Should You Choose?</h2>
<p style="margin-bottom:1rem;">Choose the <strong>GMC Yukon</strong> if you want maximum luxury and premium comfort. Choose the <strong>Hyundai Staria</strong> if you have elderly family members (easier to enter/exit), small children, or very heavy luggage. Both are fixed price with Saudi Cabs GMC — contact via WhatsApp to confirm availability.</p>`,
      ar: `<p style="margin-bottom:1rem;">تخطط لرحلة عمرة عائلية في المملكة؟ اختيار السيارة المناسبة هو مفتاح حج مريح. تقدم Saudi Cabs GMC خيارين بـ 7 مقاعد: GMC يوكون وهيونداي ستاريا.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">GMC يوكون — SUV فاخرة</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>المقاعد:</strong> 7 ركاب (VIP)</li>
  <li style="margin-bottom:0.5rem;"><strong>المميزات:</strong> مبرد مدمج، شاشة لمس عملاقة، مقاعد جلدية فاخرة</li>
  <li style="margin-bottom:0.5rem;"><strong>الأنسب لـ:</strong> العائلات VIP، الرحلات الطويلة، رجال الأعمال</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">هيونداي ستاريا — فان العائلة</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>المقاعد:</strong> 7 ركاب</li>
  <li style="margin-bottom:0.5rem;"><strong>المميزات:</strong> سقف مرتفع، نوافذ بانورامية، أبواب منزلقة (سهلة لكبار السن)</li>
  <li style="margin-bottom:0.5rem;"><strong>الأنسب لـ:</strong> العائلات مع أطفال أو كبار سن، المجموعات بأمتعة ثقيلة</li>
</ul>`,
    },
    date: '2026-05-02',
    image: '/fleet/gmc-yukon-interior-rear-seats-saudi-cabs-gmc.webp',
  },
  {
    slug: 'hajj-2026-transport-makkah-traffic-tips',
    title: {
      en: 'Hajj 2026 Transport: 3 Things No One Tells You About Makkah Traffic',
      ar: 'نقل الحج 2026: 3 أشياء لا يخبرك بها أحد عن زحمة مكة',
    },
    excerpt: {
      en: 'Planning your Hajj 2026 trip? Avoid these 3 common transport mistakes that could cost you hours in traffic.',
      ar: 'هل تخطط لرحلة الحج 2026؟ تجنب هذه الأخطاء الثلاثة الشائعة في النقل التي قد تكلفك ساعات في الزحام.',
    },
    content: {
      en: '<p style="margin-bottom: 1rem;">Hajj is the journey of a lifetime, but the logistics can be overwhelming. As we look toward Hajj 2026, traffic management in Makkah is becoming more complex. Here are 3 things no one tells you about navigating the Holy City during peak season.</p><h2 style="font-size: 1.5rem; margin: 1.5rem 0 1rem;">1. The "Hidden" Road Closures</h2><p style="margin-bottom: 1rem;">During the peak days of Hajj, many roads around the Haram area are restricted to authorized vehicles only. A normal taxi might get blocked, but professional services like Saudi Cabs GMC have specialized knowledge of back-routes and authorized drop-off points.</p><h2 style="font-size: 1.5rem; margin: 1.5rem 0 1rem;">2. Timing is Everything</h2><p style="margin-bottom: 1rem;">Traveling between 10:00 AM and 4:00 PM is often a recipe for gridlock. The most successful pilgrims schedule their intercity transfers (Makkah to Madinah or Riyadh to Makkah) during late-night or very early morning hours.</p><h2 style="font-size: 1.5rem; margin: 1.5rem 0 1rem;">3. Luggage Logistics</h2><p style="margin-bottom: 1rem;">Standard sedans often struggle with the amount of luggage Hajj pilgrims carry. Booking a GMC Yukon or Hyundai Staria is not just about luxury—it is about ensuring all your belongings (including Zamzam bottles) fit comfortably without extra stress.</p>',
      ar: '<p style="margin-bottom: 1rem;">الحج هو رحلة العمر، لكن الخدمات اللوجستية قد تكون مرهقة. بينما نتطلع إلى حج 2026، تصبح إدارة المرور في مكة أكثر تعقيداً. إليك 3 أشياء لا يخبرك بها أحد عن التنقل في المدينة المقدسة خلال موسم الذروة.</p><h2 style="font-size: 1.5rem; margin: 1.5rem 0 1rem;">1. إغلاق الطرق "المخفية"</h2><p style="margin-bottom: 1rem;">خلال أيام الذروة في الحج، تقتصر العديد من الطرق حول منطقة الحرم على المركبات المصرح لها فقط. قد يتم حظر التاكسي العادي، لكن الخدمات الاحترافية مثل Saudi Cabs GMC لديها معرفة متخصصة بالطرق الخلفية ونقاط الإنزال المصرح بها.</p><h2 style="font-size: 1.5rem; margin: 1.5rem 0 1rem;">2. التوقيت هو كل شيء</h2><p style="margin-bottom: 1rem;">غالباً ما يكون السفر بين الساعة 10:00 صباحاً و4:00 مساءً سبباً في الازدحام المروري. يحدد الحجاج الأكثر نجاحاً انتقالاتهم بين المدن (من مكة إلى المدينة أو من الرياض إلى مكة) خلال ساعات الليل المتأخرة أو الصباح الباكر جداً.</p><h2 style="font-size: 1.5rem; margin: 1.5rem 0 1rem;">3. لوجستيات الأمتعة</h2><p style="margin-bottom: 1rem;">غالباً ما تواجه سيارات السيدان العادية صعوبة في كمية الأمتعة التي يحملها الحجاج. إن حجز GMC Yukon أو Hyundai Staria ليس مجرد رفاهية - بل يتعلق بضمان ملاءمة جميع متعلقاتك (بما في ذلك عبوات زمزم) بشكل مريح دون ضغوط إضافية.</p>',
    },
    date: '2026-05-03',
    image: '/location/makkah.webp',
  },
  {
    slug: 'taxi-madinah-to-makkah-what-to-expect',
    title: {
      en: 'Taxi from Madinah to Makkah: What to Expect on the Journey',
      ar: 'التاكسي من المدينة المنورة إلى مكة المكرمة: ماذا تتوقع في الرحلة',
    },
    excerpt: {
      en: 'A practical guide to the 430 km road journey between the two holy cities — the Miqat stop, timing, and what to look for in a private taxi.',
      ar: 'دليل عملي لرحلة 430 كم البرية بين الحرمين الشريفين — نقطة الميقات، التوقيت، وما يجب البحث عنه في تاكسي خاص.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">Traveling from Madinah to Makkah is one of the most common journeys for pilgrims and travelers in Saudi Arabia. Whether you are heading to perform Umrah after visiting the Prophet's Mosque, or simply moving between the two holy cities, here is exactly what to expect from a private taxi journey.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">The Route at a Glance</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Distance:</strong> Approximately 430 km via the main highway</li>
  <li style="margin-bottom:0.5rem;"><strong>Duration:</strong> Around 4 to 4.5 hours by private car, traffic and prayer-time stops included</li>
  <li style="margin-bottom:0.5rem;"><strong>Road type:</strong> Modern, well-maintained highway connecting the two Harams</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Don't Forget the Miqat</h2>
<p style="margin-bottom:1rem;">If you are entering Ihram for Umrah, you must do so before passing the Miqat. For travelers departing from Madinah, that point is Masjid Dhul-Hulayfah (commonly known as Abyar Ali), located a few kilometers outside the city on the road to Makkah. A good driver will know exactly where this is and can stop so you have time to change into Ihram and pray two rakats before continuing.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">What the Journey Looks Like</h2>
<p style="margin-bottom:1rem;">Most of the drive is desert highway, with a handful of rest stops along the way for prayer, food, and fuel. A private driver will usually plan the trip around Salah times, so you are not stuck in the car during Dhuhr or Asr. Night departures are popular — cooler temperatures and lighter traffic make for a smoother ride, and you can arrive in Makkah in time for Fajr at the Haram.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Choosing Your Vehicle</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>1–3 passengers:</strong> A standard sedan is the most economical choice for the long highway drive</li>
  <li style="margin-bottom:0.5rem;"><strong>4–7 passengers:</strong> Hyundai Staria — more legroom for a multi-hour trip, easier for elderly pilgrims to get in and out</li>
  <li style="margin-bottom:0.5rem;"><strong>Groups wanting comfort:</strong> GMC Yukon — extra luggage space for Ihram bags, Zamzam bottles, and suitcases</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Private Taxi vs Shared Transport</h2>
<p style="margin-bottom:1rem;">Shared buses and vans wait to fill every seat before departing, and make multiple stops along the way. A private taxi leaves on your schedule, drives directly with only your group's stops, and drops you at your exact Makkah hotel rather than a shared terminal — a meaningful difference on a 4+ hour trip with luggage and, often, elderly family members.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Tips for a Comfortable Trip</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">Book at least a day in advance during Ramadan, Hajj season, or public holidays</li>
  <li style="margin-bottom:0.5rem;">Agree on the fixed price and vehicle type before the trip starts — no meter, no surprises</li>
  <li style="margin-bottom:0.5rem;">Pack a small bag with your Ihram, water, and snacks within easy reach for the Miqat stop</li>
  <li style="margin-bottom:0.5rem;">Consider a night departure if you want to arrive in Makkah for Fajr</li>
</ul>

<p style="margin-bottom:1rem;"><strong>Saudi Cabs GMC</strong> runs the Madinah to Makkah route daily with fixed prices, a Miqat stop built into the journey, and a full range of vehicles from sedan to VIP SUV. Message us on WhatsApp to book your transfer.</p>`,
      ar: `<p style="margin-bottom:1rem;">السفر من المدينة المنورة إلى مكة المكرمة من أكثر الرحلات شيوعاً للحجاج والمعتمرين والمسافرين في المملكة العربية السعودية. سواء كنت متجهاً لأداء العمرة بعد زيارة المسجد النبوي، أو تنتقل ببساطة بين الحرمين، إليك بالضبط ما يجب توقعه من رحلة تاكسي خاص.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">نظرة عامة على الطريق</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>المسافة:</strong> حوالي 430 كم عبر الطريق السريع الرئيسي</li>
  <li style="margin-bottom:0.5rem;"><strong>المدة:</strong> من 4 إلى 4.5 ساعة بالسيارة الخاصة، مع احتساب الزحام وتوقفات الصلاة</li>
  <li style="margin-bottom:0.5rem;"><strong>نوع الطريق:</strong> طريق سريع حديث ومُعتنى به يربط بين الحرمين الشريفين</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">لا تنسَ الميقات</h2>
<p style="margin-bottom:1rem;">إذا كنت تنوي الإحرام للعمرة، يجب عليك ذلك قبل تجاوز الميقات. لأهل المدينة والمنطلقين منها، الميقات هو مسجد ذي الحليفة (المعروف بأبيار علي)، ويقع على بعد كيلومترات قليلة خارج المدينة على طريق مكة. السائق الجيد يعرف بالضبط مكانه ويمكنه التوقف لمنحك وقتاً لارتداء الإحرام وصلاة ركعتين قبل المتابعة.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">كيف تبدو الرحلة</h2>
<p style="margin-bottom:1rem;">معظم الطريق صحراوي سريع، مع عدد من محطات الاستراحة للصلاة والطعام والوقود. عادةً ما يخطط السائق الخاص للرحلة حول أوقات الصلاة، حتى لا تبقى في السيارة وقت الظهر أو العصر. الانطلاق ليلاً شائع — درجات حرارة أبرد وحركة مرور أخف، مما يجعل الرحلة أكثر سلاسة، ويمكنك الوصول إلى مكة في وقت صلاة الفجر في الحرم.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">اختيار السيارة المناسبة</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>1–3 ركاب:</strong> السيدان العادية هي الخيار الأكثر اقتصادية للرحلة الطويلة</li>
  <li style="margin-bottom:0.5rem;"><strong>4–7 ركاب:</strong> هيونداي ستاريا — مساحة أرجل أكبر لرحلة تمتد لساعات، وأسهل لكبار السن</li>
  <li style="margin-bottom:0.5rem;"><strong>للمجموعات الباحثة عن الراحة:</strong> GMC يوكن — مساحة إضافية لحقائب الإحرام وعبوات زمزم والأمتعة</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">التاكسي الخاص مقابل النقل المشترك</h2>
<p style="margin-bottom:1rem;">الحافلات والفانات المشتركة تنتظر امتلاء جميع المقاعد قبل الانطلاق، وتتوقف عدة مرات في الطريق. أما التاكسي الخاص فينطلق في الوقت الذي تحدده، ويسير مباشرة بتوقفات مجموعتك فقط، ويوصلك إلى فندقك في مكة مباشرة بدلاً من محطة مشتركة — فرق مهم في رحلة تتجاوز 4 ساعات مع الأمتعة، وغالباً مع أفراد كبار في السن.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">نصائح لرحلة مريحة</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">احجز قبل يوم على الأقل خلال رمضان وموسم الحج والعطلات الرسمية</li>
  <li style="margin-bottom:0.5rem;">اتفق على السعر الثابت ونوع السيارة قبل بدء الرحلة — بدون عداد ولا مفاجآت</li>
  <li style="margin-bottom:0.5rem;">جهّز حقيبة صغيرة بالإحرام والماء والوجبات الخفيفة في متناول يدك لتوقف الميقات</li>
  <li style="margin-bottom:0.5rem;">فكر في الانطلاق ليلاً إذا أردت الوصول إلى مكة في وقت صلاة الفجر</li>
</ul>

<p style="margin-bottom:1rem;"><strong>Saudi Cabs GMC</strong> تشغّل خط المدينة المنورة - مكة المكرمة يومياً بأسعار ثابتة، مع توقف عند الميقات ضمن الرحلة، ومجموعة كاملة من السيارات من السيدان إلى الـ SUV الفاخرة. راسلنا عبر واتساب لحجز رحلتك.</p>`,
    },
    date: '2026-08-22',
    image: '/location/madinah.webp',
  },
];
