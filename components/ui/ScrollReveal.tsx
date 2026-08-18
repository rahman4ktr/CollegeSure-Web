"use client";

import React, { useRef, useState, useEffect } from "react";
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

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
  duration = ANIMATION_TIERS.normal,
  once = true,
  disableMotion = false,
  rootMargin = "-40px",
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (disableMotion || typeof window === "undefined") {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && element) {
              observer.unobserve(element);
              observer.disconnect();
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disableMotion, once, rootMargin]);

  // Compute CSS transform styles
  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1) rotate(0deg)";
    switch (direction) {
      case "up": return `translate3d(0, ${distance}px, 0)`;
      case "down": return `translate3d(0, -${distance}px, 0)`;
      case "left": return `translate3d(${distance}px, 0, 0)`;
      case "right": return `translate3d(-${distance}px, 0, 0)`;
      case "scale": return `translate3d(0, 0, 0) scale(0.95)`;
      case "rotate": return `translate3d(0, 0, 0) rotate(5deg)`;
      case "none": return "translate3d(0, 0, 0)";
      default: return `translate3d(0, ${distance}px, 0)`;
    }
  };

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}s`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

// Stagger & Helper Components
export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  staggerDirection?: "forward" | "backward" | "random";
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
}) {
  return (
    <ScrollReveal className={className} delay={delay} duration={duration} once={once}>
      {children}
    </ScrollReveal>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 20,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale" | "rotate";
  distance?: number;
  spring?: boolean;
  springConfig?: { damping?: number; stiffness?: number; mass?: number };
}) {
  return (
    <ScrollReveal className={className} direction={direction} distance={distance} once>
      {children}
    </ScrollReveal>
  );
}

export function FadeIn(props: Omit<ScrollRevealProps, "direction" | "distance">) {
  return <ScrollReveal {...props} direction="none" />;
}

export function ScaleIn(props: Omit<ScrollRevealProps, "direction" | "distance" | "scale"> & { scale?: number }) {
  return <ScrollReveal {...props} direction="scale" />;
}

export function RotateIn(props: Omit<ScrollRevealProps, "direction" | "distance" | "rotate"> & { rotate?: number }) {
  return <ScrollReveal {...props} direction="rotate" />;
}