"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, BookOpen, ChevronRight, Star } from "lucide-react";
import type { University } from "@/lib/types";
import Badge from "@/components/ui/Badge";
import { Card, Box, Typography } from "@mui/material";

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
  const accentColor = university.accentColor || "#0B3C5D";

  return (
    <Card
      elevation={0}
      className="group relative flex flex-col h-full bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Top Accent Line */}
      <div className="h-1.5 w-full relative overflow-hidden flex-shrink-0 z-20">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: accentColor }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      </div>

      {/* Campus Photo Header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100 flex-shrink-0">
        {university.image ? (
          <Image
            src={university.image}
            alt={`${university.name} campus background`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D] to-[#0D9488]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <Badge variant={typeBadge[university.type]} className="shadow-md backdrop-blur-md">
            {typeLabel[university.type]}
          </Badge>

          {university.rating && (
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md">
              <Star size={13} className="fill-[#F97316] text-[#F97316]" />
              <span className="text-xs font-bold text-slate-900">{university.rating}</span>
            </div>
          )}
        </div>

        {/* Location Badge */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-white/90 font-medium drop-shadow">
            <MapPin size={13} className="text-[#F97316]" />
            <span>{university.city}, {university.state}</span>
          </div>

          {university.established && (
            <span className="text-[10px] text-white/80 font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
              Est. {university.established}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 bg-white">
        {university.tags && university.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {university.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Typography variant="h6" className="font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-[#0B3C5D] transition-colors line-clamp-2">
          {university.name}
        </Typography>

        <Typography variant="body2" className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-1 line-clamp-2">
          {university.description}
        </Typography>

        {/* Performance Stats Bar */}
        {(university.placement || university.students || university.programs) && (
          <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-4">
            {university.placement && (
              <div className="text-center border-r border-slate-200 last:border-0">
                <div className="text-xs font-extrabold text-[#0D9488]">
                  {university.placement}
                </div>
                <div className="text-[9px] font-medium text-slate-400">Placement</div>
              </div>
            )}
            {university.students && (
              <div className="text-center border-r border-slate-200 last:border-0">
                <div className="text-xs font-extrabold text-[#0B3C5D]">
                  {university.students}+
                </div>
                <div className="text-[9px] font-medium text-slate-400">Students</div>
              </div>
            )}
            {university.programs && (
              <div className="text-center">
                <div className="text-xs font-extrabold text-[#F97316]">
                  {university.programs}
                </div>
                <div className="text-[9px] font-medium text-slate-400">Programs</div>
              </div>
            )}
          </div>
        )}

        {/* Available Courses */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-2">
            <BookOpen size={13} className="text-[#0D9488]" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Popular Courses
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {university.courses.slice(0, 3).map((course) => (
              <span
                key={course}
                className="text-xs bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-lg font-medium"
              >
                {course}
              </span>
            ))}
            {university.courses.length > 3 && (
              <span className="text-xs bg-slate-100 text-slate-400 border border-slate-200 px-2 py-0.5 rounded-lg">
                +{university.courses.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5 mt-auto pt-3 border-t border-slate-100">
          <Link
            href={`/universities`}
            className="flex-1 flex items-center justify-center gap-1 py-2.5 text-xs font-bold text-[#0B3C5D] border border-slate-200 rounded-xl hover:bg-[#0B3C5D] hover:text-white hover:border-[#0B3C5D] transition-all duration-200"
          >
            View Details
            <ChevronRight size={14} />
          </Link>

          <Link
            href={`/contact?college=${encodeURIComponent(university.name)}`}
            className="flex-1 flex items-center justify-center py-2.5 text-xs font-bold bg-[#F97316] text-white rounded-xl hover:bg-[#ea6c0c] transition-colors duration-200 shadow-sm"
          >
            Apply / Enquire
          </Link>
        </div>
      </div>
    </Card>
  );
}
