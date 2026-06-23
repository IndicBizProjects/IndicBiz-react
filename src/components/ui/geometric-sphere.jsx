import React, { useState, useEffect, useCallback, useRef } from "react";

export const CONFIG = {
  primaryColor: "141, 159, 112", // Adjusted to project's accent light (olive)
  secondaryColor: "15, 41, 30", // Adjusted to project's accent dark (deep green)
  sphereRotationDuration: "120s",
  gridPanDuration: "180s",
  coreGlowDuration: "25s",
  wireframeOpacity: 0.75,
  wireframeShadowIntensity: 70,
  coreBlur: 200,
  parallaxDepth: 35,
  lerpFactor: 0.08,
  sphereDensity: 16,
};

const lerp = (a, b, t) => a + (b - a) * t;

export default function SphereHero() {
  const [targetMousePos, setTargetMousePos] = useState({ x: 0, y: 0 });
  const currentMousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  const animateLerp = useCallback(() => {
    currentMousePos.current.x = lerp(
      currentMousePos.current.x,
      targetMousePos.x,
      CONFIG.lerpFactor
    );
    currentMousePos.current.y = lerp(
      currentMousePos.current.y,
      targetMousePos.y,
      CONFIG.lerpFactor
    );

    setTargetMousePos((p) => ({
      x: currentMousePos.current.x,
      y: currentMousePos.current.y,
    }));

    animationFrameRef.current = requestAnimationFrame(animateLerp);
  }, [targetMousePos.x, targetMousePos.y]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animateLerp);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [animateLerp]);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (clientX - centerX) / centerX;
    const y = (clientY - centerY) / centerY;
    setTargetMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const { x: smoothX, y: smoothY } = currentMousePos.current;

  const parallaxDepth = CONFIG.parallaxDepth;
  const rotationStrength = 5;

  const baseTranslate = `translate3d(${smoothX * parallaxDepth}px, ${smoothY * parallaxDepth}px, 0)`;
  const gridTranslate = `translate3d(${-smoothX * (parallaxDepth / 2)}px, ${-smoothY * (parallaxDepth / 2)}px, 0)`;
  const hazeTranslate = `translate3d(${smoothX * (parallaxDepth / 2)}px, ${smoothY * (parallaxDepth / 2)}px, 0)`;

  const tiltRotateX = smoothY * rotationStrength;
  const tiltRotateY = -smoothX * rotationStrength;
  const tiltTranslate = `rotateX(${tiltRotateX}deg) rotateY(${tiltRotateY}deg)`;

  const sphereRings = Array.from({ length: CONFIG.sphereDensity }, (_, i) => {
    const step = 180 / CONFIG.sphereDensity;
    const angle = i * step;
    return (
      <div
        key={`ring-${i}`}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          borderRadius: '50%',
          border: `1px solid rgba(${CONFIG.primaryColor}, ${CONFIG.wireframeOpacity})`,
          boxShadow: `0 0 ${CONFIG.wireframeShadowIntensity}px rgba(${CONFIG.primaryColor}, 0.2), inset 0 0 ${CONFIG.wireframeShadowIntensity}px rgba(${CONFIG.primaryColor}, 0.2)`,
          transform: `rotateY(${angle}deg)`,
          transformStyle: 'preserve-3d',
        }}
        aria-hidden="true"
      />
    );
  });

  const coreLightStyle = {
    width: "400px",
    height: "400px",
    backgroundImage: `radial-gradient(circle, rgba(${CONFIG.secondaryColor}, 0.8) 0%, transparent 70%)`,
    filter: `blur(${CONFIG.coreBlur}px)`,
    boxShadow: `0 0 ${CONFIG.coreBlur / 2}px 30px rgba(${CONFIG.secondaryColor}, 0.4), 0 0 ${CONFIG.coreBlur}px 50px rgba(${CONFIG.primaryColor}, 0.3)`,
  };

  const panningGridStyle = {
    transform: gridTranslate,
    backgroundImage:
      `repeating-linear-gradient(to right, rgba(${CONFIG.primaryColor},0.05) 1px, transparent 1px), repeating-linear-gradient(to bottom, rgba(${CONFIG.primaryColor},0.05) 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
    opacity: 0.5,
  };

  const hazeStyle = {
    transform: hazeTranslate,
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.15) 0%, transparent 50%)`,
    filter: "blur(150px)",
    opacity: 0.6,
    mixBlendMode: "screen",
  };

  const deepBaseStyle = {
    transform: baseTranslate,
    backgroundImage: `radial-gradient(at 50% 50%, rgba(${CONFIG.primaryColor}, 0.08) 0%, #f6f5f2 90%)`,
  };

  const bloomStyle = {
    transform: baseTranslate,
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.15) 0%, transparent 50%), radial-gradient(circle at 10% 10%, rgba(${CONFIG.secondaryColor}, 0.15) 0%, transparent 30%)`,
    mixBlendMode: "screen",
    filter: "blur(100px)",
    opacity: 0.95,
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#f6f5f2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <style>{`
        @keyframes sphereRotate {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
        .sphere-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        .sphere-rotation {
          transform-style: preserve-3d;
          animation: sphereRotate linear infinite;
        }
      `}</style>
      
      {/* Layer 0: Panning Grid */}
      <div style={{ position: 'absolute', inset: -100, ...panningGridStyle }} />

      {/* Layer 1: Volumetric Haze */}
      <div style={{ position: 'absolute', inset: 0, ...hazeStyle }} />

      {/* Layer 2: Deep Base */}
      <div style={{ position: 'absolute', inset: 0, ...deepBaseStyle }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%', pointerEvents: 'none',
          ...coreLightStyle
        }} />
      </div>

      {/* Layer 3: Geometric Glow Sphere */}
      <div className="sphere-container" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: `translate(-50%, -50%) ${tiltTranslate}`,
        zIndex: 40, pointerEvents: 'none'
      }}>
        <div
          className="sphere-rotation"
          style={{
            width: '60vw', maxWidth: '700px',
            height: '60vw', maxHeight: '700px',
            transformOrigin: "center center",
            animationDuration: CONFIG.sphereRotationDuration,
          }}
        >
          {sphereRings}
        </div>
      </div>

      {/* Layer 4: Soft Radial Bloom */}
      <div style={{ position: 'absolute', inset: 0, ...bloomStyle }} />

      {/* Layer 5: Noise Layer */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
          backgroundSize: "200px",
          opacity: 0.15,
          mixBlendMode: "overlay",
          zIndex: 50
        }}
      />

      {/* Layer 6: Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 60,
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem',
        pointerEvents: 'auto'
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-2px',
          color: '#0f291e',
          marginBottom: '1.5rem',
        }}>
          Designing the <br />
          <em style={{ color: '#8d9f70', fontStyle: 'italic' }}>Future.</em>
        </h1>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
          color: 'rgba(15,41,30,0.6)',
          lineHeight: 1.7,
          maxWidth: 600,
          margin: '0 auto 3rem auto',
        }}>
          At the intersection of 3D fidelity and dynamic user experience. This is excellence, redefined for the modern web.
        </p>
      </div>

      {/* Final Vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 100,
        background: 'radial-gradient(circle, transparent 50%, rgba(246, 245, 242, 0.8) 150%)'
      }} />
    </div>
  );
}
