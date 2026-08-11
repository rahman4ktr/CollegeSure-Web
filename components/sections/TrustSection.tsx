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
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";
import Link from "next/link";
import { useCounsellingModal } from "@/components/providers/CounsellingModalProvider";

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
    bgColor: "bg-[#04164B]/10 text-[#04164B]",
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
    bgColor: "bg-[#B30F66]/10 text-[#B30F66]",
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
    bgColor: "bg-[#159447]/10 text-[#159447]",
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
    bgColor: "bg-[#147CC1]/10 text-[#147CC1]",
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
    bgColor: "bg-[#F36C21]/10 text-[#F36C21]",
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
  const { openModal } = useCounsellingModal();

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      aria-labelledby="trust-heading"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/5 blur-3xl animate-ambient-slow" />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/5 blur-3xl animate-ambient-slow-reverse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid Pattern */}
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

        {/* Floating Orbs */}
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
                        relative card-base p-6 flex flex-col justify-between h-full cursor-pointer 
                        bg-white border rounded-2xl 
                        transition-all duration-300 overflow-hidden
                        border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#B30F66]/30
                      `}
                      onClick={() => openModal(item.title)}
                    >
                      {/* Top Header: Icon + Badge */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div
                            className={`
                              w-12 h-12 rounded-xl flex items-center justify-center 
                              transition-transform duration-300 group-hover:scale-110
                              ${item.bgColor}
                            `}
                          >
                            <Icon size={24} />
                          </div>

                          {/* Stats Badge — Always Visible */}
                          {item.stats && (
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold text-[#04164B] bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs">
                              {item.stats}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-extrabold text-[#04164B] text-base mb-2 leading-snug group-hover:text-[#B30F66] transition-colors duration-200">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Features List — Always Visible */}
                        {item.features && (
                          <div className="space-y-1.5 pt-2 border-t border-[#E2E8F0]/70">
                            {item.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center gap-1.5 text-xs text-[#04164B] font-medium"
                              >
                                <CheckCircle size={13} className={`${item.color} flex-shrink-0`} />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Learn More Link — Always Visible */}
                      <div className="pt-4 mt-4 border-t border-[#E2E8F0]/70 flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.color} group-hover:translate-x-1 transition-transform`}>
                          Learn More
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </Card3DTilt>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-14 text-center">
            <div
              onClick={() => openModal()}
              className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-full px-6 py-3 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span className="text-xs sm:text-sm text-[#475569]">
                <span className="font-bold text-[#04164B]">5,000+</span> students have found their path with CollegeSure
              </span>
              <span className="text-[#B30F66] font-bold text-xs flex items-center gap-1">
                Talk to Us <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}