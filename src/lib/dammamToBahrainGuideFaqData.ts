/*
 * FAQ content for the /blog/dammam-to-bahrain-travel-guide page. Kept in its
 * own plain (non 'use client') module so both the server-rendered page.tsx
 * (FAQPage schema) and the client DammamToBahrainGuide.tsx component
 * (visible accordion) import the exact same array — mirrors the pattern
 * used for riyadhToMuscatGuideFaqData.ts.
 *
 * Facts reused from the already-verified /dammam-to-bahrain and
 * /bahrain-to-dammam service pages (dammamToBahrainPageData.ts,
 * dammamToBahrainFaqData.ts, bahrainToDammamPageData.ts) rather than
 * re-derived, plus the toll figure approved for this post specifically
 * (SAR 35, effective Feb 18, 2026, per Saudi Gazette's report of the King
 * Fahd Causeway Authority's announcement — hedged as subject to change).
 */
export const dammamToBahrainGuideFaqs: { q: string; a: string }[] = [
  {
    q: 'Can I book a private taxi from Dammam to Bahrain?',
    a: 'Yes — this is available as a custom, advance-booked trip via the King Fahd Causeway. Since Dammam and Khobar sit close to the causeway, this is our shortest GCC route. Send your travel dates on WhatsApp for a current quote.',
  },
  {
    q: 'How far is Dammam or Khobar from the King Fahd Causeway?',
    a: "Khobar sits close to the start of the causeway; Dammam is a little further. A Dammam-to-Manama trip is roughly 50-75 km in total depending on your exact pickup point, with the causeway itself a well-documented 25 km toll bridge making up a significant part of that distance.",
  },
  {
    q: 'Do I need a visa to travel from Dammam to Bahrain?',
    a: "It depends on your nationality and individual circumstances — there's no single answer that applies to everyone. Check Bahrain's official government portal (bahrain.bh) for current entry requirements before you travel; we're not a travel agency and don't guarantee visa approval or entry decisions.",
  },
  {
    q: 'What is the toll for the King Fahd Causeway?',
    a: "Saudi Gazette reported that, effective February 18, 2026, the King Fahd Causeway Authority raised the standard toll for cars and motorcycles to SAR 35 (up from SAR 25) — the first increase since 1986. Toll rates can change, so confirm the current rate with the King Fahd Causeway Authority (KFCA) or JESR shortly before you travel rather than relying on any single published figure.",
  },
  {
    q: 'Is my vehicle automatically allowed to cross the King Fahd Causeway?',
    a: "Not automatically. Bahrain's Ministry of Transportation and Telecommunications has confirmed that, effective September 6, 2026, only officially licensed taxis meeting approved technical requirements and no older than five years may carry passengers across the causeway. Vehicle and driver arrangements for the Bahrain side are coordinated through our Bahrain-based partner, and the specific vehicle, driver and documentation for your booking are confirmed with you directly, not assumed in advance.",
  },
  {
    q: 'How much does a Dammam to Bahrain private transfer cost?',
    a: "This route doesn't have a fixed listed fare, since it's a custom international trip. Message us on WhatsApp with your dates and group size for a current quote.",
  },
  {
    q: 'Can I travel with a large family or group?',
    a: "Yes — the Hyundai Staria and GMC Yukon both seat up to 7, which keeps a family or group together in one vehicle rather than splitting across cars at the causeway. Let us know your group size and luggage when you reach out so we can recommend the right vehicle.",
  },
  {
    q: "What's the best time to cross to avoid delays?",
    a: "We can't guarantee a specific crossing time, since checkpoint queues vary by day and are outside our control — but weekends and public holidays are generally known for longer queues than midweek travel. Booking in advance and reconfirming closer to your travel date are the most reliable ways to avoid avoidable delays.",
  },
]
