'use client'
import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import type { BlogPost, BlogCategory } from '@/lib/blogData'
import { blogCategoryLabels } from '@/lib/blogData'

const ALL_CATEGORIES: BlogCategory[] = [
  'Hajj & Umrah', 'Airport Transfers', 'Intercity Travel', 'Taxi Prices', 'Travel Tips', 'Vehicles & Fleet',
]

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const { lang, isAr } = useLang()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all')
  const [focusedControl, setFocusedControl] = useState<string | null>(null)

  const [featured, ...rest] = posts

  const presentCategories = useMemo(() => {
    const set = new Set(rest.map(p => p.category))
    return ALL_CATEGORIES.filter(c => set.has(c))
  }, [rest])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return rest.filter(p => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false
      if (!q) return true
      const haystack = `${p.title[lang]} ${p.excerpt[lang]} ${blogCategoryLabels[p.category][lang]}`.toLowerCase()
      return haystack.includes(q)
    })
  }, [rest, query, activeCategory, lang])

  const categoryButtonStyle = (isActive: boolean, key: string) => ({
    padding: '7px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700,
    border: `1.5px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
    background: isActive ? 'var(--primary)' : 'var(--card)',
    color: isActive ? '#071f17' : 'var(--foreground)',
    cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' as const,
    boxShadow: focusedControl === key ? '0 0 0 3px rgba(212,175,55,0.35)' : 'none',
  })

  return (
    <>
      {/* Featured Post */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '52px' }}>
          <div className="blog-featured-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0',
            borderRadius: '20px', overflow: 'hidden', border: '1.5px solid var(--border)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.25s',
          }}>
            <img
              src={featured.image} alt={featured.title[lang]}
              width={600} height={340}
              loading="eager"
              fetchPriority="high"
              style={{ width: '100%', height: '340px', objectFit: 'cover' }}
            />
            <div style={{
              padding: '40px 36px', background: 'var(--card)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span style={{
                  background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.35)',
                  color: 'var(--primary)', padding: '3px 12px', borderRadius: '50px',
                  fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em',
                  display: 'inline-block', width: 'fit-content',
                }}>
                  {isAr ? 'مميز' : 'Featured'}
                </span>
                <span style={{
                  background: 'var(--muted)', color: 'var(--foreground)',
                  padding: '3px 12px', borderRadius: '50px', fontSize: '0.72rem', fontWeight: '700',
                }}>
                  {blogCategoryLabels[featured.category][lang]}
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '10px', fontWeight: '600' }}>
                {featured.date}
              </div>
              <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: '900', marginBottom: '14px', lineHeight: 1.3 }}>
                {featured.title[lang]}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '20px' }}>
                {featured.excerpt[lang]}
              </p>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                color: 'var(--primary)', fontWeight: '800', fontSize: '0.88rem',
              }}>
                {isAr ? 'اقرأ المقالة ←' : 'Read Article →'}
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* Search */}
      <div style={{ marginBottom: '20px', position: 'relative', maxWidth: '420px' }}>
        <Search size={17} strokeWidth={2.2} style={{
          position: 'absolute', top: '50%', transform: 'translateY(-50%)',
          [isAr ? 'right' : 'left']: '14px', color: 'var(--muted-foreground)', pointerEvents: 'none',
        } as CSSProperties} />
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocusedControl('search')}
          onBlur={() => setFocusedControl(null)}
          placeholder={isAr ? 'ابحث في أدلة السفر...' : 'Search Travel Guides...'}
          aria-label={isAr ? 'ابحث في أدلة السفر' : 'Search travel guides'}
          className="form-input"
          style={{
            width: '100%', [isAr ? 'paddingRight' : 'paddingLeft']: '40px',
            boxShadow: focusedControl === 'search' ? '0 0 0 3px rgba(212,175,55,0.35)' : undefined,
          } as CSSProperties}
        />
      </div>

      {/* Category filter */}
      <div
        role="group"
        aria-label={isAr ? 'تصفية حسب الفئة' : 'Filter articles by category'}
        style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}
      >
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          onFocus={() => setFocusedControl('cat-all')}
          onBlur={() => setFocusedControl(null)}
          aria-pressed={activeCategory === 'all'}
          style={categoryButtonStyle(activeCategory === 'all', 'cat-all')}
        >
          {isAr ? 'الكل' : 'All'}
        </button>
        {presentCategories.map(c => (
          <button
            key={c}
            type="button"
            onClick={() => setActiveCategory(c)}
            onFocus={() => setFocusedControl(`cat-${c}`)}
            onBlur={() => setFocusedControl(null)}
            aria-pressed={activeCategory === c}
            style={categoryButtonStyle(activeCategory === c, `cat-${c}`)}
          >
            {blogCategoryLabels[c][lang]}
          </button>
        ))}
      </div>

      {/* Section header */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '900' }}>
          {isAr ? <>المزيد من <span style={{ color: 'var(--primary)' }}>الأدلة</span></> : <>More <span style={{ color: 'var(--primary)' }}>Guides</span></>}
        </h2>
        <div className="gold-divider" style={{ margin: '10px 0 0' }} />
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', padding: '20px 0' }}>
          {isAr ? 'لا توجد مقالات مطابقة لبحثك.' : 'No articles match your search.'}
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '22px' }}>
          {filtered.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)',
                backgroundColor: 'var(--card)', transition: 'all 0.25s', boxShadow: 'var(--shadow-sm)',
                height: '100%', display: 'flex', flexDirection: 'column',
              }}>
                <img
                  src={post.image} alt={post.title[lang]}
                  width={400} height={200}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.68rem', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                      {blogCategoryLabels[post.category][lang]}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>· {post.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '10px', lineHeight: 1.4, flex: 1 }}>
                    {post.title[lang]}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {post.excerpt[lang]}
                  </p>
                  <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.82rem' }}>
                    {isAr ? 'اقرأ المقالة ←' : 'Read Article →'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
