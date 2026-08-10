"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Users,
  Award,
  GraduationCap,
  MapPin,
  Sparkles,
  TrendingUp,
  Star,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import UniversityCard from "@/components/cards/UniversityCard";
import { universities } from "@/lib/data/universities";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Enhanced university data with additional fields
const enhancedUniversities = [
  {
    id: 1,
    name: "Indian Institute of Technology (IIT)",
    location: "Multiple Locations",
    type: "Government",
    rating: 4.9,
    students: 12000,
    programs: 50,
    placement: "95%",
    image: "/images/universities/iit.jpg",
    slug: "iit",
    accentColor: "#0B3C5D",
    featured: true,
    tags: ["Premier", "Research", "Global"],
    established: "1950",
  },
  {
    id: 2,
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "Multiple Locations",
    type: "Government",
    rating: 4.8,
    students: 8000,
    programs: 30,
    placement: "98%",
    image: "/images/universities/aiims.jpg",
    slug: "aiims",
    accentColor: "#0D9488",
    featured: true,
    tags: ["Medical", "Research", "Premier"],
    established: "1956",
  },
  {
    id: 3,
    name: "National Institute of Technology (NIT)",
    location: "Multiple Locations",
    type: "Government",
    rating: 4.7,
    students: 15000,
    programs: 40,
    placement: "90%",
    image: "/images/universities/nit.jpg",
    slug: "nit",
    accentColor: "#F97316",
    featured: false,
    tags: ["Technical", "Research", "Innovation"],
    established: "1960",
  },
  {
    id: 4,
    name: "Christ University",
    location: "Bangalore",
    type: "Private",
    rating: 4.6,
    students: 20000,
    programs: 60,
    placement: "88%",
    image: "/images/universities/christ.jpg",
    slug: "christ-university",
    accentColor: "#6366F1",
    featured: false,
    tags: ["Liberal Arts", "Research", "Global"],
    established: "1969",
  },
  {
    id: 5,
    name: "Manipal Academy of Higher Education",
    location: "Manipal",
    type: "Private",
    rating: 4.5,
    students: 28000,
    programs: 70,
    placement: "85%",
    image: "/images/universities/manipal.jpg",
    slug: "manipal",
    accentColor: "#EC4899",
    featured: false,
    tags: ["Medical", "Engineering", "Global"],
    established: "1953",
  },
  {
    id: 6,
    name: "Delhi University",
    location: "Delhi",
    type: "Government",
    rating: 4.4,
    students: 50000,
    programs: 80,
    placement: "82%",
    image: "/images/universities/du.jpg",
    slug: "delhi-university",
    accentColor: "#8B5CF6",
    featured: false,
    tags: ["Liberal Arts", "Science", "Commerce"],
    established: "1922",
  },
];

const floatingStats = [
  { label: "Partner Colleges", value: "50+", icon: Building2 },
  { label: "Students Placed", value: "15,000+", icon: Users },
  { label: "Success Rate", value: "92%", icon: TrendingUp },
];

