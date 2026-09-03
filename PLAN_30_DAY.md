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
- [x] **Day 11**: "Umrah Checklist: Transport, Hotels & What to Pack" — published at `/blog/umrah-checklist-transport-hotels-packing`, practical checklist format across 3 sections (transport, hotels, packing)
- [x] **Day 12**: "10 Things to Know Before Your First Umrah Trip" — published at `/blog/10-things-to-know-first-umrah-trip`, first-timer orientation tips (Miqat timing, crowds, footwear, cash, SIM, heat, distances, Ziyarat is optional, prayer-time slowdowns, booking ahead) distinct from Day 11's checklist
- [x] **Day 13**: "Saudi Arabia for Non-Muslims — Travel Transport Guide" — published at `/blog/saudi-arabia-non-muslims-travel-transport-guide`, honestly states the Makkah/Madinah restricted-zone rule upfront, then covers what's open (Jeddah, Taif, Riyadh, AlUla, Red Sea coast) and how private transport fits
- [x] **Day 14**: "How to Book Hajj Transport in Advance" — published at `/blog/how-to-book-hajj-transport-in-advance`, focuses on the planning timeline (months ahead, 2-4 weeks, days before) and info to prepare — deliberately distinct from the existing `hajj-transport-guide-2026` (basic 3-step booking) and `hajj-2026-transport-makkah-traffic-tips` (traffic-avoidance) posts

## Week 3 — GEO / LLM / Schema Hardening
- [x] **Day 15**: `llms.txt` at root (`public/llms.txt`) + `/.well-known/ai-metadata.json` — both hand-written from already-verified site facts (fleet, cities, contact, pricing model), no fabricated stats/certifications carried over
- [x] **Day 16**: Audited `robots.ts` — the wildcard `*` rule already allowed all AI crawlers, but added explicit named `Allow: /` rules for GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, CCBot, Amazonbot, Bytespider, and Applebot-Extended so the policy is unambiguous and won't silently change if the wildcard rule is ever edited
- [x] **Day 17**: `speakable` schema on all route/guide pages — added centrally to `GuidePageTemplate.tsx` (5 guide pages) and `schemaUtils.ts`'s `generateRouteSchemas` (~20 route pages), so one change propagates everywhere. Also fixed a pre-existing incomplete/duplicate speakable schema on `makkah-transport-guide` (was missing `url`/`@id`) by replacing it with the centralized version.
- [x] **Day 18**: `DefinedTermSet` schema for domain terms (Umrah, Hajj, Ihram, Miqat, Tawaf, Sa'i, Ziyarat, Haram, Mina, Arafat, Muzdalifah) added site-wide in `layout.tsx` — plain factual/encyclopedic definitions, no religious-authority claims. Also fixed a leftover "certified professional driver" claim found in the HowTo schema while in there.
- [x] **Day 19**: Freshness pass — `GuidePageTemplate.tsx` now takes a required `dateModified` prop, rendered both as a visible "Last updated" line and in the page's WebPage schema; set on all 5 guide pages. Updated `TOPICAL_MAP.md` checklists for Days 17-19.
- [ ] **Day 20**: `AggregateRating` rollout — blocked on Day 3 review data; otherwise skip/defer
- [x] **Day 21**: Re-verified `TOPICAL_MAP.md` against actual `src/app/` and corrected stale entries — checked off all 4 city content gaps (Days 4-7), added the 8 new blog posts (Days 8-14) to the blog table, updated `/booking`/`/reviews` from "Missing" to "Done", removed the dangerous "add `AggregateRating`" advice (a prior audit deliberately removed 13 fabricated instances of exactly this), updated per-page-type schema checklists to reflect Days 17-19, and removed a duplicate/typo'd route row ("Madinah → Madinah")

## Week 4 — Off-Site, Audit & Polish
- [x] **Day 22**: Google Business Profile — this is a manual task needing the owner's Google account and phone verification, so a step-by-step checklist was written instead (`GOOGLE_BUSINESS_PROFILE_CHECKLIST.md`), using only facts already published on the site (name, phone, hours, service area, description) and flagging the one real decision only the owner can make (service-area vs. storefront listing)
- [x] **Day 23**: Wikidata/Wikipedia `sameAs` research (`WIKIDATA_ENTITY_RESEARCH.md`) — confirmed via web search that no entity exists yet, and explained why one shouldn't be force-created now (notability requirements — a self-made page would likely get flagged/deleted). Found 4 real Saudi business directories that do accept direct self-submission, feeding into Day 24.
- [x] **Day 24**: Outreach target list (`OUTREACH_TARGET_LIST.md`) — researched real, currently-live Hajj/Umrah blogs, halal travel blogs, Umrah/Hajj forums, and relevant TripAdvisor destination forums via web search, with DA figures where available and honest notes on which channels are guest-post-friendly vs. forum-participation-only vs. not viable (checked Urdu/Pakistani-specific blogs — mostly PDFs/apps, not active outreach targets). This is a manual outreach task for the business owner; I can't execute it myself.
- [x] **Day 25**: Internal link audit against the Internal Linking Matrix in `TOPICAL_MAP.md` — checked every route page, city hub, and guide page's actual outbound links (not assumed from the docs) and fixed genuine gaps found: (1) 4 route pages were missing their reverse-route link despite both pages existing (`makkah-to-taif`↔`taif-to-makkah`, `madinah-to-jeddah`↔`jeddah-to-madinah`, `riyadh-to-makkah`↔`makkah-to-riyadh`, `dammam-to-makkah`↔`makkah-to-dammam` — each pair was only linked one direction); (2) `RoutePage.tsx` never linked to any guide page despite the matrix requiring it (an unused `fromCitySlug`/`toCitySlug` pair in the data type suggested this was intended but never wired up) — added a `getRelevantGuides()` helper and a "Helpful Guides" link row, shown on all ~23 route pages; (3) 3 city hubs were missing links to real routes originating from that city (Makkah hub → `makkah-to-riyadh`, `makkah-to-dammam`; Jeddah hub → `jeddah-to-madinah`; Taif hub → `taif-to-makkah`, `taif-airport-taxi`); (4) all 5 guide pages were missing both a fleet/vehicle-page link and a blog-article link (2 of the matrix's 4 required guide-page link types) — added one of each to every guide, matched to its topic. Verified every new/changed link target returns HTTP 200 via a local build + dev server fetch, not just visually. Confirmed via global-nav check that `routes-map` is already linked site-wide (Homepage requirement was already satisfied, just not from `page.tsx` itself). Confirmed the already-documented "blog posts don't inline-link to route/guide pages" gap (`TOPICAL_MAP.md` line ~308) is still real and unaddressed — that's a 14-post content-rewrite task, out of scope for a link-audit day, left as logged.
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
