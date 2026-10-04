'use client'
import { motion, useReducedMotion } from 'framer-motion'
import TrustBadges from '@/components/TrustBadges'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FAQSection from '@/components/FAQSection'
import HeroJourney from '@/components/home/HeroJourney'
import TrustStrip from '@/components/home/TrustStrip'
import JourneyTypes from '@/components/home/JourneyTypes'
import CityExplorer from '@/components/home/CityExplorer'
import FleetExperience from '@/components/home/FleetExperience'
import PricingExperience from '@/components/home/PricingExperience'
import JourneyTimeline from '@/components/home/JourneyTimeline'
import AirportJourney from '@/components/home/AirportJourney'
import PilgrimageSection from '@/components/home/PilgrimageSection'
import DriverExperience from '@/components/home/DriverExperience'
import FinalCta from '@/components/home/FinalCta'
import { homeFaqs } from '@/lib/faqData'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

export default function Home() {
  const { lang, isAr } = useLang()
  const tr = t[lang]
  const reduceMotion = useReducedMotion()
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip"
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(waText)}`

  return (
    <main>
      <link rel="preload" as="image" href="/hero/makkah-hero-saudi-cabs-gmc.webp" fetchPriority="high" />

      {/* ── Sticky mobile booking CTA ── */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 900,
        background: 'linear-gradient(135deg, #0B3D2E, #0F5132)',
        padding: '10px 20px calc(10px + env(safe-area-inset-bottom))',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.22)',
      }}>
        <div style={{ color: 'white', flex: 1 }}>
          <div style={{ fontSize: '0.78rem', opacity: 0.75, lineHeight: 1 }}>{isAr ? 'متاح الآن ٢٤/٧' : '24/7 Available Now'}</div>
          <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1.2, marginTop: '2px' }}>
            {isAr ? 'احجز رحلتك الآن' : 'Book Your Trip Now'}
          </div>
        </div>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{
          background: '#25D366', color: 'white', padding: '10px 22px', borderRadius: '10px',
          fontWeight: '800', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '7px',
          whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 4px 14px rgba(37,211,102,0.4)', textDecoration: 'none',
        }}>
          {isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
        </a>
      </div>

      {/* 1. Cinematic hero + trip-intent selector */}
      <HeroJourney />

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. Journey types — editorial, not a card grid */}
      <JourneyTypes />

      {/* 4–5. Saudi destination experience / city explorer */}
      <CityExplorer />

      {/* 6. Fleet experience */}
      <FleetExperience />

      {/* 7. Pricing experience */}
      <PricingExperience />

      {/* 8. How booking works — journey timeline */}
      <JourneyTimeline />

      {/* 9. Airport journey */}
      <AirportJourney />

      {/* 10. Hajj / Umrah / Ziyarat */}
      <PilgrimageSection />

      {/* 11. Driver experience */}
      <DriverExperience />

      {/* 12. What you can expect */}
      <TrustBadges />

      {/* 13. Genuine customer reviews */}
      <section className="page-section" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-header">
              <span className="section-tag">{tr.testimonials.tag}</span>
              <h2 className="section-title">{tr.testimonials.title}</h2>
              <div className="gold-divider" />
            </div>
            <ReviewsCarousel reviews={tr.testimonials.items as any} isAr={isAr} />
          </motion.div>
        </div>
      </section>

      <div style={{ height: '5px', background: 'linear-gradient(90deg, var(--primary) 0%, #E6C65C 50%, var(--primary) 100%)' }} />

      {/* 14. AEO-ready FAQ */}
      <FAQSection faqs={homeFaqs} />

      {/* 15. Final CTA */}
      <FinalCta />

      {/* Bottom padding for sticky bar */}
      <div style={{ height: '64px' }} />
    </main>
  )
}
