import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import ScrollRevealText from '../../components/motion/ScrollRevealText'
import MediaFrame from '../../components/layout/MediaFrame'
import { WORK_HERO, WORK_FILTERS, WORK_PROJECTS, WORK_METHOD, WORK_CTA, WORK_SECTIONS, WORK_UI } from '../../data/work'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const usableFilters = WORK_FILTERS.filter(
  (filter) => filter.id === 'all' || WORK_PROJECTS.some((p) => p.serviceId === filter.id)
)

export default function WorkContent() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filtered = useMemo(
    () => (activeFilter === 'all' ? WORK_PROJECTS : WORK_PROJECTS.filter((p) => p.serviceId === activeFilter)),
    [activeFilter]
  )

  return (
    <motion.div className="ag-page wk-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section className="ag-section wk-hero">
        <div className="ag-wrap">
          <motion.p className="ag-eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            {WORK_HERO.eyebrow}
          </motion.p>
          <ScrollRevealText
            text={WORK_HERO.title}
            reveal="slide"
            stagger={0.045}
            delay={0.05}
            as="h1"
            className="ag-h1"
            style={{ maxWidth: '16ch', fontSize: 'clamp(2.6rem, 6vw, 4.8rem)' }}
          />
          <FadeIn delay={0.16} y={12}>
            <p className="ag-lede" style={{ marginTop: '1.1rem' }}>{WORK_HERO.description}</p>
          </FadeIn>

          <FadeIn delay={0.22} y={10}>
            <nav className="wk-jump" aria-label="Jump to a project">
              {WORK_PROJECTS.map((project) => (
                <a key={project.id} href={`#work-${project.id}`} className="wk-jump-link">
                  <span>{project.number}</span>
                  {project.title}
                </a>
              ))}
            </nav>
          </FadeIn>

          <FadeIn delay={0.28} y={8}>
            <div className="wk-filters" role="group" aria-label={WORK_UI.filterLabel}>
              {usableFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`btn3d-chip${activeFilter === filter.id ? ' is-active' : ''}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="ag-section wk-archive">
        <div className="ag-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="wk-cases"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {filtered.map((project, i) => (
                <CaseRow key={project.id} project={project} reverse={i % 2 === 1} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="ag-section wk-method-sec">
        <div className="ag-wrap">
          <FadeIn y={12}>
            <p className="ag-eyebrow">{WORK_SECTIONS.method.eyebrow}</p>
          </FadeIn>
          <ScrollRevealText
            text={WORK_SECTIONS.method.title}
            reveal="slide"
            stagger={0.04}
            as="h2"
            className="ag-h2"
            style={{ marginBottom: '1.75rem', maxWidth: '18ch' }}
          />
          <div className="ag-card wk-method">
            <FadeInStagger className="wk-method-grid" stagger={0.1}>
              {WORK_METHOD.map((item) => (
                <StaggerItem key={item.number}>
                  <div className="wk-method-item">
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <section className="ag-section wk-end">
        <div className="ag-wrap">
          <FadeIn y={22}>
            <div className="ag-card wk-cta">
              <div>
                <p className="ag-eyebrow">{WORK_CTA.eyebrow}</p>
                <h2 className="ag-h2" style={{ fontSize: 'clamp(2rem, 4vw, 3.1rem)', maxWidth: '14ch' }}>{WORK_CTA.title}</h2>
                <p className="ag-lede" style={{ marginTop: '0.85rem' }}>{WORK_CTA.description}</p>
              </div>
              <MagneticBtn to={WORK_CTA.action.to} variant="dark" size="lg">{WORK_CTA.action.label}</MagneticBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}

function CaseRow({ project, reverse }) {
  return (
    <motion.article
      id={`work-${project.id}`}
      className={`ag-card wk-case${reverse ? ' is-reverse' : ''}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(13,36,38,0.12)' }}
      style={{ transition: 'box-shadow 0.4s ease' }}
    >
      <motion.div
        className="wk-case-media ag-img-reveal"
        style={{ borderRadius: '20px' }}
        initial={{ clipPath: 'inset(6% 6% 6% 6% round 20px)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 20px)' }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <MediaFrame src={project.image} alt={project.imageAlt} aspect="16 / 11" radius="20px" />
      </motion.div>
      <div className="wk-case-copy">
        <p className="ag-eyebrow">{project.number} · {project.category}</p>
        <h2>{project.title}</h2>
        <p className="wk-case-summary">{project.summary}</p>

        <dl className="wk-facts">
          <div>
            <dt>{WORK_UI.challenge}</dt>
            <dd>{project.challenge}</dd>
          </div>
          <div>
            <dt>{WORK_UI.outcome}</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>

        <div className="wk-tags">
          {project.focus.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.045, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="ag-actions">
          <MagneticBtn to={`/work/${project.id}`} variant="dark" size="md">View case</MagneticBtn>
          {project.websiteUrl && (
            <MagneticBtn href={project.websiteUrl} variant="light" size="md" target="_blank" rel="noreferrer">
              {WORK_UI.visitWebsite}
            </MagneticBtn>
          )}
        </div>
      </div>
    </motion.article>
  )
}
