import { ArrowUpRight } from 'lucide-react'
import { Link } from '../router'
import { BRAND, FOOTER_GROUPS, SITE_UI, SOCIAL_LINKS } from '../../data/site'
import styles from './layout.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <p className={styles.footerBrand}>{BRAND.name}</p>
          <p className={styles.footerTagline}>{BRAND.tagline}</p>
        </div>
        {FOOTER_GROUPS.map((group) => (
          <nav key={group.title} aria-label={`${group.title} links`}>
            <p className={styles.footerLabel}>{group.title}</p>
            {group.links.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </nav>
        ))}
        <div>
          <p className={styles.footerLabel}>{SITE_UI.contactGroup}</p>
          <a className={styles.footerEmail} href={`mailto:${BRAND.email}`}>
            {BRAND.email} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <p>{BRAND.location}</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <small>© {new Date().getFullYear()} {BRAND.legalName}</small>
        <div>
          {SOCIAL_LINKS.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
