import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { getActiveNotices } from "@/lib/resolvers";
import EmptyStatePage from "@/components/ui/EmptyStatePage";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { BellRing, FileText, Download, Calendar, AlertCircle } from "lucide-react";
import { Box, Paper, Typography, Button as MuiButton } from "@mui/material";

export const revalidate = 1800; // ISR 30 mins

export const metadata: Metadata = generatePageMetadata(
  "Official Notices & Circulars — CollegeSure",
  "View official college admission notices, circulars, fee updates, deadlines, and administrative alerts.",
  "/notices"
);

export default async function NoticesPage() {
  const notices = await getActiveNotices();

  const noticesGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema(
      "/notices",
      "Official Notices & Circulars — CollegeSure",
      "View official college admission notices, circulars, and announcements.",
      "WebPage"
    ),
    getBreadcrumbSchema("/notices", [
      { name: "Home", url: "/" },
      { name: "Notices", url: "/notices" },
    ]),
  ];

  return (
    <Box className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={noticesGraphNodes} />

      {/* Hero */}
      <Box className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#F36C21]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-ambient-slow-reverse" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#FEF2F7] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white">
              <BellRing size={13} className="text-[#F7D51A]" />
              Official Circulars
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
              Notices &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] via-[#B30F66] to-[#F7D51A]">
                Announcements
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Official updates regarding deadlines, counselling schedules, document verifications, and college circulars.
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
        <Container narrow>
          {notices.length > 0 ? (
            <div className="space-y-4">
              {notices.map((notice) => {
                const formattedDate = notice.publishedAt
                  ? new Date(notice.publishedAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "";

                return (
                  <Paper
                    key={notice._id}
                    elevation={0}
                    className={`p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md ${
                      notice.important
                        ? "border-amber-400/60 bg-gradient-to-r from-amber-50/40 via-white to-white"
                        : "border-[#E2E8F0] bg-white"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {notice.important && (
                            <Badge variant="orange" size="sm" className="bg-amber-100 text-amber-800 border-amber-300">
                              <AlertCircle size={12} className="mr-1 inline" />
                              Important
                            </Badge>
                          )}
                          {notice.category && (
                            <Badge variant="navy" size="sm">
                              {notice.category}
                            </Badge>
                          )}
                          {formattedDate && (
                            <span className="text-xs text-[#94A3B8] flex items-center gap-1">
                              <Calendar size={12} />
                              {formattedDate}
                            </span>
                          )}
                        </div>

                        <Typography variant="h6" className="text-lg font-bold text-[#04164B]">
                          {notice.title}
                        </Typography>

                        {notice.description && (
                          <Typography variant="body2" className="text-sm text-[#475569] leading-relaxed">
                            {notice.description}
                          </Typography>
                        )}
                      </div>

                      {notice.documentUrl && (
                        <div className="flex-shrink-0">
                          <MuiButton
                            component="a"
                            href={notice.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            startIcon={<Download size={14} />}
                            sx={{
                              backgroundColor: "#04164B",
                              "&:hover": { backgroundColor: "#040943" },
                              borderRadius: "12px",
                              px: 2.5,
                              py: 1,
                              fontSize: "12px",
                              fontWeight: 800,
                              textTransform: "none",
                              boxShadow: "0 2px 8px rgba(4, 22, 75, 0.2)",
                            }}
                          >
                            Download PDF
                          </MuiButton>
                        </div>
                      )}
                    </div>
                  </Paper>
                );
              })}
            </div>
          ) : (
            <EmptyStatePage
              icon={FileText}
              title="No Active Notices"
              description="There are currently no active public notices or circulars. Check back later."
              actionLabel="Return to Home"
              actionHref="/"
            />
          )}
        </Container>
      </Box>

      <CTASection
        title="Have Questions About a Notice?"
        description="Our counsellors can help explain requirements and deadlines for any official circular."
        showButtons={false}
      />
    </Box>
  );
}
