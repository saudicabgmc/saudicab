'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Landmark, Mountain, MapPin, Star, Building2, CheckCircle } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const SITES = [
  { icon: <Landmark size={26} strokeWidth={1.8} />, t: { en: 'Masjid an-Nabawi', ar: 'المسجد النبوي' }, d: { en: 'The Prophet\'s Mosque — second holiest mosque in Islam, blessed resting place of the Prophet ﷺ', ar: 'المسجد النبوي — ثاني أقدس مسجد في الإسلام، المرقد الشريف للنبي ﷺ' } },
  { icon: <Landmark size={26} strokeWidth={1.8} />, t: { en: 'Masjid Quba', ar: 'مسجد قباء' }, d: { en: 'First mosque ever built in Islam — two rak\'ahs here equal the reward of Umrah', ar: 'أول مسجد بُني في الإسلام — ركعتان فيه تعادلان ثواب عمرة' } },
  { icon: <Landmark size={26} strokeWidth={1.8} />, t: { en: 'Masjid al-Qiblatayn', ar: 'مسجد القبلتين' }, d: { en: 'Mosque of Two Qiblas — where the direction of prayer changed from Jerusalem to Makkah', ar: 'مسجد القبلتين — حيث تحولت القبلة من القدس إلى مكة المكرمة' } },
  { icon: <Mountain size={26} strokeWidth={1.8} />, t: { en: 'Jabal Uhud', ar: 'جبل أحد' }, d: { en: 'Mount Uhud — site of the Battle of Uhud, resting place of 70 companions', ar: 'جبل أحد — موقع معركة أحد، مثوى ٧٠ صحابياً' } },
  { icon: <Building2 size={26} strokeWidth={1.8} />, t: { en: 'Al-Baqi Cemetery', ar: 'البقيع' }, d: { en: 'Jannat al-Baqi — the historic cemetery of Madinah where many companions are buried', ar: 'جنة البقيع — مقبرة المدينة التاريخية التي تضم رفات كثير من الصحابة' } },
  { icon: <Landmark size={26} strokeWidth={1.8} />, t: { en: 'Masjid al-Ghamamah', ar: 'مسجد الغمامة' }, d: { en: 'Mosque of the Cloud — where the Prophet ﷺ led Eid prayers', ar: 'مسجد الغمامة — حيث أدى النبي ﷺ صلاة العيد' } },
  { icon: <MapPin size={26} strokeWidth={1.8} />, t: { en: 'Masjid al-Jumu\'ah', ar: 'مسجد الجمعة' }, d: { en: 'Site of the first Jumu\'ah prayer led by the Prophet ﷺ after Hijra', ar: 'موقع أول صلاة جمعة أمّ بها النبي ﷺ بعد الهجرة' } },
  { icon: <Star size={26} strokeWidth={1.8} />, t: { en: 'Seven Mosques Area', ar: 'منطقة المساجد السبعة' }, d: { en: 'Historic battlefield mosques — Masjid Salman, Masjid Ali, Masjid al-Fath and more', ar: 'مساجد أرض المعركة التاريخية — مسجد سلمان ومسجد علي ومسجد الفتح وغيرها' } },
]

const PACKAGES = [
  {
    t: { en: 'Half-Day Ziyarat', ar: 'زيارة نصف يوم' },
    h: { en: '4 Hours', ar: '٤ ساعات' },
    f: { en: ['Quba Mosque & Masjid al-Qiblatayn', 'Jabal Uhud & Al-Baqi', 'Private licensed driver', 'Fixed price'], ar: ['مسجد قباء ومسجد القبلتين', 'جبل أحد والبقيع', 'سائق خاص مرخص', 'سعر ثابت'] },
  },
  {
    t: { en: 'Full-Day Ziyarat', ar: 'زيارة يوم كامل' },
    h: { en: '8 Hours', ar: '٨ ساعات' },
    f: { en: ['All major Madinah sites', 'Seven Mosques & Qiblatayn', 'Jabal Uhud, Baqi & more', 'Comfortable family vehicle', 'Fixed price — no hidden fees'], ar: ['جميع مواقع المدينة الرئيسية', 'المساجد السبعة ومسجد القبلتين', 'جبل أحد والبقيع وأكثر', 'سيارة عائلية مريحة', 'سعر ثابت — بلا رسوم خفية'] },
  },
  {
    t: { en: 'Group Ziyarat Tour', ar: 'جولة زيارات جماعية' },
    h: { en: 'Custom Duration', ar: 'مدة مخصصة' },
    f: { en: ['Hyundai Staria or GMC Yukon', 'Up to 7 passengers', 'All sites customizable', 'Family & group packages'], ar: ['هيونداي ستاريا أو GMC يوكون', 'حتى ٧ ركاب', 'جميع المواقع قابلة للتخصيص', 'باقات عائلية وجماعية'] },
  },
]

