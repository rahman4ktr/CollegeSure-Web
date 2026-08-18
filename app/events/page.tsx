import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { getEvents } from "@/lib/resolvers";
import EmptyStatePage from "@/components/ui/EmptyStatePage";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
  getEventSchema,
} from "@/lib/schema";
import { Sparkles, Calendar, Clock, MapPin, ExternalLink, Ticket } from "lucide-react";
import Image from "next/image";
import { Box, Card, Typography, Button as MuiButton } from "@mui/material";

export const revalidate = 3600;

export const metadata: Metadata = generatePageMetadata(
  "Upcoming Counselling Sessions & Admission Events — CollegeSure",
  "Participate in live college counselling webinars, physical admission expos, and interactive student guidance sessions.",
  "/events"
);

export default async function EventsPage() {
  const events = await getEvents();

  const now = new Date();
  const upcoming = events.filter((e) => new Date(e.date) >= now);
  const past = events.filter((e) => new Date(e.date) < now);

  const eventsGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/events", "Admission Events & Counselling Seminars", "Participate in live counselling webinars and admission expos.", "WebPage"),
    getBreadcrumbSchema("/events", [
      { name: "Home", url: "/" },
      { name: "Events", url: "/events" },
    ]),
    ...events.map(getEventSchema),
  ];

  return (
    <Box className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={eventsGraphNodes} />

      {/* Hero */}
      <Box className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#147CC1]/20 blur-3xl animate-ambient-slow" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-ambient-slow-reverse" />
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#FEF2F7] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white">
              <Sparkles size={13} className="text-[#F7D51A]" />
              Seminars &amp; Expos
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
              Counselling &amp; Admission{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#147CC1] via-[#B30F66] to-[#F7D51A]">
                Events
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Join online webinars, campus tours, and interactive counselling workshops hosted by our expert advisors.
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
          {events.length > 0 ? (
            <div className="space-y-16">
              {/* Upcoming Events */}
              <div>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E2E8F0]">
                  <Ticket size={24} className="text-[#0D9488]" />
                  <h2 className="text-2xl font-bold text-[#04164B]">Upcoming Events</h2>
                </div>

                {upcoming.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {upcoming.map((evt) => (
                      <EventCard key={evt._id} evt={evt} isUpcoming />
                    ))}
                  </div>
                ) : (
                  <p className="text-[#94A3B8] text-sm italic">No upcoming events scheduled right now. Check back soon!</p>
                )}
              </div>

              {/* Past Events */}
              {past.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E2E8F0]">
                    <Calendar size={24} className="text-[#94A3B8]" />
                    <h2 className="text-2xl font-bold text-[#04164B]">Past Events</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-75">
                    {past.map((evt) => (
                      <EventCard key={evt._id} evt={evt} isUpcoming={false} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <EmptyStatePage
              icon={Calendar}
              title="No Events Scheduled"
              description="There are currently no seminars or webinars scheduled. You can request a 1-on-1 session anytime."
              actionLabel="Book 1-on-1 Counselling"
              actionHref="/free-counselling"
            />
          )}
        </Container>
      </Box>

      <CTASection
        title="Can't Wait for an Event?"
        description="Book a free 1-on-1 personal counselling session right away with our expert team."
        showButtons={false}
      />
    </Box>
  );
}

function EventCard({ evt, isUpcoming }: { evt: any; isUpcoming: boolean }) {
  const imgUrl = null;
  const formattedDate = evt.date
    ? new Date(evt.date).toLocaleDateString("en-IN", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <Card
      elevation={0}
      className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
    >
      {imgUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-[#F1F5F9]">
          <Image src={imgUrl} alt={evt.image?.alt || evt.title} fill className="object-cover" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant={isUpcoming ? "teal" : "navy"} size="sm">
            {isUpcoming ? "Upcoming" : "Completed"}
          </Badge>
          {formattedDate && (
            <span className="text-xs text-[#94A3B8] flex items-center gap-1 font-medium">
              <Calendar size={12} />
              {formattedDate}
            </span>
          )}
        </div>

        <Typography variant="h6" className="text-lg font-bold text-[#04164B]">{evt.title}</Typography>

        {evt.description && (
          <Typography variant="body2" className="text-sm text-[#475569] leading-relaxed line-clamp-3">{evt.description}</Typography>
        )}

        <div className="space-y-1.5 pt-2 text-xs text-[#475569]">
          {evt.startTime && (
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#0D9488]" />
              <span>{evt.startTime} {evt.endTime ? `- ${evt.endTime}` : ""}</span>
            </div>
          )}
          {evt.location && (
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#F36C21]" />
              <span>{evt.location}</span>
            </div>
          )}
        </div>

        {isUpcoming && evt.registrationLink && (
          <div className="pt-4 border-t border-[#E2E8F0] mt-auto">
            <MuiButton
              component="a"
              href={evt.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              variant="contained"
              endIcon={<ExternalLink size={14} />}
              sx={{
                backgroundColor: "#B30F66",
                "&:hover": { backgroundColor: "#591084" },
                borderRadius: "12px",
                py: 1.2,
                fontSize: "12px",
                fontWeight: 800,
                textTransform: "none",
                boxShadow: "0 4px 14px rgba(179, 15, 102, 0.3)",
              }}
            >
              Register Now
            </MuiButton>
          </div>
        )}
      </div>
    </Card>
  );
}
