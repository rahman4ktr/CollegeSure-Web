"use client";

import { useState, useEffect, useRef } from "react";
import { submitCounsellingForm } from "@/lib/api";
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  MessageCircle,
  Zap,
  Lock,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  Button,
  Chip,
  Alert,
  CircularProgress,
} from "@mui/material";

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

const courseOptions = [
  "Course Information",
  "Admission Help",
  "Career Guidance",
  "Fees & Scholarships",
  "Placement Info",
  "Other",
];

export default function CounsellingModal({
  isOpen,
  defaultTopic = "Course Information",
  onClose,
}: CounsellingModalProps) {
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
    if (defaultTopic && isOpen) {
      setInterestedIn(defaultTopic);
      setMessage((prev) => {
        if (!prev || prev.startsWith("I am interested in admission guidance for") || prev.startsWith("I need assistance regarding")) {
          return `I am interested in admission guidance for ${defaultTopic}.`;
        }
        return prev;
      });
    }
  }, [defaultTopic, isOpen]);

  // Focus Management
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => nameInputRef.current?.focus(), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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
      await submitCounsellingForm({
        fullName,
        phone,
        email,
        interestedIn,
        message,
        sourcePage: "Counselling Modal",
      });

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
    if (!message || message.startsWith("I need assistance regarding")) {
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

  return (
    <Dialog
      open={isOpen}
      onClose={() => !isSubmitting && onClose()}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: { xs: "20px 20px 0 0", sm: "24px" },
            margin: { xs: "auto 0 0 0", sm: "auto" },
            width: { xs: "100%", sm: "calc(100% - 32px)" },
            maxHeight: { xs: "92vh", sm: "90vh" },
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(4, 22, 75, 0.35)",
          },
        },
        backdrop: {
          sx: {
            backgroundColor: "rgba(4, 22, 75, 0.65)",
            backdropFilter: "blur(6px)",
          },
        },
      }}
    >
      <Box className="relative flex flex-col h-full bg-white">
        {/* Mobile Drag Pill */}
        <Box className="sm:hidden w-12 h-1 bg-[#E2E8F0] rounded-full mx-auto my-2 flex-shrink-0" />

        {/* Close Button */}
        <IconButton
          onClick={() => !isSubmitting && onClose()}
          disabled={isSubmitting}
          aria-label="Close modal"
          sx={{
            position: "absolute",
            top: { xs: 10, sm: 14 },
            right: { xs: 10, sm: 14 },
            zIndex: 30,
            color: "#475569",
            backgroundColor: "rgba(248, 250, 252, 0.8)",
            "&:hover": {
              backgroundColor: "#F1F5F9",
              color: "#04164B",
            },
          }}
        >
          <X size={18} />
        </IconButton>

        <DialogContent sx={{ p: 0, display: "flex", flexDirection: "column", overflowY: "auto" }}>
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
                    <span>Counsellor Online &bull; Live</span>
                  </div>

                  {/* Heading */}
                  <div>
                    <Typography variant="h5" className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                      How can we help you?
                    </Typography>
                    <Typography variant="body2" className="text-xs text-white/80 mt-1.5 leading-relaxed font-medium">
                      Have a question about courses, admissions, fees or your career? Send us a message and our counselling team will assist you instantly.
                    </Typography>
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

              {/* ── RIGHT SIDE — MESSAGE FORM ───────────────────────── */}
              <div className="lg:col-span-7 p-5 sm:p-6 bg-white flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <Typography variant="h6" className="text-lg sm:text-xl font-extrabold text-[#04164B]">
                      Send Us a Message
                    </Typography>
                    <Typography variant="body2" className="text-xs text-[#475569] mt-0.5 font-medium">
                      Fill in the details below and we&apos;ll get back to you immediately.
                    </Typography>
                  </div>

                  {/* Quick Interactive Chips */}
                  <div className="mb-4">
                    <Typography variant="caption" className="block text-[10px] font-extrabold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Select Topic / Course:
                    </Typography>
                    <div className="flex flex-wrap gap-1.5">
                      {interestedIn && !topicChips.includes(interestedIn) && (
                        <Chip
                          key={interestedIn}
                          label={`🎯 ${interestedIn}`}
                          size="small"
                          onClick={() => handleChipSelect(interestedIn)}
                          sx={{
                            backgroundColor: "#B30F66",
                            color: "#fff",
                            fontWeight: 800,
                            fontSize: "11px",
                            height: "28px",
                          }}
                        />
                      )}
                      {topicChips.map((chip) => (
                        <Chip
                          key={chip}
                          label={chip}
                          size="small"
                          onClick={() => handleChipSelect(chip)}
                          sx={{
                            backgroundColor: interestedIn === chip ? "#B30F66" : "#F8FAFC",
                            color: interestedIn === chip ? "#fff" : "#04164B",
                            fontWeight: 800,
                            fontSize: "11px",
                            height: "28px",
                            border: "1px solid",
                            borderColor: interestedIn === chip ? "#B30F66" : "#E2E8F0",
                            "&:hover": {
                              backgroundColor: interestedIn === chip ? "#591084" : "#F1F5F9",
                            },
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {submitError && (
                    <Alert severity="error" className="mb-3 text-xs" onClose={() => setSubmitError(null)}>
                      {submitError}
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* 2-Column Grid: Full Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <TextField
                          inputRef={nameInputRef}
                          placeholder="Enter full name"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          error={Boolean(errors.fullName)}
                          helperText={errors.fullName}
                          fullWidth
                          size="small"
                          slotProps={{
                            htmlInput: { style: { fontSize: "12px", padding: "9px 12px" } },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "12px",
                              backgroundColor: "#F8FAFC",
                              "&:hover fieldset": { borderColor: "#B30F66" },
                              "&.Mui-focused fieldset": { borderColor: "#B30F66" },
                            },
                          }}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <TextField
                          placeholder="10-digit number"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          error={Boolean(errors.phone)}
                          helperText={errors.phone}
                          fullWidth
                          size="small"
                          slotProps={{
                            htmlInput: { style: { fontSize: "12px", padding: "9px 12px" } },
                            input: {
                              startAdornment: (
                                <span className="text-xs font-bold text-[#04164B] pr-1.5 flex items-center gap-1 select-none">
                                  🇮🇳 +91
                                </span>
                              ),
                            },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "12px",
                              backgroundColor: "#F8FAFC",
                              "&:hover fieldset": { borderColor: "#B30F66" },
                              "&.Mui-focused fieldset": { borderColor: "#B30F66" },
                            },
                          }}
                        />
                      </div>
                    </div>

                    {/* 2-Column Grid: Email & Interested In */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-1">
                          Email <span className="text-[10px] text-[#94A3B8] font-normal">(Optional)</span>
                        </label>
                        <TextField
                          placeholder="you@example.com"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          error={Boolean(errors.email)}
                          helperText={errors.email}
                          fullWidth
                          size="small"
                          slotProps={{
                            htmlInput: { style: { fontSize: "12px", padding: "9px 12px" } },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "12px",
                              backgroundColor: "#F8FAFC",
                              "&:hover fieldset": { borderColor: "#B30F66" },
                              "&.Mui-focused fieldset": { borderColor: "#B30F66" },
                            },
                          }}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-1">
                          Interested In / Course <span className="text-red-500">*</span>
                        </label>
                        <TextField
                          select
                          value={courseOptions.includes(interestedIn) ? interestedIn : "Other"}
                          onChange={(e) => setInterestedIn(e.target.value)}
                          fullWidth
                          size="small"
                          slotProps={{
                            select: { style: { fontSize: "12px", fontWeight: 700, color: "#04164B", padding: "9px 12px" } },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "12px",
                              backgroundColor: "#F8FAFC",
                              "&:hover fieldset": { borderColor: "#B30F66" },
                              "&.Mui-focused fieldset": { borderColor: "#B30F66" },
                            },
                          }}
                        >
                          {courseOptions.map((opt) => (
                            <MenuItem key={opt} value={opt} style={{ fontSize: "12px" }}>
                              {opt}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#04164B] mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <TextField
                        multiline
                        rows={2}
                        placeholder="Tell us what you'd like help with..."
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                        fullWidth
                        size="small"
                        slotProps={{
                          htmlInput: { style: { fontSize: "12px", padding: "9px 12px" } },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            backgroundColor: "#F8FAFC",
                            "&:hover fieldset": { borderColor: "#B30F66" },
                            "&.Mui-focused fieldset": { borderColor: "#B30F66" },
                          },
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "#B30F66",
                        "&:hover": { backgroundColor: "#591084" },
                        borderRadius: "12px",
                        py: 1.3,
                        fontWeight: 800,
                        fontSize: "13px",
                        textTransform: "none",
                        boxShadow: "0 4px 14px rgba(179, 15, 102, 0.3)",
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <CircularProgress size={16} color="inherit" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send size={14} />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>

                <p className="text-center text-[10px] text-[#94A3B8] pt-3 font-medium flex items-center justify-center gap-1">
                  <Lock size={12} className="text-emerald-600" />
                  <span>🔒 Your information is secure and confidential.</span>
                </p>
              </div>
            </div>
          ) : (
            /* ── SUCCESS STATE ─────────────────────── */
            <div className="p-6 sm:p-10 text-center space-y-5 bg-white">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <Typography variant="h5" className="text-xl sm:text-2xl font-extrabold text-[#04164B] tracking-tight mb-1.5">
                  Message Sent Successfully! 🎉
                </Typography>
                <Typography variant="body2" className="text-xs sm:text-sm text-[#475569] font-medium max-w-md mx-auto leading-relaxed">
                  Thanks for reaching out. Our counselling team has received your message and will respond quickly.
                </Typography>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 max-w-md mx-auto inline-flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-extrabold text-emerald-950">
                  Counsellor Support Available Now
                </span>
              </div>

              <Typography variant="caption" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#94A3B8]">
                Connect with us instantly:
              </Typography>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-5 rounded-xl shadow-md transition-all text-xs"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp &rarr;</span>
                </a>
                <a
                  href={PHONE_HREF}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#04164B] hover:bg-[#040943] text-white font-extrabold py-3 px-5 rounded-xl shadow-md transition-all text-xs"
                >
                  <Phone size={16} />
                  <span>Call Now &rarr;</span>
                </a>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-bold text-[#0D9488] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
                <span className="text-[#E2E8F0]">&bull;</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-bold text-[#475569] hover:text-[#04164B] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Box>
    </Dialog>
  );
}
