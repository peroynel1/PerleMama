import { quoteForKey, quoteImages } from '../data/quotes'

export function QuoteFigure({ quote, className = '' }) {
  if (!quote) return null
  return (
    <figure className={`quote-filler ${className}`.trim()}>
      <img
        src={quote.src}
        alt={quote.alt}
        title={quote.title}
        className="quote-filler-img"
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}

/** One quote chosen from a stable page/seed key. */
export function QuoteStrip({ seed, lang = 'en' }) {
  const af = lang === 'af'
  const quote = quoteForKey(seed)
  return (
    <section className="quote-filler-section" aria-label={af ? 'Inspirasie' : 'Inspiration'}>
      <div className="container">
        <QuoteFigure quote={quote} />
      </div>
    </section>
  )
}

/** Grid of all quote graphics — for resources / inspiration pages. */
export function QuoteGallery({ lang = 'en' }) {
  const af = lang === 'af'
  return (
    <section className="quote-filler-section quote-filler-gallery" aria-label={af ? 'Inspirasie' : 'Inspiration'}>
      <div className="container">
        <h2 className="section-title">{af ? 'Inspirasie' : 'Inspiration'}</h2>
        <div className="quote-filler-grid">
          {quoteImages.map((quote) => (
            <QuoteFigure key={quote.id} quote={quote} />
          ))}
        </div>
      </div>
    </section>
  )
}
