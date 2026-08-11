"use client";

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

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Tell Us Your Goal",
    description:
      "Share your academic background, interests, budget, and preferred location. We listen carefully to understand what matters most to you.",
    color: "#04164B",
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
    stats: "50+",
    statLabel: "Universities",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Get Admission Support",
    description:
      "From documentation to application submission, we support you throughout the admission process until your seat is confirmed.",
    color: "#B30F66",
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
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      aria-labelledby="process-heading"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/5 blur-3xl animate-ambient-slow" />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/5 blur-3xl animate-ambient-slow-reverse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#04164B]/5 blur-3xl animate-ambient-center" />

        {/* Floating Elements */}
        {floatingElements.map((item, idx) => (
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
            eyebrow="How It Works"
            title="Admission in 4 Simple Steps"
            description="A straightforward, stress-free process designed to take you from confusion to confident college admission."
            id="process-heading"
            className="mb-14 lg:mb-16"
          />
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5" aria-hidden>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#04164B]/20 via-[#0D9488]/40 to-[#F97316]/20" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <ScrollReveal key={step.number} delay={index * 0.12} direction="up">
                  <div className="h-full group">
                    <div
                      className="relative flex flex-col justify-between items-center text-center lg:items-start lg:text-left p-6 sm:p-7 rounded-2xl transition-all duration-300 h-full shadow-sm hover:shadow-xl hover:-translate-y-1.5 border border-[#E2E8F0] bg-white overflow-hidden space-y-4"
                    >
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: step.color }} />

                      {/* Step Number - Desktop */}
                      <div className="hidden lg:block absolute top-4 right-4 z-10">
                        <span className="text-4xl font-black leading-none text-[#E2E8F0]">
                          {step.number}
                        </span>
                      </div>

                      {/* Icon Section */}
                      <div className="relative z-10 flex flex-col items-center lg:items-start w-full">
                        <div className="relative">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 shadow-sm group-hover:scale-105"
                            style={{ backgroundColor: step.color }}
                          >
                            <Icon size={26} className="text-white" />
                          </div>

                          {/* Step Number - Mobile */}
                          <div className="lg:hidden absolute -top-2 -right-2">
                            <span
                              className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-white shadow-xs border border-[#E2E8F0]"
                              style={{ color: step.color }}
                            >
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 w-full flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-extrabold text-[#04164B] mb-2 leading-snug group-hover:text-[#B30F66] transition-colors">
                            {step.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Stats Card — Always Visible */}
                        <div className="pt-3 border-t border-[#E2E8F0]">
                          <div className="flex items-center justify-center lg:justify-start gap-2.5">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: `${step.color}15` }}
                            >
                              <Award size={16} style={{ color: step.color }} />
                            </div>
                            <div className="text-left">
                              <div className="text-sm font-extrabold" style={{ color: step.color }}>
                                {step.stats}
                              </div>
                              <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">
                                {step.statLabel}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <ScrollReveal delay={0.4} direction="up">
          <div className="mt-14 text-center">
            <div className="relative inline-block">
              <Button
                as="a"
                href="/contact"
                variant="primary"
                size="lg"
                className="group relative overflow-hidden px-8 py-4 text-sm font-extrabold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={18} />
                  Start Your Journey
                  <ArrowRight size={18} />
                </span>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {['✅', '⭐', '🏆', '💯'].map((emoji, i) => (
                    <span key={i} className="text-sm">
                      {emoji}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#94A3B8]">Trusted by 15,000+ students</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}