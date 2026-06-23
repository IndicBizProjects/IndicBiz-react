import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ProjectForm from '../components/contact/ProjectForm';
import StatsStrip from '../components/contact/StatsStrip';
import ProcessTimeline from '../components/contact/ProcessTimeline';
import ConnectSection from '../components/contact/ConnectSection';
import TestimonialsSection from '../components/contact/TestimonialsSection';

export default function ContactPage() {
  return (
    <div style={{ background: '#f6f5f2', minHeight: '100vh', paddingBottom: '4rem' }}>
      <ContactHero />
      <ProjectForm />
      <StatsStrip />
      <ProcessTimeline />
      <ConnectSection />
    </div>
  );
}
