'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import FAQSection from './FAQSection'
import FleetSection from './FleetSection'
import {
  MessageCircle, Mail, ArrowRight, ChevronRight, Check,
  Building2, Plane, Mountain, TreePine, Leaf, Car, Clock, Route, Map, MapPin, Banknote,
} from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'
import {
  type BText, type TaifPageProps,
  heroContent, natureStrip, needCards, airportSteps, mountainOverview, alHada, alShafa,
  roseFarms, fullDay, linkedRoutes, legacyRoute, areas, vehicleBestFor, highlights, aeoQA,
} from '@/lib/taifPageData'

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Plane, Mountain, TreePine, Leaf, Car, Clock, Route, Map, MapPin, Banknote, MessageCircle,
}

const WA_NUMBER = '923097811785'
const waUrl = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

/* Taif's own identity: rose gold + deep green, kept from the existing page — not reskinned. */
const GOLD = '#e9c46a'
const GREEN = '#2d6a4f'
const DARK = '#1b4332'

function Arrow({ size = 15 }: { size?: number }) {
  const { isAr } = useLang()
  return <ArrowRight size={size} strokeWidth={2.4} aria-hidden="true" style={{ flexShrink: 0, transform: isAr ? 'scaleX(-1)' : undefined }} />
}

function Head({ id, tag, title, subtitle, dark }: { id: string; tag: string; title: React.ReactNode; subtitle?: string; dark?: boolean }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '44px' }}>
      <span
        className="section-tag"
        style={dark ? { background: 'rgba(233,196,106,0.15)', border: '1px solid rgba(233,196,106,0.4)', color: GOLD } : { background: 'rgba(45,106,79,0.1)', border: '1px solid rgba(45,106,79,0.3)', color: GREEN }}
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
      <div style={{ width: '44px', height: '3px', background: `linear-gradient(90deg, ${GREEN}, ${GOLD})`, margin: '14px auto', borderRadius: '2px' }} />
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

