"use client";

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
import { motion } from "framer-motion";
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
    color: "text-[#04164B]",
    bgColor: "bg-[#04164B]/10 group-hover:bg-[#04164B]",
    gradient: "from-[#04164B]/5 to-[#04164B]/10",
    stats: "100% Honest",
    features: ["No hidden fees", "Unbiased advice", "Complete transparency"],
  },
  {
    icon: HeartHandshake,
    title: "Personalized Counselling",
    description:
      "Every student is different. We listen to your goals, budget, and preferences before recommending anything.",
    color: "text-[#B30F66]",
    bgColor: "bg-[#B30F66]/10 group-hover:bg-[#B30F66]",
    gradient: "from-[#B30F66]/5 to-[#B30F66]/10",
    stats: "1-on-1 Sessions",
    features: ["Tailored advice", "Goal-oriented", "Budget conscious"],
  },
  {
    icon: BookOpen,
    title: "Multiple Course Options",
    description:
      "From Medical and Nursing to Engineering and BCA — we cover a wide range of programs to match your interests.",
    color: "text-[#159447]",
    bgColor: "bg-[#159447]/10 group-hover:bg-[#159447]",
    gradient: "from-[#159447]/5 to-[#159447]/10",
    stats: "50+ Courses",
    features: ["Medical", "Engineering", "Graduation"],
  },
  {
    icon: Users,
    title: "Student & Parent Friendly",
    description:
      "We work with both students and parents, ensuring every stakeholder is informed and comfortable with the decision.",
    color: "text-[#147CC1]",
    bgColor: "bg-[#147CC1]/10 group-hover:bg-[#147CC1]",
    gradient: "from-[#147CC1]/5 to-[#147CC1]/10",
    stats: "5,000+ Families",
    features: ["Student focused", "Parent included", "Family centered"],
  },
  {
    icon: MessageSquare,
    title: "Admission Support",
    description:
      "We don't just guide — we support you through the documentation, applications, and entire admission process.",
    color: "text-[#F36C21]",
    bgColor: "bg-[#F36C21]/10 group-hover:bg-[#F36C21]",
    gradient: "from-[#F36C21]/5 to-[#F36C21]/10",
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
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      aria-labelledby="trust-heading"
    >
      {/* Ambient Background — CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/5 blur-3xl animate-ambient-slow" />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/5 blur-3xl animate-ambient-slow-reverse"
          style={{ animationDelay: "2s" }}
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

        {/* Floating Decorations — CSS */}
        {floatingDecorations.map((dec, idx) => (
          <div
            key={idx}
            className={`absolute ${dec.position} hidden lg:block animate-float-y-rotate`}
            style={{ animationDelay: `${dec.delay}s`, animationDuration: `${4 + idx}s` }}
          >
            <dec.icon size={24} className="text-[#0D9488]/30" />
          </div>
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

            return (
              <ScrollReveal
                key={item.title}
                delay={idx * 0.08}
                direction="up"
              >
                <div className="h-full group">
                  <Card3DTilt glowColor={`${item.color.replace('text-', '')}/20`} className="h-full">
                    <div
                      className={`
                        relative card-base p-6 flex flex-col h-full cursor-default 
                        bg-white/90 backdrop-blur-sm border rounded-2xl 
                        transition-all duration-500 overflow-hidden
                        border-[#E2E8F0] shadow-sm hover:shadow-2xl hover:border-transparent
                      `}
                    >
                      {/* Animated Background Gradient — CSS hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Glow Effect — CSS hover */}
                      <div className={`absolute -inset-1 ${item.color.replace('text-', '')}/10 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

                      {/* Icon with Enhanced Animation */}
                      <div className="relative">
                        <div
                          className={`
                            w-12 h-12 rounded-xl flex items-center justify-center 
                            transition-all duration-500 relative z-10
                            ${item.bgColor}
                            group-hover:scale-110
                          `}
                        >
                          <Icon
                            size={24}
                            className={`
                              ${item.color} group-hover:text-white 
                              transition-all duration-500
                              group-hover:scale-110
                            `}
                          />
                        </div>

                        {/* Stats Badge */}
                        {item.stats && (
                          <div
                            className={`
                              absolute -top-2 -right-2 px-2 py-0.5 rounded-full 
                              text-[10px] font-bold text-white z-20
                              bg-gradient-to-r ${item.color.replace('text-', '')} 
                              shadow-lg
                              scale-0 group-hover:scale-100
                              transition-transform duration-300
                            `}
                            style={{ transformOrigin: 'center' }}
                          >
                            {item.stats}
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-[#0F172A] text-base mt-4 mb-2 leading-snug relative z-10 transition-colors duration-300 group-hover:text-[var(--accent)]"
                        style={{ '--accent': item.color.replace('text-[', '').replace(']', '') } as React.CSSProperties}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#475569] leading-relaxed relative z-10 flex-grow opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>

                      {/* Features List — CSS hover reveal */}
                      {item.features && (
                        <div className="mt-4 space-y-1.5 relative z-10 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                          {item.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-xs text-[#475569]"
                            >
                              <CheckCircle size={12} className={`${item.color} flex-shrink-0`} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Learn More Link — CSS hover reveal */}
                      <div className="mt-4 relative z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <a
                          href="#"
                          className={`inline-flex items-center gap-1 text-xs font-semibold ${item.color} hover:translate-x-1 transition-transform`}
                        >
                          Learn More
                          <ArrowRight size={12} />
                        </a>
                      </div>

                      {/* Bottom Border Animation — CSS */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient} w-0 group-hover:w-full transition-all duration-500`}
                      />
                    </div>
                  </Card3DTilt>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-full px-6 py-3 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <span className="text-sm text-[#475569]">
                <span className="font-semibold text-[#0B3C5D]">5,000+</span> students have found their path
              </span>
              <span className="animate-bounce-x text-[#0D9488]">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
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