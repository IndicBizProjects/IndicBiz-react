import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--accent-dark)',
      color: 'white',
      padding: '4rem 5% 2rem',
      position: 'relative',
      overflow: 'hidden',
      marginTop: 'auto'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: 800,
        height: 400,
        background: 'radial-gradient(ellipse at center, rgba(154,175,66,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        position: 'relative', 
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        
        {/* Brand Column */}
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 style={{ 
              fontFamily: "'Outfit', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 800, 
              color: 'white',
              letterSpacing: '-1.5px',
              marginBottom: '1rem'
            }}>
              indic<span style={{ color: 'var(--accent-light)' }}>biz.</span>
            </h2>
          </Link>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.6,
            maxWidth: 280,
            marginBottom: '2rem'
          }}>
            Building premium digital experiences, web applications, and brand identities that leave a lasting impact.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a key={social} href="#" style={{
                color: 'white',
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                opacity: 0.8,
                transition: 'opacity 0.2s'
              }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.8}>
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.4rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: 'var(--accent-light)'
          }}>
            Navigation
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About Us', path: '/about' },
              { name: 'Pricing', path: '/pricing' }
            ].map((link) => (
              <Link key={link.name} to={link.path} style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.4rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: 'var(--accent-light)'
          }}>
            Let's Connect
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="mailto:hello@indicbiz.com" style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem',
              transition: 'color 0.2s'
            }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
              <Mail size={16} /> hello@indicbiz.com
            </a>
            <a href="tel:+919876543210" style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem',
              transition: 'color 0.2s'
            }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
              <Phone size={16} /> +91 98765 43210
            </a>
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem',
              lineHeight: 1.5
            }}>
              <MapPin size={16} style={{ marginTop: 2, flexShrink: 0 }} />
              123 Tech Park, Phase 2<br />Bangalore, KA 560001
            </div>
          </div>
        </div>

      </div>

      {/* Big typography and Copyright */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.5)',
          }}>
            &copy; {currentYear} IndicBiz. All rights reserved.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map((doc) => (
              <a key={doc} href="#" style={{
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                transition: 'color 0.2s'
              }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>
                {doc}
              </a>
            ))}
          </div>
        </div>
        
        {/* Massive background text */}
        <div style={{
          width: '100%',
          textAlign: 'center',
          marginTop: '2rem',
          overflow: 'hidden'
        }}>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(5rem, 15vw, 12rem)',
            fontWeight: 800,
            color: 'rgba(255,255,255,0.03)',
            lineHeight: 0.8,
            letterSpacing: '-4px',
            margin: 0,
            whiteSpace: 'nowrap'
          }}>
            indicbiz.
          </h1>
        </div>
      </div>
    </footer>
  );
}
