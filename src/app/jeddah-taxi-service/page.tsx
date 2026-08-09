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
        ar: 'نوفر لك أفضل خدمات النقل في عروس البحر الأحمر. من مطار الملك عبدالعزيز الدولي إلى كورنيش جدة، مراكز التسوق، والمناطق الأعمال — رحلات فاخرة بأسعار منافسة.',
        en: 'We provide the best transportation services in the Bride of the Red Sea. From King Abdulaziz International Airport to the Jeddah Corniche, shopping malls, and business districts — luxury trips at competitive prices.',
      }}
      heroImage="/hero/jeddah-hero-saudi-cabs-gmc.webp"
      services={[
        { iconName: 'Plane', title: { ar: 'مطار الملك عبدالعزيز', en: 'King Abdulaziz Airport' }, desc: { ar: 'استقبال وتوديع احترافي من Terminal 1 وTerminal 2 على مدار الساعة.', en: 'Professional pickup and drop-off from Terminal 1 and Terminal 2 around the clock.' } },
        { iconName: 'Waves', title: { ar: 'جولة كورنيش جدة', en: 'Jeddah Corniche Tour' }, desc: { ar: 'استمتع بجمال كورنيش جدة مع سائق خاص يأخذك أفضل المواقع.', en: 'Enjoy the beauty of Jeddah Corniche with a private driver taking you to the best spots.' } },
        { iconName: 'ShoppingBag', title: { ar: 'التسوق والمراكز التجارية', en: 'Shopping & Malls' }, desc: { ar: 'توصيل إلى مول العرب، طريق الكورنيش، وجميع المراكز التجارية.', en: 'Transfers to Mall of Arabia, Corniche Road, and all commercial centers in Jeddah.' } },
        { iconName: 'Briefcase', title: { ar: 'رحلات الأعمال', en: 'Business Trips' }, desc: { ar: 'سائق خاص أنيق لاجتماعاتك التجارية ومؤتمراتك بسيارات فاخرة.', en: 'An elegant private driver for your business meetings and conferences in luxury vehicles.' } },
        { iconName: 'Car', title: { ar: 'كاب بين المدن', en: 'Intercity Cab' }, desc: { ar: 'رحلات مريحة من جدة إلى مكة المكرمة، المدينة المنورة، والطائف.', en: 'Comfortable trips from Jeddah to Makkah, Madinah, and Taif.' } },
        { iconName: 'UserRound', title: { ar: 'سائق خاص (شوفير)', en: 'Private Driver (Chauffeur)' }, desc: { ar: 'سائق خاص لليوم أو الأسبوع. مرونة تامة في الجدول.', en: 'A private driver for the day or the week. Full flexibility in your schedule.' } },
        { iconName: 'Anchor', title: { ar: 'المواني والميناء', en: 'Ports & Harbor' }, desc: { ar: 'توصيل إلى ميناء جدة الإسلامي وجميع مواقع الميناء.', en: 'Transfer to Jeddah Islamic Port and all port locations.' } },
        { iconName: 'Building2', title: { ar: 'توصيل الفنادق الفاخرة', en: 'Luxury Hotel Transfer' }, desc: { ar: 'خدمة توصيل لفنادق الخمس نجوم والمنتجعات الفاخرة في جدة.', en: 'Transfer service to five-star hotels and luxury resorts in Jeddah.' } },
      ]}
      routes={[
        { label: { ar: 'مطار جدة ← مكة المكرمة', en: 'Jeddah Airport → Makkah' }, duration: '~50 min' },
        { label: { ar: 'جدة ← المدينة المنورة', en: 'Jeddah → Madinah' }, duration: '~4 hrs' },
        { label: { ar: 'جدة ← الطائف', en: 'Jeddah → Taif' }, duration: '~1.5 hrs' },
        { label: { ar: 'كورنيش جدة ← مول العرب', en: 'Jeddah Corniche → Mall of Arabia' }, duration: '~25 min' },
        { label: { ar: 'جدة ← رابغ', en: 'Jeddah → Rabigh' }, duration: '~1.5 hrs' },
        { label: { ar: 'المطار ← وسط جدة', en: 'Airport → Downtown Jeddah' }, duration: '~30 min' },
        { label: { ar: 'جدة ← الرياض', en: 'Jeddah → Riyadh' }, duration: '~10 hrs' },
        { label: { ar: 'جدة ← ينبع', en: 'Jeddah → Yanbu' }, duration: '~3.5 hrs' },
      ]}
      linkedRoutes={[
        { slug: 'jeddah-airport-to-makkah', label: { ar: 'مطار جدة ← مكة المكرمة', en: 'Jeddah Airport → Makkah' }, duration: '~55 min' },
        { slug: 'jeddah-airport-to-madinah', label: { ar: 'مطار جدة ← المدينة المنورة', en: 'Jeddah Airport → Madinah' }, duration: '~4 hrs' },
        { slug: 'jeddah-to-makkah', label: { ar: 'جدة ← مكة المكرمة', en: 'Jeddah → Makkah' }, duration: '~50 min' },
        { slug: 'jeddah-to-taif', label: { ar: 'جدة ← الطائف', en: 'Jeddah → Taif' }, duration: '~1.5 hrs' },
        { slug: 'madinah-to-jeddah', label: { ar: 'المدينة المنورة ← جدة', en: 'Madinah → Jeddah' }, duration: '~4 hrs' },
        { slug: 'makkah-to-jeddah', label: { ar: 'مكة المكرمة ← جدة', en: 'Makkah → Jeddah' }, duration: '~50 min' },
      ]}
      highlights={[
        { iconName: 'Plane', title: { ar: 'تغطية شاملة لمطار الملك عبدالعزيز', en: 'Full Coverage of King Abdulaziz Airport' }, desc: { ar: 'نغطي جميع صالات الوصول في المطار مع خدمة استقبال باللوحات.', en: 'We cover all arrival halls at the airport with professional meet-and-greet service.' } },
        { iconName: 'MapPin', title: { ar: 'سائقون يعرفون جدة جيداً', en: 'Drivers Who Know Jeddah Well' }, desc: { ar: 'إلمام تام بالطرق، الأحياء، ومعالم جدة التجارية والسياحية.', en: 'Full familiarity with roads, neighborhoods, and all commercial and tourist landmarks.' } },
        { iconName: 'Gem', title: { ar: 'سيارات فاخرة لرجال الأعمال', en: 'Luxury Cars for Business People' }, desc: { ar: 'أسطول من السيارات الفاخرة يليق بمقام ضيوفنا ورجال الأعمال.', en: 'A fleet of luxury vehicles befitting the stature of our guests and business travelers.' } },
        { iconName: 'Shield', title: { ar: 'تغطية كاملة لأحياء جدة', en: 'Complete Coverage of Jeddah Districts' }, desc: { ar: 'من الحمراء إلى المحمدية، ومن الروضة إلى أبحر — نصل إليك أينما كنت.', en: 'From Al-Hamra to Al-Muhammadiyah, from Al-Rawdah to Abhur — we reach you anywhere.' } },
      ]}
      faqs={jeddahFaqs}
      pricing={getPricing('jed-makkah', 'makkah-jed', 'jed-madinah')}
    />
  )
}
