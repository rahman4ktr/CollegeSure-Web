"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  X,
  Menu,
  ChevronDown,
  GraduationCap,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Home,
  Stethoscope,
  Cpu,
  Mail,
  FileCheck2,
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/", icon: Home, gradient: "from-[#159447] to-[#0B3C5D]" },
  { label: "Medical", href: "/courses/medical", icon: Stethoscope, gradient: "from-[#159447] to-[#147CC1]" },
  { label: "Engineering", href: "/courses/engineering", icon: Cpu, gradient: "from-[#147CC1] to-[#B30F66]" },
  { label: "Graduation", href: "/courses/graduation", icon: GraduationCap, gradient: "from-[#B30F66] to-[#F7D51A]" },
  { label: "Admission Process", href: "/admission-process", icon: FileCheck2, gradient: "from-[#159447] to-[#B30F66]" },
];

import { useCounsellingModal } from "@/components/providers/CounsellingModalProvider";

export default function Navbar() {
  const { openModal } = useCounsellingModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  // 3D Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);
  const springConfig = { damping: 25, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  useEffect(() => {
    let prevScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== prevScrolled) {
        prevScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={navbarRef}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/30 rounded-2xl py-2"
            : "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/20 rounded-2xl py-3"
          }`}
        role="banner"
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0B3C5D]/10 via-[#0D9488]/10 to-[#0B3C5D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="relative">
              <Link
                href="/"
                className="flex items-center gap-2.5 flex-shrink-0 group hover:scale-[1.02] transition-transform duration-200"
                aria-label="CollegeSure — Home"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#591084] to-[#B30F66] flex items-center justify-center shadow-md shadow-[#B30F66]/20 relative z-10 transition-transform group-hover:scale-105">
                    <GraduationCap size={22} className="text-white" />
                  </div>
                </div>
                <div className="relative">
                  <span className="font-extrabold text-xl text-[#04164B] leading-none block tracking-tight">
                    CollegeSure
                  </span>
                  <span className="text-[10px] text-[#B30F66] font-bold leading-none tracking-[0.15em] uppercase flex items-center gap-1 mt-0.5">
                    <Sparkles size={9} className="text-[#B30F66]" />
                    by Brainzima
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-2 sm:gap-3"
              ref={dropdownRef}
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                        hoveredLink === link.label
                          ? "text-[#04164B] bg-gradient-to-r from-[#0B3C5D]/5 to-[#0D9488]/5 shadow-sm"
                          : "text-[#475569] hover:text-[#04164B] hover:bg-[#0B3C5D]/5"
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-sm text-white flex-shrink-0`}>
                        <Icon size={14} />
                      </div>
                      <span>{link.label}</span>
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Button
                as="button"
                onClick={() => openModal()}
                variant="primary"
                size="md"
                className="relative overflow-hidden group cursor-pointer hover:-translate-y-0.5 transition-transform"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={16} />
                  Free Counselling
                </span>
              </Button>
            </div>

            {/* Mobile action icons + Hamburger */}
            <div className="lg:hidden flex items-center gap-1">
              <a
                href="tel:+917979864304"
                className="p-2.5 rounded-xl text-[#0B3C5D] hover:bg-[#0B3C5D]/10 transition-colors"
                aria-label="Call CollegeSure"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://wa.me/917979864304?text=Hello%20Brainzima%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                aria-label="WhatsApp CollegeSure"
              >
                <MessageCircle size={20} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2.5 rounded-xl transition-colors ${mobileOpen
                    ? "text-white bg-gradient-to-r from-[#0B3C5D] to-[#0D9488]"
                    : "text-[#0B3C5D] hover:bg-[#0B3C5D]/10"
                  }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, x: "100%", rotateY: 45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: "100%", rotateY: 45 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.5
              }}
              className="fixed top-4 right-4 bottom-4 w-[85vw] max-w-sm bg-white/95 backdrop-blur-2xl z-50 shadow-2xl rounded-2xl flex flex-col lg:hidden border border-white/50 overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
              aria-label="Mobile navigation"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/5 via-transparent to-[#0D9488]/5" />

              {/* Mobile Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2E8F0]/50 relative z-10">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B3C5D] to-[#0D9488] flex items-center justify-center shadow-lg">
                    <GraduationCap size={18} className="text-white" />
                  </div>
                  <span className="font-bold text-[#0B3C5D] text-lg">CollegeSure</span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-[#475569] hover:bg-[#F8FAFC] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 relative z-10">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 30, rotateY: -20 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-3 py-3 text-sm font-semibold text-[#475569] hover:text-[#04164B] rounded-xl hover:bg-gradient-to-r hover:from-[#0B3C5D]/5 hover:to-[#0D9488]/5 transition-all duration-300"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                            <Icon size={16} />
                          </div>
                          <span>{link.label}</span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="px-4 py-4 border-t border-[#E2E8F0]/50 space-y-2.5 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    as="button"
                    onClick={() => {
                      setMobileOpen(false);
                      openModal();
                    }}
                    variant="primary"
                    size="lg"
                    className="w-full justify-center relative overflow-hidden group cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles size={16} />
                      Get Free Counselling
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#0B3C5D] via-[#0D9488] to-[#0B3C5D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    as="a"
                    href="https://wa.me/917979864304?text=Hello%20Brainzima%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20admissions."
                    variant="teal"
                    size="lg"
                    className="w-full justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Chat on WhatsApp
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Spacer with gradient effect */}
      <div className={`${scrolled ? "h-[72px]" : "h-[80px]"} transition-all duration-300`} />
    </>
  );
}