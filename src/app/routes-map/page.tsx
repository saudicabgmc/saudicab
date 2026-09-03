'use client'
import Link from 'next/link'
import { useState } from 'react'
import { MessageCircle, MapPin, X } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const CITIES = [
  {
    id: 'riyadh',
    name: { en: 'Riyadh', ar: 'الرياض' },
    x: 62, y: 52,
    color: '#D4AF37',
    slug: null,
    routes: ['riyadh-to-makkah', 'makkah-to-riyadh', 'riyadh-to-madinah', 'riyadh-to-jeddah'],
  },
  {
    id: 'jeddah',
    name: { en: 'Jeddah', ar: 'جدة' },
    x: 22, y: 55,
    color: '#1e6fa8',
    slug: 'jeddah-taxi-service',
    routes: ['jeddah-to-makkah', 'makkah-to-jeddah', 'jeddah-to-madinah', 'madinah-to-jeddah', 'jeddah-to-taif', 'taif-to-jeddah', 'jeddah-airport-to-makkah', 'makkah-to-jeddah-airport', 'jeddah-airport-to-madinah', 'riyadh-to-jeddah'],
  },
  {
    id: 'makkah',
    name: { en: 'Makkah', ar: 'مكة المكرمة' },
    x: 26, y: 60,
    color: '#0B3D2E',
    slug: 'makkah-taxi-service',
    routes: ['makkah-to-madinah', 'madinah-to-makkah', 'makkah-to-jeddah', 'jeddah-to-makkah', 'makkah-to-taif', 'taif-to-makkah', 'makkah-to-riyadh', 'riyadh-to-makkah', 'makkah-to-jeddah-airport', 'jeddah-airport-to-makkah'],
  },
  {
    id: 'madinah',
    name: { en: 'Madinah', ar: 'المدينة المنورة' },
    x: 30, y: 32,
    color: '#2d7a4f',
    slug: 'madinah-taxi-service',
    routes: ['madinah-to-makkah', 'makkah-to-madinah', 'madinah-to-jeddah', 'jeddah-to-madinah', 'madinah-airport-taxi', 'jeddah-airport-to-madinah', 'taif-to-madinah', 'riyadh-to-madinah'],
  },
  {
    id: 'taif',
    name: { en: 'Taif', ar: 'الطائف' },
    x: 32, y: 63,
    color: '#7c3aed',
    slug: 'taif-taxi-service',
    routes: ['taif-to-makkah', 'makkah-to-taif', 'taif-to-jeddah', 'jeddah-to-taif', 'taif-to-madinah', 'taif-airport-taxi'],
  },
]

// City-pair connections drawn on the SVG map (undirected — one line per pair)
const MAP_CONNECTIONS = [
  { from: 'jeddah', to: 'makkah',  label: 'Approx. 50 min', type: 'short' },
  { from: 'jeddah', to: 'madinah', label: 'Approx. 4 hrs',  type: 'long'  },
  { from: 'jeddah', to: 'taif',    label: 'Approx. 1.5 hrs', type: 'medium'},
  { from: 'makkah', to: 'madinah', label: 'Approx. 4.5 hrs', type: 'long'  },
  { from: 'makkah', to: 'taif',    label: 'Approx. 1.5 hrs', type: 'medium'},
  { from: 'makkah', to: 'riyadh',  label: 'Approx. 8–9 hrs', type: 'long'  },
  { from: 'taif',   to: 'madinah', label: 'Approx. 5 hrs',  type: 'long'  },
  { from: 'riyadh', to: 'madinah', label: 'Approx. 9–10 hrs', type: 'long' },
  { from: 'riyadh', to: 'jeddah',  label: 'Approx. 9 hrs',  type: 'long'  },
]