const FAQS = [
  { q: { en: 'What sites are included in the Madinah Ziyarat tour?', ar: 'ما المواقع المشمولة في جولة زيارات المدينة؟' }, a: { en: 'Our Madinah Ziyarat tour covers Masjid Quba, Masjid al-Qiblatayn, Jabal Uhud, Al-Baqi Cemetery, Masjid al-Ghamamah, and the Seven Mosques area. You can also request additional or specific sites. All visits are with your private driver.', ar: 'تشمل جولة زيارات المدينة لدينا مسجد قباء ومسجد القبلتين وجبل أحد وجنة البقيع ومسجد الغمامة ومنطقة المساجد السبعة. يمكنك أيضاً طلب مواقع إضافية أو محددة. جميع الزيارات مع سائقك الخاص.' } },
  { q: { en: 'How long does a full Madinah Ziyarat tour take?', ar: 'كم يستغرق جولة زيارات المدينة الكاملة؟' }, a: { en: 'A complete Madinah Ziyarat tour covering all major sites typically takes 7–8 hours. A half-day tour (4 hours) covers the most important 4–5 sites. We customize the itinerary based on your available time.', ar: 'جولة زيارات المدينة الكاملة التي تغطي جميع المواقع الرئيسية تستغرق عادةً 7–8 ساعات. جولة نصف اليوم (4 ساعات) تغطي أهم 4–5 مواقع. نخصص الجدول الزمني بناءً على وقتك المتاح.' } },
  { q: { en: 'Can I combine Madinah Ziyarat with a trip to Makkah?', ar: 'هل يمكنني الجمع بين زيارات المدينة ورحلة إلى مكة؟' }, a: { en: 'Yes. Many pilgrims do the Madinah Ziyarat tour and then travel to Makkah with us. We offer direct door-to-door private taxi service from Madinah to Makkah (approximately 4–5 hours). Ask us to combine both in one booking.', ar: 'نعم. يقوم كثير من الحجاج بجولة زيارات المدينة ثم السفر إلى مكة معنا. نقدم خدمة تاكسي خاص من باب إلى باب من المدينة إلى مكة (نحو 4–5 ساعات). اطلب منا الجمع بين الاثنين في حجز واحد.' } },
  { q: { en: 'Do you provide a guide for Madinah Ziyarat?', ar: 'هل تقدمون مرشداً لزيارات المدينة؟' }, a: { en: 'Our drivers know the locations and history of all major Madinah sites well. They can take you to each place and explain its significance. For formal Islamic guidance, we recommend engaging a certified religious guide separately.', ar: 'سائقونا يعرفون مواقع وتاريخ جميع مواقع المدينة الرئيسية جيداً. يمكنهم اصطحابك إلى كل مكان وشرح أهميته. للإرشاد الديني الرسمي، نوصي بالتعاقد مع مرشد ديني معتمد بشكل منفصل.' } },
  { q: { en: 'Which vehicle is best for a Madinah Ziyarat group tour?', ar: 'أي سيارة هي الأفضل لجولة زيارات المدينة الجماعية؟' }, a: { en: 'For groups of 5–7, the Hyundai Staria is ideal — spacious, with electric sliding doors that are easy for elderly pilgrims. For a VIP experience, the GMC Yukon offers luxury seating with a built-in cooler. For 1–4 passengers, the Toyota Camry is great value.', ar: 'للمجموعات من 5–7 أشخاص، هيونداي ستاريا مثالية — واسعة، مع أبواب منزلقة كهربائية سهلة للحجاج المسنين. لتجربة VIP، يوفر GMC يوكون مقاعد فاخرة مع مبرد مدمج. لـ1–4 ركاب، تويوتا كامري ذات قيمة رائعة.' } },
]

