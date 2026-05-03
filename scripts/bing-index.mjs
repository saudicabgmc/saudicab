/**
 * Bing URL Submission Script — with daily progress tracking
 *
 * Usage:
 *   node scripts/bing-index.mjs          ← submit next 100 URLs
 *   node scripts/bing-index.mjs --reset  ← start from scratch
 *
 * Run once per day. Progress saved to scripts/.bing-progress.json
 * Requires Node 18+ (built-in fetch).
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const API_KEY      = '55ea9ab7d0804ae6a7143fa96a61771d'
const SITE_URL     = 'https://saudicabsgmc.com'
const ENDPOINT     = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${API_KEY}`
const BATCH        = 100
const PROGRESS_FILE = join(dirname(fileURLToPath(import.meta.url)), '.bing-progress.json')

// ── Progress helpers ─────────────────────────────────────────────────────────

function loadProgress() {
  if (process.argv.includes('--reset') && existsSync(PROGRESS_FILE)) {
    console.log('🔄 Resetting progress...\n')
    return { submitted: [], lastRun: null }
  }
  if (!existsSync(PROGRESS_FILE)) return { submitted: [], lastRun: null }
  return JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'))
}

function saveProgress(progress) {
  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2))
}

// ── Fetch sitemap ────────────────────────────────────────────────────────────

async function fetchSitemapUrls() {
  console.log(`📡 Fetching sitemap: ${SITE_URL}/sitemap.xml`)
  const res = await fetch(`${SITE_URL}/sitemap.xml`)
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status} ${res.statusText}`)
  const xml  = await res.text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim())
  if (urls.length === 0) throw new Error('No URLs found in sitemap!')
  return urls
}

// ── Submit one batch ─────────────────────────────────────────────────────────

async function submitBatch(urls) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ siteUrl: SITE_URL, urlList: urls }),
  })
  const raw = await res.text()
  if (res.ok) return { ok: true }
  let msg = raw
  try { msg = JSON.parse(raw).Message || raw } catch {}
  return { ok: false, msg }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('  Bing URL Submission — Saudi Cabs GMC')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  const progress = loadProgress()
  const allUrls  = await fetchSitemapUrls()

  // URLs not yet submitted
  const submitted   = new Set(progress.submitted)
  const remaining   = allUrls.filter(u => !submitted.has(u))

  console.log(`📊 Total URLs  : ${allUrls.length}`)
  console.log(`✅ Already sent: ${submitted.size}`)
  console.log(`⏳ Remaining   : ${remaining.length}`)

  if (remaining.length === 0) {
    console.log('\n🎉 All URLs have been submitted to Bing!')
    console.log('   Run with --reset to start over.\n')
    return
  }

  // Take next batch of 100
  const batch    = remaining.slice(0, BATCH)
  const dayNum   = Math.floor(submitted.size / BATCH) + 1
  const totalDay = Math.ceil(allUrls.length / BATCH)

  console.log(`\n📤 Day ${dayNum} of ${totalDay}: submitting ${batch.length} URLs...\n`)
  batch.forEach((u, i) => console.log(`   ${String(i + 1).padStart(3)}. ${u}`))
  console.log()

  const result = await submitBatch(batch)

  if (result.ok) {
    progress.submitted.push(...batch)
    progress.lastRun = new Date().toISOString()
    saveProgress(progress)

    const newRemaining = allUrls.length - progress.submitted.length
    console.log(`\n✅ Batch accepted by Bing!`)
    console.log(`📁 Progress saved. ${newRemaining} URLs remaining.`)

    if (newRemaining > 0) {
      console.log(`\n⏰ Run again TOMORROW to submit the next ${Math.min(BATCH, newRemaining)} URLs.`)
    } else {
      console.log(`\n🎉 All ${allUrls.length} URLs submitted! Bing indexing complete.`)
    }
  } else {
    console.log(`\n❌ Submission failed: ${result.msg}`)
    console.log('   Try again tomorrow — daily limit may be reached.')
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
}

main().catch(err => {
  console.error('\n🚨 Error:', err.message)
  process.exit(1)
})
