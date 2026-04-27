'use client'
import LocationPage from '@/components/LocationPage'
import { madinahFaqs } from '@/lib/faqData'
import { getPricing } from '@/lib/pricingData'

export default function MadinahPage() {
  return (
    <LocationPage
      cityName={{ ar: 'المدينة المنورة', en: 'Madinah' }}
      citySlug="madinah-taxi-service"
      citySlogan={{ ar: 'مدينة النور • المسجد النبوي الشريف', en: 'City of Light • Al-Masjid An-Nabawi' }}
      description={{
        ar: 'نصحبكم في رحاب مدينة المصطفى ﷺ بأرقى خدمات النقل. توصيل من وإلى المسجد النبوي الشريف، المزارات الإسلامية، ومطار الأمير محمد بن عبدالعزيز بأسعار مناسبة وسائقين محترفين.',
        en: 'We accompany you in the city of the Prophet ﷺ with premium transportation services. Transfers to and from the Prophet\'s Mosque, Islamic landmarks, and Prince Mohammad bin Abdulaziz Airport at reasonable prices with professional drivers.',
      }}
      heroImage="https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&q=80&w=2000"
      services={[
        { iconName: 'Building2', title: { ar: 'توصيل المسجد النبوي', en: "Prophet's Mosque Transfer" }, desc: { ar: 'رحلات من الفنادق والشقق إلى المسجد النبوي الشريف على مدار اليوم.', en: "Trips from hotels and apartments to the Prophet's Mosque throughout the day." } },
        { iconName: 'Plane', title: { ar: 'مطار المدينة المنورة', en: 'Madinah Airport' }, desc: { ar: 'استقبال وتوديع من مطار الأمير محمد بن عبدالعزيز إلى جميع أحياء المدينة.', en: 'Pickup and drop-off from Prince Mohammad bin Abdulaziz Airport to all Madinah neighborhoods.' } },
        { iconName: 'Map', title: { ar: 'زيارة المزارات الإسلامية', en: 'Islamic Landmarks Visit' }, desc: { ar: 'جولات لزيارة قباء، أحد، البقيع، والمواقع التاريخية مع سائق مُرشد.', en: 'Tours to Quba, Uhud, Al-Baqi, and historical sites with an experienced guide driver.' } },
        { iconName: 'Car', title: { ar: 'كاب بين المدن', en: 'Intercity Cab' }, desc: { ar: 'رحلات مريحة من المدينة إلى مكة المكرمة، جدة، والطائف.', en: 'Comfortable trips from Madinah to Makkah, Jeddah, and Taif.' } },
        { iconName: 'Briefcase', title: { ar: 'سائق خاص', en: 'Private Driver' }, desc: { ar: 'سائق خاص طوال إقامتك في المدينة للزيارات والتسوق والمناسبات.', en: 'A private driver throughout your stay in Madinah for visits, shopping, and occasions.' } },
        { iconName: 'Users', title: { ar: 'سيارات عائلية', en: 'Family Vehicles' }, desc: { ar: 'مركبات واسعة ومريحة لعائلات الزوار بجميع أحجامها.', en: 'Spacious and comfortable vehicles for visiting families of all sizes.' } },
        { iconName: 'Building', title: { ar: 'توصيل الفنادق', en: 'Hotel Transfer' }, desc: { ar: 'خدمة توصيل بين فنادق المدينة وجميع المواقع داخلها.', en: 'Transfer service between Madinah hotels and all locations inside the city.' } },
        { iconName: 'Moon', title: { ar: 'خدمة ليلية', en: 'Night Service' }, desc: { ar: 'متاحون لصلاة الفجر والقيام الليلي في المسجد النبوي.', en: "Available for Fajr prayer and night vigil at the Prophet's Mosque." } },
      ]}
      routes={[
        { label: { ar: 'المدينة ← مكة المكرمة', en: 'Madinah → Makkah' }, duration: '~4.5 hrs' },
        { label: { ar: 'المدينة ← جدة', en: 'Madinah → Jeddah' }, duration: '~4 hrs' },
        { label: { ar: 'المسجد النبوي ← المطار', en: "Prophet's Mosque → Airport" }, duration: '~30 min' },
        { label: { ar: 'المدينة ← الطائف', en: 'Madinah → Taif' }, duration: '~5 hrs' },
        { label: { ar: 'المسجد النبوي ← قباء', en: "Prophet's Mosque → Quba" }, duration: '~10 min' },
        { label: { ar: 'المسجد النبوي ← جبل أحد', en: "Prophet's Mosque → Mount Uhud" }, duration: '~15 min' },
        { label: { ar: 'المدينة ← ينبع', en: 'Madinah → Yanbu' }, duration: '~2.5 hrs' },
        { label: { ar: 'البقيع ← قباء ← المسجد', en: 'Al-Baqi → Quba → Mosque' }, duration: '~20 min' },
      ]}
      highlights={[
        { iconName: 'Star', title: { ar: "متخصصون في خدمة زوار المسجد النبوي", en: "Specialists in Prophet's Mosque Visitors" }, desc: { ar: 'نفخر بخدمة ضيوف نبي الرحمة ﷺ بكل أدب واحترام.', en: 'We are proud to serve the guests of the Prophet of Mercy ﷺ with the utmost respect and care.' } },
        { iconName: 'Map', title: { ar: 'سائقون يعرفون المزارات والمواقع', en: 'Drivers Who Know the Landmarks' }, desc: { ar: 'جميع سائقينا على دراية بجميع المواقع الإسلامية في المدينة.', en: 'All our drivers are fully familiar with every Islamic site in Madinah.' } },
        { iconName: 'Clock', title: { ar: 'خدمة متواصلة لأوقات الصلاة', en: 'Continuous Service for Prayer Times' }, desc: { ar: 'نغطي جميع أوقات الصلاة ونوفر توصيلاً سريعاً للمسجد.', en: 'We cover all prayer times and provide quick transfers to the mosque.' } },
        { iconName: 'Banknote', title: { ar: 'أسعار مناسبة للزوار والمعتمرين', en: 'Affordable Prices for Visitors & Pilgrims' }, desc: { ar: 'باقات خاصة للزيارات المتعددة وعائلات الزوار.', en: 'Special packages for multiple visits and visitor families throughout their stay.' } },
      ]}
      faqs={madinahFaqs}
      pricing={getPricing('jed-madinah', 'mad-hotel', 'hotel-mad', 'ziyarat-madinah')}
    />
  )
}
