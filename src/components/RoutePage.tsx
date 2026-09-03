'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Clock, MapPin, ArrowRight, Shield, Banknote, Star, Users, CheckCircle, Navigation } from 'lucide-react'
import BookingForm from './BookingForm'
import FAQSection, { type FAQItem } from './FAQSection'
import { useLang } from '@/contexts/LanguageContext'

export interface RoutePageData {
  from:        { ar: string; en: string }
  to:          { ar: string; en: string }
  slug:        string
  duration:    string
  distance:    string
  type:        'airport' | 'intercity' | 'pilgrimage' | 'tour'
  heroImage:   string
  description: { ar: string; en: string }
  highlights:  { icon: string; ar: string; en: string }[]
  vehicles: {
    nameEn: string; nameAr: string
    seats: string; priceNote: { ar: string; en: string }
  }[]
  whyPrivate:  { ar: string[]; en: string[] }
  relatedRoutes: { slug: string; from: { ar: string; en: string }; to: { ar: string; en: string }; duration: string }[]
  fromCitySlug: string
  toCitySlug:   string
  faqs:         FAQItem[]
}

const TYPE_BADGE: Record<RoutePageData['type'], { ar: string; en: string; color: string }> = {
  airport:    { ar: 'توصيل مطار', en: 'Airport Transfer', color: '#1e3a8a' },
  intercity:  { ar: 'رحلة بين المدن', en: 'Intercity Trip', color: '#7c3aed' },
  pilgrimage: { ar: 'حج وعمرة', en: 'Pilgrimage', color: '#b45309' },
  tour:       { ar: 'جولة سياحية', en: 'Sightseeing Tour', color: '#065f46' },
}

const ALL_GUIDES = [
  { href: '/makkah-transport-guide', en: 'Makkah Transport Guide', ar: 'دليل النقل في مكة' },
  { href: '/jeddah-airport-guide', en: 'Jeddah Airport Guide', ar: 'دليل مطار جدة' },
  { href: '/taxi-prices-saudi-arabia', en: 'Taxi Prices Guide', ar: 'دليل أسعار التاكسي' },
  { href: '/umrah-travel-guide', en: 'Umrah Travel Guide', ar: 'دليل سفر العمرة' },
  { href: '/hajj-transport-faq', en: 'Hajj Transport FAQ', ar: 'الأسئلة الشائعة لنقل الحج' },
] as const

function getRelevantGuides(data: RoutePageData) {
  const hrefs = new Set<string>()
  if (data.slug.includes('jeddah-airport')) hrefs.add('/jeddah-airport-guide')
  if (data.fromCitySlug === 'makkah-taxi-service' || data.toCitySlug === 'makkah-taxi-service') hrefs.add('/makkah-transport-guide')
  if (data.type === 'pilgrimage') { hrefs.add('/hajj-transport-faq'); hrefs.add('/umrah-travel-guide') }
  hrefs.add('/taxi-prices-saudi-arabia')
  return ALL_GUIDES.filter(g => hrefs.has(g.href)).slice(0, 3)
}

