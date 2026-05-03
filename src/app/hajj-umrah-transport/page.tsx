'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Star, Shield, Clock, Users, CheckCircle, MapPin } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const ROUTES = [
  { slug: 'jeddah-airport-to-makkah', from: { en: 'Jeddah Airport', ar: 'مطار جدة' }, to: { en: 'Makkah', ar: 'مكة المكرمة' }, dur: '~55 min' },
  { slug: 'makkah-to-madinah', from: { en: 'Makkah', ar: 'مكة المكرمة' }, to: { en: 'Madinah', ar: 'المدينة المنورة' }, dur: '~4.5 hrs' },
  { slug: 'madinah-to-makkah', from: { en: 'Madinah', ar: 'المدينة المنورة' }, to: { en: 'Makkah', ar: 'مكة المكرمة' }, dur: '~4.5 hrs' },
  { slug: 'jeddah-airport-to-madinah', from: { en: 'Jeddah Airport', ar: 'مطار جدة' }, to: { en: 'Madinah', ar: 'المدينة المنورة' }, dur: '~4 hrs' },
  { slug: 'makkah-to-jeddah-airport', from: { en: 'Makkah', ar: 'مكة' }, to: { en: 'Jeddah Airport', ar: 'مطار جدة' }, dur: '~55 min' },
  { slug: 'madinah-airport-taxi', from: { en: 'Madinah Airport', ar: 'مطار المدينة' }, to: { en: "Prophet's Mosque", ar: 'المسجد النبوي' }, dur: '~30 min' },
]

const FAQS = [
  { q: { en: 'Do you offer Hajj transport packages?', ar: 'هل تقدمون باقات نقل الحج؟' }, a: { en: 'Yes, Saudi Cabs GMC offers full Hajj transport packages including airport pickup, Makkah–Madinah routes, and transfers to Mina, Arafat, and Muzdalifah. Contact us for group rates.', ar: 'نعم، Saudi Cabs GMC تقدم باقات نقل حج كاملة تشمل استقبال المطار وخطوط مكة–المدينة والتوصيل إلى منى وعرفات ومزدلفة. تواصل معنا للأسعار الجماعية.' } },
  { q: { en: 'Can I book Umrah transportation in advance?', ar: 'هل يمكنني حجز مواصلات العمرة مسبقاً؟' }, a: { en: 'Yes, you can book Umrah transport weeks in advance via WhatsApp. We recommend booking at least 48–72 hours before arrival during peak Umrah seasons (Ramadan, school holidays).', ar: 'نعم، يمكنك حجز مواصلات العمرة قبل أسابيع عبر واتساب. ننصح بالحجز قبل 48-72 ساعة على الأقل من الوصول في مواسم العمرة الذروة (رمضان، العطل المدرسية).' } },
  { q: { en: 'Do you transfer pilgrims to Mina, Arafat, and Muzdalifah?', ar: 'هل تنقلون الحجاج إلى منى وعرفات ومزدلفة؟' }, a: { en: 'Yes, during Hajj season Saudi Cabs GMC provides dedicated transfers to all the sacred sites including Mina, Arafat, and Muzdalifah with experienced drivers who know all the routes.', ar: 'نعم، خلال موسم الحج Saudi Cabs GMC توفر توصيلاً مخصصاً لجميع المشاعر المقدسة بما فيها منى وعرفات ومزدلفة مع سائقين خبراء يعرفون جميع الطرق.' } },
  { q: { en: 'Is the service available for women and families?', ar: 'هل الخدمة متاحة للنساء والعائلات؟' }, a: { en: 'Yes, Saudi Cabs GMC is fully compliant with Saudi regulations and safe for women and families. We have spacious family vehicles with professional, background-checked drivers.', ar: 'نعم، Saudi Cabs GMC متوافقة تماماً مع اللوائح السعودية وآمنة للنساء والعائلات. لدينا سيارات عائلية واسعة مع سائقين محترفين.' } },
  { q: { en: 'What are the best vehicles for Hajj and Umrah groups?', ar: 'ما أفضل السيارات لمجموعات الحج والعمرة؟' }, a: { en: 'For groups of up to 7, the GMC Yukon and Hyundai Staria are ideal — spacious, air-conditioned, and with generous luggage space. For larger groups, multiple vehicles can be arranged.', ar: 'للمجموعات حتى 7 أشخاص، GMC يوكون وهيونداي ستاريا مثاليتان — واسعتان ومكيفتان مع مساحة أمتعة كبيرة. للمجموعات الأكبر يمكن ترتيب عدة سيارات.' } },
]

