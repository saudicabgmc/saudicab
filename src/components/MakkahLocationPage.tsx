'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import FAQSection from './FAQSection'
import PricingSection from './PricingSection'
import {
  MessageCircle, Mail, ArrowRight, ChevronRight, Check,
  Building2, Plane, Bus, Car, Briefcase, Map, Users, Shield, Clock, Banknote, Star,
  Moon, MapPin, Mountain, Tent, Route, Send, CheckCircle2,
} from 'lucide-react'
import BookingForm from './BookingForm'
import FleetSection from './FleetSection'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'
import {
  type BText, type MakkahPageProps,
  heroContent, audiences, vehicleBestFor, vehicleComparison, whatToExpect, familyTravel,
  guideTopics, relatedGuides, SERVICE_GROUP_LABELS,
} from '@/lib/makkahPageData'

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Plane, Bus, Car, Briefcase, Map, Users, Shield, Clock, Banknote, Star,
  Moon, MapPin, Mountain, Tent, Route, MessageCircle,
}

const WA_NUMBER = '923097811785'
const waUrl = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

const GOLD = '#D4AF37'

const SERVICE_GROUP_ORDER = ['airport', 'local', 'religious', 'intercity'] as const

const PICKUP_AREAS: { icon: React.ElementType; name: BText; desc: BText }[] = [
  {
    icon: Building2,
    name: { ar: 'العزيزية', en: 'Al-Aziziyah' },
    desc: {
      ar: 'حي فنادق شهير في مكة، يقع على بعد حوالي 3-4 كم من الحرم المكي.',
      en: 'A popular hotel district roughly 3–4 km from the Holy Mosque.',
    },
  },
  {
    icon: MapPin,
    name: { ar: 'المسفلة', en: 'Misfalah' },
    desc: {
      ar: 'حي تاريخي قريب جداً من الحرم المكي، على مسافة تصل مشياً في بعض أجزائه.',
      en: 'A historic district right beside the Holy Mosque, walkable from parts of the area.',
    },
  },
  {
    icon: Building2,
    name: { ar: 'أجياد', en: 'Ajyad' },
    desc: {
      ar: 'من أقرب الأحياء إلى المسجد الحرام، يطل على برج الساعة.',
      en: 'One of the closest neighborhoods to the Holy Mosque, overlooking the Clock Tower area.',
    },
  },
]

/* Arrow that mirrors in RTL */
function Arrow({ size = 15 }: { size?: number }) {
  const { isAr } = useLang()
  return <ArrowRight size={size} strokeWidth={2.4} aria-hidden="true" style={{ flexShrink: 0, transform: isAr ? 'scaleX(-1)' : undefined }} />
}

function Head({ id, tag, title, subtitle, dark }: { id: string; tag: string; title: React.ReactNode; subtitle?: string; dark?: boolean }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '44px' }}>
      <span
        className="section-tag"
        style={dark ? { background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: GOLD } : undefined}
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

/** Shared fade+slight-up reveal, staggered per index. Respects prefers-reduced-motion. */
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

