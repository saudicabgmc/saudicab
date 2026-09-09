'use client'
import { Shield, DollarSign, MapPin, Car } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const values = [
  {
    icon: <DollarSign size={28} />,
    title: { en: 'Fixed Pricing', ar: 'أسعار ثابتة' },
    desc: {
      en: 'No meters, no surge pricing. The price you agree on WhatsApp is the price you pay — every time.',
      ar: 'بدون عداد وبدون زيادات مفاجئة. السعر الذي يتم الاتفاق عليه عبر واتساب هو السعر الذي تدفعه تماماً.'
    },
  },
  {
    icon: <Shield size={28} />,
    title: { en: 'Experienced Drivers', ar: 'سائقون ذوو خبرة' },
    desc: {
      en: 'Every driver is experienced and trained in premium hospitality. Bilingual in Arabic and English.',
      ar: 'كل سائق يتمتع بالخبرة العالية والتدريب الاحترافي على الضيافة الراقية، ويتحدث اللغتين العربية والإنجليزية.'
    },
  },
  {
    icon: <MapPin size={28} />,
    title: { en: 'Deep Local Knowledge', ar: 'معرفة محلية دقيقة' },
    desc: {
      en: 'Our drivers know Makkah, Madinah, Jeddah, and Taif intimately — prayer-time traffic, hotel districts, and the fastest routes during Hajj and Umrah season.',
      ar: 'سائقونا على دراية تامة بمكة والمدينة وجدة والطائف — أوقات الازدحام عند الصلوات، ومناطق الفنادق، وأسرع الطرق أثناء مواسم الحج والعمرة.'
    },
  },
  {
    icon: <Car size={28} />,
    title: { en: 'Well-Maintained Fleet', ar: 'أسطول مجهز ومصان بانتظام' },
    desc: {
      en: 'Toyota Camry sedans, Hyundai Staria vans, and GMC Yukon SUVs — regularly serviced, cleaned, and air-conditioned.',
      ar: 'سيارات تويوتا كامري، حافلات هيونداي ستاريا، ومركبات GMC يوكون الفاخرة — تتم صيانتها وتنظيفها وتكييفها بانتظام.'
    },
  },
]

export default function AboutClient() {
  const { lang, isAr } = useLang()

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
            {isAr ? 'من نحن' : 'About Us'}
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
            {isAr
              ? <>خدمة نقل خاصة يمكنك <span style={{ color: 'var(--primary)' }}>الوثوق بها</span></>
              : <>Private Transport You Can <span style={{ color: 'var(--primary)' }}>Trust</span></>
            }
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
            {isAr
              ? 'تنقل Saudi Cabs GMC الحجاج والعائلات ورجال الأعمال في جميع أنحاء المملكة العربية السعودية — بأسعار ثابتة وبدون مفاجآت.'
              : 'Saudi Cabs GMC moves pilgrims, families, and business travelers across Saudi Arabia — with fixed prices and no surprises.'
            }
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '18px' }}>
            {isAr
              ? <>من <span style={{ color: 'var(--primary)' }}>نحن</span></>
              : <>Who <span style={{ color: 'var(--primary)' }}>We Are</span></>
            }
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--muted-foreground)', lineHeight: 1.9, marginBottom: '16px' }}>
            {isAr
              ? 'Saudi Cabs GMC هي شركة رائدة في خدمات النقل الخاص وسيارات الأجرة والشوفير الخاص تعمل في مكة المكرمة والمدينة المنورة وجدة والطائف وجميع أنحاء المملكة العربية السعودية. بدأنا بهدف بسيط: منح الحجاج والزوار وسيلة موثوقة لحجز رحلاتهم بسعر ثابت ومؤكد — بدون عداد، بدون تطبيقات معقدة، وبكل سهولة عبر رسالة واتساب.'
              : 'Saudi Cabs GMC is a premium private taxi and chauffeur company operating across Makkah, Madinah, Jeddah, Taif, and the wider Kingdom of Saudi Arabia. We started with a simple goal: give pilgrims and travelers a way to book a ride with a confirmed, fixed price — no meter, no app, no guesswork — just a WhatsApp message away.'
            }
          </p>
          <p style={{ fontSize: '0.98rem', color: 'var(--muted-foreground)', lineHeight: 1.9 }}>
            {isAr
              ? 'اليوم نوفر خدمات توصيل المطارات، الرحلات بين المدن، استئجار السائق الخاص، والنقل المخصص لرحلات الحج والعمرة، بأسطول متنوع يشمل سيارات السيدان للأفراد والأزواج، وحافلات هيونداي ستاريا، وسيارات GMC يوكون الفاخرة للعائلات والمجموعات.'
              : 'Today we run airport transfers, intercity trips, private driver hire, and dedicated Hajj & Umrah transport, with a fleet that ranges from the Toyota Camry sedan for solo and couple travel to the Hyundai Staria van and GMC Yukon VIP SUV for families and groups.'
            }
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '48px 0', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '28px', textAlign: 'center' }}>
            {isAr
              ? <>لماذا <span style={{ color: 'var(--primary)' }}>يختارنا المسافرون</span></>
              : <>Why Travelers <span style={{ color: 'var(--primary)' }}>Choose Us</span></>
            }
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
            {values.map((v, i) => (
              <div key={i} style={{ padding: '28px 24px', borderRadius: '16px', border: '1.5px solid var(--border)', background: 'white' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '14px' }}>{v.icon}</div>
                <div style={{ fontWeight: '800', fontSize: '1.05rem', marginBottom: '8px' }}>{v.title[lang]}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{v.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '14px' }}>
            {isAr
              ? <>نطاق <span style={{ color: 'var(--primary)' }}>خدماتنا</span></>
              : <>Where We <span style={{ color: 'var(--primary)' }}>Operate</span></>
            }
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--muted-foreground)', lineHeight: 1.9, maxWidth: '620px', margin: '0 auto' }}>
            {isAr
              ? 'نخدم مكة المكرمة والمدينة المنورة وجدة والطائف مباشرة، مع خطوط بين المدن تصل إلى الرياض والدمام وينبع. فريقنا متاح على مدار الساعة طوال أيام الأسبوع، بما في ذلك مواسم الحج وشهر رمضان المبارك.'
              : 'We serve Makkah, Madinah, Jeddah, and Taif directly, with intercity routes reaching Riyadh, Dammam, and Yanbu. Our team is on call 24 hours a day, 7 days a week, including throughout Hajj and Ramadan.'
            }
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '12px' }}>
            {isAr ? 'جاهز للحجز؟' : 'Ready to Book?'}
          </h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>
            {isAr
              ? 'سعر ثابت يُؤكد فوراً. سائق محترف. خدمة من الباب إلى الباب على مدار الساعة.'
              : 'Fixed price confirmed instantly. Professional driver. Door-to-door, 24/7.'
            }
          </p>
          <a
            href={`https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a taxi")}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#25D366', color: 'white', fontWeight: '800',
              padding: '14px 36px', borderRadius: '12px', textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            {isAr ? 'احجز عبر واتساب' : 'Book on WhatsApp'}
          </a>
        </div>
      </section>
    </main>
  )
}
