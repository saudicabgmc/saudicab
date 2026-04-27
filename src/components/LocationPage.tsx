'use client'
import Link from 'next/link'
import FAQSection, { type FAQItem } from './FAQSection'
import PricingSection from './PricingSection'
import { type PricingRoute } from '@/lib/pricingData'
import {
  Phone, MessageCircle, Globe,
  Building2, Plane, Bus, Car, Briefcase, Building, Map, Users, Shield, Clock, Banknote, Star,
  Moon, Waves, ShoppingBag, UserRound, Anchor, MapPin, Gem, Mountain, Leaf, TreePine, ShoppingCart, Sun,
} from 'lucide-react'
import BookingForm from './BookingForm'
import FleetSection from './FleetSection'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Plane, Bus, Car, Briefcase, Building, Map, Users, Shield, Clock, Banknote, Star,
  Moon, Waves, ShoppingBag, UserRound, Anchor, MapPin, Gem, Mountain, Leaf, TreePine, ShoppingCart, Sun,
}

type BText = { ar: string; en: string }

interface ServiceItem {
  iconName: string
  title: BText
  desc: BText
}

interface HighlightItem {
  iconName: string
  title: BText
  desc: BText
}

interface RouteItem {
  label: BText
  duration: string
}

export interface LocationPageProps {
  cityName: BText
  citySlug: string
  citySlogan: BText
  description: BText
  heroImage: string
  services: ServiceItem[]
  routes: RouteItem[]
  highlights: HighlightItem[]
  faqs: FAQItem[]
  pricing?: PricingRoute[]
}

