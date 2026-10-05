'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import FAQSection from './FAQSection'
import PricingSection from './PricingSection'
import {
  MessageCircle, Mail, ArrowRight, ChevronRight, Check,
  Building2, Plane, Briefcase, Map, Users, Banknote, Car, MapPin, Route,
  Send, CheckCircle2,
} from 'lucide-react'
import FleetSection from './FleetSection'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'
import {
  type BText, type MadinahPageProps,
  heroContent, needCards, arrivalSteps, arrivalNote, mosqueSection, ziyaratSection,
  vehicleComparison, pickupAreas, priceAnswer, bookingSteps, aeoQA,
} from '@/lib/madinahPageData'

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Plane, Briefcase, Map, Users, Banknote, Car, MapPin, Route, MessageCircle,
}

const WA_NUMBER = '923097811785'
const waUrl = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

/* Madinah's own identity: deep teal + soft mint/pearl, distinct from Makkah's dark-green/gold. */
const MINT = '#a8e6cf'
const DEEP = '#0d3328'
const DEEP2 = '#1a4a3a'

function Arrow({ size = 15 }: { size?: number }) {
  const { isAr } = useLang()
  return <ArrowRight size={size} strokeWidth={2.4} aria-hidden="true" style={{ flexShrink: 0, transform: isAr ? 'scaleX(-1)' : undefined }} />
}

function Head({ id, tag, title, subtitle, dark }: { id: string; tag: string; title: React.ReactNode; subtitle?: string; dark?: boolean }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '44px' }}>
      <span
        className="section-tag"
        style={dark ? { background: 'rgba(168,230,207,0.15)', border: '1px solid rgba(168,230,207,0.4)', color: MINT } : undefined}
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
      <div className="gold-divider" style={{ margin: '14px auto' }} />
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
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.45, delay: Math.min(i * 0.06, 0.3) },
      }
}

