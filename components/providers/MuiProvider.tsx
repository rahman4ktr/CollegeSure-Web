'use client';

import React from 'react';

/**
 * MuiProvider - Wraps application children.
 * Designed to work without requiring external @mui/material package,
 * keeping the CollegeSure build light, fast, and zero-error out of the box.
 */
export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
