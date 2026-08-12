"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import AdmissionProcess from "@/components/sections/AdmissionProcess";
import InquiryForm from "@/components/forms/InquiryForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";
import Button from "@/components/ui/Button";
import {
  Check,
  Sparkles,
  FileText,
  Send,
  MessageCircle,
  Award,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  Calendar,
  CheckCircle2
} from "lucide-react";

const supportDetails = [
  {
    title: "Documentation Assistance",
    description:
      "We guide you on what documents are required for each college and help you prepare them correctly.",
    icon: FileText,
    color: "#0D9488",
  },
  {
    title: "Application Support",
    description:
      "We assist you in filling application forms accurately and submitting them on time.",
    icon: Send,
    color: "#3B82F6",
  },
  {
    title: "College Communication",
    description:
      "We help facilitate communication with college admission offices on your behalf when needed.",
    icon: MessageCircle,
    color: "#F97316",
  },
  {
    title: "Fee & Scholarship Guidance",
    description:
      "We provide transparent information about fee structures and help you understand available scholarship options.",
    icon: Award,
    color: "#EC4899",
  },
];

const stats = [
  { label: "Students Placed", value: "15,000+", icon: Users, color: "#0D9488" },
  { label: "Success Rate", value: "92%", icon: TrendingUp, color: "#3B82F6" },
  { label: "Average Response", value: "< 24 hrs", icon: Clock, color: "#F97316" },
  { label: "Satisfaction Rate", value: "4.9/5", icon: Star, color: "#EC4899" },
];

const steps = [
  {
    number: "01",
    title: "Tell Us Your Goal",
    description: "Share your academic background, interests, budget, and preferred location.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Get Personalized Guidance",
    description: "Our counsellors analyze your profile and provide clear, honest recommendations.",
    icon: "💡",
  },
  {
    number: "03",
    title: "Choose the Right College",
    description: "Compare colleges based on your priorities with transparent information.",
    icon: "🏛️",
  },
  {
    number: "04",
    title: "Get Admission Support",
    description: "We support you throughout the admission process until your seat is confirmed.",
    icon: "✅",
  },
];

export default function AdmissionProcessPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  return (
    <div ref={containerRef}>
      {/* Enhanced Header Banner */}
      <motion.div
        className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Lightweight Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F7D51A]/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center gap-2 text-[#159447] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
              >
                <Sparkles size={13} className="text-[#F7D51A]" />
                Transparent Journey
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#159447]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Your Path to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                  College Admission
                </span>
              </motion.h1>

              <motion.p
                className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                A transparent, step-by-step process to help you go from confusion to confirmed
                college admission — with our guidance every step of the way.
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

      {/* Stats Section */}
      <div className="bg-white border-b border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
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
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Steps Section */}
      <div id="process">
        <AdmissionProcess />
      </div>

      {/* Enhanced Support Details */}
      <div className="bg-gradient-to-b from-[#F8FAFC] to-white section-py relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
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
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="Comprehensive Support"
              title="What Our Admission Support Includes"
              description="Our counsellors don't just give advice — they actively support you through the entire admission process."
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={idx * 0.08} direction="up">
                  <Card3DTilt glowColor={`${item.color}25`}>
                    <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, transparent, ${item.color}08)`,
                        }}
                      />

                      <div className="relative z-10">
                        <motion.div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                          style={{ backgroundColor: `${item.color}15` }}
                          whileHover={{ rotate: -5, scale: 1.1 }}
                        >
                          <Icon size={22} style={{ color: item.color }} />
                        </motion.div>
                        <h3
                          className="font-bold text-[#0F172A] text-lg mb-2 transition-colors duration-300"
                          style={{ color: item.color }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#475569] leading-relaxed">
                          {item.description}
                        </p>

                        <motion.div
                          className="mt-4 flex items-center gap-2 text-xs font-medium"
                          style={{ color: item.color }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <CheckCircle2 size={14} />
                          <span>Included in your journey</span>
                        </motion.div>
                      </div>
                    </div>
                  </Card3DTilt>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Quick Steps Preview */}
      <div className="bg-white section-py relative overflow-hidden">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="Quick Overview"
              title="Your 4-Step Journey"
              description="A simple, structured process designed to take you from confusion to confident college admission."
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <ScrollReveal key={step.number} delay={idx * 0.08} direction="up">
                <motion.div
                  className="relative bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 h-full group"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {step.icon}
                  </div>
                  <div className="relative">
                    <div className="text-2xl font-black text-[#E2E8F0] group-hover:text-[#0D9488]/20 transition-colors duration-300 mb-2">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-[#0F172A] text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Enhanced Inquiry Form */}
      <div className="bg-gradient-to-b from-[#F8FAFC] to-white section-py relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <motion.div
            className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/5 blur-3xl"
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

        <Container narrow>
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-4">
                <span className="w-6 h-px bg-[#0D9488]" />
                Get Started
                <span className="w-6 h-px bg-[#0D9488]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] mb-4">
                Ready to Begin Your Admission Journey?
              </h2>
              <p className="text-[#475569] text-base sm:text-lg max-w-xl mx-auto">
                Tell us about your goals and our counsellors will reach out to guide you personally.
              </p>
            </div>

            <motion.div
              className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] p-6 sm:p-8 relative overflow-hidden"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0D9488]/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F97316]/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                    <Shield size={18} className="text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B3C5D]">100% Free & Confidential</p>
                    <p className="text-xs text-[#94A3B8]">No pressure, just honest guidance</p>
                  </div>
                </div>
                <InquiryForm />
              </div>
            </motion.div>

            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#94A3B8]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-1.5">
                <Check size={12} className="text-[#0D9488]" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={12} className="text-[#0D9488]" />
                <span>Expert counsellors</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={12} className="text-[#0D9488]" />
                <span>Quick response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={12} className="text-[#0D9488]" />
                <span>Privacy protected</span>
              </div>
            </motion.div>
          </ScrollReveal>
        </Container>
      </div>

      <CTASection
        title="Ready to Find Your Perfect College?"
        description="Get personalized, honest guidance for your college admissions. No pressure, just genuine support from our expert counsellors."
      />
    </div>
  );
}