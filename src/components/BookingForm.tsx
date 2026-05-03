'use client'
import { useState, useRef, useEffect } from 'react'
import { Car, MapPin, Navigation, Calendar, Clock, Users, MessageCircle, ChevronDown, Check, Phone, User, Loader2, CheckCircle } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const CITIES = {
  ar: ['مكة المكرمة', 'المدينة المنورة', 'جدة', 'الطائف', 'مطار جدة الدولي', 'مطار المدينة', 'موقع آخر'],
  en: ['Makkah', 'Madinah', 'Jeddah', 'Taif', 'Jeddah Airport', 'Madinah Airport', 'Other Location'],
}

const VEHICLES = [
  { key: 'sedan', img: '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', fit: 'cover' as const, bg: '#f5f5f5', nameEn: 'Sedan', nameAr: 'سيدان', seatEn: '4 Seats', seatAr: '٤ مقاعد' },
  { key: 'staria', img: '/fleet/toyota-camry-exterior-side-saudi-cabs-gmc.webp', fit: 'contain' as const, bg: '#111', nameEn: 'Staria', nameAr: 'ستاريا', seatEn: '7 Seats', seatAr: '٧ مقاعد' },
  { key: 'gmc', img: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', fit: 'cover' as const, bg: '#1a1a1a', nameEn: 'GMC Yukon', nameAr: 'GMC يوكون', seatEn: 'VIP 7', seatAr: '٧ VIP' },
]

const PASSENGERS = ['1', '2', '3', '4', '5', '6', '7+']

/* ── Custom Dropdown ── */
function CustomSelect({
  value, onChange, options, placeholder, hasError,
}: {
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
  hasError?: boolean
}) {
  const [open, setOpen] = useState(false)
  const [focusedIdx, setFocusedIdx] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    if (open && listRef.current && focusedIdx >= 0) {
      const item = listRef.current.children[focusedIdx] as HTMLElement
      item?.scrollIntoView({ block: 'nearest' })
    }
  }, [focusedIdx, open])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        setOpen(true)
        setFocusedIdx(options.indexOf(value) >= 0 ? options.indexOf(value) : 0)
        e.preventDefault()
      }
      return
    }
    if (e.key === 'Escape') { setOpen(false); e.preventDefault() }
    else if (e.key === 'ArrowDown') { setFocusedIdx(i => Math.min(i + 1, options.length - 1)); e.preventDefault() }
    else if (e.key === 'ArrowUp') { setFocusedIdx(i => Math.max(i - 1, 0)); e.preventDefault() }
    else if (e.key === 'Tab') { setOpen(false) }
    else if (e.key === 'Enter' || e.key === ' ') {
      if (focusedIdx >= 0) { onChange(options[focusedIdx]); setOpen(false) }
      e.preventDefault()
    }
  }

  return (
    <div ref={ref} style={{ position: 'relative' }} onKeyDown={handleKeyDown}>
      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => { setOpen(o => !o); setFocusedIdx(options.indexOf(value) >= 0 ? options.indexOf(value) : 0) }}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          border: hasError ? '1.5px solid #e53e3e' : open ? '1.5px solid var(--secondary)' : '1.5px solid #ddd',
          borderRadius: '10px',
          background: 'white',
          boxShadow: open ? '0 0 0 3px rgba(11,61,46,0.1)' : 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '0.9rem',
          color: value ? 'var(--foreground)' : '#c0c0c0',
          fontWeight: value ? '600' : '400',
          transition: 'all 0.2s',
        }}
      >
        <span style={{ flex: 1, textAlign: 'start' }}>{value || placeholder}</span>
        <ChevronDown
          size={16}
          strokeWidth={2.2}
          color="var(--primary)"
          style={{ flexShrink: 0, marginInlineStart: '6px', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            insetInlineStart: 0,
            insetInlineEnd: 0,
            background: 'white',
            border: '1.5px solid #e0e0e0',
            borderRadius: '12px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
            zIndex: 999,
            overflow: 'hidden',
            maxHeight: '240px',
            overflowY: 'auto',
          }}
        >
          {options.map((opt, i) => (
            <button
              key={opt}
              type="button"
              role="option"
              aria-selected={value === opt}
              onClick={() => { onChange(opt); setOpen(false) }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '11px 16px',
                background: i === focusedIdx ? 'rgba(11,61,46,0.08)' : value === opt ? 'rgba(11,61,46,0.04)' : 'white',
                border: 'none',
                borderBottom: i < options.length - 1 ? '1px solid #f0f0f0' : 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '0.88rem',
                color: value === opt ? 'var(--secondary)' : 'var(--foreground)',
                fontWeight: value === opt ? '700' : '500',
                textAlign: 'start',
                transition: 'background 0.15s',
                outline: 'none',
              }}
              onMouseEnter={() => setFocusedIdx(i)}
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
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ from: defaultFrom || '', to: '', date: '', time: '', passengers: '1', name: '', phone: '' })
  const set = (k: string, v: string) => {
    setForm(p => ({ ...p, [k]: v }))
    if (errors[k]) setErrors(p => { const next = { ...p }; delete next[k]; return next })
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!vehicle)   e.vehicle  = isAr ? 'اختر السيارة أولاً'    : 'Please select a vehicle'
    if (!form.from) e.from     = isAr ? 'اختر مدينة المغادرة'   : 'Please select departure city'
    if (!form.to)   e.to       = isAr ? 'اختر الوجهة'            : 'Please select destination'
    if (!form.date) e.date     = isAr ? 'اختر التاريخ'           : 'Please select a date'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleBook = async () => {
    if (!validate()) return
    const v = VEHICLES.find(v => v.key === vehicle)
    const vLabel = v ? (isAr ? v.nameAr : v.nameEn) : (isAr ? 'غير محدد' : 'Not specified')

    setLoading(true)
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vehicle: vLabel, from: form.from, to: form.to, date: form.date, time: form.time, passengers: form.passengers, name: form.name, phone: form.phone }),
      })
    } catch (_) {}
    setLoading(false)

    const msg = isAr
      ? `السلام عليكم، أرغب في حجز رحلة:%0Aالسيارة: ${vLabel}%0Aمن: ${form.from}%0Aإلى: ${form.to}%0Aالتاريخ: ${form.date}%0Aالوقت: ${form.time || 'غير محدد'}%0Aالركاب: ${form.passengers}${form.name ? `%0Aالاسم: ${form.name}` : ''}${form.phone ? `%0Aالهاتف: ${form.phone}` : ''}`
      : `Hello, I'd like to book a trip:%0AVehicle: ${vLabel}%0AFrom: ${form.from}%0ATo: ${form.to}%0ADate: ${form.date}%0ATime: ${form.time || 'Not specified'}%0APassengers: ${form.passengers}${form.name ? `%0AName: ${form.name}` : ''}${form.phone ? `%0APhone: ${form.phone}` : ''}`
    window.open(`https://wa.me/966569487569?text=${msg}`, '_blank')

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
  }

  const cities = isAr ? CITIES.ar : CITIES.en

  return (
    <div className="booking-form-card">

      {/* Success banner */}
      {submitted && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          background: 'rgba(11,61,46,0.08)', border: '1.5px solid rgba(11,61,46,0.25)',
          borderRadius: '10px', padding: '10px 14px', marginBottom: '14px',
          color: 'var(--secondary)', fontSize: '0.88rem', fontWeight: '700',
        }}>
          <CheckCircle size={18} strokeWidth={2.5} />
          {isAr ? 'تم إرسال الطلب! سيتواصل معك فريقنا قريباً.' : 'Booking sent! Our team will reach you shortly.'}
        </div>
      )}

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
          <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '7px' }}>
          {VEHICLES.map(v => (
            <button
              key={v.key}
              type="button"
              onClick={() => { setVehicle(v.key); if (errors.vehicle) setErrors(p => { const n = { ...p }; delete n.vehicle; return n }) }}
              style={{
                padding: '8px 5px 10px',
                border: errors.vehicle ? '1.5px solid #e53e3e' : vehicle === v.key ? '2px solid var(--secondary)' : '1.5px solid #ddd',
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
                <img src={v.img} alt={v.nameEn} width={200} height={58} style={{ width: '100%', height: '100%', objectFit: v.fit, objectPosition: 'center', display: 'block' }} />
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
        {errors.vehicle && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.vehicle}</p>}
      </div>

      {/* From */}
      <div className="form-group">
        <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPin size={13} color="var(--primary)" strokeWidth={2.5} />
          {isAr ? 'من — المغادرة' : 'From — Departure'}
          <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
        </label>
        <CustomSelect
          value={form.from}
          onChange={v => set('from', v)}
          options={cities}
          placeholder={isAr ? 'اختر المدينة' : 'Choose City'}
          hasError={!!errors.from}
        />
        {errors.from && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.from}</p>}
      </div>

      {/* To */}
      <div className="form-group">
        <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Navigation size={13} color="var(--primary)" strokeWidth={2.5} />
          {isAr ? 'إلى — الوجهة' : 'To — Destination'}
          <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
        </label>
        <CustomSelect
          value={form.to}
          onChange={v => set('to', v)}
          options={cities}
          placeholder={isAr ? 'اختر الوجهة' : 'Choose Destination'}
          hasError={!!errors.to}
        />
        {errors.to && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.to}</p>}
      </div>

      {/* Date + Time */}
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'التاريخ' : 'Date'}
            <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
          </label>
          <div className="input-icon-wrap">
            <Calendar size={14} className="input-icon" strokeWidth={2} />
            <input
              type="date"
              className="form-input"
              value={form.date}
              onChange={e => set('date', e.target.value)}
              style={errors.date ? { borderColor: '#e53e3e' } : {}}
            />
          </div>
          {errors.date && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.date}</p>}
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

      {/* Name + Phone */}
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'الاسم' : 'Name'}
          </label>
          <input type="text" className="form-input" placeholder={isAr ? 'اسمك (اختياري)' : 'Your name (optional)'} value={form.name} onChange={e => set('name', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'رقم الهاتف' : 'Phone'}
          </label>
          <input type="tel" className="form-input" placeholder={isAr ? 'رقم هاتفك' : 'Your phone'} value={form.phone} onChange={e => set('phone', e.target.value)} dir="ltr" />
        </div>
      </div>

      {/* WhatsApp Button */}
      <button type="button" className="btn-whatsapp" onClick={handleBook} style={{ marginTop: '8px' }} disabled={loading}>
        {loading
          ? <Loader2 size={18} strokeWidth={2.5} style={{ animation: 'spin 1s linear infinite' }} />
          : <MessageCircle size={18} strokeWidth={2.5} />
        }
        {loading ? (isAr ? 'جاري الإرسال...' : 'Sending...') : (isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp')}
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
