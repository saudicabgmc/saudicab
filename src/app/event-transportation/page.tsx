'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  MessageCircle, MapPin, Users, Car, CalendarCheck, Send, CheckCircle2,
  Calendar, Phone, PartyPopper, Building2, HelpCircle,
} from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import { useLang } from '@/contexts/LanguageContext'

const EVENT_TYPES = [
  {
    icon: '💍',
    t: { en: 'Wedding Guest Transport', ar: 'نقل ضيوف الأعراس' },
    d: {
      en: 'Coordinated pickups for wedding guests from hotels to the venue and back, including a dedicated vehicle for the bridal party if needed.',
      ar: 'استلام منسق لضيوف العرس من الفنادق إلى قاعة المناسبة والعودة، مع سيارة مخصصة لموكب العروسين عند الحاجة.',
    },
  },
  {
    icon: '🏢',
    t: { en: 'Corporate Events', ar: 'فعاليات الشركات' },
    d: {
      en: 'Staff and client transport for company functions, product launches, and offsite gatherings across the city.',
      ar: 'نقل الموظفين والعملاء لفعاليات الشركة وإطلاق المنتجات والتجمعات خارج المكتب في أنحاء المدينة.',
    },
  },
  {
    icon: '🎤',
    t: { en: 'Conferences & Seminars', ar: 'المؤتمرات والندوات' },
    d: {
      en: 'Reliable airport-to-venue and hotel-to-venue transfers for delegates and speakers, timed around the event schedule.',
      ar: 'توصيل موثوق من المطار إلى موقع المؤتمر ومن الفندق إلى موقع الفعالية للمشاركين والمتحدثين، وفق جدول الفعالية.',
    },
  },
  {
    icon: '⭐',
    t: { en: 'VIP Guest Transport', ar: 'نقل كبار الضيوف' },
    d: {
      en: 'A GMC Yukon or Hyundai Staria with a professional driver can be arranged for VIP arrivals, departures, and movements during the event, subject to availability on your date.',
      ar: 'يمكن ترتيب سيارة GMC يوكون أو هيونداي ستاريا مع سائق محترف لاستقبال وتوديع كبار الضيوف وتنقلاتهم خلال الفعالية، حسب التوفر في تاريخك.',
    },
  },
  {
    icon: '🎉',
    t: { en: 'Private Functions & Celebrations', ar: 'المناسبات والاحتفالات الخاصة' },
    d: {
      en: 'Birthdays, anniversaries, graduations, and family celebrations — transport arranged around your guest list and venue.',
      ar: 'أعياد الميلاد والذكرى السنوية وحفلات التخرج واحتفالات العائلة — نقل يُرتَّب وفق قائمة ضيوفك وموقع المناسبة.',
    },
  },
  {
    icon: '✈️',
    t: { en: 'Event-Linked Airport Transfers', ar: 'توصيل مطار مرتبط بالفعالية' },
    d: {
      en: 'Airport pickup for out-of-town guests or delegates arriving for your event, coordinated with flight arrival times.',
      ar: 'استقبال من المطار لضيوف أو مشاركين قادمين من خارج المدينة لحضور فعاليتك، بالتنسيق مع مواعيد وصول الرحلات.',
    },
  },
]

const VEHICLES = [
  {
    name: { en: 'Sedan', ar: 'سيدان' },
    seats: { en: 'Up to 4 passengers', ar: 'حتى ٤ ركاب' },
    bestFor: { en: 'Small VIP arrivals, a speaker or two, or a compact guest group.', ar: 'استقبال كبار ضيوف محدود العدد، أو متحدث أو اثنين، أو مجموعة ضيوف صغيرة.' },
    img: '/fleet/sedan-exterior-side-saudi-cabs-gmc.webp',
  },
  {
    name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' },
    seats: { en: 'Up to 7 passengers', ar: 'حتى ٧ ركاب' },
    bestFor: { en: 'Guest groups travelling together, with room for luggage or gifts.', ar: 'مجموعات ضيوف تسافر معاً، مع مساحة للأمتعة أو الهدايا.' },
    img: null,
  },
  {
    name: { en: 'GMC Yukon', ar: 'GMC يوكون' },
    seats: { en: 'Up to 7 passengers', ar: 'حتى ٧ ركاب' },
    bestFor: { en: 'VIP guests, the bridal party, or a premium arrival at your venue.', ar: 'كبار الضيوف أو موكب العروسين أو وصول فاخر إلى موقع مناسبتك.' },
    img: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp',
  },
]

