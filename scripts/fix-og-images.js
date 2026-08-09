// One-off script: add missing `images` array to openGraph metadata blocks
// that currently override (and drop) the root layout's default OG image.
const fs = require('fs')
const path = require('path')

const DEFAULT_IMAGE = 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp'

const CITY_IMAGES = {
  'jeddah-taxi-service/layout.tsx': 'https://saudicabsgmc.com/location/jeddah.webp',
  'madinah-taxi-service/layout.tsx': 'https://saudicabsgmc.com/location/madinah.webp',
  'makkah-taxi-service/layout.tsx': 'https://saudicabsgmc.com/location/makkah.webp',
  'taif-taxi-service/layout.tsx': 'https://saudicabsgmc.com/location/taif.webp',
}

const files = [
  'src/app/airport-transfer/layout.tsx',
  'src/app/contact/page.tsx',
  'src/app/hajj-umrah-transport/layout.tsx',
  'src/app/jeddah-airport-to-madinah/layout.tsx',
  'src/app/jeddah-airport-to-makkah/layout.tsx',
  'src/app/jeddah-taxi-service/layout.tsx',
  'src/app/jeddah-to-madinah/layout.tsx',
  'src/app/jeddah-to-makkah/layout.tsx',
  'src/app/jeddah-to-taif/layout.tsx',
  'src/app/madinah-airport-taxi/layout.tsx',
  'src/app/madinah-taxi-service/layout.tsx',
  'src/app/madinah-to-jeddah/layout.tsx',
  'src/app/madinah-to-makkah/layout.tsx',
  'src/app/makkah-taxi-service/layout.tsx',
  'src/app/makkah-to-jeddah/layout.tsx',
  'src/app/makkah-to-jeddah-airport/layout.tsx',
  'src/app/makkah-to-madinah/layout.tsx',
  'src/app/makkah-to-taif/layout.tsx',
  'src/app/makkah-ziyarat-tour/layout.tsx',
  'src/app/private-driver/layout.tsx',
  'src/app/taif-taxi-service/layout.tsx',
  'src/app/taif-to-jeddah/layout.tsx',
  'src/app/taif-to-madinah/layout.tsx',
  'src/app/taif-to-makkah/layout.tsx',
  'src/app/team/page.tsx',
]

const blockRe = /openGraph:\s*\{([^}]*?)url:\s*'([^']+)',\r?\n(\s*)\},/

let changed = 0
for (const rel of files) {
  const full = path.join(__dirname, '..', rel)
  const src = fs.readFileSync(full, 'utf8')
  const m = src.match(blockRe)
  if (!m) {
    console.log('SKIP (pattern not found):', rel)
    continue
  }
  if (m[0].includes('images:')) {
    console.log('SKIP (already has images):', rel)
    continue
  }
  const titleMatch = m[1].match(/title:\s*'([^']+)'/)
  const title = titleMatch ? titleMatch[1] : 'Saudi Cabs GMC – Premium Taxi Service'
  const img = CITY_IMAGES[rel.replace('src/app/', '')] || DEFAULT_IMAGE
  const closingIndent = m[3]
  const imagesLine = `    images: [{ url: '${img}', width: 1200, height: 630, alt: '${title.replace(/'/g, "\\'")}' }],\r\n`
  const replacement = m[0].replace(/\r?\n(\s*)\},$/, `\r\n${imagesLine}${closingIndent}},`)
  const next = src.replace(blockRe, replacement)
  fs.writeFileSync(full, next, 'utf8')
  changed++
  console.log('FIXED:', rel, '->', img)
}

console.log(`\nDone. ${changed}/${files.length} files updated.`)
