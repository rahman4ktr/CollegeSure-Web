"use client";

import { motion } from "framer-motion";
import { FolderPlus } from "lucide-react";

interface EmptyStateProps {
  onCreateFolder: () => void;
}

export default function EmptyState({ onCreateFolder }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center py-24 px-4"
    >
      {/* Floating 3D folder illustration */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          scale: { delay: 0.2, duration: 0.5, ease: "easeOut" },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
        className="relative mb-10"
      >
        {/* Glow background */}
        <div className="absolute inset-0 blur-[60px] opacity-25 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full scale-[2]" />

        {/* Main folder illustration */}
        <div
          className="relative"
          style={{ perspective: "600px" }}
        >
          <motion.div
            animate={{ rotateY: [0, 5, -5, 0], rotateX: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          >
            <svg
              width="140"
              height="120"
              viewBox="0 0 140 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              <defs>
                <linearGradient id="emptyGrad" x1="0" y1="0" x2="140" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="emptyShine" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.4" />
                  <stop offset="0.4" stopColor="white" stopOpacity="0.05" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <filter id="emptyGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Shadow */}
              <ellipse cx="70" cy="112" rx="50" ry="6" fill="#6366f1" opacity="0.12" />
              {/* Back panel */}
              <path
                d="M15 22C15 17.58 18.58 14 23 14H48L56 26H117C121.42 26 125 29.58 125 34V96C125 100.42 121.42 104 117 104H23C18.58 104 15 100.42 15 96V22Z"
                fill="url(#emptyGrad)"
                opacity="0.3"
              />
              {/* Front panel */}
              <path
                d="M10 36C10 31.58 13.58 28 18 28H122C126.42 28 130 31.58 130 36V98C130 102.42 126.42 106 122 106H18C13.58 106 10 102.42 10 98V36Z"
                fill="url(#emptyGrad)"
                filter="url(#emptyGlow)"
              />
              {/* Shine */}
              <path
                d="M10 36C10 31.58 13.58 28 18 28H122C126.42 28 130 31.58 130 36V98C130 102.42 126.42 106 122 106H18C13.58 106 10 102.42 10 98V36Z"
                fill="url(#emptyShine)"
              />
              {/* Plus icon */}
              <path
                d="M70 52V80M54 66H86"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeOpacity="0.6"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3
          className="text-2xl font-bold mb-2.5
          text-gray-900 dark:text-white"
        >
          No folders yet
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
          Create your first folder to start organizing your files.
          <br />
          Folders help you keep everything neat and easy to find.
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={onCreateFolder}
        className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl
          font-semibold text-sm text-white
          bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-500
          hover:from-indigo-600 hover:via-indigo-700 hover:to-violet-600
          shadow-xl shadow-indigo-500/25
          hover:shadow-2xl hover:shadow-indigo-500/30
          transition-all duration-300 overflow-hidden
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
          dark:focus-visible:ring-offset-[#050507]"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/[0.05] to-white/[0.15]" />
        <FolderPlus className="w-[18px] h-[18px] relative z-10" />
        <span className="relative z-10">Create Folder</span>
      </motion.button>
    </motion.div>
  );
}
