"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home, ArrowLeft, Slash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: "chevron" | "slash" | "arrow" | "dot";
  showHome?: boolean;
  homeLabel?: string;
  homeHref?: string;
  maxItems?: number;
  truncate?: boolean;
  animated?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "card" | "pill";
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

export default function Breadcrumbs({
  items,
  className = "",
  separator = "chevron",
  showHome = true,
  homeLabel = "Home",
  homeHref = "/",
  maxItems,
  truncate = true,
  animated = true,
  size = "md",
  variant = "default",
  onItemClick,
}: BreadcrumbsProps) {
  const pathname = usePathname();

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ...(showHome ? [{
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: homeHref,
      }] : []),
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + (showHome ? 2 : 1),
        name: item.label,
        ...(item.href ? { item: item.href } : {}),
      })),
    ],
  };

  const getSeparator = () => {
    switch (separator) {
      case "chevron":
        return <ChevronRight size={iconSize} className="text-[#94A3B8] flex-shrink-0" aria-hidden />;
      case "slash":
        return <Slash size={iconSize} className="text-[#94A3B8] flex-shrink-0" aria-hidden />;
      case "arrow":
        return <ArrowLeft size={iconSize} className="text-[#94A3B8] flex-shrink-0 rotate-180" aria-hidden />;
      case "dot":
        return <span className="w-1 h-1 rounded-full bg-[#94A3B8] flex-shrink-0" aria-hidden />;
      default:
        return <ChevronRight size={iconSize} className="text-[#94A3B8] flex-shrink-0" aria-hidden />;
    }
  };

  // Size configurations
  const sizeStyles = {
    sm: {
      text: "text-xs",
      icon: 12,
      padding: "px-2 py-1",
      gap: "gap-1",
    },
    md: {
      text: "text-sm",
      icon: 14,
      padding: "px-3 py-1.5",
      gap: "gap-1.5",
    },
    lg: {
      text: "text-base",
      icon: 16,
      padding: "px-4 py-2",
      gap: "gap-2",
    },
  };

  // Variant configurations
  const variantStyles = {
    default: "bg-transparent",
    minimal: "bg-transparent border-0",
    card: "bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-xl shadow-sm p-3",
    pill: "bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-full shadow-sm px-4 py-2 inline-flex",
  };

  const { text, icon, padding, gap } = sizeStyles[size];
  const iconSize = icon;

  // Truncate items
  let displayItems = [...items];
  if (maxItems && items.length > maxItems) {
    const startItems = items.slice(0, Math.floor(maxItems / 2));
    const endItems = items.slice(-Math.ceil(maxItems / 2));
    displayItems = [
      ...startItems,
      { label: "...", href: undefined } as BreadcrumbItem,
      ...endItems,
    ];
  }

  // Build breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    ...(showHome ? [{ label: homeLabel, href: homeHref, icon: <Home size={iconSize} /> }] : []),
    ...displayItems,
  ];

  const Wrapper = animated ? motion.nav : "nav";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Wrapper
        aria-label="Breadcrumb"
        className={`
          flex items-center flex-wrap
          ${text} ${gap} ${padding}
          text-[#475569]
          ${variantStyles[variant]}
          ${className}
        `}
        {...(animated && {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, ease: "easeOut" },
        })}
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isEllipsis = item.label === "...";

          // Determine if item is active
          const isActive = isLast ||
            (item.href && pathname === item.href) ||
            item.active;

          const handleClick = () => {
            if (onItemClick && !isActive && !isEllipsis) {
              onItemClick(item, index);
            }
          };

          return (
            <AnimatePresence key={index} mode="wait">
              <motion.div
                className="flex items-center gap-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {/* Separator */}
                {index > 0 && (
                  <span className="mx-1" aria-hidden>
                    {getSeparator()}
                  </span>
                )}

                {/* Breadcrumb Item */}
                {isEllipsis ? (
                  <span className="px-1 text-[#94A3B8] select-none">…</span>
                ) : isActive || !item.href ? (
                  <span
                    className={`
                      flex items-center gap-1.5
                      ${!isLast ? 'text-white/80' : 'text-white font-bold'}
                      ${isLast ? 'pointer-events-none' : ''}
                      ${item.icon ? 'gap-1.5' : ''}
                      ${size === 'lg' ? 'gap-2' : ''}
                    `}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.icon && <span className="text-white/70">{item.icon}</span>}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleClick}
                    className={`
                      flex items-center gap-1.5
                      text-white/80 hover:text-white transition-colors duration-200
                      hover:underline underline-offset-2
                      ${item.icon ? 'gap-1.5' : ''}
                      ${size === 'lg' ? 'gap-2' : ''}
                      focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2 rounded
                    `}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.icon && <span className="text-white/70">{item.icon}</span>}
                    {item.label}
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
          );
        })}
      </Wrapper>
    </>
  );
}

// Helper component for page title extraction
export function PageBreadcrumbs({
  items,
  ...props
}: BreadcrumbsProps) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <Breadcrumbs {...props} items={items} />
      {items.length > 0 && (
        <h1 className="text-xl font-bold text-[#0F172A]">
          {items[items.length - 1].label}
        </h1>
      )}
    </div>
  );
}

// Auto-breadcrumbs from pathname
export function AutoBreadcrumbs({
  basePath = "",
  excludePaths = [],
  ...props
}: Omit<BreadcrumbsProps, "items"> & {
  basePath?: string;
  excludePaths?: string[];
}) {
  const pathname = usePathname();

  if (!pathname || excludePaths.includes(pathname) || pathname === "/") {
    return null;
  }

  const pathSegments = pathname.split("/").filter(Boolean);
  let currentPath = basePath;

  const items: BreadcrumbItem[] = pathSegments.map((segment, index) => {
    const isLast = index === pathSegments.length - 1;
    currentPath += `/${segment}`;

    // Convert URL-friendly text to readable format
    const label = segment
      .replace(/-/g, " ")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      label,
      href: isLast ? undefined : currentPath,
    };
  });

  return <Breadcrumbs items={items} {...props} />;
}