export default function RoutePage({ data }: { data: RoutePageData }) {
  const { lang, isAr } = useLang()
  const tx = (b: { ar: string; en: string }) => b[lang]
  const badge = TYPE_BADGE[data.type]
  const waMsg = isAr
    ? `السلام عليكم، أرغب في حجز رحلة من ${tx(data.from)} إلى ${tx(data.to)}`
    : `Hello, I'd like to book a trip from ${tx(data.from)} to ${tx(data.to)}`
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(waMsg)}`

  return (
    <main>
      {/* ── Hero ── */}
      <section style={{
        minHeight: '90vh',
        background: `linear-gradient(135deg,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.44) 100%), url("${data.heroImage}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center', padding: '100px 0 70px',
      }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              {/* Type badge */}
              <span style={{
                display: 'inline-block', background: badge.color + '33',
                border: `1px solid ${badge.color}99`, color: 'white',
                padding: '5px 16px', borderRadius: '50px',
                fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px',
              }}>
                {tx(badge)}
              </span>

              {/* Route H1 */}
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '14px' }}>
                <span style={{ color: 'var(--primary)' }}>{tx(data.from)}</span>
                <span style={{ margin: '0 10px', opacity: 0.6 }}>→</span>
                <span style={{ color: 'var(--primary)' }}>{tx(data.to)}</span>
              </h1>

              <p className="route-description" style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '500px' }}>
                {tx(data.description)}
              </p>

              {/* Stats row */}
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={18} color="var(--primary)" strokeWidth={2} />
                  <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{data.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Navigation size={18} color="var(--primary)" strokeWidth={2} />
                  <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{data.distance}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Star size={18} color="var(--primary)" strokeWidth={2} fill="var(--primary)" />
                  <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{isAr ? 'سعر ثابت' : 'Fixed Price'}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle size={16} strokeWidth={2.5} />
                  {isAr ? 'احجز الآن عبر واتساب' : 'Book Now via WhatsApp'}
                </a>
                <a href="tel:+923097811785" className="btn-outline">
                  <Phone size={16} strokeWidth={2.5} />
                  {isAr ? 'اتصل بنا' : 'Call Us'}
                </a>
              </div>
            </div>

            <div className="animate-fadeInUp animate-delay-1">
              <BookingForm defaultFrom={tx(data.from)} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Route Info Strip ── */}
      <section style={{ padding: '40px 0', backgroundColor: 'var(--secondary)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            {[
              { label: isAr ? 'المسافة' : 'Distance', value: data.distance },
              { label: isAr ? 'وقت الرحلة' : 'Travel Time', value: data.duration },
              { label: isAr ? 'السعر' : 'Pricing', value: isAr ? 'ثابت — بدون عداد' : 'Fixed — No Meter' },
              { label: isAr ? 'الخدمة' : 'Availability', value: '24/7' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '4px' }}>{s.value}</div>
                <div style={{ fontSize: '0.82rem', opacity: 0.7 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vehicle Options ── */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'اختر سيارتك' : 'Choose Your Vehicle'}</span>
            <h2 className="section-title">
              {isAr
                ? <>خيارات السيارات من <span style={{ color: 'var(--primary)' }}>{tx(data.from)}</span> إلى <span style={{ color: 'var(--primary)' }}>{tx(data.to)}</span></>
                : <><span style={{ color: 'var(--primary)' }}>{tx(data.from)}</span> to <span style={{ color: 'var(--primary)' }}>{tx(data.to)}</span> — Vehicle Options</>
              }
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3">
            {data.vehicles.map(v => (
              <div key={v.nameEn} className="service-card" style={{ textAlign: 'start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div className="service-icon" style={{ flexShrink: 0 }}>
                    <Users size={24} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '900', fontSize: '1rem' }}>{isAr ? v.nameAr : v.nameEn}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{v.seats}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.65, marginBottom: '16px' }}>
                  {isAr ? v.priceNote.ar : v.priceNote.en}
                </p>
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: '#25D366', color: 'white', padding: '9px 18px',
                    borderRadius: '8px', fontWeight: '700', fontSize: '0.84rem',
                    textDecoration: 'none',
                  }}>
                  <MessageCircle size={14} strokeWidth={2.5} />
                  {isAr ? 'احجز هذه السيارة' : 'Book This Vehicle'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Highlights ── */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="section-tag">{isAr ? 'مميزات الرحلة' : 'Trip Highlights'}</span>
              <h2 className="section-title" style={{ marginTop: '12px', textAlign: isAr ? 'right' : 'left' }}>
                {isAr
                  ? <>رحلة <span style={{ color: 'var(--primary)' }}>{tx(data.from)} ← {tx(data.to)}</span> بكل راحة</>
                  : <><span style={{ color: 'var(--primary)' }}>{tx(data.from)} → {tx(data.to)}</span> — A Comfortable Ride</>
                }
              </h2>
              <div className="gold-divider" style={{ margin: '14px 0' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
                {data.highlights.map(h => (
                  <div key={h.en} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{h.icon}</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: '600' }}>{isAr ? h.ar : h.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why private cab */}
            <div style={{
              background: 'linear-gradient(135deg,#0B3D2E,#0F5132)',
              borderRadius: '20px', padding: '40px 32px', color: 'white',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '20px', color: 'var(--primary)' }}>
                {isAr ? 'لماذا الكاب الخاص أفضل؟' : 'Why Choose Private Cab?'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(isAr ? data.whyPrivate.ar : data.whyPrivate.en).map(point => (
                  <div key={point} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle size={16} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.88rem', lineHeight: 1.6, opacity: 0.9 }}>{point}</span>
                  </div>
                ))}
              </div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: 'var(--primary)', color: '#1D1D1B', padding: '12px 24px',
                  borderRadius: '10px', fontWeight: '800', fontSize: '0.88rem',
                  textDecoration: 'none', marginTop: '28px',
                }}>
                <MessageCircle size={16} strokeWidth={2.5} />
                {isAr ? 'احجز رحلتك الآن' : 'Book Your Trip Now'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Signals ── */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="grid-4">
            {[
              { icon: <Shield size={28} strokeWidth={1.8} />, title: isAr ? 'سائقون محترفون' : 'Professional Drivers', desc: isAr ? 'ذوو خبرة ومدرّبون احترافياً' : 'Experienced & professionally trained' },
              { icon: <Banknote size={28} strokeWidth={1.8} />, title: isAr ? 'سعر ثابت' : 'Fixed Price', desc: isAr ? 'لا عداد ولا رسوم خفية' : 'No meter, no hidden fees' },
              { icon: <Clock size={28} strokeWidth={1.8} />, title: isAr ? 'في الوقت المحدد' : 'Punctual Service', desc: isAr ? 'نسعى للوصول في الموعد' : 'We aim for on-time arrival' },
              { icon: <MessageCircle size={28} strokeWidth={1.8} />, title: isAr ? 'دعم ٢٤/٧' : '24/7 Support', desc: isAr ? 'واتساب وهاتف دائماً' : 'WhatsApp & phone always open' },
            ].map(i => (
              <div key={i.title} className="service-card" style={{ textAlign: 'center' }}>
                <div className="service-icon" style={{ margin: '0 auto 14px' }}>{i.icon}</div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '8px' }}>{i.title}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted-foreground)' }}>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Routes ── */}
      {data.relatedRoutes.length > 0 && (
        <section style={{ padding: '70px 0', backgroundColor: 'var(--muted)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <span className="section-tag">{isAr ? 'خطوط ذات صلة' : 'Related Routes'}</span>
              <h2 className="section-title">{isAr ? 'رحلات أخرى قد تهمك' : 'Other Routes You May Need'}</h2>
              <div className="gold-divider" />
            </div>
            <div className="grid-3" style={{ gap: '16px' }}>
              {data.relatedRoutes.map(r => (
                <Link key={r.slug} href={`/${r.slug}`}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: 'white', borderRadius: '14px', padding: '18px 20px',
                    border: '1.5px solid var(--border)', textDecoration: 'none',
                    transition: 'all 0.25s', boxShadow: 'var(--shadow-sm)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
                >
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '0.92rem', marginBottom: '4px' }}>
                      {tx(r.from)} → {tx(r.to)}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>{r.duration}</div>
                  </div>
                  <ArrowRight size={18} color="var(--primary)" strokeWidth={2.5} style={{ transform: isAr ? 'rotate(180deg)' : 'none', flexShrink: 0 }} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── City Links ── */}
      <section style={{ padding: '50px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', marginBottom: '20px', fontWeight: '600' }}>
            {isAr ? 'استكشف خدمات المدن' : 'Explore City Services'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { href: '/makkah-taxi-service', ar: 'مكة المكرمة', en: 'Makkah' },
              { href: '/madinah-taxi-service', ar: 'المدينة المنورة', en: 'Madinah' },
              { href: '/jeddah-taxi-service', ar: 'جدة', en: 'Jeddah' },
              { href: '/taif-taxi-service', ar: 'الطائف', en: 'Taif' },
            ].map(c => (
              <Link key={c.href} href={c.href} className="route-badge">
                <MapPin size={14} strokeWidth={2} />
                {isAr ? c.ar : c.en}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      {getRelevantGuides(data).length > 0 && (
        <section style={{ padding: '0 0 50px', backgroundColor: 'var(--background)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', marginBottom: '20px', fontWeight: '600' }}>
              {isAr ? 'أدلة مفيدة' : 'Helpful Guides'}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {getRelevantGuides(data).map(g => (
                <Link key={g.href} href={g.href} className="route-badge">
                  {isAr ? g.ar : g.en}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <FAQSection faqs={data.faqs} heading={{ ar: `أسئلة شائعة — ${tx(data.from)} إلى ${tx(data.to)}`, en: `FAQ — ${tx(data.from)} to ${tx(data.to)}` }} noSchema />

      {/* ── Footer CTA ── */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#0B3D2E,#0F5132)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>
            {isAr ? `احجز الآن — ${tx(data.from)} إلى ${tx(data.to)}` : `Book Now — ${tx(data.from)} to ${tx(data.to)}`}
          </h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', fontSize: '0.95rem' }}>
            {isAr ? 'سائق محترف، سعر ثابت، خدمة ٢٤/٧' : 'Professional driver, fixed price, 24/7 service'}
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg,#D4AF37,#E6C65C)', color: '#1D1D1B',
                padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem',
                display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
              }}>
              <MessageCircle size={18} strokeWidth={2.5} />
              {isAr ? 'واتساب' : 'WhatsApp'}
            </a>
            <a href="tel:+923097811785"
              style={{
                background: 'rgba(255,255,255,0.15)', color: 'white',
                border: '2px solid rgba(255,255,255,0.5)', padding: '13px 32px',
                borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem',
                display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
              }}>
              <Phone size={18} strokeWidth={2.5} />
              +92 309 7811785
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
