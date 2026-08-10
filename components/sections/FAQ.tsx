"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQ } from "@/lib/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  schema?: boolean;
}

function FAQItem({ faq, isOpen, onToggle, index }: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen
        ? "border-[#0D9488]/25 bg-[#0D9488]/[0.03] shadow-sm"
        : "border-[#E2E8F0] hover:border-[#0D9488]/15 hover:shadow-sm"
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-5 py-4.5 text-left hover:bg-[#F8FAFC]/50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span className={`text-xs font-bold mt-1 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
            isOpen ? "bg-[#0D9488] text-white" : "bg-[#F1F5F9] text-[#94A3B8]"
          }`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-semibold text-[#0F172A] text-sm sm:text-base leading-snug">
            {faq.question}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`text-[#0D9488] flex-shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-5 pb-5 text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0]/60 pt-3 ml-9">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion({ faqs, title = "Frequently Asked Questions", schema = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const structuredData = schema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] mb-6">{title}</h2>
      )}
      <div className="space-y-2.5">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}
