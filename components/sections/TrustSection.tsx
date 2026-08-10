"use client";

import { useState } from "react";
import {
  Shield,
  Users,
  BookOpen,
  HeartHandshake,
  MessageSquare,
  LucideIcon,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  gradient: string;
  stats?: string;
  features?: string[];
}

const trustItems: TrustItem[] = [
  {
    icon: Shield,
    title: "Transparent Guidance",
    description:
      "We provide honest, unbiased information about colleges and courses — no hidden agendas, no misleading promises.",
    color: "text-[#0B3C5D]",
    bgColor: "bg-[#0B3C5D]/10 group-hover:bg-[#0B3C5D]",
    gradient: "from-[#0B3C5D]/5 to-[#0B3C5D]/10",
    stats: "100% Honest",
    features: ["No hidden fees", "Unbiased advice", "Complete transparency"],
  },
  {
    icon: HeartHandshake,
    title: "Personalized Counselling",
    description:
      "Every student is different. We listen to your goals, budget, and preferences before recommending anything.",
    color: "text-[#0D9488]",
    bgColor: "bg-[#0D9488]/10 group-hover:bg-[#0D9488]",
    gradient: "from-[#0D9488]/5 to-[#0D9488]/10",
    stats: "1-on-1 Sessions",
    features: ["Tailored advice", "Goal-oriented", "Budget conscious"],
  },
  {
    icon: BookOpen,
    title: "Multiple Course Options",
    description:
      "From Medical and Nursing to Engineering and BCA — we cover a wide range of programs to match your interests.",
    color: "text-[#F97316]",
    bgColor: "bg-[#F97316]/10 group-hover:bg-[#F97316]",
    gradient: "from-[#F97316]/5 to-[#F97316]/10",
    stats: "50+ Courses",
    features: ["Medical", "Engineering", "Graduation"],
  },
  {
    icon: Users,
    title: "Student & Parent Friendly",
    description:
      "We work with both students and parents, ensuring every stakeholder is informed and comfortable with the decision.",
    color: "text-[#6366F1]",
    bgColor: "bg-[#6366F1]/10 group-hover:bg-[#6366F1]",
    gradient: "from-[#6366F1]/5 to-[#6366F1]/10",
    stats: "5,000+ Families",
    features: ["Student focused", "Parent included", "Family centered"],
  },
  {
    icon: MessageSquare,
    title: "Admission Support",
    description:
      "We don't just guide — we support you through the documentation, applications, and entire admission process.",
    color: "text-[#EC4899]",
    bgColor: "bg-[#EC4899]/10 group-hover:bg-[#EC4899]",
    gradient: "from-[#EC4899]/5 to-[#EC4899]/10",
    stats: "End-to-End Support",
    features: ["Documentation", "Application help", "Follow-up support"],
  },
];

const floatingDecorations = [
  { icon: Sparkles, position: "top-10 left-10", delay: 0 },
  { icon: Star, position: "bottom-20 right-20", delay: 2 },
  { icon: CheckCircle, position: "top-1/3 right-10", delay: 1 },
];

