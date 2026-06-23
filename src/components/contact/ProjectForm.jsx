import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react';

const servicesList = [
  { id: 'branding', title: 'Branding', desc: 'Logo, Identity, Guidelines' },
  { id: 'website', title: 'Website', desc: 'Business, Portfolio, CMS' },
  { id: 'app', title: 'Mobile App', desc: 'Android, iOS, Web Apps' },
  { id: 'profile', title: 'Company Profile', desc: 'Brochure, Profile, Decks' },
  { id: 'packaging', title: 'Packaging', desc: 'Product, Box, Label' },
  { id: 'templates', title: 'Business Templates', desc: 'PPT, Proposal, Docs' },
  { id: 'automation', title: 'Automation', desc: 'Workflows, Systems' },
  { id: 'growth', title: 'Growth Strategy', desc: 'SEO, Ads, Funnels' }
];

const steps = [
  { num: 1, label: 'What do you need?' },
  { num: 2, label: 'About You' },
  { num: 3, label: 'Budget & Timeline' },
  { num: 4, label: 'Final Details' }
];

export default function ProjectForm() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '',
    budget: '₹50K - ₹1L', timeline: '1 Month'
  });

  const handleServiceToggle = (id) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleNextStep = () => { if (currentStep < 4) setCurrentStep(currentStep + 1); };
  const handlePrevStep = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { services: selectedServices, ...formData });
    alert('Project details submitted successfully!');
  };

  return (
    <section id="project-form" style={{ padding: '0 3% 4rem' }}>
      <div style={{
        background: '#0a1710', // Deep premium dark green
        borderRadius: 48,
        padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem)',
        boxShadow: '0 32px 64px rgba(0,0,0,0.08)',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
      }}>
        
        {/* Decorative background mesh */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 80% 0%, rgba(141,159,112,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', position: 'relative', zIndex: 1 }}>
          
          {/* Step Indicator (Horizontal on top) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {steps.map((step) => {
              const isActive = currentStep === step.num;
              const isCompleted = currentStep > step.num;
              return (
                <div key={step.num} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: 30,
                  background: isActive ? 'rgba(141,159,112,0.15)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(141,159,112,0.3)' : 'rgba(255,255,255,0.05)'}`,
                  color: isActive ? '#8d9f70' : isCompleted ? 'white' : 'rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: isActive ? '#8d9f70' : isCompleted ? 'rgba(255,255,255,0.1)' : 'transparent',
                    border: `1px solid ${isCompleted ? 'transparent' : isActive ? '#8d9f70' : 'rgba(255,255,255,0.2)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: isActive ? '#0a1710' : 'inherit',
                    fontSize: '0.75rem', fontWeight: 700
                  }}>
                    {isCompleted ? <CheckCircle2 size={12} /> : step.num}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Form Content */}
          <div style={{ maxWidth: 800, margin: '0 auto', width: '100%' }}>
            <AnimatePresence mode="wait">
              {/* Step 1 */}
              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>What do you need?</h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif" }}>Select all that apply. You can choose more than one.</p>
                  
                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'
                  }}>
                    {servicesList.map(s => {
                      const isSelected = selectedServices.includes(s.id);
                      return (
                        <div
                          key={s.id}
                          onClick={() => handleServiceToggle(s.id)}
                          style={{
                            padding: '1.5rem', borderRadius: 20, cursor: 'pointer',
                            background: isSelected ? 'rgba(141,159,112,0.1)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${isSelected ? '#8d9f70' : 'rgba(255,255,255,0.05)'}`,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h4>
                            <div style={{
                              width: 20, height: 20, borderRadius: '50%',
                              border: `1px solid ${isSelected ? '#8d9f70' : 'rgba(255,255,255,0.2)'}`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              background: isSelected ? '#8d9f70' : 'transparent'
                            }}>
                              {isSelected && <CheckCircle2 size={12} color="#0a1710" />}
                            </div>
                          </div>
                          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{s.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                    <button 
                      onClick={handleNextStep} 
                      disabled={selectedServices.length === 0}
                      style={{
                        padding: '1rem 2.5rem', borderRadius: 50,
                        background: selectedServices.length === 0 ? 'rgba(255,255,255,0.1)' : '#8d9f70',
                        color: selectedServices.length === 0 ? 'rgba(255,255,255,0.4)' : '#0a1710',
                        border: 'none', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                        display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: selectedServices.length === 0 ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Next Step <ArrowUpRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Tell us about you</h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif" }}>We'll use this to get in touch with you.</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {[
                      { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Enter your full name' },
                      { label: 'Company Name', key: 'company', type: 'text', placeholder: 'Enter company name' },
                      { label: 'Email Address', key: 'email', type: 'email', placeholder: 'Enter your email' },
                      { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: 'Enter your phone number' }
                    ].map(field => (
                      <div key={field.key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontFamily: "'Space Grotesk', sans-serif" }}>{field.label}</label>
                        <input 
                          type={field.type} 
                          placeholder={field.placeholder} 
                          value={formData[field.key]} 
                          onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '1rem 1.25rem',
                            borderRadius: 12,
                            color: 'white',
                            fontFamily: "'Space Grotesk', sans-serif",
                            outline: 'none',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
                    <button 
                      onClick={handlePrevStep}
                      style={{
                        padding: '1rem 2.5rem', borderRadius: 50,
                        background: 'transparent', color: 'white',
                        border: '1px solid rgba(255,255,255,0.2)', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                        cursor: 'pointer', transition: 'all 0.3s ease'
                      }}
                    >Back</button>
                    <button 
                      onClick={handleNextStep} 
                      disabled={!formData.name || !formData.email}
                      style={{
                        padding: '1rem 2.5rem', borderRadius: 50,
                        background: (!formData.name || !formData.email) ? 'rgba(255,255,255,0.1)' : '#8d9f70',
                        color: (!formData.name || !formData.email) ? 'rgba(255,255,255,0.4)' : '#0a1710',
                        border: 'none', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                        display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: (!formData.name || !formData.email) ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Next Step <ArrowUpRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Budget & Timeline</h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif" }}>Help us understand your constraints.</p>
                  
                  <div style={{ marginBottom: '2.5rem' }}>
                    <label style={{ display: 'block', fontSize: '1rem', marginBottom: '1.5rem', color: 'white', fontFamily: "'Space Grotesk', sans-serif", textAlign: 'center' }}>Project Budget</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      {['Under ₹50K', '₹50K - ₹1L', '₹1L - ₹5L', 'Above ₹5L'].map(b => (
                        <div 
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          style={{
                            padding: '1.25rem', borderRadius: 16, cursor: 'pointer', textAlign: 'center',
                            background: formData.budget === b ? 'rgba(141,159,112,0.1)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${formData.budget === b ? '#8d9f70' : 'rgba(255,255,255,0.05)'}`,
                            color: formData.budget === b ? 'white' : 'rgba(255,255,255,0.6)',
                            fontFamily: "'Space Grotesk', sans-serif", transition: 'all 0.3s ease'
                          }}
                        >{b}</div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '1rem', marginBottom: '1.5rem', color: 'white', fontFamily: "'Space Grotesk', sans-serif", textAlign: 'center' }}>Timeline</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                      {['Urgent (ASAP)', '1 Month', '2-3 Months', 'Flexible'].map(t => (
                        <div 
                          key={t}
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          style={{
                            padding: '0.75rem 1.5rem', borderRadius: 50, cursor: 'pointer',
                            background: formData.timeline === t ? '#8d9f70' : 'rgba(255,255,255,0.05)',
                            color: formData.timeline === t ? '#0a1710' : 'white',
                            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, transition: 'all 0.3s ease'
                          }}
                        >{t}</div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '4rem' }}>
                    <button 
                      onClick={handlePrevStep}
                      style={{
                        padding: '1rem 2.5rem', borderRadius: 50,
                        background: 'transparent', color: 'white',
                        border: '1px solid rgba(255,255,255,0.2)', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                        cursor: 'pointer', transition: 'all 0.3s ease'
                      }}
                    >Back</button>
                    <button 
                      onClick={handleNextStep}
                      style={{
                        padding: '1rem 2.5rem', borderRadius: 50,
                        background: '#8d9f70', color: '#0a1710',
                        border: 'none', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                        display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Next Step <ArrowUpRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4 */}
              {currentStep === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Additional Info</h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif" }}>Any specific details or links we should check out?</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <textarea
                      placeholder="Share links to competitors, current website, or briefly describe your exact requirement..."
                      rows={6}
                      style={{ 
                        width: '100%', padding: '1.5rem', borderRadius: 20, 
                        border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', 
                        fontFamily: "'Space Grotesk', sans-serif", color: 'white', resize: 'vertical',
                        outline: 'none'
                      }}
                    ></textarea>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
                    <button 
                      onClick={handlePrevStep}
                      style={{
                        padding: '1rem 2.5rem', borderRadius: 50,
                        background: 'transparent', color: 'white',
                        border: '1px solid rgba(255,255,255,0.2)', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                        cursor: 'pointer', transition: 'all 0.3s ease'
                      }}
                    >Back</button>
                    <button 
                      onClick={handleSubmit}
                      style={{
                        padding: '1rem 2.5rem', borderRadius: 50,
                        background: '#8d9f70', color: '#0a1710',
                        border: 'none', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                        display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Submit Project <Send size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
