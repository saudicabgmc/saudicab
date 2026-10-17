'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import FAQSection from './FAQSection'
import FleetSection from './FleetSection'
import {
  MessageCircle, Mail, ArrowRight, ChevronRight, Check,
  Building2, Plane, Briefcase, Route, Car, Users, Banknote,
  Building, Landmark, Mountain,
} from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import {
  type BText, type RiyadhPageProps,
  heroContent, trustItems, servicesIntro, serviceList, vehicleBestFor,
  linkedRoutes, majorCitiesNote, highlights, bookingSteps,
  sightseeingIntro, sightseeingSpots,
} from '@/lib/riyadhPageData'

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Plane, Briefcase, Route, Car, Users, Banknote, MessageCircle,
  Building, Landmark, Mountain,
}

const WA_NUMBER = '923097811785'
const waUrl = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

/* Riyadh's own identity: a modern capital-city slate + gold, distinct from the
   Red Sea / Rose City / mountain palettes used on the other city pages. */
const SLATE = '#1b2735'
const SLATE2 = '#28384d'
const GOLD = '#D4AF37'

function Arrow({ size = 15 }: { size?: number }) {
  const { isAr } = useLang()
  return <ArrowRight size={size} strokeWidth={2.4} aria-hidden="true" style={{ flexShrink: 0, transform: isAr ? 'scaleX(-1)' : undefined }} />
}

