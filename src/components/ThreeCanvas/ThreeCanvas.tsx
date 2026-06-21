"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import ParticleField from "./ParticleField";

// Loading component inside the canvas
function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={loaderStyle}>
        <div style={spinnerStyle}></div>
        <p style={textStyle}>{progress.toFixed(0)}% Loaded</p>
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
        {/* Soft, bright ambient light replicating daylight */}
        <ambientLight intensity={0.95} />
        
        {/* Clean directional lights for details */}
        <directionalLight position={[10, 10, 8]} intensity={0.8} color="#fafaf9" />
        <directionalLight position={[-10, -8, -5]} intensity={0.4} color="#e7e5e4" />

        {/* Soft pastel studio point lights */}
        <pointLight position={[6, 5, 5]} intensity={2.5} color="#e0f2fe" />    {/* Sky Blue tint */}
        <pointLight position={[-6, 5, 3]} intensity={2.0} color="#f3e8ff" />   {/* Lavender Purple tint */}
        <pointLight position={[0, -5, 2]} intensity={1.8} color="#ffedd5" />   {/* Soft Peach tint */}

        <Suspense fallback={<CanvasLoader />}>
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Inline Styles for Canvas container & loading fallback
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

const loaderStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#1c1917",
  fontFamily: "var(--font-space-grotesk), sans-serif",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  padding: "2rem",
  borderRadius: "16px",
  border: "1px solid rgba(28, 25, 23, 0.08)",
  backdropFilter: "blur(12px)",
  width: "180px",
  boxShadow: "0 20px 40px rgba(28, 25, 23, 0.06)",
};

const spinnerStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  border: "3px solid rgba(28, 25, 23, 0.08)",
  borderTop: "3px solid #0284c7",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
  marginBottom: "1rem",
};

const textStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  fontWeight: "600",
  letterSpacing: "0.05em",
  margin: 0,
};

// Add standard inline style block for keyframes spinner
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
