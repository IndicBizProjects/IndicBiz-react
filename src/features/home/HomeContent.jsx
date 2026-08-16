import { motion } from 'framer-motion'
import { springHover, staggerContainer, fadeUp, viewportOnce } from '../../lib/motion'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import { Link } from '../../app/router'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import ScrollRevealText, { ScrollProgressText } from '../../components/motion/ScrollRevealText'
import CountUp from '../../components/motion/CountUp'
import MediaFrame from '../../components/layout/MediaFrame'
import SectionHead from '../../components/layout/SectionHead'
import { HOME_HERO, HOME_STATS, HOME_SECTIONS, HOME_CTA, PARTNERSHIP_PRINCIPLES } from '../../data/home'
import { SERVICES, SERVICE_PROCESS } from '../../data/services'
import { WORK_PROJECTS } from '../../data/work'
import { VALUES } from '../../data/about'
import { AboutIcon } from '../about/AboutIcons'

const ease = [0.16, 1, 0.3, 1]

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const COMPARE_US = [
  'Build lasting brand systems for growth',
  'Provide clarity, transparency, and action',
  'Focus on meaningful conversions',
  'Leverage modern tech and close collaboration',
  'Prioritize quality engagement',
  'Develop tailored strategies backed by research',
  'Continue optimizing after launch',
]

const COMPARE_OTHERS = [
  'Offer short-term marketing fixes',
  'Deliver reports without insight',
  'Focus on impressions',
  'Work with outdated tools',
  'Prioritize volume over value',
  'Use one-size-fits-all templates',
  'End the relationship after delivery',
]

const MARQUEE = ['Brand identity', 'Web experiences', 'Product design', 'Growth & SEO', 'Direct collaboration']

export default function HomeContent() {
  return (
    <motion.div className="ag-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Hero />
      <Marquee />
      <WhatWeDo />
      <Services />
      <Process />
      <Benefits />
      <Stats />
      <Comparison />
      <Testimonials />
      <Campaigns />
      <FinalCta />
    </motion.div>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="ag-section"
      style={{ paddingTop: 'clamp(8.5rem, 14vw, 11rem)', textAlign: 'center' }}
    >
      <div className="ag-wrap">
        <motion.p className="ag-eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {HOME_HERO.eyebrow}
        </motion.p>

        {/* Clip-path entrance on hero heading */}
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 0.95, delay: 0.08, ease }}
          style={{ overflow: 'hidden' }}
        >
          <h1 className="ag-h1 hm-hero-title" aria-label={HOME_HERO.title}>
            {HOME_HERO.titleLines.map((line, i) => (
              <ScrollRevealText
                key={line}
                text={line}
                reveal="slide"
                stagger={0.05}
                delay={0.08 + i * 0.18}
                as="span"
                className="hm-hero-line"
              />
            ))}
          </h1>
        </motion.div>

        <FadeIn delay={0.22} y={10}>
          <div className="ag-actions" style={{ justifyContent: 'center' }}>
            <MagneticBtn to={HOME_HERO.primaryAction.to} variant="dark" size="lg">{HOME_HERO.primaryAction.label}</MagneticBtn>
            <MagneticBtn to={HOME_HERO.secondaryAction.to} variant="light" size="lg">{HOME_HERO.secondaryAction.label}</MagneticBtn>
          </div>
        </FadeIn>

        {/* Hero image — clip-path box reveal */}
        <motion.div
          className="ag-card"
          style={{ marginTop: '3.25rem', padding: '0.7rem', overflow: 'hidden' }}
          initial={{ opacity: 0, clipPath: 'inset(12% 12% 12% 12% round 22px)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 22px)' }}
          transition={{ duration: 1.05, delay: 0.45, ease }}
          whileHover={{ scale: 1.012 }}
          transition_hover={{ ...springHover }}
        >
          <div className="ag-img-reveal" style={{ borderRadius: '22px' }}>
            <MediaFrame src="/media/indicbiz-hero.jpg" alt="IndicBiz studio workspace" radius="22px" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Marquee ──────────────────────────────────────────────────────────────────

function MarqueeItem({ item }) {
  return (
    <span className="ag-marquee-item">
      {item}
      <span className="ag-marquee-dot">·</span>
    </span>
  )
}

function Marquee() {
  const group = [...MARQUEE, ...MARQUEE]
  return (
    <div className="ag-marquee" aria-hidden="true">
      <div className="ag-marquee-track">
        <div className="ag-marquee-group">
          {group.map((item, i) => <MarqueeItem key={`a-${item}-${i}`} item={item} />)}
        </div>
        <div className="ag-marquee-group">
          {group.map((item, i) => <MarqueeItem key={`b-${item}-${i}`} item={item} />)}
        </div>
      </div>
    </div>
  )
}

