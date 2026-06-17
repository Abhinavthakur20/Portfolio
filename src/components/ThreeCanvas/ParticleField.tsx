"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 800;

// Initialize particle positions and speeds statically outside render to ensure perfect React purity
const staticPositions = new Float32Array(PARTICLE_COUNT * 3);
const staticSpeeds = new Float32Array(PARTICLE_COUNT);

for (let i = 0; i < PARTICLE_COUNT; i++) {
  staticPositions[i * 3] = (Math.random() - 0.5) * 35;     // X
  staticPositions[i * 3 + 1] = (Math.random() - 0.5) * 35; // Y
  staticPositions[i * 3 + 2] = (Math.random() - 0.5) * 30; // Z
  staticSpeeds[i] = 0.015 + Math.random() * 0.035;         // speed
}

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Slow default rotation
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.005;

    let scrollY = 0;
    if (typeof window !== "undefined") {
      scrollY = window.scrollY;
    }

    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const zIndex = i * 3 + 2;
      // Move particles towards camera
      positionsArray[zIndex] += staticSpeeds[i] * (1 + scrollY * 0.003);

      // Wrap particles back if they pass the camera
      if (positionsArray[zIndex] > 12) {
        positionsArray[zIndex] = -22;
        // inline recalculations inside animation loop (not render) is allowed
        positionsArray[i * 3] = (Math.random() - 0.5) * 35;
        positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 35;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[staticPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#64748b" /* Slate gray dust */
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
