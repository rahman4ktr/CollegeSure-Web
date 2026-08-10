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
  Stethoscope,
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
  Heart,
  Syringe,
  Pill,
  Microscope,
  Ambulance,
  Brain,
  Activity,
  HeartPulse,
  GraduationCap // ✅ Added missing import
} from "lucide-react";
import Link from "next/link";

// Stats Data
const stats = [
  { label: "Medical Programs", value: "8+", icon: BookOpen, color: "#0D9488" },
  { label: "Partner Hospitals", value: "30+", icon: Building2, color: "#3B82F6" },
  { label: "Students Placed", value: "2,000+", icon: Users, color: "#F97316" },
  { label: "Success Rate", value: "95%", icon: TrendingUp, color: "#EC4899" },
];

// Specializations
const specializations = [
  { name: "General Nursing & Midwifery", icon: HeartPulse, color: "#0D9488" },
  { name: "B.Sc Nursing", icon: Heart, color: "#3B82F6" },
  { name: "Radiology Technology", icon: Microscope, color: "#F97316" },
  { name: "Medical Lab Technology", icon: Syringe, color: "#8B5CF6" },
  { name: "Operation Theatre Technology", icon: Activity, color: "#EC4899" },
  { name: "Emergency Medical Services", icon: Ambulance, color: "#F59E0B" },
];

export default function MedicalCoursesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);

  const courses = getCoursesByCategory("medical");

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Enhanced Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-gradient-to-br from-[#0B3C5D] via-[#082d45] to-[#1a5276] pt-8 pb-16 sm:pt-12 sm:pb-20"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/20 blur-3xl"
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
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/15 blur-3xl"
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
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F97316]/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
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

          {/* Heart Beat Pulse Animation */}
          <motion.div
            className="absolute bottom-20 right-20 text-white/5"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <HeartPulse size={120} />
          </motion.div>
        </div>

        <Container className="relative z-10">
          <ScrollReveal direction="down" distance={20}>
            <Breadcrumbs
              items={[
                { label: "Courses", href: "/courses" },
                { label: "Medical & Paramedical" },
              ]}
              className="text-white/70 [&>span]:text-white/40"
            />
          </ScrollReveal>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <ScrollReveal direction="left" className="flex-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="teal"
                    icon={<Sparkles size={12} />}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
                  >
                    Healthcare Programs
                  </Badge>
                  <Badge variant="teal" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <Stethoscope size={10} className="mr-1" />
                    Nursing & Paramedical
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
                  Medical &
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#3B82F6] to-[#F97316]">
                    Paramedical Courses
                  </span>
                </h1>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl">
                  Nursing, radiology, and allied health programs that open doors to
                  rewarding careers in healthcare. Get personalized admissions guidance.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 text-sm text-white/90 font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    <Clock size={16} className="text-[#0D9488]" />
                    3-4 Years
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90 font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    <GraduationCap size={16} className="text-[#3B82F6]" />
                    10+2 with PCB
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90 font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    <MapPin size={16} className="text-[#F97316]" />
                    Multiple Cities
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Action Buttons */}
            <ScrollReveal direction="right" className="flex-shrink-0">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0D9488] to-[#0a7a6f] hover:from-[#0a7a6f] hover:to-[#086b61] text-white font-bold px-8 py-4 rounded-2xl shadow-[0_4px_24px_rgba(13,148,136,0.35)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(13,148,136,0.45)]"
                >
                  <MessageCircle size={18} />
                  <span>Request Free Counselling</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="#specializations"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 transition-all duration-200"
                >
                  <Sparkles size={18} />
                  <span>Explore Specializations</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Decorative Shape */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F8FAFC]"
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

      {/* Specializations Section */}
      <div id="specializations" className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-12">
        <Container>
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <Badge variant="teal" className="mb-3">Healthcare Specializations</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] mb-3">
                Popular <span className="text-[#0D9488]">Medical</span> Programs
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto">
                Choose from a wide range of nursing and paramedical programs offered at top healthcare institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializations.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E2E8F0] hover:shadow-md hover:border-[#0D9488]/30 transition-all duration-300 group"
                    whileHover={{ x: 4, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${spec.color}15` }}
                    >
                      <Icon size={14} style={{ color: spec.color }} />
                    </div>
                    <span className="text-sm font-medium text-[#475569] group-hover:text-[#0B3C5D] transition-colors">
                      {spec.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </div>

      {/* Main Grid */}
      <div className="bg-[#F8FAFC] section-py">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                  <Stethoscope size={20} className="text-[#0D9488]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B3C5D]">
                  All Medical & Paramedical Courses
                </h2>
              </div>
              <p className="text-sm text-[#94A3B8] ml-13">
                Browse all available healthcare programs
              </p>
            </div>
            <Badge variant="teal" size="sm" className="hover:scale-105 transition-transform">
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
                <Stethoscope size={32} className="text-[#94A3B8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">No Medical Courses Found</h3>
              <p className="text-[#475569]">Check back later for new programs.</p>
            </div>
          )}
        </Container>
      </div>

      {/* CTA Section */}
      <ScrollReveal direction="up">
        <CTASection
          title="Interested in a Medical or Paramedical Program?"
          description="Our counsellors can help you find the right nursing or paramedical college based on your eligibility and location."
          primaryButtonText="Get Free Counselling"
          primaryButtonLink="/contact"
          secondaryButtonText="Explore All Courses"
          secondaryButtonLink="/courses"
        />
      </ScrollReveal>
    </div>
  );
}