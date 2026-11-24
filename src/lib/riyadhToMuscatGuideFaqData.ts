/*
 * FAQ content for the /blog/riyadh-to-muscat-travel-guide page. Kept in its
 * own plain (non 'use client') module so both the server-rendered page.tsx
 * (FAQPage schema) and the client RiyadhToMuscatGuide.tsx component (visible
 * accordion) import the exact same array — they can never drift apart, and
 * a server component can safely import it (a named data export from a
 * 'use client' module isn't reliably readable at build time across the
 * RSC boundary).
 */
export const riyadhToMuscatGuideFaqs: { q: string; a: string }[] = [
  {
    q: 'What is the distance between Riyadh and Muscat by road?',
    a: "Roughly 1,300 km via the direct Saudi-Oman border crossing through the Empty Quarter. Treat this as an approximate figure — route-distance sources vary slightly, and your exact figure depends on your pickup point within Riyadh. It's well below the 1,640-1,900+ km older sources still quote, which assumed the previous UAE-transit route.",
  },
  {
    q: 'Is there a direct land border crossing between Saudi Arabia and Oman?',
    a: 'Yes. Saudi Arabia and Oman have shared a direct land crossing through the Empty Quarter (Rub’ al Khali) since December 11, 2021. It operates 24/7 for passenger vehicles and does not require transiting through the UAE.',
  },
  {
    q: 'How long does the drive from Riyadh to Muscat take?',
    a: "Rome2Rio's routing estimate for the direct corridor comes out to roughly 13-15 hours of continuous driving. That's a planning baseline, not a promise — it excludes fuel stops, rest breaks and border processing, none of which are quick on a trip this long. Plan for the better part of a day on the road, likely with an overnight stop.",
  },
  {
    q: 'Do I need a visa to enter Oman from Saudi Arabia by road?',
    a: "It depends on your nationality and residency status. GCC citizens can cross on national ID alone, with no visa and no fixed stay limit. GCC residents (non-citizen expats living in a GCC country) need a separate GCC Resident Visa. Other nationalities use Oman's standard e-visa categories, with eligibility, cost and validity varying by nationality. Confirm your specific category on Oman's official e-visa portal before traveling.",
  },
  {
    q: 'Is it faster to fly from Riyadh to Muscat instead of driving?',
    a: "Yes, by a wide margin — nonstop flights between Riyadh and Muscat currently take roughly 2 hours 10 to 15 minutes. If a flight search shows 4+ hours, that's almost always a one-stop connection, not a direct flight. For most travelers without a specific reason to go overland, flying is the more practical choice.",
  },
  {
    q: 'What is the best time of year to drive from Riyadh to Muscat?',
    a: 'Roughly October through March, when daytime temperatures are milder. The Rub’ al Khali region sees extreme summer heat from June through August — average highs around 47°C, with spikes reported as high as 51°C in peak months — which makes a long desert drive genuinely riskier, not just uncomfortable.',
  },
  {
    q: 'Can Saudi Cabs GMC arrange a private taxi for this route?',
    a: "Possibly. This is a long, custom-coordinated trip rather than a routine booking — message us on WhatsApp with your travel dates and we'll tell you honestly whether it's feasible, along with documentation and a current quote, before you commit to anything.",
  },
  {
    q: 'What should I prepare before a long desert drive like this?',
    a: "Start with a full tank, carry extra drinking water for every passenger, avoid traveling alone if you can arrange a second vehicle or companion, and avoid pushing through extreme-heat hours if your schedule allows flexibility. Keep your phone charged, tell someone your route and expected arrival time, and treat any vehicle warning light as a reason to stop.",
  },
  {
    q: 'What are the best places to visit once I reach Muscat?',
    a: "Highlights include the Sultan Qaboos Grand Mosque, Royal Opera House Muscat, Mutrah Corniche and Souq, Mutrah and Al Jalali Forts, Al Alam Palace, and Qurum Natural Park. Opening hours and entry rules can change, so check current details before building a tight itinerary around any single site.",
  },
]
