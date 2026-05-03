/**
 * Compresses trust icon PNGs to WebP <100KB with semantic filenames.
 * Output: public/trust-badges/
 * Run: node scripts/compress-trust-icons.mjs
 */

import sharp from 'sharp'
import { existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const INPUT_DIR = join(ROOT, 'public', 'TRUST ICON')
const OUTPUT_DIR = join(ROOT, 'public', 'trust-badges')

if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true })

const FILES = [
  {
    src: 'ChatGPT Image May 2, 2026, 04_05_04 PM.png',
    out: 'trust-badge-google-5star-reviews.webp',
  },
  {
    src: 'ChatGPT Image May 2, 2026, 04_05_09 PM.png',
    out: 'trust-badge-sar-no-hidden-costs.webp',
  },
  {
    src: 'ChatGPT Image May 2, 2026, 04_05_14 PM.png',
    out: 'trust-badge-247-always-available.webp',
  },
  {
    src: 'ChatGPT Image May 2, 2026, 04_06_16 PM.png',
    out: 'trust-badge-premium-vip-fleet.webp',
  },
  {
    src: 'ChatGPT Image May 2, 2026, 04_18_09 PM.png',
    out: 'trust-badge-staria-yukon-specifications.webp',
  },
  {
    src: 'ChatGPT Image May 2, 2026, 04_18_16 PM.png',
    out: 'trust-badge-live-tracking-safety.webp',
  },
  {
    src: 'ChatGPT Image May 2, 2026, 04_18_22 PM.png',
    out: 'trust-badge-instant-whatsapp-booking.webp',
  },
  {
    src: 'ChatGPT Image May 2, 2026, 04_18_33 PM.png',
    out: 'trust-badge-certified-chauffeurs.webp',
  },
]

for (const { src, out } of FILES) {
  const inputPath = join(INPUT_DIR, src)
  const outputPath = join(OUTPUT_DIR, out)

  await sharp(inputPath)
    .resize(220, 220, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(outputPath)

  const { size } = (await import('fs')).statSync(outputPath)
  const kb = (size / 1024).toFixed(1)
  console.log(`✓  ${out}  →  ${kb} KB`)
}

console.log('\nAll trust badges compressed to public/trust-badges/')
