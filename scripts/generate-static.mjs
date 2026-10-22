/**
 * Post-build: write crawlable HTML for every page (meta + main content + same Vite assets).
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { pages, absoluteUrl } from '../src/data/pages.js'
import { blogPosts, blogPath, blogAbsoluteUrl } from '../src/data/blog.js'
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE,
  LOGO_PATH,
  FAVICON_PATH,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  GA_MEASUREMENT_ID,
} from '../src/config/site.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const indexHtml = readFileSync(join(dist, 'index.html'), 'utf8')

const assetTags = []
for (const m of indexHtml.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)) {
  assetTags.push(m[0])
}
for (const m of indexHtml.matchAll(/<link[^>]+href="(\/assets\/[^"]+)"[^>]*>/g)) {
  if (!assetTags.includes(m[0])) assetTags.push(m[0])
}
for (const m of indexHtml.matchAll(/<script[^>]+type="module"[^>]*><\/script>/g)) {
  assetTags.push(m[0])
}
for (const m of indexHtml.matchAll(/<script[^>]+src="(\/assets\/[^"]+)"[^>]*><\/script>/g)) {
  if (!assetTags.includes(m[0])) assetTags.push(m[0])
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildBody(page) {
  const paras = (page.body || []).map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')
  const faqs = (page.faqs || [])
    .map(
      (f) =>
        `<details><summary>${escapeHtml(f.q)}</summary><p>${escapeHtml(f.a)}</p></details>`,
    )
    .join('\n')

  if (page.type === 'home') {
    const af = page.lang === 'af'
    return `
<article>
  <h1>${escapeHtml(af ? "'Borsmelk is meer werd as pêrels!'" : "'Breastmilk is more valuable than pearls!'")}</h1>
  <p>${escapeHtml(page.lead)}</p>
  <h2>${af ? 'Dienste' : 'Services'}</h2>
  <ul>
    <li><a href="${af ? '/af/aanlyn-konsultasie/' : '/online-consultation/'}">${af ? 'Video-sessie' : 'Video session'}</a></li>
    <li><a href="${af ? '/af/stellenbosch-kliniek/' : '/stellenbosch-clinic/'}">${af ? 'Kom na my' : 'Come to me'}</a></li>
    <li><a href="${af ? '/af/huisbesoeke/' : '/home-visits/'}">${af ? 'Of ek kom na jou' : 'Or I come to you'}</a></li>
  </ul>
  <h2>${af ? 'Nog meer?' : 'Need more?'}</h2>
  <ul>
    <li>${af ? 'Teks-ondersteuning' : 'Text support'}</li>
    <li>${af ? 'Voorgeborete voorbereiding' : 'Pre-birth prep'}</li>
    <li><a href="${af ? '/af/spesialiteit-sessies/' : '/speciality-sessions/'}">${af ? 'Spesialiteit-sessie' : 'Speciality session'}</a></li>
  </ul>
  ${faqs ? `<section><h2>FAQ</h2>${faqs}</section>` : ''}
  <p><a href="${WHATSAPP_URL}">WhatsApp ${escapeHtml(PHONE_DISPLAY)}</a></p>
  <p><a href="${FACEBOOK_URL}">Facebook</a></p>
  <p><a href="${INSTAGRAM_URL}">Instagram</a></p>
</article>`
  }

  const sections =
    page.type === 'speciality'
      ? `<ul>${(page.sections || [])
          .map(
            (s) =>
              `<li><a href="${s.path}">${escapeHtml(s.heading)}</a> — ${escapeHtml(s.caption || '')}</li>`,
          )
          .join('\n')}</ul>`
      : (page.sections || [])
          .map(
            (s) => `<h2>${escapeHtml(s.heading)}</h2>
${(s.body || []).map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')}
${s.includes ? `<p><strong>${page.lang === 'af' ? 'Hierdie sessie/pakket sluit in: ' : 'This session/package includes: '}</strong>${escapeHtml(s.includes)}</p>` : ''}`,
          )
          .join('\n')
  const includes = page.includes
    ? `<p><strong>${page.lang === 'af' ? 'Hierdie sessie/pakket sluit in: ' : 'This session/package includes: '}</strong>${escapeHtml(page.includes)}</p>`
    : ''
  const resources =
    page.type === 'resources'
      ? `<h2>${page.lang === 'af' ? 'Onderwerpe' : 'Topics'}</h2>
<ul>${pages
          .filter((p) => p.type === 'problem' && p.lang === page.lang)
          .map((p) => `<li><a href="${p.path}">${escapeHtml(p.h1)}</a></li>`)
          .join('\n')}</ul>
<h2>${page.lang === 'af' ? 'Artikels' : 'Articles'}</h2>
<ul>${blogPosts
          .map(
            (p) =>
              `<li><a href="${blogPath(p.slug)}">${escapeHtml(p.title)}</a> — ${escapeHtml(p.description)}</li>`,
          )
          .join('\n')}</ul>`
      : ''

  const flyer = page.image
    ? `<p><img src="${page.image}" alt="${escapeHtml(page.imageAlt || page.h1)}"></p>`
    : ''

  return `
<article>
  <h1>${escapeHtml(page.h1)}</h1>
  <p>${escapeHtml(page.lead)}</p>
  ${flyer}
  ${paras}
  ${includes}
  ${resources}
  ${sections}
  ${faqs ? `<section><h2>FAQ</h2>${faqs}</section>` : ''}
  <p><a href="${WHATSAPP_URL}">WhatsApp ${escapeHtml(PHONE_DISPLAY)}</a></p>
  <p><a href="${escapeHtml(page.lang === 'af' ? '/af/boek/' : '/book/')}">${page.lang === 'af' ? 'Bespreek' : 'Book'}</a></p>
</article>`
}

function buildHead(page) {
  const url = absoluteUrl(page.path)
  const alt = absoluteUrl(page.hreflangPath)
  const lang = page.lang === 'af' ? 'af-ZA' : 'en-ZA'
  const altLang = page.lang === 'af' ? 'en-ZA' : 'af-ZA'
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: SITE_NAME,
        url: SITE_URL,
        telephone: '+27761836080',
        image: OG_IMAGE,
        logo: OG_IMAGE,
        sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Stellenbosch',
          addressRegion: 'Western Cape',
          addressCountry: 'ZA',
        },
      },
      {
        '@type': 'WebPage',
        url,
        name: page.title,
        description: page.description,
        inLanguage: lang,
      },
    ],
  }
  if (page.faqs?.length) {
    schema['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  return `
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(page.title)}</title>
<meta name="description" content="${escapeHtml(page.description)}" />
<link rel="icon" type="image/png" href="${FAVICON_PATH}" />
<link rel="apple-touch-icon" href="${FAVICON_PATH}" />
<link rel="canonical" href="${url}" />
<link rel="alternate" hreflang="${lang}" href="${url}" />
<link rel="alternate" hreflang="${altLang}" href="${alt}" />
<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
<meta property="og:title" content="${escapeHtml(page.title)}" />
<meta property="og:description" content="${escapeHtml(page.description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${SITE_NAME}" />
<meta property="og:locale" content="${page.lang === 'af' ? 'af_ZA' : 'en_ZA'}" />
<meta property="og:image" content="${page.image ? `${SITE_URL}${page.image}` : OG_IMAGE}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="${page.image ? `${SITE_URL}${page.image}` : OG_IMAGE}" />
<script type="application/ld+json">${JSON.stringify(schema)}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
</script>
${assetTags.join('\n')}
`
}

function writePage(page) {
  const html = `<!doctype html>
<html lang="${page.lang === 'af' ? 'af-ZA' : 'en-ZA'}">
<head>
${buildHead(page)}
</head>
<body>
<div id="root">${buildBody(page)}</div>
</body>
</html>
`
  if (page.path === '/') {
    writeFileSync(join(dist, 'index.html'), html)
    return
  }
  const dir = join(dist, page.path.replace(/^\//, '').replace(/\/$/, ''))
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
}

for (const page of pages) {
  writePage(page)
}

// /blog/ used to be the article index — articles now live under Help topics.
// Static redirect so the old URL keeps working on GitHub Pages.
mkdirSync(join(dist, 'blog'), { recursive: true })
writeFileSync(
  join(dist, 'blog', 'index.html'),
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Articles | PerleMama Lactation</title>
<link rel="canonical" href="${SITE_URL}/resources/#articles">
<meta http-equiv="refresh" content="0; url=/resources/#articles">
<meta name="robots" content="noindex, follow">
</head>
<body><p>Articles have moved to <a href="/resources/#articles">Help topics — Articles</a>.</p></body>
</html>
`,
)

for (const post of blogPosts) {
  writePage({
    path: blogPath(post.slug),
    lang: post.lang,
    hreflangPath: blogPath(post.slug),
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    h1: post.h1,
    lead: post.lead,
    body: post.body,
    image: post.image,
    imageAlt: post.imageAlt,
    faqs: [],
    type: 'blog',
  })
}

// SPA fallback for client-side routes not pre-generated
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))

// sitemap + robots + llms into dist (also kept in public for vite copy)
const allLocs = [
  ...pages.map((p) => absoluteUrl(p.path)),
  ...blogPosts.map((p) => blogAbsoluteUrl(p.slug)),
]
const urls = allLocs.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

const llms = `# PerleMama Lactation

> Bilingual (English & Afrikaans) breastfeeding support with Annette Nel, LC (CBI), based in Stellenbosch, Western Cape, South Africa.

Site: ${SITE_URL}
Phone / WhatsApp: ${PHONE_DISPLAY}
Facebook: ${FACEBOOK_URL}
Instagram: ${INSTAGRAM_URL}
Find me / link hub: ${SITE_URL}/find-me/

## Services

- Home visits: ${SITE_URL}/home-visits/
- Online consultation (South Africa): ${SITE_URL}/online-consultation/
- Stellenbosch in-person: ${SITE_URL}/stellenbosch-clinic/
- Afrikaans home: ${SITE_URL}/af/

## Blog

${blogPosts.map((p) => `- [${p.title}](${blogAbsoluteUrl(p.slug)})`).join('\n')}

## Booking

WhatsApp is the primary booking channel: ${WHATSAPP_URL}

## Notes

Annette Nel is a Lactation Counselor (LC, CBI) based in Stellenbosch.

Do not create thin keyword-only location URLs that duplicate service pages (e.g. /breastfeeding-help-stellenbosch when / and /stellenbosch-clinic/ already cover that intent).
`
writeFileSync(join(dist, 'llms.txt'), llms)

console.log(
  `Wrote ${pages.length + blogPosts.length} static pages + sitemap/robots/llms.txt`,
)
if (!existsSync(join(dist, 'assets'))) {
  console.warn('Warning: dist/assets missing — run vite build first')
}
