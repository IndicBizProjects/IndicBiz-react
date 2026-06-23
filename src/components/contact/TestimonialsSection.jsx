import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [1, 2, 3, 4, 5, 6];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section-padding" style={{ overflow: 'hidden' }}>
      <h3 className="text-center" style={{ marginBottom: '3rem', color: 'var(--accent-dark)' }}>
        What our clients say
      </h3>

      <div className="marquee-container">
        <motion.div
          className="marquee-track"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {testimonials.map((i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="test-quote">"Indic Biz transformed our idea into a powerful digital presence. Highly recommended!"</p>
              <div className="test-author">
                <div className="test-avatar" style={{ background: `hsl(${i * 60}, 50%, 50%)` }}></div>
                <div className="test-info">
                  <strong>Rohit Sharma</strong>
                  <span>Founder, GreenMart</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
