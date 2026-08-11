import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import UniversityCard from "@/components/cards/UniversityCard";
import CTASection from "@/components/sections/CTASection";
import { universities } from "@/lib/data/universities";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Building2,
  Info,
  Sparkles,
  ArrowRight,
  Award,
  Users,
  MapPin,
  Landmark,
  Building,
  ChevronRight,
  CheckCircle2,
  GraduationCap,
  School,
  Library
} from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = generatePageMetadata(
  "Colleges & Universities — CollegeSure Partner Institutions",
  "Browse colleges and universities that CollegeSure provides admissions guidance for. Government and private colleges across various cities.",
  "/universities"
);

// Stats Data
const stats = [
  { label: "Partner Colleges", value: "50+", icon: Building2, color: "#0B3C5D" },
  { label: "Government Colleges", value: "25+", icon: Landmark, color: "#0D9488" },
  { label: "Private Colleges", value: "25+", icon: Building, color: "#F97316" },
  { label: "Cities Covered", value: "10+", icon: MapPin, color: "#3B82F6" },
];

export default function UniversitiesPage() {
  const govt = universities.filter((u) => u.type === "government");
  const priv = universities.filter((u) => u.type === "private");

  return (
    <div className="relative overflow-hidden bg-[#FDFDFD]">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084] pt-8 pb-16 sm:pt-12 sm:pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F7D51A]/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#159447] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10 text-white">
              <Sparkles size={14} className="text-[#F7D51A]" />
              Our College Network
              <span className="w-1.5 h-1.5 rounded-full bg-[#159447] animate-pulse" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              Partner Colleges &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                Institutions
              </span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We provide admissions guidance for a range of government and private colleges
              across cities. Our counsellors have hands-on knowledge of each institution.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link
                href="#government"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#B30F66] text-white font-bold rounded-xl shadow-xl shadow-[#B30F66]/30 hover:bg-[#591084] transition-all duration-300 hover:scale-105"
              >
                <Landmark size={18} />
                Government Colleges
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#private"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Building size={18} />
                Private Colleges
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                <div
                  className="text-center p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-md hover:border-[#E2E8F0] transition-all duration-300 border border-transparent"
                >
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

      {/* Features Section */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-12">
        <Container>
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <Badge variant="teal" className="mb-3">Why Choose Our Partners</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] mb-3">
                Trusted <span className="text-[#0D9488]">College Network</span>
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto">
                We partner with verified institutions to provide you with the best admissions guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: CheckCircle2,
                  title: "Verified Institutions",
                  description: "All partner colleges are verified and recognized by relevant authorities."
                },
                {
                  icon: Award,
                  title: "Expert Guidance",
                  description: "Our counsellors have in-depth knowledge of each college's admission process."
                },
                {
                  icon: Users,
                  title: "Student-First Approach",
                  description: "We recommend colleges based on your goals, eligibility, and preferences."
                }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:shadow-lg hover:border-[#0D9488]/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-[#0D9488]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </div>

      {/* Main Content */}
      <div className="bg-[#F8FAFC] section-py">
        <Container>
          {/* Important disclaimer */}
          <ScrollReveal direction="up" className="mb-12">
            <div className="bg-[#0D9488]/5 border border-[#0D9488]/20 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0D9488]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Info size={20} className="text-[#0D9488]" />
              </div>
              <div>
                <p className="text-sm text-[#475569] leading-relaxed">
                  <span className="font-bold text-[#0B3C5D]">Please Note:</span>{" "}
                  The colleges listed are representative examples. Actual availability varies by year,
                  city, and course. Contact us for the most accurate and updated information for your
                  specific requirements.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors mt-2 group"
                >
                  Get Updated List
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Government Colleges Section */}
          {govt.length > 0 && (
            <ScrollReveal direction="up" className="mb-16" id="government">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/10 flex items-center justify-center">
                    <Landmark size={24} className="text-[#0B3C5D]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0B3C5D]">Government Colleges</h2>
                    <p className="text-sm text-[#94A3B8]">Public Institutions &amp; State Universities</p>
                  </div>
                </div>
                <Badge variant="navy" size="sm" className="hover:scale-105 transition-transform">
                  {govt.length} Colleges
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {govt.map((u, idx) => (
                  <ScrollReveal key={u.id} delay={idx * 0.06} direction="up">
                    <UniversityCard university={u} />
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Private Colleges Section */}
          {priv.length > 0 && (
            <ScrollReveal direction="up" id="private">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center">
                    <Building size={24} className="text-[#0D9488]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0B3C5D]">Private Colleges</h2>
                    <p className="text-sm text-[#94A3B8]">Private Universities &amp; Deemed Institutions</p>
                  </div>
                </div>
                <Badge variant="teal" size="sm" className="hover:scale-105 transition-transform">
                  {priv.length} Colleges
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {priv.map((u, idx) => (
                  <ScrollReveal key={u.id} delay={idx * 0.06} direction="up">
                    <UniversityCard university={u} />
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Empty State */}
          {govt.length === 0 && priv.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#F8FAFC] flex items-center justify-center mb-4 border border-[#E2E8F0]">
                <School size={32} className="text-[#94A3B8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">No Colleges Found</h3>
              <p className="text-[#475569]">Check back later for updated listings.</p>
            </div>
          )}
        </Container>
      </div>

      {/* Enhanced CTA Section */}
      <CTASection
        title="Find Your Perfect College Match"
        description="Get personalized guidance to find the right college based on your goals, eligibility, and preferences."
        primaryButtonText="Get Free Counselling"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore All Courses"
        secondaryButtonLink="/courses"
      />
    </div>
  );
}