"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import Badge from "@/components/ui/Badge";
import {
  GraduationCap,
  Heart,
  Target,
  Eye,
  Sparkles,
  Shield,
  CheckCircle2,
  ArrowRight,
  Quote,
  Building2,
  Star,
  TrendingUp,
  Lightbulb,
  PenTool,
  Briefcase,
  BookOpen,
  MessageCircle,
  Users,
  Compass,
  Globe,
  ExternalLink,
  Laptop,
  Search,
  Check,
  Calendar,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Student First",
    description:
      "Every recommendation we make is in the best interest of the student and family — not driven by institutional commissions or external pressures.",
    color: "#EC4899",
    gradient: "from-[#EC4899]/20 to-[#EC4899]/5",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe you deserve clear, honest information about colleges, fees, eligibility, and career prospects — without jargon or hidden agendas.",
    color: "#3B82F6",
    gradient: "from-[#3B82F6]/20 to-[#3B82F6]/5",
  },
  {
    icon: Target,
    title: "Personalization",
    description:
      "We don't give generic advice. We listen to your specific goals, location, budget, and eligibility before making any recommendation.",
    color: "#F97316",
    gradient: "from-[#F97316]/20 to-[#F97316]/5",
  },
  {
    icon: GraduationCap,
    title: "Quality Guidance",
    description:
      "Our counsellors have in-depth knowledge of college admission processes and provide informed, practical guidance.",
    color: "#0D9488",
    gradient: "from-[#0D9488]/20 to-[#0D9488]/5",
  },
];

const teamStats = [
  { label: "Students Guided", value: "15,000+", icon: Users, color: "#159447" },
  { label: "Partner Colleges", value: "500+", icon: Building2, color: "#147CC1" },
  { label: "Courses Available", value: "1,000+", icon: BookOpen, color: "#F36C21" },
  { label: "Student Rating", value: "4.9/5", icon: Star, color: "#B30F66" },
];

const ecosystemVentures = [
  {
    id: "institute",
    name: "Brainzima Innovation Institute",
    subtitle: "Technology Education & Skill Hub",
    category: "Technology Education",
    description: "Quality IT and computer education, empowering students with industry-relevant technical skills across Eastern India.",
    color: "#159447",
    icon: GraduationCap,
    stats: [
      { label: "Students Trained", value: "1,200+" },
      { label: "Centers", value: "11+" },
    ],
  },
  {
    id: "rexvel",
    name: "Rexvel Web Solutions",
    subtitle: "Digital Solutions & Web Development",
    category: "Digital Solutions",
    description: "Custom web applications, enterprise software solutions, and digital transformation for modern organizations.",
    color: "#147CC1",
    icon: Laptop,
    stats: [
      { label: "Web Solutions", value: "100+" },
      { label: "Enterprise Support", value: "24/7" },
    ],
  },
  {
    id: "bifindr",
    name: "Bifindr.com",
    subtitle: "Digital Tools & AI Discovery Platform",
    category: "Digital Tools & AI Discovery",
    description: "Curated digital platform for discovering productivity tools, AI software, and smart online utilities.",
    color: "#F36C21",
    icon: Search,
    stats: [
      { label: "Tools Indexed", value: "500+" },
      { label: "Active Discovery", value: "Global" },
    ],
  },
  {
    id: "trybook",
    name: "Trybook.in",
    subtitle: "Exam Preparation & Testing Technology",
    category: "Exam Technology",
    description: "Smart testing platform offering competitive exam preparation, mock tests, and student practice assessments.",
    color: "#B30F66",
    icon: BookOpen,
    stats: [
      { label: "Mock Assessments", value: "250+" },
      { label: "Aspirant Reach", value: "Statewide" },
    ],
  },
  {
    id: "collegesure",
    name: "CollegeSure",
    subtitle: "Honest College Admissions & Career Guidance Platform",
    category: "Education Technology Division",
    status: "Current Venture",
    isFeatured: true,
    description: "CollegeSure is an education-focused digital platform by Brainzima that helps students navigate one of the most important decisions of their lives — choosing the right course and college. From exploring programs and colleges to personalized counselling and admission assistance, CollegeSure brings the entire journey into one simple, transparent platform.",
    quote: "Every student deserves clear, honest, and personalized guidance before choosing a college or course.",
    color: "#0D9488",
    icon: Compass,
    features: [
      "Course Discovery",
      "College Exploration",
      "Personalized Counselling",
      "Admission Guidance",
      "Course & College Comparison",
      "Student & Parent Support",
      "Application Assistance",
      "Career Guidance",
    ],
    stats: [
      { label: "Courses", value: "1,000+" },
      { label: "Colleges", value: "500+" },
      { label: "Students Guided", value: "15,000+" },
      { label: "Support Availability", value: "24/7" },
    ],
    ctaText: "Visit CollegeSure →",
    ctaLink: "https://collegesure.brainzima.com/",
  },
];

