import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import BookingForm from '../components/BookingForm'
import { QuoteStrip, QuoteGallery } from '../components/QuoteFiller'
import { testimonials } from '../data/testimonials'
import { getProblemPages, getServicePages, getSpecialitySessionPages } from '../data/pages'
import { blogPosts, blogPath } from '../data/blog'
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  SERVICE_AREAS,
  SITE_URL,
  WHATSAPP_URL,
} from '../config/site'

function ConnectChannels({ lang }) {
  const af = lang === 'af'
  const channels = [
    {
      name: 'WhatsApp',
      href: WHATSAPP_URL,
      detail: af ? 'Besprekings en vinnige vrae' : 'Bookings and quick questions',
      external: true,
    },
    {
      name: 'Instagram',
      href: INSTAGRAM_URL,
      detail: '@laperlemama',
      external: true,
    },
    {
      name: 'Facebook',
      href: FACEBOOK_URL,
      detail: 'PerleMama Lactation',
      external: true,
    },
    {
      name: af ? 'Foon' : 'Phone',
      href: `tel:${PHONE_E164}`,
      detail: PHONE_DISPLAY,
      external: false,
    },
    {
      name: af ? 'Webwerf' : 'Website',
      href: af ? '/af/' : '/',
      detail: 'perlemamalactation.co.za',
      external: false,
      internal: true,
    },
    {
      name: af ? 'Bespreek' : 'Book',
      href: af ? '/af/boek/' : '/book/',
      detail: af ? 'Kort vorm op die webwerf' : 'Short form on the website',
      external: false,
      internal: true,
    },
  ]

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">{af ? 'Skakels' : 'Channels'}</h2>
        <div className="services-grid content-topics-grid connect-channels-grid">
          {channels.map((c) =>
            c.internal ? (
              <Link key={c.name} to={c.href} className="service-card service-card-link content-topic-card">
                <h3>{c.name}</h3>
                <p>{c.detail}</p>
              </Link>
            ) : (
              <a
                key={c.name}
                href={c.href}
                className="service-card service-card-link content-topic-card"
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <h3>{c.name}</h3>
                <p>{c.detail}</p>
              </a>
            ),
          )}
        </div>
        <div className="about-card content-body-card connect-areas-card">
          <h2 className="section-title-2">{af ? 'Diensareas' : 'Service areas'}</h2>
          <p className="about-text">{SERVICE_AREAS.join(' · ')}</p>
          <p className="about-text">
            <a href={SITE_URL}>{SITE_URL.replace('https://', '')}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

function ReviewStrip({ lang }) {
  const af = lang === 'af'
  const picks = testimonials.filter((t) => t.lang === lang || lang === 'en').slice(0, 2)
  if (!picks.length) return null
  return (
    <section className="about content-reviews-section" aria-label={af ? 'Kliënte-terugvoer' : 'Client reviews'}>
      <div className="container">
        <h2 className="section-title">{af ? 'Wat kliënte sê' : 'What clients say'}</h2>
        <div className="content-reviews">
          {picks.map((t) => (
            <blockquote key={t.author} className="content-review-card">
              <p className="content-review-quote">“{t.quote}”</p>
              <footer>
                — {t.author}, {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookCta({ lang }) {
  const af = lang === 'af'
  return (
    <section className="services content-book-section">
      <div className="container">
        <div className="content-book-card">
          <h2 className="section-title">
            {af ? 'Bespreek ’n huisbesoek of aanlyn konsultasie' : 'Book a home visit or online consult'}
          </h2>
          <p className="content-book-lead">
            {af
              ? 'Kies huisbesoek, aanlyn video, of Stellenbosch — of stuur WhatsApp nou.'
              : 'Choose a home visit, online video, or Stellenbosch — or WhatsApp now.'}
          </p>
          <div className="content-cta-row">
            <a href={WHATSAPP_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <Link to={af ? '/af/boek/' : '/book/'} className="cta-button">
              {af ? 'Kort vorm' : 'Short form'}
            </Link>
          </div>
          <div className="content-link-row">
            <Link to={af ? '/af/huisbesoeke/' : '/home-visits/'}>
              {af ? 'Huisbesoeke' : 'Home visits'}
            </Link>
            <Link to={af ? '/af/aanlyn-konsultasie/' : '/online-consultation/'}>
              {af ? 'Aanlyn' : 'Online'}
            </Link>
            <Link to={af ? '/af/stellenbosch-kliniek/' : '/stellenbosch-clinic/'}>
              Stellenbosch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqBlock({ faqs, lang }) {
  if (!faqs?.length) return null
  return (
    <section className="about content-faq-section">
      <div className="container">
        <div className="about-card content-faq-card">
          <h2 className="section-title">FAQ</h2>
          {faqs.map((f) => (
            <details key={f.q} className="content-faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ContentPage({ page }) {
  const af = page.lang === 'af'
  const services = getServicePages(page.lang)
  const problems = getProblemPages(page.lang)

  return (
    <main className="content-page">
      <Seo page={page} />

      <section className="hero content-hero">
        <div className="container">
          <div className="hero-content">
            <p className="content-eyebrow">
              {page.credentials ||
                (af
                  ? 'Annette Nel, LC (CBI) · Stellenbosch'
                  : 'Annette Nel, LC (CBI) · Stellenbosch')}
            </p>
            <h1 className="hero-title content-page-title">{page.h1}</h1>
            <p className="hero-subtitle">{page.lead}</p>
            <div className="content-cta-row">
              <a href={WHATSAPP_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <Link to={af ? '/af/boek/' : '/book/'} className="cta-button">
                {af ? 'Bespreek' : 'Book'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {page.type === 'book' && (
        <section className="about">
          <div className="container">
            <div className="about-card content-form-card">
              <h2 className="section-title">{af ? 'Besprekingsvorm' : 'Booking form'}</h2>
              <BookingForm lang={page.lang} />
            </div>
          </div>
        </section>
      )}

      {page.body?.length > 0 && (
        <section className="about">
          <div className="container">
            <div className="about-card content-body-card">
              {page.body.map((para) => (
                <p key={para.slice(0, 48)} className="about-text">
                  {para}
                </p>
              ))}
              {page.includes && (
                <p className="speciality-includes">
                  <strong>
                    {af ? 'Hierdie sessie/pakket sluit in: ' : 'This session/package includes: '}
                  </strong>
                  {page.includes}
                </p>
              )}
              {page.type === 'speciality-session' && (
                <p className="about-text">
                  <Link
                    to={af ? '/af/spesialiteit-sessies/' : '/speciality-sessions/'}
                    className="blog-read-more"
                  >
                    {af ? '← Alle spesialiteit-sessies' : '← All speciality sessions'}
                  </Link>
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {page.type === 'speciality' && (
        <section className="services">
          <div className="container">
            <div className="services-grid content-topics-grid">
              {getSpecialitySessionPages(page.lang).map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="service-card service-card-link content-topic-card"
                >
                  <h3>{s.h1}</h3>
                  <p>{s.lead}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {(page.type === 'problem' ||
        page.type === 'service' ||
        page.type === 'about' ||
        page.type === 'speciality' ||
        page.type === 'speciality-session') && (
        <QuoteStrip seed={page.id} lang={page.lang} />
      )}

      {page.type === 'resources' && (
        <>
          <section className="services">
            <div className="container">
              <h2 className="section-title">{af ? 'Onderwerpe' : 'Topics'}</h2>
              <div className="services-grid content-topics-grid">
                {problems.map((p) => (
                  <Link key={p.path} to={p.path} className="service-card service-card-link content-topic-card">
                    <h3>{p.h1}</h3>
                    <p>{p.lead}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section id="articles" className="services">
            <div className="container">
              <h2 className="section-title">{af ? 'Artikels' : 'Articles'}</h2>
              <div className="services-grid content-topics-grid">
                {[...blogPosts]
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .map((post) => (
                    <Link
                      key={post.slug}
                      to={blogPath(post.slug)}
                      className="service-card service-card-link content-topic-card"
                    >
                      <p className="content-eyebrow" style={{ marginBottom: '0.5rem' }}>
                        {post.date} · {post.lang === 'af' ? 'Afrikaans' : 'English'}
                      </p>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
          <QuoteGallery lang={page.lang} />
        </>
      )}

      {page.type === 'connect' && <ConnectChannels lang={page.lang} />}

      {page.type === 'about' && (
        <section className="services">
          <div className="container">
            <h2 className="section-title">{af ? 'Dienste' : 'Services'}</h2>
            <div className="services-grid content-topics-grid">
              {services.map((s) => (
                <Link key={s.path} to={s.path} className="service-card service-card-link content-topic-card">
                  <h3>{s.h1}</h3>
                  <p>{s.lead}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.type === 'service' && (
        <section className="services">
          <div className="container">
            <h2 className="section-title">{af ? 'Algemene uitdagings' : 'Common challenges'}</h2>
            <div className="services-grid content-topics-grid">
              {problems.slice(0, 3).map((p) => (
                <Link key={p.path} to={p.path} className="service-card service-card-link content-topic-card">
                  <h3>{p.h1}</h3>
                  <p>{p.lead}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqBlock faqs={page.faqs} lang={page.lang} />

      {page.type !== 'connect' && <ReviewStrip lang={page.lang} />}

      {(page.type === 'problem' ||
        page.type === 'service' ||
        page.type === 'speciality' ||
        page.type === 'speciality-session') && <BookCta lang={page.lang} />}
    </main>
  )
}
