"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 800;

// Initialize particle positions and speeds statically outside render to ensure perfect React purity
const staticPositions = new Float32Array(PARTICLE_COUNT * 3);
const staticColors = new Float32Array(PARTICLE_COUNT * 3);
const staticSpeeds = new Float32Array(PARTICLE_COUNT);

const colorsList = [
  [0.90, 0.22, 0.27], // Terracotta Red
  [0.54, 0.81, 0.94], // Sky Blue
  [0.18, 0.58, 0.42], // Mint Green
  [0.49, 0.23, 0.93], // Purple
  [0.95, 0.61, 0.07]  // Amber Gold
];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  staticPositions[i * 3] = (Math.random() - 0.5) * 35;     // X
  staticPositions[i * 3 + 1] = (Math.random() - 0.5) * 35; // Y
  staticPositions[i * 3 + 2] = (Math.random() - 0.5) * 30; // Z
  staticSpeeds[i] = 0.015 + Math.random() * 0.035;         // speed

  const color = colorsList[Math.floor(Math.random() * colorsList.length)];
  staticColors[i * 3] = color[0];     // R
  staticColors[i * 3 + 1] = color[1]; // G
  staticColors[i * 3 + 2] = color[2]; // B
}

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize client coordinates to standard [-1, 1] range
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Continuous slow rotation combined with mouse position reactive tilt
    const time = state.clock.getElapsedTime();
    const targetX = mouseRef.current.y * 0.45 + time * 0.005; // increased tilt range
    const targetY = mouseRef.current.x * 0.45 + time * 0.015;

    // Smoothly interpolate (lerp) points rotation towards target values
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetX, 0.05);
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetY, 0.05);

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
        <bufferAttribute
          attach="attributes-color"
          args={[staticColors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
