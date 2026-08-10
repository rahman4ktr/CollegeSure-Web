"use client";

import Link from "next/link";
import { Clock, GraduationCap, MapPin, ChevronRight } from "lucide-react";
import type { Course } from "@/lib/types";
import Badge from "@/components/ui/Badge";
import Card3DTilt from "@/components/ui/Card3DTilt";
import { motion } from "framer-motion";

interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

const categoryBadgeVariant: Record<Course["category"], "teal" | "navy" | "orange"> = {
  medical: "teal",
  engineering: "navy",
  graduation: "orange",
};

const categoryGlow: Record<Course["category"], string> = {
  medical: "rgba(13, 148, 136, 0.16)",
  engineering: "rgba(11, 60, 93, 0.16)",
  graduation: "rgba(249, 115, 22, 0.16)",
};

export default function CourseCard({ course, compact = false }: CourseCardProps) {
  return (
    <Card3DTilt glowColor={categoryGlow[course.category]} className="h-full">
      <article className="card-base group flex flex-col h-full overflow-hidden bg-white border border-[#E2E8F0] rounded-2xl transition-all duration-300">
        {/* Top accent bar */}
        <div
          className={`h-1.5 w-full ${
            course.category === "medical"
              ? "bg-gradient-to-r from-[#0D9488] to-[#14b8a6]"
              : course.category === "engineering"
              ? "bg-gradient-to-r from-[#0B3C5D] to-[#1a5276]"
              : "bg-gradient-to-r from-[#F97316] to-[#fb923c]"
          }`}
        />

        <div className="p-5 sm:p-6 flex flex-col flex-1">
          {/* Category badge */}
          <div className="mb-3 flex items-center justify-between">
            <Badge variant={categoryBadgeVariant[course.category]}>
              {course.categoryLabel}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug mb-2 group-hover:text-[#0B3C5D] transition-colors">
            {course.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#475569] leading-relaxed mb-4 flex-1 line-clamp-2">
            {course.description}
          </p>

          {/* Meta */}
          {!compact && (
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 mb-5">
              <div className="flex items-center gap-1.5 text-xs text-[#475569]">
                <Clock size={13} className="text-[#0D9488] flex-shrink-0" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#475569]">
                <GraduationCap size={13} className="text-[#0D9488] flex-shrink-0" />
                <span className="truncate" title={course.eligibility}>
                  {course.eligibility.split("—")[0].trim()}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#475569] xs:col-span-2">
                <MapPin size={13} className="text-[#0D9488] flex-shrink-0" />
                <span>{course.location}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2 mt-auto pt-2">
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={`/courses/${course.slug}`}
                className="w-full flex items-center justify-center gap-1 py-2 text-sm font-semibold text-[#0B3C5D] border border-[#E2E8F0] rounded-xl hover:bg-[#0B3C5D] hover:text-white hover:border-[#0B3C5D] transition-all duration-200"
                aria-label={`View details for ${course.name}`}
              >
                View Details
                <ChevronRight size={14} />
              </Link>
            </motion.div>

            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={`/contact?course=${encodeURIComponent(course.name)}`}
                className="w-full flex items-center justify-center py-2 text-sm font-semibold bg-[#F97316] text-white rounded-xl hover:bg-[#ea6c0c] transition-colors duration-200 shadow-sm"
                aria-label={`Enquire about ${course.name}`}
              >
                Enquire Now
              </Link>
            </motion.div>
          </div>
        </div>
      </article>
    </Card3DTilt>
  );
}