export default function MakkahLocationPage({
  cityName, citySlogan, citySlug, heroImage, services, linkedRoutes, highlights, faqs, pricing,
}: MakkahPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: BText) => b[lang]
  const city = tx(cityName)
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في مكة المكرمة' : "Hello, I'd like to book a trip in Makkah"
  const reveal = useReveal()

  const cityAccent = (dark: boolean) => <span style={{ color: dark ? GOLD : 'var(--primary)' }}>{city}</span>

  const primaryRoutes = linkedRoutes.slice(0, 6)
  const longDistanceRoutes = linkedRoutes.slice(6)

  return (
    <main>
      <link rel="preload" as="image" href={heroImage} fetchPriority="high" />

      {/* ── 1. Hero ── */}
      <section
        className="mk-hero"
        style={{
          background: `linear-gradient(180deg, rgba(7,31,23,0.90) 0%, rgba(11,61,46,0.72) 55%, rgba(7,31,23,0.92) 100%), url("${heroImage}")`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', position: 'relative',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: '16px', border: '1px solid rgba(212,175,55,0.22)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: '24px', border: '1px solid rgba(212,175,55,0.10)', pointerEvents: 'none' }} />

        <div className="animate-fadeInUp" style={{ color: 'white', maxWidth: '780px', position: 'relative' }}>
          <nav aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'} className="mk-crumbs" style={{ marginBottom: '18px' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
              <li><Link href="/" className="mk-focus" style={{ color: 'inherit' }}>{isAr ? 'الرئيسية' : 'Home'}</Link></li>
              <li aria-hidden="true" style={{ display: 'flex' }}><ChevronRight size={14} style={{ transform: isAr ? 'scaleX(-1)' : undefined }} /></li>
              <li aria-current="page" style={{ color: GOLD, fontWeight: 700 }}>{isAr ? 'خدمة تاكسي مكة' : 'Makkah Taxi Service'}</li>
            </ol>
          </nav>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.50)',
            color: GOLD, padding: '6px 20px', borderRadius: '50px',
            fontSize: '0.8rem', fontWeight: 700, marginBottom: '22px',
            letterSpacing: '0.08em', textTransform: 'uppercase',
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
            <a href="#booking" className="btn-outline mk-btn mk-focus" style={{ padding: '14px 30px' }}>
              {tx(heroContent.secondaryCta)}
            </a>
          </div>

          <ul aria-label={isAr ? 'مزايا الخدمة' : 'Service highlights'} style={{ listStyle: 'none', display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '32px', justifyContent: 'center' }}>
            {heroContent.trust.map(item => (
              <li key={item.en} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.22)',
                color: 'white', padding: '6px 14px', borderRadius: '50px', fontSize: '0.84rem', fontWeight: 700,
              }}>
                <Check size={14} strokeWidth={3} color={GOLD} aria-hidden="true" />
                {tx(item)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 2. Booking form band ── */}
      <section id="booking" aria-labelledby="mk-booking-title" style={{ background: '#071f17', padding: '56px 0', borderTop: '1px solid rgba(212,175,55,0.3)', borderBottom: '1px solid rgba(212,175,55,0.3)', scrollMarginTop: '72px' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{ textAlign: 'center', marginBottom: '26px' }}>
            <span style={{
              background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)',
              color: GOLD, padding: '4px 18px', borderRadius: '50px',
              fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              {isAr ? 'احجز رحلتك' : 'Reserve Your Transfer'}
            </span>
            <h2 id="mk-booking-title" style={{ color: 'white', marginTop: '14px', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 800 }}>
              {isAr ? 'أدخل تفاصيل رحلتك' : 'Enter Your Trip Details'}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem', lineHeight: 1.7, margin: '8px auto 0', maxWidth: '520px' }}>
              {isAr
                ? 'اختر سيارتك وأضف مسارك وموعدك، ثم أرسله عبر واتساب — نؤكد لك السعر الثابت وتفاصيل الاستلام. لا يلزم أي دفع مسبق.'
                : 'Choose your vehicle, add your route and date, then send it on WhatsApp — we confirm your fixed fare and pickup details. No advance payment required.'}
            </p>
          </div>
          <BookingForm defaultFrom={city} />
        </div>
      </section>

      {/* ── 3. Which Makkah transport service do you need? ── */}
      <section aria-labelledby="mk-decision-title" style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head
            id="mk-decision-title" tag={isAr ? 'ابدأ هنا' : 'Start Here'}
            title={isAr ? 'أي خدمة نقل تحتاجها في مكة؟' : 'Which Makkah Transport Service Do You Need?'}
            subtitle={isAr ? 'اختر ما يصف رحلتك لتصل مباشرة إلى الخدمة المناسبة.' : 'Pick what describes your trip to jump straight to the right service.'}
          />
          <div className="mk-grid">
            {audiences.map((a, i) => {
              const AIcon = ICON_MAP[a.iconName]
              return (
                <motion.div key={a.need.en} {...reveal(i)}>
                  <Link href={a.href} className="mk-card mk-focus" style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    background: 'var(--card, #fff)', border: '1.5px solid var(--border)', borderRadius: '14px', padding: '18px 20px',
                  }}>
                    <div style={{ background: 'var(--primary-light)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                      {AIcon && <AIcon size={20} strokeWidth={1.8} color="var(--primary)" aria-hidden="true" />}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', marginBottom: '2px' }}>{tx(a.need)}</div>
                      <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--foreground)' }}>{tx(a.service)}</div>
                    </div>
                    <Arrow />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Services, grouped by category ── */}
      <section aria-labelledby="mk-services-title" style={{ padding: '84px 0', backgroundColor: '#0a2418' }}>
        <div className="container">
          <Head
            dark id="mk-services-title" tag={tr.servicesTag}
            title={isAr ? <>خدمات التاكسي والنقل في {cityAccent(true)}</> : <>Taxi &amp; Transport Services in {cityAccent(true)}</>}
            subtitle={isAr ? 'من المطار إلى الحرم المكي وما بعده — اختر الخدمة المناسبة لرحلتك.' : 'From the airport to the Holy Mosque and beyond — choose the service that fits your trip.'}
          />
          {SERVICE_GROUP_ORDER.map(groupKey => {
            const groupServices = services.filter(s => s.group === groupKey)
            if (groupServices.length === 0) return null
            return (
              <div key={groupKey} style={{ marginBottom: '36px' }}>
                <h3 style={{
                  fontSize: '0.78rem', fontWeight: 800, color: GOLD, textTransform: 'uppercase',
                  letterSpacing: '0.1em', marginBottom: '16px',
                }}>
                  {tx(SERVICE_GROUP_LABELS[groupKey])}
                </h3>
                <div className="mk-grid-lg">
                  {groupServices.map((s, i) => {
                    const SIcon = ICON_MAP[s.iconName]
                    return (
                      <motion.div key={s.title.en} {...reveal(i)}>
                        <Link
                          href={s.href}
                          className="mk-card mk-card-dark"
                          style={{
                            display: 'flex', flexDirection: 'column', gap: '12px', height: '100%',
                            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.2)',
                            borderInlineStart: `3px solid ${GOLD}`, borderRadius: '14px', padding: '22px 20px', color: 'white',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <div style={{ background: 'rgba(212,175,55,0.12)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                              {SIcon && <SIcon size={22} strokeWidth={1.8} color={GOLD} aria-hidden="true" />}
                            </div>
                            <h4 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1.35, margin: 0 }}>{tx(s.title)}</h4>
                          </div>
                          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, margin: 0, flex: 1 }}>{tx(s.desc)}</p>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: GOLD, fontWeight: 800, fontSize: '0.85rem' }}>
                            {tx(s.cta)} <Arrow />
                          </span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 5. Popular routes (primary 6 + longer-distance) ── */}
      <section aria-labelledby="mk-routes-title" style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0B3D2E 0%, #071f17 100%)' }}>
        <div className="container">
          <Head
            dark id="mk-routes-title" tag={tr.routesTag}
            title={<>{tr.routesTitle} {cityAccent(true)}</>}
            subtitle={isAr ? 'لكل خط صفحة خاصة بالتفاصيل وخيارات السيارة والسعر.' : 'Each route has its own page with details, vehicle options and price.'}
          />
          <div className="mk-grid-lg">
            {primaryRoutes.map((r, i) => (
              <motion.div key={r.slug} {...reveal(i)}>
                <Link href={`/${r.slug}`} className="mk-card mk-card-dark" style={{
                  display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '16px', color: 'white', height: '100%',
                }}>
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.4 }}>{tx(r.label)}</h3>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      {isAr ? 'وقت الرحلة التقريبي' : 'Approx. travel time'}
                    </div>
                    <div style={{ color: GOLD, fontWeight: 900, fontSize: '1.15rem', lineHeight: 1.3 }}>{tx(r.duration)}</div>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'white', fontWeight: 800, fontSize: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '12px', marginTop: 'auto' }}>
                    {isAr ? 'المسار والسعر وخيارات السيارة' : 'View route, price & vehicles'} <Arrow />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {longDistanceRoutes.length > 0 && (
            <div style={{ marginTop: '32px' }}>
              <p style={{ textAlign: 'center', fontSize: '0.78rem', fontWeight: 800, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                {isAr ? 'رحلات أطول' : 'Longer-Distance Routes'}
              </p>
              <div className="mk-grid-lg">
                {longDistanceRoutes.map(r => (
                  <Link key={r.slug} href={`/${r.slug}`} className="mk-card mk-card-dark" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', padding: '16px 20px',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.18)', borderRadius: '14px', color: 'white',
                  }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>{tx(r.label)}</div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>{isAr ? 'تقريباً ' : 'Approx. '}{tx(r.duration)}</div>
                    </div>
                    <Arrow size={14} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link href={`/${citySlug}/routes`} className="mk-btn mk-focus" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: GOLD, color: '#071f17', padding: '12px 28px', borderRadius: '10px', fontWeight: 800, fontSize: '0.9rem',
            }}>
              {isAr ? `عرض جميع خطوط ${city}` : `View All ${city} Routes`} <Arrow />
            </Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '22px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            {isAr
              ? 'أوقات الرحلات تقريبية وقد تختلف حسب حركة المرور وموقع الاستلام وحالة الطريق.'
              : 'Travel times are approximate and may vary depending on traffic, pickup location and road conditions.'}
          </p>
        </div>
      </section>

      {/* ── 6. What to expect ── */}
      <section aria-labelledby="mk-expect-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head
            id="mk-expect-title" tag={isAr ? 'التجربة' : 'The Experience'}
            title={isAr ? 'ماذا تتوقع' : 'What to Expect'}
          />
          <div className="mk-grid">
            {whatToExpect.map((step, i) => {
              const StepIcon = [Send, CheckCircle2, Car, Plane][i]
              return (
                <motion.div key={step.title.en} {...reveal(i)} style={{
                  background: 'var(--muted)', borderRadius: '16px', padding: '24px 20px', border: '1px solid var(--border)',
                }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <StepIcon size={19} color="var(--primary)" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 800, marginBottom: '8px' }}>{tx(step.title)}</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0 }}>{tx(step.desc)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Travelling with family? ── */}
      <section aria-labelledby="mk-family-title" style={{ padding: '80px 0', background: '#071f17' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Head dark id="mk-family-title" tag={isAr ? 'العائلات' : 'Families'} title={isAr ? 'تسافر مع العائلة؟' : 'Travelling With Family?'} subtitle={tx(familyTravel.intro)} />
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {familyTravel.points.map((p, i) => (
              <motion.li key={p.en} {...reveal(i)} style={{
                display: 'flex', alignItems: 'flex-start', gap: '12px',
                background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '12px', padding: '16px 18px',
              }}>
                <Check size={16} strokeWidth={3} color={GOLD} aria-hidden="true" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem', lineHeight: 1.7 }}>{tx(p)}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 8. Makkah pickup areas ── */}
      <section aria-labelledby="mk-areas-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head
            id="mk-areas-title" tag={isAr ? 'نقاط الاستلام' : 'Pickup Areas'}
            title={isAr ? 'مناطق الاستلام في مكة المكرمة' : 'Makkah Pickup Areas'}
            subtitle={isAr
              ? 'نوفر الاستلام من الفنادق والشقق في جميع أنحاء مكة، بما في ذلك أحياء الفنادق القريبة من الحرم أدناه. شاركنا اسم فندقك عند الحجز وسنؤكد نقطة الاستلام الدقيقة عبر واتساب.'
              : 'We pick up from hotels and apartments across Makkah, including the hotel districts near the Haram below. Share your hotel name when you book and we will confirm the exact pickup point on WhatsApp.'}
          />
          <div className="mk-grid-lg">
            {PICKUP_AREAS.map((n, i) => {
              const NIcon = n.icon
              return (
                <motion.div key={n.name.en} {...reveal(i)} className="mk-card" style={{ padding: '24px 22px', borderRadius: '16px', border: '1.5px solid var(--border)', background: 'var(--card, #fff)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ background: 'var(--primary-light)', borderRadius: '10px', padding: '9px', flexShrink: 0, display: 'flex' }}>
                      <NIcon size={20} strokeWidth={1.8} color="var(--primary)" aria-hidden="true" />
                    </div>
                    <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--foreground)', margin: 0, lineHeight: 1.3 }}>{tx(n.name)}</h3>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.75, margin: 0 }}>{tx(n.desc)}</p>
                </motion.div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <a
              href={waUrl(isAr ? 'السلام عليكم، أرغب في حجز توصيل من فندقي في مكة المكرمة' : "Hello, I'd like to book a pickup from my hotel in Makkah")}
              target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus"
            >
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" />
              {isAr ? 'أرسل اسم فندقك عبر واتساب' : 'Send Your Hotel Name on WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. How to choose your vehicle ── */}
      <section aria-labelledby="mk-compare-title" style={{ padding: '84px 0', background: '#0a2418' }}>
        <div className="container">
          <Head
            dark id="mk-compare-title" tag={isAr ? 'اختر سيارتك' : 'Choose Your Vehicle'}
            title={isAr ? 'كيف تختار سيارتك' : 'How to Choose Your Vehicle'}
          />
          <div className="mk-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {vehicleComparison.map((v, i) => (
              <motion.div key={v.key} {...reveal(i)} style={{
                background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '16px', padding: '26px 22px',
              }}>
                <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 900, marginBottom: '14px' }}>{tx(v.name)}</h3>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  {isAr ? 'الأنسب لـ' : 'Best for'}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {v.bestFor.map(point => (
                    <li key={point.en} style={{ display: 'flex', alignItems: 'center', gap: '9px', color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem' }}>
                      <Check size={14} strokeWidth={3} color={GOLD} aria-hidden="true" style={{ flexShrink: 0 }} />
                      {tx(point)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Fleet ── */}
      {pricing.length > 0 && <FleetSection pricing={pricing} cityName={cityName} showFromPrice={false} bestFor={vehicleBestFor} />}

      {/* ── 11. Pricing ── */}
      {pricing.length > 0 && (
        <PricingSection routes={pricing} heading={{ ar: 'أسعار التاكسي والتوصيل في مكة المكرمة', en: 'Makkah Taxi Prices & Transfer Rates' }} />
      )}

      {/* ── 12. Why choose us ── */}
      <section aria-labelledby="mk-why-title" style={{ padding: '84px 0', background: '#071f17' }}>
        <div className="container">
          <Head dark id="mk-why-title" tag={tr.whyTag} title={<>{tr.whyTitle} {cityAccent(true)}</>} />
          <div className="mk-grid" style={{ marginBottom: '40px' }}>
            {highlights.map((h, i) => {
              const HIcon = ICON_MAP[h.iconName]
              return (
                <motion.div key={h.title.en} {...reveal(i)} style={{
                  background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.22)',
                  borderRadius: '16px', padding: '26px 22px', textAlign: 'center',
                }}>
                  <div style={{
                    background: 'rgba(212,175,55,0.15)', borderRadius: '50%',
                    width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
                  }}>
                    {HIcon && <HIcon size={24} strokeWidth={1.8} color={GOLD} aria-hidden="true" />}
                  </div>
                  <h3 style={{ fontWeight: 800, marginBottom: '8px', color: 'white', fontSize: '0.98rem', lineHeight: 1.35 }}>{tx(h.title)}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, margin: 0 }}>{tx(h.desc)}</p>
                </motion.div>
              )
            })}
          </div>
          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 32px' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {tr.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* ── 13. Makkah Transport Guide ── */}
      <section aria-labelledby="mk-guide-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head
            id="mk-guide-title" tag={isAr ? 'دليل عملي' : 'Travel Guide'}
            title={isAr ? 'دليل النقل في مكة المكرمة' : 'Makkah Transport Guide'}
            subtitle={isAr ? 'ملاحظات عملية تساعدك على التخطيط لتنقلاتك في مكة.' : 'Practical notes to help you plan getting around Makkah.'}
          />
          <div className="mk-grid-lg">
            {guideTopics.map(g => (
              <article key={g.title.en} style={{
                display: 'flex', flexDirection: 'column', gap: '10px',
                border: '1.5px solid var(--border)', borderRadius: '16px', padding: '24px 22px', background: 'var(--card, #fff)',
              }}>
                <h3 style={{ fontSize: '1.02rem', fontWeight: 800, margin: 0, lineHeight: 1.35 }}>{tx(g.title)}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.8, margin: 0, flex: 1 }}>{tx(g.body)}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                  {g.links.map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className="mk-focus" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 800, fontSize: '0.86rem', minHeight: '32px' }}>
                        {tx(l.label)} <Arrow size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <nav aria-label={isAr ? 'أدلة ذات صلة' : 'Related guides'} style={{ marginTop: '32px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {relatedGuides.map(g => (
              <Link key={g.href} href={g.href} className="mk-focus" style={{
                display: 'inline-flex', alignItems: 'center', minHeight: '40px', padding: '8px 18px', borderRadius: '50px',
                border: '1.5px solid var(--border)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--foreground)',
              }}>
                {tx(g.label)}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* ── 14. FAQ ── */}
      <FAQSection faqs={faqs} heading={{ ar: `أسئلة شائعة حول النقل في ${city}`, en: `Frequently Asked Questions — ${city}` }} />

      {/* ── 15. Closing CTA ── */}
      <section aria-labelledby="mk-final-title" style={{ padding: '64px 0', background: 'linear-gradient(135deg, #0B3D2E 0%, #071f17 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 id="mk-final-title" style={{ color: 'white', fontSize: 'clamp(1.35rem, 3vw, 1.8rem)', fontWeight: 900, marginBottom: '10px' }}>
            {isAr ? 'هل أنت جاهز لحجز رحلتك في مكة؟' : 'Ready to Book Your Makkah Trip?'}
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
