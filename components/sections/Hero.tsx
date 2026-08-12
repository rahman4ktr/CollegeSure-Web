"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  PlayCircle,
  BookOpen,
  Landmark,
  Users,
  Code2,
  Star,
  Headphones,
  Stethoscope,
  Activity,
  Cpu,
  GraduationCap,
} from "lucide-react";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";

const heroStats = [
  { icon: BookOpen, value: "1000+", label: "Courses", color: "#591084", bg: "#FEF2F7" },
  { icon: Landmark, value: "500+", label: "Colleges", color: "#B30F66", bg: "#FEE8F5" },
  { icon: Users, value: "50K+", label: "Students", color: "#159447", bg: "#E6F4EA" },
  { icon: Headphones, value: "24/7", label: "Support", color: "#F36C21", bg: "#FEF7F3" },
];

const collegeBadges = [
  { name: "DU", bg: "bg-[#147CC1]" },
  { name: "JI", bg: "bg-[#159447]" },
  { name: "CU", bg: "bg-[#F36C21]" },
  { name: "VIT", bg: "bg-[#591084]" },
  { name: "LPU", bg: "bg-[#B30F66]" },
];

const uniAvatars = [
  { name: "Riya M.", initials: "RM", bg: "bg-[#591084]" },
  { name: "Aman K.", initials: "AK", bg: "bg-[#147CC1]" },
  { name: "Sneha P.", initials: "SP", bg: "bg-[#B30F66]" },
  { name: "Rahul S.", initials: "RS", bg: "bg-[#159447]" },
];

