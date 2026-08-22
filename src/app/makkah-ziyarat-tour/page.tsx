'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Landmark, Mountain, MapPin, Star, Building2, Users, Car, Shield, CheckCircle } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const SITES = [
  { icon: <Landmark size={26} strokeWidth={1.8} />, t: { en: 'Al-Masjid Al-Haram', ar: 'المسجد الحرام' }, d: { en: 'The Grand Mosque — holiest site on earth, Kaaba & Zamzam Well', ar: 'المسجد الحرام — أقدس موقع على الأرض، الكعبة وبئر زمزم' } },
  { icon: <Mountain size={26} strokeWidth={1.8} />, t: { en: 'Jabal Al-Nour', ar: 'جبل النور' }, d: { en: 'Cave of Hira — where the first Quran revelation descended', ar: 'غار حراء — حيث نزل أول وحي قرآني' } },
  { icon: <Mountain size={26} strokeWidth={1.8} />, t: { en: 'Jabal Thawr', ar: 'جبل ثور' }, d: { en: 'Cave of Thawr — refuge of the Prophet ﷺ during Hijra', ar: 'غار ثور — ملجأ النبي ﷺ أثناء الهجرة' } },
  { icon: <MapPin size={26} strokeWidth={1.8} />, t: { en: 'Mina', ar: 'منى' }, d: { en: 'The tent city — pilgrims spend Hajj nights & stone the Jamarat', ar: 'مدينة الخيام — حيث يقضي الحجاج لياليهم ويرمون الجمرات' } },
  { icon: <MapPin size={26} strokeWidth={1.8} />, t: { en: 'Arafat', ar: 'عرفات' }, d: { en: 'The plain of Arafat — the pinnacle of Hajj standing', ar: 'سهل عرفات — قمة الوقوف في الحج' } },
  { icon: <MapPin size={26} strokeWidth={1.8} />, t: { en: 'Muzdalifah', ar: 'المزدلفة' }, d: { en: 'Sacred gathering place between Arafat and Mina', ar: 'المكان المقدس بين عرفات ومنى' } },
  { icon: <Building2 size={26} strokeWidth={1.8} />, t: { en: 'Makkah Museum', ar: 'متحف مكة' }, d: { en: 'Ajyad Fortress & historic Makkah heritage sites', ar: 'قلعة أجياد ومواقع تراث مكة التاريخية' } },
  { icon: <Star size={26} strokeWidth={1.8} />, t: { en: 'Al-Aziziyah & Al-Shisha', ar: 'العزيزية والشيشة' }, d: { en: 'Key pilgrim neighborhoods near the Haram', ar: 'أحياء الحجاج الرئيسية بالقرب من الحرم' } },
]

const PACKAGES = [
  {
    t: { en: 'Half-Day Ziyarat', ar: 'زيارة نصف يوم' },
    h: { en: '4 Hours', ar: '٤ ساعات' },
    f: { en: ['2–3 main Makkah sites', 'Private licensed driver', 'AC vehicle', 'Fixed price'], ar: ['٢–٣ من أبرز مواقع مكة', 'سائق خاص مرخص', 'سيارة مكيفة', 'سعر ثابت'] },
  },
  {
    t: { en: 'Full-Day Ziyarat', ar: 'زيارة يوم كامل' },
    h: { en: '8 Hours', ar: '٨ ساعات' },
    f: { en: ['All major Makkah Ziyarat sites', 'Jabal Al-Nour & Jabal Thawr', 'Mina, Arafat & Muzdalifah', 'Comfortable family vehicle', 'Fixed price — no hidden fees'], ar: ['جميع مواقع زيارات مكة الرئيسية', 'جبل النور وجبل ثور', 'منى وعرفات والمزدلفة', 'سيارة عائلية مريحة', 'سعر ثابت — بلا رسوم خفية'] },
  },
  {
    t: { en: 'Group Ziyarat Tour', ar: 'جولة زيارات جماعية' },
    h: { en: 'Custom Duration', ar: 'مدة مخصصة' },
    f: { en: ['GMC Yukon or Staria van', 'Up to 7 passengers', 'All sites customizable', 'Family & group packages'], ar: ['GMC يوكون أو ستاريا', 'حتى ٧ ركاب', 'جميع المواقع قابلة للتخصيص', 'باقات عائلية وجماعية'] },
  },
]

