import React from 'react';
import './IndicLogo.css';

const IndicLogo = () => {
  return (
    <div className="indic-loader">
      <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="indic-b">
            <stop stopColor="#973BED"></stop>
            <stop stopColor="#007CFF" offset="1"></stop>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="indic-c">
            <stop stopColor="#FFC800"></stop>
            <stop stopColor="#F0F" offset="1"></stop>
            <animateTransform 
              repeatCount="indefinite" 
              keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" 
              keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" 
              dur="8s" 
              values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" 
              type="rotate" 
              attributeName="gradientTransform"
            ></animateTransform>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="indic-d">
            <stop stopColor="#00E0ED"></stop>
            <stop stopColor="#00DA72" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg viewBox="0 0 800 250" className="indic-text-svg">
        <text 
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          className="indic-logo-text"
        >
          <tspan stroke="url(#indic-b)" className="indic-dash">Indic</tspan>
          <tspan fill="transparent"> </tspan>
          <tspan stroke="url(#indic-d)" className="indic-dash">Biz</tspan>
        </text>
      </svg>
    </div>
  );
};

export default IndicLogo;
