"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import CourseCard from "@/components/cards/CourseCard";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getCoursesByCategory } from "@/lib/data/courses";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  BookOpen,
  CheckCircle2,
  Building2,
  MapPin,
  Clock,
  MessageCircle,
  Briefcase,
  FileText,
  BarChart
} from "lucide-react";
import Link from "next/link";

// Stats Data
const stats = [
  { label: "Graduation Programs", value: "12+", icon: BookOpen, color: "#F36C21" },
  { label: "Partner Colleges", value: "50+", icon: Building2, color: "#159447" },
  { label: "Students Enrolled", value: "5,000+", icon: Users, color: "#147CC1" },
  { label: "Career Success Rate", value: "90%", icon: TrendingUp, color: "#B30F66" },
];

// Popular Programs
const popularPrograms = [
  { name: "Bachelor of Computer Applications", icon: FileText, color: "#147CC1" },
  { name: "Bachelor of Business Administration", icon: Briefcase, color: "#F36C21" },
  { name: "Bachelor of Commerce", icon: BarChart, color: "#159447" },
  { name: "Bachelor of Arts", icon: GraduationCap, color: "#591084" },
  { name: "Bachelor of Science", icon: BookOpen, color: "#B30F66" },
  { name: "Bachelor of Education", icon: Award, color: "#F7D51A" },
];

export default function GraduationCoursesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);

  const courses = getCoursesByCategory("graduation");

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#FDFDFD]">
      {/* Enhanced Hero Section */}
      <motion.div
        className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#F36C21]/20 blur-3xl"
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
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl"
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

        <Container className="relative z-10 py-6 sm:py-8">
          <ScrollReveal direction="down" distance={20}>
            <Breadcrumbs
              items={[
                { label: "Courses", href: "/courses" },
                { label: "Graduation" },
              ]}
              className="text-white/70 [&>span]:text-white/40 mb-3"
            />
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge 
                    variant="orange" 
                    icon={<Sparkles size={12} />}
                    className="bg-[#F36C21]/20 border-[#F36C21]/40 text-white"
                  >
                    Commerce & IT Programs
                  </Badge>
                  <Badge variant="teal" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <GraduationCap size={10} className="mr-1" />
                    UG Programs
                  </Badge>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-3">
                  Graduation{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] via-[#B30F66] to-[#F7D51A]">
                    Programs
                  </span>
                </h1>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
                  BCA, BBA, B.Com and other undergraduate programs — diverse options 
                  for students looking for versatile and rewarding careers.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10">
                    <Clock size={14} className="text-[#F36C21]" />
                    3 Years
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10">
                    <GraduationCap size={14} className="text-[#B30F66]" />
                    10+2 in Any Stream
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10">
                    <MapPin size={14} className="text-[#147CC1]" />
                    Multiple Cities
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Decorative Shape */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-[#FDFDFD]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </motion.div>

      {/* Stats Section */}
      <div className="bg-white border-b border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.08} direction="up">
                <motion.div
                  className="text-center p-4 rounded-2xl bg-[#FEF7F3] hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#E2E8F0]"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                    <stat.icon size={20} style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-bold text-[#04164B]">{stat.value}</div>
                  <div className="text-xs text-[#94A3B8] font-medium">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Popular Programs Section */}
      <div id="programs" className="bg-[#FEF7F3]/50 border-b border-[#E2E8F0] py-12">
        <Container>
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <Badge variant="orange" className="mb-3">Popular Programs</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#04164B] mb-3">
                Most Popular <span className="text-[#F36C21]">Graduation</span> Programs
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto font-medium">
                Choose from a variety of undergraduate programs offered at top colleges.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPrograms.map((program, idx) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E2E8F0] hover:shadow-md hover:border-[#F36C21]/40 transition-all duration-300 group"
                    whileHover={{ x: 4, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${program.color}15` }}
                    >
                      <Icon size={14} style={{ color: program.color }} />
                    </div>
                    <span className="text-sm font-semibold text-[#475569] group-hover:text-[#04164B] transition-colors">
                      {program.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </div>

      {/* Main Grid */}
      <div className="bg-[#FDFDFD] section-py">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-[#F36C21]/10 flex items-center justify-center">
                  <GraduationCap size={20} className="text-[#F36C21]" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#04164B]">
                  All Graduation Courses
                </h2>
              </div>
              <p className="text-sm text-[#94A3B8] ml-13">
                Browse all available undergraduate programs
              </p>
            </div>
            <Badge variant="orange" size="sm" className="hover:scale-105 transition-transform">
              {courses.length} Courses
            </Badge>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <StaggerItem key={course.slug}>
                  <CourseCard course={course} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Empty State */}
          {courses.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#F8FAFC] flex items-center justify-center mb-4 border border-[#E2E8F0]">
                <GraduationCap size={32} className="text-[#94A3B8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">No Graduation Courses Found</h3>
              <p className="text-[#475569]">Check back later for new programs.</p>
            </div>
          )}
        </Container>
      </div>

      {/* CTA Section */}
      <ScrollReveal direction="up">
        <CTASection
          title="Not Sure Between BCA, BBA, or B.Com?"
          description="Our counsellors can help you understand the differences and choose the graduation program that best fits your career goals."
          primaryButtonText="Get Free Counselling"
          primaryButtonLink="/contact"
          secondaryButtonText="Explore All Courses"
          secondaryButtonLink="/courses"
        />
      </ScrollReveal>
    </div>
  );
}