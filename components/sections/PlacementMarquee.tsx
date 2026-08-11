"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface RecruiterItem {
  id: string;
  name: string;
  logoSvg: React.ReactNode;
}

// Row 1: Medical & Healthcare Recruiters
const recruitersRow1: RecruiterItem[] = [
  {
    id: "apollo-hospitals",
    name: "Apollo Hospitals",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <circle cx="20" cy="20" r="18" fill="#15803D" opacity="0.15" />
        <path d="M20 8v24M8 20h24" stroke="#15803D" strokeWidth="4" strokeLinecap="round" />
        <circle cx="20" cy="20" r="4" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    id: "fortis",
    name: "Fortis Healthcare",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <rect width="40" height="40" rx="8" fill="#CCFBF1" />
        <path d="M20 10l7 14h-14l7-14z" fill="#0D9488" />
        <path d="M20 30l-7-14h14l-7 14z" fill="#059669" />
      </svg>
    ),
  },
  {
    id: "cipla",
    name: "Cipla",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#0284C7" />
        <path d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "max-health",
    name: "Max Healthcare",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <rect width="40" height="40" rx="8" fill="#FEE8F5" />
        <path d="M20 12v16M12 20h16" stroke="#B30F66" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "sun-pharma",
    name: "Sun Pharma",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#FEF3C7" />
        <circle cx="20" cy="20" r="10" fill="#F59E0B" />
        <path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "dr-reddys",
    name: "Dr. Reddy's",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#7E22CE" />
        <path d="M12 28V12h8c4.4 0 7 2.5 7 6.5s-2.6 6.5-7 6.5h-4v3" stroke="#FFFFFF" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "medanta",
    name: "Medanta Medicity",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#0D9488" />
        <path d="M20 8l10 6v12l-10 6-10-6V14l10-6z" fill="#FFFFFF" />
        <path d="M20 14v12M14 20h12" stroke="#0D9488" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Row 2: Tech & IT Giants
const recruitersRow2: RecruiterItem[] = [
  {
    id: "tcs",
    name: "TCS",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#0284C7" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontWeight="900" fontSize="13" fontFamily="sans-serif">
          TCS
        </text>
      </svg>
    ),
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect x="4" y="4" width="15" height="15" fill="#F25022" />
        <rect x="21" y="4" width="15" height="15" fill="#7FBA00" />
        <rect x="4" y="21" width="15" height="15" fill="#00A4EF" />
        <rect x="21" y="21" width="15" height="15" fill="#FFB900" />
      </svg>
    ),
  },
  {
    id: "google",
    name: "Google",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <path d="M34.5 20.3c0-1.1-.1-2.2-.3-3.3H20v6.3h8.2c-.4 2-1.5 3.7-3.2 4.9v4h5.2c3-2.8 4.8-7 4.8-11.9z" fill="#4285F4" />
        <path d="M20 35c4.1 0 7.5-1.3 10-3.7l-5.2-4c-1.4 1-3.1 1.5-4.8 1.5-3.8 0-7-2.5-8.1-6H6.5v4.2C9 31.9 14.1 35 20 35z" fill="#34A853" />
        <path d="M11.9 22.8c-.3-.9-.4-1.8-.4-2.8s.1-1.9.4-2.8V13H6.5c-1 2.1-1.5 4.4-1.5 7s.5 4.9 1.5 7l5.4-4.2z" fill="#FBBC05" />
        <path d="M20 11.2c2.2 0 4.2.8 5.7 2.2l4.3-4.3C27.5 6.7 24.1 5.5 20 5.5 14.1 5.5 9 8.6 6.5 13.5l5.4 4.2c1.1-3.5 4.3-6.5 8.1-6.5z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    id: "amazon",
    name: "Amazon",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#131921" />
        <path d="M10 26c6 3 14 3 20 0" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M28 24l3 3-4 1" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "infosys",
    name: "Infosys",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#007CC3" />
        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontStyle="italic" fontWeight="900" fontSize="11" fontFamily="sans-serif">
          Infy
        </text>
      </svg>
    ),
  },
  {
    id: "wipro",
    name: "Wipro",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
        <circle cx="20" cy="12" r="4" fill="#E11D48" />
        <circle cx="28" cy="20" r="4" fill="#0284C7" />
        <circle cx="20" cy="28" r="4" fill="#16A34A" />
        <circle cx="12" cy="20" r="4" fill="#D97706" />
      </svg>
    ),
  },
  {
    id: "capgemini",
    name: "Capgemini",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#0070AD" />
        <path d="M20 10C14.5 10 10 14.5 10 20s4.5 10 10 10 10-4.5 10-10S25.5 10 20 10zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#FFFFFF" />
      </svg>
    ),
  },
];

