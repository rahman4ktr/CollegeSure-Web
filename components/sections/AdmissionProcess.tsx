"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Target,
  Lightbulb,
  School,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  Award,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card3DTilt from "@/components/ui/Card3DTilt";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Tell Us Your Goal",
    description:
      "Share your academic background, interests, budget, and preferred location. We listen carefully to understand what matters most to you.",
    color: "#0B3C5D",
    gradient: "from-[#0B3C5D]/20 via-[#0B3C5D]/5 to-transparent",
    iconBg: "bg-[#0B3C5D] group-hover:bg-[#0B3C5D]",
    stats: "90%",
    statLabel: "Success Rate",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Get Personalized Guidance",
    description:
      "Our counsellors analyze your profile and provide clear, honest recommendations — explaining the pros and cons of each option.",
    color: "#0D9488",
    gradient: "from-[#0D9488]/20 via-[#0D9488]/5 to-transparent",
    iconBg: "bg-[#0D9488] group-hover:bg-[#0D9488]",
    stats: "100%",
    statLabel: "Personalized",
  },
  {
    number: "03",
    icon: School,
    title: "Choose the Right College",
    description:
      "Compare colleges based on your priorities. We provide transparent information to help you make a well-informed decision — not a pressured one.",
    color: "#F97316",
    gradient: "from-[#F97316]/20 via-[#F97316]/5 to-transparent",
    iconBg: "bg-[#F97316] group-hover:bg-[#F97316]",
    stats: "50+",
    statLabel: "Universities",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Get Admission Support",
    description:
      "From documentation to application submission, we support you throughout the admission process until your seat is confirmed.",
    color: "#6366F1",
    gradient: "from-[#6366F1]/20 via-[#6366F1]/5 to-transparent",
    iconBg: "bg-[#6366F1] group-hover:bg-[#6366F1]",
    stats: "98%",
    statLabel: "Success Rate",
  },
];

const floatingElements = [
  { icon: Users, position: "top-20 right-10", delay: 0 },
  { icon: Clock, position: "bottom-20 left-10", delay: 1.5 },
  { icon: Award, position: "top-1/3 left-20", delay: 3 },
  { icon: TrendingUp, position: "bottom-1/3 right-20", delay: 4.5 },
];

