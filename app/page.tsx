import Hero from "@/components/sections/Hero";
import UniversityMarquee from "@/components/sections/UniversityMarquee";
import PlacementMarquee from "@/components/sections/PlacementMarquee";
import TrustSection from "@/components/sections/TrustSection";
import CourseCategories from "@/components/sections/CourseCategories";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import AdmissionProcess from "@/components/sections/AdmissionProcess";
import WhyCollegeSure from "@/components/sections/WhyCollegeSure";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import InquiryForm from "@/components/forms/InquiryForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";
import Badge from "@/components/ui/Badge";
import { CheckCircle2, MessageSquare, Sparkles } from "lucide-react";

import JsonLd from "@/components/seo/JsonLd";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
} from "@/lib/schema";

export const metadata = {
  title: "CollegeSure by Brainzima — Honest College Admissions Guidance",
  description: "Find the right Medical, Engineering, and Graduation colleges with 100% transparent guidance, personalized counselling, and complete admission support.",
};

export default function HomePage() {
  const homeGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/", metadata.title, metadata.description),
  ];

  return (
    <div className="relative overflow-hidden bg-white text-[#0F172A] selection:bg-[#0D9488]/20 selection:text-[#0D9488]">
      <JsonLd nodes={homeGraphNodes} />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Metrics Section */}
      <TrustSection />

      {/* 3. Course Categories */}
      <CourseCategories />

      {/* 4. Featured Courses */}
      <FeaturedCourses />

      {/* 5. Admission Process Timeline */}
      <AdmissionProcess />

      {/* 6. Placement Assistance & Top Recruiters Marquee */}
      <PlacementMarquee />

      {/* 6b. Colleges We Work With - University Logo Marquee */}
      <UniversityMarquee />

      {/* 7. Why CollegeSure Comparison */}
      <WhyCollegeSure />

      {/* 8. Testimonials & Student Reviews */}
      <Testimonials />

      {/* 9. Inquiry Form & CTA Section */}
      <section
        className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] section-py relative overflow-hidden"
        aria-labelledby="inquiry-heading"
      >
        {/* Ambient 3D Glow Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#0D9488]/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-10 -left-24 w-96 h-96 rounded-full bg-[#0B3C5D]/10 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Info */}
            <ScrollReveal direction="left" distance={25} duration={0.6}>
              <div>
                <Badge variant="teal" size="sm" className="mb-4" icon={<Sparkles size={12} />}>
                  Get in Touch
                </Badge>

                <h2
                  id="inquiry-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#04164B] leading-tight mb-6 tracking-tight"
                >
                  Ready to Find Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04164B] via-[#B30F66] to-[#591084]">
                    Perfect College?
                  </span>
                </h2>

                <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-8">
                  Fill in your details and our counsellors will reach out to you
                  personally. We&apos;ll understand your goals and guide you to
                  the best options — no pressure, no fake promises.
                </p>

                {/* What to expect */}
                <div className="space-y-4">
                  {[
                    "Personal counsellor assigned to your enquiry",
                    "Transparent information about colleges and fees",
                    "Support through the entire admission process",
                    "Free — no hidden charges for counselling",
                  ].map((item, idx) => (
                    <ScrollReveal key={item} direction="up" delay={idx * 0.08} distance={15} duration={0.4}>
                      <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/80 hover:shadow-sm border border-transparent hover:border-[#E2E8F0] transition-all duration-300">
                        <div className="w-7 h-7 rounded-lg bg-[#FEF2F7] text-[#B30F66] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <CheckCircle2 size={16} />
                        </div>
                        <p className="text-sm text-[#04164B] font-semibold pt-0.5">{item}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — 3D Tilt Form Card */}
            <ScrollReveal direction="right" distance={25} duration={0.6}>
              <Card3DTilt
                maxTilt={4}
                glowColor="rgba(179, 15, 102, 0.12)"
                borderGlowColor="rgba(179, 15, 102, 0.25)"
                shadowIntensity={0.15}
                className="rounded-3xl"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-[#E2E8F0] p-6 sm:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#B30F66]/10 via-[#04164B]/5 to-transparent rounded-bl-full pointer-events-none" />

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#04164B] to-[#B30F66] text-white flex items-center justify-center shadow-md">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#04164B]">
                        Send Us an Enquiry
                      </h3>
                      <p className="text-xs text-[#475569]">
                        We typically respond within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="my-6 border-b border-[#E2E8F0]" />

                  <InquiryForm />
                </div>
              </Card3DTilt>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 10. Final Call to Action (No Buttons) */}
      <CTASection showButtons={false} />
    </div>
  );
}
