"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  Shield,
  Award,
  Users,
  Clock,
  MessageCircle,
  Phone,
  Zap
} from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: "orange" | "navy";
}

const stats = [
  { label: "Students Helped", value: "15,000+", icon: Users },
  { label: "Success Rate", value: "92%", icon: Award },
  { label: "Response Time", value: "< 24 hrs", icon: Clock },
];

export default function CTASection({
  title = "Not Sure Which Course or College Is Right for You?",
  description = "Talk to our counsellors and get personalized guidance — completely free. No pressure, just honest advice.",
  variant = "navy",
}: CTASectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isNavy = variant === "navy";
  const gradientFrom = isNavy ? "#0B3C5D" : "#F97316";
  const gradientTo = isNavy ? "#082d45" : "#ea6c0c";
  const accentColor = isNavy ? "#0D9488" : "#FFFFFF";

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-20 lg:py-28 ${isNavy
          ? "bg-gradient-to-br from-[#0B3C5D] via-[#082d45] to-[#1a5276]"
          : "bg-gradient-to-br from-[#F97316] to-[#ea6c0c]"
        }`}
      aria-labelledby="cta-heading"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {/* Animated Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/5 blur-3xl"
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

        {/* Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
              <circle cx="40" cy="40" r="1" fill="white" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Decorative Shapes */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-16 h-16 border-2 border-white/10 rounded-full" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 hidden lg:block"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-12 h-12 border-2 border-white/10 rounded-full" />
        </motion.div>
      </div>

      <Container narrow>
        <div className="relative">
          {/* Stats Row */}
          <ScrollReveal direction="up" delay={0.1}>
            <motion.div
              className="grid grid-cols-3 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-3 text-center"
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    backgroundColor: 'rgba(255,255,255,0.15)',
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <stat.icon size={16} className="text-white/60 mx-auto mb-1" />
                  <div className="text-sm font-bold text-white">{stat.value}</div>
                  <div className="text-[9px] text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <div className="relative text-center">
              {/* Glow behind title */}
              <motion.div
                className="absolute -inset-20 blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: isNavy ? '#0D9488' : '#FFFFFF',
                }}
              />

              <div className="relative">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Sparkles size={14} className="text-white" />
                  <span className="text-xs font-medium text-white/80">Trusted by 15,000+ Students</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  id="cta-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {title}
                </motion.h2>

                {/* Description with highlight */}
                <motion.p
                  className="text-base sm:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {description}
                </motion.p>

                {/* Trust indicators */}
                <motion.div
                  className="flex flex-wrap items-center justify-center gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {['100% Free', 'No Pressure', 'Expert Guidance'].map((text, i) => (
                    <motion.div
                      key={text}
                      className="flex items-center gap-1.5 text-xs text-white/60"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 400 }}
                    >
                      <Shield size={12} className="text-white/40" />
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {/* Primary CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href="/contact"
                      className={`
                        inline-flex items-center justify-center gap-2 
                        ${isNavy ? 'bg-[#0D9488] hover:bg-[#0a7a6f]' : 'bg-white hover:bg-white/90'}
                        ${isNavy ? 'text-white' : 'text-[#0B3C5D]'}
                        font-semibold px-8 py-4 rounded-2xl 
                        shadow-[0_4px_20px_rgba(13,148,136,0.4)] hover:shadow-[0_6px_28px_rgba(13,148,136,0.5)]
                        transition-all duration-300 text-base w-full sm:w-auto
                        relative overflow-hidden group
                      `}
                      aria-label="Get free college admissions counselling"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Zap size={18} />
                        Get Free Counselling
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight size={16} />
                        </motion.span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </Link>
                  </motion.div>

                  {/* WhatsApp CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-full sm:w-auto"
                  >
                    <a
                      href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20admission%20guidance%20from%20CollegeSure"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        inline-flex items-center justify-center gap-2.5 
                        bg-white/10 hover:bg-white/20 
                        text-white font-semibold px-8 py-4 rounded-2xl 
                        border border-white/20 hover:border-white/40 
                        transition-all duration-300 text-base w-full sm:w-auto 
                        backdrop-blur-sm relative overflow-hidden group
                      `}
                      aria-label="Chat with CollegeSure on WhatsApp"
                    >
                      <span className="relative z-10 flex items-center gap-2.5">
                        <MessageCircle size={18} className="text-[#25D366]" />
                        Chat on WhatsApp
                        <ExternalLink size={14} className="opacity-70" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 0.5,
                        }}
                      />
                    </a>
                  </motion.div>
                </motion.div>

                {/* Phone number */}
                <motion.div
                  className="mt-6 flex items-center justify-center gap-2 text-white/40 text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Phone size={12} />
                  <span>Or call us directly: </span>
                  <a href="tel:+917979864304" className="text-white/60 hover:text-white transition-colors">
                    +91 79798 64304
                  </a>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Decorative Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '48px',
          background: isNavy ? '#F8FAFC' : '#FFFFFF',
          clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 100%)",
        }}
        aria-hidden
      />

      {/* Floating Card */}
      <motion.div
        className="absolute -bottom-6 right-10 hidden lg:block bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-3"
        animate={{
          y: [0, -10, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            {['👨‍🎓', '👩‍🎓', '👨‍🎓'].map((emoji, i) => (
              <span key={i} className="text-sm">{emoji}</span>
            ))}
          </div>
          <span className="text-xs text-white/60">Join 15,000+ students</span>
        </div>
      </motion.div>
    </section>
  );
}