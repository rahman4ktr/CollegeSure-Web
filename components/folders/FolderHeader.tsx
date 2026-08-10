"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FolderPlus,
  LayoutGrid,
  List,
  ArrowUpDown,
  Moon,
  Sun,
  User,
  Plus,
  Command,
} from "lucide-react";
import type { SortOption, ViewMode } from "@/lib/folder-types";
import { useTheme } from "./ThemeProvider";

interface FolderHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  folderCount: number;
  totalFiles: number;
  onCreateFolder: () => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "name", label: "Name" },
  { value: "date", label: "Date Modified" },
  { value: "size", label: "Size" },
  { value: "items", label: "Items Count" },
];

export default function FolderHeader({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  folderCount,
  totalFiles,
  onCreateFolder,
}: FolderHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Cmd/Ctrl + K to focus search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      {/* ── Hero Section ──────────────────────────────────── */}
      <div className="flex items-start justify-between mb-8">
        {/* Left: Heading + Status */}
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Your Folders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed"
          >
            Organize, manage and access your files effortlessly.
          </motion.p>

          {/* Status badge */}
          <AnimatePresence>
            {folderCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full
                  bg-emerald-50 dark:bg-emerald-500/10
                  border border-emerald-100 dark:border-emerald-500/15"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  {folderCount} folder{folderCount !== 1 ? "s" : ""} · {totalFiles.toLocaleString()} files
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Premium controls */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-xl
              text-gray-500 dark:text-gray-400
              hover:bg-white/80 dark:hover:bg-white/[0.06]
              hover:text-gray-700 dark:hover:text-gray-200
              hover:shadow-sm
              border border-transparent hover:border-gray-200/50 dark:hover:border-white/[0.06]
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-[18px] h-[18px]" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-[18px] h-[18px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* User avatar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl
              bg-gradient-to-br from-indigo-400 to-violet-500
              flex items-center justify-center
              shadow-md shadow-indigo-500/20
              hover:shadow-lg hover:shadow-indigo-500/30
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-[#050507]"
            aria-label="User profile"
          >
            <User className="w-4 h-4 text-white" />
          </motion.button>
        </motion.div>
      </div>

      {/* ── Controls Bar ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
      >
        {/* Search input with glow */}
        <div className="relative flex-1 max-w-md group">
          <Search
            className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors duration-200 ${
              searchFocused
                ? "text-indigo-500 dark:text-indigo-400"
                : "text-gray-400 dark:text-gray-500"
            }`}
          />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search folders..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className={`w-full pl-10 pr-16 py-2.5 rounded-xl text-sm
              bg-white/80 dark:bg-white/[0.04]
              border transition-all duration-300
              text-gray-900 dark:text-white
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              focus:outline-none
              ${
                searchFocused
                  ? "border-indigo-400/60 dark:border-indigo-400/40 ring-2 ring-indigo-500/15 dark:ring-indigo-400/10 shadow-lg shadow-indigo-500/5 bg-white dark:bg-white/[0.06]"
                  : "border-gray-200/80 dark:border-white/[0.08] hover:border-gray-300 dark:hover:border-white/[0.12]"
              }`}
          />
          {/* Keyboard shortcut badge */}
          {!searchQuery && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 pointer-events-none">
              <kbd className="inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-medium
                bg-gray-100 dark:bg-white/[0.06] text-gray-400 dark:text-gray-500
                border border-gray-200 dark:border-white/[0.08]">
                <Command className="w-2.5 h-2.5" />
              </kbd>
              <kbd className="inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-medium
                bg-gray-100 dark:bg-white/[0.06] text-gray-400 dark:text-gray-500
                border border-gray-200 dark:border-white/[0.08]">
                K
              </kbd>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Sort */}
          <div className="relative">
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
              <ArrowUpDown className="w-3.5 h-3.5 flex-shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="appearance-none bg-transparent pr-6 py-2 text-sm font-medium
                  cursor-pointer
                  focus:outline-none
                  text-gray-600 dark:text-gray-300"
                aria-label="Sort folders"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200/80 dark:bg-white/[0.06] hidden sm:block" />

          {/* View toggle */}
          <div
            className="flex items-center rounded-xl overflow-hidden
            border border-gray-200/80 dark:border-white/[0.08]
            bg-white/80 dark:bg-white/[0.03]
            backdrop-blur-sm"
          >
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                ${
                  viewMode === "grid"
                    ? "bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                ${
                  viewMode === "list"
                    ? "bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              aria-label="List view"
              aria-pressed={viewMode === "list"}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* ── Create Folder (Premium button) ──────────── */}
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={onCreateFolder}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
              text-sm font-semibold text-white
              bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-500
              hover:from-indigo-600 hover:via-indigo-700 hover:to-violet-600
              shadow-lg shadow-indigo-500/25
              hover:shadow-xl hover:shadow-indigo-500/30
              transition-all duration-300
              overflow-hidden
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-[#050507]"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/[0.05] to-white/[0.15]" />
            <Plus className="w-4 h-4 relative z-10" />
            <span className="hidden sm:inline relative z-10">New Folder</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
}