export default function TrustSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      aria-labelledby="trust-heading"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/5 blur-3xl"
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
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/5 blur-3xl"
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

        {/* Animated Grid Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="trust-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="80" cy="80" r="1" fill="#0B3C5D" />
              <circle cx="0" cy="0" r="1" fill="#0B3C5D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trust-grid)" />
        </svg>

        {/* Floating Decorations */}
        {floatingDecorations.map((dec, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${dec.position} hidden lg:block`}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + idx,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dec.delay,
            }}
          >
            <dec.icon size={24} className="text-[#0D9488]/30" />
          </motion.div>
        ))}
      </div>

      <Container>
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="Why Students Choose Us"
            title="Guidance You Can Trust"
            description="CollegeSure is built around one belief: that every student deserves honest, personalized support during one of the most important decisions of their life."
            id="trust-heading"
            className="mb-12 lg:mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <ScrollReveal
                key={item.title}
                delay={idx * 0.08}
                direction="up"
              >
                <motion.div
                  onHoverStart={() => setHoveredIndex(idx)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="h-full"
                >
                  <Card3DTilt glowColor={`${item.color.replace('text-', '')}/20`} className="h-full">
                    <div
                      className={`
                        group relative card-base p-6 flex flex-col h-full cursor-default 
                        bg-white/90 backdrop-blur-sm border rounded-2xl 
                        transition-all duration-500 overflow-hidden
                        ${isHovered ? 'shadow-2xl border-transparent' : 'border-[#E2E8F0] shadow-sm hover:shadow-xl'}
                      `}
                      style={{
                        background: isHovered
                          ? `linear-gradient(135deg, white, ${item.color.replace('text-', '')}05)`
                          : 'white',
                      }}
                    >
                      {/* Animated Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                      />

                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute -inset-1 ${item.color.replace('text-', '')}/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 0.5 : 0 }}
                      />

                      {/* Icon with Enhanced Animation */}
                      <motion.div
                        className="relative"
                        whileHover={{ rotate: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <motion.div
                          className={`
                            w-12 h-12 rounded-xl flex items-center justify-center 
                            transition-all duration-500 relative z-10
                            ${item.bgColor}
                          `}
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                          }}
                        >
                          <Icon
                            size={24}
                            className={`
                              ${item.color} group-hover:text-white 
                              transition-all duration-500
                              ${isHovered ? 'scale-110' : ''}
                            `}
                          />

                          {/* Icon Background Pulse */}
                          <motion.div
                            className={`absolute inset-0 rounded-xl ${item.color.replace('text-', '')}/20`}
                            animate={{
                              scale: isHovered ? [1, 1.3, 1] : 1,
                              opacity: isHovered ? [0, 0.5, 0] : 0,
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: isHovered ? Infinity : 0,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>

                        {/* Stats Badge */}
                        {item.stats && (
                          <motion.div
                            className={`
                              absolute -top-2 -right-2 px-2 py-0.5 rounded-full 
                              text-[10px] font-bold text-white z-20
                              bg-gradient-to-r ${item.color.replace('text-', '')} 
                              shadow-lg
                            `}
                            initial={{ scale: 0 }}
                            animate={{ scale: isHovered ? 1 : 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            {item.stats}
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="font-bold text-[#0F172A] text-base mt-4 mb-2 leading-snug relative z-10"
                        animate={{
                          color: isHovered ? item.color.replace('text-', '') : '#0F172A',
                        }}
                      >
                        {item.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-sm text-[#475569] leading-relaxed relative z-10 flex-grow"
                        animate={{
                          opacity: isHovered ? 1 : 0.85,
                        }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Features List */}
                      {item.features && (
                        <motion.div
                          className="mt-4 space-y-1.5 relative z-10"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: isHovered ? 1 : 0,
                            height: isHovered ? 'auto' : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          {item.features.map((feature, i) => (
                            <motion.div
                              key={feature}
                              className="flex items-center gap-2 text-xs text-[#475569]"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: isHovered ? 1 : 0,
                                x: isHovered ? 0 : -10,
                              }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <CheckCircle size={12} className={`${item.color} flex-shrink-0`} />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* Learn More Link */}
                      <motion.div
                        className="mt-4 relative z-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 10,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.a
                          href="#"
                          className={`inline-flex items-center gap-1 text-xs font-semibold ${item.color}`}
                          whileHover={{ x: 5 }}
                        >
                          Learn More
                          <ArrowRight size={12} />
                        </motion.a>
                      </motion.div>

                      {/* Bottom Border Animation */}
                      <motion.div
                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient}`}
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

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.6}>
          <motion.div
            className="mt-16 text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-full px-6 py-3 shadow-sm hover:shadow-lg transition-all duration-300">
              <span className="text-sm text-[#475569]">
                <span className="font-semibold text-[#0B3C5D]">5,000+</span> students have found their path
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} className="text-[#0D9488]" />
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </Container>

      {/* Decorative Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-[#F8FAFC]"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}