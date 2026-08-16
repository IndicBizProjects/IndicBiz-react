import { motion } from 'framer-motion'
import { Link } from '../../app/router'
import { useRouter } from '../../app/routerContext'
import PageHero from '../../components/layout/PageHero'
import MediaFrame from '../../components/layout/MediaFrame'
import SitePreview from '../../components/layout/SitePreview'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import FadeIn from '../../components/motion/FadeIn'
import WorkField from './WorkField'
import { WORK_PROJECTS, WORK_UI, WORK_CTA } from '../../data/work'
import { SERVICES } from '../../data/services'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.45 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function WorkDetailContent() {
  const { pathname } = useRouter()
  const projectId = pathname.split('/').filter(Boolean).pop()
  const project = WORK_PROJECTS.find((p) => p.id === projectId)

  if (!project) {
    return (
      <motion.div className="ag-page wk-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <WorkField />
        <PageHero eyebrow="Work" title="Project not found" description="This engagement is not in the selected work archive." />
        <section className="ag-section" style={{ paddingTop: 0, textAlign: 'center' }}>
          <MagneticBtn to="/work" variant="dark" size="md">Back to our work</MagneticBtn>
        </section>
      </motion.div>
    )
  }

  const relatedService = SERVICES.find((s) => s.id === project.serviceId)
  const related = WORK_PROJECTS.filter((p) => p.id !== project.id)
  const chapters = [
    { id: 'challenge', number: '01', heading: WORK_UI.challenge, body: project.challenge },
    { id: 'approach', number: '02', heading: WORK_UI.approach, body: project.approach },
    { id: 'outcome', number: '03', heading: WORK_UI.outcome, body: project.outcome },
  ]

  return (
    <motion.div className="ag-page wk-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <WorkField />
      <section className="wd-hero">
        <div className="wk-hero-veil" aria-hidden="true" />
        <div className="ag-wrap">
          <FadeIn y={8} duration={0.5}>
            <Link to="/work" className="wd-back">← All work</Link>
          </FadeIn>

          <div className="wd-hero-grid">
            <div className="wd-hero-copy">
              <motion.p className="ag-eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                {project.number} · {project.category}
              </motion.p>
              <motion.h1
                className="ag-h1 wd-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {project.title}
              </motion.h1>
              <motion.p
                className="ag-lede wd-lede"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {project.summary}
              </motion.p>
              <motion.div
                className="ag-actions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {project.websiteUrl && (
                  <MagneticBtn href={project.websiteUrl} variant="dark" size="lg" target="_blank" rel="noreferrer">
                    {WORK_UI.visitWebsite}
                  </MagneticBtn>
                )}
                <MagneticBtn to="/contact" variant="light" size="lg">Start a project</MagneticBtn>
              </motion.div>
            </div>

            <motion.div
              className="wd-hero-media"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="ag-card wd-hero-frame">
                <div className="wd-hero-photo">
                  <img src={project.image} alt={project.imageAlt} />
                </div>
              </div>
            </motion.div>
          </div>

          <dl className="wd-meta">
              {[
                { dt: 'Engagement', dd: project.category },
                { dt: WORK_UI.relatedService, dd: relatedService ? relatedService.title : '', to: relatedService ? `/services/${relatedService.id}` : null },
                { dt: 'Focus', dd: project.focus.join(' · ') },
                { dt: 'Live', dd: project.websiteUrl ? 'Open site ↗' : 'Private', href: project.websiteUrl },
              ].map((item, i) => (
                <motion.div
                  key={item.dt}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <dt>{item.dt}</dt>
                  <dd>
                    {item.to ? <Link to={item.to}>{item.dd}</Link> : item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">{item.dd}</a>
                    ) : item.dd}
                  </dd>
                </motion.div>
              ))}
            </dl>
        </div>
      </section>

      {project.websiteUrl && (
        <section className="ag-section">
          <div className="ag-wrap">
            <FadeIn y={12}>
              <p className="ag-eyebrow">{project.embeddable === false ? 'Site preview' : 'Live preview'}</p>
              <h2 className="ag-h2" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)', marginBottom: '0.6rem' }}>
                {project.embeddable === false ? 'A look at the live site' : 'Use the site in this page'}
              </h2>
              <p className="ag-lede" style={{ marginBottom: '1.5rem' }}>
                {project.embeddable === false
                  ? `${project.title} does not allow embedding, so we show captured screens. Open the live site to browse.`
                  : `Scroll, click and browse ${project.title} without leaving the case study.`}
              </p>
            </FadeIn>
            <FadeIn y={20}>
              <SitePreview
                url={project.websiteUrl}
                title={project.title}
                embeddable={project.embeddable !== false}
                screenshots={project.gallery}
                fallbackImage={project.image}
                fallbackAlt={project.imageAlt}
              />
            </FadeIn>
          </div>
        </section>
      )}

      <section className="ag-section" style={{ paddingTop: project.websiteUrl ? 0 : undefined }}>
        <div className="ag-wrap">
          <FadeIn y={16}>
            <div className="ag-card wd-quote">
              <p className="ag-eyebrow">Outcome</p>
              <p>“{project.outcome}”</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {project.highlights?.length > 0 && (
        <section className="ag-section" style={{ paddingTop: 0 }}>
          <div className="ag-wrap">
            <FadeIn y={12}>
              <p className="ag-eyebrow">What changed</p>
              <h2 className="ag-h2" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', marginBottom: '1.25rem' }}>
                The useful shifts from this engagement
              </h2>
            </FadeIn>
            <div className="wd-highlights">
              {project.highlights.map((item, i) => (
                <FadeIn key={item} y={16} delay={i * 0.06}>
                  <div className="ag-card wd-highlight">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <div className="wd-story">
            {chapters.map((chapter, i) => (
              <FadeIn key={chapter.id} y={22} delay={i * 0.06}>
                <article className="wd-chapter">
                  <p className="ag-eyebrow">{chapter.number} · {chapter.heading}</p>
                  <p>{chapter.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={14}>
            <p className="ag-eyebrow">Scope</p>
            <h2 className="ag-h2" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', marginBottom: '1.25rem' }}>
              What this engagement focused on
            </h2>
          </FadeIn>
          <div className="wd-scope">
            {project.focus.map((item, i) => (
              <FadeIn key={item} y={16} delay={i * 0.06}>
                <div className="ag-card wd-scope-card">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-wrap">
          <FadeIn y={12}>
            <p className="ag-eyebrow">More work</p>
            <h2 className="ag-h2" style={{ marginBottom: '1.5rem' }}>Continue through the archive</h2>
          </FadeIn>
          <div className="wd-related">
            {related.map((item) => (
              <FadeIn key={item.id} y={20}>
                <article className="ag-card wd-related-card">
                  <MediaFrame src={item.image} alt={item.imageAlt} aspect="16 / 10" radius="18px" />
                  <div className="wd-related-copy">
                    <p className="ag-eyebrow">{item.number} · {item.category}</p>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <MagneticBtn to={`/work/${item.id}`} variant="light" size="sm">View case</MagneticBtn>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={20}>
            <div className="ag-card wd-cta">
              <div>
                <p className="ag-eyebrow">{WORK_CTA.eyebrow}</p>
                <h2 className="ag-h2" style={{ fontSize: 'clamp(2rem, 4vw, 3.1rem)', maxWidth: '14ch' }}>{WORK_CTA.title}</h2>
                <p className="ag-lede" style={{ marginTop: '0.8rem' }}>{WORK_CTA.description}</p>
              </div>
              <div className="ag-actions">
                <MagneticBtn to="/work" variant="light" size="md">All work</MagneticBtn>
                <MagneticBtn to={WORK_CTA.action.to} variant="dark" size="md">{WORK_CTA.action.label}</MagneticBtn>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
