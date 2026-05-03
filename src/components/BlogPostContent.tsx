'use client'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blogData'
import { useLang } from '@/contexts/LanguageContext'

interface Props {
  post: BlogPost
  related: BlogPost[]
  mins: number
}

function readingTime(html: string) {
  const text = html.replace(/<[^>]+>/g, '')
  return Math.max(1, Math.round(text.trim().split(/\s+/).length / 200))
}

export default function BlogPostContent({ post, related }: Props) {
  const { lang, isAr } = useLang()
  const title = post.title[lang]
  const content = post.content[lang]
  const excerpt = post.excerpt[lang]
  const mins = readingTime(content)

  return (
    <main style={{ backgroundColor: 'var(--background)', minHeight: '80vh' }}>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', minHeight: '420px',
        background: `linear-gradient(180deg, rgba(7,31,23,0.55) 0%, rgba(7,31,23,0.88) 100%), url("${post.image}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '100px 0 48px',
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '20px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>{isAr ? 'المدونة' : 'Blog'}</Link>
            <span>›</span>
            <span style={{ color: 'var(--primary)' }}>{isAr ? 'مقالة' : 'Article'}</span>
          </div>

          <h1 style={{
            color: 'white', fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
            fontWeight: '900', lineHeight: 1.2, marginBottom: '18px',
            direction: isAr ? 'rtl' : 'ltr', textAlign: isAr ? 'right' : 'left',
          }}>
            {title}
          </h1>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{
              background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)',
              color: 'var(--primary)', padding: '4px 14px', borderRadius: '50px',
              fontSize: '0.78rem', fontWeight: '700',
            }}>
              Saudi Cabs GMC
            </div>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>{post.date}</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>
              {mins} {isAr ? 'دقائق قراءة' : 'min read'}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <div className="container" style={{ maxWidth: '820px', padding: '52px 24px 0' }}>

        {/* Excerpt lead */}
        <p style={{
          fontSize: '1.1rem', fontWeight: '600', color: 'var(--muted-foreground)',
          lineHeight: 1.8, marginBottom: '36px', borderLeft: isAr ? 'none' : '4px solid var(--primary)',
          borderRight: isAr ? '4px solid var(--primary)' : 'none',
          paddingLeft: isAr ? '0' : '20px', paddingRight: isAr ? '20px' : '0',
          direction: isAr ? 'rtl' : 'ltr',
        }}>
          {excerpt}
        </p>

        {/* Article content */}
        <article
          style={{
            fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--foreground)',
            marginBottom: '52px',
            direction: isAr ? 'rtl' : 'ltr', textAlign: isAr ? 'right' : 'left',
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #071f17 0%, #0B3D2E 100%)',
          borderRadius: '20px', padding: '40px 36px', textAlign: 'center',
          marginBottom: '60px', border: '1px solid rgba(212,175,55,0.3)',
        }}>
          <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>📲</div>
          <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: '900', marginBottom: '10px' }}>
            {isAr ? 'احجز رحلتك الآن' : 'Ready to Book Your Ride?'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '0.9rem', lineHeight: 1.7 }}>
            {isAr
              ? 'أسعار ثابتة · متاحون 24/7 · من الباب للباب · سائقون ثنائيو اللغة'
              : 'Fixed prices · 24/7 · Door-to-door · Bilingual drivers'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/966569487569"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#25D366', color: 'white', padding: '13px 28px',
                borderRadius: '10px', fontWeight: '800', fontSize: '0.9rem', textDecoration: 'none',
              }}
            >
              WhatsApp +966 56 948 7569
            </a>
            <a href="tel:+966569487569" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(212,175,55,0.15)', color: 'var(--primary)', padding: '13px 28px',
              borderRadius: '10px', fontWeight: '800', fontSize: '0.9rem', textDecoration: 'none',
              border: '1px solid rgba(212,175,55,0.4)',
            }}>
              {isAr ? 'اتصل الآن' : 'Call Now'}
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div style={{ marginBottom: '72px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '10px' }}>
              {isAr ? <>مقالات <span style={{ color: 'var(--primary)' }}>ذات صلة</span></> : <>Related <span style={{ color: 'var(--primary)' }}>Articles</span></>}
            </h2>
            <div className="gold-divider" style={{ margin: '0 0 24px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    borderRadius: '14px', overflow: 'hidden',
                    border: '1px solid var(--border)', backgroundColor: 'var(--card)', transition: 'all 0.2s',
                  }}>
                    <img src={r.image} alt={r.title.en} width={600} height={140} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                    <div style={{ padding: '16px' }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '6px' }}>{r.date}</div>
                      <h3 style={{ fontSize: '0.88rem', fontWeight: '800', lineHeight: 1.4, margin: 0 }}>{r.title[lang]}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div style={{ paddingBottom: '60px' }}>
          <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem' }}>
            {isAr ? '→ العودة للمدونة' : '← Back to Blog'}
          </Link>
        </div>
      </div>
    </main>
  )
}
