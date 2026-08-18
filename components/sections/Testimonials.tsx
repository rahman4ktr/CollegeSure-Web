"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Quote,
  Users,
  TrendingUp,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MessageCircle
} from "lucide-react";
import { Box, Container, Card, Avatar, Rating, IconButton } from "@mui/material";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const enhancedTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "B.Tech Student",
    location: "Delhi",
    content: "CollegeSure helped me find the right engineering college without any confusion. Their counsellors were patient and explained every option clearly.",
    rating: 5,
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
    program: "B.Tech CSE",
    college: "IIT Kanpur",
    date: "2024",
    featured: false,
    tags: ["Parent", "Grateful"],
  },
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
    <Box
      component="section"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      aria-labelledby="testimonials-heading"
    >
      <Container maxWidth="lg">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Student Stories"
            title="What Students & Parents Say"
            description="Real experiences from students and parents who received guidance from CollegeSure."
            align="left"
            id="testimonials-heading"
          />

          <Link
            href="/success-stories"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors group bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-lg"
            aria-label="View all success stories"
          >
            <span>All Stories</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative group h-full">
              <Card
                elevation={0}
                className="relative bg-white rounded-2xl border transition-all duration-300 h-full flex flex-col border-[#E2E8F0] shadow-sm hover:shadow-xl"
              >
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={32} className="text-[#0B3C5D]" />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      <Rating value={testimonial.rating} readOnly size="small" sx={{ fontSize: "16px", color: "#F97316" }} />
                      <span className="text-xs text-[#94A3B8] ml-1">{testimonial.date}</span>
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-3">
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: "#0D9488",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
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

                    <div className="mt-3 flex flex-wrap gap-1">
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

                  {testimonial.featured && (
                    <div className="absolute top-3 left-3 z-10">
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#F97316] to-[#ea6c0c] rounded-full shadow-lg">
                        <Sparkles size={10} className="text-white" />
                        <span className="text-[8px] font-bold text-white">Featured</span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <IconButton
              onClick={prevPage}
              className="bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} className="text-[#0B3C5D]" />
            </IconButton>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 cursor-pointer border-none bg-transparent"
                  aria-label={`Go to testimonial page ${idx + 1}`}
                >
                  <span
                    className={`
                      block h-2.5 rounded-full transition-all duration-300
                      ${currentPage === idx
                        ? 'bg-[#0D9488] w-8'
                        : 'bg-[#E2E8F0] hover:bg-[#94A3B8] w-2.5'
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            <IconButton
              onClick={nextPage}
              className="bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} className="text-[#0B3C5D]" />
            </IconButton>
          </div>
        )}

        <div className="mt-12 text-center">
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
              <ArrowRight size={18} />
            </span>
          </Button>
        </div>
      </Container>
    </Box>
  );
}