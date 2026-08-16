import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '../../app/router'
import { DataIcon } from '../../data/mappers/icons'
import SlideSection from '../motion/SlideSection'
import MagneticBtn from './MagneticBtn'
import styles from './ui.module.css'

export function Container({ children, className = '' }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}

export function Section({ children, tone = 'light', className = '', id, style }) {
  return (
    <SlideSection id={id} tone={tone} className={className} style={style}>
      {children}
    </SlideSection>
  )
}

export function Eyebrow({ children, inverse = false }) {
  return <p className={`${styles.eyebrow} ${inverse ? styles.eyebrowInverse : ''}`}>{children}</p>
}

export function SectionHeader({ eyebrow, title, description, inverse = false, align = 'left' }) {
  return (
    <header className={`${styles.sectionHeader} ${styles[align]}`}>
      <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p className={inverse ? styles.mutedInverse : styles.muted}>{description}</p>}
    </header>
  )
}

export function ButtonLink({ to, children, variant = 'primary' }) {
  const tone = variant === 'accent' || variant === 'primary' || variant === 'dark' ? 'dark' : 'light'
  return (
    <MagneticBtn to={to} variant={tone} size="md">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </MagneticBtn>
  )
}

export function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function ServiceCard({ service, actionLabel }) {
  return (
    <article className={styles.serviceCard} style={{ '--card-accent': service.accent }}>
      <div className={styles.cardMeta}>
        <span>{service.number}</span>
        <DataIcon name={service.icon} size={22} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <Link to={`/services/${service.id}`} className={styles.textLink}>
        {actionLabel} <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </article>
  )
}

export function ProcessGrid({ steps }) {
  return (
    <ol className={styles.processGrid}>
      {steps.map((step) => (
        <li key={step.number}>
          <span>{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  )
}

export function CTASection({ content }) {
  return (
    <Section>
      <div className={styles.cta}>
        <div>
          <Eyebrow inverse>{content.eyebrow}</Eyebrow>
          <h2>{content.title}</h2>
        </div>
        <div className={styles.ctaAction}>
          <p>{content.description}</p>
          <ButtonLink to={content.action.to} variant="accent">{content.action.label}</ButtonLink>
        </div>
      </div>
    </Section>
  )
}