// Every real, working route page — the source of truth for the grid and the per-city panel.
// fromId/toId are only used to filter routes into a selected city's panel (not to draw map lines),
// so a non-mapped endpoint (e.g. Dammam) is safe here without touching the SVG.
const ROUTE_PAGES = [
  // ── Intercity — 5-city network ──
  { slug: 'jeddah-to-makkah',   fromId: 'jeddah', toId: 'makkah',  from: 'Jeddah',  to: 'Makkah',  duration: 'Approx. 50 min',   type: 'short',  category: 'intercity' as const },
  { slug: 'makkah-to-jeddah',   fromId: 'makkah', toId: 'jeddah',  from: 'Makkah',  to: 'Jeddah',  duration: 'Approx. 50 min',   type: 'short',  category: 'intercity' as const },
  { slug: 'jeddah-to-madinah',  fromId: 'jeddah', toId: 'madinah', from: 'Jeddah',  to: 'Madinah', duration: 'Approx. 4 hrs',    type: 'long',   category: 'intercity' as const },
  { slug: 'madinah-to-jeddah',  fromId: 'madinah', toId: 'jeddah', from: 'Madinah', to: 'Jeddah',  duration: 'Approx. 4 hrs',    type: 'long',   category: 'intercity' as const },
  { slug: 'jeddah-to-taif',     fromId: 'jeddah', toId: 'taif',    from: 'Jeddah',  to: 'Taif',    duration: 'Approx. 1.5 hrs',  type: 'medium', category: 'intercity' as const },
  { slug: 'taif-to-jeddah',     fromId: 'taif', toId: 'jeddah',    from: 'Taif',    to: 'Jeddah',  duration: 'Approx. 1.5 hrs',  type: 'medium', category: 'intercity' as const },
  { slug: 'makkah-to-madinah',  fromId: 'makkah', toId: 'madinah', from: 'Makkah',  to: 'Madinah', duration: 'Approx. 4.5 hrs',  type: 'long',   category: 'intercity' as const },
  { slug: 'madinah-to-makkah',  fromId: 'madinah', toId: 'makkah', from: 'Madinah', to: 'Makkah',  duration: 'Approx. 4–4.5 hrs',type: 'long',   category: 'intercity' as const },
  { slug: 'makkah-to-taif',     fromId: 'makkah', toId: 'taif',    from: 'Makkah',  to: 'Taif',    duration: 'Approx. 1.5 hrs',  type: 'medium', category: 'intercity' as const },
  { slug: 'taif-to-makkah',     fromId: 'taif', toId: 'makkah',    from: 'Taif',    to: 'Makkah',  duration: 'Approx. 1.5 hrs',  type: 'medium', category: 'intercity' as const },
  { slug: 'makkah-to-riyadh',   fromId: 'makkah', toId: 'riyadh',  from: 'Makkah',  to: 'Riyadh',  duration: 'Approx. 8–9 hrs',  type: 'long',   category: 'intercity' as const },
  { slug: 'riyadh-to-makkah',   fromId: 'riyadh', toId: 'makkah',  from: 'Riyadh',  to: 'Makkah',  duration: 'Approx. 8–9 hrs',  type: 'long',   category: 'intercity' as const },
  { slug: 'taif-to-madinah',    fromId: 'taif', toId: 'madinah',   from: 'Taif',    to: 'Madinah', duration: 'Approx. 5 hrs',    type: 'long',   category: 'intercity' as const },
  { slug: 'riyadh-to-madinah',  fromId: 'riyadh', toId: 'madinah', from: 'Riyadh',  to: 'Madinah', duration: 'Approx. 9–10 hrs', type: 'long',   category: 'intercity' as const },
  { slug: 'riyadh-to-jeddah',   fromId: 'riyadh', toId: 'jeddah',  from: 'Riyadh',  to: 'Jeddah',  duration: 'Approx. 9 hrs',    type: 'long',   category: 'intercity' as const },
  // ── Intercity — beyond the 5-city network (real pages, not tied to the map markers) ──
  { slug: 'makkah-to-dammam',   fromId: 'makkah', toId: 'dammam',  from: 'Makkah',  to: 'Dammam',  duration: 'Approx. 8–9 hrs',  type: 'long',   category: 'intercity' as const },
  { slug: 'dammam-to-makkah',   fromId: 'dammam', toId: 'makkah',  from: 'Dammam',  to: 'Makkah',  duration: 'Approx. 8–9 hrs',  type: 'long',   category: 'intercity' as const },
  { slug: 'dammam-to-madinah',  fromId: 'dammam', toId: 'madinah', from: 'Dammam',  to: 'Madinah', duration: 'Approx. 9–10 hrs', type: 'long',   category: 'intercity' as const },
  // ── Airport transfers ──
  { slug: 'jeddah-airport-to-makkah',  fromId: 'jeddah',  toId: 'makkah',  from: 'Jeddah Airport',  to: 'Makkah',           duration: 'Approx. 50–60 min', category: 'airport' as const },
  { slug: 'makkah-to-jeddah-airport',  fromId: 'makkah',  toId: 'jeddah',  from: 'Makkah',          to: 'Jeddah Airport',  duration: 'Approx. 55–65 min', category: 'airport' as const },
  { slug: 'jeddah-airport-to-madinah', fromId: 'jeddah',  toId: 'madinah', from: 'Jeddah Airport',  to: 'Madinah',          duration: 'Approx. 3.5–4 hrs', category: 'airport' as const },
  { slug: 'madinah-airport-taxi',      fromId: 'madinah', toId: 'madinah', from: 'Madinah Airport', to: "Prophet's Mosque", duration: 'Approx. 25–35 min', category: 'airport' as const },
  { slug: 'taif-airport-taxi',         fromId: 'taif',    toId: 'taif',    from: 'Taif Airport',    to: 'Taif City',       duration: 'Approx. 20–30 min', category: 'airport' as const },
]

