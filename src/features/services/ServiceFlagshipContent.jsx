import { motion } from 'framer-motion'
import { Link } from '../../app/router'
import MediaFrame from '../../components/layout/MediaFrame'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import ScrollRevealText from '../../components/motion/ScrollRevealText'
import { SERVICES, SERVICES_PAGE, SERVICE_DETAILS } from '../../data/services'
import neoPixelMark from '../../assets/Collab/NeoPixel.PNG'
import { springHover, tagPop } from '../../lib/motion'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.45 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const ease = [0.16, 1, 0.3, 1]

export default function ServiceFlagshipContent({ service }) {
  const detail = SERVICE_DETAILS[service.id]
  const others = SERVICES.filter((s) => s.id !== service.id)

  if (!detail) return null

  return (
    <motion.div className="ag-page bi-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section className="bi-hero">
        <div className="ag-wrap">
          <FadeIn y={8} duration={0.5}>
            <Link to="/services" className="bi-back">← All services</Link>
          </FadeIn>

          <div className="bi-hero-grid">
            <div className="bi-hero-copy">
              <p className="bi-watermark" aria-hidden="true">{service.number}</p>
              <motion.p className="ag-eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                Capability · {service.number}
              </motion.p>
              <ScrollRevealText
                text={service.title}
                reveal="slide"
                stagger={0.06}
                delay={0.06}
                as="h1"
                className="ag-h1 bi-title"
              />
              <motion.p
                className="bi-short"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16, ease }}
              >
                {service.short}
              </motion.p>
              <motion.p
                className="ag-lede bi-lede"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24, ease }}
              >
                {service.overview}
              </motion.p>
              <motion.div
                className="ag-actions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.34, ease }}
              >
                <MagneticBtn to="/contact" variant="dark" size="lg">{detail.heroAction}</MagneticBtn>
              </motion.div>
            </div>

            <motion.div
              className="bi-hero-media"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease }}
            >
              <div className="ag-card bi-hero-frame">
                <MediaFrame src={service.image} alt={service.title} aspect="4 / 5" radius="22px" />
              </div>
              <motion.div
                className="bi-hero-chip"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
              >
                <span>{service.number}</span>
                <p>{detail.chip}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={14}>
            <p className="ag-eyebrow">What we make</p>
            <h2 className="ag-h2" style={{ maxWidth: '16ch', marginBottom: '2rem' }}>
              {detail.featuredTitle}
            </h2>
          </FadeIn>
          <div className="bi-featured">
            {detail.featured.map((item, i) => (
              <FadeIn key={item.title} className="bi-featured-cell" delay={i * 0.07} y={18}>
                <motion.article
                  className={`ag-card bi-feature${i === 0 ? ' is-lead' : ''}`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={springHover}
                >
                  <div className="bi-feature-top">
                    <span>{item.number}</span>
                    {item.collab ? (
                      <span className="bi-collab-pill">
                        <img src={neoPixelMark} alt="" />
                        With NeoPixel Studio
                      </span>
                    ) : (
                      <span className="bi-collab-slot" aria-hidden="true" />
                    )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {detail.collab && (
        <section className="ag-section" style={{ paddingTop: 0 }}>
          <div className="ag-wrap">
            <FadeIn y={16}>
              <motion.article
                className="bi-collab"
                whileHover={{ y: -4, boxShadow: '0 24px 48px rgba(13,36,38,0.08)' }}
                transition={springHover}
              >
                <div className="bi-collab-mark">
                  <img src={neoPixelMark} alt={detail.collab.name} />
                </div>
                <div className="bi-collab-copy">
                  <p className="ag-eyebrow">{detail.collab.eyebrow}</p>
                  <h2>{detail.collab.name}</h2>
                  <p className="bi-collab-by">
                    {detail.collab.person}
                    <span aria-hidden="true">·</span>
                    {detail.collab.personRole}
                  </p>
                  <p>{detail.collab.body}</p>
                  <div className="bi-chips">
                    {detail.collab.covers.map((item) => (
                      <motion.span
                        key={item}
                        className="bi-chip"
                        variants={tagPop}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.06 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap bi-story">
          <FadeIn y={16}>
            <p className="ag-eyebrow">{detail.story.eyebrow}</p>
            <h2 className="ag-h2 bi-story-title">{detail.story.title}</h2>
          </FadeIn>
          <div className="bi-story-copy">
            <FadeIn y={14}>
              <p className="bi-story-lead">{detail.story.lead}</p>
            </FadeIn>
            {detail.story.paragraphs.map((paragraph) => (
              <FadeIn key={paragraph} y={12}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={14}>
            <p className="ag-eyebrow">{detail.kit.eyebrow}</p>
            <h2 className="ag-h2" style={{ maxWidth: '16ch', marginBottom: '0.85rem' }}>
              {detail.kit.title}
            </h2>
            <p className="ag-lede" style={{ marginBottom: '2rem' }}>{detail.kit.description}</p>
          </FadeIn>
          <FadeInStagger className="bi-kit" stagger={0.06}>
            {detail.kit.items.map((item) => (
              <StaggerItem key={item.title}>
                <motion.article
                  className="bi-kit-item"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={springHover}
                >
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="bi-band">
        <div className="ag-wrap">
          <p className="bi-band-eyebrow">Intended outcomes</p>
          <h2 className="bi-band-title">What the engagement is designed to leave behind.</h2>
          <FadeInStagger className="bi-outcomes" stagger={0.08}>
            {detail.outcomes.map((outcome, i) => (
              <StaggerItem key={outcome.title}>
                <motion.article
                  className="bi-outcome"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={springHover}
                >
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <p>{outcome.title}</p>
                  <p className="bi-outcome-body">{outcome.body}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-wrap">
          <FadeIn y={14}>
            <p className="ag-eyebrow">Where it helps</p>
            <h2 className="ag-h2" style={{ maxWidth: '16ch', marginBottom: '2rem' }}>
              A strong fit for these situations.
            </h2>
          </FadeIn>
          <FadeInStagger className="bi-situations" stagger={0.08}>
            {detail.situations.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.article
                  className="ag-card bi-situation"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={springHover}
                >
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={14}>
            <p className="ag-eyebrow">{detail.method.eyebrow}</p>
            <h2 className="ag-h2" style={{ maxWidth: '16ch', marginBottom: '0.85rem' }}>
              {detail.method.title}
            </h2>
            <p className="ag-lede" style={{ marginBottom: '2.25rem' }}>{detail.method.description}</p>
          </FadeIn>
          <div className="bi-spine">
            {detail.method.steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.06} y={14}>
                <motion.article
                  className="bi-spine-step"
                  whileHover={{ x: 6 }}
                  transition={springHover}
                >
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={14}>
            <p className="ag-eyebrow">{detail.working.eyebrow}</p>
            <h2 className="ag-h2" style={{ maxWidth: '14ch', marginBottom: '2rem' }}>
              {detail.working.title}
            </h2>
          </FadeIn>
          <div className="bi-split">
            <FadeIn y={16}>
              <motion.div
                className="ag-card bi-panel"
                whileHover={{ y: -4 }}
                transition={springHover}
              >
                <p className="ag-eyebrow">{detail.working.need.title}</p>
                <ul className="bi-list">
                  {detail.working.need.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
            <FadeIn y={16} delay={0.08}>
              <motion.div
                className="ag-card bi-panel"
                whileHover={{ y: -4 }}
                transition={springHover}
              >
                <p className="ag-eyebrow">{detail.working.leave.title}</p>
                <ul className="bi-list">
                  {detail.working.leave.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={16}>
            <motion.div
              className="ag-card bi-engage"
              whileHover={{ scale: 1.015 }}
              transition={springHover}
            >
              <div>
                <p className="ag-eyebrow">{detail.engagement.eyebrow}</p>
                <h2>{detail.engagement.title}</h2>
                <p>{detail.engagement.body}</p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={22}>
            <div className="bi-cta">
              <div className="bi-cta-copy">
                <p className="ag-eyebrow" style={{ color: service.accent || '#b9c97a' }}>{SERVICES_PAGE.cta.eyebrow}</p>
                <h2>{detail.ctaTitle}</h2>
                <p>{SERVICES_PAGE.cta.description}</p>
                <div className="ag-actions" style={{ marginTop: '1.75rem' }}>
                  <MagneticBtn to="/contact" variant="light" size="lg">{SERVICES_PAGE.cta.action.label}</MagneticBtn>
                  <MagneticBtn to="/services" variant="light" size="lg">All services</MagneticBtn>
                </div>
              </div>
              {detail.ctaImage && (
                <motion.div
                  className="ag-img-reveal bi-cta-media"
                  style={{ borderRadius: '22px', flex: '1 1 320px', maxWidth: '440px', minWidth: 'min(100%, 280px)' }}
                  initial={{ clipPath: 'inset(8% 8% 8% 8% round 22px)' }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 22px)' }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02 }}
                >
                  <MediaFrame src={detail.ctaImage} alt={detail.ctaTitle} aspect="4 / 3" radius="22px" />
                </motion.div>
              )}
            </div>

            <nav className="bi-more" aria-label="Other services">
              {others.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.07, duration: 0.45, ease }}
                >
                  <Link to={`/services/${item.id}`} className="bi-more-link">
                    <span>{item.number}</span>
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
