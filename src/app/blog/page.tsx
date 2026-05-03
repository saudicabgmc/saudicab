import Link from 'next/link'
import { blogPosts } from '@/lib/blogData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Guides & Tips | Saudi Cabs GMC Blog',
  description: 'Expert guides on Hajj transport, Umrah travel, Makkah Ziyarat, Jeddah Airport transfers, and intercity taxi routes across Saudi Arabia.',
  alternates: { canonical: 'https://saudicabsgmc.com/blog' },
}

export default function BlogIndex() {
  const [featured, ...rest] = blogPosts

  return (
    <main style={{ backgroundColor: 'var(--background)', minHeight: '80vh' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #071f17 0%, #0B3D2E 100%)',
        padding: '120px 0 60px', borderBottom: '3px solid var(--primary)',
      }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <span style={{
            background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)',
            color: 'var(--primary)', padding: '4px 18px', borderRadius: '50px',
            fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em',
            display: 'inline-block', marginBottom: '18px',
          }}>
            Saudi Cabs GMC Blog
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', marginBottom: '14px', lineHeight: 1.2 }}>
            Travel Guides &amp; <span style={{ color: 'var(--primary)' }}>Expert Tips</span>
          </h1>
          <div className="gold-divider" style={{ margin: '0 0 18px' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px' }}>
            Hajj transport, Umrah routes, airport transfers, and city guides — written by the team who drives these roads every day.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1100px', padding: '60px 24px 80px' }}>

        {/* Featured Post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '52px' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0',
              borderRadius: '20px', overflow: 'hidden', border: '1.5px solid var(--border)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.25s',
            }}>
              <img
                src={featured.image} alt={featured.title.en}
                style={{ width: '100%', height: '340px', objectFit: 'cover' }}
              />
              <div style={{
                padding: '40px 36px', background: 'var(--card)',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
              }}>
                <span style={{
                  background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.35)',
                  color: 'var(--primary)', padding: '3px 12px', borderRadius: '50px',
                  fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em',
                  display: 'inline-block', marginBottom: '14px', width: 'fit-content',
                }}>
                  Featured
                </span>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '10px', fontWeight: '600' }}>
                  {featured.date}
                </div>
                <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: '900', marginBottom: '14px', lineHeight: 1.3 }}>
                  {featured.title.en}
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '20px' }}>
                  {featured.excerpt.en}
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  color: 'var(--primary)', fontWeight: '800', fontSize: '0.88rem',
                }}>
                  Read Article →
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Section header */}
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '900' }}>
            More <span style={{ color: 'var(--primary)' }}>Guides</span>
          </h2>
          <div className="gold-divider" style={{ margin: '10px 0 0' }} />
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '22px' }}>
          {rest.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)',
                backgroundColor: 'var(--card)', transition: 'all 0.25s', boxShadow: 'var(--shadow-sm)',
                height: '100%', display: 'flex', flexDirection: 'column',
              }}>
                <img
                  src={post.image} alt={post.title.en}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '8px' }}>
                    {post.date}
                  </div>
                  <h2 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '10px', lineHeight: 1.4, flex: 1 }}>
                    {post.title.en}
                  </h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {post.excerpt.en}
                  </p>
                  <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.82rem' }}>Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
