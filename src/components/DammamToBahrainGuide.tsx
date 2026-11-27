'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  MessageCircle, ChevronDown, List, MapPin, Clock, Gauge,
  ShieldCheck, Car, CheckCircle2, Users, FileText, Landmark,
} from 'lucide-react'
import { dammamToBahrainGuideFaqs } from '@/lib/dammamToBahrainGuideFaqData'

/*
 * Bespoke, standalone editorial guide page, built on the same architecture
 * and visual language as RiyadhToMuscatGuide.tsx (hero w/ breadcrumb +
 * reading time, sticky/collapsible TOC with scrollspy, framer-motion
 * scroll-reveals, accessible FAQ accordion mirroring FAQSection.tsx,
 * vehicle comparison cards, WhatsApp CTA). English-only, matching the same
 * convention established for that guide and every GuidePageTemplate page.
 *
 * Facts and sourcing (verified/approved 2026-11-27):
 * - Distance ~50-75 km, causeway 25 km, no fixed journey time — carried
 *   over unchanged from the already-verified /dammam-to-bahrain and
 *   /bahrain-to-dammam service pages (dammamToBahrainPageData.ts,
 *   bahrainToDammamPageData.ts), not re-derived.
 * - Toll: SAR 35 standard car/motorcycle rate effective Feb 18, 2026, per
 *   Saudi Gazette's report of the King Fahd Causeway Authority's
 *   announcement (previous rate SAR 25; first increase since 1986) —
 *   included briefly per explicit approval, hedged as subject to change
 *   with a "confirm via KFCA/JESR" instruction, not stated as a current
 *   guarantee. Kept to one short mention, not expanded into a full toll/
 *   border-process guide, per instruction to keep this service-focused.
 * - Bahrain MTT licensed-taxi rule (effective Sept 6, 2026, vehicles no
 *   older than 5 years) carried over from bahrainToDammamPageData.ts's
 *   verified primary source (mtt.gov.bh). Explicitly NOT claimed that our
 *   own fleet automatically qualifies — vehicle/driver/documentation are
 *   confirmed per booking, matching the approved content decision.
 * - "Bahrain-based partner" wording used throughout (not "authorized
 *   Bahrain-based operator/partner"), matching the precision correction
 *   already applied to the service pages.
 * - No service prices or guaranteed journey times are stated anywhere.
 * - Visa/entry requirements are presented as nationality-dependent, never
 *   guaranteed, pointing to Bahrain's official government portal
 *   (bahrain.bh) for current rules.
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
  { id: 'route-overview', label: 'The Dammam to Manama Route' },
  { id: 'causeway', label: 'The King Fahd Causeway' },
  { id: 'distance-time', label: 'Distance & Journey Time' },
  { id: 'transfer-vs-driving', label: 'Private Transfer vs Driving' },
  { id: 'vehicles', label: 'Available Vehicles' },
  { id: 'family-travel', label: 'Family & Group Travel' },
  { id: 'documents-visa', label: 'Documents & Visa' },
  { id: 'border-considerations', label: 'Before You Cross' },
  { id: 'travel-tips', label: 'Travel Planning Tips' },
  { id: 'why-us', label: 'Why Saudi Cabs GMC' },
  { id: 'request-quote', label: 'Request a Quotation' },
  { id: 'faq', label: 'FAQ' },
]

const vehicleOptions = [
  { name: 'Sedan', seats: '4 seats', note: 'Suits individuals, couples or a small family travelling light.', img: '/fleet/sedan-exterior-side-saudi-cabs-gmc.webp' },
  { name: 'Hyundai Staria', seats: '7 seats', note: 'More practical for families or groups with multiple bags.', img: '/fleet/hyundai-staria-exterior-front-saudi-cabs-gmc.webp' },
  { name: 'GMC Yukon', seats: '7 seats, VIP', note: 'A more spacious, premium option for the trip.', img: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp' },
]

const borderChecklist = [
  'Confirm your passport/ID and any required Bahrain visa before travel day, not at the causeway.',
  'Confirm with us that a vehicle and driver suitable for this specific crossing are available for your date — not assumed from a previous booking.',
  'Keep vehicle documentation and insurance for causeway/Bahrain use ready to hand over, along with the current toll amount.',
  'Build in extra time for queue variability, especially on weekends and public holidays.',
  'Keep realistic expectations: border processing, not driving time, is usually the least predictable part of this trip.',
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

export default function DammamToBahrainGuide() {
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

  const wordCount = 1950 // measured from the rendered <article> word count, matching the site's readingTime() formula (total words / 200)
  const mins = readingTime(wordCount)
  const dateModified = '2026-11-27'
  const formattedDate = new Date(dateModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  const waMessage = "Hello, I'd like to ask about a private transfer from Dammam to Bahrain.\nPickup point (Dammam / Khobar):\nTravel date:\nPassenger count:\nPreferred vehicle (Sedan / Hyundai Staria / GMC Yukon): "

  return (
    <main style={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative', minHeight: '440px',
        background: `linear-gradient(180deg, rgba(7,31,23,0.6) 0%, rgba(7,31,23,0.9) 100%), url("/location/manama.webp")`,
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
            <span style={{ color: 'var(--primary)' }}>Dammam to Bahrain Travel Guide</span>
          </nav>

          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '18px' }}
          >
            Dammam to Bahrain: Complete Guide to Private Transfers &amp; the King Fahd Causeway
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
              { icon: <Gauge size={18} />, label: 'Distance', value: '~50–75 km' },
              { icon: <Landmark size={18} />, label: 'Crossing', value: 'King Fahd Causeway (25 km)' },
              { icon: <Clock size={18} />, label: 'Journey time', value: 'Not fixed — queues vary' },
              { icon: <ShieldCheck size={18} />, label: 'Vehicles', value: 'Sedan / Staria / GMC Yukon' },
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
        <aside className="dtb-toc-desktop" style={{ width: '250px', flexShrink: 0, position: 'sticky', top: '96px' }}>
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
          <div className="dtb-toc-mobile" style={{ marginBottom: '28px', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--card)', overflow: 'hidden' }}>
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
            Dammam to Bahrain is short by international-trip standards, but it&apos;s still a cross-border journey over the King Fahd Causeway, with its own paperwork, timing and vehicle rules. Here&apos;s what to know before you go.
          </p>

          <Section id="intro" i={0} title="Introduction">
            <p style={{ marginBottom: '14px' }}>Traveling from Dammam to Bahrain is short by international standards, but it&apos;s still a cross-border trip — the King Fahd Causeway connects Saudi Arabia&apos;s Eastern Province directly to Bahrain, and it comes with its own paperwork, timing considerations and vehicle rules.</p>
            <p>This guide covers what matters if you&apos;re planning this route: the real distance, how the causeway crossing works, documents to prepare, and how a private transfer compares with driving yourself. We&apos;ve kept this focused on the Dammam-to-Bahrain trip itself, not a full breakdown of every toll and border procedure — where something depends on your specific situation, we say so rather than guessing.</p>
          </Section>

          <Section id="route-overview" i={1} title="Understanding the Dammam to Manama Route" icon={<MapPin size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>Dammam and Khobar, in Saudi Arabia&apos;s Eastern Province, sit close to Bahrain&apos;s capital, Manama — close enough that this is the shortest international route we arrange, nothing like the multi-hour drives from Riyadh to other GCC capitals.</p>
            <p>Khobar is the closer of the two starting points, sitting right at the approach to the causeway; a trip starting in Dammam itself adds a short additional stretch before you reach it. Either way, most of the distance is the crossing itself plus a brief approach drive on each side, rather than a long highway journey beforehand.</p>
          </Section>

          <Section id="causeway" i={2} title="The King Fahd Causeway: What Travellers Should Know" icon={<Landmark size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>The King Fahd Causeway is the 25 km toll bridge that&apos;s the only road link between Saudi Arabia and Bahrain, carrying both private vehicles and commercial traffic. Crossing involves exit formalities on the Saudi side and entry formalities on the Bahraini side (the order reverses for a Bahrain-to-Dammam trip), plus a toll.</p>
            <p style={{ marginBottom: '14px' }}>As of February 18, 2026, Saudi Gazette reported that the King Fahd Causeway Authority raised the standard toll for cars and motorcycles to <strong>SAR 35</strong> — the first increase since 1986, up from SAR 25. Treat this as a reference point rather than a guarantee: toll rates can change, so confirm the current rate directly with the King Fahd Causeway Authority (KFCA) or Joint Executive Authority (JESR) shortly before you travel, rather than relying on any single published figure, including this one.</p>
            <p>There&apos;s also a vehicle-licensing rule worth knowing about: Bahrain&apos;s Ministry of Transportation and Telecommunications has confirmed that, effective September 6, 2026, only officially licensed taxis meeting approved technical requirements and no older than five years may carry passengers across the causeway. We don&apos;t assume our own fleet automatically meets this by default — vehicle and driver arrangements for the Bahrain side are coordinated through our Bahrain-based partner, and the specific vehicle, driver and documentation for your booking are confirmed with you directly, not assumed in advance.</p>
          </Section>

          <Section id="distance-time" i={3} title="Approximate Route Distance & Journey Time" icon={<Gauge size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>The total road distance for this trip is roughly <strong>50–75 km</strong>, depending on your exact pickup point — Khobar is closer to the causeway, Dammam a little further — and your destination within Manama. The causeway itself is a well-documented 25 km, so it makes up a significant part of either figure, not the whole trip, since there&apos;s also a short approach drive on each side.</p>
            <p>We don&apos;t quote a fixed total journey time, because the time spent at the causeway&apos;s immigration and customs checkpoints varies by day — weekends and public holidays are known for longer queues, and that&apos;s outside our control. Tell us your travel date and we can give you a more realistic sense of timing based on current conditions, rather than a number that may not hold up on the day.</p>
          </Section>

          <Section id="transfer-vs-driving" i={4} title="Private Transfer vs Driving Yourself" icon={<Car size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>Self-driving this route means handling the causeway&apos;s exit and entry formalities yourself, confirming your own vehicle meets whatever cross-border and licensing requirements currently apply, and navigating Manama once you arrive — manageable for an experienced driver, but it adds real planning on top of a trip that already involves an international border.</p>
            <p>A private transfer removes most of that from your plate: a single vehicle for your whole group, a driver whose vehicle and documentation have already been confirmed for this specific crossing, and a pickup time built around your plans rather than a fixed schedule. For a route this short, the time saved isn&apos;t enormous, but the reduction in logistics and uncertainty is the main reason travelers choose it over self-driving.</p>
          </Section>

          <Section id="vehicles" i={5} title="Available Vehicles" icon={<Car size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '20px' }}>We offer three vehicle options for this route, depending on your group size and luggage:</p>
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

          <Section id="family-travel" i={6} title="Family Travel & Group Transportation" icon={<Users size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>For families or small groups, the Hyundai Staria or GMC Yukon are generally the more practical choice — both seat up to 7, which keeps everyone together in one vehicle rather than splitting across cars at the causeway. That matters more on an international crossing than a short city trip, since coordinating two vehicles through immigration and customs checkpoints separately adds its own complications.</p>
            <p>Whichever vehicle you choose, let us know your group size, luggage and whether you&apos;re traveling with children when you reach out — it helps us recommend the right option and flag anything worth preparing for in advance.</p>
          </Section>

          <Section id="documents-visa" i={7} title="Documents, Visa & Border-Entry Requirements" icon={<FileText size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '14px' }}>Entry requirements for Bahrain depend on your nationality and individual circumstances — there&apos;s no single answer that applies to every traveler, so don&apos;t assume your situation matches someone else&apos;s. At minimum, every passenger needs a valid passport (or, for GCC nationals, the ID accepted at the causeway), and you should confirm directly whether you need a visa for Bahrain before you travel — this isn&apos;t something we can determine or guarantee on your behalf.</p>
            <p>For current, authoritative guidance, check Bahrain&apos;s official government portal, <a href="https://www.bahrain.bh/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>bahrain.bh</a>, well before your trip. We&apos;re not a travel agency and don&apos;t handle visa applications or guarantee entry — that decision rests with Bahraini immigration authorities.</p>
          </Section>

          <Section id="border-considerations" i={8} title="Things to Consider Before Crossing the Border" icon={<ShieldCheck size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '16px' }}>A short checklist worth going through before your travel date:</p>
            <div style={{ background: 'var(--muted)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                {borderChecklist.map((c, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--foreground)' }}>
                    <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="travel-tips" i={9} title="Best Travel Planning Tips" icon={<Clock size={20} color="var(--primary)" />}>
            <p>A few practical habits make this trip smoother: book in advance so we can confirm vehicle and documentation requirements rather than scrambling on short notice; travel outside weekend peak times if your schedule allows, since causeway queues are generally calmer midweek; keep digital and physical copies of your passport and any visa confirmation; and reconfirm your plans with us close to your travel date, since causeway rules and toll rates can change with little advance notice. None of this guarantees a specific crossing time, but it reduces the chances of an avoidable delay.</p>
          </Section>

          <Section id="why-us" i={10} title="Why Choose Saudi Cabs GMC" icon={<ShieldCheck size={20} color="var(--primary)" />}>
            <p>We coordinate the Bahrain-side pickup and the causeway crossing itself through our Bahrain-based partner, rather than assuming our Saudi-registered fleet can operate independently as a licensed taxi within Bahrain — and we confirm the specific vehicle, driver and documentation for your booking directly with you, rather than promising it in advance. You get one vehicle for your whole group, a choice of three vehicle classes, and a team that&apos;s upfront about what we can and can&apos;t guarantee on an international route like this one.</p>
          </Section>

          <Section id="request-quote" i={11} title="How to Request a Private Transfer Quotation" icon={<MessageCircle size={20} color="var(--primary)" />}>
            <p style={{ marginBottom: '20px' }}>Since this is a custom international trip without a fixed listed fare, pricing and final arrangements are confirmed directly with you. To request a quotation: message us on WhatsApp with your travel date, pickup point (Dammam or Khobar), passenger count and preferred vehicle; we&apos;ll confirm feasibility, documentation and current availability; and once everything&apos;s confirmed, we&apos;ll give you a current rate for your specific trip — no guesswork, no guaranteed price without that conversation.</p>
            <div style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', borderRadius: '16px', padding: '28px 26px', textAlign: 'center' }}>
              <div style={{ color: 'white', fontWeight: 800, fontSize: '1.05rem', marginBottom: '16px', lineHeight: 1.5 }}>
                Planning Your Dammam to Bahrain Journey? Request Your Private Transfer Today.
              </div>
              <a
                href={waUrl(waMessage)}
                target="_blank" rel="noopener noreferrer"
                className="mk-focus"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: 'white', fontWeight: 800, padding: '13px 30px', borderRadius: '12px', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <MessageCircle size={17} strokeWidth={2.5} />
                Request Your Transfer on WhatsApp
              </a>
            </div>
          </Section>

          {/* FAQ accordion */}
          <section id="faq" style={{ marginBottom: '44px', scrollMarginTop: '96px' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)', fontWeight: 900, margin: '0 0 14px' }}>
              Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
            </h2>
            <div className="gold-divider" style={{ margin: '0 0 18px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {dammamToBahrainGuideFaqs.map((f, i) => (
                <div key={i} style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', background: openFaq === i ? 'var(--background)' : 'var(--card)', transition: 'background 0.2s' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`dtb-faq-panel-${i}`}
                    className="mk-focus"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '12px' }}
                  >
                    <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--foreground)', flex: 1 }}>{f.q}</span>
                    <ChevronDown size={18} strokeWidth={2.5} color="var(--primary)" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s', flexShrink: 0 }} />
                  </button>
                  <div
                    id={`dtb-faq-panel-${i}`}
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

          {/* Related guides */}
          <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '16px' }}>Related <span style={{ color: 'var(--primary)' }}>Guides &amp; Pages</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { href: '/dammam-to-bahrain', label: 'Dammam to Bahrain Private Transfer', tag: 'Service Page' },
                { href: '/bahrain-to-dammam', label: 'Bahrain to Dammam Private Transfer', tag: 'Service Page' },
                { href: '/dammam-to-kuwait', label: 'Dammam to Kuwait Private Transfer', tag: 'International Transfer' },
                { href: '/dammam-taxi-service', label: 'Dammam Taxi Service Hub', tag: 'City Page' },
                { href: '/blog/riyadh-to-muscat-travel-guide', label: 'Riyadh to Muscat Travel Guide', tag: 'Travel Guide' },
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
          <h2 style={{ fontSize: '1.7rem', fontWeight: 900, marginBottom: '12px' }}>Planning Your Dammam to Bahrain Journey?</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>Request your private transfer today — we&apos;ll confirm feasibility, documentation and current availability honestly, with no guaranteed price until we've talked through your trip.</p>
          <a
            href={waUrl(waMessage)}
            target="_blank" rel="noopener noreferrer"
            className="mk-focus"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: 'white', fontWeight: 800, padding: '14px 36px', borderRadius: '12px', textDecoration: 'none', fontSize: '1rem' }}
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            Request Your Transfer on WhatsApp
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .dtb-toc-desktop { display: none; }
        }
        @media (min-width: 901px) {
          .dtb-toc-mobile { display: none; }
        }
      `}</style>
    </main>
  )
}
