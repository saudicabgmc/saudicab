'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Star, Shield, CheckCircle, Users, Gauge, Snowflake, MapPin, Car } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const SPECS = [
  { icon: <Users size={22} />, t: { en: '7 Passengers', ar: '٧ ركاب' }, d: { en: 'Spacious cabin for families & VIP groups', ar: 'مقصورة واسعة للعائلات ومجموعات VIP' } },
  { icon: <Snowflake size={22} />, t: { en: 'Built-in Cooler', ar: 'مبرد مدمج' }, d: { en: 'Integrated rear cooler for cold drinks on long journeys', ar: 'مبرد خلفي مدمج للمشروبات الباردة في الرحلات الطويلة' } },
  { icon: <Gauge size={22} />, t: { en: '10.2" Touchscreen', ar: 'شاشة ١٠.٢ بوصة' }, d: { en: 'Giant infotainment display with Apple CarPlay & Android Auto', ar: 'شاشة ترفيه عملاقة مع Apple CarPlay و Android Auto' } },
  { icon: <Shield size={22} />, t: { en: 'Premium Leather', ar: 'جلد فاخر' }, d: { en: 'Full premium leather seats with heated/cooled options', ar: 'مقاعد جلدية فاخرة مع خيارات تسخين وتبريد' } },
  { icon: <Car size={22} />, t: { en: 'V8 Engine', ar: 'محرك V8' }, d: { en: 'Powerful 5.3L or 6.2L V8 for smooth highway cruising', ar: 'محرك V8 قوي ٥.٣ أو ٦.٢ لتر للقيادة السلسة على الطريق السريع' } },
  { icon: <Star size={22} />, t: { en: 'Massive Trunk', ar: 'صندوق ضخم' }, d: { en: 'Fits 6+ large suitcases, Zamzam bottles & Hajj luggage', ar: 'يتسع لأكثر من ٦ حقائب كبيرة وعبوات زمزم وأمتعة الحج' } },
]

const ROUTES = [
  { href: '/jeddah-airport-to-makkah', en: 'Jeddah Airport → Makkah', ar: 'مطار جدة ← مكة' },
  { href: '/makkah-to-madinah', en: 'Makkah → Madinah', ar: 'مكة ← المدينة' },
  { href: '/riyadh-to-makkah', en: 'Riyadh → Makkah', ar: 'الرياض ← مكة' },
  { href: '/makkah-to-taif', en: 'Makkah → Taif', ar: 'مكة ← الطائف' },
  { href: '/jeddah-to-madinah', en: 'Jeddah → Madinah', ar: 'جدة ← المدينة' },
  { href: '/makkah-to-riyadh', en: 'Makkah → Riyadh', ar: 'مكة ← الرياض' },
]

const FAQS = [
  { q: { en: 'How many passengers can a GMC Yukon carry?', ar: 'كم عدد الركاب الذين يمكن أن يحملهم GMC يوكون؟' }, a: { en: 'The GMC Yukon XL comfortably seats up to 7 passengers with generous legroom. It is our top VIP vehicle, ideal for families, executives, and group pilgrimage travel.', ar: 'يتسع GMC يوكون XL بشكل مريح لما يصل إلى ٧ ركاب مع مساحة أرجل واسعة. إنها سيارتنا الأفضل لكبار الشخصيات، مثالية للعائلات والمديرين التنفيذيين ومجموعات الحجاج.' } },
  { q: { en: 'What is the price of a GMC Yukon hire in Makkah?', ar: 'ما سعر استئجار GMC يوكون في مكة؟' }, a: { en: 'Pricing is fixed and depends on the route. For example, Jeddah Airport to Makkah in a GMC Yukon is a flat rate — no meter, no surge pricing. Contact us on WhatsApp for an instant quote.', ar: 'التسعير ثابت ويعتمد على الطريق. على سبيل المثال، من مطار جدة إلى مكة في GMC يوكون بسعر ثابت — بدون عداد، بدون زيادة أسعار. تواصل معنا عبر واتساب لعرض سعر فوري.' } },
  { q: { en: 'Is the GMC Yukon available for Hajj season?', ar: 'هل GMC يوكون متاح لموسم الحج؟' }, a: { en: 'Yes. We operate 24/7 year-round, including all Hajj and Umrah seasons. We recommend booking your Yukon early during peak season to guarantee availability.', ar: 'نعم. نعمل على مدار الساعة طوال العام، بما في ذلك جميع مواسم الحج والعمرة. ننصح بالحجز المبكر خلال مواسم الذروة لضمان التوفر.' } },
  { q: { en: 'Does the GMC Yukon have space for large luggage?', ar: 'هل يتسع GMC يوكون للأمتعة الكبيرة؟' }, a: { en: 'Absolutely. The GMC Yukon XL has one of the largest cargo areas of any SUV. It easily fits 6+ large suitcases, Zamzam water containers, and all Hajj/Umrah luggage without cramping passenger space.', ar: 'بالتأكيد. يتمتع GMC يوكون XL بواحدة من أكبر مناطق الشحن في أي سيارة دفع رباعي. يتسع بسهولة لأكثر من ٦ حقائب كبيرة وعبوات ماء زمزم وجميع أمتعة الحج/العمرة.' } },
]

