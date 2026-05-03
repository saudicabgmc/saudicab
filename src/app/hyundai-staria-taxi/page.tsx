'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Star, Shield, CheckCircle, Users, Wind, MapPin, Package, DoorOpen } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const SPECS = [
  { icon: <Users size={22} />, t: { en: '7 Passengers', ar: '٧ ركاب' }, d: { en: 'Three rows of seating — perfect for families, groups & pilgrim parties', ar: 'ثلاثة صفوف من المقاعد — مثالية للعائلات والمجموعات وأفواج الحجاج' } },
  { icon: <DoorOpen size={22} />, t: { en: 'Electric Sliding Doors', ar: 'أبواب منزلقة كهربائية' }, d: { en: 'Effortless entry — especially helpful for elderly pilgrims & children', ar: 'دخول سهل — مفيد بشكل خاص للحجاج المسنين والأطفال' } },
  { icon: <Package size={22} />, t: { en: 'Massive Boot', ar: 'صندوق ضخم للأمتعة' }, d: { en: 'Fits 6+ large suitcases + Zamzam bottles — all Hajj luggage accommodated', ar: 'يتسع لأكثر من ٦ حقائب كبيرة + عبوات زمزم — لجميع أمتعة الحج' } },
  { icon: <Wind size={22} />, t: { en: 'Tri-Zone Climate', ar: 'تكييف ثلاثي المناطق' }, d: { en: 'Front, middle & rear AC vents — everyone stays cool in Saudi heat', ar: 'فتحات تكييف أمامية وسطى وخلفية — يبقى الجميع باردًا في حر السعودية' } },
  { icon: <Shield size={22} />, t: { en: 'High Roof', ar: 'سقف مرتفع' }, d: { en: 'Stand-up interior height — no cramped heads on long journeys', ar: 'ارتفاع داخلي يسمح بالوقوف — لا ازدحام في الرأس في الرحلات الطويلة' } },
  { icon: <Star size={22} />, t: { en: 'Captain Seats', ar: 'مقاعد كابتن' }, d: { en: 'Individual captain chairs in the middle row for business-class comfort', ar: 'كراسي كابتن فردية في الصف الأوسط لراحة درجة الأعمال' } },
]

const ROUTES = [
  { href: '/jeddah-airport-to-makkah', en: 'Jeddah Airport → Makkah', ar: 'مطار جدة ← مكة' },
  { href: '/makkah-to-madinah', en: 'Makkah → Madinah', ar: 'مكة ← المدينة' },
  { href: '/jeddah-airport-to-madinah', en: 'Jeddah Airport → Madinah', ar: 'مطار جدة ← المدينة' },
  { href: '/madinah-to-makkah', en: 'Madinah → Makkah', ar: 'المدينة ← مكة' },
  { href: '/riyadh-to-makkah', en: 'Riyadh → Makkah', ar: 'الرياض ← مكة' },
  { href: '/makkah-to-taif', en: 'Makkah → Taif', ar: 'مكة ← الطائف' },
]

const USE_CASES = [
  { icon: '🕌', t: { en: 'Hajj & Umrah Groups', ar: 'مجموعات الحج والعمرة' }, d: { en: 'Transport full family or group between holy sites with all Zamzam luggage', ar: 'نقل العائلة أو المجموعة بين المشاعر المقدسة مع جميع أمتعة زمزم' } },
  { icon: '✈️', t: { en: 'Airport Transfers', ar: 'توصيل المطار' }, d: { en: 'Meet & greet at KAIA Jeddah arrivals — room for 7 passengers + full bags', ar: 'استقبال في صالة وصول مطار جدة — مكان لـ٧ ركاب + حقائب كاملة' } },
  { icon: '🚐', t: { en: 'Family Road Trips', ar: 'رحلات العائلة' }, d: { en: 'Makkah to Madinah, Taif, Riyadh — everyone together in one vehicle', ar: 'من مكة إلى المدينة والطائف والرياض — الجميع معاً في سيارة واحدة' } },
  { icon: '👴', t: { en: 'Elderly & Wheelchair', ar: 'كبار السن والكراسي المتحركة' }, d: { en: 'Sliding doors and high roof make boarding easy for elderly pilgrims', ar: 'الأبواب المنزلقة والسقف العالي يجعل الصعود سهلاً للحجاج المسنين' } },
]

