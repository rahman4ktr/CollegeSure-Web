import CategoryCoursePage, { CategoryConfig } from "@/components/courses/CategoryCoursePage";
import { getCoursesByCategory } from "@/lib/data/courses";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import {
  Cpu,
  TrendingUp,
  Users,
  BookOpen,
  Building2,
  MapPin,
  Clock,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "Engineering & B.Tech Courses — CollegeSure by Brainzima",
  description: "Browse verified B.Tech CSE, Mechanical, Civil, ECE, and Engineering Diplomas with expert admission guidance.",
};

export default function EngineeringCoursesPage() {
  const courses = getCoursesByCategory("engineering");
  const engineeringGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/courses/engineering", metadata.title, metadata.description, "WebPage"),
    getBreadcrumbSchema("/courses/engineering", [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Engineering", url: "/courses/engineering" },
    ]),
  ];

  const config: CategoryConfig = {
    slug: "engineering",
    title: metadata.title,
    description: metadata.description,
    canonicalPath: "/courses/engineering",
    badge1: { label: "Technology Programs" },
    badge2: { label: "B.Tech & Diplomas", icon: Cpu, iconColor: "text-[#3B82F6]" },
    headingPrefix: "Engineering",
    headingGradientText: "Courses",
    heroDescription:
      "B.Tech programs across Computer Science, Mechanical, Civil and other disciplines. We help you find the right engineering college.",
    quickStats: [
      { icon: Clock, color: "text-[#3B82F6]", label: "4 Years" },
      { icon: GraduationCap, color: "text-[#EC4899]", label: "10+2 with PCM" },
      { icon: MapPin, color: "text-[#F36C21]", label: "Multiple Cities" },
    ],
    specializationsTitle: "Engineering Specializations",
    specializationsHeadingPrefix: "Popular",
    specializationsHeadingColoredText: "B.Tech Specializations",
    specializationsHeadingColor: "#3B82F6",
    specializationsDescription:
      "Choose from a wide range of engineering disciplines offered at top colleges.",
    specializationsBg: "bg-[#F8FAFC]",
    specializationsBorderHover: "hover:border-[#3B82F6]/30",
    specializations: [
      { name: "Computer Science & Engineering", icon: CheckCircle2, color: "#3B82F6" },
      { name: "Mechanical Engineering", icon: CheckCircle2, color: "#3B82F6" },
      { name: "Civil Engineering", icon: CheckCircle2, color: "#3B82F6" },
      { name: "Electronics & Communication", icon: CheckCircle2, color: "#3B82F6" },
      { name: "Electrical Engineering", icon: CheckCircle2, color: "#3B82F6" },
      { name: "Artificial Intelligence & ML", icon: CheckCircle2, color: "#3B82F6" },
    ],
    coursesHeaderIcon: Cpu,
    coursesHeaderIconColor: "text-[#3B82F6]",
    coursesHeaderBg: "bg-[#3B82F6]/10",
    coursesHeaderTitle: "All Engineering Courses",
    coursesHeaderSubtitle: "Browse all available engineering programs",
    coursesBadgeVariant: "blue",
    courses,
    emptyStateTitle: "No Engineering Courses Found",
    stats: [
      { label: "Engineering Courses", value: "15+", icon: BookOpen, color: "#147CC1" },
      { label: "Partner Colleges", value: "50+", icon: Building2, color: "#159447" },
      { label: "Students Placed", value: "8,000+", icon: Users, color: "#F36C21" },
      { label: "Success Rate", value: "94%", icon: TrendingUp, color: "#B30F66" },
    ],
    ctaTitle: "Looking for the Right Engineering College?",
    ctaDescription:
      "Let our counsellors help you compare B.Tech options based on fees, eligibility, location, and career prospects.",
    breadcrumbItems: [
      { label: "Courses", href: "/courses" },
      { label: "Engineering" },
    ],
    schemaNodes: engineeringGraphNodes,
  };

  return <CategoryCoursePage config={config} />;
}