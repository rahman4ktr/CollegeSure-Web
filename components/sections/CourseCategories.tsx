"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Cpu,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Clock,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";

const categories = [
  {
    id: "medical",
    icon: Stethoscope,
    label: "Medical & Paramedical",
    shortLabel: "Healthcare",
    description:
      "Programs in nursing, radiology, and allied health sciences that open doors to a rewarding career in healthcare.",
    popularCourses: ["GNM Nursing", "B.Sc Nursing", "B.Sc Radiology", "Paramedical Diplomas"],
    href: "/courses/medical",
    accentColor: "#0D9488",
    accentLight: "#0D9488/10",
    bgGradient: "from-[#0D9488]/10 via-[#0D9488]/5 to-transparent",
    borderHover: "hover:border-[#0D9488]/40",
    iconBg: "bg-[#0D9488]/15 group-hover:bg-[#0D9488]",
    iconColor: "text-[#0D9488] group-hover:text-white",
    tag: "bg-[#0D9488]/10 text-[#0D9488]",
    cta: "text-[#0D9488] hover:text-white hover:bg-[#0D9488] border-[#0D9488]/30 hover:border-[#0D9488]",
    stats: [
      { label: "Programs", value: "15+" },
      { label: "Hospitals", value: "20+" },
    ],
    featured: true,
    // image: "🏥",
  },
  {
    id: "engineering",
    icon: Cpu,
    label: "Engineering",
    shortLabel: "Technology",
    description:
      "B.Tech programs across Computer Science, Mechanical, Civil and more — building the engineers of tomorrow.",
    popularCourses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Civil", "Diploma Engineering"],
    href: "/courses/engineering",
    accentColor: "#0B3C5D",
    accentLight: "#0B3C5D/10",
    bgGradient: "from-[#0B3C5D]/10 via-[#0B3C5D]/5 to-transparent",
    borderHover: "hover:border-[#0B3C5D]/40",
    iconBg: "bg-[#0B3C5D]/15 group-hover:bg-[#0B3C5D]",
    iconColor: "text-[#0B3C5D] group-hover:text-white",
    tag: "bg-[#0B3C5D]/10 text-[#0B3C5D]",
    cta: "text-[#0B3C5D] hover:text-white hover:bg-[#0B3C5D] border-[#0B3C5D]/30 hover:border-[#0B3C5D]",
    stats: [
      { label: "Specializations", value: "8+" },
      { label: "Companies", value: "50+" },
    ],
    featured: false,
    // image: "⚡",
  },
  {
    id: "graduation",
    icon: GraduationCap,
    label: "Graduation Programs",
    shortLabel: "Commerce & IT",
    description:
      "BCA, BBA, B.Com and other graduation programs for students looking for versatile and promising careers.",
    popularCourses: ["BCA", "BBA", "B.Com", "BA Programs"],
    href: "/courses/graduation",
    accentColor: "#F97316",
    accentLight: "#F97316/10",
    bgGradient: "from-[#F97316]/10 via-[#F97316]/5 to-transparent",
    borderHover: "hover:border-[#F97316]/40",
    iconBg: "bg-[#F97316]/15 group-hover:bg-[#F97316]",
    iconColor: "text-[#F97316] group-hover:text-white",
    tag: "bg-[#F97316]/10 text-[#F97316]",
    cta: "text-[#F97316] hover:text-white hover:bg-[#F97316] border-[#F97316]/30 hover:border-[#F97316]",
    stats: [
      { label: "Programs", value: "12+" },
      { label: "Universities", value: "25+" },
    ],
    featured: false,
    // image: "🎓",
  },
];

const floatingIcons = [
  { icon: TrendingUp, position: "top-20 left-10", delay: 0 },
  { icon: Award, position: "bottom-20 right-10", delay: 1.5 },
  { icon: Users, position: "top-1/3 right-20", delay: 3 },
  { icon: Clock, position: "bottom-1/3 left-20", delay: 4.5 },
];

