"use client";

import { motion } from "framer-motion";

function SkeletonCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="relative rounded-2xl overflow-hidden h-[260px]"
      style={{ perspective: "1200px" }}
    >
      {/* Back depth plate */}
      <div
        className="absolute top-2 left-3 right-3 h-[85%] rounded-2xl
        bg-gray-100/40 dark:bg-white/[0.015]"
      />

      {/* Main body */}
      <div
        className="relative rounded-2xl overflow-hidden h-full p-5 flex flex-col
        bg-white/80 dark:bg-[#101116]
        border border-gray-100/60 dark:border-white/[0.04]"
      >
        {/* Folder tab skeleton */}
        <div className="absolute -top-[1px] left-5 w-20 h-[14px] rounded-t-lg skeleton-shimmer-3d" />

        {/* Shimmer sweep overlay */}
        <div className="absolute inset-0 skeleton-sweep pointer-events-none" />

        {/* Folder icon skeleton */}
        <div className="w-16 h-14 rounded-xl skeleton-shimmer-3d mb-auto mt-2" />

        {/* Text skeletons */}
        <div className="space-y-3 mt-4">
          <div className="w-3/4 h-4 rounded-lg skeleton-shimmer-3d" />
          <div className="flex gap-3">
            <div className="w-16 h-3 rounded-md skeleton-shimmer-3d" />
            <div className="w-12 h-3 rounded-md skeleton-shimmer-3d" />
          </div>
          <div className="w-24 h-3 rounded-md skeleton-shimmer-3d" />
        </div>
      </div>
    </motion.div>
  );
}

export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <SkeletonCard key={i} index={i} />
      ))}
    </div>
  );
}