export default function TaifLocationPage({ cityName, citySlogan, citySlug, heroImage, faqs }: TaifPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: BText) => b[lang]
  const city = tx(cityName)
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في الطائف' : "Hello, I'd like to book a trip in Taif"
  const reveal = useReveal()

  const cityAccent = (dark: boolean) => <span style={{ color: dark ? GOLD : GREEN }}>{city}</span>

  return (
    <main>
      <link rel="preload" as="image" href={heroImage} fetchPriority="high" />

      {/* ── 1. Hero ── */}
      <section className="mk-hero" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-30px', backgroundImage: `url("${heroImage}")`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(28px)', transform: 'scale(1.15)' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, rgba(27,67,50,0.78) 0%, rgba(20,45,38,0.68) 55%, rgba(45,20,55,0.55) 100%)' }} />

        <div className="animate-fadeInUp" style={{ color: 'white', maxWidth: '780px', position: 'relative', zIndex: 1 }}>
          <nav aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'} className="mk-crumbs" style={{ marginBottom: '18px' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
              <li><Link href="/" className="mk-focus" style={{ color: 'inherit' }}>{isAr ? 'الرئيسية' : 'Home'}</Link></li>
              <li aria-hidden="true" style={{ display: 'flex' }}><ChevronRight size={14} style={{ transform: isAr ? 'scaleX(-1)' : undefined }} /></li>
              <li aria-current="page" style={{ color: GOLD, fontWeight: 700 }}>{isAr ? 'خدمة تاكسي الطائف' : 'Taif Taxi Service'}</li>
            </ol>
          </nav>

          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginBottom: '16px' }}>
            {['🌹', '⛰️', '🌿'].map(e => <span key={e} style={{ fontSize: '1.2rem' }}>{e}</span>)}
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(233,196,106,0.14)', border: '1px solid rgba(233,196,106,0.45)',
            color: GOLD, padding: '6px 20px', borderRadius: '50px',
            fontSize: '0.8rem', fontWeight: 700, marginBottom: '22px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {tx(citySlogan)}
          </div>

          <h1 style={{ fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.18, marginBottom: '20px', letterSpacing: '-0.01em', textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}>
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
            <Link href={`/${citySlug}/routes`} className="btn-outline mk-btn mk-focus" style={{ padding: '14px 30px', borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              {tx(heroContent.secondaryCta)}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Nature strip ── */}
      <section aria-label={isAr ? 'طابع الطائف' : 'Taif at a glance'} style={{ background: `linear-gradient(90deg, ${GREEN} 0%, ${DARK} 100%)`, padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {natureStrip.map(item => (
            <span key={item.en} style={{ color: 'rgba(233,196,106,0.92)', fontSize: '0.88rem', fontWeight: 700 }}>{tx(item)}</span>
          ))}
        </div>
      </section>

      {/* ── 3. How can we help in Taif? ── */}
      <section aria-labelledby="tf-need-title" style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head id="tf-need-title" tag={isAr ? 'ابدأ هنا' : 'Start Here'} title={isAr ? 'كيف يمكننا مساعدتك في الطائف؟' : 'How Can We Help in Taif?'} />
          <div className="mk-grid">
            {needCards.map((n, i) => {
              const NIcon = ICON_MAP[n.iconName]
              const isExternal = n.href.startsWith('http')
              const content = (
                <>
                  <div style={{ background: 'rgba(45,106,79,0.1)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                    {NIcon && <NIcon size={20} strokeWidth={1.8} color={GREEN} aria-hidden="true" />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '4px' }}>{tx(n.title)}</div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.6, margin: '0 0 8px' }}>{tx(n.desc)}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: GREEN, fontWeight: 800, fontSize: '0.82rem' }}>
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

      {/* ── 4. Taif Airport ── */}
      <section aria-labelledby="tf-airport-title" style={{ padding: '84px 0', background: DARK }}>
        <div className="container">
          <Head dark id="tf-airport-title" tag={isAr ? 'المطار' : 'The Airport'} title={isAr ? 'توصيل مطار الطائف بلا تعقيد' : 'Taif Airport Transfers Without the Guesswork'} />
          <div className="mk-grid-lg">
            {airportSteps.map((s, i) => (
              <motion.div key={s.n} {...reveal(i)} style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                background: 'rgba(233,196,106,0.06)', border: '1px solid rgba(233,196,106,0.2)', borderRadius: '14px', padding: '18px 20px',
              }}>
                <div style={{
                  width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(233,196,106,0.15)', color: GOLD, fontWeight: 900, fontSize: '0.85rem',
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
            <Link href="/taif-airport-taxi" className="mk-focus" style={{ color: GOLD, fontWeight: 800, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {isAr ? 'تفاصيل توصيل مطار الطائف' : 'Taif Airport Transfer details'} <Arrow size={14} />
            </Link>
            <Link href="/airport-transfer" className="mk-focus" style={{ color: GOLD, fontWeight: 800, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {isAr ? 'جميع المطارات التي نغطيها' : 'All airports we cover'} <Arrow size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Mountain travel overview (editorial, no cards) ── */}
      <section aria-labelledby="tf-mountain-title" style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '740px', textAlign: 'center' }}>
          <Head id="tf-mountain-title" tag={isAr ? 'الجبال' : 'The Mountains'} title={isAr ? 'نقل خاص لطرق الطائف الجبلية' : "Private Transport for Taif's Mountain Roads"} />
          <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.9 }}>{tx(mountainOverview)}</p>
        </div>
      </section>

      {/* ── 6. Al-Hada experience (image/text split) ── */}
      <section aria-labelledby="tf-hada-title" style={{ padding: '70px 0', background: '#f3f7f2' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 340px) 1fr', gap: '36px', alignItems: 'center' }} className="tf-split">
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(27,67,50,0.18)' }}>
              <img src={heroImage} alt="Mountain road near Al-Hada, Taif" width={340} height={260} loading="lazy" style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div>
              <span className="section-tag" style={{ background: 'rgba(45,106,79,0.1)', border: '1px solid rgba(45,106,79,0.3)', color: GREEN }}>{isAr ? 'الهدا' : 'Al-Hada'}</span>
              <h2 id="tf-hada-title" style={{ fontSize: 'clamp(1.3rem, 2.6vw, 1.7rem)', fontWeight: 900, margin: '12px 0 14px' }}>{isAr ? 'طريق الهدا الجبلي' : 'The Al-Hada Mountain Road'}</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: '18px' }}>{tx(alHada.text)}</p>
              <Link href="/taif-to-makkah" className="mk-focus" style={{ color: GREEN, fontWeight: 800, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                {isAr ? 'عرض خط الطائف إلى مكة' : 'See the Taif to Makkah route'} <Arrow size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Al-Shafa experience (editorial panel) ── */}
      <section aria-labelledby="tf-shafa-title" style={{ padding: '80px 0', background: `linear-gradient(135deg, ${GREEN} 0%, ${DARK} 100%)` }}>
        <div className="container" style={{ maxWidth: '740px', textAlign: 'center' }}>
          <Head dark id="tf-shafa-title" tag={isAr ? 'شفا' : 'Al-Shafa'} title={isAr ? 'منتجع شفا الجبلي' : 'The Al-Shafa Mountain Retreat'} />
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.9, marginBottom: '26px' }}>{tx(alShafa.text)}</p>
          <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ display: 'inline-flex' }}>
            <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'خطط لرحلة شفا' : 'Plan a Shafa Trip'}
          </a>
        </div>
      </section>

      {/* ── 8. Rose farms ── */}
      <section aria-labelledby="tf-rose-title" style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🌹</div>
          <Head id="tf-rose-title" tag={isAr ? 'مزارع الورد' : 'Rose Farms'} title={isAr ? 'استكشف بلاد الورد الطائفي' : "Visit Taif's Rose Country"} />
          <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: '26px' }}>{tx(roseFarms.text)}</p>
          <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ display: 'inline-flex' }}>
            <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'اسأل عن رحلة مزارع الورد' : 'Ask About a Rose Farm Trip'}
          </a>
        </div>
      </section>

      {/* ── 9. Plan your own Taif day (itinerary timeline) ── */}
      <section aria-labelledby="tf-fullday-title" style={{ padding: '84px 0', background: DARK }}>
        <div className="container">
          <Head dark id="tf-fullday-title" tag={isAr ? 'يوم كامل' : 'Full Day'} title={isAr ? 'خطط ليومك الخاص في الطائف' : 'Plan Your Own Taif Day'} subtitle={tx(fullDay.intro)} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
            {fullDay.stops.map((stop, i) => (
              <div key={stop.en} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  background: 'rgba(233,196,106,0.1)', border: '1px solid rgba(233,196,106,0.3)', color: GOLD,
                  padding: '9px 16px', borderRadius: '50px', fontSize: '0.84rem', fontWeight: 800,
                }}>
                  {tx(stop)}
                </span>
                {i < fullDay.stops.length - 1 && <Arrow size={14} />}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ display: 'inline-flex' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'خطط لرحلتي في الطائف' : 'Plan My Taif Trip'}
            </a>
          </div>
        </div>
      </section>

      {/* ── 10. Intercity travel ── */}
      <section aria-labelledby="tf-routes-title" style={{ padding: '80px 0', background: `linear-gradient(135deg, #243b2e 0%, ${DARK} 100%)` }}>
        <div className="container">
          <Head dark id="tf-routes-title" tag={tr.routesTag} title={isAr ? <>السفر بين المدن من {cityAccent(true)}</> : <>Intercity Travel From {cityAccent(true)}</>} />
          <div className="mk-grid-lg">
            {linkedRoutes.map((r, i) => (
              <motion.div key={r.slug} {...reveal(i)}>
                <Link href={`/${r.slug}`} className="mk-card mk-card-dark" style={{
                  display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px', height: '100%',
                  background: 'rgba(233,196,106,0.05)', border: '1px solid rgba(233,196,106,0.25)', borderRadius: '16px',
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.4 }}>{tx(r.label)}</h3>
                  <div style={{ color: GOLD, fontWeight: 900, fontSize: '1.05rem' }}>{tx(r.duration)}</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, margin: 0, flex: 1 }}>{tx(r.desc)}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'white', fontWeight: 800, fontSize: '0.84rem', borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '12px', marginTop: 'auto' }}>
                    {isAr ? 'عرض المسار' : 'View Route'} <Arrow size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
            <motion.div {...reveal(linkedRoutes.length)}>
              <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="mk-card mk-card-dark" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', padding: '20px', height: '100%',
                background: 'rgba(233,196,106,0.03)', border: '1px solid rgba(233,196,106,0.18)', borderRadius: '16px', color: 'white',
              }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{tx(legacyRoute.label)}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>{isAr ? 'تقريباً ' : 'Approx. '}{tx(legacyRoute.duration)} · {isAr ? 'اسأل عبر واتساب' : 'Ask on WhatsApp'}</div>
                </div>
                <Arrow size={14} />
              </a>
            </motion.div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '26px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            {isAr
              ? 'أوقات الرحلات تقريبية وقد تختلف حسب حركة المرور وموقع الاستلام وحالة الطريق.'
              : 'Travel times are approximate and may vary depending on traffic, pickup location and road conditions.'}
          </p>
        </div>
      </section>

      {/* ── 11. Where can we take you in Taif? ── */}
      <section aria-labelledby="tf-areas-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head id="tf-areas-title" tag={isAr ? 'المناطق' : 'Destinations'} title={isAr ? 'إلى أين يمكننا أخذك في الطائف؟' : 'Where Can We Take You in Taif?'} />
          <div className="mk-grid-lg">
            {areas.map((a, i) => {
              const AIcon = ICON_MAP[a.iconName]
              return (
                <motion.div key={a.name.en} {...reveal(i)} style={{
                  background: 'var(--card, #fff)', borderRadius: '20px', padding: '24px 20px',
                  border: '1px solid var(--border)', borderTop: `3px solid ${GREEN}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{ background: 'linear-gradient(135deg, rgba(45,106,79,0.15), rgba(233,196,106,0.12))', borderRadius: '12px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                      {AIcon && <AIcon size={20} strokeWidth={1.8} color={GREEN} aria-hidden="true" />}
                    </div>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0 }}>{tx(a.name)}</h3>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: '0 0 10px' }}>{tx(a.desc)}</p>
                  <p style={{ fontSize: '0.79rem', color: GREEN, fontWeight: 700, margin: 0 }}>{tx(a.relevance)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 12. Vehicle selection ── */}
      <FleetSection pricing={[]} cityName={cityName} showFromPrice={false} bestFor={vehicleBestFor} />
      <div className="container" style={{ textAlign: 'center', padding: '0 24px 70px', display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/toyota-camry-taxi" className="mk-focus" style={{ color: GREEN, fontWeight: 800, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          {isAr ? 'تفاصيل السيدان' : 'Sedan details'} <Arrow size={13} />
        </Link>
        <Link href="/hyundai-staria-taxi" className="mk-focus" style={{ color: GREEN, fontWeight: 800, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          {isAr ? 'تفاصيل هيونداي ستاريا' : 'Hyundai Staria details'} <Arrow size={13} />
        </Link>
        <Link href="/gmc-yukon-hire" className="mk-focus" style={{ color: GREEN, fontWeight: 800, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          {isAr ? 'تفاصيل GMC يوكون' : 'GMC Yukon details'} <Arrow size={13} />
        </Link>
      </div>

      {/* ── 13. Family & group travel ── */}
      <section aria-labelledby="tf-family-title" style={{ padding: '80px 0', background: '#f3f7f2' }}>
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <Head id="tf-family-title" tag={isAr ? 'العائلات' : 'Families'} title={isAr ? 'تتنقل في الطائف مع العائلة؟' : 'Travelling Around Taif With Family?'} />
          <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: '26px' }}>
            {isAr
              ? 'عدد الركاب والأمتعة ومحطاتكم المخطط لها — بين المطار والجبال والفنادق — كلها تؤثر في السيارة المناسبة لكم. أخبرنا بتفاصيل رحلتكم وسنقترح عليكم الخيار الأنسب.'
              : "Passenger count, luggage, and how many stops you're planning — between the airport, the mountains and your hotel — all affect which vehicle fits best. Tell us about your trip and we'll suggest the right fit."}
          </p>
          <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ display: 'inline-flex' }}>
            <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'اختر سيارتك عبر واتساب' : 'Choose a Vehicle on WhatsApp'}
          </a>
        </div>
      </section>

      {/* ── 14. Why choose us ── */}
      <section aria-labelledby="tf-why-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head id="tf-why-title" tag={tr.whyTag} title={isAr ? <>لماذا تختار Saudi Cabs GMC في {cityAccent(false)}</> : <>Why Choose Saudi Cabs GMC in {cityAccent(false)}</>} />
          <div className="mk-grid">
            {highlights.map((h, i) => {
              const HIcon = ICON_MAP[h.iconName]
              return (
                <motion.div key={h.title.en} {...reveal(i)} style={{
                  background: 'var(--muted)', border: '1px solid var(--border)',
                  borderRadius: '16px', padding: '26px 22px', textAlign: 'center',
                }}>
                  <div style={{
                    background: 'rgba(45,106,79,0.1)', borderRadius: '50%',
                    width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
                  }}>
                    {HIcon && <HIcon size={24} strokeWidth={1.8} color={GREEN} aria-hidden="true" />}
                  </div>
                  <h3 style={{ fontWeight: 800, marginBottom: '8px', fontSize: '0.98rem', lineHeight: 1.35 }}>{tx(h.title)}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0 }}>{tx(h.desc)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 15. Taif transport questions (direct-answer AEO) ── */}
      <section aria-labelledby="tf-aeo-title" style={{ padding: '84px 0', background: DARK }}>
        <div className="container">
          <Head dark id="tf-aeo-title" tag={isAr ? 'إجابات سريعة' : 'Quick Answers'} title={isAr ? 'أسئلة النقل في الطائف' : 'Taif Transport Questions'} />
          <div className="mk-grid-lg">
            {aeoQA.map((item, i) => (
              <motion.div key={item.q.en} {...reveal(i)} style={{
                background: 'rgba(233,196,106,0.05)', border: '1px solid rgba(233,196,106,0.18)', borderRadius: '14px', padding: '20px 22px',
              }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'white', margin: '0 0 8px', lineHeight: 1.45 }}>{tx(item.q)}</h3>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>{tx(item.a)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 16. FAQ ── */}
      <FAQSection
        faqs={faqs}
        heading={{ ar: `أسئلة شائعة حول النقل في ${city}`, en: `Frequently Asked Questions — ${city}` }}
        subheading={{
          ar: 'إجابات واضحة حول خدمات تاكسي الطائف وتوصيل المطار والرحلات الجبلية والسفر بين المدن',
          en: 'Clear answers about Taif taxi services, airport transfers, mountain trips and intercity travel',
        }}
      />

      {/* ── 17. Closing CTA ── */}
      <section aria-labelledby="tf-final-title" style={{ padding: '64px 0', background: `linear-gradient(135deg, ${GREEN} 0%, ${DARK} 100%)`, textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>🌹</div>
          <h2 id="tf-final-title" style={{ color: 'white', fontSize: 'clamp(1.35rem, 3vw, 1.8rem)', fontWeight: 900, marginBottom: '10px' }}>
            {isAr ? 'تخطط لرحلة في الطائف؟' : 'Planning a Taif Trip?'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '24px' }}>
            {isAr
              ? 'أرسل موقع الاستلام والوجهة والتاريخ والوقت وسيارتك المفضلة عبر واتساب، وسنؤكد لك السعر وتفاصيل الرحلة.'
              : 'Send your pickup, destination, date/time and vehicle preference on WhatsApp, and we will confirm the trip and fare.'}
          </p>
          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 32px' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'احجز رحلتك في الطائف عبر واتساب' : 'Book Your Taif Trip on WhatsApp'}
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
