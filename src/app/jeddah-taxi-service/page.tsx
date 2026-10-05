'use client'
import JeddahLocationPage from '@/components/JeddahLocationPage'
import { jeddahFaqs } from '@/lib/faqData'
import { getPricing } from '@/lib/pricingData'
import { highlights } from '@/lib/jeddahPageData'

export default function JeddahPage() {
  return (
    <JeddahLocationPage
      cityName={{ ar: 'جدة', en: 'Jeddah' }}
      citySlug="jeddah-taxi-service"
      citySlogan={{ ar: 'عروس البحر الأحمر • نقل خاص', en: 'Bride of the Red Sea • Private Transport' }}
      heroImage="/hero/jeddah-hero-saudi-cabs-gmc.webp"
      services={[
        {
          iconName: 'Plane',
          title: { ar: 'توصيل مطار الملك عبدالعزيز', en: 'King Abdulaziz Airport Transfer' },
          desc: {
            ar: 'استقبال وتوديع من الصالة 1 والصالة 2 على مدار الساعة. راجع <a href="/jeddah-airport-guide" style="color:#0891b2;font-weight:700;">دليل مطار جدة</a> لمزيد من التفاصيل.',
            en: 'Pickup and drop-off from Terminal 1 and Terminal 2, around the clock. See the <a href="/jeddah-airport-guide" style="color:#0891b2;font-weight:700;">Jeddah Airport arrival guide</a> for details.',
          },
          href: '/airport-transfer',
          cta: { ar: 'توصيل من المطار', en: 'Jeddah Airport Transfer options' },
        },
        {
          iconName: 'Waves',
          title: { ar: 'جولة كورنيش جدة', en: 'Jeddah Corniche Tour' },
          desc: {
            ar: 'سائق خاص يأخذك على طول الكورنيش بين الفنادق والمواقع الشهيرة في جدة.',
            en: 'A private driver takes you along the Corniche between hotels and well-known Jeddah landmarks.',
          },
          href: 'https://wa.me/923097811785',
          cta: { ar: 'خطط لرحلتك عبر واتساب', en: 'Plan your trip on WhatsApp' },
        },
        {
          iconName: 'Briefcase',
          title: { ar: 'رحلات الأعمال', en: 'Business Trips' },
          desc: {
            ar: 'سائق خاص لاجتماعاتك ومؤتمراتك بسيارات مريحة، مع إمكانية تغطية عدة محطات.',
            en: 'A private driver for your meetings and conferences, able to cover multiple stops in one booking.',
          },
          href: '/private-driver',
          cta: { ar: 'استفسر عن سائق خاص', en: 'Ask about a private driver' },
        },
        {
          iconName: 'Car',
          title: { ar: 'كاب بين المدن', en: 'Intercity Transport' },
          desc: {
            ar: 'رحلات خاصة من جدة إلى مكة المكرمة والمدينة المنورة والطائف. اختر <a href="/toyota-camry-taxi" style="color:#0891b2;font-weight:700;">سيدان</a>، <a href="/hyundai-staria-taxi" style="color:#0891b2;font-weight:700;">هيونداي ستاريا</a> أو <a href="/gmc-yukon-hire" style="color:#0891b2;font-weight:700;">GMC يوكون</a> حسب حجم مجموعتك.',
            en: 'Private trips from Jeddah to Makkah, Madinah and Taif. Choose a <a href="/toyota-camry-taxi" style="color:#0891b2;font-weight:700;">Sedan</a>, <a href="/hyundai-staria-taxi" style="color:#0891b2;font-weight:700;">Hyundai Staria</a> or <a href="/gmc-yukon-hire" style="color:#0891b2;font-weight:700;">GMC Yukon</a> depending on your group size.',
          },
          href: '/jeddah-to-makkah',
          cta: { ar: 'خطوط بين المدن والأسعار', en: 'Intercity routes & prices' },
        },
        {
          iconName: 'UserRound',
          title: { ar: 'سائق خاص (شوفير)', en: 'Private Driver (Chauffeur)' },
          desc: {
            ar: 'سائق خاص لليوم، لجدول مرن بين الاجتماعات والتسوق والمناسبات.',
            en: 'A private driver for the day, for a flexible schedule between meetings, shopping and occasions.',
          },
          href: 'https://wa.me/923097811785',
          cta: { ar: 'اسأل عبر واتساب', en: 'Ask on WhatsApp' },
        },
        {
          iconName: 'Users',
          title: { ar: 'نقل العائلات والمجموعات', en: 'Family & Group Transport' },
          desc: {
            ar: 'سيارات واسعة بـ٧ مقاعد — هيونداي ستاريا وGMC يوكون — للعائلات والمجموعات مع الأمتعة.',
            en: 'Spacious 7-seat vehicles — the Hyundai Staria and GMC Yukon — for families and groups travelling with luggage.',
          },
          href: '/hyundai-staria-taxi',
          cta: { ar: 'عرض هيونداي ستاريا', en: 'View Hyundai Staria' },
        },
        {
          iconName: 'Anchor',
          title: { ar: 'الموانئ والميناء', en: 'Ports & Harbor' },
          desc: {
            ar: 'توصيل إلى ميناء جدة الإسلامي والمناطق المحيطة به.',
            en: 'Transfer to Jeddah Islamic Port and surrounding port areas.',
          },
          href: 'https://wa.me/923097811785',
          cta: { ar: 'اسأل عبر واتساب', en: 'Ask on WhatsApp' },
        },
        {
          iconName: 'Building2',
          title: { ar: 'توصيل الفنادق', en: 'Hotel Transfer' },
          desc: {
            ar: 'خدمة توصيل بين فنادق جدة والوجهات الرئيسية داخلها، بما في ذلك فنادق الخمس نجوم والمنتجعات.',
            en: 'Transfer service between Jeddah hotels and major destinations across the city, including five-star hotels and resorts.',
          },
          href: '/booking',
          cta: { ar: 'احصل على سعر رحلتك', en: 'Get a trip price' },
        },
      ]}
      linkedRoutes={[
        {
          slug: 'jeddah-to-makkah',
          label: { ar: 'جدة ← مكة المكرمة', en: 'Jeddah → Makkah' },
          duration: { ar: '٥٠ دقيقة', en: '~50 min' },
          desc: { ar: 'أكثر خط يُقطع من جدة، خصوصاً للمعتمرين القادمين عبر مطار الملك عبدالعزيز.', en: 'The most-travelled route from Jeddah, especially for Umrah pilgrims landing at KAIA.' },
        },
        {
          slug: 'makkah-to-jeddah',
          label: { ar: 'مكة المكرمة ← جدة', en: 'Makkah → Jeddah' },
          duration: { ar: '٥٠ دقيقة', en: '~50 min' },
          desc: { ar: 'رحلة العودة — إلى المدينة أو فندق أو المطار.', en: 'The return leg — to the city, a hotel or the airport.' },
        },
        {
          slug: 'jeddah-airport-to-makkah',
          label: { ar: 'مطار جدة ← مكة المكرمة', en: 'Jeddah Airport → Makkah' },
          duration: { ar: '٥٠ إلى ٦٠ دقيقة', en: '~50–60 min' },
          desc: { ar: 'مباشرة من صالة الوصول إلى فندقك في مكة، دون توقف في مدينة جدة.', en: 'Direct from arrivals to your Makkah hotel, with no stop in Jeddah city.' },
        },
        {
          slug: 'jeddah-to-madinah',
          label: { ar: 'جدة ← المدينة المنورة', en: 'Jeddah → Madinah' },
          duration: { ar: '٤ ساعات', en: '~4 hrs' },
          desc: { ar: 'رحلة مباشرة إلى المسجد النبوي، على مسافة تقارب ٣٩٠ كم.', en: "A direct trip to the Prophet's Mosque, about 390 km." },
        },
        {
          slug: 'madinah-to-jeddah',
          label: { ar: 'المدينة المنورة ← جدة', en: 'Madinah → Jeddah' },
          duration: { ar: '٤ ساعات', en: '~4 hrs' },
          desc: { ar: 'رحلة العودة إلى مدينة جدة أو المطار.', en: 'The return leg to Jeddah city or the airport.' },
        },
        {
          slug: 'jeddah-airport-to-madinah',
          label: { ar: 'مطار جدة ← المدينة المنورة', en: 'Jeddah Airport → Madinah' },
          duration: { ar: '٣.٥ إلى ٤ ساعات', en: '~3.5–4 hrs' },
          desc: { ar: 'خط شائع للحجاج والمعتمرين القادمين إلى جدة والمتجهين مباشرة إلى المدينة.', en: 'A popular route for pilgrims flying into Jeddah and heading straight to Madinah.' },
        },
        {
          slug: 'jeddah-to-taif',
          label: { ar: 'جدة ← الطائف', en: 'Jeddah → Taif' },
          duration: { ar: '١.٥ ساعة', en: '~1.5 hrs' },
          desc: { ar: 'رحلة عبر طريق الهدا الجبلي الخلاب، شائعة لدى العائلات في الصيف.', en: 'A scenic trip via the Al-Hada mountain road, popular with families in summer.' },
        },
      ]}
      legacyRoutes={[
        { slug: null, label: { ar: 'كورنيش جدة ← مول العرب', en: 'Jeddah Corniche → Mall of Arabia' }, duration: { ar: '٢٥ دقيقة', en: '~25 min' } },
        { slug: null, label: { ar: 'جدة ← رابغ', en: 'Jeddah → Rabigh' }, duration: { ar: '١.٥ ساعة', en: '~1.5 hrs' } },
        { slug: null, label: { ar: 'المطار ← وسط جدة', en: 'Airport → Downtown Jeddah' }, duration: { ar: '٣٠ دقيقة', en: '~30 min' } },
        { slug: 'riyadh-to-jeddah', label: { ar: 'جدة ← الرياض', en: 'Jeddah → Riyadh' }, duration: { ar: '٩ ساعات', en: '~9 hrs' } },
        { slug: null, label: { ar: 'جدة ← ينبع', en: 'Jeddah → Yanbu' }, duration: { ar: '٣.٥ ساعة', en: '~3.5 hrs' } },
      ]}
      highlights={highlights}
      faqs={jeddahFaqs}
      pricing={getPricing('jed-makkah', 'makkah-jed', 'jed-madinah')}
    />
  )
}