const GALLERY = [
  { src: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', alt: 'GMC Yukon XL Exterior Angle — VIP Luxury SUV Saudi Cabs GMC', label: { en: 'Exterior', ar: 'المظهر الخارجي' } },
  { src: '/fleet/gmc-yukon-exterior-front-grille-saudi-cabs-gmc.webp', alt: 'GMC Yukon Front Grille — Premium VIP Taxi Saudi Arabia', label: { en: 'Front Grille', ar: 'الشبك الأمامي' } },
  { src: '/fleet/gmc-yukon-interior-rear-seats-saudi-cabs-gmc.webp', alt: 'GMC Yukon Rear Leather Seats — Spacious VIP Interior', label: { en: 'Rear Seats', ar: 'المقاعد الخلفية' } },
  { src: '/fleet/gmc-yukon-interior-dashboard-screen-saudi-cabs-gmc.webp', alt: 'GMC Yukon Dashboard Touchscreen — Modern Infotainment System', label: { en: 'Dashboard', ar: 'لوحة القيادة' } },
  { src: '/fleet/gmc-yukon-interior-cooler-saudi-cabs-gmc.webp', alt: 'GMC Yukon Built-in Cooler — Cold Drinks on Long Trips', label: { en: 'Built-in Cooler', ar: 'المبرد المدمج' } },
  { src: '/fleet/gmc-yukon-interior-trunk-space-saudi-cabs-gmc.webp', alt: 'GMC Yukon Trunk Space — Fits 6+ Large Suitcases', label: { en: 'Trunk Space', ar: 'مساحة الأمتعة' } },
]

export default function GMCYukonPage() {
  const { isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => b[isAr ? 'ar' : 'en']
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز GMC يوكون' : "Hello, I'd like to hire a GMC Yukon")}`

  return (
    <main>
      {/* Hero */}
      <section style={{ minHeight: '90vh', background: 'linear-gradient(135deg,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.44) 100%), url("/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '100px 0 70px' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <span style={{ display: 'inline-block', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.6)', color: 'var(--primary)', padding: '5px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px' }}>
                {isAr ? 'سيارة VIP فاخرة' : 'VIP Luxury SUV'}
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '16px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>GMC يوكون</span><br />استئجار فاخر مع سائق في السعودية</>
                  : <><span style={{ color: 'var(--primary)' }}>GMC Yukon</span> VIP Hire<br />With Professional Chauffeur</>
                }
              </h1>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '500px' }}>
                {isAr
                  ? 'استمتع بتجربة السفر الفاخرة مع GMC يوكون XL. ٧ مقاعد، مبرد مدمج، مقاعد جلدية فاخرة. متاح ٢٤/٧ في مكة والمدينة وجدة والرياض.'
                  : 'Experience luxury travel with the GMC Yukon XL. 7 seats, built-in cooler, premium leather. Available 24/7 in Makkah, Madinah, Jeddah & Riyadh.'}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle size={16} strokeWidth={2.5} />{isAr ? 'احجز يوكون الآن' : 'Book Yukon Now'}</a>
                <a href="tel:+923097811785" className="btn-outline"><Phone size={16} strokeWidth={2.5} />{isAr ? 'اتصل بنا' : 'Call Us'}</a>
              </div>
            </div>
            <div className="animate-fadeInUp animate-delay-1"><BookingForm /></div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ backgroundColor: '#111', paddingTop: '0', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {GALLERY.map(img => (
            <div key={img.src} style={{ position: 'relative' }}>
              <img src={img.src} alt={img.alt} loading="lazy" width={600} height={340} style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '12px', left: isAr ? 'auto' : '14px', right: isAr ? '14px' : 'auto' }}>
                <span style={{ color: 'white', fontWeight: '700', fontSize: '0.8rem', background: 'rgba(0,0,0,0.5)', padding: '3px 12px', borderRadius: '20px' }}>{tx(img.label)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'مواصفات يوكون' : 'Yukon Specs'}</span>
            <h2 className="section-title">{isAr ? <>لماذا <span style={{ color: 'var(--primary)' }}>GMC يوكون</span>؟</> : <>Why Choose the <span style={{ color: 'var(--primary)' }}>GMC Yukon</span>?</>}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3">
            {SPECS.map(s => (
              <div key={s.t.en} className="service-card" style={{ textAlign: 'center' }}>
                <div className="service-icon" style={{ margin: '0 auto 14px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '8px' }}>{tx(s.t)}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{tx(s.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'خطوط يوكون الشائعة' : 'Popular Yukon Routes'}</span>
            <h2 className="section-title">{isAr ? 'أشهر الخطوط المتاحة' : 'Most Requested Routes'}</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {ROUTES.map(r => (
              <Link key={r.href} href={r.href} className="route-badge"><MapPin size={14} />{tx(r)}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading={{ ar: 'أسئلة شائعة — GMC يوكون', en: 'FAQ — GMC Yukon Hire' }} />

      {/* CTA */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#0B3D2E,#0F5132)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>{isAr ? 'احجز GMC يوكون الآن' : 'Book Your GMC Yukon Now'}</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px' }}>{isAr ? 'سائق محترف — سعر ثابت — ٢٤/٧' : 'Professional Chauffeur — Fixed Price — 24/7'}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#D4AF37,#E6C65C)', color: '#1D1D1B', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><MessageCircle size={18} strokeWidth={2.5} />{isAr ? 'واتساب' : 'WhatsApp'}</a>
            <a href="tel:+923097811785" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.5)', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Phone size={18} strokeWidth={2.5} />+92 309 7811785</a>
          </div>
        </div>
      </section>
    </main>
  )
}
