"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      setVisible(true);
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("clickable")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    let animationFrameId: number;

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseCoords.current.x}px, ${mouseCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * 0.16;
        ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * 0.16;
        ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={hovered ? styles.cursorHovered : ""}>
      <div ref={dotRef} className={styles.cursorDot} />
      <div ref={ringRef} className={styles.cursorRing} />
    </div>
  );
}
