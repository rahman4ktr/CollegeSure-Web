import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import UniversityCard from "@/components/cards/UniversityCard";
import CTASection from "@/components/sections/CTASection";
import { getUniversities } from "@/lib/resolvers";
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
  School,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { Box, Paper, Typography } from "@mui/material";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata(
  "Colleges & Universities — CollegeSure Partner Institutions",
  "Browse colleges and universities that CollegeSure provides admissions guidance for. Government and private colleges across various cities.",
  "/universities"
);

const stats = [
  { label: "Partner Institutions", value: "50+", icon: Building2, color: "#159447" },
  { label: "Cities Covered", value: "20+", icon: MapPin, color: "#147CC1" },
  { label: "State Approvals", value: "100%", icon: Award, color: "#F36C21" },
  { label: "Student Placements", value: "15,000+", icon: Users, color: "#B30F66" },
];

export default async function UniversitiesPage() {
  const { data: universities } = await getUniversities();

  const universitiesGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema(
      "/universities",
      "Colleges & Universities — CollegeSure Partner Institutions",
      "Browse colleges and universities that CollegeSure provides admissions guidance for. Top private and deemed colleges across major education hubs.",
      "WebPage"
    ),
    getBreadcrumbSchema("/universities", [
      { name: "Home", url: "/" },
      { name: "Colleges & Universities", url: "/universities" },
    ]),
  ];

  const govt = universities.filter((u) => u.type === "government");
  const priv = universities.filter((u) => u.type === "private");

  return (
    <Box className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={universitiesGraphNodes} />

      {/* Enhanced Hero Section */}
      <Box className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-ambient-slow-reverse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F7D51A]/10 blur-3xl animate-ambient-center" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#159447] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white">
              <Sparkles size={13} className="text-[#F7D51A]" />
              Our College Network
              <span className="w-1.5 h-1.5 rounded-full bg-[#159447] animate-pulse" />
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
              Partner Colleges &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                Institutions
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We provide admissions guidance for a range of government and private colleges
              across cities. Our counsellors have hands-on knowledge of each institution.
            </p>
          </div>
        </Container>

        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-[#F8FAFC]"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)" }}
          aria-hidden
        />
      </Box>

      {/* Features Section */}
      <Box className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-12">
        <Container>
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
                <Paper
                  key={idx}
                  elevation={0}
                  className="bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon size={24} className="text-[#0D9488]" />
                  </div>
                  <Typography variant="h6" className="text-lg font-bold text-[#0B3C5D] mb-2">{feature.title}</Typography>
                  <Typography variant="body2" className="text-sm text-[#475569] leading-relaxed">{feature.description}</Typography>
                </Paper>
              );
            })}
          </div>
        </Container>
      </Box>

      {/* Main Content */}
      <Box className="bg-[#F8FAFC] section-py">
        <Container>
          {/* Important disclaimer */}
          <Paper elevation={0} className="mb-12 bg-[#0D9488]/5 border border-[#0D9488]/20 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
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
          </Paper>

          {/* Government Colleges Section */}
          {govt.length > 0 && (
            <div className="mb-16" id="government">
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
                {govt.map((u) => (
                  <UniversityCard key={u.id} university={u} />
                ))}
              </div>
            </div>
          )}

          {/* Private Colleges Section */}
          {priv.length > 0 && (
            <div id="private">
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
                {priv.map((u) => (
                  <UniversityCard key={u.id} university={u} />
                ))}
              </div>
            </div>
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
      </Box>

      {/* Stats Section at Bottom */}
      <Box className="bg-white border-t border-b border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <Paper
                key={stat.label}
                elevation={0}
                className="text-center p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-md transition-all duration-300 border border-[#E2E8F0] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                  <stat.icon size={20} style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold text-[#0B3C5D]">{stat.value}</div>
                <div className="text-xs text-[#94A3B8] font-medium">{stat.label}</div>
              </Paper>
            ))}
          </div>
        </Container>
      </Box>

      {/* Enhanced CTA Section at Bottom (No Buttons) */}
      <CTASection
        title="Find Your Perfect College Match"
        description="Get personalized guidance to find the right college based on your goals, eligibility, and preferences."
        showButtons={false}
      />
    </Box>
  );
}