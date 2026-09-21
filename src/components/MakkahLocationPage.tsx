'use client'
import Link from 'next/link'
import FAQSection from './FAQSection'
import PricingSection from './PricingSection'
import {
  Phone, MessageCircle, Mail, ArrowRight, ChevronRight, Check,
  Building2, Plane, Bus, Car, Briefcase, Map, Users, Shield, Clock, Banknote, Star,
  Moon, MapPin, Mountain, Tent, Route,
} from 'lucide-react'
import BookingForm from './BookingForm'
import FleetSection from './FleetSection'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'
import {
  type BText, type MakkahPageProps,
  heroContent, audiences, bookingSteps, vehicleBestFor, guideTopics, relatedGuides,
} from '@/lib/makkahPageData'

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Plane, Bus, Car, Briefcase, Map, Users, Shield, Clock, Banknote, Star,
  Moon, MapPin, Mountain, Tent, Route, MessageCircle,
}

const WA_NUMBER = '923097811785'
const waUrl = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

const GOLD = '#D4AF37'

const NEIGHBOURHOODS: { icon: React.ElementType; kind: BText; name: BText; desc: BText }[] = [
  {
    icon: Building2,
    kind: { ar: 'حي فنادق', en: 'Hotel district' },
    name: { ar: 'العزيزية', en: 'Al-Aziziyah' },
    desc: {
      ar: 'حي فنادق شهير في مكة، يقع على بعد حوالي 3-4 كم من الحرم المكي وقريب من منى. نوفر رحلات منتظمة بين العزيزية والحرم.',
      en: 'A popular hotel district in Makkah, roughly 3–4 km from the Holy Mosque and close to Mina. We run regular transfers between Al-Aziziyah and the Haram.',
    },
  },
  {
    icon: MapPin,
    kind: { ar: 'حي فنادق', en: 'Hotel district' },
    name: { ar: 'المسفلة', en: 'Misfalah' },
    desc: {
      ar: 'حي تاريخي قريب جداً من الحرم المكي، على مسافة تصل مشياً في بعض أجزائه. نوفر توصيلاً للفنادق والشقق في جميع أنحاء المسفلة، مع وصول مريح للحرم.',
      en: 'A historic district right beside the Holy Mosque, walkable from parts of the area. We provide transfers to hotels and apartments across Misfalah, with convenient access to the Haram.',
    },
  },
  {
    icon: Building2,
    kind: { ar: 'حي فنادق', en: 'Hotel district' },
    name: { ar: 'أجياد', en: 'Ajyad' },
    desc: {
      ar: 'من أقرب الأحياء إلى المسجد الحرام، يطل مباشرة على برج الساعة ومنطقة الحرم. مثالي لمن يريد إقامة قريبة جداً، ونوفر توصيلاً من فنادق أجياد حسب التوفر.',
      en: 'One of the closest neighborhoods to the Holy Mosque, overlooking the Clock Tower area. Ideal for travelers who want to stay within very close reach — we offer pickup from Ajyad hotels, subject to availability.',
    },
  },
  {
    icon: Tent,
    kind: { ar: 'من المشاعر', en: 'Holy site' },
    name: { ar: 'منى', en: 'Mina' },
    desc: {
      ar: 'مدينة الخيام على بعد حوالي 7 كم من مكة، محطة أساسية خلال أيام الحج. نوفر رحلات منظمة من وإلى منى خلال موسم الحج.',
      en: 'The tent city roughly 7 km from central Makkah, a core stop during the days of Hajj. We run organized transfers to and from Mina during the Hajj season.',
    },
  },
  {
    icon: Mountain,
    kind: { ar: 'من المشاعر', en: 'Holy site' },
    name: { ar: 'عرفات', en: 'Arafat' },
    desc: {
      ar: 'موقع الوقوف الأهم في مناسك الحج، يبعد حوالي 20 كم عن مكة المكرمة. نساعد الحجاج والمجموعات على التنقل إلى عرفات ومنها وفق الجدول المخطط له.',
      en: 'The site of the central Hajj ritual of standing (Wuquf), about 20 km from Makkah. We help pilgrims and groups travel to and from Arafat according to their planned schedule.',
    },
  },
  {
    icon: Moon,
    kind: { ar: 'من المشاعر', en: 'Holy site' },
    name: { ar: 'مزدلفة', en: 'Muzdalifah' },
    desc: {
      ar: 'محطة المبيت بين عرفات ومنى، على بعد حوالي 9 كم من مكة. نوفر خيارات نقل لرحلات الحج والعمرة التي تشمل مزدلفة.',
      en: 'The overnight stop between Arafat and Mina, about 9 km from Makkah. We provide transport options for Hajj and Umrah travel involving Muzdalifah.',
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

export default function MakkahLocationPage({
  cityName, citySlogan, citySlug, heroImage, services, routes, linkedRoutes, highlights, faqs, pricing,
}: MakkahPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: BText) => b[lang]
  const city = tx(cityName)
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة في مكة المكرمة' : "Hello, I'd like to book a trip in Makkah"

  const cityAccent = (dark: boolean) => <span style={{ color: dark ? GOLD : 'var(--primary)' }}>{city}</span>

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

          <p className="mk-hero-intro" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'rgba(255,255,255,0.86)', lineHeight: 1.85, maxWidth: '660px', margin: '0 auto 32px' }}>
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

      {/* ── 3. Services ── */}
      <section aria-labelledby="mk-services-title" style={{ padding: '84px 0', backgroundColor: '#0a2418' }}>
        <div className="container">
          <Head
            dark id="mk-services-title" tag={tr.servicesTag}
            title={isAr ? <>خدمات التاكسي والنقل في {cityAccent(true)}</> : <>Taxi &amp; Transport Services in {cityAccent(true)}</>}
            subtitle={isAr ? 'من المطار إلى الحرم المكي وما بعده — اختر الخدمة المناسبة لرحلتك.' : 'From the airport to the Holy Mosque and beyond — choose the service that fits your trip.'}
          />
          <div className="mk-grid-lg">
            {services.map(s => {
              const SIcon = ICON_MAP[s.iconName]
              return (
                <Link
                  key={s.title.en} href={s.href}
                  className="mk-card mk-card-dark"
                  style={{
                    display: 'flex', flexDirection: 'column', gap: '12px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.2)',
                    borderInlineStart: `3px solid ${GOLD}`, borderRadius: '14px', padding: '22px 20px', color: 'white',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ background: 'rgba(212,175,55,0.12)', borderRadius: '10px', padding: '10px', flexShrink: 0, display: 'flex' }}>
                      {SIcon && <SIcon size={22} strokeWidth={1.8} color={GOLD} aria-hidden="true" />}
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1.35, margin: 0 }}>{tx(s.title)}</h3>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, margin: 0, flex: 1 }}>{tx(s.desc)}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: GOLD, fontWeight: 800, fontSize: '0.85rem' }}>
                    {tx(s.cta)} <Arrow />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Makkah Taxi for Every Type of Trip ── */}
      <section aria-labelledby="mk-trips-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head
            id="mk-trips-title" tag={isAr ? 'لكل مسافر' : 'Who We Serve'}
            title={isAr ? 'تاكسي مكة لكل أنواع الرحلات' : 'Makkah Taxi for Every Type of Trip'}
            subtitle={isAr ? 'سواء كنت معتمراً أو حاجاً أو مسافراً مع عائلتك أو في رحلة عمل، اختر ما يناسب رحلتك.' : 'Whether you are here for Umrah, Hajj, a family trip or business, here is how we can help.'}
          />
          <div className="mk-grid">
            {audiences.map(a => {
              const AIcon = ICON_MAP[a.iconName]
              return (
                <div key={a.title.en} className="mk-card" style={{
                  display: 'flex', flexDirection: 'column', gap: '12px',
                  background: 'var(--card, #fff)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '26px 22px',
                  borderTop: '3px solid var(--primary)',
                }}>
                  <div style={{ background: 'var(--primary-light)', borderRadius: '12px', padding: '11px', width: 'fit-content', display: 'flex' }}>
                    {AIcon && <AIcon size={24} strokeWidth={1.8} color="var(--primary)" aria-hidden="true" />}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>{tx(a.title)}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.75, margin: 0, flex: 1 }}>{tx(a.desc)}</p>
                  <Link href={a.href} className="mk-focus" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 800, fontSize: '0.86rem', minHeight: '32px' }}>
                    {tx(a.linkLabel)} <Arrow />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Popular routes ── */}
      <section aria-labelledby="mk-routes-title" style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0B3D2E 0%, #071f17 100%)' }}>
        <div className="container">
          <Head
            dark id="mk-routes-title" tag={tr.routesTag}
            title={<>{tr.routesTitle} {cityAccent(true)}</>}
            subtitle={isAr ? 'أوقات الرحلات تقريبية. اضغط على أي مسار لمعرفة التفاصيل والسعر.' : 'Approximate journey times for the routes travelers ask about most. Open any route for details and price.'}
          />
          <div className="mk-grid">
            {routes.map(r => {
              const from = tx(r.from)
              const to = tx(r.to)
              const msg = isAr ? `السلام عليكم، أرغب في معرفة سعر رحلة من ${from} إلى ${to}` : `Hello, I'd like a price for ${from} → ${to}`
              const inner = (
                <>
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.4 }}>
                    {from} <span style={{ color: GOLD }}>{isAr ? '←' : '→'}</span> {to}
                  </h3>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      {isAr ? 'وقت الرحلة التقريبي' : 'Approx. travel time'}
                    </div>
                    <div style={{ color: GOLD, fontWeight: 900, fontSize: '1.25rem', lineHeight: 1.3 }}>{tx(r.time)}</div>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'white', fontWeight: 800, fontSize: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '12px', marginTop: 'auto' }}>
                    {isAr ? 'تحقق من المسار والسعر' : 'Check Route & Price'} <Arrow />
                  </span>
                </>
              )
              const cardStyle: React.CSSProperties = {
                display: 'flex', flexDirection: 'column', gap: '14px', padding: '20px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '16px', color: 'white',
              }
              return r.href ? (
                <Link key={`${r.from.en}-${r.to.en}`} href={r.href} className="mk-card mk-card-dark" style={cardStyle}>{inner}</Link>
              ) : (
                <a key={`${r.from.en}-${r.to.en}`} href={waUrl(msg)} target="_blank" rel="noopener noreferrer" className="mk-card mk-card-dark" style={cardStyle}>{inner}</a>
              )
            })}
          </div>
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
          <p style={{ textAlign: 'center', marginTop: '6px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            {isAr
              ? 'خلال موسم الحج، قد تتأثر أوقات الرحلات إلى منى وعرفات بشكل كبير بسبب الازدحام والقيود الرسمية لإدارة الحشود وأنظمة الوصول.'
              : 'During Hajj season, travel times to Mina and Arafat can be significantly affected by heavy traffic, official crowd-control restrictions, and access regulations.'}
          </p>
        </div>
      </section>

      {/* ── 6. Hotel & neighbourhood service ── */}
      <section aria-labelledby="mk-areas-title" style={{ padding: '84px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head
            id="mk-areas-title" tag={isAr ? 'الأحياء والمشاعر' : 'Hotels & Holy Sites'}
            title={isAr ? 'خدمة تاكسي للفنادق والأحياء في مكة المكرمة' : 'Makkah Hotel & Neighborhood Taxi Service'}
            subtitle={isAr
              ? 'من أحياء الفنادق القريبة من الحرم إلى المشاعر المقدسة — سائقونا على دراية بأبرز الفنادق والأحياء والمواقع الرئيسية في مكة. شاركنا اسم فندقك أو حيّك عند الحجز.'
              : 'From hotel districts near the Haram to the sacred sites — our drivers are familiar with major hotels, neighborhoods, and key locations across Makkah. Share your hotel name or area when you book.'}
          />
          <div className="mk-grid-lg">
            {NEIGHBOURHOODS.map(n => {
              const NIcon = n.icon
              return (
                <div key={n.name.en} className="mk-card" style={{ padding: '24px 22px', borderRadius: '16px', border: '1.5px solid var(--border)', background: 'var(--card, #fff)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ background: 'var(--primary-light)', borderRadius: '10px', padding: '9px', flexShrink: 0, display: 'flex' }}>
                      <NIcon size={20} strokeWidth={1.8} color="var(--primary)" aria-hidden="true" />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--foreground)', margin: 0, lineHeight: 1.3 }}>{tx(n.name)}</h3>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{tx(n.kind)}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.75, margin: 0 }}>{tx(n.desc)}</p>
                </div>
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

      {/* ── 7. Direct routes ── */}
      {linkedRoutes.length > 0 && (
        <section aria-labelledby="mk-direct-title" style={{ padding: '72px 0', backgroundColor: 'var(--muted)' }}>
          <div className="container">
            <Head
              id="mk-direct-title" tag={isAr ? 'رحلات مباشرة' : 'Direct Routes'}
              title={isAr ? <>{cityAccent(false)} — خطوط مباشرة بسعر ثابت</> : <>{cityAccent(false)} Direct Routes at Fixed Prices</>}
              subtitle={isAr ? 'لكل خط صفحة خاصة بالتفاصيل والأسعار حسب السيارة.' : 'Each route has its own page with details and prices by vehicle.'}
            />
            <div className="mk-grid-lg">
              {linkedRoutes.map(r => (
                <Link
                  key={r.slug} href={`/${r.slug}`} className="mk-card mk-card-light"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px',
                    background: 'var(--background)', borderRadius: '14px', padding: '18px 20px', border: '1.5px solid var(--border)',
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontWeight: 800, fontSize: '0.98rem', marginBottom: '4px', color: 'var(--foreground)', lineHeight: 1.35 }}>{tx(r.label)}</h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>
                      {isAr ? 'تقريباً ' : 'Approx. '}{tx(r.duration)} • {isAr ? 'سعر ثابت' : 'Fixed Price'}
                    </div>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 800, fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
                    {isAr ? 'المسار والسعر' : 'Route & price'} <Arrow size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. How booking works ── */}
      <section aria-labelledby="mk-steps-title" style={{ padding: '80px 0', background: '#071f17' }}>
        <div className="container">
          <Head dark id="mk-steps-title" tag={isAr ? 'خطوات بسيطة' : 'Simple Booking'} title={isAr ? 'كيف يعمل الحجز' : 'How Booking Works'} />
          <ol className="mk-grid-lg" style={{ listStyle: 'none', padding: 0 }}>
            {bookingSteps.map(s => (
              <li key={s.n} style={{
                background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '16px', padding: '26px 22px',
              }}>
                <div aria-hidden="true" style={{ fontSize: '2.2rem', fontWeight: 900, color: GOLD, lineHeight: 1, marginBottom: '12px' }}>{s.n}</div>
                <h3 style={{ color: 'white', fontSize: '1.05rem', fontWeight: 800, marginBottom: '8px' }}>{tx(s.title)}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{tx(s.desc)}</p>
              </li>
            ))}
          </ol>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '34px' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus">
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {isAr ? 'ابدأ عبر واتساب' : 'Start on WhatsApp'}
            </a>
            <a href="#booking" className="btn-outline mk-btn mk-focus">{isAr ? 'أو استخدم النموذج' : 'Or Use the Form'}</a>
          </div>
        </div>
      </section>

      {/* ── 9. Fleet ── */}
      {pricing.length > 0 && <FleetSection pricing={pricing} cityName={cityName} showFromPrice={false} bestFor={vehicleBestFor} />}

      {/* ── 10. Pricing ── */}
      {pricing.length > 0 && (
        <PricingSection routes={pricing} heading={{ ar: 'أسعار التاكسي والتوصيل في مكة المكرمة', en: 'Makkah Taxi Prices & Transfer Rates' }} />
      )}

      {/* ── 11. Why choose us ── */}
      <section aria-labelledby="mk-why-title" style={{ padding: '84px 0', background: '#071f17' }}>
        <div className="container">
          <Head dark id="mk-why-title" tag={tr.whyTag} title={<>{tr.whyTitle} {cityAccent(true)}</>} />
          <div className="mk-grid" style={{ marginBottom: '40px' }}>
            {highlights.map(h => {
              const HIcon = ICON_MAP[h.iconName]
              return (
                <div key={h.title.en} style={{
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
                </div>
              )
            })}
          </div>
          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 32px' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {tr.whatsapp}
            </a>
            <a href="tel:+923097811785" className="mk-btn mk-focus" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.08)', color: 'white',
              padding: '14px 32px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem',
              border: '1px solid rgba(255,255,255,0.25)',
            }}>
              <Phone size={17} strokeWidth={2.5} aria-hidden="true" /> <span dir="ltr">+92 309 7811785</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 12. Makkah Transport Guide ── */}
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

      {/* ── 13. FAQ ── */}
      <FAQSection faqs={faqs} heading={{ ar: `أسئلة شائعة حول النقل في ${city}`, en: `Frequently Asked Questions — ${city}` }} />

      {/* ── 14. Closing CTA ── */}
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
