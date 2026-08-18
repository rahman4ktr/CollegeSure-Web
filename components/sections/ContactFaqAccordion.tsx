'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';

const contactFaqs = [
  {
    question: "Is CollegeSure counselling 100% free?",
    answer: "Yes, 100%! All initial career guidance, course comparisons, eligibility checks, and college counselling sessions provided by CollegeSure are completely free for students and parents.",
  },
  {
    question: "How quickly will a counsellor contact me after I submit an enquiry?",
    answer: "Our team active hours are 9:00 AM - 6:00 PM. For inquiries submitted during working hours, a dedicated advisor typically contacts you via call or WhatsApp within 15 to 30 minutes. Outside office hours, we respond first thing the next morning.",
  },
  {
    question: "Can I visit the Katihar campus in person without a prior appointment?",
    answer: "Walk-in visits are welcome Monday through Saturday between 9:00 AM and 6:00 PM at our campus near Bachcha Hospital, Anathalaya Rd, Katihar, Bihar. However, booking an appointment via form or WhatsApp ensures an advisor is immediately reserved for you.",
  },
  {
    question: "What documents should I keep ready for counselling?",
    answer: "For initial counselling, your 10th & 12th marksheets and entrance rank card (if applicable like NEET or JEE) are helpful. Don't worry if you don't have them handy — our counsellors can guide you based on your expected scores.",
  },
  {
    question: "Do you assist with admission applications and documentation?",
    answer: "Yes! We provide end-to-end assistance — from shortlisting government-recognized colleges (UGC/AICTE/INC approved) to application filing, document verification, and seat confirmation.",
  },
];

/**
 * MUI-inspired accessible Accordion component matching CollegeSure design system.
 */
export default function ContactFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
      <Container narrow>
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0D9488] uppercase tracking-widest bg-[#0D9488]/10 px-3.5 py-1.5 rounded-full mb-3">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#04164B]">
              Got Questions? We Have Answers
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              Common questions about contacting our counselling team and visiting our campus.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const itemId = `contact-faq-${idx}`;

            return (
              <ScrollReveal key={idx} delay={idx * 0.05} direction="up">
                <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-2xs hover:border-[#0D9488]/40 transition-colors">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`${itemId}-content`}
                    id={`${itemId}-header`}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#04164B] hover:text-[#0D9488] transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg leading-snug">{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#0D9488] text-white rotate-180' : 'bg-[#F8FAFC] text-[#94A3B8]'
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${itemId}-content`}
                        role="region"
                        aria-labelledby={`${itemId}-header`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 sm:px-6 text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
