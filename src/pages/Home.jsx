import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedWorkSection from '../components/home/FeaturedWorkSection';
import EcosystemSection from '../components/home/EcosystemSection';
import TestimonialSection from '../components/home/TestimonialSection';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <HeroSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <EcosystemSection />
      <TestimonialSection />
      <HomeCTA />
    </div>
  );
}
