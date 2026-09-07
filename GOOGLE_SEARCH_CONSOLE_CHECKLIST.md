# Google Search Console — Setup & Resubmission Checklist
*For: muhammadismail6385@gmail.com | Created: Day 29 of PLAN_30_DAY.md*

This is a manual task — it needs your Google account, so I can't do it for you. Everything below uses facts already verified against the live codebase (sitemap URL, robots.txt, domain), nothing invented.

---

## 0. First, a real bug to know about

`src/app/layout.tsx` currently has:
```ts
verification: {
  google: 'saudicabsgmc-google-verify',
},
```
**This is a placeholder, not a real verification token** — it was never replaced with an actual value from Google. If you've never verified this property in Search Console before, this tag alone will not do it (a mismatched/fake token just fails silently — no harm done, but no verification either). See step 2 for what to do about it.

---

## 1. Go to Google Search Console

- URL: https://search.google.com/search-console
- Sign in with the Google account you want to manage this in (same account as Business Profile, if you set that up on Day 22, keeps things simple — not required).

## 2. Add the property and verify it

You'll be asked to choose a property type:

- **Domain property** (`saudicabsgmc.com`) — recommended. Covers `http://`, `https://`, and any subdomain in one property. Verified via a **DNS TXT record** added at your domain registrar (wherever `saudicabsgmc.com` is registered/managed) — Google gives you the exact TXT record value to add.
- **URL-prefix property** (`https://saudicabsgmc.com`) — covers only that exact URL scheme/host. Verified via several methods; the one already half-wired into this codebase is the **HTML tag** method, which reads the `verification.google` value in `layout.tsx` above.

**If you go with URL-prefix + HTML tag verification:** Google will show you a real token (a long string, not "saudicabsgmc-google-verify"). Send it to me and I'll swap it into `layout.tsx` — that's a one-line code change I can make once you have the real value.

**If you go with the domain property + DNS TXT record:** nothing in the codebase needs to change — just add the TXT record Google gives you at your domain registrar. This is generally the more robust option since it doesn't depend on the site staying live to re-verify.

## 3. Submit the sitemap

Once the property is verified:
- Go to **Sitemaps** in the left sidebar
- Enter: `sitemap.xml`
- Click **Submit**

Full URL for reference: `https://saudicabsgmc.com/sitemap.xml`

This sitemap was fully validated on Day 29 of the plan:
- 264 URLs, every one confirmed to return HTTP 200
- Zero duplicates, zero broken entries
- Every real page on the site is included, nothing extra
- `<lastmod>` dates are now genuine (pulled from real content dates for blog posts and guide pages, and a stable "last verified" date for everything else) instead of the live current-timestamp that was there before — Google's own guidance says not to fake this, and it wasn't fake, but it also wasn't stable, which is just as unhelpful for a freshness signal.

## 4. If this property was already verified before (resubmission)

If Search Console already existed for this site and you're just resubmitting after this round of fixes:
- **Sitemaps** → check the sitemap is still listed and re-submit if Google shows it as "Couldn't fetch" or similar
- **Pages** (Indexing report) → check for any pages marked "Not indexed" and look at the reason given — common ones are "Discovered, not indexed" (usually resolves on its own) or "Crawled, not indexed" (worth a look if it's a page you care about ranking)
- **Removals** → confirm nothing important is accidentally submitted for removal

## 5. Request indexing for key pages (optional, speeds things up)

Use the **URL Inspection** tool (search bar at the top of Search Console) for the pages most worth getting crawled quickly:
- `https://saudicabsgmc.com/`
- `https://saudicabsgmc.com/makkah-transport-guide`
- `https://saudicabsgmc.com/jeddah-airport-guide`
- `https://saudicabsgmc.com/umrah-travel-guide`
- `https://saudicabsgmc.com/hajj-transport-faq`
- `https://saudicabsgmc.com/taxi-prices-saudi-arabia`

For each: paste the URL, wait for the inspection result, then click **Request Indexing** if it isn't already indexed.

## 6. Things worth checking once data starts coming in (not today)

These reports take days/weeks to populate after verification — nothing to act on immediately, just know they exist:
- **Core Web Vitals** — will reflect the image-compression and LCP-preload work from Day 27
- **Mobile Usability** — should be clean; the site is mobile-responsive throughout
- **Page Experience** — general health check combining the above

---

## What I can't do for you
- Sign in to Google or complete DNS/HTML verification (needs your account and, for DNS, your domain registrar login)
- Add a DNS TXT record (needs registrar access — GoDaddy, Namecheap, whichever you use)
- Click "Submit" or "Request Indexing" inside Search Console itself

## What to send back when done
- Which verification method you used (domain/DNS or URL-prefix/HTML tag)
- If HTML tag: the real verification token, so I can replace the placeholder in `layout.tsx`
- Confirmation the sitemap shows as submitted successfully