const timelineEvents = [
  {
    year: "2023",
    title: "Founded",
    description: "Brainzima Innovation Institute was founded with a single classroom in Katihar, focusing on basic computer literacy.",
    color: "#159447",
  },
  {
    year: "2024",
    title: "Expansion",
    description: "Expanded course offerings to include programming, web development, and digital services via Rexvel Web Solutions.",
    color: "#147CC1",
  },
  {
    year: "2025",
    title: "ISO Certified & Digital Tools",
    description: "Awarded ISO certification for quality education standards, expanding franchise network and digital platforms like Bifindr & Trybook.",
    color: "#F36C21",
  },
  {
    year: "2026",
    title: "CollegeSure Launch",
    description: "Launched CollegeSure by Brainzima — an education technology platform focused on course discovery, college exploration, personalized counselling, and admission guidance.",
    color: "#0D9488",
    isHighlight: true,
  },
];

const journeySteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discovery",
    description: "We listen to your goals, interests, and concerns to understand what you're looking for.",
    color: "#0D9488",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Planning",
    description: "We create a personalized roadmap with clear options and recommendations.",
    color: "#3B82F6",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Guidance",
    description: "We provide honest, transparent advice about colleges, courses, and career paths.",
    color: "#F97316",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Support",
    description: "We stand by you through the admission process until your seat is confirmed.",
    color: "#EC4899",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Tech Student",
    content: "CollegeSure helped me find the perfect engineering college. Their counsellors were patient and provided clear, honest guidance.",
    rating: 5,
    image: "👩‍🎓",
  },
  {
    name: "Rahul Kumar",
    role: "Medical Student",
    content: "I was completely lost about medical admissions. CollegeSure made the process simple and stress-free.",
    rating: 5,
    image: "👨‍🎓",
  },
  {
    name: "Sneha Patel",
    role: "Parent",
    content: "As a parent, I wanted the best for my daughter. CollegeSure's transparency and honesty gave us confidence.",
    rating: 5,
    image: "👩",
  },
];

