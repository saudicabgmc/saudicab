'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Car, MapPin, Navigation, Calendar, Clock, Users, MessageCircle, ChevronDown, Check, Phone, User, CheckCircle, Briefcase, HelpCircle, Home } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { vehicleImages, findRoutePrice } from '@/lib/pricingData'

const CITIES = {
  ar: ['مكة المكرمة', 'المدينة المنورة', 'جدة', 'الطائف', 'الرياض', 'الدمام', 'مطار جدة الدولي', 'مطار المدينة المنورة', 'موقع آخر'],
  en: ['Makkah', 'Madinah', 'Jeddah', 'Taif', 'Riyadh', 'Dammam', 'Jeddah Airport', 'Madinah Airport', 'Other Location'],
}

const VEHICLES = [
  { key: 'sedan', img: vehicleImages.sedan, fit: 'cover' as const, bg: '#0F5132', nameEn: 'Sedan', nameAr: 'سيدان', seatEn: '4 Seats', seatAr: '٤ مقاعد' },
  { key: 'staria', img: vehicleImages.staria, fit: 'cover' as const, bg: '#111', nameEn: 'Staria', nameAr: 'هيونداي ستاريا', seatEn: '7 Seats', seatAr: '٧ مقاعد' },
  { key: 'gmc', img: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', fit: 'cover' as const, bg: '#1a1a1a', nameEn: 'GMC Yukon', nameAr: 'GMC يوكون', seatEn: 'VIP 7', seatAr: '٧ VIP' },
]

const PASSENGERS = ['1', '2', '3', '4', '5', '6', '7+']

const isOtherLoc = (v: string) => v === 'Other Location' || v === 'موقع آخر'

const LUGGAGE_OPTIONS = {
  en: ['No luggage', '1 Bag', '2 Bags', '3 Bags', '4 Bags', '5+ Bags'],
  ar: ['لا يوجد حقائب', 'حقيبة واحدة', 'حقيبتان', '٣ حقائب', '٤ حقائب', '٥ حقائب أو أكثر']
}

/* ── Custom Dropdown ── */
function CustomSelect({
  value, onChange, options, placeholder, hasError, ariaLabel,
}: {
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
  hasError?: boolean
  ariaLabel?: string
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
        aria-label={ariaLabel || placeholder}
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
              tabIndex={-1}
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
  const [submitted, setSubmitted] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [waLink, setWaLink] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [todayStr, setTodayStr] = useState('')

  const [form, setForm] = useState({
    from: defaultFrom || '',
    to: '',
    date: '',
    time: '',
    passengers: '1',
    name: '',
    phone: '',
    flightNumber: '',
    luggage: '',
    specialRequests: '',
    pickupAddress: '',
    otherFrom: '',
    otherTo: '',
  })

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setTodayStr(`${year}-${month}-${day}`);
  }, [])

  const set = (k: string, v: string) => {
    setForm(p => ({ ...p, [k]: v }))
    if (errors[k]) setErrors(p => { const next = { ...p }; delete next[k]; return next })
  }

  const isAirportTransfer =
    form.from.toLowerCase().includes('airport') ||
    form.from.includes('مطار') ||
    form.to.toLowerCase().includes('airport') ||
    form.to.includes('مطار')

  const routePrice = findRoutePrice(form.from, form.to, vehicle)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!vehicle)   e.vehicle  = isAr ? 'اختر السيارة أولاً'    : 'Please select a vehicle'
    if (!form.from) e.from     = isAr ? 'اختر مدينة المغادرة'   : 'Please select departure city'
    if (!form.to)   e.to       = isAr ? 'اختر الوجهة'            : 'Please select destination'
    if (form.from && form.to && form.from === form.to) {
      e.to = isAr ? 'لا يمكن أن تكون نقطة الانطلاق والوجهة متطابقتين' : 'Departure and destination cannot be identical'
    }
    if (!form.date) {
      e.date = isAr ? 'اختر التاريخ' : 'Please select a date'
    } else {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const selDate = new Date(form.date)
      selDate.setHours(0, 0, 0, 0)
      if (selDate < today) {
        e.date = isAr ? 'التاريخ لا يمكن أن يكون في الماضي' : 'Date cannot be in the past'
      }
    }
    if (!form.time) e.time = isAr ? 'اختر الوقت' : 'Please select a time'
    if (!form.phone) {
      e.phone = isAr ? 'رقم الهاتف مطلوب لتأكيد الحجز' : 'Phone number is required'
    } else if (!/^\+?[0-9\s\-]{8,20}$/.test(form.phone.trim())) {
      e.phone = isAr ? 'يرجى إدخال رقم هاتف صحيح' : 'Please enter a valid phone number'
    }
    if (isAirportTransfer && !form.flightNumber) {
      e.flightNumber = isAr ? 'رقم الرحلة الجوية مطلوب لقاء المطار' : 'Flight number is required for airport transfers'
    }
    if (isOtherLoc(form.from) && !form.otherFrom.trim()) {
      e.otherFrom = isAr ? 'اكتب موقع المغادرة' : 'Please describe the pickup location'
    }
    if (isOtherLoc(form.to) && !form.otherTo.trim()) {
      e.otherTo = isAr ? 'اكتب موقع الوجهة' : 'Please describe the destination'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleBook = () => {
    if (!validate()) return
    const v = VEHICLES.find(v => v.key === vehicle)
    const vLabel = v ? (isAr ? v.nameAr : v.nameEn) : (isAr ? 'غير محدد' : 'Not specified')

    const fromLabel = isOtherLoc(form.from) ? `${form.from}: ${form.otherFrom.trim()}` : form.from
    const toLabel = isOtherLoc(form.to) ? `${form.to}: ${form.otherTo.trim()}` : form.to

    const enc = encodeURIComponent
    const luggageStr = form.luggage ? (isAr ? `الحقائب: ${form.luggage}` : `Luggage: ${form.luggage}`) : ''
    const flightStr = isAirportTransfer ? (isAr ? `رقم الرحلة: ${form.flightNumber}` : `Flight: ${form.flightNumber}`) : ''
    const addressStr = form.pickupAddress.trim() ? (isAr ? `عنوان الاستقبال: ${form.pickupAddress.trim()}` : `Pickup address: ${form.pickupAddress.trim()}`) : ''
    const requestsStr = form.specialRequests ? (isAr ? `طلبات خاصة: ${form.specialRequests}` : `Requests: ${form.specialRequests}`) : ''
    const priceStr = routePrice ? (isAr ? `السعر المتوقع: ${routePrice} ريال` : `Estimated Price: ${routePrice} SAR`) : ''

    const msg = isAr
      ? `السلام عليكم، أرغب في حجز رحلة:%0Aالسيارة: ${enc(vLabel)}%0Aمن: ${enc(fromLabel)}%0Aإلى: ${enc(toLabel)}%0Aالتاريخ: ${enc(form.date)}%0Aالوقت: ${enc(form.time)}%0Aالركاب: ${enc(form.passengers)}${form.name ? `%0Aالاسم: ${enc(form.name)}` : ''}${form.phone ? `%0Aالهاتف: ${enc(form.phone)}` : ''}${flightStr ? `%0A${enc(flightStr)}` : ''}${addressStr ? `%0A${enc(addressStr)}` : ''}${luggageStr ? `%0A${enc(luggageStr)}` : ''}${requestsStr ? `%0A${enc(requestsStr)}` : ''}${priceStr ? `%0A${enc(priceStr)}` : ''}`
      : `Hello, I'd like to book a trip:%0AVehicle: ${enc(vLabel)}%0AFrom: ${enc(fromLabel)}%0ATo: ${enc(toLabel)}%0ADate: ${enc(form.date)}%0ATime: ${enc(form.time)}%0APassengers: ${enc(form.passengers)}${form.name ? `%0AName: ${enc(form.name)}` : ''}${form.phone ? `%0APhone: ${enc(form.phone)}` : ''}${flightStr ? `%0A${enc(flightStr)}` : ''}${addressStr ? `%0A${enc(addressStr)}` : ''}${luggageStr ? `%0A${enc(luggageStr)}` : ''}${requestsStr ? `%0A${enc(requestsStr)}` : ''}${priceStr ? `%0A${enc(priceStr)}` : ''}`

    const link = `https://wa.me/923097811785?text=${msg}`
    setWaLink(link)

    // Open WhatsApp first, synchronously inside the tap. Doing this after an
    // awaited request makes mobile browsers treat it as a popup and block it.
    const win = window.open(link, '_blank')
    if (!win) window.location.href = link

    // Record the request in the background — never blocks or delays WhatsApp.
    fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        vehicle: vLabel,
        from: fromLabel,
        to: toLabel,
        date: form.date,
        time: form.time,
        passengers: form.passengers,
        name: form.name,
        phone: form.phone,
        flightNumber: isAirportTransfer ? form.flightNumber : '',
        luggage: form.luggage,
        specialRequests: [addressStr, form.specialRequests].filter(Boolean).join(' | '),
      }),
    }).catch(() => {})

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 20000)
  }

  const paxCount = form.passengers === '7+' ? 8 : parseInt(form.passengers, 10)
  const vehicleHint =
    paxCount > 7
      ? (isAr ? 'لأكثر من ٧ ركاب، يرجى التواصل معنا عبر واتساب.' : 'For more than 7 passengers, please contact us on WhatsApp.')
      : vehicle === 'sedan' && paxCount > 4
        ? (isAr ? `السيدان يتسع لـ٤ ركاب — اختر ستاريا أو GMC يوكون لـ${paxCount} ركاب.` : `The Sedan seats 4 — choose Staria or GMC Yukon for ${paxCount} passengers.`)
        : ''

  const cities = isAr ? CITIES.ar : CITIES.en
  const luggageList = isAr ? LUGGAGE_OPTIONS.ar : LUGGAGE_OPTIONS.en

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
          <CheckCircle size={18} strokeWidth={2.5} style={{ flexShrink: 0 }} />
          <span>
            {isAr ? 'تم تجهيز رسالتك في واتساب. لم يفتح واتساب؟ ' : 'Your request is ready in WhatsApp. Didn\'t open? '}
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>
              {isAr ? 'افتح واتساب' : 'Open WhatsApp'}
            </a>
          </span>
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
        <div role="group" aria-label={isAr ? 'اختر السيارة' : 'Choose Vehicle'} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '7px' }}>
          {VEHICLES.map(v => (
            <button
              key={v.key}
              type="button"
              aria-pressed={vehicle === v.key}
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
                {v.img ? (
                  <img src={v.img} alt={v.nameEn} width={200} height={58} style={{ width: '100%', height: '100%', objectFit: v.fit, objectPosition: v.key === 'staria' ? '50% 32%' : 'center', display: 'block' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <Car size={26} strokeWidth={1.8} />
                  </div>
                )}
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
          ariaLabel={isAr ? 'من — المغادرة' : 'From — Departure'}
        />
        {errors.from && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.from}</p>}
        {isOtherLoc(form.from) && (
          <input
            type="text"
            className="form-input"
            aria-label={isAr ? 'وصف موقع المغادرة' : 'Describe the pickup location'}
            placeholder={isAr ? 'اكتب المدينة أو المكان' : 'Type the city or place'}
            value={form.otherFrom}
            onChange={e => set('otherFrom', e.target.value)}
            style={{ marginTop: '8px', ...(errors.otherFrom ? { borderColor: '#e53e3e' } : {}) }}
          />
        )}
        {errors.otherFrom && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.otherFrom}</p>}
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
          ariaLabel={isAr ? 'إلى — الوجهة' : 'To — Destination'}
        />
        {errors.to && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.to}</p>}
        {isOtherLoc(form.to) && (
          <input
            type="text"
            className="form-input"
            aria-label={isAr ? 'وصف الوجهة' : 'Describe the destination'}
            placeholder={isAr ? 'اكتب المدينة أو المكان' : 'Type the city or place'}
            value={form.otherTo}
            onChange={e => set('otherTo', e.target.value)}
            style={{ marginTop: '8px', ...(errors.otherTo ? { borderColor: '#e53e3e' } : {}) }}
          />
        )}
        {errors.otherTo && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.otherTo}</p>}
      </div>

      {/* Flight Number (Only for airport transfers) */}
      {isAirportTransfer && (
        <div className="form-group animate-fadeInUp">
          <label htmlFor="booking-flight-number" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Navigation size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'رقم الرحلة الجوية' : 'Flight Number'}
            <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
          </label>
          <input
            id="booking-flight-number"
            type="text"
            className="form-input"
            placeholder={isAr ? 'مثال: SV123 (مهم للاستقبال في المطار)' : 'e.g. SV123 (required for airport pickup)'}
            value={form.flightNumber}
            onChange={e => set('flightNumber', e.target.value)}
            style={errors.flightNumber ? { borderColor: '#e53e3e' } : {}}
          />
          {errors.flightNumber && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.flightNumber}</p>}
        </div>
      )}

      {/* Date + Time */}
      <div className="form-grid-2">
        <div className="form-group">
          <label htmlFor="booking-date" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'التاريخ' : 'Date'}
            <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
          </label>
          <div className="input-icon-wrap">
            <Calendar size={14} className="input-icon" strokeWidth={2} />
            <input
              id="booking-date"
              type="date"
              className="form-input"
              value={form.date}
              min={todayStr}
              onChange={e => set('date', e.target.value)}
              style={errors.date ? { borderColor: '#e53e3e' } : {}}
            />
          </div>
          {errors.date && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.date}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="booking-time" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'الوقت' : 'Time'}
            <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
          </label>
          <div className="input-icon-wrap">
            <Clock size={14} className="input-icon" strokeWidth={2} />
            <input
              id="booking-time"
              type="time"
              className="form-input"
              value={form.time}
              onChange={e => set('time', e.target.value)}
              style={errors.time ? { borderColor: '#e53e3e' } : {}}
            />
          </div>
          {errors.time && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.time}</p>}
        </div>
      </div>

      {/* Passengers + Phone (the only required contact field) */}
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Users size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'الركاب' : 'Passengers'}
          </label>
          <CustomSelect
            value={form.passengers}
            onChange={v => set('passengers', v)}
            options={PASSENGERS}
            placeholder="1"
            ariaLabel={isAr ? 'الركاب' : 'Passengers'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="booking-phone" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={13} color="var(--primary)" strokeWidth={2.5} />
            {isAr ? 'رقم الهاتف' : 'Phone'}
            <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            className="form-input"
            placeholder={isAr ? 'رقم هاتفك' : 'Your phone'}
            value={form.phone}
            onChange={e => set('phone', e.target.value)}
            style={errors.phone ? { borderColor: '#e53e3e' } : {}}
            dir="ltr"
          />
          {errors.phone && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.phone}</p>}
        </div>
      </div>
      {vehicleHint && (
        <p role="status" style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: '700', margin: '-4px 0 12px', lineHeight: 1.5 }}>
          {vehicleHint}
        </p>
      )}

      {/* Optional details — collapsed by default to keep the form short */}
      <button
        type="button"
        onClick={() => setShowMore(s => !s)}
        aria-expanded={showMore}
        aria-controls="booking-more-details"
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'none', border: '1px dashed var(--border)', borderRadius: '10px',
          padding: '9px 12px', marginBottom: '12px', cursor: 'pointer', fontFamily: 'inherit',
          fontSize: '0.8rem', fontWeight: '700', color: 'var(--muted-foreground)',
        }}
      >
        <span>{isAr ? 'إضافة تفاصيل (الاسم، الحقائب، العنوان، طلبات خاصة) — اختياري' : 'Add details (name, luggage, address, requests) — optional'}</span>
        <ChevronDown size={16} strokeWidth={2.4} style={{ flexShrink: 0, marginInlineStart: '8px', transition: 'transform 0.2s', transform: showMore ? 'rotate(180deg)' : 'none' }} />
      </button>

      {showMore && (
        <div id="booking-more-details">
          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="booking-name" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={13} color="var(--primary)" strokeWidth={2.5} />
                {isAr ? 'الاسم' : 'Name'}
              </label>
              <input id="booking-name" type="text" className="form-input" placeholder={isAr ? 'اسمك' : 'Your name'} value={form.name} onChange={e => set('name', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Briefcase size={13} color="var(--primary)" strokeWidth={2.5} />
                {isAr ? 'الأمتعة / الحقائب' : 'Luggage / Bags'}
              </label>
              <CustomSelect
                value={form.luggage}
                onChange={v => set('luggage', v)}
                options={luggageList}
                placeholder={isAr ? 'اختر عدد الحقائب' : 'Bags count'}
                ariaLabel={isAr ? 'الأمتعة / الحقائب' : 'Luggage / Bags'}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="booking-pickup-address" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Home size={13} color="var(--primary)" strokeWidth={2.5} />
              {isAr ? 'الفندق / عنوان الاستقبال' : 'Hotel / pickup address'}
            </label>
            <input
              id="booking-pickup-address"
              type="text"
              className="form-input"
              placeholder={isAr ? 'اسم الفندق أو العنوان أو الحي' : 'Hotel name, address or district'}
              value={form.pickupAddress}
              onChange={e => set('pickupAddress', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="booking-special-requests" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HelpCircle size={13} color="var(--primary)" strokeWidth={2.5} />
              {isAr ? 'طلبات خاصة' : 'Special Requests'}
            </label>
            <textarea
              id="booking-special-requests"
              className="form-input"
              placeholder={isAr ? 'أي متطلبات إضافية (مثال: مقعد أطفال، التوقف عند السوبر ماركت، إلخ)...' : 'Any special requirements (e.g. baby seat, brief stop, etc)...'}
              value={form.specialRequests}
              onChange={e => set('specialRequests', e.target.value)}
              style={{ minHeight: '68px', resize: 'vertical', padding: '10px 12px' }}
            />
          </div>
        </div>
      )}

      {/* Live Price Preview */}
      {routePrice !== null && (
        <div className="animate-fadeInUp" style={{
          background: 'rgba(11,61,46,0.04)',
          border: '1.5px solid var(--primary)',
          borderRadius: '12px',
          padding: '12px 16px',
          marginBottom: '16px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(11,61,46,0.06)'
        }}>
          <div style={{ fontSize: '0.76rem', color: 'var(--muted-foreground)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {isAr ? 'السعر التقديري — يُؤكد عبر واتساب' : 'Estimated fare — confirmed on WhatsApp'}
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: '950', color: 'var(--primary)', marginTop: '3px', lineHeight: 1.1 }}>
            {routePrice} <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>SAR</span>
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', marginTop: '4px', fontWeight: '600' }}>
            {isAr ? 'للسيارة الواحدة وليس للفرد • شامل الضرائب والرسوم • بدون دفع مسبق' : 'Per vehicle, not per person • Includes all taxes & fees • No prepayment'}
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button type="button" className="btn-whatsapp" onClick={handleBook} style={{ marginTop: '8px' }}>
        <MessageCircle size={18} strokeWidth={2.5} />
        {isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--muted-foreground)', margin: '8px 0 0', lineHeight: 1.5 }}>
        {isAr
          ? 'بعد ذلك: نرد عبر واتساب لتأكيد السعر الثابت والسيارة وتفاصيل الاستقبال.'
          : 'Next: we reply on WhatsApp to confirm your fixed fare, vehicle and pickup details.'}
      </p>

      {/* Trust badges */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '10px', flexWrap: 'wrap' }}>
        {(isAr
          ? ['✅ رد فوري', '🔒 بدون دفع مسبق', '⏰ ٢٤/٧']
          : ['✅ Instant reply', '🔒 No advance pay', '⏰ 24/7']
        ).map(s => (
          <span key={s} style={{ fontSize: '0.72rem', color: 'var(--muted-foreground)', fontWeight: '600' }}>{s}</span>
        ))}
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--muted-foreground)', margin: '8px 0 0', lineHeight: 1.5 }}>
        {isAr
          ? 'الدفع نقداً (بالريال) أو تحويل بنكي بعد الرحلة • إلغاء مجاني حتى ٣ ساعات قبل الاستقبال — '
          : 'Pay by cash (SAR) or bank transfer after the trip • Free cancellation up to 3 hours before pickup — '}
        <Link href="/terms-and-conditions" style={{ color: 'var(--primary)', fontWeight: '700' }}>
          {isAr ? 'الشروط' : 'Terms'}
        </Link>
      </p>

    </div>
  )
}
