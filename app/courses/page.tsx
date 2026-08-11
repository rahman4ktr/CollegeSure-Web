"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import CourseCard from "@/components/cards/CourseCard";
import CTASection from "@/components/sections/CTASection";
import { courses } from "@/lib/data/courses";
import Link from "next/link";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import {
  GraduationCap,
  Stethoscope,
  Cpu,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  BookOpen,
  Filter,
  Search,
  Grid3x3,
  LayoutList,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card3DTilt from "@/components/ui/Card3DTilt";

// Category Icons & Config
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

// Stats Data
const stats = [
  { label: "Courses Available", value: "50+", icon: BookOpen, color: "#159447" },
  { label: "Partner Colleges", value: "50+", icon: Award, color: "#147CC1" },
  { label: "Students Placed", value: "15,000+", icon: TrendingUp, color: "#F36C21" },
  { label: "Success Rate", value: "92%", icon: Zap, color: "#B30F66" },
];

// Filter categories
const filterCategories = [
  { label: "All", value: "all", icon: Grid3x3 },
  { label: "Medical", value: "medical", icon: Stethoscope },
  { label: "Engineering", value: "engineering", icon: Cpu },
  { label: "Graduation", value: "graduation", icon: GraduationCap },
];

export default function CoursesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);

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
    <div ref={containerRef} className="relative overflow-hidden bg-[#FDFDFD]">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084] pt-20 pb-16 sm:pt-28 sm:pb-20"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#B30F66]/20 blur-3xl"
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 20, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#147CC1]/20 blur-3xl"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/10 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                }}
                animate={{
                  x: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  y: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        <Container className="relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-2 text-[#FEF2F7] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
              >
                <Sparkles size={14} className="text-[#F7D51A]" />
                Discover Your Future
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Explore Our
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B30F66] via-[#147CC1] to-[#F7D51A]">
                  Premium Courses
                </span>
              </motion.h1>

              <motion.p
                className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We help students get admitted to top programs across Medical,
                Engineering, and Graduation streams. Browse all verified options.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-3 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link
                  href="#courses"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-[#B30F66] hover:bg-[#591084] text-white font-bold rounded-xl shadow-lg shadow-[#B30F66]/20 transition-all duration-300 hover:scale-105"
                >
                  Browse Courses
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  Get Free Guidance
                  <Sparkles size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </Container>

        {/* Decorative Shape at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F8FAFC]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </motion.div>

      {/* Stats Section with Simple Hover */}
      <div className="bg-white border-b border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.08} direction="up">
                <motion.div
                  className="text-center p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#E2E8F0]"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                    <stat.icon size={20} style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-bold text-[#0B3C5D]">{stat.value}</div>
                  <div className="text-xs text-[#94A3B8] font-medium">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-[#E2E8F0] py-4 sticky top-0 z-30 backdrop-blur-md bg-white/90">
        <Container>
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
                  <motion.button
                    key={cat.value}
                    onClick={() => setActiveFilter(cat.value)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-200
                      ${isActive
                        ? 'border-[#0B3C5D] bg-[#0B3C5D] text-white shadow-md'
                        : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#0D9488] hover:text-[#0D9488]'
                      }`}
                  >
                    <Icon size={14} />
                    <span>{cat.label}</span>
                  </motion.button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => setViewMode("grid")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg border transition-all duration-200 ${viewMode === "grid"
                    ? "bg-[#0B3C5D] border-[#0B3C5D] text-white"
                    : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#0D9488] hover:text-[#0D9488]"
                  }`}
              >
                <Grid3x3 size={16} />
              </motion.button>
              <motion.button
                onClick={() => setViewMode("list")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg border transition-all duration-200 ${viewMode === "list"
                    ? "bg-[#0B3C5D] border-[#0B3C5D] text-white"
                    : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#0D9488] hover:text-[#0D9488]"
                  }`}
              >
                <LayoutList size={16} />
              </motion.button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Grid Content */}
      <div id="courses" className="bg-[#F8FAFC] section-py">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeFilter === "all" ? (
                // Show all categories
                <>
                  {/* Medical Section */}
                  {medical.length > 0 && (
                    <ScrollReveal direction="up" className="mb-20">
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

                      <StaggerContainer>
                        <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ${viewMode === "list" ? "lg:grid-cols-1" : ""
                          }`}>
                          {medical.map((course) => (
                            <StaggerItem key={course.slug}>
                              <CourseCard course={course} />
                            </StaggerItem>
                          ))}
                        </div>
                      </StaggerContainer>
                    </ScrollReveal>
                  )}

                  {/* Engineering Section */}
                  {engineering.length > 0 && (
                    <ScrollReveal direction="up" className="mb-20">
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

                      <StaggerContainer>
                        <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ${viewMode === "list" ? "lg:grid-cols-1" : ""
                          }`}>
                          {engineering.map((course) => (
                            <StaggerItem key={course.slug}>
                              <CourseCard course={course} />
                            </StaggerItem>
                          ))}
                        </div>
                      </StaggerContainer>
                    </ScrollReveal>
                  )}

                  {/* Graduation Section */}
                  {graduation.length > 0 && (
                    <ScrollReveal direction="up">
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

                      <StaggerContainer>
                        <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ${viewMode === "list" ? "lg:grid-cols-1" : ""
                          }`}>
                          {graduation.map((course) => (
                            <StaggerItem key={course.slug}>
                              <CourseCard course={course} />
                            </StaggerItem>
                          ))}
                        </div>
                      </StaggerContainer>
                    </ScrollReveal>
                  )}
                </>
              ) : (
                // Show filtered category
                <>
                  {(() => {
                    const filtered = filteredCourses;
                    const config = categoryConfig[activeFilter as keyof typeof categoryConfig];
                    const Icon = config?.icon || Grid3x3;
                    const color = config?.color || "#0D9488";

                    return (
                      <ScrollReveal direction="up">
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

                        <StaggerContainer>
                          <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ${viewMode === "list" ? "lg:grid-cols-1" : ""
                            }`}>
                            {filtered.map((course) => (
                              <StaggerItem key={course.slug}>
                                <CourseCard course={course} />
                              </StaggerItem>
                            ))}
                          </div>
                        </StaggerContainer>

                        {filtered.length === 0 && (
                          <div className="text-center py-20">
                            <div className="w-20 h-20 mx-auto rounded-full bg-[#F8FAFC] flex items-center justify-center mb-4 border border-[#E2E8F0]">
                              <Search size={32} className="text-[#94A3B8]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">No Courses Found</h3>
                            <p className="text-[#475569]">Check back later for new programs.</p>
                          </div>
                        )}
                      </ScrollReveal>
                    );
                  })()}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* CTA Section */}
      <ScrollReveal direction="up">
        <CTASection
          title="Ready to Enroll?"
          description="Get personalized guidance and secure your seat in the best colleges."
          primaryButtonText="Get Free Counselling"
          primaryButtonLink="/contact"
          secondaryButtonText="Explore All Courses"
          secondaryButtonLink="#courses"
        />
      </ScrollReveal>
    </div>
  );
}