/** Motivational quote graphics — filler between content blocks. */
export const quoteImages = [
  {
    id: 'iq-lancet',
    src: '/images/breastfeeding-improves-iq-income-lancet-quote-perlemama.jpg',
    alt: 'Quote: Breastfeeding improves IQ, school attendance, and is associated with higher income in adult life — The Lancet',
    title: 'Breastfeeding improves IQ and long-term outcomes — Lancet research quote',
  },
  {
    id: 'emotional-physical',
    src: '/images/breastfeeding-emotional-physical-impact-quote-perlemama.jpg',
    alt: 'Quote from The Womanly Art of Breastfeeding on the emotional and physical impact of breastfeeding',
    title: 'Breastfeeding’s emotional and physical impact — Womanly Art of Breastfeeding',
  },
  {
    id: 'warmth-security',
    src: '/images/newborn-breastfeeding-warmth-security-quote-perlemama.jpg',
    alt: 'Quote by Grantly Dick-Read: breastfeeding satisfies a newborn’s needs for warmth, food, and security',
    title: 'Newborn warmth, food, and security — Grantly Dick-Read breastfeeding quote',
  },
  {
    id: 'character-formation',
    src: '/images/breastfed-baby-character-formation-quote-perlemama.jpg',
    alt: 'Quote by Dr Grantly Dick-Read on the physiological character formation of the breast-fed baby',
    title: 'Breast-fed baby character formation — Childbirth Without Fear quote',
  },
  {
    id: 'greatest-investment',
    src: '/images/breastfeeding-investment-child-future-quote-perlemama.jpg',
    alt: 'Quote: Breastfeeding is the single greatest investment you can make into your child’s future — PerleMama',
    title: 'Breastfeeding as an investment in your child’s future — PerleMama quote',
  },
]

export function quoteForKey(key = '') {
  const str = String(key)
  let hash = 0
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash + str.charCodeAt(i) * (i + 1)) % quoteImages.length
  }
  return quoteImages[hash]
}
