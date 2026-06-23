import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60',
  description = 'Skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
}) {
  const isPositionRight = position === 'right';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        margin: '6rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 5%'
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p style={{
          marginBottom: '1rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.3em',
          color: '#8d9f70',
          textTransform: 'uppercase',
          textAlign: isPositionRight ? 'right' : 'left',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          {jobPosition}
        </p>
      </motion.div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: isPositionRight ? 'row-reverse' : 'row'
      }}>
        {/* Portrait image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            height: '400px',
            width: '280px',
            flexShrink: 0,
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
          }} />
          <motion.img
            src={imageUrl}
            alt={`${firstName} ${lastName}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover'
            }}
          />
        </motion.div>

        {/* Info block */}
        <motion.div
          initial={{ opacity: 0, x: isPositionRight ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            left: isPositionRight ? '2rem' : '-2rem',
            zIndex: 2,
            display: 'flex',
            width: 'calc(100% - 240px)',
            flexDirection: 'column',
            gap: '3rem',
            alignItems: isPositionRight ? 'flex-end' : 'flex-start',
            textAlign: isPositionRight ? 'right' : 'left',
            background: 'rgba(246, 245, 242, 0.8)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}
        >
          <div>
            <p style={{
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              lineHeight: 1.1,
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: '#0f291e',
              fontFamily: "'Cormorant Garamond', serif",
              margin: 0
            }}>
              {firstName}
              <br />
              <span style={{ fontWeight: 600, fontStyle: 'italic', color: '#8d9f70' }}>{lastName}</span>
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            flexDirection: isPositionRight ? 'row-reverse' : 'row'
          }}>
            {/* Circular CTA */}
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                height: '4rem',
                width: '4rem',
                flexShrink: 0,
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: '1px solid rgba(15,41,30,0.2)',
                background: isHovered ? '#0f291e' : 'transparent',
                transition: 'background-color 0.3s ease'
              }}
            >
              <ArrowRight
                size={20}
                style={{
                  color: isHovered ? '#ffffff' : '#0f291e',
                  transform: isHovered ? (isPositionRight ? 'rotate(225deg)' : 'rotate(-45deg)') : (isPositionRight ? 'rotate(180deg)' : 'rotate(0deg)'),
                  transition: 'all 0.3s ease'
                }}
              />
            </motion.div>

            {/* Bio copy */}
            <div style={{ maxWidth: '300px' }}>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.6,
                color: 'rgba(15,41,30,0.6)',
                fontFamily: "'Space Grotesk', sans-serif",
                margin: 0
              }}>
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
