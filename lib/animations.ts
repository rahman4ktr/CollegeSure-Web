import type { Variants, Transition, TargetAndTransition } from "framer-motion";

/**
 * ANIMATION DESIGN SYSTEM TIERS
 * Fast UI: 150–200ms (hover, button feedback, icons)
 * Normal UI: 250–400ms (cards, menus, dialogs, tabs)
 * Large transitions: 500–900ms (hero, page transitions, reveals)
 * Epic: 1000ms+ (page transitions, entrance animations)
 */
export const ANIMATION_TIERS = {
  instant: 0.08,
  fast: 0.18,
  normal: 0.32,
  large: 0.65,
  epic: 1.0,
} as const;

/**
 * EASING CURVES
 * Custom easing functions for different animation types
 */
export const EASING = {
  // Standard cubic-bezier curves
  easeOut: [0.22, 1, 0.36, 1] as [number, number, number, number],
  easeIn: [0.65, 0, 1, 0.36] as [number, number, number, number],
  easeInOut: [0.65, 0, 0.35, 1] as [number, number, number, number],

  // Custom curves for specific effects
  springy: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  bouncy: [0.34, 1.2, 0.64, 1] as [number, number, number, number],
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  gentle: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],

  // Overshoot effects
  overshoot: [0.34, 1.3, 0.64, 1] as [number, number, number, number],

  // Bounce effects
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],

  // Linear
  linear: [0, 0, 1, 1] as [number, number, number, number],
};

/**
 * SPRING PRESETS
 * Pre-configured spring animations for different feels
 */
export const SPRING_PRESETS: Record<string, Transition> = {
  // Tactile, responsive feel for buttons and interactive elements
  tactile: {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 0.8,
  },

  // Smooth, fluid animations for cards and containers
  smooth: {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1,
  },

  // Bouncy, playful animations for notifications and badges
  bouncy: {
    type: "spring",
    stiffness: 450,
    damping: 18,
    mass: 0.6,
  },

  // Gentle, subtle animations for backgrounds and accents
  gentle: {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 1.2,
  },

  // Heavy, weighty animations for modals and overlays
  heavy: {
    type: "spring",
    stiffness: 150,
    damping: 30,
    mass: 1.5,
  },

  // Slow, organic animations for nature-like effects
  organic: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 2,
  },

  // Quick, snappy animations for micro-interactions
  snappy: {
    type: "spring",
    stiffness: 600,
    damping: 20,
    mass: 0.5,
  },

  // Floating, ethereal animations for floating elements
  float: {
    type: "spring",
    stiffness: 80,
    damping: 15,
    mass: 1.8,
  },
};

/**
 * STAGGER VARIANTS
 * Pre-configured stagger animations for lists and grids
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/**
 * FADE VARIANTS
 */
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIERS.normal,
      ease: EASING.easeOut,
      delay: customDelay,
    },
  }),
};

export const fadeDownVariant: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIERS.normal,
      ease: EASING.easeOut,
      delay: customDelay,
    },
  }),
};

export const fadeLeftVariant: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIERS.normal,
      ease: EASING.easeOut,
      delay: customDelay,
    },
  }),
};

export const fadeRightVariant: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIERS.normal,
      ease: EASING.easeOut,
      delay: customDelay,
    },
  }),
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: ANIMATION_TIERS.fast,
      ease: "easeOut",
      delay: customDelay,
    },
  }),
};

export const fadeScaleVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...SPRING_PRESETS.tactile,
      delay: customDelay,
    },
  }),
};

/**
 * SCALE VARIANTS
 */
export const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_TIERS.normal,
      ease: EASING.easeOut,
      delay: customDelay,
    },
  }),
};

export const scaleUpVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...SPRING_PRESETS.bouncy,
      delay: customDelay,
    },
  }),
};

/**
 * SLIDE VARIANTS
 */
export const slideInVariant: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIERS.large,
      ease: EASING.easeOut,
      delay: customDelay,
    },
  }),
};

export const slideOutVariant: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIERS.large,
      ease: EASING.easeOut,
      delay: customDelay,
    },
  }),
};

/**
 * MODAL & OVERLAY VARIANTS
 */
export const modalVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...SPRING_PRESETS.tactile,
      duration: ANIMATION_TIERS.normal,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 8,
    transition: {
      duration: ANIMATION_TIERS.fast,
      ease: EASING.easeIn,
    },
  },
};

export const backdropVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: ANIMATION_TIERS.fast },
  },
  exit: {
    opacity: 0,
    transition: { duration: ANIMATION_TIERS.fast },
  },
};

export const drawerVariant: Variants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...SPRING_PRESETS.smooth,
      duration: ANIMATION_TIERS.large,
    },
  },
  exit: {
    opacity: 0,
    x: -120,
    transition: {
      duration: ANIMATION_TIERS.normal,
      ease: EASING.easeIn,
    },
  },
};

/**
 * HOVER & INTERACTION PRESETS
 */
export const cardHoverProps: TargetAndTransition = {
  scale: 1.015,
  y: -4,
  transition: SPRING_PRESETS.tactile,
};

export const cardTapProps: TargetAndTransition = {
  scale: 0.985,
  transition: SPRING_PRESETS.tactile,
};

export const buttonHoverProps: TargetAndTransition = {
  y: -1,
  scale: 1.02,
  transition: SPRING_PRESETS.tactile,
};

export const buttonTapProps: TargetAndTransition = {
  scale: 0.97,
  transition: SPRING_PRESETS.tactile,
};

