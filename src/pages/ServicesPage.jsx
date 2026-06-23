import React from 'react';
import ServicesIntro from '../components/services/ServicesIntro';
import StackedServices from '../components/services/StackedServices';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesCTA from '../components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <ServicesIntro />
      <StackedServices />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
}
