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
  {
    slug: 'how-much-does-a-taxi-cost-in-saudi-arabia',
    title: {
      en: 'How Much Does a Taxi Cost in Saudi Arabia? 2026 Price Guide',
      ar: 'كم تكلفة التاكسي في السعودية؟ دليل الأسعار 2026',
    },
    excerpt: {
      en: 'A plain-language breakdown of what actually affects a taxi fare in Saudi Arabia — vehicle type, distance, and why fixed pricing beats a meter.',
      ar: 'شرح مبسّط لما يحدد سعر التاكسي فعلياً في السعودية — نوع السيارة والمسافة، ولماذا السعر الثابت أفضل من العداد.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">"How much will it cost?" is the first question almost every traveler asks before booking a taxi in Saudi Arabia. With Saudi Cabs GMC there's no meter and no surprise — the price is agreed before the trip starts. Here's exactly what determines that price.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">1. Vehicle Type is the Biggest Factor</h2>
<p style="margin-bottom:1rem;">The same route costs different amounts depending on which vehicle you choose:</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Sedan (4 seats):</strong> The most economical option, ideal for solo travelers and couples</li>
  <li style="margin-bottom:0.5rem;"><strong>Hyundai Staria (7 seats):</strong> Mid-range pricing, more space for families and luggage</li>
  <li style="margin-bottom:0.5rem;"><strong>GMC Yukon (7 seats, VIP):</strong> The premium option — leather seats, extra comfort for long drives</li>
</ul>
<p style="margin-bottom:1rem;">For example, Jeddah Airport to Makkah runs 330 SAR in the sedan, 380 SAR in the Staria, and 530 SAR in the GMC Yukon — the route is identical, only the vehicle changes the price.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">2. Distance Matters More Than Traffic</h2>
<p style="margin-bottom:1rem;">Because the price is fixed before departure, traffic, waiting time, and time of day don't change what you pay. What does change the price is the actual distance of the route:</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Short city routes</strong> (e.g. Jeddah to Makkah, ~90 km): typically the lowest fares</li>
  <li style="margin-bottom:0.5rem;"><strong>Airport transfers to a further city</strong> (e.g. Jeddah Airport to Madinah, ~420 km): priced higher for the longer highway drive</li>
  <li style="margin-bottom:0.5rem;"><strong>Intercity routes</strong> (e.g. Makkah to Madinah, ~430 km): a mid-to-long fare reflecting the full highway trip</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">3. Ziyarat & Tour Packages Are Priced Differently</h2>
<p style="margin-bottom:1rem;">A Ziyarat tour (visiting several historical Islamic sites in one trip) isn't priced like a point-to-point transfer — it covers multiple stops and waiting time at each site, so it's quoted as its own package rather than a simple distance fare. Ask for the current Ziyarat package rate when you book.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">4. Why Fixed Pricing Beats a Meter</h2>
<p style="margin-bottom:1rem;">A metered taxi can run up the fare in slow traffic, at red lights, or by taking a longer route. With a fixed price agreed in advance:</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">You know the exact cost before you get in the car</li>
  <li style="margin-bottom:0.5rem;">Traffic jams and route changes don't cost you extra</li>
  <li style="margin-bottom:0.5rem;">The price is per vehicle, not per passenger — a family of 5 pays the same as a solo traveler</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">How to Get an Exact Price</h2>
<p style="margin-bottom:1rem;">Prices are updated from time to time, so the most reliable way to get today's exact rate for your route is to message Saudi Cabs GMC on WhatsApp with your pickup, destination, and preferred vehicle. You'll get a confirmed price back in minutes — no obligation, no meter, no hidden fees.</p>`,
      ar: `<p style="margin-bottom:1rem;">"كم ستكون التكلفة؟" هو أول سؤال يطرحه تقريباً كل مسافر قبل حجز تاكسي في السعودية. مع Saudi Cabs GMC لا يوجد عداد ولا مفاجآت — يتم الاتفاق على السعر قبل بدء الرحلة. إليك بالضبط ما يحدد ذلك السعر.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">1. نوع السيارة هو العامل الأكبر</h2>
<p style="margin-bottom:1rem;">نفس الطريق يكلف مبالغ مختلفة حسب السيارة التي تختارها:</p>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>سيدان (٤ مقاعد):</strong> الخيار الأكثر اقتصادية، مثالي للأفراد والأزواج</li>
  <li style="margin-bottom:0.5rem;"><strong>هيونداي ستاريا (٧ مقاعد):</strong> سعر متوسط، مساحة أكبر للعائلات والأمتعة</li>
  <li style="margin-bottom:0.5rem;"><strong>GMC يوكن (٧ مقاعد، VIP):</strong> الخيار الفاخر — مقاعد جلدية وراحة إضافية للرحلات الطويلة</li>
</ul>
<p style="margin-bottom:1rem;">على سبيل المثال، مطار جدة إلى مكة يكلف 330 ريال بالسيدان، و380 ريال بالستاريا، و530 ريال بالـ GMC يوكن — نفس الطريق تماماً، السيارة فقط هي ما يغيّر السعر.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">2. المسافة أهم من الزحام</h2>
<p style="margin-bottom:1rem;">بما أن السعر ثابت ومتفق عليه قبل الانطلاق، فإن الزحام ووقت الانتظار ووقت اليوم لا تغيّر ما تدفعه. ما يغيّر السعر فعلياً هو المسافة الفعلية للطريق:</p>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>الطرق القصيرة داخل المدن</strong> (مثل جدة - مكة، ~90 كم): عادةً أقل الأسعار</li>
  <li style="margin-bottom:0.5rem;"><strong>توصيل المطار لمدينة أبعد</strong> (مثل مطار جدة - المدينة المنورة، ~420 كم): سعر أعلى لطول الطريق السريع</li>
  <li style="margin-bottom:0.5rem;"><strong>الطرق بين المدن</strong> (مثل مكة - المدينة، ~430 كم): سعر متوسط إلى طويل يعكس الرحلة الكاملة</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">3. باقات الزيارات لها تسعير مختلف</h2>
<p style="margin-bottom:1rem;">جولة الزيارات (زيارة عدة مواقع إسلامية تاريخية في رحلة واحدة) لا تُسعَّر مثل التوصيل من نقطة لنقطة — فهي تشمل عدة توقفات ووقت انتظار عند كل موقع، لذا تُحدَّد كباقة خاصة بها بدلاً من سعر مسافة بسيط. اسأل عن سعر باقة الزيارات الحالي عند الحجز.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">4. لماذا السعر الثابت أفضل من العداد</h2>
<p style="margin-bottom:1rem;">التاكسي بالعداد قد يرفع السعر في الزحام أو عند الإشارات أو بسلوك طريق أطول. مع سعر ثابت متفق عليه مسبقاً:</p>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">تعرف التكلفة الدقيقة قبل ركوب السيارة</li>
  <li style="margin-bottom:0.5rem;">الزحام وتغيير المسار لا يكلفانك أي رسوم إضافية</li>
  <li style="margin-bottom:0.5rem;">السعر لكل سيارة وليس لكل راكب — عائلة من 5 أفراد تدفع نفس سعر المسافر الفردي</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">كيف تحصل على السعر الدقيق</h2>
<p style="margin-bottom:1rem;">الأسعار تُحدَّث من وقت لآخر، لذا أفضل طريقة للحصول على السعر الدقيق الحالي لرحلتك هي مراسلة Saudi Cabs GMC عبر واتساب مع تحديد نقطة الانطلاق والوجهة والسيارة المفضلة. ستحصل على سعر مؤكد خلال دقائق — بدون التزام، بدون عداد، وبدون رسوم خفية.</p>`,
    },
    date: '2026-08-22',
    image: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp',
  },
  {
    slug: 'best-time-travel-makkah-madinah-private-car',
    title: {
      en: 'Best Time to Travel Makkah to Madinah by Private Car',
      ar: 'أفضل وقت للسفر من مكة إلى المدينة بسيارة خاصة',
    },
    excerpt: {
      en: 'Timing your Makkah–Madinah drive well makes a real difference — here\'s how time of day, season, and the Islamic calendar affect the trip.',
      ar: 'اختيار الوقت المناسب لرحلة مكة - المدينة يُحدث فرقاً حقيقياً — إليك كيف يؤثر وقت اليوم والموسم والتقويم الهجري على الرحلة.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">The 430 km drive between Makkah and Madinah takes roughly the same 4 to 4.5 hours regardless of when you leave — but when you leave still makes a real difference to how comfortable the trip is. Here's how to time it well.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Time of Day: Night vs Day</h2>
<p style="margin-bottom:1rem;">Both options work, but each has a different feel:</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Night departure:</strong> Cooler temperatures, lighter highway traffic, and — if you leave from Madinah after Isha — you can arrive in Makkah in time to rest before Fajr at the Haram. Popular with pilgrims who want to sleep through most of the drive.</li>
  <li style="margin-bottom:0.5rem;"><strong>Daytime departure:</strong> Easier for families with young children on a normal schedule, and you can see the desert landscape along the way. Plan for a stop or two around Dhuhr or Asr for prayer.</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Season: Cooler Months Are Easier on the Road</h2>
<p style="margin-bottom:1rem;">Saudi Arabia's summer (roughly June to August) brings very high daytime temperatures on the highway between the two cities. A private car with working air conditioning handles this fine, but a daytime summer drive is noticeably more tiring than the same trip in winter (November to February), when temperatures are far more comfortable for rest stops and prayer breaks along the way.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">The Islamic Calendar Changes Everything</h2>
<p style="margin-bottom:1rem;">The single biggest factor isn't the clock — it's the Hijri calendar:</p>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>Last 10 days of Ramadan:</strong> Extremely high pilgrim traffic in both cities. Book your car well in advance and expect busier highways.</li>
  <li style="margin-bottom:0.5rem;"><strong>Hajj season:</strong> The heaviest travel period of the year around Makkah. If your trip isn't Hajj-related, avoid traveling in and out of Makkah during the peak days if you can.</li>
  <li style="margin-bottom:0.5rem;"><strong>Regular Umrah season (outside Ramadan/Hajj):</strong> The most relaxed time to travel — shorter waits, more flexible scheduling, and easier hotel availability at both ends.</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Build Prayer Times Into Your Schedule</h2>
<p style="margin-bottom:1rem;">A private driver will typically plan stops around Dhuhr, Asr, Maghrib, or Isha depending on when you depart, rather than rushing straight through. If you have a specific prayer-time preference, mention it when you book so your driver can plan the stops accordingly.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Our Recommendation</h2>
<p style="margin-bottom:1rem;">If your schedule is flexible, a night departure outside Ramadan and Hajj season is the most comfortable combination — cooler weather, quieter highway, and a rested arrival. If you're traveling during a peak period, simply book a few days ahead and build in extra time for busier roads near the cities.</p>

<p style="margin-bottom:1rem;"><strong>Saudi Cabs GMC</strong> runs the Makkah–Madinah route at any hour, any day, with a fixed price agreed before you travel. Message us on WhatsApp to lock in your preferred departure time.</p>`,
      ar: `<p style="margin-bottom:1rem;">رحلة الـ430 كم بين مكة المكرمة والمدينة المنورة تستغرق تقريباً نفس الـ4 إلى 4.5 ساعة بغض النظر عن وقت الانطلاق — لكن وقت الانطلاق لا يزال يُحدث فرقاً حقيقياً في راحة الرحلة. إليك كيف تختار التوقيت المناسب.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">وقت اليوم: ليلاً أم نهاراً</h2>
<p style="margin-bottom:1rem;">كلا الخيارين جيد، لكن لكل منهما طابعه الخاص:</p>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>الانطلاق ليلاً:</strong> درجات حرارة أبرد وحركة مرور أخف على الطريق السريع — وإذا انطلقت من المدينة بعد صلاة العشاء، يمكنك الوصول إلى مكة في وقت يتيح لك الراحة قبل صلاة الفجر في الحرم. خيار شائع لمن يريد النوم خلال معظم الرحلة.</li>
  <li style="margin-bottom:0.5rem;"><strong>الانطلاق نهاراً:</strong> أسهل للعائلات ذات الأطفال الصغار وفق جدول طبيعي، ويمكنك رؤية المناظر الصحراوية على الطريق. خطط لتوقف أو اثنين حول الظهر أو العصر للصلاة.</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">الموسم: الأشهر الباردة أسهل على الطريق</h2>
<p style="margin-bottom:1rem;">صيف السعودية (تقريباً من يونيو إلى أغسطس) يجلب درجات حرارة نهارية مرتفعة جداً على الطريق السريع بين المدينتين. السيارة الخاصة بتكييف جيد تتعامل مع هذا بسهولة، لكن رحلة نهارية صيفية أكثر إرهاقاً بشكل ملحوظ من نفس الرحلة في الشتاء (نوفمبر إلى فبراير)، حين تكون درجات الحرارة أكثر ملاءمة لتوقفات الراحة والصلاة على الطريق.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">التقويم الهجري يغيّر كل شيء</h2>
<p style="margin-bottom:1rem;">العامل الأكبر ليس الساعة — بل التقويم الهجري:</p>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;"><strong>العشر الأواخر من رمضان:</strong> حركة حجاج ومعتمرين عالية جداً في كلا المدينتين. احجز سيارتك مسبقاً وتوقع طرقاً أكثر ازدحاماً.</li>
  <li style="margin-bottom:0.5rem;"><strong>موسم الحج:</strong> أكثر فترات السفر ازدحاماً في العام حول مكة المكرمة. إذا لم تكن رحلتك متعلقة بالحج، تجنب السفر من وإلى مكة خلال الأيام الذروة إن أمكن.</li>
  <li style="margin-bottom:0.5rem;"><strong>موسم العمرة العادي (خارج رمضان والحج):</strong> أهدأ وقت للسفر — انتظار أقل ومرونة أكبر في الجدولة وتوفر أسهل للفنادق في كلا الطرفين.</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">خطط لأوقات الصلاة ضمن جدولك</h2>
<p style="margin-bottom:1rem;">عادةً ما يخطط السائق الخاص للتوقفات حول الظهر أو العصر أو المغرب أو العشاء حسب وقت انطلاقك، بدلاً من السير المباشر دون توقف. إذا كان لديك تفضيل معين بخصوص وقت الصلاة، اذكره عند الحجز حتى يخطط سائقك للتوقفات وفقاً لذلك.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">توصيتنا</h2>
<p style="margin-bottom:1rem;">إذا كان جدولك مرناً، فالانطلاق ليلاً خارج رمضان وموسم الحج هو الخيار الأكثر راحة — طقس أبرد وطريق أهدأ ووصول بعد راحة كافية. إذا كنت تسافر خلال فترة ذروة، فقط احجز قبل أيام وخصص وقتاً إضافياً للطرق الأكثر ازدحاماً قرب المدينتين.</p>

<p style="margin-bottom:1rem;"><strong>Saudi Cabs GMC</strong> تشغّل خط مكة - المدينة في أي ساعة وأي يوم، بسعر ثابت متفق عليه قبل السفر. راسلنا عبر واتساب لتحديد وقت انطلاقك المفضل.</p>`,
    },
    date: '2026-08-22',
    image: '/location/makkah.webp',
  },
  {
    slug: 'umrah-checklist-transport-hotels-packing',
    title: {
      en: 'Umrah Checklist: Transport, Hotels & What to Pack',
      ar: 'قائمة تحقق العمرة: النقل والفنادق وماذا تحزم',
    },
    excerpt: {
      en: 'A practical, no-fluff checklist covering the three things that make or break a smooth Umrah trip — how you\'ll move around, where you\'ll stay, and what\'s in your bag.',
      ar: 'قائمة تحقق عملية تغطي الأمور الثلاثة التي تحدد سلاسة رحلة العمرة — كيف تتنقل، وأين تقيم، وماذا في حقيبتك.',
    },
    content: {
      en: `<p style="margin-bottom:1rem;">Umrah planning has a lot of moving parts, but most of them fall into three buckets: getting around, where you sleep, and what you bring. Here's a practical checklist for each.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Transport Checklist</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">☐ Decide your Miqat point before you fly — if you're flying into Jeddah, you'll usually enter Ihram on the plane or shortly before landing; if you're coming from Madinah, it's Masjid Dhul-Hulayfah (Abyar Ali)</li>
  <li style="margin-bottom:0.5rem;">☐ Book your airport pickup in advance, especially during Ramadan and Hajj season when demand is high</li>
  <li style="margin-bottom:0.5rem;">☐ Have your flight number ready when you book — it lets your driver track your landing and adjust for delays</li>
  <li style="margin-bottom:0.5rem;">☐ Pick the right vehicle for your group size: sedan for 1–3, Hyundai Staria for families of 4–7, GMC Yukon for extra comfort or VIP groups</li>
  <li style="margin-bottom:0.5rem;">☐ Confirm the fixed price for each leg of your trip before you travel (airport transfer, Makkah–Madinah, any Ziyarat tours) so there are no surprises</li>
  <li style="margin-bottom:0.5rem;">☐ Save your driver's WhatsApp number so you can reach them directly for pickup times or changes</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Hotel Checklist</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">☐ In Makkah, decide how close to the Haram you want to be — Ajyad and Misfalah are walking distance, while Al-Aziziyah is more affordable but a short ride away</li>
  <li style="margin-bottom:0.5rem;">☐ In Madinah, the Central Area around Masjid an-Nabawi puts you within walking distance of the mosque</li>
  <li style="margin-bottom:0.5rem;">☐ Share your hotel name and room number with your driver in advance for smooth pickup and drop-off</li>
  <li style="margin-bottom:0.5rem;">☐ Book hotels early if traveling during Ramadan or Hajj season — availability drops fast and prices rise</li>
  <li style="margin-bottom:0.5rem;">☐ Confirm your check-in time against your arrival time so your ride doesn't drop you off hours before your room is ready</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">What to Pack</h2>
<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">☐ Ihram clothing (2 sets recommended for men), plus a small bag to carry it separately for the Miqat stop</li>
  <li style="margin-bottom:0.5rem;">☐ Comfortable, easy-to-remove sandals for the many times you'll enter and exit the mosque</li>
  <li style="margin-bottom:0.5rem;">☐ A small daypack for your phone, wallet, and prayer mat that you can carry on foot around the Haram</li>
  <li style="margin-bottom:0.5rem;">☐ Unscented toiletries (required in the state of Ihram)</li>
  <li style="margin-bottom:0.5rem;">☐ A printed or downloaded copy of your flight and hotel confirmations, in case you lose signal</li>
  <li style="margin-bottom:0.5rem;">☐ Empty space or a foldable bag for Zamzam water and gifts on the way back — this affects which vehicle you should book (the GMC Yukon and Staria have more luggage room than a sedan)</li>
  <li style="margin-bottom:0.5rem;">☐ A portable charger — you'll use your phone heavily for prayer times, maps, and staying in touch with your driver</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">Putting It Together</h2>
<p style="margin-bottom:1rem;">Sort your transport and hotel bookings first, since your Ihram timing and packing depend on your route (flying into Jeddah vs Madinah changes your Miqat point). Once those are set, packing is straightforward — pack light, keep Ihram accessible, and leave room in your bag for the trip home.</p>

<p style="margin-bottom:1rem;"><strong>Saudi Cabs GMC</strong> handles airport pickups, Makkah–Madinah transfers, and Ziyarat tours with fixed prices agreed before you travel. Message us on WhatsApp with your flight details to arrange your Umrah transport in advance.</p>`,
      ar: `<p style="margin-bottom:1rem;">التخطيط للعمرة يتضمن الكثير من التفاصيل، لكن معظمها يقع تحت ثلاثة محاور: التنقل، والإقامة، وما تحزمه. إليك قائمة تحقق عملية لكل محور.</p>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">قائمة التنقل</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">☐ حدد نقطة الميقات قبل السفر — إذا كنت قادماً عبر جدة، ستحرم غالباً في الطائرة أو قبل الهبوط بقليل؛ وإذا كنت قادماً من المدينة المنورة، فالميقات هو مسجد ذي الحليفة (أبيار علي)</li>
  <li style="margin-bottom:0.5rem;">☐ احجز استقبالك من المطار مسبقاً، خاصة خلال رمضان وموسم الحج حين يكون الطلب مرتفعاً</li>
  <li style="margin-bottom:0.5rem;">☐ جهّز رقم رحلتك الجوية عند الحجز — يتيح لسائقك متابعة وقت هبوطك والتكيف مع أي تأخير</li>
  <li style="margin-bottom:0.5rem;">☐ اختر السيارة المناسبة لحجم مجموعتك: سيدان لـ1-3 أشخاص، هيونداي ستاريا للعائلات من 4-7، GMC يوكن لراحة إضافية أو مجموعات VIP</li>
  <li style="margin-bottom:0.5rem;">☐ أكّد السعر الثابت لكل مرحلة من رحلتك (توصيل المطار، مكة - المدينة، أي جولات زيارات) قبل السفر حتى لا تكون هناك مفاجآت</li>
  <li style="margin-bottom:0.5rem;">☐ احفظ رقم واتساب سائقك للتواصل المباشر بخصوص أوقات الاستلام أو أي تغييرات</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">قائمة الفنادق</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">☐ في مكة المكرمة، حدد مدى قربك المرغوب من الحرم — أجياد والمسفلة على مسافة مشي، بينما العزيزية أوفر لكن تتطلب مواصلات قصيرة</li>
  <li style="margin-bottom:0.5rem;">☐ في المدينة المنورة، المنطقة المركزية حول المسجد النبوي تضعك على مسافة مشي من المسجد</li>
  <li style="margin-bottom:0.5rem;">☐ شارك اسم فندقك ورقم غرفتك مع سائقك مسبقاً لاستلام وإيصال سلس</li>
  <li style="margin-bottom:0.5rem;">☐ احجز الفنادق مبكراً إذا كنت مسافراً في رمضان أو موسم الحج — التوفر ينخفض بسرعة والأسعار ترتفع</li>
  <li style="margin-bottom:0.5rem;">☐ تأكد من وقت تسجيل الدخول مقابل وقت وصولك حتى لا تصل قبل جاهزية غرفتك بساعات</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">ماذا تحزم</h2>
<ul style="list-style:disc;padding-right:1.5rem;margin-bottom:1rem;">
  <li style="margin-bottom:0.5rem;">☐ ملابس الإحرام (يُنصح بطقمين للرجال)، مع حقيبة صغيرة لحملها بشكل منفصل لتوقف الميقات</li>
  <li style="margin-bottom:0.5rem;">☐ نعال مريحة سهلة الخلع للمرات الكثيرة التي ستدخل وتخرج فيها من المسجد</li>
  <li style="margin-bottom:0.5rem;">☐ حقيبة صغيرة لهاتفك ومحفظتك وسجادة الصلاة يمكنك حملها سيراً حول الحرم</li>
  <li style="margin-bottom:0.5rem;">☐ مستحضرات نظافة خالية من العطور (مطلوبة أثناء الإحرام)</li>
  <li style="margin-bottom:0.5rem;">☐ نسخة مطبوعة أو محفوظة من تأكيدات رحلتك وفندقك، تحسباً لفقدان الإشارة</li>
  <li style="margin-bottom:0.5rem;">☐ مساحة فارغة أو حقيبة قابلة للطي لماء زمزم والهدايا في طريق العودة — هذا يؤثر على السيارة التي يجب حجزها (GMC يوكن وستاريا لديهما مساحة أمتعة أكبر من السيدان)</li>
  <li style="margin-bottom:0.5rem;">☐ شاحن محمول — ستستخدم هاتفك كثيراً لمواقيت الصلاة والخرائط والتواصل مع سائقك</li>
</ul>

<h2 style="font-size:1.4rem;font-weight:800;margin:1.5rem 0 0.75rem;">تجميع كل شيء معاً</h2>
<p style="margin-bottom:1rem;">رتّب حجوزات النقل والفنادق أولاً، لأن توقيت إحرامك وحزمك يعتمدان على مسارك (السفر عبر جدة مقابل المدينة يغيّر نقطة ميقاتك). بعد ترتيب ذلك، يصبح الحزم بسيطاً — احزم بخفة، أبقِ الإحرام في متناول يدك، واترك مساحة في حقيبتك لرحلة العودة.</p>

<p style="margin-bottom:1rem;"><strong>Saudi Cabs GMC</strong> تتولى استقبال المطار وتوصيلات مكة - المدينة وجولات الزيارات بأسعار ثابتة متفق عليها قبل السفر. راسلنا عبر واتساب مع تفاصيل رحلتك لترتيب نقل عمرتك مسبقاً.</p>`,
    },
    date: '2026-08-22',
    image: '/location/makkah.webp',
  },
];