const FAQS = [
  { q: { en: 'What is included in a Makkah Ziyarat tour?', ar: 'ما الذي يشمله جولة زيارات مكة؟' }, a: { en: 'Our Makkah Ziyarat tour includes a private licensed driver and vehicle for your chosen duration, covering major sites like Jabal Al-Nour, Jabal Thawr, Mina, Arafat, and Muzdalifah. The driver is familiar with all sites and can guide you through the visit.', ar: 'تشمل جولة زيارات مكة لدينا سائقاً خاصاً مرخصاً وسيارة لمدة اختيارك، تغطي المواقع الرئيسية كجبل النور وجبل ثور ومنى وعرفات والمزدلفة. السائق على دراية بجميع المواقع ويمكنه إرشادك خلال الزيارة.' } },
  { q: { en: 'How long does a full Makkah Ziyarat take?', ar: 'كم يستغرق جولة زيارات مكة الكاملة؟' }, a: { en: 'A complete Makkah Ziyarat tour covering all major sites typically takes 6–8 hours. A half-day tour (4 hours) covers 2–3 key sites. We customize the itinerary based on your time and preferences.', ar: 'جولة زيارات مكة الكاملة التي تغطي جميع المواقع الرئيسية تستغرق عادةً 6-8 ساعات. جولة نصف اليوم (4 ساعات) تغطي 2-3 مواقع رئيسية. نخصص الجدول الزمني بناءً على وقتك وتفضيلاتك.' } },
  { q: { en: 'Can non-Muslims join a Makkah Ziyarat tour?', ar: 'هل يمكن لغير المسلمين الانضمام إلى جولة زيارات مكة؟' }, a: { en: 'Makkah is restricted to Muslims only. All passengers on our Makkah Ziyarat tours must be Muslim. We do not serve non-Muslim passengers for Makkah routes.', ar: 'مكة المكرمة مقتصرة على المسلمين فقط. يجب أن يكون جميع الركاب في جولات زيارات مكة مسلمين. لا نخدم الركاب غير المسلمين لخطوط مكة.' } },
  { q: { en: 'Do you provide a guide during the Ziyarat tour?', ar: 'هل تقدمون مرشداً خلال جولة الزيارات؟' }, a: { en: 'Our drivers are knowledgeable about the history and significance of all Makkah sites. While they are not certified religious guides, they can point out and explain the importance of each location during the tour.', ar: 'سائقونا على دراية بتاريخ وأهمية جميع مواقع مكة. وإن لم يكونوا مرشدين دينيين معتمدين، إلا أنهم يمكنهم الإشارة وشرح أهمية كل موقع أثناء الجولة.' } },
]

