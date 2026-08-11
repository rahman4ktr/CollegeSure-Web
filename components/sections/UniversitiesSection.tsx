"use client";

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

const floatingStats = [
  { label: "Partner Colleges", value: "50+", icon: Building2 },
  { label: "Students Placed", value: "15,000+", icon: Users },
  { label: "Success Rate", value: "92%", icon: TrendingUp },
];

export default function UniversitiesSection() {
  const featured = universities.slice(0, 6);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      aria-labelledby="universities-heading"
    >
      {/* Ambient Background — CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0B3C5D]/5 blur-3xl animate-ambient-slow" />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0D9488]/5 blur-3xl animate-ambient-slow-reverse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#F97316]/5 blur-3xl animate-ambient-center" />

        {/* Floating Stats Background — CSS */}
        {floatingStats.map((stat, idx) => (
          <div
            key={stat.label}
            className="absolute hidden xl:block animate-fade-float"
            style={{
              top: `${15 + idx * 35}%`,
              right: `${5 + idx * 10}%`,
              animationDelay: `${idx * 0.5}s`,
              animationDuration: `${4 + idx * 1.5}s`,
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
          </div>
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

              {/* Decorative element — CSS */}
              <div
                className="absolute -top-4 -left-8 text-3xl opacity-20 animate-float-y-rotate"
                style={{ animationDuration: "6s" }}
              >
                🏛️
              </div>
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
                <span className="animate-bounce-x">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((university, idx) => (
            <ScrollReveal key={university.id} delay={idx * 0.08} direction="up">
              <UniversityCard university={university} />
            </ScrollReveal>
          ))}
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