export default function AdmissionProcess() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      aria-labelledby="process-heading"
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
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/5 blur-3xl"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#6366F1]/5 blur-3xl"
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

        {/* Floating Elements */}
        {floatingElements.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.position} hidden lg:block`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + idx * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <item.icon size={28} className="text-[#0D9488]/20" />
          </motion.div>
        ))}
      </div>

      <Container>
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="How It Works"
            title="Admission in 4 Simple Steps"
            description="A straightforward, stress-free process designed to take you from confusion to confident college admission."
            id="process-heading"
            className="mb-14 lg:mb-16"
          />
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Enhanced Connector Line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5" aria-hidden>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B3C5D]/20 via-[#0D9488]/40 to-[#F97316]/20" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0D9488] via-[#F97316] to-[#0D9488]"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredIndex === index;

              return (
                <ScrollReveal key={step.number} delay={index * 0.12} direction="up">
                  <motion.div
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="h-full"
                  >
                    <Card3DTilt glowColor={`${step.color}25`} className="h-full">
                      <div
                        className={`
                          relative flex flex-col items-center text-center lg:items-start lg:text-left 
                          p-6 rounded-2xl transition-all duration-500 h-full
                          ${isHovered ? 'shadow-2xl border-transparent' : 'shadow-sm hover:shadow-xl'}
                          border ${isHovered ? 'border-transparent' : 'border-[#E2E8F0]'}
                        `}
                        style={{
                          background: isHovered
                            ? `linear-gradient(135deg, #ffffff, ${step.color}05)`
                            : '#ffffff',
                        }}
                      >
                        {/* Animated Background Gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity duration-500 rounded-2xl`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                        />

                        {/* Glow Effect */}
                        <motion.div
                          className="absolute -inset-1 blur-2xl opacity-0 transition-opacity duration-500 rounded-2xl"
                          style={{
                            background: step.color,
                            opacity: isHovered ? 0.1 : 0,
                          }}
                        />

                        {/* Step Number - Desktop */}
                        <motion.div
                          className="hidden lg:block absolute top-4 right-4 z-10"
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? -5 : 0,
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <span
                            className="text-5xl font-black leading-none"
                            style={{
                              color: isHovered ? step.color : '#E2E8F0',
                              opacity: isHovered ? 0.3 : 1,
                            }}
                          >
                            {step.number}
                          </span>
                        </motion.div>

                        {/* Icon Section */}
                        <div className="relative z-10 flex flex-col items-center lg:items-start w-full">
                          <motion.div
                            className="relative"
                            whileHover={{ rotate: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <div
                              className={`
                                w-16 h-16 rounded-2xl flex items-center justify-center 
                                transition-all duration-500 relative
                                ${step.iconBg} 
                                ${isHovered ? 'scale-110 shadow-lg' : 'shadow-md'}
                              `}
                              style={{
                                backgroundColor: isHovered ? step.color : step.color,
                                boxShadow: isHovered ? `0 20px 40px ${step.color}40` : undefined,
                              }}
                            >
                              <Icon
                                size={28}
                                className="text-white transition-all duration-500"
                                style={{
                                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                }}
                              />

                              {/* Pulse Ring */}
                              <motion.div
                                className="absolute inset-0 rounded-2xl"
                                animate={{
                                  scale: isHovered ? [1, 1.2, 1] : 1,
                                  opacity: isHovered ? [0.5, 0, 0.5] : 0,
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: isHovered ? Infinity : 0,
                                  ease: "easeInOut",
                                }}
                                style={{
                                  border: `2px solid ${step.color}`,
                                }}
                              />
                            </div>

                            {/* Step Number - Mobile */}
                            <div className="lg:hidden absolute -top-2 -right-2">
                              <span
                                className="text-sm font-bold px-2 py-0.5 rounded-full bg-white shadow-sm"
                                style={{ color: step.color }}
                              >
                                {step.number}
                              </span>
                            </div>
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 mt-4 w-full">
                          <motion.h3
                            className="text-lg font-bold text-[#0F172A] mb-2 leading-snug"
                            animate={{
                              color: isHovered ? step.color : '#0F172A',
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.title}
                          </motion.h3>

                          <motion.p
                            className="text-sm text-[#475569] leading-relaxed"
                            animate={{
                              opacity: isHovered ? 1 : 0.85,
                            }}
                          >
                            {step.description}
                          </motion.p>

                          {/* Stats Card */}
                          <motion.div
                            className="mt-4 pt-4 border-t border-[#E2E8F0]"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              y: isHovered ? 0 : 10,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{
                                  backgroundColor: `${step.color}15`,
                                }}
                              >
                                <Award size={18} style={{ color: step.color }} />
                              </div>
                              <div>
                                <div
                                  className="text-base font-bold"
                                  style={{ color: step.color }}
                                >
                                  {step.stats}
                                </div>
                                <div className="text-[10px] text-[#94A3B8]">
                                  {step.statLabel}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Bottom Border Animation */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                          style={{ backgroundColor: step.color }}
                          initial={{ width: '0%' }}
                          animate={{ width: isHovered ? '100%' : '0%' }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </Card3DTilt>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <ScrollReveal delay={0.4} direction="up">
          <motion.div
            className="mt-16 text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <div className="relative inline-block">
              {/* Glow behind CTA */}
              <motion.div
                className="absolute -inset-2 blur-2xl rounded-2xl bg-[#0D9488]/20"
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

              <div className="relative">
                <Button
                  as="a"
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden px-8 py-4 text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles size={18} />
                    Start Your Journey
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0B3C5D] via-[#0D9488] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundSize: "200% 100%" }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {['✅', '⭐', '🏆', '💯'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      className="text-sm"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 400 }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
                <span className="text-xs text-[#94A3B8]">Trusted by 15,000+ students</span>
              </div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
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