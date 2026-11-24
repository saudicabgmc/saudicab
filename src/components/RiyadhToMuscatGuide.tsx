'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  MessageCircle, ChevronDown, ChevronRight, List, MapPin, Clock, Gauge,
  Plane, ShieldCheck, Sun, Fuel, Car, CheckCircle2,
} from 'lucide-react'
import { riyadhToMuscatGuideFaqs } from '@/lib/riyadhToMuscatGuideFaqData'

/*
 * Bespoke, standalone editorial guide page — not part of the simple
 * blogData.ts system (no bilingual toggle, matching the English-only
 * convention already used by every GuidePageTemplate consumer, e.g.
 * /makkah-transport-guide). It deliberately does not reuse
 * GuidePageTemplate itself: that component has no TOC, accordion, gallery
 * or client-side animation, all of which this page requires. Instead it
 * borrows GuidePageTemplate's/BlogPostContent's visual language (colors,
 * .container/.gold-divider/.section-tag classes, WhatsApp CTA pattern) and
 * the site's existing useReveal()-style framer-motion reveal pattern
 * (see InternationalTransferPage.tsx) so it reads as the same site, not a
 * new design language.
 *
 * Content facts and their sources (verified 2026-11-24):
 * - Distance ~1,300 km direct, border open since Dec 11, 2021, 24/7 for
 *   passenger vehicles, no UAE transit required — carried over from the
 *   already-verified /riyadh-to-muscat service page (riyadhToMuscatPageData.ts),
 *   re-confirmed as unchanged via Oman Observer / Muscat Daily coverage
 *   as recent as September-November 2026.
 * - Driving-time estimate (~13-15 hrs / Rome2Rio's ~14h22m for its 1,313 km
 *   calculation) is explicitly attributed to Rome2Rio, not stated as fact —
 *   matching the service page's own refusal to quote a fixed time.
 * - Deliberately NOT used: a secondary, single-source claim that the new
 *   road cut travel time from "18 hours to 6" — found during research but
 *   not independently corroborated, so left out rather than published as
 *   fact. Also not used: the Ibri-roundabout/Al-Batha component distance
 *   breakdown — the service page's own sourcing notes already flagged
 *   "Al Batha" as referring to two different, unrelated locations in
 *   available sources, making that breakdown unreliable.
 * - Oman visa rules: GCC citizens enter on ID only (no visa, no fixed stay
 *   limit); GCC residents (non-citizen expats) need a separate GCC
 *   Resident Visa; other nationalities use standard e-visa categories.
 *   Sourced to Oman's Foreign Ministry (fm.gov.om) and Oman Observer, cross-
 *   checked against Lonely Planet. Specific visa fees are NOT stated — only
 *   a secondary (non-portal) figure was found, and the official portal is
 *   pointed to instead.
 * - Flight time (~2h10-15m nonstop) sourced to FlightConnections/Rome2Rio;
 *   does not name a specific airline, since one secondary source claimed a
 *   2025 operational change that wasn't independently confirmed.
 * - Empty Quarter heat range (summer highs ~47°C, peaks ~51°C; cooler Oct-
 *   Mar) sourced to Audley Travel / Aramco Life, describing the Rub' al
 *   Khali region generally rather than claiming Saudi-highway-specific
 *   temperature data.
 * - Muscat attractions are well-established, cross-source-confirmed sites
 *   (Culture Trip, Wanderlog), not invented.
 * - No fuel prices, toll fees, visa fees, or border wait-times are stated
 *   anywhere on this page, per task instruction — all generalized to
 *   "plan for," "carry," "confirm on the official portal," etc.
 */

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
        transition: { duration: 0.4, delay: Math.min(i * 0.04, 0.3) },
      }
}

