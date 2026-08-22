'use client'
import Link from 'next/link'
import FAQSection from './FAQSection'
import PricingSection from './PricingSection'
import {
  Phone, MessageCircle, Car,
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
    icon: Mountain,
    name: { ar: 'الهدا', en: 'Al-Hada' },
    desc: {
      ar: 'الطريق الجبلي الشهير الرابط بين مكة والطائف، على بعد حوالي 20 دقيقة من وسط الطائف. يضم التلفريك ومطلات جبلية خلابة، ونوفر رحلات منتظمة إليه.',
      en: 'The famous mountain road linking Makkah and Taif, about 20 minutes from downtown Taif. Home to the cable car and stunning mountain viewpoints — we run regular trips there.',
    },
  },
  {
    icon: Mountain,
    name: { ar: 'شفا', en: 'Al-Shafa' },
    desc: {
      ar: 'منتجع جبلي أعلى ارتفاعاً بمناخ أكثر برودة، على بعد حوالي 30 دقيقة من وسط الطائف. وجهة صيفية مفضلة للعائلات، ونصل إليها بسيارات مريحة للطرق الجبلية.',
      en: 'A higher-elevation mountain retreat with a cooler climate, about 30 minutes from downtown Taif. A favorite summer destination for families — we reach it with vehicles suited to mountain roads.',
    },
  },
  {
    icon: Leaf,
    name: { ar: 'مزارع الورد الطائفي', en: 'Taif Rose Farms' },
    desc: {
      ar: 'تقع في منطقة الهدا والقرى الجبلية المحيطة، وتفتح أساساً في موسم الورد من فبراير إلى أبريل. من أشهر تجارب الطائف، ونرتب رحلات مخصصة لزيارتها.',
      en: 'Located around Al-Hada and the surrounding mountain villages, open mainly during rose season from February to April. One of Taif\'s signature experiences — we arrange dedicated trips to visit them.',
    },
  },
  {
    icon: TreePine,
    name: { ar: 'وادي قرن', en: 'Wadi Qarn' },
    desc: {
      ar: 'وادٍ جبلي خلاب ضمن مسار الجولات الطبيعية في الطائف. جزء من جولة المرتفعات النموذجية التي ننظمها ليوم كامل مع سائق يعرف كل نقطة توقف.',
      en: 'A scenic mountain valley on Taif\'s natural sightseeing route. Part of the typical full-day highlands tour we organize, with a driver who knows every scenic stop.',
    },
  },
  {
    icon: Building2,
    name: { ar: 'وسط الطائف (الفيصلية)', en: 'Downtown Taif (Al-Faisaliyah)' },
    desc: {
      ar: 'المركز التجاري والفندقي في الطائف، حيث تتوفر أغلب أماكن الإقامة. نوفر توصيلاً منتظماً من وسط المدينة إلى الهدا وشفا ومطار الطائف وجميع الوجهات.',
      en: 'Taif\'s commercial and hotel center, where most accommodation is located. We offer regular transfers from downtown to Al-Hada, Al-Shafa, Taif Airport, and every destination.',
    },
  },
]