// Row 3: Engineering, Core & Banking/Finance
const recruitersRow3: RecruiterItem[] = [
  {
    id: "hdfc",
    name: "HDFC Bank",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="6" fill="#004C8F" />
        <rect x="8" y="8" width="24" height="24" fill="#ED232A" />
        <rect x="14" y="14" width="12" height="12" fill="#FFFFFF" />
        <rect x="17" y="8" width="6" height="24" fill="#004C8F" />
        <rect x="8" y="17" width="24" height="6" fill="#004C8F" />
      </svg>
    ),
  },
  {
    id: "lt",
    name: "L&T",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#EA580C" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontWeight="900" fontSize="13" fontFamily="sans-serif">
          L&T
        </text>
      </svg>
    ),
  },
  {
    id: "axis-bank",
    name: "Axis Bank",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#97144D" />
        <path d="M20 10l10 20H10l10-20z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: "deloitte",
    name: "Deloitte",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#000000" />
        <text x="35%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontWeight="900" fontSize="9" fontFamily="sans-serif">
          Deloitte
        </text>
        <circle cx="31" cy="23" r="2.5" fill="#86B817" />
      </svg>
    ),
  },
  {
    id: "sbi",
    name: "State Bank of India",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#0A3A86" />
        <circle cx="20" cy="18" r="9" fill="#22D3EE" />
        <rect x="18" y="18" width="4" height="14" fill="#0A3A86" />
      </svg>
    ),
  },
  {
    id: "tata-motors",
    name: "Tata Motors",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#04164B" />
        <path d="M10 14h20M20 14v16" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "grant-thornton",
    name: "Grant Thornton",
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#4C1D95" />
        <circle cx="20" cy="20" r="8" fill="none" stroke="#FFFFFF" strokeWidth="4" />
      </svg>
    ),
  },
];

export default function PlacementMarquee() {
  const row1Items = [...recruitersRow1, ...recruitersRow1, ...recruitersRow1];
  const row2Items = [...recruitersRow2, ...recruitersRow2, ...recruitersRow2];
  const row3Items = [...recruitersRow3, ...recruitersRow3, ...recruitersRow3];

  return (
    <section className="relative py-14 sm:py-18 bg-white border-b border-[#E2E8F0] overflow-hidden select-none">
      {/* Section Heading */}
      <Container className="mb-8">
        <SectionHeading
          eyebrow="Career & Placements"
          title="Placement Assistance & Top Recruiters"
          description="Our partner institutions feature top recruiters across Medical, Technical, Engineering, Healthcare, and Corporate sectors."
          align="center"
        />
      </Container>

      {/* Edge Gradient Overlay Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Row 1: Marquee Scroll Left (Medical & Healthcare) */}
      <div className="relative flex overflow-hidden mb-4 py-1">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {row1Items.map((item, idx) => (
            <PlacementCard key={`p1-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2: Marquee Scroll Right (Tech & IT Giants) */}
      <div className="relative flex overflow-hidden mb-4 py-1">
        <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6">
          {row2Items.map((item, idx) => (
            <PlacementCard key={`p2-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 3: Marquee Scroll Left (Engineering & Corporate) */}
      <div className="relative flex overflow-hidden py-1">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {row3Items.map((item, idx) => (
            <PlacementCard key={`p3-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlacementCard({ item }: { item: RecruiterItem }) {
  return (
    <div className="flex items-center gap-3.5 bg-white border border-[#E2E8F0] hover:border-[#0D9488]/30 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 group cursor-default">
      {/* Company/Hospital Image Logo */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 border border-[#E2E8F0] bg-[#F8FAFC]">
        {item.logoSvg}
      </div>

      {/* Recruiter Name Only */}
      <div className="flex flex-col justify-center">
        <span className="text-sm sm:text-base font-bold text-[#04164B] group-hover:text-[#0D9488] transition-colors whitespace-nowrap tracking-tight">
          {item.name}
        </span>
      </div>
    </div>
  );
}
