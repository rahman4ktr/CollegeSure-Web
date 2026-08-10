"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Clock,
  Users,
  ChevronRight,
  Star,
  Calendar,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/cards/CourseCard";
import { getFeaturedCourses } from "@/lib/data/courses";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Enhanced course data with additional fields
const enhancedCourses = [
  {
    id: 1,
    title: "Bachelor of Technology (B.Tech)",
    category: "Engineering",
    level: "Undergraduate",
    duration: "4 Years",
    description: "Comprehensive engineering program with specializations in Computer Science, Mechanical, Civil, and more.",
    image: "/images/courses/btech.jpg",
    slug: "btech",
    rating: 4.8,
    students: 1200,
    tags: ["CSE", "Mechanical", "Civil"],
    accentColor: "#0B3C5D",
    featured: true,
    icon: "⚡",
    startDate: "August 2024",
    placements: "95%",
  },
  {
    id: 2,
    title: "Bachelor of Science in Nursing (B.Sc Nursing)",
    category: "Medical",
    level: "Undergraduate",
    duration: "4 Years",
    description: "Professional nursing program with clinical training at top hospitals and healthcare facilities.",
    image: "/images/courses/nursing.jpg",
    slug: "bsc-nursing",
    rating: 4.9,
    students: 850,
    tags: ["Nursing", "Healthcare", "Clinical"],
    accentColor: "#0D9488",
    featured: true,
    icon: "🏥",
    startDate: "September 2024",
    placements: "92%",
  },
  {
    id: 3,
    title: "Bachelor of Computer Applications (BCA)",
    category: "IT & Computer Science",
    level: "Undergraduate",
    duration: "3 Years",
    description: "Industry-focused program covering programming, web development, databases, and software engineering.",
    image: "/images/courses/bca.jpg",
    slug: "bca",
    rating: 4.7,
    students: 950,
    tags: ["Programming", "Web Dev", "Database"],
    accentColor: "#F97316",
    featured: true,
    icon: "💻",
    startDate: "August 2024",
    placements: "88%",
  },
];

const floatingStats = [
  { label: "Courses", value: "50+", icon: BookOpen },
  { label: "Students", value: "15,000+", icon: Users },
  { label: "Placement", value: "92%", icon: TrendingUp },
];

