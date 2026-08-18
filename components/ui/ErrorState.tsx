'use client';

import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  retrying?: boolean;
  className?: string;
}

/**
 * Reusable error state component with retry capability.
 * Styled to match CollegeSure design system.
 */
export default function ErrorState({
  title = 'Something went wrong',
  description = 'We couldn\'t load this content. Please try again.',
  onRetry,
  retrying = false,
  className = '',
}: ErrorStateProps) {
  return (
    <div className={`text-center py-20 ${className}`} role="alert">
      <div className="w-20 h-20 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-4 border border-red-100">
        <AlertTriangle size={32} className="text-red-400" />
      </div>
      <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">{title}</h3>
      <p className="text-[#475569] max-w-md mx-auto mb-6">{description}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          disabled={retrying}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0a7a6f] px-5 py-2.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCcw size={14} className={retrying ? 'animate-spin' : ''} />
          {retrying ? 'Retrying...' : 'Try Again'}
        </button>
      )}
    </div>
  );
}
