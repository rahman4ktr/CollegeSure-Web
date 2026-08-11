"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
  id?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "gradient" | "underlined" | "bordered" | "minimal";
  animated?: boolean;
  delay?: number;
  duration?: number;
  separator?: "line" | "dot" | "none";
  separatorColor?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right" | "top";
  spacing?: "sm" | "md" | "lg";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  titleColor?: string;
  descriptionColor?: string;
  eyebrowColor?: string;
  badge?: string;
  badgeVariant?: "teal" | "navy" | "orange" | "gray" | "gradient";
}

const sizeStyles = {
  sm: {
    title: "text-2xl sm:text-3xl",
    eyebrow: "text-xs",
    description: "text-sm sm:text-base",
    spacing: "gap-2",
  },
  md: {
    title: "text-3xl sm:text-4xl",
    eyebrow: "text-xs",
    description: "text-base sm:text-lg",
    spacing: "gap-3",
  },
  lg: {
    title: "text-4xl sm:text-5xl",
    eyebrow: "text-sm",
    description: "text-lg sm:text-xl",
    spacing: "gap-4",
  },
  xl: {
    title: "text-5xl sm:text-6xl",
    eyebrow: "text-base",
    description: "text-xl sm:text-2xl",
    spacing: "gap-5",
  },
};

const alignStyles = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

const badgeVariantStyles = {
  teal: "bg-[#FEF2F7] text-[#B30F66] border-[#B30F66]/20",
  navy: "bg-[#04164B]/10 text-[#04164B] border-[#04164B]/20",
  orange: "bg-[#FEF7F3] text-[#F36C21] border-[#F36C21]/20",
  gray: "bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]",
  gradient: "bg-gradient-to-r from-[#B30F66] to-[#591084] text-white border-transparent",
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  eyebrowClassName = "",
  id,
  size = "md",
  variant = "default",
  animated = true,
  delay = 0,
  duration = 0.6,
  separator = "line",
  separatorColor = "#0D9488",
  icon,
  iconPosition = "left",
  spacing = "md",
  as: Tag = "h2",
  titleColor,
  descriptionColor,
  eyebrowColor,
  badge,
  badgeVariant = "teal",
}: SectionHeadingProps) {
  const sizeClasses = sizeStyles[size];
  const alignClass = alignStyles[align];

  const spacingStyles = {
    sm: "space-y-2",
    md: "space-y-3",
    lg: "space-y-4",
  };

  const getSeparator = () => {
    switch (separator) {
      case "line":
        return (
          <span
            className="inline-block w-12 h-0.5 rounded-full"
            style={{ backgroundColor: separatorColor }}
          />
        );
      case "dot":
        return (
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: separatorColor }}
          />
        );
      case "none":
        return null;
    }
  };

  const renderEyebrow = () => {
    if (!eyebrow) return null;

    const content = (
      <>
        {separator !== "none" && getSeparator()}
        <span style={{ color: eyebrowColor || "#0D9488" }}>
          {eyebrow}
        </span>
        {separator !== "none" && getSeparator()}
      </>
    );

    return (
      <motion.div
        className={`
          inline-flex items-center gap-3 font-semibold uppercase tracking-widest
          ${sizeClasses.eyebrow}
          ${eyebrowClassName}
        `}
        initial={animated ? { opacity: 0, y: 10 } : undefined}
        animate={animated ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.4, delay: delay }}
      >
        {icon && iconPosition === "left" && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        {content}
        {icon && iconPosition === "right" && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </motion.div>
    );
  };

  const renderTitle = () => {
    const titleClasses = `
      font-bold leading-tight tracking-tight
      ${sizeClasses.title}
      ${titleClassName}
      ${variant === 'gradient' ? 'bg-gradient-to-r from-[#0B3C5D] via-[#0D9488] to-[#F97316] text-transparent bg-clip-text' : ''}
      ${variant === 'underlined' ? 'relative inline-block' : ''}
      ${variant === 'bordered' ? 'border-b-4 border-[#0D9488] pb-2' : ''}
      ${titleColor ? `text-[${titleColor}]` : `text-[#04164B]`}
    `.trim();

    const titleContent = (
      <Tag
        id={id}
        className={titleClasses}
        style={{ color: titleColor || undefined }}
      >
        {title}
        {variant === 'underlined' && (
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#0D9488] to-[#0B3C5D] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
          />
        )}
      </Tag>
    );

    if (animated) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: delay + 0.1 }}
        >
          {titleContent}
        </motion.div>
      );
    }

    return titleContent;
  };

  const renderDescription = () => {
    if (!description) return null;

    const descClasses = `
      max-w-2xl leading-relaxed
      ${sizeClasses.description}
      ${descriptionClassName}
      ${descriptionColor ? `text-[${descriptionColor}]` : 'text-[#475569]'}
      ${align === 'center' ? 'mx-auto' : ''}
    `.trim();

    if (animated) {
      return (
        <motion.div
          className={descClasses}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
        >
          {description}
        </motion.div>
      );
    }

    return <div className={descClasses}>{description}</div>;
  };

  const renderBadge = () => {
    if (!badge) return null;

    const badgeClasses = `
      inline-flex items-center px-3 py-1 text-xs font-semibold
      rounded-full border
      ${badgeVariantStyles[badgeVariant]}
    `;

    return (
      <motion.span
        className={badgeClasses}
        initial={animated ? { scale: 0, opacity: 0 } : undefined}
        animate={animated ? { scale: 1, opacity: 1 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 15, delay: delay + 0.3 }}
      >
        {badge}
      </motion.span>
    );
  };

  return (
    <div
      className={`
        flex flex-col ${alignClass}
        ${spacingStyles[spacing]}
        ${className}
      `}
    >
      {badge && renderBadge()}
      {eyebrow && renderEyebrow()}
      {icon && iconPosition === "top" && (
        <div className="text-4xl mb-2">{icon}</div>
      )}
      {renderTitle()}
      {renderDescription()}
    </div>
  );
}

// Helper components for common heading patterns

export const HeroHeading = (props: Omit<SectionHeadingProps, "size" | "variant">) => (
  <SectionHeading {...props} size="xl" variant="gradient" />
);

export const CenteredHeading = (props: Omit<SectionHeadingProps, "align">) => (
  <SectionHeading {...props} align="center" />
);

export const LeftHeading = (props: Omit<SectionHeadingProps, "align">) => (
  <SectionHeading {...props} align="left" />
);

export const RightHeading = (props: Omit<SectionHeadingProps, "align">) => (
  <SectionHeading {...props} align="right" />
);

export const AnimatedHeading = (props: Omit<SectionHeadingProps, "animated">) => (
  <SectionHeading {...props} animated={true} />
);