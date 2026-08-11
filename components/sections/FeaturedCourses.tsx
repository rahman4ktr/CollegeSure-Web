"use client";

import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Users,
  ChevronRight,
  Star,
  Calendar,
  BookOpen,
  Send
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useCounsellingModal } from "@/components/providers/CounsellingModalProvider";

const enhancedCourses = [
  {
    id: 1,
    title: "Bachelor of Technology (B.Tech)",
    category: "Engineering",
    level: "Undergraduate",
    duration: "4 Years",
    description: "Comprehensive engineering program with specializations in Computer Science, Mechanical, Civil, and more.",
    image: "/images/courses/btech.jpg",
    slug: "engineering",
    href: "/courses/engineering",
    rating: 4.8,
    students: 1200,
    tags: ["CSE", "Mechanical", "Civil"],
    accentColor: "#147CC1",
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
    slug: "medical",
    href: "/courses/medical",
    rating: 4.9,
    students: 850,
    tags: ["Nursing", "Healthcare", "Clinical"],
    accentColor: "#159447",
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
    slug: "graduation",
    href: "/courses/graduation",
    rating: 4.7,
    students: 950,
    tags: ["Programming", "Web Dev", "Database"],
    accentColor: "#F36C21",
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
  const { openModal } = useCounsellingModal();

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      aria-labelledby="featured-courses-heading"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0B3C5D]/5 blur-3xl animate-ambient-slow" />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0D9488]/5 blur-3xl animate-ambient-slow-reverse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating Stats Background */}
        {floatingStats.map((stat, idx) => (
          <div
            key={stat.label}
            className="absolute hidden xl:block animate-fade-float"
            style={{
              top: `${20 + idx * 30}%`,
              right: `${5 + idx * 8}%`,
              animationDelay: `${idx * 0.5}s`,
              animationDuration: `${4 + idx * 1.5}s`,
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
          </div>
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

              <div
                className="absolute -top-4 -left-8 text-3xl opacity-20 animate-float-y-rotate"
                style={{ animationDuration: "6s" }}
              >
                ✨
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/courses"
                className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-extrabold text-[#04164B] hover:text-[#B30F66] transition-colors group bg-white px-5 py-3 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md"
                aria-label="View all available courses"
              >
                <span>View All Courses</span>
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {enhancedCourses.map((course, idx) => (
            <ScrollReveal key={course.slug} delay={idx * 0.08} direction="up">
              <div className="h-full group">
                <div className="relative h-full">
                  <div className="relative bg-white rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1.5">
                    {/* Top Accent Bar */}
                    <div className="h-1.5 w-full flex-shrink-0" style={{ backgroundColor: course.accentColor }} />

                    <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                      <div>
                        {/* Header Row: Icon + Rating */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-13 h-13 rounded-xl flex items-center justify-center text-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                              {course.icon}
                            </div>
                            <div>
                              <span
                                className="text-xs font-extrabold"
                                style={{ color: course.accentColor }}
                              >
                                {course.category}
                              </span>
                              <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">{course.level}</div>
                            </div>
                          </div>

                          {/* Rating Badge — Always Visible */}
                          <div className="flex items-center gap-1 bg-[#FEF3C7] border border-[#FDE68A] px-2.5 py-1 rounded-full text-xs font-extrabold text-[#92400E]">
                            <Star size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
                            <span>{course.rating}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-extrabold text-[#04164B] mb-2 leading-snug group-hover:text-[#B30F66] transition-colors">
                          {course.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                          {course.description}
                        </p>

                        {/* Details Grid — Always Visible */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2.5 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <Calendar size={13} className="text-[#0D9488]" />
                              <span className="text-xs font-extrabold text-[#04164B]">{course.duration}</span>
                            </div>
                            <div className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider mt-0.5">Duration</div>
                          </div>

                          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2.5 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <Users size={13} className="text-[#04164B]" />
                              <span className="text-xs font-extrabold text-[#04164B]">{course.students}+</span>
                            </div>
                            <div className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider mt-0.5">Students</div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {course.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-[#F8FAFC] text-[#04164B] border border-[#E2E8F0]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Section: Placement + Useful Action Links */}
                      <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                        <div>
                          <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">Placement Rate</div>
                          <div className="text-sm font-extrabold" style={{ color: course.accentColor }}>
                            {course.placements}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={course.href}
                            className="inline-flex items-center gap-1 px-3 py-2 text-xs font-extrabold rounded-xl border border-[#E2E8F0] text-[#04164B] hover:bg-[#F8FAFC] transition-colors"
                          >
                            <span>Overview</span>
                            <ChevronRight size={13} />
                          </Link>

                          <button
                            type="button"
                            onClick={() => openModal(course.title)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold rounded-xl text-white shadow-md transition-all duration-200 cursor-pointer hover:opacity-90"
                            style={{ backgroundColor: course.accentColor }}
                            aria-label={`Get counselling for ${course.title}`}
                          >
                            <span>Inquire Now</span>
                            <Send size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-14 bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#04164B]/10 flex items-center justify-center">
                  <BookOpen size={18} className="text-[#04164B]" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#04164B]">50+ Programs</div>
                  <div className="text-xs text-[#94A3B8] font-medium">Across 3 major streams</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 border-t border-b sm:border-t-0 sm:border-b-0 border-[#E2E8F0] py-3 sm:py-0">
                <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                  <Users size={18} className="text-[#0D9488]" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#04164B]">15,000+ Students</div>
                  <div className="text-xs text-[#94A3B8] font-medium">Guided to success</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                  <TrendingUp size={18} className="text-[#F97316]" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#04164B]">92% Placement</div>
                  <div className="text-xs text-[#94A3B8] font-medium">Average placement rate</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}