import Link from "next/link";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Shield,
} from "lucide-react";

const courseLinks = [
  { label: "Medical & Paramedical", href: "/courses/medical" },
  { label: "Engineering", href: "/courses/engineering" },
  { label: "Graduation Programs", href: "/courses/graduation" },
  { label: "All Courses", href: "/courses" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Free Counselling", href: "/free-counselling" },
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" role="contentinfo">
      {/* Animated gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#B30F66] to-transparent animate-gradient-shift" style={{ backgroundSize: '200% 100%' }} />

      {/* Main footer */}
      <div className="bg-gradient-to-b from-[#04164B] to-[#040943] text-white relative">
        {/* Ambient gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#B30F66]/10 blur-3xl animate-ambient-slow" />
          <div
            className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-[#591084]/15 blur-3xl animate-ambient-slow-reverse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#B30F66]/5 blur-3xl animate-ambient-center" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="hover:scale-[1.02] transition-transform duration-300">
                <Link href="/" className="flex items-center gap-2.5 mb-5 group" aria-label="CollegeSure - Home">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#591084] to-[#B30F66] flex items-center justify-center shadow-lg relative z-10 transition-all duration-300">
                      <GraduationCap size={22} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="font-extrabold text-xl text-white leading-none block hover:text-[#B30F66] transition-colors duration-300">
                      CollegeSure
                    </span>
                    <span className="text-[10px] text-[#B30F66] font-semibold tracking-[0.15em] uppercase flex items-center gap-1.5 leading-none mt-0.5">
                      <Sparkles size={10} className="text-[#B30F66]" />
                      by Brainzima
                    </span>
                  </div>
                </Link>
              </div>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                Your College. Our Assurance. Expert admissions guidance for Medical,
                Engineering, and Graduation programs.
              </p>

              <div className="space-y-3 text-sm">
                {[
                  { icon: Phone, label: "+91 79798 64304", href: "tel:+917979864304", color: "#0D9488" },
                  { icon: Mail, label: "contact@brainzima.com", href: "mailto:contact@brainzima.com", color: "#F97316" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 text-[#94A3B8] group hover:translate-x-1 transition-transform duration-300"
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
                  </div>
                ))}
                <div className="flex items-start gap-3 text-[#94A3B8] hover:translate-x-1 transition-transform duration-300">
                  <div className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-[#0D9488]" />
                  </div>
                  <span className="pt-2 leading-relaxed">Anathalaya Rd, near Bachcha Hospital,<br />Katihar, Bihar 854105</span>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3 className="font-bold text-white mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-[#0D9488]" />
                Courses
              </h3>
              <ul className="space-y-3">
                {courseLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                        <ArrowUpRight size={12} />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-[#0D9488]" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                        <ArrowUpRight size={12} />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div>
              <h3 className="font-bold text-white mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-[#0D9488]" />
                Get Guidance
              </h3>

              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-5 border border-white/10 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D9488]/0 via-[#0D9488]/5 to-[#0D9488]/0 animate-shimmer-slide" />

                <p className="text-[#E2E8F0] text-sm leading-relaxed mb-5 relative z-10">
                  Not sure which college or course is right for you? Talk to our counsellors today.
                </p>

                <div>
                  <Link
                    href="/free-counselling"
                    className="inline-flex items-center gap-2 bg-[#B30F66] hover:bg-[#591084] shadow-lg shadow-[#B30F66]/20 text-white text-sm font-bold px-5 py-3 rounded-xl transition-all duration-300 w-full justify-center group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles size={16} />
                      Free Counselling
                    </span>
                  </Link>
                </div>
              </div>

              <a
                href="https://wa.me/917979864304?text=Hello%20Brainzima%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white text-sm font-semibold px-5 py-3 rounded-xl border border-[#25D366]/30 hover:border-transparent transition-all duration-300 w-full justify-center mt-3 group hover:-translate-y-0.5"
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
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#94A3B8] text-xs text-center sm:text-left hover:text-[#E2E8F0] transition-colors duration-300">
              © {new Date().getFullYear()} CollegeSure by{" "}
              <span className="text-[#0D9488] font-medium hover:text-[#F97316] transition-colors duration-300">
                Brainzima Innovation Institute
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <div key={link.href} className="hover:-translate-y-0.5 transition-transform duration-300">
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white text-xs transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <Shield size={12} className="text-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}