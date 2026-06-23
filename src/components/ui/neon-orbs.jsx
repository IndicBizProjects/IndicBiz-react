import React, { useEffect, useState } from "react";

export function NeonOrbs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f6f5f2', // Brand off-white
        transition: 'background-color 0.5s'
      }}
    >
      {/* Top-left orb */}
      <div
        style={{
          position: 'absolute',
          top: "-40%",
          left: "-20%",
          width: "80vw",
          height: "80vw",
          maxWidth: "800px",
          maxHeight: "800px",
          transition: 'all 1s ease-out',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(-2.5rem)',
        }}
      >
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', position: 'relative', transition: 'all 0.5s' }} className="orb-light">
          <div className="beam-container beam-spin-8">
            <div className="beam-light" />
          </div>
        </div>
      </div>

      {/* Bottom-center orb */}
      <div
        style={{
          position: 'absolute',
          bottom: "-50%",
          left: "50%",
          width: "100vw",
          height: "100vw",
          maxWidth: "1000px",
          maxHeight: "1000px",
          transition: 'all 1s ease-out 0.3s',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(2.5rem)',
        }}
      >
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', position: 'relative', transition: 'all 0.5s' }} className="orb-light">
          <div className="beam-container beam-spin-10-reverse">
            <div className="beam-light" />
          </div>
        </div>
      </div>

      {/* Top-right orb */}
      <div
        style={{
          position: 'absolute',
          top: "-30%",
          right: "-25%",
          width: "70vw",
          height: "70vw",
          maxWidth: "700px",
          maxHeight: "700px",
          transition: 'all 1s ease-out 0.5s',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateX(0)' : 'translateX(2.5rem)',
        }}
      >
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', position: 'relative', transition: 'all 0.5s' }} className="orb-light">
          <div className="beam-container beam-spin-6">
            <div className="beam-light" />
          </div>
        </div>
      </div>

      {/* Bottom-right orb */}
      <div
        style={{
          position: 'absolute',
          bottom: "-35%",
          right: "-15%",
          width: "75vw",
          height: "75vw",
          maxWidth: "750px",
          maxHeight: "750px",
          transition: 'all 1s ease-out 0.7s',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(2.5rem)',
        }}
      >
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', position: 'relative', transition: 'all 0.5s' }} className="orb-light">
          <div className="beam-container beam-spin-7-reverse">
            <div className="beam-light" />
          </div>
        </div>
      </div>

      {/* Center text */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', transition: 'color 0.5s', color: '#0f291e' }}>
        <h1 
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 300,
            letterSpacing: '0.1em',
            marginBottom: '1rem',
            transition: 'all 1s ease-out 0.5s',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(2rem)',
            filter: mounted ? 'blur(0)' : 'blur(4px)',
            lineHeight: 1
          }}
        >
          {"BEYOND LIMITS".split("").map((char, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                transition: `all 0.5s ease-out ${800 + i * 50}ms`,
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(1rem)',
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p 
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: 400,
            letterSpacing: '0.2em',
            color: 'rgba(15,41,30,0.6)',
            transition: 'all 1s ease-out 1.5s',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(1rem)',
            filter: mounted ? 'blur(0)' : 'blur(4px)',
          }}
        >
          THE FUTURE IS NOW
        </p>
      </div>

      <style>{`
        .beam-container {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          will-change: transform;
        }
        
        .beam-light {
          position: absolute;
          top: 0;
          left: 50%;
          width: 60px;
          height: 4px;
          margin-left: -30px;
          border-radius: 2px;
          transform: translateY(-50%);
          transition: all 0.5s;
          /* Adjusted to brand colors: soft olive/green glow */
          background: linear-gradient(90deg, transparent 0%, rgba(141, 159, 112, 0.5) 30%, rgba(154, 175, 102, 0.9) 70%, rgba(141, 159, 112, 1) 100%);
          box-shadow: 0 0 20px 4px rgba(141, 159, 112, 0.6), 0 0 40px 8px rgba(154, 175, 102, 0.3);
        }
        
        .orb-light {
          /* Adjusted to off-white blending */
          background: radial-gradient(circle at 50% 50%, #f6f5f2 0%, #f6f5f2 90%, transparent 100%);
          box-shadow: 
            0 0 60px 2px rgba(141, 159, 112, 0.2),
            0 0 100px 5px rgba(141, 159, 112, 0.1),
            inset 0 0 60px 2px rgba(141, 159, 112, 0.05);
          border: 1px solid rgba(141, 159, 112, 0.3);
        }
        
        .beam-spin-6 {
          animation: spin 6s linear infinite;
        }
        
        .beam-spin-7-reverse {
          animation: spin-reverse 7s linear infinite;
        }
        
        .beam-spin-8 {
          animation: spin 8s linear infinite;
        }
        
        .beam-spin-10-reverse {
          animation: spin-reverse 10s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
