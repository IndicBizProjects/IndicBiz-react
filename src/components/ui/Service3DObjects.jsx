import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Edges, Cylinder, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// 1. Branding: Floating Logo Cube
export const LogoCube = ({ color = "#103D2B" }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <RoundedBox args={[2, 2, 2]} radius={0.2} smoothness={4} rotation={[0.4, 0.5, 0]}>
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.5} />
        <Edges scale={1.02} threshold={15} color="white" />
      </RoundedBox>
    </Float>
  );
};

// 2. Website: Floating Browser Window
export const BrowserWindow = ({ color = "#F8F5EC" }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group rotation={[0.1, -0.3, 0]}>
        {/* Main Window */}
        <RoundedBox args={[4, 2.5, 0.2]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
        </RoundedBox>
        {/* Screen Content Area */}
        <mesh position={[0, -0.15, 0.11]}>
          <planeGeometry args={[3.7, 1.9]} />
          <meshStandardMaterial color="#ffffff" roughness={0.8} />
        </mesh>
        {/* Browser Dots */}
        {[-1.6, -1.4, -1.2].map((x, i) => (
          <mesh key={i} position={[x, 1, 0.11]}>
            <circleGeometry args={[0.06, 16]} />
            <meshBasicMaterial color={i === 0 ? "#ff5f56" : i === 1 ? "#ffbd2e" : "#27c93f"} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

// 3. App: Rotating Phone
export const RotatingPhone = ({ color = "#103D2B" }) => {
  const groupRef = useRef();
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
      <group ref={groupRef} rotation={[0.1, 0, 0]}>
        {/* Phone Body */}
        <RoundedBox args={[1.8, 3.6, 0.2]} radius={0.2} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
        </RoundedBox>
        {/* Screen */}
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[1.6, 3.4]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
        {/* Notch */}
        <mesh position={[0, 1.6, 0.12]}>
          <planeGeometry args={[0.5, 0.15]} />
          <meshBasicMaterial color="#222222" />
        </mesh>
      </group>
    </Float>
  );
};

// 4. Business Assets: Floating Book
export const FloatingBook = ({ color = "#9AAF42" }) => {
  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <group rotation={[0.5, -0.5, 0]}>
        {/* Book Cover */}
        <RoundedBox args={[2.4, 3.2, 0.4]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.3} />
        </RoundedBox>
        {/* Pages */}
        <mesh position={[0.1, 0, 0]}>
          <boxGeometry args={[2.2, 3.1, 0.42]} />
          <meshStandardMaterial color="#fdfaf3" roughness={0.9} />
        </mesh>
      </group>
    </Float>
  );
};

// 5. Packaging: 3D Product Box
export const ProductBox = ({ color = "#103D2B" }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1}>
      <group rotation={[0.2, -0.6, 0]}>
        {/* Main Box */}
        <RoundedBox args={[1.8, 3, 1.8]} radius={0.05} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.2} />
          <Edges scale={1.01} threshold={15} color="rgba(255,255,255,0.2)" />
        </RoundedBox>
        {/* Label/Band */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.3, 1.3, 1, 4]} />
          <meshStandardMaterial color="#9AAF42" roughness={0.6} />
        </mesh>
      </group>
    </Float>
  );
};

// 6. Growth: Rising Chart
export const RisingChart = ({ color = "#9AAF42" }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group rotation={[0.2, -0.4, 0]} position={[0, -0.5, 0]}>
        {/* Bar 1 */}
        <RoundedBox args={[0.8, 1.5, 0.8]} radius={0.1} position={[-1.2, 0.75, 0]}>
          <meshStandardMaterial color="#f6f4f0" roughness={0.3} metalness={0.4} />
        </RoundedBox>
        {/* Bar 2 */}
        <RoundedBox args={[0.8, 2.5, 0.8]} radius={0.1} position={[0, 1.25, 0]}>
          <meshStandardMaterial color="#8d9f70" roughness={0.3} metalness={0.4} />
        </RoundedBox>
        {/* Bar 3 */}
        <RoundedBox args={[0.8, 3.8, 0.8]} radius={0.1} position={[1.2, 1.9, 0]}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
        </RoundedBox>

        {/* Arrow / Line */}
        <group position={[-1.2, 1.8, 0.6]} rotation={[0, 0, 0.6]}>
          <mesh>
            <cylinderGeometry args={[0.05, 0.05, 3.5]} />
            <meshStandardMaterial color="#103D2B" emissive="#103D2B" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </group>
    </Float>
  );
};