const FAQS = [
  { q: { en: 'How many people fit in the Hyundai Staria?', ar: 'كم شخصاً يتسع له هيونداي ستاريا؟' }, a: { en: 'The Hyundai Staria seats up to 7 passengers across three rows. Middle captain seats provide extra comfort on long journeys. The large boot fits 6+ suitcases and Zamzam containers.', ar: 'يتسع هيونداي ستاريا لما يصل إلى ٧ ركاب عبر ثلاثة صفوف. توفر مقاعد الكابتن الوسطى راحة إضافية في الرحلات الطويلة. يتسع الصندوق الكبير لأكثر من ٦ حقائب وعبوات زمزم.' } },
  { q: { en: 'Is the Hyundai Staria good for Hajj transport?', ar: 'هل هيونداي ستاريا جيدة لنقل الحج؟' }, a: { en: 'The Staria is one of our most popular vehicles for Hajj and Umrah transport. The electric sliding doors are ideal for elderly pilgrims, the boot easily fits all Zamzam water and luggage, and tri-zone AC keeps all 7 passengers comfortable.', ar: 'ستاريا هي إحدى أكثر سياراتنا طلباً لنقل الحج والعمرة. الأبواب المنزلقة الكهربائية مثالية للحجاج المسنين، والصندوق يتسع بسهولة لجميع مياه زمزم والأمتعة، والتكييف ثلاثي المناطق يبقي جميع الركاب السبعة بارداً.' } },
  { q: { en: 'What is the price of a Hyundai Staria from Jeddah Airport to Makkah?', ar: 'ما سعر هيونداي ستاريا من مطار جدة إلى مكة؟' }, a: { en: 'Pricing is fixed before your trip — no meter, no surge pricing. The Staria rate is higher than the Camry sedan due to its larger capacity. Contact us on WhatsApp at +966 56 948 7569 for an instant quote.', ar: 'التسعير ثابت قبل رحلتك — بدون عداد، بدون زيادة أسعار. سعر ستاريا أعلى من سيدان كامري بسبب سعتها الأكبر. تواصل معنا عبر واتساب على +966 56 948 7569 للحصول على سعر فوري.' } },
  { q: { en: 'Can the Staria carry Zamzam water and large luggage?', ar: 'هل يمكن للستاريا حمل ماء زمزم والأمتعة الكبيرة؟' }, a: { en: 'Yes. The Staria has a very generous boot that easily accommodates Zamzam water cans, multiple large suitcases, and all the extra bags typical of Hajj and Umrah trips. This is one of the main reasons pilgrims choose the Staria.', ar: 'نعم. تمتلك ستاريا صندوقاً واسعاً جداً يتسع بسهولة لعبوات ماء زمزم وحقائب سفر كبيرة متعددة وجميع الحقائب الإضافية المعتادة في رحلات الحج والعمرة. هذا أحد الأسباب الرئيسية التي تجعل الحجاج يختارون ستاريا.' } },
  { q: { en: 'Is the Hyundai Staria available during Ramadan?', ar: 'هل هيونداي ستاريا متاحة خلال رمضان؟' }, a: { en: 'Yes. Saudi Cabs GMC operates 24/7 throughout the year including Ramadan, Hajj, and all Umrah seasons. We recommend booking early during peak seasons.', ar: 'نعم. تعمل Saudi Cabs GMC على مدار الساعة طوال العام بما في ذلك رمضان والحج وجميع مواسم العمرة. ننصح بالحجز المبكر خلال مواسم الذروة.' } },
]

