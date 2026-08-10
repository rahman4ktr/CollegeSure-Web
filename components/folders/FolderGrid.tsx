"use client";

import { motion } from "framer-motion";
import type { Folder, ViewMode } from "@/lib/folder-types";
import FolderCard from "./FolderCard";

interface FolderGridProps {
  folders: Folder[];
  viewMode: ViewMode;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onRename: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function FolderGrid({
  folders,
  viewMode,
  selectedId,
  onSelect,
  onRename,
  onDelete,
}: FolderGridProps) {
  if (viewMode === "list") {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.03 } },
        }}
        className="flex flex-col gap-2"
      >
        {folders.map((folder, index) => (
          <FolderCard
            key={folder.id}
            folder={folder}
            index={index}
            isSelected={selectedId === folder.id}
            onSelect={onSelect}
            onRename={onRename}
            onDelete={onDelete}
            viewMode="list"
          />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
    >
      {folders.map((folder, index) => (
        <FolderCard
          key={folder.id}
          folder={folder}
          index={index}
          isSelected={selectedId === folder.id}
          onSelect={onSelect}
          onRename={onRename}
          onDelete={onDelete}
          viewMode="grid"
        />
      ))}
    </motion.div>
  );
}
