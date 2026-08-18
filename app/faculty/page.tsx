import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { getFaculty } from "@/lib/resolvers";
import EmptyStatePage from "@/components/ui/EmptyStatePage";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { Sparkles, Users, Mail, GraduationCap, Building2 } from "lucide-react";
import Image from "next/image";
import { Box, Card, Typography, Avatar } from "@mui/material";

export const revalidate = 86400; // ISR 24h

export const metadata: Metadata = generatePageMetadata(
  "Expert Faculty & Academic Advisors — CollegeSure",
  "Meet our team of experienced educationists, department heads, and admission advisors.",
  "/faculty"
);

export default async function FacultyPage() {
  const facultyMembers = await getFaculty();

  const facultyGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/faculty", "Faculty & Academic Advisors", "Meet our team of experienced faculty and admission advisors.", "WebPage"),
    getBreadcrumbSchema("/faculty", [
      { name: "Home", url: "/" },
      { name: "Faculty", url: "/faculty" },
    ]),
  ];

  return (
    <Box className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={facultyGraphNodes} />

      {/* Hero */}
      <Box className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#147CC1]/20 blur-3xl animate-ambient-slow-reverse" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#FEF2F7] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white">
              <Sparkles size={13} className="text-[#F7D51A]" />
              Academic Advisors
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
              Our Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#147CC1] to-[#F7D51A]">
                Faculty &amp; Counsellors
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Experienced educators and guidance counselors dedicated to helping you choose the right path.
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
          {facultyMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {facultyMembers.map((member) => {
                const imgUrl = null;

                return (
                  <Card
                    key={member._id}
                    elevation={0}
                    className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
                  >
                    <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 bg-[#F1F5F9] border-2 border-[#0D9488]/20 group-hover:border-[#0D9488] transition-colors">
                      {imgUrl ? (
                        <Image src={imgUrl} alt={member.profileImage?.alt || member.name} fill className="object-cover" />
                      ) : (
                        <Avatar
                          sx={{
                            width: "100%",
                            height: "100%",
                            bgcolor: "rgba(4, 22, 75, 0.08)",
                            color: "#04164B",
                          }}
                        >
                          <Users size={40} />
                        </Avatar>
                      )}
                    </div>

                    <Typography variant="h6" className="text-lg font-bold text-[#04164B] mb-1">{member.name}</Typography>

                    {member.designation && (
                      <Typography variant="body2" className="text-xs font-semibold text-[#0D9488] mb-2">{member.designation}</Typography>
                    )}

                    {member.department?.name && (
                      <Badge variant="navy" size="sm" className="mb-3">
                        <Building2 size={10} className="mr-1 inline" />
                        {member.department.name}
                      </Badge>
                    )}

                    {member.qualification && (
                      <Typography variant="caption" className="text-xs text-[#94A3B8] flex items-center justify-center gap-1 mb-3">
                        <GraduationCap size={12} />
                        {member.qualification}
                      </Typography>
                    )}

                    {member.bio && (
                      <Typography variant="body2" className="text-sm text-[#475569] leading-relaxed line-clamp-3 mb-4">{member.bio}</Typography>
                    )}

                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="mt-auto inline-flex items-center gap-1.5 text-xs text-[#0D9488] hover:underline font-medium"
                      >
                        <Mail size={12} />
                        {member.email}
                      </a>
                    )}
                  </Card>
                );
              })}
            </div>
          ) : (
            <EmptyStatePage
              icon={Users}
              title="No Faculty Members Listed"
              description="Faculty profiles are currently being updated. Contact our team directly for department guidance."
              actionLabel="Contact Us"
              actionHref="/contact"
            />
          )}
        </Container>
      </Box>

      <CTASection
        title="Want Guidance from Our Faculty?"
        description="Schedule a free session to discuss your academic options and course structure."
        showButtons={false}
      />
    </Box>
  );
}
