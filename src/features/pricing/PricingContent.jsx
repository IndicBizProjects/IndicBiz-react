import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import SectionHead from '../../components/layout/SectionHead'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import ScrollRevealText from '../../components/motion/ScrollRevealText'
import { viewportOnce } from '../../lib/motion'
import { PRICING_HERO, PRICING_PLANS, PRICING_FAQS, ENGAGEMENT_INCLUSIONS, PRICING_CTA } from '../../data/pricing'

const ease = [0.16, 1, 0.3, 1]
const springCard = { type: 'spring', stiffness: 340, damping: 26 }
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function PricingContent() {
  return (
    <motion.div className="ag-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero eyebrow={PRICING_HERO.eyebrow} title={PRICING_HERO.title} description={PRICING_HERO.description} />

      {/* ─── Plans ─────────────────────────────────────────────────────── */}
      <section className="ag-section ag-ghost-wrap" style={{ paddingTop: 0, overflow: 'hidden' }}>
        <motion.span
          className="ag-ghost-text"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.038 }}
          viewport={viewportOnce}
          style={{ fontSize: 'clamp(6rem, 15vw, 13rem)' }}
        >
          PLANS
        </motion.span>

        <div className="ag-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <FadeInStagger className="ag-grid-3" stagger={0.1}>
            {PRICING_PLANS.map((plan, i) => (
              <StaggerItem key={plan.name}>
                <motion.div
                  className="ag-card ag-card-glow"
                  style={{
                    padding: '2rem',
                    outline: plan.featured ? '2px solid #0d2426' : 'none',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.08, duration: 0.65, ease }}
                  whileHover={{ y: -8, scale: 1.022, boxShadow: '0 32px 64px rgba(13,36,38,0.13)' }}
                  // separate transition for hover
                  {...{ transition: springCard }}
                >
                  {/* Ghost plan number */}
                  <motion.span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: '-0.1em',
                      right: '-0.02em',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'clamp(4rem, 10vw, 8rem)',
                      letterSpacing: '-0.06em',
                      color: '#0d2426',
                      opacity: 0.04,
                      lineHeight: 1,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, ease }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </motion.span>

                  {plan.featured && <p className="ag-eyebrow">Popular</p>}
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem' }}>{plan.name}</h3>

                  <motion.p
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.2rem', letterSpacing: '-0.04em', margin: '0.6rem 0' }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease }}
                  >
                    {plan.price}
                  </motion.p>

                  <p style={{ color: '#505050', marginBottom: '1.25rem' }}>{plan.description}</p>
                  <MagneticBtn to="/contact" variant={plan.featured ? 'dark' : 'light'} size="sm">Get Started</MagneticBtn>

                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                    {plan.features.map((f, fi) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.2 + fi * 0.04, duration: 0.4, ease }}
                        style={{ padding: '0.55rem 0', borderTop: '1px solid rgba(13,36,38,0.08)' }}
                      >
                        ✓ {f}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ─── Inclusions ───────────────────────────────────────────────────── */}
      <section className="ag-section ag-ghost-wrap" style={{ overflow: 'hidden' }}>
        <motion.span
          className="ag-ghost-text"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.038 }}
          viewport={viewportOnce}
          style={{ fontSize: 'clamp(5rem, 13vw, 11rem)' }}
        >
          ALWAYS
        </motion.span>

        <div className="ag-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHead eyebrow="Every engagement" title="The essentials are never extras" />
          <FadeInStagger className="ag-grid-2" stagger={0.1}>
            {ENGAGEMENT_INCLUSIONS.map((item, i) => (
              <StaggerItem key={item.number}>
                <motion.div
                  className="ag-card ag-card-glow"
                  style={{ padding: '1.75rem', height: '100%' }}
                  whileHover={{ y: -6, scale: 1.018 }}
                  transition={springCard}
                >
                  <p className="ag-eyebrow">{item.number}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#505050' }}>{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ─── FAQs ────────────────────────────────────────────────────────── */}
      <section className="ag-section">
        <div className="ag-wrap">
          <SectionHead eyebrow="FAQs" title="Questions & answers" />
          <div className="ag-card" style={{ padding: '1.5rem 2rem' }}>
            {PRICING_FAQS.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.055, duration: 0.45, ease }}
                whileHover={{ x: 4 }}
                style={{ padding: '1rem 0', borderBottom: '1px solid rgba(13,36,38,0.08)', cursor: 'default' }}
              >
                <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>{faq.question}</p>
                <p style={{ color: '#505050' }}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="ag-card"
            style={{ marginTop: '1rem', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(13,36,38,0.1)' }}
          >
            <div>
              <p className="ag-eyebrow">{PRICING_CTA.eyebrow}</p>
              <p style={{ fontWeight: 600 }}>{PRICING_CTA.title}</p>
            </div>
            <MagneticBtn to={PRICING_CTA.action.to} variant="dark" size="sm">{PRICING_CTA.action.label}</MagneticBtn>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
