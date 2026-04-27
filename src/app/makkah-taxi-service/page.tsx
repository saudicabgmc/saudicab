'use client'
import LocationPage from '@/components/LocationPage'
import { makkahFaqs } from '@/lib/faqData'
import { getPricing } from '@/lib/pricingData'

export default function MakkahPage() {
  return (
    <LocationPage
      cityName={{ ar: 'مكة المكرمة', en: 'Makkah' }}
      citySlug="makkah-taxi-service"
      citySlogan={{ ar: 'أم القرى • الحرم المكي الشريف', en: 'Umm Al-Qura • The Holy Mosque' }}
      description={{
        ar: 'نوفر لك أفضل خدمات النقل في أطهر بقاع الأرض. رحلات آمنة ومريحة من وإلى الحرم المكي الشريف، توصيل الحجاج والمعتمرين، ورحلات بين المشاعر المقدسة بأسعار مناسبة.',
        en: 'We provide the best transportation services in the holiest place on earth. Safe and comfortable trips to and from the Holy Mosque, transfers for Hajj and Umrah pilgrims, and intercity routes between the sacred sites at affordable prices.',
      }}
      heroImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2000"
      services={[
        { iconName: 'Building2', title: { ar: 'توصيل الحرم المكي', en: 'Holy Mosque Transfer' }, desc: { ar: 'رحلات من الفنادق والشقق إلى الحرم المكي الشريف على مدار الساعة.', en: 'Trips from hotels and apartments to the Holy Mosque around the clock.' } },
        { iconName: 'Plane', title: { ar: 'مطار جدة ↔ مكة', en: 'Jeddah Airport ↔ Makkah' }, desc: { ar: 'استقبال وتوديع من مطار الملك عبدالعزيز الدولي إلى جميع أحياء مكة.', en: 'Professional pickup and drop-off from King Abdulaziz International Airport to all Makkah neighborhoods.' } },
        { iconName: 'Bus', title: { ar: 'رحلات المشاعر', en: 'Holy Sites Trips' }, desc: { ar: 'توصيل إلى منى، عرفات، ومزدلفة خلال موسم الحج بسيارات مرخصة.', en: 'Transfer to Mina, Arafat, and Muzdalifah during Hajj season with licensed vehicles.' } },
        { iconName: 'Car', title: { ar: 'كاب بين المدن', en: 'Intercity Cab' }, desc: { ar: 'رحلات مريحة من مكة إلى جدة، المدينة المنورة، والطائف.', en: 'Comfortable trips from Makkah to Jeddah, Madinah, and Taif.' } },
        { iconName: 'Briefcase', title: { ar: 'سائق خاص', en: 'Private Driver' }, desc: { ar: 'سائق خاص طوال إقامتك في مكة للزيارات والتسوق والمناسبات.', en: 'A private driver throughout your stay in Makkah for visits, shopping, and occasions.' } },
        { iconName: 'Building', title: { ar: 'توصيل الفنادق', en: 'Hotel Transfers' }, desc: { ar: 'خدمة توصيل بين الفنادق وجميع المواقع داخل مكة المكرمة.', en: 'Transfer service between hotels and all locations within Makkah.' } },
        { iconName: 'Map', title: { ar: 'جولة الزيارات الإسلامية', en: 'Islamic Sites Tour' }, desc: { ar: 'زيارة المواقع الإسلامية التاريخية في مكة مع سائق مُرشد.', en: 'Visit historical Islamic sites in Makkah with an experienced guide driver.' } },
        { iconName: 'Users', title: { ar: 'سيارات عائلية', en: 'Family Vehicles' }, desc: { ar: 'سيارات واسعة لاستيعاب العائلات بكل راحة وأمان.', en: 'Spacious vehicles to accommodate families comfortably and safely.' } },
      ]}
      routes={[
        { label: { ar: 'مكة ← جدة', en: 'Makkah → Jeddah' }, duration: '~50 min' },
        { label: { ar: 'مكة ← المدينة المنورة', en: 'Makkah → Madinah' }, duration: '~4.5 hrs' },
        { label: { ar: 'مكة ← الطائف', en: 'Makkah → Taif' }, duration: '~1.5 hrs' },
        { label: { ar: 'الحرم ← مطار جدة', en: 'Holy Mosque → Jeddah Airport' }, duration: '~60 min' },
        { label: { ar: 'مكة ← منى', en: 'Makkah → Mina' }, duration: '~20 min' },
        { label: { ar: 'مكة ← عرفات', en: 'Makkah → Arafat' }, duration: '~30 min' },
        { label: { ar: 'مكة ← جدة (المطار)', en: 'Makkah → Jeddah (Airport)' }, duration: '~55 min' },
        { label: { ar: 'العزيزية ← الحرم', en: 'Al-Aziziyah → Holy Mosque' }, duration: '~15 min' },
      ]}
      highlights={[
        { iconName: 'Star', title: { ar: 'متخصصون في خدمة الحجاج والمعتمرين', en: 'Specialists in Hajj & Umrah Services' }, desc: { ar: 'أسطولنا مخصص لخدمة ضيوف الرحمن بكل تبجيل واحترام.', en: 'Our fleet is dedicated to serving the guests of the Merciful with full reverence and respect.' } },
        { iconName: 'Shield', title: { ar: 'سائقون معتمدون ومعروفون بالمنطقة', en: 'Certified Drivers Familiar with the Area' }, desc: { ar: 'جميع سائقينا على دراية تامة بشوارع مكة ومواقعها.', en: 'All our drivers are thoroughly familiar with Makkah\'s streets and sacred locations.' } },
        { iconName: 'Clock', title: { ar: 'متاحون ٢٤ ساعة طوال أيام الأسبوع', en: 'Available 24/7' }, desc: { ar: 'لا يتوقف الحرم ولا تتوقف خدمتنا — نحن هنا في أي وقت.', en: 'The Haram never stops and neither does our service — we\'re here anytime you need us.' } },
        { iconName: 'Banknote', title: { ar: 'أسعار خاصة لموسم الحج والعمرة', en: 'Special Prices for Hajj & Umrah Season' }, desc: { ar: 'باقات مميزة للحجاج والمعتمرين مع خصومات على الرحلات المتعددة.', en: 'Special packages for pilgrims with discounts on multiple trips throughout your stay.' } },
      ]}
      faqs={makkahFaqs}
      pricing={getPricing('jed-makkah', 'makkah-jed', 'ziyarat-makkah')}
    />
  )
}
