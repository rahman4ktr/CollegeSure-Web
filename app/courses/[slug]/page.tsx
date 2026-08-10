import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Building2,
  Sparkles,
  BookOpen,
  Award,
  Users,
  Star,
  Shield,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  FileText,
  Briefcase,
  School,
} from "lucide-react";
import { getCourseBySlug, getAllSlugs, getRelatedCourses } from "@/lib/data/courses";
import { SITE_URL } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import FAQAccordion from "@/components/sections/FAQ";
import InquiryForm from "@/components/forms/InquiryForm";
import CourseCard from "@/components/cards/CourseCard";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  const title = `${course.name} — Admissions Guidance | CollegeSure`;
  const description = `Get personalized admissions guidance for ${course.name}. Learn about eligibility (${course.eligibility}), duration, career options, and available colleges.`;
  const url = `${SITE_URL}/courses/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    alternates: { canonical: url },
  };
}

const categoryBadge: Record<string, "teal" | "navy" | "orange"> = {
  medical: "teal",
  engineering: "navy",
  graduation: "orange",
};

const categoryColors: Record<string, { bg: string; text: string; border: string; light: string }> = {
  medical: {
    bg: "bg-[#0D9488]",
    text: "text-[#0D9488]",
    border: "border-[#0D9488]/20",
    light: "bg-[#0D9488]/10",
  },
  engineering: {
    bg: "bg-[#3B82F6]",
    text: "text-[#3B82F6]",
    border: "border-[#3B82F6]/20",
    light: "bg-[#3B82F6]/10",
  },
  graduation: {
    bg: "bg-[#F97316]",
    text: "text-[#F97316]",
    border: "border-[#F97316]/20",
    light: "bg-[#F97316]/10",
  },
};

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  const relatedCourses = getRelatedCourses(course.relatedSlugs);
  const colors = categoryColors[course.category] || categoryColors.graduation;

  // Course JSON-LD structured data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "CollegeSure by Brainzima",
      sameAs: SITE_URL,
    },
    educationalLevel: "Undergraduate",
    timeRequired: course.duration,
    url: `${SITE_URL}/courses/${course.slug}`,
  };

  return (
    <div className="relative overflow-hidden bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B3C5D] via-[#082d45] to-[#1a5276] pt-8 pb-16 sm:pt-12 sm:pb-20">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/15 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F97316]/10 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <ScrollReveal direction="down" distance={20}>
            <Breadcrumbs
              items={[
                { label: "Courses", href: "/courses" },
                {
                  label: course.categoryLabel,
                  href: `/courses/${course.category}`,
                },
                { label: course.name },
              ]}
              className="text-white/70 [&>span]:text-white/40"
            />
          </ScrollReveal>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <ScrollReveal direction="left" className="flex-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant={categoryBadge[course.category]}
                    icon={<Sparkles size={12} />}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
                  >
                    {course.categoryLabel}
                  </Badge>
                  <Badge variant="teal" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <Clock size={10} className="mr-1" />
                    {course.duration}
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
                  {course.name}
                </h1>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl">
                  {course.description}
                </p>

                {/* Quick Stats - Enhanced */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 text-sm text-white/90 font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    <GraduationCap size={16} className="text-[#0D9488]" />
                    {course.eligibility}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90 font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    <MapPin size={16} className="text-[#F97316]" />
                    {course.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90 font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    <Building2 size={16} className="text-[#3B82F6]" />
                    {course.availableColleges.length} Colleges
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Action Buttons */}
            <ScrollReveal direction="right" className="flex-shrink-0">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href={`/contact?course=${encodeURIComponent(course.name)}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0D9488] to-[#0a7a6f] hover:from-[#0a7a6f] hover:to-[#086b61] text-white font-bold px-8 py-4 rounded-2xl shadow-[0_4px_24px_rgba(13,148,136,0.35)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(13,148,136,0.45)]"
                >
                  <MessageCircle size={18} />
                  <span>Get Free Guidance</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="#inquiry-form"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 transition-all duration-200"
                >
                  <Sparkles size={18} />
                  <span>Ask a Question</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Decorative Shape */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F8FAFC]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Main content */}
      <div className="bg-[#F8FAFC] section-py">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left — Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <ScrollReveal direction="up">
                <section aria-labelledby="overview-heading">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${colors.light} flex items-center justify-center`}>
                      <BookOpen size={20} className={colors.text} />
                    </div>
                    <h2
                      id="overview-heading"
                      className="text-2xl font-bold text-[#0B3C5D]"
                    >
                      Course Overview
                    </h2>
                  </div>
                  <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-300 leading-relaxed text-[#475569]">
                    {course.overview}
                  </div>
                </section>
              </ScrollReveal>

              {/* Eligibility - Enhanced */}
              <ScrollReveal direction="up">
                <section
                  aria-labelledby="eligibility-heading"
                  className={`rounded-2xl p-6 sm:p-8 border ${colors.border} shadow-sm hover:shadow-md transition-shadow duration-300`}
                  style={{ background: `linear-gradient(135deg, ${colors.light} 0%, white 100%)` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${colors.light} flex items-center justify-center`}>
                      <GraduationCap size={20} className={colors.text} />
                    </div>
                    <h2
                      id="eligibility-heading"
                      className="text-xl font-bold text-[#0B3C5D]"
                    >
                      Eligibility Criteria
                    </h2>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/60 rounded-xl border border-[#E2E8F0]">
                    <CheckCircle2
                      size={20}
                      className={`${colors.text} flex-shrink-0 mt-0.5`}
                    />
                    <p className="text-[#0F172A] font-semibold">{course.eligibility}</p>
                  </div>
                </section>
              </ScrollReveal>

              {/* Career Info - Enhanced */}
              <ScrollReveal direction="up">
                <section aria-labelledby="career-heading">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#EC4899]/10 flex items-center justify-center">
                      <TrendingUp size={20} className="text-[#EC4899]" />
                    </div>
                    <h2
                      id="career-heading"
                      className="text-2xl font-bold text-[#0B3C5D]"
                    >
                      Career Opportunities
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.careerInfo.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-md hover:border-[#0D9488]/20 transition-all duration-300 group"
                      >
                        <div className={`w-6 h-6 rounded-lg ${colors.light} ${colors.text} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                          <CheckCircle2 size={14} />
                        </div>
                        <span className="text-[#475569] text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>

              {/* Admission Process - Enhanced Timeline */}
              <ScrollReveal direction="up">
                <section aria-labelledby="admission-steps-heading">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                      <Calendar size={20} className="text-[#F97316]" />
                    </div>
                    <h2
                      id="admission-steps-heading"
                      className="text-2xl font-bold text-[#0B3C5D]"
                    >
                      Admission Process
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {course.admissionProcess.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#0D9488]/20 transition-all duration-300 group"
                      >
                        <div className={`w-9 h-9 rounded-xl ${colors.bg} text-white text-sm font-bold flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                          {i + 1}
                        </div>
                        <p className="text-[#475569] text-sm pt-1 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>

              {/* Available Colleges - Enhanced */}
              <ScrollReveal direction="up">
                <section aria-labelledby="colleges-heading">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                      <School size={20} className="text-[#0D9488]" />
                    </div>
                    <h2
                      id="colleges-heading"
                      className="text-2xl font-bold text-[#0B3C5D]"
                    >
                      Available Colleges
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.availableColleges.map((college, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-xl px-4 py-3.5 hover:shadow-md hover:border-[#0D9488]/20 transition-all duration-300 group"
                      >
                        <div className={`w-8 h-8 rounded-lg ${colors.light} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <Building2 size={14} className={colors.text} />
                        </div>
                        <span className="text-sm font-semibold text-[#475569] group-hover:text-[#0B3C5D] transition-colors">
                          {college}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-white rounded-xl border border-[#E2E8F0] border-dashed">
                    <p className="text-xs text-[#94A3B8] flex items-center gap-2">
                      <Shield size={12} className="text-[#0D9488]" />
                      Contact us for a complete, up-to-date list of available colleges in your preferred location.
                    </p>
                  </div>
                </section>
              </ScrollReveal>

              {/* FAQs */}
              {course.faqs.length > 0 && (
                <ScrollReveal direction="up">
                  <section aria-labelledby="faq-section-heading" className="pt-6">
                    <FAQAccordion
                      faqs={course.faqs}
                      title="Frequently Asked Questions"
                      schema
                    />
                  </section>
                </ScrollReveal>
              )}
            </div>

            {/* Right — Enhanced Sticky Form */}
            <div className="lg:col-span-1" id="inquiry-form">
              <div className="sticky top-24 space-y-6">
                <ScrollReveal direction="right" distance={30}>
                  <Card3DTilt
                    maxTilt={4}
                    glowColor={`${course.category === 'medical' ? 'rgba(13, 148, 136, 0.15)' : course.category === 'engineering' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(249, 115, 22, 0.15)'}`}
                    borderGlowColor="rgba(13, 148, 136, 0.2)"
                    shadowIntensity={0.15}
                    className="rounded-3xl"
                  >
                    <div className="bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] p-6 sm:p-8 relative overflow-hidden">
                      {/* Decorative Elements */}
                      <div className={`absolute top-0 right-0 w-32 h-32 ${colors.light} rounded-bl-full opacity-50`} />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F97316]/5 rounded-tr-full" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-1">
                          <div className={`w-10 h-10 rounded-xl ${colors.light} flex items-center justify-center`}>
                            <MessageCircle size={18} className={colors.text} />
                          </div>
                          <h3 className="text-lg font-bold text-[#0B3C5D]">
                            Enquire Now
                          </h3>
                        </div>
                        <p className="text-sm text-[#475569] mb-5">
                          Get free personalized guidance from our expert counsellors.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex gap-3 mb-5 p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                          <div className="flex items-center gap-1.5 text-xs text-[#475569]">
                            <Shield size={12} className="text-[#0D9488]" />
                            <span>100% Free</span>
                          </div>
                          <div className="w-px h-4 bg-[#E2E8F0]" />
                          <div className="flex items-center gap-1.5 text-xs text-[#475569]">
                            <Users size={12} className="text-[#3B82F6]" />
                            <span>Expert Guidance</span>
                          </div>
                          <div className="w-px h-4 bg-[#E2E8F0]" />
                          <div className="flex items-center gap-1.5 text-xs text-[#475569]">
                            <Star size={12} className="text-[#F97316]" />
                            <span>4.9/5 Rating</span>
                          </div>
                        </div>

                        <div className="border-t border-[#E2E8F0] my-4" />
                        <InquiryForm
                          coursePreselect={course.name}
                          compact
                        />
                      </div>
                    </div>
                  </Card3DTilt>
                </ScrollReveal>

                {/* Quick Contact Cards */}
                <ScrollReveal direction="right" distance={30} delay={0.1}>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+917979864304"
                      className="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#E2E8F0] hover:shadow-md hover:border-[#0D9488]/30 transition-all duration-300 group"
                    >
                      <div className={`w-8 h-8 rounded-lg ${colors.light} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Phone size={14} className={colors.text} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase text-[#94A3B8]">Call</p>
                        <p className="text-xs font-semibold text-[#0B3C5D]">+91 79798 64304</p>
                      </div>
                    </a>
                    <a
                      href="mailto:contact@brainzima.com"
                      className="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#E2E8F0] hover:shadow-md hover:border-[#F97316]/30 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F97316]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail size={14} className="text-[#F97316]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase text-[#94A3B8]">Email</p>
                        <p className="text-xs font-semibold text-[#0B3C5D] truncate">contact@brainzima.com</p>
                      </div>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Related Courses - Enhanced */}
      {relatedCourses.length > 0 && (
        <div className="bg-white section-py border-t border-[#E2E8F0]">
          <Container>
            <ScrollReveal direction="up" distance={20} className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                      <Award size={20} className="text-[#0D9488]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0B3C5D]">
                      Related Courses
                    </h2>
                  </div>
                  <p className="text-sm text-[#94A3B8] ml-13">
                    Explore similar programs that might interest you
                  </p>
                </div>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors group"
                >
                  View All
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {relatedCourses.map((related) => (
                  <StaggerItem key={related.slug}>
                    <CourseCard course={related} />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </Container>
        </div>
      )}

      {/* CTA Section */}
      <ScrollReveal direction="up">
        <CTASection
          title={`Ready to Start Your ${course.name} Journey?`}
          description="Get personalized guidance and secure your seat in the best colleges."
          primaryButtonText="Get Free Counselling"
          primaryButtonLink="/contact"
          secondaryButtonText="Explore All Courses"
          secondaryButtonLink="/courses"
        />
      </ScrollReveal>
    </div>
  );
}