'use client'
import Link from 'next/link'
import FAQSection from './FAQSection'
import PricingSection from './PricingSection'
import {
  Phone, MessageCircle, Car,
  Building2, Plane, Bus, Briefcase, Building, Map, Users, Shield, Clock, Banknote, Star,
  Moon, Waves, ShoppingBag, UserRound, Anchor, MapPin, Gem, Mountain, Leaf, TreePine, ShoppingCart, Sun,
  Tent,
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
    name: { ar: 'العزيزية', en: 'Al-Aziziyah' },
    desc: {
      ar: 'أكبر أحياء الفنادق في مكة، يقع على بعد حوالي 3-4 كم من الحرم المكي وقريب من منى. خيار شائع للحجاج والمعتمرين بأسعار متوسطة، ونوفر رحلات منتظمة بين العزيزية والحرم.',
      en: 'Makkah\'s largest hotel district, roughly 3-4 km from the Holy Mosque and close to Mina. A popular mid-range base for pilgrims — we run regular transfers between Al-Aziziyah and the Haram.',
    },
  },
  {
    icon: MapPin,
    name: { ar: 'المسفلة', en: 'Misfalah' },
    desc: {
      ar: 'حي تاريخي قريب جداً من الحرم المكي، على مسافة تصل مشياً في بعض أجزائه. نغطي جميع فنادق وشقق المسفلة بتوصيل سريع للحرم.',
      en: 'A historic district right beside the Holy Mosque, walkable from parts of the area. We cover every hotel and apartment in Misfalah with quick transfers to the Haram.',
    },
  },
  {
    icon: Building,
    name: { ar: 'أجياد', en: 'Ajyad' },
    desc: {
      ar: 'من أقرب الأحياء إلى المسجد الحرام، يطل مباشرة على برج الساعة ومنطقة الحرم. مثالي لمن يريد إقامة قريبة جداً، ونقدم توصيلاً فورياً من وإلى فنادق أجياد.',
      en: 'One of the closest neighborhoods to the Holy Mosque, overlooking the Clock Tower area. Ideal for travelers who want to stay within very close reach — we offer instant pickup from Ajyad hotels.',
    },
  },
  {
    icon: Tent,
    name: { ar: 'منى', en: 'Mina' },
    desc: {
      ar: 'مدينة الخيام على بعد حوالي 7 كم من مكة، محطة أساسية خلال أيام الحج. نوفر رحلات منظمة من وإلى منى بسيارات مرخصة خلال كامل الموسم.',
      en: 'The tent city roughly 7 km from central Makkah, a core stop during the days of Hajj. We run organized transfers to and from Mina in licensed vehicles throughout the season.',
    },
  },
  {
    icon: Mountain,
    name: { ar: 'عرفات', en: 'Arafat' },
    desc: {
      ar: 'موقع الوقوف الأهم في مناسك الحج، يبعد حوالي 20 كم عن مكة المكرمة. نساعد الحجاج والمجموعات على التنقل إلى عرفات ومنها في الوقت المحدد.',
      en: 'The site of the central Hajj ritual of standing (Wuquf), about 20 km from Makkah. We help pilgrims and groups move to and from Arafat exactly on schedule.',
    },
  },
  {
    icon: Moon,
    name: { ar: 'مزدلفة', en: 'Muzdalifah' },
    desc: {
      ar: 'محطة المبيت بين عرفات ومنى، على بعد حوالي 9 كم من مكة. جزء من خطة النقل خلال ليالي الحج، نوفره ضمن باقات نقل الحج والعمرة.',
      en: 'The overnight stop between Arafat and Mina, about 9 km from Makkah. Part of the transport plan for Hajj nights, included in our Hajj & Umrah transport packages.',
    },
  },
]

