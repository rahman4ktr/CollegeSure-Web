"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  glowSize?: number;
  disabled?: boolean;
  perspective?: number;
  scaleOnHover?: number;
  liftOnHover?: number;
  transitionType?: "spring" | "tween";
  glare?: boolean;
  glareColor?: string;
  glareOpacity?: number;
  borderGlow?: boolean;
  borderGlowColor?: string;
  shadowOnHover?: boolean;
  shadowIntensity?: number;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onTilt?: (x: number, y: number) => void;
}

export default function Card3DTilt({
  children,
  className = "",
  maxTilt = 4,
  glowColor = "rgba(13, 148, 136, 0.12)",
  glowSize = 320,
  disabled = false,
  perspective = 1000,
  scaleOnHover = 1.01,
  liftOnHover = -3,
  onHoverStart,
  onHoverEnd,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, mouseX: 0, mouseY: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable 3D tilt calculations on fine pointing devices (desktop mouse)
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsInteractive(true);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !isInteractive || !cardRef.current) return;

      const clientX = e.clientX;
      const clientY = e.clientY;

      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;

        const normalizedX = (mouseX / rect.width - 0.5) * 2;
        const normalizedY = (mouseY / rect.height - 0.5) * 2;

        setTilt({
          x: normalizedX * maxTilt,
          y: -normalizedY * maxTilt,
          mouseX,
          mouseY,
        });
      });
    },
    [disabled, isInteractive, maxTilt]
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled || !isInteractive) return;
    setIsHovered(true);
    if (onHoverStart) onHoverStart();
  }, [disabled, isInteractive, onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    if (!isInteractive) return;
    setIsHovered(false);
    if (onHoverEnd) onHoverEnd();

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
    setTilt({ x: 0, y: 0, mouseX: 0, mouseY: 0 });
  }, [isInteractive, onHoverEnd]);

  if (!isInteractive || disabled) {
    return (
      <div className={`relative transition-transform duration-300 hover:-translate-y-1 ${className}`}>
        <div className="relative z-0 h-full w-full">{children}</div>
      </div>
    );
  }

  const transformStyle = isHovered
    ? `perspective(${perspective}px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${scaleOnHover}) translateY(${liftOnHover}px)`
    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      {/* Spotlight Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10 overflow-hidden"
          style={{
            background: `radial-gradient(${glowSize}px circle at ${tilt.mouseX}px ${tilt.mouseY}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-0 h-full w-full">{children}</div>
    </div>
  );
}