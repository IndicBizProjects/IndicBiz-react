import SlideSection from '../components/motion/SlideSection'
import { Eyebrow } from '../components/primitives/ui'
import { BRAND, LOGO_PAGE } from '../data/site'
import styles from '../features/shared/pages.module.css'

export default function LogoPage() {
  return (
    <SlideSection className={styles.compactHero}>
      <Eyebrow>{LOGO_PAGE.eyebrow}</Eyebrow>
      <h1>{BRAND.name}</h1>
      <p>{LOGO_PAGE.title} {LOGO_PAGE.description}</p>
    </SlideSection>
  )
}
