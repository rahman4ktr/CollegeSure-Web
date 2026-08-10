"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  Shield,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap
} from "lucide-react";

const comparisons = [
  {
    collegesure: "Personalized counselling for each student",
    traditional: "Generic, one-size-fits-all information",
    icon: "🎯",
    highlight: true,
  },
  {
    collegesure: "Multiple college options presented clearly",
    traditional: "Limited options, often biased",
    icon: "🏛️",
    highlight: false,
  },
  {
    collegesure: "Full admission support from start to finish",
    traditional: "Self-managed, confusing process",
    icon: "📋",
    highlight: true,
  },
  {
    collegesure: "Transparent about fees, eligibility, and scope",
    traditional: "Information overload with no clarity",
    icon: "📊",
    highlight: false,
  },
  {
    collegesure: "Both student and parent-friendly approach",
    traditional: "Often only student-facing",
    icon: "👨‍👩‍👧",
    highlight: false,
  },
  {
    collegesure: "Honest guidance — no fake promises",
    traditional: "Pressure tactics and unrealistic claims",
    icon: "💯",
    highlight: true,
  },
];

const stats = [
  { label: "Students Helped", value: "15,000+", icon: Users },
  { label: "Success Rate", value: "92%", icon: TrendingUp },
  { label: "Partner Colleges", value: "50+", icon: Award },
  { label: "Satisfaction Rate", value: "98%", icon: Star },
];

export default function WhyCollegeSure() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      aria-labelledby="why-heading"
    >
      {/* Ambient Background */}
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
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#0B3C5D]/5 blur-3xl"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#F97316]/5 blur-3xl"
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
      </div>

      <Container className="relative z-10">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="Why CollegeSure"
            title="A Better Way to Find Your College"
            description="We believe in honest, transparent guidance. Here's how CollegeSure compares to traditional college search."
            id="why-heading"
            className="mb-12 lg:mb-16"
          />
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal direction="up" delay={0.1}>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#E2E8F0] p-4 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
                    <stat.icon size={18} className="text-[#0D9488]" />
                  </div>
                </div>
                <div className="text-xl font-bold text-[#0B3C5D]">{stat.value}</div>
                <div className="text-xs text-[#94A3B8]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* Enhanced Table Header */}
          <ScrollReveal direction="up" delay={0.08}>
            <motion.div
              className="grid grid-cols-2 gap-4 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* CollegeSure Header */}
              <motion.div
                className="relative overflow-hidden bg-gradient-to-br from-[#0B3C5D] to-[#1a5276] text-white rounded-2xl px-6 py-5 text-center shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Sparkles size={16} className="text-[#0D9488]" />
                    <p className="font-bold text-sm tracking-wide">CollegeSure</p>
                  </div>
                  <p className="text-xs text-white/70">Personalized Guidance</p>
                </div>
              </motion.div>

              {/* Traditional Header */}
              <motion.div
                className="bg-[#F1F5F9] text-[#475569] rounded-2xl px-6 py-5 text-center border border-[#E2E8F0] relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="relative z-10">
                  <p className="font-semibold text-sm tracking-wide">Traditional Search</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">On Your Own</p>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Comparison rows */}
          <div className="space-y-3">
            {comparisons.map((row, i) => {
              const isHovered = hoveredRow === i;

              return (
                <ScrollReveal key={i} delay={0.12 + i * 0.05} direction="up">
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    onHoverStart={() => setHoveredRow(i)}
                    onHoverEnd={() => setHoveredRow(null)}
                  >
                    {/* CollegeSure side */}
                    <motion.div
                      className={`
                        relative rounded-2xl px-5 py-4 flex items-start gap-3 
                        transition-all duration-500 shadow-sm
                        ${isHovered
                          ? 'bg-[#0D9488]/15 border-[#0D9488]/40 shadow-lg'
                          : 'bg-[#0D9488]/5 border-[#0D9488]/15 hover:bg-[#0D9488]/10'
                        }
                        border
                      `}
                      animate={{
                        scale: isHovered ? 1.02 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl blur-xl opacity-0"
                        style={{ background: '#0D9488' }}
                        animate={{ opacity: isHovered ? 0.1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10 flex items-start gap-3 w-full">
                        <div className="flex-shrink-0 flex items-center gap-2">
                          <motion.div
                            animate={{
                              scale: isHovered ? [1, 1.2, 1] : 1,
                              rotate: isHovered ? [0, 5, -5, 0] : 0,
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: isHovered ? 1 : 0,
                            }}
                          >
                            <span className="text-lg">{row.icon}</span>
                          </motion.div>
                          <CheckCircle2
                            size={18}
                            className="text-[#0D9488] flex-shrink-0"
                          />
                        </div>
                        <p className="text-sm text-[#0F172A] leading-snug font-medium">
                          {row.collegesure}
                        </p>
                      </div>

                      {/* Highlight badge */}
                      {row.highlight && (
                        <motion.div
                          className="absolute -top-2 -right-2 z-20"
                          initial={{ scale: 0 }}
                          animate={{ scale: isHovered ? 1 : 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#F97316] to-[#ea6c0c] rounded-full shadow-lg">
                            <Zap size={10} className="text-white" />
                            <span className="text-[8px] font-bold text-white">Best</span>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Traditional side */}
                    <motion.div
                      className={`
                        bg-[#F8FAFC] border rounded-2xl px-5 py-4 flex items-start gap-3 
                        transition-all duration-500
                        ${isHovered
                          ? 'border-[#E2E8F0] shadow-md'
                          : 'border-[#E2E8F0]'
                        }
                      `}
                      animate={{
                        scale: isHovered ? 0.98 : 1,
                        opacity: isHovered ? 0.8 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <XCircle
                        size={18}
                        className="text-[#94A3B8] flex-shrink-0 mt-0.5"
                      />
                      <p className="text-sm text-[#475569] leading-snug">{row.traditional}</p>
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal direction="up" delay={0.6}>
            <motion.div
              className="mt-12 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute -inset-1 blur-2xl rounded-2xl bg-gradient-to-r from-[#0D9488]/20 to-[#0B3C5D]/20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative flex flex-wrap items-center justify-center gap-4 bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-2xl px-6 py-4 shadow-sm hover:shadow-xl transition-all duration-300">
                  <Shield size={20} className="text-[#0D9488]" />
                  <span className="text-sm text-[#475569]">
                    <span className="font-bold text-[#0B3C5D]">100% Transparent</span> — No hidden fees, no false promises
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles size={16} className="text-[#F97316]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Decorative Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 20%, 0 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}