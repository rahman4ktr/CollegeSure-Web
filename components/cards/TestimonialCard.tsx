"use client";

import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import Card3DTilt from "@/components/ui/Card3DTilt";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating ? "fill-[#F97316] text-[#F97316]" : "fill-[#E2E8F0] text-[#E2E8F0]"
          }
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card3DTilt glowColor="rgba(249, 115, 22, 0.12)" className="h-full">
      <article className="card-base p-5 sm:p-6 flex flex-col h-full relative bg-white border border-[#E2E8F0] rounded-2xl transition-all duration-300">
        {/* Quote icon */}
        <div className="absolute top-5 right-5 opacity-10">
          <Quote size={32} className="text-[#0B3C5D]" aria-hidden />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Quote */}
        <blockquote className="text-sm text-[#475569] leading-relaxed flex-1 mb-5 italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Student Info */}
        <footer className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
          {/* Avatar placeholder */}
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B3C5D] to-[#0D9488] flex items-center justify-center flex-shrink-0 shadow-sm"
            aria-hidden
          >
            <span className="text-white text-sm font-bold">
              {testimonial.studentName.charAt(0)}
            </span>
          </div>
          <div>
            <cite className="not-italic text-sm font-bold text-[#0F172A]">
              {testimonial.studentName}
            </cite>
            <p className="text-xs text-[#475569]">
              {testimonial.course} · {testimonial.city}
            </p>
          </div>
        </footer>
      </article>
    </Card3DTilt>
  );
}