export default function HajjUmrahPage() {
  const { lang, isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => b[lang]
  const waUrl = `https://wa.me/966569487569?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز نقل للحج أو العمرة' : "Hello, I'd like to book Hajj or Umrah transport")}`

  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '90vh',
        background: 'linear-gradient(135deg,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.44) 100%), url("/location/makkah.webp")',
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center', padding: '100px 0 70px',
      }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <span style={{
                display: 'inline-block', background: 'rgba(180,83,9,0.25)',
                border: '1px solid rgba(180,83,9,0.6)', color: '#fbbf24',
                padding: '5px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px',
              }}>
                {isAr ? 'حج وعمرة' : 'Hajj & Umrah'}
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '16px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>نقل الحجاج والمعتمرين</span><br />في المملكة العربية السعودية</>
                  : <><span style={{ color: 'var(--primary)' }}>Hajj & Umrah Transport</span><br />Saudi Arabia — Trusted by Thousands</>
                }
              </h1>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '500px' }}>
                {isAr
                  ? 'خدمة نقل متخصصة للحجاج والمعتمرين — مطار جدة، مكة المكرمة، المدينة المنورة، المشاعر المقدسة. سيارات مرخصة وسائقون موثوقون ٢٤/٧.'
                  : 'Specialized transport for Hajj & Umrah pilgrims — Jeddah Airport, Makkah, Madinah, and all sacred sites. Licensed vehicles, trusted drivers, 24/7.'
                }
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle size={16} strokeWidth={2.5} />
                  {isAr ? 'احجز نقل الحج / العمرة' : 'Book Hajj / Umrah Transport'}
                </a>
                <a href="https://wa.me/966569487569" className="btn-outline"><Phone size={16} strokeWidth={2.5} />{isAr ? 'اتصل بنا' : 'Call Us'}</a>
              </div>
            </div>
            <div className="animate-fadeInUp animate-delay-1"><BookingForm /></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'خدماتنا للحجاج' : 'Pilgrim Services'}</span>
            <h2 className="section-title">
              {isAr ? <><span style={{ color: 'var(--primary)' }}>خدمات نقل متكاملة</span> للحج والعمرة</> : <>Complete <span style={{ color: 'var(--primary)' }}>Hajj & Umrah</span> Transport Services</>}
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-4">
            {[
              { icon: '✈️', en: 'Airport Pickup (Jeddah & Madinah)', ar: 'استقبال المطار (جدة والمدينة)', desc: { en: 'Name-board meet-and-greet with flight tracking', ar: 'استقبال بلوحة الاسم ومتابعة الرحلة' } },
              { icon: '🕋', en: 'Makkah ↔ Madinah Transfer', ar: 'توصيل مكة ↔ المدينة', desc: { en: 'The sacred twin-city pilgrim route — fixed price', ar: 'خط الحرمين الشريفين المقدس — سعر ثابت' } },
              { icon: '🏕️', en: 'Mina, Arafat & Muzdalifah', ar: 'منى وعرفات ومزدلفة', desc: { en: 'All sacred site transfers during Hajj season', ar: 'جميع توصيلات المشاعر خلال موسم الحج' } },
              { icon: '🏨', en: 'Hotel-to-Haram Shuttle', ar: 'توصيل الفندق ↔ الحرم', desc: { en: '24/7 trips between your hotel and the Haram', ar: '٢٤/٧ رحلات بين فندقك والحرم' } },
              { icon: '🗺️', en: 'Islamic Sites Tours', ar: 'جولات المزارات الإسلامية', desc: { en: 'Jabal Al-Nour, Jabal Thawr, Quba, Uhud & more', ar: 'جبل النور، جبل ثور، قباء، أحد وأكثر' } },
              { icon: '👨‍👩‍👧‍👦', en: 'Family & Group Packages', ar: 'باقات العائلات والمجموعات', desc: { en: 'Multi-vehicle coordination for large groups', ar: 'تنسيق سيارات متعددة للمجموعات الكبيرة' } },
              { icon: '🔄', en: 'Return Trip Packages', ar: 'باقات الذهاب والإياب', desc: { en: 'Book round-trip for discounted combined rate', ar: 'احجز ذهاباً وإياباً لسعر مجمّع مخفض' } },
              { icon: '⏰', en: 'Pre-Fajr & Night Service', ar: 'خدمة ما قبل الفجر والليل', desc: { en: 'Available any hour — never miss a prayer', ar: 'متاح في أي ساعة — لا تفوّت صلاة' } },
            ].map(s => (
              <div key={s.en} className="service-card">
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.88rem', fontWeight: '800', marginBottom: '8px' }}>{isAr ? s.ar : s.en}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>{tx(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section style={{ padding: '70px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header"><span className="section-tag">{isAr ? 'الخطوط الشائعة' : 'Popular Routes'}</span>
            <h2 className="section-title">{isAr ? 'أكثر خطوط الحجاج طلباً' : 'Most Requested Pilgrim Routes'}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3" style={{ gap: '14px' }}>
            {ROUTES.map(r => (
              <Link key={r.slug} href={`/${r.slug}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white', borderRadius: '14px', padding: '18px 20px', border: '1.5px solid var(--border)', textDecoration: 'none', boxShadow: 'var(--shadow-sm)', transition: 'all 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <div>
                  <div style={{ fontWeight: '800', fontSize: '0.9rem', marginBottom: '3px' }}>{tx(r.from)} → {tx(r.to)}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>{r.dur}</div>
                </div>
                <Star size={16} color="var(--primary)" fill="var(--primary)" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '70px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header"><span className="section-tag">{isAr ? 'لماذا Saudi Cabs GMC' : 'Why Saudi Cabs GMC'}</span>
            <h2 className="section-title">{isAr ? 'الخيار الأول لحجاج المملكة' : "Saudi Arabia Pilgrims' First Choice"}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-4">
            {[
              { icon: <Shield size={28} strokeWidth={1.8} />, t: { en: 'Licensed Vehicles', ar: 'سيارات مرخصة' }, d: { en: 'Fully licensed & inspected fleet for pilgrims', ar: 'أسطول مرخص ومفتوش للحجاج' } },
              { icon: <Clock size={28} strokeWidth={1.8} />, t: { en: '24/7 Service', ar: 'خدمة ٢٤/٧' }, d: { en: 'Never miss Fajr or any prayer time', ar: 'لا تفوّت الفجر أو أي وقت صلاة' } },
              { icon: <Users size={28} strokeWidth={1.8} />, t: { en: 'Family Vehicles', ar: 'سيارات عائلية' }, d: { en: 'GMC Yukon & Staria for groups up to 7', ar: 'GMC يوكون وستاريا لـ 7 ركاب' } },
              { icon: <Star size={28} strokeWidth={1.8} />, t: { en: '+12,000 Trips', ar: '+١٢٠٠٠ رحلة' }, d: { en: 'Trusted by thousands of pilgrims', ar: 'موثوق من آلاف الحجاج' } },
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

      {/* City Links */}
      <section style={{ padding: '40px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: '700', marginBottom: '16px', color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>{isAr ? 'الخدمة متاحة في' : 'Service available in'}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[{ href: '/makkah-taxi-service', ar: 'مكة المكرمة', en: 'Makkah' }, { href: '/madinah-taxi-service', ar: 'المدينة المنورة', en: 'Madinah' }, { href: '/jeddah-taxi-service', ar: 'جدة', en: 'Jeddah' }, { href: '/taif-taxi-service', ar: 'الطائف', en: 'Taif' }].map(c => (
              <Link key={c.href} href={c.href} className="route-badge"><MapPin size={14} strokeWidth={2} />{isAr ? c.ar : c.en}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading={{ ar: 'أسئلة شائعة — نقل الحج والعمرة', en: 'FAQ — Hajj & Umrah Transport' }} />

      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#0B3D2E,#0F5132)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>
            {isAr ? 'احجز نقل الحج والعمرة الآن' : 'Book Your Hajj & Umrah Transport Now'}
          </h2>
          <p style={{ opacity: 0.85, marginBottom: '28px' }}>{isAr ? 'متاحون ٢٤/٧ — سيارات عائلية — سعر ثابت' : '24/7 Available — Family Vehicles — Fixed Price'}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#D4AF37,#E6C65C)', color: '#1D1D1B', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <MessageCircle size={18} strokeWidth={2.5} />{isAr ? 'واتساب' : 'WhatsApp'}
            </a>
            <a href="https://wa.me/966569487569" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.5)', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <Phone size={18} strokeWidth={2.5} />+966 56 948 7569
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
