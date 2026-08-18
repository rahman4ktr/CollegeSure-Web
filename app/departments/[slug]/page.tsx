import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";
import CTASection from "@/components/sections/CTASection";
import CourseCard from "@/components/cards/CourseCard";
import { getDepartmentBySlug, getAllDepartmentSlugs } from "@/lib/resolvers";
import { getCollegeSureOrganizationSchema, getCollegeSureWebSiteSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";
import { BookOpen, Users, GraduationCap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllDepartmentSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dept = await getDepartmentBySlug(slug);

  if (!dept) return { title: "Department Not Found" };

  const title = `${dept.name} | CollegeSure`;
  const description = dept.description || `Explore ${dept.name} courses and faculty.`;
  const url = `${SITE_URL}/departments/${slug}`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    alternates: { canonical: url },
  };
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const dept = await getDepartmentBySlug(slug);

  if (!dept) notFound();

  const imgUrl = null;

  const deptGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
  ];

  return (
    <div className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={deptGraphNodes} />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084] text-white py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Departments", href: "/departments" },
              { label: dept.name },
            ]}
            className="text-white/70 [&>span]:text-white/40 mb-4"
          />

          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-4 text-white">
              {dept.name}
            </h1>
            {dept.description && (
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                {dept.description}
              </p>
            )}
          </div>
        </Container>
      </div>

      {/* Body */}
      <div className="bg-[#F8FAFC] section-py">
        <Container>
          {imgUrl && (
            <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden mb-12 bg-[#F1F5F9] shadow-sm">
              <Image src={imgUrl} alt={dept.image?.alt || dept.name} fill className="object-cover" priority />
            </div>
          )}

          {/* Courses Section */}
          {dept.courses && dept.courses.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E2E8F0]">
                <BookOpen size={24} className="text-[#0D9488]" />
                <h2 className="text-2xl font-bold text-[#04164B]">Offered Courses</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {dept.courses.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          )}

          {/* Faculty Section */}
          {dept.faculty && dept.faculty.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E2E8F0]">
                <Users size={24} className="text-[#3B82F6]" />
                <h2 className="text-2xl font-bold text-[#04164B]">Department Faculty</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.faculty.map((member) => {
                  const facultyImg = null;
                  return (
                    <div key={member._id} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#F1F5F9]">
                        {facultyImg ? (
                          <Image src={facultyImg} alt={member.name} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full bg-[#04164B]/10 flex items-center justify-center text-[#04164B]">
                            <Users size={24} />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#04164B] text-base">{member.name}</h3>
                        {member.designation && <p className="text-xs text-[#0D9488] font-semibold">{member.designation}</p>}
                        {member.qualification && <p className="text-xs text-[#94A3B8]">{member.qualification}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link href="/departments" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:underline">
              <ArrowLeft size={16} /> Back to Departments
            </Link>
          </div>
        </Container>
      </div>

      <CTASection
        title={`Interested in ${dept.name}?`}
        description="Get personalized guidance and admission assistance for these programs."
        showButtons={false}
      />
    </div>
  );
}
