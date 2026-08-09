// One-off UI/UX audit script — screenshots, console errors, horizontal-overflow detection.
import { chromium } from 'playwright'
import fs from 'fs'

const BASE = 'http://localhost:3000'
const OUT = 'C:\\Users\\hp\\saudicab\\scripts\\ui-audit-out'
fs.mkdirSync(OUT, { recursive: true })

const PAGES = [
  '/', '/makkah-taxi-service', '/jeddah-taxi-service', '/routes-map',
  '/jeddah-airport-to-makkah', '/toyota-camry-taxi', '/blog', '/contact',
]

const viewports = {
  mobile: { width: 390, height: 844 },
  desktop: { width: 1440, height: 900 },
}

const results = []

const browser = await chromium.launch()

for (const [vpName, vp] of Object.entries(viewports)) {
  const context = await browser.newContext({ viewport: vp })
  const page = await context.newPage()
  const consoleErrors = []
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()) })
  page.on('pageerror', err => consoleErrors.push('PAGEERROR: ' + err.message))

  for (const path of PAGES) {
    consoleErrors.length = 0
    const errsBefore = consoleErrors.length
    try {
      await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 20000 })
    } catch (e) {
      results.push({ path, vp: vpName, error: 'nav-failed: ' + e.message })
      continue
    }
    await page.waitForTimeout(600)

    const overflow = await page.evaluate(() => {
      const doc = document.documentElement
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        overflowing: doc.scrollWidth > doc.clientWidth + 1,
      }
    })

    const shot = `${OUT}/${vpName}_${path.replace(/\//g, '_') || 'home'}.png`
    await page.screenshot({ path: shot, fullPage: false })

    results.push({
      path, vp: vpName,
      overflowPx: overflow.overflowing ? overflow.scrollWidth - overflow.clientWidth : 0,
      consoleErrors: [...consoleErrors],
      screenshot: shot,
    })
  }
  await context.close()
}

// Arabic / RTL pass — desktop only, homepage + routes-map (the page flagged as not localized)
{
  const context = await browser.newContext({ viewport: viewports.desktop })
  const page = await context.newPage()
  await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 20000 })
  // click the AR toggle button (top nav)
  const toggle = await page.locator('button:has-text("AR")').first()
  if (await toggle.count() > 0) {
    await toggle.click()
    await page.waitForTimeout(500)
    await page.screenshot({ path: `${OUT}/rtl_home.png`, fullPage: false })
    const overflowAr = await page.evaluate(() => {
      const doc = document.documentElement
      return { overflowing: doc.scrollWidth > doc.clientWidth + 1, diff: doc.scrollWidth - doc.clientWidth }
    })
    results.push({ path: '/ (Arabic/RTL)', vp: 'desktop', overflowPx: overflowAr.overflowing ? overflowAr.diff : 0, screenshot: `${OUT}/rtl_home.png` })

    // navigate to routes-map while still in AR mode (persists via context provider)
    await page.goto(BASE + '/routes-map', { waitUntil: 'networkidle', timeout: 20000 })
    await page.waitForTimeout(500)
    await page.screenshot({ path: `${OUT}/rtl_routes-map.png`, fullPage: false })
    const dir = await page.evaluate(() => document.querySelector('[dir]')?.getAttribute('dir'))
    results.push({ path: '/routes-map (Arabic/RTL)', vp: 'desktop', dirAttr: dir, screenshot: `${OUT}/rtl_routes-map.png` })
  } else {
    results.push({ path: 'AR toggle button not found', error: true })
  }
  await context.close()
}

await browser.close()

fs.writeFileSync(`${OUT}/results.json`, JSON.stringify(results, null, 2))
console.log(JSON.stringify(results, null, 2))
