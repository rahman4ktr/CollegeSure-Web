"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ANIMATION_TIERS } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale" | "rotate";
  distance?: number;
  duration?: number;
  staggerChildren?: number;
  staggerDirection?: "forward" | "backward" | "random";
  once?: boolean;
  amount?: number | "some" | "all";
  spring?: boolean;
  springConfig?: { damping?: number; stiffness?: number; mass?: number };
  disableMotion?: boolean;
  onComplete?: () => void;
  onStart?: () => void;
  rootMargin?: string;
  threshold?: number | number[];
  scale?: number;
  rotate?: number;
  blur?: number;
  id?: string;
}

// Extracted initial/final position helpers (stable, no allocation per render)
function getInitialPosition(direction: string, distance: number, scaleAmount: number, rotateAmount: number) {
  const base = { opacity: 0 };
  switch (direction) {
    case "up": return { ...base, y: distance };
    case "down": return { ...base, y: -distance };
    case "left": return { ...base, x: distance };
    case "right": return { ...base, x: -distance };
    case "scale": return { ...base, scale: scaleAmount };
    case "rotate": return { ...base, rotate: rotateAmount };
    case "none": return { ...base };
    default: return { ...base, y: distance };
  }
}

function getFinalPosition(direction: string) {
  const base = { opacity: 1 };
  switch (direction) {
    case "up":
    case "down": return { ...base, y: 0 };
    case "left":
    case "right": return { ...base, x: 0 };
    case "scale": return { ...base, scale: 1 };
    case "rotate": return { ...base, rotate: 0 };
    case "none": return { ...base };
    default: return { ...base, y: 0 };
  }
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
  duration = ANIMATION_TIERS.normal,
  staggerChildren = 0,
  staggerDirection = "forward",
  once = true,
  amount = 0.2,
  spring = false,
  springConfig = { damping: 25, stiffness: 300, mass: 1 },
  disableMotion = false,
  rootMargin = "-60px",
  scale: scaleAmount = 1,
  rotate: rotateAmount = 0,
  blur: blurAmount = 0,
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  // If motion is disabled, render children directly (no hooks wasted)
  if (disableMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  // Spring variant — only used when spring=true (currently unused in codebase, but kept for API compat)
  if (spring) {
    return (
      <motion.div
        ref={ref}
        id={id}
        className={className}
        initial={{
          opacity: 0,
          x: direction === "left" ? distance : direction === "right" ? -distance : 0,
          y: direction === "up" ? distance : direction === "down" ? -distance : 0,
          scale: direction === "scale" ? scaleAmount : 1,
          rotate: direction === "rotate" ? rotateAmount : 0,
          filter: blurAmount ? `blur(${blurAmount}px)` : 'none',
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: 'blur(0px)',
        }}
        viewport={{ once, amount: amount as any, margin: rootMargin as any }}
        transition={{
          type: "spring",
          ...springConfig,
          delay,
        }}
      >
        {children}
      </motion.div>
    );
  }

  // Stagger variant
  const hasStagger = staggerChildren > 0 && React.Children.count(children) > 1;

  const staggerTransition = hasStagger ? (() => {
    let staggerDirectionValue: number;
    switch (staggerDirection) {
      case "backward": staggerDirectionValue = -1; break;
      case "random": staggerDirectionValue = 0; break;
      default: staggerDirectionValue = 1; break;
    }
    return { staggerChildren, staggerDirection: staggerDirectionValue };
  })() : undefined;

  const filterStyle = blurAmount ? { filter: `blur(${blurAmount}px)` } : undefined;

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={getInitialPosition(direction, distance, scaleAmount, rotateAmount)}
      whileInView={getFinalPosition(direction)}
      viewport={{ once, amount: amount as any, margin: rootMargin as any }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
        delay,
        ...staggerTransition,
      }}
      className={className}
      style={filterStyle}
    >
      {children}
    </motion.div>
  );
}

// Helper wrapper for stagger children
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  staggerDirection?: "forward" | "backward" | "random";
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
}

export function StaggerContainer({
  children,
  className = "",
  staggerChildren = 0.1,
  staggerDirection = "forward",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.2,
}: StaggerContainerProps) {
  return (
    <ScrollReveal
      className={className}
      staggerChildren={staggerChildren}
      staggerDirection={staggerDirection}
      delay={delay}
      duration={duration}
      once={once}
      amount={amount}
    >
      {children}
    </ScrollReveal>
  );
}

// Helper for individual items in a stagger
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale" | "rotate";
  distance?: number;
  spring?: boolean;
  springConfig?: { damping?: number; stiffness?: number; mass?: number };
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 20,
  spring = false,
  springConfig = { damping: 25, stiffness: 300, mass: 1 },
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
        scale: direction === "scale" ? 0.8 : 1,
        rotate: direction === "rotate" ? 10 : 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true, margin: "-60px" as any }}
      transition={{
        ...(spring ? { type: "spring", ...springConfig } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }),
      }}
    >
      {children}
    </motion.div>
  );
}

// Export a fade-in only variant
export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
}: Omit<ScrollRevealProps, "direction" | "distance">) {
  return (
    <ScrollReveal
      className={className}
      direction="none"
      delay={delay}
      duration={duration}
      once={once}
    >
      {children}
    </ScrollReveal>
  );
}

// Export a scale-in variant
export function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  scale = 0.8,
}: Omit<ScrollRevealProps, "direction" | "distance" | "scale"> & { scale?: number }) {
  return (
    <ScrollReveal
      className={className}
      direction="scale"
      scale={scale}
      delay={delay}
      duration={duration}
      once={once}
    >
      {children}
    </ScrollReveal>
  );
}

// Export a rotate-in variant
export function RotateIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  rotate = 10,
}: Omit<ScrollRevealProps, "direction" | "distance" | "rotate"> & { rotate?: number }) {
  return (
    <ScrollReveal
      className={className}
      direction="rotate"
      rotate={rotate}
      delay={delay}
      duration={duration}
      once={once}
    >
      {children}
    </ScrollReveal>
  );
}