export const linkHoverProps: TargetAndTransition = {
  x: 3,
  transition: SPRING_PRESETS.tactile,
};

export const iconHoverProps: TargetAndTransition = {
  scale: 1.1,
  rotate: -5,
  transition: SPRING_PRESETS.snappy,
};

/**
 * PAGE TRANSITIONS
 */
export const pageTransitionVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIERS.large,
      ease: EASING.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: ANIMATION_TIERS.normal,
      ease: EASING.easeIn,
    },
  },
};

export const pageFadeVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_TIERS.large,
      ease: EASING.easeOut,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: ANIMATION_TIERS.normal,
      ease: EASING.easeIn,
    },
  },
};

/**
 * 3D & FLIP VARIANTS
 */
export const flipVariant: Variants = {
  hidden: { opacity: 0, rotateX: 90, scale: 0.8 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      ...SPRING_PRESETS.bouncy,
      delay: customDelay,
    },
  }),
};

export const flipInVariant: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      ...SPRING_PRESETS.smooth,
      delay: customDelay,
    },
  }),
};

/**
 * ZOOM VARIANTS
 */
export const zoomInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...SPRING_PRESETS.bouncy,
      delay: customDelay,
    },
  }),
};

export const zoomOutVariant: Variants = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...SPRING_PRESETS.smooth,
      delay: customDelay,
    },
  }),
};

/**
 * LOADING ANIMATIONS
 */
export const pulseVariant: Variants = {
  initial: { opacity: 0.5, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: EASING.easeInOut,
    },
  },
};

export const shimmerVariant: Variants = {
  initial: { x: '-100%' },
  animate: {
    x: '100%',
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: EASING.linear,
    },
  },
};

/**
 * SCROLL ANIMATIONS
 */
export const scrollRevealVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIERS.large,
      ease: EASING.easeOut,
    },
  },
};

export const scrollScaleVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...SPRING_PRESETS.smooth,
    },
  },
};

/**
 * UTILITY FUNCTIONS
 */
export const createStaggerVariant = (
  staggerChildren: number = 0.08,
  delayChildren: number = 0.05
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const createTransition = (
  duration: number = ANIMATION_TIERS.normal,
  ease: any = EASING.easeOut,
  delay: number = 0
): Transition => ({
  duration,
  ease,
  delay,
});

export const createSpringTransition = (
  preset: keyof typeof SPRING_PRESETS = "tactile",
  delay: number = 0
): Transition => ({
  ...SPRING_PRESETS[preset],
  delay,
});

/**
 * COMBINED PRESETS
 */
export const ANIMATION_PRESETS = {
  // Entry animations
  fadeUp: fadeUpVariant,
  fadeDown: fadeDownVariant,
  fadeLeft: fadeLeftVariant,
  fadeRight: fadeRightVariant,
  fadeIn: fadeInVariant,
  fadeScale: fadeScaleVariant,
  scaleIn: scaleInVariant,
  scaleUp: scaleUpVariant,
  slideIn: slideInVariant,
  slideOut: slideOutVariant,
  flip: flipVariant,
  flipIn: flipInVariant,
  zoomIn: zoomInVariant,
  zoomOut: zoomOutVariant,

  // Page transitions
  pageTransition: pageTransitionVariant,
  pageFade: pageFadeVariant,

  // UI transitions
  modal: modalVariant,
  backdrop: backdropVariant,
  drawer: drawerVariant,

  // Loading
  pulse: pulseVariant,
  shimmer: shimmerVariant,

  // Scroll
  scrollReveal: scrollRevealVariant,
  scrollScale: scrollScaleVariant,
  
  // Staggers
  stagger: staggerContainer,
  staggerFast: staggerFast,
  staggerSlow: staggerSlow,
} as const;

/**
 * MOTION PROPS PRESETS
 * Ready-to-use motion props for common components
 */
export const MOTION_PROPS = {
  // Cards
  card: {
    whileHover: cardHoverProps,
    whileTap: cardTapProps,
  },

  // Buttons
  button: {
    whileHover: buttonHoverProps,
    whileTap: buttonTapProps,
  },

  // Links
  link: {
    whileHover: linkHoverProps,
  },

  // Icons
  icon: {
    whileHover: iconHoverProps,
  },

  // Interactive containers
  interactive: {
    whileHover: { scale: 1.02, transition: SPRING_PRESETS.tactile },
    whileTap: { scale: 0.98, transition: SPRING_PRESETS.tactile },
  },
} as const;

export default {
  ANIMATION_TIERS,
  EASING,
  SPRING_PRESETS,
  ANIMATION_PRESETS,
  MOTION_PROPS,
  // Individual exports
  fadeUpVariant,
  fadeDownVariant,
  fadeLeftVariant,
  fadeRightVariant,
  fadeInVariant,
  fadeScaleVariant,
  scaleInVariant,
  scaleUpVariant,
  slideInVariant,
  slideOutVariant,
  modalVariant,
  backdropVariant,
  drawerVariant,
  pageTransitionVariant,
  pageFadeVariant,
  flipVariant,
  flipInVariant,
  zoomInVariant,
  zoomOutVariant,
  pulseVariant,
  shimmerVariant,
  scrollRevealVariant,
  scrollScaleVariant,
  staggerContainer,
  staggerFast,
  staggerSlow,
  cardHoverProps,
  cardTapProps,
  buttonHoverProps,
  buttonTapProps,
  linkHoverProps,
  iconHoverProps,
  createStaggerVariant,
  createTransition,
  createSpringTransition,
};