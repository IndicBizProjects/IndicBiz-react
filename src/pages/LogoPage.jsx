import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import MagneticBtn from '../components/primitives/MagneticBtn'
import { BRAND, LOGO_PAGE } from '../data/site'
import BrandMark from '../components/primitives/BrandMark'

export default function LogoPage() {
  return (
    <motion.div className="ag-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageHero eyebrow={LOGO_PAGE.eyebrow} title={BRAND.name} description={`${LOGO_PAGE.title} ${LOGO_PAGE.description}`} />
      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <div className="ag-card" style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.05em' }}>
              <BrandMark />
            </p>
            <p className="ag-lede" style={{ margin: '1rem auto 2rem' }}>{BRAND.tagline}</p>
            <MagneticBtn to="/" variant="dark" size="md">Return home</MagneticBtn>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
