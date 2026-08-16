import { motion } from 'framer-motion'
import { useRouter } from '../../app/routerContext'
import PageHero from '../../components/layout/PageHero'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import { SERVICES } from '../../data/services'
import ServiceFlagshipContent from './ServiceFlagshipContent'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function ServiceDetailContent() {
  const { pathname } = useRouter()
  const id = pathname.split('/').filter(Boolean).pop()
  const service = SERVICES.find((s) => s.id === id)

  if (!service) {
    return (
      <motion.div className="ag-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <PageHero eyebrow="Services" title="Service not found" description="This capability is not in the current offering." />
        <section className="ag-section" style={{ paddingTop: 0, textAlign: 'center' }}>
          <MagneticBtn to="/services" variant="dark" size="md">Back to all services</MagneticBtn>
        </section>
      </motion.div>
    )
  }

  return <ServiceFlagshipContent service={service} />
}
