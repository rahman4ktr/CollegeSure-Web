"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
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
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";
import Button from "@/components/ui/Button";
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
  { label: "Students Guided", value: "15,000+", icon: Users, change: "+12%", color: "#0D9488" },
  { label: "Partner Colleges", value: "50+", icon: Building2, change: "+8%", color: "#3B82F6" },
  { label: "Success Rate", value: "92%", icon: TrendingUp, change: "+5%", color: "#F97316" },
  { label: "Average Rating", value: "4.9/5", icon: Star, change: "+0.2", color: "#EC4899" },
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
        className="relative overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]"
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

        <Container className="relative z-10 py-16">
          <ScrollReveal direction="up">
            <div className="max-w-3xl">
              <motion.div
                className="inline-flex items-center gap-2 text-[#159447] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
              >
                <Sparkles size={14} className="text-[#F7D51A]" />
                About Us
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#159447]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Your College.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                  Our Assurance.
                </span>
              </motion.h1>

              <motion.p
                className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                CollegeSure is an admissions guidance service by Brainzima Innovation
                Institute, built to help students and parents navigate college
                admissions with clarity, confidence, and complete honesty.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button
                  as="link"
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Get Started
                </Button>
                <Button
                  as="link"
                  href="/courses"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Explore Courses
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </Container>

        {/* Decorative Shape at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </motion.div>

      {/* Stats Section */}
      <div className="bg-white border-b border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.08} direction="up">
                <motion.div
                  className="text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <stat.icon size={18} style={{ color: stat.color }} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#0B3C5D]">{stat.value}</div>
                  <div className="text-xs text-[#94A3B8]">{stat.label}</div>
                  <div className="text-[10px] font-medium" style={{ color: stat.color }}>
                    {stat.change}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>

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
              <Card3DTilt glowColor="rgba(11, 60, 93, 0.2)" maxTilt={8}>
                <div className="relative bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] shadow-xl overflow-hidden">
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

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors mt-6 group"
                    >
                      Learn More About Us
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card3DTilt>
            </ScrollReveal>
          </div>
        </Container>
      </div>

      {/* Journey Section */}
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
                  <Card3DTilt glowColor={`${step.color}25`}>
                    <div className="relative bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 h-full group">
                      <div className="absolute top-4 right-4 text-3xl font-black text-[#E2E8F0] group-hover:text-[#0D9488]/20 transition-colors duration-300">
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
                  <Card3DTilt glowColor={`${value.color}25`}>
                    <div className="group relative bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        <motion.div
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500"
                          style={{ backgroundColor: `${value.color}15` }}
                          whileHover={{ rotate: -5, scale: 1.1 }}
                        >
                          <Icon size={24} style={{ color: value.color }} />
                        </motion.div>
                        <h3
                          className="font-bold text-[#0F172A] text-lg mb-2 transition-colors duration-300 group-hover:text-[#0B3C5D]"
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
                <Card3DTilt glowColor="rgba(13, 148, 136, 0.15)">
                  <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 h-full">
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

      <CTASection
        title="Ready to Start Your College Journey?"
        description="Get personalized, honest guidance for your college admissions. No pressure, just genuine support."
      />
    </div>
  );
}