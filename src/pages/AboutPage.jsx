import React from 'react';
import AboutHero from '../components/about/AboutHero';
import StorySection from '../components/about/StorySection';
import CoreValues from '../components/about/CoreValues';
import TeamSection from '../components/about/TeamSection';
import TechStack from '../components/about/TechStack';
import AboutCTA from '../components/about/AboutCTA';

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <AboutHero />
      <StorySection />
      <CoreValues />
      <TeamSection />
      <TechStack />
      <AboutCTA />
      <div style={{ height: '4rem' }} />
    </div>
  );
}