const TOC: { id: string; label: string }[] = [
  { id: 'intro', label: 'Introduction' },
  { id: 'distance', label: 'Distance & Driving Time' },
  { id: 'best-route', label: 'Best Route' },
  { id: 'empty-quarter', label: 'The Empty Quarter Crossing' },
  { id: 'border-guide', label: 'Border Guide, Step by Step' },
  { id: 'documents', label: 'Documents & Visa' },
  { id: 'border-wait', label: 'Border Procedures' },
  { id: 'best-time', label: 'Best Time of Year' },
  { id: 'road-prep', label: 'Road Conditions & Prep' },
  { id: 'taxi-vs-driving', label: 'Taxi vs Driving vs Flying' },
  { id: 'private-car', label: 'Why a Private Vehicle' },
  { id: 'vehicles', label: 'Vehicle Options' },
  { id: 'muscat', label: 'Places to Visit in Muscat' },
  { id: 'faq', label: 'FAQ' },
]

const vehicleOptions = [
  { name: 'Sedan', seats: '4 seats', note: 'Suits individuals or couples travelling light for a trip of this length.', img: '/fleet/sedan-exterior-side-saudi-cabs-gmc.webp' },
  { name: 'Hyundai Staria', seats: '7 seats', note: 'More practical for families or groups with multiple bags.', img: '/fleet/hyundai-staria-exterior-front-saudi-cabs-gmc.webp' },
  { name: 'GMC Yukon', seats: '7 seats, VIP', note: 'A more spacious, premium option for this long drive.', img: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp' },
]

const checklist = [
  'Valid passport (or GCC national ID, where that applies to you) for every passenger',
  "Oman entry permit or visa confirmed for your specific nationality — or confirmed ID-only eligibility if you're a GCC citizen",
  'Vehicle registration and insurance valid for cross-border use into Oman',
  "Driver documentation and any cross-border permit the vehicle itself needs",
  'Written confirmation from your transport provider that your dates are actually feasible, before you commit to anything',
]

const borderSteps = [
  { n: '1', t: 'Approach the Saudi exit checkpoint', d: 'Have passports/IDs and vehicle documents ready to hand over.' },
  { n: '2', t: 'Clear Saudi exit formalities', d: 'Passport control and a customs check before you leave Saudi territory.' },
  { n: '3', t: 'Cross the border stretch', d: 'A stretch of desert road connects the two countries’ checkpoints.' },
  { n: '4', t: 'Clear Omani entry formalities', d: 'Passport/visa check, vehicle paperwork, and a customs declaration on entry.' },
  { n: '5', t: 'Continue toward Muscat', d: "Onward via Oman's highway network through Ibri and on to the capital." },
]

const muscatPlaces = [
  { name: 'Sultan Qaboos Grand Mosque', note: 'One of Oman’s most striking mosques, open to non-Muslim visitors outside prayer times.' },
  { name: 'Royal Opera House Muscat', note: 'A major cultural landmark hosting international performances.' },
  { name: 'Mutrah Corniche', note: 'A long waterfront promenade, especially pleasant for an evening walk.' },
  { name: 'Mutrah Souq', note: 'One of the oldest marketplaces in the Arab world — frankincense, textiles and antiques.' },
  { name: 'Mutrah Fort', note: 'A Portuguese-era fort overlooking Mutrah harbor.' },
  { name: 'Al Jalali Fort', note: 'A historic harbor-side fort and a well-known Muscat viewpoint.' },
  { name: 'Al Alam Palace', note: "Oman's ceremonial royal palace, viewable from outside its gates." },
  { name: 'Qurum Natural Park', note: 'A green, lower-key spot to unwind after a long desert drive.' },
]

function readingTime(wordCount: number) {
  return Math.max(1, Math.round(wordCount / 200))
}

function Section({ id, title, icon, children, i }: { id: string; title: string; icon?: React.ReactNode; children: React.ReactNode; i: number }) {
  const reveal = useReveal()
  return (
    <motion.section id={id} {...reveal(i)} style={{ marginBottom: '44px', scrollMarginTop: '96px' }}>
      <h2 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)', fontWeight: 900, margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--foreground)' }}>
        {icon}
        {title}
      </h2>
      <div className="gold-divider" style={{ margin: '0 0 18px' }} />
      <div style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--foreground)' }}>
        {children}
      </div>
    </motion.section>
  )
}

