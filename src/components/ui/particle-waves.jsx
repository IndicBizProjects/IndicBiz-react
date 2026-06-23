import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ParticleWaves = ({
  density = 50,
  speed = 0.05,
  amplitude = 60,
  separation = 100,
  particleColor = '#8d9f70', // IndicBiz Olive
  bgColor = '#f6f5f2',       // IndicBiz Background
  className = ""
}) => {
  const containerRef = useRef(null);
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const particlesRef = useRef([]);
  const materialRef = useRef();
  const animationRef = useRef();
  
  const countRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const windowHalfRef = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });

  const createParticleMaterial = (color) => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    
    context.clearRect(0, 0, 32, 32);
    context.fillStyle = color;
    context.beginPath();
    context.arc(16, 16, 12, 0, Math.PI * 2, true);
    context.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    return new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.8
    });
  };

  const recreateParticles = () => {
    if (!sceneRef.current || !materialRef.current) return;
    
    // Remove existing particles
    particlesRef.current.forEach(particle => sceneRef.current.remove(particle));
    particlesRef.current = [];
    
    // Create new particles
    for (let ix = 0; ix < density; ix++) {
      for (let iy = 0; iy < density; iy++) {
        const particle = new THREE.Sprite(materialRef.current);
        particle.position.x = ix * separation - ((density * separation) / 2);
        particle.position.z = iy * separation - ((density * separation) / 2);
        particle.position.y = -400;
        particle.scale.setScalar(10);
        
        particlesRef.current.push(particle);
        sceneRef.current.add(particle);
      }
    }
  };

  const handleMouseMove = (event) => {
    mouseRef.current.x = event.clientX - windowHalfRef.current.x;
    mouseRef.current.y = event.clientY - windowHalfRef.current.y;
  };

  const handleTouchMove = (event) => {
    if (event.touches.length === 1) {
      mouseRef.current.x = event.touches[0].pageX - windowHalfRef.current.x;
      mouseRef.current.y = event.touches[0].pageY - windowHalfRef.current.y;
    }
  };

  const handleResize = () => {
    if (!cameraRef.current || !rendererRef.current) return;
    
    windowHalfRef.current.x = window.innerWidth / 2;
    windowHalfRef.current.y = window.innerHeight / 2;
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    if (!cameraRef.current || !rendererRef.current || !sceneRef.current) return;
    
    animationRef.current = requestAnimationFrame(animate);
    
    // Update camera slightly to follow mouse softly
    cameraRef.current.position.x += (mouseRef.current.x * 0.5 - cameraRef.current.position.x) * 0.05;
    cameraRef.current.position.y += (-mouseRef.current.y * 0.5 + 800 - cameraRef.current.position.y) * 0.05;
    cameraRef.current.lookAt(sceneRef.current.position);
    
    // Update particles
    let i = 0;
    for (let ix = 0; ix < density; ix++) {
      for (let iy = 0; iy < density; iy++) {
        if (i < particlesRef.current.length) {
          const particle = particlesRef.current[i++];
          
          particle.position.y = -400 + 
            (Math.sin((ix + countRef.current) * 0.3) * amplitude) + 
            (Math.sin((iy + countRef.current) * 0.5) * amplitude);
          
          const scale = (Math.sin((ix + countRef.current) * 0.3) + 1) * 2 + 
                       (Math.sin((iy + countRef.current) * 0.5) + 1) * 2;
          particle.scale.setScalar(scale * 1.5);
        }
      }
    }
    
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    countRef.current += speed;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    camera.position.y = 800;
    cameraRef.current = camera;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(bgColor), 1);
    rendererRef.current = renderer;

    containerRef.current.appendChild(renderer.domElement);

    // Create initial material and particles
    materialRef.current = createParticleMaterial(particleColor);
    recreateParticles();

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Cleanup geometries and materials
      if (materialRef.current) {
        if (materialRef.current.map) materialRef.current.map.dispose();
        materialRef.current.dispose();
      }
      particlesRef.current = [];
    };
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} className={className}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ParticleWaves;
