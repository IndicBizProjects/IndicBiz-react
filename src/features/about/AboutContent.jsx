import { motion } from 'framer-motion'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import { ABOUT_HERO, VALUES, TEAM, STORY, ABOUT_SECTIONS, ABOUT_CTA } from '../../data/about'
import { Link } from '../../app/router'
import Particles from '../../components/backgrounds/Particles/Particles'
import DecryptedText from '../../components/motion/DecryptedText'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export default function AboutContent() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-dark)',
          color: 'var(--ink-inv)',
          padding: 'calc(var(--header-height) + clamp(4rem, 8vw, 7rem)) var(--layout-gutter) clamp(5rem, 10vw, 9rem)',
          overflow: 'hidden',
          position: 'relative',
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        
        {/* Soft radial gradient to ensure text readability */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(circle at center, transparent 0%, var(--bg-dark) 80%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
          <FadeIn>
            <Eyebrow light>About IndicBiz</Eyebrow>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'var(--text-hero)',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: 'var(--ink-inv)',
                maxWidth: '18ch',
                marginTop: '1rem',
              }}
            >
              <DecryptedText 
                text="An independent studio for ambitious businesses."
                speed={40}
                maxIterations={15}
                animateOn="inViewHover"
                revealDirection="center"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body-lg)',
                color: 'var(--ink-inv-soft)',
                maxWidth: '52ch',
                lineHeight: 1.7,
                marginTop: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              We are a small, senior team working across strategy, identity, design and engineering. We work directly with founders, leaders and operators — without the account management layers that slow things down.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: 'var(--bg-canvas)', padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn>
            <Eyebrow>Our philosophy</Eyebrow>
          </FadeIn>

          <FadeInStagger stagger={0.12}>
            {[
              { num: '01', title: 'Clarity over complexity.', body: 'The best digital work is never complicated for its own sake. We pursue the simplest solution that fully solves the real problem.' },
              { num: '02', title: 'Decisions over deliverables.', body: 'A great process makes decisions visible and fast. We use deliverables as a means to that end — not as the goal itself.' },
              { num: '03', title: 'Outcomes over outputs.', body: 'We measure success by what changed for the business, not by how many things were produced.' },
              { num: '04', title: 'Craft over convention.', body: 'Good taste, careful thinking and genuine craft are always worth the extra effort they require.' },
            ].map((p) => (
              <StaggerItem key={p.num}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '3rem 1fr',
                    gap: '2rem',
                    padding: 'clamp(2rem, 4vw, 3rem) 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--accent-dark)', paddingTop: '0.3rem' }}>
                    {p.num}
                  </span>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.04em', color: 'var(--ink)', marginBottom: '0.75rem' }}>
                      {p.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: '52ch' }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-dark)', color: 'var(--ink-inv)', padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-headline)', letterSpacing: '-0.04em', color: 'var(--ink-inv)', marginBottom: '2rem', maxWidth: '18ch' }}>
              Want to work together?
            </h2>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: 'var(--radius-pill)',
                background: 'var(--accent)', color: 'var(--ink)',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.95rem', textDecoration: 'none',
              }}
            >
              Start a project
            </Link>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