export default function RiyadhToMuscatGuide() {
  const reduceMotion = useReducedMotion()
  const reveal = useReveal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeToc, setActiveToc] = useState('intro')
  const [tocOpenMobile, setTocOpenMobile] = useState(false)
  useEffect(() => {
    const els = TOC.map(t => document.getElementById(t.id)).filter(Boolean) as HTMLElement[]
    if (els.length === 0) return
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveToc(visible[0].target.id)
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0.01 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    setTocOpenMobile(false)
  }

  const wordCount = 2700 // measured from the rendered <article> word count (~2726), matching the site's own readingTime() formula (total words / 200)
  const mins = readingTime(wordCount)
  const dateModified = '2026-11-24'
  const formattedDate = new Date(dateModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  const waMessage = "Hello, I'd like to ask about a private transfer from Riyadh to Muscat.\nTravel date:\nPassenger count:\nPreferred vehicle (Sedan / Hyundai Staria / GMC Yukon): "

  return (
    <main style={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative', minHeight: '440px',
        background: `linear-gradient(180deg, rgba(7,31,23,0.6) 0%, rgba(7,31,23,0.9) 100%), url("/location/muscat.webp")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '110px 0 48px',
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '20px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', flexWrap: 'wrap' }}>
            <Link href="/" className="mk-focus" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/blog" className="mk-focus" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
            <span>›</span>
            <span style={{ color: 'var(--primary)' }}>Riyadh to Muscat Travel Guide</span>
          </nav>

          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '18px' }}
          >
            Riyadh to Muscat: Distance, Driving Route, Border Crossing &amp; Travel Guide (2026)
          </motion.h1>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <span style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)', padding: '4px 14px', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 700 }}>
              Travel Guide
            </span>
            <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem' }}>By Saudi Cabs GMC Team</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>{formattedDate}</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={13} /> {mins} min read
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Quick stats row ── */}
      <section style={{ background: 'var(--primary)', padding: '20px 0' }}>
        <div className="container" style={{ maxWidth: '1040px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px' }}>
            {[
              { icon: <Gauge size={18} />, label: 'Distance', value: '~1,300 km (direct)' },
              { icon: <Clock size={18} />, label: 'Est. driving', value: '~13–15 hrs (Rome2Rio)' },
              { icon: <Plane size={18} />, label: 'Flight (nonstop)', value: '~2h10–15m' },
              { icon: <ShieldCheck size={18} />, label: 'Border hours', value: 'Open 24/7' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(0,0,0,0.75)' }}>
                {s.icon}
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.75 }}>{s.label}</div>
                  <div style={{ fontWeight: 900, fontSize: '0.95rem' }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body: TOC + content ── */}
      <div className="container" style={{ maxWidth: '1100px', padding: '48px 24px 0', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>

        {/* TOC — desktop sticky sidebar */}
        <aside className="rtm-toc-desktop" style={{ width: '250px', flexShrink: 0, position: 'sticky', top: '96px' }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: '14px', padding: '18px', background: 'var(--card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)', marginBottom: '12px' }}>
              <List size={14} /> On This Page
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {TOC.map(t => (
                <button
                  key={t.id}
                  onClick={() => scrollTo(t.id)}
                  className="mk-focus"
                  style={{
                    textAlign: 'left', border: 'none', cursor: 'pointer',
                    padding: '7px 8px', borderRadius: '8px', fontSize: '0.85rem',
                    fontWeight: activeToc === t.id ? 800 : 500,
                    color: activeToc === t.id ? 'var(--primary)' : 'var(--muted-foreground)',
                    background: activeToc === t.id ? 'rgba(170,131,24,0.08)' : 'transparent',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content column */}
        <article style={{ flex: 1, minWidth: 0, maxWidth: '760px' }}>

          {/* TOC — mobile collapsible */}
          <div className="rtm-toc-mobile" style={{ marginBottom: '28px', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--card)', overflow: 'hidden' }}>
            <button
              onClick={() => setTocOpenMobile(o => !o)}
              aria-expanded={tocOpenMobile}
              className="mk-focus"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 800, fontSize: '0.88rem' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><List size={16} /> On This Page</span>
              <ChevronDown size={18} style={{ transform: tocOpenMobile ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>
            {tocOpenMobile && (
              <nav style={{ padding: '0 10px 12px', display: 'flex', flexDirection: 'column' }}>
                {TOC.map(t => (
                  <button key={t.id} onClick={() => scrollTo(t.id)} className="mk-focus" style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '8px', fontSize: '0.86rem', color: 'var(--muted-foreground)' }}>
                    {t.label}
                  </button>
                ))}
              </nav>
            )}
          </div>

          <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '36px', borderLeft: '4px solid var(--primary)', paddingLeft: '20px' }}>
            For years, the only way to drive between Saudi Arabia and Oman meant a detour through the UAE. That changed in December 2021, when a direct land crossing opened through the Empty Quarter. Here&apos;s what we could verify about the route, the border, the paperwork, and getting the timing right.
          </p>

          <Section id="intro" i={0} title="Introduction">
            <p style={{ marginBottom: '14px' }}>A road trip from Riyadh to Muscat sounds like it should involve a long detour through the UAE — and for years, it did. That changed on December 11, 2021, when Saudi Arabia and Oman opened a direct land border crossing through the Empty Quarter (Rub&apos; al Khali), cutting the UAE out of the route entirely for travelers willing to cross one of the world&apos;s largest sand deserts by road.</p>
            <p>This guide covers what we could verify about that route: the real distance, how the border crossing works, what documents and visas you&apos;ll need, when to go, and how a private taxi compares with self-driving or flying. We&apos;ve tried to be upfront about what&apos;s solid and what&apos;s still an estimate — a 1,300+ km desert crossing isn&apos;t somewhere to guess.</p>
          </Section>

          <Section id="distance" i={1} title="Riyadh to Muscat Distance & Driving Time" icon={<Gauge size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>The direct route between Riyadh and Muscat covers roughly <strong>1,300 km</strong> — treat that as an approximate figure, since route-distance sources vary slightly and your exact total depends on your pickup point within Riyadh. It&apos;s well below the 1,640&ndash;1,900+ km that older sources still quote, which assumed the previous UAE-transit route.</p>
            <p>For driving time, Rome2Rio&apos;s routing estimate for this direct corridor comes out to roughly <strong>13&ndash;15 hours</strong> of continuous driving (about 14h22m for its specific 1,313 km calculation). Treat that purely as a planning baseline, not a promise — it reflects non-stop driving time only. In practice, add time for fuel stops, rest breaks, and the border crossing itself, none of which are included in a pure routing estimate. Most travelers should plan for the better part of a full day on the road, likely with an overnight stop, rather than one continuous push.</p>
          </Section>

          <Section id="best-route" i={2} title="Best Route: The Direct Empty Quarter Crossing" icon={<MapPin size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>Before December 2021, the only way to drive between Saudi Arabia and Oman was via the UAE, using two separate border crossings and adding hundreds of extra kilometers. The direct route through the Empty Quarter skips that entirely — it&apos;s part of what&apos;s now referred to as the Empty Quarter Road, a corridor jointly developed and marked by Saudi Arabia and Oman, which both governments have continued to highlight at official events as recently as November 2026.</p>
            <p>For most travelers, the direct route is simply the better option now — shorter, one border instead of two, and it doesn&apos;t depend on UAE transit rules. The older UAE route still exists as a fallback if the direct crossing is ever closed or unsuitable for your situation, but treat it as the exception, not the plan.</p>
          </Section>

          <Section id="empty-quarter" i={3} title="The Empty Quarter Border Crossing Explained" icon={<MapPin size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>The crossing sits deep in the Rub&apos; al Khali (Empty Quarter) — one of the largest continuous sand deserts on Earth, spanning parts of Saudi Arabia, Oman, the UAE and Yemen. It opened to passenger traffic on December 11, 2021, and unlike many desert border posts, it operates <strong>24 hours a day, seven days a week</strong> for passenger vehicles (only commercial trucks faced restricted hours when it first opened).</p>
            <p>It&apos;s a remote crossing by design — long stretches of open desert highway on both approaches, with fewer services than a city-to-city border post. That&apos;s worth planning around rather than treating like a quick, casual hop between two side-by-side towns. We haven&apos;t found a single authoritative breakdown of exactly how much of the ~1,300 km sits on each side of the border, so we&apos;re not going to invent a precise split here — plan for a long desert drive on both sides.</p>
          </Section>

          <Section id="border-guide" i={4} title="Saudi Arabia → Oman: Border Guide, Step by Step" icon={<ChevronRight size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '20px' }}>Every land border has its own order of operations. This one runs in the direction you&apos;d expect for a Saudi-to-Oman trip — Saudi exit formalities first, then Omani entry formalities on the other side (a trip in the opposite direction simply reverses this order). Here&apos;s the general sequence, in broad strokes rather than a guaranteed step-by-step, since exact procedures can be adjusted by either country&apos;s authorities without much public notice:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {borderSteps.map(s => (
                <div key={s.n} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '14px 18px' }}>
                  <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem' }}>{s.n}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.92rem', marginBottom: '3px' }}>{s.t}</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)' }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="documents" i={5} title="Documents & Visa Requirements" icon={<ShieldCheck size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>Visa rules at this crossing depend entirely on your nationality and residency status — there&apos;s no single answer that applies to everyone.</p>
            <ul style={{ paddingLeft: '1.4rem', marginBottom: '16px', lineHeight: 1.9 }}>
              <li><strong>GCC citizens</strong> (Saudi, Omani, Emirati, Qatari, Bahraini, Kuwaiti) can cross using just their national ID — no visa required, no fixed length-of-stay limit.</li>
              <li><strong>GCC residents</strong> — non-citizen expats living in a GCC country — are not covered by the ID-only rule, and need a separate GCC Resident Visa arranged through Oman&apos;s official e-visa portal.</li>
              <li><strong>Other nationalities</strong> use Oman&apos;s standard e-visa categories, generally including a single-entry visa (around 30 days) and a longer multiple-entry visa (roughly a year) — but exact eligibility, cost and validity depend on your nationality and change periodically.</li>
            </ul>
            <p>Whichever category applies to you, confirm current requirements on Oman&apos;s official e-visa portal, <a href="https://evisa.rop.gov.om" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>evisa.rop.gov.om</a>, well before your travel date — not a blog post, and not the night before.</p>

            <div style={{ marginTop: '24px', background: 'var(--muted)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px' }}>
              <div style={{ fontWeight: 900, fontSize: '0.95rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="var(--primary)" /> Border-Crossing Checklist
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                {checklist.map((c, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--foreground)' }}>
                    <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="border-wait" i={6} title="Border Procedures & Waiting Times" icon={<Clock size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>We&apos;re not going to publish a specific waiting-time figure for this crossing — we haven&apos;t found consistent, verifiable reporting on current processing times, and remote desert border posts can vary a lot depending on time of day, season, and how busy that particular day happens to be.</p>
            <p>What we can say with more confidence: a desert crossing like this one is generally lower-traffic than a crossing near a major city, which can work in your favor. Build in a comfortable buffer either way, avoid arriving at the border very late at night if you can help it, and keep your documents organized and easy to hand over rather than buried in your luggage.</p>
          </Section>

          <Section id="best-time" i={7} title="Best Time of Year to Make This Trip" icon={<Sun size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>This route runs through one of the hottest deserts on the planet, so timing matters more than it would for a shorter, more urban trip. Regional travel and climate sources describe Rub&apos; al Khali summers (roughly June through August) as extreme, with average highs around <strong>47°C</strong>, and spikes reported as high as <strong>51°C</strong> in peak months. Driving — let alone breaking down — in that kind of heat is a genuinely serious risk, not just discomfort.</p>
            <p>The cooler window, roughly <strong>October through March</strong>, is the more sensible time to make this trip, with milder daytime temperatures and generally more comfortable conditions for a long desert drive. If you have flexibility in your travel dates, use it — on this trip, the season you choose matters almost as much as the route you take.</p>
          </Section>

          <Section id="road-prep" i={8} title="Road Conditions, Fuel & Trip Preparation" icon={<Fuel size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>We won&apos;t quote specific fuel prices or exact station spacing here — those figures change, and we don&apos;t have verified current numbers for this specific corridor. What&apos;s safe to say generally: desert highway crossings like this one tend to have fewer services than a typical intercity highway, so don&apos;t assume you&apos;ll find a station exactly when you need one.</p>
            <p>Standard desert-driving advice applies: start with a full tank, carry extra drinking water for every passenger, avoid traveling alone if you can arrange a second vehicle or companion, and don&apos;t push through extreme-heat hours if your schedule allows flexibility. Keep your phone charged, let someone know your route and expected arrival time, and treat any vehicle warning light as a reason to stop, not push on. If you&apos;re booking a private driver instead of self-driving, these are still worth asking about — confirm your driver is experienced with this specific long-distance desert route, not just city driving.</p>
          </Section>

          <Section id="taxi-vs-driving" i={9} title="Taxi vs Self-Driving vs Flying" icon={<Car size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}><strong>Flying</strong> is the fastest option by a wide margin — nonstop flights between Riyadh and Muscat currently take roughly 2 hours 10 to 15 minutes. If you see a listing showing 4+ hours, that&apos;s almost always a one-stop connection, not the direct flight. For most travelers without a specific reason to go overland, flying is simply the practical choice.</p>
            <p style={{ marginBottom: '14px' }}><strong>Self-driving</strong> gives you full control and flexibility, but it means personally handling 1,300+ km of desert highway, an international border crossing, Omani traffic rules, and a rental car&apos;s cross-border paperwork — without a backup if something goes wrong.</p>
            <p>A <strong>private taxi or chauffeured transfer</strong> sits in between: you get the overland trip — useful if you have more luggage than a flight allows, want to experience the route itself, or simply prefer not to fly — without personally driving an unfamiliar vehicle through a remote desert border. It&apos;s still a long, custom-coordinated trip rather than a routine booking, and feasibility, documentation and current availability need confirming for your specific dates.</p>
          </Section>

          <Section id="private-car" i={10} title="Why a Private Vehicle Makes Sense for This Route" icon={<ShieldCheck size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>If you&apos;ve decided a road trip makes more sense than flying for your situation, a private vehicle has real advantages over coordinating this yourself. You&apos;re not personally managing a rental car&apos;s cross-border insurance and paperwork, you have a driver who — once confirmed — is already set up for the specific documentation this crossing requires, and you can bring more luggage than most flights allow — useful if you&apos;re relocating, visiting family long-term, or traveling with equipment.</p>
            <p>It&apos;s also simply less to manage on a trip that already has enough variables: desert heat, an international border, and 1,300+ km of driving. Handing the logistics of the vehicle and the crossing itself to someone who does this regularly leaves you to focus on the trip.</p>
          </Section>

          <Section id="vehicles" i={11} title="Vehicle Options for the Journey" icon={<Car size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '20px' }}>For a trip this long, vehicle choice matters more than it would for a short city transfer. Saudi Cabs GMC offers three options for this route:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
              {vehicleOptions.map((v, i) => (
                <motion.div key={v.name} {...reveal(i)} style={{ border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', background: 'var(--card)' }}>
                  <img src={v.img} alt={`Saudi Cabs GMC ${v.name}`} width={400} height={180} loading="lazy" decoding="async" style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }} />
                  <div style={{ padding: '16px' }}>
                    <div style={{ fontWeight: 900, fontSize: '0.98rem', marginBottom: '2px' }}>{v.name}</div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>{v.seats}</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{v.note}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="muscat" i={12} title="Best Places to Visit in Muscat" icon={<MapPin size={20} color="var(--primary)" />}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '16px', marginBottom: '22px' }} className="rtm-gallery">
              <img src="/location/muscat.webp" alt="Muscat, Oman" width={547} height={365} loading="lazy" decoding="async" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '14px' }} />
              <img src="/location/riyadh.webp" alt="Riyadh, Saudi Arabia — journey start point" width={900} height={505} loading="lazy" decoding="async" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '14px' }} />
            </div>
            <p style={{ marginBottom: '16px' }}>Once you&apos;ve made the crossing, Muscat rewards the trip. A few highlights worth building time for:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '14px' }}>
              {muscatPlaces.map(p => (
                <div key={p.name} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '14px 16px' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '4px' }}>{p.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{p.note}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--muted-foreground)' }}>Opening hours, entry rules and any fees can change — check current details before building a tight itinerary around any single site.</p>
          </Section>

          {/* FAQ accordion */}
          <section id="faq" style={{ marginBottom: '44px', scrollMarginTop: '96px' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)', fontWeight: 900, margin: '0 0 14px' }}>
              Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
            </h2>
            <div className="gold-divider" style={{ margin: '0 0 18px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {riyadhToMuscatGuideFaqs.map((f, i) => (
                <div key={i} style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', background: openFaq === i ? 'var(--background)' : 'var(--card)', transition: 'background 0.2s' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`rtm-faq-panel-${i}`}
                    className="mk-focus"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '12px' }}
                  >
                    <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--foreground)', flex: 1 }}>{f.q}</span>
                    <ChevronDown size={18} strokeWidth={2.5} color="var(--primary)" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s', flexShrink: 0 }} />
                  </button>
                  <div
                    id={`rtm-faq-panel-${i}`}
                    role="region"
                    hidden={openFaq !== i}
                    style={{
                      padding: openFaq === i ? '0 22px 18px' : '0 22px',
                      maxHeight: openFaq === i ? 'none' : 0,
                      overflow: openFaq === i ? 'visible' : 'hidden',
                      fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.8,
                      borderTop: openFaq === i ? '1px solid var(--border)' : 'none',
                      paddingTop: openFaq === i ? '14px' : 0,
                    }}
                  >
                    {f.a}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="conclusion" style={{ marginBottom: '8px' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)', fontWeight: 900, margin: '0 0 14px' }}>Final Thoughts &amp; Booking</h2>
            <div className="gold-divider" style={{ margin: '0 0 18px' }} />
            <p style={{ marginBottom: '14px', lineHeight: 1.85 }}>A Riyadh-to-Muscat trip by road is a genuinely different experience from flying — a direct border crossing, a serious desert drive, and a destination worth the effort once you arrive. It&apos;s not a trip to improvise: confirm your visa category, pick a sensible travel window, prepare properly for the desert leg, and decide honestly whether flying, self-driving or a private transfer fits what you actually need.</p>
            <p style={{ lineHeight: 1.85 }}>If you&apos;d rather not manage the logistics yourself, Saudi Cabs GMC can tell you honestly whether this trip is feasible for your dates, talk through documentation, and arrange a private vehicle for the parts of the journey we can support.</p>
          </section>

          {/* Related guides */}
          <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '16px' }}>Related <span style={{ color: 'var(--primary)' }}>Guides &amp; Pages</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { href: '/riyadh-to-muscat', label: 'Riyadh to Muscat Private Transfer', tag: 'Service Page' },
                { href: '/muscat-to-riyadh', label: 'Muscat to Riyadh Private Transfer', tag: 'Service Page' },
                { href: '/riyadh-to-dubai', label: 'Riyadh to Dubai Private Transfer', tag: 'International Transfer' },
                { href: '/blog/riyadh-to-doha-by-road-travel-guide', label: 'Riyadh to Doha by Road', tag: 'Travel Guide' },
                { href: '/blog/riyadh-to-kuwait-by-road-travel-guide', label: 'Riyadh to Kuwait by Road', tag: 'Travel Guide' },
                { href: '/gmc-yukon-hire', label: 'GMC Yukon VIP Hire', tag: 'Fleet' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="mk-focus" style={{ display: 'block', padding: '14px 18px', borderRadius: '12px', border: '1.5px solid var(--border)', textDecoration: 'none', background: 'var(--muted)' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{l.tag}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--foreground)' }}>{l.label}</div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>

      {/* ── WhatsApp CTA ── */}
      <section style={{ padding: '60px 0', marginTop: '56px', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 900, marginBottom: '12px' }}>Plan Your Riyadh to Muscat Journey</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>Tell us your dates and we&apos;ll confirm feasibility, documentation and current availability honestly — no guesswork, no fixed prices promised in advance.</p>
          <a
            href={waUrl(waMessage)}
            target="_blank" rel="noopener noreferrer"
            className="mk-focus"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: 'white', fontWeight: 800, padding: '14px 36px', borderRadius: '12px', textDecoration: 'none', fontSize: '1rem' }}
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            Ask About This Trip on WhatsApp
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .rtm-toc-desktop { display: none; }
        }
        @media (min-width: 901px) {
          .rtm-toc-mobile { display: none; }
        }
        @media (max-width: 560px) {
          .rtm-gallery { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