export default function LocationPage({
  cityName,
  citySlogan,
  description,
  heroImage,
  services,
  routes,
  citySlug,
  highlights,
  faqs,
  pricing,
}: LocationPageProps) {
  const { lang, isAr } = useLang()
  const tr = t[lang].locationPage
  const tx = (b: BText) => b[lang]
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip"

  const footerCities = [
    { href: '/makkah-taxi-service', label: isAr ? 'مكة المكرمة' : 'Makkah' },
    { href: '/madinah-taxi-service', label: isAr ? 'المدينة المنورة' : 'Madinah' },
    { href: '/jeddah-taxi-service', label: isAr ? 'جدة' : 'Jeddah' },
    { href: '/taif-taxi-service', label: isAr ? 'الطائف' : 'Taif' },
  ]

  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.40) 100%), url("${heroImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 0 70px',
      }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.50)',
                color: 'var(--primary)', padding: '5px 16px', borderRadius: '50px',
                fontSize: '0.84rem', fontWeight: '700', marginBottom: '18px',
              }}>
                {tx(citySlogan)}
              </div>

              <h1 style={{ fontSize: '1.4rem', fontWeight: '500', lineHeight: '1.25', marginBottom: '18px' }}>
                {tr.transportIn}<br />
                <span style={{ color: 'var(--primary)' }}>{tx(cityName)}</span>
              </h1>

              <p style={{ fontSize: '0.78rem', opacity: 0.85, marginBottom: '32px', lineHeight: '1.75', maxWidth: '480px' }}>
                {tx(description)}
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="tel:+966549317712" className="btn-primary">
                  <Phone size={16} strokeWidth={2.5} />
                  {tr.callNow}
                </a>
                <a
                  href={`https://wa.me/966549317712?text=${encodeURIComponent(waText)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <MessageCircle size={16} strokeWidth={2.5} />
                  {tr.whatsapp}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px' }}>
                {tr.tags.map(s => (
                  <span key={s} style={{
                    background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
                    color: 'white', padding: '5px 14px', borderRadius: '50px',
                    fontSize: '0.84rem', fontWeight: '600',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fadeInUp animate-delay-1">
              <BookingForm defaultFrom={tx(cityName)} />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '90px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{tr.servicesTag}</span>
            <h2 className="section-title">{tr.servicesTitle} {tx(cityName)}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{tr.servicesSubtitle}</p>
          </div>
          <div className="grid-4">
            {services.map(s => {
              const SIcon = ICON_MAP[s.iconName]
              return (
              <div key={s.title.ar} className="service-card">
                <div className="service-icon">
                  {SIcon && <SIcon size={28} strokeWidth={1.8} />}
                </div>
                <h3 style={{ fontSize: '0.8rem', fontWeight: '800', marginBottom: '10px' }}>{tx(s.title)}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{tx(s.desc)}</p>
              </div>
            )
            })}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section style={{ padding: '70px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '38px' }}>
            <span className="section-tag">{tr.routesTag}</span>
            <h2 className="section-title">{tr.routesTitle} {tx(cityName)}</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {routes.map(r => (
              <a
                key={r.label.ar}
                href={`https://wa.me/966549317712?text=${encodeURIComponent(waText)}`}
                target="_blank" rel="noopener noreferrer"
                className="route-badge"
              >
                {tx(r.label)}
                <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.8rem' }}>{r.duration}</span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link
              href={`/${citySlug}/routes`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--primary)', color: 'white',
                padding: '12px 28px', borderRadius: '10px',
                fontWeight: '800', fontSize: '0.88rem', textDecoration: 'none',
              }}
            >
              {isAr ? `عرض جميع خطوط ${tx(cityName)} ←` : `View All ${tx(cityName)} Routes →`}
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Section — 3 cars with prices */}
      {pricing && pricing.length > 0 && (
        <FleetSection pricing={pricing} cityName={cityName} />
      )}

      {/* Why us */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="section-tag">{tr.whyTag}</span>
              <h2 className="section-title" style={{ marginTop: '12px', textAlign: isAr ? 'right' : 'left' }}>
                {tr.whyTitle} {tx(cityName)}
              </h2>
              <div className="gold-divider" style={{ margin: '14px 0' }} />
              <div style={{ marginTop: '28px' }}>
                {highlights.map(h => {
                  const HIcon = ICON_MAP[h.iconName]
                  return (
                  <div key={h.title.ar} className="feature-item">
                    <div className="feature-icon">
                      {HIcon && <HIcon size={20} strokeWidth={1.8} />}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>{tx(h.title)}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{tx(h.desc)}</p>
                    </div>
                  </div>
                )
                })}
              </div>
            </div>

            {/* CTA card */}
            <div style={{
              background: 'linear-gradient(135deg, #0B3D2E 0%, #0F5132 100%)',
              borderRadius: '20px', padding: '48px 36px', color: 'white', textAlign: 'center',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(212,175,55,0.18)', borderRadius: '50%', padding: '18px' }}>
                  <MessageCircle size={40} color="var(--primary)" strokeWidth={1.6} />
                </div>
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '900', marginBottom: '14px' }}>{tr.ctaTitle}</h3>
              <p style={{ opacity: 0.75, marginBottom: '28px', lineHeight: '1.7', fontSize: '0.78rem' }}>
                {tr.ctaDesc} {tx(cityName)} {tr.ctaDescEnd}
              </p>
              <a
                href={`https://wa.me/966549317712?text=${encodeURIComponent(waText)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: '#25D366', color: 'white', padding: '13px 28px', borderRadius: '10px',
                  fontWeight: '700', fontSize: '0.8rem', marginBottom: '12px', textDecoration: 'none',
                }}
              >
                <MessageCircle size={17} strokeWidth={2.5} />
                {tr.whatsapp}
              </a>
              <a
                href="tel:+966549317712"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: 'rgba(255,255,255,0.12)', color: 'white', padding: '12px 28px',
                  borderRadius: '10px', fontWeight: '700', fontSize: '0.8rem', textDecoration: 'none',
                }}
              >
                <Phone size={17} strokeWidth={2.5} />
                +966 54 931 7712
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {pricing && pricing.length > 0 && (
        <PricingSection
          routes={pricing}
          heading={{
            ar: `أسعار النقل في ${tx(cityName)}`,
            en: `Transport Rates in ${tx(cityName)}`,
          }}
        />
      )}

      <FAQSection
        faqs={faqs}
        heading={{
          ar: `أسئلة شائعة حول النقل في ${tx(cityName)}`,
          en: `Frequently Asked Questions — ${tx(cityName)}`,
        }}
      />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/logo-saudi-cabs-gmc.webp" alt="Saudi Cabs GMC" style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                {tr.footerBrand}
              </div>
              <p className="footer-desc">{tr.footerDesc}</p>
            </div>
            <div>
              <h4 className="footer-heading">{tr.footerCities}</h4>
              <ul className="footer-links">
                {footerCities.map(l => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">{tr.footerServices}</h4>
              <ul className="footer-links">
                {tr.footerServiceList.map(s => (
                  <li key={s}><a href="#">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">{tr.footerContact}</h4>
              <div className="footer-contact-item">
                <Phone size={15} color="var(--primary)" strokeWidth={2} />
                <a href="tel:+966549317712" style={{ color: 'inherit' }}>+966 54 931 7712</a>
              </div>
              <div className="footer-contact-item">
                <MessageCircle size={15} color="var(--primary)" strokeWidth={2} />
                <a href="https://wa.me/966549317712" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  {tr.footerWhatsapp}
                </a>
              </div>
              <div className="footer-contact-item">
                <Globe size={15} color="var(--primary)" strokeWidth={2} />
                <span>{tr.footerCountry}</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} {tr.footerBrand}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </main>
  )
}
