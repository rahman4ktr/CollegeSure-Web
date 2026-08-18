"use client";

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
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      aria-labelledby="why-heading"
    >
      {/* Ambient Background — CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#B30F66]/5 blur-3xl animate-ambient-slow" />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#04164B]/5 blur-3xl animate-ambient-slow-reverse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#F36C21]/5 blur-3xl animate-ambient-center" />
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
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#E2E8F0] p-5 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#04164B]/10 flex items-center justify-center">
                    <stat.icon size={18} className="text-[#04164B]" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#04164B]">{stat.value}</div>
                <div className="text-xs text-[#94A3B8] font-medium">{stat.label}</div>
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
              <div className="relative overflow-hidden bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084] text-white rounded-2xl px-6 py-5 text-center shadow-xl hover:scale-[1.02] transition-transform duration-300">
                {/* Animated shine effect — CSS */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-slide" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Sparkles size={16} className="text-[#F7D51A]" />
                    <p className="font-extrabold text-base tracking-wide">CollegeSure</p>
                  </div>
                  <p className="text-xs text-white/80 font-medium">Personalized Guidance</p>
                </div>
              </div>

              {/* Traditional Header */}
              <div className="bg-[#F8FAFC] text-[#475569] rounded-2xl px-6 py-5 text-center border border-[#E2E8F0] relative overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <div className="relative z-10">
                  <p className="font-bold text-base tracking-wide text-[#04164B]">Traditional Search</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">On Your Own</p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Comparison rows — using group/hover CSS instead of parent hover state */}
          <div className="space-y-3">
            {comparisons.map((row, i) => (
              <ScrollReveal key={i} delay={0.12 + i * 0.05} direction="up">
                <div className="grid grid-cols-2 gap-4 group">
                  {/* CollegeSure side */}
                  <div
                    className="relative rounded-2xl px-5 py-4 flex items-start gap-3 transition-all duration-500 shadow-sm bg-[#04164B]/5 border border-[#04164B]/15 hover:bg-[#B30F66]/10 hover:border-[#B30F66]/30 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <div className="relative z-10 flex items-start gap-3 w-full">
                      <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">{row.icon}</span>
                        <CheckCircle2
                          size={18}
                          className="text-[#159447] flex-shrink-0"
                        />
                      </div>
                      <p className="text-sm text-[#04164B] leading-snug font-semibold">
                        {row.collegesure}
                      </p>
                    </div>

                    {/* Highlight badge — CSS hover */}
                    {row.highlight && (
                      <div className="absolute -top-2 -right-2 z-20 scale-0 group-hover:scale-100 transition-transform duration-300">
                        <div className="flex items-center gap-1 px-2.5 py-0.5 bg-gradient-to-r from-[#B30F66] to-[#F36C21] rounded-full shadow-lg">
                          <Zap size={10} className="text-white" />
                          <span className="text-[9px] font-extrabold text-white">Best</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Traditional side */}
                  <div className="bg-[#F8FAFC] border rounded-2xl px-5 py-4 flex items-start gap-3 transition-all duration-500 border-[#E2E8F0] group-hover:opacity-80 group-hover:scale-[0.98]">
                    <XCircle
                      size={18}
                      className="text-[#94A3B8] flex-shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-[#475569] leading-snug">{row.traditional}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="mt-12 text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-1 blur-2xl rounded-2xl bg-gradient-to-r from-[#04164B]/20 to-[#B30F66]/20 animate-ambient-center" />
                <div className="relative flex flex-wrap items-center justify-center gap-4 bg-white/90 backdrop-blur-sm border border-[#E2E8F0] rounded-2xl px-6 py-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <Shield size={20} className="text-[#159447]" />
                  <span className="text-sm text-[#475569]">
                    <span className="font-extrabold text-[#04164B]">100% Transparent</span> — No hidden fees, no false promises
                  </span>
                  <span className="animate-bounce-x text-[#B30F66]">
                    <Sparkles size={16} />
                  </span>
                </div>
              </div>
            </div>
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