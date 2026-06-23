import React, { useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import FloatingEcosystem from './FloatingEcosystem';
import { Float, MeshDistortMaterial, Text, RoundedBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ServicesScene({ active }) {
  const group = useRef();
  const scaleRef = useRef(0);

  const services = useMemo(
    () => [
      { title: "Website", icon: "🌐" },
      { title: "Apps", icon: "📱" },
      { title: "Branding", icon: "✦" },
      { title: "Packaging", icon: "📦" },
      { title: "Profile", icon: "📄" },
      { title: "Templates", icon: "◧" }
    ],
    []
  );

  useFrame((state, delta) => {
    scaleRef.current = THREE.MathUtils.lerp(
      scaleRef.current,
      active ? 1 : 0,
      delta * 5
    );

    if (!group.current) return;

    group.current.scale.setScalar(scaleRef.current);

    group.current.rotation.y += delta * 0.12;

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
  });

  return (
    <group ref={group} position={[4.5, 0, -4]}>

      {/* CENTER ORB */}
      <Float speed={2} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />

          <meshPhysicalMaterial
            color="#9AAF42"
            transmission={0.1}
            thickness={1}
            roughness={0.15}
            metalness={0.5}
            clearcoat={1}
            emissive="#7c9640"
            emissiveIntensity={0.2}
          />
        </mesh>

        <Text
          position={[0, 0, 1.55]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          fontWeight={800}
        >
          INDIC
          {"\n"}
          BIZ
        </Text>
      </Float>

      {/* ORBIT RING */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.8, 0.02, 16, 200]} />
        <meshStandardMaterial
          color="#b5c28b"
          emissive="#b5c28b"
          emissiveIntensity={1}
        />
      </mesh>

      {/* SERVICE NODES */}
      {services.map((service, index) => {
        const angle =
          (index / services.length) * Math.PI * 2;

        const radius = 3.8;

        return (
          <ServiceNode
            key={service.title}
            title={service.title}
            angle={angle}
            radius={radius}
          />
        );
      })}

      {/* FLOATING PARTICLES */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 5.5,
              (Math.random() - 0.5) * 2,
              Math.sin(angle) * 5.5
            ]}
          >
            <sphereGeometry args={[0.05]} />

            <meshStandardMaterial
              color={i % 2 ? "#9AAF42" : "#ffffff"}
              emissive="#9AAF42"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function ServiceNode({ title, angle, radius }) {
  const node = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.3;

    const x = Math.cos(angle + t) * radius;
    const z = Math.sin(angle + t) * radius;

    node.current.position.x = x;
    node.current.position.z = z;

    node.current.lookAt(0, 0, 0);
  });

  return (
    <group ref={node}>
      {/* Dark Sphere */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshPhysicalMaterial
          color="#0f291e"
          roughness={0.05}
          metalness={1}
          clearcoat={1}
        />
      </mesh>

      {/* Card */}
      <RoundedBox
        args={[1.4, 0.45, 0.08]}
        radius={0.08}
        position={[0, -0.15, 0]}
      >
        <meshStandardMaterial color="#ffffff" />
      </RoundedBox>

      <Text
        position={[0, -0.15, 0.05]}
        fontSize={0.12}
        color="#0f291e"
        anchorX="center"
        anchorY="middle"
        fontWeight={800}
      >
        {title}
      </Text>
    </group>
  );
}

export function ContactScene({ active }) {
  const group = useRef();
  const scaleRef = useRef(0);

  const nodes = useMemo(
    () => [
      { title: "Website", icon: "🌐" },
      { title: "App", icon: "📱" },
      { title: "Branding", icon: "✦" },
      { title: "Packaging", icon: "📦" },
      { title: "Profile", icon: "📄" }
    ],
    []
  );

  useFrame((state, delta) => {
    scaleRef.current = THREE.MathUtils.lerp(
      scaleRef.current,
      active ? 1 : 0,
      delta * 5
    );

    if (!group.current) return;

    group.current.scale.setScalar(scaleRef.current);
    group.current.rotation.y += delta * 0.12;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
  });

  return (
    <group ref={group} position={[4.5, 0, -4]}>

      {/* CENTER ORB */}
      <Float speed={2} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshPhysicalMaterial
            color="#9AAF42"
            transmission={0.1}
            thickness={1}
            roughness={0.15}
            metalness={0.5}
            clearcoat={1}
            emissive="#7c9640"
            emissiveIntensity={0.2}
          />
        </mesh>

        <Text
          position={[0, 0, 1.55]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          fontWeight={800}
        >
          YOUR
          {"\n"}
          PROJECT
        </Text>
      </Float>

      {/* ORBIT RING */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.8, 0.02, 16, 200]} />
        <meshStandardMaterial color="#b5c28b" emissive="#b5c28b" emissiveIntensity={1} />
      </mesh>

      {/* NODES */}
      {nodes.map((node, index) => {
        const angle = (index / nodes.length) * Math.PI * 2;
        return <ServiceNode key={node.title} title={node.title} angle={angle} radius={3.8} />;
      })}

      {/* FLOATING PARTICLES */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 5.5,
              (Math.random() - 0.5) * 2,
              Math.sin(angle) * 5.5
            ]}
          >
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial
              color={i % 2 ? "#9AAF42" : "#ffffff"}
              emissive="#9AAF42"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function AboutScene({ active }) {
  return null;
}

function HomeSceneWrapper({ active }) {
  const group = useRef();
  const scaleRef = useRef(1);

  useFrame((state, delta) => {
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, active ? 1 : 0, delta * 4);
    if (group.current) {
      group.current.scale.set(scaleRef.current, scaleRef.current, scaleRef.current);
    }
  });

  return (
    <group ref={group}>
      <FloatingEcosystem />
    </group>
  );
}

export default function SceneManager() {
  const location = useLocation();

  return (
    <group>
      <HomeSceneWrapper active={location.pathname === '/'} />
      <ServicesScene active={location.pathname === '/services'} />
      <ContactScene active={location.pathname === '/contact'} />
      <AboutScene active={location.pathname === '/about'} />
    </group>
  );
}
