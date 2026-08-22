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
    icon: Building2,
    name: { ar: 'المنطقة المركزية', en: 'Central Area (Al-Markaziyah)' },
    desc: {
      ar: 'الحي المحيط مباشرة بالمسجد النبوي الشريف، حيث تقع أغلب الفنادق الكبرى على مسافة يمكن قطعها مشياً. نغطي جميع فنادق المنطقة المركزية بتوصيل سريع من وإلى المطار والمحطة.',
      en: 'The district immediately surrounding Masjid an-Nabawi, home to most major hotels within walking distance of the mosque. We cover every hotel in the Central Area with fast transfers to and from the airport and train station.',
    },
  },
  {
    icon: Moon,
    name: { ar: 'قباء', en: 'Quba' },
    desc: {
      ar: 'موقع مسجد قباء، أول مسجد بُني في الإسلام، على بعد حوالي 5 كم جنوب المسجد النبوي. من أكثر الوجهات طلباً لدى الزوار، ونوفر رحلات مباشرة من الفنادق إلى قباء.',
      en: 'Home to Masjid Quba, the first mosque built in Islam, roughly 5 km south of Masjid an-Nabawi. One of the most requested destinations for visitors — we run direct trips from hotels to Quba.',
    },
  },
  {
    icon: Mountain,
    name: { ar: 'جبل أحد', en: 'Mount Uhud' },
    desc: {
      ar: 'الموقع التاريخي لغزوة أحد، على بعد حوالي 5 كم شمال المسجد النبوي. نظّم رحلات لزيارة الجبل ومقبرة الشهداء ضمن جولات الزيارة الإسلامية في المدينة المنورة.',
      en: 'The historic site of the Battle of Uhud, about 5 km north of Masjid an-Nabawi. We arrange visits to the mountain and the martyrs\' cemetery as part of Madinah Islamic-sites tours.',
    },
  },
  {
    icon: MapPin,
    name: { ar: 'البقيع', en: 'Al-Baqi' },
    desc: {
      ar: 'مقبرة البقيع المجاورة مباشرة للمسجد النبوي من الجهة الشرقية. يزورها معظم القادمين للمدينة المنورة، ونوفر توصيلاً سريعاً لمن يقيم بعيداً عن المنطقة المركزية.',
      en: 'The Al-Baqi cemetery sits directly beside Masjid an-Nabawi on its eastern side. Visited by most travelers to Madinah — we offer quick transfers for guests staying outside the Central Area.',
    },
  },
  {
    icon: TreePine,
    name: { ar: 'العقيق', en: 'Al-Aqiq' },
    desc: {
      ar: 'منطقة سكنية وفندقية أوسع تقع غرب المدينة المنورة، وتشمل مسجد ذي الحليفة (ميقات أهل المدينة). نوفر توصيلاً منتظماً بين العقيق والمسجد النبوي.',
      en: 'A wider residential and hotel area west of central Madinah, home to Masjid Dhul-Hulayfah (the miqat for Madinah residents). We run regular transfers between Al-Aqiq and Masjid an-Nabawi.',
    },
  },
]

