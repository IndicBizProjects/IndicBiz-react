import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData.jsx';
import DetailsHero from '../components/services/DetailsHero';
import DetailsDeliverables from '../components/services/DetailsDeliverables';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesCTA from '../components/services/ServicesCTA';

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_DATA[id];

  // If the user navigates to an invalid service ID, redirect them to the main services page
  useEffect(() => {
    if (!service) {
      navigate('/services', { replace: true });
    }
  }, [id, service, navigate]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return null;

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <DetailsHero service={service} />
      <DetailsDeliverables service={service} />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
}