export default function MakkahZiyaratPage() {
  const { isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => b[isAr ? 'ar' : 'en']
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز جولة زيارات مكة' : "Hello, I'd like to book a Makkah Ziyarat tour")}`

  return (
    <main>
      {/* Hero */}
      <section style={{ minHeight: '90vh', background: 'linear-gradient(135deg,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.44) 100%), url("/location/makkah.webp")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '100px 0 70px' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <span style={{ display: 'inline-block', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.6)', color: 'var(--primary)', padding: '5px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px' }}>
                {isAr ? 'زيارات مكة المكرمة' : 'Makkah Ziyarat'}
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '16px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>زيارات مكة المكرمة</span><br />جولة المواقع الإسلامية بسائق خاص</>
                  : <><span style={{ color: 'var(--primary)' }}>Makkah Ziyarat Tour</span><br />Islamic Sites with Private Driver</>
                }
              </h1>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '500px' }}>
                {isAr
                  ? 'اكتشف المواقع الإسلامية المقدسة في مكة المكرمة مع سائق خاص محترف. جبل النور، جبل ثور، منى، عرفات والمزدلفة — بسعر ثابت ونصف يوم أو يوم كامل.'
                  : 'Explore the sacred Islamic sites of Makkah with a professional private driver. Jabal Al-Nour, Jabal Thawr, Mina, Arafat & Muzdalifah — fixed price, half-day or full-day.'
                }
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle size={16} strokeWidth={2.5} />{isAr ? 'احجز جولة الزيارات' : 'Book Ziyarat Tour'}</a>
                <a href="tel:+923097811785" className="btn-outline"><Phone size={16} strokeWidth={2.5} />{isAr ? 'اتصل بنا' : 'Call Us'}</a>
              </div>
            </div>
            <div className="animate-fadeInUp animate-delay-1"><BookingForm /></div>
          </div>
        </div>
      </section>

      {/* Sites */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'المواقع المشمولة' : 'Sites Covered'}</span>
            <h2 className="section-title">{isAr ? <>مواقع <span style={{ color: 'var(--primary)' }}>زيارات مكة</span> المقدسة</> : <><span style={{ color: 'var(--primary)' }}>Makkah Ziyarat</span> Sacred Sites</>}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-4">
            {SITES.map(s => (
              <div key={s.t.en} className="service-card" style={{ textAlign: 'center' }}>
                <div className="service-icon" style={{ margin: '0 auto 14px' }}>{s.icon}</div>
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
          <div className="section-header">
            <span className="section-tag">{isAr ? 'باقات الجولة' : 'Tour Packages'}</span>
            <h2 className="section-title">{isAr ? 'اختر باقة زيارتك' : 'Choose Your Ziyarat Package'}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3">
            {PACKAGES.map((p, i) => (
              <div key={p.t.en} style={{ background: i === 1 ? 'linear-gradient(135deg,#0B3D2E,#0F5132)' : 'var(--card)', borderRadius: '16px', padding: '32px 28px', border: i === 1 ? 'none' : '1.5px solid var(--border)', color: i === 1 ? 'white' : 'var(--foreground)', boxShadow: i === 1 ? '0 8px 32px rgba(11,61,46,0.3)' : 'var(--shadow-sm)' }}>
                {i === 1 && <div style={{ background: 'var(--primary)', color: '#1D1D1B', fontSize: '0.72rem', fontWeight: '800', padding: '3px 12px', borderRadius: '50px', display: 'inline-block', marginBottom: '12px' }}>{isAr ? 'الأكثر طلباً' : 'Most Popular'}</div>}
                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: i === 1 ? 'var(--primary)' : 'var(--primary)', marginBottom: '4px' }}>{tx(p.h)}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '20px' }}>{tx(p.t)}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {(isAr ? p.f.ar : p.f.en).map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                      <CheckCircle size={15} color={i === 1 ? 'var(--primary)' : 'var(--primary)'} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: i === 1 ? 'var(--primary)' : 'var(--primary)', color: '#1D1D1B', padding: '12px', borderRadius: '10px', fontWeight: '800', fontSize: '0.85rem', textDecoration: 'none' }}>
                  <MessageCircle size={15} strokeWidth={2.5} />{isAr ? 'احجز الآن' : 'Book Now'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City links */}
      <section style={{ padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[{ href: '/makkah-taxi-service', ar: 'مكة', en: 'Makkah' }, { href: '/madinah-ziyarat-tour', ar: 'زيارات المدينة', en: 'Madinah Ziyarat' }, { href: '/hajj-umrah-transport', ar: 'الحج والعمرة', en: 'Hajj & Umrah' }, { href: '/private-driver', ar: 'سائق خاص', en: 'Private Driver' }].map(c => (
              <Link key={c.href} href={c.href} className="route-badge"><MapPin size={14} />{isAr ? c.ar : c.en}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading={{ ar: 'أسئلة شائعة — زيارات مكة', en: 'FAQ — Makkah Ziyarat Tour' }} />

      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#0B3D2E,#0F5132)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>{isAr ? 'احجز جولة زيارات مكة الآن' : 'Book Your Makkah Ziyarat Tour Now'}</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px' }}>{isAr ? 'سائق خاص — جميع المواقع — سعر ثابت' : 'Private Driver — All Sites — Fixed Price'}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#D4AF37,#E6C65C)', color: '#1D1D1B', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><MessageCircle size={18} strokeWidth={2.5} />{isAr ? 'واتساب' : 'WhatsApp'}</a>
            <a href="tel:+923097811785" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.5)', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Phone size={18} strokeWidth={2.5} />+92 309 7811785</a>
          </div>
        </div>
      </section>
    </main>
  )
}
