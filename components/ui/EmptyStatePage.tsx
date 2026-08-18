import { type LucideIcon, Inbox } from 'lucide-react';
import Link from 'next/link';

interface EmptyStatePageProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

/**
 * Reusable empty state component for pages with no content.
 * Styled to match CollegeSure design system.
 */
export default function EmptyStatePage({
  icon: Icon = Inbox,
  title,
  description,
  actionLabel,
  actionHref,
  className = '',
}: EmptyStatePageProps) {
  return (
    <div className={`text-center py-20 ${className}`}>
      <div className="w-20 h-20 mx-auto rounded-full bg-[#F8FAFC] flex items-center justify-center mb-4 border border-[#E2E8F0]">
        <Icon size={32} className="text-[#94A3B8]" />
      </div>
      <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">{title}</h3>
      {description && (
        <p className="text-[#475569] max-w-md mx-auto mb-6">{description}</p>
      )}
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
