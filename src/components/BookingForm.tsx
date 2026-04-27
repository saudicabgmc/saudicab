'use client'
import { useState, useRef, useEffect } from 'react'
import { Car, MapPin, Navigation, Calendar, Clock, Users, MessageCircle, ChevronDown, Check } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const CITIES = {
  ar: ['مكة المكرمة', 'المدينة المنورة', 'جدة', 'الطائف', 'مطار جدة الدولي', 'مطار المدينة', 'موقع آخر'],
  en: ['Makkah', 'Madinah', 'Jeddah', 'Taif', 'Jeddah Airport', 'Madinah Airport', 'Other Location'],
}

const VEHICLES = [
  { key: 'sedan', img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=300&q=75', fit: 'cover' as const, bg: '#f5f5f5', nameEn: 'Sedan', nameAr: 'سيدان', seatEn: '4 Seats', seatAr: '٤ مقاعد' },
  { key: 'staria', img: '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', fit: 'contain' as const, bg: '#111', nameEn: 'Staria', nameAr: 'ستاريا', seatEn: '7 Seats', seatAr: '٧ مقاعد' },
  { key: 'gmc', img: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', fit: 'cover' as const, bg: '#1a1a1a', nameEn: 'GMC Yukon', nameAr: 'GMC يوكون', seatEn: 'VIP 7', seatAr: '٧ VIP' },
]

const PASSENGERS = ['1', '2', '3', '4', '5', '6', '7+']

/* ── Custom Dropdown ── */
function CustomSelect({
  value, onChange, options, placeholder,
}: {
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          border: open ? '1.5px solid var(--secondary)' : '1.5px solid #ddd',
          borderRadius: '10px',
          background: open ? 'white' : 'white',
          boxShadow: open ? '0 0 0 3px rgba(11,61,46,0.1)' : 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '0.9rem',
          color: value ? 'var(--foreground)' : '#c0c0c0',
          fontWeight: value ? '600' : '400',
          transition: 'all 0.2s',
          textAlign: 'right',
          direction: 'rtl',
        }}
      >
        <span style={{ flex: 1, textAlign: 'right' }}>{value || placeholder}</span>
        <ChevronDown
          size={16}
          strokeWidth={2.2}
          color="var(--primary)"
          style={{ flexShrink: 0, marginRight: '6px', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {/* Dropdown list */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          right: 0,
          left: 0,
          background: 'white',
          border: '1.5px solid #e0e0e0',
          borderRadius: '12px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          zIndex: 999,
          overflow: 'hidden',
          maxHeight: '240px',
          overflowY: 'auto',
        }}>
          {options.map((opt, i) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false) }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '11px 16px',
                background: value === opt ? 'rgba(11,61,46,0.06)' : 'white',
                border: 'none',
                borderBottom: i < options.length - 1 ? '1px solid #f0f0f0' : 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '0.88rem',
                color: value === opt ? 'var(--secondary)' : 'var(--foreground)',
                fontWeight: value === opt ? '700' : '500',
                textAlign: 'right',
                direction: 'rtl',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => { if (value !== opt) (e.currentTarget as HTMLButtonElement).style.background = '#f8f8f8' }}
              onMouseLeave={e => { if (value !== opt) (e.currentTarget as HTMLButtonElement).style.background = 'white' }}
            >
              <span>{opt}</span>
              {value === opt && <Check size={14} strokeWidth={2.5} color="var(--secondary)" style={{ flexShrink: 0 }} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Main Form ── */
interface BookingFormProps { defaultFrom?: string }

export default function BookingForm({ defaultFrom }: BookingFormProps) {
  const { isAr } = useLang()
  const [vehicle, setVehicle] = useState('')
  const [form, setForm] = useState({ from: defaultFrom || '', to: '', date: '', time: '', passengers: '1' })
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const handleBook = () => {
    const v = VEHICLES.find(v => v.key === vehicle)
    const vLabel = v ? (isAr ? v.nameAr : v.nameEn) : (isAr ? 'غير محدد' : 'Not specified')
    const msg = isAr
      ? `السلام عليكم، أرغب في حجز رحلة:%0Aالسيارة: ${vLabel}%0Aمن: ${form.from || 'غير محدد'}%0Aإلى: ${form.to || 'غير محدد'}%0Aالتاريخ: ${form.date || 'غير محدد'}%0Aالوقت: ${form.time || 'غير محدد'}%0Aالركاب: ${form.passengers}`
      : `Hello, I'd like to book a trip:%0AVehicle: ${vLabel}%0AFrom: ${form.from || 'Not specified'}%0ATo: ${form.to || 'Not specified'}%0ADate: ${form.date || 'Not specified'}%0ATime: ${form.time || 'Not specified'}%0APassengers: ${form.passengers}`
    window.open(`https://wa.me/966549317712?text=${msg}`, '_blank')
  }

  const cities = isAr ? CITIES.ar : CITIES.en

  return (
    <div className="booking-form-card">

      {/* Title */}
      <h3 style={{ fontSize: '1.1rem', fontWeight: '900', textAlign: 'center', marginBottom: '18px', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <Car size={20} color="var(--primary)" strokeWidth={2.5} />
        {isAr ? 'احجز رحلتك الآن' : 'Book Your Trip Now'}
      </h3>

      {/* Vehicle Selector */}
      <div style={{ marginBottom: '16px' }}>
        <p className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '9px' }}>
          <Car size={13} color="var(--primary)" strokeWidth={2.5} />
          {isAr ? 'اختر السيارة' : 'Choose Vehicle'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '7px' }}>
          {VEHICLES.map(v => (
            <button
              key={v.key}
              type="button"
              onClick={() => setVehicle(v.key)}
              style={{
                padding: '8px 5px 10px',
                border: vehicle === v.key ? '2px solid var(--secondary)' : '1.5px solid #ddd',
                borderRadius: '10px',
                background: vehicle === v.key ? 'rgba(11,61,46,0.06)' : 'white',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s',
                fontFamily: 'inherit',
                boxShadow: vehicle === v.key ? '0 0 0 3px rgba(11,61,46,0.08)' : 'none',
              }}
            >
              <div style={{ width: '100%', height: '58px', background: v.bg, borderRadius: '6px', overflow: 'hidden', marginBottom: '7px' }}>
                <img src={v.img} alt={v.nameEn} style={{ width: '100%', height: '100%', objectFit: v.fit, objectPosition: 'center', display: 'block' }} />
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: '800', color: vehicle === v.key ? 'var(--secondary)' : 'var(--foreground)', lineHeight: 1.2 }}>
                {isAr ? v.nameAr : v.nameEn}
              </div>
              <div style={{ fontSize: '0.63rem', color: vehicle === v.key ? 'var(--primary)' : 'var(--muted-foreground)', marginTop: '2px', fontWeight: vehicle === v.key ? '700' : '400' }}>
                {isAr ? v.seatAr : v.seatEn}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* From — Custom Dropdown */}
      <div className="form-group">
        <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPin size={13} color="var(--primary)" strokeWidth={2.5} />
          {isAr ? 'من — المغادرة' : 'From — Departure'}
        </label>
        <CustomSelect
          value={form.from}
          onChange={v => set('from', v)}
          options={cities}
          placeholder={isAr ? 'اختر المدينة' : 'Choose City'}
        />
      </div>

      {/* To */}
      <div className="form-group">
        <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Navigation size={13} color="var(--primary)" strokeWidth={2.5} />
          {isAr ? 'إلى — الوجهة' : 'To — Destination'}
        </label>
        <input
          type="text"
          className="form-input"
          placeholder={isAr ? 'أدخل الوجهة أو العنوان' : 'Enter destination or address'}
          value={form.to}
          onChange={e => set('to', e.target.value)}
        />
      </div>

      {/* Date + Time */}
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'التاريخ' : 'Date'}
          </label>
          <div className="input-icon-wrap">
            <Calendar size={14} className="input-icon" strokeWidth={2} />
            <input type="date" className="form-input" value={form.date} onChange={e => set('date', e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'الوقت' : 'Time'}
          </label>
          <div className="input-icon-wrap">
            <Clock size={14} className="input-icon" strokeWidth={2} />
            <input type="time" className="form-input" value={form.time} onChange={e => set('time', e.target.value)} />
          </div>
        </div>
      </div>

      {/* Passengers */}
      <div className="form-group">
        <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Users size={13} color="var(--primary)" strokeWidth={2.5} />
          {isAr ? 'عدد الركاب' : 'Passengers'}
        </label>
        <div style={{ display: 'flex', gap: '5px' }}>
          {PASSENGERS.map(p => (
            <button
              key={p}
              type="button"
              onClick={() => set('passengers', p)}
              style={{
                flex: 1,
                padding: '9px 2px',
                border: form.passengers === p ? '1.5px solid var(--secondary)' : '1.5px solid #ddd',
                borderRadius: '8px',
                background: form.passengers === p ? 'rgba(11,61,46,0.07)' : 'white',
                color: form.passengers === p ? 'var(--secondary)' : 'var(--muted-foreground)',
                fontWeight: form.passengers === p ? '800' : '500',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit',
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* WhatsApp Button */}
      <button type="button" className="btn-whatsapp" onClick={handleBook} style={{ marginTop: '8px' }}>
        <MessageCircle size={18} strokeWidth={2.5} />
        {isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
      </button>

      {/* Trust badges */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '10px', flexWrap: 'wrap' }}>
        {(isAr
          ? ['✅ رد فوري', '🔒 بدون دفع مسبق', '⏰ ٢٤/٧']
          : ['✅ Instant reply', '🔒 No advance pay', '⏰ 24/7']
        ).map(s => (
          <span key={s} style={{ fontSize: '0.72rem', color: 'var(--muted-foreground)', fontWeight: '600' }}>{s}</span>
        ))}
      </div>

    </div>
  )
}
