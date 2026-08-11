"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Quote,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

// Enhanced testimonials data with additional fields
const enhancedTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "B.Tech Student",
    location: "Delhi",
    content: "CollegeSure helped me find the right engineering college without any confusion. Their counsellors were patient and explained every option clearly.",
    rating: 5,
    image: "/images/testimonials/priya.jpg",
    program: "B.Tech CSE",
    college: "IIT Delhi",
    date: "2024",
    featured: true,
    tags: ["Engineering", "Success Story"],
  },
  {
    id: 2,
    name: "Rahul Kumar",
    role: "Medical Student",
    location: "Patna",
    content: "I was completely lost about which medical college to choose. The team at CollegeSure guided me through every step and I'm now studying at AIIMS.",
    rating: 5,
    image: "/images/testimonials/rahul.jpg",
    program: "MBBS",
    college: "AIIMS Delhi",
    date: "2024",
    featured: true,
    tags: ["Medical", "Dream College"],
  },
  {
    id: 3,
    name: "Sneha Patel",
    role: "Parent",
    location: "Mumbai",
    content: "As a parent, I wanted the best for my daughter. CollegeSure made the admission process stress-free with their transparent and honest guidance.",
    rating: 5,
    image: "/images/testimonials/sneha.jpg",
    program: "BCA",
    college: "Christ University",
    date: "2024",
    featured: false,
    tags: ["Parent", "Trust"],
  },
  {
    id: 4,
    name: "Amit Singh",
    role: "Engineering Student",
    location: "Bangalore",
    content: "The personalized counselling helped me understand which engineering branch suits my skills. I'm now pursuing my dream career.",
    rating: 4,
    image: "/images/testimonials/amit.jpg",
    program: "B.Tech Mechanical",
    college: "NIT Surathkal",
    date: "2023",
    featured: false,
    tags: ["Engineering", "Career"],
  },
  {
    id: 5,
    name: "Meera Reddy",
    role: "Medical Student",
    location: "Hyderabad",
    content: "CollegeSure's support didn't end with admission. They helped me with scholarship applications and hostel accommodation too.",
    rating: 5,
    image: "/images/testimonials/meera.jpg",
    program: "B.Sc Nursing",
    college: "CMC Vellore",
    date: "2024",
    featured: false,
    tags: ["Medical", "Support"],
  },
  {
    id: 6,
    name: "Deepak Verma",
    role: "Parent",
    location: "Lucknow",
    content: "I recommend CollegeSure to every parent I meet. They made a complex process simple and helped my son get into a top engineering college.",
    rating: 5,
    image: "/images/testimonials/deepak.jpg",
    program: "B.Tech CSE",
    college: "IIT Kanpur",
    date: "2024",
    featured: false,
    tags: ["Parent", "Grateful"],
  },
];

