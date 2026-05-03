'use client'
import Link from 'next/link'
import { useState } from 'react'
import { MessageCircle, MapPin, X } from 'lucide-react'

const CITIES = [
  {
    id: 'riyadh',
    name: { en: 'Riyadh', ar: 'الرياض' },
    x: 62, y: 52,
    color: '#D4AF37',
    slug: null,
    routes: ['riyadh-to-makkah', 'riyadh-to-madinah', 'riyadh-to-jeddah'],
  },
  {
    id: 'jeddah',
    name: { en: 'Jeddah', ar: 'جدة' },
    x: 22, y: 55,
    color: '#1e6fa8',
    slug: 'jeddah-taxi-service',
    routes: ['jeddah-to-makkah', 'jeddah-to-madinah', 'jeddah-to-taif', 'jeddah-airport-to-makkah', 'jeddah-airport-to-madinah'],
  },
  {
    id: 'makkah',
    name: { en: 'Makkah', ar: 'مكة المكرمة' },
    x: 26, y: 60,
    color: '#0B3D2E',
    slug: 'makkah-taxi-service',
    routes: ['makkah-to-madinah', 'makkah-to-jeddah', 'makkah-to-taif', 'makkah-to-riyadh', 'makkah-to-jeddah-airport'],
  },
  {
    id: 'madinah',
    name: { en: 'Madinah', ar: 'المدينة المنورة' },
    x: 30, y: 32,
    color: '#2d7a4f',
    slug: 'madinah-taxi-service',
    routes: ['madinah-to-makkah', 'madinah-to-jeddah', 'madinah-airport-taxi'],
  },
  {
    id: 'taif',
    name: { en: 'Taif', ar: 'الطائف' },
    x: 32, y: 63,
    color: '#7c3aed',
    slug: 'taif-taxi-service',
    routes: ['taif-to-makkah', 'taif-to-jeddah', 'taif-to-madinah', 'taif-airport-taxi'],
  },
]

const ROUTES = [
  { from: 'jeddah', to: 'makkah',  slug: 'jeddah-to-makkah',          label: '~50 min',   type: 'short' },
  { from: 'jeddah', to: 'madinah', slug: 'jeddah-to-madinah',         label: '~4 hrs',    type: 'long'  },
  { from: 'jeddah', to: 'taif',    slug: 'jeddah-to-taif',            label: '~1.5 hrs',  type: 'medium'},
  { from: 'makkah', to: 'madinah', slug: 'makkah-to-madinah',         label: '~4.5 hrs',  type: 'long'  },
  { from: 'makkah', to: 'taif',    slug: 'makkah-to-taif',            label: '~1.5 hrs',  type: 'medium'},
  { from: 'makkah', to: 'riyadh',  slug: 'riyadh-to-makkah',          label: '~8.5 hrs',  type: 'long'  },
  { from: 'madinah', to: 'taif',   slug: 'taif-to-madinah',           label: '~5 hrs',    type: 'long'  },
  { from: 'riyadh', to: 'madinah', slug: 'riyadh-to-madinah',         label: '~9 hrs',    type: 'long'  },
  { from: 'riyadh', to: 'jeddah',  slug: 'riyadh-to-jeddah',          label: '~9 hrs',    type: 'long'  },
]

const ROUTE_COLORS: Record<string, string> = {
  short:  '#D4AF37',
  medium: '#0ea5e9',
  long:   '#ef4444',
}

