"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import ParticleField from "./ParticleField";
import FloatingModel from "./FloatingModel";

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
        {/* Soft, clean ambient light replicating daylight */}
        <ambientLight intensity={0.7} />
        
        {/* Directional light to define highlights & silhouettes */}
        <directionalLight position={[10, 10, 8]} intensity={1.8} castShadow />
        
        {/* Soft fill light from opposite bottom */}
        <directionalLight position={[-10, -8, -5]} intensity={0.6} />

        {/* Clean, natural point lights for glassy refractions */}
        <pointLight position={[5, 5, 5]} intensity={2.0} color="#ffffff" />
        <pointLight position={[-5, 5, 3]} intensity={1.5} color="#f0fdfa" /> {/* Very light teal */}
        <pointLight position={[0, -5, 2]} intensity={1.2} color="#eff6ff" /> {/* Soft blue */}

        <Suspense fallback={<CanvasLoader />}>
          <ParticleField />
          <FloatingModel />
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
  pointerEvents: "auto",
  backgroundColor: "transparent",
};

const loaderStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#09090b",
  fontFamily: "var(--font-outfit), sans-serif",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  padding: "2rem",
  borderRadius: "16px",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  backdropFilter: "blur(8px)",
  width: "180px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
};

const spinnerStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  border: "3px solid rgba(9, 9, 11, 0.08)",
  borderTop: "3px solid #09090b",
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
