# 30-Day Execution Plan — Saudi Cabs GMC
*Created: 2026-08-14*

This plan supersedes the "Missing Pages" / checklist items in `TOPICAL_MAP.md`, which was found to be **stale** on Day 1 — several "missing" routes (`/jeddah-to-madinah`, `/madinah-to-jeddah`) already exist end-to-end (page, layout, registry, sitemap, nav, schema). Verified current gaps below are based on actually checking `src/app/` on 2026-08-14, not on the doc.

Each day assumes ~1 focused session. Adjust pace as needed — mark items done here as they land, and note new gaps discovered along the way.

---

## Week 1 — Trust & Conversion Pages (EEAT)
- [x] **Day 1**: `/faq` hub page (aggregate all existing FAQ data into one canonical page) + `/about` page
- [x] **Day 2**: `/booking` dedicated page — booking form (name, route, date, WhatsApp handoff), fixed-price expectations, trust signals
- [x] **Day 3**: `/reviews` page — built using the 5 testimonials already live on the homepage (`translations.ts` → `testimonials.items`), no new/fabricated reviews added. Deliberately shipped **without** `AggregateRating`/`Review` schema — Google's guidelines disallow self-serving review rich-snippet markup, and 5 unverified testimonials aren't a legitimate rating source. Revisit once a real Google Business Profile exists (Day 22) with genuine third-party reviews to cite.
- [x] **Day 4**: Makkah hub — added neighbourhood-level content section (Al-Aziziyah, Misfalah, Ajyad, Mina, Arafat, Muzdalifah) to `/makkah-taxi-service` via `MakkahLocationPage.tsx`
- [x] **Day 5**: Madinah hub — added neighbourhood-level content section (Central Area/Al-Markaziyah, Quba, Mount Uhud, Al-Baqi, Al-Aqiq) to `/madinah-taxi-service` via `MadinahLocationPage.tsx`
- [x] **Day 6**: Jeddah hub — added neighbourhood-level content section (Al-Balad, King Road business district, Obhur, Al-Hamra, Al-Rawdah) to `/jeddah-taxi-service` via `JeddahLocationPage.tsx`
- [x] **Day 7**: Taif hub — added neighbourhood-level content section (Al-Hada, Al-Shafa, Rose Farms, Wadi Qarn, Downtown/Al-Faisaliyah) to `/taif-taxi-service` via `TaifLocationPage.tsx` — **Week 1 complete**

## Week 2 — Blog Content Gaps (7 articles from TOPICAL_MAP.md, verified still missing)
- [x] **Day 8**: "Taxi from Madinah to Makkah — What to Expect" — published at `/blog/taxi-madinah-to-makkah-what-to-expect`, covers distance/duration, the Dhul-Hulayfah (Abyar Ali) Miqat stop, vehicle choice, and private-vs-shared transport
- [x] **Day 9**: "How Much Does a Taxi Cost in Saudi Arabia? 2026 Price Guide" — published at `/blog/how-much-does-a-taxi-cost-in-saudi-arabia`, cites the real centralized `pricingData.ts` fares (e.g. Jeddah Airport → Makkah: 330/380/530 SAR) rather than "contact us for pricing", explains what actually moves the price (vehicle, distance) — no overlap with the existing `/taxi-prices-saudi-arabia` distance/time table guide
- [x] **Day 10**: "Best Time to Travel Makkah to Madinah by Private Car" — published at `/blog/best-time-travel-makkah-madinah-private-car`, covers time-of-day, seasonal heat, and Hijri-calendar timing (Ramadan/Hajj vs regular Umrah season) — distinct angle from Day 8's post
- [ ] **Day 11**: "Umrah Checklist: Transport, Hotels & What to Pack"
- [ ] **Day 12**: "10 Things to Know Before Your First Umrah Trip"
- [ ] **Day 13**: "Saudi Arabia for Non-Muslims — Travel Transport Guide"
- [ ] **Day 14**: "How to Book Hajj Transport in Advance"

## Week 3 — GEO / LLM / Schema Hardening
- [ ] **Day 15**: `llms.txt` at root + `/.well-known/ai-metadata.json`
- [ ] **Day 16**: Audit `robots.ts` for AI crawler coverage (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- [ ] **Day 17**: `speakable` schema on all route/guide pages
- [ ] **Day 18**: `definedTerm` schema for domain terms (Ziyarat, Tawaf, Ihram, Talbiyah, etc.)
- [ ] **Day 19**: Freshness pass — update `dateModified` on all guide pages
- [ ] **Day 20**: `AggregateRating` rollout — blocked on Day 3 review data; otherwise skip/defer
- [ ] **Day 21**: Re-verify `TOPICAL_MAP.md` against actual `src/app/` and correct all stale entries

## Week 4 — Off-Site, Audit & Polish
- [ ] **Day 22**: Google Business Profile submission checklist (external, manual — not code)
- [ ] **Day 23**: Wikidata/Wikipedia `sameAs` research for the business entity (external)
- [ ] **Day 24**: Outreach target list — Islamic travel blogs/forums for backlinks (external)
- [ ] **Day 25**: Internal link audit — verify every route/guide page links per the Internal Linking Matrix in `TOPICAL_MAP.md`
- [ ] **Day 26**: Broken link + 404 sweep across all pages
- [ ] **Day 27**: Core Web Vitals / performance pass (image sizes, LCP, CLS)
- [ ] **Day 28**: Accessibility pass — alt text, aria labels, color contrast
- [ ] **Day 29**: Full sitemap.xml validation + Google Search Console resubmission
- [ ] **Day 30**: Final QA across bilingual (en/ar) content, update `TASK_LOG.md`

---

## Notes
- Days are a planning aid, not a hard deadline — reorder freely if priorities shift.
- Before starting any day's work, quickly verify the target still doesn't exist (this doc has already been wrong once).
- `/reviews` and `AggregateRating` work depends on the business owner supplying real customer feedback — flagged, not skipped.
