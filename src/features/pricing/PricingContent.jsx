import SlideSection from '../../components/motion/SlideSection'
import { CTASection, Eyebrow, Section, SectionHeader } from '../../components/primitives/ui'
import { ENGAGEMENT_INCLUSIONS, PRICING_CTA, PRICING_FAQS, PRICING_HERO, PRICING_PLANS, PRICING_SECTIONS } from '../../data/pricing'
import styles from '../shared/pages.module.css'

export default function PricingContent() {
  return (
    <>
      <SlideSection className={styles.compactHero}>
        <Eyebrow>{PRICING_HERO.eyebrow}</Eyebrow>
        <h1>{PRICING_HERO.title}</h1>
        <p>{PRICING_HERO.description}</p>
      </SlideSection>
      <Section tone="surface">
        <SectionHeader {...PRICING_SECTIONS.plans} />
        <div className={styles.planGrid}>
          {PRICING_PLANS.map((plan) => (
            <article className={`${styles.plan} ${plan.featured ? styles.planFeatured : ''}`} key={plan.name}>
              <span>{plan.name}</span>
              <h2>{plan.price}</h2>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader {...PRICING_SECTIONS.inclusions} />
        <div className={styles.insightGrid}>
          {ENGAGEMENT_INCLUSIONS.map((item) => (
            <article className={styles.insightCard} key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeader {...PRICING_SECTIONS.faq} />
        <div className={styles.faq}>
          {PRICING_FAQS.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>
      <CTASection content={PRICING_CTA} />
    </>
  )
}
