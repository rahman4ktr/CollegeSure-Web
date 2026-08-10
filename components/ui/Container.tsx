"use client";

import { ReactNode, forwardRef, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "main" | "header" | "footer" | "nav";
  narrow?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  paddingTop?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  paddingBottom?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  centered?: boolean;
  background?: string;
  animated?: boolean;
  id?: string;
  role?: string;
  ariaLabel?: string;
}

const sizeClasses = {
  xs: "max-w-2xl",
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[90rem]",
  full: "max-w-full",
};

const paddingClasses = {
  none: "px-0",
  xs: "px-2 sm:px-3 lg:px-4",
  sm: "px-3 sm:px-4 lg:px-6",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12",
  xl: "px-8 sm:px-12 lg:px-16",
};

const paddingTopClasses = {
  none: "pt-0",
  xs: "pt-2 sm:pt-3 lg:pt-4",
  sm: "pt-3 sm:pt-4 lg:pt-6",
  md: "pt-4 sm:pt-6 lg:pt-8",
  lg: "pt-6 sm:pt-8 lg:pt-12",
  xl: "pt-8 sm:pt-12 lg:pt-16",
};

const paddingBottomClasses = {
  none: "pb-0",
  xs: "pb-2 sm:pb-3 lg:pb-4",
  sm: "pb-3 sm:pb-4 lg:pb-6",
  md: "pb-4 sm:pb-6 lg:pb-8",
  lg: "pb-6 sm:pb-8 lg:pb-12",
  xl: "pb-8 sm:pb-12 lg:pb-16",
};

const Container = forwardRef<HTMLElement, ContainerProps>(
  (
    {
      children,
      className = "",
      as = "div",
      narrow = false,
      size = "lg",
      padding = "md",
      paddingTop,
      paddingBottom,
      centered = true,
      background,
      animated = false,
      id,
      role,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const Component = as as any;

    // If narrow is true, override size to sm
    const finalSize = narrow ? "sm" : size;

    // Determine padding classes
    const finalPaddingTop = paddingTop || padding;
    const finalPaddingBottom = paddingBottom || padding;

    // Build className
    const containerClasses = `
      w-full
      ${paddingClasses[padding]}
      ${paddingTopClasses[finalPaddingTop]}
      ${paddingBottomClasses[finalPaddingBottom]}
      ${sizeClasses[finalSize]}
      ${centered ? 'mx-auto' : ''}
      ${background ? `bg-${background}` : ''}
      ${animated ? 'transition-all duration-300 hover:scale-[1.01]' : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim();

    return (
      <Component
        ref={ref}
        id={id}
        className={containerClasses}
        role={role}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

// Helper components for common use cases

export const SectionContainer = forwardRef<HTMLElement, ContainerProps>(
  (props, ref) => (
    <Container
      ref={ref}
      as="section"
      className="py-16 sm:py-20 lg:py-24"
      {...props}
    />
  )
);

SectionContainer.displayName = "SectionContainer";

export const NarrowContainer = forwardRef<HTMLElement, ContainerProps>(
  (props, ref) => (
    <Container
      ref={ref}
      as="div"
      narrow
      className="text-center"
      {...props}
    />
  )
);

NarrowContainer.displayName = "NarrowContainer";

export const HeroContainer = forwardRef<HTMLElement, ContainerProps>(
  (props, ref) => (
    <Container
      ref={ref}
      as="section"
      size="xl"
      padding="lg"
      className="min-h-[80vh] flex items-center"
      {...props}
    />
  )
);

HeroContainer.displayName = "HeroContainer";

export const ContentContainer = forwardRef<HTMLElement, ContainerProps>(
  (props, ref) => (
    <Container
      ref={ref}
      as="article"
      size="md"
      padding="lg"
      className="prose prose-lg max-w-none"
      {...props}
    />
  )
);

ContentContainer.displayName = "ContentContainer";

// Utility function to create responsive containers
export function createContainer(
  defaultProps: Partial<ContainerProps> = {}
) {
  return function CustomContainer(props: ContainerProps) {
    return <Container {...defaultProps} {...props} />;
  };
}

export default Container;