export default function CourseCategories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      aria-labelledby="categories-heading"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0B3C5D]/5 blur-3xl"
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

        {/* Floating Icons */}
        {floatingIcons.map((item, idx) => (
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
            eyebrow="What We Cover"
            title="Course Categories"
            description="We help students find the right program across three major streams. Whether you want to work in healthcare, technology, or business — we have options for you."
            id="categories-heading"
            className="mb-12 lg:mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isHovered = hoveredId === cat.id;

            return (
              <ScrollReveal key={cat.id} delay={idx * 0.1} direction="up">
                <motion.div
                  onHoverStart={() => setHoveredId(cat.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="h-full"
                >
                  <Card3DTilt glowColor={`${cat.accentColor}25`} className="h-full">
                    <article
                      className={`
                        group relative flex flex-col h-full overflow-hidden 
                        bg-white rounded-2xl 
                        border transition-all duration-500
                        ${isHovered ? 'shadow-2xl border-transparent' : 'border-[#E2E8F0] shadow-sm hover:shadow-xl'}
                      `}
                      style={{
                        background: isHovered
                          ? `linear-gradient(135deg, #ffffff, ${cat.accentColor}08)`
                          : '#ffffff',
                      }}
                    >
                      {/* Animated Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} opacity-0 transition-opacity duration-500`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                      />

                      {/* Glow Effect */}
                      <motion.div
                        className="absolute -inset-1 blur-2xl transition-opacity duration-500"
                        style={{
                          background: cat.accentColor,
                          opacity: isHovered ? 0.1 : 0,
                        }}
                      />

                      {/* Top Gradient Bar with Animation */}
                      <div className="h-1 w-full relative overflow-hidden flex-shrink-0">
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: cat.accentColor }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{ x: isHovered ? '100%' : '-100%' }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                      </div>

                      {/* Featured Badge */}
                      {cat.featured && (
                        <motion.div
                          className="absolute top-4 right-4 z-20"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#F97316] to-[#ea6c0c] rounded-full shadow-lg">
                            <Sparkles size={12} className="text-white" />
                            <span className="text-[10px] font-bold text-white tracking-wide">Popular</span>
                          </div>
                        </motion.div>
                      )}

                      <div className="p-6 flex flex-col flex-1 relative z-10">
                        {/* Icon with Enhanced Animation */}
                        <div className="relative flex-shrink-0">
                          <motion.div
                            className={`
                              w-14 h-14 rounded-xl flex items-center justify-center 
                              transition-all duration-500 relative
                              ${cat.iconBg}
                            `}
                            animate={{
                              scale: isHovered ? 1.1 : 1,
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <span className="text-2xl mr-1.5">{cat.image}</span>
                            <Icon
                              size={22}
                              className={`
                                ${cat.iconColor} transition-all duration-500
                                ${isHovered ? 'scale-110' : ''}
                              `}
                            />

                            {/* Icon Background Pulse */}
                            <motion.div
                              className={`absolute inset-0 rounded-xl`}
                              style={{ backgroundColor: cat.accentColor }}
                              animate={{
                                scale: isHovered ? [1, 1.3, 1] : 1,
                                opacity: isHovered ? [0, 0.15, 0] : 0,
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: isHovered ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>

                          {/* Tag */}
                          <motion.div
                            className={`absolute -top-1 -right-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold ${cat.tag} shadow-sm`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: isHovered ? 1 : 0,
                              opacity: isHovered ? 1 : 0
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            {cat.shortLabel}
                          </motion.div>
                        </div>

                        {/* Label */}
                        <motion.h3
                          className="text-xl font-bold text-[#0F172A] mt-4 mb-2 leading-tight"
                          animate={{
                            color: isHovered ? cat.accentColor : '#0F172A',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {cat.label}
                        </motion.h3>

                        {/* Description */}
                        <p className="text-sm text-[#475569] leading-relaxed flex-grow">
                          {cat.description}
                        </p>

                        {/* Stats Row */}
                        <motion.div
                          className="grid grid-cols-2 gap-2 mt-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 10,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {cat.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="bg-[#F8FAFC] rounded-lg p-2.5 text-center transition-all duration-300 hover:shadow-md"
                              style={{
                                borderColor: isHovered ? `${cat.accentColor}30` : 'transparent',
                                borderWidth: '1px',
                              }}
                            >
                              <div className="text-sm font-bold" style={{ color: cat.accentColor }}>
                                {stat.value}
                              </div>
                              <div className="text-[10px] text-[#94A3B8] font-medium">{stat.label}</div>
                            </div>
                          ))}
                        </motion.div>

                        {/* Popular Courses */}
                        <div className="mt-4">
                          <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider mb-2.5">
                            Popular Courses
                          </p>
                          <ul className="space-y-1.5">
                            {cat.popularCourses.map((course, i) => (
                              <motion.li
                                key={course}
                                className="flex items-center gap-2.5 text-sm text-[#475569]"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{ delay: i * 0.05 }}
                              >
                                <motion.span
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: cat.accentColor }}
                                  animate={{
                                    scale: isHovered ? [1, 1.5, 1] : 1,
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: isHovered ? Infinity : 0,
                                    delay: i * 0.1,
                                  }}
                                />
                                {course}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className="mt-5 pt-4 border-t border-[#E2E8F0]">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <Link
                              href={cat.href}
                              className={`
                                w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold 
                                border rounded-xl transition-all duration-300 relative overflow-hidden
                                ${cat.cta}
                              `}
                              aria-label={`Explore ${cat.label} programs`}
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                Explore Courses
                                <motion.span
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  <ArrowRight size={15} />
                                </motion.span>
                              </span>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{ x: isHovered ? '100%' : '-100%' }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                              />
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </article>
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
            <motion.div
              className="inline-flex flex-wrap items-center justify-center gap-4 bg-white border border-[#E2E8F0] rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['👨‍🎓', '👩‍🎓', '👨‍🎓', '👩‍🎓'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      className="text-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 400 }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
                <span className="text-sm font-bold text-[#0B3C5D]">
                  15,000+ Students
                </span>
              </div>
              <span className="text-sm text-[#475569]">have found their path</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[#0D9488]"
              >
                <ExternalLink size={16} />
              </motion.div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </Container>

      {/* Decorative Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}