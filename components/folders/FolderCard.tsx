"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical, FileText, Clock, HardDrive, ArrowRight, Check } from "lucide-react";
import type { Folder } from "@/lib/folder-types";
import { formatRelativeTime, getGradientForColor } from "@/lib/folder-types";
import FolderContextMenu from "./FolderContextMenu";

interface FolderCardProps {
  folder: Folder;
  index: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onRename: (id: string) => void;
  onDelete: (id: string) => void;
  viewMode: "grid" | "list";
}

export default function FolderCard({
  folder,
  index,
  isSelected,
  onSelect,
  onRename,
  onDelete,
  viewMode,
}: FolderCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [gradient] = useMemo(() => [getGradientForColor(folder.color)], [folder.color]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || viewMode === "list") return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
      setTilt({
        x: (y - 0.5) * -12,
        y: (x - 0.5) * 12,
      });
    },
    [viewMode]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 0.5, y: 0.5 });
  }, []);

  const accent = folder.color;
  const [gradFrom, gradTo] = gradient;

  // ─── LIST VIEW ────────────────────────────────────────────
  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20, scale: 0.95 }}
        transition={{ delay: index * 0.03, duration: 0.35 }}
        onClick={() => onSelect(folder.id)}
        className={`
          group flex items-center gap-4 px-5 py-3.5 rounded-2xl cursor-pointer
          transition-all duration-200
          bg-white/80 dark:bg-white/[0.03]
          backdrop-blur-sm
          border
          ${
            isSelected
              ? "border-indigo-400/60 dark:border-indigo-500/40 shadow-lg shadow-indigo-500/10"
              : "border-gray-100/80 dark:border-white/[0.06] hover:border-gray-200 dark:hover:border-white/[0.1]"
          }
          hover:bg-white dark:hover:bg-white/[0.05]
        `}
      >
        {/* 3D Folder mini icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${gradFrom}20, ${gradTo}15)`,
          }}
        >
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
            <path
              d="M1 5C1 3.34 2.34 2 4 2H8.5L10.5 5H20C21.66 5 23 6.34 23 8V16C23 17.66 21.66 19 20 19H4C2.34 19 1 17.66 1 16V5Z"
              fill={`url(#listGrad-${folder.id})`}
            />
            <defs>
              <linearGradient id={`listGrad-${folder.id}`} x1="0" y1="0" x2="24" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor={gradFrom} />
                <stop offset="1" stopColor={gradTo} />
              </linearGradient>
            </defs>
          </svg>
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center"
            >
              <Check className="w-2.5 h-2.5 text-white" />
            </motion.div>
          )}
        </div>

        {/* Name */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {folder.name}
          </p>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-6 text-xs text-gray-400 dark:text-gray-500">
          <span className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            {folder.itemCount} items
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {formatRelativeTime(folder.lastModified)}
          </span>
          <span className="hidden md:block w-16 text-right font-medium">{folder.size}</span>
        </div>

        {/* Context menu */}
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300
              hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={`Actions for ${folder.name}`}
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          <FolderContextMenu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            onOpen={() => onSelect(folder.id)}
            onRename={() => onRename(folder.id)}
            onShare={() => {}}
            onDelete={() => onDelete(folder.id)}
          />
        </div>
      </motion.div>
    );
  }

  // ─── 3D GRID VIEW ─────────────────────────────────────────
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(folder.id)}
      style={{ perspective: "1200px" }}
      className="cursor-pointer group"
    >
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? 1.03 : 1,
          y: isSelected ? -4 : isHovered ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }}
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── Layer 1: Deep shadow / ambient floor ───────── */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-500"
          style={{
            transform: "translateZ(-20px) scale(0.95)",
            background: isHovered
              ? `radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${accent}15, transparent 70%)`
              : "transparent",
            filter: "blur(20px)",
          }}
        />

        {/* ── Layer 2: Back folder plate (3D depth) ──────── */}
        <div
          className="absolute top-2 left-3 right-3 h-[85%] rounded-2xl transition-all duration-300"
          style={{
            transform: "translateZ(-8px)",
            background: `linear-gradient(135deg, ${gradFrom}25, ${gradTo}15)`,
            boxShadow: `0 8px 30px ${accent}10`,
          }}
        />

        {/* ── Layer 3: Main folder body ──────────────────── */}
        <div
          className={`
            relative rounded-2xl overflow-hidden
            h-[260px] flex flex-col
            transition-all duration-300
            ${
              isSelected
                ? "ring-2 ring-indigo-400/40 dark:ring-indigo-500/30"
                : ""
            }
          `}
          style={{
            transform: "translateZ(0px)",
            background: "var(--card-bg)",
            border: isSelected
              ? `1px solid ${accent}50`
              : isHovered
              ? "1px solid rgba(255,255,255,0.12)"
              : "1px solid rgba(255,255,255,0.06)",
            boxShadow: isHovered
              ? `0 25px 50px -12px ${accent}20, 0 12px 25px -8px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.05) inset`
              : isSelected
              ? `0 12px 30px -8px ${accent}25, 0 4px 15px -4px rgba(0,0,0,0.08)`
              : "0 4px 12px -2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          {/* ── Layer 4: Folder tab ──────────────────────── */}
          <div className="relative">
            <div
              className="absolute -top-[1px] left-5 w-20 h-[14px] rounded-t-lg"
              style={{
                transform: "translateZ(4px)",
                background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`,
                opacity: 0.5,
              }}
            />
            <div
              className="absolute -top-[1px] left-5 w-20 h-[14px] rounded-t-lg"
              style={{
                transform: "translateZ(5px)",
                background: `linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)`,
              }}
            />
          </div>

          {/* ── Layer 5: Dynamic light reflection ────────── */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(
                600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%,
                ${accent}08,
                transparent 50%
              )`,
            }}
          />

          {/* Inner highlight edge */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `linear-gradient(
                ${180 + (mousePos.x - 0.5) * 60}deg,
                rgba(255,255,255,${isHovered ? 0.06 : 0.02}) 0%,
                transparent 50%
              )`,
            }}
          />

          {/* Selected glow stripe */}
          {isSelected && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${gradFrom}, ${gradTo}, transparent)`,
                boxShadow: `0 0 12px ${accent}40`,
              }}
            />
          )}

          {/* Context menu button */}
          <div className="absolute top-3 right-3 z-20">
            <motion.button
              initial={false}
              animate={{ opacity: isHovered || menuOpen ? 1 : 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className="p-1.5 rounded-xl
                text-gray-400 hover:text-white
                hover:bg-white/10 dark:hover:bg-white/[0.1]
                backdrop-blur-sm
                transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={`Actions for ${folder.name}`}
            >
              <MoreVertical className="w-4 h-4" />
            </motion.button>
            <FolderContextMenu
              isOpen={menuOpen}
              onClose={() => setMenuOpen(false)}
              onOpen={() => onSelect(folder.id)}
              onRename={() => onRename(folder.id)}
              onShare={() => {}}
              onDelete={() => onDelete(folder.id)}
            />
          </div>

          {/* Selected checkmark */}
          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="absolute top-3 left-3 z-20 w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`,
                  boxShadow: `0 2px 8px ${accent}40`,
                }}
              >
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── 3D Folder Icon ────────────────────────────── */}
          <div className="px-5 pt-6 pb-2 flex-1 flex flex-col">
            <motion.div
              animate={{
                scale: isHovered ? 1.08 : 1,
                rotateY: isHovered ? tilt.y * 0.3 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-16 h-14 relative mb-auto"
              style={{ transform: "translateZ(12px)" }}
            >
              <svg
                width="64"
                height="56"
                viewBox="0 0 64 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                <defs>
                  <linearGradient
                    id={`fg-${folder.id}`}
                    x1="0" y1="0" x2="64" y2="56"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={gradFrom} />
                    <stop offset="1" stopColor={gradTo} />
                  </linearGradient>
                  <linearGradient
                    id={`fs-${folder.id}`}
                    x1="0" y1="0" x2="0" y2="56"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.35" />
                    <stop offset="0.5" stopColor="white" stopOpacity="0.05" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <filter id={`glow-${folder.id}`}>
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Shadow layer */}
                <ellipse
                  cx="32" cy="52" rx="24" ry="3"
                  fill={accent}
                  opacity={isHovered ? "0.15" : "0.08"}
                />
                {/* Back panel */}
                <path
                  d="M6 10C6 7.24 8.24 5 11 5H22L27 12H53C55.76 12 58 14.24 58 17V44C58 46.76 55.76 49 53 49H11C8.24 49 6 46.76 6 44V10Z"
                  fill={`url(#fg-${folder.id})`}
                  opacity="0.35"
                />
                {/* Front panel */}
                <path
                  d="M4 16C4 13.24 6.24 11 9 11H55C57.76 11 60 13.24 60 16V46C60 48.76 57.76 51 55 51H9C6.24 51 4 48.76 4 46V16Z"
                  fill={`url(#fg-${folder.id})`}
                  filter={isHovered ? `url(#glow-${folder.id})` : undefined}
                />
                {/* Shine overlay */}
                <path
                  d="M4 16C4 13.24 6.24 11 9 11H55C57.76 11 60 13.24 60 16V46C60 48.76 57.76 51 55 51H9C6.24 51 4 48.76 4 46V16Z"
                  fill={`url(#fs-${folder.id})`}
                />
                {/* Subtle inner line */}
                <path
                  d="M10 18H54"
                  stroke="white"
                  strokeOpacity="0.15"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>

            {/* ── Layer 6: Folder info (floating metadata) ── */}
            <div style={{ transform: "translateZ(6px)" }}>
              <h3
                className="text-[15px] font-semibold text-gray-900 dark:text-white truncate mb-1.5 leading-tight"
                title={folder.name}
              >
                {folder.name}
              </h3>

              <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  {folder.itemCount} files
                </span>
                <span className="w-0.5 h-0.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                <span className="flex items-center gap-1">
                  <HardDrive className="w-3 h-3" />
                  {folder.size}
                </span>
              </div>

              <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400 dark:text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{formatRelativeTime(folder.lastModified)}</span>
              </div>
            </div>
          </div>

          {/* ── Hover info panel (glass) ──────────────────── */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 z-10 p-4 pt-6"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white truncate">
                      {folder.name}
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">
                      {folder.itemCount} files · {folder.size}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-1 text-xs font-medium text-white/80 hover:text-white transition-colors"
                  >
                    Open <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
