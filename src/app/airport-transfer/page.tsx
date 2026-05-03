'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Plane, Clock, Shield, Star, MapPin } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const AIRPORT_ROUTES = [
  { slug: 'jeddah-airport-to-makkah', from: { en: 'Jeddah Airport (KAIA)', ar: 'مطار جدة الدولي' }, to: { en: 'Makkah', ar: 'مكة المكرمة' }, dur: '~55 min' },
  { slug: 'jeddah-airport-to-madinah', from: { en: 'Jeddah Airport (KAIA)', ar: 'مطار جدة الدولي' }, to: { en: 'Madinah', ar: 'المدينة المنورة' }, dur: '~4 hrs' },
  { slug: 'madinah-airport-taxi', from: { en: 'Madinah Airport (MED)', ar: 'مطار المدينة' }, to: { en: "Prophet's Mosque", ar: 'المسجد النبوي' }, dur: '~30 min' },
  { slug: 'makkah-to-jeddah-airport', from: { en: 'Makkah', ar: 'مكة المكرمة' }, to: { en: 'Jeddah Airport', ar: 'مطار جدة' }, dur: '~55 min' },
]

const FAQS = [
  { q: { en: 'Which airports does Saudi Cabs GMC serve?', ar: 'ما المطارات التي تخدمها Saudi Cabs GMC؟' }, a: { en: 'Saudi Cabs GMC covers King Abdulaziz International Airport in Jeddah (KAIA), Prince Mohammad bin Abdulaziz Airport in Madinah (MED), and Taif Airport. We also connect all major airports to nearby cities.', ar: 'Saudi Cabs GMC تغطي مطار الملك عبدالعزيز الدولي بجدة ومطار الأمير محمد بن عبدالعزيز بالمدينة ومطار الطائف. كما نربط جميع المطارات الرئيسية بالمدن المجاورة.' } },
  { q: { en: 'What is included in an airport transfer?', ar: 'ما الذي يشمله توصيل المطار؟' }, a: { en: 'Our airport transfers include: name-board meet-and-greet at arrivals, flight tracking (no extra charge for delays), luggage assistance, direct transfer to your destination, and a fixed price with no hidden fees.', ar: 'تشمل تحويلات المطار لدينا: استقبال بلوحة الاسم في الوصول، ومتابعة الرحلة (بلا رسوم إضافية للتأخير)، ومساعدة في الأمتعة، وتوصيل مباشر لوجهتك، وسعر ثابت بدون رسوم خفية.' } },
  { q: { en: 'How do I book an airport transfer?', ar: 'كيف أحجز توصيل مطار؟' }, a: { en: 'Send a WhatsApp message to +966 56 948 7569 with your: flight number, arrival/departure time, number of passengers, destination, and vehicle preference. We confirm within minutes.', ar: 'أرسل رسالة واتساب إلى +966 56 948 7569 مع: رقم رحلتك، وقت الوصول/المغادرة، عدد الركاب، الوجهة، وتفضيل السيارة. نؤكد خلال دقائق.' } },
  { q: { en: 'What if my flight is delayed or cancelled?', ar: 'ماذا لو تأخرت رحلتي أو أُلغيت؟' }, a: { en: 'Saudi Cabs GMC monitors all flights in real time. If your flight is delayed, your driver adjusts automatically — no extra charge. For cancellations, contact us immediately to reschedule.', ar: 'Saudi Cabs GMC تتابع جميع الرحلات في الوقت الفعلي. إذا تأخرت رحلتك، يتكيف السائق تلقائياً — بلا رسوم إضافية. للإلغاءات، تواصل معنا فوراً لإعادة الجدولة.' } },
]