const BOOKING_STEPS = [
  { icon: Send, t: { en: 'Share Your Event Details', ar: 'شارك تفاصيل فعاليتك' }, d: { en: 'Event date, pickup locations, venue, and approximate passenger count.', ar: 'تاريخ الفعالية ومواقع الاستلام والموقع وعدد الركاب التقريبي.' } },
  { icon: Car, t: { en: 'Tell Us Your Vehicle Needs', ar: 'أخبرنا باحتياجك من السيارات' }, d: { en: 'One vehicle or several — Sedan, Hyundai Staria, GMC Yukon, or a mix.', ar: 'سيارة واحدة أو عدة سيارات — سيدان أو هيونداي ستاريا أو GMC يوكون أو مزيج منها.' } },
  { icon: MessageCircle, t: { en: 'Receive Your Quote', ar: 'استلم عرض سعرك' }, d: { en: 'We review your event details and reply with a quote on WhatsApp.', ar: 'نراجع تفاصيل فعاليتك ونرد عليك بعرض سعر عبر واتساب.' } },
  { icon: CheckCircle2, t: { en: 'Confirm & We Handle the Day', ar: 'أكّد ودعنا نتولى اليوم' }, d: { en: 'Once confirmed, your drivers are briefed on timing and venue details in advance.', ar: 'بعد التأكيد، يُطلع سائقوك على التوقيت وتفاصيل الموقع مسبقاً.' } },
]

const SERVICE_CITIES = [
  { href: '/makkah-taxi-service', en: 'Makkah', ar: 'مكة المكرمة' },
  { href: '/madinah-taxi-service', en: 'Madinah', ar: 'المدينة المنورة' },
  { href: '/jeddah-taxi-service', en: 'Jeddah', ar: 'جدة' },
  { href: '/taif-taxi-service', en: 'Taif', ar: 'الطائف' },
  { href: '/riyadh-taxi-service', en: 'Riyadh', ar: 'الرياض' },
  { href: '/dammam-taxi-service', en: 'Dammam', ar: 'الدمام' },
]