export default function MakkahLocationPage({
  cityName, citySlogan, description, heroImage,
  services, routes, linkedRoutes, citySlug, highlights, faqs, pricing,
}: LocationPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: { ar: string; en: string }) => b[lang]
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في مكة المكرمة' : "Hello, I'd like to book a trip in Makkah"

  return (
    <main>
      {/* ── Hero — Sacred/Imperial Centered ── */}
      <section style={{
        minHeight: '100vh',
        background: `linear-gradient(180deg, rgba(7,31,23,0.90) 0%, rgba(11,61,46,0.72) 55%, rgba(7,31,23,0.92) 100%), url("${heroImage}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px 80px', textAlign: 'center', position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: '16px', border: '1px solid rgba(212,175,55,0.22)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: '24px', border: '1px solid rgba(212,175,55,0.10)', pointerEvents: 'none' }} />

        <div className="animate-fadeInUp" style={{ color: 'white', maxWidth: '720px', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.50)',
            color: '#D4AF37', padding: '6px 22px', borderRadius: '50px',
            fontSize: '0.82rem', fontWeight: '700', marginBottom: '24px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            {tx(citySlogan)}
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            {tr.transportIn}<br />
            <span style={{ color: '#D4AF37' }}>{tx(cityName)}</span>
          </h1>

          <div style={{ width: '72px', height: '3px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', margin: '0 auto 24px' }} />

          <p style={{ fontSize: '1rem', opacity: 0.82, lineHeight: '1.8', maxWidth: '560px', margin: '0 auto 36px' }}>
            {tx(description)}
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://wa.me/966569487569" className="btn-primary" style={{ padding: '14px 32px' }}>
              <Phone size={16} strokeWidth={2.5} /> {tr.callNow}
            </a>
            <a
              href={`https://wa.me/966569487569?text=${encodeURIComponent(waText)}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-outline" style={{ padding: '14px 32px' }}
            >
              <MessageCircle size={16} strokeWidth={2.5} /> {tr.whatsapp}
            </a>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px', justifyContent: 'center' }}>
            {tr.tags.map(s => (
              <span key={s} style={{
                background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.22)',
                color: 'white', padding: '5px 14px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '600',
              }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Form Band ── */}
      <section style={{ background: '#071f17', padding: '52px 0', borderTop: '1px solid rgba(212,175,55,0.3)', borderBottom: '1px solid rgba(212,175,55,0.3)' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{
              background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)',
              color: '#D4AF37', padding: '4px 18px', borderRadius: '50px',
              fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              {isAr ? 'احجز رحلتك' : 'Reserve Your Transfer'}
            </span>
            <h2 style={{ color: 'white', marginTop: '12px', fontSize: '1.4rem', fontWeight: '800' }}>
              {isAr ? 'أدخل تفاصيل رحلتك' : 'Enter Your Trip Details'}
            </h2>
          </div>
          <BookingForm defaultFrom={tx(cityName)} />
        </div>
      </section>

      {/* ── Services — Dark Cards with Gold Border ── */}
      <section style={{ padding: '88px 0', backgroundColor: '#0a2418' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
              {tr.servicesTag}
            </span>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '900', marginTop: '12px' }}>
              {tr.servicesTitle} <span style={{ color: '#D4AF37' }}>{tx(cityName)}</span>
            </h2>
            <div className="gold-divider" style={{ margin: '14px auto' }} />
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto', fontSize: '0.9rem' }}>
              {tr.servicesSubtitle}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '16px' }}>
            {services.map(s => {
              const SIcon = ICON_MAP[s.iconName]
              return (
                <div key={s.title.ar} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.18)',
                  borderLeft: '3px solid #D4AF37', borderRadius: '12px', padding: '22px 20px',
                  transition: 'background 0.2s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ background: 'rgba(212,175,55,0.12)', borderRadius: '10px', padding: '10px', flexShrink: 0 }}>
                      {SIcon && <SIcon size={22} strokeWidth={1.8} color="#D4AF37" />}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '0.88rem', fontWeight: '800', marginBottom: '6px', color: 'white' }}>{tx(s.title)}</h3>
                      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.58)', lineHeight: '1.65', margin: 0 }}>{tx(s.desc)}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Routes — Gold Pill Badges on Dark ── */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg, #0B3D2E 0%, #071f17 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '38px' }}>
            <span className="section-tag">{tr.routesTag}</span>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '900', marginTop: '12px' }}>
              {tr.routesTitle} <span style={{ color: '#D4AF37' }}>{tx(cityName)}</span>
            </h2>
            <div className="gold-divider" style={{ margin: '14px auto' }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {routes.map(r => (
              <a
                key={r.label.ar}
                href={`https://wa.me/966569487569?text=${encodeURIComponent(waText)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 22px',
                  background: 'rgba(212,175,55,0.10)', border: '1px solid rgba(212,175,55,0.38)',
                  borderRadius: '50px', textDecoration: 'none', color: 'white',
                  fontSize: '0.88rem', fontWeight: '700', transition: 'all 0.2s',
                }}
              >
                {tx(r.label)}
                <span style={{ color: '#D4AF37', fontSize: '0.78rem' }}>{r.duration}</span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href={`/${citySlug}/routes`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#D4AF37', color: '#071f17',
              padding: '12px 28px', borderRadius: '10px', fontWeight: '800', fontSize: '0.88rem', textDecoration: 'none',
            }}>
              {isAr ? `عرض جميع خطوط ${tx(cityName)} ←` : `View All ${tx(cityName)} Routes →`}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Neighbourhoods & Holy Sites We Cover ── */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'الأحياء والمشاعر' : 'Neighbourhoods & Holy Sites'}</span>
            <h2 className="section-title">
              {isAr ? <>نغطي كل حي في <span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span></> : <>We Cover Every Area of <span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span></>}
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              {isAr
                ? 'من أحياء الفنادق القريبة من الحرم إلى المشاعر المقدسة — سائقونا يعرفون كل موقع'
                : 'From hotel districts near the Haram to the sacred sites — our drivers know every location'}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {NEIGHBOURHOODS.map(n => {
              const NIcon = n.icon
              return (
                <div key={n.name.en} style={{
                  padding: '24px 22px', borderRadius: '16px',
                  border: '1.5px solid var(--border)', background: 'var(--card)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ background: 'var(--primary-light)', borderRadius: '10px', padding: '9px', flexShrink: 0 }}>
                      <NIcon size={20} strokeWidth={1.8} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--foreground)', margin: 0 }}>{tx(n.name)}</h3>
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
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="section-tag">{isAr ? 'رحلات مباشرة' : 'Direct Routes'}</span>
              <h2 className="section-title" style={{ marginTop: '12px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span> — خطوط مباشرة</>
                  : <><span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span> Direct Routes</>}
              </h2>
              <div className="gold-divider" style={{ margin: '14px auto' }} />
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

      {/* ── Why Us — Centered Gold Cards ── */}
      <section style={{ padding: '88px 0', background: '#071f17' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
              {tr.whyTag}
            </span>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: '900', marginTop: '12px' }}>
              {tr.whyTitle} <span style={{ color: '#D4AF37' }}>{tx(cityName)}</span>
            </h2>
            <div className="gold-divider" style={{ margin: '14px auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '18px', marginBottom: '44px' }}>
            {highlights.map(h => {
              const HIcon = ICON_MAP[h.iconName]
              return (
                <div key={h.title.ar} style={{
                  background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.22)',
                  borderRadius: '16px', padding: '28px 22px', textAlign: 'center',
                }}>
                  <div style={{
                    background: 'rgba(212,175,55,0.15)', borderRadius: '50%',
                    width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                  }}>
                    {HIcon && <HIcon size={24} strokeWidth={1.8} color="#D4AF37" />}
                  </div>
                  <h4 style={{ fontWeight: '800', marginBottom: '10px', color: 'white', fontSize: '0.92rem' }}>{tx(h.title)}</h4>
                  <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.58)', lineHeight: '1.65', margin: 0 }}>{tx(h.desc)}</p>
                </div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/966569487569?text=${encodeURIComponent(waText)}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ padding: '14px 32px' }}
            >
              <MessageCircle size={17} strokeWidth={2.5} /> {tr.whatsapp}
            </a>
            <a href="https://wa.me/966569487569" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.08)', color: 'white',
              padding: '14px 32px', borderRadius: '10px', fontWeight: '700', fontSize: '0.9rem',
              textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <Phone size={17} strokeWidth={2.5} /> +966 56 948 7569
            </a>
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
