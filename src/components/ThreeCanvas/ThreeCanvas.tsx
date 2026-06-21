"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import ParticleField from "./ParticleField";

function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "#1a1a1a", fontFamily: "sans-serif", fontSize: "0.9rem" }}>
        {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

export default function ThreeCanvas() {
  return (
    <div style={containerStyle}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 8]} intensity={0.6} color="#faf5ef" />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#fef3c7" />
        <pointLight position={[-5, 3, 3]} intensity={1.0} color="#e0f2fe" />
        <Suspense fallback={<CanvasLoader />}>
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  pointerEvents: "none",
  backgroundColor: "transparent",
};
