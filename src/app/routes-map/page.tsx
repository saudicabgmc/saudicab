'use client'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, MapPin, X, Plane, ArrowRight } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const CITIES = [
  {
    id: 'riyadh',
    name: { en: 'Riyadh', ar: 'الرياض' },
    x: 62, y: 52,
    color: 'var(--primary)',
    slug: null,
  },
  {
    id: 'jeddah',
    name: { en: 'Jeddah', ar: 'جدة' },
    x: 22, y: 55,
    color: '#1e6fa8',
    slug: 'jeddah-taxi-service',
  },
  {
    id: 'makkah',
    name: { en: 'Makkah', ar: 'مكة المكرمة' },
    x: 26, y: 60,
    color: '#0B3D2E',
    slug: 'makkah-taxi-service',
  },
  {
    id: 'madinah',
    name: { en: 'Madinah', ar: 'المدينة المنورة' },
    x: 30, y: 32,
    color: '#2d7a4f',
    slug: 'madinah-taxi-service',
  },
  {
    id: 'taif',
    name: { en: 'Taif', ar: 'الطائف' },
    x: 32, y: 63,
    color: '#7c3aed',
    slug: 'taif-taxi-service',
  },
  {
    id: 'dammam',
    name: { en: 'Dammam', ar: 'الدمام' },
    x: 82, y: 42,
    color: '#b45309',
    slug: null,
  },
]

const CITY_ORDER = ['makkah', 'jeddah', 'madinah', 'taif', 'riyadh', 'dammam']

// City-pair connections drawn on the SVG map (undirected — one line per pair)
const MAP_CONNECTIONS = [
  { from: 'jeddah', to: 'makkah',  label: { en: 'Approx. 50 min', ar: '~50 دقيقة' }, type: 'short' },
  { from: 'jeddah', to: 'madinah', label: { en: 'Approx. 4 hrs',  ar: '~4 ساعات' },  type: 'long'  },
  { from: 'jeddah', to: 'taif',    label: { en: 'Approx. 1.5 hrs', ar: '~1.5 ساعة' }, type: 'medium'},
  { from: 'makkah', to: 'madinah', label: { en: 'Approx. 4.5 hrs', ar: '~4.5 ساعات' }, type: 'long'  },
  { from: 'makkah', to: 'taif',    label: { en: 'Approx. 1.5 hrs', ar: '~1.5 ساعة' }, type: 'medium'},
  { from: 'makkah', to: 'riyadh',  label: { en: 'Approx. 8–9 hrs', ar: '~8–9 ساعات' }, type: 'long'  },
  { from: 'taif',   to: 'madinah', label: { en: 'Approx. 5 hrs',  ar: '~5 ساعات' },  type: 'long'  },
  { from: 'riyadh', to: 'madinah', label: { en: 'Approx. 9–10 hrs', ar: '~9–10 ساعات' }, type: 'long' },
  { from: 'riyadh', to: 'jeddah',  label: { en: 'Approx. 9 hrs',  ar: '~9 ساعات' },  type: 'long'  },
  { from: 'makkah', to: 'dammam',  label: { en: 'Approx. 8–9 hrs', ar: '~8–9 ساعات' }, type: 'long'  },
  { from: 'dammam', to: 'madinah', label: { en: 'Approx. 9–10 hrs', ar: '~9–10 ساعات' }, type: 'long' },
]

