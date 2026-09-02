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
      description={{
        ar: 'نوفر خدمات نقل موثوقة ومريحة في مكة المكرمة، بما في ذلك توصيل الحرم المكي، وتوصيل المطار، ونقل الحج والعمرة، والرحلات بين المدن.',
        en: 'We provide reliable and comfortable transportation services in the holy city of Makkah, including Holy Mosque transfers, airport transfers, Hajj & Umrah transportation and intercity travel.',
      }}
      heroImage="/hero/makkah-hero-saudi-cabs-gmc.webp"
      services={[
        { iconName: 'Building2', title: { ar: 'توصيل الحرم المكي', en: 'Holy Mosque Transfer' }, desc: { ar: 'رحلات من الفنادق والشقق إلى الحرم المكي الشريف على مدار الساعة.', en: 'Trips from hotels and apartments to the Holy Mosque around the clock.' } },
        { iconName: 'Plane', title: { ar: 'مطار جدة ↔ مكة', en: 'Jeddah Airport ↔ Makkah' }, desc: { ar: 'استقبال وتوديع بين مطار الملك عبدالعزيز الدولي والفنادق والمناطق الرئيسية في مكة.', en: 'Professional pickup and drop-off between King Abdulaziz International Airport and hotels and major areas across Makkah.' } },
        { iconName: 'Bus', title: { ar: 'رحلات المشاعر', en: 'Holy Sites Trips' }, desc: { ar: 'نقل جماعي مريح إلى منى وعرفات ومزدلفة خلال موسم الحج.', en: 'Comfortable group transportation to Mina, Arafat and Muzdalifah during Hajj season.' } },
        { iconName: 'Car', title: { ar: 'كاب بين المدن', en: 'Intercity Cab' }, desc: { ar: 'رحلات مريحة من مكة إلى جدة، المدينة المنورة، والطائف.', en: 'Comfortable trips from Makkah to Jeddah, Madinah, and Taif.' } },
        { iconName: 'Briefcase', title: { ar: 'سائق خاص', en: 'Private Driver' }, desc: { ar: 'سائق خاص طوال إقامتك في مكة للزيارات والتسوق والمناسبات.', en: 'A private driver throughout your stay in Makkah for visits, shopping, and occasions.' } },
        { iconName: 'Building', title: { ar: 'توصيل الفنادق', en: 'Hotel Transfers' }, desc: { ar: 'خدمة توصيل بين الفنادق والمواقع الرئيسية داخل مكة المكرمة.', en: 'Transfer service between hotels and major locations across Makkah.' } },
        { iconName: 'Map', title: { ar: 'جولة الزيارات الإسلامية', en: 'Islamic Sites Tour' }, desc: { ar: 'زيارة المواقع الإسلامية التاريخية في مكة مع سائق محلي ذي خبرة.', en: 'Visit historical Islamic sites in Makkah with an experienced local driver.' } },
        { iconName: 'Users', title: { ar: 'سيارات عائلية', en: 'Family Vehicles' }, desc: { ar: 'سيارات واسعة لاستيعاب العائلات بكل راحة وأمان.', en: 'Spacious vehicles to accommodate families comfortably and safely.' } },
      ]}
      routes={[
        { label: { ar: 'مكة ← جدة', en: 'Makkah → Jeddah' }, duration: 'Approx. 50–90 min' },
        { label: { ar: 'مكة ← المدينة المنورة', en: 'Makkah → Madinah' }, duration: 'Approx. 4.5–5 hrs' },
        { label: { ar: 'مكة ← الطائف', en: 'Makkah → Taif' }, duration: 'Approx. 1.5–2 hrs' },
        { label: { ar: 'مكة ← مطار جدة', en: 'Makkah → Jeddah Airport' }, duration: 'Approx. 55–90 min' },
        { label: { ar: 'مكة ← منى', en: 'Makkah → Mina' }, duration: 'Approx. 20 min' },
        { label: { ar: 'مكة ← عرفات', en: 'Makkah → Arafat' }, duration: 'Approx. 30 min' },
        { label: { ar: 'العزيزية ← الحرم', en: 'Al-Aziziyah → Holy Mosque' }, duration: 'Approx. 15 min' },
      ]}
      linkedRoutes={[
        { slug: 'jeddah-airport-to-makkah', label: { ar: 'مطار جدة ← مكة المكرمة', en: 'Jeddah Airport → Makkah' }, duration: 'Approx. 55–90 min' },
        { slug: 'makkah-to-jeddah-airport', label: { ar: 'مكة المكرمة ← مطار جدة', en: 'Makkah → Jeddah Airport' }, duration: 'Approx. 55–90 min' },
        { slug: 'makkah-to-madinah', label: { ar: 'مكة المكرمة ← المدينة المنورة', en: 'Makkah → Madinah' }, duration: 'Approx. 4.5–5 hrs' },
        { slug: 'madinah-to-makkah', label: { ar: 'المدينة المنورة ← مكة المكرمة', en: 'Madinah → Makkah' }, duration: 'Approx. 4.5–5 hrs' },
        { slug: 'makkah-to-jeddah', label: { ar: 'مكة المكرمة ← جدة', en: 'Makkah → Jeddah' }, duration: 'Approx. 50–90 min' },
        { slug: 'makkah-to-taif', label: { ar: 'مكة المكرمة ← الطائف', en: 'Makkah → Taif' }, duration: 'Approx. 1.5–2 hrs' },
      ]}
      highlights={[
        { iconName: 'Star', title: { ar: 'متخصصون في خدمة الحجاج والمعتمرين', en: 'Specialists in Hajj & Umrah Services' }, desc: { ar: 'أسطولنا مخصص لخدمة ضيوف الرحمن بكل تبجيل واحترام.', en: 'Our fleet is dedicated to serving the guests of the Merciful with full reverence and respect.' } },
        { iconName: 'Shield', title: { ar: 'سائقون محترفون ومعروفون بالمنطقة', en: 'Professional Drivers Familiar with the Area' }, desc: { ar: 'جميع سائقينا على دراية تامة بشوارع مكة ومواقعها.', en: 'All our drivers are thoroughly familiar with Makkah\'s streets and sacred locations.' } },
        { iconName: 'Clock', title: { ar: 'متاحون ٢٤ ساعة طوال أيام الأسبوع', en: 'Available 24/7' }, desc: { ar: 'متاحون للرحلات في الصباح الباكر والنهار والليل المتأخر.', en: 'Available 24/7 for early-morning, daytime and late-night trips.' } },
        { iconName: 'Banknote', title: { ar: 'خيارات نقل الحج والعمرة', en: 'Hajj & Umrah Transport Options' }, desc: { ar: 'خيارات نقل مرنة لحجاج ومعتمري بيت الله الحرام.', en: 'Flexible transport options for Hajj and Umrah pilgrims.' } },
      ]}
      faqs={makkahFaqs}
      pricing={getPricing('jed-makkah', 'makkah-jed', 'ziyarat-makkah')}
    />
  )
}
