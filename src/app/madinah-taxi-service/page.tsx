'use client'
import MadinahLocationPage from '@/components/MadinahLocationPage'
import { madinahFaqs } from '@/lib/faqData'
import { getPricing } from '@/lib/pricingData'
import { services, highlights } from '@/lib/madinahPageData'

export default function MadinahPage() {
  return (
    <MadinahLocationPage
      cityName={{ ar: 'المدينة المنورة', en: 'Madinah' }}
      citySlug="madinah-taxi-service"
      citySlogan={{ ar: 'مدينة النور • المسجد النبوي الشريف', en: 'City of Light • Al-Masjid An-Nabawi' }}
      heroImage="/hero/madinah-hero-saudi-cabs-gmc.webp"
      services={services}
      linkedRoutes={[
        {
          slug: 'madinah-to-makkah',
          label: { ar: 'المدينة المنورة ← مكة المكرمة', en: 'Madinah → Makkah' },
          duration: { ar: '٤ إلى ٤.٥ ساعة', en: '4–4.5 hrs' },
          desc: {
            ar: 'أكثر خط بين المدن يسلكه المعتمرون بعد المدينة المنورة — من باب إلى باب عبر طريق الحرمين السريع.',
            en: 'The private intercity route most pilgrims travel after Madinah — door-to-door via the Haramain Expressway.',
          },
        },
        {
          slug: 'madinah-to-jeddah',
          label: { ar: 'المدينة المنورة ← جدة', en: 'Madinah → Jeddah' },
          duration: { ar: '٤ ساعات', en: '~4 hrs' },
          desc: {
            ar: 'رحلة خاصة مباشرة إلى مدينة جدة أو مطارها، على مسافة تقارب ٣٩٠ كم.',
            en: 'A direct private trip to Jeddah city or Jeddah Airport, about 390 km.',
          },
        },
        {
          slug: 'madinah-airport-taxi',
          label: { ar: 'مطار المدينة ← الفندق / المسجد النبوي', en: 'Madinah Airport → Hotel / Prophet\'s Mosque' },
          duration: { ar: '٢٥ إلى ٣٥ دقيقة', en: '~25–35 min' },
          desc: {
            ar: 'استلام من مطار الأمير محمد بن عبدالعزيز إلى الفنادق القريبة من المسجد النبوي وبقية أحياء المدينة.',
            en: 'Pickup from Prince Mohammad bin Abdulaziz Airport to hotels near the Prophet\'s Mosque and across the city.',
          },
        },
        {
          slug: 'jeddah-airport-to-madinah',
          label: { ar: 'مطار جدة ← المدينة المنورة', en: 'Jeddah Airport → Madinah' },
          duration: { ar: '٣.٥ إلى ٤ ساعات', en: '~3.5–4 hrs' },
          desc: {
            ar: 'خط شائع للحجاج والمعتمرين القادمين إلى جدة والمتجهين مباشرة إلى المدينة المنورة دون أي تنقلات.',
            en: 'A popular route for pilgrims landing in Jeddah and travelling straight to Madinah without a transfer.',
          },
        },
        {
          slug: 'taif-to-madinah',
          label: { ar: 'المدينة المنورة ← الطائف', en: 'Madinah → Taif' },
          duration: { ar: '٥ ساعات', en: '~5 hrs' },
          desc: {
            ar: 'رحلة خاصة أطول إلى الطائف، على مسافة تقارب ٥٢٠ كم، للزوار المتجهين من المدينة المنورة.',
            en: 'A longer private trip to Taif, around 520 km, for visitors continuing on from Madinah.',
          },
        },
        {
          slug: null,
          label: { ar: 'المدينة المنورة ← ينبع', en: 'Madinah → Yanbu' },
          duration: { ar: '٢.٥ ساعة', en: '~2.5 hrs' },
          desc: {
            ar: 'رحلة خاصة إلى مدينة ينبع الساحلية على البحر الأحمر — أكّد سعرك وموعد استلامك عبر واتساب.',
            en: 'A private trip to the Red Sea coastal city of Yanbu — confirm your fare and pickup on WhatsApp.',
          },
        },
      ]}
      highlights={highlights}
      faqs={madinahFaqs}
      pricing={getPricing('jed-madinah', 'mad-hotel', 'hotel-mad', 'madinah-makkah', 'ziyarat-madinah')}
    />
  )
}
