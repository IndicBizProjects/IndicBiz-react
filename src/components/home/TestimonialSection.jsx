import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "IndicBiz completely transformed our digital presence. Their attention to detail and aesthetic sense is unmatched. We saw a 300% increase in engagement within the first month.",
    author: "Sarah Jenkins",
    role: "CEO, Aura Fintech",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Working with them felt like an extension of our own team. They don't just build websites; they craft immersive experiences that tell your brand's true story.",
    author: "David Chen",
    role: "Founder, Lumina Skincare",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "The animations they added to our platform set us apart from every competitor. Truly world-class engineering and design that makes our product shine.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Nova Tech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const paginate = (newDirection) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) return (prev + 1) % TESTIMONIALS.length;
      return (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    });
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(8px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(8px)',
    }),
  };

  return (
    <div style={{ background: '#f6f5f2', paddingBottom: '4rem' }}>
      <section 
        style={{ 
          padding: 'clamp(5rem, 10vw, 10rem) 5%', 
          background: '#0a1710', // Deep premium dark green to match Ecosystem
          margin: '0 3%',
          borderRadius: 48,
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 32px 64px rgba(0,0,0,0.08)',
        }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
      {/* Background elegant gradient mesh */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 
          'radial-gradient(circle at 20% 0%, rgba(154,175,66,0.08) 0%, transparent 50%),' +
          'radial-gradient(circle at 80% 100%, rgba(15,41,30,0.5) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(154,175,66,0.15)',
            color: 'var(--accent-light)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            padding: '0.4rem 1rem',
            borderRadius: 50,
            marginBottom: '1.5rem',
            fontFamily: "'Space Grotesk', sans-serif"
          }}>
            Client Voices
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-1.5px',
            lineHeight: 1,
            color: 'white',
          }}>
            Don't Just Take <em style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>Our Word</em> For It.
          </h2>
        </motion.div>

        {/* Carousel */}
        <div style={{ position: 'relative', minHeight: 400 }}>
          <Quote 
            size={120} 
            color="rgba(154,175,66,0.06)" 
            style={{ position: 'absolute', top: -40, left: -20, zIndex: 0 }} 
          />
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 150, damping: 25 }, opacity: { duration: 0.4 }, filter: { duration: 0.4 } }}
              style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '2.5rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--accent-light)" color="var(--accent-light)" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                color: 'white',
                lineHeight: 1.3,
                marginBottom: '3rem',
                fontStyle: 'italic',
                maxWidth: 800,
              }}>
                "{TESTIMONIALS[currentIndex].quote}"
              </p>
              
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <img 
                  src={TESTIMONIALS[currentIndex].image} 
                  alt={TESTIMONIALS[currentIndex].author}
                  style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(154,175,66,0.3)' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '0.2rem',
                  }}>
                    {TESTIMONIALS[currentIndex].author}
                  </h4>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                  }}>
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                  setIsAutoPlaying(false);
                }}
                style={{
                  width: i === currentIndex ? 32 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === currentIndex ? 'var(--accent-light)' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  padding: 0
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              onClick={() => paginate(-1)}
              style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', cursor: 'pointer', transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => paginate(1)}
              style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', cursor: 'pointer', transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
      </section>
    </div>
  );
}
