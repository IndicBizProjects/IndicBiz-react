import React from 'react';
import { PhoneCall, BarChart, FileSearch, FileText, Rocket } from 'lucide-react';

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We understand your business and goals.', icon: PhoneCall },
  { num: '02', title: 'Business Analysis', desc: 'In-depth research and competitor analysis.', icon: BarChart },
  { num: '03', title: 'Strategy & Plan', desc: 'We create the right strategy for you.', icon: FileSearch },
  { num: '04', title: 'Proposal', desc: 'Detailed proposal and project roadmap.', icon: FileText },
  { num: '05', title: 'Build & Launch', desc: 'Design, development and successful launch.', icon: Rocket },
];

export default function ProcessTimeline() {
  return (
    <section style={{ padding: '6rem 5%' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            color: '#0f291e', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            marginBottom: '1rem',
            lineHeight: 1
          }}>
            What happens next?
          </h2>
          <p style={{ 
            fontFamily: "'Space Grotesk', sans-serif",
            color: 'rgba(15, 41, 30, 0.6)',
            fontSize: '1.1rem'
          }}>
            Our proven process to turn your idea into reality.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem' 
        }}>
          {steps.map((item, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '2.5rem 2rem',
              borderRadius: 24,
              boxShadow: '0 4px 24px rgba(0,0,0,0.02)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '4rem', 
                fontWeight: 700, 
                color: 'rgba(141,159,112,0.1)',
                position: 'absolute',
                top: -10,
                right: -10,
                lineHeight: 1
              }}>{item.num}</div>
              
              <div style={{
                width: 48, height: 48, borderRadius: 16,
                background: 'rgba(141,159,112,0.15)',
                color: '#8d9f70',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <item.icon size={24} />
              </div>
              
              <h4 style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.2rem', 
                fontWeight: 700, 
                color: '#0f291e',
                marginBottom: '0.75rem'
              }}>{item.title}</h4>
              
              <p style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.95rem',
                color: 'rgba(15, 41, 30, 0.6)',
                lineHeight: 1.5
              }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