export default function MadinahZiyaratPage() {
  const { isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => b[isAr ? 'ar' : 'en']
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز جولة زيارات المدينة المنورة' : "Hello, I'd like to book a Madinah Ziyarat tour")}`

  return (
    <main>
      {/* Hero */}
      <section style={{ minHeight: '90vh', background: 'linear-gradient(135deg,rgba(20,58,46,0.88) 0%,rgba(10,40,30,0.65) 100%), url("/location/madinah.webp")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '100px 0 70px' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <span style={{ display: 'inline-block', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.6)', color: 'var(--primary)', padding: '5px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px' }}>
                {isAr ? 'زيارات المدينة المنورة' : 'Madinah Ziyarat'}
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '16px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>زيارات المدينة المنورة</span><br />جولة المواقع الإسلامية بسائق خاص</>
                  : <><span style={{ color: 'var(--primary)' }}>Madinah Ziyarat Tour</span><br />Islamic Sites with Private Driver</>
                }
              </h1>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '500px' }}>
                {isAr
                  ? 'زر المواقع الإسلامية المقدسة في المدينة المنورة مع سائق خاص محترف. مسجد قباء، جبل أحد، البقيع، مسجد القبلتين وأكثر — بسعر ثابت ونصف يوم أو يوم كامل.'
                  : 'Visit the sacred Islamic sites of Madinah with a professional private driver. Quba Mosque, Mount Uhud, Al-Baqi, Masjid al-Qiblatayn and more — fixed price, half-day or full-day.'
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
            <h2 className="section-title">{isAr ? <>مواقع <span style={{ color: 'var(--primary)' }}>زيارات المدينة</span> المقدسة</> : <><span style={{ color: 'var(--primary)' }}>Madinah Ziyarat</span> Sacred Sites</>}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{isAr ? 'جميع المواقع في رحلة واحدة مريحة مع سائق خاص' : 'All sites in one comfortable trip with a private driver'}</p>
          </div>
          <div className="grid-4">
            {SITES.map(s => (
              <div key={s.t.en} className="service-card" style={{ textAlign: 'center' }}>
                <div className="service-icon" style={{ margin: '0 auto 14px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.88rem', fontWeight: '800', marginBottom: '8px' }}>{tx(s.t)}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{tx(s.d)}</p>
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
                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '4px' }}>{tx(p.h)}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '20px' }}>{tx(p.t)}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {(isAr ? p.f.ar : p.f.en).map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                      <CheckCircle size={15} color="var(--primary)" strokeWidth={2.5} />{f}
                    </li>
                  ))}
                </ul>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--primary)', color: '#1D1D1B', padding: '12px', borderRadius: '10px', fontWeight: '800', fontSize: '0.85rem', textDecoration: 'none' }}>
                  <MessageCircle size={15} strokeWidth={2.5} />{isAr ? 'احجز الآن' : 'Book Now'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section style={{ padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { href: '/madinah-taxi-service', ar: 'تاكسي المدينة', en: 'Madinah Taxi' },
              { href: '/makkah-ziyarat-tour', ar: 'زيارات مكة', en: 'Makkah Ziyarat' },
              { href: '/makkah-to-madinah', ar: 'مكة ← المدينة', en: 'Makkah → Madinah' },
              { href: '/hajj-umrah-transport', ar: 'الحج والعمرة', en: 'Hajj & Umrah' },
              { href: '/private-driver', ar: 'سائق خاص', en: 'Private Driver' },
            ].map(c => (
              <Link key={c.href} href={c.href} className="route-badge"><MapPin size={14} />{isAr ? c.ar : c.en}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading={{ ar: 'أسئلة شائعة — زيارات المدينة', en: 'FAQ — Madinah Ziyarat Tour' }} />

      {/* CTA */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#0B3D2E,#0F5132)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>{isAr ? 'احجز جولة زيارات المدينة الآن' : 'Book Your Madinah Ziyarat Tour Now'}</h2>
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
