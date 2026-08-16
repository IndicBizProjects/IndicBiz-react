import { motion } from 'framer-motion'
import MagneticBtn from '../components/primitives/MagneticBtn'
import { NOT_FOUND } from '../data/site'

export default function NotFoundPage() {
  return (
    <motion.div
      className="ag-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center' }}
    >
      <section className="ag-section" style={{ width: '100%', textAlign: 'center' }}>
        <div className="ag-wrap">
          <div className="ag-card" style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            <p className="ag-eyebrow">Error</p>
            <p className="ag-h1" style={{ fontSize: 'clamp(5rem, 16vw, 10rem)', marginBottom: '0.5rem' }}>{NOT_FOUND.code}</p>
            <h1 className="ag-h2" style={{ marginBottom: '0.85rem' }}>{NOT_FOUND.title}</h1>
            <p className="ag-lede" style={{ margin: '0 auto 2rem' }}>
              The page you are looking for does not exist or has moved to a new address.
            </p>
            <div className="ag-actions" style={{ justifyContent: 'center' }}>
              <MagneticBtn to={NOT_FOUND.action.to} variant="dark" size="lg">{NOT_FOUND.action.label}</MagneticBtn>
              <MagneticBtn to="/contact" variant="light" size="lg">Contact us</MagneticBtn>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
