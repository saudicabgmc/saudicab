'use client'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://wa.me/966549317712?text=السلام عليكم، أرغب في حجز رحلة"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '28px',
        left: '28px',
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
        maxWidth: hovered ? '180px' : '54px',
        textDecoration: 'none',
      }}
      title="تواصل عبر واتساب"
    >
      <MessageCircle size={22} strokeWidth={2.2} style={{ flexShrink: 0 }} />
      <span style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.2s' }}>
        احجز الآن
      </span>
    </a>
  )
}
