import SlideSection from '../components/motion/SlideSection'
import { ButtonLink } from '../components/primitives/ui'
import { NOT_FOUND } from '../data/site'
import styles from '../features/shared/pages.module.css'

export default function NotFoundPage() {
  return (
    <SlideSection>
      <div className={styles.notFound}>
        <strong>{NOT_FOUND.code}</strong>
        <h1>{NOT_FOUND.title}</h1>
        <ButtonLink to={NOT_FOUND.action.to}>{NOT_FOUND.action.label}</ButtonLink>
      </div>
    </SlideSection>
  )
}