// Every real, working route page — the source of truth for the grid and the per-city panel.
const ROUTE_PAGES = [
  // ── Intercity — 5-city network ──
  { slug: 'jeddah-to-makkah',   fromId: 'jeddah', toId: 'makkah',  from: { en: 'Jeddah', ar: 'جدة' },  to: { en: 'Makkah', ar: 'مكة المكرمة' },  duration: { en: 'Approx. 50 min', ar: 'حوالي ٥٠ دقيقة' },   type: 'short',  category: 'intercity' as const },
  { slug: 'makkah-to-jeddah',   fromId: 'makkah', toId: 'jeddah',  from: { en: 'Makkah', ar: 'مكة المكرمة' },  to: { en: 'Jeddah', ar: 'جدة' },  duration: { en: 'Approx. 50 min', ar: 'حوالي ٥٠ دقيقة' },   type: 'short',  category: 'intercity' as const },
  { slug: 'jeddah-to-madinah',  fromId: 'jeddah', toId: 'madinah', from: { en: 'Jeddah', ar: 'جدة' },  to: { en: 'Madinah', ar: 'المدينة المنورة' }, duration: { en: 'Approx. 4 hrs', ar: 'حوالي ٤ ساعات' },    type: 'long',   category: 'intercity' as const },
  { slug: 'madinah-to-jeddah',  fromId: 'madinah', toId: 'jeddah', from: { en: 'Madinah', ar: 'المدينة المنورة' }, to: { en: 'Jeddah', ar: 'جدة' },  duration: { en: 'Approx. 4 hrs', ar: 'حوالي ٤ ساعات' },    type: 'long',   category: 'intercity' as const },
  { slug: 'jeddah-to-taif',     fromId: 'jeddah', toId: 'taif',    from: { en: 'Jeddah', ar: 'جدة' },  to: { en: 'Taif', ar: 'الطائف' },    duration: { en: 'Approx. 1.5 hrs', ar: 'حوالي ١.٥ ساعة' },  type: 'medium', category: 'intercity' as const },
  { slug: 'taif-to-jeddah',     fromId: 'taif', toId: 'jeddah',    from: { en: 'Taif', ar: 'الطائف' },    to: { en: 'Jeddah', ar: 'جدة' },  duration: { en: 'Approx. 1.5 hrs', ar: 'حوالي ١.٥ ساعة' },  type: 'medium', category: 'intercity' as const },
  { slug: 'makkah-to-madinah',  fromId: 'makkah', toId: 'madinah', from: { en: 'Makkah', ar: 'مكة المكرمة' },  to: { en: 'Madinah', ar: 'المدينة المنورة' }, duration: { en: 'Approx. 4.5 hrs', ar: 'حوالي ٤.٥ ساعات' },  type: 'long',   category: 'intercity' as const },
  { slug: 'madinah-to-makkah',  fromId: 'madinah', toId: 'makkah', from: { en: 'Madinah', ar: 'المدينة المنورة' }, to: { en: 'Makkah', ar: 'مكة المكرمة' },  duration: { en: 'Approx. 4–4.5 hrs', ar: 'حوالي ٤–٤.٥ ساعات' }, type: 'long',   category: 'intercity' as const },
  { slug: 'makkah-to-taif',     fromId: 'makkah', toId: 'taif',    from: { en: 'Makkah', ar: 'مكة المكرمة' },  to: { en: 'Taif', ar: 'الطائف' },    duration: { en: 'Approx. 1.5 hrs', ar: 'حوالي ١.٥ ساعة' },  type: 'medium', category: 'intercity' as const },
  { slug: 'taif-to-makkah',     fromId: 'taif', toId: 'makkah',    from: { en: 'Taif', ar: 'الطائف' },    to: { en: 'Makkah', ar: 'مكة المكرمة' },  duration: { en: 'Approx. 1.5 hrs', ar: 'حوالي ١.٥ ساعة' },  type: 'medium', category: 'intercity' as const },
  { slug: 'makkah-to-riyadh',   fromId: 'makkah', toId: 'riyadh',  from: { en: 'Makkah', ar: 'مكة المكرمة' },  to: { en: 'Riyadh', ar: 'الرياض' },  duration: { en: 'Approx. 8–9 hrs', ar: 'حوالي ٨–٩ ساعات' },  type: 'long',   category: 'intercity' as const },
  { slug: 'riyadh-to-makkah',   fromId: 'riyadh', toId: 'makkah',  from: { en: 'Riyadh', ar: 'الرياض' },  to: { en: 'Makkah', ar: 'مكة المكرمة' },  duration: { en: 'Approx. 8–9 hrs', ar: 'حوالي ٨–٩ ساعات' },  type: 'long',   category: 'intercity' as const },
  { slug: 'taif-to-madinah',    fromId: 'taif', toId: 'madinah',   from: { en: 'Taif', ar: 'الطائف' },    to: { en: 'Madinah', ar: 'المدينة المنورة' }, duration: { en: 'Approx. 5 hrs', ar: 'حوالي ٥ ساعات' },    type: 'long',   category: 'intercity' as const },
  { slug: 'riyadh-to-madinah',  fromId: 'riyadh', toId: 'madinah', from: { en: 'Riyadh', ar: 'الرياض' },  to: { en: 'Madinah', ar: 'المدينة المنورة' }, duration: { en: 'Approx. 9–10 hrs', ar: 'حوالي ٩–١٠ ساعات' }, type: 'long',   category: 'intercity' as const },
  { slug: 'riyadh-to-jeddah',   fromId: 'riyadh', toId: 'jeddah',  from: { en: 'Riyadh', ar: 'الرياض' },  to: { en: 'Jeddah', ar: 'جدة' },  duration: { en: 'Approx. 9 hrs', ar: 'حوالي ٩ ساعات' },    type: 'long',   category: 'intercity' as const },
  // ── Intercity — beyond the 5-city network ──
  { slug: 'makkah-to-dammam',   fromId: 'makkah', toId: 'dammam',  from: { en: 'Makkah', ar: 'مكة المكرمة' },  to: { en: 'Dammam', ar: 'الدمام' },  duration: { en: 'Approx. 8–9 hrs', ar: 'حوالي ٨–٩ ساعات' },  type: 'long',   category: 'intercity' as const },
  { slug: 'dammam-to-makkah',   fromId: 'dammam', toId: 'makkah',  from: { en: 'Dammam', ar: 'الدمام' },  to: { en: 'Makkah', ar: 'مكة المكرمة' },  duration: { en: 'Approx. 8–9 hrs', ar: 'حوالي ٨–٩ ساعات' },  type: 'long',   category: 'intercity' as const },
  { slug: 'dammam-to-madinah',  fromId: 'dammam', toId: 'madinah', from: { en: 'Dammam', ar: 'الدمام' },  to: { en: 'Madinah', ar: 'المدينة المنورة' }, duration: { en: 'Approx. 9–10 hrs', ar: 'حوالي ٩–١٠ ساعات' }, type: 'long',   category: 'intercity' as const },
  // ── Airport transfers ──
  { slug: 'jeddah-airport-to-makkah',  fromId: 'jeddah',  toId: 'makkah',  from: { en: 'Jeddah Airport', ar: 'مطار جدة' },  to: { en: 'Makkah', ar: 'مكة المكرمة' },           duration: { en: 'Approx. 50–60 min', ar: 'حوالي ٥٠–٦٠ دقيقة' }, category: 'airport' as const },
  { slug: 'makkah-to-jeddah-airport',  fromId: 'makkah',  toId: 'jeddah',  from: { en: 'Makkah', ar: 'مكة المكرمة' },          to: { en: 'Jeddah Airport', ar: 'مطار جدة' },  duration: { en: 'Approx. 55–65 min', ar: 'حوالي ٥٥–٦٥ دقيقة' }, category: 'airport' as const },
  { slug: 'jeddah-airport-to-madinah', fromId: 'jeddah',  toId: 'madinah', from: { en: 'Jeddah Airport', ar: 'مطار جدة' },  to: { en: 'Madinah', ar: 'المدينة المنورة' },          duration: { en: 'Approx. 3.5–4 hrs', ar: 'حوالي ٣.٥–٤ ساعات' }, category: 'airport' as const },
  { slug: 'madinah-airport-taxi',      fromId: 'madinah', toId: 'madinah', from: { en: 'Madinah Airport', ar: 'مطار المدينة' }, to: { en: "Prophet's Mosque", ar: 'المسجد النبوي' }, duration: { en: 'Approx. 25–35 min', ar: 'حوالي ٢٥–٣٥ دقيقة' }, category: 'airport' as const },
  { slug: 'taif-airport-taxi',         fromId: 'taif',    toId: 'taif',    from: { en: 'Taif Airport', ar: 'مطار الطائف' },    to: { en: 'Taif City', ar: 'مدينة الطائف' },       duration: { en: 'Approx. 20–30 min', ar: 'حوالي ٢٠–٣٠ دقيقة' }, category: 'airport' as const },
]