export default function RoutesMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<typeof CITIES[0] | null>(null)

  const getCityPos = (id: string) => CITIES.find(c => c.id === id)!

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
            20+ routes across Makkah, Madinah, Jeddah, Taif & Riyadh. Click any city or route to book.
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
          <div style={{ display: 'grid', gridTemplateColumns: selectedCity ? '1fr 340px' : '1fr', gap: '24px', alignItems: 'start', transition: 'all 0.3s' }}>

            {/* SVG Map */}
            <div style={{
              background: 'linear-gradient(135deg, #e8f4f0, #f0f8f5)',
              borderRadius: '24px',
              border: '2px solid var(--border)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
            }}>
              {/* Map background label */}
              <div style={{
                position: 'absolute', top: '20px', left: '20px', zIndex: 2,
                background: 'rgba(255,255,255,0.85)', borderRadius: '10px',
                padding: '8px 16px', fontWeight: '800', fontSize: '0.8rem',
                color: 'var(--muted-foreground)', border: '1px solid var(--border)',
              }}>
                🗺️ Saudi Arabia — Interactive Route Map
              </div>

              <svg
                viewBox="0 0 100 100"
                style={{ width: '100%', aspectRatio: '4/3', display: 'block' }}
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

                {/* ROUTES — draw lines */}
                {ROUTES.map(route => {
                  const from = getCityPos(route.from)
                  const to   = getCityPos(route.to)
                  const mx = (from.x + to.x) / 2
                  const my = (from.y + to.y) / 2 - 4
                  const isHovered = hoveredCity === route.from || hoveredCity === route.to

                  return (
                    <g key={route.slug}>
                      <line
                        x1={from.x} y1={from.y}
                        x2={to.x}   y2={to.y}
                        stroke={ROUTE_COLORS[route.type]}
                        strokeWidth={isHovered ? '1.2' : '0.7'}
                        strokeDasharray={route.type === 'long' ? '2,1' : 'none'}
                        opacity={isHovered ? 1 : 0.55}
                        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                      />
                      {/* Duration label on line */}
                      <text
                        x={mx} y={my}
                        textAnchor="middle"
                        fontSize="1.8"
                        fill={ROUTE_COLORS[route.type]}
                        fontWeight="700"
                        opacity={isHovered ? 1 : 0.7}
                      >
                        {route.label}
                      </text>
                    </g>
                  )
                })}

                {/* CITY NODES */}
                {CITIES.map(city => {
                  const isHovered  = hoveredCity === city.id
                  const isSelected = selectedCity?.id === city.id
                  const r = isHovered || isSelected ? 3.8 : 3

                  return (
                    <g
                      key={city.id}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredCity(city.id)}
                      onMouseLeave={() => setHoveredCity(null)}
                      onClick={() => setSelectedCity(isSelected ? null : city)}
                    >
                      {/* Pulse ring */}
                      {isSelected && (
                        <circle cx={city.x} cy={city.y} r={r + 2.5} fill={city.color} opacity="0.2" />
                      )}
                      {/* Outer ring */}
                      <circle cx={city.x} cy={city.y} r={r + 0.8} fill="white" />
                      {/* Dot */}
                      <circle
                        cx={city.x} cy={city.y} r={r}
                        fill={city.color}
                        style={{ transition: 'r 0.2s' }}
                      />
                      {/* City label */}
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
                {/* Close */}
                <button
                  onClick={() => setSelectedCity(null)}
                  style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--muted)', border: 'none', borderRadius: '8px', padding: '6px', cursor: 'pointer' }}
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
                  {ROUTES
                    .filter(r => r.from === selectedCity.id || r.to === selectedCity.id)
                    .map(r => {
                      const other = r.from === selectedCity.id ? getCityPos(r.to) : getCityPos(r.from)
                      const label = r.from === selectedCity.id
                        ? `${selectedCity.name.en} → ${other.name.en}`
                        : `${other.name.en} → ${selectedCity.name.en}`
                      return (
                        <Link key={r.slug} href={`/${r.slug}`} style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '10px 14px', borderRadius: '10px', textDecoration: 'none',
                          border: `1.5px solid ${ROUTE_COLORS[r.type]}33`,
                          background: ROUTE_COLORS[r.type] + '0d',
                          transition: 'all 0.2s',
                        }}>
                          <span style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--foreground)' }}>{label}</span>
                          <span style={{
                            fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px',
                            borderRadius: '20px', background: ROUTE_COLORS[r.type] + '22',
                            color: ROUTE_COLORS[r.type],
                          }}>{r.label}</span>
                        </Link>
                      )
                    })
                  }
                </div>

                <a
                  href={`https://wa.me/966569487569?text=${encodeURIComponent(`Hello, I'd like to book a trip from/to ${selectedCity.name.en}`)}`}
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
              {ROUTES.map(r => {
                const from = getCityPos(r.from)
                const to   = getCityPos(r.to)
                return (
                  <Link key={r.slug} href={`/${r.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '16px 20px', borderRadius: '14px',
                      border: `1.5px solid ${ROUTE_COLORS[r.type]}40`,
                      background: ROUTE_COLORS[r.type] + '0a',
                      transition: 'all 0.2s', cursor: 'pointer',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                    >
                      <div>
                        <div style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--foreground)', marginBottom: '4px' }}>
                          {from.name.en} → {to.name.en}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>
                          {r.label} · Fixed Price
                        </div>
                      </div>
                      <div style={{
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: ROUTE_COLORS[r.type], flexShrink: 0,
                      }} />
                    </div>
                  </Link>
                )
              })}

              {/* Airport Routes */}
              {[
                { slug: 'jeddah-airport-to-makkah',  from: 'Jeddah Airport', to: 'Makkah',    label: '~55 min' },
                { slug: 'jeddah-airport-to-madinah', from: 'Jeddah Airport', to: 'Madinah',   label: '~4 hrs'  },
                { slug: 'makkah-to-jeddah-airport',  from: 'Makkah',        to: 'Jeddah Airport', label: '~55 min' },
                { slug: 'madinah-airport-taxi',       from: 'Madinah Airport', to: "Prophet's Mosque", label: '~30 min' },
                { slug: 'taif-airport-taxi',          from: 'Taif Airport',  to: 'Taif City',  label: '~25 min' },
              ].map(r => (
                <Link key={r.slug} href={`/${r.slug}`} style={{ textDecoration: 'none' }}>
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
                        {r.label} · Airport Transfer
                      </div>
                    </div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1e3a8a', flexShrink: 0 }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
