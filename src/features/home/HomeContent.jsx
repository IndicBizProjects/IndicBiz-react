import SlideSection from '../../components/motion/SlideSection'
import { ButtonLink, CTASection, Eyebrow, Section, SectionHeader, ServiceCard } from '../../components/primitives/ui'
import { EXAMPLE_ENGAGEMENTS, HOME_CTA, HOME_HERO, HOME_SECTIONS, HOME_STATS, PARTNERSHIP_PRINCIPLES } from '../../data/home'
import { SERVICES } from '../../data/services'
import styles from '../shared/pages.module.css'

export default function HomeContent() {
  return (
    <>
      <SlideSection className={styles.hero} contain={false}>
        <div className={styles.orb} aria-hidden="true" />
        <div className={`${styles.heroGrid} ${styles.slideInner}`}>
          <div>
            <Eyebrow>{HOME_HERO.eyebrow}</Eyebrow>
            <h1>{HOME_HERO.title}</h1>
          </div>
          <div className={styles.heroAside}>
            <p>{HOME_HERO.description}</p>
            <div className={styles.heroActions}>
              <ButtonLink to={HOME_HERO.primaryAction.to}>{HOME_HERO.primaryAction.label}</ButtonLink>
              <ButtonLink to={HOME_HERO.secondaryAction.to} variant="secondary">{HOME_HERO.secondaryAction.label}</ButtonLink>
            </div>
          </div>
        </div>
      </SlideSection>

      <Section>
        <div className={styles.stats}>
          {HOME_STATS.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader {...HOME_SECTIONS.services} />
        <div className={styles.cardGrid}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} actionLabel={HOME_SECTIONS.services.actionLabel} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader {...HOME_SECTIONS.work} />
        <div className={styles.workGrid}>
          {EXAMPLE_ENGAGEMENTS.map((project) => (
            <article className={styles.workCard} key={project.title}>
              <span>{project.category}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.outcome}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={`${styles.heroActions} ${styles.sectionAction}`}>
          <ButtonLink to={HOME_SECTIONS.work.actionTo} variant="secondary">
            {HOME_SECTIONS.work.actionLabel}
          </ButtonLink>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader {...HOME_SECTIONS.partnership} />
        <div className={styles.quoteGrid}>
          {PARTNERSHIP_PRINCIPLES.map((principle) => (
            <article className={styles.quote} key={principle.name}>
              <h3>{principle.name}</h3>
              <p>{principle.quote}</p>
              <footer>{principle.role}</footer>
            </article>
          ))}
        </div>
      </Section>

      <CTASection content={HOME_CTA} />
    </>
  )
}
