import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import Badge from "@/components/ui/Badge";
import {
  GraduationCap,
  Heart,
  Target,
  Eye,
  Sparkles,
  Shield,
  CheckCircle2,
  Building2,
  Star,
  Lightbulb,
  PenTool,
  Briefcase,
  BookOpen,
  MessageCircle,
  Users,
  Compass,
  ExternalLink,
  Laptop,
  Search,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";
import Link from "next/link";

import JsonLd from "@/components/seo/JsonLd";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";

export const metadata = {
  title: "About Us — CollegeSure by Brainzima",
  description: "Learn about CollegeSure by Brainzima Innovation Institute — honest, transparent guidance for college admissions, courses, and career paths.",
};

const values = [
  {
    icon: Heart,
    title: "Student First",
    description:
      "Every recommendation we make is in the best interest of the student and family — not driven by institutional commissions or external pressures.",
    color: "#EC4899",
    gradient: "from-[#EC4899]/20 to-[#EC4899]/5",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe you deserve clear, honest information about colleges, fees, eligibility, and career prospects — without jargon or hidden agendas.",
    color: "#3B82F6",
    gradient: "from-[#3B82F6]/20 to-[#3B82F6]/5",
  },
  {
    icon: Target,
    title: "Personalization",
    description:
      "We don't give generic advice. We listen to your specific goals, location, budget, and eligibility before making any recommendation.",
    color: "#F97316",
    gradient: "from-[#F97316]/20 to-[#F97316]/5",
  },
  {
    icon: GraduationCap,
    title: "Quality Guidance",
    description:
      "Our counsellors have in-depth knowledge of college admission processes and provide informed, practical guidance.",
    color: "#0D9488",
    gradient: "from-[#0D9488]/20 to-[#0D9488]/5",
  },
];

const teamStats = [
  { label: "Students Guided", value: "15,000+", icon: Users, color: "#159447" },
  { label: "Partner Colleges", value: "500+", icon: Building2, color: "#147CC1" },
  { label: "Courses Available", value: "1,000+", icon: BookOpen, color: "#F36C21" },
  { label: "Student Rating", value: "4.9/5", icon: Star, color: "#B30F66" },
];

const ecosystemVentures = [
  {
    id: "institute",
    name: "Brainzima Innovation Institute",
    subtitle: "Technology Education & Skill Hub",
    category: "Technology Education",
    description: "Quality IT and computer education, empowering students with industry-relevant technical skills across Eastern India.",
    color: "#159447",
    icon: GraduationCap,
    stats: [
      { label: "Students Trained", value: "1,200+" },
      { label: "Centers", value: "11+" },
    ],
  },
  {
    id: "rexvel",
    name: "Rexvel Web Solutions",
    subtitle: "Digital Solutions & Web Development",
    category: "Digital Solutions",
    description: "Custom web applications, enterprise software solutions, and digital transformation for modern organizations.",
    color: "#147CC1",
    icon: Laptop,
    stats: [
      { label: "Web Solutions", value: "100+" },
      { label: "Enterprise Support", value: "24/7" },
    ],
  },
  {
    id: "bifindr",
    name: "Bifindr.com",
    subtitle: "Digital Tools & AI Discovery Platform",
    category: "Digital Tools & AI Discovery",
    description: "Curated digital platform for discovering productivity tools, AI software, and smart online utilities.",
    color: "#F36C21",
    icon: Search,
    stats: [
      { label: "Tools Indexed", value: "500+" },
      { label: "Active Discovery", value: "Global" },
    ],
  },
  {
    id: "trybook",
    name: "Trybook.in",
    subtitle: "Exam Preparation & Testing Technology",
    category: "Exam Technology",
    description: "Smart testing platform offering competitive exam preparation, mock tests, and student practice assessments.",
    color: "#B30F66",
    icon: BookOpen,
    stats: [
      { label: "Mock Assessments", value: "250+" },
      { label: "Aspirant Reach", value: "Statewide" },
    ],
  },
  {
    id: "collegesure",
    name: "CollegeSure",
    subtitle: "Honest College Admissions & Career Guidance Platform",
    category: "Education Technology Division",
    status: "Current Venture",
    isFeatured: true,
    description: "CollegeSure is an education-focused digital platform by Brainzima that helps students navigate one of the most important decisions of their lives — choosing the right course and college. From exploring programs and colleges to personalized counselling and admission assistance, CollegeSure brings the entire journey into one simple, transparent platform.",
    quote: "Every student deserves clear, honest, and personalized guidance before choosing a college or course.",
    color: "#0D9488",
    icon: Compass,
    features: [
      "Course Discovery",
      "College Exploration",
      "Personalized Counselling",
      "Admission Guidance",
      "Course & College Comparison",
      "Student & Parent Support",
      "Application Assistance",
      "Career Guidance",
    ],
    stats: [
      { label: "Courses", value: "1,000+" },
      { label: "Colleges", value: "500+" },
      { label: "Students Guided", value: "15,000+" },
      { label: "Support Availability", value: "24/7" },
    ],
    ctaText: "Visit CollegeSure →",
    ctaLink: "https://collegesure.brainzima.com/",
  },
];

const timelineEvents = [
  {
    year: "2023",
    title: "Founded",
    description: "Brainzima Innovation Institute was founded with a single classroom in Katihar, focusing on basic computer literacy.",
    color: "#159447",
  },
  {
    year: "2024",
    title: "Expansion",
    description: "Expanded course offerings to include programming, web development, and digital services via Rexvel Web Solutions.",
    color: "#147CC1",
  },
  {
    year: "2025",
    title: "ISO Certified & Digital Tools",
    description: "Awarded ISO certification for quality education standards, expanding franchise network and digital platforms like Bifindr & Trybook.",
    color: "#F36C21",
  },
  {
    year: "2026",
    title: "CollegeSure Launch",
    description: "Launched CollegeSure by Brainzima — an education technology platform focused on course discovery, college exploration, personalized counselling, and admission guidance.",
    color: "#0D9488",
    isHighlight: true,
  },
];

const journeySteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discovery",
    description: "We listen to your goals, interests, and concerns to understand what you're looking for.",
    color: "#0D9488",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Planning",
    description: "We create a personalized roadmap with clear options and recommendations.",
    color: "#3B82F6",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Guidance",
    description: "We provide honest, transparent advice about colleges, courses, and career paths.",
    color: "#F97316",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Support",
    description: "We stand by you through the admission process until your seat is confirmed.",
    color: "#EC4899",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Tech Student",
    content: "CollegeSure helped me find the perfect engineering college. Their counsellors were patient and provided clear, honest guidance.",
    rating: 5,
    image: "👩‍🎓",
  },
  {
    name: "Rahul Kumar",
    role: "Medical Student",
    content: "I was completely lost about medical admissions. CollegeSure made the process simple and stress-free.",
    rating: 5,
    image: "👨‍🎓",
  },
  {
    name: "Sneha Patel",
    role: "Parent",
    content: "As a parent, I wanted the best for my daughter. CollegeSure's transparency and honesty gave us confidence.",
    rating: 5,
    image: "👩",
  },
];