const popularStreams = [
  {
    title: "Medical",
    subtitle: "MBBS, BDS, BAMS, BHMS & More",
    icon: Stethoscope,
    color: "#159447",
    href: "/courses/medical",
  },
  {
    title: "Paramedical",
    subtitle: "Nursing, Pharmacy, BPT, GNM & More",
    icon: Activity,
    color: "#F36C21",
    href: "/courses/paramedical",
  },
  {
    title: "Engineering",
    subtitle: "B.Tech, Diploma, BCA, MCA & More",
    icon: Cpu,
    color: "#147CC1",
    href: "/courses/engineering",
  },
];

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as any },
  };
}

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    if (headlineRef.current) {
      const lines = headlineRef.current.children;
      if (lines.length > 0) {
        gsap.fromTo(
          lines,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FDFDFD] pt-4"
      aria-label="CollegeSure Hero section"
    >
      {/* Top Banner Ribbon */}
      <div className="bg-[#040943] text-white text-xs py-2 px-4 flex justify-between items-center max-w-7xl mx-auto rounded-full mb-6 font-medium">
        <span className="flex items-center gap-2">
          <GraduationCap size={14} className="text-[#F7D51A]" />
          Guiding Your Career Journey Since Day One
        </span>
        <span className="flex items-center gap-2 text-[#FEF2F7]">
          <Users size={14} className="text-[#F7D51A]" />
          Trusted by 50K+ Students
        </span>
      </div>

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        <div className="absolute -top-24 right-10 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-[#FEF2F7] to-[#FEE8F5] blur-3xl opacity-70" />
        <div className="absolute bottom-10 -left-20 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#FEF7F3] to-transparent blur-3xl opacity-60" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left column — message */}
            <div className="lg:col-span-6">
              <motion.p
                {...fadeUpProps(0.05)}
                className="text-sm font-bold text-[#591084] tracking-wide mb-3 uppercase flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#B30F66] animate-ping" />
                Your Future, Our Priority
              </motion.p>

              <h1
                ref={headlineRef}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-extrabold text-[#04164B] leading-[1.1] tracking-tight mb-6"
              >
                <span className="line block">Discover Courses.</span>
                <span className="line block">Choose Colleges.</span>
                <span className="line block">
                  <span className="text-[#B30F66]">Build</span> Your Future.
                </span>
              </h1>

              <motion.p
                {...fadeUpProps(0.32)}
                className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8 max-w-lg font-medium"
              >
                Explore 1,000+ courses from top colleges across India. Find the perfect path to achieve your dreams.
              </motion.p>

              <motion.div
                {...fadeUpProps(0.42)}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Button
                    as="link"
                    href="/courses"
                    variant="primary"
                    size="lg"
                    rounded="full"
                    className="bg-[#B30F66] hover:bg-[#591084] text-white px-8 py-4 text-base font-bold shadow-lg shadow-[#B30F66]/25"
                    rightIcon={<ArrowRight size={18} />}
                  >
                    Explore Courses
                  </Button>
                </motion.div>

                <Link
                  href="/how-it-works"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#04164B]/15 bg-white text-sm font-bold text-[#04164B] hover:bg-[#FEF2F7] hover:border-[#B30F66]/30 transition-all duration-300 shadow-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FEF2F7] text-[#591084] group-hover:bg-[#B30F66] group-hover:text-white transition-colors">
                    <PlayCircle size={16} />
                  </span>
                  How It Works
                </Link>
              </motion.div>

              {/* Stat strip card */}
              <motion.div
                {...fadeUpProps(0.52)}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-xl shadow-[#04164B]/5"
              >
                {heroStats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform hover:scale-110"
                      style={{ backgroundColor: stat.bg, color: stat.color }}
                    >
                      <stat.icon size={20} />
                    </span>
                    <div>
                      <div className="text-lg font-bold text-[#04164B] leading-none">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[#94A3B8] font-medium mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right column — Photo + Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              {/* Background Backdrop Shape */}
              <div
                className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-tr from-[#FEF2F7] via-[#FEE8F5] to-[#FEF7F3] transform rotate-1 scale-105 shadow-inner"
                aria-hidden
              />

              {/* Main Photo Frame */}
              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-2xl shadow-[#591084]/15">
                <Image
                  src="/images/heroSection1.webp"
                  alt="Students ready for college admissions"
                  width={900}
                  height={920}
                  priority
                  fetchPriority="high"
                  className="h-[440px] w-full object-cover object-top sm:h-[500px] lg:h-[540px] transition-transform duration-700 hover:scale-103"
                />
              </div>

              {/* Floating Pill 1: Top Universities (Top-Left) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-4 -left-4 sm:left-4 rounded-2xl border border-white bg-white/95 p-3 shadow-xl backdrop-blur-md flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#591084] text-white shadow-md">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#04164B]">Top Universities</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex -space-x-1.5">
                      {uniAvatars.map((u) => (
                        <span
                          key={u.initials}
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold text-white ring-1 ring-white ${u.bg}`}
                        >
                          {u.initials}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-[#475569] bg-[#F1F5F9] px-1.5 py-0.5 rounded-full">
                      +99
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Pill 2: Top Rated Colleges (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="absolute top-4 -right-4 hidden sm:flex flex-col rounded-2xl border border-white bg-white/95 p-3.5 shadow-xl backdrop-blur-md w-48"
              >
                <p className="text-[11px] font-medium text-[#94A3B8]">Top Rated Colleges</p>
                <p className="text-2xl font-black text-[#B30F66] leading-none my-1">500+</p>
                <div className="flex items-center gap-1 mt-1">
                  {collegeBadges.map((b) => (
                    <span
                      key={b.name}
                      className={`h-5 w-5 rounded-full text-[9px] font-bold text-white flex items-center justify-center shadow-xs ${b.bg}`}
                    >
                      {b.name}
                    </span>
                  ))}
                  <span className="text-[9px] font-bold text-[#591084] bg-[#FEF2F7] px-1 py-0.5 rounded-full">
                    +99
                  </span>
                </div>
              </motion.div>

              {/* Floating Pill 3: 1000+ Courses (Center-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute bottom-24 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B30F66] text-white shadow-md">
                  <BookOpen size={18} />
                </div>
                <div>
                  <p className="text-base font-black text-[#04164B] leading-none">1000+</p>
                  <p className="text-xs font-semibold text-[#94A3B8]">Courses</p>
                </div>
              </motion.div>

              {/* Floating Pill 4: Course Info Card (Bottom-Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="absolute -bottom-6 -right-2 sm:right-2 w-60 rounded-2xl border border-white bg-white/95 p-4 shadow-2xl backdrop-blur-md"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#147CC1] text-white shadow-sm">
                    <Code2 size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#04164B]">B.Tech Computer Science</p>
                    <p className="text-[10px] text-[#94A3B8]">4 Years &middot; Full Time</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9]">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-[#F7D51A] text-[#F7D51A]" />
                    <span className="text-xs font-bold text-[#04164B]">4.8</span>
                    <span className="text-[10px] text-[#94A3B8]">(2.4k reviews)</span>
                  </div>
                  <Link
                    href="/courses/engineering"
                    className="text-[11px] font-bold text-[#591084] hover:text-[#B30F66] flex items-center gap-0.5"
                  >
                    Details <ArrowRight size={10} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Stream Banner Container */}
          <motion.div
            {...fadeUpProps(0.95)}
            className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-[#040943] via-[#04164B] to-[#591084] p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              {/* Banner Left Info */}
              <div className="lg:col-span-4">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
                  Popular Courses
                </h3>
                <p className="text-xs sm:text-sm text-[#FEF2F7]/80 font-medium">
                  Choose from top streams and build your career
                </p>
              </div>

              {/* Stream Cards Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {popularStreams.map((stream) => (
                  <Link
                    key={stream.title}
                    href={stream.href}
                    className="group bg-white rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-md transition-transform group-hover:scale-110"
                        style={{ backgroundColor: stream.color }}
                      >
                        <stream.icon size={20} />
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#04164B] leading-tight">
                          {stream.title}
                        </h4>
                        <p className="text-[10px] text-[#94A3B8] font-semibold mt-0.5">
                          {stream.subtitle}
                        </p>
                      </div>
                    </div>
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-transform group-hover:translate-x-1"
                      style={{ backgroundColor: stream.color }}
                    >
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}