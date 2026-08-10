"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Users,
  BookOpen,
  HeartHandshake,
  Sparkles,
  GraduationCap,
  Award,
  Clock,
  ChevronRight,
  Play,
  Star,
  TrendingUp,
} from "lucide-react";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import Hero3DCanvas from "@/components/sections/Hero3DCanvas";
import Card3DTilt from "@/components/ui/Card3DTilt";

const trustIndicators = [
  { icon: Shield, text: "Transparent Guidance", color: "#0D9488" },
  { icon: Users, text: "Student & Parent Friendly", color: "#F97316" },
  { icon: BookOpen, text: "Multiple Course Options", color: "#6366F1" },
  { icon: HeartHandshake, text: "Personalized Counselling", color: "#EC4899" },
];

const floatingStats = [
  { label: "Students Placed", value: "5,000+", icon: Award, trend: "+12%" },
  { label: "Success Rate", value: "98%", icon: TrendingUp, trend: "+5%" },
  { label: "Partner Universities", value: "50+", icon: GraduationCap, trend: "+8%" },
];

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as any },
  };
}

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const springY = useSpring(y, { damping: 30, stiffness: 200 });

  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { opacity: 0, y: 40, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.08,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F8FAFC] min-h-[90vh] flex items-center"
      aria-label="Hero section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#0D9488]/15 to-[#0B3C5D]/5 blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#F97316]/10 to-[#0D9488]/5 blur-3xl"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#6366F1]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#0D9488]/20 rounded-full"
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
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#0B3C5D"
                strokeWidth="1"
              />
              <circle cx="60" cy="60" r="1" fill="#0B3C5D" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: springY, opacity, scale }}
        className="relative z-10 w-full"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <div>
              {/* Eyebrow with animated dot */}
              <motion.div
                {...fadeUpProps(0.05)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0D9488]/10 to-[#0B3C5D]/10 text-[#0D9488] text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-[#0D9488]/20 backdrop-blur-sm"
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#0D9488]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                CollegeSure by Brainzima
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight size={12} />
                </motion.div>
              </motion.div>

              {/* Headline with word-by-word animation */}
              <h1
                ref={headlineRef}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#0B3C5D] leading-[1.1] tracking-tight mb-6"
              >
                <span className="word block">Find the Right College</span>
                <span className="word block relative">
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3C5D] via-[#0D9488] to-[#F97316]">
                      with Complete
                    </span>
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 300 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                    >
                      <path
                        d="M2 9C50 3 100 1 150 4C200 7 250 9 298 6"
                        stroke="url(#underlineGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0B3C5D" />
                          <stop offset="50%" stopColor="#0D9488" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                </span>
                <span className="word block">Assurance</span>
              </h1>

              {/* Sub-headline */}
              <motion.p
                {...fadeUpProps(0.24)}
                className="text-lg sm:text-xl text-[#475569] leading-relaxed mb-4 font-medium flex items-center gap-2"
              >
                <Sparkles size={18} className="text-[#0D9488]" />
                Medical, Engineering & Graduation Admissions Made Simple
              </motion.p>

              <motion.p
                {...fadeUpProps(0.34)}
                className="text-base text-[#475569] leading-relaxed mb-8 max-w-lg"
              >
                We help students and parents navigate college admissions with honest
                guidance, personalized counselling, and genuine support — from
                course selection to admission confirmation.
              </motion.p>

              {/* CTAs with enhanced animations */}
              <motion.div
                {...fadeUpProps(0.44)}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Button
                    as="link"
                    href="/contact"
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight size={18} />}
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles size={16} />
                      Get Free Counselling
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

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Button
                    as="link"
                    href="/courses"
                    variant="outline"
                    size="lg"
                    className="group"
                  >
                    Explore Courses
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight size={16} />
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust indicators with enhanced styling */}
              <motion.div
                {...fadeUpProps(0.54)}
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                {trustIndicators.map(({ icon: Icon, text, color }, index) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-2.5 text-sm text-[#475569] group cursor-default"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.08, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ backgroundColor: `${color}15` }}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                    >
                      <Icon size={12} style={{ color }} />
                    </motion.div>
                    {text}
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                {...fadeUpProps(0.64)}
                className="mt-10 grid grid-cols-3 gap-4"
              >
                {floatingStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-[#E2E8F0] shadow-sm"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <stat.icon size={14} className="text-[#0D9488]" />
                      <span className="text-[10px] font-semibold text-[#0D9488]">
                        {stat.trend}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-[#0B3C5D]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-[#94A3B8]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - 3D Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative"
              style={{ perspective: 1200 }}
            >
              <Card3DTilt glowColor="rgba(13, 148, 136, 0.3)">
                <div className="relative rounded-2xl bg-gradient-to-br from-[#0B3C5D]/95 to-[#1a5276]/90 p-3 shadow-2xl backdrop-blur-md border border-white/20 overflow-hidden">
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, #0D9488, #F97316, #0D9488)",
                      padding: "2px",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                    animate={{
                      background: [
                        "linear-gradient(135deg, #0D9488, #F97316, #0D9488)",
                        "linear-gradient(135deg, #F97316, #0D9488, #F97316)",
                        "linear-gradient(135deg, #0D9488, #F97316, #0D9488)",
                      ],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10">
                    <Hero3DCanvas />
                  </div>
                </div>
              </Card3DTilt>

              {/* Floating WhatsApp Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#E2E8F0] p-4 flex items-center gap-3 z-20 hover:shadow-[#25D366]/20 transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </motion.div>
                <div>
                  <p className="text-xs font-bold text-[#0F172A] flex items-center gap-1">
                    Chat with Counsellor
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-[#25D366]"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </p>
                  <p className="text-xs text-[#0D9488] font-medium">
                    Available now
                  </p>
                </div>
              </motion.div>

              {/* Floating Rating Badge */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#E2E8F0] px-3 py-2 flex items-center gap-2 z-20"
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-[#F97316] text-[#F97316]"
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#0B3C5D]">4.9/5</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Wave Separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#F8FAFC]"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
        }}
        aria-hidden
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-[#94A3B8] uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#94A3B8] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}