// Curated quick-access slugs for the Popular Routes strip — looked up from ROUTE_PAGES, not restated.
const POPULAR_SLUGS = ['jeddah-to-makkah', 'makkah-to-madinah', 'jeddah-to-madinah', 'jeddah-to-taif', 'riyadh-to-makkah', 'riyadh-to-madinah', 'riyadh-to-jeddah']

const ROUTE_COLORS: Record<string, string> = {
  short:  '#D4AF37',
  medium: '#0ea5e9',
  long:   '#ef4444',
}

const TYPE_LABEL: Record<string, { en: string; ar: string }> = {
  short:  { en: 'Short', ar: 'قصير' },
  medium: { en: 'Medium', ar: 'متوسط' },
  long:   { en: 'Long', ar: 'طويل' },
}

const WA_NUMBER = '923097811785'
const waUrl = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

const routesMapFaqs = [
  {
    q: { en: 'How many routes does Saudi Cabs GMC cover?', ar: 'كم عدد الخطوط التي تغطيها Saudi Cabs GMC؟' },
    a: {
      en: 'Saudi Cabs GMC operates a network of intercity and airport transfer routes connecting Makkah, Madinah, Jeddah and Taif, plus intercity transfers to and from Riyadh and Dammam. The full current list is shown on this page — new routes are added as they become available.',
      ar: 'تشغّل Saudi Cabs GMC شبكة من خطوط النقل بين المدن وتوصيل المطارات تربط مكة المكرمة والمدينة المنورة وجدة والطائف، بالإضافة إلى رحلات بين المدن من وإلى الرياض والدمام. القائمة الكاملة الحالية موضحة في هذه الصفحة، ويتم إضافة خطوط جديدة عند توفرها.',
    },
  },
  {
    q: { en: 'Are the fares shown on this route map fixed?', ar: 'هل الأسعار الموضحة في خريطة الخطوط ثابتة؟' },
    a: {
      en: 'Each route has a route-based fixed fare per vehicle — no meter, no surge pricing. The exact fare for your selected vehicle is confirmed via WhatsApp before your trip is booked.',
      ar: 'كل خط له سعر ثابت حسب المسار والسيارة المختارة — بدون عداد وبدون تغير مفاجئ في السعر. يتم تأكيد السعر النهائي للسيارة التي تختارها عبر واتساب قبل تأكيد الحجز.',
    },
  },
  {
    q: { en: 'Are the travel times on the map guaranteed?', ar: 'هل أوقات الرحلات الموضحة في الخريطة مضمونة؟' },
    a: {
      en: 'No — travel times shown are approximate. Actual duration depends on traffic, your pickup location, and road conditions on the day of travel.',
      ar: 'لا — أوقات الرحلات الموضحة تقريبية. المدة الفعلية تعتمد على حركة المرور وموقع الاستلام وحالة الطريق في يوم السفر.',
    },
  },
  {
    q: { en: 'How do I book a route from this map?', ar: 'كيف أحجز خطاً من هذه الخريطة؟' },
    a: {
      en: 'Click any city marker or route card to open its page, or tap "Book via WhatsApp" to message us directly with your pickup, destination, date and time. We confirm the vehicle and fare before your trip.',
      ar: 'اضغط على أي مدينة أو بطاقة خط لفتح صفحتها، أو اضغط "احجز عبر واتساب" لمراسلتنا مباشرة بموقع الاستلام والوجهة والتاريخ والوقت. نؤكد لك السيارة والسعر قبل رحلتك.',
    },
  },
  {
    q: { en: 'Is transport available between Riyadh and the other cities?', ar: 'هل يتوفر نقل بين الرياض والمدن الأخرى؟' },
    a: {
      en: 'Yes — intercity transfers are available between Riyadh and Makkah, Madinah and Jeddah. These are long-distance intercity trips; contact us via WhatsApp to confirm the vehicle and fare for your travel date.',
      ar: 'نعم — تتوفر رحلات بين المدن تربط الرياض بمكة المكرمة والمدينة المنورة وجدة. هذه رحلات طويلة بين المدن؛ تواصل معنا عبر واتساب لتأكيد السيارة والسعر لتاريخ سفرك.',
    },
  },
  {
    q: { en: "What if my route isn't listed on the map?", ar: 'ماذا لو لم يكن خطي مدرجاً في الخريطة؟' },
    a: {
      en: "Message us on WhatsApp with your pickup and destination and we'll confirm whether we can arrange the trip and the applicable fare.",
      ar: 'راسلنا عبر واتساب بموقع الاستلام والوجهة وسنؤكد لك إمكانية ترتيب الرحلة والسعر المطبق.',
    },
  },
]

