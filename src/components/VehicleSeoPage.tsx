import Link from 'next/link'
import type { VehicleSeoPageData } from '@/lib/vehicleSeoData'

const WA = '923097811785'

interface Props { data: VehicleSeoPageData }

export default function VehicleSeoPage({ data }: Props) {
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(data.waMessage)}`

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>

      {/* ── Breadcrumb ────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" style={{ backgroundColor: 'var(--muted)', borderBottom: '1px solid var(--border)', padding: '10px 0', fontSize: '0.8rem' }}>
        <div className="container" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          {data.breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {i < data.breadcrumbs.length - 1
                ? <Link href={crumb.href} style={{ color: 'var(--primary)', fontWeight: '600' }}>{crumb.name}</Link>
                : <span style={{ color: 'var(--muted-foreground)' }}>{crumb.name}</span>
              }
              {i < data.breadcrumbs.length - 1 && <span style={{ color: 'var(--muted-foreground)' }}>›</span>}
            </span>
          ))}
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '52px 0 44px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)', marginBottom: '16px', display: 'inline-block' }}>
            {data.badge}
          </span>
          <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', fontWeight: '900', margin: '0 0 14px', lineHeight: 1.2 }}>
            {data.h1}
          </h1>
          <div className="gold-divider" style={{ margin: '0 0 18px' }} />
          <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1rem', maxWidth: '640px', margin: '0 0 28px' }}>
            {data.subtitle}
          </p>
          <a
            href={waUrl}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Book via WhatsApp
          </a>
        </div>
      </section>

      {/* ── Quick Answer ──────────────────────────────────── */}
      <section style={{ background: 'var(--primary)', padding: '0' }}>
        <div className="container" style={{ maxWidth: '860px', padding: '22px 24px' }}>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>⚡</span>
            <div>
              <div style={{ fontWeight: '900', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(0,0,0,0.55)', marginBottom: '5px' }}>Quick Answer</div>
              <p data-speakable style={{ fontWeight: '700', fontSize: '0.97rem', color: 'var(--foreground)', lineHeight: 1.65, margin: 0 }}>{data.quickAnswer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Facts Grid ────────────────────────────────── */}
      <section style={{ padding: '52px 0 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '14px', marginBottom: '40px' }}>
            {data.keyFacts.map(f => (
              <div key={f.label} style={{ background: 'var(--muted)', borderRadius: '12px', padding: '16px 14px', textAlign: 'center', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{f.icon}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted-foreground)', marginBottom: '4px' }}>{f.label}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--foreground)' }}>{f.value}</div>
              </div>
            ))}
          </div>

          {/* Unavailable notice */}
          {data.vehicleAvailable === false && (
            <div style={{ background: 'rgba(212,175,55,0.1)', border: '1.5px solid rgba(212,175,55,0.5)', borderRadius: '12px', padding: '18px 20px', marginBottom: '36px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>📞</span>
              <div>
                <div style={{ fontWeight: '800', marginBottom: '4px' }}>Availability on Request</div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
                  The {data.vehicleName} is available for group bookings. Please contact us via WhatsApp at +92 309 7811785 to confirm availability, pricing, and scheduling for your date.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Why Saudi Cabs GMC ────────────────────────────── */}
      <section style={{ padding: '40px 0 52px', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '900', marginBottom: '20px' }}>
            Why Book with <span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span>?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
            {[
              { icon: '💰', title: 'Fixed Price',         desc: 'SAR price agreed before departure — no meter, no surge, no surprises.' },
              { icon: '⏰', title: '24/7 Service',         desc: 'Available day and night, 365 days a year including Hajj and Umrah seasons.' },
              { icon: '🪧', title: 'Name-Board Pickup',    desc: 'Airport pickups include a personalised name-board at the arrivals hall.' },
              { icon: '✈️', title: 'Flight Tracking',      desc: 'We monitor your flight in real time — delays adjusted automatically.' },
              { icon: '🗣️', title: 'Bilingual Drivers',    desc: 'All drivers communicate in both English and Arabic.' },
              { icon: '🛡️', title: 'Certified Chauffeurs', desc: 'Professional, background-checked, and fully insured drivers.' },
            ].map(f => (
              <div key={f.title} style={{ background: 'var(--muted)', borderRadius: '12px', padding: '18px 16px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontWeight: '800', fontSize: '0.9rem', marginBottom: '6px' }}>{f.title}</div>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WhatsApp Booking CTA ──────────────────────────── */}
      <section style={{ padding: '48px 0', background: 'linear-gradient(135deg, #0B3D2E, #071f17)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📲</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '10px' }}>Book Your {data.serviceLabel} Now</h2>
          <p style={{ opacity: 0.82, lineHeight: 1.7, marginBottom: '24px', fontSize: '0.95rem' }}>
            WhatsApp us with your pickup location, destination, date, and number of passengers. Receive a fixed SAR price within minutes.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1rem', padding: '14px 32px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp +92 309 7811785
          </a>
          <div style={{ marginTop: '14px', opacity: 0.65, fontSize: '0.82rem' }}>
            Or call: <a href="tel:+923097811785" style={{ color: 'inherit', fontWeight: '700' }}>+92 309 7811785</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ marginBottom: '32px' }}>
            <span className="section-tag">FAQ</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>Frequently Asked Questions</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {data.faqs.map((faq, i) => (
              <div key={i} style={{ background: 'var(--muted)', borderRadius: '12px', padding: '20px 22px', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '0.97rem', fontWeight: '800', marginBottom: '8px', color: 'var(--foreground)' }}>{faq.q}</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ─────────────────────────────────── */}
      <section style={{ padding: '0 0 72px', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: '900', marginBottom: '18px' }}>Related Services</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {data.relatedLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: 'var(--muted)', border: '1.5px solid var(--border)', borderRadius: '50px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '700', color: 'var(--foreground)', transition: 'all 0.2s' }}
              >
                <span style={{ fontSize: '0.72rem', background: 'rgba(212,175,55,0.2)', color: 'var(--primary)', fontWeight: '800', padding: '2px 8px', borderRadius: '50px' }}>{link.tag}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
