import React from 'react';
import { CheckCircle2, Users, Clock, Star } from 'lucide-react';

const stats = [
  { Icon: CheckCircle2, value: '100+', label: 'Projects Delivered' },
  { Icon: Users, value: '50+', label: 'Happy Businesses' },
  { Icon: Clock, value: '24/7', label: 'Support Available' },
  { Icon: Star, value: '100%', label: 'Custom Solutions' },
];

export default function StatsStrip() {
  return (
    <section style={{ padding: '0 5% 4rem' }}>
      <div style={{ 
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'
      }}>
        {stats.map(({ Icon, value, label }) => (
          <div key={label} style={{
            background: 'transparent',
            display: 'flex', alignItems: 'center', gap: '1.5rem'
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(141,159,112,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#8d9f70'
            }}>
              <Icon size={24} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: '#0f291e', lineHeight: 1, marginBottom: '0.25rem' }}>{value}</h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', color: 'rgba(15,41,30,0.6)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