const FAQS = [
  {
    q: { en: 'How far in advance should I book transport for my wedding or event?', ar: 'قبل كم مدة يجب أن أحجز نقل العرس أو الفعالية؟' },
    a: {
      en: 'As early as possible, especially for large guest lists or peak season dates — this gives us the best chance of securing enough vehicles for your event. Share your date as soon as you have it, even before the final guest count is confirmed.',
      ar: 'في أقرب وقت ممكن، خصوصاً لقوائم الضيوف الكبيرة أو مواعيد الموسم المزدحم — فهذا يمنحنا أفضل فرصة لتأمين عدد كافٍ من السيارات لفعاليتك. شارك تاريخك بمجرد معرفته، حتى قبل تأكيد العدد النهائي للضيوف.',
    },
  },
  {
    q: { en: 'Can you provide multiple vehicles for a large guest list?', ar: 'هل يمكنكم توفير عدة سيارات لقائمة ضيوف كبيرة؟' },
    a: {
      en: 'Yes, we can arrange multiple vehicles — Sedans, Hyundai Starias, and GMC Yukons — for a single event, subject to availability on your date. Share your expected guest count and we will suggest a vehicle mix.',
      ar: 'نعم، يمكننا ترتيب عدة سيارات — سيدان وهيونداي ستاريا وGMC يوكون — لفعالية واحدة، حسب التوفر في تاريخك. شارك العدد المتوقع للضيوف وسنقترح لك مزيجاً مناسباً من السيارات.',
    },
  },
  {
    q: { en: 'Do you offer transport for corporate conferences and seminars?', ar: 'هل تقدمون نقلاً للمؤتمرات والندوات؟' },
    a: {
      en: 'Yes, we arrange delegate and speaker transport for corporate conferences and seminars, including airport pickups and hotel-to-venue transfers timed around your schedule.',
      ar: 'نعم، نرتب نقل المشاركين والمتحدثين للمؤتمرات والندوات، بما في ذلك الاستقبال من المطار والتوصيل من الفندق إلى موقع الفعالية وفق جدولك.',
    },
  },
  {
    q: { en: 'Is there a minimum number of vehicles or hours for an event booking?', ar: 'هل هناك حد أدنى لعدد السيارات أو الساعات لحجز فعالية؟' },
    a: {
      en: 'There is no fixed minimum — a single vehicle for a VIP arrival and a full fleet for a large wedding are both handled the same way. Share your event details and we will confirm what is possible.',
      ar: 'لا يوجد حد أدنى ثابت — سواء كانت سيارة واحدة لاستقبال كبير الضيوف أو أسطول كامل لعرس كبير، نتعامل مع الحالتين بنفس الطريقة. شارك تفاصيل فعاليتك وسنؤكد لك ما هو ممكن.',
    },
  },
  {
    q: { en: 'Can the same driver stay with our event for the whole day?', ar: 'هل يمكن أن يبقى نفس السائق مع فعاليتنا طوال اليوم؟' },
    a: {
      en: 'Yes, for events that run across several hours, a driver can be assigned to stay with your event rather than making a single drop-off — mention this when you share your event details so we can confirm it.',
      ar: 'نعم، بالنسبة للفعاليات التي تمتد لعدة ساعات، يمكن تخصيص سائق للبقاء مع فعاليتك بدلاً من توصيلة واحدة فقط — اذكر ذلك عند مشاركة تفاصيل فعاليتك لنتمكن من تأكيده.',
    },
  },
  {
    q: { en: 'How is the price determined for event transportation?', ar: 'كيف يُحدَّد سعر نقل الفعاليات؟' },
    a: {
      en: 'Event pricing depends on the number of vehicles, vehicle type, duration, and distances involved, so it is confirmed individually for each event rather than listed as a fixed package. Share your event details on WhatsApp for a specific quote.',
      ar: 'يعتمد سعر نقل الفعاليات على عدد السيارات ونوعها ومدتها والمسافات المطلوبة، لذا يُؤكَّد بشكل فردي لكل فعالية بدلاً من إدراجه كباقة ثابتة. شارك تفاصيل فعاليتك عبر واتساب للحصول على عرض سعر محدد.',
    },
  },
  {
    q: { en: 'Can you pick up out-of-town guests from the airport before our event?', ar: 'هل يمكنكم استقبال ضيوف من خارج المدينة من المطار قبل فعاليتنا؟' },
    a: {
      en: 'Yes, airport pickups can be coordinated with flight arrival times for guests or delegates travelling in for your event, ahead of taking them to their hotel or the venue.',
      ar: 'نعم، يمكن تنسيق الاستقبال من المطار مع مواعيد وصول الرحلات للضيوف أو المشاركين القادمين من خارج المدينة لحضور فعاليتك، قبل توصيلهم إلى فندقهم أو موقع الفعالية.',
    },
  },
]

const EVENT_TYPE_OPTIONS = [
  { en: 'Wedding', ar: 'عرس' },
  { en: 'Corporate Event', ar: 'فعالية شركة' },
  { en: 'Conference / Seminar', ar: 'مؤتمر / ندوة' },
  { en: 'VIP Guest Transport', ar: 'نقل كبار الضيوف' },
  { en: 'Private Function', ar: 'مناسبة خاصة' },
  { en: 'Other', ar: 'أخرى' },
]

const GUEST_COUNT_OPTIONS = [
  { en: '1–4', ar: '١–٤' },
  { en: '5–7', ar: '٥–٧' },
  { en: '8–15', ar: '٨–١٥' },
  { en: '16–30', ar: '١٦–٣٠' },
  { en: '30+', ar: '٣٠+' },
  { en: 'Not sure yet', ar: 'غير محدد بعد' },
]

