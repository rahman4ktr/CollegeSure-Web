"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Shield,
  Award,
  Globe,
  Zap
} from "lucide-react";

const courseLinks = [
  { label: "Medical & Paramedical", href: "/courses/medical" },
  { label: "Engineering", href: "/courses/engineering" },
  { label: "Graduation Programs", href: "/courses/graduation" },
  { label: "All Courses", href: "/courses" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Universities", href: "/universities" },
  { label: "Admission Process", href: "/admission-process" },
  { label: "About Us", href: "/about" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const stats = [
  { label: "Students Guided", value: "5000+", icon: Award },
  { label: "Partner Universities", value: "50+", icon: Globe },
  { label: "Success Rate", value: "98%", icon: Zap },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" role="contentinfo">
      {/* Animated gradient top border */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-[#0D9488] to-transparent"
        animate={{
          background: [
            "linear-gradient(to right, transparent, #0D9488, transparent)",
            "linear-gradient(to right, transparent, #F97316, transparent)",
            "linear-gradient(to right, transparent, #0D9488, transparent)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main footer with 3D perspective */}
      <div
        className="bg-gradient-to-b from-[#0B3C5D] to-[#061f2e] text-white relative"
        style={{
          perspective: 1200,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <motion.div
            className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#0D9488]/10 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-[#F97316]/8 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0D9488]/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 pb-14 border-b border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#0D9488]/30 transition-all duration-300 group"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(13, 148, 136, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#0D9488]/20 to-[#0D9488]/5 group-hover:from-[#0D9488]/30 group-hover:to-[#0D9488]/10 transition-all duration-300">
                  <stat.icon size={24} className="text-[#0D9488]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-[#94A3B8] font-medium tracking-wide">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <motion.div
              className="sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Link href="/" className="flex items-center gap-2.5 mb-5 group">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488] to-[#0B3C5D] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#0B3C5D] flex items-center justify-center shadow-lg relative z-10 transition-all duration-300">
                      <GraduationCap size={22} className="text-white" />
                    </div>
                  </motion.div>
                  <div>
                    <motion.span
                      className="font-bold text-xl text-white leading-none block"
                      whileHover={{ color: "#0D9488" }}
                      transition={{ duration: 0.3 }}
                    >
                      CollegeSure
                    </motion.span>
                    <span className="text-[10px] text-[#0D9488] font-medium tracking-[0.15em] uppercase flex items-center gap-1.5 leading-none">
                      <Sparkles size={10} className="text-[#0D9488]" />
                      by Brainzima
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.p
                className="text-[#94A3B8] text-sm leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Your College. Our Assurance. Expert admissions guidance for Medical,
                Engineering, and Graduation programs.
              </motion.p>

              <div className="space-y-3 text-sm">
                {[
                  { icon: Phone, label: "+91 79798 64304", href: "tel:+917979864304", color: "#0D9488" },
                  { icon: Mail, label: "contact@brainzima.com", href: "mailto:contact@brainzima.com", color: "#F97316" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-3 text-[#94A3B8] group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <div className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D9488]/20 transition-colors duration-300">
                      <item.icon size={15} style={{ color: item.color }} />
                    </div>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors pt-2"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  className="flex items-start gap-3 text-[#94A3B8]"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-[#0D9488]" />
                  </div>
                  <span className="pt-2 leading-relaxed">Anathalaya Rd, near Bachcha Hospital,<br />Katihar, Bihar 854105</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold text-white mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
                <motion.span
                  className="w-6 h-px bg-[#0D9488]"
                  animate={{ width: ["24px", "48px", "24px"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                Courses
              </h3>
              <ul className="space-y-3">
                {courseLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <motion.span
                        className="text-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowUpRight size={12} />
                      </motion.span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold text-white mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
                <motion.span
                  className="w-6 h-px bg-[#0D9488]"
                  animate={{ width: ["24px", "48px", "24px"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <motion.span
                        className="text-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowUpRight size={12} />
                      </motion.span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-bold text-white mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
                <motion.span
                  className="w-6 h-px bg-[#0D9488]"
                  animate={{ width: ["24px", "48px", "24px"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                Get Guidance
              </h3>

              <motion.div
                className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-5 border border-white/10 shadow-lg relative overflow-hidden group"
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0D9488]/0 via-[#0D9488]/5 to-[#0D9488]/0"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                  }}
                />

                <p className="text-[#E2E8F0] text-sm leading-relaxed mb-5 relative z-10">
                  Not sure which college or course is right for you? Talk to our counsellors today.
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#ea6c0c] hover:shadow-xl text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-300 w-full justify-center group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles size={16} />
                      Free Counselling
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#F97316] via-[#ff9a44] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundSize: "200% 100%" }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 0%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.a
                href="https://wa.me/917979864304?text=Hello%20Brainzima%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white text-sm font-semibold px-5 py-3 rounded-xl border border-[#25D366]/30 hover:border-transparent transition-all duration-300 w-full justify-center mt-3 group"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
                <ExternalLink size={12} className="opacity-60" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar with 3D effect */}
        <div
          className="relative z-10 border-t border-white/10"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-[#94A3B8] text-xs text-center sm:text-left"
              whileHover={{ color: "#E2E8F0" }}
              transition={{ duration: 0.3 }}
            >
              © {new Date().getFullYear()} CollegeSure by{" "}
              <span className="text-[#0D9488] font-medium hover:text-[#F97316] transition-colors duration-300">
                Brainzima Innovation Institute
              </span>
              . All rights reserved.
            </motion.p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white text-xs transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <Shield size={12} className="text-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}