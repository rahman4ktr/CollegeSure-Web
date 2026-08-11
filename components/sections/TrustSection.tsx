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
import { useCounsellingModal } from "@/components/providers/CounsellingModalProvider";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
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
    stats: "5,000+ Families",
    features: ["Student focused", "Parent included", "Family centered"],
  },
  {
    icon: MessageSquare,
    title: "End-to-End Admission Support",
    description:
      "We don't just guide — we support you through the documentation, applications, and confirmation process.",
    color: "text-[#F36C21]",
    bgColor: "bg-[#F36C21]/10 text-[#F36C21]",
    stats: "100% Support",
    features: ["Documentation", "Application help", "Follow-up guidance"],
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

        {/* Comfortable 3-column / 2-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <ScrollReveal
                key={item.title}
                delay={idx * 0.08}
                direction="up"
              >
                <div
                  onClick={() => openModal(item.title)}
                  className="group relative p-6 sm:p-7 flex flex-col justify-between h-full cursor-pointer bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#B30F66]/30 transition-all duration-300 overflow-hidden space-y-6"
                >
                  {/* Top Row: Icon + Badge */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`w-13 h-13 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${item.bgColor}`}
                      >
                        <Icon size={24} />
                      </div>

                      {item.stats && (
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold text-[#04164B] bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs whitespace-nowrap">
                          {item.stats}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-[#04164B] text-lg leading-snug group-hover:text-[#B30F66] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features List */}
                    {item.features && (
                      <div className="space-y-2 pt-3 border-t border-[#E2E8F0]/80">
                        {item.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs font-semibold text-[#04164B]"
                          >
                            <CheckCircle size={14} className={`${item.color} flex-shrink-0`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-[#E2E8F0]/80 flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-extrabold ${item.color} group-hover:translate-x-1 transition-transform`}>
                      <span>Learn More</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-14 text-center">
            <div
              onClick={() => openModal()}
              className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-full px-6 py-3.5 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span className="text-xs sm:text-sm text-[#475569]">
                <span className="font-extrabold text-[#04164B]">5,000+</span> students have found their path with CollegeSure
              </span>
              <span className="text-[#B30F66] font-extrabold text-xs flex items-center gap-1">
                <span>Talk to Us</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}