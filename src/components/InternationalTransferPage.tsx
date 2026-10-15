'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import FAQSection from './FAQSection'
import {
  MessageCircle, Mail, ArrowRight, ChevronRight,
  Send, FileCheck, Car, Handshake, ShieldAlert, Plane,
} from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import type { FAQItem } from './FAQSection'

export type BText = { en: string; ar: string }

export interface InternationalTransferTheme {
  dark: string
  dark2: string
  accent: string
}

export interface InternationalTransferProps {
  destinationLabel: string
  breadcrumbLabel: string
  originCityLabel?: string
  originCityHref?: string
  /** Optional hero background photo (e.g. a real fleet vehicle). Falls back to the plain gradient when omitted. */
  heroImage?: string
  theme: InternationalTransferTheme
  heroContent: {
    eyebrow: string
    h1: string
    intro: string
    primaryCta: string
    secondaryCta: string
  }
  quickFacts: { label: string; value: string }[]
  journeySection: { heading: string; paragraphs: string[] }
  requirementsSection: {
    heading: string
    intro: string
    items: string[]
    disclaimer: string
    officialLinkLabel: string
    officialLinkUrl: string
  }
  whyPrivateCarSection: { heading: string; paragraphs: string[] }
  vehicleOptions: { name: BText; seats: string; note: string }[]
  bookingSteps: { n: string; title: string; desc: string }[]
  relatedLink: { href: string; label: string }
  faqs: FAQItem[]
}

const WA_NUMBER = '923097811785'
const waUrl = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

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

function Arrow({ size = 15 }: { size?: number }) {
  const { isAr } = useLang()
  return <ArrowRight size={size} strokeWidth={2.4} aria-hidden="true" style={{ flexShrink: 0, transform: isAr ? 'scaleX(-1)' : undefined }} />
}

/* Real fleet photos — matched by vehicle name so every page using this shared
   component shows an actual car instead of a blank card. */
