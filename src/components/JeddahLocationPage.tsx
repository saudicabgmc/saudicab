'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import FAQSection from './FAQSection'
import PricingSection from './PricingSection'
import {
  MessageCircle, Mail, ArrowRight, ChevronRight, Check,
  Building2, Plane, Briefcase, Map, Users, Banknote, Car, Shield, Route, Mountain,
  UserRound, Waves, ShoppingBag, Building, Anchor,
} from 'lucide-react'
import FleetSection from './FleetSection'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'
import {
  type BText, type JeddahPageProps,
  heroContent, needCards, arrivalSteps, cityTransport, cornicheSection,
  vehicleComparison, vehicleBestFor, businessSection, areas, aeoQA,
} from '@/lib/jeddahPageData'

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Plane, Briefcase, Map, Users, Banknote, Car, Shield, Route, Mountain,
  UserRound, Waves, ShoppingBag, Building, Anchor, MessageCircle,
}

const WA_NUMBER = '923097811785'
const waUrl = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

/* Jeddah's own identity: navy + teal + sky, kept from the existing page — not reskinned. */
const NAVY = '#0a1f3d'
const TEAL = '#0891b2'
const SKY = '#7dd3fc'

function Arrow({ size = 15 }: { size?: number }) {
  const { isAr } = useLang()
  return <ArrowRight size={size} strokeWidth={2.4} aria-hidden="true" style={{ flexShrink: 0, transform: isAr ? 'scaleX(-1)' : undefined }} />
}

