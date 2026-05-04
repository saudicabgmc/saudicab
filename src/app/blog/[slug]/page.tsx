import { blogPosts } from '@/lib/blogData'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostContent from '@/components/BlogPostContent'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title.en,
    description: post.excerpt.en,
    alternates: { canonical: `https://saudicabsgmc.com/blog/${post.slug}` },
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      type: 'article',
      publishedTime: post.date,
      siteName: 'Saudi Cabs GMC',
      images: [{ url: `https://saudicabsgmc.com${post.image}`, width: 1200, height: 630, alt: post.title.en }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.en,
      description: post.excerpt.en,
      images: [`https://saudicabsgmc.com${post.image}`],
    },
  }
}

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  const postUrl = `https://saudicabsgmc.com/blog/${post.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    headline: post.title.en,
    description: post.excerpt.en,
    image: {
      '@type': 'ImageObject',
      url: `https://saudicabsgmc.com${post.image}`,
      width: 1200,
      height: 630,
    },
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Saudi Cabs GMC Editorial Team',
      url: 'https://saudicabsgmc.com/team',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://saudicabsgmc.com/#organization',
      name: 'Saudi Cabs GMC',
      logo: { '@type': 'ImageObject', url: 'https://saudicabsgmc.com/logo-saudi-cabs-gmc.webp', width: 200, height: 200 },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    inLanguage: 'en',
    isPartOf: { '@id': 'https://saudicabsgmc.com/blog#blog' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://saudicabsgmc.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title.en, item: postUrl },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogPostContent post={post} related={related} mins={0} />
    </>
  )
}
