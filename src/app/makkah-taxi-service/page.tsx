'use client'
import MakkahLocationPage from '@/components/MakkahLocationPage'
import { makkahFaqs } from '@/lib/faqData'
import { getPricing } from '@/lib/pricingData'

export default function MakkahPage() {
  return (
    <MakkahLocationPage
      cityName={{ ar: 'مكة المكرمة', en: 'Makkah' }}
      citySlug="makkah-taxi-service"
      citySlogan={{ ar: 'أم القرى • الحرم المكي الشريف', en: 'Umm Al-Qura • The Holy Mosque' }}
      heroImage="/hero/makkah-hero-saudi-cabs-gmc.webp"
      services={[
        {
          group: 'airport',
          iconName: 'Plane',
          title: { ar: 'توصيل من مطار جدة إلى مكة', en: 'Jeddah Airport → Makkah Transfer' },
          desc: {
            ar: 'استقبال وتوديع بين مطار الملك عبدالعزيز الدولي وفنادق مكة وعناوينها. شارك رقم رحلتك عند الحجز لنؤكد تفاصيل الاستقبال وفق موعد وصولك.',
            en: 'Professional pickup and drop-off between King Abdulaziz International Airport and hotels and addresses across Makkah. Share your flight number when you book so we can confirm pickup details for your arrival.',
          },
          href: '/jeddah-airport-to-makkah',
          cta: { ar: 'تفاصيل الخط والأسعار', en: 'Route details & prices' },
        },
        {
          group: 'local',
          iconName: 'Building2',
          title: { ar: 'توصيل الحرم المكي والفنادق', en: 'Holy Mosque / Haram Transfers' },
          desc: {
            ar: 'رحلات بين الفنادق والشقق في مكة والمسجد الحرام، ليلاً ونهاراً — بما في ذلك أوقات الصلاة — حسب توفر السائقين وحالة الطرق والوصول قرب الحرم.',
            en: 'Trips between hotels and apartments across Makkah and the Holy Mosque, day and night — including around prayer times — subject to driver availability and local access and traffic conditions near the Haram.',
          },
          href: '#booking',
          cta: { ar: 'احصل على سعر رحلتك', en: 'Get a trip price' },
        },
        {
          group: 'local',
          iconName: 'Briefcase',
          title: { ar: 'سائق خاص في مكة', en: 'Private Driver in Makkah' },
          desc: {
            ar: 'سائق خاص طوال إقامتك في مكة للزيارات والتسوق والمناسبات، حسب التوفر. أكّد المدة والسعر عبر واتساب.',
            en: 'A private driver throughout your stay in Makkah for visits, shopping and occasions, subject to availability. Confirm duration and price on WhatsApp.',
          },
          href: '/private-driver',
          cta: { ar: 'استئجار سائق خاص', en: 'Hire a private driver' },
        },
        {
          group: 'religious',
          iconName: 'Map',
          title: { ar: 'جولات زيارات مكة', en: 'Makkah Ziyarat Tours' },
          desc: {
            ar: 'زيارة المواقع الإسلامية التاريخية في مكة مع سائق خاص وسيارة للمدة التي تختارها، بسعر ثابت.',
            en: 'Visit historical Islamic sites in Makkah with a private driver and vehicle for the duration you choose, at a fixed price.',
          },
          href: '/makkah-ziyarat-tour',
          cta: { ar: 'عرض جولة الزيارات', en: 'View Ziyarat tours' },
        },
        {
          group: 'religious',
          iconName: 'Tent',
          title: { ar: 'نقل الحج والمشاعر المقدسة', en: 'Hajj & Holy Sites Transport' },
          desc: {
            ar: 'نقل مريح للأفراد والمجموعات إلى منى وعرفات ومزدلفة خلال موسم الحج، حسب التوفر والأنظمة المحلية لنقل الحج.',
            en: 'Comfortable transport for individuals and groups to Mina, Arafat and Muzdalifah during Hajj season — subject to availability and local Hajj transportation rules.',
          },
          href: '/hajj-umrah-transport',
          cta: { ar: 'نقل الحج والعمرة', en: 'Hajj & Umrah transport' },
        },
        {
          group: 'intercity',
          iconName: 'Car',
          title: { ar: 'تاكسي خاص مكة ↔ المدينة المنورة', en: 'Makkah ↔ Madinah Private Taxi' },
          desc: {
            ar: 'رحلات خاصة من باب إلى باب بين مكة والمدينة المنورة، وتستغرق من 4.5 إلى 5 ساعات تقريباً حسب حركة المرور وحالة الطريق.',
            en: 'Private door-to-door trips between Makkah and Madinah, taking about 4.5–5 hours depending on traffic and road conditions.',
          },
          href: '/makkah-to-madinah',
          cta: { ar: 'تفاصيل الخط والأسعار', en: 'Route details & prices' },
        },
        {
          group: 'intercity',
          iconName: 'Route',
          title: { ar: 'تاكسي مكة ↔ جدة', en: 'Makkah ↔ Jeddah Taxi' },
          desc: {
            ar: 'رحلات خاصة بين مكة وجدة — إلى المدينة أو الفندق أو المطار — وتستغرق من 50 إلى 90 دقيقة تقريباً حسب حركة المرور.',
            en: 'Private trips between Makkah and Jeddah — to the city, a hotel or the airport — taking roughly 50–90 minutes depending on traffic.',
          },
          href: '/makkah-to-jeddah',
          cta: { ar: 'تفاصيل الخط والأسعار', en: 'Route details & prices' },
        },
        {
          group: 'intercity',
          iconName: 'Users',
          title: { ar: 'نقل العائلات والمجموعات', en: 'Family & Group Transport' },
          desc: {
            ar: 'سيارات واسعة بـ٧ مقاعد — هيونداي ستاريا وGMC يوكون (VIP) — تناسب العائلات والمجموعات مع الأمتعة.',
            en: 'Spacious 7-seat vehicles — the Hyundai Staria and GMC Yukon (VIP) — for families and groups travelling with luggage.',
          },
          href: '/hyundai-staria-taxi',
          cta: { ar: 'عرض هيونداي ستاريا', en: 'View Hyundai Staria' },
        },
      ]}
      linkedRoutes={[
        { slug: 'jeddah-airport-to-makkah', label: { ar: 'مطار جدة ← مكة المكرمة', en: 'Jeddah Airport → Makkah' }, duration: { ar: '55 إلى 90 دقيقة', en: '55–90 min' } },
        { slug: 'makkah-to-jeddah-airport', label: { ar: 'مكة المكرمة ← مطار جدة', en: 'Makkah → Jeddah Airport' }, duration: { ar: '55 إلى 90 دقيقة', en: '55–90 min' } },
        { slug: 'makkah-to-madinah', label: { ar: 'مكة المكرمة ← المدينة المنورة', en: 'Makkah → Madinah' }, duration: { ar: '4.5 إلى 5 ساعات', en: '4.5–5 hrs' } },
        { slug: 'madinah-to-makkah', label: { ar: 'المدينة المنورة ← مكة المكرمة', en: 'Madinah → Makkah' }, duration: { ar: '4.5 إلى 5 ساعات', en: '4.5–5 hrs' } },
        { slug: 'makkah-to-jeddah', label: { ar: 'مكة المكرمة ← جدة', en: 'Makkah → Jeddah' }, duration: { ar: '50 إلى 90 دقيقة', en: '50–90 min' } },
        { slug: 'makkah-to-taif', label: { ar: 'مكة المكرمة ← الطائف', en: 'Makkah → Taif' }, duration: { ar: '1.5 إلى 2 ساعة', en: '1.5–2 hrs' } },
        { slug: 'makkah-to-riyadh', label: { ar: 'مكة المكرمة ← الرياض', en: 'Makkah → Riyadh' }, duration: { ar: '8 إلى 9 ساعات', en: '8–9 hrs' } },
        { slug: 'makkah-to-dammam', label: { ar: 'مكة المكرمة ← الدمام', en: 'Makkah → Dammam' }, duration: { ar: '8 إلى 9 ساعات', en: '8–9 hrs' } },
      ]}
      highlights={[
        {
          iconName: 'Banknote',
          title: { ar: 'أسعار ثابتة وشفافة', en: 'Fixed & Transparent Pricing' },
          desc: {
            ar: 'يُؤكَّد سعر مسارك عبر واتساب قبل الرحلة — للسيارة الواحدة وليس للفرد. أي توقفات إضافية أو تغيير في المسار يُتفق عليه مسبقاً.',
            en: 'Your route fare is confirmed on WhatsApp before you travel — per vehicle, not per person. Extra stops or route changes are agreed in advance.',
          },
        },
        {
          iconName: 'Car',
          title: { ar: 'خدمة خاصة من باب إلى باب', en: 'Private Door-to-Door Service' },
          desc: {
            ar: 'سيارة وسائق لمجموعتك فقط، من فندقك أو شقتك أو المطار إلى وجهتك. سائقونا على دراية بشوارع مكة الرئيسية وفنادقها ومواقعها المهمة.',
            en: 'A private vehicle and driver for your group only, from your hotel, apartment or the airport to your destination. Our drivers are familiar with Makkah\'s main roads, hotels and key locations.',
          },
        },
        {
          iconName: 'Clock',
          title: { ar: 'دعم الحجز على مدار الساعة', en: '24/7 Booking Support' },
          desc: {
            ar: 'احجز لرحلات الصباح الباكر والنهار والليل المتأخر. يخضع التوفر لجاهزية السائقين وظروف الوصول المحلية.',
            en: 'Book for early-morning, daytime and late-night trips. Availability depends on driver availability and local access conditions.',
          },
        },
        {
          iconName: 'MessageCircle',
          title: { ar: 'حجز سهل عبر واتساب', en: 'Easy WhatsApp Booking' },
          desc: {
            ar: 'أرسل تفاصيل رحلتك عبر النموذج أو مباشرة على واتساب. لا يلزم أي دفع مسبق.',
            en: 'Send your trip details through the form or directly on WhatsApp. No advance payment is required.',
          },
        },
      ]}
      faqs={makkahFaqs}
      pricing={getPricing('jed-makkah', 'makkah-jed', 'ziyarat-makkah')}
    />
  )
}