export default function AboutPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl"
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
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F7D51A]/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
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
                  x: (i * 7.31) % 100 + "%",
                  y: (i * 13.97) % 100 + "%",
                }}
                animate={{
                  x: [
                    (i * 7.31) % 100 + "%",
                    ((i * 7.31 + 20) % 100) + "%",
                    ((i * 7.31 + 40) % 100) + "%",
                  ],
                  y: [
                    (i * 13.97) % 100 + "%",
                    ((i * 13.97 + 15) % 100) + "%",
                    ((i * 13.97 + 30) % 100) + "%",
                  ],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <ScrollReveal direction="up">
            <div className="max-w-3xl">
              <motion.div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
              >
                <Sparkles size={13} className="text-[#F7D51A]" />
                About CollegeSure & Brainzima
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Your College.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                  Our Assurance.
                </span>
              </motion.h1>

              <motion.p
                className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                CollegeSure is an admissions guidance platform by Brainzima Innovation
                Institute, built to help students and parents navigate college
                admissions with clarity, confidence, and complete honesty.
              </motion.p>
            </div>
          </ScrollReveal>
        </Container>

        {/* Decorative Shape at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </motion.div>

      {/* Mission Section */}
      <div className="bg-white section-py relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/5 blur-3xl"
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
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="w-6 h-px bg-[#0D9488]" />
                  Our Mission
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] leading-tight mb-5">
                  Honest Admissions Guidance for Every Student
                </h2>
                <div className="space-y-4 text-[#475569]">
                  <p className="leading-relaxed">
                    Choosing the right college is one of the most important decisions a
                    student and their family will make. Yet the process is often
                    overwhelming — filled with confusing information, pressure tactics,
                    and conflicting advice.
                  </p>
                  <p className="leading-relaxed">
                    CollegeSure was created to change that. We provide personalized,
                    transparent, and genuinely helpful admissions guidance — helping
                    students find colleges that match their goals, eligibility, and
                    practical considerations like location and fees.
                  </p>
                  <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                        <Shield size={16} className="text-[#0D9488]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0B3C5D]">
                          Our Promise
                        </p>
                        <p className="text-sm text-[#475569]">
                          We do not make promises we cannot keep. We do not guarantee
                          admissions, placements, or outcomes that depend on individual
                          effort. What we guarantee is honest guidance and our complete
                          support throughout the process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual Card */}
            <ScrollReveal direction="right">
              <Card3DTilt borderGlow={false} maxTilt={4}>
                <div className="relative bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] shadow-md overflow-hidden">
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-[#0D9488]/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0B3C5D] to-[#1a5276] rounded-2xl flex items-center justify-center shadow-lg">
                        <GraduationCap size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0B3C5D]">
                          Brainzima Innovation Institute
                        </h3>
                        <p className="text-sm text-[#94A3B8]">Since 2020</p>
                      </div>
                    </div>

                    <p className="text-[#475569] text-base leading-relaxed mb-6">
                      CollegeSure is a service of Brainzima Innovation Institute — an
                      organization committed to education, innovation, and student
                      empowerment.
                    </p>

                    <div className="space-y-3 pt-4 border-t border-[#E2E8F0]">
                      {[
                        { icon: BookOpen, text: "Courses: Medical, Engineering, Graduation" },
                        { icon: MessageCircle, text: "Guidance: Personalized, honest, free" },
                        { icon: CheckCircle2, text: "Support: End-to-end admission assistance" },
                      ].map((item) => (
                        <motion.div
                          key={item.text}
                          className="flex items-center gap-3 text-sm font-medium text-[#475569]"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                            <item.icon size={14} className="text-[#0D9488]" />
                          </div>
                          {item.text}
                        </motion.div>
                      ))}
                    </div>

                    <a
                      href="https://collegesure.brainzima.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors mt-6 group"
                    >
                      Visit CollegeSure →
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </Card3DTilt>
            </ScrollReveal>
          </div>
        </Container>
      </div>

      {/* Brainzima Ecosystem & Our Ventures Section */}
      <div className="bg-[#F8FAFC] section-py border-t border-[#E2E8F0] relative overflow-hidden">
        <Container>
          <ScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#147CC1] bg-[#147CC1]/10 px-3.5 py-1.5 rounded-full mb-4 border border-[#147CC1]/20">
                <Globe size={13} className="text-[#147CC1]" />
                Brainzima Innovation Ecosystem
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3C5D] leading-snug mb-4">
                One Vision, Multiple Ventures — Building an Ecosystem Across Education, Technology & Digital Innovation.
              </h2>
              <div className="mt-4 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm max-w-3xl mx-auto">
                <h3 className="text-sm font-bold text-[#0D9488] uppercase tracking-wide mb-1">
                  From Digital Education to Digital Empowerment
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Brainzima's ventures address different stages of the digital journey — from learning technology and building digital solutions to discovering tools, preparing for competitive exams, and helping students make better higher-education decisions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Ecosystem Ventures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
            {ecosystemVentures.map((venture) => {
              const Icon = venture.icon;
              if (venture.isFeatured) return null; // Featured card rendered full-width below
              return (
                <ScrollReveal key={venture.id} direction="up">
                  <Card3DTilt borderGlow={false} maxTilt={4} className="h-full">
                    <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${venture.color}15` }}
                        >
                          <Icon size={22} style={{ color: venture.color }} />
                        </div>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                          style={{
                            backgroundColor: `${venture.color}10`,
                            color: venture.color,
                            borderColor: `${venture.color}30`,
                          }}
                        >
                          {venture.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0B3C5D] mb-1">
                        {venture.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#94A3B8] mb-3">
                        {venture.subtitle}
                      </p>
                      <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">
                        {venture.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#E2E8F0]">
                        {venture.stats.map((st) => (
                          <div key={st.label} className="bg-[#F8FAFC] p-2 rounded-xl text-center">
                            <div className="text-sm font-extrabold text-[#0B3C5D]">{st.value}</div>
                            <div className="text-[10px] font-medium text-[#94A3B8]">{st.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card3DTilt>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Featured Venture — CollegeSure by Brainzima */}
          {(() => {
            const cs = ecosystemVentures.find((v) => v.id === "collegesure");
            if (!cs) return null;
            const Icon = cs.icon;
            return (
              <ScrollReveal direction="up">
                <Card3DTilt borderGlow={false} maxTilt={3} className="w-full">
                  <div className="bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D9488]/10 rounded-bl-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                      {/* Category Badge & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="bg-[#0D9488]/15 border border-[#0D9488]/30 text-[#0D9488] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {cs.category}
                          </span>
                          <span className="bg-[#F36C21]/15 border border-[#F36C21]/30 text-[#F36C21] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {cs.status}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-[#94A3B8] flex items-center gap-1.5">
                          <Globe size={14} className="text-[#0D9488]" />
                          <span>collegesure.brainzima.com</span>
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/15 flex items-center justify-center">
                              <Icon size={24} className="text-[#0D9488]" />
                            </div>
                            <div>
                              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B3C5D]">
                                {cs.name} <span className="text-sm font-bold text-[#0D9488]">by Brainzima</span>
                              </h3>
                              <p className="text-sm font-semibold text-[#475569]">
                                {cs.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>

                        <a
                          href={cs.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D9488] hover:bg-[#0a7a6f] text-white font-bold text-sm rounded-xl shadow-md transition-all duration-300 group"
                        >
                          {cs.ctaText}
                          <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </div>

                      {/* Description */}
                      <p className="text-base text-[#475569] leading-relaxed mb-6">
                        {cs.description}
                      </p>

                      {/* Quote Banner */}
                      {cs.quote && (
                        <blockquote className="p-4 bg-white rounded-2xl border border-[#E2E8F0] text-sm italic font-medium text-[#0B3C5D] mb-8 flex items-center gap-3">
                          <Quote size={20} className="text-[#0D9488] flex-shrink-0" />
                          <span>"{cs.quote}"</span>
                        </blockquote>
                      )}

                      {/* Features List */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                          What CollegeSure Offers
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {cs.features?.map((ft) => (
                            <div key={ft} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0B3C5D]">
                              <Check size={14} className="text-[#0D9488] flex-shrink-0" />
                              <span>{ft}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Platform Verified Highlights */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                          Platform Verified Highlights
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {cs.stats.map((st) => (
                            <div key={st.label} className="bg-white p-4 rounded-2xl border border-[#E2E8F0] text-center shadow-sm">
                              <div className="text-2xl font-extrabold text-[#0B3C5D]">{st.value}</div>
                              <div className="text-xs font-medium text-[#94A3B8] mt-1">{st.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3DTilt>
              </ScrollReveal>
            );
          })()}
        </Container>
      </div>

      {/* Journey & Timeline Section */}
      <div className="bg-white section-py relative overflow-hidden">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="Our History & Growth"
              title="Our Journey & Evolution"
              description="From humble beginnings in computer education to building Eastern India's leading education, web, and admissions technology ecosystem."
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((event, idx) => (
              <ScrollReveal key={event.year} delay={idx * 0.08} direction="up">
                <Card3DTilt borderGlow={false} maxTilt={4}>
                  <div className={`relative bg-white rounded-2xl p-6 border ${event.isHighlight ? 'border-[#0D9488]' : 'border-[#E2E8F0]'} shadow-sm hover:shadow-md transition-all duration-300 h-full group`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black" style={{ color: event.color }}>
                        {event.year}
                      </span>
                      <Calendar size={18} className="text-[#94A3B8]" />
                    </div>

                    <h3 className="font-bold text-[#0F172A] text-lg mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </Card3DTilt>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>

      {/* How We Work Section */}
      <div className="bg-[#F8FAFC] section-py relative overflow-hidden">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="How We Work"
              title="Your Journey With Us"
              description="We follow a structured, student-first approach to ensure you get the best guidance possible."
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={idx * 0.08} direction="up">
                  <Card3DTilt borderGlow={false} maxTilt={4}>
                    <div className="relative bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 h-full group">
                      <div className="absolute top-4 right-4 text-3xl font-black text-[#E2E8F0]">
                        {step.number}
                      </div>

                      <div className="relative">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${step.color}15` }}
                        >
                          <Icon size={22} style={{ color: step.color }} />
                        </div>
                        <h3 className="font-bold text-[#0F172A] text-lg mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#475569] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card3DTilt>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Values Section */}
      <div className="bg-white section-py relative overflow-hidden">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="What We Stand For"
              title="Our Core Values"
              description="These values guide every decision we make and every conversation we have with students and parents."
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={idx * 0.08} direction="up">
                  <Card3DTilt borderGlow={false} maxTilt={4}>
                    <div className="group relative bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 h-full overflow-hidden">
                      <div className="relative z-10">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${value.color}15` }}
                        >
                          <Icon size={24} style={{ color: value.color }} />
                        </div>
                        <h3
                          className="font-bold text-[#0F172A] text-lg mb-2"
                          style={{ color: value.color }}
                        >
                          {value.title}
                        </h3>
                        <p className="text-sm text-[#475569] leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card3DTilt>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#F8FAFC] section-py relative overflow-hidden">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="Trusted by Students & Parents"
              title="What People Say About Us"
              description="Real experiences from students and parents who received guidance from CollegeSure."
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={testimonial.name} delay={idx * 0.08} direction="up">
                <Card3DTilt borderGlow={false} maxTilt={4}>
                  <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D9488]/20 to-[#0B3C5D]/20 flex items-center justify-center text-2xl">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A]">{testimonial.name}</div>
                        <div className="text-xs text-[#94A3B8]">{testimonial.role}</div>
                      </div>
                    </div>

                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#F97316] text-[#F97316]" />
                      ))}
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                        <Quote size={12} className="text-[#0D9488]" />
                        <span>Verified student</span>
                      </div>
                    </div>
                  </div>
                </Card3DTilt>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Stats Section — Bottom Set */}
      <div className="bg-white border-y border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teamStats.map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.08} direction="up">
                <motion.div
                  className="text-center p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-md transition-all duration-300 border border-[#E2E8F0]"
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

      {/* CTA Section */}
      <ScrollReveal direction="up">
        <CTASection
          title="Ready to Start Your College Journey?"
          description="Get personalized guidance for your college admissions. No pressure, just genuine support."
        />
      </ScrollReveal>
    </div>
  );
}