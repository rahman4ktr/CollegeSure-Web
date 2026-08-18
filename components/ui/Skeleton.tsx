/**
 * Reusable skeleton loading components matching CollegeSure design.
 * Uses the existing skeleton-shimmer animation from globals.css.
 */

interface SkeletonProps {
  className?: string;
}

export function SkeletonText({ className = '' }: SkeletonProps) {
  return (
    <div className={`h-4 rounded-lg skeleton-shimmer ${className}`} />
  );
}

export function SkeletonImage({ className = '' }: SkeletonProps) {
  return (
    <div className={`w-full aspect-video rounded-2xl skeleton-shimmer ${className}`} />
  );
}

export function SkeletonAvatar({ className = '' }: SkeletonProps) {
  return (
    <div className={`w-12 h-12 rounded-full skeleton-shimmer ${className}`} />
  );
}

export function SkeletonBadge({ className = '' }: SkeletonProps) {
  return (
    <div className={`h-6 w-20 rounded-full skeleton-shimmer ${className}`} />
  );
}

/**
 * Skeleton card matching the existing CourseCard/UniversityCard shape
 */
export function SkeletonCard({ className = '' }: SkeletonProps) {
  return (
    <div className={`bg-white rounded-2xl border border-[#E2E8F0] p-6 space-y-4 ${className}`}>
      <div className="flex items-center gap-3">
        <SkeletonAvatar />
        <div className="flex-1 space-y-2">
          <SkeletonText className="w-3/4" />
          <SkeletonText className="w-1/2 h-3" />
        </div>
      </div>
      <SkeletonText className="w-full" />
      <SkeletonText className="w-5/6" />
      <div className="flex gap-2 pt-2">
        <SkeletonBadge />
        <SkeletonBadge className="w-16" />
      </div>
    </div>
  );
}

/**
 * Skeleton for news/content cards with image
 */
export function SkeletonContentCard({ className = '' }: SkeletonProps) {
  return (
    <div className={`bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden ${className}`}>
      <SkeletonImage className="rounded-none" />
      <div className="p-6 space-y-3">
        <SkeletonBadge />
        <SkeletonText className="w-4/5 h-5" />
        <SkeletonText className="w-full" />
        <SkeletonText className="w-3/4" />
        <div className="flex items-center gap-3 pt-2">
          <SkeletonText className="w-24 h-3" />
          <SkeletonText className="w-20 h-3" />
        </div>
      </div>
    </div>
  );
}

/**
 * Grid of skeleton cards for loading states
 */
export function SkeletonGrid({
  count = 6,
  variant = 'card',
  columns = 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
}: {
  count?: number;
  variant?: 'card' | 'content';
  columns?: string;
}) {
  const Card = variant === 'content' ? SkeletonContentCard : SkeletonCard;
  return (
    <div className={`grid ${columns} gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
