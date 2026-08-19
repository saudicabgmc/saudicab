'use client'
import Link from 'next/link'
import FAQSection from './FAQSection'
import PricingSection from './PricingSection'
import {
  Phone, MessageCircle, Car, ArrowRight,
  Building2, Plane, Bus, Briefcase, Building, Map, Users, Shield, Clock, Banknote, Star,
  Moon, Waves, ShoppingBag, UserRound, Anchor, MapPin, Gem, Mountain, Leaf, TreePine, ShoppingCart, Sun,
} from 'lucide-react'
import BookingForm from './BookingForm'
import FleetSection from './FleetSection'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'
import type { LocationPageProps } from './LocationPage'

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Plane, Bus, Car, Briefcase, Building, Map, Users, Shield, Clock, Banknote, Star,
  Moon, Waves, ShoppingBag, UserRound, Anchor, MapPin, Gem, Mountain, Leaf, TreePine, ShoppingCart, Sun,
}

const NEIGHBOURHOODS = [
  {
    icon: ShoppingBag,
    name: { ar: 'البلد', en: 'Al-Balad' },
    desc: {
      ar: 'قلب جدة التاريخي، مسجل ضمن مواقع التراث العالمي لليونسكو منذ 2014. أزقة ضيقة ومباني مرجانية عريقة وسوق العلوي. نوفر رحلات من وإلى البلد لجولات التسوق والتصوير.',
      en: 'Jeddah\'s historic old town, a UNESCO World Heritage Site since 2014. Narrow alleys, traditional coral-stone buildings, and Souq Al-Alawi. We offer trips to and from Al-Balad for shopping and sightseeing tours.',
    },
  },
  {
    icon: Building2,
    name: { ar: 'طريق الملك (الحي التجاري)', en: 'King Road (Business District)' },
    desc: {
      ar: 'الممر التجاري الرئيسي في جدة، يضم أبراج الأعمال والمولات الكبرى والفنادق. مثالي لرجال الأعمال، ونوفر توصيلاً موثوقاً للاجتماعات والمناسبات.',
      en: 'Jeddah\'s main commercial corridor, lined with business towers, major malls, and hotels. Ideal for corporate travelers — we offer reliable transfers for meetings and events.',
    },
  },
  {
    icon: Waves,
    name: { ar: 'أبحر', en: 'Obhur' },
    desc: {
      ar: 'المنطقة الساحلية الشمالية، على بعد حوالي 30 كم من وسط جدة، تشهر بالشاليهات والمنتجعات على البحر الأحمر. وجهة شهيرة لعطلات نهاية الأسبوع، ونصل إليها بانتظام.',
      en: 'The northern coastal district, about 30 km from central Jeddah, known for its Red Sea beach chalets and resorts. A popular weekend destination — we serve it regularly.',
    },
  },
  {
    icon: Building,
    name: { ar: 'الحمراء', en: 'Al-Hamra' },
    desc: {
      ar: 'حي راقٍ قريب من الكورنيش، يضم فنادق ومطاعم ومناطق سكنية مميزة. من أكثر الأحياء طلباً للإقامة في جدة، ونغطيه بتوصيل سريع لكل وجهاتك.',
      en: 'An upscale district near the Corniche with hotels, restaurants, and premium residential areas. One of the most requested places to stay in Jeddah — we cover it with fast transfers to any destination.',
    },
  },
  {
    icon: Map,
    name: { ar: 'الروضة', en: 'Al-Rawdah' },
    desc: {
      ar: 'حي مركزي حيوي يجمع بين المكاتب والمولات والمطاعم، ويقع بالقرب من طريق الملك. نغطي جميع فنادق ومكاتب الروضة بتوصيل منتظم.',
      en: 'A vibrant central district mixing offices, malls, and restaurants, close to King Road. We cover every hotel and office in Al-Rawdah with regular transfers.',
    },
  },
]

