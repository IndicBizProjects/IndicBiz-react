import React from 'react';
import { MeshGradient } from "@paper-design/shaders-react";

export default function AboutHero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: 'clamp(100px, 14vw, 140px) 5% 4rem',
    }}>
      {/* Background Animated Mesh Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <MeshGradient
          style={{ height: "100%", width: "100%" }}
          distortion={0.8}
          swirl={0.1}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={1}
          colors={["#0f291e", "#163a2a", "#8d9f70", "#9aaf42"]}
        />
      </div>

      {/* Foreground Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem',
        background: 'rgba(246, 245, 242, 0.4)',
        backdropFilter: 'blur(12px)',
        borderRadius: '32px',
        border: '1px solid rgba(141, 159, 112, 0.2)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(141,159,112,0.15)',
          color: '#8d9f70',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          padding: '0.4rem 1.25rem',
          borderRadius: 50,
          marginBottom: '2rem',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          About Us
        </div>
        
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-2px',
          color: '#0f291e',
          marginBottom: '1.5rem',
        }}>
          Designing the <br />
          <em style={{ fontStyle: 'italic', color: '#8d9f70' }}>Future.</em>
        </h1>
        
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          color: 'rgba(15, 41, 30, 0.6)',
          lineHeight: 1.7,
          maxWidth: '500px',
          margin: '0 auto 2rem auto',
        }}>
          At the intersection of cutting-edge technology and aesthetic excellence. We are a collective dedicated to elevating brands globally.
        </p>
      </div>
    </section>
  );
}
