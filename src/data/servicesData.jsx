import React from 'react';
import { PenTool, Code, Smartphone, Target } from 'lucide-react';

export const SERVICES_DATA = {
  'brand-identity': {
    id: 'brand-identity',
    title: 'Brand Identity',
    subtitle: 'Crafting memorable brands that resonate.',
    overview: 'A brand is more than just a logo. It’s the visual and emotional language your business uses to communicate with the world. We build comprehensive brand identities that capture your essence, differentiate you from competitors, and leave a lasting impression on your audience.',
    color: '#0f291e',
    textColor: 'white',
    icon: <PenTool size={48} color="var(--accent-light)" />,
    deliverables: [
      { title: 'Logo Design & Variations', desc: 'Primary, secondary, and logomark designs crafted for scale and versatility.' },
      { title: 'Typography Systems', desc: 'Curated font pairings that establish a unique and readable voice for your brand.' },
      { title: 'Color Palettes', desc: 'Psychologically grounded color systems designed for digital and print.' },
      { title: 'Brand Guidelines', desc: 'A comprehensive rulebook ensuring brand consistency across all touchpoints.' }
    ]
  },
  'web-experiences': {
    id: 'web-experiences',
    title: 'Web Experiences',
    subtitle: 'High-performance, immersive websites that convert.',
    overview: 'In the modern digital landscape, a website must be more than an information brochure—it must be an experience. We specialize in building complex, lightning-fast web architectures using React, Next.js, and WebGL to create digital ecosystems that captivate users and drive measurable business growth.',
    color: '#1a3a2a',
    textColor: 'white',
    icon: <Code size={48} color="var(--accent-light)" />,
    deliverables: [
      { title: 'Custom React Development', desc: 'Component-driven, highly interactive web applications built for speed.' },
      { title: 'WebGL & 3D Integrations', desc: 'Immersive, scroll-driven 3D experiences using Three.js and React Three Fiber.' },
      { title: 'Headless CMS', desc: 'Decoupled content architecture (Sanity, Strapi) for ultimate editorial control.' },
      { title: 'E-Commerce Solutions', desc: 'Scalable, custom Shopify and custom-built checkout flows.' }
    ]
  },
  'product-design': {
    id: 'product-design',
    title: 'Product Design',
    subtitle: 'User-centric UI/UX design for web and mobile.',
    overview: 'Great design solves complex problems simply. Our product design process is rooted in deep user research, strategic wireframing, and rigorous testing. We design digital products that look beautiful and function flawlessly, reducing friction and maximizing user engagement.',
    color: '#f6f4f0',
    textColor: 'var(--accent-dark)',
    icon: <Smartphone size={48} color="var(--accent-light)" />,
    deliverables: [
      { title: 'UX Research & Strategy', desc: 'User personas, journey mapping, and competitor analysis.' },
      { title: 'Wireframing & Prototyping', desc: 'Low and high-fidelity clickable prototypes in Figma.' },
      { title: 'UI Design Systems', desc: 'Scalable component libraries and design tokens for engineering teams.' },
      { title: 'Usability Testing', desc: 'A/B testing and user feedback loops to refine the product experience.' }
    ]
  },
  'growth-seo': {
    id: 'growth-seo',
    title: 'Growth & SEO',
    subtitle: 'Data-driven marketing strategies to scale.',
    overview: 'Building a great product is only half the battle. We help you scale your digital presence through technical SEO, performance optimization, and strategic content architecture. Our data-driven approach ensures your brand reaches the right audience at the right time.',
    color: '#9AAF42',
    textColor: 'var(--accent-dark)',
    icon: <Target size={48} color="var(--accent-light)" />,
    deliverables: [
      { title: 'Technical SEO Audits', desc: 'Deep dive analysis of site architecture, speed, and crawlability.' },
      { title: 'Performance Optimization', desc: 'Core Web Vitals optimization to guarantee 90+ Lighthouse scores.' },
      { title: 'Content Strategy', desc: 'Keyword mapping and semantic content architecture.' },
      { title: 'Conversion Rate Optimization', desc: 'A/B testing flows to maximize lead generation and sales.' }
    ]
  }
};