export default function HyundaiStariaPage() {
  const { isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => b[isAr ? 'ar' : 'en']
  const waUrl = `https://wa.me/966569487569?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز هيونداي ستاريا' : "Hello, I'd like to book a Hyundai Staria taxi")}`

  return (
    <main>
      {/* Hero */}
      <section style={{ minHeight: '90vh', background: 'linear-gradient(135deg,rgba(7,31,23,0.85) 0%,rgba(11,61,46,0.65) 100%), url("/location/makkah.webp")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '100px 0 70px' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <span style={{ display: 'inline-block', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.6)', color: 'var(--primary)', padding: '5px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px' }}>
                {isAr ? 'فان عائلي ٧ مقاعد' : '7-Seat Family Van'}
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '16px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>تاكسي هيونداي ستاريا</span><br />فان عائلي خاص للحج والعمرة</>
                  : <><span style={{ color: 'var(--primary)' }}>Hyundai Staria Taxi</span><br />7-Seat Family Van for Hajj & Umrah</>
                }
              </h1>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '500px' }}>
                {isAr
                  ? 'نقل العائلة بأكملها في راحة تامة. ٧ مقاعد، أبواب كهربائية، صندوق ضخم لأمتعة الحج وزمزم. سعر ثابت، متاح ٢٤/٧ في مكة والمدينة وجدة.'
                  : 'Move your entire family in total comfort. 7 seats, electric sliding doors, massive boot for Hajj luggage and Zamzam. Fixed price, 24/7 in Makkah, Madinah & Jeddah.'}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle size={16} strokeWidth={2.5} />{isAr ? 'احجز ستاريا الآن' : 'Book Staria Now'}</a>
                <a href="https://wa.me/966569487569" className="btn-outline"><Phone size={16} strokeWidth={2.5} />{isAr ? 'اتصل بنا' : 'Call Us'}</a>
              </div>
              {/* Key stats */}
              <div style={{ display: 'flex', gap: '28px', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.15)', flexWrap: 'wrap' }}>
                {[
                  { n: '7', l: isAr ? 'ركاب' : 'Seats' },
                  { n: '6+', l: isAr ? 'حقائب' : 'Suitcases' },
                  { n: '24/7', l: isAr ? 'متاح' : 'Available' },
                ].map(s => (
                  <div key={s.l}>
                    <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)' }}>{s.n}</div>
                    <div style={{ fontSize: '0.84rem', opacity: 0.7 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fadeInUp animate-delay-1"><BookingForm /></div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'مثالية لـ' : 'Perfect For'}</span>
            <h2 className="section-title">{isAr ? <>متى تختار <span style={{ color: 'var(--primary)' }}>ستاريا</span>؟</> : <>When to Choose the <span style={{ color: 'var(--primary)' }}>Staria</span>?</>}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-4">
            {USE_CASES.map(u => (
              <div key={u.t.en} className="service-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{u.icon}</div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: '800', marginBottom: '8px' }}>{tx(u.t)}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{tx(u.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: '70px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'مواصفات ستاريا' : 'Staria Features'}</span>
            <h2 className="section-title">{isAr ? <>مميزات <span style={{ color: 'var(--primary)' }}>هيونداي ستاريا</span></> : <><span style={{ color: 'var(--primary)' }}>Hyundai Staria</span> Highlights</>}</h2>
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

      {/* Compare */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'قارن السيارات' : 'Compare Vehicles'}</span>
            <h2 className="section-title">{isAr ? 'اختر السيارة المناسبة' : 'Pick the Right Vehicle'}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3">
            {[
              { name: { en: 'Toyota Camry', ar: 'تويوتا كامري' }, seats: '4', best: { en: 'Individuals & small families', ar: 'الأفراد والعائلات الصغيرة' }, tag: { en: 'Best Value', ar: 'أفضل قيمة' }, active: false, href: '/toyota-camry-taxi' },
              { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7', best: { en: 'Families & Umrah groups', ar: 'العائلات ومجموعات العمرة' }, tag: { en: 'Family Choice', ar: 'خيار العائلة' }, active: true, href: '/hyundai-staria-taxi' },
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
      <section style={{ padding: '40px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {ROUTES.map(r => (
              <Link key={r.href} href={r.href} className="route-badge"><MapPin size={14} />{tx(r)}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading={{ ar: 'أسئلة شائعة — هيونداي ستاريا', en: 'FAQ — Hyundai Staria Taxi' }} />

      {/* CTA */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#0B3D2E,#0F5132)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>{isAr ? 'احجز هيونداي ستاريا الآن' : 'Book Your Hyundai Staria Now'}</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px' }}>{isAr ? '٧ ركاب — سعر ثابت — ٢٤/٧' : '7 Passengers — Fixed Price — 24/7'}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#D4AF37,#E6C65C)', color: '#1D1D1B', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><MessageCircle size={18} strokeWidth={2.5} />{isAr ? 'واتساب' : 'WhatsApp'}</a>
            <a href="https://wa.me/966569487569" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.5)', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Phone size={18} strokeWidth={2.5} />+966 56 948 7569</a>
          </div>
        </div>
      </section>
    </main>
  )
}
