"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle2,
  Send,
  AlertCircle,
  User,
  Phone,
  BookOpen,
  MapPin,
  MessageSquare,
  Sparkles,
  Shield,
  Clock,
  ArrowRight,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitCounsellingForm } from "@/lib/api";
import Button from "@/components/ui/Button";

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

function FormField({
  label,
  error,
  required,
  children,
  id,
  icon: Icon,
  description,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  id: string;
  icon?: any;
  description?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A]"
        >
          {label}
          {required && (
            <span className="text-[#F97316] ml-1" aria-hidden>*</span>
          )}
        </label>
        {description && (
          <span className="text-[10px] text-[#94A3B8]">{description}</span>
        )}
      </div>

      <div
        className={`
          relative transition-all duration-200
          ${error ? 'ring-2 ring-red-400 ring-offset-2 rounded-xl' : ''}
          ${isFocused ? 'ring-2 ring-[#0D9488] ring-offset-2 rounded-xl' : ''}
        `}
      >
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
            <Icon size={16} className="text-[#94A3B8]" />
          </div>
        )}
        {children}
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="text-xs text-red-500 font-medium flex items-center gap-1.5"
            role="alert"
          >
            <AlertCircle size={13} className="flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const inputBase = `
  w-full px-4 py-3 text-sm text-[#0F172A] 
  bg-white border border-[#E2E8F0] 
  rounded-xl placeholder-[#94A3B8] 
  focus:outline-none 
  transition-all duration-200
  disabled:opacity-50 disabled:cursor-not-allowed
  hover:border-[#0D9488]/30
`;

const inputWithIcon = "pl-10";

export default function InquiryForm({
  coursePreselect,
  compact = false,
  variant = "default",
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [formProgress, setFormProgress] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      course: coursePreselect || "",
    },
    mode: "onChange",
  });

  const watchedFields = watch();

  // Calculate form progress
  useEffect(() => {
    const totalFields = 4;
    const filledFields = Object.values(watchedFields).filter(
      (value) => value && value.toString().trim() !== ""
    ).length;
    setFormProgress(Math.min((filledFields / totalFields) * 100, 100));
  }, [watchedFields]);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    setIsTyping(false);
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative text-center py-10 px-6 bg-gradient-to-br from-white to-[#0D9488]/5 rounded-2xl border border-[#0D9488]/20 shadow-xl overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-[#0D9488]/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#0B3C5D]/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10">
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-[#0D9488] to-[#0a7a6f] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <CheckCircle2 size={36} className="text-white" />
          </motion.div>

          <motion.h3
            className="text-2xl font-bold text-[#0B3C5D] mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Thank You! 🎉
          </motion.h3>

          <motion.p
            className="text-[#475569] text-sm leading-relaxed mb-6 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            We have received your enquiry. Our counsellor will reach out to you
            within <span className="font-bold text-[#0D9488]">24 hours</span>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
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
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#1fb858] transition-all shadow-md hover:shadow-lg"
            >
              Chat on WhatsApp
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="College admissions enquiry form"
      className="space-y-5 relative"
    >
      {/* Progress Bar */}
      {!compact && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#94A3B8]">Form Progress</span>
            <span className="text-xs font-bold text-[#0D9488]">{Math.round(formProgress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0D9488] to-[#0B3C5D] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${formProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      )}

      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        {/* Full Name */}
        <FormField
          label="Full Name"
          error={errors.fullName?.message}
          required
          id="inquiry-name"
          icon={User}
          description="As per ID proof"
        >
          <input
            id="inquiry-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={`${inputBase} ${inputWithIcon}`}
            {...register("fullName")}
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
          />
        </FormField>

        {/* Phone */}
        <FormField
          label="WhatsApp / Phone Number"
          error={errors.phone?.message}
          required
          id="inquiry-phone"
          icon={Phone}
          description="We'll WhatsApp you"
        >
          <div className="relative">
            <span className="absolute left-10 top-1/2 -translate-y-1/2 text-sm text-[#475569] font-medium">
              +91
            </span>
            <input
              id="inquiry-phone"
              type="tel"
              autoComplete="tel"
              placeholder="10-digit mobile number"
              className={`${inputBase} ${inputWithIcon} pl-16`}
              maxLength={10}
              {...register("phone")}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
            />
          </div>
        </FormField>
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        {/* Course */}
        <FormField
          label="Course Interested In"
          error={errors.course?.message}
          required
          id="inquiry-course"
          icon={BookOpen}
        >
          <select
            id="inquiry-course"
            className={`${inputBase} ${inputWithIcon} appearance-none cursor-pointer pr-10`}
            {...register("course")}
          >
            <option value="">Select a course…</option>
            {courseOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </FormField>

        {/* City/State */}
        <FormField
          label="City / State"
          error={errors.cityState?.message}
          required
          id="inquiry-city"
          icon={MapPin}
        >
          <input
            id="inquiry-city"
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Bhopal, Madhya Pradesh"
            className={`${inputBase} ${inputWithIcon}`}
            {...register("cityState")}
          />
        </FormField>
      </div>

      {/* Message */}
      <FormField
        label="Message (Optional)"
        error={errors.message?.message}
        id="inquiry-message"
        icon={MessageSquare}
      >
        <textarea
          id="inquiry-message"
          rows={compact ? 3 : 4}
          placeholder="Tell us about your requirements, questions, or anything else…"
          className={`${inputBase} ${inputWithIcon} resize-none min-h-[80px]`}
          {...register("message")}
        />
      </FormField>

      {/* Trust Indicators */}
      {!compact && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 py-2"
        >
          {trustIndicators.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
              <item.icon size={12} className="text-[#0D9488]" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Submit error */}
      <AnimatePresence>
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-start gap-2 p-3.5 bg-red-50 border border-red-200 rounded-xl"
          >
            <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{submitError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          rightIcon={!isSubmitting && <Send size={16} />}
          className="w-full justify-center shadow-lg relative overflow-hidden group"
          disabled={!isValid}
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? 'Sending...' : 'Get Free Counselling'}
            {!isSubmitting && (
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.span>
            )}
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#0B3C5D] via-[#0D9488] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundSize: "200% 100%" }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[10px] text-[#94A3B8] text-center pt-1"
      >
        By submitting, you agree to be contacted by CollegeSure regarding your
        college enquiry. We respect your privacy.
      </motion.p>
    </form>
  );
}