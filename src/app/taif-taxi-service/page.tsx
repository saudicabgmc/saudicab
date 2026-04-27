'use client'
import LocationPage from '@/components/LocationPage'
import { taifFaqs } from '@/lib/faqData'

export default function TaifPage() {
  return (
    <LocationPage
      cityName={{ ar: 'الطائف', en: 'Taif' }}
      citySlug="taif-taxi-service"
      citySlogan={{ ar: 'عاصمة الورد • منتجع الجبال الخلابة', en: 'Rose Capital • Scenic Mountain Resort' }}
      description={{
        ar: 'استمتع بجمال مدينة الورد والأجواء المعتدلة مع خدمات النقل المتميزة. رحلات إلى شفا وهدا ومزارع الورد، وتوصيل من مطار الطائف بسائقين يعرفون طرق الجبال بكل دراية وأمان.',
        en: 'Enjoy the beauty of the Rose City and its pleasant weather with premium transportation services. Trips to Shafa, Hada, and the rose farms, plus transfers from Taif Airport with drivers who know every mountain road safely and expertly.',
      }}
      heroImage="https://images.unsplash.com/photo-1621501103258-3e13e28c1fea?auto=format&fit=crop&q=80&w=2000"
      services={[
        { iconName: 'Mountain', title: { ar: 'جولات شفا وهدا', en: 'Shafa & Hada Tours' }, desc: { ar: 'استكشف أجمل المناطق الجبلية في الطائف مع سائق يعرف كل طريق.', en: 'Explore the most beautiful mountain areas around Taif with a driver who knows every road.' } },
        { iconName: 'Leaf', title: { ar: 'مزارع الورد الطائفي', en: 'Taif Rose Farms' }, desc: { ar: 'زيارة مزارع الورد الشهيرة ومصانع عطر الورد الطائفي الأصيل.', en: 'Visit the famous rose farms and authentic Taif rose perfume factories.' } },
        { iconName: 'Plane', title: { ar: 'مطار الطائف', en: 'Taif Airport' }, desc: { ar: 'استقبال وتوديع احترافي من مطار الطائف المحلي والدولي.', en: 'Professional pickup and drop-off from Taif local and international airport.' } },
        { iconName: 'Car', title: { ar: 'كاب بين المدن', en: 'Intercity Cab' }, desc: { ar: 'رحلات مريحة من الطائف إلى جدة، مكة المكرمة، والرياض.', en: 'Comfortable trips from Taif to Jeddah, Makkah, and Riyadh.' } },
        { iconName: 'TreePine', title: { ar: 'المنتجعات والاستراحات', en: 'Resorts & Rest Houses' }, desc: { ar: 'توصيل إلى المنتجعات، الاستراحات، وأماكن التخييم في جبال الطائف.', en: 'Transfer to resorts, rest houses, and camping areas in the Taif mountains.' } },
        { iconName: 'Briefcase', title: { ar: 'سائق خاص', en: 'Private Driver' }, desc: { ar: 'سائق خاص لإقامتك في الطائف. راحة تامة في استكشاف المدينة.', en: 'A private driver for your stay in Taif. Full comfort in exploring the city at your own pace.' } },
        { iconName: 'ShoppingCart', title: { ar: 'أسواق الفاكهة والتسوق', en: 'Fruit Markets & Shopping' }, desc: { ar: 'توصيل إلى أسواق الفاكهة الشهيرة ومراكز التسوق في الطائف.', en: 'Transfer to the famous fruit markets and shopping centers in Taif.' } },
        { iconName: 'MapPin', title: { ar: 'الأحياء الراقية', en: 'Upscale Neighborhoods' }, desc: { ar: 'تغطية الفيصلية، حي الشهداء، الهدا، وجميع أحياء الطائف.', en: 'Coverage of Al-Faisaliyah, Al-Shuhada, Al-Hada, and all Taif neighborhoods.' } },
      ]}
      routes={[
        { label: { ar: 'الطائف ← جدة', en: 'Taif → Jeddah' }, duration: '~1.5 hrs' },
        { label: { ar: 'الطائف ← مكة المكرمة', en: 'Taif → Makkah' }, duration: '~1.5 hrs' },
        { label: { ar: 'الطائف ← شفا', en: 'Taif → Shafa' }, duration: '~30 min' },
        { label: { ar: 'الطائف ← هدا', en: 'Taif → Hada' }, duration: '~20 min' },
        { label: { ar: 'الطائف ← الرياض', en: 'Taif → Riyadh' }, duration: '~8 hrs' },
        { label: { ar: 'المطار ← وسط الطائف', en: 'Airport → Downtown Taif' }, duration: '~25 min' },
        { label: { ar: 'الطائف ← الهدا ← شفا', en: 'Taif → Hada → Shafa' }, duration: '~45 min' },
        { label: { ar: 'الطائف ← المدينة المنورة', en: 'Taif → Madinah' }, duration: '~5 hrs' },
      ]}
      highlights={[
        { iconName: 'Mountain', title: { ar: 'خبراء طرق الجبال', en: 'Mountain Road Experts' }, desc: { ar: 'سائقونا متمرسون على طرق الجبال الجميلة حول شفا وهدا والطائف.', en: 'Our drivers are experienced on the scenic mountain roads around Shafa, Hada, and Taif.' } },
        { iconName: 'Leaf', title: { ar: 'مرشدون للسياحة الداخلية', en: 'Domestic Tourism Guides' }, desc: { ar: 'يعرف سائقونا أفضل المواقع السياحية ومزارع الورد في المنطقة.', en: 'Our drivers know the best tourist spots and rose farms throughout the region.' } },
        { iconName: 'Sun', title: { ar: 'خدمة الصيف والمنتجعات', en: 'Summer & Resort Service' }, desc: { ar: 'نستقبل الزوار القادمين للاستمتاع بالأجواء الباردة في موسم الصيف.', en: 'We welcome visitors coming to enjoy the cool mountain climate during summer season.' } },
        { iconName: 'Banknote', title: { ar: 'باقات اليوم الكامل', en: 'Full-Day Packages' }, desc: { ar: 'باقات جولة يوم كامل بسعر ثابت لاستكشاف جميع معالم الطائف.', en: 'Full-day tour packages at a fixed price to explore all of Taif\'s landmarks and attractions.' } },
      ]}
      faqs={taifFaqs}
    />
  )
}
