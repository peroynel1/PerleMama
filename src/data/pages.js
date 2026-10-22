import { SERVICE_AREAS, TRAVEL_NOTE, SITE_URL } from '../config/site.js'

/**
 * Single source of truth for SEO pages.
 * path is absolute from site root (no trailing slash except home).
 * lang: 'en' | 'af'
 * hreflangPath: path of the language alternate
 */
export const pages = [
  // ——— English home ———
  {
    id: 'home-en',
    path: '/',
    lang: 'en',
    hreflangPath: '/af/',
    title: 'PerleMama Lactation | Breastfeeding help Stellenbosch & Western Cape',
    description:
      'Annette Nel, LC (CBI) — bilingual breastfeeding support in Stellenbosch: home visits across the Western Cape, online consults South Africa-wide, and in-person sessions. Book on WhatsApp.',
    h1: 'Breastfeeding help in Stellenbosch & the Western Cape',
    lead:
      'PerleMama Lactation offers bilingual (English & Afrikaans) breastfeeding support with Annette Nel, Lactation Counselor (LC, CBI). Home visits, online video consults, and Stellenbosch in-person sessions — book on WhatsApp.',
    type: 'home',
    credentials:
      'Annette Nel, LC (CBI) · Stellenbosch · Evidence-based lactation support from start to wean',
    faqs: [
      {
        q: 'Where do you offer breastfeeding help?',
        a: `Home visits across Stellenbosch, Somerset West, Strand, Paarl, Franschhoek and selected Cape Town southern suburbs; in-person at my Stellenbosch home office; and online video consults anywhere in South Africa.`,
      },
      {
        q: 'Do you speak Afrikaans?',
        a: 'Yes. Consults and resources are available in English and Afrikaans. Many parents search and chat in both.',
      },
      {
        q: 'How do I book?',
        a: 'WhatsApp is the fastest way. Share baby’s age, your main concern, and whether you prefer a home visit, online session, or Stellenbosch visit.',
      },
    ],
  },

  // ——— EN services ———
  {
    id: 'home-visits-en',
    path: '/home-visits/',
    lang: 'en',
    hreflangPath: '/af/huisbesoeke/',
    title: 'Breastfeeding help at home | Stellenbosch & Western Cape | PerleMama Lactation',
    description:
      'Home and hospital breastfeeding visits with Annette Nel, LC (CBI). Stellenbosch base; travel to Somerset West, Paarl, Franschhoek, Strand and surrounds.',
    h1: 'Breastfeeding help at home — Stellenbosch & Western Cape',
    lead:
      'A 60–90 minute home or hospital visit: feeding observation, oral assessment where needed, practical demos, a written care plan, and WhatsApp follow-up.',
    type: 'service',
    serviceKey: 'home',
    body: [
      'When leaving the house with a newborn feels impossible, I come to you. We work through latch, comfort, milk transfer, and your goals in your own space.',
      `Areas I regularly cover: ${SERVICE_AREAS.join(', ')}.`,
      TRAVEL_NOTE,
      'Prefer not to travel? You can also book an online consult or come to my Stellenbosch home office.',
    ],
    faqs: [
      {
        q: 'How long is a home visit?',
        a: 'Usually 60–90 minutes, plus a text-based follow-up after your session.',
      },
      {
        q: 'Do you visit hospitals?',
        a: 'Yes — home or hospital visits are available within the travel area. Ask on WhatsApp for current availability.',
      },
    ],
  },
  {
    id: 'online-en',
    path: '/online-consultation/',
    lang: 'en',
    hreflangPath: '/af/aanlyn-konsultasie/',
    title: 'Online breastfeeding consultation South Africa | PerleMama Lactation',
    description:
      'Virtual breastfeeding consultation with Annette Nel, LC (CBI). 60-minute video sessions anywhere in South Africa, with a care plan and WhatsApp follow-up.',
    h1: 'Online breastfeeding consultation — South Africa',
    lead:
      'A 60-minute video consult for latch, supply, pumping, mastitis concerns, returning to work, and more — without leaving home. Available nationwide.',
    type: 'service',
    serviceKey: 'online',
    body: [
      'Online sessions include a feeding observation where possible, clear next steps, written and video resources, session notes, and text follow-up.',
      'Parents across South Africa (and beyond) use video when a home visit is not practical. Rates on enquiry via WhatsApp.',
      'Based in Stellenbosch, Western Cape — also offering home visits and in-person sessions locally.',
    ],
    faqs: [
      {
        q: 'Is online breastfeeding help effective?',
        a: 'Many latch, pumping, supply, and planning questions work very well on video. If a hands-on oral assessment is essential, we can plan a home or Stellenbosch visit instead.',
      },
      {
        q: 'What do I need for a video session?',
        a: 'A quiet space, charged phone or laptop, and baby nearby if we are observing a feed. WhatsApp or a video link — confirmed when you book.',
      },
    ],
  },
  {
    id: 'clinic-en',
    path: '/stellenbosch-clinic/',
    lang: 'en',
    hreflangPath: '/af/stellenbosch-kliniek/',
    title: 'Breastfeeding consultant Stellenbosch | In-person | PerleMama Lactation',
    description:
      'In-person breastfeeding consults with Annette Nel, LC (CBI) at her Stellenbosch home office. Parking, hours, and booking via WhatsApp.',
    h1: 'Breastfeeding consultant in Stellenbosch — come to me',
    lead:
      '60–80 minutes at my Stellenbosch home & office: feeding observation, guided oral assessment, practical demos, care plan, and WhatsApp follow-up.',
    type: 'service',
    serviceKey: 'clinic',
    body: [
      'Address: Stellenbosch, Western Cape (exact street details shared when you book).',
      'Parking: available nearby — ask when you confirm your appointment.',
      'Hours: by appointment. Message on WhatsApp for the next available slot.',
      'Also available for home visits in the Winelands / Helderberg corridor and online across South Africa.',
    ],
    faqs: [
      {
        q: 'Where is the Stellenbosch practice?',
        a: 'Consults are at my home office in Stellenbosch. Full address and parking notes are sent when you book.',
      },
      {
        q: 'Can I claim from medical aid?',
        a: 'Some medical aids reimburse lactation support — check with your scheme. I can provide an invoice as a Lactation Counselor (LC, CBI).',
      },
    ],
  },
  {
    id: 'about-en',
    path: '/about/',
    lang: 'en',
    hreflangPath: '/af/oor-my/',
    title: 'About Annette Nel, LC (CBI) | PerleMama Lactation Stellenbosch',
    description:
      'Meet Annette Nel, Lactation Counselor (LC, CBI) in Stellenbosch. Bilingual breastfeeding support from start to wean.',
    h1: 'Hey, I am Annette',
    lead:
      'Mother of two and Lactation Counselor (LC, CBI) based in Stellenbosch. I support mothers to breastfeed in comfort and confidence.',
    type: 'about',
    body: [
      'I obtained my Lactation Counselor (LC, CBI) certification through Childbirth International, including education and counselling hours, ethics, and communication skills.',
      'I help facilitate evidence-based peer support spaces such as the Breasties breastfeeding community on Facebook.',
      'Special interests: infant reflux, allergy management, fertility during breastfeeding, gentle weaning, ecological breastfeeding, back-to-work pumping, and updated mastitis care.',
      'Why PerleMama? Pearls are perfect and beautiful, but making a pearl is hard work — it starts out as something foreign and strange to the oyster. Layer by layer, that little “irritation” becomes something valuable and eternal.',
      'For many people, breastfeeding starts out feeling like a grain of sand in an oyster: foreign, strange, difficult. With every feed, it can change into a gift of health and connection — perfect and white like a drop of milk: a pearl.',
      'If your feeding journey feels challenging on those late nights — if you are sore or emotionally spent — think of the pearl you are making. That is what PerleMama means. There is help and support for breastfeeding challenges.',
    ],
    faqs: [
      {
        q: 'What does LC (CBI) mean?',
        a: 'Lactation Counselor certified via Childbirth International — education and counselling hours focused on supporting the breastfeeding relationship.',
      },
      {
        q: 'What does PerleMama mean?',
        a: 'It comes from the pearl: breastfeeding can start as something foreign and hard, and with support and every feed it can become a gift of health and connection — like a pearl formed layer by layer.',
      },
    ],
  },
  {
    id: 'book-en',
    path: '/book/',
    lang: 'en',
    hreflangPath: '/af/boek/',
    title: 'Book a breastfeeding consult | PerleMama Lactation',
    description:
      'Book a home visit, online consult, or Stellenbosch in-person session with Annette Nel. WhatsApp or short form — baby age, main concern, preferred option.',
    h1: 'Book a consult',
    lead: 'Share a few details and I will reply on WhatsApp with availability and rates.',
    type: 'book',
  },
  {
    id: 'find-me-en',
    path: '/find-me/',
    lang: 'en',
    hreflangPath: '/af/vind-my/',
    title: 'Where to find PerleMama Lactation | WhatsApp, Instagram, Facebook',
    description:
      'Contact Annette Nel, LC (CBI): WhatsApp booking, Instagram @laperlemama, Facebook, phone, and Stellenbosch / Western Cape service areas.',
    h1: 'Where to find me',
    lead:
      'The fastest way to book is WhatsApp. Follow along on Instagram and Facebook for tips, and come see me in Stellenbosch or online.',
    type: 'connect',
    body: [
      'I am based in Stellenbosch and support families across the Winelands and Helderberg — plus online consults anywhere in South Africa.',
      'Use this page as your link hub: WhatsApp for bookings, Instagram and Facebook for updates, and the website for services and help topics.',
    ],
    faqs: [
      {
        q: 'What is the quickest way to book?',
        a: 'WhatsApp. Share baby’s age, your main concern, and whether you prefer a home visit, online session, or Stellenbosch visit.',
      },
      {
        q: 'Where do you practise?',
        a: 'Stellenbosch home office for in-person sessions, home visits in the Western Cape (travel rates may apply), and video consults nationwide.',
      },
    ],
  },
  {
    id: 'resources-en',
    path: '/resources/',
    lang: 'en',
    hreflangPath: '/af/hulpbronne/',
    title: 'Breastfeeding help topics | PerleMama Lactation',
    description:
      'Guides on painful latch, low milk supply, mastitis, tongue-tie, pumping at work, and newborn weight gain — with booking CTAs for Stellenbosch and online support.',
    h1: 'Breastfeeding help topics',
    lead:
      'Practical pages on common challenges. Each ends with how to book a home visit, online consult, or Stellenbosch session.',
    type: 'resources',
  },

  // ——— EN problem pages ———
  {
    id: 'painful-latch-en',
    path: '/painful-latch/',
    lang: 'en',
    hreflangPath: '/af/seer-tepels/',
    title: 'Painful latch & sore nipples | Breastfeeding help | PerleMama Lactation',
    description:
      'Painful latch and sore nipples are common — and fixable with skilled support. Book a Stellenbosch home visit or online consult with Annette Nel, LC (CBI).',
    h1: 'Painful latch and sore nipples',
    lead:
      'Breastfeeding should not leave you dreading every feed. Shallow latch, positioning, tongue function, and engorgement often drive nipple pain — a consult can pinpoint what is going on.',
    type: 'problem',
    body: [
      'Sore, cracked, or misshapen nipples after feeds often mean baby is not taking a deep enough mouthful of breast. Pain that lasts throughout the feed is a signal to get help.',
      'In a session we assess latch and positioning, look at oral function when needed, and build a plan you can use at the next feed — not only advice for “someday”.',
    ],
    faqs: [
      {
        q: 'Is nipple pain normal?',
        a: 'Mild adjustment in the first days can happen; ongoing or severe pain is not something you have to endure. Get assessed.',
      },
      {
        q: 'Can this be done online?',
        a: 'Video often works for positioning coaching. Hands-on assessment is easier in person or at home.',
      },
    ],
  },
  {
    id: 'low-supply-en',
    path: '/low-milk-supply/',
    lang: 'en',
    hreflangPath: '/af/lae-melkvoorraad/',
    title: 'Low milk supply help | Stellenbosch & online | PerleMama Lactation',
    description:
      'Worried about low milk supply? Perceived low supply is common. Get a clear assessment and plan with Annette Nel, LC (CBI) — home, clinic, or online.',
    h1: 'Low milk supply — and perceived low supply',
    lead:
      'Many mothers worry they do not have enough milk when baby is cluster feeding or unsettled. We separate true supply issues from normal infant behaviour and build a plan.',
    type: 'problem',
    body: [
      'True low supply and perceived low supply need different approaches. Effective, frequent milk removal is the foundation — supplements alone rarely fix the root cause.',
      'We look at feed frequency, latch quality, output signs (nappies, weight), pumping if used, and your goals around exclusive breastfeeding or combination feeding.',
    ],
    faqs: [
      {
        q: 'Do galactagogues increase milk?',
        a: 'Many products have weak evidence. Feeling like supply improved can be a placebo effect. Focus first on milk removal and latch.',
      },
    ],
  },
  {
    id: 'mastitis-en',
    path: '/mastitis/',
    lang: 'en',
    hreflangPath: '/af/mastitis/',
    title: 'Mastitis & blocked ducts | Updated care | PerleMama Lactation',
    description:
      'Mastitis and blocked ducts: what has changed in care (cold, rest, continued feeding). Support from Annette Nel in Stellenbosch or online.',
    h1: 'Mastitis and blocked ducts',
    lead:
      'Older advice to “heat and aggressively massage” is outdated. Current approaches focus on reducing inflammation, continuing to feed, and getting the right clinical support.',
    type: 'problem',
    body: [
      'In a consult we look at latch and drainage, feeding patterns, and practical comfort measures aligned with current mastitis protocols.',
      'Recurrent mastitis often has a feeding or inflammation driver we can address together.',
    ],
    faqs: [
      {
        q: 'Should I stop breastfeeding with mastitis?',
        a: 'Usually you should continue feeding or expressing from the affected side unless a clinician advises otherwise. Stopping abruptly can worsen engorgement.',
      },
    ],
  },
  {
    id: 'tongue-tie-en',
    path: '/tongue-tie/',
    lang: 'en',
    hreflangPath: '/af/tongbandjie/',
    title: 'Tongue-tie and breastfeeding | Assessment support | PerleMama Lactation',
    description:
      'Tongue-tie can affect latch and milk transfer — not every tie needs a procedure. Feeding assessment with Annette Nel, LC (CBI), Stellenbosch & online.',
    h1: 'Tongue-tie and feeding',
    lead:
      'Clicking feeds, nipple damage, and poor transfer can have many causes. Oral restrictions are one possibility — skilled feeding assessment comes before rushing to a release.',
    type: 'problem',
    body: [
      'Not every tongue-tie causes breastfeeding problems, and not every feeding problem is a tongue-tie. We assess function at the breast first.',
      'If a procedure is appropriate, I can help you prepare, protect supply, and rehabilitate feeding afterwards — and refer to suitable practitioners.',
      'This is not a diagnosis or surgical service. Medical decisions stay with you and your clinical team.',
    ],
    faqs: [
      {
        q: 'Do you perform tongue-tie releases?',
        a: 'No. I provide lactation assessment and feeding support, and refer when a clinical procedure may be indicated.',
      },
    ],
  },
  {
    id: 'back-to-work-en',
    path: '/returning-to-work-pumping/',
    lang: 'en',
    hreflangPath: '/af/terug-werk-toe/',
    title: 'Returning to work & pumping | Breastfeeding plan | PerleMama Lactation',
    description:
      'Back-to-work breastfeeding sessions: pump choice, flange fit, schedule, and keeping supply. Online with Annette Nel, LC (CBI), or in Stellenbosch.',
    h1: 'Returning to work and pumping',
    image: '/images/breastfeeding-back-to-work-pumping-consult-perlemama.png',
    imageAlt:
      'Breastfeeding and going Back to Work flyer — live video consultation, 45 minutes, R450, with Annette Nel, LC (CBI)',
    lead:
      'Going back to work does not have to end breastfeeding. We choose a pump approach, flange fit, and a realistic schedule that fits your day.',
    type: 'problem',
    body: [
      'Sessions cover pump selection, flange sizing (the “just add 2 mm” rule is not right for everyone), storage, paced bottle use, and protecting supply on work days.',
      'Available as a focused online session — popular for parents across South Africa — or in person in Stellenbosch.',
    ],
    faqs: [
      {
        q: 'When should I start planning?',
        a: 'Ideally a few weeks before you return, so you can practise pumping and build a small freezer buffer if that is your goal.',
      },
    ],
  },
  {
    id: 'weight-gain-en',
    path: '/newborn-weight-gain/',
    lang: 'en',
    hreflangPath: '/af/baba-gewig/',
    title: 'Newborn not gaining weight | Breastfeeding support | PerleMama Lactation',
    description:
      'Concerned about newborn weight gain while breastfeeding? Get a feeding assessment and plan with Annette Nel in Stellenbosch or online.',
    h1: 'Newborn not gaining weight',
    lead:
      'Weight concerns are stressful. We assess milk transfer, latch, feed frequency, and output — and build a clear feeding plan.',
    type: 'problem',
    body: [
      'Slow gain has many causes: ineffective latch, sleepy feeds, schedule issues, or medical factors. A feeding observation clarifies next steps.',
      'We look at latch, feed frequency, nappy output, and weight trends, then agree practical next steps for the coming feeds.',
    ],
    faqs: [
      {
        q: 'Should I supplement?',
        a: 'Sometimes supplementation protects baby while we fix transfer. That decision should involve weight data and your feeding goals.',
      },
    ],
  },

  {
    id: 'speciality-en',
    path: '/speciality-sessions/',
    lang: 'en',
    hreflangPath: '/af/spesialiteit-sessies/',
    title:
      'Speciality breastfeeding sessions | Weaning, reflux, fertility & solids | PerleMama Lactation',
    description:
      'Focused speciality breastfeeding sessions with Annette Nel, LC (CBI): weaning, reflux, fertility, shield weaning, sleep, gut-health starting solids, breastfeeding after one year, and pre-birth prep.',
    h1: 'Speciality sessions',
    lead:
      'Sometimes you don’t need a general consult — you need focused help with one specific part of your breastfeeding journey. These speciality sessions each go deep on a single topic, with a clear plan and follow-up support.',
    type: 'speciality',
    sections: [
      {
        heading: 'Pre-birth prep session',
        image: '/images/breastfeeding-pre-birth-prep-session-perlemama.jpg',
        imageAlt:
          'Breastfeeding Pre-Birth Prep Session flyer — 80-minute live video session, R650, with Annette Nel, LC (CBI)',
        path: '/speciality-sessions/pre-birth-prep/',
        hreflangPath: '/af/spesialiteit-sessies/voorgeboorte-voorbereiding/',
        caption:
          'Prepare for the first days and weeks — latch, positioning, newborn behaviour, and feeding confidently, whatever your birth looks like.',
        body: [
          'The first few days with your new baby are the most important when it comes to establishing lactation — and sadly this is also where many breastfeeding journeys get off on the wrong foot. If you’re well prepared, you won’t stress about unnecessary formula supplementation, low supply, baby not latching, or getting supply going if baby has a NICU stay or is born prematurely.',
          'Caesarean sections are very common in South Africa and come with extra challenges to lactation. Being separated from your baby, the effect of birth drugs and method of delivery on baby’s system, and other physical interventions can make breastfeeding challenging in the first few days. We cover all of this and how to make sure you breastfeed successfully no matter how your birth turns out.',
          'This session comes with a very detailed booklet covering all you need for the first weeks, and videos on positioning. In the session we do some detailed latching and positioning demos, and make sure you know everything about newborn behaviour in the first 6 weeks. From sleep, safe sleep setups, how frequently babies nurse, how to know if they’re nursing well, how to know if they’re not nursing well, and practical strategies for if supplementation is needed and how to administer it in hospital in a way that protects and doesn’t derail your breastfeeding journey.',
          'This session can be done in person or online — I have lots of great tools and ways of demonstrating things that makes it educational and complete, as well as personal, virtually.',
          'You will come out feeling confident and ready to take on birth and breastfeeding!',
        ],
        includes:
          'One in-person or online video session, a thorough booklet with all the info discussed, positioning videos, and supporting articles and infographics on the newborn phase.',
      },
      {
        heading: 'Starting solids — gut health focused',
        image: '/images/starting-solids-gut-health-session-perlemama.jpg',
        imageAlt:
          'Starting Solids Support Session flyer — how you start solids influences your baby’s lifelong gut health, 40 minutes with Annette Nel, LC (CBI)',
        path: '/speciality-sessions/starting-solids-gut-health/',
        hreflangPath: '/af/spesialiteit-sessies/vaste-kos-dermgesondheid/',
        caption:
          'Evidence-based starting solids that supports gut health — timing, allergies, portions, and the foods that help (and don’t).',
        body: [
          'Lots of advice on starting solids can be outdated or harmful. Gut health is shaped and affected from birth by hospital interventions like c-sections, formula supplements, antibiotic use, a NICU stay, or passed on to our babies directly from our own gut microbiome. Good gut health directly impacts your body’s immune system, handling inflammation, regulating mood, and how we absorb crucial nutrients. Get the info on the evidence-based way to start solids in a way that supports gut health.',
          'We chat about the right time to start solids, whether a meal plan is needed, allergies, portion sizes, and which foods support gut health (and which don’t!).',
        ],
        includes:
          'One online video consultation, a booklet with all the most important info, plus extra articles and infographics.',
      },
      {
        heading: 'Reflux support',
        path: '/speciality-sessions/reflux-support/',
        hreflangPath: '/af/spesialiteit-sessies/refluks-ondersteuning/',
        caption:
          'Work out whether reflux is normal or something deeper, with practical strategies and a feeding observation.',
        body: [
          'Is my baby’s reflux normal, or is something deeper going on? This can be a very frustrating question, and through deeper investigation we can uncover the source!',
          'Many things can influence reflux that seems painful or worse than normal. In this session and feeding observation we get to the root of why baby is struggling, cover practical management strategies, how true reflux disease is diagnosed, and discuss the risks of reflux medication and whether they’re needed.',
          'While all babies experience spit-up and reflux is physiologically normal, there are cases where extra support is needed.',
        ],
        includes:
          'One online or in-person session and feeding observation, a booklet with all the most important info, and relevant articles and infographics.',
      },
      {
        heading: 'Shield weaning',
        image: '/images/shield-weaning-support-nipple-shields-perlemama.jpg',
        imageAlt:
          'Shield Weaning Support flyer — 2 video sessions and 3 weeks of text-based support, R1500, with Annette Nel, LC',
        path: '/speciality-sessions/shield-weaning/',
        hreflangPath: '/af/spesialiteit-sessies/tepelskild-speen/',
        caption:
          'Gentle, tailored support to move away from nipple shields and back to nursing without them.',
        body: [
          'While nipple shields can be a helpful temporary tool when nursing in some circumstances, long term they have risks to latch and milk supply, and they’re fiddly! Luckily, with gentle support and a plan, we can teach baby to nurse without them. We get to the root of why they were needed, address latch issues, and go through tailored strategies to move away from needing to use them.',
          'Often this is a process that needs lots of patience, and multiple sessions and continuing support may be necessary. This package is flexible, and video sessions can be exchanged into text-based support where needed. I’m with you every step.',
        ],
        includes:
          '2 online or in-person consultations and 3 weeks of text support. One video consultation may be exchanged for further text support.',
      },
      {
        heading: 'Sleep support',
        image: '/images/sleep-support-dudu-baba-perlemama.jpg',
        imageAlt:
          'Dudu Baba Sleep Support flyer — live video consultation, 40 minutes, R400, with Annette Nel, LC (CBI)',
        path: '/speciality-sessions/sleep-support/',
        hreflangPath: '/af/spesialiteit-sessies/slaap-ondersteuning/',
        caption:
          'Feeding-aware sleep support tailored to your baby’s age and your family’s setup — details on enquiry.',
        body: [
          'Every family’s sleep situation is different, and the right support depends on your baby’s age, feeding pattern, and your family’s setup. Get in touch on WhatsApp and tell me a little about what nights look like at the moment — I’ll confirm what a sleep support session would include for your situation.',
        ],
      },
      {
        heading: 'Fertility support',
        image: '/images/fertility-while-breastfeeding-session-perlemama.jpg',
        imageAlt:
          'Fertility While Breastfeeding flyer — info video session plus booklet, R500, with Annette Nel, LC',
        path: '/speciality-sessions/fertility-support/',
        hreflangPath: '/af/spesialiteit-sessies/vrugbaarheid-ondersteuning/',
        caption:
          'Understand how breastfeeding hormones affect fertility, and plan conception without automatically weaning first.',
        body: [
          'Many moms conceive while breastfeeding, but for some this may be a little more challenging. Breastfeeding hormones can impact fertility, and if you’re struggling to conceive while breastfeeding it is worth understanding how this works. In this session we cover how hormones influence fertility, and how you can support conception if breastfeeding hormones are inhibiting it in any way. Many doctors advise full weaning from the start of trying to conceive — this may not always be necessary! Let’s chat about your individual situation and work out a plan that supports everyone involved. We also cover fertility treatments and their impact on breastfeeding if needed.',
        ],
        includes:
          'One online video session, a booklet with all the most important info, and relevant articles and infographics for further reading if needed.',
      },
      {
        heading: 'Weaning support',
        image: '/images/weaning-support-weaning-plan-perlemama.jpg',
        imageAlt:
          'Weaning Support flyer — weaning plan plus 1 week unlimited text support, R500, with Annette Nel, LC',
        path: '/speciality-sessions/weaning-support/',
        hreflangPath: '/af/spesialiteit-sessies/speen-ondersteuning/',
        caption:
          'A timeline and doable plan to end — or comfortably extend — your breastfeeding journey, with text support included.',
        body: [
          'All breastfeeding journeys come to an end, and this can be an emotional time for mom and toddler when either feels it’s time. Whatever your needs, we work together to create a timeline and doable weaning plan that respects and honors the breastfeeding relationship. We cover parent-led day or night weaning, or, if you don’t want to fully wean but just need some support and ideas, strategies to extend the breastfeeding relationship in a way that is comfortable and sustainable for both you and your toddler. We also cover the hormonal changes one can expect after weaning, toddler diet once milk intake decreases, and sleep setup if that’s part of the weaning journey.',
          'Breastfeeding is more than just milk — it’s a relationship of comfort and security. How we approach the end of it matters deeply, and I’m very passionate about doing this in a way that doesn’t break the bond, but nurtures it into the next phase of mothering!',
          'With this session I happily add a week of free text support — checking in with someone was extremely helpful to me during my own weaning journeys.',
        ],
        includes: 'One online video session, a weaning plan document, and one week of text support.',
      },
      {
        heading: 'Breastfeeding after one year',
        image: '/images/breastfeeding-after-one-year-perlemama.jpg',
        imageAlt:
          'Breastfeeding After One Year flyer — live video consultation, 40 minutes, R400, with Annette Nel, LC (CBI)',
        path: '/speciality-sessions/breastfeeding-after-one-year/',
        hreflangPath: '/af/spesialiteit-sessies/borsvoeding-na-een-jaar/',
        caption:
          'Toddler nursing behaviour, supply, boundaries, pumping at work, and what changes after the first year.',
        body: [
          'You’ve made it to one year! Now what? What changes? Quite a bit! In this session we cover toddler nursing behaviour, what happens to milk supply, pumping at work and stopping if you wish, nursing boundaries, how your toddler’s diet can change and adapt, the benefits of extended breastfeeding, and normal developmental leaps — and what you can expect nursing through all the next sleep, motor, and language changes toddlers experience.',
        ],
        includes: 'One online video session, and a document with a pump weaning plan if needed.',
      },
    ],
    faqs: [
      {
        q: 'How do I book a speciality session?',
        a: 'WhatsApp is the fastest way. Tell me which session you’re interested in, your baby’s age, and whether you prefer online or in person.',
      },
      {
        q: 'Are speciality sessions online or in person?',
        a: 'Most are online video sessions. Shield weaning, reflux, and pre-birth prep can also be in person — each session above lists exactly what it includes.',
      },
    ],
  },

  // ——— Afrikaans home + services ———
  {
    id: 'home-af',
    path: '/af/',
    lang: 'af',
    hreflangPath: '/',
    title: 'PerleMama Lactation | Borsvoeding hulp Stellenbosch & Wes-Kaap',
    description:
      'Annette Nel, LC (CBI) — tweetalige borsvoeding ondersteuning in Stellenbosch: huisbesoeke in die Wes-Kaap, aanlyn konsultasies, en persoonlike sessies. Bespreek op WhatsApp.',
    h1: 'Borsvoeding hulp in Stellenbosch en die Wes-Kaap',
    lead:
      'PerleMama Lactation bied tweetalige (Afrikaans & Engels) borsvoeding ondersteuning met Annette Nel, Lactation Counselor (LC, CBI). Huisbesoeke, aanlyn video-sessies, en Stellenbosch konsultasies — bespreek op WhatsApp.',
    type: 'home',
    credentials:
      'Annette Nel, LC (CBI) · Stellenbosch · Bewysgebaseerde ondersteuning van begin tot speen',
    faqs: [
      {
        q: 'Waar help jy met borsvoeding?',
        a: 'Huisbesoeke in Stellenbosch, Somerset-Wes, Strand, Paarl, Franschhoek en geselekteerde suidelike voorstede; by my Stellenbosch kantoor; en aanlyn oral in Suid-Afrika.',
      },
      {
        q: 'Doen jy ook Engels?',
        a: 'Ja. Baie ouers soek en gesels in albei tale — jy kies wat gemaklik is.',
      },
      {
        q: 'Hoe bespreek ek?',
        a: 'WhatsApp is die vinnigste. Stuur baba se ouderdom, jou hoofkwessie, en of jy huisbesoek, aanlyn of Stellenbosch verkies.',
      },
    ],
  },
  {
    id: 'huisbesoeke-af',
    path: '/af/huisbesoeke/',
    lang: 'af',
    hreflangPath: '/home-visits/',
    title: 'Huisbesoeke vir borsvoeding | Stellenbosch & Wes-Kaap | PerleMama',
    description:
      'Borsvoeding huis- of hospitaalbesoeke met Annette Nel, LC (CBI). Stellenbosch-basis; reis na Somerset-Wes, Paarl, Franschhoek, Strand en omgewing.',
    h1: 'Huisbesoeke vir borsvoeding — Stellenbosch & Wes-Kaap',
    lead:
      '’n 60–90 minute huis- of hospitaalbesoek: voeding waarneming, mondassessering waar nodig, praktiese demonstrasies, sorgplan, en WhatsApp-opvolg.',
    type: 'service',
    serviceKey: 'home',
    body: [
      'As dit te veel is om met ’n pasgebore baba uit te gaan, kom ek na jou. Ons werk deur aanhaking, gemak, melk-oordrag en jou doelwitte by jou tuis.',
      `Gebiede wat ek gereeld dek: ${SERVICE_AREAS.join(', ')}.`,
      'Reisfooie geld verder as 10 km vanaf Stellenbosch teen R3.25/km.',
      'Jy kan ook ’n aanlyn konsultasie of Stellenbosch besoek bespreek.',
    ],
    faqs: [
      {
        q: 'Hoe lank is ’n huisbesoek?',
        a: 'Gewoonlik 60–90 minute, plus teks-opvolg ná die sessie.',
      },
    ],
  },
  {
    id: 'aanlyn-af',
    path: '/af/aanlyn-konsultasie/',
    lang: 'af',
    hreflangPath: '/online-consultation/',
    title: 'Aanlyn borsvoeding konsultasie Suid-Afrika | PerleMama Lactation',
    description:
      'Virtuele borsvoeding konsultasie met Annette Nel, LC (CBI). 60-minute video oral in Suid-Afrika, met sorgplan en WhatsApp-opvolg.',
    h1: 'Aanlyn borsvoeding konsultasie — Suid-Afrika',
    lead:
      '’n 60-minute videosessie vir aanhaking, melkvoorraad, pomp, mastitis-kommer, terug werk toe, en meer — sonder om huis te verlaat.',
    type: 'service',
    serviceKey: 'online',
    body: [
      'Aanlyn sessies sluit waar moontlik ’n voeding waarneming in, duidelike volgende stappe, hulpbronne, sessienotas, en teks-opvolg.',
      'Ouers regoor Suid-Afrika gebruik video wanneer ’n huisbesoek nie prakties is nie. Tariewe op aanvraag via WhatsApp.',
    ],
    faqs: [
      {
        q: 'Werk aanlyn hulp regtig?',
        a: 'Baie pomp-, voorraad- en posisie-vrae werk goed op video. As ’n hands-on assessering nodig is, beplan ons ’n huis- of Stellenbosch besoek.',
      },
    ],
  },
  {
    id: 'kliniek-af',
    path: '/af/stellenbosch-kliniek/',
    lang: 'af',
    hreflangPath: '/stellenbosch-clinic/',
    title: 'Borsvoeding konsultant Stellenbosch | PerleMama Lactation',
    description:
      'Persoonlike borsvoeding konsultasies met Annette Nel, LC (CBI) by haar Stellenbosch tuiskantoor. Parkering, ure, en bespreking via WhatsApp.',
    h1: 'Borsvoeding konsultant in Stellenbosch — kom na my',
    lead:
      '60–80 minute by my Stellenbosch huis & kantoor: voeding waarneming, mondassessering, praktiese demos, sorgplan, en WhatsApp-opvolg.',
    type: 'service',
    serviceKey: 'clinic',
    body: [
      'Adres: Stellenbosch, Wes-Kaap (presiese besonderhede wanneer jy bespreek).',
      'Parkering: naby beskikbaar — vra wanneer jy bevestig.',
      'Ure: volgens afspraak via WhatsApp.',
    ],
    faqs: [
      {
        q: 'Waar is die praktyk?',
        a: 'By my tuiskantoor in Stellenbosch. Volledige adres word gestuur wanneer jy bespreek.',
      },
    ],
  },
  {
    id: 'about-af',
    path: '/af/oor-my/',
    lang: 'af',
    hreflangPath: '/about/',
    title: 'Oor Annette Nel, LC (CBI) | PerleMama Lactation Stellenbosch',
    description:
      'Ontmoet Annette Nel, Lactation Counselor (LC, CBI) in Stellenbosch. Tweetalige borsvoeding ondersteuning.',
    h1: 'Haai, ek is Annette',
    lead:
      'Ma van twee en Lactation Counselor (LC, CBI) in Stellenbosch. Ek help mammas om met gemak en selfvertroue te borsvoed.',
    type: 'about',
    body: [
      'Ek het my Lactation Counselor (LC, CBI) sertifisering via Childbirth International behaal — opleiding én beradingsure, etiek en kommunikasie.',
      'Ek help met bewysgebaseerde portuurgroepe soos Breasties op Facebook.',
      'Spesiale belangstellings: refluks, allergie-bestuur, vrugbaarheid tydens borsvoeding, sagte speen, ekologiese borsvoeding, terug werk toe pomp, en bygewerkte mastitis-sorg.',
      'Hoekom PerleMama? Pêrels is perfek en pragtig, maar om ’n pêrel te maak is harde werk — dit begin as iets vreemd vir die oester. Laag vir laag word daardie klein “irritasie” iets waardevol en ewig.',
      'Vir baie voel borsvoeding aan die begin soos ’n sandkorrel in ’n oester: vreemd, moeilik, uitdagend. Met elke voeding kan dit ’n geskenk van gesondheid en verbinding word — perfek en wit soos ’n druppel melk: ’n pêrel.',
      'As jou voedingsreis uitdagend voel op daardie laat nagte — as jy seer of emosioneel uitgeput is — dink aan die pêrel wat jy maak. Dit is wat PerleMama beteken. Daar is hulp vir borsvoeding-uitdagings.',
    ],
    faqs: [
      {
        q: 'Wat beteken PerleMama?',
        a: 'Dit kom van die pêrel: borsvoeding kan begin as iets vreemd en moeilik, en met steun en elke voeding kan dit ’n geskenk van gesondheid en verbinding word — soos ’n pêrel wat laag vir laag gevorm word.',
      },
    ],
  },
  {
    id: 'book-af',
    path: '/af/boek/',
    lang: 'af',
    hreflangPath: '/book/',
    title: 'Bespreek ’n borsvoeding konsultasie | PerleMama Lactation',
    description:
      'Bespreek ’n huisbesoek, aanlyn sessie of Stellenbosch besoek met Annette Nel. WhatsApp of kort vorm — baba se ouderdom, hoofkwessie, voorkeur.',
    h1: 'Bespreek ’n konsultasie',
    lead: 'Deel ’n paar besonderhede en ek antwoord op WhatsApp met beskikbaarheid en tariewe.',
    type: 'book',
  },
  {
    id: 'find-me-af',
    path: '/af/vind-my/',
    lang: 'af',
    hreflangPath: '/find-me/',
    title: 'Waar om PerleMama Lactation te vind | WhatsApp, Instagram, Facebook',
    description:
      'Kontak Annette Nel, LC (CBI): WhatsApp-besprekings, Instagram @laperlemama, Facebook, foon, en Stellenbosch / Wes-Kaap diensareas.',
    h1: 'Waar om my te vind',
    lead:
      'Die vinnigste manier om te bespreek is WhatsApp. Volg Instagram en Facebook vir wenke, en kom sien my in Stellenbosch of aanlyn.',
    type: 'connect',
    body: [
      'Ek is in Stellenbosch gebaseer en help gesinne in die Wynland en Helderberg — plus aanlyn konsultasies oral in Suid-Afrika.',
      'Gebruik hierdie bladsy as jou skakel-hub: WhatsApp vir besprekings, Instagram en Facebook vir opdaterings, en die webwerf vir dienste en hulponderwerpe.',
    ],
    faqs: [
      {
        q: 'Wat is die vinnigste manier om te bespreek?',
        a: 'WhatsApp. Deel baba se ouderdom, jou hoofkwessie, en of jy huisbesoek, aanlyn of Stellenbosch verkies.',
      },
      {
        q: 'Waar praktiseer jy?',
        a: 'Stellenbosch huis & kantoor vir in-persoon sessies, huisbesoeke in die Wes-Kaap (reisfooie kan geld), en video oral in Suid-Afrika.',
      },
    ],
  },
  {
    id: 'resources-af',
    path: '/af/hulpbronne/',
    lang: 'af',
    hreflangPath: '/resources/',
    title: 'Borsvoeding hulp onderwerpe | PerleMama Lactation',
    description:
      'Hulp met seer tepels, lae melkvoorraad, mastitis, tongbandjie, pomp by die werk, en baba se gewig — met besprekings-CTAs.',
    h1: 'Borsvoeding hulp onderwerpe',
    lead:
      'Praktiese bladsye oor algemene uitdagings. Elkeen eindig met hoe om ’n huisbesoek, aanlyn of Stellenbosch sessie te bespreek.',
    type: 'resources',
  },

  // ——— AF problem pages ———
  {
    id: 'seer-tepels-af',
    path: '/af/seer-tepels/',
    lang: 'af',
    hreflangPath: '/painful-latch/',
    title: 'Seer tepels & pynlike aanhaking | PerleMama Lactation',
    description:
      'Seer tepels en pynlike latch is algemeen — en oplosbaar met die regte hulp. Bespreek ’n huisbesoek of aanlyn sessie met Annette Nel, LC (CBI).',
    h1: 'Seer tepels en pynlike aanhaking',
    lead:
      'Borsvoeding moet nie beteken jy vrees elke voeding nie. Ondiepe aanhaking, posisie, tongfunksie en engorgement dryf dikwels tepelpyn — ’n konsultasie kan dit uitklaar.',
    type: 'problem',
    body: [
      'Seer, gekraakte of vervormde tepels ná voeding beteken dikwels baba kry nie ’n diep genoeg mondvol borste nie. Pyn dwarsdeur die voeding is ’n teken om hulp te kry.',
      'In ’n sessie kyk ons na aanhaking en posisie, mondfunksie waar nodig, en bou ’n plan vir die volgende voeding.',
    ],
    faqs: [
      {
        q: 'Is tepelpyn normaal?',
        a: 'Ligte aanpassing die eerste dae kan gebeur; aanhoudende of erge pyn hoef jy nie te verdra nie.',
      },
    ],
  },
  {
    id: 'lae-melk-af',
    path: '/af/lae-melkvoorraad/',
    lang: 'af',
    hreflangPath: '/low-milk-supply/',
    title: 'Lae melkvoorraad hulp | PerleMama Lactation',
    description:
      'Bekommerd oor te min melk? Waargenome lae voorraad is algemeen. Kry ’n duidelike plan met Annette Nel — huis, kliniek of aanlyn.',
    h1: 'Lae melkvoorraad — en waargenome lae voorraad',
    lead:
      'Baie mammas worry hulle het nie genoeg melk nie wanneer baba cluster-feed. Ons skei ware voorraadprobleme van normale baba-gedrag.',
    type: 'problem',
    body: [
      'Ware lae voorraad en waargenome lae voorraad vra verskillende benaderings. Doeltreffende, gereelde melkverwydering is die basis.',
      'Ons kyk na voedingsfrekwensie, aanhaking, nat luiers, gewig, en pomp as jy dit gebruik.',
    ],
    faqs: [],
  },
  {
    id: 'mastitis-af',
    path: '/af/mastitis/',
    lang: 'af',
    hreflangPath: '/mastitis/',
    title: 'Mastitis & verstopte melkkanaal | PerleMama Lactation',
    description:
      'Mastitis en verstopte kanale: bygewerkte sorg (koue, rus, aanhou voed). Hulp van Annette Nel in Stellenbosch of aanlyn.',
    h1: 'Mastitis en verstopte melkkanaal',
    lead:
      'Ou raad om “warm te maak en hard te masseer” is verouderd. Hedendaagse benaderings fokus op inflammasie verminder, aanhou voed, en die regte kliniese steun.',
    type: 'problem',
    body: [
      'In ’n konsultasie kyk ons na aanhaking, dreinasie en praktiese gemaksmaatreëls volgens huidige protokolle.',
    ],
    faqs: [],
  },
  {
    id: 'tongbandjie-af',
    path: '/af/tongbandjie/',
    lang: 'af',
    hreflangPath: '/tongue-tie/',
    title: 'Tongbandjie en borsvoeding | PerleMama Lactation',
    description:
      'Tongbandjie kan aanhaking beïnvloed — nie elke bandjie hoef gesny te word nie. Voedingsassessering met Annette Nel, Stellenbosch & aanlyn.',
    h1: 'Tongbandjie en voeding',
    lead:
      'Klikkende voedings, tepelskade en swak oordrag het baie oorsake. Orale beperkings is een moontlikheid — assessering kom vóór ’n prosedure.',
    type: 'problem',
    body: [
      'Nie elke tongbandjie veroorsaak probleme nie, en nie elke voedingsprobleem is ’n tongbandjie nie. Ons assessseer funksie by die bors eers.',
      'Ek doen nie freenotomie nie. Ek steun voeding en verwys wanneer ’n prosedure oorweeg moet word.',
    ],
    faqs: [],
  },
  {
    id: 'terug-werk-af',
    path: '/af/terug-werk-toe/',
    lang: 'af',
    hreflangPath: '/returning-to-work-pumping/',
    title: 'Terug werk toe & pomp | PerleMama Lactation',
    description:
      'Terug-werk-toe borsvoeding: pompkeuse, flange-pas, skedule, en voorraad beskerm. Aanlyn of in Stellenbosch met Annette Nel.',
    h1: 'Terug werk toe en pomp',
    image: '/images/breastfeeding-back-to-work-pumping-consult-perlemama.png',
    imageAlt:
      'Borsvoeding en Terug Werk Toe-plakkaat — regstreekse videokonsultasie, 45 minute, R450, met Annette Nel, LC (CBI)',
    lead:
      'Terug werk toe hoef nie borsvoeding te eindig nie. Ons kies ’n pompbenadering, flange-pas, en ’n realistiese skedule.',
    type: 'problem',
    body: [
      'Sessies dek pompkeuse, flange-grootte, berging, paced bottle, en voorraad op werksdae.',
      'Gewild as ’n gefokusde aanlyn sessie oral in Suid-Afrika, of persoonlik in Stellenbosch.',
    ],
    faqs: [],
  },
  {
    id: 'baba-gewig-af',
    path: '/af/baba-gewig/',
    lang: 'af',
    hreflangPath: '/newborn-weight-gain/',
    title: 'Baba nie genoeg gewig nie | PerleMama Lactation',
    description:
      'Bekommerd oor jou baba se gewig met borsvoeding? Kry ’n voedingsassessering met Annette Nel in Stellenbosch of aanlyn.',
    h1: 'Baba kry nie genoeg gewig nie',
    lead:
      'Gewigskommer is stresvol. Ons assessseer melk-oordrag, aanhaking, voedingsfrekwensie en luiers — en bou ’n duidelike voedingsplan.',
    type: 'problem',
    body: [
      'Stadige gewigstoename het baie oorsake. ’n Voeding waarneming maak volgende stappe duidelik.',
      'Ons kyk na aanhaking, voedingsfrekwensie, luiers en gewigstendense, dan stem ons praktiese volgende stappe ooreen.',
    ],
    faqs: [],
  },
  {
    id: 'speciality-af',
    path: '/af/spesialiteit-sessies/',
    lang: 'af',
    hreflangPath: '/speciality-sessions/',
    title:
      'Spesialiteit-borsvoedingsessies | Speen, refluks, vrugbaarheid & vaste kos | PerleMama Lactation',
    description:
      'Gefokusde spesialiteit-borsvoedingsessies met Annette Nel, LC (CBI): speen, refluks, vrugbaarheid, tepelskild-speen, slaap, vaste kos met ’n fokus op dermgesondheid, borsvoeding ná een jaar, en voorgeboorte-voorbereiding.',
    h1: 'Spesialiteit-sessies',
    lead:
      'Soms het jy nie ’n algemene konsultasie nodig nie — jy het gefokusde hulp nodig met een spesifieke deel van jou borsvoedingsreis. Hierdie spesialiteit-sessies gaan elkeen diep op ’n enkele onderwerp in, met ’n duidelike plan en opvolgondersteuning.',
    type: 'speciality',
    sections: [
      {
        heading: 'Voorgeboorte-voorbereidingsessie',
        image: '/images/breastfeeding-pre-birth-prep-session-perlemama.jpg',
        imageAlt:
          'Borsvoeding Voorgeboorte-voorbereidingsessie-plakkaat — 80 minute regstreekse videosessie, R650, met Annette Nel, LC (CBI)',
        path: '/af/spesialiteit-sessies/voorgeboorte-voorbereiding/',
        hreflangPath: '/speciality-sessions/pre-birth-prep/',
        caption:
          'Berei voor vir die eerste dae en weke — aanhaking, posisionering, pasgebore gedrag, en vol vertroue voed, maak nie saak hoe jou geboorte lyk nie.',
        body: [
          'Die eerste paar dae met jou nuwe baba is die belangrikste wanneer dit kom by die vestiging van laktasie — en ongelukkig is dit ook waar baie borsvoedingsreise op die verkeerde voet begin. As jy goed voorbereid is, hoef jy nie te stres oor onnodige formule-byvoeding, lae melkvoorraad, ’n baba wat nie aanhak nie, of om jou voorraad aan die gang te kry as jou baba in die NICU moet bly of prematuur gebore word nie.',
          'Keisersnitte is baie algemeen in Suid-Afrika en bring ekstra uitdagings vir laktasie mee. Om van jou baba geskei te wees, die effek van geboortemedikasie en die geboortemetode op jou baba se sisteem, en ander fisiese ingrypings kan borsvoeding in die eerste paar dae uitdagend maak. Ons dek dit alles, en hoe om seker te maak jy borsvoed suksesvol, maak nie saak hoe jou geboorte uitdraai nie.',
          'Hierdie sessie kom met ’n baie gedetailleerde boekie wat alles dek wat jy vir die eerste weke nodig het, asook video’s oor posisionering. In die sessie doen ons gedetailleerde demonstrasies van aanhaking en posisionering, en maak seker jy weet alles oor pasgebore gedrag in die eerste 6 weke. Van slaap, veilige slaapopstellings, hoe gereeld babas drink, hoe om te weet of hulle goed drink, hoe om te weet as hulle nie goed drink nie, tot praktiese strategieë as byvoeding nodig is en hoe om dit in die hospitaal toe te dien op ’n manier wat jou borsvoedingsreis beskerm en nie ontspoor nie.',
          'Hierdie sessie kan in persoon of aanlyn gedoen word — ek het baie goeie hulpmiddels en maniere om dinge te demonstreer wat dit ook virtueel opvoedkundig en volledig, asook persoonlik, maak.',
          'Jy sal vol selfvertroue en gereed voel om geboorte en borsvoeding aan te pak!',
        ],
        includes:
          'Een in-persoon of aanlyn videosessie, ’n deeglike boekie met al die inligting wat bespreek is, posisioneringsvideo’s, en ondersteunende artikels en infografika oor die pasgebore fase.',
      },
      {
        heading: 'Begin met vaste kos — fokus op dermgesondheid',
        image: '/images/starting-solids-gut-health-session-perlemama.jpg',
        imageAlt:
          'Begin met Vaste Kos-ondersteuningsessie-plakkaat — hoe jy met vaste kos begin, beïnvloed jou baba se lewenslange dermgesondheid, 40 minute met Annette Nel, LC (CBI)',
        path: '/af/spesialiteit-sessies/vaste-kos-dermgesondheid/',
        hreflangPath: '/speciality-sessions/starting-solids-gut-health/',
        caption:
          'Bewysgebaseerde begin van vaste kos wat dermgesondheid ondersteun — tydsberekening, allergieë, porsies, en die kosse wat help (en nie help nie).',
        body: [
          'Baie raad oor die begin van vaste kos kan verouderd of skadelik wees. Dermgesondheid word van geboorte af gevorm en beïnvloed deur hospitaalingrypings soos keisersnitte, formule-byvoeding, antibiotikagebruik, ’n NICU-verblyf, of word direk vanaf ons eie dermmikrobioom aan ons babas oorgedra. Goeie dermgesondheid het ’n direkte impak op jou liggaam se immuunstelsel, die hantering van inflammasie, die regulering van bui, en hoe ons deurslaggewende voedingstowwe absorbeer. Kry die inligting oor die bewysgebaseerde manier om met vaste kos te begin op ’n manier wat dermgesondheid ondersteun.',
          'Ons gesels oor die regte tyd om met vaste kos te begin, of ’n maaltydplan nodig is, allergieë, porsiegroottes, en watter kosse dermgesondheid ondersteun (en watter nie!).',
        ],
        includes:
          'Een aanlyn videokonsultasie, ’n boekie met al die belangrikste inligting, plus ekstra artikels en infografika.',
      },
      {
        heading: 'Refluksondersteuning',
        path: '/af/spesialiteit-sessies/refluks-ondersteuning/',
        hreflangPath: '/speciality-sessions/reflux-support/',
        caption:
          'Werk uit of refluks normaal is of iets diepers, met praktiese strategieë en ’n voedingswaarneming.',
        body: [
          'Is my baba se refluks normaal, of gaan daar iets diepers aan? Dit kan ’n baie frustrerende vraag wees, en deur dieper ondersoek kan ons die bron ontdek!',
          'Baie dinge kan refluks beïnvloed wat pynlik of erger as normaal lyk. In hierdie sessie en voedingswaarneming kom ons tot die wortel van hoekom jou baba sukkel, dek praktiese bestuurstrategieë, hoe ware reflukssiekte gediagnoseer word, en bespreek die risiko’s van refluksmedikasie en of dit nodig is.',
          'Hoewel alle babas spoeg en refluks fisiologies normaal is, is daar gevalle waar ekstra ondersteuning nodig is.',
        ],
        includes:
          'Een aanlyn of in-persoon sessie en voedingswaarneming, ’n boekie met al die belangrikste inligting, en relevante artikels en infografika.',
      },
      {
        heading: 'Speen van die tepelskild af',
        image: '/images/shield-weaning-support-nipple-shields-perlemama.jpg',
        imageAlt:
          'Tepelskild-speenondersteuning-plakkaat — 2 videosessies en 3 weke se teksgebaseerde ondersteuning, R1500, met Annette Nel, LC',
        path: '/af/spesialiteit-sessies/tepelskild-speen/',
        hreflangPath: '/speciality-sessions/shield-weaning/',
        caption:
          'Sagte, pasgemaakte ondersteuning om weg te beweeg van tepelskilde en terug na drink sonder hulle.',
        body: [
          'Hoewel tepelskilde in sommige omstandighede ’n nuttige tydelike hulpmiddel kan wees tydens borsvoeding, hou langtermyngebruik risiko’s in vir aanhaking en melkvoorraad, en hulle is omslagtig! Gelukkig kan ons, met sagte ondersteuning en ’n plan, jou baba leer om sonder hulle te drink. Ons kom tot die wortel van hoekom hulle nodig was, spreek aanhakingskwessies aan, en werk deur pasgemaakte strategieë om weg te beweeg van die behoefte om hulle te gebruik.',
          'Dit is dikwels ’n proses wat baie geduld verg, en verskeie sessies en voortgesette ondersteuning mag nodig wees. Hierdie pakket is buigsaam, en videosessies kan waar nodig vir teksgebaseerde ondersteuning verruil word. Ek is elke stap by jou.',
        ],
        includes:
          '2 aanlyn of in-persoon konsultasies en 3 weke se teksondersteuning. Een videokonsultasie kan vir verdere teksondersteuning verruil word.',
      },
      {
        heading: 'Slaapondersteuning',
        image: '/images/sleep-support-dudu-baba-perlemama.jpg',
        imageAlt:
          'Dudu Baba Slaapondersteuning-plakkaat — regstreekse videokonsultasie, 40 minute, R400, met Annette Nel, LC (CBI)',
        path: '/af/spesialiteit-sessies/slaap-ondersteuning/',
        hreflangPath: '/speciality-sessions/sleep-support/',
        caption:
          'Voedingsbewuste slaapondersteuning pasgemaak vir jou baba se ouderdom en jou gesin se opstelling — besonderhede op navraag.',
        body: [
          'Elke gesin se slaapsituasie is anders, en die regte ondersteuning hang af van jou baba se ouderdom, voedingspatroon en jou gesin se opstelling. Kontak my op WhatsApp en vertel my ’n bietjie van hoe die nagte tans lyk — ek sal bevestig wat ’n slaapondersteuningsessie vir julle situasie sou insluit.',
        ],
      },
      {
        heading: 'Vrugbaarheidsondersteuning',
        image: '/images/fertility-while-breastfeeding-session-perlemama.jpg',
        imageAlt:
          'Vrugbaarheid tydens Borsvoeding-plakkaat — inligtingsvideosessie plus boekie, R500, met Annette Nel, LC',
        path: '/af/spesialiteit-sessies/vrugbaarheid-ondersteuning/',
        hreflangPath: '/speciality-sessions/fertility-support/',
        caption:
          'Verstaan hoe borsvoedingshormone vrugbaarheid beïnvloed, en beplan konsepsie sonder om outomaties eers te speen.',
        body: [
          'Baie mammas raak swanger terwyl hulle borsvoed, maar vir sommige kan dit ’n bietjie meer uitdagend wees. Borsvoedingshormone kan vrugbaarheid beïnvloed, en as jy sukkel om swanger te raak terwyl jy borsvoed, is dit die moeite werd om te verstaan hoe dit werk. In hierdie sessie dek ons hoe hormone vrugbaarheid beïnvloed, en hoe jy konsepsie kan ondersteun as borsvoedingshormone dit op enige manier inhibeer. Baie dokters raai volle speen aan van die begin van probeer om swanger te raak — dit is dalk nie altyd nodig nie! Kom ons gesels oor jou individuele situasie en werk ’n plan uit wat almal betrokke ondersteun. Ons dek ook vrugbaarheidsbehandelings en hul impak op borsvoeding, indien nodig.',
        ],
        includes:
          'Een aanlyn videosessie, ’n boekie met al die belangrikste inligting, en relevante artikels en infografika vir verdere leeswerk indien nodig.',
      },
      {
        heading: 'Speenondersteuning',
        image: '/images/weaning-support-weaning-plan-perlemama.jpg',
        imageAlt:
          'Speenondersteuning-plakkaat — speenplan plus 1 week onbeperkte teksondersteuning, R500, met Annette Nel, LC',
        path: '/af/spesialiteit-sessies/speen-ondersteuning/',
        hreflangPath: '/speciality-sessions/weaning-support/',
        caption:
          '’n Tydlyn en doenbare plan om jou borsvoedingsreis te beëindig — of gemaklik te verleng — met teksondersteuning ingesluit.',
        body: [
          'Alle borsvoedingsreise kom tot ’n einde, en dit kan ’n emosionele tyd vir mamma en kleuter wees wanneer een van hulle voel dis tyd. Wat jou behoeftes ook al is, werk ons saam om ’n tydlyn en doenbare speenplan te skep wat die borsvoedingsverhouding respekteer en eer. Ons dek ouergeleide dag- of nagspeen, of, as jy nie ten volle wil speen nie maar net ondersteuning en idees nodig het, strategieë om die borsvoedingsverhouding te verleng op ’n manier wat gemaklik en volhoubaar is vir jou én jou kleuter. Ons dek ook die hormonale veranderinge wat ’n mens ná speen kan verwag, kleuterdieet sodra melkinname afneem, en slaapopstelling as dit deel van die speenreis is.',
          'Borsvoeding is meer as net melk — dit is ’n verhouding van gemak en sekuriteit. Hoe ons die einde daarvan benader, maak diep saak, en ek is baie passievol daaroor om dit te doen op ’n manier wat nie die band breek nie, maar dit koester na die volgende fase van moederskap!',
          'Met hierdie sessie voeg ek graag ’n week gratis teksondersteuning by — om met iemand in te loer was ongelooflik nuttig vir my tydens my eie speenreise.',
        ],
        includes: 'Een aanlyn videosessie, ’n speenplandokument, en een week teksondersteuning.',
      },
      {
        heading: 'Borsvoeding ná een jaar',
        image: '/images/breastfeeding-after-one-year-perlemama.jpg',
        imageAlt:
          'Borsvoeding ná Een Jaar-plakkaat — regstreekse videokonsultasie, 40 minute, R400, met Annette Nel, LC (CBI)',
        path: '/af/spesialiteit-sessies/borsvoeding-na-een-jaar/',
        hreflangPath: '/speciality-sessions/breastfeeding-after-one-year/',
        caption:
          'Kleuters se drinkgedrag, melkvoorraad, grense, pomp by die werk, en wat ná die eerste jaar verander.',
        body: [
          'Jy het een jaar gemaak! Wat nou? Wat verander? Nogal baie! In hierdie sessie dek ons kleuters se drinkgedrag, wat met melkvoorraad gebeur, pomp by die werk en ophou as jy wil, drinkgrense, hoe jou kleuter se dieet kan verander en aanpas, die voordele van verlengde borsvoeding, en normale ontwikkelingspronge — en wat jy kan verwag terwyl jy deur al die volgende slaap-, motor- en taalveranderinge drink wat kleuters ervaar.',
        ],
        includes: 'Een aanlyn videosessie, en ’n dokument met ’n pompspeenplan indien nodig.',
      },
    ],
    faqs: [
      {
        q: 'Hoe bespreek ek ’n spesialiteit-sessie?',
        a: 'WhatsApp is die vinnigste manier. Vertel my in watter sessie jy belangstel, jou baba se ouderdom, en of jy aanlyn of in persoon verkies.',
      },
      {
        q: 'Is spesialiteit-sessies aanlyn of in persoon?',
        a: 'Die meeste is aanlyn videosessies. Tepelskild-speen, refluks en voorgeboorte-voorbereiding kan ook in persoon wees — elke sessie hierbo lys presies wat dit insluit.',
      },
    ],
  },
]

