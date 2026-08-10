"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderPlus, X, Sparkles } from "lucide-react";

interface CreateFolderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

export default function CreateFolderDialog({
  isOpen,
  onClose,
  onSubmit,
}: CreateFolderDialogProps) {
  const [folderName, setFolderName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setFolderName("");
      // Focus the input after animation
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = folderName.trim();
    if (trimmed) {
      onSubmit(trimmed);
      onClose();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-md
              bg-white/95 dark:bg-[#141418]/95
              backdrop-blur-xl
              border border-gray-200/80 dark:border-white/[0.08]
              rounded-2xl shadow-2xl shadow-black/15 dark:shadow-black/50
              p-6 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="create-folder-title"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

            {/* Close button */}
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

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl mb-4 relative overflow-hidden
              bg-gradient-to-br from-indigo-50 to-violet-50
              dark:from-indigo-500/15 dark:to-violet-500/15
              border border-indigo-100/80 dark:border-indigo-500/20
              flex items-center justify-center"
            >
              <FolderPlus className="w-5.5 h-5.5 text-indigo-500 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-100/50 to-transparent dark:from-indigo-500/5 dark:to-transparent" />
            </div>

            {/* Title */}
            <h2
              id="create-folder-title"
              className="text-lg font-bold text-gray-900 dark:text-white mb-1"
            >
              Create New Folder
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Give your folder a name to get started.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                placeholder="Folder name..."
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl text-sm
                  bg-gray-50/80 dark:bg-white/[0.04]
                  border border-gray-200/80 dark:border-white/[0.08]
                  text-gray-900 dark:text-white
                  placeholder:text-gray-400 dark:placeholder:text-gray-500
                  focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400
                  dark:focus:ring-indigo-400/30 dark:focus:border-indigo-400/50
                  transition-all duration-200"
              />

              {/* Buttons */}
              <div className="flex items-center justify-end gap-3 mt-5">
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
                  type="submit"
                  disabled={!folderName.trim()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative px-5 py-2.5 rounded-xl text-sm font-semibold
                    text-white overflow-hidden
                    bg-gradient-to-r from-indigo-500 to-violet-500
                    hover:from-indigo-600 hover:to-violet-600
                    shadow-md shadow-indigo-500/20
                    disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
                    transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                    dark:focus-visible:ring-offset-[#141418]"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Create
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
