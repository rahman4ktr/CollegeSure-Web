"use client";

import { useState } from "react";
import CourseCard from "@/components/cards/CourseCard";
import { Course } from "@/lib/types";
import {
  Stethoscope,
  Cpu,
  GraduationCap,
  Grid3x3,
  Filter,
  LayoutList,
  Search,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

const categoryConfig = {
  medical: {
    icon: Stethoscope,
    label: "Medical & Paramedical",
    description: "Nursing, Radiology, Allied Healthcare Programs",
    color: "#159447",
  },
  engineering: {
    icon: Cpu,
    label: "Engineering",
    description: "B.Tech CSE, Mechanical, Civil & Diplomas",
    color: "#147CC1",
  },
  graduation: {
    icon: GraduationCap,
    label: "Graduation Programs",
    description: "BCA, BBA, B.Com & Versatile Bachelor Degrees",
    color: "#F36C21",
  }
};

const filterCategories = [
  { label: "All", value: "all", icon: Grid3x3 },
  { label: "Medical", value: "medical", icon: Stethoscope },
  { label: "Engineering", value: "engineering", icon: Cpu },
  { label: "Graduation", value: "graduation", icon: GraduationCap },
];

export default function CourseFilterGrid({ courses }: { courses: Course[] }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const medical = courses.filter((c) => c.category === "medical");
  const engineering = courses.filter((c) => c.category === "engineering");
  const graduation = courses.filter((c) => c.category === "graduation");

  const getFilteredCourses = () => {
    switch (activeFilter) {
      case "medical": return medical;
      case "engineering": return engineering;
      case "graduation": return graduation;
      default: return courses;
    }
  };

  const filteredCourses = getFilteredCourses();

  return (
    <>
      {/* Category Filter */}
      <div className="bg-white border-b border-[#E2E8F0] py-4 sticky top-20 z-30 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-[#475569]">
              <Filter size={16} className="text-[#0D9488]" />
              <span className="hidden sm:inline">Filter by Category:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeFilter === cat.value;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setActiveFilter(cat.value)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 hover:-translate-y-0.5
                      ${isActive
                        ? 'border-[#0B3C5D] bg-[#0B3C5D] text-white shadow-md'
                        : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#0D9488] hover:text-[#0D9488]'
                      }`}
                  >
                    <Icon size={14} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
                className={`p-2 rounded-lg border transition-all duration-200 ${viewMode === "grid"
                    ? "bg-[#0B3C5D] border-[#0B3C5D] text-white"
                    : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#0D9488] hover:text-[#0D9488]"
                  }`}
              >
                <Grid3x3 size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                aria-label="List view"
                className={`p-2 rounded-lg border transition-all duration-200 ${viewMode === "list"
                    ? "bg-[#0B3C5D] border-[#0B3C5D] text-white"
                    : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#0D9488] hover:text-[#0D9488]"
                  }`}
              >
                <LayoutList size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div id="courses" className="bg-[#F8FAFC] section-py">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activeFilter === "all" ? (
            <>
              {/* Medical Section */}
              {medical.length > 0 && (
                <div className="mb-20">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center">
                        <Stethoscope size={24} className="text-[#0D9488]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0B3C5D]">Medical & Paramedical</h2>
                        <p className="text-sm text-[#94A3B8]">Nursing, Radiology, Allied Healthcare Programs</p>
                      </div>
                    </div>
                    <Badge variant="teal" size="sm">{medical.length} Courses</Badge>
                  </div>

                  <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ${viewMode === "list" ? "lg:grid-cols-1" : ""}`}>
                    {medical.map((course) => (
                      <CourseCard key={course.slug} course={course} />
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Section */}
              {engineering.length > 0 && (
                <div className="mb-20">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center">
                        <Cpu size={24} className="text-[#3B82F6]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0B3C5D]">Engineering</h2>
                        <p className="text-sm text-[#94A3B8]">B.Tech CSE, Mechanical, Civil & Diplomas</p>
                      </div>
                    </div>
                    <Badge variant="blue" size="sm">{engineering.length} Courses</Badge>
                  </div>

                  <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ${viewMode === "list" ? "lg:grid-cols-1" : ""}`}>
                    {engineering.map((course) => (
                      <CourseCard key={course.slug} course={course} />
                    ))}
                  </div>
                </div>
              )}

              {/* Graduation Section */}
              {graduation.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#F97316]/10 flex items-center justify-center">
                        <GraduationCap size={24} className="text-[#F97316]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0B3C5D]">Graduation Programs</h2>
                        <p className="text-sm text-[#94A3B8]">BCA, BBA, B.Com & Versatile Bachelor Degrees</p>
                      </div>
                    </div>
                    <Badge variant="orange" size="sm">{graduation.length} Courses</Badge>
                  </div>

                  <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ${viewMode === "list" ? "lg:grid-cols-1" : ""}`}>
                    {graduation.map((course) => (
                      <CourseCard key={course.slug} course={course} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {(() => {
                const filtered = filteredCourses;
                const config = categoryConfig[activeFilter as keyof typeof categoryConfig];
                const Icon = config?.icon || Grid3x3;
                const color = config?.color || "#0D9488";

                return (
                  <div>
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                          <Icon size={24} style={{ color }} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-[#0B3C5D]">{config?.label || "Courses"}</h2>
                          <p className="text-sm text-[#94A3B8]">{config?.description || ""}</p>
                        </div>
                      </div>
                      <Badge
                        variant="teal"
                        size="sm"
                        style={{ backgroundColor: `${color}15`, color, borderColor: `${color}20` }}
                      >
                        {filtered.length} Courses
                      </Badge>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ${viewMode === "list" ? "lg:grid-cols-1" : ""}`}>
                      {filtered.map((course) => (
                        <CourseCard key={course.slug} course={course} />
                      ))}
                    </div>

                    {filtered.length === 0 && (
                      <div className="text-center py-20">
                        <div className="w-20 h-20 mx-auto rounded-full bg-[#F8FAFC] flex items-center justify-center mb-4 border border-[#E2E8F0]">
                          <Search size={32} className="text-[#94A3B8]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">No Courses Found</h3>
                        <p className="text-[#475569]">Check back later for new programs.</p>
                      </div>
                    )}
                  </div>
                );
              })()}
            </>
          )}
        </div>
      </div>
    </>
  );
}
