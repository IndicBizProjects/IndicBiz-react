import React from 'react';
import { ArrowUpRight, Send, Users } from 'lucide-react';

export default function ConnectSection() {
  return (
    <section style={{ padding: '0 5% 4rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          
          <div style={{
            background: 'white',
            padding: '4rem 3rem',
            borderRadius: 32,
            boxShadow: '0 4px 24px rgba(0,0,0,0.02)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div>
              <div style={{ width: 64, height: 64, borderRadius: 20, background: 'rgba(141,159,112,0.15)', color: '#8d9f70', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Send size={32} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: '#0f291e', marginBottom: '0.5rem', lineHeight: 1 }}>Start a Project</h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'rgba(15,41,30,0.6)', marginBottom: '2rem' }}>We usually reply within a few hours</p>
            </div>
            <div>
              <a href="mailto:hello@indicbiz.com" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#8d9f70', textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif" }}>hello@indicbiz.com</a>
            </div>
            <ArrowUpRight size={24} color="#8d9f70" style={{ position: 'absolute', top: '3rem', right: '3rem', opacity: 0.5 }} />
          </div>

          <div style={{
            background: '#0a1710', // Deep green for Careers
            padding: '4rem 3rem',
            borderRadius: 32,
            boxShadow: '0 4px 24px rgba(0,0,0,0.02)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: 'white'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div>
              <div style={{ width: 64, height: 64, borderRadius: 20, background: 'rgba(255,255,255,0.05)', color: '#8d9f70', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Users size={32} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1 }}>Join the Team</h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>We're always looking for amazing people</p>
            </div>
            <div>
              <a href="mailto:careers@indicbiz.com" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#8d9f70', textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif" }}>careers@indicbiz.com</a>
            </div>
            <ArrowUpRight size={24} color="#8d9f70" style={{ position: 'absolute', top: '3rem', right: '3rem', opacity: 0.5 }} />
          </div>

        </div>
      </div>
    </section>
  );
}
