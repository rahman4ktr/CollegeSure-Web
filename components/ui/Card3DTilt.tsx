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
  transitionConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
    duration?: number;
    ease?: string;
  };
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
  maxTilt = 6,
  glowColor = "rgba(13, 148, 136, 0.15)",
  glowSize = 350,
  disabled = false,
  perspective = 1000,
  scaleOnHover = 1.015,
  liftOnHover = -4,
  transitionType = "spring",
  transitionConfig = {},
  glare = true,
  glareColor = "rgba(255, 255, 255, 0.1)",
  glareOpacity = 0.5,
  borderGlow = true,
  borderGlowColor = "rgba(13, 148, 136, 0.3)",
  shadowOnHover = true,
  shadowIntensity = 0.2,
  onHoverStart,
  onHoverEnd,
  onTilt,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Raw cursor relative coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configurations
  const defaultSpringConfig = {
    stiffness: 300,
    damping: 25,
    mass: 1,
  };

  const defaultTweenConfig = {
    duration: 0.3,
  };

  const springConfig = { ...defaultSpringConfig, ...transitionConfig };
  const tweenConfig = { ...defaultTweenConfig, ...transitionConfig };

  // Smooth springs for rotation
  const rotateXSpring = useSpring(
    useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]),
    transitionType === "spring" ? springConfig : { stiffness: 300, damping: 25 }
  );

  const rotateYSpring = useSpring(
    useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]),
    transitionType === "spring" ? springConfig : { stiffness: 300, damping: 25 }
  );

  // Smooth springs for position
  const scaleSpring = useSpring(1, transitionType === "spring" ? springConfig : { stiffness: 400, damping: 25 });
  const ySpring = useSpring(0, transitionType === "spring" ? springConfig : { stiffness: 400, damping: 25 });
  const shadowSpring = useSpring(0, transitionType === "spring" ? springConfig : { stiffness: 300, damping: 25 });

  // Transform shadow spring to shadow string
  const boxShadowStyle = useTransform(shadowSpring, (val) =>
    val > 0 ? `0 20px 60px rgba(0,0,0,${val})` : "0 4px 20px rgba(0,0,0,0.05)"
  );

  // Top-level transform for radial spotlight background
  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([latestX, latestY]) =>
      `radial-gradient(${glowSize}px circle at ${latestX}px ${latestY}px, ${glowColor}, transparent 80%)`
  );

  // Glare effect
  const glareX = useTransform(mouseX, [0, cardRef.current?.offsetWidth || 1], [0, 100]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      mouseX.set(currentX);
      mouseY.set(currentY);

      // Normalized coordinates from -0.5 to 0.5
      const normalizedX = currentX / width - 0.5;
      const normalizedY = currentY / height - 0.5;

      x.set(normalizedX);
      y.set(normalizedY);

      if (onTilt) {
        onTilt(normalizedX * maxTilt, normalizedY * maxTilt);
      }
    },
    [disabled, x, y, mouseX, mouseY, maxTilt, onTilt]
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    setIsHovered(true);
    if (onHoverStart) onHoverStart();

    scaleSpring.set(scaleOnHover);
    ySpring.set(liftOnHover);
    shadowSpring.set(shadowIntensity);
  }, [disabled, scaleOnHover, liftOnHover, shadowIntensity, scaleSpring, ySpring, shadowSpring, onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (onHoverEnd) onHoverEnd();

    x.set(0);
    y.set(0);
    mouseX.set(0);
    mouseY.set(0);
    scaleSpring.set(1);
    ySpring.set(0);
    shadowSpring.set(0);
  }, [x, y, mouseX, mouseY, scaleSpring, ySpring, shadowSpring, onHoverEnd]);

  // Mount effect for animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={`relative ${className}`}>
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
      style={{
        rotateX: disabled ? 0 : rotateXSpring,
        rotateY: disabled ? 0 : rotateYSpring,
        scale: disabled ? 1 : scaleSpring,
        y: disabled ? 0 : ySpring,
        transformStyle: "preserve-3d",
        perspective: perspective,
        boxShadow: shadowOnHover ? (boxShadowStyle as any) : undefined,
      }}
      transition={
        transitionType === "spring"
          ? {
            type: "spring",
            stiffness: springConfig.stiffness,
            damping: springConfig.damping,
            mass: springConfig.mass,
          }
          : {
            type: "tween",
            duration: tweenConfig.duration,
          }
      }
      className={`relative group ${className}`}
    >
      {/* Radial Spotlight Glow Following Cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10 overflow-hidden"
        style={{
          background: spotlightBg,
          opacity: isHovered && !disabled ? 1 : 0,
        }}
      />

      {/* Glare Effect */}
      {glare && isHovered && !disabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit]"
          style={{
            background: `linear-gradient(
              ${glareX}deg,
              ${glareColor},
              transparent ${glareOpacity * 100}%
            )`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Border Glow */}
      {borderGlow && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[inherit] z-5 transition-opacity duration-300"
          style={{
            border: `1px solid ${borderGlowColor}`,
            opacity: isHovered && !disabled ? 1 : 0,
          }}
        />
      )}

      {/* Card Content */}
      <div
        className="relative z-0 h-full w-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

// Helper components for common card patterns
export const Card3DTiltWithImage = ({
  image,
  title,
  description,
  ...props
}: Card3DTiltProps & {
  image: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card3DTilt {...props}>
      <div className="overflow-hidden rounded-2xl">
        <div className="relative h-48 bg-gradient-to-br from-[#0B3C5D] to-[#0D9488]">
          {image}
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-[#0F172A] mb-2">{title}</h3>
          <p className="text-sm text-[#475569]">{description}</p>
        </div>
      </div>
    </Card3DTilt>
  );
};

export const Card3DTiltInteractive = ({
  children,
  ...props
}: Card3DTiltProps & {
  children: React.ReactNode;
}) => {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  return (
    <Card3DTilt
      {...props}
      onTilt={(x, y) => {
        setTiltX(x);
        setTiltY(y);
      }}
    >
      <div className="relative">
        {children}
        <div className="absolute bottom-4 right-4 text-xs text-[#94A3B8]">
          X: {tiltX.toFixed(1)}° Y: {tiltY.toFixed(1)}°
        </div>
      </div>
    </Card3DTilt>
  );
};