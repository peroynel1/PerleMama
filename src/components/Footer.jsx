import { Link } from 'react-router-dom'
import {
  CBI_BADGE_PATH,
  CBI_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LACSA_LOGO_PATH,
  LACSA_URL,
  PHONE_DISPLAY,
  SITE_NAME,
  WHATSAPP_URL,
} from '../config/site'

export default function Footer({ lang = 'en' }) {
  const af = lang === 'af'
  const home = af ? '/af/' : '/'
  const book = af ? '/af/boek/' : '/book/'
  const about = af ? '/af/oor-my/' : '/about/'
  const findMe = af ? '/af/vind-my/' : '/find-me/'

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{SITE_NAME}</p>
          <p>Annette Nel, LC (CBI)</p>
          <p>Stellenbosch, Western Cape, South Africa</p>
          <p>
            <a href={`tel:+27761836080`}>{PHONE_DISPLAY}</a>
          </p>
          <p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            {' · '}
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            {' · '}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>
        <div>
          <p>
            <Link to={home}>{af ? 'Tuis' : 'Home'}</Link>
          </p>
          <p>
            <Link to={about}>{af ? 'Oor my' : 'About'}</Link>
          </p>
          <p>
            <Link to={book}>{af ? 'Bespreek' : 'Book'}</Link>
          </p>
          <p>
            <Link to={findMe}>{af ? 'Vind my' : 'Find me'}</Link>
          </p>
          <p>
            <Link to={af ? '/' : '/af/'}>{af ? 'English' : 'Afrikaans'}</Link>
          </p>
        </div>
        <div>
          <p className="footer-copy">
            © {new Date().getFullYear()} {SITE_NAME}. perlemamalactation.co.za
          </p>
          <div className="footer-badges">
            <a
              href={CBI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-badge"
            >
              <img
                src={CBI_BADGE_PATH}
                alt="Proud to be certified with Childbirth International"
                width={88}
                height={88}
                loading="lazy"
              />
            </a>
            <a
              href={LACSA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-badge"
            >
              <img
                src={LACSA_LOGO_PATH}
                alt="LACSA — Lactation Consultants of Southern & Africa"
                width={180}
                height={56}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
