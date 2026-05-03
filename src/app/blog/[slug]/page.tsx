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
    title: `${post.title.en} | Saudi Cabs GMC`,
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title.en,
    description: post.excerpt.en,
    image: `https://saudicabsgmc.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Saudi Cabs GMC', url: 'https://saudicabsgmc.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Saudi Cabs GMC',
      logo: { '@type': 'ImageObject', url: 'https://saudicabsgmc.com/logo-saudi-cabs-gmc.webp' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://saudicabsgmc.com/blog/${post.slug}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlogPostContent post={post} related={related} mins={0} />
    </>
  )
}