const floatingStats = [
  { label: "Happy Students", value: "15,000+", icon: Users },
  { label: "Success Rate", value: "92%", icon: TrendingUp },
  { label: "5-Star Ratings", value: "4.9/5", icon: Star },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(enhancedTestimonials.length / testimonialsPerPage);

  const displayedTestimonials = enhancedTestimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient Background — CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0D9488]/5 blur-3xl animate-ambient-slow" />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/5 blur-3xl animate-ambient-slow-reverse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#6366F1]/5 blur-3xl animate-ambient-center" />

        {/* Floating Stats Background — CSS */}
        {floatingStats.map((stat, idx) => (
          <div
            key={stat.label}
            className="absolute hidden xl:block animate-fade-float"
            style={{
              top: `${15 + idx * 35}%`,
              right: `${5 + idx * 10}%`,
              animationDelay: `${idx * 0.5}s`,
              animationDuration: `${4 + idx * 1.5}s`,
            }}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0D9488]/10 flex items-center justify-center">
                  <stat.icon size={16} className="text-[#0D9488]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B3C5D]">{stat.value}</div>
                  <div className="text-[10px] text-[#94A3B8]">{stat.label}</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Decorative Quote Icons — CSS */}
        <div className="absolute top-20 left-20 hidden lg:block text-8xl opacity-5 animate-quote-float">
          "
        </div>
        <div
          className="absolute bottom-20 right-20 hidden lg:block text-8xl opacity-5 animate-quote-float"
          style={{ animationDelay: "2s" }}
        >
          "
        </div>
      </div>

      <Container>
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div className="relative">
              <SectionHeading
                eyebrow="Student Stories"
                title="What Students & Parents Say"
                description="Real experiences from students and parents who received guidance from CollegeSure."
                align="left"
                id="testimonials-heading"
              />

              {/* Rating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 hidden md:flex items-center gap-1.5 bg-white border border-[#E2E8F0] rounded-full px-3 py-1.5 shadow-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={12} className="fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#0B3C5D]">4.9/5</span>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                href="/success-stories"
                className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors group bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-lg"
                aria-label="View all success stories"
              >
                <span>All Stories</span>
                <span className="animate-bounce-x">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {displayedTestimonials.map((testimonial, idx) => (
              <ScrollReveal key={testimonial.id} delay={idx * 0.08} direction="up">
                <div className="relative group h-full">
                  {/* Glow Effect — CSS */}
                  <div className="absolute -inset-0.5 blur-2xl rounded-2xl transition-opacity duration-500 bg-[#0D9488] opacity-0 group-hover:opacity-15" />

                  <div className="relative bg-white rounded-2xl border transition-all duration-500 h-full flex flex-col border-[#E2E8F0] shadow-sm group-hover:shadow-2xl group-hover:border-transparent">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <Quote size={32} className="text-[#0B3C5D]" />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`
                              ${i < testimonial.rating
                                ? 'fill-[#F97316] text-[#F97316]'
                                : 'fill-[#E2E8F0] text-[#E2E8F0]'
                              }
                            `}
                          />
                        ))}
                        <span className="text-xs text-[#94A3B8] ml-1">
                          {testimonial.date}
                        </span>
                      </div>

                      {/* Content */}
                      <p className="text-sm text-[#475569] leading-relaxed flex-grow opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                        "{testimonial.content}"
                      </p>

                      {/* User Info */}
                      <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D9488]/10 to-[#0B3C5D]/10 flex items-center justify-center text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#0F172A]">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-[#94A3B8]">
                            {testimonial.role} • {testimonial.location}
                          </div>
                          <div className="text-[10px] text-[#0D9488] font-medium mt-0.5">
                            {testimonial.program} • {testimonial.college}
                          </div>
                        </div>
                      </div>

                      {/* Tags — CSS hover reveal */}
                      <div className="mt-3 flex flex-wrap gap-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {testimonial.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {testimonial.featured && (
                      <motion.div
                        className="absolute top-3 left-3 z-10"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#F97316] to-[#ea6c0c] rounded-full shadow-lg">
                          <Sparkles size={10} className="text-white" />
                          <span className="text-[8px] font-bold text-white">Featured</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {totalPages > 1 && (
          <ScrollReveal direction="up" delay={0.4}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.button
                onClick={prevPage}
                className="p-2 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} className="text-[#0B3C5D]" />
              </motion.button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`
                      w-2.5 h-2.5 rounded-full transition-all duration-300
                      ${currentPage === idx
                        ? 'bg-[#0D9488] w-8'
                        : 'bg-[#E2E8F0] hover:bg-[#94A3B8]'
                      }
                    `}
                    whileHover={{ scale: currentPage === idx ? 1 : 1.2 }}
                    aria-label={`Go to testimonial page ${idx + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextPage}
                className="p-2 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} className="text-[#0B3C5D]" />
              </motion.button>
            </div>
          </ScrollReveal>
        )}

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-12 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-2 blur-2xl rounded-2xl bg-[#0D9488]/20 animate-ambient-center" />
              <div className="relative">
                <Button
                  as="a"
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden px-8 py-4 text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle size={18} />
                    Share Your Story
                    <span className="animate-bounce-x">
                      <ArrowRight size={18} />
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B3C5D] via-[#0D9488] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Disclosure note */}
        <motion.p
          className="mt-6 text-center text-xs text-[#94A3B8]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          * These are representative testimonials. Individual experiences may vary.
        </motion.p>
      </Container>

      {/* Decorative Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-[#F8FAFC]"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 20%, 0 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}