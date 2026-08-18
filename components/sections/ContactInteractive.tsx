'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Clock,
  Copy,
  Check,
  Megaphone,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import Card3DTilt from '@/components/ui/Card3DTilt';
import FeedbackSnackbar from '@/components/ui/FeedbackSnackbar';

interface ContactInteractiveProps {
  siteSettings: any;
  defaultPhone: string;
  defaultPhoneHref: string;
  defaultEmail: string;
  defaultEmailHref: string;
  defaultAddress: string;
  defaultWaHref: string;
  mapsHref: string;
}

export default function ContactInteractive({
  siteSettings,
  defaultPhone,
  defaultPhoneHref,
  defaultEmail,
  defaultEmailHref,
  defaultAddress,
  defaultWaHref,
  mapsHref,
}: ContactInteractiveProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'call' | 'whatsapp' | 'visit' | 'email'>('all');
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({ open: false, message: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const banner = siteSettings?.announcementBanner;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setSnackbar({ open: true, message: `${label} copied to clipboard!` });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const phone = siteSettings?.contactPhone || defaultPhone;
  const phoneHref = siteSettings?.contactPhone ? `tel:${siteSettings.contactPhone.replace(/\s+/g, '')}` : defaultPhoneHref;
  const email = siteSettings?.contactEmail || defaultEmail;
  const emailHref = siteSettings?.contactEmail ? `mailto:${siteSettings.contactEmail}` : defaultEmailHref;
  const address = siteSettings?.address || defaultAddress;
  const waHref = siteSettings?.whatsappNumber
    ? `https://wa.me/${siteSettings.whatsappNumber}?text=Hello%20Brainzima%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20admissions.`
    : defaultWaHref;

  return (
    <>
      {/* ── 1. SANITY CMS ANNOUNCEMENT BANNER ───────────────────────────────── */}
      {banner?.enabled && (
        <div className="bg-gradient-to-r from-[#04164B] via-[#591084] to-[#B30F66] text-white py-3 px-4 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-semibold">
            <div className="flex items-center gap-2">
              <Megaphone size={16} className="text-[#F7D51A] flex-shrink-0 animate-bounce" />
              <span>{banner.text || "Admissions open for 2026 academic batch. Apply for free counselling today!"}</span>
            </div>

            {banner.link && (
              <a
                href={banner.link}
                className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 px-3 py-1 rounded-full text-white text-[11px] font-bold transition-all border border-white/20"
              >
                <span>Learn More</span>
                <ArrowRight size={12} />
              </a>
            )}
          </div>
        </div>
      )}

      {/* ── 2. QUICK COPY ACTION BAR ────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-bold text-[#04164B] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#0D9488]" />
              Quick Contact Actions:
            </span>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => copyToClipboard(phone, 'Phone number')}
                className="inline-flex items-center gap-1.5 bg-white border border-[#E2E8F0] hover:border-[#0D9488] px-3 py-1.5 rounded-xl font-medium text-[#04164B] transition-all shadow-2xs hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone size={12} className="text-[#0D9488]" />
                <span>Call: {phone}</span>
                {copiedField === 'Phone number' ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} className="text-[#94A3B8]" />}
              </button>

              <button
                onClick={() => copyToClipboard(email, 'Email address')}
                className="inline-flex items-center gap-1.5 bg-white border border-[#E2E8F0] hover:border-[#F97316] px-3 py-1.5 rounded-xl font-medium text-[#04164B] transition-all shadow-2xs hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail size={12} className="text-[#F97316]" />
                <span>Email: {email}</span>
                {copiedField === 'Email address' ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} className="text-[#94A3B8]" />}
              </button>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-xl font-bold transition-all shadow-2xs hover:bg-[#1fb858] hover:-translate-y-0.5"
              >
                <MessageCircle size={12} />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <FeedbackSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity="success"
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  );
}
