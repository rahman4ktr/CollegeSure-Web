"use client";

import Link from "next/link";
import { MapPin, BookOpen, ChevronRight, Building2 } from "lucide-react";
import type { University } from "@/lib/types";
import Badge from "@/components/ui/Badge";
import Card3DTilt from "@/components/ui/Card3DTilt";
import { motion } from "framer-motion";

interface UniversityCardProps {
  university: University;
}

const typeLabel: Record<University["type"], string> = {
  government: "Government",
  private: "Private",
  deemed: "Deemed University",
};

const typeBadge: Record<University["type"], "navy" | "teal" | "orange"> = {
  government: "navy",
  private: "teal",
  deemed: "orange",
};

export default function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Card3DTilt glowColor="rgba(11, 60, 93, 0.16)" className="h-full">
      <article className="card-base group flex flex-col h-full p-5 sm:p-6 bg-white border border-[#E2E8F0] rounded-2xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#0B3C5D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B3C5D] transition-colors duration-200">
            <Building2
              size={22}
              className="text-[#0B3C5D] group-hover:text-white transition-colors duration-200"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-[#0F172A] text-base leading-snug group-hover:text-[#0B3C5D] transition-colors line-clamp-2">
              {university.name}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={12} className="text-[#94A3B8] flex-shrink-0" />
              <span className="text-xs text-[#475569]">
                {university.city}, {university.state}
              </span>
            </div>
          </div>
        </div>

        {/* Type badge */}
        <div className="mb-3">
          <Badge variant={typeBadge[university.type]}>
            {typeLabel[university.type]}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-[#475569] leading-relaxed mb-4 flex-1 line-clamp-2">
          {university.description}
        </p>

        {/* Courses */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-2">
            <BookOpen size={13} className="text-[#0D9488]" />
            <span className="text-xs font-semibold text-[#475569] uppercase tracking-wide">
              Available Courses
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {university.courses.slice(0, 3).map((course) => (
              <span
                key={course}
                className="text-xs bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] px-2 py-0.5 rounded-full"
              >
                {course}
              </span>
            ))}
            {university.courses.length > 3 && (
              <span className="text-xs bg-[#F8FAFC] text-[#94A3B8] border border-[#E2E8F0] px-2 py-0.5 rounded-full">
                +{university.courses.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/universities"
              className="w-full flex items-center justify-center gap-1 py-2 text-sm font-semibold text-[#0B3C5D] border border-[#E2E8F0] rounded-xl hover:bg-[#0B3C5D] hover:text-white hover:border-[#0B3C5D] transition-all duration-200"
            >
              View College
              <ChevronRight size={14} />
            </Link>
          </motion.div>

          <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={`/contact?college=${encodeURIComponent(university.name)}`}
              className="w-full flex items-center justify-center py-2 text-sm font-semibold bg-[#F97316] text-white rounded-xl hover:bg-[#ea6c0c] transition-colors duration-200 shadow-sm"
            >
              Enquire
            </Link>
          </motion.div>
        </div>
      </article>
    </Card3DTilt>
  );
}
