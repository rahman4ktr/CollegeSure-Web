"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderOpen,
  Pencil,
  Share2,
  Trash2,
  Download,
  Move,
} from "lucide-react";

interface FolderContextMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onRename: () => void;
  onShare: () => void;
  onDelete: () => void;
  position?: "left" | "right";
}

const menuItems = [
  { label: "Open", icon: FolderOpen, action: "open" as const },
  { label: "Rename", icon: Pencil, action: "rename" as const },
  { label: "Share", icon: Share2, action: "share" as const },
  { label: "Move", icon: Move, action: "move" as const },
  { label: "Download", icon: Download, action: "download" as const },
  { label: "Delete", icon: Trash2, action: "delete" as const, danger: true },
];

export default function FolderContextMenu({
  isOpen,
  onClose,
  onOpen,
  onRename,
  onShare,
  onDelete,
  position = "right",
}: FolderContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const actionMap: Record<string, () => void> = {
    open: onOpen,
    rename: onRename,
    share: onShare,
    move: () => {},
    download: () => {},
    delete: onDelete,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.88, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: -4 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute top-full mt-1.5 z-50 min-w-[180px]
            ${position === "right" ? "right-0" : "left-0"}
            bg-white/95 dark:bg-[#1c1c22]/95
            backdrop-blur-xl
            border border-gray-200/80 dark:border-white/[0.08]
            rounded-xl shadow-2xl shadow-black/15 dark:shadow-black/40
            py-1.5 overflow-hidden`}
          role="menu"
          aria-orientation="vertical"
        >
          {menuItems.map((item, i) => (
            <div key={item.action}>
              {item.danger && (
                <div className="mx-3 my-1.5 h-px bg-gray-100 dark:bg-white/[0.06]" />
              )}
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03, duration: 0.15 }}
                onClick={() => {
                  actionMap[item.action]();
                  onClose();
                }}
                role="menuitem"
                className={`w-full flex items-center gap-3 px-3.5 py-2 text-sm
                  transition-colors duration-100
                  ${
                    item.danger
                      ? "text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.05]"
                  }
                  focus-visible:outline-none focus-visible:bg-gray-50 dark:focus-visible:bg-white/[0.05]`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </motion.button>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
