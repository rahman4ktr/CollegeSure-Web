import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import {
  Sparkles,
  Search,
  MessageCircle,
  FileCheck,
  Building2,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { Box, Paper, Typography, Card, Button as MuiButton } from "@mui/material";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata(
  "Admission Process — How CollegeSure Helps You Get Admitted",
  "Step-by-step guide to college admissions with CollegeSure: course selection, college comparison, eligibility check, and application support.",
  "/admission-process"
);

const steps = [
  {
    step: "01",
    title: "Free Initial Consultation",
    description:
      "Share your academic background, preferred course, location constraints, and budget. Our counsellors understand your specific needs.",
    icon: Headphones,
    color: "#159447",
  },
  {
    step: "02",
    title: "Shortlisting Courses & Colleges",
    description:
      "Based on your profile, we present a curated list of government, private, or deemed universities with realistic eligibility criteria.",
    icon: Search,
    color: "#147CC1",
  },
  {
    step: "03",
    title: "Eligibility & Document Check",
    description:
      "We review your certificates, entrance scores, and documents to ensure hassle-free verification before form submission.",
    icon: FileCheck,
    color: "#F36C21",
  },
  {
    step: "04",
    title: "Application & Seat Guidance",
    description:
      "Our team guides you through the official application process, merit lists, or counselling rounds until your seat is confirmed.",
    icon: Building2,
    color: "#B30F66",
  },
];

export default function AdmissionProcessPage() {
  const processGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/admission-process", "Admission Process Guide", "Step-by-step guide to college admissions with CollegeSure.", "WebPage"),
    getBreadcrumbSchema("/admission-process", [
      { name: "Home", url: "/" },
      { name: "Admission Process", url: "/admission-process" },
    ]),
  ];

  return (
    <Box className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={processGraphNodes} />

      {/* Hero */}
      <Box className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-ambient-slow-reverse" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#FEF2F7] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white">
              <Sparkles size={13} className="text-[#F7D51A]" />
              Step-by-Step Guide
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
              Simple &amp; Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                Admission Process
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              From discovering the right course to securing your college seat — here is how CollegeSure supports you at every step.
            </p>
          </div>
        </Container>

        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-[#F8FAFC]"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)" }}
          aria-hidden
        />
      </Box>

      {/* Main Process Steps */}
      <Box className="bg-[#F8FAFC] section-py">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="teal" className="mb-3">4 Simple Steps</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#04164B] mb-3">
              How We Work With <span className="text-[#0D9488]">Students</span>
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Our structured approach ensures zero confusion and complete transparency throughout your application journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <Paper
                  key={s.step}
                  elevation={0}
                  className="bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${s.color}15` }}>
                        <Icon size={22} style={{ color: s.color }} />
                      </div>
                      <span className="text-2xl font-black text-[#E2E8F0]">{s.step}</span>
                    </div>

                    <Typography variant="h6" className="text-lg font-bold text-[#04164B] mb-2">
                      {s.title}
                    </Typography>

                    <Typography variant="body2" className="text-sm text-[#475569] leading-relaxed">
                      {s.description}
                    </Typography>
                  </div>
                </Paper>
              );
            })}
          </div>

          {/* Guarantee Banner */}
          <Paper elevation={0} className="bg-gradient-to-r from-[#04164B] via-[#040943] to-[#591084] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-emerald-300">
                  <ShieldCheck size={14} /> 100% Free Counselling Guarantee
                </div>
                <Typography variant="h5" className="text-xl sm:text-2xl font-extrabold text-white">
                  No Hidden Charges. No Pressure Tactics.
                </Typography>
                <Typography variant="body2" className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
                  We provide genuine advice matching your marks, budget, and goals — ensuring you make an informed decision for your career.
                </Typography>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link href="/free-counselling">
                  <MuiButton
                    variant="contained"
                    endIcon={<ArrowRight size={16} />}
                    sx={{
                      backgroundColor: "#B30F66",
                      "&:hover": { backgroundColor: "#591084" },
                      borderRadius: "14px",
                      px: 3,
                      py: 1.5,
                      fontSize: "13px",
                      fontWeight: 800,
                      textTransform: "none",
                      boxShadow: "0 4px 14px rgba(179, 15, 102, 0.4)",
                    }}
                  >
                    Start Free Counselling
                  </MuiButton>
                </Link>
              </div>
            </div>
          </Paper>
        </Container>
      </Box>

      <CTASection
        title="Ready to Begin Your Admission Process?"
        description="Talk to our experienced counsellors today for personalized guidance."
        showButtons={false}
      />
    </Box>
  );
}