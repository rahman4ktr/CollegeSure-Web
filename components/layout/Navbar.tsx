"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown, GraduationCap, Phone, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Medical & Paramedical", href: "/courses/medical", icon: "🏥" },
      { label: "Engineering", href: "/courses/engineering", icon: "⚡" },
      { label: "Graduation", href: "/courses/graduation", icon: "🎓" },
    ],
  },
  { label: "Universities", href: "/universities" },
  { label: "Admission Process", href: "/admission-process" },
  { label: "About", href: "/about" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  // Mouse move handler for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.header
        ref={navbarRef}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${scrolled
            ? "bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/30 rounded-2xl py-2"
            : "bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/20 rounded-2xl py-3"
          }`}
        role="banner"
        initial={{ y: -100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
          duration: 0.6
        }}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0B3C5D]/10 via-[#0D9488]/10 to-[#0B3C5D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative"
            >
              <Link
                href="/"
                className="flex items-center gap-2.5 flex-shrink-0 group"
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
            </motion.div>

            {/* Desktop Nav */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-0.5"
              ref={dropdownRef}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className="relative"
                  onHoverStart={() => setHoveredLink(link.label)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  {link.children ? (
                    <>
                      <motion.button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                        className={`flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${openDropdown === link.label
                            ? "text-[#0B3C5D] bg-gradient-to-r from-[#0B3C5D]/10 to-[#0D9488]/10"
                            : "text-[#475569] hover:text-[#0B3C5D] hover:bg-[#0B3C5D]/5"
                          }`}
                        aria-expanded={openDropdown === link.label}
                        aria-haspopup="true"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.label}
                        <motion.div
                          animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={14} />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95, rotateX: -10 }}
                            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95, rotateX: -10 }}
                            transition={{
                              type: "spring",
                              damping: 20,
                              stiffness: 300,
                              duration: 0.2
                            }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                            role="menu"
                          >
                            <div className="p-2">
                              {link.children.map((child) => (
                                <motion.div
                                  key={child.href}
                                  whileHover={{ x: 5, scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Link
                                    href={child.href}
                                    className="flex items-center gap-3 px-4 py-3 text-sm text-[#475569] hover:text-[#0B3C5D] rounded-xl hover:bg-gradient-to-r hover:from-[#0B3C5D]/5 hover:to-[#0D9488]/5 transition-all duration-300"
                                    role="menuitem"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    <span className="text-xl">{child.icon}</span>
                                    <span className="font-medium">{child.label}</span>
                                    <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={link.href}
                        className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${hoveredLink === link.label
                            ? "text-[#0B3C5D] bg-gradient-to-r from-[#0B3C5D]/5 to-[#0D9488]/5"
                            : "text-[#475569] hover:text-[#0B3C5D] hover:bg-[#0B3C5D]/5"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          

              <motion.div
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Button
                  as="button"
                  onClick={() => openModal()}
                  variant="primary"
                  size="md"
                  className="relative overflow-hidden group cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles size={16} />
                    Free Counselling
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
            </div>

            {/* Mobile action icons + Hamburger */}
            <div className="lg:hidden flex items-center gap-1">
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="tel:+917979864304"
                className="p-2.5 rounded-xl text-[#0B3C5D] hover:bg-[#0B3C5D]/10 transition-colors"
                aria-label="Call CollegeSure"
              >
                <Phone size={20} />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/917979864304?text=Hello%20Brainzima%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                aria-label="WhatsApp CollegeSure"
              >
                <MessageCircle size={20} />
              </motion.a>
              <motion.button
                whileTap={{ scale: 0.9 }}
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
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

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
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30, rotateY: -20 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    {link.children ? (
                      <>
                        <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#94A3B8] flex items-center gap-2">
                          <div className="h-px flex-1 bg-gradient-to-r from-[#0D9488]/20 to-transparent" />
                          {link.label}
                        </div>
                        <div className="space-y-1 mt-1">
                          {link.children.map((child) => (
                            <motion.div
                              key={child.href}
                              whileHover={{ x: 5, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Link
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-[#475569] hover:text-[#0B3C5D] rounded-xl hover:bg-gradient-to-r hover:from-[#0B3C5D]/5 hover:to-[#0D9488]/5 transition-all duration-300"
                              >
                                <span className="text-xl">{child.icon}</span>
                                <span>{child.label}</span>
                                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <motion.div
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-3 text-sm font-medium text-[#475569] hover:text-[#0B3C5D] rounded-xl hover:bg-gradient-to-r hover:from-[#0B3C5D]/5 hover:to-[#0D9488]/5 transition-all duration-300"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
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