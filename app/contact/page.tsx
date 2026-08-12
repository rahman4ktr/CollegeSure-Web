"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/forms/InquiryForm";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Building2,
  Users,
  CheckCircle2,
  Send,
  Calendar
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";
import Button from "@/components/ui/Button";
import Link from "next/link";

// ─── Shared constants ────────────────────────────────────────────────────────
const PHONE = "+91 79798 64304";
const PHONE_HREF = "tel:+917979864304";
const WA_HREF =
  "https://wa.me/917979864304?text=Hello%20Brainzima%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20admissions.";
const EMAIL = "contact@brainzima.com";
const EMAIL_HREF = "mailto:contact@brainzima.com";
const MAPS_HREF =
  "https://www.google.com/maps/search/Brainzima+Innovation+Institute,+Anathalaya+Rd,+near+Bachcha+Hospital,+Katihar,+Bihar+854105";

// WhatsApp SVG icon
function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const quickLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Universities", href: "/universities" },
  { label: "Admission Process", href: "/admission-process" },
  { label: "About Us", href: "/about" },
];

// ─── Contact Card Component ───────────────────────────────────────────────────
function ContactCard({
  icon,
  iconBg,
  iconColor,
  label,
  description,
  detail,
  detailHref,
  actions,
  delay = 0,
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  label: string;
  description: string;
  detail: string;
  detailHref?: string;
  actions: { label: string; href: string; style: string; external?: boolean; icon?: React.ReactNode }[];
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <Card3DTilt glowColor="rgba(13, 148, 136, 0.14)" className="h-full">
        <div className="group relative bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
          {/* Animated Background Gradient */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${iconColor}08, transparent 70%)`
            }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}
              whileHover={{ rotate: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <span className={iconColor}>{icon}</span>
            </motion.div>

            {/* Label */}
            <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-1">
              {label}
            </p>

            {/* Description */}
            <p className="text-sm text-[#475569] leading-relaxed mb-3">{description}</p>

            {/* Detail value */}
            <div className="mb-5 flex-1">
              {detailHref ? (
                <a
                  href={detailHref}
                  className="text-base font-bold text-[#0F172A] hover:text-[#0D9488] transition-colors break-all"
                >
                  {detail}
                </a>
              ) : (
                <p className="text-base font-bold text-[#0F172A] leading-snug">{detail}</p>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {actions.map((action) => (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${action.style}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {action.icon}
                  {action.label}
                  {action.external && <ExternalLink size={11} className="opacity-60" />}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Card3DTilt>
    </ScrollReveal>
  );
}

export default function ContactPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  return (
    <div ref={containerRef}>
      {/* Enhanced Page Header */}
      <motion.div
        className="relative overflow-hidden py-12 sm:py-16 flex items-center bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084]"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl"
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 20, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F7D51A]/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/10 rounded-full"
                initial={{
                  x: (i * 7.31) % 100 + "%",
                  y: (i * 13.97) % 100 + "%",
                }}
                animate={{
                  x: [
                    (i * 7.31) % 100 + "%",
                    ((i * 7.31 + 20) % 100) + "%",
                    ((i * 7.31 + 40) % 100) + "%",
                  ],
                  y: [
                    (i * 13.97) % 100 + "%",
                    ((i * 13.97 + 15) % 100) + "%",
                    ((i * 13.97 + 30) % 100) + "%",
                  ],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        <Container className="relative z-10 py-6 sm:py-8">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center gap-2 text-[#159447] text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-white/10 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
              >
                <Sparkles size={13} className="text-[#F7D51A]" />
                Get in Touch
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#159447]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Let's Start Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                  College Journey
                </span>
              </motion.h1>

              <motion.p
                className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Have questions about college admissions, courses, or eligibility?
                Reach us by phone, WhatsApp, email, or visit our campus in Katihar, Bihar.
              </motion.p>
            </div>
          </ScrollReveal>
        </Container>

        {/* Decorative Shape at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
          }}
          aria-hidden
        />
      </motion.div>

      {/* Trust Badges */}
      <div className="bg-white border-b border-[#E2E8F0] py-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { icon: Shield, text: "100% Free Guidance" },
              { icon: Clock, text: "Quick Response" },
              { icon: Users, text: "Expert Counsellors" },
              { icon: CheckCircle2, text: "Trusted by 15,000+" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2 text-xs text-[#475569]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                <item.icon size={14} className="text-[#0D9488]" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Contact Cards Grid */}
      <div className="bg-white section-py">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            <ContactCard
              icon={<MapPin size={22} />}
              iconBg="bg-[#0B3C5D]/10"
              iconColor="text-[#0B3C5D]"
              label="Visit Our Campus"
              description="Come meet us in person for a detailed counselling session."
              detail="Anathalaya Rd, near Bachcha Hospital, Katihar, Bihar 854105"
              actions={[
                {
                  label: "Get Directions",
                  href: MAPS_HREF,
                  style:
                    "bg-[#0B3C5D] text-white hover:bg-[#082d45] shadow-sm hover:shadow-md",
                  external: true,
                  icon: <MapPin size={13} />,
                },
              ]}
              delay={0}
            />

            <ContactCard
              icon={<Phone size={22} />}
              iconBg="bg-[#0D9488]/10"
              iconColor="text-[#0D9488]"
              label="Call Us Directly"
              description="For admissions, course details, and immediate assistance."
              detail={PHONE}
              detailHref={PHONE_HREF}
              actions={[
                {
                  label: "Call Now",
                  href: PHONE_HREF,
                  style:
                    "bg-[#0D9488] text-white hover:bg-[#0a7a6f] shadow-sm hover:shadow-md",
                  icon: <Phone size={13} />,
                },
                {
                  label: "WhatsApp",
                  href: WA_HREF,
                  style:
                    "bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white hover:border-transparent",
                  external: true,
                  icon: <WhatsAppIcon size={13} />,
                },
              ]}
              delay={0.08}
            />

            <ContactCard
              icon={<Mail size={22} />}
              iconBg="bg-[#F97316]/10"
              iconColor="text-[#F97316]"
              label="Send an Email"
              description="For detailed inquiries, partnerships, or franchise information."
              detail={EMAIL}
              detailHref={EMAIL_HREF}
              actions={[
                {
                  label: "Send Email",
                  href: EMAIL_HREF,
                  style:
                    "bg-[#F97316] text-white hover:bg-[#ea6c0c] shadow-sm hover:shadow-md",
                  icon: <Mail size={13} />,
                },
              ]}
              delay={0.16}
            />

            <ContactCard
              icon={<WhatsAppIcon size={22} />}
              iconBg="bg-[#25D366]/10"
              iconColor="text-[#25D366]"
              label="WhatsApp Us"
              description="For quick queries, course brochures, and instant replies."
              detail="Chat opens with a pre-filled message — just hit Send."
              actions={[
                {
                  label: "Start Chat",
                  href: WA_HREF,
                  style:
                    "bg-[#25D366] text-white hover:bg-[#1fb858] shadow-sm hover:shadow-md",
                  external: true,
                  icon: <WhatsAppIcon size={13} />,
                },
              ]}
              delay={0.24}
            />
          </div>

          {/* Bottom: Map embed + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-[#0B3C5D] rounded-full" />
                  <h2 className="text-2xl font-bold text-[#0B3C5D]">
                    Our Campus Location
                  </h2>
                </div>

                <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md mb-6 hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.784791263712!2d87.5774064!3d25.545544600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39faa9b9b95d06ad%3A0x20dd05b7166b83a3!2sBrainzima%20Innovation%20Institute!5e0!3m2!1sen!2sin!4v1786339808230!5m2!1sen!2sin"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Brainzima Innovation Institute — Google Maps"
                    aria-label="Map showing Brainzima Innovation Institute location in Katihar, Bihar"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] hover:border-[#0D9488]/30 transition-all duration-300">
                    <div className="w-10 h-10 bg-[#0D9488]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[#0D9488]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#94A3B8] font-bold uppercase tracking-wider">Phone</p>
                      <a
                        href={PHONE_HREF}
                        className="text-sm font-bold text-[#0F172A] hover:text-[#0D9488] transition-colors"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] hover:border-[#F97316]/30 transition-all duration-300">
                    <div className="w-10 h-10 bg-[#F97316]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#F97316]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#94A3B8] font-bold uppercase tracking-wider">Email</p>
                      <a
                        href={EMAIL_HREF}
                        className="text-sm font-bold text-[#0F172A] hover:text-[#F97316] transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-4 p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={16} className="text-[#0D9488]" />
                    <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                      Office Hours
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    {officeHours.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span className="text-[#475569]">{item.day}</span>
                        <span className="font-medium text-[#0F172A]">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" id="contact-form">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-[#0D9488] rounded-full" />
                  <h2 className="text-2xl font-bold text-[#0B3C5D]">
                    Send Us an Enquiry
                  </h2>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] p-6 sm:p-8 relative overflow-hidden">
                  {/* Decorative Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0D9488]/5 rounded-full blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F97316]/5 rounded-full blur-2xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E2E8F0]">
                      <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                        <Shield size={18} className="text-[#0D9488]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0B3C5D]">100% Free & Confidential</p>
                        <p className="text-xs text-[#94A3B8]">No pressure, just honest guidance</p>
                      </div>
                    </div>
                    <InquiryForm />
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                    Quick Links
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-sm text-[#475569] hover:text-[#0D9488] transition-colors px-3 py-1.5 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] hover:border-[#0D9488]/30"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </div>
    </div>
  );
}