const VEHICLE_IMAGES: Record<string, { src: string; alt: string; position?: string }> = {
  Sedan: { src: '/fleet/sedan-exterior-side-saudi-cabs-gmc.webp', alt: 'Saudi Cabs GMC Sedan taxi' },
  'Hyundai Staria': { src: '/fleet/hyundai-staria-exterior-front-saudi-cabs-gmc.webp', alt: 'Saudi Cabs GMC Hyundai Staria 7-seat van', position: '50% 70%' },
  'GMC Yukon': { src: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', alt: 'Saudi Cabs GMC GMC Yukon VIP SUV' },
}

export default function InternationalTransferPage({
  destinationLabel, breadcrumbLabel, originCityLabel = 'Riyadh', originCityHref = '/riyadh-taxi-service',
  heroImage,
  theme, heroContent, quickFacts, journeySection,
  requirementsSection, whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink, faqs,
}: InternationalTransferProps) {
  const { isAr } = useLang()
  const reveal = useReveal()
  const { dark, dark2, accent } = theme
  const waText = `Hello, I'd like to ask about a private transfer to ${destinationLabel}.`

  const Head = ({ id, tag, title, subtitle, dk }: { id: string; tag: string; title: React.ReactNode; subtitle?: string; dk?: boolean }) => (
    <div style={{ textAlign: 'center', marginBottom: '36px' }}>
      <span className="section-tag" style={dk ? { background: `${accent}26`, border: `1px solid ${accent}66`, color: accent } : { background: `${dark}14`, border: `1px solid ${dark}33`, color: dark }}>
        {tag}
      </span>
      <h2 id={id} style={{ fontSize: 'clamp(1.35rem, 2.8vw, 1.85rem)', fontWeight: 900, lineHeight: 1.25, marginTop: '12px', color: dk ? 'white' : 'var(--foreground)' }}>
        {title}
      </h2>
      <div style={{ width: '44px', height: '3px', background: `linear-gradient(90deg, ${dark}, ${accent})`, margin: '14px auto', borderRadius: '2px' }} />
      {subtitle && <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.92rem', lineHeight: 1.75, color: dk ? 'rgba(255,255,255,0.68)' : 'var(--muted-foreground)' }}>{subtitle}</p>}
    </div>
  )

  return (
    <main>
      {/* ── 1. Hero ── */}
      {heroImage && <link rel="preload" as="image" href={heroImage} fetchPriority="high" />}
      <section
        className="mk-hero"
        style={{
          background: heroImage
            ? `linear-gradient(135deg, ${dark}e6 0%, ${dark2}cc 55%, ${dark}f2 100%), url("${heroImage}")`
            : `linear-gradient(135deg, ${dark} 0%, ${dark2} 60%, #0a0a0c 100%)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: '16px', border: `1px solid ${accent}2e`, pointerEvents: 'none' }} />
        <div className="animate-fadeInUp" style={{ color: 'white', maxWidth: '780px', position: 'relative' }}>
          <nav aria-label="Breadcrumb" className="mk-crumbs" style={{ marginBottom: '18px' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
              <li><Link href="/" className="mk-focus" style={{ color: 'inherit' }}>Home</Link></li>
              <li aria-hidden="true" style={{ display: 'flex' }}><ChevronRight size={14} /></li>
              <li><Link href={originCityHref} className="mk-focus" style={{ color: 'inherit' }}>{originCityLabel}</Link></li>
              <li aria-hidden="true" style={{ display: 'flex' }}><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: accent, fontWeight: 700 }}>{breadcrumbLabel}</li>
            </ol>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: `${accent}24`, border: `1px solid ${accent}73`, color: accent, padding: '6px 20px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '22px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {heroContent.eyebrow}
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 4.8vw, 3rem)', fontWeight: 900, lineHeight: 1.18, marginBottom: '20px', letterSpacing: '-0.01em' }}>
            {heroContent.h1}
          </h1>

          <div aria-hidden="true" style={{ width: '72px', height: '3px', background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, margin: '0 auto 22px' }} />

          <p className="mk-hero-intro" style={{ fontSize: 'clamp(0.92rem, 1.9vw, 1.02rem)', color: 'rgba(255,255,255,0.86)', lineHeight: 1.85, maxWidth: '660px', margin: '0 auto 32px' }} data-speakable>
            {heroContent.intro}
          </p>

          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 28px' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> {heroContent.primaryCta}
            </a>
            <Link href={relatedLink.href} className="btn-outline mk-btn mk-focus" style={{ padding: '14px 28px', borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              {heroContent.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Quick facts strip ── */}
      <section aria-label="Quick facts" style={{ background: dark, padding: '26px 0', borderTop: `1px solid ${accent}3d`, borderBottom: `1px solid ${accent}3d` }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px' }}>
            {quickFacts.map(f => (
              <div key={f.label} style={{ textAlign: 'center', padding: '10px 8px' }}>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{f.label}</div>
                <div style={{ fontSize: '0.98rem', color: accent, fontWeight: 800 }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. What the journey involves ── */}
      <section aria-labelledby="it-journey-title" style={{ padding: '76px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <Head id="it-journey-title" tag="The Journey" title={journeySection.heading} />
          {journeySection.paragraphs.map((p, i) => (
            <motion.p key={i} {...reveal(i)} style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: 1.9, marginBottom: '16px' }}>{p}</motion.p>
          ))}
        </div>
      </section>

      {/* ── 4. What to prepare / requirements ── */}
      <section aria-labelledby="it-req-title" style={{ padding: '76px 0', background: `linear-gradient(135deg, ${dark2} 0%, ${dark} 100%)` }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Head dk id="it-req-title" tag="Before You Book" title={requirementsSection.heading} subtitle={requirementsSection.intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
            {requirementsSection.items.map((item, i) => (
              <motion.div key={item} {...reveal(i)} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: '12px', padding: '13px 16px' }}>
                <FileCheck size={16} strokeWidth={2.2} color={accent} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.88rem', lineHeight: 1.65 }}>{item}</span>
              </motion.div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '12px', padding: '14px 16px', marginBottom: '16px' }}>
            <ShieldAlert size={18} strokeWidth={2} color="rgba(255,255,255,0.65)" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }} />
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem', lineHeight: 1.7, margin: 0 }}>{requirementsSection.disclaimer}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href={requirementsSection.officialLinkUrl} target="_blank" rel="noopener noreferrer nofollow" className="mk-focus" style={{ color: accent, fontWeight: 800, fontSize: '0.86rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {requirementsSection.officialLinkLabel} <Arrow size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Private car vs flying ── */}
      <section aria-labelledby="it-vs-title" style={{ padding: '76px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <Head id="it-vs-title" tag="An Honest Comparison" title={whyPrivateCarSection.heading} />
          {whyPrivateCarSection.paragraphs.map((p, i) => (
            <motion.p key={i} {...reveal(i)} style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: 1.9, marginBottom: '16px' }}>{p}</motion.p>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginTop: '20px', fontSize: '0.84rem', color: 'var(--muted-foreground)' }}>
            <Plane size={15} strokeWidth={2} /> <span>Flying is typically faster for this distance — we'll tell you that directly.</span>
          </div>
        </div>
      </section>

      {/* ── 6. Vehicle options ── */}
      <section aria-labelledby="it-vehicles-title" style={{ padding: '76px 0', background: dark }}>
        <div className="container">
          <Head dk id="it-vehicles-title" tag="Vehicle Options" title="Choose Your Vehicle" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '18px' }}>
            {vehicleOptions.map((v, i) => {
              const img = VEHICLE_IMAGES[v.name.en]
              return (
                <motion.div key={v.name.en} {...reveal(i)} style={{ background: `${accent}10`, border: `1px solid ${accent}40`, borderRadius: '16px', overflow: 'hidden' }}>
                  {img && (
                    <div style={{ height: '150px', overflow: 'hidden', background: '#111' }}>
                      <img src={img.src} alt={img.alt} width={400} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: img.position ?? 'center', display: 'block' }} />
                    </div>
                  )}
                  <div style={{ padding: '20px 20px 24px' }}>
                    <h3 style={{ color: 'white', fontSize: '1.05rem', fontWeight: 900, marginBottom: '4px' }}>{v.name.en}</h3>
                    <div style={{ color: accent, fontWeight: 800, fontSize: '0.8rem', marginBottom: '10px' }}>{v.seats}</div>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{v.note}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link href="/toyota-camry-taxi" className="mk-focus" style={{ color: accent, fontWeight: 800, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Sedan details <Arrow size={12} /></Link>
            <Link href="/hyundai-staria-taxi" className="mk-focus" style={{ color: accent, fontWeight: 800, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Hyundai Staria details <Arrow size={12} /></Link>
            <Link href="/gmc-yukon-hire" className="mk-focus" style={{ color: accent, fontWeight: 800, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>GMC Yukon details <Arrow size={12} /></Link>
          </div>
        </div>
      </section>

      {/* ── 7. How booking works ── */}
      <section aria-labelledby="it-booking-title" style={{ padding: '76px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <Head id="it-booking-title" tag="Booking" title="How Booking Works" />
          <div className="mk-grid-lg">
            {bookingSteps.map((s, i) => {
              const StepIcon = [Send, FileCheck, Car, Handshake][i] ?? Send
              return (
                <motion.div key={s.n} {...reveal(i)} style={{ background: 'var(--muted)', border: '1px solid var(--border)', borderRadius: '14px', padding: '22px 20px', textAlign: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${dark}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                    <StepIcon size={19} color={dark} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '6px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <FAQSection faqs={faqs} heading={{ en: `Frequently Asked Questions — ${destinationLabel}`, ar: `أسئلة شائعة — ${isAr ? destinationLabel : destinationLabel}` }} />

      {/* ── 9. Closing CTA ── */}
      <section aria-labelledby="it-final-title" style={{ padding: '60px 0', background: `linear-gradient(135deg, ${dark2} 0%, ${dark} 100%)`, textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 id="it-final-title" style={{ color: 'white', fontSize: 'clamp(1.3rem, 2.8vw, 1.7rem)', fontWeight: 900, marginBottom: '10px' }}>
            Planning a Trip to {destinationLabel}?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '22px' }}>
            Send your travel dates, passenger count and documentation questions on WhatsApp. We'll confirm feasibility and the current rate for your trip.
          </p>
          <div className="mk-hero-ctas" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl(waText)} target="_blank" rel="noopener noreferrer" className="btn-primary mk-btn mk-btn-wa mk-focus" style={{ padding: '14px 30px' }}>
              <MessageCircle size={17} strokeWidth={2.5} aria-hidden="true" /> Ask on WhatsApp
            </a>
            <a href="mailto:info@saudicabsgmc.com" className="btn-outline mk-btn mk-focus" style={{ padding: '14px 26px', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              <Mail size={17} strokeWidth={2.5} aria-hidden="true" /> <span dir="ltr">info@saudicabsgmc.com</span>
            </a>
          </div>
          <p style={{ marginTop: '20px' }}>
            <Link href={relatedLink.href} className="mk-focus" style={{ color: accent, fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {relatedLink.label} <Arrow size={13} />
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
