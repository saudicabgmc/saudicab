'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Shield, Clock, Star, Users, MapPin } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const FAQS = [
  { q: { en: 'What is a private driver service in Saudi Arabia?', ar: 'ما هي خدمة السائق الخاص في المملكة؟' }, a: { en: 'A private driver (chauffeur) service means a professional, uniformed driver is assigned exclusively to you for a set number of hours or days. They take you wherever you need, wait for you, and ensure a premium experience throughout.', ar: 'خدمة السائق الخاص (الشوفير) تعني تخصيص سائق محترف بزي رسمي لك حصرياً لعدد محدد من الساعات أو الأيام. يأخذك أينما تحتاج وينتظرك ويضمن تجربة راقية طوال الوقت.' } },
  { q: { en: 'How many hours can I book a private driver for?', ar: 'كم ساعة يمكنني حجز سائق خاص؟' }, a: { en: 'Saudi Cabs GMC offers private driver packages from 4 hours, 8 hours, or full day (12 hours). Multi-day packages are also available for extended stays.', ar: 'Saudi Cabs GMC تقدم باقات سائق خاص من 4 ساعات أو 8 ساعات أو يوم كامل (12 ساعة). الباقات متعددة الأيام متاحة أيضاً للإقامات الطويلة.' } },
  { q: { en: 'Can I use a private driver for business in Jeddah?', ar: 'هل يمكنني استخدام سائق خاص للأعمال في جدة؟' }, a: { en: 'Yes, our executive chauffeur service in Jeddah includes luxury sedan or SUV, professional driver in formal attire, and punctual service for meetings, conferences, and airport connections.', ar: 'نعم، خدمة الشوفير التنفيذي في جدة تشمل سيداناً فاخراً أو SUV، وسائقاً محترفاً بزي رسمي، وخدمة دقيقة للمواعيد للاجتماعات والمؤتمرات ورحلات المطار.' } },
  { q: { en: 'Is a private driver available for Islamic site tours in Makkah and Madinah?', ar: 'هل السائق الخاص متاح لجولات المزارات الإسلامية في مكة والمدينة؟' }, a: { en: 'Yes, our drivers in Makkah and Madinah know all the Islamic historical sites. You can hire a full-day private driver to visit Jabal Al-Nour, Jabal Thawr, Masjid Quba, Mount Uhud, Al-Baqi, and more.', ar: 'نعم، سائقونا في مكة والمدينة يعرفون جميع المواقع الإسلامية التاريخية. يمكنك استئجار سائق خاص ليوم كامل لزيارة جبل النور وجبل ثور ومسجد قباء وجبل أحد والبقيع وأكثر.' } },
]

