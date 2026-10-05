'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { MessageCircle } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)
  const pathname = usePathname()
  const { isAr } = useLang()

  // The homepage already has a full-width "Book via WhatsApp" bar pinned to the
  // bottom of the screen — a second floating button there just competes with it.
  if (pathname === '/') return null

  const label = isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'
  const text = isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip"

  return (
    <a
      href={`https://wa.me/923097811785?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '24px',
        insetInlineStart: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: '#25D366',
        color: 'white',
        padding: hovered ? '14px 20px 14px 16px' : '16px',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '0.9rem',
        boxShadow: '0 6px 22px rgba(37,211,102,0.5)',
        zIndex: 999,
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: hovered ? '210px' : '54px',
        textDecoration: 'none',
      }}
      title={label}
    >
      <MessageCircle size={22} strokeWidth={2.2} style={{ flexShrink: 0 }} />
      <span style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.2s' }}>
        {label}
      </span>
    </a>
  )
}