const VEHICLE_NEED_OPTIONS = [
  { en: 'Sedan', ar: 'سيدان' },
  { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' },
  { en: 'GMC Yukon', ar: 'GMC يوكون' },
  { en: 'Multiple vehicles', ar: 'عدة سيارات' },
  { en: 'Not sure yet', ar: 'غير محدد بعد' },
]

/* Event-specific WhatsApp enquiry form — distinct from the site's general point-to-point
   BookingForm (single pickup/drop-off, max 7 passengers), since events need an event type,
   venue, an open-ended guest estimate, and sometimes multiple vehicles. The shared
   BookingForm component itself is untouched and keeps working as-is everywhere else. */
function EventEnquiryForm() {
  const { isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => (isAr ? b.ar : b.en)
  const [eventType, setEventType] = useState('')
  const [date, setDate] = useState('')
  const [pickup, setPickup] = useState('')
  const [venue, setVenue] = useState('')
  const [guests, setGuests] = useState('')
  const [vehicleNeed, setVehicleNeed] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [waLink, setWaLink] = useState('')
  const [todayStr] = useState(() => {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  })

  const validate = () => {
    const e: Record<string, string> = {}
    if (!eventType) e.eventType = isAr ? 'اختر نوع الفعالية' : 'Please select an event type'
    if (!date) e.date = isAr ? 'اختر التاريخ' : 'Please select a date'
    if (!pickup.trim()) e.pickup = isAr ? 'اكتب موقع الاستلام' : 'Please enter a pickup location'
    if (!phone.trim()) {
      e.phone = isAr ? 'رقم الهاتف مطلوب' : 'Phone number is required'
    } else if (!/^\+?[0-9\s\-]{8,20}$/.test(phone.trim())) {
      e.phone = isAr ? 'يرجى إدخال رقم هاتف صحيح' : 'Please enter a valid phone number'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return
    const enc = encodeURIComponent
    const msg = isAr
      ? `السلام عليكم، أرغب في الاستفسار عن نقل فعالية:%0Aنوع الفعالية: ${enc(eventType)}%0Aالتاريخ: ${enc(date)}%0Aموقع الاستلام: ${enc(pickup.trim())}${venue.trim() ? `%0Aموقع الفعالية: ${enc(venue.trim())}` : ''}${guests ? `%0Aعدد الضيوف التقريبي: ${enc(guests)}` : ''}${vehicleNeed ? `%0Aالسيارة المطلوبة: ${enc(vehicleNeed)}` : ''}%0Aالهاتف: ${enc(phone.trim())}${notes.trim() ? `%0Aملاحظات: ${enc(notes.trim())}` : ''}`
      : `Hello, I'd like to ask about event transportation:%0AEvent type: ${enc(eventType)}%0ADate: ${enc(date)}%0APickup location: ${enc(pickup.trim())}${venue.trim() ? `%0AVenue: ${enc(venue.trim())}` : ''}${guests ? `%0AEstimated guests: ${enc(guests)}` : ''}${vehicleNeed ? `%0AVehicle needed: ${enc(vehicleNeed)}` : ''}%0APhone: ${enc(phone.trim())}${notes.trim() ? `%0ANotes: ${enc(notes.trim())}` : ''}`

    const link = `https://wa.me/923097811785?text=${msg}`
    setWaLink(link)
    const win = window.open(link, '_blank')
    if (!win) window.location.href = link
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 20000)
  }

  const selectStyle = (hasError?: boolean): React.CSSProperties => ({
    width: '100%', padding: '10px 14px', borderRadius: '10px', fontFamily: 'inherit', fontSize: '0.9rem',
    border: hasError ? '1.5px solid #e53e3e' : '1.5px solid #ddd', background: 'white', color: 'var(--foreground)',
    appearance: 'none' as const, backgroundImage: 'none',
  })

  return (
    <div className="booking-form-card">
      {submitted && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          background: 'rgba(11,61,46,0.08)', border: '1.5px solid rgba(11,61,46,0.25)',
          borderRadius: '10px', padding: '10px 14px', marginBottom: '14px',
          color: 'var(--secondary)', fontSize: '0.88rem', fontWeight: '700',
        }}>
          <CheckCircle2 size={18} strokeWidth={2.5} style={{ flexShrink: 0 }} />
          <span>
            {isAr ? 'تم تجهيز رسالتك في واتساب. لم يفتح واتساب؟ ' : "Your request is ready in WhatsApp. Didn't open? "}
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>
              {isAr ? 'افتح واتساب' : 'Open WhatsApp'}
            </a>
          </span>
        </div>
      )}

      <h3 style={{ fontSize: '1.1rem', fontWeight: '900', textAlign: 'center', marginBottom: '18px', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <PartyPopper size={20} color="var(--primary)" strokeWidth={2.5} aria-hidden="true" />
        {isAr ? 'استفسر عن نقل فعاليتك' : 'Ask About Your Event'}
      </h3>

      <div className="form-group">
        <label htmlFor="event-type" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <PartyPopper size={13} color="var(--primary)" strokeWidth={2.5} aria-hidden="true" />
          {isAr ? 'نوع الفعالية' : 'Event Type'}
          <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
        </label>
        <select id="event-type" className="form-input" style={selectStyle(!!errors.eventType)} value={eventType} onChange={e => { setEventType(e.target.value); if (errors.eventType) setErrors(p => ({ ...p, eventType: '' })) }}>
          <option value="">{isAr ? 'اختر نوع الفعالية' : 'Choose event type'}</option>
          {EVENT_TYPE_OPTIONS.map(o => <option key={o.en} value={tx(o)}>{tx(o)}</option>)}
        </select>
        {errors.eventType && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.eventType}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="event-date" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Calendar size={13} color="var(--primary)" strokeWidth={2.5} aria-hidden="true" />
          {isAr ? 'تاريخ الفعالية' : 'Event Date'}
          <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
        </label>
        <input id="event-date" type="date" className="form-input" min={todayStr} value={date} onChange={e => { setDate(e.target.value); if (errors.date) setErrors(p => ({ ...p, date: '' })) }} style={errors.date ? { borderColor: '#e53e3e' } : {}} />
        {errors.date && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.date}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="event-pickup" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPin size={13} color="var(--primary)" strokeWidth={2.5} aria-hidden="true" />
          {isAr ? 'موقع الاستلام' : 'Pickup Location(s)'}
          <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
        </label>
        <input id="event-pickup" type="text" className="form-input" placeholder={isAr ? 'الفندق أو المدينة أو عدة مواقع' : 'Hotel, city, or multiple locations'} value={pickup} onChange={e => { setPickup(e.target.value); if (errors.pickup) setErrors(p => ({ ...p, pickup: '' })) }} style={errors.pickup ? { borderColor: '#e53e3e' } : {}} />
        {errors.pickup && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.pickup}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="event-venue" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Building2 size={13} color="var(--primary)" strokeWidth={2.5} aria-hidden="true" />
          {isAr ? 'موقع الفعالية' : 'Venue'}
        </label>
        <input id="event-venue" type="text" className="form-input" placeholder={isAr ? 'اسم القاعة أو الفندق أو المكان' : 'Venue, hall or hotel name'} value={venue} onChange={e => setVenue(e.target.value)} />
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label htmlFor="event-guests" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Users size={13} color="var(--primary)" strokeWidth={2.5} aria-hidden="true" />
            {isAr ? 'عدد الضيوف التقريبي' : 'Estimated Guests'}
          </label>
          <select id="event-guests" className="form-input" style={selectStyle()} value={guests} onChange={e => setGuests(e.target.value)}>
            <option value="">{isAr ? 'اختر' : 'Choose'}</option>
            {GUEST_COUNT_OPTIONS.map(o => <option key={o.en} value={tx(o)}>{tx(o)}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="event-vehicle" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Car size={13} color="var(--primary)" strokeWidth={2.5} aria-hidden="true" />
            {isAr ? 'السيارة المطلوبة' : 'Vehicle Needed'}
          </label>
          <select id="event-vehicle" className="form-input" style={selectStyle()} value={vehicleNeed} onChange={e => setVehicleNeed(e.target.value)}>
            <option value="">{isAr ? 'اختر' : 'Choose'}</option>
            {VEHICLE_NEED_OPTIONS.map(o => <option key={o.en} value={tx(o)}>{tx(o)}</option>)}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="event-phone" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Phone size={13} color="var(--primary)" strokeWidth={2.5} aria-hidden="true" />
          {isAr ? 'رقم الهاتف' : 'Phone'}
          <span style={{ color: '#e53e3e', marginInlineStart: '2px' }}>*</span>
        </label>
        <input id="event-phone" type="tel" className="form-input" dir="ltr" placeholder={isAr ? 'رقم هاتفك' : 'Your phone'} value={phone} onChange={e => { setPhone(e.target.value); if (errors.phone) setErrors(p => ({ ...p, phone: '' })) }} style={errors.phone ? { borderColor: '#e53e3e' } : {}} />
        {errors.phone && <p style={{ color: '#e53e3e', fontSize: '0.75rem', marginTop: '5px', fontWeight: '600' }}>{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="event-notes" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HelpCircle size={13} color="var(--primary)" strokeWidth={2.5} aria-hidden="true" />
          {isAr ? 'ملاحظات إضافية' : 'Additional Notes'}
        </label>
        <textarea id="event-notes" className="form-input" placeholder={isAr ? 'أي تفاصيل إضافية عن فعاليتك...' : 'Any other details about your event...'} value={notes} onChange={e => setNotes(e.target.value)} style={{ minHeight: '64px', resize: 'vertical', padding: '10px 12px' }} />
      </div>

      <button type="button" className="btn-whatsapp" onClick={handleSubmit} style={{ marginTop: '8px' }}>
        <MessageCircle size={18} strokeWidth={2.5} aria-hidden="true" />
        {isAr ? 'استفسر عبر واتساب' : 'Ask on WhatsApp'}
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--muted-foreground)', margin: '8px 0 0', lineHeight: 1.5 }}>
        {isAr
          ? 'بعد ذلك: نراجع تفاصيل فعاليتك ونرد عبر واتساب بعرض سعر وتأكيد الإمكانية.'
          : "Next: we review your event details and reply on WhatsApp with a quote and availability."}
      </p>
    </div>
  )
}

export default function EventTransportationPage() {
  const { lang, isAr } = useLang()
  const tx = (b: { en: string; ar: string }) => b[lang]
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(
    isAr ? 'السلام عليكم، أرغب في الاستفسار عن نقل فعالية' : "Hello, I'd like to ask about event transportation"
  )}`

  return (
    <main>
      {/* Hero */}
      <link rel="preload" as="image" href="/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp" fetchPriority="high" />
      <section
        style={{
          minHeight: '90vh',
          background: 'linear-gradient(135deg,rgba(7,31,23,0.88) 0%,rgba(11,61,46,0.68) 100%), url("/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp")',
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', alignItems: 'center', padding: '100px 0 70px',
        }}
      >
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fadeInUp" style={{ color: 'white' }}>
              <span style={{ display: 'inline-block', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.6)', color: 'var(--primary)', padding: '5px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '18px' }}>
                {isAr ? 'نقل الفعاليات والمناسبات' : 'Event & Group Transportation'}
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '16px' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>نقل الفعاليات</span> في المملكة العربية السعودية</>
                  : <>Event Transportation <span style={{ color: 'var(--primary)' }}>Across Saudi Arabia</span></>
                }
              </h1>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '28px', lineHeight: 1.75, maxWidth: '520px' }}>
                {isAr
                  ? 'نقل منسق لضيوف الأعراس وفعاليات الشركات والمؤتمرات وكبار الضيوف والمناسبات الخاصة، في مكة والمدينة المنورة وجدة والطائف والرياض والدمام. شارك تفاصيل فعاليتك واستلم عرض سعر عبر واتساب.'
                  : "Coordinated transport for wedding guests, corporate events, conferences, VIP guests, and private functions — in Makkah, Madinah, Jeddah, Taif, Riyadh and Dammam. Share your event details and get a quote on WhatsApp."
                }
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle size={16} strokeWidth={2.5} />{isAr ? 'استفسر عن نقل فعاليتك' : 'Ask About Your Event'}
                </a>
              </div>
            </div>
            <div className="animate-fadeInUp animate-delay-1"><EventEnquiryForm /></div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'ما الذي نغطيه' : 'What We Cover'}</span>
            <h2 className="section-title">
              {isAr ? <>نقل <span style={{ color: 'var(--primary)' }}>الفعاليات والمناسبات</span></> : <>Event & <span style={{ color: 'var(--primary)' }}>Group Transport</span></>}
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3">
            {EVENT_TYPES.map(e => (
              <div key={e.t.en} className="service-card">
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{e.icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '8px' }}>{tx(e.t)}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{tx(e.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'سياراتنا' : 'Our Vehicles'}</span>
            <h2 className="section-title">
              {isAr ? <>سيارات <span style={{ color: 'var(--primary)' }}>لفعاليتك</span></> : <>Vehicles <span style={{ color: 'var(--primary)' }}>for Your Event</span></>}
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3">
            {VEHICLES.map(v => (
              <div key={v.name.en} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ height: '170px', overflow: 'hidden', background: v.img ? '#111' : 'linear-gradient(135deg, #071f17, #0b3d2e)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {v.img ? (
                    <img src={v.img} alt={`${v.name.en} — Saudi Cabs GMC event transport vehicle`} width={400} height={170} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <Car size={48} strokeWidth={1.3} color="rgba(212,175,55,0.5)" aria-hidden="true" />
                  )}
                </div>
                <div style={{ padding: '22px 20px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '4px' }}>{tx(v.name)}</h3>
                  <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.82rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Users size={14} strokeWidth={2.5} aria-hidden="true" />{tx(v.seats)}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.65, margin: 0 }}>{tx(v.bestFor)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'كيف يعمل الحجز' : 'How It Works'}</span>
            <h2 className="section-title">
              {isAr ? <>احجز <span style={{ color: 'var(--primary)' }}>نقل فعاليتك</span></> : <>Request <span style={{ color: 'var(--primary)' }}>Your Quote</span></>}
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-4">
            {BOOKING_STEPS.map((s, i) => {
              const StepIcon = s.icon
              return (
                <div key={s.t.en} className="service-card" style={{ textAlign: 'center' }}>
                  <div className="service-icon" style={{ margin: '0 auto 14px' }}>
                    <StepIcon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '6px' }}>{isAr ? `الخطوة ${i + 1}` : `STEP ${i + 1}`}</div>
                  <h3 style={{ fontSize: '0.88rem', fontWeight: '800', marginBottom: '8px' }}>{tx(s.t)}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>{tx(s.d)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service cities */}
      <section style={{ padding: '50px 0', backgroundColor: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ marginBottom: '16px', display: 'inline-block' }}>{isAr ? 'مدن الخدمة' : 'Service Cities'}</span>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
            {SERVICE_CITIES.map(c => (
              <Link key={c.href} href={c.href} className="route-badge"><MapPin size={14} />{isAr ? c.ar : c.en}</Link>
            ))}
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', margin: '28px 0 16px', fontWeight: '600' }}>
            {isAr ? 'روابط ذات صلة' : 'Related Links'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { href: '/private-driver', en: 'Private Driver (Chauffeur)', ar: 'سائق خاص (شوفير)' },
              { href: '/hyundai-staria-taxi', en: 'Hyundai Staria Details', ar: 'تفاصيل هيونداي ستاريا' },
              { href: '/gmc-yukon-hire', en: 'GMC Yukon Hire', ar: 'استئجار GMC يوكون' },
              { href: '/airport-transfer', en: 'Airport Transfer', ar: 'توصيل المطار' },
            ].map(g => (
              <Link key={g.href} href={g.href} className="route-badge">{isAr ? g.ar : g.en}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading={{ en: 'FAQ — Event Transportation', ar: 'أسئلة شائعة — نقل الفعاليات' }} />

      {/* Closing CTA */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#071f17,#0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <CalendarCheck size={28} color="var(--primary)" style={{ marginBottom: '14px' }} aria-hidden="true" />
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: '900', marginBottom: '12px' }}>
            {isAr ? 'لديك فعالية قادمة؟' : 'Planning an Upcoming Event?'}
          </h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', maxWidth: '520px', margin: '0 auto 28px' }}>
            {isAr
              ? 'شارك تاريخ فعاليتك ومواقع الاستلام والوجهة وعدد الركاب واحتياجك من السيارات، وسنرد عليك بعرض سعر عبر واتساب.'
              : 'Share your event date, pickup and venue locations, passenger count, and vehicle requirements — we will reply with a quote on WhatsApp.'}
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#D4AF37,#E6C65C)', color: '#1D1D1B', padding: '13px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <MessageCircle size={18} strokeWidth={2.5} aria-hidden="true" />{isAr ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