const ROUTE_COLORS: Record<string, string> = {
  short:  '#D4AF37',
  medium: '#0ea5e9',
  long:   '#ef4444',
}

const routesMapFaqs = [
  {
    q: { en: 'How many routes does Saudi Cabs GMC cover?', ar: 'كم عدد الخطوط التي تغطيها Saudi Cabs GMC؟' },
    a: {
      en: 'Saudi Cabs GMC operates a network of intercity and airport transfer routes connecting Makkah, Madinah, Jeddah and Taif, plus intercity transfers to and from Riyadh. The full current list is shown on this page — new routes are added as they become available.',
      ar: 'تشغّل Saudi Cabs GMC شبكة من خطوط النقل بين المدن وتوصيل المطارات تربط مكة المكرمة والمدينة المنورة وجدة والطائف، بالإضافة إلى رحلات بين المدن من وإلى الرياض. القائمة الكاملة الحالية موضحة في هذه الصفحة، ويتم إضافة خطوط جديدة عند توفرها.',
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

export default function RoutesMap() {
  const { isAr } = useLang()
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<typeof CITIES[0] | null>(null)

  const getCityPos = (id: string) => CITIES.find(c => c.id === id)!
  const selectCity = (city: typeof CITIES[0]) => setSelectedCity(selectedCity?.id === city.id ? null : city)

  const intercityPages = ROUTE_PAGES.filter(r => r.category === 'intercity')
  const airportPages = ROUTE_PAGES.filter(r => r.category === 'airport')

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
      {/* Header */}
      <section style={{ padding: '60px 0 40px', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
            Saudi Arabia Coverage
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', marginTop: '16px', marginBottom: '16px' }}>
            Our <span style={{ color: 'var(--primary)' }}>Route Network</span> Map
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            {ROUTE_PAGES.length}+ routes across Makkah, Madinah, Jeddah, Taif &amp; Riyadh. Click any city or route to book.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section style={{ padding: '24px 0', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>Route Type:</span>
            {[
              { color: '#D4AF37', label: 'Short (under 1 hr)' },
              { color: '#0ea5e9', label: 'Medium (1–3 hrs)' },
              { color: '#ef4444', label: 'Long (4+ hrs)' },
            ].map(l => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '32px', height: '4px', background: l.color, borderRadius: '2px' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--foreground)' }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Info Panel */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.3rem', fontWeight: '900', marginBottom: '20px', textAlign: 'center' }}>
            🗺️ Interactive Route Map
          </h2>

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
                aria-label="Interactive map of Saudi Cabs GMC's route network across Makkah, Madinah, Jeddah, Taif and Riyadh"
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
                <text x="3" y="57" fontSize="2.5" fill="#3b82f6" opacity="0.7" transform="rotate(-35, 3, 57)">Red Sea</text>

                {/* Persian Gulf */}
                <path d="M85,20 L88,28 L90,38 L88,48" fill="none" stroke="#93c5fd" strokeWidth="2" opacity="0.6" />
                <text x="86" y="30" fontSize="2" fill="#3b82f6" opacity="0.7">Gulf</text>

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
                        style={{ transition: 'all 0.2s' }}
                      />
                      <text
                        x={mx} y={my}
                        textAnchor="middle"
                        fontSize="1.8"
                        fill={ROUTE_COLORS[conn.type]}
                        fontWeight="700"
                        opacity={isHovered ? 1 : 0.7}
                      >
                        {conn.label}
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
                      aria-label={`View routes for ${city.name.en}`}
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
                        style={{ transition: 'r 0.2s' }}
                      />
                      <text
                        x={city.x}
                        y={city.y - r - 1.5}
                        textAnchor="middle"
                        fontSize={isHovered || isSelected ? '3.2' : '2.8'}
                        fontWeight="800"
                        fill={city.color}
                        style={{ transition: 'font-size 0.2s' }}
                      >
                        {city.name.en}
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
                  aria-label="Close"
                  style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--muted)', border: 'none', borderRadius: '8px', padding: '6px', cursor: 'pointer', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <X size={16} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: selectedCity.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={22} color={selectedCity.color} strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '900', fontSize: '1.3rem', color: selectedCity.color }}>{selectedCity.name.en}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>{selectedCity.name.ar}</div>
                  </div>
                </div>

                {selectedCity.slug && (
                  <Link href={`/${selectedCity.slug}`} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '8px', background: selectedCity.color, color: 'white',
                    padding: '11px', borderRadius: '10px', fontWeight: '700',
                    fontSize: '0.9rem', textDecoration: 'none', marginBottom: '20px',
                  }}>
                    View {selectedCity.name.en} Taxi Service →
                  </Link>
                )}

                <div style={{ fontWeight: '800', fontSize: '0.82rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Available Routes
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {ROUTE_PAGES
                    .filter(r => r.fromId === selectedCity.id || r.toId === selectedCity.id)
                    .map(r => (
                      <Link key={r.slug} href={`/${r.slug}`} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '10px 14px', borderRadius: '10px', textDecoration: 'none',
                        border: `1.5px solid ${ROUTE_COLORS[r.type ?? 'long']}33`,
                        background: ROUTE_COLORS[r.type ?? 'long'] + '0d',
                        transition: 'all 0.2s',
                      }}>
                        <span style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--foreground)' }}>{r.from} → {r.to}</span>
                        <span style={{
                          fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px',
                          borderRadius: '20px', background: ROUTE_COLORS[r.type ?? 'long'] + '22',
                          color: ROUTE_COLORS[r.type ?? 'long'],
                        }}>{r.duration}</span>
                      </Link>
                    ))
                  }
                </div>

                <a
                  href={`https://wa.me/923097811785?text=${encodeURIComponent(`Hello, I'd like to book a trip from/to ${selectedCity.name.en}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    marginTop: '20px', background: '#25D366', color: 'white',
                    padding: '12px', borderRadius: '10px', fontWeight: '700', fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  <MessageCircle size={16} strokeWidth={2.5} />
                  Book via WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* All Routes Grid */}
          <div style={{ marginTop: '60px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '8px' }}>
              All <span style={{ color: 'var(--primary)' }}>Available Routes</span>
            </h2>
            <div className="gold-divider" style={{ margin: '0 0 32px' }} />

            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '16px', color: 'var(--foreground)' }}>
              Intercity Routes
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px', marginBottom: '44px' }}>
              {intercityPages.map(r => (
                <Link key={r.slug} href={`/${r.slug}`} style={{ textDecoration: 'none' }} aria-label={`View ${r.from} to ${r.to} route and book`}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px', borderRadius: '14px',
                    border: `1.5px solid ${ROUTE_COLORS[r.type!]}40`,
                    background: ROUTE_COLORS[r.type!] + '0a',
                    transition: 'all 0.2s', cursor: 'pointer',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                  >
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--foreground)', marginBottom: '4px' }}>
                        {r.from} → {r.to}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>
                        {r.duration} · Fixed Fare, Confirmed Before Booking
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                      <span style={{ fontSize: '0.76rem', fontWeight: '700', color: ROUTE_COLORS[r.type!] }}>View Route</span>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: ROUTE_COLORS[r.type!] }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '16px', color: 'var(--foreground)' }}>
              Airport Transfers
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
              {airportPages.map(r => (
                <Link key={r.slug} href={`/${r.slug}`} style={{ textDecoration: 'none' }} aria-label={`View ${r.from} to ${r.to} airport transfer and book`}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px', borderRadius: '14px',
                    border: '1.5px solid rgba(30,58,138,0.25)',
                    background: 'rgba(30,58,138,0.05)',
                    transition: 'all 0.2s', cursor: 'pointer',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                  >
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--foreground)', marginBottom: '4px' }}>
                        ✈️ {r.from} → {r.to}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>
                        {r.duration} · Airport Transfer
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                      <span style={{ fontSize: '0.76rem', fontWeight: '700', color: '#1e3a8a' }}>Book Now</span>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1e3a8a' }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SEO content + Popular Routes internal links */}
          <div style={{ marginTop: '70px', maxWidth: '820px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '16px' }}>
              {isAr ? 'كاب خاص بين المدن في السعودية' : 'Private Intercity Taxi Across Saudi Arabia'}
            </h2>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.9, color: 'var(--muted-foreground)', marginBottom: '16px' }}>
              {isAr
                ? 'توفر Saudi Cabs GMC خدمة كاب خاص بين المدن تربط مكة المكرمة والمدينة المنورة وجدة والطائف، بالإضافة إلى رحلات بين المدن من وإلى الرياض. سواء كنت تسافر من جدة إلى مكة المكرمة بعد الوصول، أو تخطط لرحلة من مكة المكرمة إلى المدينة المنورة، فإن كل خط يعتمد على سيارة مخصصة بسعر ثابت حسب المسار — بدون مشاركة الرحلة مع ركاب آخرين وبدون التقيد بجداول النقل العام.'
                : 'Saudi Cabs GMC offers a private intercity taxi network connecting Makkah, Madinah, Jeddah and Taif, along with intercity transfers to and from Riyadh. Whether you\'re travelling from Jeddah to Makkah right after arrival, or planning a trip from Makkah to Madinah, each route uses a dedicated vehicle at a fixed, route-based fare — no shared rides, no public transport timetables to work around.'}
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.9, color: 'var(--muted-foreground)', marginBottom: '28px' }}>
              {isAr
                ? 'الخطوط الطويلة مثل جدة إلى المدينة المنورة أو الرياض إلى مكة المكرمة والرياض إلى المدينة المنورة والرياض إلى جدة تُحجز عادة مسبقاً، بينما الخطوط الأقصر مثل جدة إلى الطائف تناسب الحجز في نفس اليوم عبر واتساب. جميع أوقات الرحلات الموضحة أعلاه تقريبية وتعتمد على حركة المرور وموقع الاستلام وحالة الطريق.'
                : 'Longer routes such as Jeddah to Madinah, or Riyadh to Makkah, Riyadh to Madinah and Riyadh to Jeddah, are usually booked in advance, while shorter routes like Jeddah to Taif work well for same-day WhatsApp booking. All travel times shown above are approximate and depend on traffic, pickup location and road conditions.'}
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '12px' }}>
              {isAr ? 'أشهر الخطوط' : 'Popular Routes'}
            </h3>
            <p style={{ fontSize: '0.92rem', lineHeight: 2, color: 'var(--muted-foreground)' }}>
              {isAr ? 'من أكثر الخطوط طلباً: ' : 'Among the most requested routes: '}
              <Link href="/jeddah-to-makkah" style={{ color: 'var(--primary)', fontWeight: '700' }}>{isAr ? 'جدة إلى مكة المكرمة' : 'Jeddah to Makkah'}</Link>
              {', '}
              <Link href="/makkah-to-madinah" style={{ color: 'var(--primary)', fontWeight: '700' }}>{isAr ? 'مكة المكرمة إلى المدينة المنورة' : 'Makkah to Madinah'}</Link>
              {', '}
              <Link href="/jeddah-to-madinah" style={{ color: 'var(--primary)', fontWeight: '700' }}>{isAr ? 'جدة إلى المدينة المنورة' : 'Jeddah to Madinah'}</Link>
              {', '}
              <Link href="/jeddah-to-taif" style={{ color: 'var(--primary)', fontWeight: '700' }}>{isAr ? 'جدة إلى الطائف' : 'Jeddah to Taif'}</Link>
              {', '}
              <Link href="/riyadh-to-makkah" style={{ color: 'var(--primary)', fontWeight: '700' }}>{isAr ? 'الرياض إلى مكة المكرمة' : 'Riyadh to Makkah'}</Link>
              {', '}
              <Link href="/riyadh-to-madinah" style={{ color: 'var(--primary)', fontWeight: '700' }}>{isAr ? 'الرياض إلى المدينة المنورة' : 'Riyadh to Madinah'}</Link>
              {isAr ? '، و' : ', and '}
              <Link href="/riyadh-to-jeddah" style={{ color: 'var(--primary)', fontWeight: '700' }}>{isAr ? 'الرياض إلى جدة' : 'Riyadh to Jeddah'}</Link>
              {isAr ? '.' : '.'}
            </p>
          </div>
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