// Each speciality section becomes its own dedicated page (overview keeps cards).
for (const overview of pages.filter((p) => p.type === 'speciality')) {
  for (const s of overview.sections || []) {
    pages.push({
      id: `speciality-${overview.lang}-${s.path.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}`,
      path: s.path,
      lang: overview.lang,
      hreflangPath: s.hreflangPath,
      title:
        overview.lang === 'af'
          ? `${s.heading} | Spesialiteit-sessie | PerleMama Lactation`
          : `${s.heading} | Speciality session | PerleMama Lactation`,
      description: s.caption,
      h1: s.heading,
      lead: s.caption,
      type: 'speciality-session',
      image: s.image,
      imageAlt: s.imageAlt,
      body: s.body || [],
      includes: s.includes,
      faqs: overview.faqs || [],
    })
  }
}

export function getSpecialitySessionPages(lang) {
  return pages.filter((p) => p.type === 'speciality-session' && p.lang === lang)
}

export function getPageByPath(pathname) {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname : pathname === '/' ? '/' : `${pathname}/`
  return pages.find((p) => p.path === normalized || p.path === pathname)
}

export function getProblemPages(lang) {
  return pages.filter((p) => p.type === 'problem' && p.lang === lang)
}

export function getServicePages(lang) {
  return pages.filter((p) => p.type === 'service' && p.lang === lang)
}

export function absoluteUrl(path) {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.endsWith('/') ? path : `${path}/`}`
}
