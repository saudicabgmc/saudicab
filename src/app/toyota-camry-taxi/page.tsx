'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Star, Shield, CheckCircle, Users, Gauge, Wind, MapPin, Zap } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const SPECS = [
  { icon: <Users size={22} />, t: { en: '4 Passengers', ar: '٤ ركاب' }, d: { en: 'Comfortable cabin for individuals, couples & small families', ar: 'مقصورة مريحة للأفراد والأزواج والعائلات الصغيرة' } },
  { icon: <Wind size={22} />, t: { en: 'Full Climate Control', ar: 'تحكم كامل بالمناخ' }, d: { en: 'Dual-zone AC — stay cool on any journey across Saudi Arabia', ar: 'تكييف مزدوج — حافظ على برودتك في أي رحلة عبر السعودية' } },
  { icon: <Gauge size={22} />, t: { en: 'Smooth V6 Engine', ar: 'محرك V6 سلس' }, d: { en: 'Refined 2.5L or 3.5L V6 — quiet and fuel-efficient on highways', ar: 'محرك V6 راقٍ ٢.٥ أو ٣.٥ لتر — هادئ وموفر للوقود على الطرق السريعة' } },
  { icon: <Shield size={22} />, t: { en: 'Leather Interior', ar: 'داخلية جلدية' }, d: { en: 'Premium leather seats with ample legroom for a relaxed ride', ar: 'مقاعد جلدية فاخرة مع مساحة أرجل واسعة لرحلة مريحة' } },
  { icon: <Zap size={22} />, t: { en: 'USB & Fast Charging', ar: 'شحن USB سريع' }, d: { en: 'Keep devices charged throughout your journey', ar: 'حافظ على شحن أجهزتك طوال رحلتك' } },
  { icon: <Star size={22} />, t: { en: 'Generous Boot', ar: 'صندوق واسع' }, d: { en: 'Fits 3–4 large suitcases — ideal for airport transfers', ar: 'يتسع لـ٣–٤ حقائب كبيرة — مثالي لتوصيل المطار' } },
]

const GALLERY = [
  { src: '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', alt: 'Toyota Camry Taxi Front Exterior — Saudi Cabs GMC', label: { en: 'Exterior', ar: 'المظهر الخارجي' } },
  { src: '/fleet/toyota-camry-exterior-side-saudi-cabs-gmc.webp', alt: 'Toyota Camry Side Profile — Private Taxi Saudi Arabia', label: { en: 'Side Profile', ar: 'المنظر الجانبي' } },
  { src: '/fleet/toyota-camry-interior-rear-seat-saudi-cabs-gmc.webp', alt: 'Toyota Camry Rear Seat — Comfortable Passenger Space', label: { en: 'Rear Seat', ar: 'المقعد الخلفي' } },
  { src: '/fleet/toyota-camry-interior-front-dashboard-saudi-cabs-gmc.webp', alt: 'Toyota Camry Dashboard — Modern Infotainment', label: { en: 'Dashboard', ar: 'لوحة القيادة' } },
  { src: '/fleet/toyota-camry-interior-luxury-seats-saudi-cabs-gmc.webp', alt: 'Toyota Camry Luxury Leather Seats Saudi Cabs GMC', label: { en: 'Leather Seats', ar: 'المقاعد الجلدية' } },
  { src: '/fleet/toyota-camry-interior-passenger-space-saudi-cabs-gmc.webp', alt: 'Toyota Camry Spacious Passenger Area', label: { en: 'Passenger Space', ar: 'مساحة الركاب' } },
]

const ROUTES = [
  { href: '/jeddah-airport-to-makkah', en: 'Jeddah Airport → Makkah', ar: 'مطار جدة ← مكة' },
  { href: '/makkah-to-madinah', en: 'Makkah → Madinah', ar: 'مكة ← المدينة' },
  { href: '/jeddah-to-makkah', en: 'Jeddah → Makkah', ar: 'جدة ← مكة' },
  { href: '/makkah-to-jeddah', en: 'Makkah → Jeddah', ar: 'مكة ← جدة' },
  { href: '/madinah-to-makkah', en: 'Madinah → Makkah', ar: 'المدينة ← مكة' },
  { href: '/makkah-to-taif', en: 'Makkah → Taif', ar: 'مكة ← الطائف' },
]