export default function MadinahLocationPage({
  cityName, citySlogan, description, heroImage,
  services, routes, linkedRoutes, citySlug, highlights, faqs, pricing,
}: LocationPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: { ar: string; en: string }) => b[lang]
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في المدينة المنورة' : "Hello, I'd like to book a trip in Madinah"

  return (
    <main>
      {/* ── Hero — Serene/Luminous with Soft Overlay ── */}
      <section style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, rgba(20,58,46,0.82) 0%, rgba(10,40,30,0.60) 50%, rgba(26,74,58,0.78) 100%), url("${heroImage}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center',
        padding: '100px 0 70px',
      }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              {/* Pearl/silver accent bar above slogan */}
              <div style={{
                width: '40px', height: '3px',
                background: 'linear-gradient(90deg, rgba(192,192,192,0.8), rgba(212,175,55,0.9))',
                marginBottom: '14px',
              }} />
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'rgba(192,192,192,0.12)', border: '1px solid rgba(192,192,192,0.35)',
                color: '#e8f5e9', padding: '5px 16px', borderRadius: '8px',
                fontSize: '0.84rem', fontWeight: '600', marginBottom: '18px',
                letterSpacing: '0.04em',
              }}>
                {tx(citySlogan)}
              </div>

              <h1 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: '900', lineHeight: '1.2', marginBottom: '18px' }}>
                {tr.transportIn}<br />
                <span style={{ color: '#a8e6cf' }}>{tx(cityName)}</span>
              </h1>

              <p style={{ fontSize: '0.92rem', opacity: 0.88, marginBottom: '32px', lineHeight: '1.85', maxWidth: '480px', color: '#e0f2f1' }}>
                {tx(description)}
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="https://wa.me/923097811785" className="btn-primary">
                  <Phone size={16} strokeWidth={2.5} /> {tr.callNow}
                </a>
                <a
                  href={`https://wa.me/923097811785?text=${encodeURIComponent(waText)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <MessageCircle size={16} strokeWidth={2.5} /> {tr.whatsapp}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px' }}>
                {tr.tags.map(s => (
                  <span key={s} style={{
                    background: 'rgba(168,230,207,0.15)', border: '1px solid rgba(168,230,207,0.30)',
                    color: '#a8e6cf', padding: '5px 14px', borderRadius: '6px',
                    fontSize: '0.82rem', fontWeight: '600',
                  }}>{s}</span>
                ))}
              </div>
            </div>

            <div className="animate-fadeInUp animate-delay-1" style={{
              background: 'rgba(26,74,58,0.75)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(168,230,207,0.25)', borderRadius: '20px', padding: '4px',
            }}>
              <BookingForm defaultFrom={tx(cityName)} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Serene Banner — City Quote ── */}
      <section style={{ background: 'linear-gradient(90deg, #1a4a3a 0%, #0d3328 100%)', padding: '28px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'rgba(168,230,207,0.9)', fontSize: '0.92rem', fontWeight: '600', letterSpacing: '0.06em', margin: 0 }}>
            {isAr
              ? '✦ خدمة نقل متميزة في مدينة المصطفى ﷺ — سائقون محترفون، أسعار ثابتة، متاحون ٢٤/٧ ✦'
              : '✦ Premium transfer service in the City of the Prophet ﷺ — professional drivers, fixed prices, available 24/7 ✦'}
          </p>
        </div>
      </section>

      {/* ── Services — Elevated Floating Cards ── */}
      <section style={{ padding: '88px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: 'rgba(26,74,58,0.1)', border: '1px solid rgba(26,74,58,0.3)', color: '#1a4a3a' }}>
              {tr.servicesTag}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              {tr.servicesTitle} <span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span>
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{tr.servicesSubtitle}</p>
          </div>
          <div className="grid-4" style={{ gap: '18px' }}>
            {services.map(s => {
              const SIcon = ICON_MAP[s.iconName]
              return (
                <div key={s.title.ar} style={{
                  background: 'var(--card)', borderRadius: '18px', padding: '26px 20px',
                  border: '1px solid var(--border)', boxShadow: '0 4px 20px rgba(26,74,58,0.08)',
                  transition: 'all 0.3s', textAlign: 'center',
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(26,74,58,0.12), rgba(168,230,207,0.15))',
                    borderRadius: '14px', padding: '14px', display: 'inline-flex', marginBottom: '14px',
                  }}>
                    {SIcon && <SIcon size={26} strokeWidth={1.6} color="#1a4a3a" />}
                  </div>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: '800', marginBottom: '10px' }}>{tx(s.title)}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: '1.65', margin: 0 }}>{tx(s.desc)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Routes — Timeline/Connected Style ── */}
      <section style={{ padding: '70px 0', backgroundColor: '#f0faf5' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '42px' }}>
            <span className="section-tag" style={{ background: 'rgba(26,74,58,0.1)', border: '1px solid rgba(26,74,58,0.3)', color: '#1a4a3a' }}>
              {tr.routesTag}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              {tr.routesTitle} <span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
            {routes.map((r, i) => (
              <a
                key={r.label.ar}
                href={`https://wa.me/923097811785?text=${encodeURIComponent(waText)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 20px',
                  background: 'white', border: '1px solid rgba(26,74,58,0.15)',
                  borderRadius: '12px', textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(26,74,58,0.06)', transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a4a3a, #2d7a5f)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    color: 'white', fontSize: '0.7rem', fontWeight: '800',
                  }}>
                    {i + 1}
                  </div>
                  <span style={{ fontWeight: '700', fontSize: '0.88rem', color: '#1a4a3a' }}>{tx(r.label)}</span>
                </div>
                <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.8rem', flexShrink: 0 }}>{r.duration}</span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href={`/${citySlug}/routes`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#1a4a3a', color: 'white',
              padding: '12px 28px', borderRadius: '10px', fontWeight: '800', fontSize: '0.88rem', textDecoration: 'none',
            }}>
              {isAr ? `عرض جميع خطوط ${tx(cityName)} ←` : `View All ${tx(cityName)} Routes →`}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Neighbourhoods & Islamic Sites We Cover ── */}
      <section style={{ padding: '80px 0', backgroundColor: '#f0faf5' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: 'rgba(26,74,58,0.1)', border: '1px solid rgba(26,74,58,0.3)', color: '#1a4a3a' }}>
              {isAr ? 'الأحياء والمواقع الإسلامية' : 'Neighbourhoods & Islamic Sites'}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              {isAr ? <>نغطي كل حي في <span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span></> : <>We Cover Every Area of <span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span></>}
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              {isAr
                ? 'من الأحياء القريبة من المسجد النبوي إلى المواقع الإسلامية التاريخية — سائقونا يعرفون كل موقع'
                : 'From hotel districts near the Prophet\'s Mosque to historic Islamic sites — our drivers know every location'}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {NEIGHBOURHOODS.map(n => {
              const NIcon = n.icon
              return (
                <div key={n.name.en} style={{
                  background: 'white', borderRadius: '16px', padding: '24px 22px',
                  border: '1px solid rgba(26,74,58,0.15)', boxShadow: '0 2px 8px rgba(26,74,58,0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(26,74,58,0.12), rgba(168,230,207,0.15))',
                      borderRadius: '10px', padding: '9px', flexShrink: 0,
                    }}>
                      <NIcon size={20} strokeWidth={1.8} color="#1a4a3a" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#1a4a3a', margin: 0 }}>{tx(n.name)}</h3>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: '1.7', margin: 0 }}>{tx(n.desc)}</p>
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
                  ? <><span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span> — الخطوط المباشرة</>
                  : <><span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span> Direct Routes</>}
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="grid-2" style={{ gap: '14px' }}>
              {linkedRoutes.map(r => (
                <Link key={r.slug} href={`/${r.slug}`} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--card)', borderRadius: '14px', padding: '18px 22px',
                  border: '1.5px solid var(--border)', textDecoration: 'none', transition: 'all 0.25s',
                }}>
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '0.9rem', marginBottom: '4px', color: 'var(--foreground)' }}>{tx(r.label)}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>{r.duration} • {isAr ? 'سعر ثابت' : 'Fixed Price'}</div>
                  </div>
                  <Car size={18} color="var(--primary)" strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {pricing && pricing.length > 0 && <FleetSection pricing={pricing} cityName={cityName} />}

      {/* ── Why Us — Horizontal Feature Strip ── */}
      <section style={{ padding: '88px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ marginBottom: '48px', textAlign: isAr ? 'right' : 'left' }}>
            <span className="section-tag" style={{ background: 'rgba(26,74,58,0.1)', border: '1px solid rgba(26,74,58,0.3)', color: '#1a4a3a' }}>
              {tr.whyTag}
            </span>
            <h2 className="section-title" style={{ marginTop: '12px', textAlign: isAr ? 'right' : 'left' }}>
              {tr.whyTitle} <span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span>
            </h2>
            <div className="gold-divider" style={{ margin: '14px 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px', marginBottom: '44px' }}>
            {highlights.map(h => {
              const HIcon = ICON_MAP[h.iconName]
              return (
                <div key={h.title.ar} style={{
                  display: 'flex', gap: '16px', alignItems: 'flex-start',
                  background: '#f0faf5', borderRadius: '14px', padding: '22px 18px',
                  border: '1px solid rgba(26,74,58,0.12)',
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #1a4a3a, #2d7a5f)',
                    borderRadius: '12px', padding: '10px', flexShrink: 0,
                  }}>
                    {HIcon && <HIcon size={20} strokeWidth={1.8} color="white" />}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '800', marginBottom: '6px', fontSize: '0.9rem' }}>{tx(h.title)}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: '1.65', margin: 0 }}>{tx(h.desc)}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA inline */}
          <div style={{
            background: 'linear-gradient(135deg, #1a4a3a 0%, #0d3328 100%)',
            borderRadius: '20px', padding: '36px 32px', display: 'flex',
            alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
          }}>
            <div style={{ color: 'white' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '6px' }}>{tr.ctaTitle}</h3>
              <p style={{ opacity: 0.75, fontSize: '0.88rem', margin: 0 }}>
                {tr.ctaDesc} {tx(cityName)} {tr.ctaDescEnd}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/923097811785?text=${encodeURIComponent(waText)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: '#25D366', color: 'white', padding: '12px 24px',
                  borderRadius: '10px', fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none',
                }}
              >
                <MessageCircle size={16} strokeWidth={2.5} /> {tr.whatsapp}
              </a>
              <a href="https://wa.me/923097811785" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.12)', color: 'white', padding: '12px 24px',
                borderRadius: '10px', fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none',
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