export default function JeddahLocationPage({
  cityName, citySlogan, description, heroImage,
  services, routes, linkedRoutes, citySlug, highlights, faqs, pricing,
}: LocationPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: { ar: string; en: string }) => b[lang]
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في جدة' : "Hello, I'd like to book a trip in Jeddah"

  const stats = isAr
    ? [{ n: '24/7', l: 'متاحون دائماً' }, { n: '4+', l: 'مطارات' }, { n: '1000+', l: 'رحلة ناجحة' }, { n: '100%', l: 'أسعار ثابتة' }]
    : [{ n: '24/7', l: 'Always Available' }, { n: '4+', l: 'Airports Served' }, { n: '1000+', l: 'Trips Completed' }, { n: '100%', l: 'Fixed Prices' }]

  return (
    <main>
      {/* ── Hero — Bold Modern/Coastal ── */}
      <section style={{
        minHeight: '85vh',
        background: `linear-gradient(110deg, rgba(10,31,61,0.94) 0%, rgba(10,31,61,0.70) 50%, rgba(8,145,178,0.25) 100%), url("${heroImage}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center',
        padding: '100px 0 60px',
        borderBottom: '3px solid #0891b2',
      }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              {/* Teal accent line */}
              <div style={{ width: '48px', height: '4px', background: 'linear-gradient(90deg, #0891b2, #D4AF37)', borderRadius: '2px', marginBottom: '18px' }} />

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(8,145,178,0.18)', border: '1px solid rgba(8,145,178,0.45)',
                color: '#7dd3fc', padding: '5px 16px', borderRadius: '6px',
                fontSize: '0.82rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.05em',
              }}>
                {tx(citySlogan)}
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-0.03em' }}>
                {tr.transportIn}<br />
                <span style={{ color: '#7dd3fc' }}>{tx(cityName)}</span>
              </h1>

              <p style={{ fontSize: '0.95rem', opacity: 0.82, marginBottom: '32px', lineHeight: '1.75', maxWidth: '460px' }}>
                {tx(description)}
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="https://wa.me/966569487569" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: '#0891b2', color: 'white', padding: '13px 28px',
                  borderRadius: '8px', fontWeight: '800', fontSize: '0.9rem', textDecoration: 'none',
                }}>
                  <Phone size={16} strokeWidth={2.5} /> {tr.callNow}
                </a>
                <a
                  href={`https://wa.me/966569487569?text=${encodeURIComponent(waText)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(255,255,255,0.10)', color: 'white', padding: '13px 28px',
                    borderRadius: '8px', fontWeight: '800', fontSize: '0.9rem',
                    textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  <MessageCircle size={16} strokeWidth={2.5} /> {tr.whatsapp}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '32px' }}>
                {tr.tags.map(s => (
                  <span key={s} style={{
                    background: 'rgba(8,145,178,0.15)', border: '1px solid rgba(8,145,178,0.35)',
                    color: '#7dd3fc', padding: '4px 12px', borderRadius: '4px',
                    fontSize: '0.8rem', fontWeight: '600',
                  }}>{s}</span>
                ))}
              </div>
            </div>

            <div className="animate-fadeInUp animate-delay-1" style={{
              background: 'rgba(10,31,61,0.85)', backdropFilter: 'blur(16px)',
              border: '1px solid rgba(8,145,178,0.3)', borderRadius: '16px', padding: '4px',
            }}>
              <BookingForm defaultFrom={tx(cityName)} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: '#0a1f3d', borderBottom: '1px solid rgba(8,145,178,0.3)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
            {stats.map((s, i) => (
              <div key={s.l} style={{
                padding: '22px 16px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(8,145,178,0.2)' : 'none',
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#7dd3fc', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginTop: '4px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services — Numbered Cards ── */}
      <section style={{ padding: '88px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <span className="section-tag" style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)', color: '#0891b2' }}>
              {tr.servicesTag}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              {tr.servicesTitle} <span style={{ color: '#0891b2' }}>{tx(cityName)}</span>
            </h2>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #0891b2, #D4AF37)', margin: '14px 0', borderRadius: '2px' }} />
            <p className="section-subtitle">{tr.servicesSubtitle}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '14px' }}>
            {services.map((s, i) => {
              const SIcon = ICON_MAP[s.iconName]
              return (
                <div key={s.title.ar} style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '20px 22px',
                  display: 'flex', alignItems: 'flex-start', gap: '16px',
                  transition: 'all 0.2s',
                }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '8px',
                      background: 'linear-gradient(135deg, #0a1f3d, #0891b2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontSize: '0.72rem', fontWeight: '900', letterSpacing: '-0.02em',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      {SIcon && <SIcon size={16} strokeWidth={2} color="#0891b2" />}
                      <h3 style={{ fontSize: '0.9rem', fontWeight: '800', margin: 0 }}>{tx(s.title)}</h3>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: '1.6', margin: 0 }}>{tx(s.desc)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Routes — Table Row Style ── */}
      <section style={{ padding: '70px 0', backgroundColor: '#f0f8ff' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '38px' }}>
            <span className="section-tag" style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)', color: '#0891b2' }}>
              {tr.routesTag}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              {tr.routesTitle} <span style={{ color: '#0891b2' }}>{tx(cityName)}</span>
            </h2>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #0891b2, #D4AF37)', margin: '14px 0', borderRadius: '2px' }} />
          </div>
          <div style={{ background: 'white', borderRadius: '16px', border: '1px solid rgba(8,145,178,0.18)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(10,31,61,0.06)' }}>
            {routes.map((r, i) => (
              <a
                key={r.label.ar}
                href={`https://wa.me/966569487569?text=${encodeURIComponent(waText)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 24px', textDecoration: 'none',
                  borderBottom: i < routes.length - 1 ? '1px solid rgba(8,145,178,0.1)' : 'none',
                  transition: 'background 0.15s',
                  background: i % 2 === 0 ? 'white' : '#f8fcff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0891b2', flexShrink: 0 }} />
                  <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0a1f3d' }}>{tx(r.label)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    background: 'rgba(8,145,178,0.1)', color: '#0891b2',
                    padding: '3px 10px', borderRadius: '50px', fontSize: '0.78rem', fontWeight: '700',
                  }}>{r.duration}</span>
                  <ArrowRight size={14} color="#0891b2" />
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link href={`/${citySlug}/routes`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#0891b2', color: 'white',
              padding: '12px 28px', borderRadius: '8px', fontWeight: '800', fontSize: '0.88rem', textDecoration: 'none',
            }}>
              {isAr ? `عرض جميع خطوط ${tx(cityName)} ←` : `View All ${tx(cityName)} Routes →`}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Neighbourhoods We Cover ── */}
      <section style={{ padding: '80px 0', backgroundColor: '#f0f8ff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)', color: '#0891b2' }}>
              {isAr ? 'الأحياء التي نغطيها' : 'Neighbourhoods We Cover'}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              {isAr ? <>نغطي كل حي في <span style={{ color: '#0891b2' }}>{tx(cityName)}</span></> : <>We Cover Every Area of <span style={{ color: '#0891b2' }}>{tx(cityName)}</span></>}
            </h2>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #0891b2, #D4AF37)', margin: '14px auto', borderRadius: '2px' }} />
            <p className="section-subtitle">
              {isAr
                ? 'من البلد التاريخية إلى أبحر الساحلية — سائقونا يعرفون كل حي في جدة'
                : 'From historic Al-Balad to coastal Obhur — our drivers know every district in Jeddah'}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {NEIGHBOURHOODS.map(n => {
              const NIcon = n.icon
              return (
                <div key={n.name.en} style={{
                  background: 'white', border: '1px solid rgba(8,145,178,0.18)',
                  borderRadius: '12px', padding: '22px 20px',
                  boxShadow: '0 4px 20px rgba(10,31,61,0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '8px',
                      background: 'linear-gradient(135deg, #0a1f3d, #0891b2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <NIcon size={18} strokeWidth={1.8} color="white" />
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0a1f3d', margin: 0 }}>{tx(n.name)}</h3>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--muted-foreground)', lineHeight: '1.65', margin: 0 }}>{tx(n.desc)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Linked Route Pages ── */}
      {linkedRoutes && linkedRoutes.length > 0 && (
        <section style={{ padding: '60px 0', backgroundColor: 'var(--background)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <span className="section-tag">{isAr ? 'رحلات مباشرة' : 'Direct Routes'}</span>
              <h2 className="section-title" style={{ marginTop: '12px' }}>
                {isAr
                  ? <><span style={{ color: '#0891b2' }}>{tx(cityName)}</span> — الخطوط المباشرة</>
                  : <><span style={{ color: '#0891b2' }}>{tx(cityName)}</span> Direct Routes</>}
              </h2>
              <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #0891b2, #D4AF37)', margin: '14px 0', borderRadius: '2px' }} />
            </div>
            <div className="grid-2" style={{ gap: '12px' }}>
              {linkedRoutes.map(r => (
                <Link key={r.slug} href={`/${r.slug}`} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--card)', borderRadius: '12px', padding: '18px 22px',
                  border: '1px solid rgba(8,145,178,0.2)', textDecoration: 'none', transition: 'all 0.25s',
                }}>
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '0.9rem', marginBottom: '4px', color: 'var(--foreground)' }}>{tx(r.label)}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>{r.duration} • {isAr ? 'سعر ثابت' : 'Fixed Price'}</div>
                  </div>
                  <div style={{ background: 'rgba(8,145,178,0.1)', borderRadius: '8px', padding: '8px' }}>
                    <Car size={16} color="#0891b2" strokeWidth={2} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {pricing && pricing.length > 0 && <FleetSection pricing={pricing} cityName={cityName} />}

      {/* ── Why Us — Left/Right Feature Layout ── */}
      <section style={{ padding: '88px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="section-tag" style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)', color: '#0891b2' }}>
                {tr.whyTag}
              </span>
              <h2 className="section-title" style={{ marginTop: '12px', textAlign: isAr ? 'right' : 'left' }}>
                {tr.whyTitle} <span style={{ color: '#0891b2' }}>{tx(cityName)}</span>
              </h2>
              <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #0891b2, #D4AF37)', margin: '14px 0', borderRadius: '2px' }} />
              <div style={{ marginTop: '28px' }}>
                {highlights.map(h => {
                  const HIcon = ICON_MAP[h.iconName]
                  return (
                    <div key={h.title.ar} className="feature-item">
                      <div style={{
                        background: 'linear-gradient(135deg, #0a1f3d, #0891b2)',
                        borderRadius: '10px', padding: '10px', flexShrink: 0,
                      }}>
                        {HIcon && <HIcon size={20} strokeWidth={1.8} color="white" />}
                      </div>
                      <div>
                        <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>{tx(h.title)}</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{tx(h.desc)}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #0a1f3d 0%, #0c2d54 100%)',
              borderRadius: '20px', padding: '48px 36px', color: 'white', textAlign: 'center',
              border: '1px solid rgba(8,145,178,0.3)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(8,145,178,0.2)', borderRadius: '50%', padding: '18px', border: '1px solid rgba(8,145,178,0.4)' }}>
                  <MessageCircle size={40} color="#7dd3fc" strokeWidth={1.6} />
                </div>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '900', marginBottom: '14px' }}>{tr.ctaTitle}</h3>
              <p style={{ opacity: 0.72, marginBottom: '28px', lineHeight: '1.7', fontSize: '0.85rem' }}>
                {tr.ctaDesc} {tx(cityName)} {tr.ctaDescEnd}
              </p>
              <a
                href={`https://wa.me/966569487569?text=${encodeURIComponent(waText)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: '#25D366', color: 'white', padding: '13px 28px', borderRadius: '8px',
                  fontWeight: '700', fontSize: '0.88rem', marginBottom: '10px', textDecoration: 'none',
                }}
              >
                <MessageCircle size={17} strokeWidth={2.5} /> {tr.whatsapp}
              </a>
              <a href="https://wa.me/966569487569" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: 'rgba(8,145,178,0.2)', color: 'white', padding: '12px 28px',
                borderRadius: '8px', fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none',
                border: '1px solid rgba(8,145,178,0.4)',
              }}>
                <Phone size={17} strokeWidth={2.5} /> +966 56 948 7569
              </a>
            </div>
          </div>
        </div>
      </section>

      {pricing && pricing.length > 0 && (
        <PricingSection routes={pricing} heading={{ ar: `أسعار النقل في ${tx(cityName)}`, en: `Transport Rates in ${tx(cityName)}` }} />
      )}

      <FAQSection faqs={faqs} heading={{ ar: `أسئلة شائعة حول النقل في ${tx(cityName)}`, en: `Frequently Asked Questions — ${tx(cityName)}` }} noSchema />
    </main>
  )
}
