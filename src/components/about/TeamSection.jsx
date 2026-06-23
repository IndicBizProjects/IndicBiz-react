import React from 'react';
import TeamMemberCard from '../ui/team-member-card';

const TEAM = [
  { 
    firstName: 'Joel',
    lastName: 'Daniel',
    jobPosition: 'CEO & Leadership',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    description: 'Guiding the vision and strategic direction of IndicBiz with over a decade of leadership experience in digital transformation.'
  },
  { 
    firstName: 'Naveen',
    lastName: '',
    jobPosition: 'CTO & Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    description: 'Architecting scalable, robust systems and driving technological innovation across our digital product portfolio.'
  },
  { 
    firstName: 'Kovid',
    lastName: 'Sai',
    jobPosition: 'Technical Member',
    imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop',
    description: 'Expert software engineer specializing in building high-performance, modern web applications and complex integrations.'
  },
  { 
    firstName: 'Sudarshan',
    lastName: '',
    jobPosition: 'Technical Member',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    description: 'Dedicated to writing clean, maintainable code and solving complex technical challenges with elegant solutions.'
  },
  { 
    firstName: 'Bhargav',
    lastName: '',
    jobPosition: 'Technical Member',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    description: 'Passionate about frontend development and creating seamless, intuitive user experiences that delight our clients.'
  },
  { 
    firstName: 'Venkatesh',
    lastName: '',
    jobPosition: 'Technical Member',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    description: 'Focused on optimizing performance and ensuring the highest standards of code quality and reliability.'
  },
];

export default function TeamSection() {
  return (
    <section style={{ padding: '8rem 0', background: '#f6f5f2' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            color: '#0f291e',
            lineHeight: 1,
            marginBottom: '1rem'
          }}>
            Meet the <em style={{ fontStyle: 'italic', color: '#8d9f70' }}>Minds</em>
          </h2>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.2rem',
            color: 'rgba(15,41,30,0.6)',
            maxWidth: 600,
            margin: '0 auto'
          }}>
            The passionate individuals who make the magic happen.
          </p>
        </div>

        <div>
          {TEAM.map((member, idx) => (
            <TeamMemberCard
              key={idx}
              position={idx % 2 === 0 ? 'left' : 'right'}
              jobPosition={member.jobPosition}
              firstName={member.firstName}
              lastName={member.lastName}
              imageUrl={member.imageUrl}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
