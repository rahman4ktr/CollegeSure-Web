"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Sparkles,
  ArrowRight,
  Shield,
  MessageCircle,
  Phone,
  Zap,
  Users,
} from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: "orange" | "navy";
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTASection({
  title = "Not Sure Which Course or College Is Right for You?",
  description = "Talk to our expert counsellors for 100% free personalized guidance — no pressure, just honest advice.",
  primaryButtonText = "Get Free Counselling",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Chat on WhatsApp",
  secondaryButtonLink = "https://wa.me/917979864304?text=Hi%2C%20I%20need%20admission%20guidance%20from%20CollegeSure",
}: CTASectionProps) {
  const isWhatsApp =
    secondaryButtonLink.startsWith("https://wa.me") ||
    secondaryButtonText.toLowerCase().includes("whatsapp");

  return (
    <section
      className="relative overflow-hidden py-4 sm:py-6 bg-[#FDFDFD]"
      aria-labelledby="cta-heading"
    >
      <Container>
        <ScrollReveal direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#040943] via-[#04164B] to-[#591084] p-6 sm:p-8 text-white shadow-xl min-h-[190px] flex flex-col justify-center">
            {/* Ambient Background Glow */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              aria-hidden
            >
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#B30F66]/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#591084]/30 blur-3xl" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Title + Info + Badges */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#FEF2F7]">
                    <Sparkles size={12} className="text-[#F7D51A]" />
                    Trusted by 15,000+ Students &bull; 92% Success Rate
                  </span>
                </div>

                <h2
                  id="cta-heading"
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight mb-2"
                >
                  {title}
                </h2>

                <p className="text-xs sm:text-sm text-[#FEF2F7]/80 font-medium max-w-xl leading-relaxed mb-3">
                  {description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#FEF2F7]/75 font-medium">
                  <span className="flex items-center gap-1">
                    <Shield size={12} className="text-[#159447]" /> 100% Free Guidance
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} className="text-[#147CC1]" /> No Hidden Fees
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={12} className="text-[#F36C21]" /> Call: +91 79798 64304
                  </span>
                </div>
              </div>

              {/* Right Column: CTA Buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end gap-3 justify-center">
                {/* Primary CTA */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href={primaryButtonLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B30F66] hover:bg-[#591084] text-white font-bold px-6 py-3 rounded-2xl shadow-lg shadow-[#B30F66]/30 text-sm transition-all duration-300"
                  >
                    <Zap size={16} />
                    {primaryButtonText}
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <a
                    href={secondaryButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-5 py-2.5 rounded-2xl text-xs backdrop-blur-md transition-all duration-300"
                  >
                    {isWhatsApp ? (
                      <MessageCircle size={15} className="text-[#25D366]" />
                    ) : (
                      <Phone size={15} />
                    )}
                    {secondaryButtonText}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}