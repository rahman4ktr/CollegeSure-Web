"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useCounsellingModal } from "@/components/providers/CounsellingModalProvider";
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
  showButtons?: boolean;
  onPrimaryClick?: () => void;
}

export default function CTASection({
  title = "Not Sure Which Course or College Is Right for You?",
  description = "Talk to our expert counsellors for 100% free personalized guidance — no pressure, just honest advice.",
  primaryButtonText = "Get Free Counselling",
  primaryButtonLink,
  secondaryButtonText = "Chat on WhatsApp",
  secondaryButtonLink = "https://wa.me/917979864304?text=Hi%2C%20I%20need%20admission%20guidance%20from%20CollegeSure",
  showButtons = true,
  onPrimaryClick,
}: CTASectionProps) {
  const { openModal } = useCounsellingModal();

  const isWhatsApp =
    secondaryButtonLink?.startsWith("https://wa.me") ||
    (secondaryButtonText && secondaryButtonText.toLowerCase().includes("whatsapp"));

  const hasButtons = showButtons && Boolean(primaryButtonText || secondaryButtonText);

  const handlePrimaryClick = (e: React.MouseEvent) => {
    if (onPrimaryClick) {
      e.preventDefault();
      onPrimaryClick();
    } else if (!primaryButtonLink || primaryButtonLink === "#") {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <section
      className="relative overflow-hidden py-6 sm:py-8 bg-[#FDFDFD]"
      aria-labelledby="cta-heading"
    >
      <Container>
        <ScrollReveal direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#040943] via-[#04164B] to-[#591084] p-6 sm:p-8 md:p-10 text-white shadow-2xl min-h-[190px] flex flex-col justify-center border border-white/10">
            {/* Ambient Background Glow */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden select-none"
              aria-hidden
            >
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#B30F66]/25 blur-3xl animate-pulse" />
              <div
                className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#591084]/35 blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-60 h-60 rounded-full bg-[#159447]/15 blur-3xl" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
              {/* Left / Main Column: Title + Info + Badges */}
              <div
                className={
                  hasButtons
                    ? "lg:col-span-7"
                    : "lg:col-span-12 text-center flex flex-col items-center"
                }
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-[#FEF2F7] border border-white/15 shadow-sm">
                    <Sparkles size={13} className="text-[#F7D51A]" />
                    Trusted by 15,000+ Students &bull; 92% Success Rate
                  </span>
                </div>

                <h2
                  id="cta-heading"
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight mb-2.5"
                >
                  {title}
                </h2>

                <p
                  className={`text-xs sm:text-sm text-[#FEF2F7]/90 font-medium max-w-xl leading-relaxed mb-4 ${
                    hasButtons ? "" : "mx-auto"
                  }`}
                >
                  {description}
                </p>

                <div
                  className={`flex flex-wrap items-center gap-4 text-xs text-[#FEF2F7]/85 font-medium ${
                    hasButtons ? "" : "justify-center"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Shield size={13} className="text-[#159447]" /> 100% Free Guidance
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={13} className="text-[#38BDF8]" /> No Hidden Fees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone size={13} className="text-[#F97316]" /> Call: +91 79798 64304
                  </span>
                </div>
              </div>

              {/* Right Column: CTA Buttons (Only if hasButtons is true) */}
              {hasButtons && (
                <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end gap-3 justify-center">
                  {/* Primary CTA */}
                  {primaryButtonText && (
                    <motion.div
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto"
                    >
                      {primaryButtonLink && primaryButtonLink !== "#" ? (
                        <Link
                          href={primaryButtonLink}
                          onClick={handlePrimaryClick}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B30F66] hover:bg-[#850b4c] text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-[#B30F66]/40 text-sm transition-all duration-300 border border-white/10"
                        >
                          <Zap size={16} className="text-[#F7D51A]" />
                          {primaryButtonText}
                          <ArrowRight size={15} />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={handlePrimaryClick}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B30F66] hover:bg-[#850b4c] text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-[#B30F66]/40 text-sm transition-all duration-300 border border-white/10 cursor-pointer"
                        >
                          <Zap size={16} className="text-[#F7D51A]" />
                          {primaryButtonText}
                          <ArrowRight size={15} />
                        </button>
                      )}
                    </motion.div>
                  )}

                  {/* Secondary CTA */}
                  {secondaryButtonText && (
                    <motion.div
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto"
                    >
                      <a
                        href={secondaryButtonLink}
                        target={secondaryButtonLink.startsWith("http") ? "_blank" : undefined}
                        rel={secondaryButtonLink.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/25 font-semibold px-5 py-3 rounded-2xl text-xs backdrop-blur-md transition-all duration-300 shadow-sm"
                      >
                        {isWhatsApp ? (
                          <MessageCircle size={16} className="text-[#25D366]" />
                        ) : (
                          <Phone size={16} />
                        )}
                        {secondaryButtonText}
                      </a>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}