export default function AboutPage() {
  const featuredVenture = ecosystemVentures.find((v) => v.isFeatured);
  const aboutGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/about", metadata.title, metadata.description, "AboutPage"),
    getBreadcrumbSchema("/about", [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about" },
    ]),
  ];

  return (
    <div>
      <JsonLd nodes={aboutGraphNodes} />
      {/* Hero Section */}
      <div className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-ambient-slow-reverse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F7D51A]/10 blur-3xl animate-ambient-center" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white">
              <Sparkles size={13} className="text-[#F7D51A]" />
              About CollegeSure & Brainzima
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
              Your College.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                Our Assurance.
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              CollegeSure is an admissions guidance platform by Brainzima Innovation
              Institute, built to help students and parents navigate college
              admissions with clarity, confidence, and complete honesty.
            </p>
          </div>
        </Container>

        {/* Decorative Shape at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Mission Section */}
      <div className="bg-white section-py relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-4">
                  <span className="w-6 h-px bg-[#0D9488]" />
                  Our Mission
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] leading-tight mb-5">
                  Honest Admissions Guidance for Every Student
                </h2>
                <div className="space-y-4 text-[#475569]">
                  <p className="leading-relaxed">
                    Choosing the right college is one of the most important decisions a
                    student and their family will make. Yet the process is often
                    overwhelming — filled with confusing information, pressure tactics,
                    and conflicting advice.
                  </p>
                  <p className="leading-relaxed">
                    CollegeSure was created to change that. We provide personalized,
                    transparent, and genuinely helpful admissions guidance — helping
                    students find colleges that match their goals, eligibility, and
                    practical considerations like location and fees.
                  </p>
                  <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                        <Shield size={16} className="text-[#0D9488]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0B3C5D]">
                          Our Promise
                        </p>
                        <p className="text-sm text-[#475569]">
                          We do not make promises we cannot keep. We do not guarantee
                          admissions, placements, or outcomes that depend on individual
                          effort. What we guarantee is honest guidance and our complete
                          support throughout the process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual Card */}
            <ScrollReveal direction="right">
              <Card3DTilt borderGlow={false} maxTilt={4}>
                <div className="relative bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] shadow-md overflow-hidden">
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0B3C5D] to-[#1a5276] rounded-2xl flex items-center justify-center shadow-lg">
                        <GraduationCap size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0B3C5D]">
                          Brainzima Innovation Institute
                        </h3>
                        <p className="text-sm text-[#94A3B8]">Since 2020</p>
                      </div>
                    </div>

                    <p className="text-[#475569] text-base leading-relaxed mb-6">
                      CollegeSure is a service of Brainzima Innovation Institute — an
                      organization committed to education, innovation, and student
                      empowerment.
                    </p>

                    <div className="space-y-3 pt-4 border-t border-[#E2E8F0]">
                      {[
                        { icon: BookOpen, text: "Courses: Medical, Engineering, Graduation" },
                        { icon: MessageCircle, text: "Guidance: Personalized, honest, free" },
                        { icon: CheckCircle2, text: "Support: End-to-end admission assistance" },
                      ].map((item) => (
                        <div
                          key={item.text}
                          className="flex items-center gap-3 text-sm font-medium text-[#475569] hover:translate-x-1 transition-transform"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                            <item.icon size={14} className="text-[#0D9488]" />
                          </div>
                          {item.text}
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://collegesure.brainzima.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors mt-6 group"
                    >
                      Visit CollegeSure →
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </Card3DTilt>
            </ScrollReveal>
          </div>
        </Container>
      </div>

      {/* Values Section */}
      <div className="bg-[#F8FAFC] section-py">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="Our Core Principles"
              title="What Drives CollegeSure"
              description="These values shape every interaction, recommendation, and piece of advice we share."
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={val.title} delay={idx * 0.08} direction="up">
                  <Card3DTilt glowColor={`${val.color}25`}>
                    <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden flex flex-col justify-between">
                      <div>
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${val.color}15` }}
                        >
                          <Icon size={22} style={{ color: val.color }} />
                        </div>
                        <h3 className="font-bold text-[#0F172A] text-lg mb-2">
                          {val.title}
                        </h3>
                        <p className="text-sm text-[#475569] leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </Card3DTilt>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Ecosystem Ventures Grid */}
      <div className="bg-white section-py">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="The Brainzima Ecosystem"
              title="Ventures Under Brainzima"
              description="Exploring digital solutions, software, tools, and testing technology across multiple domains."
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
            {ecosystemVentures.map((venture) => {
              const Icon = venture.icon;
              if (venture.isFeatured) return null;
              return (
                <ScrollReveal key={venture.id} direction="up">
                  <Card3DTilt borderGlow={false} maxTilt={4} className="h-full">
                    <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${venture.color}15` }}
                        >
                          <Icon size={22} style={{ color: venture.color }} />
                        </div>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                          style={{
                            backgroundColor: `${venture.color}10`,
                            color: venture.color,
                            borderColor: `${venture.color}30`,
                          }}
                        >
                          {venture.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0B3C5D] mb-1">
                        {venture.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#94A3B8] mb-3">
                        {venture.subtitle}
                      </p>
                      <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">
                        {venture.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#E2E8F0]">
                        {venture.stats.map((st) => (
                          <div key={st.label} className="bg-[#F8FAFC] p-2 rounded-xl text-center">
                            <div className="text-sm font-extrabold text-[#0B3C5D]">{st.value}</div>
                            <div className="text-[10px] font-medium text-[#94A3B8]">{st.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card3DTilt>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Featured CollegeSure Card */}
          {featuredVenture && (
            <ScrollReveal direction="up">
              <div className="bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <Badge variant="teal" size="sm" className="mb-4">
                      {featuredVenture.category}
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                      {featuredVenture.name}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                      {featuredVenture.description}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
                      {featuredVenture.stats.map((st) => (
                        <div key={st.label}>
                          <div className="text-xl font-bold text-white">{st.value}</div>
                          <div className="text-xs text-white/70">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-center lg:justify-end">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0a7a6f] text-white font-bold px-6 py-3.5 rounded-2xl shadow-xl transition-all hover:scale-105"
                    >
                      <span>Get Free Counselling</span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </Container>
      </div>

      {/* Stats Section — Bottom Set */}
      <div className="bg-white border-y border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teamStats.map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.08} direction="up">
                <div className="text-center p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-md transition-all duration-300 border border-[#E2E8F0]">
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

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your College Journey?"
        description="Get personalized guidance for your college admissions. No pressure, just genuine support."
      />
    </div>
  );
}