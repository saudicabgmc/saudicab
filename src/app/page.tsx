'use client'
import Link from 'next/link'
import {
  Car, Plane, Briefcase, Navigation,
  Smartphone, Star, MapPin,
  Shield, Zap, Banknote, Phone,
  MessageCircle, Globe, Users,
} from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FAQSection from '@/components/FAQSection'
import PricingSection from '@/components/PricingSection'
import FleetSection from '@/components/FleetSection'
import { homeFaqs } from '@/lib/faqData'
import { allPricingRoutes } from '@/lib/pricingData'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

const locationSlugs = ['makkah-taxi-service', 'madinah-taxi-service', 'jeddah-taxi-service', 'taif-taxi-service']
const locationImages = [
  '/location/makkah.webp',
  '/location/madinah.webp',
  '/location/jeddah.webp',
  '/location/taif.webp',
]
const locationNames = {
  en: ['Makkah', 'Madinah', 'Jeddah', 'Taif'],
  ar: ['مكة المكرمة', 'المدينة المنورة', 'جدة', 'الطائف'],
}

const serviceIcons = [Car, Navigation, Briefcase, Plane]
const stepIcons = [Smartphone, Car, Star]
const whyIcons = [Shield, Zap, Banknote, Phone]

export default function Home() {
  const { lang, isAr } = useLang()
  const tr = t[lang]
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip"

  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 0 70px',
      }}>
        {/* Desktop: YouTube background video */}
        <iframe
          className="hero-video-bg"
          src="https://www.youtube.com/embed/ICQZ4zxqIVg?autoplay=1&mute=1&loop=1&playlist=ICQZ4zxqIVg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&cc_load_policy=0&fs=0"
          style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 'calc(177.78vh + 200px)', minWidth: 'calc(100% + 200px)',
            height: 'calc(56.25vw + 120px)', minHeight: 'calc(100% + 120px)',
            transform: 'translate(-50%, -50%)',
            border: 'none', pointerEvents: 'none', zIndex: 0,
          }}
          allow="autoplay; encrypted-media"
        />
        {/* Mobile: fallback image */}
        <div
          className="hero-img-bg"
          style={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200")',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
        {/* Overlay to block YouTube UI corners */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.48) 100%)',
          zIndex: 2,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                backgroundColor: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.50)',
                color: 'var(--primary)', padding: '6px 18px', borderRadius: '50px',
                fontSize: '0.86rem', fontWeight: '700', marginBottom: '22px',
              }}>
                <Star size={13} fill="var(--primary)" strokeWidth={0} />
                {tr.hero.badge}
              </div>

              <h1 className="hero-h1">
                {tr.hero.title1} <span style={{ color: 'var(--primary)' }}>{tr.hero.title2}</span><br />
                {tr.hero.tagline}
              </h1>

              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '36px', lineHeight: '1.75', maxWidth: '500px' }}>
                {tr.hero.subtitle}
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#locations" className="btn-primary">
                  <MapPin size={16} strokeWidth={2.5} />
                  {tr.hero.exploreCities}
                </a>
                <a href="tel:+966549317712" className="btn-outline">
                  <Phone size={16} strokeWidth={2.5} />
                  {tr.hero.callUs}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '28px', marginTop: '44px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.15)', flexWrap: 'wrap' }}>
                {[
                  { n: isAr ? '+١٢٠٠٠' : '+12K', l: tr.hero.trips },
                  { n: isAr ? '٤' : '4', l: tr.hero.cities },
                  { n: '24/7', l: tr.hero.available },
                ].map(s => (
                  <div key={s.l}>
                    <div style={{ fontSize: '1.65rem', fontWeight: '900', color: 'var(--primary)' }}>{s.n}</div>
                    <div style={{ fontSize: '0.84rem', opacity: 0.7 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fadeInUp animate-delay-1">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{tr.services.tag}</span>
            <h2 className="section-title">{tr.services.title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{tr.services.subtitle}</p>
          </div>
          <div className="grid-4">
            {tr.services.items.map((s, i) => {
              const Icon = serviceIcons[i]
              return (
                <div key={s.title} className="service-card">
                  <div className="service-icon"><Icon size={28} strokeWidth={1.8} /></div>
                  <h3 style={{ fontSize: '0.92rem', fontWeight: '800', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: '1.65' }}>{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" style={{ padding: '90px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{tr.locations.tag}</span>
            <h2 className="section-title">{tr.locations.title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{tr.locations.subtitle}</p>
          </div>
          <div className="grid-4">
            {locationSlugs.map((slug, i) => (
              <Link key={slug} href={`/${slug}`} className="location-card">
                <img
                  src={locationImages[i]}
                  alt={`Taxi Service in ${locationNames['en'][i]} – Saudi Cabs GMC`}
                  loading="lazy"
                />
                {/* Button overlay */}
                <div style={{
                  position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #0B3D2E, #0F5132)', color: 'white',
                  padding: '10px 24px', borderRadius: '50px',
                  fontWeight: '700', fontSize: '0.85rem',
                  whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(11,61,46,0.5)',
                  transition: 'background 0.3s',
                }}>
                  {locationNames[lang][i]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{tr.howItWorks.tag}</span>
            <h2 className="section-title">{tr.howItWorks.title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{tr.howItWorks.subtitle}</p>
          </div>
          <div className="grid-3">
            {[
              { img: '/booking/step-1-book-whatsapp.webp', alt: 'Book Taxi via WhatsApp in Makkah, Madinah, Jeddah & Taif – Saudi Cabs GMC' },
              { img: '/booking/step-2-confirmation.webp',  alt: 'Instant Taxi Price Confirmation in Saudi Arabia – Saudi Cabs GMC Booking' },
              { img: '/booking/step-3-driver-arrival.webp', alt: 'Airport Pickup & Professional Driver Arrival in Saudi Arabia – Saudi Cabs GMC' },
            ].map((imgData, i) => {
              const step = tr.howItWorks.steps[i]
              return (
                <div key={step.title} className="step-card" style={{ padding: 0, overflow: 'hidden', borderRadius: '16px' }}>
                  {/* Step image */}
                  <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={imgData.img}
                      alt={imgData.alt}
                      loading="lazy"
                      style={{
                        position: 'absolute', top: 0, left: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center',
                      }}
                    />
                    {/* Bottom fade shade */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.6) 100%)',
                    }} />
                    {/* Step number badge */}
                    <div style={{
                      position: 'absolute', top: '12px', left: '12px',
                      background: 'linear-gradient(135deg, #0B3D2E, #0F5132)', color: 'white',
                      width: '34px', height: '34px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: '900', fontSize: '0.95rem', boxShadow: '0 4px 12px rgba(11,61,46,0.5)',
                    }}>
                      {isAr ? ['١','٢','٣'][i] : String(i + 1)}
                    </div>
                  </div>
                  {/* Step content */}
                  <div style={{ padding: '18px 20px 22px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '8px' }}>{step.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: '1.65', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <a
              href={`https://wa.me/966549317712?text=${encodeURIComponent(waText)}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1.05rem', padding: '15px 40px' }}
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              {tr.howItWorks.startBtn}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 0', backgroundImage: 'linear-gradient(135deg, #0B3D2E 0%, #0F5132 100%)', color: 'white' }}>
        <div className="container">
          <div className="grid-4">
            {tr.stats.map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-number">{s.num}</div>
                <div className="stat-label" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Video Section */}
      <section style={{ padding: '90px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="two-col-grid">

            {/* Left: Content */}
            <div>
              <span className="section-tag">{isAr ? 'سائقونا المحترفون' : 'Professional Chauffeur Service — Saudi Arabia'}</span>
              <h2 className="section-title" style={{ marginTop: '14px', textAlign: isAr ? 'right' : 'left' }}>
                {isAr
                  ? <> سائقو <span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span> — معيار الاحترافية في خدمة الشوفير</>
                  : <><span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span> Drivers — Certified Chauffeurs in Makkah, Jeddah & Riyadh</>
                }
              </h2>
              <div className="gold-divider" style={{ margin: '16px 0', marginRight: isAr ? 'auto' : 0, marginLeft: 0 }} />
              <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '24px' }}>
                {isAr
                  ? 'سائقو Saudi Cabs GMC ليسوا مجرد سائقين — هم سفراء الأناقة والاحترافية. مدرّبون على أعلى معايير خدمة الشوفير، يرتدون الزي الرسمي، ويقدمون تجربة نقل فاخرة لا مثيل لها في المملكة العربية السعودية.'
                  : 'Saudi Cabs GMC drivers are not just drivers — they are ambassadors of luxury and professionalism. Trained to the highest chauffeur service standards, dressed in formal attire, delivering a premium transport experience across Saudi Arabia.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  { icon: '🎓', en: 'Certified & professionally trained chauffeurs', ar: 'شوفيرون معتمدون ومدرّبون احترافياً' },
                  { icon: '👔', en: 'Formal uniform & impeccable appearance', ar: 'زي رسمي ومظهر لائق دائماً' },
                  { icon: '🗣️', en: 'Bilingual — Arabic & English speaking', ar: 'ثنائيو اللغة — عربي وإنجليزي' },
                  { icon: '⭐', en: '5-star rated across Makkah, Jeddah & Taif', ar: 'تقييم 5 نجوم في مكة وجدة والطائف' },
                ].map(item => (
                  <div key={item.en} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: '600', color: 'var(--foreground)' }}>
                      {isAr ? item.ar : item.en}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/966549317712?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز سائق خاص' : "Hello, I'd like to book a professional chauffeur")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={16} strokeWidth={2.5} />
                  {isAr ? 'احجز شوفيرك الآن' : 'Book a Chauffeur Now'}
                </a>
                <a href="tel:+966549317712" className="btn-outline" style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}>
                  <Phone size={16} strokeWidth={2.5} />
                  {isAr ? 'اتصل بنا' : 'Call Us'}
                </a>
              </div>
            </div>

            {/* Right: Video */}
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/qKSQuxLLQV0?rel=0&modestbranding=1"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      </section>

      {/* Staria Gallery — full-width exterior + interior */}
      <section style={{ backgroundColor: 'var(--muted)', paddingTop: '70px', overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: '40px' }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="section-tag">{isAr ? 'داخل ستاريا' : 'Inside the Staria'}</span>
            <h2 className="section-title">
              {isAr
                ? <><span style={{ color: 'var(--primary)' }}>هيونداي ستاريا</span> — فاخرة من الداخل والخارج</>
                : <><span style={{ color: 'var(--primary)' }}>Hyundai Staria</span> — Luxury Inside & Out</>
              }
            </h2>
            <div className="gold-divider" />
          </div>
        </div>

        {/* Exterior — full width, 2 cols */}
        <div className="gallery-2col">
          {[
            { src: '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', alt: 'Hyundai Staria Taxi Front View – Saudi Cabs GMC Premium Van Saudi Arabia', label: isAr ? 'المظهر الأمامي' : 'Front View' },
            { src: '/fleet/toyota-camry-exterior-side-saudi-cabs-gmc.webp', alt: 'Hyundai Staria Taxi Side View – Saudi Cabs GMC Luxury Cab Makkah Jeddah', label: isAr ? 'المظهر الجانبي' : 'Side View' },
          ].map(img => (
            <div key={img.src} style={{ position: 'relative', background: '#111' }}>
              <img src={img.src} alt={img.alt} loading="lazy"
                style={{ width: '100%', height: '460px', objectFit: 'contain', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
                <span style={{ color: 'white', fontWeight: '700', fontSize: '0.9rem', background: 'rgba(0,0,0,0.55)', padding: '4px 14px', borderRadius: '20px' }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interior — full width, 5 cols */}
        <div className="gallery-5col">
          {[
            { src: '/fleet/toyota-camry-interior-rear-seat-saudi-cabs-gmc.webp', alt: 'Hyundai Staria Rear Seats – Spacious 7-Seat Taxi Interior Saudi Cabs GMC', label: isAr ? 'مقاعد خلفية' : 'Rear Seats' },
            { src: '/fleet/toyota-camry-interior-front-dashboard-saudi-cabs-gmc.webp', alt: 'Hyundai Staria Dashboard – Modern Taxi Interior Saudi Cabs GMC', label: isAr ? 'لوحة القيادة' : 'Dashboard' },
            { src: '/fleet/toyota-camry-interior-passenger-space-saudi-cabs-gmc.webp', alt: 'Hyundai Staria Passenger Space – Comfortable Cab Saudi Cabs GMC', label: isAr ? 'فضاء الركاب' : 'Space' },
            { src: '/fleet/toyota-camry-interior-comfort-saudi-cabs-gmc.webp', alt: 'Hyundai Staria Interior Comfort – Premium Taxi Saudi Arabia GMC', label: isAr ? 'الراحة' : 'Comfort' },
            { src: '/fleet/toyota-camry-interior-luxury-seats-saudi-cabs-gmc.webp', alt: 'Hyundai Staria Luxury Seats – Saudi Cabs GMC VIP Ride', label: isAr ? 'مقاعد فاخرة' : 'Luxury Seats' },
          ].map(img => (
            <div key={img.src} style={{ position: 'relative' }}>
              <img src={img.src} alt={img.alt} loading="lazy"
                style={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <span style={{ color: 'white', fontWeight: '600', fontSize: '0.75rem' }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GMC Gallery — full-width exterior + interior */}
      <section style={{ backgroundColor: 'var(--background)', paddingTop: '70px', overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: '40px' }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="section-tag">{isAr ? 'داخل GMC يوكون' : 'Inside the GMC Yukon'}</span>
            <h2 className="section-title">
              {isAr
                ? <><span style={{ color: 'var(--primary)' }}>GMC يوكون</span> — الفخامة الحقيقية في كل تفصيلة</>
                : <><span style={{ color: 'var(--primary)' }}>GMC Yukon</span> — True Luxury in Every Detail</>
              }
            </h2>
            <div className="gold-divider" />
          </div>
        </div>

        {/* Exterior — full width, 2 cols */}
        <div className="gallery-2col">
          {[
            { src: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', alt: 'GMC Yukon Luxury Taxi Front Angle – Saudi Cabs GMC VIP Service Saudi Arabia', label: isAr ? 'المظهر الخارجي' : 'Exterior — Angle View' },
            { src: '/fleet/gmc-yukon-exterior-front-grille-saudi-cabs-gmc.webp', alt: 'GMC Yukon Taxi Front Grille – Saudi Cabs GMC Premium SUV Makkah Jeddah', label: isAr ? 'الواجهة الأمامية' : 'Exterior — Front Grille' },
          ].map(img => (
            <div key={img.src} style={{ position: 'relative', overflow: 'hidden' }}>
              <img src={img.src} alt={img.alt} loading="lazy"
                style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
                <span style={{ color: 'white', fontWeight: '700', fontSize: '0.9rem', background: 'rgba(0,0,0,0.55)', padding: '4px 14px', borderRadius: '20px' }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interior — full width, 5 cols */}
        <div className="gallery-5col">
          {[
            { src: '/fleet/gmc-yukon-interior-trunk-space-saudi-cabs-gmc.webp',     alt: 'GMC Yukon Trunk Space – Large Luggage Capacity Saudi Cabs GMC',         label: isAr ? 'مساحة الأمتعة' : 'Trunk Space' },
            { src: '/fleet/gmc-yukon-interior-driver-seat-saudi-cabs-gmc.webp',     alt: 'GMC Yukon Driver Interior – Premium Leather Cab Saudi Cabs GMC',        label: isAr ? 'المقعد الأمامي' : 'Driver Seat' },
            { src: '/fleet/gmc-yukon-interior-dashboard-screen-saudi-cabs-gmc.webp',alt: 'GMC Yukon Dashboard Touch Screen – Luxury SUV Interior Saudi Cabs GMC', label: isAr ? 'شاشة لمس GMC' : 'GMC Touchscreen' },
            { src: '/fleet/gmc-yukon-interior-cooler-saudi-cabs-gmc.webp',           alt: 'GMC Yukon Built-in Cooler – VIP Water Service Saudi Cabs GMC',           label: isAr ? 'مبرد مدمج' : 'Built-in Cooler' },
            { src: '/fleet/gmc-yukon-interior-rear-seats-saudi-cabs-gmc.webp',      alt: 'GMC Yukon Rear Seats – Spacious VIP Passenger Area Saudi Cabs GMC',     label: isAr ? 'مقاعد خلفية VIP' : 'VIP Rear Seats' },
          ].map(img => (
            <div key={img.src} style={{ position: 'relative', overflow: 'hidden' }}>
              <img src={img.src} alt={img.alt} loading="lazy"
                style={{ width: '100%', height: '190px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <span style={{ color: 'white', fontWeight: '600', fontSize: '0.75rem' }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* GMC feature badges */}
        <div className="container" style={{ paddingTop: '36px', paddingBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { icon: '🚙', en: 'GMC Yukon 2024', ar: 'GMC يوكون 2024' },
              { icon: '👥', en: '7 Seats', ar: '٧ مقاعد' },
              { icon: '❄️', en: 'Built-in Cooler', ar: 'مبرد مدمج' },
              { icon: '📺', en: 'Giant Touchscreen', ar: 'شاشة لمس عملاقة' },
              { icon: '💼', en: 'Extra Luggage Space', ar: 'مساحة أمتعة واسعة' },
            ].map(b => (
              <div key={b.en} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'var(--muted)', border: '1px solid var(--border)',
                borderRadius: '50px', padding: '8px 18px',
                fontSize: '0.85rem', fontWeight: '600',
              }}>
                <span>{b.icon}</span>
                <span>{isAr ? b.ar : b.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section — 3 cars with prices */}
      <FleetSection pricing={allPricingRoutes} />

      {/* Rate List */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'قائمة الأسعار' : 'Price List'}</span>
            <h2 className="section-title">
              {isAr
                ? <><span style={{ color: 'var(--primary)' }}>أسعار ثابتة وشفافة</span> — بدون رسوم خفية</>
                : <>Fixed & Transparent <span style={{ color: 'var(--primary)' }}>Pricing</span> — No Hidden Fees</>
              }
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              {isAr
                ? 'مطار جدة • مطار المدينة • زيارات مكة والمدينة — سيدان • ستاريا • GMC يوكون'
                : 'Jeddah Airport • Madinah Airport • Makkah & Madinah Ziyarat — Sedan • Staria • GMC Yukon'
              }
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/rate-list-saudi-cabs-gmc.webp"
              alt="Saudi Cabs GMC Route Price List – Sedan, Staria Van & GMC Yukon Taxi Rates in Makkah, Madinah, Jeddah"
              style={{
                maxWidth: '560px',
                width: '100%',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
                display: 'block',
              }}
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <a
              href={`https://wa.me/966549317712?text=${encodeURIComponent(isAr ? 'السلام عليكم، أريد الاستفسار عن الأسعار' : "Hello, I'd like to inquire about pricing")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={17} strokeWidth={2.5} />
              {isAr ? 'احجز بهذه الأسعار الآن' : 'Book at These Prices Now'}
            </a>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="section-tag">{tr.whyUs.tag}</span>
              <h2 className="section-title" style={{ marginTop: '14px', textAlign: isAr ? 'right' : 'left' }}>
                {tr.whyUs.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
              </h2>
              <div className="gold-divider" style={{ marginTop: '16px', marginRight: 0, marginBottom: '16px', marginLeft: 0 }} />
              {tr.whyUs.items.map((f, i) => {
                const Icon = whyIcons[i]
                return (
                  <div key={f.title} className="feature-item">
                    <div className="feature-icon"><Icon size={20} strokeWidth={1.8} /></div>
                    <div>
                      <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>{f.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{f.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '480px', boxShadow: 'var(--shadow-lg)' }}>
                <img
                  src="/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp"
                  alt="Toyota Camry Premium Taxi – Saudi Cabs GMC Best Cab Service in Saudi Arabia"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="why-us-badge">
                <div style={{ fontSize: '2rem', fontWeight: '900', lineHeight: 1 }}>{isAr ? '+١٢٠٠٠' : '+12K'}</div>
                <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>{tr.whyUs.successBadge}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '90px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{tr.testimonials.tag}</span>
            <h2 className="section-title">{tr.testimonials.title}</h2>
            <div className="gold-divider" />
          </div>
          <ReviewsCarousel reviews={tr.testimonials.items as any} isAr={isAr} />
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '90px 0', backgroundImage: 'linear-gradient(135deg, #0B3D2E 0%, #0F5132 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="cta-title-lg">{tr.cta.title}</h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', opacity: 0.9, maxWidth: '520px', margin: '0 auto 36px' }}>{tr.cta.subtitle}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/966549317712?text=${encodeURIComponent(waText)}`}
              target="_blank" rel="noopener noreferrer"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #E6C65C)', color: '#1D1D1B', padding: '14px 36px', borderRadius: 'var(--radius)', fontWeight: '800', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 20px rgba(0,0,0,0.15)', textDecoration: 'none' }}
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              {tr.cta.bookWhatsapp}
            </a>
            <a
              href="tel:+966549317712"
              style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: 'white', border: '2px solid rgba(255,255,255,0.6)', padding: '14px 36px', borderRadius: 'var(--radius)', fontWeight: '800', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <Phone size={18} strokeWidth={2.5} />
              {tr.cta.callUs}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection routes={allPricingRoutes} />

      {/* FAQ */}
      <FAQSection faqs={homeFaqs} />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/logo-saudi-cabs-gmc.webp" alt="Saudi Cabs GMC" style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                {tr.footer.brand}
              </div>
              <p className="footer-desc">{tr.footer.desc}</p>
            </div>
            <div>
              <h4 className="footer-heading">{tr.footer.cities}</h4>
              <ul className="footer-links">
                {locationSlugs.map((slug, i) => (
                  <li key={slug}><Link href={`/${slug}`}>{locationNames[lang][i]}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">{tr.footer.services}</h4>
              <ul className="footer-links">
                {tr.footer.serviceList.map(s => (
                  <li key={s}><a href="#">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">{tr.footer.contact}</h4>
              <div className="footer-contact-item">
                <Phone size={15} color="var(--primary)" strokeWidth={2} />
                <a href="tel:+966549317712" style={{ color: 'inherit' }}>+966 54 931 7712</a>
              </div>
              <div className="footer-contact-item">
                <MessageCircle size={15} color="var(--primary)" strokeWidth={2} />
                <a href="https://wa.me/966549317712" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  {tr.footer.whatsapp}
                </a>
              </div>
              <div className="footer-contact-item">
                <Globe size={15} color="var(--primary)" strokeWidth={2} />
                <span>{tr.footer.country}</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} {tr.footer.brand}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </main>
  )
}
