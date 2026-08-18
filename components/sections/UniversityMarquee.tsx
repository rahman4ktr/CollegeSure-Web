'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';

interface UniversityItem {
  id: string;
  name: string;
  image?: string;
  logoColor: string;
  logoBg: string;
  logoSymbol: string;
}

const universitiesRow1: UniversityItem[] = [
  {
    id: "christ-university",
    name: "Christ University",
    image: "/images/universities/christ.webp",
    logoColor: "#2563EB",
    logoBg: "#DBEAFE",
    logoSymbol: "CU",
  },
  {
    id: "manipal-academy",
    name: "Manipal Academy",
    image: "/images/universities/manipal.webp",
    logoColor: "#B30F66",
    logoBg: "#FEE8F5",
    logoSymbol: "MAHE",
  },
  {
    id: "kiit-university",
    name: "KIIT University",
    image: "/images/universities/christ.webp",
    logoColor: "#159447",
    logoBg: "#DCFCE7",
    logoSymbol: "KIIT",
  },
  {
    id: "srm-institute",
    name: "SRM Institute",
    image: "/images/universities/christ.webp",
    logoColor: "#0284C7",
    logoBg: "#E0F2FE",
    logoSymbol: "SRM",
  },
  {
    id: "chandigarh-univ",
    name: "Chandigarh University",
    image: "/images/universities/manipal.webp",
    logoColor: "#059669",
    logoBg: "#D1FAE5",
    logoSymbol: "CU",
  },
  {
    id: "bits-pilani",
    name: "BITS Pilani",
    image: "/images/universities/manipal.webp",
    logoColor: "#DC2626",
    logoBg: "#FEE2E2",
    logoSymbol: "BITS",
  },
  {
    id: "vit-vellore",
    name: "VIT Vellore",
    image: "/images/universities/christ.webp",
    logoColor: "#7C3AED",
    logoBg: "#EDE9FE",
    logoSymbol: "VIT",
  },
];

const universitiesRow2: UniversityItem[] = [
  {
    id: "alliance-university",
    name: "Alliance University",
    image: "/images/universities/christ.webp",
    logoColor: "#04164B",
    logoBg: "#E0F2FE",
    logoSymbol: "AU",
  },
  {
    id: "lpu-punjab",
    name: "LPU Punjab",
    image: "/images/universities/christ.webp",
    logoColor: "#EA580C",
    logoBg: "#FFEDD5",
    logoSymbol: "LPU",
  },
  {
    id: "brainware-univ",
    name: "Brainware University",
    image: "/images/universities/manipal.webp",
    logoColor: "#0D9488",
    logoBg: "#CCFBF1",
    logoSymbol: "BWU",
  },
  {
    id: "symbiosis-pune",
    name: "Symbiosis Pune",
    image: "/images/universities/manipal.webp",
    logoColor: "#D97706",
    logoBg: "#FEF3C7",
    logoSymbol: "SIU",
  },
  {
    id: "amity-university",
    name: "Amity University",
    image: "/images/universities/christ.webp",
    logoColor: "#16A34A",
    logoBg: "#DCFCE7",
    logoSymbol: "AMITY",
  },
  {
    id: "mit-adt",
    name: "MIT ADT University",
    image: "/images/universities/manipal.webp",
    logoColor: "#9333EA",
    logoBg: "#F3E8FF",
    logoSymbol: "MIT",
  },
];

export default function UniversityMarquee() {
  const row1Duplicated = [
    ...universitiesRow1,
    ...universitiesRow1,
    ...universitiesRow1,
  ];
  const row2Duplicated = [
    ...universitiesRow2,
    ...universitiesRow2,
    ...universitiesRow2,
  ];

  return (
    <section className="relative py-14 sm:py-18 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden select-none">
      {/* Section Header */}
      <Container className="mb-8">
        <SectionHeading
          eyebrow="Partner Colleges"
          title="Top Private & Deemed Universities We Work With"
          description="We guide and assist students with admissions to top private and deemed universities across major educational hubs."
          align="center"
        />
      </Container>

      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none" />

      {/* Row 1: Continuous Marquee Scrolling Left */}
      <div className="relative flex overflow-hidden mb-4 py-1">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {row1Duplicated.map((uni, idx) => (
            <MarqueeCard key={`r1-${uni.id}-${idx}`} uni={uni} />
          ))}
        </div>
      </div>

      {/* Row 2: Continuous Marquee Scrolling Right */}
      <div className="relative flex overflow-hidden py-1">
        <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6">
          {row2Duplicated.map((uni, idx) => (
            <MarqueeCard key={`r2-${uni.id}-${idx}`} uni={uni} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeCard({ uni }: { uni: UniversityItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href="/universities"
      className="flex items-center gap-3.5 bg-white border border-[#E2E8F0] hover:border-[#04164B]/30 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 group cursor-pointer"
    >
      {/* University Logo / Symbol */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden flex-shrink-0 border border-[#E2E8F0] bg-[#F8FAFC]">
        {uni.image && !imgError ? (
          <Image
            src={uni.image}
            alt={`${uni.name} logo`}
            fill
            sizes="44px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-extrabold text-xs uppercase"
            style={{ backgroundColor: uni.logoBg, color: uni.logoColor }}
          >
            {uni.logoSymbol}
          </div>
        )}
      </div>

      {/* University Name */}
      <div className="flex flex-col justify-center">
        <span className="text-sm sm:text-base font-bold text-[#04164B] group-hover:text-[#B30F66] transition-colors whitespace-nowrap tracking-tight">
          {uni.name}
        </span>
      </div>
    </Link>
  );
}
