"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import type { Folder, SortOption, ViewMode } from "@/lib/folder-types";
import {
  MOCK_FOLDERS,
  sortFolders,
  generateId,
  getRandomColor,
  getTotalFileCount,
} from "@/lib/folder-types";
import ThemeProvider from "./ThemeProvider";
import FolderHeader from "./FolderHeader";
import FolderGrid from "./FolderGrid";
import EmptyState from "./EmptyState";
import SkeletonLoader from "./SkeletonLoader";
import CreateFolderDialog from "./CreateFolderDialog";
import RenameFolderDialog from "./RenameFolderDialog";
import DeleteConfirmDialog from "./DeleteConfirmDialog";

export default function FoldersView() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("date");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Dialog states
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [renameTarget, setRenameTarget] = useState<Folder | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Folder | null>(null);

  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      if (isMounted) {
        setFolders(MOCK_FOLDERS);
        setIsLoading(false);
      }
    }, 1200);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  // Filtered and sorted folders
  const displayedFolders = useMemo(() => {
    let result = folders;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((f) => f.name.toLowerCase().includes(q));
    }
    return sortFolders(result, sortBy);
  }, [folders, searchQuery, sortBy]);

  const totalFiles = useMemo(() => getTotalFileCount(folders), [folders]);

  // Create folder
  const handleCreateFolder = useCallback((name: string) => {
    const newFolder: Folder = {
      id: generateId(),
      name,
      itemCount: 0,
      lastModified: new Date(),
      color: getRandomColor(),
      size: "0 B",
    };
    setFolders((prev) => [newFolder, ...prev]);
  }, []);

  // Rename folder
  const handleRenameFolder = useCallback(
    (newName: string) => {
      if (!renameTarget) return;
      setFolders((prev) =>
        prev.map((f) =>
          f.id === renameTarget.id
            ? { ...f, name: newName, lastModified: new Date() }
            : f
        )
      );
      setRenameTarget(null);
    },
    [renameTarget]
  );

  // Delete folder
  const handleDeleteFolder = useCallback(() => {
    if (!deleteTarget) return;
    setFolders((prev) => prev.filter((f) => f.id !== deleteTarget.id));
    if (selectedId === deleteTarget.id) setSelectedId(null);
    setDeleteTarget(null);
  }, [deleteTarget, selectedId]);

  // Open rename dialog
  const handleOpenRename = useCallback(
    (id: string) => {
      const folder = folders.find((f) => f.id === id);
      if (folder) setRenameTarget(folder);
    },
    [folders]
  );

  // Open delete dialog
  const handleOpenDelete = useCallback(
    (id: string) => {
      const folder = folders.find((f) => f.id === id);
      if (folder) setDeleteTarget(folder);
    },
    [folders]
  );

  return (
    <ThemeProvider>
      <div
        className="min-h-screen transition-colors duration-500
        bg-[#f8f9fb] dark:bg-[#050507]"
      >
        {/* ── Premium ambient background ─────────────────── */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Primary ambient light */}
          <div
            className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] rounded-full
            bg-gradient-to-br from-indigo-200/25 to-violet-200/20
            dark:from-indigo-500/[0.06] dark:to-violet-500/[0.04]
            blur-[120px] animate-ambient-slow"
          />
          {/* Secondary ambient light */}
          <div
            className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full
            bg-gradient-to-tr from-blue-200/20 to-cyan-200/15
            dark:from-blue-500/[0.04] dark:to-cyan-500/[0.03]
            blur-[100px] animate-ambient-slow-reverse"
          />
          {/* Center accent glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[500px] h-[300px] rounded-full
            bg-gradient-to-r from-purple-200/10 via-transparent to-emerald-200/10
            dark:from-purple-500/[0.03] dark:via-transparent dark:to-emerald-500/[0.02]
            blur-[100px]"
          />
          {/* Dark mode subtle grid texture */}
          <div
            className="hidden dark:block absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* ── Content ────────────────────────────────────── */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <FolderHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            folderCount={folders.length}
            totalFiles={totalFiles}
            onCreateFolder={() => setCreateDialogOpen(true)}
          />

          {/* Main content area */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <SkeletonLoader key="skeleton" />
            ) : displayedFolders.length === 0 && !searchQuery ? (
              <EmptyState
                key="empty"
                onCreateFolder={() => setCreateDialogOpen(true)}
              />
            ) : displayedFolders.length === 0 && searchQuery ? (
              <div
                key="no-results"
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/[0.04] flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-gray-600">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  No folders found
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  No results for &ldquo;{searchQuery}&rdquo; — try a different term
                </p>
              </div>
            ) : (
              <FolderGrid
                key="grid"
                folders={displayedFolders}
                viewMode={viewMode}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onRename={handleOpenRename}
                onDelete={handleOpenDelete}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Dialogs */}
        <CreateFolderDialog
          isOpen={createDialogOpen}
          onClose={() => setCreateDialogOpen(false)}
          onSubmit={handleCreateFolder}
        />

        <RenameFolderDialog
          isOpen={!!renameTarget}
          currentName={renameTarget?.name ?? ""}
          onClose={() => setRenameTarget(null)}
          onSubmit={handleRenameFolder}
        />

        <DeleteConfirmDialog
          isOpen={!!deleteTarget}
          folderName={deleteTarget?.name ?? ""}
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleDeleteFolder}
        />
      </div>
    </ThemeProvider>
  );
}
