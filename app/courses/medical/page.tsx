import Container from "@/components/ui/Container";
import CourseCard from "@/components/cards/CourseCard";
import CTASection from "@/components/sections/CTASection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getCoursesByCategory } from "@/lib/data/courses";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import {
  Stethoscope,
  Sparkles,
  TrendingUp,
  Users,
  BookOpen,
  Building2,
  MapPin,
  Clock,
  Heart,
  Syringe,
  Microscope,
  Ambulance,
  Activity,
  HeartPulse,
  GraduationCap
} from "lucide-react";

export const metadata = {
  title: "Medical & Paramedical Courses — CollegeSure by Brainzima",
  description: "Browse verified Nursing, Radiology, BPT, GNM, and Paramedical courses with expert admission guidance.",
};

// Stats Data
const stats = [
  { label: "Medical Programs", value: "8+", icon: BookOpen, color: "#0D9488" },
  { label: "Partner Hospitals", value: "30+", icon: Building2, color: "#3B82F6" },
  { label: "Students Placed", value: "2,000+", icon: Users, color: "#F97316" },
  { label: "Success Rate", value: "95%", icon: TrendingUp, color: "#EC4899" },
];

// Specializations
const specializations = [
  { name: "General Nursing & Midwifery", icon: HeartPulse, color: "#0D9488" },
  { name: "B.Sc Nursing", icon: Heart, color: "#3B82F6" },
  { name: "Radiology Technology", icon: Microscope, color: "#F97316" },
  { name: "Medical Lab Technology", icon: Syringe, color: "#8B5CF6" },
  { name: "Operation Theatre Technology", icon: Activity, color: "#EC4899" },
  { name: "Emergency Medical Services", icon: Ambulance, color: "#F59E0B" },
];

export default function MedicalCoursesPage() {
  const courses = getCoursesByCategory("medical");
  const medicalGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/courses/medical", metadata.title, metadata.description, "WebPage"),
    getBreadcrumbSchema("/courses/medical", [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Medical & Paramedical", url: "/courses/medical" },
    ]),
  ];

  return (
    <div className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={medicalGraphNodes} />
      {/* Enhanced Hero Section */}
      <div
        className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-ambient-slow-reverse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F7D51A]/10 blur-3xl animate-ambient-center" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <ScrollReveal direction="down" distance={20}>
            <Breadcrumbs
              items={[
                { label: "Courses", href: "/courses" },
                { label: "Medical & Paramedical" },
              ]}
              className="text-white/70 [&>span]:text-white/40 mb-3"
            />
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            <ScrollReveal direction="left">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <Badge
                    variant="teal"
                    icon={<Sparkles size={12} className="text-[#F7D51A]" />}
                    className="bg-[#159447]/35 border-[#159447]/60 text-white font-bold shadow-sm"
                  >
                    Healthcare Programs
                  </Badge>
                  <Badge
                    variant="teal"
                    icon={<Stethoscope size={12} className="text-[#10B981]" />}
                    className="bg-white/15 backdrop-blur-md border-white/30 text-white font-semibold shadow-sm"
                  >
                    Nursing & Paramedical
                  </Badge>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-3">
                  Medical &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                    Paramedical Courses
                  </span>
                </h1>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
                  Nursing, radiology, and allied health programs that open doors to
                  rewarding careers in healthcare. Get personalized admissions guidance.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10">
                    <Clock size={14} className="text-[#10B981] flex-shrink-0" />
                    <span>3-4 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10">
                    <GraduationCap size={14} className="text-[#EC4899] flex-shrink-0" />
                    <span>10+2 with PCB</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10">
                    <MapPin size={14} className="text-[#F36C21] flex-shrink-0" />
                    <span>Multiple Cities</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Decorative Shape */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-[#F8FAFC]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Specializations Section */}
      <div id="specializations" className="bg-[#FEF2F7]/50 border-b border-[#E2E8F0] py-12">
        <Container>
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <Badge variant="teal" className="mb-3">Healthcare Specializations</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#04164B] mb-3">
                Popular <span className="text-[#159447]">Medical</span> Programs
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto font-medium">
                Choose from a wide range of nursing and paramedical programs offered at top healthcare institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializations.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E2E8F0] hover:shadow-md hover:border-[#159447]/40 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${spec.color}15` }}
                    >
                      <Icon size={14} style={{ color: spec.color }} />
                    </div>
                    <span className="text-sm font-semibold text-[#475569] group-hover:text-[#04164B] transition-colors">
                      {spec.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </div>

      {/* Main Grid */}
      <div className="bg-[#FDFDFD] section-py">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-[#159447]/10 flex items-center justify-center">
                  <Stethoscope size={20} className="text-[#159447]" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#04164B]">
                  All Medical & Paramedical Courses
                </h2>
              </div>
              <p className="text-sm text-[#94A3B8] ml-13">
                Browse all available healthcare programs
              </p>
            </div>
            <Badge variant="teal" size="sm" className="hover:scale-105 transition-transform">
              {courses.length} Courses
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>

          {/* Empty State */}
          {courses.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#F8FAFC] flex items-center justify-center mb-4 border border-[#E2E8F0]">
                <Stethoscope size={32} className="text-[#94A3B8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">No Medical Courses Found</h3>
              <p className="text-[#475569]">Check back later for new programs.</p>
            </div>
          )}
        </Container>
      </div>

      {/* Stats Section — Bottom Set */}
      <div className="bg-white border-y border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-md transition-all duration-300 border border-[#E2E8F0] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                  <stat.icon size={20} style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold text-[#0B3C5D]">{stat.value}</div>
                <div className="text-xs text-[#94A3B8] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section (No Buttons) */}
      <ScrollReveal direction="up">
        <CTASection
          title="Interested in a Medical or Paramedical Program?"
          description="Our counsellors can help you find the right nursing or paramedical college based on your eligibility and location."
          showButtons={false}
        />
      </ScrollReveal>
    </div>
  );
}