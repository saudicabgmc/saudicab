'use client'
import JeddahLocationPage from '@/components/JeddahLocationPage'
import { jeddahFaqs } from '@/lib/faqData'
import { getPricing } from '@/lib/pricingData'

export default function JeddahPage() {
  return (
    <JeddahLocationPage
      cityName={{ ar: 'جدة', en: 'Jeddah' }}
      citySlug="jeddah-taxi-service"
      citySlogan={{ ar: 'عروس البحر الأحمر • البوابة الغربية', en: 'Bride of the Red Sea • Western Gateway' }}
      description={{
        ar: 'نوفر خدمات نقل موثوقة ومريحة في عروس البحر الأحمر. من مطار الملك عبدالعزيز الدولي إلى كورنيش جدة، مراكز التسوق، مناطق الأعمال، الفنادق، والوجهات الرئيسية — رحلات خاصة مريحة بأسعار شفافة ومنافسة.',
        en: 'We provide reliable and comfortable transportation services in the Bride of the Red Sea. From King Abdulaziz International Airport to the Jeddah Corniche, shopping malls, business districts, hotels, and major destinations — comfortable private trips at transparent, competitive fares.',
      }}
      heroImage="/hero/jeddah-hero-saudi-cabs-gmc.webp"
      services={[
        { iconName: 'Plane', title: { ar: 'مطار الملك عبدالعزيز', en: 'King Abdulaziz Airport' }, desc: { ar: 'استقبال وتوديع احترافي من Terminal 1 وTerminal 2 على مدار الساعة.', en: 'Professional pickup and drop-off from Terminal 1 and Terminal 2 around the clock.' } },
        { iconName: 'Waves', title: { ar: 'جولة كورنيش جدة', en: 'Jeddah Corniche Tour' }, desc: { ar: 'استمتع بجمال كورنيش جدة مع سائق خاص يأخذك أفضل المواقع.', en: 'Enjoy the beauty of Jeddah Corniche with a private driver taking you to the best spots.' } },
        { iconName: 'ShoppingBag', title: { ar: 'التسوق والمراكز التجارية', en: 'Shopping & Malls' }, desc: { ar: 'توصيل إلى مول العرب، طريق الكورنيش، والمراكز التجارية الرئيسية في جدة.', en: 'Transfers to Mall of Arabia, Corniche Road, and major commercial centers in Jeddah.' } },
        { iconName: 'Briefcase', title: { ar: 'رحلات الأعمال', en: 'Business Trips' }, desc: { ar: 'سائق خاص أنيق لاجتماعاتك التجارية ومؤتمراتك بسيارات فاخرة.', en: 'An elegant private driver for your business meetings and conferences in luxury vehicles.' } },
        { iconName: 'Car', title: { ar: 'كاب بين المدن', en: 'Intercity Cab' }, desc: { ar: 'رحلات مريحة من جدة إلى مكة المكرمة، المدينة المنورة، والطائف.', en: 'Comfortable trips from Jeddah to Makkah, Madinah, and Taif.' } },
        { iconName: 'UserRound', title: { ar: 'سائق خاص (شوفير)', en: 'Private Driver (Chauffeur)' }, desc: { ar: 'سائق خاص لليوم أو الأسبوع. مرونة تامة في الجدول.', en: 'A private driver for the day or the week. Full flexibility in your schedule.' } },
        { iconName: 'Anchor', title: { ar: 'المواني والميناء', en: 'Ports & Harbor' }, desc: { ar: 'توصيل إلى ميناء جدة الإسلامي والمناطق المحيطة به.', en: 'Transfer to Jeddah Islamic Port and surrounding port areas.' } },
        { iconName: 'Building2', title: { ar: 'توصيل الفنادق الفاخرة', en: 'Luxury Hotel Transfer' }, desc: { ar: 'خدمة توصيل لفنادق الخمس نجوم والمنتجعات الفاخرة في جدة.', en: 'Transfer service to five-star hotels and luxury resorts in Jeddah.' } },
      ]}
      routes={[
        { label: { ar: 'مطار جدة ← مكة المكرمة', en: 'Jeddah Airport → Makkah' }, duration: 'Approx. 55 min', href: '/jeddah-airport-to-makkah' },
        { label: { ar: 'مطار جدة ← المدينة المنورة', en: 'Jeddah Airport → Madinah' }, duration: 'Approx. 4 hrs', href: '/jeddah-airport-to-madinah' },
        { label: { ar: 'جدة ← مكة المكرمة', en: 'Jeddah → Makkah' }, duration: 'Approx. 50 min', href: '/jeddah-to-makkah' },
        { label: { ar: 'مكة المكرمة ← جدة', en: 'Makkah → Jeddah' }, duration: 'Approx. 50 min', href: '/makkah-to-jeddah' },
        { label: { ar: 'جدة ← المدينة المنورة', en: 'Jeddah → Madinah' }, duration: 'Approx. 4 hrs', href: '/jeddah-to-madinah' },
        { label: { ar: 'المدينة المنورة ← جدة', en: 'Madinah → Jeddah' }, duration: 'Approx. 4 hrs', href: '/madinah-to-jeddah' },
        { label: { ar: 'جدة ← الطائف', en: 'Jeddah → Taif' }, duration: 'Approx. 1.5 hrs', href: '/jeddah-to-taif' },
        { label: { ar: 'كورنيش جدة ← مول العرب', en: 'Jeddah Corniche → Mall of Arabia' }, duration: 'Approx. 25 min' },
        { label: { ar: 'جدة ← رابغ', en: 'Jeddah → Rabigh' }, duration: 'Approx. 1.5 hrs' },
        { label: { ar: 'المطار ← وسط جدة', en: 'Airport → Downtown Jeddah' }, duration: 'Approx. 30 min' },
        { label: { ar: 'جدة ← الرياض', en: 'Jeddah → Riyadh' }, duration: 'Approx. 10 hrs' },
        { label: { ar: 'جدة ← ينبع', en: 'Jeddah → Yanbu' }, duration: 'Approx. 3.5 hrs' },
      ]}
      highlights={[
        { iconName: 'Plane', title: { ar: 'توصيل مطار الملك عبدالعزيز', en: 'King Abdulaziz Airport Transfers' }, desc: { ar: 'خدمة استقبال وتوديع احترافية بلوحة الاسم في مطار الملك عبدالعزيز الدولي.', en: 'We provide professional pickup and drop-off services at King Abdulaziz International Airport.' } },
        { iconName: 'MapPin', title: { ar: 'سائقون يعرفون جدة جيداً', en: 'Drivers Who Know Jeddah Well' }, desc: { ar: 'إلمام بالطرق الرئيسية والأحياء ومعالم جدة التجارية والسياحية.', en: 'Familiarity with major roads, neighborhoods, commercial areas, and tourist landmarks in Jeddah.' } },
        { iconName: 'Gem', title: { ar: 'سيارات مريحة لرحلات الأعمال', en: 'Comfortable Vehicles for Business Travel' }, desc: { ar: 'أسطول من السيارات المريحة والمناسبة لرجال الأعمال والمسافرين.', en: 'A fleet of comfortable, well-maintained vehicles suited for business travelers and meetings.' } },
        { iconName: 'Shield', title: { ar: 'تغطية واسعة لأحياء جدة', en: 'Wide Coverage of Jeddah Districts' }, desc: { ar: 'من الحمراء إلى المحمدية، ومن الروضة إلى أبحر — نوفر توصيلاً عبر أبرز أحياء جدة.', en: 'From Al-Hamra to Al-Muhammadiyah, from Al-Rawdah to Abhur — we provide transfers across major Jeddah districts.' } },
      ]}
      faqs={jeddahFaqs}
      pricing={getPricing('jed-makkah', 'makkah-jed', 'jed-madinah')}
    />
  )
}
