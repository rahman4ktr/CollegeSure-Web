"use client";

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
      "Programs in nursing, radiology, MBBS, and allied health sciences that open doors to a rewarding career in healthcare.",
    popularCourses: ["GNM Nursing", "B.Sc Nursing", "B.Sc Radiology", "Paramedical Diplomas"],
    href: "/courses/medical",
    accentColor: "#159447",
    accentLight: "#159447/10",
    bgGradient: "from-[#159447]/10 via-[#159447]/5 to-transparent",
    borderHover: "hover:border-[#159447]/40",
    iconBg: "bg-[#159447]/15 group-hover:bg-[#159447]",
    iconColor: "text-[#159447] group-hover:text-white",
    tag: "bg-[#159447]/10 text-[#159447]",
    cta: "text-[#159447] hover:text-white hover:bg-[#159447] border-[#159447]/30 hover:border-[#159447]",
    stats: [
      { label: "Programs", value: "15+" },
      { label: "Hospitals", value: "20+" },
    ],
    featured: true,
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
    accentColor: "#147CC1",
    accentLight: "#147CC1/10",
    bgGradient: "from-[#147CC1]/10 via-[#147CC1]/5 to-transparent",
    borderHover: "hover:border-[#147CC1]/40",
    iconBg: "bg-[#147CC1]/15 group-hover:bg-[#147CC1]",
    iconColor: "text-[#147CC1] group-hover:text-white",
    tag: "bg-[#147CC1]/10 text-[#147CC1]",
    cta: "text-[#147CC1] hover:text-white hover:bg-[#147CC1] border-[#147CC1]/30 hover:border-[#147CC1]",
    stats: [
      { label: "Specializations", value: "8+" },
      { label: "Companies", value: "50+" },
    ],
    featured: false,
  },
  {
    id: "graduation",
    icon: GraduationCap,
    label: "Graduation & Management",
    shortLabel: "Commerce & IT",
    description:
      "BCA, BBA, B.Com and other graduation programs for students looking for versatile and promising careers.",
    popularCourses: ["BCA", "BBA", "B.Com", "BA Programs"],
    href: "/courses/graduation",
    accentColor: "#F36C21",
    accentLight: "#F36C21/10",
    bgGradient: "from-[#F36C21]/10 via-[#F36C21]/5 to-transparent",
    borderHover: "hover:border-[#F36C21]/40",
    iconBg: "bg-[#F36C21]/15 group-hover:bg-[#F36C21]",
    iconColor: "text-[#F36C21] group-hover:text-white",
    tag: "bg-[#F36C21]/10 text-[#F36C21]",
    cta: "text-[#F36C21] hover:text-white hover:bg-[#F36C21] border-[#F36C21]/30 hover:border-[#F36C21]",
    stats: [
      { label: "Programs", value: "12+" },
      { label: "Universities", value: "25+" },
    ],
    featured: false,
  },
];

const floatingIcons = [
  { icon: TrendingUp, position: "top-20 left-10", delay: 0 },
  { icon: Award, position: "bottom-20 right-10", delay: 1.5 },
  { icon: Users, position: "top-1/3 right-20", delay: 3 },
  { icon: Clock, position: "bottom-1/3 left-20", delay: 4.5 },
];

export default function CourseCategories() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      aria-labelledby="categories-heading"
    >
      {/* Ambient Background — CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/5 blur-3xl animate-ambient-slow" />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/5 blur-3xl animate-ambient-slow-reverse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0B3C5D]/5 blur-3xl animate-ambient-center" />

        {/* Floating Icons — CSS */}
        {floatingIcons.map((item, idx) => (
          <div
            key={idx}
            className={`absolute ${item.position} hidden lg:block animate-float-y-rotate`}
            style={{
              animationDelay: `${item.delay}s`,
              animationDuration: `${6 + idx * 1.5}s`,
            }}
          >
            <item.icon size={28} className="text-[#0D9488]/20" />
          </div>
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

            return (
              <ScrollReveal key={cat.id} delay={idx * 0.1} direction="up">
                <div className="h-full group">
                  <Card3DTilt glowColor={`${cat.accentColor}25`} className="h-full">
                    <article
                      className="relative flex flex-col h-full overflow-hidden bg-white rounded-2xl border transition-all duration-500 border-[#E2E8F0] shadow-sm group-hover:shadow-2xl group-hover:border-transparent"
                    >
                      {/* Animated Background Gradient — CSS */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Glow Effect — CSS */}
                      <div
                        className="absolute -inset-1 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-10"
                        style={{ background: cat.accentColor }}
                      />

                      {/* Top Gradient Bar with Animation — CSS */}
                      <div className="h-1 w-full relative overflow-hidden flex-shrink-0">
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: cat.accentColor }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
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
                        {/* Icon with Enhanced Animation — CSS */}
                        <div className="relative flex-shrink-0">
                          <div
                            className={`
                              w-14 h-14 rounded-xl flex items-center justify-center 
                              transition-all duration-500 relative
                              ${cat.iconBg}
                              group-hover:scale-110
                            `}
                          >
                            <Icon
                              size={22}
                              className={`
                                ${cat.iconColor} transition-all duration-500
                                group-hover:scale-110
                              `}
                            />
                          </div>

                          {/* Tag — CSS hover */}
                          <div
                            className={`absolute -top-1 -right-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold ${cat.tag} shadow-sm scale-0 group-hover:scale-100 transition-transform duration-300`}
                          >
                            {cat.shortLabel}
                          </div>
                        </div>

                        {/* Label */}
                        <h3
                          className="text-xl font-bold text-[#0F172A] mt-4 mb-2 leading-tight transition-colors duration-300 group-hover:text-[var(--accent)]"
                          style={{ '--accent': cat.accentColor } as React.CSSProperties}
                        >
                          {cat.label}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#475569] leading-relaxed flex-grow">
                          {cat.description}
                        </p>

                        {/* Stats Row — CSS hover reveal */}
                        <div className="grid grid-cols-2 gap-2 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          {cat.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="bg-[#F8FAFC] rounded-lg p-2.5 text-center transition-all duration-300 hover:shadow-md"
                              style={{
                                borderWidth: '1px',
                                borderColor: 'transparent',
                              }}
                            >
                              <div className="text-sm font-bold" style={{ color: cat.accentColor }}>
                                {stat.value}
                              </div>
                              <div className="text-[10px] text-[#94A3B8] font-medium">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Popular Courses */}
                        <div className="mt-4">
                          <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider mb-2.5">
                            Popular Courses
                          </p>
                          <ul className="space-y-1.5">
                            {cat.popularCourses.map((course) => (
                              <li
                                key={course}
                                className="flex items-center gap-2.5 text-sm text-[#475569]"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: cat.accentColor }}
                                />
                                {course}
                              </li>
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
                                <span className="animate-bounce-x">
                                  <ArrowRight size={15} />
                                </span>
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out" />
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </article>
                  </Card3DTilt>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white border border-[#E2E8F0] rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
              <span className="animate-bounce-x text-[#0D9488]">
                <ExternalLink size={16} />
              </span>
            </div>
          </div>
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