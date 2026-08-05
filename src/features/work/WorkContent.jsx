import { useMemo, useState } from 'react'
import { Link } from '../../app/router'
import SlideSection from '../../components/motion/SlideSection'
import { CTASection, Eyebrow, Section, SectionHeader } from '../../components/primitives/ui'
import {
  WORK_CTA,
  WORK_FILTERS,
  WORK_HERO,
  WORK_METHOD,
  WORK_PROJECTS,
  WORK_SECTIONS,
  WORK_UI,
} from '../../data/work'
import styles from '../shared/pages.module.css'

export default function WorkContent() {
  const [filter, setFilter] = useState('all')

  const projects = useMemo(
    () => (filter === 'all' ? WORK_PROJECTS : WORK_PROJECTS.filter((project) => project.serviceId === filter)),
    [filter],
  )

  return (
    <>
      <SlideSection className={styles.compactHero}>
        <Eyebrow>{WORK_HERO.eyebrow}</Eyebrow>
        <h1>{WORK_HERO.title}</h1>
        <p>{WORK_HERO.description}</p>
      </SlideSection>

      <Section tone="surface">
        <SectionHeader {...WORK_SECTIONS.projects} />
        <div className={styles.choices} role="group" aria-label={WORK_UI.filterLabel}>
          {WORK_FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.choice} ${filter === item.id ? styles.choiceSelected : ''}`}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </Section>

      {projects.map((project) => (
        <Section key={project.id} style={{ '--service-accent': project.accent }}>
          <article className={styles.workProject}>
            <figure className={styles.workVisual}>
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className={styles.workProjectMeta}>
              <span>{project.number}</span>
              <p>{project.category}</p>
              <h2>{project.title}</h2>
              <p className={styles.workProjectSummary}>{project.summary}</p>
              <div className={styles.toolkit}>
                {project.focus.map((item) => (
                  <span key={item} className={styles.focusTag}>{item}</span>
                ))}
              </div>
              <div className={styles.workLinks}>
                <Link className={styles.textLinkInline} to={`/services/${project.serviceId}`}>
                  {WORK_UI.relatedService}
                </Link>
                {project.websiteUrl && (
                  <a className={styles.textLinkInline} href={project.websiteUrl} target="_blank" rel="noreferrer">
                    {WORK_UI.visitWebsite}
                  </a>
                )}
              </div>
            </div>
            <div className={styles.workProjectDetails}>
              <div>
                <Eyebrow>{WORK_UI.challenge}</Eyebrow>
                <p>{project.challenge}</p>
              </div>
              <div>
                <Eyebrow>{WORK_UI.approach}</Eyebrow>
                <p>{project.approach}</p>
              </div>
              <div>
                <Eyebrow>{WORK_UI.outcome}</Eyebrow>
                <p>{project.outcome}</p>
              </div>
            </div>
          </article>
        </Section>
      ))}

      <Section tone="surface">
        <SectionHeader {...WORK_SECTIONS.method} />
        <div className={styles.insightGrid}>
          {WORK_METHOD.map((item) => (
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

      <CTASection content={WORK_CTA} />
    </>
  )
}
