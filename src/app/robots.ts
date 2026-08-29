import type { MetadataRoute } from 'next'

const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'CCBot',
  'Amazonbot',
  'Bytespider',
  'Applebot-Extended',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicit allow for known AI/LLM crawlers — same policy as everyone
      // else, made unambiguous rather than relying only on the wildcard.
      ...AI_CRAWLERS.map(userAgent => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    sitemap: 'https://saudicabsgmc.com/sitemap.xml',
    host: 'https://saudicabsgmc.com',
  }
}
