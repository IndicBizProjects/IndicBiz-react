import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import ScrollRevealText from '../../components/motion/ScrollRevealText'
import MediaFrame from '../../components/layout/MediaFrame'
import { SERVICES, SERVICES_PAGE, SERVICE_PROCESS } from '../../data/services'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function ServicesContent() {
  return (
    <motion.div className="ag-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <ServicesHero />
      <ServiceChapters />
      <ProcessRail />
      <ServicesCta />
    </motion.div>
  )
}

function ServicesHero() {
  return (
    <section className="ag-section svc-hero">
      <div className="ag-wrap">
        <div className="svc-hero-grid">
          <div>
            <motion.p className="ag-eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              {SERVICES_PAGE.eyebrow}
            </motion.p>
            <ScrollRevealText
              text={SERVICES_PAGE.title}
              reveal="slide"
              stagger={0.05}
              delay={0.06}
              as="h1"
              className="ag-h1"
              style={{ maxWidth: '13ch', fontSize: 'clamp(2.8rem, 6.4vw, 5.2rem)' }}
            />
          </div>
          <FadeIn delay={0.2} y={16}>
            <p className="ag-lede" style={{ marginBottom: '1.75rem' }}>{SERVICES_PAGE.description}</p>
            <div className="svc-index">
              {SERVICES.map((service, i) => (
                <motion.a
                  key={service.id}
                  href={`#service-${service.id}`}
                  className="svc-index-link"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 6 }}
                >
                  <span>{service.number}</span>
                  {service.title}
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function ServiceChapters() {
  return (
    <section className="ag-section" style={{ paddingTop: 0 }}>
      <div className="ag-wrap svc-chapters">
        {SERVICES.map((service, i) => (
          <ServiceChapter key={service.id} service={service} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

function ServiceChapter({ service, reverse }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  })
  const numberX = useTransform(scrollYProgress, [0, 1], reverse ? [24, -8] : [-24, 8])
  const numberOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.08, 0.16, 0.08])

  return (
    <article ref={ref} id={`service-${service.id}`} className={`svc-chapter${reverse ? ' is-reverse' : ''}`}>
      <motion.span className="svc-watermark" style={{ x: numberX, opacity: numberOpacity }} aria-hidden="true">
        {service.number}
      </motion.span>

      <motion.div
        className="svc-photo"
        initial={{ opacity: 0, clipPath: 'inset(8% 8% 8% 8% round 24px)' }}
        whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 24px)' }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="ag-card svc-photo-frame ag-img-reveal" style={{ borderRadius: '22px' }}>
          <MediaFrame src={service.image} alt={service.title} aspect="4 / 5" radius="22px" />
        </div>
      </motion.div>

      <FadeIn y={22} delay={0.08} className="svc-copy">
        <p className="ag-eyebrow">{service.number} · Capability</p>
        <h2 className="ag-h2" style={{ fontSize: 'clamp(2rem, 4vw, 3.1rem)', marginBottom: '0.85rem' }}>
          {service.title}
        </h2>
        <p className="ag-lede" style={{ marginBottom: '1.5rem' }}>{service.overview}</p>

        <ul className="svc-outcomes">
          {service.outcomes.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <div className="svc-chips">
          {service.deliverables.slice(0, 3).map((item) => (
            <span key={item} className="svc-chip">{item}</span>
          ))}
        </div>

        <div className="ag-actions" style={{ marginTop: '1.75rem' }}>
          <MagneticBtn to={`/services/${service.id}`} variant="dark" size="md">
            {SERVICES_PAGE.rowAction}
          </MagneticBtn>
        </div>
      </FadeIn>
    </article>
  )
}

function ProcessRail() {
  return (
    <section className="ag-section">
      <div className="ag-wrap">
        <FadeIn y={14}>
          <p className="ag-eyebrow">{SERVICES_PAGE.process.eyebrow}</p>
        </FadeIn>
        <ScrollRevealText
          text={SERVICES_PAGE.process.title}
          reveal="slide"
          stagger={0.04}
          as="h2"
          className="ag-h2"
          style={{ marginBottom: '0.75rem' }}
        />
        <FadeIn delay={0.1}>
          <p className="ag-lede" style={{ marginBottom: '2rem' }}>{SERVICES_PAGE.process.description}</p>
        </FadeIn>

        <div className="ag-card svc-rail">
          <FadeInStagger className="svc-rail-grid" stagger={0.1}>
            {SERVICE_PROCESS.map((step, i) => (
              <StaggerItem key={step.number}>
                <div className="svc-rail-step">
                  <span className="svc-rail-num">{step.number}</span>
                  {i < SERVICE_PROCESS.length - 1 && <span className="svc-rail-line" aria-hidden="true" />}
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}

function ServicesCta() {
  return (
    <section className="ag-section" style={{ paddingTop: 0 }}>
      <div className="ag-wrap">
        <FadeIn y={24}>
          <div className="ag-card svc-cta">
            <div>
              <p className="ag-eyebrow">{SERVICES_PAGE.cta.eyebrow}</p>
              <h2 className="ag-h2" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', maxWidth: '14ch' }}>
                {SERVICES_PAGE.cta.title}
              </h2>
              <p className="ag-lede" style={{ margin: '0.9rem 0 0' }}>{SERVICES_PAGE.cta.description}</p>
            </div>
            <MagneticBtn to={SERVICES_PAGE.cta.action.to} variant="dark" size="lg">
              {SERVICES_PAGE.cta.action.label}
            </MagneticBtn>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
