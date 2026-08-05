import SlideSection from '../../components/motion/SlideSection'
import { CTASection, Eyebrow, Section, SectionHeader } from '../../components/primitives/ui'
import { ABOUT_CTA, ABOUT_HERO, ABOUT_SECTIONS, COLLABORATION_MODEL, STORY, TEAM, TOOLKIT, VALUES } from '../../data/about'
import styles from '../shared/pages.module.css'

export default function AboutContent() {
  return (
    <>
      <SlideSection className={styles.compactHero}>
        <Eyebrow>{ABOUT_HERO.eyebrow}</Eyebrow>
        <h1>{ABOUT_HERO.title}</h1>
        <p>{ABOUT_HERO.description}</p>
      </SlideSection>
      <Section tone="surface">
        <div className={styles.split}>
          <div>
            <Eyebrow>{ABOUT_SECTIONS.story.eyebrow}</Eyebrow>
            <h2>{STORY.title}</h2>
          </div>
          <div className={styles.prose}>
            {STORY.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader {...ABOUT_SECTIONS.values} />
        <div className={styles.valueGrid}>
          {VALUES.map((value) => (
            <article className={styles.valueCard} key={value.number}>
              <span>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeader {...ABOUT_SECTIONS.team} />
        <div className={styles.teamGrid}>
          {TEAM.map((member) => (
            <article className={styles.teamCard} key={member.name}>
              <div className={styles.initials}>{member.initials}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader {...ABOUT_SECTIONS.collaboration} />
        <div className={styles.insightGrid}>
          {COLLABORATION_MODEL.map((item) => (
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
      <Section tone="dark">
        <SectionHeader {...ABOUT_SECTIONS.toolkit} inverse />
        <div className={styles.toolkit}>
          {TOOLKIT.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </Section>
      <CTASection content={ABOUT_CTA} />
    </>
  )
}
