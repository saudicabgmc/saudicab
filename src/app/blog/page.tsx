import { blogPosts } from '@/lib/blogData'
import { Metadata } from 'next'
import BlogIndexClient from '@/components/BlogIndexClient'

export const metadata: Metadata = {
  title: 'Travel Guides & Saudi Arabia Taxi Tips | Blog',
  description: 'Expert guides on Hajj transport, Umrah travel, Makkah Ziyarat, Jeddah Airport transfers, and intercity taxi routes across Saudi Arabia.',
  alternates: { canonical: 'https://saudicabsgmc.com/blog' },
  openGraph: {
    title: 'Travel Guides & Saudi Arabia Taxi Tips | Saudi Cabs GMC',
    description: 'Expert guides on Hajj transport, Umrah travel, Makkah Ziyarat, Jeddah Airport transfers, and intercity taxi routes across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/blog',
    type: 'website',
    images: [{ url: 'https://saudicabsgmc.com/location/makkah.webp', width: 1200, height: 630, alt: 'Saudi Cabs GMC Travel Guides' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Guides & Saudi Arabia Taxi Tips | Saudi Cabs GMC',
    description: 'Expert guides on Hajj transport, Umrah travel, Makkah Ziyarat, Jeddah Airport transfers, and intercity taxi routes across Saudi Arabia.',
  },
}

const blogIndexSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://saudicabsgmc.com/blog#blog',
  name: 'Saudi Cabs GMC — Travel Guides & Saudi Arabia Taxi Tips',
  description: 'Expert guides on Hajj transport, Umrah travel, Makkah Ziyarat, Jeddah Airport transfers, and intercity taxi routes across Saudi Arabia.',
  url: 'https://saudicabsgmc.com/blog',
  publisher: { '@id': 'https://saudicabsgmc.com/#organization' },
  inLanguage: ['en', 'ar'],
  blogPost: blogPosts.map(p => ({
    '@type': 'BlogPosting',
    headline: p.title.en,
    url: `https://saudicabsgmc.com/blog/${p.slug}`,
    datePublished: p.date,
    dateModified: p.dateModified ?? p.date,
    image: `https://saudicabsgmc.com${p.image}`,
    description: p.excerpt.en,
    articleSection: p.category,
  })),
}

const blogBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://saudicabsgmc.com/blog' },
  ],
}

export default function BlogIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema) }} />
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
        <BlogIndexClient posts={blogPosts} />
      </div>
    </main>
    </>
  )
}