export default function PrivateDriverPage() {
  const { lang, isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => b[lang]
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز سائق خاص' : "Hello, I'd like to book a private driver")}`

  return (
    <main>
      <section style={{ minHeight: '90vh', background: 'linear-gradient(135deg,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.44) 100%), url("/location/jeddah.webp")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '100px 0 70px' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <span style={{ display: 'inline-block', background: 'rgba(107,114,128,0.3)', border: '1px solid rgba(209,213,219,0.5)', color: 'white', padding: '5px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px' }}>
                {isAr ? 'سائق خاص — شوفير' : 'Private Driver — Chauffeur'}
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '16px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>سائق خاص</span> في المملكة العربية السعودية<br />مكة — المدينة — جدة — الطائف</>
                  : <><span style={{ color: 'var(--primary)' }}>Private Driver</span> in Saudi Arabia<br />Makkah — Madinah — Jeddah — Taif</>
                }
              </h1>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '500px' }}>
                {isAr
                  ? 'سائق خاص محترف بزي رسمي، مخصص لك طوال اليوم. مثالي للأعمال والزيارات السياحية والعائلات والحجاج. أسعار يومية ثابتة.'
                  : 'Professional uniformed private chauffeur, dedicated to you for the entire day. Ideal for business, sightseeing, families, and pilgrims. Fixed daily rates.'
                }
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle size={16} strokeWidth={2.5} />{isAr ? 'احجز سائقك الخاص' : 'Book Your Private Driver'}</a>
                <a href="tel:+923097811785" className="btn-outline"><Phone size={16} strokeWidth={2.5} />{isAr ? 'اتصل بنا' : 'Call Us'}</a>
              </div>
            </div>
            <div className="animate-fadeInUp animate-delay-1"><BookingForm /></div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header"><span className="section-tag">{isAr ? 'متى تحتاج سائقاً خاصاً؟' : 'When Do You Need a Private Driver?'}</span>
            <h2 className="section-title">{isAr ? <>مناسبات <span style={{ color: 'var(--primary)' }}>السائق الخاص</span></> : <><span style={{ color: 'var(--primary)' }}>Private Driver</span> Use Cases</>}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-4">
            {[
              { icon: '🕌', t: { en: 'Islamic Site Tours', ar: 'جولات المزارات الإسلامية' }, d: { en: 'Visit all Makkah & Madinah historical sites in one day', ar: 'زيارة جميع مواقع مكة والمدينة التاريخية في يوم واحد' } },
              { icon: '💼', t: { en: 'Business Travel', ar: 'السفر للأعمال' }, d: { en: 'Punctual executive transport for meetings & events', ar: 'نقل تنفيذي دقيق للاجتماعات والفعاليات' } },
              { icon: '👨‍👩‍👧', t: { en: 'Family Outings', ar: 'رحلات العائلة' }, d: { en: 'Shopping, restaurants, parks & city tours', ar: 'التسوق والمطاعم والمتنزهات وجولات المدينة' } },
              { icon: '🌹', t: { en: 'Taif Mountain Tours', ar: 'جولات جبال الطائف' }, d: { en: 'Shafa, Hada, rose farms & Al-Rudaf Park in one trip', ar: 'شفا وهدا ومزارع الورد وحديقة الرضف في رحلة واحدة' } },
              { icon: '🏥', t: { en: 'Medical Visits', ar: 'الزيارات الطبية' }, d: { en: 'Reliable transport to hospitals and clinics', ar: 'مواصلات موثوقة للمستشفيات والعيادات' } },
              { icon: '🎓', t: { en: 'School & University', ar: 'المدارس والجامعات' }, d: { en: 'Safe daily school runs and campus transport', ar: 'رحلات مدرسية يومية آمنة' } },
              { icon: '💍', t: { en: 'Weddings & Events', ar: 'الأعراس والفعاليات' }, d: { en: 'VIP transport for special occasions', ar: 'نقل VIP للمناسبات الخاصة' } },
              { icon: '🛍️', t: { en: 'Shopping Tours', ar: 'جولات التسوق' }, d: { en: 'Mall to mall in Jeddah, Makkah & Madinah', ar: 'من مول لمول في جدة ومكة والمدينة' } },
            ].map(s => (
              <div key={s.t.en} className="service-card">
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.88rem', fontWeight: '800', marginBottom: '8px' }}>{tx(s.t)}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>{tx(s.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section style={{ padding: '70px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header"><span className="section-tag">{isAr ? 'باقاتنا' : 'Our Packages'}</span>
            <h2 className="section-title">{isAr ? <>باقات <span style={{ color: 'var(--primary)' }}>السائق الخاص</span></> : <><span style={{ color: 'var(--primary)' }}>Private Driver</span> Packages</>}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3">
            {[
              { t: { en: 'Half Day', ar: 'نصف يوم' }, h: { en: '4 hours', ar: '4 ساعات' }, d: { en: 'Perfect for airport pickup, a few errands, or a short tour. Driver stays with you throughout.', ar: 'مثالي للاستقبال من المطار أو بعض المشاوير أو جولة قصيرة. السائق يبقى معك طوال الوقت.' }, icon: '🕓' },
              { t: { en: 'Full Day', ar: 'يوم كامل' }, h: { en: '8–10 hours', ar: '8-10 ساعات' }, d: { en: 'Ideal for sightseeing tours, city errands, or extended business travel. Most popular package.', ar: 'مثالي لجولات السياحة أو مشاوير المدينة أو الأعمال الموسعة. الباقة الأكثر طلباً.' }, icon: '☀️' },
              { t: { en: 'Multi-Day', ar: 'أيام متعددة' }, h: { en: '2–7+ days', ar: 'يومان – أسبوع أو أكثر' }, d: { en: 'Best value for extended stays. Same driver every day, consistent service, reduced daily rate.', ar: 'أفضل قيمة للإقامات الطويلة. نفس السائق يومياً وخدمة متسقة وسعر يومي مخفض.' }, icon: '📅' },
            ].map(p => (
              <div key={p.t.en} style={{ background: 'white', borderRadius: '16px', padding: '32px 24px', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '6px' }}>{tx(p.t)}</h3>
                <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem', marginBottom: '14px' }}>{tx(p.h)}</div>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: 1.65, marginBottom: '20px' }}>{tx(p.d)}</p>
                <a href={`https://wa.me/923097811785?text=${encodeURIComponent(isAr ? `أرغب في حجز سائق خاص - ${p.t.ar}` : `I'd like a private driver - ${p.t.en} package`)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#25D366', color: 'white', padding: '9px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '0.84rem', textDecoration: 'none' }}>
                  <MessageCircle size={14} strokeWidth={2.5} />{isAr ? 'احجز الآن' : 'Book Now'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section style={{ padding: '50px 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ marginBottom: '16px', display: 'inline-block' }}>{isAr ? 'مدن الخدمة' : 'Service Cities'}</span>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
            {[{ href: '/makkah-taxi-service', ar: 'سائق خاص مكة', en: 'Makkah Private Driver' }, { href: '/madinah-taxi-service', ar: 'سائق خاص المدينة', en: 'Madinah Private Driver' }, { href: '/jeddah-taxi-service', ar: 'سائق خاص جدة', en: 'Jeddah Private Driver' }, { href: '/taif-taxi-service', ar: 'سائق خاص الطائف', en: 'Taif Private Driver' }].map(c => (
              <Link key={c.href} href={c.href} className="route-badge"><MapPin size={14} />{isAr ? c.ar : c.en}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading={{ ar: 'أسئلة شائعة — السائق الخاص', en: 'FAQ — Private Driver Service' }} />

      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#0B3D2E,#0F5132)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>{isAr ? 'احجز سائقك الخاص الآن' : 'Book Your Private Driver Now'}</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px' }}>{isAr ? 'متاح في مكة والمدينة وجدة والطائف — يومياً وأسبوعياً' : 'Available in Makkah, Madinah, Jeddah & Taif — daily & weekly'}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'أرغب في حجز سائق خاص' : "I'd like a private driver")}`} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#D4AF37,#E6C65C)', color: '#1D1D1B', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><MessageCircle size={18} strokeWidth={2.5} />{isAr ? 'واتساب' : 'WhatsApp'}</a>
            <a href="tel:+923097811785" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.5)', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Phone size={18} strokeWidth={2.5} />+92 309 7811785</a>
          </div>
        </div>
      </section>
    </main>
  )
}
