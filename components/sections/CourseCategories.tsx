"use client";

import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Cpu,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Box, Container, Card, Typography, Chip } from "@mui/material";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCounsellingModal } from "@/components/providers/CounsellingModalProvider";

const categories = [
  {
    id: "medical",
    icon: Stethoscope,
    label: "Medical & Paramedical",
    shortLabel: "Healthcare",
    description:
      "Programs in nursing, radiology, MBBS, and allied health sciences that open doors to a rewarding career in healthcare.",
    popularCourses: ["GNM Nursing", "B.Sc Nursing", "B.Sc Radiology", "Paramedical Diplomas"],
    href: "/courses/medical",
    accentColor: "#159447",
    iconBg: "bg-[#159447]/15 text-[#159447]",
    tag: "bg-[#159447]/10 text-[#159447]",
    cta: "bg-[#159447] text-white hover:bg-[#117a3a]",
    stats: [
      { label: "Programs", value: "15+" },
      { label: "Hospitals", value: "20+" },
    ],
    featured: true,
  },
  {
    id: "engineering",
    icon: Cpu,
    label: "Engineering",
    shortLabel: "Technology",
    description:
      "B.Tech programs across Computer Science, Mechanical, Civil and more — building the engineers of tomorrow.",
    popularCourses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Civil", "Diploma Engineering"],
    href: "/courses/engineering",
    accentColor: "#147CC1",
    iconBg: "bg-[#147CC1]/15 text-[#147CC1]",
    tag: "bg-[#147CC1]/10 text-[#147CC1]",
    cta: "bg-[#147CC1] text-white hover:bg-[#0e639c]",
    stats: [
      { label: "Specializations", value: "8+" },
      { label: "Companies", value: "50+" },
    ],
    featured: false,
  },
  {
    id: "graduation",
    icon: GraduationCap,
    label: "Graduation & Management",
    shortLabel: "Commerce & IT",
    description:
      "BCA, BBA, B.Com and other graduation programs for students looking for versatile and promising careers.",
    popularCourses: ["BCA", "BBA", "B.Com", "BA Programs"],
    href: "/courses/graduation",
    accentColor: "#F36C21",
    iconBg: "bg-[#F36C21]/15 text-[#F36C21]",
    tag: "bg-[#F36C21]/10 text-[#F36C21]",
    cta: "bg-[#F36C21] text-white hover:bg-[#d45610]",
    stats: [
      { label: "Programs", value: "12+" },
      { label: "Universities", value: "25+" },
    ],
    featured: false,
  },
];

export default function CourseCategories() {
  const { openModal } = useCounsellingModal();

  return (
    <Box
      component="section"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      aria-labelledby="categories-heading"
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="What We Cover"
          title="Course Categories"
          description="We help students find the right program across three major streams. Whether you want to work in healthcare, technology, or business — we have options for you."
          id="categories-heading"
          className="mb-12 lg:mb-16 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <div key={cat.id} className="h-full group">
                <Card
                  elevation={0}
                  className="relative flex flex-col justify-between h-full overflow-hidden bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="h-1.5 w-full flex-shrink-0" style={{ backgroundColor: cat.accentColor }} />

                  <div className="p-6 flex flex-col flex-1 relative z-10 justify-between space-y-5">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className={`w-13 h-13 rounded-xl flex items-center justify-center ${cat.iconBg}`}>
                          <Icon size={24} />
                        </div>

                        <div className="flex items-center gap-2">
                          {cat.featured && (
                            <span className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[#F97316] to-[#ea6c0c] rounded-full shadow-xs text-[10px] font-extrabold text-white">
                              <Sparkles size={11} />
                              Popular
                            </span>
                          )}
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold ${cat.tag}`}>
                            {cat.shortLabel}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#04164B] mb-2 leading-tight group-hover:text-[#B30F66] transition-colors">
                        {cat.label}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                        {cat.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {cat.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2.5 text-center shadow-2xs"
                          >
                            <div className="text-sm font-extrabold" style={{ color: cat.accentColor }}>
                              {stat.value}
                            </div>
                            <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <p className="text-[10px] font-extrabold text-[#94A3B8] uppercase tracking-wider mb-2">
                          Popular Courses
                        </p>
                        <ul className="space-y-1.5">
                          {cat.popularCourses.map((course) => (
                            <li
                              key={course}
                              className="flex items-center gap-2 text-xs font-semibold text-[#04164B]"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: cat.accentColor }}
                              />
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E2E8F0]">
                      <Link
                        href={cat.href}
                        className={`w-full flex items-center justify-center gap-2 py-3 text-xs font-extrabold rounded-xl shadow-md transition-all duration-200 ${cat.cta}`}
                      >
                        <span>Explore Courses</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <div
            onClick={() => openModal()}
            className="inline-flex flex-wrap items-center justify-center gap-3 bg-white border border-[#E2E8F0] rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold text-[#04164B]">
                15,000+ Students
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#475569]">have found their path with CollegeSure</span>
            <span className="text-[#B30F66] font-bold text-xs flex items-center gap-1">
              Get Counselling <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Container>
    </Box>
  );
}