function Head({ id, tag, title, subtitle, dark }: { id: string; tag: string; title: React.ReactNode; subtitle?: string; dark?: boolean }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '44px' }}>
      <span
        className="section-tag"
        style={dark ? { background: 'rgba(125,211,252,0.15)', border: '1px solid rgba(125,211,252,0.4)', color: SKY } : { background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)', color: TEAL }}
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
      <div style={{ width: '40px', height: '3px', background: `linear-gradient(90deg, ${TEAL}, #D4AF37)`, margin: '14px auto', borderRadius: '2px' }} />
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

export default function JeddahLocationPage({
  cityName, citySlogan, citySlug, heroImage, services, linkedRoutes, legacyRoutes, highlights, faqs, pricing,
}: JeddahPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: BText) => b[lang]
  const city = tx(cityName)
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في جدة' : "Hello, I'd like to book a trip in Jeddah"
  const reveal = useReveal()

  const cityAccent = (dark: boolean) => <span style={{ color: dark ? SKY : TEAL }}>{city}</span>

  return (
    <main>
      <link rel="preload" as="image" href={heroImage} fetchPriority="high" />

      {/* ── 1. Hero ── */}
      <section
        className="mk-hero"
        style={{
          background: `linear-gradient(110deg, rgba(10,31,61,0.92) 0%, rgba(10,31,61,0.72) 55%, rgba(8,145,178,0.35) 100%), url("${heroImage}")`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', position: 'relative', borderBottom: `3px solid ${TEAL}`,
        }}
      >
        <div className="animate-fadeInUp" style={{ color: 'white', maxWidth: '780px', position: 'relative' }}>
          <nav aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'} className="mk-crumbs" style={{ marginBottom: '18px' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
              <li><Link href="/" className="mk-focus" style={{ color: 'inherit' }}>{isAr ? 'الرئيسية' : 'Home'}</Link></li>
              <li aria-hidden="true" style={{ display: 'flex' }}><ChevronRight size={14} style={{ transform: isAr ? 'scaleX(-1)' : undefined }} /></li>
              <li aria-current="page" style={{ color: SKY, fontWeight: 700 }}>{isAr ? 'خدمة تاكسي جدة' : 'Jeddah Taxi Service'}</li>
            </ol>
          </nav>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(125,211,252,0.12)', border: '1px solid rgba(125,211,252,0.45)',
            color: SKY, padding: '6px 20px', borderRadius: '50px',
            fontSize: '0.8rem', fontWeight: 700, marginBottom: '22px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {tx(citySlogan)}
          </div>

          <h1 style={{ fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.18, marginBottom: '20px', letterSpacing: '-0.01em' }}>
            {tx(heroContent.h1)}
          </h1>

          <div aria-hidden="true" style={{ width: '72px', height: '3px', background: `linear-gradient(90deg, transparent, ${SKY}, transparent)`, margin: '0 auto 22px' }} />

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
      <section aria-label={isAr ? 'نقاط الثقة' : 'Trust strip'} style={{ background: NAVY, padding: '28px 0', borderTop: `1px solid rgba(8,145,178,0.3)`, borderBottom: `1px solid rgba(8,145,178,0.3)` }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px' }}>
            {heroContent.trust.map(item => (
              <div key={item.en} style={{
                display: 'flex', alignItems: 'center', gap: '9px', justifyContent: 'center',
                padding: '12px 10px', borderRadius: '12px', background: 'rgba(125,211,252,0.08)', border: '1px solid rgba(125,211,252,0.18)',
              }}>
                <Check size={16} strokeWidth={3} color={SKY} aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ color: 'white', fontWeight: 700, fontSize: '0.86rem' }}>{tx(item)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. What do you need in Jeddah? ── */}
      <section aria-labelledby="jed-need-title" style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head id="jed-need-title" tag={isAr ? 'ابدأ هنا' : 'Start Here'} title={isAr ? 'ماذا تحتاج في جدة؟' : 'What Do You Need in Jeddah?'} />
          <div className="mk-grid">
            {needCards.map((n, i) => {
              const NIcon = ICON_MAP[n.iconName]
              const isExternal = n.href.startsWith('http')
              const content = (
                <>
                  <div style={{ background: 'rgba(8,145,178,0.1)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                    {NIcon && <NIcon size={20} strokeWidth={1.8} color={TEAL} aria-hidden="true" />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '4px' }}>{tx(n.title)}</div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.6, margin: '0 0 8px' }}>{tx(n.desc)}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: TEAL, fontWeight: 800, fontSize: '0.82rem' }}>
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

      {/* ── 4. King Abdulaziz Airport ── */}
      <section aria-labelledby="jed-airport-title" style={{ padding: '84px 0', background: NAVY }}>
        <div className="container">
          <Head
            dark id="jed-airport-title" tag={isAr ? 'المطار' : 'The Airport'}
            title={isAr ? 'توصيل مطار الملك عبدالعزيز الدولي' : 'King Abdulaziz International Airport Transfers'}
          />
          <div className="mk-grid-lg">
            {arrivalSteps.map((s, i) => (
              <motion.div key={s.n} {...reveal(i)} style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                background: 'rgba(125,211,252,0.06)', border: '1px solid rgba(125,211,252,0.2)', borderRadius: '14px', padding: '18px 20px',
              }}>
                <div style={{
                  width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(125,211,252,0.15)', color: SKY, fontWeight: 900, fontSize: '0.85rem',
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
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '26px' }}>
            <Link href="/airport-transfer" className="mk-focus" style={{ color: SKY, fontWeight: 800, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {isAr ? 'عرض خيارات توصيل مطار جدة' : 'See the Jeddah Airport Transfer options'} <Arrow size={14} />
            </Link>
            <Link href="/jeddah-airport-guide" className="mk-focus" style={{ color: SKY, fontWeight: 800, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {isAr ? 'اقرأ دليل الوصول لمطار جدة' : 'Read the Jeddah Airport arrival guide'} <Arrow size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Services ── */}
      <section aria-labelledby="jed-services-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head id="jed-services-title" tag={tr.servicesTag} title={isAr ? <>ما نقدمه في {cityAccent(false)}</> : <>What We Offer in {cityAccent(false)}</>} />
          <div className="mk-grid-lg">
            {services.map((s, i) => {
              const SIcon = ICON_MAP[s.iconName]
              const isExternal = s.href.startsWith('http')
              return (
                <motion.div key={s.title.en} {...reveal(i)}>
                  {isExternal ? (
                    <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="mk-card mk-card-light" style={{
                      display: 'flex', flexDirection: 'column', gap: '12px', height: '100%',
                      background: 'var(--card, #fff)', border: '1.5px solid var(--border)', borderRadius: '14px', padding: '22px 20px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ background: 'rgba(8,145,178,0.1)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                          {SIcon && <SIcon size={22} strokeWidth={1.8} color={TEAL} aria-hidden="true" />}
                        </div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1.35, margin: 0, color: 'var(--foreground)' }}>{tx(s.title)}</h3>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0, flex: 1 }} dangerouslySetInnerHTML={{ __html: tx(s.desc) }} />
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: TEAL, fontWeight: 800, fontSize: '0.85rem' }}>{tx(s.cta)} <Arrow /></span>
                    </a>
                  ) : (
                    <Link href={s.href} className="mk-card mk-card-light" style={{
                      display: 'flex', flexDirection: 'column', gap: '12px', height: '100%',
                      background: 'var(--card, #fff)', border: '1.5px solid var(--border)', borderRadius: '14px', padding: '22px 20px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ background: 'rgba(8,145,178,0.1)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                          {SIcon && <SIcon size={22} strokeWidth={1.8} color={TEAL} aria-hidden="true" />}
                        </div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1.35, margin: 0, color: 'var(--foreground)' }}>{tx(s.title)}</h3>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0, flex: 1 }} dangerouslySetInnerHTML={{ __html: tx(s.desc) }} />
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: TEAL, fontWeight: 800, fontSize: '0.85rem' }}>{tx(s.cta)} <Arrow /></span>
                    </Link>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Who private transport in Jeddah is useful for ── */}
      <section aria-labelledby="jed-city-title" style={{ padding: '80px 0', background: `linear-gradient(135deg, ${NAVY} 0%, #0c2d54 100%)` }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Head dark id="jed-city-title" tag={isAr ? 'التنقل داخل جدة' : 'Getting Around Jeddah'} title={isAr ? 'نقل خاص في جدة — لمن؟' : 'Private Transport in Jeddah — Who Is It For?'} subtitle={tx(cityTransport.intro)} />
          <div className="mk-grid">
            {cityTransport.audiences.map((a, i) => (
              <motion.div key={a.title.en} {...reveal(i)} style={{
                background: 'rgba(125,211,252,0.06)', border: '1px solid rgba(125,211,252,0.2)', borderRadius: '14px', padding: '20px 18px',
              }}>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: SKY, margin: '0 0 6px' }}>{tx(a.title)}</h3>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: 0 }}>{tx(a.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Corniche + city experience ── */}
      <section aria-labelledby="jed-corniche-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <Head id="jed-corniche-title" tag={isAr ? 'الكورنيش' : 'The Corniche'} title={isAr ? 'تخطط ليوم على كورنيش جدة؟' : 'Planning a Day on the Jeddah Corniche?'} />
          <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: '26px' }}>{tx(cornicheSection.text)}</p>
          <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ display: 'inline-flex' }}>
            <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'خطط لرحلتك على الكورنيش عبر واتساب' : 'Plan Your Corniche Trip on WhatsApp'}
          </a>
        </div>
      </section>

      {/* ── 8. Intercity transport ── */}
      <section aria-labelledby="jed-routes-title" style={{ padding: '80px 0', background: `linear-gradient(135deg, #0c2d54 0%, ${NAVY} 100%)` }}>
        <div className="container">
          <Head dark id="jed-routes-title" tag={tr.routesTag} title={isAr ? <>السفر بين المدن من {cityAccent(true)}</> : <>Intercity Travel From {cityAccent(true)}</>} />
          <div className="mk-grid-lg">
            {linkedRoutes.map((r, i) => (
              <motion.div key={r.slug} {...reveal(i)}>
                <Link href={`/${r.slug}`} className="mk-card mk-card-dark" style={{
                  display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px', height: '100%',
                  background: 'rgba(125,211,252,0.05)', border: '1px solid rgba(125,211,252,0.25)', borderRadius: '16px',
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.4 }}>{tx(r.label)}</h3>
                  <div style={{ color: SKY, fontWeight: 900, fontSize: '1.05rem' }}>{tx(r.duration)}</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, margin: 0, flex: 1 }}>{tx(r.desc)}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'white', fontWeight: 800, fontSize: '0.84rem', borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '12px', marginTop: 'auto' }}>
                    {isAr ? 'عرض المسار والسعر' : 'View route & price'} <Arrow size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '32px' }}>
            <p style={{ textAlign: 'center', fontSize: '0.78rem', fontWeight: 800, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              {isAr ? 'رحلات أخرى عند الطلب' : 'Other Trips on Request'}
            </p>
            <div className="mk-grid-lg">
              {legacyRoutes.map(r => {
                const content = (
                  <>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>{tx(r.label)}</div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>{isAr ? 'تقريباً ' : 'Approx. '}{tx(r.duration)}</div>
                    </div>
                    <Arrow size={14} />
                  </>
                )
                const style: React.CSSProperties = {
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', padding: '16px 20px',
                  background: 'rgba(125,211,252,0.03)', border: '1px solid rgba(125,211,252,0.18)', borderRadius: '14px', color: 'white',
                }
                return r.slug ? (
                  <Link key={r.label.en} href={`/${r.slug}`} className="mk-card mk-card-dark" style={style}>{content}</Link>
                ) : (
                  <a key={r.label.en} href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="mk-card mk-card-dark" style={style}>{content}</a>
                )
              })}
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '26px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            {isAr
              ? 'أوقات الرحلات تقريبية وقد تختلف حسب حركة المرور وموقع الاستلام وحالة الطريق.'
              : 'Travel times are approximate and can vary with traffic, pickup location and road conditions.'}
          </p>
        </div>
      </section>

      {/* ── 9. Fleet ── */}
      {pricing.length > 0 && <FleetSection pricing={pricing} cityName={cityName} showFromPrice={false} bestFor={vehicleBestFor} />}

      {/* ── 10. Pricing ── */}
      {pricing.length > 0 && (
        <PricingSection routes={pricing} heading={{ ar: 'أسعار التاكسي والتوصيل في جدة', en: 'Jeddah Taxi Prices & Transfer Rates' }} />
      )}

      {/* ── 11. Family & group travel ── */}
      <section aria-labelledby="jed-family-title" style={{ padding: '84px 0', background: NAVY }}>
        <div className="container">
          <Head dark id="jed-family-title" tag={isAr ? 'العائلات' : 'Families'} title={isAr ? 'تسافر مع العائلة أو المجموعة؟' : 'Travelling as a Family or Group?'} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {vehicleComparison.map((v, i) => (
              <motion.div key={v.key} {...reveal(i)} style={{
                background: 'rgba(125,211,252,0.07)', border: '1px solid rgba(125,211,252,0.25)', borderRadius: '16px', padding: '26px 22px',
              }}>
                <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 900, marginBottom: '6px' }}>{tx(v.name)}</h3>
                <div style={{ color: SKY, fontWeight: 800, fontSize: '0.82rem', marginBottom: '12px' }}>{tx(v.seats)}</div>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.86rem', lineHeight: 1.7, margin: 0 }}>{tx(v.bestFor)}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ display: 'inline-flex' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'احجز عبر واتساب' : 'Book on WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* ── 12. Business / chauffeur ── */}
      <section aria-labelledby="jed-business-title" style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <Head id="jed-business-title" tag={isAr ? 'رحلات الأعمال' : 'Business Travel'} title={isAr ? 'تسافر للعمل في جدة؟' : 'Travelling for Business in Jeddah?'} />
          <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: '26px' }}>{tx(businessSection.text)}</p>
          <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ display: 'inline-flex' }}>
            <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'خطط لرحلة عملك عبر واتساب' : 'Plan Your Business Trip on WhatsApp'}
          </a>
        </div>
      </section>

      {/* ── 13. Jeddah areas ── */}
      <section aria-labelledby="jed-areas-title" style={{ padding: '84px 0', background: '#f0f8ff' }}>
        <div className="container">
          <Head id="jed-areas-title" tag={isAr ? 'المناطق' : 'Areas'} title={isAr ? <>مناطق نغطيها في {cityAccent(false)}</> : <>Areas We Cover in {cityAccent(false)}</>} />
          <div className="mk-grid-lg">
            {areas.map((a, i) => {
              const AIcon = ICON_MAP[a.iconName]
              return (
                <motion.div key={a.name.en} {...reveal(i)} style={{
                  background: 'white', border: '1px solid rgba(8,145,178,0.18)', borderRadius: '14px', padding: '22px 20px',
                  boxShadow: '0 4px 20px rgba(10,31,61,0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ background: 'rgba(8,145,178,0.1)', borderRadius: '10px', padding: '9px', flexShrink: 0, display: 'flex' }}>
                      {AIcon && <AIcon size={20} strokeWidth={1.8} color={TEAL} aria-hidden="true" />}
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: NAVY, margin: 0 }}>{tx(a.name)}</h3>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: '0 0 10px' }}>{tx(a.desc)}</p>
                  <p style={{ fontSize: '0.8rem', color: TEAL, fontWeight: 700, margin: 0 }}>{tx(a.relevance)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 14. Why choose us ── */}
      <section aria-labelledby="jed-why-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head id="jed-why-title" tag={tr.whyTag} title={isAr ? <>لماذا تختار Saudi Cabs GMC في {cityAccent(false)}</> : <>Why Choose Saudi Cabs GMC in {cityAccent(false)}</>} />
          <div className="mk-grid">
            {highlights.map((h, i) => {
              const HIcon = ICON_MAP[h.iconName]
              return (
                <motion.div key={h.title.en} {...reveal(i)} style={{
                  background: 'var(--muted)', border: '1px solid var(--border)',
                  borderRadius: '16px', padding: '26px 22px', textAlign: 'center',
                }}>
                  <div style={{
                    background: 'rgba(8,145,178,0.1)', borderRadius: '50%',
                    width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
                  }}>
                    {HIcon && <HIcon size={24} strokeWidth={1.8} color={TEAL} aria-hidden="true" />}
                  </div>
                  <h3 style={{ fontWeight: 800, marginBottom: '8px', fontSize: '0.98rem', lineHeight: 1.35 }}>{tx(h.title)}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0 }}>{tx(h.desc)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 15. Jeddah transport questions (direct-answer AEO) ── */}
      <section aria-labelledby="jed-aeo-title" style={{ padding: '84px 0', background: NAVY }}>
        <div className="container">
          <Head dark id="jed-aeo-title" tag={isAr ? 'إجابات سريعة' : 'Quick Answers'} title={isAr ? 'أسئلة النقل في جدة' : 'Jeddah Transport Questions'} />
          <div className="mk-grid-lg">
            {aeoQA.map((item, i) => (
              <motion.div key={item.q.en} {...reveal(i)} style={{
                background: 'rgba(125,211,252,0.05)', border: '1px solid rgba(125,211,252,0.18)', borderRadius: '14px', padding: '20px 22px',
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
      <section aria-labelledby="jed-final-title" style={{ padding: '64px 0', background: `linear-gradient(135deg, #0c2d54 0%, ${NAVY} 100%)`, textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 id="jed-final-title" style={{ color: 'white', fontSize: 'clamp(1.35rem, 3vw, 1.8rem)', fontWeight: 900, marginBottom: '10px' }}>
            {isAr ? 'هل أنت جاهز للسفر من جدة؟' : 'Ready to Travel from Jeddah?'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '24px' }}>
            {isAr
              ? 'أرسل موقع الاستلام والوجهة والتاريخ والوقت وسيارتك المفضلة عبر واتساب، وسنؤكد لك السعر وتفاصيل الرحلة.'
              : 'Send your pickup, destination, date/time and vehicle preference on WhatsApp, and we will confirm the trip and fare.'}
          </p>
          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 32px' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'احجز رحلتك في جدة عبر واتساب' : 'Book Your Jeddah Trip on WhatsApp'}
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