type TypeFilter = 'all' | 'short' | 'medium' | 'long'

function useReveal() {
  const reduceMotion = useReducedMotion()
  return (i = 0) => reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.4, delay: Math.min(i * 0.05, 0.25) },
      }
}

export default function RoutesMap() {
  const { lang, isAr } = useLang()
  const reduceMotion = useReducedMotion()
  const reveal = useReveal()
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<typeof CITIES[0] | null>(null)
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all')
  const [cityFilterId, setCityFilterId] = useState<string | null>(null)

  const getCityPos = (id: string) => CITIES.find(c => c.id === id)!
  const selectCity = (city: typeof CITIES[0]) => setSelectedCity(selectedCity?.id === city.id ? null : city)
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip"

  const intercityPages = ROUTE_PAGES.filter(r => r.category === 'intercity')
  const airportPages = ROUTE_PAGES.filter(r => r.category === 'airport')

  const filteredIntercity = useMemo(
    () => intercityPages.filter(r => typeFilter === 'all' || r.type === typeFilter),
    [typeFilter]
  )

  const groups = useMemo(() => {
    if (cityFilterId) {
      const cityName = CITIES.find(c => c.id === cityFilterId)!.name
      const routes = filteredIntercity.filter(r => r.fromId === cityFilterId || r.toId === cityFilterId)
      return routes.length ? [{ cityId: cityFilterId, cityName, routes }] : []
    }
    return CITY_ORDER
      .map(cityId => ({ cityId, cityName: CITIES.find(c => c.id === cityId)!.name, routes: filteredIntercity.filter(r => r.fromId === cityId) }))
      .filter(g => g.routes.length > 0)
  }, [cityFilterId, filteredIntercity])

  const popularRoutes = POPULAR_SLUGS.map(slug => ROUTE_PAGES.find(r => r.slug === slug)!).filter(Boolean)

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>

      {/* ── Hero ── */}
      <section className="animate-fadeInUp" style={{ padding: '72px 0 48px', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
            {isAr ? 'شبكة النقل الخاص في السعودية' : 'Saudi Arabia Private Transport Network'}
          </span>
          <h1 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: 900, marginTop: '16px', marginBottom: '16px', lineHeight: 1.2 }}>
            {isAr
              ? <>خطوط التاكسي والنقل الخاص <span style={{ color: 'var(--primary)' }}>عبر السعودية</span></>
              : <>Taxi &amp; Private Transport <span style={{ color: 'var(--primary)' }}>Routes Across Saudi Arabia</span></>
            }
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, maxWidth: '620px', margin: '0 auto 32px', lineHeight: 1.8 }}>
            {isAr
              ? 'استكشف خطوط التاكسي الخاص بين مكة المكرمة والمدينة المنورة وجدة والطائف والرياض والدمام. اختر خطك لعرض تفاصيل الرحلة وحجزها عبر واتساب.'
              : 'Explore private taxi routes between Makkah, Madinah, Jeddah, Taif, Riyadh and Dammam. Choose your route to view travel details and book your private ride via WhatsApp.'
            }
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 28px' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
            </a>
            <a href="#routes-grid" className="btn-outline mk-btn mk-focus" style={{ padding: '14px 28px', borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              {isAr ? 'استكشف الخطوط' : 'Explore Routes'}
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section aria-label={isAr ? 'إحصائيات الشبكة' : 'Network stats'} style={{ padding: '28px 0', background: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
            {[
              { n: `${ROUTE_PAGES.length}+`, l: isAr ? 'خط' : 'Routes' },
              { n: String(CITIES.length), l: isAr ? 'مدن رئيسية' : 'Major Cities' },
              { n: '24/7', l: isAr ? 'حجز عبر واتساب' : 'WhatsApp Booking' },
              { n: '3', l: isAr ? 'خيارات سيارات' : 'Vehicle Options' },
            ].map((s, i) => (
              <motion.div key={s.l} {...reveal(i)} style={{
                textAlign: 'center', background: 'var(--card, #fff)', borderRadius: '14px', padding: '18px 12px', border: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: '1.7rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)', marginTop: '6px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular routes (quick access) ── */}
      <section aria-labelledby="popular-routes-title" style={{ padding: '44px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 id="popular-routes-title" style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '14px', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {isAr ? 'أشهر الخطوط' : 'Most Popular Routes'}
          </h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {popularRoutes.map(r => (
              <Link key={r.slug} href={`/${r.slug}`} className="mk-focus" style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '9px 16px', borderRadius: '50px', textDecoration: 'none',
                border: '1.5px solid var(--border)', background: 'var(--card, #fff)',
                fontSize: '0.84rem', fontWeight: 700, color: 'var(--foreground)',
              }}>
                {r.from[lang]} <ArrowRight size={12} style={{ transform: isAr ? 'scaleX(-1)' : undefined, opacity: 0.5 }} /> {r.to[lang]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section id="route-map" style={{ padding: '56px 0 40px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '8px' }}>
              {isAr ? 'استكشف شبكة خطوطنا في السعودية' : 'Explore Our Saudi Arabia Route Network'}
            </h2>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.92rem', maxWidth: '480px', margin: '0 auto' }}>
              {isAr ? 'اختر مدينة أو خطاً لاستكشاف خدمات النقل الخاص المتاحة.' : 'Select a city or route to explore available private transport services.'}
            </p>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>
              {isAr ? 'نوع الخط:' : 'Route Type:'}
            </span>
            {[
              { color: '#D4AF37', label: isAr ? 'قصير (أقل من ساعة)' : 'Short (under 1 hr)' },
              { color: '#0ea5e9', label: isAr ? 'متوسط (١–٣ ساعات)' : 'Medium (1–3 hrs)' },
              { color: '#ef4444', label: isAr ? 'طويل (٤+ ساعات)' : 'Long (4+ hrs)' },
            ].map(l => (
              <div key={l.color} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '4px', background: l.color, borderRadius: '2px' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--foreground)' }}>{l.label}</span>
              </div>
            ))}
          </div>

          <div className={`routes-map-grid${selectedCity ? '' : ' single'}`} style={{ display: 'grid', gridTemplateColumns: selectedCity ? '1fr 340px' : '1fr', gap: '24px', alignItems: 'start' }}>

            {/* SVG Map */}
            <div style={{
              background: 'linear-gradient(135deg, #e8f4f0, #f0f8f5)',
              borderRadius: '24px',
              border: '2px solid var(--border)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
            }}>
              <svg
                viewBox="0 0 100 100"
                style={{ width: '100%', aspectRatio: '4/3', display: 'block' }}
                role="img"
                aria-label={isAr
                  ? 'خريطة تفاعلية لشبكة خطوط Saudi Cabs GMC في مكة والمدينة وجدة والطائف والرياض والدمام'
                  : "Interactive map of Saudi Cabs GMC's route network across Makkah, Madinah, Jeddah, Taif, Riyadh and Dammam"
                }
              >
                {/* Background regions */}
                <rect x="0" y="0" width="100" height="100" fill="#e8f4f0" />

                {/* Simplified Saudi Arabia shape */}
                <path
                  d="M10,20 L18,15 L30,12 L45,10 L60,12 L75,10 L85,15 L90,25 L88,40 L82,55 L78,65 L72,75 L65,82 L58,85 L50,88 L42,90 L35,88 L28,82 L22,75 L15,65 L10,55 L8,40 Z"
                  fill="#d4e8df"
                  stroke="#aed4c5"
                  strokeWidth="0.5"
                />

                {/* Red Sea */}
                <path
                  d="M8,40 L12,45 L10,55 L8,62 L6,68 L4,72"
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="3"
                  opacity="0.6"
                />
                <text x="3" y="57" fontSize="2.5" fill="#3b82f6" opacity="0.7" transform="rotate(-35, 3, 57)">
                  {isAr ? 'البحر الأحمر' : 'Red Sea'}
                </text>

                {/* Persian Gulf */}
                <path d="M85,20 L88,28 L90,38 L88,48" fill="none" stroke="#93c5fd" strokeWidth="2" opacity="0.6" />
                <text x="86" y="30" fontSize="2" fill="#3b82f6" opacity="0.7">
                  {isAr ? 'الخليج' : 'Gulf'}
                </text>

                {/* CONNECTIONS — draw lines */}
                {MAP_CONNECTIONS.map(conn => {
                  const from = getCityPos(conn.from)
                  const to   = getCityPos(conn.to)
                  const mx = (from.x + to.x) / 2
                  const my = (from.y + to.y) / 2 - 4
                  const isHovered = hoveredCity === conn.from || hoveredCity === conn.to

                  return (
                    <g key={`${conn.from}-${conn.to}`}>
                      <line
                        x1={from.x} y1={from.y}
                        x2={to.x}   y2={to.y}
                        stroke={ROUTE_COLORS[conn.type]}
                        strokeWidth={isHovered ? '1.2' : '0.7'}
                        strokeDasharray={conn.type === 'long' ? '2,1' : 'none'}
                        opacity={isHovered ? 1 : 0.55}
                        style={reduceMotion ? undefined : { transition: 'all 0.2s' }}
                      />
                      <text
                        x={mx} y={my}
                        textAnchor="middle"
                        fontSize="1.8"
                        fill={ROUTE_COLORS[conn.type]}
                        fontWeight="700"
                        opacity={isHovered ? 1 : 0.7}
                      >
                        {conn.label[lang]}
                      </text>
                    </g>
                  )
                })}

                {/* CITY NODES — clickable + keyboard-accessible */}
                {CITIES.map(city => {
                  const isHovered  = hoveredCity === city.id
                  const isSelected = selectedCity?.id === city.id
                  const r = isHovered || isSelected ? 3.8 : 3

                  return (
                    <g
                      key={city.id}
                      tabIndex={0}
                      role="button"
                      aria-label={isAr ? `عرض خطوط ${city.name.ar}` : `View routes for ${city.name.en}`}
                      aria-pressed={isSelected}
                      style={{ cursor: 'pointer', outline: 'none' }}
                      onMouseEnter={() => setHoveredCity(city.id)}
                      onMouseLeave={() => setHoveredCity(null)}
                      onFocus={() => setHoveredCity(city.id)}
                      onBlur={() => setHoveredCity(null)}
                      onClick={() => selectCity(city)}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectCity(city) } }}
                    >
                      {isSelected && (
                        <circle cx={city.x} cy={city.y} r={r + 2.5} fill={city.color} opacity="0.2" />
                      )}
                      <circle cx={city.x} cy={city.y} r={r + 0.8} fill="white" />
                      <circle
                        cx={city.x} cy={city.y} r={r}
                        fill={city.color}
                        style={reduceMotion ? undefined : { transition: 'r 0.2s' }}
                      />
                      <text
                        x={city.x}
                        y={city.y - r - 1.5}
                        textAnchor="middle"
                        fontSize={isHovered || isSelected ? '3.2' : '2.8'}
                        fontWeight="800"
                        fill={city.color}
                        style={reduceMotion ? undefined : { transition: 'font-size 0.2s' }}
                      >
                        {city.name[lang]}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* City Info Panel */}
            {selectedCity && (
              <div style={{
                background: 'white',
                borderRadius: '20px',
                border: '2px solid var(--border)',
                padding: '28px 24px',
                boxShadow: 'var(--shadow-lg)',
                position: 'sticky',
                top: '100px',
              }}>
                <button
                  onClick={() => setSelectedCity(null)}
                  aria-label={isAr ? 'إغلاق' : 'Close'}
                  className="mk-focus"
                  style={{
                    position: 'absolute', top: '16px',
                    insetInlineEnd: '16px',
                    background: 'var(--muted)', border: 'none', borderRadius: '8px', padding: '6px', cursor: 'pointer', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  <X size={16} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: selectedCity.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={22} color={selectedCity.color} strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: '1.3rem', color: selectedCity.color }}>{selectedCity.name[lang]}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>{selectedCity.name[isAr ? 'en' : 'ar']}</div>
                  </div>
                </div>

                {selectedCity.slug && (
                  <Link href={`/${selectedCity.slug}`} className="mk-focus" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '8px', background: selectedCity.color, color: 'white',
                    padding: '11px', borderRadius: '10px', fontWeight: 700,
                    fontSize: '0.9rem', textDecoration: 'none', marginBottom: '20px',
                  }}>
                    {isAr ? `عرض خدمة تاكسي ${selectedCity.name.ar} ←` : `View ${selectedCity.name.en} Taxi Service →`}
                  </Link>
                )}

                <div style={{ fontWeight: 800, fontSize: '0.82rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  {isAr ? 'الخطوط المتاحة' : 'Available Routes'}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {ROUTE_PAGES
                    .filter(r => r.fromId === selectedCity.id || r.toId === selectedCity.id)
                    .map(r => (
                      <Link key={r.slug} href={`/${r.slug}`} className="mk-focus" style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '10px 14px', borderRadius: '10px', textDecoration: 'none',
                        border: `1.5px solid ${ROUTE_COLORS[r.type ?? 'long']}33`,
                        background: ROUTE_COLORS[r.type ?? 'long'] + '0d',
                      }}>
                        <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--foreground)' }}>
                          {r.from[lang]} → {r.to[lang]}
                        </span>
                        {' '}
                        <span style={{
                          fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px',
                          borderRadius: '20px', background: ROUTE_COLORS[r.type ?? 'long'] + '22',
                          color: ROUTE_COLORS[r.type ?? 'long'],
                        }}>{r.duration[lang]}</span>
                      </Link>
                    ))
                  }
                </div>

                <a
                  href={waUrl(isAr ? `السلام عليكم، أرغب في حجز رحلة من/إلى ${selectedCity.name.ar}` : `Hello, I'd like to book a trip from/to ${selectedCity.name.en}`)}
                  target="_blank" rel="noopener noreferrer"
                  className="mk-focus"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    marginTop: '20px', background: '#25D366', color: 'white',
                    padding: '12px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  <MessageCircle size={16} strokeWidth={2.5} />
                  {isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
                </a>
              </div>
            )}
          </div>

          {/* ── Filters ── */}
          <div id="routes-grid" style={{ marginTop: '56px', scrollMarginTop: '90px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '4px' }}>
              {isAr
                ? <>جميع <span style={{ color: 'var(--primary)' }}>الخطوط المتاحة</span></>
                : <>All <span style={{ color: 'var(--primary)' }}>Available Routes</span></>
              }
            </h2>
            <div className="gold-divider" style={{ margin: '0 0 24px' }} />

            <div role="group" aria-label={isAr ? 'تصفية حسب نوع الخط' : 'Filter by route type'} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {([
                { key: 'all' as const, label: isAr ? 'جميع الخطوط' : 'All Routes' },
                { key: 'short' as const, label: TYPE_LABEL.short[lang] },
                { key: 'medium' as const, label: TYPE_LABEL.medium[lang] },
                { key: 'long' as const, label: TYPE_LABEL.long[lang] },
              ]).map(f => (
                <button
                  key={f.key}
                  onClick={() => setTypeFilter(f.key)}
                  aria-pressed={typeFilter === f.key}
                  className="mk-focus"
                  style={{
                    padding: '9px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '0.84rem', cursor: 'pointer',
                    border: `1.5px solid ${typeFilter === f.key ? 'var(--primary)' : 'var(--border)'}`,
                    background: typeFilter === f.key ? 'var(--primary)' : 'var(--card, #fff)',
                    color: typeFilter === f.key ? 'white' : 'var(--foreground)',
                    transition: reduceMotion ? undefined : 'all 0.15s',
                  }}
                >
                  {f.label}
                </button>
              ))}
              <a href="#airport-transfers" className="mk-focus" style={{
                padding: '9px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '0.84rem',
                border: '1.5px solid var(--border)', background: 'var(--card, #fff)', color: 'var(--foreground)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
              }}>
                <Plane size={13} /> {isAr ? 'توصيل المطارات' : 'Airport Transfers'}
              </a>
            </div>

            <div role="group" aria-label={isAr ? 'تصفية حسب المدينة' : 'Filter by city'} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <button
                onClick={() => setCityFilterId(null)}
                aria-pressed={cityFilterId === null}
                className="mk-focus"
                style={{
                  padding: '6px 14px', borderRadius: '50px', fontWeight: 600, fontSize: '0.78rem', cursor: 'pointer',
                  border: `1px solid ${cityFilterId === null ? 'var(--foreground)' : 'var(--border)'}`,
                  background: cityFilterId === null ? 'var(--foreground)' : 'transparent',
                  color: cityFilterId === null ? 'var(--background)' : 'var(--muted-foreground)',
                }}
              >
                {isAr ? 'كل المدن' : 'All Cities'}
              </button>
              {CITY_ORDER.map(cityId => {
                const city = CITIES.find(c => c.id === cityId)!
                const active = cityFilterId === cityId
                return (
                  <button
                    key={cityId}
                    onClick={() => setCityFilterId(active ? null : cityId)}
                    aria-pressed={active}
                    className="mk-focus"
                    style={{
                      padding: '6px 14px', borderRadius: '50px', fontWeight: 600, fontSize: '0.78rem', cursor: 'pointer',
                      border: `1px solid ${active ? city.color : 'var(--border)'}`,
                      background: active ? city.color : 'transparent',
                      color: active ? 'white' : 'var(--muted-foreground)',
                    }}
                  >
                    {city.name[lang]}
                  </button>
                )
              })}
            </div>

            {/* ── Grouped intercity cards ── */}
            <motion.div
              key={`${typeFilter}-${cityFilterId}`}
              initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {groups.length === 0 && (
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', padding: '24px 0' }}>
                  {isAr ? 'لا توجد خطوط مطابقة لهذا التصفية.' : 'No routes match this filter.'}
                </p>
              )}
              {groups.map(group => (
                <div key={group.cityId} style={{ marginBottom: '40px' }}>
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 800, marginBottom: '14px', color: 'var(--foreground)' }}>
                    {isAr ? `خطوط ${group.cityName.ar}` : `${group.cityName.en} Routes`}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
                    {group.routes.map((r, i) => (
                      <motion.div key={r.slug} {...reveal(i)}>
                        <Link
                          href={`/${r.slug}`}
                          className="routes-map-card mk-focus"
                          aria-label={isAr ? `عرض خط ${r.from.ar} إلى ${r.to.ar} والحجز` : `View ${r.from.en} to ${r.to.en} route and book`}
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '18px 20px', borderRadius: '14px', textDecoration: 'none',
                            border: `1.5px solid ${ROUTE_COLORS[r.type!]}35`,
                            background: ROUTE_COLORS[r.type!] + '0a',
                            transition: reduceMotion ? undefined : 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                          }}
                        >
                          <div style={{ minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px 8px', marginBottom: '4px' }}>
                              <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--foreground)' }}>
                                {r.from[lang]} → {r.to[lang]}
                              </span>
                              <span style={{
                                fontSize: '0.62rem', fontWeight: 800, padding: '2px 8px', borderRadius: '20px',
                                background: ROUTE_COLORS[r.type!] + '22', color: ROUTE_COLORS[r.type!],
                                textTransform: 'uppercase', letterSpacing: '0.03em', flexShrink: 0, whiteSpace: 'nowrap',
                              }}>{TYPE_LABEL[r.type!][lang]}</span>
                            </div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>
                              {r.duration[lang]} · {isAr ? 'نقل خاص' : 'Private transfer'}
                            </div>
                          </div>
                          <ArrowRight size={16} className="routes-map-card-arrow" style={{ color: ROUTE_COLORS[r.type!], flexShrink: 0, transform: isAr ? 'scaleX(-1)' : undefined }} />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Airport transfers (always its own section) ── */}
          <div id="airport-transfers" style={{ marginTop: '32px', scrollMarginTop: '90px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plane size={20} color="#1e3a8a" /> {isAr ? 'توصيل المطارات' : 'Airport Transfer Routes'}
            </h3>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.86rem', marginBottom: '18px' }}>
              {isAr ? 'رحلات مباشرة من وإلى المطارات في مكة المكرمة والمدينة المنورة وجدة والطائف.' : 'Direct transfers to and from the airports serving Makkah, Madinah, Jeddah and Taif.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
              {airportPages.map((r, i) => (
                <motion.div key={r.slug} {...reveal(i)}>
                  <Link
                    href={`/${r.slug}`}
                    className="routes-map-card mk-focus"
                    aria-label={isAr ? `عرض توصيل مطار ${r.from.ar} إلى ${r.to.ar} والحجز` : `View ${r.from.en} to ${r.to.en} airport transfer and book`}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '18px 20px', borderRadius: '14px', textDecoration: 'none',
                      border: '1.5px solid rgba(30,58,138,0.25)',
                      background: 'rgba(30,58,138,0.05)',
                      transition: reduceMotion ? undefined : 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontWeight: 800, fontSize: '0.95rem', color: 'var(--foreground)', marginBottom: '4px' }}>
                        <Plane size={14} color="#1e3a8a" style={{ flexShrink: 0 }} />
                        {r.from[lang]} → {r.to[lang]}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>
                        {r.duration[lang]} · {isAr ? 'توصيل مطار' : 'Airport transfer'}
                      </div>
                    </div>
                    <ArrowRight size={16} className="routes-map-card-arrow" style={{ color: '#1e3a8a', flexShrink: 0, transform: isAr ? 'scaleX(-1)' : undefined }} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── SEO content ── */}
          <div style={{ marginTop: '70px', maxWidth: '820px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '16px' }}>
              {isAr ? 'كاب خاص بين المدن في السعودية' : 'Private Intercity Taxi Across Saudi Arabia'}
            </h2>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.9, color: 'var(--muted-foreground)', marginBottom: '16px' }}>
              {isAr
                ? 'توفر Saudi Cabs GMC خدمة كاب خاص بين المدن تربط مكة المكرمة والمدينة المنورة وجدة والطائف، بالإضافة إلى رحلات بين المدن من وإلى الرياض والدمام. سواء كنت تسافر من جدة إلى مكة المكرمة بعد الوصول، أو تخطط لرحلة من مكة المكرمة إلى المدينة المنورة، فإن كل خط يعتمد على سيارة مخصصة بسعر ثابت حسب المسار — بدون مشاركة الرحلة مع ركاب آخرين وبدون التقيد بجداول النقل العام.'
                : 'Saudi Cabs GMC offers a private intercity taxi network connecting Makkah, Madinah, Jeddah and Taif, along with intercity transfers to and from Riyadh and Dammam. Whether you\'re travelling from Jeddah to Makkah right after arrival, or planning a trip from Makkah to Madinah, each route uses a dedicated vehicle at a fixed, route-based fare — no shared rides, no public transport timetables to work around.'}
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.9, color: 'var(--muted-foreground)' }}>
              {isAr
                ? 'الخطوط الطويلة مثل جدة إلى المدينة المنورة أو الرياض إلى مكة المكرمة والرياض إلى المدينة المنورة والرياض إلى جدة تُحجز عادة مسبقاً، بينما الخطوط الأقصر مثل جدة إلى الطائف تناسب الحجز في نفس اليوم عبر واتساب. جميع أوقات الرحلات الموضحة أعلاه تقريبية وتعتمد على حركة المرور وموقع الاستلام وحالة الطريق.'
                : 'Longer routes such as Jeddah to Madinah, or Riyadh to Makkah, Riyadh to Madinah and Riyadh to Jeddah, are usually booked in advance, while shorter routes like Jeddah to Taif work well for same-day WhatsApp booking. All travel times shown above are approximate and depend on traffic, pickup location and road conditions.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section aria-labelledby="routes-cta-title" style={{ padding: '64px 0', background: 'linear-gradient(135deg, #0B3D2E 0%, #071f17 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 id="routes-cta-title" style={{ color: 'white', fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', fontWeight: 900, marginBottom: '10px' }}>
            {isAr ? 'لم تجد خطك؟' : "Can't Find Your Route?"}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.94rem', lineHeight: 1.75, marginBottom: '24px' }}>
            {isAr
              ? 'أخبرنا بموقع الاستلام والوجهة عبر واتساب. سنؤكد التوفر وخيارات السيارة والسعر الحالي قبل رحلتك.'
              : "Tell us your pickup and destination on WhatsApp. We'll confirm availability, vehicle options and the current fare before your trip."}
          </p>
          <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 32px', display: 'inline-flex' }}>
            <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'اسأل عبر واتساب' : 'Ask on WhatsApp'}
          </a>
        </div>
      </section>

      <FAQSection
        faqs={routesMapFaqs}
        heading={{ ar: 'أسئلة شائعة حول خريطة الخطوط', en: 'Route Map FAQ' }}
        subheading={{
          ar: 'إجابات واضحة حول الخطوط والأسعار وكيفية الحجز',
          en: 'Clear answers about routes, fares, and how booking works',
        }}
      />
    </main>
  )
}
