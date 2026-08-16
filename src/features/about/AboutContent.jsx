import { motion } from 'framer-motion'
import { Link } from '../../app/router'
import MediaFrame from '../../components/layout/MediaFrame'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import HoverLift from '../../components/motion/HoverLift'
import CountUp from '../../components/motion/CountUp'
import ScrollRevealText from '../../components/motion/ScrollRevealText'
import { SERVICES } from '../../data/services'
import {
  ABOUT_HERO,
  STORY,
  ABOUT_STATS,
  VALUES,
  TEAM,
  TOOLKIT_GROUPS,
  COLLABORATION_MODEL,
  ABOUT_SECTIONS,
  ABOUT_CTA,
  ABOUT_SPECIALISTS,
} from '../../data/about'
import { AboutIcon } from './AboutIcons'
import neoPixelMark from '../../assets/Collab/NeoPixel.PNG'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.45 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const ease = [0.16, 1, 0.3, 1]
const springHoverCard = { type: 'spring', stiffness: 360, damping: 26 }

export default function AboutContent() {
  return (
    <motion.div className="ag-page ab-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section className="ab-stage">
        <div className="ag-wrap">
          <header className="ab-stage-head">
            <div className="ab-stage-meta">
              <motion.p className="ag-eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                {ABOUT_HERO.eyebrow}
              </motion.p>
              <motion.p
                className="ab-stage-locale"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.5, ease }}
              >
                {ABOUT_HERO.location}
              </motion.p>
            </div>

            <h1 className="ag-h1 ab-stage-title" aria-label={ABOUT_HERO.title}>
              {ABOUT_HERO.titleLines.map((line, i) => (
                <ScrollRevealText
                  key={line}
                  text={line}
                  reveal="slide"
                  stagger={0.045}
                  delay={0.06 + i * 0.16}
                  as="span"
                  className="ab-stage-line"
                />
              ))}
            </h1>
          </header>

          <div className="ab-stage-board">
            <motion.figure
              className="ab-stage-photo"
              initial={{ opacity: 0, clipPath: 'inset(12% 12% 12% 12% round 32px)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 32px)' }}
              transition={{ duration: 0.95, delay: 0.18, ease }}
            >
              <MediaFrame
                src="/media/indicbiz-collab.jpg"
                alt="IndicBiz studio workspace"
                aspect="auto"
                radius="0"
                className="ab-stage-photo-media"
              />
            </motion.figure>

            <motion.article
              className="ab-stage-core"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28, ease }}
            >
              <div>
                <p className="ab-stage-short">{ABOUT_HERO.short}</p>
                <p className="ab-stage-body">{ABOUT_HERO.description}</p>
              </div>
              <div className="ag-actions ab-stage-actions">
                <MagneticBtn to={ABOUT_HERO.action.to} variant="light" size="sm">
                  {ABOUT_HERO.action.label}
                </MagneticBtn>
                <Link to={ABOUT_HERO.secondary.to} className="ab-stage-link">
                  {ABOUT_HERO.secondary.label}
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="ab-band">
        <div className="ag-wrap ab-stats">
          {ABOUT_STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} y={16}>
              <motion.article
                className="ab-stat"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 360, damping: 26 }}
              >
                <p className="ab-stat-value">
                  {stat.value === 'Direct' ? (
                    <CountUp value={stat.value} />
                  ) : (
                    <>0<CountUp value={Number(stat.value)} /></>
                  )}
                </p>
                <p className="ab-stat-label">{stat.label}</p>
                <p>{stat.body}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-wrap ab-story">
          <FadeIn y={16}>
            <p className="ag-eyebrow">{ABOUT_SECTIONS.story.eyebrow}</p>
          </FadeIn>
          <ScrollRevealText
            text={STORY.title}
            reveal="slide"
            stagger={0.05}
            as="h2"
            className="ag-h2 ab-story-title"
          />
          <div className="ab-story-copy">
            <FadeIn y={14}>
              <p className="ab-story-lead">{STORY.lead}</p>
            </FadeIn>
            {STORY.paragraphs.map((paragraph) => (
              <FadeIn key={paragraph} y={12}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section ag-ghost-wrap" style={{ paddingTop: 0, overflow: 'hidden' }}>
        <motion.span
          className="ag-ghost-text"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.038 }}
          viewport={{ once: true, amount: 0.1 }}
          style={{ fontSize: 'clamp(5rem, 14vw, 12rem)' }}
        >
          VALUES
        </motion.span>

        <div className="ag-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn y={14}>
            <p className="ag-eyebrow">{ABOUT_SECTIONS.values.eyebrow}</p>
            <h2 className="ag-h2" style={{ maxWidth: '14ch', marginBottom: '2rem' }}>
              {ABOUT_SECTIONS.values.title}
            </h2>
          </FadeIn>
          <FadeInStagger className="ab-values" stagger={0.08}>
            {VALUES.map((value) => (
              <StaggerItem key={value.number}>
                <motion.article
                  className="ag-card ab-value ag-card-glow"
                  whileHover={{ y: -6, scale: 1.018 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 26 }}
                >
                  <div className="ab-value-top">
                    <span className="ab-icon-wrap"><AboutIcon name={value.icon} /></span>
                    <span>{value.number}</span>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="ag-section ab-roster-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <div className="ab-roster-head">
            <FadeIn y={14}>
              <p className="ag-eyebrow">{ABOUT_SECTIONS.team.eyebrow}</p>
              <h2 className="ag-h2 ab-roster-title">{ABOUT_SECTIONS.team.title}</h2>
              <p className="ag-lede">
                You meet the people who will stay on the work, not a new account team at every stage.
              </p>
            </FadeIn>
            <FadeIn delay={0.12} y={10}>
              <p className="ab-roster-count" aria-hidden="true">06</p>
            </FadeIn>
          </div>

          <div className="ab-roster">
            {TEAM.map((member, i) => (
              <motion.article
                key={member.name}
                className={`ag-card ab-person is-${member.size} is-${member.tone}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.65, ease }}
                whileHover={{ y: -6 }}
              >
                <span className="ab-person-mono" aria-hidden="true">{member.initials}</span>
                <div className="ab-person-top">
                  <span className="ab-person-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ab-person-group">{member.group}</span>
                </div>
                <div className="ab-person-copy">
                  <h3>
                    <span>{member.first}</span>
                    <em>{member.last}</em>
                  </h3>
                  <p className="ab-person-role">{member.role}</p>
                  <p className="ab-person-focus">{member.focus}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={14}>
            <p className="ag-eyebrow">{ABOUT_SECTIONS.collaboration.eyebrow}</p>
            <h2 className="ag-h2" style={{ maxWidth: '16ch', marginBottom: '2rem' }}>
              {ABOUT_SECTIONS.collaboration.title}
            </h2>
          </FadeIn>
          <div className="ab-collab-grid">
            <motion.div
              className="ag-card ab-collab-photo ag-img-reveal"
              initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10% round 24px)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 24px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease }}
            >
              <MediaFrame src="/media/indicbiz-hero.jpg" alt="IndicBiz studio workspace" aspect="4 / 5" radius="20px" />
            </motion.div>
            <div className="ab-spine">
              {COLLABORATION_MODEL.map((item, i) => (
                <FadeIn key={item.number} delay={i * 0.07} y={14}>
                  <article className="ab-spine-step">
                    <span className="ab-icon-wrap"><AboutIcon name={item.icon} /></span>
                    <div>
                      <p className="ag-eyebrow">{item.number}</p>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <motion.article
            className="ab-specialist"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="ab-specialist-visual">
              <motion.div
                className="ab-specialist-mark"
                initial={{ clipPath: 'inset(10% 10% 10% 10% round 28px)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 28px)' }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
              >
                <img src={neoPixelMark} alt={ABOUT_SPECIALISTS.partner} />
              </motion.div>
              <p className="ab-specialist-partner">{ABOUT_SPECIALISTS.partner}</p>
            </div>

            <div className="ab-specialist-copy">
              <p className="ag-eyebrow">{ABOUT_SPECIALISTS.eyebrow}</p>
              <h2>{ABOUT_SPECIALISTS.title}</h2>
              <p className="ab-specialist-body">{ABOUT_SPECIALISTS.body}</p>

              <div className="ab-specialist-split">
                {ABOUT_SPECIALISTS.split.map((item) => (
                  <div key={item.label}>
                    <p className="ab-specialist-label">{item.label}</p>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="ab-specialist-chips">
                {ABOUT_SPECIALISTS.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>

              <MagneticBtn to="/services/brand-identity" variant="light" size="sm">
                See brand identity
              </MagneticBtn>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={14}>
            <p className="ag-eyebrow">{ABOUT_SECTIONS.toolkit.eyebrow}</p>
            <h2 className="ag-h2" style={{ maxWidth: '14ch', marginBottom: '0.75rem' }}>
              {ABOUT_SECTIONS.toolkit.title}
            </h2>
            <p className="ag-lede" style={{ marginBottom: '2rem' }}>
              Chosen because they help us ship clear, maintainable work, not because they are fashionable.
            </p>
          </FadeIn>
          <div className="ab-toolkit">
            {TOOLKIT_GROUPS.map((group, gi) => (
              <FadeIn key={group.title} y={16} delay={gi * 0.06}>
                <div className="ab-toolkit-group">
                  <p className="ab-toolkit-label">{group.title}</p>
                  <FadeInStagger className="ab-tools" stagger={0.03}>
                    {group.tools.map((tool) => (
                      <StaggerItem key={tool.name}>
                        <HoverLift y={-3}>
                          <article className="ab-tool">
                            <span className="ab-icon-wrap is-soft"><AboutIcon name={tool.icon} /></span>
                            <span>{tool.name}</span>
                          </article>
                        </HoverLift>
                      </StaggerItem>
                    ))}
                  </FadeInStagger>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={14}>
            <p className="ag-eyebrow">{ABOUT_SECTIONS.capabilities.eyebrow}</p>
            <h2 className="ag-h2" style={{ maxWidth: '14ch', marginBottom: '2rem' }}>
              {ABOUT_SECTIONS.capabilities.title}
            </h2>
          </FadeIn>
          <FadeInStagger className="ab-caps" stagger={0.07}>
            {SERVICES.map((service) => (
              <StaggerItem key={service.id}>
                <HoverLift>
                  <Link to={`/services/${service.id}`} className="ab-cap">
                    <span>{service.number}</span>
                    <strong>{service.title}</strong>
                    <em>{service.short}</em>
                  </Link>
                </HoverLift>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={22}>
          <div className="ab-cta">
            <div>
              <p className="ag-eyebrow" style={{ color: '#b9c97a' }}>{ABOUT_CTA.eyebrow}</p>
              <h2>{ABOUT_CTA.title}</h2>
              <p>{ABOUT_CTA.description}</p>
            </div>
            <div className="ag-actions">
              <MagneticBtn to={ABOUT_CTA.action.to} variant="light" size="lg">{ABOUT_CTA.action.label}</MagneticBtn>
              <MagneticBtn to="/services" variant="light" size="lg">All services</MagneticBtn>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
