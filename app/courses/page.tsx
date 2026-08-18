import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import { getCourses } from "@/lib/resolvers";
import {
  BookOpen,
  Award,
  TrendingUp,
  Zap,
  Sparkles,
} from "lucide-react";
import CourseFilterGrid from "@/components/sections/CourseFilterGrid";
import JsonLd from "@/components/seo/JsonLd";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";

export const revalidate = 3600;

export const metadata = {
  title: "Explore Courses — CollegeSure by Brainzima",
  description: "Browse verified Medical, Engineering, Paramedical, and Graduation courses with expert admission guidance.",
};

const stats = [
  { label: "Courses Available", value: "50+", icon: BookOpen, color: "#159447" },
  { label: "Partner Colleges", value: "50+", icon: Award, color: "#147CC1" },
  { label: "Students Placed", value: "15,000+", icon: TrendingUp, color: "#F36C21" },
  { label: "Success Rate", value: "92%", icon: Zap, color: "#B30F66" },
];

export default async function CoursesPage() {
  const { data: courses } = await getCourses();

  const coursesGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/courses", metadata.title, metadata.description, "WebPage"),
    getBreadcrumbSchema("/courses", [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
    ]),
  ];

  return (
    <div className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={coursesGraphNodes} />
      {/* Hero Section */}
      <div className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#B30F66]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#147CC1]/20 blur-3xl animate-ambient-slow-reverse" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#FEF2F7] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white">
              <Sparkles size={13} className="text-[#F7D51A]" />
              Discover Your Future
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B30F66] via-[#147CC1] to-[#F7D51A]">
                Premium Courses
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              We help students get admitted to top programs across Medical,
              Engineering, and Graduation streams. Browse all verified options.
            </p>
          </div>
        </Container>

        {/* Decorative Shape at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-[#F8FAFC]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Interactive Filter & Course Grid Island */}
      <CourseFilterGrid courses={courses} />

      {/* Stats Section — Bottom Set */}
      <div className="bg-white border-y border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-md transition-all duration-300 border border-[#E2E8F0] hover:-translate-y-1"
              >
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
      <CTASection
        title="Ready to Enroll?"
        description="Get personalized guidance and secure your seat in the best colleges."
        showButtons={false}
      />
    </div>
  );
}