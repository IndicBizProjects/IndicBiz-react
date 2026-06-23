import React from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingDetailed from '../components/pricing/PricingDetailed';
import PricingFAQ from '../components/pricing/PricingFAQ';
import PricingCTA from '../components/pricing/PricingCTA';

export default function PricingPage() {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <PricingHero />
      <PricingDetailed />
      <PricingFAQ />
      <PricingCTA />
      <div style={{ height: '4rem' }} />
    </div>
  );
}
