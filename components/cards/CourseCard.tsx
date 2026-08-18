"use client";

import Link from "next/link";
import { Clock, GraduationCap, MapPin, ChevronRight } from "lucide-react";
import type { Course } from "@/lib/types";
import Badge from "@/components/ui/Badge";
import Card3DTilt from "@/components/ui/Card3DTilt";
import { motion } from "framer-motion";

import { useCounsellingModal } from "@/components/providers/CounsellingModalProvider";

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
  medical: "rgba(21, 148, 71, 0.16)",
  engineering: "rgba(20, 124, 193, 0.16)",
  graduation: "rgba(243, 108, 33, 0.16)",
};

export default function CourseCard({ course, compact = false }: CourseCardProps) {
  const { openModal } = useCounsellingModal();

  return (
    <Card3DTilt glowColor={categoryGlow[course.category]} borderGlow={false} maxTilt={4} scaleOnHover={1.01} liftOnHover={-3} className="h-full">
      <article className="card-base group flex flex-col h-full overflow-hidden bg-white border border-[#E2E8F0] rounded-2xl transition-all duration-300">
        {/* Top accent bar */}
        <div
          className={`h-1.5 w-full ${
            course.category === "medical"
              ? "bg-[#159447]"
              : course.category === "engineering"
              ? "bg-[#147CC1]"
              : "bg-[#F36C21]"
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
          <h3 className="text-base sm:text-lg font-bold text-[#04164B] leading-snug mb-2 group-hover:text-[#B30F66] transition-colors duration-200">
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
                <Clock size={13} className="text-[#159447] flex-shrink-0" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#475569]">
                <GraduationCap size={13} className="text-[#147CC1] flex-shrink-0" />
                <span className="truncate" title={course.eligibility}>
                  {course.eligibility.split("—")[0].trim()}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#475569] xs:col-span-2">
                <MapPin size={13} className="text-[#F36C21] flex-shrink-0" />
                <span>{course.location}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2 mt-auto pt-2">
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={`/courses/${course.slug}`}
                className="w-full flex items-center justify-center gap-1 py-2 text-sm font-semibold text-[#04164B] border border-[#E2E8F0] rounded-xl hover:bg-[#04164B] hover:text-white hover:border-[#04164B] transition-all duration-200"
                aria-label={`View details for ${course.name}`}
              >
                View Details
                <ChevronRight size={14} />
              </Link>
            </motion.div>

            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <button
                type="button"
                onClick={() => openModal(course.name)}
                className="w-full flex items-center justify-center py-2 text-sm font-semibold bg-[#B30F66] text-white rounded-xl hover:bg-[#591084] transition-colors duration-200 shadow-sm cursor-pointer"
                aria-label={`Enquire about ${course.name}`}
              >
                Enquire Now
              </button>
            </motion.div>
          </div>
        </div>
      </article>
    </Card3DTilt>
  );
}