export default function TaifLocationPage({
  cityName, citySlogan, description, heroImage,
  services, routes, linkedRoutes, citySlug, highlights, faqs, pricing,
}: LocationPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: { ar: string; en: string }) => b[lang]
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في الطائف' : "Hello, I'd like to book a trip in Taif"

  return (
    <main>
      {/* ── Hero — Mountain/Nature/Rose Theme ── */}
      <section style={{
        minHeight: '100vh',
        background: `linear-gradient(145deg, rgba(60,20,50,0.88) 0%, rgba(30,60,40,0.70) 55%, rgba(50,20,60,0.82) 100%), url("${heroImage}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center',
        padding: '100px 0 70px',
      }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              {/* Rose/nature accent */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
                {['🌹', '⛰️', '🌿'].map(e => (
                  <span key={e} style={{ fontSize: '1.1rem' }}>{e}</span>
                ))}
              </div>

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'rgba(233,196,106,0.15)', border: '1px solid rgba(233,196,106,0.40)',
                color: '#e9c46a', padding: '5px 16px', borderRadius: '10px',
                fontSize: '0.84rem', fontWeight: '700', marginBottom: '18px', letterSpacing: '0.04em',
              }}>
                {tx(citySlogan)}
              </div>

              <h1 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: '900', lineHeight: '1.18', marginBottom: '18px' }}>
                {tr.transportIn}<br />
                <span style={{ color: '#e9c46a' }}>{tx(cityName)}</span>
              </h1>

              <div style={{
                width: '50px', height: '3px',
                background: 'linear-gradient(90deg, #e9c46a, #2d6a4f)',
                borderRadius: '2px', marginBottom: '20px',
              }} />

              <p style={{ fontSize: '0.92rem', opacity: 0.88, marginBottom: '32px', lineHeight: '1.8', maxWidth: '480px' }}>
                {tx(description)}
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="https://wa.me/923097811785" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: '#2d6a4f', color: 'white', padding: '13px 28px',
                  borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', textDecoration: 'none',
                  border: '2px solid rgba(233,196,106,0.4)',
                }}>
                  <Phone size={16} strokeWidth={2.5} /> {tr.callNow}
                </a>
                <a
                  href={`https://wa.me/923097811785?text=${encodeURIComponent(waText)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(255,255,255,0.10)', color: 'white', padding: '13px 28px',
                    borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem',
                    textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  <MessageCircle size={16} strokeWidth={2.5} /> {tr.whatsapp}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '32px' }}>
                {tr.tags.map(s => (
                  <span key={s} style={{
                    background: 'rgba(233,196,106,0.12)', border: '1px solid rgba(233,196,106,0.28)',
                    color: '#e9c46a', padding: '5px 14px', borderRadius: '8px',
                    fontSize: '0.82rem', fontWeight: '600',
                  }}>{s}</span>
                ))}
              </div>
            </div>

            <div className="animate-fadeInUp animate-delay-1" style={{
              background: 'rgba(45,106,79,0.25)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(233,196,106,0.25)', borderRadius: '20px', padding: '4px',
            }}>
              <BookingForm defaultFrom={tx(cityName)} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Nature Strip ── */}
      <section style={{ background: 'linear-gradient(90deg, #2d6a4f 0%, #1b4332 100%)', padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {(isAr
            ? ['🌹 مدينة الورد الطائفي', '⛰️ الجبال الخلابة', '🌿 الهواء النقي', '🌡️ مناخ معتدل']
            : ['🌹 Rose Capital of Arabia', '⛰️ Scenic Mountain Roads', '🌿 Fresh Mountain Air', '🌡️ Cool Pleasant Climate']
          ).map(item => (
            <span key={item} style={{ color: 'rgba(233,196,106,0.9)', fontSize: '0.88rem', fontWeight: '700' }}>{item}</span>
          ))}
        </div>
      </section>

      {/* ── Services — Organic 3-col Cards ── */}
      <section style={{ padding: '88px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: 'rgba(45,106,79,0.1)', border: '1px solid rgba(45,106,79,0.3)', color: '#2d6a4f' }}>
              {tr.servicesTag}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              {tr.servicesTitle} <span style={{ color: '#2d6a4f' }}>{tx(cityName)}</span>
            </h2>
            <div style={{ width: '44px', height: '3px', background: 'linear-gradient(90deg, #2d6a4f, #e9c46a)', borderRadius: '2px', margin: '14px 0' }} />
            <p className="section-subtitle">{tr.servicesSubtitle}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {services.map(s => {
              const SIcon = ICON_MAP[s.iconName]
              return (
                <div key={s.title.ar} style={{
                  background: 'var(--card)', borderRadius: '20px', padding: '24px 20px',
                  border: '1px solid var(--border)', transition: 'all 0.3s',
                  borderTop: '3px solid #2d6a4f',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(45,106,79,0.15), rgba(233,196,106,0.12))',
                      borderRadius: '12px', padding: '10px',
                    }}>
                      {SIcon && <SIcon size={22} strokeWidth={1.8} color="#2d6a4f" />}
                    </div>
                    <h3 style={{ fontSize: '0.88rem', fontWeight: '800', margin: 0 }}>{tx(s.title)}</h3>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: '1.65', margin: 0 }}>{tx(s.desc)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Routes — Pill Cards in Nature Theme ── */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg, #1b4332 0%, #2d3a2e 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ background: 'rgba(233,196,106,0.15)', border: '1px solid rgba(233,196,106,0.4)', color: '#e9c46a' }}>
              {tr.routesTag}
            </span>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: '900', marginTop: '12px' }}>
              {tr.routesTitle} <span style={{ color: '#e9c46a' }}>{tx(cityName)}</span>
            </h2>
            <div style={{ width: '44px', height: '3px', background: 'linear-gradient(90deg, #e9c46a, #2d6a4f)', borderRadius: '2px', margin: '14px auto' }} />
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.06)', borderRadius: '20px',
            padding: '28px', border: '1px solid rgba(233,196,106,0.2)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
              {routes.map(r => (
                <a
                  key={r.label.ar}
                  href={`https://wa.me/923097811785?text=${encodeURIComponent(waText)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '12px 18px',
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(233,196,106,0.2)',
                    borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontWeight: '700', fontSize: '0.88rem', color: 'white' }}>{tx(r.label)}</span>
                  <span style={{ color: '#e9c46a', fontSize: '0.78rem', fontWeight: '700', flexShrink: 0, marginLeft: '10px' }}>{r.duration}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link href={`/${citySlug}/routes`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#e9c46a', color: '#1b4332',
              padding: '12px 28px', borderRadius: '12px', fontWeight: '800', fontSize: '0.88rem', textDecoration: 'none',
            }}>
              {isAr ? `عرض جميع خطوط ${tx(cityName)} ←` : `View All ${tx(cityName)} Routes →`}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Neighbourhoods & Mountain Routes ── */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: 'rgba(45,106,79,0.1)', border: '1px solid rgba(45,106,79,0.3)', color: '#2d6a4f' }}>
              {isAr ? 'الأحياء والمرتفعات' : 'Neighbourhoods & Highlands'}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              {isAr ? <>نغطي كل منطقة في <span style={{ color: '#2d6a4f' }}>{tx(cityName)}</span></> : <>We Cover Every Area of <span style={{ color: '#2d6a4f' }}>{tx(cityName)}</span></>}
            </h2>
            <div style={{ width: '44px', height: '3px', background: 'linear-gradient(90deg, #2d6a4f, #e9c46a)', borderRadius: '2px', margin: '14px auto' }} />
            <p className="section-subtitle">
              {isAr
                ? 'من وسط المدينة إلى طرق الهدا وشفا الجبلية — سائقونا يعرفون كل منعطف'
                : 'From downtown to the mountain roads of Al-Hada and Al-Shafa — our drivers know every turn'}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {NEIGHBOURHOODS.map(n => {
              const NIcon = n.icon
              return (
                <div key={n.name.en} style={{
                  background: 'var(--card)', borderRadius: '20px', padding: '24px 20px',
                  border: '1px solid var(--border)', borderTop: '3px solid #2d6a4f',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(45,106,79,0.15), rgba(233,196,106,0.12))',
                      borderRadius: '12px', padding: '10px',
                    }}>
                      <NIcon size={20} strokeWidth={1.8} color="#2d6a4f" />
                    </div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: '800', margin: 0 }}>{tx(n.name)}</h3>
                  </div>
                  <p style={{ fontSize: '0.83rem', color: 'var(--muted-foreground)', lineHeight: '1.65', margin: 0 }}>{tx(n.desc)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Linked Routes ── */}
      {linkedRoutes && linkedRoutes.length > 0 && (
        <section style={{ padding: '60px 0', backgroundColor: 'var(--background)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <span className="section-tag">{isAr ? 'رحلات مباشرة' : 'Direct Routes'}</span>
              <h2 className="section-title" style={{ marginTop: '12px' }}>
                {isAr
                  ? <><span style={{ color: '#2d6a4f' }}>{tx(cityName)}</span> — الخطوط المباشرة</>
                  : <><span style={{ color: '#2d6a4f' }}>{tx(cityName)}</span> Direct Routes</>}
              </h2>
              <div style={{ width: '44px', height: '3px', background: 'linear-gradient(90deg, #2d6a4f, #e9c46a)', borderRadius: '2px', margin: '14px 0' }} />
            </div>
            <div className="grid-2" style={{ gap: '14px' }}>
              {linkedRoutes.map(r => (
                <Link key={r.slug} href={`/${r.slug}`} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--card)', borderRadius: '14px', padding: '18px 22px',
                  border: '1px solid rgba(45,106,79,0.2)', textDecoration: 'none', transition: 'all 0.25s',
                }}>
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '0.9rem', marginBottom: '4px' }}>{tx(r.label)}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>{r.duration} • {isAr ? 'سعر ثابت' : 'Fixed Price'}</div>
                  </div>
                  <div style={{ background: 'rgba(45,106,79,0.12)', borderRadius: '10px', padding: '8px' }}>
                    <Car size={16} color="#2d6a4f" strokeWidth={2} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {pricing && pricing.length > 0 && <FleetSection pricing={pricing} cityName={cityName} />}

      {/* ── Why Us — Alternating Feature Rows ── */}
      <section style={{ padding: '88px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span className="section-tag" style={{ background: 'rgba(45,106,79,0.1)', border: '1px solid rgba(45,106,79,0.3)', color: '#2d6a4f' }}>
              {tr.whyTag}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              {tr.whyTitle} <span style={{ color: '#2d6a4f' }}>{tx(cityName)}</span>
            </h2>
            <div style={{ width: '44px', height: '3px', background: 'linear-gradient(90deg, #2d6a4f, #e9c46a)', borderRadius: '2px', margin: '14px auto' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
            {highlights.map((h, i) => {
              const HIcon = ICON_MAP[h.iconName]
              return (
                <div key={h.title.ar} style={{
                  display: 'flex', alignItems: 'center', gap: '24px',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                  background: i % 2 === 0
                    ? 'linear-gradient(90deg, rgba(45,106,79,0.06), transparent)'
                    : 'linear-gradient(270deg, rgba(233,196,106,0.06), transparent)',
                  borderRadius: '16px', padding: '24px 28px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #2d6a4f, #1b4332)',
                    borderRadius: '16px', padding: '18px', flexShrink: 0,
                  }}>
                    {HIcon && <HIcon size={28} strokeWidth={1.6} color="#e9c46a" />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontWeight: '800', fontSize: '1rem', marginBottom: '8px' }}>{tx(h.title)}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: '1.7', margin: 0 }}>{tx(h.desc)}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
            borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white',
            border: '1px solid rgba(233,196,106,0.3)',
          }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>🌹</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '10px' }}>{tr.ctaTitle}</h3>
            <p style={{ opacity: 0.78, marginBottom: '24px', fontSize: '0.88rem', lineHeight: '1.7' }}>
              {tr.ctaDesc} {tx(cityName)} {tr.ctaDescEnd}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/923097811785?text=${encodeURIComponent(waText)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: '#25D366', color: 'white', padding: '13px 28px',
                  borderRadius: '12px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none',
                }}
              >
                <MessageCircle size={16} strokeWidth={2.5} /> {tr.whatsapp}
              </a>
              <a href="https://wa.me/923097811785" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(233,196,106,0.15)', color: '#e9c46a', padding: '13px 28px',
                borderRadius: '12px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none',
                border: '1px solid rgba(233,196,106,0.4)',
              }}>
                <Phone size={16} strokeWidth={2.5} /> +92 309 7811785
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
