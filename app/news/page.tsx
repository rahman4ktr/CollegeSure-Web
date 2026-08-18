import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { getNews } from "@/lib/resolvers";
import EmptyStatePage from "@/components/ui/EmptyStatePage";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { Sparkles, Newspaper, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Box, Card, Typography } from "@mui/material";

export const revalidate = 1800; // ISR 30 mins

export const metadata: Metadata = generatePageMetadata(
  "College Admissions News & Announcements — CollegeSure",
  "Stay updated with the latest college admission news, entrance exam updates, notification releases, and educational announcements.",
  "/news"
);

export default async function NewsListingPage() {
  const newsItems = await getNews();

  const newsGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema(
      "/news",
      "College Admissions News & Announcements — CollegeSure",
      "Stay updated with the latest college admission news and updates.",
      "WebPage"
    ),
    getBreadcrumbSchema("/news", [
      { name: "Home", url: "/" },
      { name: "News", url: "/news" },
    ]),
  ];

  return (
    <Box className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={newsGraphNodes} />

      {/* Hero Section */}
      <Box className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#B30F66]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#147CC1]/20 blur-3xl animate-ambient-slow-reverse" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#FEF2F7] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white">
              <Sparkles size={13} className="text-[#F7D51A]" />
              Latest Updates
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
              College & Admission{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B30F66] via-[#147CC1] to-[#F7D51A]">
                News
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Verified news, entrance updates, admission notifications, and career announcements for students.
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
          {newsItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => {
                const imgUrl = null;
                const formattedDate = item.publishedAt
                  ? new Date(item.publishedAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "";

                return (
                  <Card
                    key={item._id}
                    elevation={0}
                    className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
                  >
                    {imgUrl ? (
                      <div className="relative h-48 w-full overflow-hidden bg-[#F1F5F9]">
                        <Image
                          src={imgUrl}
                          alt={item.featuredImage?.alt || item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-48 w-full bg-gradient-to-br from-[#04164B] to-[#591084] flex items-center justify-center text-white/30">
                        <Newspaper size={48} />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-[#94A3B8] mb-3">
                        {item.category && (
                          <Badge variant="teal" size="sm">
                            {item.category}
                          </Badge>
                        )}
                        {formattedDate && (
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {formattedDate}
                          </span>
                        )}
                      </div>

                      <Typography variant="h6" className="text-lg font-bold text-[#04164B] group-hover:text-[#B30F66] transition-colors mb-2 line-clamp-2">
                        {item.title}
                      </Typography>

                      {item.excerpt && (
                        <Typography variant="body2" className="text-sm text-[#475569] leading-relaxed line-clamp-3 mb-4 flex-1">
                          {item.excerpt}
                        </Typography>
                      )}

                      <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between mt-auto">
                        {item.author ? (
                          <span className="text-xs text-[#94A3B8] flex items-center gap-1">
                            <User size={12} />
                            {item.author}
                          </span>
                        ) : (
                          <span />
                        )}

                        <Link
                          href={`/news/${item.slug?.current || item._id}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#0D9488] group-hover:text-[#0a7a6f] transition-colors"
                        >
                          Read More
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
              icon={Newspaper}
              title="No News Articles Available"
              description="Check back soon for the latest admission updates, notifications, and educational news."
              actionLabel="Return to Home"
              actionHref="/"
            />
          )}
        </Container>
      </Box>

      <CTASection
        title="Stay Ahead in Your Admission Journey"
        description="Connect with our counsellors to get personalized advice tailored to your goals."
        showButtons={false}
      />
    </Box>
  );
}
