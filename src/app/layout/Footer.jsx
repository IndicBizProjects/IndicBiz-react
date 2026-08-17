import { Link } from '../router'
import { BRAND, FOOTER_GROUPS, SOCIAL_LINKS } from '../../data/site'
import BrandMark from '../../components/primitives/BrandMark'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="ib-footer">
      <div className="ag-wrap">
        <div className="ib-footer-inner">
          <div className="ib-footer-top">
            <div className="ib-footer-brand">
              <Link to="/" aria-label="IndicBiz home" className="ib-footer-logo">
                <BrandMark />
              </Link>
              <p>{BRAND.tagline}</p>
              <Link to="/contact" className="ib-footer-action">
                Start a project
              </Link>
            </div>

            {FOOTER_GROUPS.map((group) => (
              <nav key={group.title} className="ib-footer-col" aria-label={`${group.title} links`}>
                <p className="ib-footer-label">{group.title}</p>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="ib-footer-col">
              <p className="ib-footer-label">Contact</p>
              <ul>
                <li>
                  <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                </li>
                <li>
                  <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
                </li>
                <li>
                  <span>{BRAND.location}</span>
                </li>
              </ul>
              <div className="ib-footer-social">
                {SOCIAL_LINKS.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="ib-footer-bar">
            <small>© {year} {BRAND.legalName}</small>
          </div>
        </div>
      </div>
    </footer>
  )
}
