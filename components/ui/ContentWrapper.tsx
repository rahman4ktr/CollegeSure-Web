'use client';

import React from 'react';
import ErrorState from './ErrorState';

interface ContentWrapperProps {
  isLoading?: boolean;
  error?: string | Error | null;
  isEmpty?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  loadingSkeleton?: React.ReactNode;
  emptyState?: React.ReactNode;
  errorState?: React.ReactNode;
  onRetry?: () => void;
  children: React.ReactNode;
}

/**
 * Higher-order wrapper component for handling state transitions:
 * Loading -> Error -> Empty -> Content
 */
export default function ContentWrapper({
  isLoading,
  error,
  isEmpty,
  emptyTitle = 'No content available',
  emptyDescription = 'There is no data to display right now.',
  loadingSkeleton,
  emptyState,
  errorState,
  onRetry,
  children,
}: ContentWrapperProps) {
  if (isLoading) {
    return <>{loadingSkeleton || <div className="py-12 text-center text-[#94A3B8]">Loading content...</div>}</>;
  }

  if (error) {
    if (errorState) return <>{errorState}</>;
    const errorMessage = typeof error === 'string' ? error : error?.message;
    return <ErrorState description={errorMessage} onRetry={onRetry} />;
  }

  if (isEmpty) {
    if (emptyState) return <>{emptyState}</>;
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-[#E2E8F0] p-8">
        <h4 className="text-lg font-bold text-[#0B3C5D] mb-2">{emptyTitle}</h4>
        <p className="text-sm text-[#475569]">{emptyDescription}</p>
      </div>
    );
  }

  return <>{children}</>;
}