// ─── WhatWeDo ─────────────────────────────────────────────────────────────────

function WhatWeDo() {
  return (
    <section className="ag-section">
      <div className="ag-wrap">
        <motion.div
          className="ag-card"
          style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', position: 'relative', overflow: 'hidden' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
        >
          {/* Ghost behind card */}
          <motion.span
            className="ag-ghost-text"
            aria-hidden="true"
            style={{ top: '-0.1em', left: '-0.02em', fontSize: 'clamp(5rem, 12vw, 10rem)', opacity: 0.04 }}
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1.0, ease }}
          >
            WE DO
          </motion.span>

          <FadeIn y={10}>
            <p className="ag-eyebrow" style={{ textAlign: 'center' }}>What we do</p>
          </FadeIn>
          <ScrollProgressText
            text="From strategy to execution, we help your brand stand out, attract the right customers, and grow with clarity."
            as="p"
            className="ag-h2"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              maxWidth: '28ch',
              margin: '0 auto 2rem',
              fontWeight: 600,
              justifyContent: 'center',
              textAlign: 'center',
            }}
          />
          <FadeInStagger className="ag-grid-3" stagger={0.1}>
            {HOME_STATS.map((s) => (
              <StaggerItem key={s.label}>
                <motion.div
                  className="ag-card ag-card-glow"
                  style={{ padding: '1.5rem', background: '#f7f7f7', textAlign: 'center' }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={springHover}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.4rem', letterSpacing: '-0.04em' }}>
                    <CountUp value={s.value} />
                  </p>
                  <p style={{ color: '#505050', marginTop: '0.35rem' }}>{s.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section className="ag-section ag-ghost-wrap" id="services" style={{ overflow: 'hidden' }}>
      <motion.span
        className="ag-ghost-text"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.038 }}
        viewport={viewportOnce}
      >
        SERVICES
      </motion.span>

      <div className="ag-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          eyebrow={HOME_SECTIONS.services.eyebrow}
          title={HOME_SECTIONS.services.title}
        />
        <FadeInStagger className="hm-services" stagger={0.1}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.id} className="hm-services-item">
              <motion.div
                whileHover={{ y: -6, scale: 1.016 }}
                transition={springHover}
                style={{ height: '100%' }}
              >
                <Link to={`/services/${service.id}`} className="hm-service-link">
                  <article className="ag-card hm-service ag-card-glow">
                    <div className="hm-service-media ag-img-reveal">
                      <MediaFrame src={service.image} alt={service.title} aspect="16 / 10" radius="0" />
                    </div>
                    <div className="hm-service-copy">
                      <span className="hm-service-num">{service.number}</span>
                      <h3>{service.title}</h3>
                      <p>{service.short}</p>
                      <span className="hm-service-cta">{HOME_SECTIONS.services.actionLabel} →</span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </FadeInStagger>
        <FadeIn delay={0.1}>
          <div className="ag-card hm-services-bar">
            <p>Need a custom engagement built around your growth strategy?</p>
            <div className="ag-actions">
              <MagneticBtn to={HOME_SECTIONS.about.actionTo} variant="light" size="sm">
                {HOME_SECTIONS.about.actionLabel}
              </MagneticBtn>
              <MagneticBtn to="/contact" variant="dark" size="sm">Reach Out To Us</MagneticBtn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Process ──────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section className="ag-section">
      <div className="ag-wrap">
        <div className="process-grid">
          <div>
            <SectionHead eyebrow="Process" title="Simple & scalable" description="A clear path from first conversation to a system you can own." ghost="HOW" />
            <FadeIn delay={0.1}>
              <MagneticBtn to="/contact" variant="dark" size="md">Get Started</MagneticBtn>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p style={{ marginTop: '2rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.15rem', maxWidth: '28ch' }}>
                "We create digital frameworks that help brands move faster and convert better."
              </p>
            </FadeIn>
          </div>
          <FadeInStagger stagger={0.12} className="process-steps">
            {SERVICE_PROCESS.map((step, i) => (
              <StaggerItem key={step.number}>
                <motion.div
                  className="ag-card ag-card-glow"
                  style={{ padding: '1.35rem 1.5rem', display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '1rem' }}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.07, duration: 0.55, ease }}
                  whileHover={{ y: -4, x: 4 }}
                  // override transition for whileHover only
                  {...{ transition: { ...springHover } }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#4d9096', fontSize: '1.25rem' }}>{step.number}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.35rem' }}>{step.title}</h3>
                    <p style={{ color: '#505050', lineHeight: 1.6 }}>{step.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}

// ─── Benefits ────────────────────────────────────────────────────────────────

function Benefits() {
  return (
    <section className="ag-section ag-ghost-wrap" id="benefits" style={{ overflow: 'hidden' }}>
      <motion.span
        className="ag-ghost-text"
        aria-hidden="true"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 0.038, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease }}
      >
        WHY US
      </motion.span>

      <div className="ag-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead eyebrow="Benefits" title="What working with us feels like" />
        <FadeInStagger className="hm-benefits" stagger={0.08}>
          {VALUES.map((v, i) => (
            <StaggerItem key={v.title}>
              <motion.article
                className={`ag-card hm-benefits-card ag-card-glow ${i % 2 ? 'ag-card-asymm-alt' : 'ag-card-asymm'}`}
                whileHover={{ y: -6, scale: 1.018 }}
                transition={springHover}
              >
                <div className="hm-benefits-top">
                  <span className="hm-benefits-icon" aria-hidden="true">
                    <AboutIcon name={v.icon} />
                  </span>
                  <span className="hm-benefits-num">{v.number}</span>
                </div>
                <h3>{v.title}</h3>
                <p className="hm-benefits-copy">{v.description}</p>
                <p className="hm-benefits-detail">{v.detail}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}

// ─── Stats ───────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section className="ag-section">
      <div className="ag-wrap">
        <div className="stats-grid">
          <div>
            <SectionHead eyebrow="About us" title="A small team, built for useful work" ghost="TEAM" />
            <FadeIn y={10}>
              <div style={{ margin: '-0.5rem 0 1.5rem' }}>
                <MagneticBtn to="/about" variant="dark" size="sm">Meet the studio</MagneticBtn>
              </div>
            </FadeIn>
            <FadeInStagger className="ag-grid-3" stagger={0.08}>
              {[
                { value: 6, label: 'Specialists', body: 'One focused team. No account-management layers.' },
                { value: 4, label: 'Capabilities', body: 'Brand, web, product and growth, connected.' },
                { value: 'Direct', label: 'Access', body: 'You work with the people making the work.' },
              ].map((s) => (
                <StaggerItem key={s.label}>
                  <motion.div
                    className="ag-card ag-card-glow"
                    style={{ padding: '1.5rem' }}
                    whileHover={{ y: -5, scale: 1.022 }}
                    transition={springHover}
                  >
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.05em' }}>
                      <CountUp value={s.value} />
                    </p>
                    <p style={{ fontWeight: 600, margin: '0.4rem 0 0.45rem' }}>{s.label}</p>
                    <p style={{ color: '#505050', lineHeight: 1.6, fontSize: '0.92rem' }}>{s.body}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>

          {/* Image with clip-path reveal */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(8% 8% 8% 8% round 28px)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 28px)' }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            whileHover={{ scale: 1.015 }}
            // transition for hover via springHover
            style={{ transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="ag-card ag-img-reveal" style={{ padding: '0.7rem', height: '100%', borderRadius: '28px' }}>
              <MediaFrame src="/media/indicbiz-collab.jpg" alt="A quiet collaboration table" aspect="4 / 5" radius="22px" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Comparison ───────────────────────────────────────────────────────────────

function Comparison() {
  return (
    <section className="ag-section ag-ghost-wrap" style={{ overflow: 'hidden' }}>
      <motion.span
        className="ag-ghost-text"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.038 }}
        viewport={viewportOnce}
        style={{ fontSize: 'clamp(5rem, 14vw, 12rem)' }}
      >
        US vs THEM
      </motion.span>

      <div className="ag-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead eyebrow="Comparison" title="Precision over basic" description="How we work, compared with a typical short-term agency engagement." />
        <FadeInStagger className="ag-grid-2" stagger={0.12}>
          <StaggerItem>
            <motion.div
              className="ag-card"
              style={{ padding: '2rem', background: '#0d2426', color: '#fff', boxShadow: 'none' }}
              whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(13,36,38,0.28)' }}
              transition={springHover}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.6rem' }}>IndicBiz</h3>
                <MagneticBtn to="/contact" variant="light" size="sm">Get Started</MagneticBtn>
              </div>
              {COMPARE_US.map((item, i) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.06 + i * 0.045, duration: 0.4, ease }}
                  style={{ padding: '0.7rem 0', borderTop: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.86)' }}
                >
                  ✓ {item}
                </motion.p>
              ))}
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.div
              className="ag-card"
              style={{ padding: '2rem' }}
              whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(13,36,38,0.1)' }}
              transition={springHover}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.6rem', marginBottom: '1.5rem', color: '#505050' }}>Others</h3>
              {COMPARE_OTHERS.map((item, i) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.06 + i * 0.045, duration: 0.4, ease }}
                  style={{ padding: '0.7rem 0', borderTop: '1px solid rgba(13,36,38,0.08)', color: '#505050' }}
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </StaggerItem>
        </FadeInStagger>
      </div>
    </section>
  )
}

// ─── Testimonials / Principles ────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="ag-section ag-ghost-wrap" style={{ overflow: 'hidden' }}>
      <motion.span
        className="ag-ghost-text"
        aria-hidden="true"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.038, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1.0, ease }}
      >
        TOGETHER
      </motion.span>

      <div className="ag-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          eyebrow={HOME_SECTIONS.partnership.eyebrow}
          title={HOME_SECTIONS.partnership.title}
        />
        <motion.div
          className="hm-together"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {PARTNERSHIP_PRINCIPLES.map((item, idx) => (
            <motion.article
              key={item.name}
              className={`hm-together-card${idx === 0 ? ' is-lead' : ''}`}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.016 }}
              transition={springHover}
            >
              <div>
                <p className="hm-together-num">{item.number}</p>
                <h3>{item.name}</h3>
              </div>
              <p className="hm-together-quote">{item.quote}</p>
              <p className="hm-together-role">{item.role}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Campaigns / Work shots ───────────────────────────────────────────────────

function Campaigns() {
  return (
    <section className="ag-section ag-ghost-wrap" id="campaigns" style={{ overflow: 'hidden' }}>
      <motion.span
        className="ag-ghost-text"
        aria-hidden="true"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 0.038, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1.0, ease }}
      >
        WORK
      </motion.span>

      <div className="ag-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hm-shots-head">
          <div>
            <FadeIn y={10}>
              <p className="ag-eyebrow">{HOME_SECTIONS.work.eyebrow}</p>
            </FadeIn>
            <ScrollRevealText
              text={HOME_SECTIONS.work.title}
              reveal="slide"
              stagger={0.045}
              as="h2"
              className="ag-h2 hm-shots-title"
            />
          </div>
          <FadeIn delay={0.12}>
            <MagneticBtn to={HOME_SECTIONS.work.actionTo} variant="dark" size="sm">
              {HOME_SECTIONS.work.actionLabel}
            </MagneticBtn>
          </FadeIn>
        </div>

        <FadeInStagger className="hm-shots-row" stagger={0.08}>
          {WORK_PROJECTS.slice(0, 3).map((project) => (
            <StaggerItem key={project.id} className="hm-shots-item">
              <motion.div
                whileHover={{ y: -4, scale: 1.012 }}
                transition={springHover}
                style={{ height: '100%' }}
              >
                <Link to={`/work/${project.id}`} className="hm-shot" data-cursor="view">
                  <div className="hm-shot-stage">
                    <img src={project.gallery?.[0] || project.image} alt={project.imageAlt} />
                  </div>
                  <p className="hm-shot-meta">
                    <span>{project.number}</span>
                    {project.title}
                  </p>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}

// ─── FinalCta ────────────────────────────────────────────────────────────────

function FinalCta() {
  return (
    <section className="ag-section" style={{ paddingTop: 0 }}>
      <div className="ag-wrap">
        <motion.div
          className="ag-card final-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
        >
          {/* Ghost text inside CTA */}
          <motion.span
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-0.15em',
              right: '-0.02em',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(6rem, 14vw, 12rem)',
              letterSpacing: '-0.06em',
              color: '#0d2426',
              opacity: 0.04,
              pointerEvents: 'none',
              userSelect: 'none',
              whiteSpace: 'nowrap',
              lineHeight: 0.9,
            }}
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1.0, ease }}
          >
            START
          </motion.span>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="ag-eyebrow">{HOME_CTA.eyebrow}</p>
            <ScrollRevealText text={HOME_CTA.title} reveal="slide" stagger={0.04} as="h2" className="ag-h2" />
            <p className="ag-lede" style={{ margin: '0.9rem 0 1.5rem' }}>{HOME_CTA.description}</p>
            <MagneticBtn to={HOME_CTA.action.to} variant="dark" size="lg">{HOME_CTA.action.label}</MagneticBtn>
          </div>

          <motion.div
            className="ag-img-reveal"
            style={{ borderRadius: '22px', position: 'relative', zIndex: 1 }}
            initial={{ clipPath: 'inset(10% 10% 10% 10% round 22px)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 22px)' }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, delay: 0.15, ease }}
          >
            <MediaFrame src="/media/indicbiz-collab.jpg" alt="" aspect="4 / 3" radius="22px" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
