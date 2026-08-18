import CategoryCoursePage, { CategoryConfig } from "@/components/courses/CategoryCoursePage";
import { getCoursesByCategory } from "@/lib/data/courses";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import {
  GraduationCap,
  TrendingUp,
  Users,
  BookOpen,
  Building2,
  MapPin,
  Clock,
  Briefcase,
  FileText,
  BarChart,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Graduation Programs — CollegeSure by Brainzima",
  description: "Browse verified BCA, BBA, B.Com, B.Sc, and BA courses with expert admission guidance.",
};

export default function GraduationCoursesPage() {
  const courses = getCoursesByCategory("graduation");
  const graduationGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/courses/graduation", metadata.title, metadata.description, "WebPage"),
    getBreadcrumbSchema("/courses/graduation", [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Graduation", url: "/courses/graduation" },
    ]),
  ];

  const config: CategoryConfig = {
    slug: "graduation",
    title: metadata.title,
    description: metadata.description,
    canonicalPath: "/courses/graduation",
    badge1: { label: "Commerce & IT Programs" },
    badge2: { label: "UG Programs", icon: GraduationCap, iconColor: "text-[#F36C21]" },
    headingPrefix: "Graduation",
    headingGradientText: "Programs",
    heroDescription:
      "BCA, BBA, B.Com and other undergraduate programs — diverse options for students looking for versatile and rewarding careers.",
    quickStats: [
      { icon: Clock, color: "text-[#F36C21]", label: "3 Years" },
      { icon: GraduationCap, color: "text-[#EC4899]", label: "10+2 in Any Stream" },
      { icon: MapPin, color: "text-[#3B82F6]", label: "Multiple Cities" },
    ],
    specializationsTitle: "Popular Programs",
    specializationsHeadingPrefix: "Most Popular",
    specializationsHeadingColoredText: "Graduation Programs",
    specializationsHeadingColor: "#F36C21",
    specializationsDescription:
      "Choose from a variety of undergraduate programs offered at top colleges.",
    specializationsBg: "bg-[#FEF7F3]/50",
    specializationsBorderHover: "hover:border-[#F36C21]/40",
    specializations: [
      { name: "Bachelor of Computer Applications", icon: FileText, color: "#147CC1" },
      { name: "Bachelor of Business Administration", icon: Briefcase, color: "#F36C21" },
      { name: "Bachelor of Commerce", icon: BarChart, color: "#159447" },
      { name: "Bachelor of Arts", icon: GraduationCap, color: "#591084" },
      { name: "Bachelor of Science", icon: BookOpen, color: "#B30F66" },
      { name: "Bachelor of Education", icon: Award, color: "#F7D51A" },
    ],
    coursesHeaderIcon: GraduationCap,
    coursesHeaderIconColor: "text-[#F36C21]",
    coursesHeaderBg: "bg-[#F36C21]/10",
    coursesHeaderTitle: "All Graduation Courses",
    coursesHeaderSubtitle: "Browse all available undergraduate programs",
    coursesBadgeVariant: "orange",
    courses,
    emptyStateTitle: "No Graduation Courses Found",
    stats: [
      { label: "Graduation Programs", value: "12+", icon: BookOpen, color: "#F36C21" },
      { label: "Partner Colleges", value: "50+", icon: Building2, color: "#159447" },
      { label: "Students Enrolled", value: "5,000+", icon: Users, color: "#147CC1" },
      { label: "Career Success Rate", value: "90%", icon: TrendingUp, color: "#B30F66" },
    ],
    ctaTitle: "Not Sure Between BCA, BBA, or B.Com?",
    ctaDescription:
      "Our counsellors can help you understand the differences and choose the graduation program that best fits your career goals.",
    breadcrumbItems: [
      { label: "Courses", href: "/courses" },
      { label: "Graduation" },
    ],
    schemaNodes: graduationGraphNodes,
  };

  return <CategoryCoursePage config={config} />;
}