export default function FeaturedCourses() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      aria-labelledby="featured-courses-heading"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0B3C5D]/5 blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0D9488]/5 blur-3xl"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Stats Background */}
        {floatingStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="absolute hidden xl:block"
            style={{
              top: `${20 + idx * 30}%`,
              right: `${5 + idx * 8}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + idx * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.5,
            }}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-2">
                <stat.icon size={16} className="text-[#0D9488]" />
                <div>
                  <div className="text-xs font-bold text-[#0B3C5D]">{stat.value}</div>
                  <div className="text-[9px] text-[#94A3B8]">{stat.label}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Container>
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div className="relative">
              <SectionHeading
                eyebrow="Explore Programs"
                title="Featured Courses"
                description="A selection of programs that students frequently enquire about. Find the right one for you."
                align="left"
                id="featured-courses-heading"
              />

              {/* Decorative element */}
              <motion.div
                className="absolute -top-4 -left-8 text-3xl opacity-20"
                animate={{
                  rotate: [0, 10, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✨
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                href="/courses"
                className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors group bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-lg"
                aria-label="View all available courses"
              >
                <span>View All Courses</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {enhancedCourses.map((course, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <ScrollReveal key={course.slug} delay={idx * 0.08} direction="up">
                <motion.div
                  onHoverStart={() => setHoveredIndex(idx)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="h-full"
                >
                  <div className="relative group h-full">
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute -inset-0.5 blur-2xl rounded-2xl transition-opacity duration-500"
                      style={{
                        background: course.accentColor,
                        opacity: isHovered ? 0.15 : 0,
                      }}
                    />

                    <div className={`
                      relative bg-white rounded-2xl border transition-all duration-500 h-full flex flex-col overflow-hidden
                      ${isHovered ? 'shadow-2xl border-transparent' : 'border-[#E2E8F0] shadow-sm hover:shadow-xl'}
                    `}>
                      {/* Top Gradient Bar */}
                      <div className="h-1 w-full relative overflow-hidden flex-shrink-0">
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: course.accentColor }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{ x: isHovered ? '100%' : '-100%' }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        {/* Header with Icon and Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0]"
                              animate={{
                                scale: isHovered ? 1.1 : 1,
                                rotate: isHovered ? -5 : 0,
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                              {course.icon}
                            </motion.div>
                            <div>
                              <span
                                className="text-xs font-semibold"
                                style={{ color: course.accentColor }}
                              >
                                {course.category}
                              </span>
                              <div className="text-[10px] text-[#94A3B8]">{course.level}</div>
                            </div>
                          </div>

                          <motion.div
                            className="flex items-center gap-1 bg-[#F8FAFC] px-2 py-1 rounded-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: isHovered ? 1 : 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <Star size={12} className="fill-[#F97316] text-[#F97316]" />
                            <span className="text-xs font-bold text-[#0F172A]">{course.rating}</span>
                          </motion.div>
                        </div>

                        {/* Title */}
                        <motion.h3
                          className="text-lg font-bold text-[#0F172A] mb-2 leading-tight"
                          animate={{
                            color: isHovered ? course.accentColor : '#0F172A',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {course.title}
                        </motion.h3>

                        {/* Description */}
                        <p className="text-sm text-[#475569] leading-relaxed flex-grow">
                          {course.description}
                        </p>

                        {/* Course Details Grid */}
                        <motion.div
                          className="grid grid-cols-2 gap-2 mt-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: isHovered ? 1 : 0.6,
                            y: 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-[#F8FAFC] rounded-lg p-2 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Calendar size={12} className="text-[#0D9488]" />
                              <span className="text-[10px] font-medium text-[#0F172A]">{course.duration}</span>
                            </div>
                            <div className="text-[8px] text-[#94A3B8]">Duration</div>
                          </div>
                          <div className="bg-[#F8FAFC] rounded-lg p-2 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Users size={12} className="text-[#0B3C5D]" />
                              <span className="text-[10px] font-medium text-[#0F172A]">{course.students}+</span>
                            </div>
                            <div className="text-[8px] text-[#94A3B8]">Students</div>
                          </div>
                        </motion.div>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {course.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-[#94A3B8]">Placement Rate</div>
                            <div className="text-sm font-bold" style={{ color: course.accentColor }}>
                              {course.placements}
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <Link
                              href={`/courses/${course.slug}`}
                              className={`
                                inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold 
                                rounded-xl transition-all duration-300
                                ${isHovered
                                  ? 'text-white shadow-lg'
                                  : 'text-[#0B3C5D] hover:text-[#0D9488]'
                                }
                              `}
                              style={{
                                backgroundColor: isHovered ? course.accentColor : 'transparent',
                              }}
                              aria-label={`View ${course.title} details`}
                            >
                              View Details
                              <ChevronRight size={14} />
                            </Link>
                          </motion.div>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {course.featured && (
                        <motion.div
                          className="absolute top-4 right-4 z-10"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[#F97316] to-[#ea6c0c] rounded-full shadow-lg">
                            <Sparkles size={10} className="text-white" />
                            <span className="text-[8px] font-bold text-white tracking-wider">Featured</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <ScrollReveal direction="up" delay={0.6}>
          <motion.div
            className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#E2E8F0] p-6 shadow-sm"
            whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B3C5D]/10 flex items-center justify-center">
                  <BookOpen size={18} className="text-[#0B3C5D]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B3C5D]">50+ Programs</div>
                  <div className="text-xs text-[#94A3B8]">Across 3 streams</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 border-t border-b sm:border-t-0 sm:border-b-0 border-[#E2E8F0] py-3 sm:py-0">
                <div className="w-10 h-10 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
                  <Users size={18} className="text-[#0D9488]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B3C5D]">15,000+ Students</div>
                  <div className="text-xs text-[#94A3B8]">Guided to success</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                  <TrendingUp size={18} className="text-[#F97316]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B3C5D]">92% Placement</div>
                  <div className="text-xs text-[#94A3B8]">Average placement rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </Container>

      {/* Decorative Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-[#F8FAFC]"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 20%, 0 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}