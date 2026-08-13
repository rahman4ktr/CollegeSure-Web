import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import { Scale } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata(
  "Privacy Policy — CollegeSure by Brainzima",
  "Read CollegeSure's privacy policy to understand how we collect, use, and protect your personal information.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  const privacyGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/privacy-policy", "Privacy Policy — CollegeSure by Brainzima", "Read CollegeSure's privacy policy to understand how we collect, use, and protect your personal information.", "WebPage"),
    getBreadcrumbSchema("/privacy-policy", [
      { name: "Home", url: "/" },
      { name: "Privacy Policy", url: "/privacy-policy" },
    ]),
  ];

  return (
    <>
      <JsonLd nodes={privacyGraphNodes} />
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-[#E2E8F0] py-14 sm:py-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#0D9488]/8 blur-3xl" />
        </div>
        <Container narrow className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-xl flex items-center justify-center">
              <Scale size={20} className="text-[#0B3C5D]" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Legal
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3C5D] mb-3">
            Privacy Policy
          </h1>
          <p className="text-[#475569] text-sm">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </Container>
      </div>

      <div className="bg-white section-py">
        <Container narrow>
          <div className="prose prose-slate max-w-none space-y-8 text-[#475569] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#0D9488] rounded-full" />
                1. Introduction
              </h2>
              <p>
                CollegeSure by Brainzima Innovation Institute (&quot;CollegeSure,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#0D9488] rounded-full" />
                2. Information We Collect
              </h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Full name and contact information (phone number, email address)</li>
                <li>Academic background and course preferences</li>
                <li>City and state information</li>
                <li>Messages and enquiries submitted through our forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#0D9488] rounded-full" />
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Provide personalized admissions counselling services</li>
                <li>Contact you in response to your enquiry</li>
                <li>Send relevant information about courses and admission guidance</li>
                <li>Improve our services and website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#0D9488] rounded-full" />
                4. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information with colleges or institutions
                only when necessary to facilitate your admission enquiry, and only
                with your knowledge and consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#0D9488] rounded-full" />
                5. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or
                destruction. However, no internet transmission is completely secure
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#0D9488] rounded-full" />
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of communications from us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#0D9488] rounded-full" />
                7. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:contact@brainzima.com" className="text-[#0D9488] hover:underline font-medium">
                  contact@brainzima.com
                </a>
              </p>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}
