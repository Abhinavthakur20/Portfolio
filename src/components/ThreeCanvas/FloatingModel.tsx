"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Targets for smooth mouse tracking
  const targetRotation = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 1.8, y: 0, z: 0 });
  const currentPosition = useRef({ x: 1.8, y: 0, z: 0 });

  useFrame((state) => {
    if (!meshRef.current) return;

    const { pointer, clock } = state;

    // 1. Mouse Tracking rotation tilt
    targetRotation.current.x = pointer.y * 0.4;
    targetRotation.current.y = pointer.x * 0.4;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotation.current.x, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.current.y, 0.05);

    // Constant slow drift rotation
    meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;

    // 2. Scroll-based Position adjustment & responsive sizing
    let scrollPercent = 0;
    if (typeof window !== "undefined") {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        scrollPercent = window.scrollY / scrollHeight;
      }
      
      // Responsive layout adjustments based on viewport width
      if (window.innerWidth < 768) {
        targetPosition.current.x = 0;
        targetPosition.current.y = -0.5 - scrollPercent * 2;
        targetPosition.current.z = -1;
      } else {
        targetPosition.current.x = 1.6 - scrollPercent * 0.6;
        targetPosition.current.y = -scrollPercent * 3.5;
        targetPosition.current.z = 0;
      }
    }

    // Smooth position interpolation (lerp)
    currentPosition.current.x = THREE.MathUtils.lerp(currentPosition.current.x, targetPosition.current.x, 0.05);
    currentPosition.current.y = THREE.MathUtils.lerp(currentPosition.current.y, targetPosition.current.y, 0.05);
    currentPosition.current.z = THREE.MathUtils.lerp(currentPosition.current.z, targetPosition.current.z, 0.05);

    meshRef.current.position.set(
      currentPosition.current.x,
      currentPosition.current.y,
      currentPosition.current.z
    );

    // 3. Subtle floating bounce
    meshRef.current.position.y += Math.sin(clock.getElapsedTime() * 1.5) * 0.05;
  });

  return (
    <mesh
      ref={meshRef}
      scale={clicked ? 1.35 : hovered ? 1.2 : 1.05}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Visual core geometry: TorusKnot for an elegant, premium look */}
      <torusKnotGeometry args={[0.75, 0.22, 180, 18]} />
      
      <meshPhysicalMaterial
        color={clicked ? "#ea580c" : hovered ? "#ffedd5" : "#f8fafc"}
        roughness={0.18}
        metalness={0.05}
        clearcoat={1.0}
        clearcoatRoughness={0.05}
        transmission={0.9}          // High glass transparency
        thickness={1.3}             // Thickness for internal refractions
        ior={1.52}                  // Index of Refraction of glass
        reflectivity={0.6}
        specularIntensity={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
