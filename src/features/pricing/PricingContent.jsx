import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import { PRICING_HERO, PRICING_PLANS, PRICING_FAQS, ENGAGEMENT_INCLUSIONS, PRICING_SECTIONS, PRICING_CTA } from '../../data/pricing'
import { Link } from '../../app/router'
import SplashCursor from '../../components/motion/SplashCursor'
import ShinyText from '../../components/motion/ShinyText'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export default function PricingContent() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-canvas)',
          padding: 'calc(var(--header-height) + clamp(4rem, 8vw, 7rem)) var(--layout-gutter) clamp(4rem, 8vw, 6rem)',
          borderBottom: '1px solid var(--line)',
          position: 'relative'
        }}
      >
        <SplashCursor 
          SIM_RESOLUTION={128} 
          DYE_RESOLUTION={1440}
          COLOR="#a4a29e" // Match our brand accents
        />
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto', position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
          <FadeIn>
            <Eyebrow>{PRICING_HERO.eyebrow}</Eyebrow>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'var(--text-hero)',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: 'var(--ink)',
                maxWidth: '16ch',
                marginTop: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <ShinyText text={PRICING_HERO.title} disabled={false} speed={3} />
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-mid)', maxWidth: '48ch', lineHeight: 1.7 }}>
              {PRICING_HERO.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section style={{ background: 'var(--bg-canvas)', padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <Eyebrow>{PRICING_SECTIONS.plans.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-headline)', letterSpacing: '-0.04em', color: 'var(--ink)', marginTop: '0.75rem' }}>
              {PRICING_SECTIONS.plans.title}
            </h2>
          </FadeIn>

          <FadeInStagger stagger={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {PRICING_PLANS.map((plan) => (
                <StaggerItem key={plan.name}>
                  <div
                    style={{
                      padding: 'clamp(2rem, 4vw, 2.75rem)',
                      borderRadius: 'var(--radius-lg)',
                      border: plan.featured ? 'none' : '1.5px solid var(--line-mid)',
                      background: plan.featured ? 'var(--bg-dark)' : 'var(--bg-surface)',
                      color: plan.featured ? 'var(--ink-inv)' : 'var(--ink)',
                      position: 'relative',
                      height: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    {plan.featured && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '1.25rem',
                          right: '1.25rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--ink)',
                          background: 'var(--accent)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-pill)',
                        }}
                      >
                        Most popular
                      </span>
                    )}
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: plan.featured ? 'var(--ink-inv-soft)' : 'var(--ink-soft)', marginBottom: '1rem' }}>
                      {plan.name}
                    </p>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.04em', color: plan.featured ? 'var(--ink-inv)' : 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1 }}>
                      {plan.price}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: plan.featured ? 'var(--ink-inv-soft)' : 'var(--ink-mid)', lineHeight: 1.6, marginBottom: '2rem' }}>
                      {plan.description}
                    </p>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                      {plan.features.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: plan.featured ? 'var(--ink-inv)' : 'var(--ink-mid)' }}>
                          <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.1em' }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-pill)',
                        background: plan.featured ? 'var(--accent)' : 'transparent',
                        color: plan.featured ? 'var(--ink)' : 'var(--ink)',
                        border: plan.featured ? 'none' : '1.5px solid var(--line-mid)',
                        fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.875rem',
                        textDecoration: 'none',
                      }}
                    >
                      Get started
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* Inclusions */}
      <section style={{ background: 'var(--bg-surface)', padding: 'clamp(4rem, 8vw, 7rem) var(--layout-gutter)', borderTop: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <Eyebrow>{PRICING_SECTIONS.inclusions.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-headline)', letterSpacing: '-0.04em', color: 'var(--ink)', marginTop: '0.75rem', maxWidth: '18ch' }}>
              {PRICING_SECTIONS.inclusions.title}
            </h2>
          </FadeIn>
          <FadeInStagger stagger={0.09}>
            {ENGAGEMENT_INCLUSIONS.map((item) => (
              <StaggerItem key={item.number}>
                <div style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '1.5rem', padding: '1.75rem 0', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--accent-dark)', paddingTop: '0.2rem' }}>{item.number}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '0.4rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--ink-mid)', lineHeight: 1.7 }}>{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bg-canvas)', padding: 'clamp(4rem, 8vw, 7rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <Eyebrow>{PRICING_SECTIONS.faq.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-headline)', letterSpacing: '-0.04em', color: 'var(--ink)', marginTop: '0.75rem' }}>
              {PRICING_SECTIONS.faq.title}
            </h2>
          </FadeIn>

          <FadeIn>
            <div>
              {PRICING_FAQS.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      width: '100%', padding: '1.5rem 0', background: 'none', border: 'none',
                      cursor: 'pointer', textAlign: 'left', gap: '1rem',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.5 }}>
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      style={{ flexShrink: 0, color: 'var(--ink-soft)', fontSize: '1.25rem', lineHeight: 1 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--ink-mid)', lineHeight: 1.7, paddingBottom: '1.5rem', maxWidth: '60ch' }}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-dark)', color: 'var(--ink-inv)', padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn>
            <Eyebrow light>{PRICING_CTA.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-headline)', letterSpacing: '-0.04em', color: 'var(--ink-inv)', marginTop: '0.75rem', marginBottom: '1.25rem', maxWidth: '18ch' }}>
              {PRICING_CTA.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-inv-soft)', maxWidth: '44ch', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {PRICING_CTA.description}
            </p>
            <Link
              to={PRICING_CTA.action.to}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', borderRadius: 'var(--radius-pill)', background: 'var(--accent)', color: 'var(--ink)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
            >
              {PRICING_CTA.action.label}
            </Link>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
