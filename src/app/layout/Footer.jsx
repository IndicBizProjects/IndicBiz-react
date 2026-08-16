import { motion } from 'framer-motion'
import { Link } from '../router'
import { BRAND, FOOTER_GROUPS, SOCIAL_LINKS } from '../../data/site'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import BrandMark from '../../components/primitives/BrandMark'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="ib-footer">
      <div className="ag-wrap">
        <motion.div
          className="ag-card ib-footer-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="footer-grid"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.6rem', letterSpacing: '-0.04em', color: '#0d2426', marginBottom: '0.75rem' }}>
                <BrandMark />
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#505050', lineHeight: 1.65, maxWidth: '28ch', marginBottom: '1.5rem' }}>
                {BRAND.tagline}
              </p>
              <MagneticBtn to="/contact" variant="dark" size="sm">
                Get Started Now
              </MagneticBtn>
            </motion.div>

            {FOOTER_GROUPS.map((group) => (
              <motion.nav key={group.title} aria-label={`${group.title} links`} variants={fadeUp}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#505050', marginBottom: '1rem' }}>
                  {group.title}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {group.links.map((link) => (
                    <Link key={link.to} to={link.to} style={{ fontSize: '0.95rem', color: '#0d2426' }}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            ))}

            <motion.div variants={fadeUp}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#505050', marginBottom: '1rem' }}>
                Social
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {SOCIAL_LINKS.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" style={{ fontSize: '0.95rem', color: '#0d2426' }}>
                    {social.label} ↗
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(13,36,38,0.08)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <small style={{ color: '#505050', fontSize: '0.78rem' }}>© {year} {BRAND.legalName}</small>
            <small style={{ color: '#505050', fontSize: '0.78rem' }}>{BRAND.email}</small>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