const FAQS = [
  { q: { en: 'How many passengers fit in the Toyota Camry taxi?', ar: 'كم عدد الركاب الذين يتسع لهم تاكسي تويوتا كامري؟' }, a: { en: 'The Toyota Camry comfortably seats 4 passengers with luggage. It is ideal for solo travellers, couples, and small families. For groups of 5–7, we recommend the Hyundai Staria or GMC Yukon.', ar: 'تتسع تويوتا كامري بشكل مريح لـ٤ ركاب مع الأمتعة. إنها مثالية للمسافرين المنفردين والأزواج والعائلات الصغيرة. للمجموعات من ٥–٧، نوصي بهيونداي ستاريا أو GMC يوكون.' } },
  { q: { en: 'Is the Toyota Camry available for airport transfers?', ar: 'هل تويوتا كامري متاحة لتوصيل المطار؟' }, a: { en: 'Yes. The Toyota Camry is our most popular vehicle for Jeddah Airport (KAIA) to Makkah and Madinah transfers. The driver meets you at arrivals with a name board. Fixed price, flight tracking included.', ar: 'نعم. تويوتا كامري هي سيارتنا الأكثر طلباً لتوصيل مطار جدة (كايا) إلى مكة والمدينة. يستقبلك السائق في صالة الوصول بلافتة باسمك. سعر ثابت، مع متابعة الرحلة.' } },
  { q: { en: 'What is the fare for a Toyota Camry from Jeddah Airport to Makkah?', ar: 'ما أجرة تويوتا كامري من مطار جدة إلى مكة؟' }, a: { en: 'Pricing is fixed and agreed before your trip — no meter, no surge pricing. Contact us on WhatsApp at +966 56 948 7569 for an instant quote for your specific route and date.', ar: 'التسعير ثابت ومتفق عليه قبل رحلتك — بدون عداد، بدون زيادة أسعار. تواصل معنا عبر واتساب على +966 56 948 7569 للحصول على سعر فوري لطريقك وتاريخك المحدد.' } },
  { q: { en: 'How much luggage can fit in a Toyota Camry?', ar: 'كم من الأمتعة يمكن أن تتسع له تويوتا كامري؟' }, a: { en: 'The Toyota Camry boot fits 3–4 large suitcases. For Hajj or Umrah trips with extra bags or Zamzam water, we recommend upgrading to the Hyundai Staria (7 seats, much larger boot).', ar: 'يتسع صندوق تويوتا كامري لـ٣–٤ حقائب كبيرة. لرحلات الحج والعمرة مع حقائب إضافية أو ماء زمزم، ننصح بالترقية إلى هيونداي ستاريا (٧ مقاعد، صندوق أكبر بكثير).' } },
  { q: { en: 'Is the Toyota Camry available 24/7?', ar: 'هل تويوتا كامري متاحة ٢٤/٧؟' }, a: { en: 'Yes. Saudi Cabs GMC operates 24 hours a day, 7 days a week, including Hajj and Umrah seasons. Book via WhatsApp at least a few hours in advance for best availability.', ar: 'نعم. تعمل Saudi Cabs GMC على مدار الساعة طوال أيام الأسبوع، بما في ذلك مواسم الحج والعمرة. احجز عبر واتساب قبل بضع ساعات على الأقل لأفضل توفر.' } },
]

