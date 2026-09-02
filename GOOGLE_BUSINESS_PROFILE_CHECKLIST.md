# Google Business Profile — Setup Checklist
*For: muhammadismail6385@gmail.com | Created: Day 22 of PLAN_30_DAY.md*

This is a manual task — it needs your Google account and phone/postcard verification, so I can't do it for you. This checklist uses the exact business facts already published on the site so everything stays consistent.

---

## 0. One decision only you can make

Saudi Cabs GMC doesn't have a public storefront customers walk into — drivers come to the customer. Google Business Profile has two setup modes:

- **Service-area business (recommended):** You hide your exact address and instead list the areas you serve (Makkah, Madinah, Jeddah, Taif, Riyadh, Dammam). This is the standard setup for taxi/chauffeur services.
- **Storefront business:** Only choose this if you have a real, staffed office address where customers or drivers could visit — Google will show the exact address publicly and may send a verification postcard there.

**Do you have a real office address, or should this be a service-area business with no public address?** Pick the option that matches reality — Google can suspend profiles with fake/inaccurate addresses.

---

## 1. Go to Google Business Profile

- URL: https://business.google.com
- Sign in with the Google account you want to manage the listing (business email preferred: `info@saudicabsgmc.com` if you can access it, otherwise your own).

## 2. Business name

```
Saudi Cabs GMC
```
Use exactly this — matches the site's `Organization` schema name everywhere.

## 3. Category

- **Primary category:** Taxi service
- **Additional categories** (add if relevant): Airport shuttle service, Chauffeur service, Limousine service

## 4. Location / service area

- If service-area business: add **Makkah, Madinah, Jeddah, Taif, Riyadh, Dammam** (matches `areaServed` in the site's schema).
- If storefront: enter your real, verifiable address in Makkah.

## 5. Contact details

```
Phone:   +92 309 7811785
Website: https://saudicabsgmc.com
Email:   info@saudicabsgmc.com
```

## 6. Hours

```
Open 24 hours, every day
```
(Matches the site's `openingHoursSpecification` — 00:00–23:59, all days.)

## 7. Business description

Use this (already consistent with the site's own copy, no invented claims):

> Saudi Cabs GMC is a private taxi and chauffeur service operating across Saudi Arabia — Makkah, Madinah, Jeddah, Taif, and intercity routes to Riyadh and Dammam. Fixed prices agreed before travel, airport transfers, Hajj & Umrah transport, private driver hire, and a fleet of Toyota Camry sedans, Hyundai Staria vans, and GMC Yukon SUVs. Book instantly via WhatsApp.

## 8. Photos to upload

Already on the site, reuse them directly:
- `public/logo-saudi-cabs-gmc.webp` — profile/logo photo
- `public/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp`
- `public/fleet/hyundai-staria-placeholder-saudi-cabs-gmc.webp`
- `public/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp`

Do **not** upload stock photos of people or vehicles you don't actually operate — Google can suspend listings for misleading photos, and it would contradict the "no fabricated claims" standard the rest of the site now follows.

## 9. Services

Add these as listed services (matches `servicesOffered` in `ai-metadata.json`):
- Airport transfers (Jeddah KAIA, Madinah, Taif)
- Intercity taxi routes
- Hajj and Umrah transport
- Private driver / chauffeur hire
- Ziyarat tours

## 10. Verification

Google will ask you to verify ownership — by phone call, text, video, or postcard, depending on what it offers for this business type. This step **must** be completed by you with real access to the phone number `+92 309 7811785` (or whichever number you register).

## 11. After verification — link it back to the site

Once approved, come back and:
1. Send me the Google Business Profile URL (something like `https://g.page/...` or the Maps listing link).
2. I'll add it to the `sameAs` array in the site's `Organization` schema (`src/app/layout.tsx`) and to `ai-metadata.json` — this is what actually helps AI/Google connect your website to your verified listing.
3. Once you start collecting **real** Google reviews, tell me — that's when we can finally add legitimate `AggregateRating` schema back to the site (removed earlier because it wasn't backed by real data).

---

## What I can't do for you
- Sign in to Google or complete verification (needs your account + phone access)
- Decide whether you have a real office address
- Upload photos (I can prep the exact files above, but the upload step is manual)

## What to send back when done
- The listing URL
- Confirmation of which category/address mode you chose
