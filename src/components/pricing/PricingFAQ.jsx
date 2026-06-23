import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "Why don't you have fixed prices?",
    a: "Every business has unique needs. A standard 5-page website for a local bakery requires vastly different engineering and design resources than a 5-page custom WebGL experience for a tech startup. Our ranges provide a realistic expectation, and we provide a fixed quote after our discovery call."
  },
  {
    q: "What is included in the support period?",
    a: "During your support period (1-3 months depending on the plan), we handle all bug fixes, security updates, minor content updates, and server maintenance. We also monitor your site's uptime and performance."
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Typically, we structure payments as 50% upfront to commence work, 25% at the design approval stage, and the final 25% upon launch. For larger custom projects, we can discuss milestone-based billing."
  },
  {
    q: "Will I be able to edit the website myself?",
    a: "Absolutely. If you choose our Premium or Custom plans, we integrate a user-friendly CMS (Content Management System) like Sanity, Strapi, or WordPress, and provide comprehensive training on how to update your content."
  },
  {
    q: "Do you provide hosting and domains?",
    a: "We do not sell domains directly, but we will guide you through purchasing one. For hosting, we deploy on modern, highly-scalable platforms like Vercel or AWS, and we set it all up for you. Hosting costs are typically billed directly to your card to ensure you retain full ownership."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        borderBottom: '1px solid rgba(15,41,30,0.1)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          color: 'var(--accent-dark)',
        }}
      >
        <span style={{ 
          fontFamily: "'Cormorant Garamond', serif", 
          fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', 
          fontWeight: 700 
        }}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: 32, height: 32,
            borderRadius: '50%',
            background: isOpen ? 'var(--accent-dark)' : 'rgba(154,175,66,0.1)',
            color: isOpen ? 'white' : 'var(--accent-dark)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
          }}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              paddingBottom: '1.5rem',
              maxWidth: 800,
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PricingFAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section ref={ref} style={{ padding: '4rem 5% 8rem', maxWidth: 900, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: 'var(--accent-dark)',
          marginBottom: '1rem',
          letterSpacing: '-1.5px'
        }}>
          Common <em style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>Questions</em>
        </h2>
      </motion.div>

      <div>
        {FAQS.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} index={idx} />
        ))}
      </div>
    </section>
  );
}
