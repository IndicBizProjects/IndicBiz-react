import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import SceneManager from './components/SceneManager';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import IndicLogoPage from './indic/IndicLogoPage';
import IndicLogo from './indic/IndicLogo';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import ScrollToTop from './ui/ScrollToTop';

function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar container">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        indicbiz<span>.</span>
      </Link>
      <div className="nav-links">
        <Link to="/" className={path === '/' ? 'active' : ''} style={{ textDecoration: 'none', color: path === '/' ? 'var(--accent-light)' : 'var(--text-primary)' }}>
          Home {path === '/' && <span style={{display: 'block', textAlign:'center', marginTop:'-8px', fontSize:'24px', color:'var(--text-primary)'}}>•</span>}
        </Link>
        <Link to="/services" className={path === '/services' ? 'active' : ''} style={{ textDecoration: 'none', color: path === '/services' ? 'var(--accent-light)' : 'var(--text-primary)' }}>
          Services {path === '/services' && <span style={{display: 'block', textAlign:'center', marginTop:'-8px', fontSize:'24px', color:'var(--text-primary)'}}>•</span>}
        </Link>
        <Link to="/about" className={path === '/about' ? 'active' : ''} style={{ textDecoration: 'none', color: path === '/about' ? 'var(--accent-light)' : 'var(--text-primary)' }}>
          About Us {path === '/about' && <span style={{display: 'block', textAlign:'center', marginTop:'-8px', fontSize:'24px', color:'var(--text-primary)'}}>•</span>}
        </Link>
        <Link to="/pricing" className={path === '/pricing' ? 'active' : ''} style={{ textDecoration: 'none', color: path === '/pricing' ? 'var(--accent-light)' : 'var(--text-primary)' }}>
          Pricing {path === '/pricing' && <span style={{display: 'block', textAlign:'center', marginTop:'-8px', fontSize:'24px', color:'var(--text-primary)'}}>•</span>}
        </Link>
        <Link to="/contact" className={path === '/contact' ? 'active' : ''} style={{ textDecoration: 'none', color: path === '/contact' ? 'var(--accent-light)' : 'var(--text-primary)' }}>
          Contact {path === '/contact' && <span style={{display: 'block', textAlign:'center', marginTop:'-8px', fontSize:'24px', color:'var(--text-primary)'}}>•</span>}
        </Link>
      </div>
      <Link to="/contact" className="btn btn-primary" style={{pointerEvents: 'auto'}}>
        Let's Talk <ArrowUpRight size={16} />
      </Link>
    </nav>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // The box animation is 4s long (or loop), let's wait 3.5s before hiding it
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Global Loader Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <IndicLogo />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="app-container">
        {/* Content wrapper */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <ScrollToTop />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/indic" element={<IndicLogoPage />} />
          </Routes>
          
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
