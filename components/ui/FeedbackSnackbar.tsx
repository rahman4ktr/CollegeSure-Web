'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

interface FeedbackSnackbarProps {
  open: boolean;
  message: string;
  severity?: AlertSeverity;
  onClose: () => void;
  autoHideDuration?: number;
}

const severityConfig: Record<AlertSeverity, { bg: string; border: string; text: string; icon: any }> = {
  error: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-800',
    icon: AlertCircle,
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-800',
    icon: AlertTriangle,
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-800',
    icon: Info,
  },
  success: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-800',
    icon: CheckCircle2,
  },
};

/**
 * Native, zero-dependency FeedbackSnackbar component matching CollegeSure design system.
 * Handles auto-hide, smooth enter/exit animations, accessible ARIA alert roles, and close trigger.
 */
export default function FeedbackSnackbar({
  open,
  message,
  severity = 'info',
  onClose,
  autoHideDuration = 5000,
}: FeedbackSnackbarProps) {
  useEffect(() => {
    if (open && autoHideDuration) {
      const timer = setTimeout(() => {
        onClose();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  const config = severityConfig[severity] || severityConfig.info;
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4 pointer-events-auto"
          role="alert"
          aria-live="assertive"
        >
          <div
            className={`flex items-center justify-between gap-3 p-4 rounded-2xl border shadow-xl backdrop-blur-md ${config.bg} ${config.border} ${config.text}`}
          >
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-semibold leading-relaxed">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-black/5 transition-colors flex-shrink-0 cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4 opacity-70 hover:opacity-100" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
