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
  blogPost: [
    ...blogPosts.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title.en,
      url: `https://saudicabsgmc.com/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.dateModified ?? p.date,
      image: `https://saudicabsgmc.com${p.image}`,
      description: p.excerpt.en,
      articleSection: p.category,
    })),
    // Standalone premium guide — not part of blogPosts/blogData.ts (see
    // RiyadhToMuscatGuide.tsx), listed here explicitly so the Blog schema's
    // own post list stays complete.
    {
      '@type': 'BlogPosting',
      headline: 'Riyadh to Muscat: Distance, Driving Route, Border Crossing & Travel Guide (2026)',
      url: 'https://saudicabsgmc.com/blog/riyadh-to-muscat-travel-guide',
      datePublished: '2026-11-24',
      dateModified: '2026-11-24',
      image: 'https://saudicabsgmc.com/location/muscat.webp',
      description: 'A complete guide to the Riyadh-Muscat road trip: real distance, the direct Empty Quarter border crossing, visa rules, best time to travel, and taxi vs driving in 2026.',
      articleSection: 'Intercity Travel',
    },
  ],
}

const extraGuides = [
  {
    slug: 'riyadh-to-muscat-travel-guide',
    title: 'Riyadh to Muscat: Distance, Driving Route, Border Crossing & Travel Guide (2026)',
    excerpt: 'Real distance, the direct Empty Quarter border crossing, visa rules, best time to travel, and taxi vs driving — everything to plan this trip.',
    image: '/location/muscat.webp',
    tag: 'Travel Guide',
  },
]

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
        <BlogIndexClient posts={blogPosts} extraGuides={extraGuides} />
      </div>
    </main>
    </>
  )
}
