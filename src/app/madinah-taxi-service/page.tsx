'use client'
import MadinahLocationPage from '@/components/MadinahLocationPage'
import { madinahFaqs } from '@/lib/faqData'
import { getPricing } from '@/lib/pricingData'

export default function MadinahPage() {
  return (
    <MadinahLocationPage
      cityName={{ ar: 'المدينة المنورة', en: 'Madinah' }}
      citySlug="madinah-taxi-service"
      citySlogan={{ ar: 'مدينة النور • المسجد النبوي الشريف', en: 'City of Light • Al-Masjid An-Nabawi' }}
      description={{
        ar: 'نصحبكم في رحاب مدينة المصطفى ﷺ بأرقى خدمات النقل. توصيل من وإلى المسجد النبوي الشريف، المزارات الإسلامية، ومطار الأمير محمد بن عبدالعزيز الدولي (مطار المدينة المنورة) بأسعار شفافة وتنافسية وسائقين محترفين.',
        en: 'We accompany you in the city of the Prophet ﷺ with premium transportation services. Transfers to and from the Prophet\'s Mosque, Islamic landmarks, and Prince Mohammad bin Abdulaziz International Airport (Madinah Airport) with transparent and competitive fares and professional drivers.',
      }}
      heroImage="/hero/madinah-hero-saudi-cabs-gmc.webp"
      services={[
        { iconName: 'Building2', title: { ar: 'توصيل المسجد النبوي', en: "Prophet's Mosque Transfer" }, desc: { ar: 'رحلات من الفنادق والشقق إلى المسجد النبوي الشريف على مدار اليوم.', en: "Trips from hotels and apartments to the Prophet's Mosque throughout the day." } },
        { iconName: 'Plane', title: { ar: 'مطار المدينة المنورة', en: 'Madinah Airport' }, desc: { ar: 'استقبال وتوديع من مطار المدينة المنورة إلى أحياء المدينة الرئيسية.', en: 'Pickup and drop-off from Madinah Airport to major neighborhoods across the city.' } },
        { iconName: 'Map', title: { ar: 'زيارة المزارات الإسلامية', en: 'Islamic Landmarks Visit' }, desc: { ar: 'رحلات نقل إلى قباء وأحد والبقيع والمواقع التاريخية مع سائق محلي متمرس.', en: 'Transportation to Quba, Uhud, Al-Baqi, and historical sites with an experienced local driver.' } },
        { iconName: 'Car', title: { ar: 'كاب بين المدن', en: 'Intercity Cab' }, desc: { ar: 'رحلات مريحة من المدينة إلى مكة المكرمة، جدة، والطائف.', en: 'Comfortable trips from Madinah to Makkah, Jeddah, and Taif.' } },
        { iconName: 'Briefcase', title: { ar: 'سائق خاص', en: 'Private Driver' }, desc: { ar: 'سائق خاص طوال إقامتك في المدينة للزيارات والتسوق والمناسبات.', en: 'A private driver throughout your stay in Madinah for visits, shopping, and occasions.' } },
        { iconName: 'Users', title: { ar: 'سيارات عائلية وجماعية', en: 'Family & Group Transfers' }, desc: { ar: 'مركبات واسعة ومريحة لعائلات الزوار والمجموعات بمختلف الأحجام.', en: 'Spacious and comfortable vehicles for visiting families and groups of various sizes.' } },
        { iconName: 'Building', title: { ar: 'توصيل الفنادق', en: 'Hotel Transfer' }, desc: { ar: 'خدمة توصيل بين فنادق المدينة وجميع المواقع داخلها.', en: 'Transfer service between Madinah hotels and all locations inside the city.' } },
        { iconName: 'Moon', title: { ar: 'خدمة ليلية', en: 'Night Service' }, desc: { ar: 'متاحون لتوصيلات الفجر والرحلات المتأخرة ليلاً إلى المسجد النبوي.', en: "Available for Fajr prayer transfers and late-night trips to the Prophet's Mosque." } },
      ]}
      routes={[
        { label: { ar: 'المدينة ← مكة المكرمة', en: 'Madinah → Makkah' }, duration: 'Approx. 4.5 hrs' },
        { label: { ar: 'المدينة ← جدة', en: 'Madinah → Jeddah' }, duration: 'Approx. 4 hrs' },
        { label: { ar: 'المسجد النبوي ← المطار', en: "Prophet's Mosque → Airport" }, duration: 'Approx. 30 min' },
        { label: { ar: 'المدينة ← الطائف', en: 'Madinah → Taif' }, duration: 'Approx. 5 hrs' },
        { label: { ar: 'المسجد النبوي ← قباء', en: "Prophet's Mosque → Quba" }, duration: 'Approx. 10 min' },
        { label: { ar: 'المسجد النبوي ← جبل أحد', en: "Prophet's Mosque → Mount Uhud" }, duration: 'Approx. 15 min' },
        { label: { ar: 'المدينة ← ينبع', en: 'Madinah → Yanbu' }, duration: 'Approx. 2.5 hrs' },
        { label: { ar: 'البقيع ← قباء ← المسجد', en: 'Al-Baqi → Quba → Mosque' }, duration: 'Approx. 20 min' },
      ]}
      linkedRoutes={[
        { slug: 'madinah-to-makkah', label: { ar: 'المدينة المنورة ← مكة المكرمة', en: 'Madinah → Makkah' }, duration: 'Approx. 4.5 hrs' },
        { slug: 'madinah-to-jeddah', label: { ar: 'المدينة المنورة ← جدة', en: 'Madinah → Jeddah' }, duration: 'Approx. 4 hrs' },
        { slug: 'madinah-airport-taxi', label: { ar: 'مطار المدينة ← المسجد النبوي', en: 'Madinah Airport → Prophet\'s Mosque' }, duration: 'Approx. 30 min' },
        { slug: 'jeddah-airport-to-madinah', label: { ar: 'مطار جدة ← المدينة المنورة', en: 'Jeddah Airport → Madinah' }, duration: 'Approx. 4 hrs' },
        { slug: 'makkah-to-madinah', label: { ar: 'مكة المكرمة ← المدينة المنورة', en: 'Makkah → Madinah' }, duration: 'Approx. 4.5 hrs' },
        { slug: 'taif-to-madinah', label: { ar: 'الطائف ← المدينة المنورة', en: 'Taif → Madinah' }, duration: 'Approx. 5 hrs' },
      ]}
      highlights={[
        { iconName: 'Star', title: { ar: "متخصصون في خدمة زوار المسجد النبوي", en: "Specialists in Prophet's Mosque Visitors" }, desc: { ar: 'نفخر بخدمة ضيوف نبي الرحمة ﷺ بكل أدب واحترام.', en: 'We are proud to serve the guests of the Prophet of Mercy ﷺ with the utmost respect and care.' } },
        { iconName: 'Map', title: { ar: 'سائقون يعرفون المزارات والمواقع', en: 'Drivers Who Know the Landmarks' }, desc: { ar: 'سائقونا على دراية بالمواقع الإسلامية الرئيسية في المدينة المنورة.', en: 'Our drivers are familiar with the major Islamic sites in Madinah.' } },
        { iconName: 'Clock', title: { ar: 'خدمة متواصلة على مدار الساعة', en: 'Round-the-Clock Availability' }, desc: { ar: 'نقل على مدار الساعة، بما في ذلك رحلات الفجر الباكرة والرحلات المتأخرة ليلاً، حسب توفر السائقين.', en: '24/7 transportation, including early-morning Fajr and late-night trips, subject to driver availability.' } },
        { iconName: 'Banknote', title: { ar: 'أسعار شفافة للزوار والمعتمرين', en: 'Transparent Fares for Visitors & Pilgrims' }, desc: { ar: 'أسعار واضحة وتنافسية للزيارات الفردية والعائلية طوال فترة إقامتكم.', en: 'Clear, competitive fares for individual and family visits throughout your stay.' } },
      ]}
      faqs={madinahFaqs}
      pricing={getPricing('jed-madinah', 'mad-hotel', 'hotel-mad', 'ziyarat-madinah')}
    />
  )
}
