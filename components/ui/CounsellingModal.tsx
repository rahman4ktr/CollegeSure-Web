"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  MessageCircle,
  Zap,
  Lock,
  Sparkles,
  AlertCircle,
} from "lucide-react";

const PHONE_HREF = "tel:+917979864304";
const WA_HREF =
  "https://wa.me/917979864304?text=Hello%20CollegeSure%2C%20I%20have%20a%20question%20regarding%20my%20college%20counselling.";

interface CounsellingModalProps {
  isOpen: boolean;
  defaultTopic?: string;
  onClose: () => void;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const topicChips = [
  "Course Info",
  "Admission Help",
  "Career Guidance",
  "Fees & Scholarships",
  "Placement Info",
];

export default function CounsellingModal({
  isOpen,
  defaultTopic = "Course Information",
  onClose,
}: CounsellingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Form States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIn, setInterestedIn] = useState(defaultTopic);
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Update defaultTopic when modal opens
  useEffect(() => {
    if (defaultTopic) {
      setInterestedIn(defaultTopic);
    }
  }, [defaultTopic, isOpen]);

  // ESC Key & Focus Management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isSubmitting) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => nameInputRef.current?.focus(), 150);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, isSubmitting, onClose]);

  // Real-time Field Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Please enter what you'd like help with.";
    } else if (message.trim().length < 5) {
      newErrors.message = "Message should be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-counselling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          interestedIn,
          message,
          sourcePage: "Counselling Modal",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setSubmitError("Something went wrong while sending message. Please try again.");
    }
  };

  const handleChipSelect = (topic: string) => {
    setInterestedIn(topic);
    if (!message) {
      setMessage(`I need assistance regarding ${topic}.`);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto sm:overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => !isSubmitting && onClose()}
            className="fixed inset-0 bg-[#04164B]/65 backdrop-blur-md"
            aria-hidden
          />

          {/* Compact No-Scroll Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 25 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-white/60 overflow-hidden z-10 my-auto max-h-[96vh] sm:max-h-none flex flex-col"
          >
            {/* Mobile Drag Handle */}
            <div className="sm:hidden w-12 h-1 bg-[#E2E8F0] rounded-full mx-auto my-2 flex-shrink-0" />

            {/* Close Button */}
            <button
              onClick={() => !isSubmitting && onClose()}
              disabled={isSubmitting}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-full text-[#475569] hover:text-[#04164B] hover:bg-[#F8FAFC] transition-colors z-30 disabled:opacity-30 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal Body Container */}
            <div className="overflow-y-auto sm:overflow-visible flex-1">
              {!isSubmitted ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* ── LEFT SIDE — LIVE SUPPORT PANEL ─────────────────── */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084] p-5 sm:p-6 text-white relative overflow-hidden flex flex-col justify-between">
                    {/* Ambient Glow Orbs */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#159447]/20 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B30F66]/20 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 space-y-4">
                      {/* Live Status Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-extrabold text-emerald-300">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span>Counsellor Online • Live</span>
                      </div>

                      {/* Heading */}
                      <div>
                        <h3 id="modal-headline" className="text-xl sm:text-2xl font-extrabold tracking-tight">
                          How can we help you?
                        </h3>
                        <p className="text-xs text-white/80 mt-1.5 leading-relaxed font-medium">
                          Have a question about courses, admissions, fees or your career? Send us a message and our counselling team will assist you instantly.
                        </p>
                      </div>

                      {/* Instant Live Response Claim */}
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 text-xs space-y-0.5">
                        <div className="flex items-center gap-1.5 font-extrabold text-emerald-300 text-xs">
                          <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 animate-bounce" />
                          <span>Average response: &lt; 2 minutes</span>
                        </div>
                        <p className="text-[10px] text-white/70">
                          Active now on Phone &amp; WhatsApp.
                        </p>
                      </div>

                      {/* Support Indicators */}
                      <div className="space-y-2 text-xs font-semibold pt-1">
                        {[
                          { text: "Counsellor Available Now", icon: CheckCircle2, color: "text-emerald-400" },
                          { text: "Instant Response Assistance", icon: Zap, color: "text-amber-300" },
                          { text: "100% FREE Counselling", icon: Sparkles, color: "text-pink-300" },
                          { text: "Your information is secure", icon: Lock, color: "text-emerald-300" },
                        ].map((item) => (
                          <div key={item.text} className="flex items-center gap-2 text-white/90">
                            <item.icon className={`w-3.5 h-3.5 ${item.color} flex-shrink-0`} />
                            <span className="text-xs">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Left Bottom Chat Emblem */}
                    <div className="relative z-10 pt-4 border-t border-white/15 mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#159447] to-[#B30F66] flex items-center justify-center font-black text-xs shadow-md">
                          🎓
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-white">CollegeSure Guidance</p>
                          <p className="text-[10px] text-white/70">Brainzima Institute</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Active
                      </span>
                    </div>
                  </div>

                  {/* ── RIGHT SIDE — COMPACT MESSAGE FORM (NO SCROLL) ───── */}
                  <div className="lg:col-span-7 p-5 sm:p-6 bg-white flex flex-col justify-between">
                    <div>
                      <div className="mb-3">
                        <h4 className="text-lg sm:text-xl font-extrabold text-[#04164B]">
                          Send Us a Message
                        </h4>
                        <p className="text-xs text-[#475569] mt-0.5">
                          Fill in the details below and we&apos;ll get back to you immediately.
                        </p>
                      </div>

                      {/* Quick Interactive Chips */}
                      <div className="mb-3">
                        <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#94A3B8] mb-1">
                          Select Topic:
                        </label>
                        <div className="flex flex-wrap gap-1">
                          {topicChips.map((chip) => (
                            <button
                              type="button"
                              key={chip}
                              onClick={() => handleChipSelect(chip)}
                              className={`text-[10px] font-extrabold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                                interestedIn === chip
                                  ? "bg-[#B30F66] text-white border-[#B30F66] shadow-xs"
                                  : "bg-[#F8FAFC] text-[#04164B] border-[#E2E8F0] hover:border-[#B30F66]/40"
                              }`}
                            >
                              {chip}
                            </button>
                          ))}
                        </div>
                      </div>

                      {submitError && (
                        <div className="mb-3 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                            <span>{submitError}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSubmitError(null)}
                            className="font-bold underline text-xs cursor-pointer"
                          >
                            Try Again
                          </button>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-2.5">
                        {/* 2-Column Grid: Full Name & Phone Number */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {/* Full Name */}
                          <div>
                            <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-0.5">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              ref={nameInputRef}
                              type="text"
                              placeholder="Enter full name"
                              value={fullName}
                              onChange={(e) => {
                                setFullName(e.target.value);
                                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                              }}
                              className={`w-full px-3 py-2 rounded-xl border text-xs outline-none transition-all ${
                                errors.fullName
                                  ? "border-red-400 bg-red-50/40 focus:ring-2 focus:ring-red-200"
                                  : "border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/15 bg-[#F8FAFC]/50"
                              }`}
                            />
                            {errors.fullName && (
                              <p className="text-[10px] font-semibold text-red-600 mt-0.5">
                                {errors.fullName}
                              </p>
                            )}
                          </div>

                          {/* Phone Number */}
                          <div>
                            <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-0.5">
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-1.5">
                              <span className="inline-flex items-center px-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-bold text-[#04164B] flex-shrink-0">
                                🇮🇳 +91
                              </span>
                              <input
                                type="tel"
                                placeholder="Phone number"
                                value={phone}
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                                }}
                                className={`w-full px-3 py-2 rounded-xl border text-xs outline-none transition-all ${
                                  errors.phone
                                    ? "border-red-400 bg-red-50/40 focus:ring-2 focus:ring-red-200"
                                    : "border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/15 bg-[#F8FAFC]/50"
                                }`}
                              />
                            </div>
                            {errors.phone && (
                              <p className="text-[10px] font-semibold text-red-600 mt-0.5">
                                {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* 2-Column Grid: Email & Interested In */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {/* Email */}
                          <div>
                            <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-0.5">
                              Email <span className="text-[10px] text-[#94A3B8] font-normal">(Optional)</span>
                            </label>
                            <input
                              type="email"
                              placeholder="you@example.com"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors({ ...errors, email: undefined });
                              }}
                              className={`w-full px-3 py-2 rounded-xl border text-xs outline-none transition-all ${
                                errors.email
                                  ? "border-red-400 bg-red-50/40 focus:ring-2 focus:ring-red-200"
                                  : "border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/15 bg-[#F8FAFC]/50"
                              }`}
                            />
                            {errors.email && (
                              <p className="text-[10px] font-semibold text-red-600 mt-0.5">
                                {errors.email}
                              </p>
                            )}
                          </div>

                          {/* Interested In Dropdown */}
                          <div>
                            <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-0.5">
                              Interested In <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={interestedIn}
                              onChange={(e) => setInterestedIn(e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/15 bg-[#F8FAFC]/50 text-xs outline-none font-semibold text-[#04164B]"
                            >
                              <option value="Course Information">Course Information</option>
                              <option value="Admission Help">Admission Help</option>
                              <option value="Career Guidance">Career Guidance</option>
                              <option value="Fees & Scholarships">Fees & Scholarships</option>
                              <option value="Placement Info">Placement Info</option>
                              <option value="Other">Other Query</option>
                            </select>
                          </div>
                        </div>

                        {/* Message Textarea */}
                        <div>
                          <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-0.5">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            rows={2}
                            placeholder="Tell us what you'd like help with..."
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                              if (errors.message) setErrors({ ...errors, message: undefined });
                            }}
                            className={`w-full px-3 py-2 rounded-xl border text-xs outline-none transition-all resize-none ${
                              errors.message
                                ? "border-red-400 bg-red-50/40 focus:ring-2 focus:ring-red-200"
                                : "border-[#E2E8F0] focus:border-[#B30F66] focus:ring-2 focus:ring-[#B30F66]/15 bg-[#F8FAFC]/50"
                            }`}
                          />
                          {errors.message && (
                            <p className="text-[10px] font-semibold text-red-600 mt-0.5">
                              {errors.message}
                            </p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#B30F66] hover:bg-[#591084] text-white font-extrabold py-3 rounded-xl shadow-md transition-all text-xs hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>

                    <p className="text-center text-[10px] text-[#94A3B8] pt-2 font-medium flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-600" />
                      <span>🔒 Your information is secure and confidential.</span>
                    </p>
                  </div>
                </div>
              ) : (
                /* ── 5. INSTANT RESPONSE SUCCESS STATE ─────────────────────── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-10 text-center space-y-5 bg-white"
                >
                  {/* Animated Success Checkmark */}
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#04164B] tracking-tight mb-1.5">
                      Message Sent Successfully! 🎉
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] font-medium max-w-md mx-auto leading-relaxed">
                      Thanks for reaching out. Our counselling team has received your message and will respond quickly.
                    </p>
                  </div>

                  {/* Live Status Badge */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 max-w-md mx-auto inline-flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-extrabold text-emerald-950">
                      Counsellor Support Available Now
                    </span>
                  </div>

                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#94A3B8]">
                    Connect with us instantly:
                  </p>

                  {/* Immediate Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
                    <a
                      href={WA_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-5 rounded-xl shadow-md transition-all text-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp →</span>
                    </a>
                    <a
                      href={PHONE_HREF}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#04164B] hover:bg-[#040943] text-white font-extrabold py-3 px-5 rounded-xl shadow-md transition-all text-xs"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now →</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="text-xs font-bold text-[#0D9488] hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                    <span className="text-[#E2E8F0]">•</span>
                    <button
                      onClick={onClose}
                      className="text-xs font-bold text-[#475569] hover:text-[#04164B] cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
