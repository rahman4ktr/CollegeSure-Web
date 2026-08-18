"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";

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
  glare = true,
  glareColor = "rgba(255, 255, 255, 0.1)",
  glareOpacity = 0.4,
  borderGlow = false,
  borderGlowColor = "rgba(13, 148, 136, 0.25)",
  shadowOnHover = true,
  shadowIntensity = 0.12,
  onHoverStart,
  onHoverEnd,
  onTilt,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const rafId = useRef<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 250, damping: 30 };

  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);
  const scaleSpring = useSpring(1, springConfig);
  const ySpring = useSpring(0, springConfig);

  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([latestX, latestY]) =>
      `radial-gradient(${glowSize}px circle at ${latestX}px ${latestY}px, ${glowColor}, transparent 80%)`
  );

  useEffect(() => {
    // Only enable 3D tilt calculations on fine pointing devices (desktops/laptops with mouse)
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (supportsHover) {
      setIsInteractive(true);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !isInteractive || !cardRef.current) return;

      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }

      const clientX = e.clientX;
      const clientY = e.clientY;

      rafId.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const currentX = clientX - rect.left;
        const currentY = clientY - rect.top;

        mouseX.set(currentX);
        mouseY.set(currentY);

        const normalizedX = currentX / rect.width - 0.5;
        const normalizedY = currentY / rect.height - 0.5;

        x.set(normalizedX);
        y.set(normalizedY);

        if (onTilt) {
          onTilt(normalizedX * maxTilt, normalizedY * maxTilt);
        }
      });
    },
    [disabled, isInteractive, x, y, mouseX, mouseY, maxTilt, onTilt]
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled || !isInteractive) return;
    setIsHovered(true);
    if (onHoverStart) onHoverStart();

    scaleSpring.set(scaleOnHover);
    ySpring.set(liftOnHover);
  }, [disabled, isInteractive, scaleOnHover, liftOnHover, scaleSpring, ySpring, onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    if (!isInteractive) return;
    setIsHovered(false);
    if (onHoverEnd) onHoverEnd();

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    x.set(0);
    y.set(0);
    mouseX.set(0);
    mouseY.set(0);
    scaleSpring.set(1);
    ySpring.set(0);
  }, [isInteractive, x, y, mouseX, mouseY, scaleSpring, ySpring, onHoverEnd]);

  if (!isInteractive) {
    return (
      <div className={`relative transition-transform duration-300 hover:-translate-y-1 ${className}`}>
        <div className="relative z-0 h-full w-full">{children}</div>
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        isHovered && !disabled
          ? {
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
              scale: scaleSpring,
              y: ySpring,
              transformStyle: "preserve-3d",
              perspective: perspective,
            }
          : undefined
      }
      className={`relative group ${className}`}
    >
      {/* Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10 overflow-hidden"
        style={{
          background: spotlightBg,
          opacity: isHovered && !disabled ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative z-0 h-full w-full">{children}</div>
    </motion.div>
  );
}