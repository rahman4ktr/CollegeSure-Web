"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card3DTilt from "@/components/ui/Card3DTilt";
import Badge from "@/components/ui/Badge";
import {
  MessageCircle,
  Phone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  BookOpen,
  GraduationCap,
  Award,
  DollarSign,
  ChevronDown,
  UserCheck,
  Send,
  HelpCircle,
  Zap,
  Lock,
  MessageSquare
} from "lucide-react";

// WhatsApp Link & Phone Constants
const PHONE_NUMBER = "+91 79798 64304";
const PHONE_HREF = "tel:+917979864304";
const WA_HREF =
  "https://wa.me/917979864304?text=Hello%20CollegeSure%2C%20I%20would%20like%20free%20counselling%20regarding%20my%20college%20admissions.";

export default function FreeCounsellingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "Medical & Paramedical",
    preferredContact: "WhatsApp",
    helpNote: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeChip, setActiveChip] = useState<string | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChipClick = (chipName: string) => {
    setActiveChip(chipName);
    setFormData((prev) => ({
      ...prev,
      helpNote: `Interested in: ${chipName}`,
    }));
    // Smooth scroll to form
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/send-counselling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          preferredContact: formData.preferredContact,
          message: formData.helpNote,
          sourcePage: "Free Counselling Page",
        }),
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#FDFDFD]">
      {/* ── 1. HERO SECTION — INSTANT SUPPORT FEEL ────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084] pt-8 pb-16 sm:pt-12 sm:pb-24 text-white">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#159447]/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B30F66]/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>FREE COUNSELLING • INSTANT SUPPORT</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Confused About Your Career?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A]">
                  Let’s Figure It Out Together.
                </span>
              </h1>

              {/* Supporting text */}
              <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium">
                Get free, personalized guidance from our counsellors about courses, careers, admissions, fees, and your next step.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B30F66] hover:bg-[#591084] text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-[#B30F66]/30 transition-all duration-300 hover:scale-[1.03] text-base"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Talk to a Counsellor</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-4 rounded-2xl shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-[1.03] text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-white/80 border-t border-white/15">
                {[
                  "Free Consultation",
                  "No Obligation",
                  "Quick Response (<2m)",
                  "100% Human Support",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-center lg:justify-start gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content: Floating Counselling Support Card */}
            <div className="lg:col-span-5">
              <Card3DTilt
                maxTilt={6}
                glowColor="rgba(179, 15, 102, 0.25)"
                className="w-full"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 text-[#04164B] shadow-2xl border border-white/50 relative overflow-hidden">
                  {/* Floating Ambience */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B30F66]/10 to-transparent rounded-bl-full pointer-events-none" />

                  {/* Header Status */}
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#04164B] to-[#B30F66] flex items-center justify-center text-white font-bold text-lg shadow-md">
                          🎓
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base text-[#04164B]">
                          Counsellor Online
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>Available Now</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Live Support
                    </span>
                  </div>

                  {/* Chat Message Bubble */}
                  <div className="bg-[#FEF2F7] border border-[#B30F66]/20 rounded-2xl p-4 mb-5 relative">
                    <p className="text-sm font-semibold text-[#04164B] leading-relaxed">
                      “Hi! 👋 How can we help you today? Pick a topic below or send us a message!”
                    </p>
                    <span className="text-[10px] text-[#475569] font-medium block mt-2 text-right">
                      Just now • Instant Assistance
                    </span>
                  </div>

                  {/* Quick Action Chips */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      Tap a quick topic:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Course Selection",
                        "Admission Help",
                        "Career Guidance",
                        "Fees & Scholarships",
                        "Talk to Counsellor",
                      ].map((chip) => (
                        <button
                          key={chip}
                          onClick={() => handleChipClick(chip)}
                          className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all duration-200 flex items-center gap-1.5 ${
                            activeChip === chip
                              ? "bg-[#B30F66] text-white border-[#B30F66] shadow-sm"
                              : "bg-[#F8FAFC] text-[#04164B] border-[#E2E8F0] hover:border-[#B30F66]/40 hover:bg-white"
                          }`}
                        >
                          <span>{chip}</span>
                          <ArrowRight className="w-3 h-3 opacity-60" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Indicator */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#475569]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#0D9488]">
                      <Zap className="w-4 h-4 text-emerald-500 fill-emerald-500 animate-bounce" />
                      <span>Average response: &lt; 2 min</span>
                    </div>
                    <span className="text-[10px] text-[#94A3B8]">100% Free</span>
                  </div>
                </div>
              </Card3DTilt>
            </div>
          </div>
        </Container>

        {/* Bottom Curve Divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-[#FDFDFD]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 0 100%)",
          }}
          aria-hidden
        />
      </section>

      {/* ── 5. LIVE SUPPORT STATUS BAR ────────────────────────────────────── */}
      <section className="bg-emerald-50/80 border-y border-emerald-200/60 py-3.5 sticky top-20 z-30 backdrop-blur-md shadow-sm">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-emerald-950">
                Counsellors Online
              </span>
              <span className="hidden sm:inline text-emerald-700">•</span>
              <span className="text-xs text-emerald-800 font-medium">
                Usually replies within 2 minutes
              </span>
            </div>

            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors bg-white px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-sm"
            >
              <span>Start Chat Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </Container>
      </section>

      {/* ── 2. INSTANT SUPPORT EXPERIENCE ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="Direct Assistance"
              title="Get Answers Without Waiting."
              description="Choose your inquiry topic below for instant, focused guidance from our counsellors."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "Ask About Courses",
                desc: "Not sure which course is right for you? Compare medical, engineering & graduation options.",
                cta: "Ask Now →",
                icon: BookOpen,
                color: "#159447",
                bg: "#DCFCE7",
              },
              {
                title: "Admission Support",
                desc: "Need help with eligibility, required documents, or college admission procedures?",
                cta: "Get Help →",
                icon: GraduationCap,
                color: "#0284C7",
                bg: "#E0F2FE",
              },
              {
                title: "Career Guidance",
                desc: "Understand your future career options, salary potential, and scope before deciding.",
                cta: "Talk to an Expert →",
                icon: Award,
                color: "#B30F66",
                bg: "#FEE8F5",
              },
              {
                title: "Fees & Scholarships",
                desc: "Get clear, transparent information about college fee structures and financial aid.",
                cta: "Ask About Fees →",
                icon: DollarSign,
                color: "#D97706",
                bg: "#FEF3C7",
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={idx * 0.08} direction="up">
                  <div
                    onClick={() => handleChipClick(card.title)}
                    className="group relative bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
                  >
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: card.bg, color: card.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[#04164B] mb-2 group-hover:text-[#B30F66] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                      <span
                        className="text-xs font-extrabold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                        style={{ color: card.color }}
                      >
                        {card.cta}
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 3 & 4. QUICK COUNSELLING FORM & INSTANT SUCCESS STATE ───────────── */}
      <section ref={formRef} className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] relative">
        <Container narrow>
          <ScrollReveal direction="up">
            <div className="bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] p-6 sm:p-10 relative overflow-hidden">
              {/* Decorative Accent Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#B30F66]/10 via-[#04164B]/5 to-transparent rounded-bl-full pointer-events-none" />

              {!isSubmitted ? (
                <div>
                  <div className="text-center max-w-xl mx-auto mb-8">
                    <Badge variant="teal" size="sm" className="mb-3" icon={<Sparkles size={12} />}>
                      Fast &amp; 100% Free
                    </Badge>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#04164B] tracking-tight mb-3">
                      Start Your Free Counselling
                    </h2>
                    <p className="text-sm sm:text-base text-[#475569]">
                      Tell us a little about yourself. Our team will get back to you quickly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#04164B] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/20 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-[#04164B] uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/20 text-sm outline-none transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-[#04164B] uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/20 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Interested Course */}
                      <div>
                        <label className="block text-xs font-bold text-[#04164B] uppercase tracking-wider mb-1.5">
                          Interested Course Segment
                        </label>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/20 text-sm outline-none transition-all bg-white"
                        >
                          <option>Medical & Paramedical</option>
                          <option>Engineering (B.Tech / M.Tech)</option>
                          <option>Graduation (BCA / BBA / B.Com / BA)</option>
                          <option>Diploma & Special Courses</option>
                        </select>
                      </div>

                      {/* Preferred Contact Method */}
                      <div>
                        <label className="block text-xs font-bold text-[#04164B] uppercase tracking-wider mb-1.5">
                          Preferred Contact Method
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {["WhatsApp", "Phone Call", "Email"].map((method) => (
                            <button
                              type="button"
                              key={method}
                              onClick={() => setFormData({ ...formData, preferredContact: method })}
                              className={`py-3 px-2 text-xs font-bold rounded-xl border text-center transition-all ${
                                formData.preferredContact === method
                                  ? "bg-[#04164B] text-white border-[#04164B]"
                                  : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#04164B]/30"
                              }`}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Optional Note */}
                    <div>
                      <label className="block text-xs font-bold text-[#04164B] uppercase tracking-wider mb-1.5">
                        What would you like help with? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us any specific questions about college fees, eligibility, or course selection..."
                        value={formData.helpNote}
                        onChange={(e) => setFormData({ ...formData, helpNote: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/20 text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#B30F66] hover:bg-[#591084] text-white font-extrabold py-4 rounded-xl shadow-xl shadow-[#B30F66]/25 transition-all text-base hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Connecting to Counsellor...</span>
                      ) : (
                        <>
                          <span>Get Free Counselling</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-[#94A3B8] font-medium flex items-center justify-center gap-1.5 pt-2">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Your information is safe and will only be used to contact you regarding counselling.</span>
                    </p>
                  </form>
                </div>
              ) : (
                /* ── 4. INSTANT SUCCESS STATE ────────────────────────────────── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 sm:py-8 space-y-6"
                >
                  {/* Animated Success Checkmark */}
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-[#04164B] tracking-tight mb-2">
                      You’re All Set! 🎉
                    </h3>
                    <p className="text-base text-[#475569] font-medium max-w-md mx-auto">
                      Your counselling request has been received. Our expert team is processing it right now.
                    </p>
                  </div>

                  {/* Live Status Container */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-md mx-auto inline-flex items-center gap-3">
                    <span className="relative flex h-3 w-3 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <div className="text-left">
                      <p className="text-xs font-bold text-emerald-950">
                        Our counselling team is available
                      </p>
                      <p className="text-xs text-emerald-700">
                        Expected response: within a few minutes
                      </p>
                    </div>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
                    <a
                      href={WA_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                    <a
                      href={PHONE_HREF}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#04164B] hover:bg-[#040943] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#0D9488] hover:underline font-bold pt-4 inline-block"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              )}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 6. HOW COUNSELLING WORKS ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="Simple 3-Step Process"
              title="How Counselling Works"
              description="Getting expert guidance for your future is fast, simple, and completely free."
              align="center"
            />
          </ScrollReveal>

          <div className="relative mt-16">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#159447] via-[#B30F66] to-[#F7D51A] -translate-y-8 pointer-events-none z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Tell Us What You Need",
                  desc: "Share your course, admission or career question via form or WhatsApp.",
                  icon: "🎯",
                },
                {
                  step: "02",
                  title: "Talk With a Counsellor",
                  desc: "Connect directly with our experienced counselling team via call or chat.",
                  icon: "💬",
                },
                {
                  step: "03",
                  title: "Choose With Confidence",
                  desc: "Get personalized guidance, compare college options, and decide your next step.",
                  icon: "🚀",
                },
              ].map((item, idx) => (
                <ScrollReveal key={item.step} delay={idx * 0.1} direction="up">
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 text-center hover:shadow-lg hover:border-[#B30F66]/30 transition-all group h-full">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-xs font-black tracking-widest text-[#B30F66] uppercase">
                      Step {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-[#04164B] mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. ACCORDION FAQ SECTION ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <Container narrow>
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="Got Questions?"
              title="Frequently Asked Questions"
              description="Here are clear answers to common questions about our free counselling service."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Is counselling really free?",
                a: "Yes, 100% free! We do not charge students any fees for counselling, course selection advice, or admission guidance.",
              },
              {
                q: "How quickly will someone contact me?",
                a: "Our counsellors respond almost instantly during operational hours (usually within 2 minutes via WhatsApp or phone call).",
              },
              {
                q: "Can I ask about different courses?",
                a: "Absolutely! You can ask about Medical, Paramedical, Engineering, B.Tech, BCA, BBA, Nursing, and Graduation courses.",
              },
              {
                q: "Can I get career guidance?",
                a: "Yes. Our team helps you understand career prospects, job roles, scope, and placement possibilities for each field.",
              },
              {
                q: "Can I ask about fees and scholarships?",
                a: "Yes. We provide complete transparent details on tuition fees, hostel charges, scholarship schemes, and installment options.",
              },
              {
                q: "Can I talk through WhatsApp?",
                a: "Yes! Simply click any WhatsApp button on this page to chat instantly with an online counsellor.",
              },
              {
                q: "Do I need to take admission after counselling?",
                a: "No pressure at all! Counselling is strictly informational to help you make informed decisions.",
              },
            ].map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} direction="up">
                <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left font-bold text-[#04164B] flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B30F66] transition-transform duration-300 flex-shrink-0 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0]/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. FINAL CTA SECTION — COMPACT ATTRACTIVE (~200px HEIGHT) ─────── */}
      <section className="relative py-8 sm:py-10 bg-gradient-to-r from-[#04164B] via-[#040943] to-[#591084] text-white overflow-hidden shadow-2xl border-t border-white/10">
        {/* Ambient Glow Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-64 h-64 rounded-full bg-[#159447]/25 blur-3xl" />
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 rounded-full bg-[#B30F66]/25 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Info */}
            <div className="text-center lg:text-left space-y-2 max-w-xl">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                Your Next Step Starts With One Conversation.
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-medium">
                Don&apos;t guess your future. Get clear guidance from our counselling team — completely free.
              </p>

              {/* Micro badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2 text-[11px] font-semibold text-white/90">
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Counsellors available
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/15 text-amber-300">
                  ⚡ Fast response
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/15 text-pink-300">
                  ₹0 Free counselling
                </span>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <button
                onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B30F66] hover:bg-[#591084] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-[#B30F66]/30 transition-all hover:scale-105 text-sm cursor-pointer"
              >
                <span>Talk to a Counsellor</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 9. STICKY MOBILE BOTTOM CTA BAR ───────────────────────────────── */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#04164B]/95 backdrop-blur-lg border-t border-white/20 p-3 shadow-2xl">
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-between bg-[#B30F66] text-white font-extrabold px-5 py-3 rounded-xl shadow-lg text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Counsellor Online</span>
          </div>
          <span className="flex items-center gap-1">
            Talk Now <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </div>
  );
}
