import CategoryCoursePage, { CategoryConfig } from "@/components/courses/CategoryCoursePage";
import { getCoursesByCategory } from "@/lib/data/courses";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import {
  Stethoscope,
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
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "Medical & Paramedical Courses — CollegeSure by Brainzima",
  description: "Browse verified Nursing, Radiology, BPT, GNM, and Paramedical courses with expert admission guidance.",
};

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

  const config: CategoryConfig = {
    slug: "medical",
    title: metadata.title,
    description: metadata.description,
    canonicalPath: "/courses/medical",
    badge1: { label: "Healthcare Programs" },
    badge2: { label: "Nursing & Paramedical", icon: Stethoscope, iconColor: "text-[#10B981]" },
    headingPrefix: "Medical &",
    headingGradientText: "Paramedical Courses",
    heroDescription:
      "Nursing, radiology, and allied health programs that open doors to rewarding careers in healthcare. Get personalized admissions guidance.",
    quickStats: [
      { icon: Clock, color: "text-[#10B981]", label: "3-4 Years" },
      { icon: GraduationCap, color: "text-[#EC4899]", label: "10+2 with PCB" },
      { icon: MapPin, color: "text-[#F36C21]", label: "Multiple Cities" },
    ],
    specializationsTitle: "Healthcare Specializations",
    specializationsHeadingPrefix: "Popular",
    specializationsHeadingColoredText: "Medical Programs",
    specializationsHeadingColor: "#159447",
    specializationsDescription:
      "Choose from a wide range of nursing and paramedical programs offered at top healthcare institutions.",
    specializationsBg: "bg-[#FEF2F7]/50",
    specializationsBorderHover: "hover:border-[#159447]/40",
    specializations: [
      { name: "General Nursing & Midwifery", icon: HeartPulse, color: "#0D9488" },
      { name: "B.Sc Nursing", icon: Heart, color: "#3B82F6" },
      { name: "Radiology Technology", icon: Microscope, color: "#F97316" },
      { name: "Medical Lab Technology", icon: Syringe, color: "#8B5CF6" },
      { name: "Operation Theatre Technology", icon: Activity, color: "#EC4899" },
      { name: "Emergency Medical Services", icon: Ambulance, color: "#F59E0B" },
    ],
    coursesHeaderIcon: Stethoscope,
    coursesHeaderIconColor: "text-[#159447]",
    coursesHeaderBg: "bg-[#159447]/10",
    coursesHeaderTitle: "All Medical & Paramedical Courses",
    coursesHeaderSubtitle: "Browse all available healthcare programs",
    coursesBadgeVariant: "teal",
    courses,
    emptyStateTitle: "No Medical Courses Found",
    stats: [
      { label: "Medical Programs", value: "8+", icon: BookOpen, color: "#0D9488" },
      { label: "Partner Hospitals", value: "30+", icon: Building2, color: "#3B82F6" },
      { label: "Students Placed", value: "2,000+", icon: Users, color: "#F97316" },
      { label: "Success Rate", value: "95%", icon: TrendingUp, color: "#EC4899" },
    ],
    ctaTitle: "Interested in a Medical or Paramedical Program?",
    ctaDescription:
      "Our counsellors can help you find the right nursing or paramedical college based on your eligibility and location.",
    breadcrumbItems: [
      { label: "Courses", href: "/courses" },
      { label: "Medical & Paramedical" },
    ],
    schemaNodes: medicalGraphNodes,
  };

  return <CategoryCoursePage config={config} />;
}