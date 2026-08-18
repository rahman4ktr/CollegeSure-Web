import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { getDepartments } from "@/lib/resolvers";
import EmptyStatePage from "@/components/ui/EmptyStatePage";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { Sparkles, Building2, BookOpen, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Box, Card, Typography } from "@mui/material";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata(
  "Academic Departments — CollegeSure",
  "Explore academic departments across Medical, Engineering, Paramedical, and Management streams.",
  "/departments"
);

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  const deptsGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/departments", "Academic Departments", "Explore academic departments across various streams.", "WebPage"),
    getBreadcrumbSchema("/departments", [
      { name: "Home", url: "/" },
      { name: "Departments", url: "/departments" },
    ]),
  ];

  return (
    <Box className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={deptsGraphNodes} />

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
              Academic Wings
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
              Academic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                Departments
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Discover verified programs, course offerings, and experienced faculty members by department.
            </p>
          </div>
        </Container>

        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-[#F8FAFC]"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)" }}
          aria-hidden
        />
      </Box>

      {/* Main Content */}
      <Box className="bg-[#F8FAFC] section-py">
        <Container>
          {departments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept) => {
                const imgUrl = null;

                return (
                  <Card
                    key={dept._id}
                    elevation={0}
                    className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
                  >
                    {imgUrl ? (
                      <div className="relative h-48 w-full overflow-hidden bg-[#F1F5F9]">
                        <Image src={imgUrl} alt={dept.image?.alt || dept.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    ) : (
                      <div className="h-48 w-full bg-gradient-to-br from-[#04164B] to-[#591084] flex items-center justify-center text-white/30">
                        <Building2 size={48} />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <Typography variant="h6" className="text-xl font-bold text-[#04164B] group-hover:text-[#0D9488] transition-colors mb-2">
                        {dept.name}
                      </Typography>

                      {dept.description && (
                        <Typography variant="body2" className="text-sm text-[#475569] leading-relaxed line-clamp-3 mb-6 flex-1">
                          {dept.description}
                        </Typography>
                      )}

                      <div className="flex items-center gap-4 text-xs font-semibold text-[#94A3B8] mb-4">
                        {typeof dept.courseCount === 'number' && (
                          <span className="flex items-center gap-1">
                            <BookOpen size={14} className="text-[#0D9488]" />
                            {dept.courseCount} Courses
                          </span>
                        )}
                        {typeof dept.facultyCount === 'number' && (
                          <span className="flex items-center gap-1">
                            <Users size={14} className="text-[#3B82F6]" />
                            {dept.facultyCount} Faculty
                          </span>
                        )}
                      </div>

                      <div className="pt-4 border-t border-[#E2E8F0] mt-auto">
                        <Link
                          href={`/departments/${dept.slug?.current || dept._id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D9488] group-hover:text-[#0a7a6f] transition-colors"
                        >
                          Explore Department
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <EmptyStatePage
              icon={Building2}
              title="No Departments Found"
              description="Department listings are currently being updated."
              actionLabel="Explore Courses Instead"
              actionHref="/courses"
            />
          )}
        </Container>
      </Box>

      <CTASection
        title="Need Help Selecting the Right Department?"
        description="Connect with our experts to find the right degree program for your career goals."
        showButtons={false}
      />
    </Box>
  );
}
