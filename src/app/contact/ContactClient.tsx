'use client'
import { Phone, MessageCircle, MapPin, Mail, Clock, Globe } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

export default function ContactClient() {
  const { lang, isAr } = useLang()

  const contactMethods = [
    {
      icon: <MessageCircle size={28} strokeWidth={2} />,
      title: { en: 'WhatsApp (Fastest)', ar: 'واتساب (الأسرع)' },
      value: '+92 309 7811785',
      href: `https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a taxi")}`,
      desc: {
        en: 'Instant response, 24/7. Send your pickup, destination & date.',
        ar: 'رد فوري على مدار الساعة. أرسل نقطة الانطلاق والوجهة والتاريخ.'
      },
      color: '#25D366',
    },
    {
      icon: <Phone size={28} strokeWidth={2} />,
      title: { en: 'Phone Call', ar: 'اتصال هاتفي' },
      value: '+92 309 7811785',
      href: 'tel:+923097811785',
      desc: {
        en: 'Call us directly for urgent bookings or queries.',
        ar: 'اتصل بنا مباشرة للحجوزات العاجلة أو الاستفسارات.'
      },
      color: 'var(--primary)',
    },
    {
      icon: <Mail size={28} strokeWidth={2} />,
      title: { en: 'Email', ar: 'البريد الإلكتروني' },
      value: 'info@saudicabsgmc.com',
      href: 'mailto:info@saudicabsgmc.com',
      desc: {
        en: 'For corporate inquiries, partnerships, and group bookings.',
        ar: 'للاستفسارات المؤسسية والشراكات والحجوزات الجماعية.'
      },
      color: '#4A90D9',
    },
  ]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
            {isAr ? 'اتصل بنا' : 'Contact Us'}
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
            {isAr
              ? <>تواصل مع <span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span></>
              : <>Get in Touch with <span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span></>
            }
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
            {isAr
              ? 'متاحون على مدار الساعة طوال أيام الأسبوع لحجوزات التاكسي والاستفسارات والدعم في جميع أنحاء المملكة.'
              : 'Available 24/7 for taxi bookings, inquiries, and customer support across Saudi Arabia.'
            }
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
            {contactMethods.map((m, i) => (
              <a
                key={i}
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block', padding: '32px 24px', borderRadius: '16px',
                  border: '1.5px solid var(--border)', background: 'white',
                  textDecoration: 'none', textAlign: 'center',
                  transition: 'all 0.3s', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ color: m.color, marginBottom: '16px' }}>{m.icon}</div>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '6px' }}>{m.title[lang]}</div>
                <div style={{ fontWeight: '700', fontSize: '0.95rem', color: m.color, marginBottom: '10px' }}>{m.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{m.desc[lang]}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Details */}
      <section style={{ padding: '48px 0', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '24px' }}>
            {isAr
              ? <>معلومات <span style={{ color: 'var(--primary)' }}>المكتب والخدمة</span></>
              : <>Our <span style={{ color: 'var(--primary)' }}>Office &amp; Operations</span></>
            }
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <MapPin size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>{isAr ? 'العنوان' : 'Address'}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  {isAr
                    ? <>مكة المكرمة، منطقة مكة المكرمة<br />المملكة العربية السعودية</>
                    : <>Makkah, Makkah Province<br />Kingdom of Saudi Arabia</>
                  }
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Clock size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>{isAr ? 'ساعات العمل' : 'Hours'}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  {isAr
                    ? <>٢٤ ساعة / ٧ أيام في الأسبوع<br />شاملاً مواسم الحج ورمضان</>
                    : <>24 Hours, 7 Days a Week<br />Including Hajj &amp; Ramadan</>
                  }
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Globe size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>{isAr ? 'نطاق الخدمة' : 'Service Area'}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  {isAr
                    ? <>مكة، المدينة، جدة<br />الطائف، الرياض وجميع أنحاء المملكة</>
                    : <>Makkah, Madinah, Jeddah<br />Taif, Riyadh &amp; all KSA</>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking CTA */}
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
            href={`https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز تاكسي في السعودية' : "Hello, I'd like to book a taxi in Saudi Arabia")}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#25D366', color: 'white', fontWeight: '800',
              padding: '14px 36px', borderRadius: '12px', textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            {isAr ? 'احجز عبر واتساب' : 'Book on WhatsApp'}
          </a>
        </div>
      </section>
    </main>
  )
}