function Head({ id, tag, title, subtitle, dark }: { id: string; tag: string; title: React.ReactNode; subtitle?: string; dark?: boolean }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '44px' }}>
      <span
        className="section-tag"
        style={dark ? { background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: GOLD } : { background: 'rgba(27,39,53,0.08)', border: '1px solid rgba(27,39,53,0.2)', color: SLATE }}
      >
        {tag}
      </span>
      <h2
        id={id}
        style={{
          fontSize: 'clamp(1.45rem, 3vw, 2rem)', fontWeight: 900, lineHeight: 1.25, marginTop: '12px',
          color: dark ? 'white' : 'var(--foreground)',
        }}
      >
        {title}
      </h2>
      <div style={{ width: '44px', height: '3px', background: `linear-gradient(90deg, ${SLATE}, ${GOLD})`, margin: '14px auto', borderRadius: '2px' }} />
      {subtitle && (
        <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.75, color: dark ? 'rgba(255,255,255,0.68)' : 'var(--muted-foreground)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

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

export default function RiyadhLocationPage({ cityName, citySlogan, citySlug, faqs }: RiyadhPageProps) {
  const { isAr } = useLang()
  const tx = (b: BText) => b[isAr ? 'ar' : 'en']
  const city = tx(cityName)
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في الرياض' : "Hello, I'd like to book a trip in Riyadh"
  const reveal = useReveal()

  return (
    <main>
      {/* ── 1. Hero ── */}
      <section
        className="mk-hero"
        style={{
          background: `linear-gradient(135deg, ${SLATE} 0%, ${SLATE2} 60%, #0f1823 100%)`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', position: 'relative',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: '16px', border: '1px solid rgba(212,175,55,0.18)', pointerEvents: 'none' }} />

        {/* Riyadh skyline silhouette — Kingdom Centre + Al Faisaliah Tower, drawn inline so
            the hero has a real Riyadh identity without relying on stock photography. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 220"
          preserveAspectRatio="xMidYMax slice"
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: '42%', opacity: 0.22, pointerEvents: 'none' }}
        >
          <g fill={GOLD}>
            <rect x="40" y="130" width="46" height="90" />
            <rect x="96" y="100" width="34" height="120" />
            <rect x="150" y="150" width="40" height="70" />
            {/* Al Faisaliah Tower — tapered obelisk with sphere */}
            <path d="M330 220 L345 60 L365 60 L380 220 Z" />
            <circle cx="355" cy="46" r="13" />
            <rect x="420" y="120" width="36" height="100" />
            <rect x="470" y="90" width="30" height="130" />
            {/* Kingdom Centre Tower — tapered sides meeting an inverted-U notch near the top */}
            <path d="M560 220 L578 50 Q578 20 600 20 Q622 20 622 50 L640 220 Z" />
            <rect x="588" y="18" width="24" height="46" fill="#0f1823" />
            <rect x="700" y="110" width="38" height="110" />
            <rect x="750" y="140" width="30" height="80" />
            <rect x="800" y="95" width="34" height="125" />
            <rect x="860" y="135" width="40" height="85" />
            <rect x="920" y="105" width="28" height="115" />
            <rect x="970" y="150" width="36" height="70" />
            <rect x="1030" y="120" width="30" height="100" />
            <rect x="1080" y="145" width="42" height="75" />
          </g>
        </svg>

        <div className="animate-fadeInUp" style={{ color: 'white', maxWidth: '780px', position: 'relative' }}>
          <nav aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'} className="mk-crumbs" style={{ marginBottom: '18px' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
              <li><Link href="/" className="mk-focus" style={{ color: 'inherit' }}>{isAr ? 'الرئيسية' : 'Home'}</Link></li>
              <li aria-hidden="true" style={{ display: 'flex' }}><ChevronRight size={14} style={{ transform: isAr ? 'scaleX(-1)' : undefined }} /></li>
              <li aria-current="page" style={{ color: GOLD, fontWeight: 700 }}>{isAr ? 'خدمة تاكسي الرياض' : 'Riyadh Taxi Service'}</li>
            </ol>
          </nav>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(212,175,55,0.14)', border: '1px solid rgba(212,175,55,0.45)',
            color: GOLD, padding: '6px 20px', borderRadius: '50px',
            fontSize: '0.8rem', fontWeight: 700, marginBottom: '22px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {tx(citySlogan)}
          </div>

          <h1 style={{ fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.18, marginBottom: '20px', letterSpacing: '-0.01em' }}>
            {tx(heroContent.h1)}
          </h1>

          <div aria-hidden="true" style={{ width: '72px', height: '3px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: '0 auto 22px' }} />

          <p className="mk-hero-intro" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'rgba(255,255,255,0.86)', lineHeight: 1.85, maxWidth: '660px', margin: '0 auto 32px' }} data-speakable>
            {tx(heroContent.intro)}
          </p>

          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 30px' }}>
              <MessageCircle size={18} strokeWidth={2.5} aria-hidden="true" /> {tx(heroContent.primaryCta)}
            </a>
            <a href="#riyadh-routes" className="btn-outline mk-btn mk-focus" style={{ padding: '14px 30px', borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              {tx(heroContent.secondaryCta)}
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Trust strip ── */}
      <section aria-label={isAr ? 'نقاط الثقة' : 'Trust strip'} style={{ background: SLATE, padding: '28px 0', borderTop: '1px solid rgba(212,175,55,0.25)', borderBottom: '1px solid rgba(212,175,55,0.25)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {trustItems.map(item => {
              const TIcon = ICON_MAP[item.iconName]
              return (
                <div key={item.label.en} style={{
                  display: 'flex', alignItems: 'center', gap: '9px', justifyContent: 'center',
                  padding: '12px 10px', borderRadius: '12px', background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.18)',
                }}>
                  {TIcon ? <TIcon size={16} strokeWidth={2.2} color={GOLD} aria-hidden="true" style={{ flexShrink: 0 }} /> : <Check size={16} strokeWidth={3} color={GOLD} aria-hidden="true" style={{ flexShrink: 0 }} />}
                  <span style={{ color: 'white', fontWeight: 700, fontSize: '0.84rem' }}>{tx(item.label)}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Riyadh private taxi services ── */}
      <section aria-labelledby="ryd-services-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head
            id="ryd-services-title" tag={isAr ? 'خدماتنا' : 'Our Services'}
            title={isAr ? 'خدمات التاكسي الخاص في الرياض' : 'Riyadh Private Taxi Services'}
            subtitle={tx(servicesIntro)}
          />
          <div className="mk-grid-lg">
            {serviceList.map((s, i) => {
              const SIcon = ICON_MAP[s.iconName]
              return (
                <motion.div key={s.title.en} {...reveal(i)} style={{
                  display: 'flex', flexDirection: 'column', gap: '10px', height: '100%',
                  background: 'var(--card, #fff)', border: '1.5px solid var(--border)', borderRadius: '14px', padding: '22px 20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ background: 'rgba(27,39,53,0.06)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                      {SIcon && <SIcon size={22} strokeWidth={1.8} color={SLATE} aria-hidden="true" />}
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1.35, margin: 0, color: 'var(--foreground)' }}>{tx(s.title)}</h3>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0 }}>{tx(s.desc)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Vehicles ── */}
      <FleetSection pricing={[]} cityName={cityName} showFromPrice={false} bestFor={vehicleBestFor} />
      <div className="container" style={{ textAlign: 'center', padding: '0 24px 70px', display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/toyota-camry-taxi" className="mk-focus" style={{ color: SLATE, fontWeight: 800, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          {isAr ? 'تفاصيل السيدان' : 'Sedan details'} <Arrow size={13} />
        </Link>
        <Link href="/hyundai-staria-taxi" className="mk-focus" style={{ color: SLATE, fontWeight: 800, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          {isAr ? 'تفاصيل هيونداي ستاريا' : 'Hyundai Staria details'} <Arrow size={13} />
        </Link>
        <Link href="/gmc-yukon-hire" className="mk-focus" style={{ color: SLATE, fontWeight: 800, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          {isAr ? 'تفاصيل GMC يوكون' : 'GMC Yukon details'} <Arrow size={13} />
        </Link>
      </div>

      {/* ── 4b. Riyadh sightseeing & attractions ── */}
      <section aria-labelledby="ryd-sights-title" style={{ padding: '80px 0', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <Head
            id="ryd-sights-title" tag={isAr ? 'استكشف الرياض' : 'Sightseeing'}
            title={isAr ? 'معالم ووجهات في الرياض' : 'Riyadh Sightseeing & Attractions'}
            subtitle={tx(sightseeingIntro)}
          />
          <div className="mk-grid">
            {sightseeingSpots.map((s, i) => {
              const SIcon = ICON_MAP[s.iconName]
              return (
                <motion.div key={s.name.en} {...reveal(i)} style={{
                  background: 'var(--card, #fff)', border: '1.5px solid var(--border)', borderRadius: '14px',
                  padding: '24px 20px', textAlign: 'center',
                }}>
                  <div style={{
                    background: 'rgba(27,39,53,0.06)', borderRadius: '50%',
                    width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
                  }}>
                    {SIcon && <SIcon size={22} strokeWidth={1.8} color={SLATE} aria-hidden="true" />}
                  </div>
                  <h3 style={{ fontWeight: 800, marginBottom: '8px', fontSize: '0.95rem', lineHeight: 1.35, color: 'var(--foreground)' }}>{tx(s.name)}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0 }}>{tx(s.desc)}</p>
                </motion.div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={waUrl(isAr ? 'السلام عليكم، أرغب في الاستفسار عن زيارة معالم الرياض' : "Hello, I'd like to ask about visiting Riyadh's sights")}
              target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus"
            >
              <MessageCircle size={16} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'استفسر عبر واتساب' : 'Ask About Sightseeing on WhatsApp'}
            </a>
            <Link href="/saudi-arabia-tourist-destinations" className="mk-focus" style={{
              color: SLATE, fontWeight: 800, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}>
              {isAr ? 'الدليل الكامل لوجهات المملكة' : 'Full Saudi Arabia Destinations Guide'} <Arrow size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Riyadh intercity taxi routes ── */}
      <section id="riyadh-routes" aria-labelledby="ryd-routes-title" style={{ padding: '80px 0', background: `linear-gradient(135deg, ${SLATE2} 0%, ${SLATE} 100%)`, scrollMarginTop: '90px' }}>
        <div className="container">
          <Head dark id="ryd-routes-title" tag={isAr ? 'بين المدن' : 'Intercity'} title={isAr ? 'خطوط التاكسي بين الرياض والمدن' : 'Riyadh Intercity Taxi Routes'} />
          <div className="mk-grid-lg">
            {linkedRoutes.map((r, i) => (
              <motion.div key={r.slug} {...reveal(i)}>
                <Link href={`/${r.slug}`} className="mk-card mk-card-dark" style={{
                  display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px', height: '100%',
                  background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '16px',
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.4 }}>{tx(r.label)}</h3>
                  <div style={{ color: GOLD, fontWeight: 900, fontSize: '1.05rem' }}>{tx(r.duration)}</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, margin: 0, flex: 1 }}>{tx(r.desc)}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.65)', fontWeight: 700, fontSize: '0.76rem' }}>
                    {isAr ? 'نقل خاص' : 'Private transfer'}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'white', fontWeight: 800, fontSize: '0.84rem', borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '12px', marginTop: 'auto' }}>
                    {isAr ? 'عرض المسار' : 'View Route'} <Arrow size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '26px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            {isAr
              ? 'أوقات الرحلات تقريبية وقد تختلف حسب حركة المرور وموقع الاستلام وحالة الطريق.'
              : 'Travel times are approximate and may vary depending on traffic, pickup location and road conditions.'}
          </p>
        </div>
      </section>

      {/* ── 6. Riyadh to major cities ── */}
      <section aria-labelledby="ryd-major-title" style={{ padding: '70px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <Head id="ryd-major-title" tag={isAr ? 'الوجهات الرئيسية' : 'Major Destinations'} title={isAr ? 'الرياض ومدن المملكة الرئيسية' : 'Riyadh to Major Cities'} />
          <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.85 }}>{tx(majorCitiesNote)}</p>
        </div>
      </section>

      {/* ── 6b. International transfers ── */}
      <section aria-labelledby="ryd-intl-title" style={{ padding: '70px 0', background: `linear-gradient(135deg, ${SLATE2} 0%, ${SLATE} 100%)` }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Head
            dark id="ryd-intl-title" tag={isAr ? 'رحلات دولية' : 'International Transfers'}
            title={isAr ? 'رحلات خاصة من الرياض إلى خارج المملكة' : 'International Private Transfers from Riyadh'}
            subtitle={isAr
              ? 'رحلات طويلة مخصصة تُحجز مسبقاً عبر الحدود البرية — تواصل معنا عبر واتساب للتأكد من الإمكانية والمستندات المطلوبة.'
              : 'Custom, advance-booked long-distance trips across the land border — contact us on WhatsApp to confirm feasibility and documentation.'}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {([
              { href: '/riyadh-to-doha', en: 'Riyadh → Doha, Qatar', ar: 'الرياض ← الدوحة، قطر', dist: { en: '~1,100 km', ar: 'نحو ١,١٠٠ كم' } },
              { href: '/riyadh-to-dubai', en: 'Riyadh → Dubai, UAE', ar: 'الرياض ← دبي، الإمارات', dist: { en: '~1,230 km', ar: 'نحو ١,٢٣٠ كم' } },
              { href: '/riyadh-to-abu-dhabi', en: 'Riyadh → Abu Dhabi, UAE', ar: 'الرياض ← أبوظبي، الإمارات', dist: { en: '~1,050 km', ar: 'نحو ١,٠٥٠ كم' } },
              { href: '/riyadh-to-bahrain', en: 'Riyadh → Manama, Bahrain', ar: 'الرياض ← المنامة، البحرين', dist: { en: '~480 km', ar: 'نحو ٤٨٠ كم' } },
              { href: '/riyadh-to-kuwait', en: 'Riyadh → Kuwait City', ar: 'الرياض ← مدينة الكويت', dist: { en: '~550 km', ar: 'نحو ٥٥٠ كم' } },
              { href: '/riyadh-to-muscat', en: 'Riyadh → Muscat, Oman', ar: 'الرياض ← مسقط، عمان', dist: { en: '~1,900+ km via UAE', ar: 'نحو ١,٩٠٠+ كم عبر الإمارات' } },
            ]).map(d => (
              <Link key={d.href} href={d.href} className="mk-focus" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                padding: '18px 20px', borderRadius: '14px', textDecoration: 'none',
                background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.25)',
              }}>
                <div>
                  <div style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', marginBottom: '2px' }}>{isAr ? d.ar : d.en}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>{isAr ? d.dist.ar : d.dist.en}</div>
                </div>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Why book with Saudi Cabs GMC ── */}
      <section aria-labelledby="ryd-why-title" style={{ padding: '84px 0', background: SLATE }}>
        <div className="container">
          <Head dark id="ryd-why-title" tag={isAr ? 'لماذا تحجز معنا' : 'Why Book With Us'} title={isAr ? `لماذا تحجز مع Saudi Cabs GMC في ${city}` : `Why Book With Saudi Cabs GMC in ${city}`} />
          <div className="mk-grid">
            {highlights.map((h, i) => {
              const HIcon = ICON_MAP[h.iconName]
              return (
                <motion.div key={h.title.en} {...reveal(i)} style={{
                  background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '16px', padding: '26px 22px', textAlign: 'center',
                }}>
                  <div style={{
                    background: 'rgba(212,175,55,0.14)', borderRadius: '50%',
                    width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
                  }}>
                    {HIcon && <HIcon size={24} strokeWidth={1.8} color={GOLD} aria-hidden="true" />}
                  </div>
                  <h3 style={{ fontWeight: 800, marginBottom: '8px', fontSize: '0.98rem', lineHeight: 1.35, color: 'white' }}>{tx(h.title)}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, margin: 0 }}>{tx(h.desc)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 8. How booking works ── */}
      <section aria-labelledby="ryd-booking-title" style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head id="ryd-booking-title" tag={isAr ? 'الحجز' : 'Booking'} title={isAr ? 'كيف يتم الحجز' : 'How Booking Works'} />
          <div className="mk-grid-lg">
            {bookingSteps.map((s, i) => (
              <motion.div key={s.n} {...reveal(i)} style={{
                background: 'var(--muted)', border: '1px solid var(--border)', borderRadius: '14px', padding: '22px 20px', textAlign: 'center',
              }}>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(27,39,53,0.08)', color: SLATE, fontWeight: 900, fontSize: '0.95rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
                }}>
                  {s.n}
                </div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, marginBottom: '6px' }}>{tx(s.title)}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted-foreground)', lineHeight: 1.65, margin: 0 }}>{tx(s.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <FAQSection faqs={faqs} heading={{ ar: `أسئلة شائعة حول النقل في ${city}`, en: `Frequently Asked Questions — ${city}` }} />

      {/* ── 10. Closing CTA ── */}
      <section aria-labelledby="ryd-final-title" style={{ padding: '64px 0', background: `linear-gradient(135deg, ${SLATE2} 0%, ${SLATE} 100%)`, textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 id="ryd-final-title" style={{ color: 'white', fontSize: 'clamp(1.35rem, 3vw, 1.8rem)', fontWeight: 900, marginBottom: '10px' }}>
            {isAr ? 'تخطط لرحلة من الرياض؟' : 'Planning a Trip from Riyadh?'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '24px' }}>
            {isAr
              ? 'أرسل موقع الاستلام والوجهة والتاريخ وعدد الركاب عبر واتساب. سنؤكد لك السيارة المتاحة والسعر الحالي.'
              : "Send your pickup location, destination, date and passenger count on WhatsApp. We'll confirm the available vehicle and current fare."}
          </p>
          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 32px' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
            </a>
            <a href="mailto:info@saudicabsgmc.com" className="btn-outline mk-btn mk-focus" style={{ padding: '14px 28px', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              <Mail size={17} strokeWidth={2.5} aria-hidden="true" /> <span dir="ltr">info@saudicabsgmc.com</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
