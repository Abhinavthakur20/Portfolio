"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
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
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Deactivate canvas when scrolled far down to save GPU resources
      if (window.scrollY > 2200) {
        setShouldRender(false);
      } else {
        setShouldRender(true);
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        setShouldRender(false);
      } else {
        handleScroll();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    // Run initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  if (!shouldRender) return null;

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
