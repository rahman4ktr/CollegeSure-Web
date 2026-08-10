"use client";

import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?:
  | "teal"
  | "navy"
  | "orange"
  | "gray"
  | "green"
  | "red"
  | "yellow"
  | "purple"
  | "pink"
  | "blue"
  | "white"
  | "gradient";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  rounded?: "full" | "lg" | "md";
  animated?: boolean;
  pulse?: boolean;
  glow?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  as?: "span" | "div" | "a";
  href?: string;
}

const variantStyles = {
  teal: "bg-[#0D9488]/10 text-[#0D9488] border-[#0D9488]/20",
  navy: "bg-[#0B3C5D]/10 text-[#0B3C5D] border-[#0B3C5D]/20",
  orange: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20",
  gray: "bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]",
  green: "bg-green-50 text-green-700 border-green-200",
  red: "bg-red-50 text-red-700 border-red-200",
  yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  pink: "bg-pink-50 text-pink-700 border-pink-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  white: "bg-white/90 text-[#0B3C5D] border-white/30 backdrop-blur-sm",
  gradient: "bg-gradient-to-r from-[#0D9488] to-[#0B3C5D] text-white border-transparent",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-2.5 py-1 text-xs",
  lg: "px-3.5 py-1.5 text-sm",
};

const roundedStyles = {
  full: "rounded-full",
  lg: "rounded-lg",
  md: "rounded-md",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({
    children,
    variant = "teal",
    size = "md",
    icon,
    iconPosition = "left",
    rounded = "full",
    animated = false,
    pulse = false,
    glow = false,
    clickable = false,
    onClick,
    className = "",
    as = "span",
    href,
    ...props
  }, ref) => {
    // Combine classes manually instead of using cn
    const baseStyles = `
      inline-flex items-center gap-1.5 font-semibold
      border transition-all duration-200
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${roundedStyles[rounded]}
      ${clickable ? 'cursor-pointer hover:scale-105 hover:shadow-md' : ''}
      ${animated ? 'animate-in fade-in slide-in-from-top-2 duration-300' : ''}
      ${pulse ? 'animate-pulse' : ''}
      ${glow ? `shadow-[0_0_20px_${variant === 'teal' ? '#0D9488' : variant === 'navy' ? '#0B3C5D' : variant === 'orange' ? '#F97316' : 'rgba(0,0,0,0.1)'}40]` : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim();

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
      </>
    );

    // Animated badge with motion
    if (animated) {
      const motionProps: any = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { type: "spring", stiffness: 400, damping: 25 },
        className: `${baseStyles} ${clickable ? 'cursor-pointer' : ''}`,
        ...props,
      };

      if (as === "a" && href) {
        return (
          <motion.a href={href} {...motionProps} ref={ref as any}>
            {content}
          </motion.a>
        );
      }

      if (clickable && onClick) {
        return (
          <motion.button
            {...motionProps}
            onClick={onClick}
            ref={ref as any}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content}
          </motion.button>
        );
      }

      return (
        <motion.span {...motionProps} ref={ref as any}>
          {content}
        </motion.span>
      );
    }

    // Non-animated badge
    const commonProps = {
      className: baseStyles,
      onClick: clickable ? onClick : undefined,
      ...props,
    };

    if (as === "a" && href) {
      return (
        <a href={href} ref={ref as any} {...commonProps}>
          {content}
        </a>
      );
    }

    if (as === "div") {
      return (
        <div ref={ref as any} {...commonProps}>
          {content}
        </div>
      );
    }

    return (
      <span ref={ref} {...commonProps}>
        {content}
      </span>
    );
  }
);

Badge.displayName = "Badge";

// Helper components for common badge types
export const StatusBadge = ({
  status,
  className = ""
}: {
  status: "active" | "inactive" | "pending" | "completed" | "error" | "success";
  className?: string;
}) => {
  const statusMap = {
    active: { variant: "green" as const, label: "Active", icon: "●" },
    inactive: { variant: "gray" as const, label: "Inactive", icon: "○" },
    pending: { variant: "yellow" as const, label: "Pending", icon: "◐" },
    completed: { variant: "teal" as const, label: "Completed", icon: "✓" },
    error: { variant: "red" as const, label: "Error", icon: "✕" },
    success: { variant: "green" as const, label: "Success", icon: "✓" },
  };

  const config = statusMap[status];

  return (
    <Badge variant={config.variant} className={className}>
      <span className="text-[10px]">{config.icon}</span>
      {config.label}
    </Badge>
  );
};

export const TagBadge = ({
  children,
  closable = false,
  onClose,
  className = "",
}: {
  children: ReactNode;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
}) => {
  return (
    <Badge variant="gray" className={className}>
      {children}
      {closable && (
        <button
          onClick={onClose}
          className="ml-1 hover:text-[#0B3C5D] transition-colors"
          aria-label="Remove tag"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </Badge>
  );
};

export const CountBadge = ({
  count,
  max = 99,
  className = "",
  variant = "teal",
}: {
  count: number;
  max?: number;
  className?: string;
  variant?: BadgeProps["variant"];
}) => {
  const display = count > max ? `${max}+` : count;

  return (
    <Badge variant={variant} size="sm" className={className}>
      {display}
    </Badge>
  );
};

// Dot badge (for status indicators)
export const DotBadge = ({
  color = "teal",
  size = "md",
  label,
  className = "",
}: {
  color?: "teal" | "navy" | "orange" | "green" | "red" | "yellow" | "purple" | "pink" | "blue";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}) => {
  const colorMap = {
    teal: "bg-[#0D9488]",
    navy: "bg-[#0B3C5D]",
    orange: "bg-[#F97316]",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    blue: "bg-blue-500",
  };

  const sizeMap = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`
          ${sizeMap[size]} 
          ${colorMap[color]} 
          rounded-full 
          ${size === 'lg' ? 'ring-2 ring-white/50' : ''}
          inline-block
        `}
        aria-hidden
      />
      {label && <span className="text-xs text-[#475569]">{label}</span>}
    </span>
  );
};

// Icon badge
export const IconBadge = ({
  icon,
  variant = "teal",
  size = "md",
  className = "",
}: {
  icon: ReactNode;
  variant?: BadgeProps["variant"];
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  const sizeMap = {
    sm: "p-1",
    md: "p-1.5",
    lg: "p-2",
  };

  const iconSizeMap = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <Badge variant={variant} size={size} className={`${sizeMap[size]} ${className}`}>
      <span className={iconSizeMap[size]}>{icon}</span>
    </Badge>
  );
};

export default Badge;