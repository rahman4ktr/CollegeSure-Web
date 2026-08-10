import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/cards/TestimonialCard";
import CTASection from "@/components/sections/CTASection";
import { testimonials } from "@/lib/data/testimonials";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  AlertTriangle,
  Sparkles,
  Star,
  Users,
  Quote,
  Heart,
  TrendingUp,
  Award,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Crown
} from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = generatePageMetadata(
  "Success Stories — Student Experiences with CollegeSure",
  "Read what students and parents say about their experience with CollegeSure's personalized admissions guidance.",
  "/success-stories"
);

// Stats Data
const stats = [
  { label: "Happy Students", value: "15,000+", icon: Users, color: "#0D9488" },
  { label: "Success Rate", value: "92%", icon: TrendingUp, color: "#3B82F6" },
  { label: "Average Rating", value: "4.9/5", icon: Star, color: "#F97316" },
  { label: "Years of Trust", value: "5+", icon: Award, color: "#EC4899" },
];

// Featured Testimonials (first 3)
const featuredTestimonials = testimonials.slice(0, 3);

export default function SuccessStoriesPage() {
  return (
    <div className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B3C5D] via-[#082d45] to-[#1a5276] pt-8 pb-16 sm:pt-12 sm:pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#3B82F6]/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

          {/* Floating Quote Icons */}
          <div className="absolute top-20 left-10 text-white/5">
            <Quote size={80} />
          </div>
          <div className="absolute bottom-20 right-10 text-white/5 rotate-180">
            <Quote size={80} />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#0D9488] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10">
              <Sparkles size={14} />
              Student Stories
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Experiences That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#F97316] to-[#EC4899]">
                Matter
              </span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Here&apos;s what students and parents who worked with CollegeSure have
              to say about their admissions journey.
            </p>

            {/* Quick Action Button */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link
                href="#testimonials"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B3C5D] font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={18} />
                Read Stories
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Heart size={18} />
                Share Your Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>

        {/* Decorative Shape */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F8FAFC]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.08} direction="up">
                <div className="text-center p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-md hover:border-[#E2E8F0] transition-all duration-300 border border-transparent">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                    <stat.icon size={20} style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-bold text-[#0B3C5D]">{stat.value}</div>
                  <div className="text-xs text-[#94A3B8] font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Featured Testimonials Section */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-12">
        <Container>
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <Badge variant="teal" className="mb-3">Featured Stories</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] mb-3">
                What Our <span className="text-[#0D9488]">Students</span> Say
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto">
                Real experiences from students and parents who found their perfect college with our guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTestimonials.map((testimonial, idx) => (
                <ScrollReveal key={testimonial.id} delay={idx * 0.1} direction="up">
                  <TestimonialCard testimonial={testimonial} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </div>

      {/* Main Testimonials Grid */}
      <div id="testimonials" className="bg-[#F8FAFC] section-py">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-[#EC4899]/10 flex items-center justify-center">
                  <Star size={20} className="text-[#EC4899]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B3C5D]">
                  All Success Stories
                </h2>
              </div>
              <p className="text-sm text-[#94A3B8] ml-13">
                Read all testimonials from our students and parents
              </p>
            </div>
            <Badge variant="pink" size="sm" className="hover:scale-105 transition-transform">
              {testimonials.length} Stories
            </Badge>
          </div>

          {/* Disclaimer */}
          <ScrollReveal direction="up" className="mb-12">
            <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-200/60 rounded-2xl p-5 sm:p-6 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle size={18} className="text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-amber-800 leading-relaxed">
                  <span className="font-bold">Note:</span> The testimonials below are
                  representative of student experiences. Individual outcomes may vary based on
                  eligibility, college availability, and other factors. We do not fabricate
                  testimonials or guaranteed outcomes.
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <CheckCircle2 size={14} className="text-amber-600" />
                  <span className="text-xs text-amber-700 font-medium">100% Real Student Stories</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={testimonial.id} delay={idx * 0.06} direction="up">
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>

          {/* Empty State */}
          {testimonials.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#F8FAFC] flex items-center justify-center mb-4 border border-[#E2E8F0]">
                <Users size={32} className="text-[#94A3B8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">No Stories Yet</h3>
              <p className="text-[#475569]">Be the first to share your success story!</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#0D9488] text-white font-semibold rounded-xl hover:bg-[#0a7a6f] transition-colors"
              >
                Share Your Story
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </Container>
      </div>

      {/* Enhanced CTA Section */}
      <CTASection
        title="Want to Share Your Experience?"
        description="If CollegeSure helped you with your college admission, we'd love to hear your story."
        primaryButtonText="Share Your Story"
        primaryButtonLink="/contact"
        secondaryButtonText="Read More Stories"
        secondaryButtonLink="#testimonials"
      />
    </div>
  );
}