export default function AirportTransferPage() {
  const { lang, isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => b[lang]
  const waUrl = `https://wa.me/966569487569?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز توصيل مطار' : "Hello, I'd like to book an airport transfer")}`

  return (
    <main>
      <section style={{ minHeight: '90vh', background: 'linear-gradient(135deg,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.44) 100%), url("/location/jeddah.webp")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '100px 0 70px' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <span style={{ display: 'inline-block', background: 'rgba(30,58,138,0.3)', border: '1px solid rgba(30,58,138,0.7)', color: '#93c5fd', padding: '5px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px' }}>
                {isAr ? 'توصيل مطار' : 'Airport Transfer'}
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '16px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>توصيل المطار</span> في السعودية<br />احترافي — موثوق — ٢٤/٧</>
                  : <><span style={{ color: 'var(--primary)' }}>Airport Transfer</span> Saudi Arabia<br />Professional — Reliable — 24/7</>
                }
              </h1>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '500px' }}>
                {isAr
                  ? 'خدمة توصيل مطار احترافية من وإلى جميع مطارات المملكة. استقبال بلوحة الاسم، متابعة الرحلة، سيارات مرخصة، سعر ثابت.'
                  : 'Professional airport transfer to and from all Saudi airports. Name-board pickup, flight tracking, licensed vehicles, fixed price — no surprises.'
                }
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle size={16} strokeWidth={2.5} />{isAr ? 'احجز توصيل المطار' : 'Book Airport Transfer'}</a>
                <a href="tel:+966569487569" className="btn-outline"><Phone size={16} strokeWidth={2.5} />{isAr ? 'اتصل بنا' : 'Call Us'}</a>
              </div>
            </div>
            <div className="animate-fadeInUp animate-delay-1"><BookingForm /></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'مميزات الخدمة' : 'Service Features'}</span>
            <h2 className="section-title">{isAr ? <>لماذا <span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span> للمطارات؟</> : <>Why Choose <span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span> for Airports?</>}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-4">
            {[
              { icon: <Plane size={28} strokeWidth={1.8} />, t: { en: 'Flight Tracking', ar: 'متابعة الرحلة' }, d: { en: 'Real-time flight monitoring — no extra charge for delays', ar: 'متابعة فورية للرحلة — بلا رسوم إضافية للتأخير' } },
              { icon: <Star size={28} strokeWidth={1.8} />, t: { en: 'Name-Board Pickup', ar: 'استقبال بلوحة الاسم' }, d: { en: 'Driver waiting at arrivals with your name sign', ar: 'السائق ينتظرك بلافتة باسمك في صالة الوصول' } },
              { icon: <Shield size={28} strokeWidth={1.8} />, t: { en: 'Licensed Vehicles', ar: 'سيارات مرخصة' }, d: { en: 'Fully licensed, clean & air-conditioned cars', ar: 'سيارات نظيفة ومكيفة ومرخصة بالكامل' } },
              { icon: <Clock size={28} strokeWidth={1.8} />, t: { en: 'On-Time Guarantee', ar: 'ضمان المواعيد' }, d: { en: 'We calculate traffic buffers for every flight', ar: 'نحسب وقتاً احتياطياً للازدحام لكل رحلة' } },
            ].map(i => (
              <div key={i.t.en} className="service-card" style={{ textAlign: 'center' }}>
                <div className="service-icon" style={{ margin: '0 auto 14px' }}>{i.icon}</div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '8px' }}>{tx(i.t)}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted-foreground)' }}>{tx(i.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Routes */}
      <section style={{ padding: '70px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header"><span className="section-tag">{isAr ? 'خطوط المطارات' : 'Airport Routes'}</span>
            <h2 className="section-title">{isAr ? 'أكثر رحلات المطارات طلباً' : 'Most Requested Airport Routes'}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-2" style={{ gap: '14px' }}>
            {AIRPORT_ROUTES.map(r => (
              <Link key={r.slug} href={`/${r.slug}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white', borderRadius: '14px', padding: '20px 22px', border: '1.5px solid var(--border)', textDecoration: 'none', boxShadow: 'var(--shadow-sm)', transition: 'all 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <div>
                  <div style={{ fontWeight: '800', fontSize: '0.95rem', marginBottom: '4px' }}>{tx(r.from)} → {tx(r.to)}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{r.dur} • {isAr ? 'سعر ثابت' : 'Fixed Price'}</div>
                </div>
                <Plane size={18} color="var(--primary)" strokeWidth={2} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City Links */}
      <section style={{ padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[{ href: '/makkah-taxi-service', ar: 'مكة', en: 'Makkah' }, { href: '/madinah-taxi-service', ar: 'المدينة', en: 'Madinah' }, { href: '/jeddah-taxi-service', ar: 'جدة', en: 'Jeddah' }, { href: '/taif-taxi-service', ar: 'الطائف', en: 'Taif' }].map(c => (
              <Link key={c.href} href={c.href} className="route-badge"><MapPin size={14} />{isAr ? c.ar : c.en}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading={{ ar: 'أسئلة شائعة — توصيل المطار', en: 'FAQ — Airport Transfer' }} />

      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#0B3D2E,#0F5132)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>{isAr ? 'احجز توصيل المطار الآن' : 'Book Your Airport Transfer Now'}</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px' }}>{isAr ? 'متابعة الرحلة — استقبال بلوحة الاسم — سعر ثابت' : 'Flight Tracking — Name-Board Pickup — Fixed Price'}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#D4AF37,#E6C65C)', color: '#1D1D1B', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><MessageCircle size={18} strokeWidth={2.5} />{isAr ? 'واتساب' : 'WhatsApp'}</a>
            <a href="tel:+966569487569" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.5)', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Phone size={18} strokeWidth={2.5} />+966 56 948 7569</a>
          </div>
        </div>
      </section>
    </main>
  )
}
