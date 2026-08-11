"use client";

import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SPRING_PRESETS } from "@/lib/animations";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "teal"
  | "orange"
  | "navy"
  | "gradient"
  | "gradient-teal"
  | "gradient-orange"
  | "success"
  | "danger"
  | "warning"
  | "info";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

type Rounded = "none" | "sm" | "md" | "lg" | "xl" | "full";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  rounded?: Rounded;
  className?: string;
  loading?: boolean;
  loadingText?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  animated?: boolean;
  glow?: boolean;
  pulse?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onDrag"> & {
    as?: "button";
    href?: never;
    target?: never;
    rel?: never;
  };

type ButtonAsLink = BaseProps & {
  as: "link";
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonAsAnchor = BaseProps & {
  as: "a";
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#B30F66] text-white hover:bg-[#591084] shadow-[0_2px_8px_rgba(179,15,102,0.3)] hover:shadow-[0_4px_16px_rgba(89,16,132,0.4)] border border-transparent",
  secondary:
    "bg-[#04164B] text-white hover:bg-[#040943] shadow-[0_2px_8px_rgba(4,22,75,0.2)] hover:shadow-[0_4px_16px_rgba(4,22,75,0.3)] border border-transparent",
  teal:
    "bg-[#159447] text-white hover:bg-[#0f6b33] shadow-[0_2px_8px_rgba(21,148,71,0.25)] hover:shadow-[0_4px_16px_rgba(21,148,71,0.35)] border border-transparent",
  orange:
    "bg-[#F36C21] text-white hover:bg-[#d85810] shadow-[0_2px_8px_rgba(243,108,33,0.3)] hover:shadow-[0_4px_16px_rgba(243,108,33,0.4)] border border-transparent",
  navy:
    "bg-[#04164B] text-white hover:bg-[#040943] shadow-[0_2px_8px_rgba(4,22,75,0.2)] hover:shadow-[0_4px_16px_rgba(4,22,75,0.3)] border border-transparent",
  outline:
    "bg-transparent border-2 border-[#04164B] text-[#04164B] hover:bg-[#04164B] hover:text-white",
  ghost:
    "bg-transparent text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] border border-transparent",
  gradient:
    "bg-gradient-to-r from-[#0B3C5D] via-[#0D9488] to-[#F97316] text-white hover:shadow-lg border border-transparent",
  "gradient-teal":
    "bg-gradient-to-r from-[#0D9488] to-[#0B3C5D] text-white hover:shadow-lg border border-transparent",
  "gradient-orange":
    "bg-gradient-to-r from-[#F97316] to-[#ea6c0c] text-white hover:shadow-lg border border-transparent",
  success:
    "bg-green-600 text-white hover:bg-green-700 shadow-[0_2px_8px_rgba(22,163,74,0.25)] hover:shadow-[0_4px_16px_rgba(22,163,74,0.35)] border border-transparent",
  danger:
    "bg-red-600 text-white hover:bg-red-700 shadow-[0_2px_8px_rgba(220,38,38,0.25)] hover:shadow-[0_4px_16px_rgba(220,38,38,0.35)] border border-transparent",
  warning:
    "bg-yellow-500 text-white hover:bg-yellow-600 shadow-[0_2px_8px_rgba(234,179,8,0.25)] hover:shadow-[0_4px_16px_rgba(234,179,8,0.35)] border border-transparent",
  info:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)] border border-transparent",
};

const sizeStyles: Record<Size, string> = {
  xs: "px-2.5 py-1 text-xs gap-1",
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3.5 text-base gap-2.5",
  xl: "px-10 py-4 text-lg gap-3",
};

const roundedStyles: Record<Rounded, string> = {
  none: "rounded-none",
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const baseStyles =
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488] disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap relative overflow-hidden";