export default function UniversitiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const featured = enhancedUniversities.slice(0, 6);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      aria-labelledby="universities-heading"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0B3C5D]/5 blur-3xl"
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
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0D9488]/5 blur-3xl"
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

        {/* Floating Stats Background */}
        {floatingStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="absolute hidden xl:block"
            style={{
              top: `${15 + idx * 35}%`,
              right: `${5 + idx * 10}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + idx * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.5,
            }}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0D9488]/10 flex items-center justify-center">
                  <stat.icon size={16} className="text-[#0D9488]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B3C5D]">{stat.value}</div>
                  <div className="text-[10px] text-[#94A3B8]">{stat.label}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Container>
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div className="relative">
              <SectionHeading
                eyebrow="Partner Colleges"
                title="Colleges We Work With"
                description="We help students gain admission to a range of government and private colleges across various cities."
                align="left"
                id="universities-heading"
              />

              {/* Decorative element */}
              <motion.div
                className="absolute -top-4 -left-8 text-3xl opacity-20"
                animate={{
                  rotate: [0, 10, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🏛️
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                href="/universities"
                className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors group bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-lg"
                aria-label="View all partner colleges"
              >
                <span>View All Colleges</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((university, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <ScrollReveal key={university.id} delay={idx * 0.08} direction="up">
                <motion.div
                  onHoverStart={() => setHoveredIndex(idx)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="h-full"
                >
                  <div className="relative group h-full">
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute -inset-0.5 blur-2xl rounded-2xl transition-opacity duration-500"
                      style={{
                        background: university.accentColor,
                        opacity: isHovered ? 0.15 : 0,
                      }}
                    />

                    <div className={`
                      relative bg-white rounded-2xl border transition-all duration-500 h-full flex flex-col overflow-hidden
                      ${isHovered ? 'shadow-2xl border-transparent' : 'border-[#E2E8F0] shadow-sm hover:shadow-xl'}
                    `}>
                      {/* Top Gradient Bar */}
                      <div className="h-1 w-full relative overflow-hidden flex-shrink-0">
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: university.accentColor }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{ x: isHovered ? '100%' : '-100%' }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0]"
                              animate={{
                                scale: isHovered ? 1.1 : 1,
                                rotate: isHovered ? -5 : 0,
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                              🏛️
                            </motion.div>
                            <div>
                              <span
                                className="text-xs font-semibold"
                                style={{ color: university.accentColor }}
                              >
                                {university.type}
                              </span>
                              <div className="flex items-center gap-1 text-[10px] text-[#94A3B8]">
                                <MapPin size={10} />
                                {university.location}
                              </div>
                            </div>
                          </div>

                          <motion.div
                            className="flex items-center gap-1 bg-[#F8FAFC] px-2 py-1 rounded-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: isHovered ? 1 : 0.8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <Star size={12} className="fill-[#F97316] text-[#F97316]" />
                            <span className="text-xs font-bold text-[#0F172A]">{university.rating}</span>
                          </motion.div>
                        </div>

                        {/* Name */}
                        <motion.h3
                          className="text-lg font-bold text-[#0F172A] mb-2 leading-tight"
                          animate={{
                            color: isHovered ? university.accentColor : '#0F172A',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {university.name}
                        </motion.h3>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {university.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats Grid */}
                        <motion.div
                          className="grid grid-cols-3 gap-2 mt-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: isHovered ? 1 : 0.7,
                            y: 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-[#F8FAFC] rounded-lg p-2 text-center">
                            <div className="text-xs font-bold" style={{ color: university.accentColor }}>
                              {university.students}+
                            </div>
                            <div className="text-[8px] text-[#94A3B8]">Students</div>
                          </div>
                          <div className="bg-[#F8FAFC] rounded-lg p-2 text-center">
                            <div className="text-xs font-bold" style={{ color: university.accentColor }}>
                              {university.programs}
                            </div>
                            <div className="text-[8px] text-[#94A3B8]">Programs</div>
                          </div>
                          <div className="bg-[#F8FAFC] rounded-lg p-2 text-center">
                            <div className="text-xs font-bold" style={{ color: university.accentColor }}>
                              {university.placement}
                            </div>
                            <div className="text-[8px] text-[#94A3B8]">Placement</div>
                          </div>
                        </motion.div>

                        {/* Established Year */}
                        <div className="mt-3 text-[10px] text-[#94A3B8]">
                          Est. {university.established}
                        </div>

                        {/* CTA */}
                        <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <Link
                              href={`/universities/${university.slug}`}
                              className={`
                                w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold 
                                rounded-xl transition-all duration-300 relative overflow-hidden
                                ${isHovered
                                  ? 'text-white shadow-lg'
                                  : 'text-[#0B3C5D] hover:text-[#0D9488]'
                                }
                              `}
                              style={{
                                backgroundColor: isHovered ? university.accentColor : 'transparent',
                                border: `1px solid ${isHovered ? 'transparent' : '#E2E8F0'}`,
                              }}
                              aria-label={`View ${university.name} details`}
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                View College
                                <ChevronRight size={14} />
                              </span>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{ x: isHovered ? '100%' : '-100%' }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                              />
                            </Link>
                          </motion.div>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {university.featured && (
                        <motion.div
                          className="absolute top-4 right-4 z-10"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[#F97316] to-[#ea6c0c] rounded-full shadow-lg">
                            <Sparkles size={10} className="text-white" />
                            <span className="text-[8px] font-bold text-white tracking-wider">Premier</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <ScrollReveal direction="up" delay={0.6}>
          <motion.div
            className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#E2E8F0] p-6 shadow-sm"
            whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B3C5D]/10 flex items-center justify-center">
                  <Building2 size={18} className="text-[#0B3C5D]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B3C5D]">50+ Partner Colleges</div>
                  <div className="text-xs text-[#94A3B8]">Across India</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 border-t border-b sm:border-t-0 sm:border-b-0 border-[#E2E8F0] py-3 sm:py-0">
                <div className="w-10 h-10 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
                  <Award size={18} className="text-[#0D9488]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B3C5D]">92% Success Rate</div>
                  <div className="text-xs text-[#94A3B8]">Admission success</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-[#F97316]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B3C5D]">15,000+ Students</div>
                  <div className="text-xs text-[#94A3B8]">Guided to success</div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </Container>

      {/* Decorative Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-[#F8FAFC]"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 20%, 0 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}