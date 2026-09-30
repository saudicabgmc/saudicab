'use client'
import TaifLocationPage from '@/components/TaifLocationPage'
import { taifFaqs } from '@/lib/faqData'

export default function TaifPage() {
  return (
    <TaifLocationPage
      cityName={{ ar: 'الطائف', en: 'Taif' }}
      citySlug="taif-taxi-service"
      citySlogan={{ ar: 'عاصمة الورد • منتجع الجبال الخلابة', en: 'Rose Capital • Scenic Mountain Resort' }}
      description={{
        ar: 'استمتع بجمال مدينة الورد والأجواء المعتدلة مع خدمات النقل المتميزة. رحلات إلى شفا وهدا ومزارع الورد، وتوصيل من مطار الطائف بسائقين ذوي خبرة على دراية بالطرق الجبلية الرئيسية حول الطائف.',
        en: 'Enjoy the beauty of the Rose City and its pleasant weather with premium transportation services. Trips to Shafa, Hada, and the rose farms, plus transfers from Taif Airport with experienced drivers familiar with the main mountain roads around Taif.',
      }}
      heroImage="/location/taif.webp"
      services={[
        { iconName: 'Mountain', title: { ar: 'جولات شفا وهدا', en: 'Shafa & Hada Tours' }, desc: { ar: 'استكشف المناطق الجبلية الشهيرة في الطائف مع سائق على دراية بالطرق الجبلية الرئيسية.', en: 'Explore the popular mountain areas around Taif with a driver familiar with the main mountain roads.' } },
        { iconName: 'Leaf', title: { ar: 'مزارع الورد الطائفي', en: 'Taif Rose Farms' }, desc: { ar: 'زيارة مزارع الورد الشهيرة ومصانع عطر الورد الطائفي الأصيل.', en: 'Visit the famous rose farms and authentic Taif rose perfume factories.' } },
        { iconName: 'Plane', title: { ar: 'مطار الطائف', en: 'Taif Airport' }, desc: { ar: 'خدمة استقبال وتوديع احترافية من مطار الطائف الدولي.', en: 'Professional pickup and drop-off services from Taif International Airport.' } },
        { iconName: 'Car', title: { ar: 'كاب بين المدن', en: 'Intercity Cab' }, desc: { ar: 'رحلات مريحة من الطائف إلى جدة، مكة المكرمة، والرياض. راجع دليل <a href="/blog/taif-to-makkah-by-taxi" style="color:#2d6a4f;font-weight:700;">الطائف إلى مكة بالتاكسي</a>، أو تصفح خدمات <a href="/hajj-umrah-transport" style="color:#2d6a4f;font-weight:700;">نقل الحج والعمرة</a>.', en: 'Comfortable trips from Taif to Jeddah, Makkah, and Riyadh. Read our <a href="/blog/taif-to-makkah-by-taxi" style="color:#2d6a4f;font-weight:700;">Taif to Makkah by taxi guide</a>, or see our <a href="/hajj-umrah-transport" style="color:#2d6a4f;font-weight:700;">Hajj & Umrah transport</a> options.' } },
        { iconName: 'TreePine', title: { ar: 'المنتجعات والاستراحات', en: 'Resorts & Rest Houses' }, desc: { ar: 'توصيل إلى المنتجعات، الاستراحات، وأماكن التخييم في جبال الطائف.', en: 'Transfer to resorts, rest houses, and camping areas in the Taif mountains.' } },
        { iconName: 'Briefcase', title: { ar: 'سائق خاص', en: 'Private Driver' }, desc: { ar: 'سائق خاص لإقامتك في الطائف. راحة تامة في استكشاف المدينة. اختر <a href="/toyota-camry-taxi" style="color:#2d6a4f;font-weight:700;">سيدان</a>، <a href="/hyundai-staria-taxi" style="color:#2d6a4f;font-weight:700;">هيونداي ستاريا</a> أو <a href="/gmc-yukon-hire" style="color:#2d6a4f;font-weight:700;">GMC يوكون</a>.', en: 'A private driver for your stay in Taif. Full comfort in exploring the city at your own pace. Choose a <a href="/toyota-camry-taxi" style="color:#2d6a4f;font-weight:700;">Sedan</a>, <a href="/hyundai-staria-taxi" style="color:#2d6a4f;font-weight:700;">Hyundai Staria</a> or <a href="/gmc-yukon-hire" style="color:#2d6a4f;font-weight:700;">GMC Yukon</a>.' } },
        { iconName: 'ShoppingCart', title: { ar: 'أسواق الفاكهة والتسوق', en: 'Fruit Markets & Shopping' }, desc: { ar: 'توصيل إلى أسواق الفاكهة الشهيرة ومراكز التسوق في الطائف.', en: 'Transfer to the famous fruit markets and shopping centers in Taif.' } },
        { iconName: 'MapPin', title: { ar: 'أحياء الطائف الرئيسية', en: 'Major Taif Neighborhoods' }, desc: { ar: 'تغطية الفيصلية وحي الشهداء والهدا وأحياء رئيسية أخرى في الطائف.', en: 'Coverage of Al-Faisaliyah, Al-Shuhada, Al-Hada, and other major Taif neighborhoods.' } },
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
      linkedRoutes={[
        { slug: 'taif-to-jeddah', label: { ar: 'الطائف ← جدة', en: 'Taif → Jeddah' }, duration: '~1.5 hrs' },
        { slug: 'taif-to-madinah', label: { ar: 'الطائف ← المدينة المنورة', en: 'Taif → Madinah' }, duration: '~5 hrs' },
        { slug: 'makkah-to-taif', label: { ar: 'مكة المكرمة ← الطائف', en: 'Makkah → Taif' }, duration: '~1.5 hrs' },
        { slug: 'jeddah-to-taif', label: { ar: 'جدة ← الطائف', en: 'Jeddah → Taif' }, duration: '~1.5 hrs' },
        { slug: 'taif-to-makkah', label: { ar: 'الطائف ← مكة المكرمة', en: 'Taif → Makkah' }, duration: '~1.5 hrs' },
        { slug: 'taif-airport-taxi', label: { ar: 'مطار الطائف ← وسط المدينة', en: 'Taif Airport → City Center' }, duration: '~20–30 min' },
      ]}
      highlights={[
        { iconName: 'Mountain', title: { ar: 'خبراء طرق الجبال', en: 'Mountain Road Experts' }, desc: { ar: 'سائقونا متمرسون على طرق الجبال الجميلة حول شفا وهدا والطائف.', en: 'Our drivers are experienced on the scenic mountain roads around Shafa, Hada, and Taif.' } },
        { iconName: 'Leaf', title: { ar: 'سائقون ذوو خبرة في الطائف', en: 'Experienced Taif Drivers' }, desc: { ar: 'سائقونا على دراية بالمواقع السياحية الشهيرة ومزارع الورد حول الطائف.', en: 'Our drivers are familiar with popular tourist spots and rose farms around Taif.' } },
        { iconName: 'Sun', title: { ar: 'خدمة الصيف والمنتجعات', en: 'Summer & Resort Service' }, desc: { ar: 'نستقبل الزوار القادمين للاستمتاع بالأجواء الباردة في موسم الصيف.', en: 'We welcome visitors coming to enjoy the cool mountain climate during summer season.' } },
        { iconName: 'Banknote', title: { ar: 'باقات اليوم الكامل', en: 'Full-Day Packages' }, desc: { ar: 'يمكن ترتيب رحلات خاصة ليوم كامل لاستكشاف معالم الطائف الشهيرة. يعتمد السعر النهائي على البرنامج المختار وتفاصيل الرحلة — راجع <a href="/taxi-prices-saudi-arabia" style="color:#2d6a4f;font-weight:700;">أسعار التاكسي في الطائف</a>.', en: 'Full-day private trips can be arranged to explore popular landmarks and attractions around Taif. Final fare depends on the selected itinerary — see <a href="/taxi-prices-saudi-arabia" style="color:#2d6a4f;font-weight:700;">Taif taxi prices</a> for route fares.' } },
      ]}
      faqs={taifFaqs}
    />
  )
}
