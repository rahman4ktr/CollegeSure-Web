"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  folderName: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmDialog({
  isOpen,
  folderName,
  onClose,
  onConfirm,
}: DeleteConfirmDialogProps) {
  useEffect(() => {
    if (!isOpen) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-sm
              bg-white/95 dark:bg-[#141418]/95
              backdrop-blur-xl
              border border-gray-200/80 dark:border-white/[0.08]
              rounded-2xl shadow-2xl shadow-black/15 dark:shadow-black/50
              p-6 overflow-hidden"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-folder-title"
            aria-describedby="delete-folder-desc"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-xl
                text-gray-400 hover:text-gray-600 dark:hover:text-gray-200
                hover:bg-gray-100 dark:hover:bg-white/[0.06]
                transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Close dialog"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            <div
              className="w-12 h-12 rounded-xl mb-4 relative overflow-hidden
              bg-gradient-to-br from-red-50 to-rose-50
              dark:from-red-500/15 dark:to-rose-500/15
              border border-red-100/80 dark:border-red-500/20
              flex items-center justify-center"
            >
              <AlertTriangle className="w-5.5 h-5.5 text-red-500 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-100/50 to-transparent dark:from-red-500/5 dark:to-transparent" />
            </div>

            <h2
              id="delete-folder-title"
              className="text-lg font-bold text-gray-900 dark:text-white mb-1"
            >
              Delete Folder
            </h2>
            <p
              id="delete-folder-desc"
              className="text-sm text-gray-500 dark:text-gray-400 mb-6"
            >
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                &ldquo;{folderName}&rdquo;
              </span>
              ? This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-sm font-medium
                  text-gray-600 dark:text-gray-400
                  hover:bg-gray-100 dark:hover:bg-white/[0.06]
                  transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Cancel
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onConfirm}
                className="relative px-5 py-2.5 rounded-xl text-sm font-semibold
                  text-white overflow-hidden
                  bg-gradient-to-r from-red-500 to-rose-500
                  hover:from-red-600 hover:to-rose-600
                  shadow-md shadow-red-500/20
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-[#141418]"
              >
                <span className="relative z-10">Delete</span>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