export default function ToyotaCamryPage() {
  const { isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => b[isAr ? 'ar' : 'en']
  const waUrl = `https://wa.me/966569487569?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز تاكسي تويوتا كامري' : "Hello, I'd like to book a Toyota Camry taxi")}`

  return (
    <main>
      {/* Hero */}
      <section style={{ minHeight: '90vh', background: 'linear-gradient(135deg,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.44) 100%), url("/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '100px 0 70px' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <span style={{ display: 'inline-block', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.6)', color: 'var(--primary)', padding: '5px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px' }}>
                {isAr ? 'سيارة أجرة مريحة' : 'Comfortable Sedan Taxi'}
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '16px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>تاكسي تويوتا كامري</span><br />خدمة سيارة أجرة خاصة في السعودية</>
                  : <><span style={{ color: 'var(--primary)' }}>Toyota Camry Taxi</span><br />Private Sedan Across Saudi Arabia</>
                }
              </h1>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '500px' }}>
                {isAr
                  ? 'استمتع بالراحة والأناقة مع تاكسي تويوتا كامري الخاص. ٤ ركاب، سعر ثابت، سائق محترف. متاح ٢٤/٧ في مكة والمدينة وجدة والطائف.'
                  : 'Travel in comfort and style with a private Toyota Camry taxi. 4 passengers, fixed price, professional driver. Available 24/7 in Makkah, Madinah, Jeddah & Taif.'}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle size={16} strokeWidth={2.5} />{isAr ? 'احجز كامري الآن' : 'Book Camry Now'}</a>
                <a href="https://wa.me/966569487569" className="btn-outline"><Phone size={16} strokeWidth={2.5} />{isAr ? 'اتصل بنا' : 'Call Us'}</a>
              </div>
            </div>
            <div className="animate-fadeInUp animate-delay-1"><BookingForm /></div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ backgroundColor: '#111', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {GALLERY.map(img => (
            <div key={img.src} style={{ position: 'relative' }}>
              <img src={img.src} alt={img.alt} loading="lazy" width={600} height={340} style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
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
            <span className="section-tag">{isAr ? 'مواصفات الكامري' : 'Camry Features'}</span>
            <h2 className="section-title">{isAr ? <>لماذا <span style={{ color: 'var(--primary)' }}>تويوتا كامري</span>؟</> : <>Why Choose the <span style={{ color: 'var(--primary)' }}>Toyota Camry</span>?</>}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{isAr ? 'السيارة الأكثر طلباً لدينا — موثوقة، مريحة، وبسعر ممتاز' : 'Our most requested vehicle — reliable, comfortable, and great value'}</p>
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

      {/* Compare vehicles */}
      <section style={{ padding: '70px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'قارن السيارات' : 'Compare Vehicles'}</span>
            <h2 className="section-title">{isAr ? 'اختر السيارة المناسبة' : 'Pick the Right Vehicle'}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3">
            {[
              { name: { en: 'Toyota Camry', ar: 'تويوتا كامري' }, seats: '4', best: { en: 'Individuals & small families', ar: 'الأفراد والعائلات الصغيرة' }, tag: { en: 'Best Value', ar: 'أفضل قيمة' }, active: true, href: '/toyota-camry-taxi' },
              { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7', best: { en: 'Families & Umrah groups', ar: 'العائلات ومجموعات العمرة' }, tag: { en: 'Family Choice', ar: 'خيار العائلة' }, active: false, href: '/hyundai-staria-taxi' },
              { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7', best: { en: 'VIP & luxury travel', ar: 'رحلات VIP والفاخرة' }, tag: { en: 'VIP', ar: 'VIP' }, active: false, href: '/gmc-yukon-hire' },
            ].map(v => (
              <Link key={v.href} href={v.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: v.active ? 'linear-gradient(135deg,#0B3D2E,#0F5132)' : 'var(--card)', borderRadius: '16px', padding: '28px 24px', border: v.active ? 'none' : '1.5px solid var(--border)', color: v.active ? 'white' : 'var(--foreground)', textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
                  {v.active && <div style={{ background: 'var(--primary)', color: '#1D1D1B', fontSize: '0.72rem', fontWeight: '800', padding: '3px 12px', borderRadius: '50px', display: 'inline-block', marginBottom: '12px' }}>{tx(v.tag)}</div>}
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '6px' }}>{tx(v.name)}</div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '8px' }}>{v.seats} {isAr ? 'ركاب' : 'passengers'}</div>
                  <div style={{ fontSize: '0.82rem', opacity: 0.8 }}>{tx(v.best)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section style={{ padding: '50px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'خطوط الكامري الشائعة' : 'Popular Camry Routes'}</span>
            <h2 className="section-title">{isAr ? 'أشهر المسارات' : 'Most Booked Routes'}</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {ROUTES.map(r => (
              <Link key={r.href} href={r.href} className="route-badge"><MapPin size={14} />{tx(r)}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading={{ ar: 'أسئلة شائعة — تاكسي تويوتا كامري', en: 'FAQ — Toyota Camry Taxi' }} />

      {/* CTA */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#0B3D2E,#0F5132)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>{isAr ? 'احجز تاكسي تويوتا كامري الآن' : 'Book Your Toyota Camry Taxi Now'}</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px' }}>{isAr ? 'سعر ثابت — سائق محترف — ٢٤/٧' : 'Fixed Price — Professional Driver — 24/7'}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#D4AF37,#E6C65C)', color: '#1D1D1B', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><MessageCircle size={18} strokeWidth={2.5} />{isAr ? 'واتساب' : 'WhatsApp'}</a>
            <a href="https://wa.me/966569487569" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.5)', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Phone size={18} strokeWidth={2.5} />+966 56 948 7569</a>
          </div>
        </div>
      </section>
    </main>
  )
}
