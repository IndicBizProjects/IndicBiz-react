import { motion } from 'framer-motion'
import HeroSection from './HeroSection'
import BrandStatement from './BrandStatement'
import WorkPreview from './WorkPreview'
import ServicesStrip from './ServicesStrip'
import ProcessSection from './ProcessSection'
import MarqueeStrip from '../../components/motion/MarqueeStrip'
import HomeCTA from './HomeCTA'

const MARQUEE_ITEMS = [
  'Brand Strategy', 'Visual Identity', 'Web Design', 'Web Development',
  'Digital Experiences', 'Product Design', 'Creative Direction', 'Growth & SEO',
]

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export default function HomeContent() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <MarqueeStrip items={MARQUEE_ITEMS} speed={50} dark={false} />
      <BrandStatement />
      <WorkPreview />
      <ServicesStrip />
      <ProcessSection />
      <HomeCTA />
    </motion.div>
  )
}