const defaultMotionProps = {
  whileHover: {
    y: -2,
    scale: 1.02,
    transition: SPRING_PRESETS.tactile,
  },
  whileTap: {
    scale: 0.97,
    transition: SPRING_PRESETS.tactile,
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      rounded = "xl",
      className = "",
      loading = false,
      loadingText = "Loading...",
      children,
      leftIcon,
      rightIcon,
      fullWidth = false,
      animated = true,
      glow = false,
      pulse = false,
      disabled = false,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const classes = `
      ${baseStyles} 
      ${variantStyles[variant]} 
      ${sizeStyles[size]} 
      ${roundedStyles[rounded]}
      ${fullWidth ? 'w-full' : ''}
      ${glow ? `shadow-lg hover:shadow-xl` : ''}
      ${pulse ? 'animate-pulse' : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim();

    const content = (
      <>
        {loading ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
            {loadingText}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="flex-shrink-0">{leftIcon}</span>
            )}
            <span>{children}</span>
            {rightIcon && (
              <span className="flex-shrink-0">{rightIcon}</span>
            )}
          </>
        )}
      </>
    );

    // Motion props
    const motionProps: any = {
      ...(animated ? defaultMotionProps : {}),
      whileHover: animated ? {
        y: -2,
        scale: 1.02,
        transition: SPRING_PRESETS.tactile,
      } : {},
      whileTap: animated ? {
        scale: 0.97,
        transition: SPRING_PRESETS.tactile,
      } : {},
    };

    // Shimmer effect for gradient buttons
    const isGradient = variant.startsWith('gradient');
    const showShimmer = isGradient && animated;

    // Link type
    if (props.as === "link") {
      const { as: _as, href, target, rel, onClick, ...rest } = props as ButtonAsLink;
      return (
        <motion.div {...motionProps} className={`${fullWidth ? 'w-full' : 'inline-block'}`}>
          <Link
            href={href}
            target={target}
            rel={rel}
            onClick={onClick}
            className={classes}
            {...(rest as any)}
          >
            {content}
            {showShimmer && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}
          </Link>
        </motion.div>
      );
    }

    // Anchor type
    if (props.as === "a") {
      const { as: _as, href, target, rel, onClick, ...rest } = props as ButtonAsAnchor;
      return (
        <motion.div {...motionProps} className={`${fullWidth ? 'w-full' : 'inline-block'}`}>
          <a
            href={href}
            target={target}
            rel={rel}
            onClick={onClick}
            className={classes}
            {...(rest as any)}
          >
            {content}
            {showShimmer && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}
          </a>
        </motion.div>
      );
    }

    // Button type
    const { as: _as, ...rest } = props as ButtonAsButton;
    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={loading || disabled}
        {...motionProps}
        {...(rest as any)}
      >
        {content}
        {showShimmer && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

// Helper components for common button patterns

export const IconButton = forwardRef<
  HTMLButtonElement,
  BaseProps & {
    icon: ReactNode;
    label: string;
    onClick?: () => void;
    as?: "button";
  }
>(({ icon, label, ...props }, ref) => {
  return (
    <Button ref={ref} leftIcon={icon} ariaLabel={label} {...(props as any)}>
      {label}
    </Button>
  );
});

IconButton.displayName = "IconButton";

export const LoadingButton = forwardRef<
  HTMLButtonElement,
  BaseProps & {
    loading?: boolean;
    loadingText?: string;
    onClick?: () => void;
    as?: "button";
  }
>(({ loading = true, loadingText = "Loading...", ...props }, ref) => {
  return (
    <Button ref={ref} loading={loading} loadingText={loadingText} {...(props as any)}>
      {props.children}
    </Button>
  );
});

LoadingButton.displayName = "LoadingButton";

export const SocialButton = forwardRef<
  HTMLButtonElement,
  BaseProps & {
    provider: "google" | "facebook" | "twitter" | "github" | "linkedin";
    onClick?: () => void;
    as?: "button";
  }
>(({ provider, ...props }, ref) => {
  const providerConfig = {
    google: { icon: "G", label: "Google", variant: "outline" as Variant },
    facebook: { icon: "f", label: "Facebook", variant: "primary" as Variant },
    twitter: { icon: "🐦", label: "Twitter", variant: "outline" as Variant },
    github: { icon: "🐙", label: "GitHub", variant: "secondary" as Variant },
    linkedin: { icon: "in", label: "LinkedIn", variant: "primary" as Variant },
  };

  const config = providerConfig[provider];
  return (
    <Button ref={ref} variant={config.variant} leftIcon={config.icon} {...(props as any)}>
      Continue with {config.label}
    </Button>
  );
});

SocialButton.displayName = "SocialButton";

export default Button;