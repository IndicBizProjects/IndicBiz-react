import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Float, Billboard } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingEcosystem() {
  const groupRef = useRef();
  const orbitRef = useRef();
  const { camera } = useThree();
  
  // Keep track of target scroll progress (0 to 1)
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);

  // Optimized scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page we've scrolled
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Prevent division by zero
      if (maxScroll > 0) {
        targetProgress.current = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use useFrame for buttery smooth animation tied to the render loop
  useFrame((state, delta) => {
    // Smoothly interpolate current progress towards target progress
    // Factor 5 controls the "lag/smoothness" (lower = smoother/slower)
    currentProgress.current = THREE.MathUtils.lerp(
      currentProgress.current, 
      targetProgress.current, 
      delta * 5
    );

    // Camera Fly-Through Logic
    // Starts at z=8, moves into the scene (z=-4)
    const targetZ = 8 - (currentProgress.current * 12);
    // Slight panning up/right for cinematic feel
    const targetY = currentProgress.current * 2;
    const targetX = currentProgress.current * 1.5;

    camera.position.z = targetZ;
    camera.position.y = targetY;
    camera.position.x = targetX;
    
    // Slight camera tilt
    camera.rotation.x = -currentProgress.current * 0.1;
    camera.rotation.y = currentProgress.current * 0.2;

    // Idle Animations
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      orbitRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (groupRef.current) {
      // Subtle floating effect for the entire group
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  const nodes = [
    { name: 'Website', position: [0, 3, 0], color: '#8d9f70' },
    { name: 'App', position: [3, 0, 0], color: '#e6ecdf' },
    { name: 'Company Profile', position: [0, -3, 0], color: '#1a3a2a' },
    { name: 'Brand Voice', position: [-3, 0, 0], color: '#8d9f70' },
  ];

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      {/* Central Business Node */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#0f291e" roughness={0.1} metalness={0.8} />
        </mesh>
        {/* Core glowing ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.02, 32, 100]} />
          <meshStandardMaterial color="#8d9f70" emissive="#8d9f70" emissiveIntensity={2} />
        </mesh>
        <Billboard>
          <Text position={[0, 0, 1.2]} fontSize={0.35} color="#ffffff" fontWeight="bold">
            IndicBiz
          </Text>
        </Billboard>
      </Float>

      {/* Orbiting Nodes */}
      <group ref={orbitRef}>
        {/* Orbit Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3, 0.01, 64, 100]} />
          <meshStandardMaterial color="#8d9f70" transparent opacity={0.4} />
        </mesh>

        {nodes.map((node, i) => (
          <group key={i} position={node.position}>
            <mesh>
              <sphereGeometry args={[0.4, 32, 32]} />
              <meshStandardMaterial color={node.color} roughness={0.2} metalness={0.5} />
            </mesh>
            {/* Always face the camera */}
            <Billboard>
              <Text position={[0, -0.7, 0]} fontSize={0.25} color="#0f291e" fontWeight="bold">
                {node.name}
              </Text>
            </Billboard>
          </group>
        ))}
      </group>
      
      {/* Background ambient spheres for depth */}
      <mesh position={[-5, 4, -4]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#e6ecdf" transparent opacity={0.6} />
      </mesh>
      <mesh position={[4, -3, -6]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#8d9f70" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
