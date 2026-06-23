import React from 'react';
import IndicLogo from './IndicLogo';

const IndicLogoPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'white' // White background as requested
    }}>
      <IndicLogo />
    </div>
  );
};

export default IndicLogoPage;