export default function MadinahLocationPage({
  cityName, citySlogan, citySlug, heroImage, services, linkedRoutes, highlights, faqs, pricing,
}: MadinahPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: BText) => b[lang]
  const city = tx(cityName)
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في المدينة المنورة' : "Hello, I'd like to book a trip in Madinah"
  const reveal = useReveal()

  const cityAccent = (dark: boolean) => <span style={{ color: dark ? MINT : 'var(--primary)' }}>{city}</span>

  return (
    <main>
      <link rel="preload" as="image" href={heroImage} fetchPriority="high" />

      {/* ── 1. Hero ── */}
      <section
        className="mk-hero"
        style={{
          background: `linear-gradient(135deg, rgba(13,51,40,0.90) 0%, rgba(26,74,58,0.70) 55%, rgba(13,51,40,0.92) 100%), url("${heroImage}")`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', position: 'relative',
        }}
      >
        <div className="animate-fadeInUp" style={{ color: 'white', maxWidth: '780px', position: 'relative' }}>
          <nav aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'} className="mk-crumbs" style={{ marginBottom: '18px' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
              <li><Link href="/" className="mk-focus" style={{ color: 'inherit' }}>{isAr ? 'الرئيسية' : 'Home'}</Link></li>
              <li aria-hidden="true" style={{ display: 'flex' }}><ChevronRight size={14} style={{ transform: isAr ? 'scaleX(-1)' : undefined }} /></li>
              <li aria-current="page" style={{ color: MINT, fontWeight: 700 }}>{isAr ? 'خدمة تاكسي المدينة المنورة' : 'Madinah Taxi Service'}</li>
            </ol>
          </nav>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(168,230,207,0.14)', border: '1px solid rgba(168,230,207,0.45)',
            color: MINT, padding: '6px 20px', borderRadius: '50px',
            fontSize: '0.8rem', fontWeight: 700, marginBottom: '22px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {tx(citySlogan)}
          </div>

          <h1 style={{ fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.18, marginBottom: '20px', letterSpacing: '-0.01em' }}>
            {tx(heroContent.h1)}
          </h1>

          <div aria-hidden="true" style={{ width: '72px', height: '3px', background: `linear-gradient(90deg, transparent, ${MINT}, transparent)`, margin: '0 auto 22px' }} />

          <p className="mk-hero-intro" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'rgba(255,255,255,0.86)', lineHeight: 1.85, maxWidth: '660px', margin: '0 auto 32px' }} data-speakable>
            {tx(heroContent.intro)}
          </p>

          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 30px' }}>
              <MessageCircle size={18} strokeWidth={2.5} aria-hidden="true" /> {tx(heroContent.primaryCta)}
            </a>
            <Link href={`/${citySlug}/routes`} className="btn-outline mk-btn mk-focus" style={{ padding: '14px 30px' }}>
              {tx(heroContent.secondaryCta)}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Trust strip ── */}
      <section aria-label={isAr ? 'نقاط الثقة' : 'Trust strip'} style={{ background: DEEP, padding: '28px 0', borderTop: '1px solid rgba(168,230,207,0.25)', borderBottom: '1px solid rgba(168,230,207,0.25)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
            {heroContent.trust.map(item => (
              <div key={item.en} style={{
                display: 'flex', alignItems: 'center', gap: '9px', justifyContent: 'center',
                padding: '12px 10px', borderRadius: '12px', background: 'rgba(168,230,207,0.08)', border: '1px solid rgba(168,230,207,0.18)',
              }}>
                <Check size={16} strokeWidth={3} color={MINT} aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ color: 'white', fontWeight: 700, fontSize: '0.86rem' }}>{tx(item)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Which Madinah transport service do you need? ── */}
      <section aria-labelledby="md-need-title" style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head
            id="md-need-title" tag={isAr ? 'ابدأ هنا' : 'Start Here'}
            title={isAr ? 'أي خدمة نقل تحتاجها في المدينة المنورة؟' : 'Which Madinah Transport Service Do You Need?'}
          />
          <div className="mk-grid">
            {needCards.map((n, i) => {
              const NIcon = ICON_MAP[n.iconName]
              const isExternal = n.href.startsWith('http')
              const content = (
                <>
                  <div style={{ background: 'var(--primary-light)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                    {NIcon && <NIcon size={20} strokeWidth={1.8} color="var(--primary)" aria-hidden="true" />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '4px' }}>{tx(n.title)}</div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.6, margin: '0 0 8px' }}>{tx(n.desc)}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--primary)', fontWeight: 800, fontSize: '0.82rem' }}>
                      {tx(n.cta)} <Arrow size={13} />
                    </span>
                  </div>
                </>
              )
              const cardStyle: React.CSSProperties = {
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                background: 'var(--card, #fff)', border: '1.5px solid var(--border)', borderRadius: '14px', padding: '18px 20px', height: '100%',
              }
              return (
                <motion.div key={n.title.en} {...reveal(i)}>
                  {isExternal ? (
                    <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="mk-card mk-focus" style={cardStyle}>{content}</a>
                  ) : (
                    <Link href={n.href} className="mk-card mk-focus" style={cardStyle}>{content}</Link>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Arriving at Madinah Airport? ── */}
      <section aria-labelledby="md-arrival-title" style={{ padding: '84px 0', background: DEEP }}>
        <div className="container">
          <Head
            dark id="md-arrival-title" tag={isAr ? 'عند الوصول' : 'On Arrival'}
            title={isAr ? 'تصل إلى مطار المدينة المنورة؟ كيف يعمل توصيلك' : "Arriving at Madinah Airport? Here's How Your Transfer Works"}
          />
          <div className="mk-grid-lg">
            {arrivalSteps.map((s, i) => (
              <motion.div key={s.n} {...reveal(i)} style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                background: 'rgba(168,230,207,0.06)', border: '1px solid rgba(168,230,207,0.2)', borderRadius: '14px', padding: '18px 20px',
              }}>
                <div style={{
                  width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(168,230,207,0.15)', color: MINT, fontWeight: 900, fontSize: '0.85rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {s.n}
                </div>
                <div>
                  <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'white', margin: '0 0 4px' }}>{tx(s.title)}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>{tx(s.desc)}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '26px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '640px', margin: '26px auto 0' }}>
            {tx(arrivalNote)}
          </p>
          <div style={{ textAlign: 'center', marginTop: '22px' }}>
            <Link href="/madinah-airport-taxi" className="mk-focus" style={{ color: MINT, fontWeight: 800, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {isAr ? 'تفاصيل خط مطار المدينة المنورة' : 'Madinah Airport Taxi details'} <Arrow size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Services ── */}
      <section aria-labelledby="md-services-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head
            id="md-services-title" tag={tr.servicesTag}
            title={isAr ? <>ما نقدمه في {cityAccent(false)}</> : <>What We Offer in {cityAccent(false)}</>}
          />
          <div className="mk-grid-lg">
            {services.map((s, i) => {
              const SIcon = ICON_MAP[s.iconName]
              return (
                <motion.div key={s.title.en} {...reveal(i)}>
                  <Link href={s.href} className="mk-card mk-card-light" style={{
                    display: 'flex', flexDirection: 'column', gap: '12px', height: '100%',
                    background: 'var(--card, #fff)', border: '1.5px solid var(--border)', borderRadius: '14px', padding: '22px 20px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ background: 'var(--primary-light)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                        {SIcon && <SIcon size={22} strokeWidth={1.8} color="var(--primary)" aria-hidden="true" />}
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1.35, margin: 0, color: 'var(--foreground)' }}>{tx(s.title)}</h3>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0, flex: 1 }} dangerouslySetInnerHTML={{ __html: tx(s.desc) }} />
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem' }}>
                      {tx(s.cta)} <Arrow />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Staying near the Prophet's Mosque? ── */}
      <section aria-labelledby="md-mosque-title" style={{ padding: '80px 0', background: DEEP2 }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Head dark id="md-mosque-title" tag={isAr ? 'المسجد النبوي' : "Prophet's Mosque"} title={isAr ? 'تقيم قرب المسجد النبوي الشريف؟' : 'Staying Near the Prophet\'s Mosque?'} subtitle={tx(mosqueSection.intro)} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '22px' }}>
            {mosqueSection.points.map(p => (
              <div key={p.en} style={{
                display: 'flex', alignItems: 'center', gap: '9px', justifyContent: 'center',
                padding: '12px 10px', borderRadius: '12px', background: 'rgba(168,230,207,0.08)', border: '1px solid rgba(168,230,207,0.2)',
              }}>
                <Check size={15} strokeWidth={3} color={MINT} aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ color: 'white', fontWeight: 700, fontSize: '0.84rem' }}>{tx(p)}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.84rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>
            {tx(mosqueSection.caveat)}
          </p>
        </div>
      </section>

      {/* ── 7. Madinah Ziyarat by private vehicle ── */}
      <section aria-labelledby="md-ziyarat-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <Head
            id="md-ziyarat-title" tag={isAr ? 'الزيارات' : 'Ziyarat'}
            title={isAr ? 'زيارات المدينة المنورة بسيارة خاصة' : 'Madinah Ziyarat by Private Vehicle'}
            subtitle={tx(ziyaratSection.value)}
          />
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '22px' }}>
            {ziyaratSection.sites.map(site => (
              <span key={site.en} style={{
                background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 800, fontSize: '0.86rem',
                padding: '8px 18px', borderRadius: '50px', border: '1px solid var(--border)',
              }}>
                {tx(site)}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '26px' }}>
            {tx(ziyaratSection.caveat)}
          </p>
          <Link href="/madinah-ziyarat-tour" className="mk-btn mk-focus" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--primary)', color: 'white', padding: '12px 28px', borderRadius: '10px', fontWeight: 800, fontSize: '0.9rem',
          }}>
            {isAr ? 'عرض زيارات المدينة المنورة' : 'View Madinah Ziyarat'} <Arrow />
          </Link>
        </div>
      </section>

      {/* ── 8. Popular trips from Madinah ── */}
      <section aria-labelledby="md-routes-title" style={{ padding: '80px 0', background: `linear-gradient(135deg, ${DEEP2} 0%, ${DEEP} 100%)` }}>
        <div className="container">
          <Head
            dark id="md-routes-title" tag={tr.routesTag}
            title={isAr ? <>أبرز الرحلات من {cityAccent(true)}</> : <>Popular Trips From {cityAccent(true)}</>}
          />
          <div className="mk-grid-lg">
            {linkedRoutes.map((r, i) => {
              const content = (
                <>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.4 }}>{tx(r.label)}</h3>
                  <div style={{ color: MINT, fontWeight: 900, fontSize: '1.05rem' }}>{tx(r.duration)}</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, margin: 0, flex: 1 }}>{tx(r.desc)}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'white', fontWeight: 800, fontSize: '0.84rem', borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '12px', marginTop: 'auto' }}>
                    {r.slug ? (isAr ? 'عرض المسار والسعر' : 'View route & price') : (isAr ? 'اسأل عن السعر عبر واتساب' : 'Check price on WhatsApp')} <Arrow size={14} />
                  </span>
                </>
              )
              const cardStyle: React.CSSProperties = {
                display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px',
                background: 'rgba(168,230,207,0.05)', border: '1px solid rgba(168,230,207,0.25)', borderRadius: '16px', height: '100%',
              }
              return (
                <motion.div key={r.label.en} {...reveal(i)}>
                  {r.slug ? (
                    <Link href={`/${r.slug}`} className="mk-card mk-card-dark" style={cardStyle}>{content}</Link>
                  ) : (
                    <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="mk-card mk-card-dark" style={cardStyle}>{content}</a>
                  )}
                </motion.div>
              )
            })}
          </div>
          <p style={{ textAlign: 'center', marginTop: '26px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            {isAr
              ? 'أوقات الرحلات تقريبية وقد تختلف حسب حركة المرور وموقع الاستلام والأنظمة المحلية.'
              : 'Travel times are approximate and may vary with traffic, pickup location and local access conditions.'}
          </p>
        </div>
      </section>

      {/* ── 9. Pickup across Madinah ── */}
      <section aria-labelledby="md-pickup-title" style={{ padding: '70px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <Head id="md-pickup-title" tag={isAr ? 'الاستلام' : 'Pickup'} title={isAr ? 'الاستلام في جميع أنحاء المدينة المنورة' : 'Pickup Across Madinah'} />
          <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '12px' }}>{tx(pickupAreas.intro)}</p>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.8, fontWeight: 600 }}>{tx(pickupAreas.note)}</p>
        </div>
      </section>

      {/* ── 10. Travelling to Madinah with family? ── */}
      <section aria-labelledby="md-family-title" style={{ padding: '84px 0', background: DEEP }}>
        <div className="container">
          <Head dark id="md-family-title" tag={isAr ? 'العائلات' : 'Families'} title={isAr ? 'تسافر إلى المدينة المنورة مع العائلة؟' : 'Travelling to Madinah With Family?'} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {vehicleComparison.map((v, i) => (
              <motion.div key={v.key} {...reveal(i)} style={{
                background: 'rgba(168,230,207,0.07)', border: '1px solid rgba(168,230,207,0.25)', borderRadius: '16px', padding: '26px 22px',
              }}>
                <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 900, marginBottom: '6px' }}>{tx(v.name)}</h3>
                <div style={{ color: MINT, fontWeight: 800, fontSize: '0.82rem', marginBottom: '12px' }}>{tx(v.seats)}</div>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.86rem', lineHeight: 1.7, margin: 0 }}>{tx(v.bestFor)}</p>
              </motion.div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link href="/hyundai-staria-taxi" className="mk-focus" style={{ color: MINT, fontWeight: 800, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {isAr ? 'عرض سيارات الأسطول' : 'View fleet vehicles'} <Arrow size={14} />
            </Link>
          </p>
        </div>
      </section>

      {/* ── 11. Fleet ── */}
      {pricing.length > 0 && <FleetSection pricing={pricing} cityName={cityName} showFromPrice={false} />}

      {/* ── 12. Pricing ── */}
      {pricing.length > 0 && (
        <>
          <PricingSection routes={pricing} heading={{ ar: 'أسعار التاكسي والنقل في المدينة المنورة', en: 'Madinah Taxi Prices & Transfer Rates' }} />
          <div className="container" style={{ maxWidth: '700px', textAlign: 'center', padding: '0 24px 70px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '10px' }}>
              {isAr ? 'كم تكلفة التاكسي في المدينة المنورة؟' : 'How much does a taxi cost in Madinah?'}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.8, margin: 0 }}>{tx(priceAnswer)}</p>
          </div>
        </>
      )}

      {/* ── 13. How booking works ── */}
      <section aria-labelledby="md-booking-title" style={{ padding: '80px 0', background: DEEP2 }}>
        <div className="container">
          <Head dark id="md-booking-title" tag={isAr ? 'الحجز' : 'Booking'} title={isAr ? 'كيف يتم الحجز' : 'How Booking Works'} />
          <div className="mk-grid-lg" style={{ marginBottom: '32px' }}>
            {bookingSteps.map((s, i) => {
              const StepIcon = [Send, Car, Banknote, CheckCircle2][i]
              return (
                <motion.div key={s.n} {...reveal(i)} style={{
                  background: 'rgba(168,230,207,0.06)', border: '1px solid rgba(168,230,207,0.2)', borderRadius: '14px', padding: '22px 20px', textAlign: 'center',
                }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(168,230,207,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
                  }}>
                    <StepIcon size={19} color={MINT} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'white', marginBottom: '6px' }}>{tx(s.title)}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>{tx(s.desc)}</p>
                </motion.div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 32px', display: 'inline-flex' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'احجز عبر واتساب' : 'Book on WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* ── 14. Why choose us ── */}
      <section aria-labelledby="md-why-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head id="md-why-title" tag={tr.whyTag} title={isAr ? <>لماذا تختار Saudi Cabs GMC في {cityAccent(false)}</> : <>Why Choose Saudi Cabs GMC in {cityAccent(false)}</>} />
          <div className="mk-grid">
            {highlights.map((h, i) => {
              const HIcon = ICON_MAP[h.iconName]
              return (
                <motion.div key={h.title.en} {...reveal(i)} style={{
                  background: 'var(--muted)', border: '1px solid var(--border)',
                  borderRadius: '16px', padding: '26px 22px', textAlign: 'center',
                }}>
                  <div style={{
                    background: 'var(--primary-light)', borderRadius: '50%',
                    width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
                  }}>
                    {HIcon && <HIcon size={24} strokeWidth={1.8} color="var(--primary)" aria-hidden="true" />}
                  </div>
                  <h3 style={{ fontWeight: 800, marginBottom: '8px', fontSize: '0.98rem', lineHeight: 1.35 }}>{tx(h.title)}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0 }}>{tx(h.desc)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 15. Madinah transport questions (direct-answer AEO) ── */}
      <section aria-labelledby="md-aeo-title" style={{ padding: '84px 0', background: DEEP }}>
        <div className="container">
          <Head
            dark id="md-aeo-title" tag={isAr ? 'إجابات سريعة' : 'Quick Answers'}
            title={isAr ? 'أسئلة النقل في المدينة المنورة' : 'Madinah Transport Questions'}
          />
          <div className="mk-grid-lg">
            {aeoQA.map((item, i) => (
              <motion.div key={item.q.en} {...reveal(i)} style={{
                background: 'rgba(168,230,207,0.05)', border: '1px solid rgba(168,230,207,0.18)', borderRadius: '14px', padding: '20px 22px',
              }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'white', margin: '0 0 8px', lineHeight: 1.45 }}>{tx(item.q)}</h3>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>{tx(item.a)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 16. FAQ ── */}
      <FAQSection faqs={faqs} heading={{ ar: `أسئلة شائعة حول النقل في ${city}`, en: `Frequently Asked Questions — ${city}` }} />

      {/* ── 17. Closing CTA ── */}
      <section aria-labelledby="md-final-title" style={{ padding: '64px 0', background: `linear-gradient(135deg, ${DEEP2} 0%, ${DEEP} 100%)`, textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 id="md-final-title" style={{ color: 'white', fontSize: 'clamp(1.35rem, 3vw, 1.8rem)', fontWeight: 900, marginBottom: '10px' }}>
            {isAr ? 'هل أنت جاهز لحجز رحلتك في المدينة المنورة؟' : 'Ready to Book Your Madinah Trip?'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '24px' }}>
            {isAr
              ? 'أرسل تفاصيل رحلتك عبر واتساب وسنرد عليك بالسعر الثابت وتفاصيل الاستلام. للاستفسارات يمكنك أيضاً مراسلتنا بالبريد الإلكتروني.'
              : 'Send your trip details on WhatsApp and we will reply with your fixed price and pickup details. You can also email us with any questions.'}
          </p>
          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 32px' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'احجز عبر واتساب' : 'Book on WhatsApp'}
            </a>
            <a href="mailto:info@saudicabsgmc.com" className="btn-outline mk-btn mk-focus" style={{ padding: '14px 28px' }}>
              <Mail size={17} strokeWidth={2.5} aria-hidden="true" /> <span dir="ltr">info@saudicabsgmc.com</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
