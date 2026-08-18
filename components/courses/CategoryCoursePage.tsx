import React from "react";
import { Box, Paper } from "@mui/material";
import Container from "@/components/ui/Container";
import CourseCard from "@/components/cards/CourseCard";
import CTASection from "@/components/sections/CTASection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import { Sparkles, LucideIcon, Stethoscope } from "lucide-react";
import { Course } from "@/lib/types";

export interface SpecializationItem {
  name: string;
  icon?: LucideIcon;
  color?: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export interface QuickStatItem {
  icon: LucideIcon;
  color: string;
  label: string;
}

export interface CategoryConfig {
  slug: "medical" | "engineering" | "graduation";
  title: string;
  description: string;
  canonicalPath: string;
  badge1: { label: string; iconColor?: string };
  badge2: { label: string; iconColor?: string; icon: LucideIcon };
  headingPrefix: string;
  headingGradientText: string;
  heroDescription: string;
  quickStats: QuickStatItem[];
  specializationsTitle: string;
  specializationsHeadingPrefix: string;
  specializationsHeadingColoredText: string;
  specializationsHeadingColor: string;
  specializationsDescription: string;
  specializationsBg: string;
  specializationsBorderHover: string;
  specializations: SpecializationItem[];
  coursesHeaderIcon: LucideIcon;
  coursesHeaderIconColor: string;
  coursesHeaderBg: string;
  coursesHeaderTitle: string;
  coursesHeaderSubtitle: string;
  coursesBadgeVariant: "teal" | "blue" | "orange";
  courses: Course[];
  emptyStateTitle: string;
  stats: StatItem[];
  ctaTitle: string;
  ctaDescription: string;
  breadcrumbItems: { label: string; href?: string }[];
  schemaNodes: object[];
}

export default function CategoryCoursePage({ config }: { config: CategoryConfig }) {
  const {
    title,
    badge1,
    badge2,
    headingPrefix,
    headingGradientText,
    heroDescription,
    quickStats,
    specializationsTitle,
    specializationsHeadingPrefix,
    specializationsHeadingColoredText,
    specializationsHeadingColor,
    specializationsDescription,
    specializationsBg,
    specializationsBorderHover,
    specializations,
    coursesHeaderIcon: CoursesIcon,
    coursesHeaderIconColor,
    coursesHeaderBg,
    coursesHeaderTitle,
    coursesHeaderSubtitle,
    coursesBadgeVariant,
    courses,
    emptyStateTitle,
    stats,
    ctaTitle,
    ctaDescription,
    breadcrumbItems,
    schemaNodes,
  } = config;

  const Badge2Icon = badge2.icon;

  return (
    <Box className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={schemaNodes} />

      {/* Hero Section */}
      <Box className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-ambient-slow-reverse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F7D51A]/10 blur-3xl animate-ambient-center" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <Breadcrumbs
            items={breadcrumbItems}
            className="text-white/70 [&>span]:text-white/40 mb-3"
          />

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <Badge
                  variant="teal"
                  icon={<Sparkles size={12} className="text-[#F7D51A]" />}
                  className="bg-[#159447]/35 border-[#159447]/60 text-white font-bold shadow-sm"
                >
                  {badge1.label}
                </Badge>
                <Badge
                  variant="teal"
                  icon={<Badge2Icon size={12} className={badge2.iconColor || "text-[#10B981]"} />}
                  className="bg-white/15 backdrop-blur-md border-white/30 text-white font-semibold shadow-sm"
                >
                  {badge2.label}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-3">
                {headingPrefix}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                  {headingGradientText}
                </span>
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
                {heroDescription}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-3 mt-4">
                {quickStats.map((qs, i) => {
                  const QIcon = qs.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-white/90 font-medium bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10"
                    >
                      <QIcon size={14} className={`${qs.color} flex-shrink-0`} />
                      <span>{qs.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>

        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-[#F8FAFC]"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)" }}
          aria-hidden
        />
      </Box>

      {/* Specializations Section */}
      <Box id="specializations" className={`${specializationsBg} border-b border-[#E2E8F0] py-12`}>
        <Container>
          <div className="text-center mb-10">
            <Badge variant="teal" className="mb-3">{specializationsTitle}</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#04164B] mb-3">
              {specializationsHeadingPrefix}{" "}
              <span style={{ color: specializationsHeadingColor }}>
                {specializationsHeadingColoredText}
              </span>
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto font-medium">
              {specializationsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, idx) => {
              const SIcon = spec.icon;
              return (
                <Paper
                  key={idx}
                  elevation={0}
                  className={`flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E2E8F0] hover:shadow-md transition-all duration-300 hover:translate-x-1 group ${specializationsBorderHover}`}
                >
                  {SIcon && (
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${spec.color || specializationsHeadingColor}15` }}
                    >
                      <SIcon size={14} style={{ color: spec.color || specializationsHeadingColor }} />
                    </div>
                  )}
                  <span className="text-sm font-semibold text-[#475569] group-hover:text-[#04164B] transition-colors">
                    {spec.name}
                  </span>
                </Paper>
              );
            })}
          </div>
        </Container>
      </Box>

      {/* Courses Main Grid */}
      <Box className="bg-[#FDFDFD] section-py">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className={`w-10 h-10 rounded-xl ${coursesHeaderBg} flex items-center justify-center`}>
                  <CoursesIcon size={20} className={coursesHeaderIconColor} />
                </div>
                <h2 className="text-2xl font-extrabold text-[#04164B]">
                  {coursesHeaderTitle}
                </h2>
              </div>
              <p className="text-sm text-[#94A3B8] ml-13">
                {coursesHeaderSubtitle}
              </p>
            </div>
            <Badge variant={coursesBadgeVariant} size="sm" className="hover:scale-105 transition-transform">
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
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">{emptyStateTitle}</h3>
              <p className="text-[#475569]">Check back later for new programs.</p>
            </div>
          )}
        </Container>
      </Box>

      {/* Stats Section */}
      <Box className="bg-white border-y border-[#E2E8F0] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <Paper
                key={stat.label}
                elevation={0}
                className="text-center p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-md transition-all duration-300 border border-[#E2E8F0] hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon size={20} style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold text-[#0B3C5D]">{stat.value}</div>
                <div className="text-xs text-[#94A3B8] font-medium">{stat.label}</div>
              </Paper>
            ))}
          </div>
        </Container>
      </Box>

      {/* CTA Section */}
      <CTASection
        title={ctaTitle}
        description={ctaDescription}
        showButtons={false}
      />
    </Box>
  );
}
