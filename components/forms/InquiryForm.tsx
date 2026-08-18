"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle2,
  Send,
  User,
  Phone,
  BookOpen,
  MapPin,
  MessageSquare,
  Sparkles,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import {
  Box,
  TextField,
  MenuItem,
  Button as MuiButton,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import { submitCounsellingForm } from "@/lib/api";
import FeedbackSnackbar from "@/components/ui/FeedbackSnackbar";

const courseOptions = [
  { value: "GNM Nursing", label: "GNM Nursing" },
  { value: "B.Sc Nursing", label: "B.Sc Nursing" },
  { value: "B.Sc Radiology & Imaging Technology", label: "B.Sc Radiology & Imaging Technology" },
  { value: "B.Tech Computer Science Engineering", label: "B.Tech Computer Science Engineering" },
  { value: "B.Tech Mechanical Engineering", label: "B.Tech Mechanical Engineering" },
  { value: "B.Tech Civil Engineering", label: "B.Tech Civil Engineering" },
  { value: "BCA — Bachelor of Computer Applications", label: "BCA — Bachelor of Computer Applications" },
  { value: "BBA — Bachelor of Business Administration", label: "BBA — Bachelor of Business Administration" },
  { value: "B.Com — Bachelor of Commerce", label: "B.Com — Bachelor of Commerce" },
  { value: "Not Sure — Need Guidance", label: "🤔 Not Sure — Need Guidance" },
  { value: "Other", label: "Other" },
];

const schema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Name is too long")
    .regex(/^[a-zA-Z\s]*$/, "Please enter a valid name"),
  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number"
    ),
  course: z.string().min(1, "Please select a course you are interested in"),
  cityState: z
    .string()
    .min(2, "Please enter your city and state")
    .max(100, "Too long"),
  message: z
    .string()
    .max(500, "Message must be under 500 characters")
    .optional(),
});

type FormData = z.infer<typeof schema>;

interface InquiryFormProps {
  coursePreselect?: string;
  compact?: boolean;
  variant?: "default" | "popup" | "sidebar";
}

const trustIndicators = [
  { icon: Shield, text: "100% Free" },
  { icon: Clock, text: "Quick Response" },
  { icon: Sparkles, text: "Expert Guidance" },
];

export default function InquiryForm({
  coursePreselect,
  compact = false,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formProgress, setFormProgress] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      course: coursePreselect || "",
      cityState: "",
      message: "",
    },
    mode: "onChange",
  });

  const watchedFields = watch();

  useEffect(() => {
    const totalFields = 4;
    const filledFields = Object.values(watchedFields).filter(
      (value) => value && value.toString().trim() !== ""
    ).length;
    setFormProgress(Math.min((filledFields / totalFields) * 100, 100));
  }, [watchedFields]);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      await submitCounsellingForm({
        fullName: data.fullName,
        phone: data.phone,
        course: data.course,
        message: `City/State: ${data.cityState}${data.message ? ` | Message: ${data.message}` : ''}`,
        sourcePage: "Contact Inquiry Form",
      });

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );
    }
  };

  if (submitted) {
    return (
      <Box className="relative text-center py-10 px-6 bg-gradient-to-br from-white to-[#0D9488]/5 rounded-2xl border border-[#0D9488]/20 shadow-xl overflow-hidden">
        <div className="relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-[#0D9488] to-[#0a7a6f] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl text-white">
            <CheckCircle2 size={36} />
          </div>

          <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">
            Thank You! 🎉
          </h3>

          <p className="text-[#475569] text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            We have received your enquiry. Our counsellor will reach out to you
            within <span className="font-bold text-[#0D9488]">24 hours</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { setSubmitted(false); reset(); }}
              className="text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors py-2.5 px-6 rounded-xl border border-[#0D9488]/30 hover:bg-[#0D9488]/10"
            >
              Submit Another
            </button>
            <a
              href="https://wa.me/917979864304?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20on%20CollegeSure"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#1fb858] transition-all shadow-md"
            >
              Chat on WhatsApp
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </Box>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="College admissions enquiry form"
      className="space-y-4 relative"
    >
      {!compact && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-[#94A3B8]">Form Progress</span>
            <span className="text-xs font-bold text-[#0D9488]">{Math.round(formProgress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0D9488] to-[#0B3C5D] rounded-full transition-all duration-300"
              style={{ width: `${formProgress}%` }}
            />
          </div>
        </div>
      )}

      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <TextField
          id="inquiry-name"
          label="Full Name"
          placeholder="Your full name"
          fullWidth
          size="medium"
          error={Boolean(errors.fullName)}
          helperText={errors.fullName?.message}
          {...register("fullName")}
          slotProps={{
            input: {
              className: "rounded-xl bg-white",
            },
          }}
        />

        <TextField
          id="inquiry-phone"
          label="WhatsApp / Phone Number"
          placeholder="10-digit mobile number"
          fullWidth
          size="medium"
          error={Boolean(errors.phone)}
          helperText={errors.phone?.message}
          {...register("phone")}
          slotProps={{
            input: {
              className: "rounded-xl bg-white",
            },
          }}
        />
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <Controller
          name="course"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="inquiry-course"
              select
              label="Course Interested In"
              fullWidth
              size="medium"
              error={Boolean(errors.course)}
              helperText={errors.course?.message}
              slotProps={{
                input: {
                  className: "rounded-xl bg-white",
                },
              }}
            >
              <MenuItem value="">Select a course…</MenuItem>
              {courseOptions.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <TextField
          id="inquiry-city"
          label="City / State"
          placeholder="e.g. Bhopal, Madhya Pradesh"
          fullWidth
          size="medium"
          error={Boolean(errors.cityState)}
          helperText={errors.cityState?.message}
          {...register("cityState")}
          slotProps={{
            input: {
              className: "rounded-xl bg-white",
            },
          }}
        />
      </div>

      <TextField
        id="inquiry-message"
        label="Message (Optional)"
        placeholder="Tell us about your requirements, questions, or anything else…"
        fullWidth
        multiline
        rows={compact ? 3 : 4}
        error={Boolean(errors.message)}
        helperText={errors.message?.message}
        {...register("message")}
        slotProps={{
          input: {
            className: "rounded-xl bg-white",
          },
        }}
      />

      {!compact && (
        <div className="flex flex-wrap items-center justify-center gap-4 py-1">
          {trustIndicators.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
              <item.icon size={12} className="text-[#0D9488]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}

      {submitError && (
        <Alert severity="error" className="rounded-xl">
          {submitError}
        </Alert>
      )}

      <MuiButton
        type="submit"
        variant="contained"
        fullWidth
        disabled={!isValid || isSubmitting}
        className="bg-[#B30F66] hover:bg-[#591084] text-white py-3.5 rounded-xl font-bold shadow-lg shadow-[#B30F66]/20 transition-all duration-300"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <CircularProgress size={18} color="inherit" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Get Free Counselling
            <ArrowRight size={16} />
          </span>
        )}
      </MuiButton>

      <p className="text-[10px] text-[#94A3B8] text-center pt-1">
        By submitting, you agree to be contacted by CollegeSure regarding your
        college enquiry. We respect your privacy.
      </p>

      <FeedbackSnackbar
        open={Boolean(submitError)}
        message={submitError || ""}
        severity="error"
        onClose={() => setSubmitError(null)}
      />
    </form>
  );
}