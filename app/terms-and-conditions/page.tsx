import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import { FileText } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata(
  "Terms & Conditions — CollegeSure by Brainzima",
  "Read the terms and conditions governing the use of CollegeSure's admissions guidance services.",
  "/terms-and-conditions"
);

export default function TermsPage() {
  const termsGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/terms-and-conditions", "Terms & Conditions — CollegeSure by Brainzima", "Read the terms and conditions governing the use of CollegeSure's admissions guidance services.", "WebPage"),
    getBreadcrumbSchema("/terms-and-conditions", [
      { name: "Home", url: "/" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" },
    ]),
  ];

  return (
    <>
      <JsonLd nodes={termsGraphNodes} />
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-[#E2E8F0] py-14 sm:py-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-20 left-0 w-[400px] h-[400px] rounded-full bg-[#F97316]/6 blur-3xl" />
        </div>
        <Container narrow className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-xl flex items-center justify-center">
              <FileText size={20} className="text-[#0B3C5D]" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Legal
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3C5D] mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-[#475569] text-sm">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </Container>
      </div>

      <div className="bg-white section-py">
        <Container narrow>
          <div className="space-y-8 text-[#475569] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F97316] rounded-full" />
                1. Acceptance of Terms
              </h2>
              <p>
                By using the CollegeSure website and services, you agree to be bound
                by these Terms and Conditions. If you do not agree to these terms,
                please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F97316] rounded-full" />
                2. Nature of Our Services
              </h2>
              <p>
                CollegeSure provides admissions guidance and counselling services to
                help students and parents identify suitable colleges and courses.
                Our services are advisory in nature. We do not guarantee admission
                to any specific college or institution.
              </p>
              <p className="mt-3">
                Admission decisions are made by colleges and universities based on
                their own criteria. CollegeSure facilitates the process but does not
                control admission outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F97316] rounded-full" />
                3. No Guarantees
              </h2>
              <p>
                CollegeSure does not guarantee:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Admission to any specific college or course</li>
                <li>Any specific placement or employment outcome</li>
                <li>Any specific academic performance</li>
                <li>Any specific financial outcome</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F97316] rounded-full" />
                4. User Responsibilities
              </h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Provide accurate information in your enquiry forms</li>
                <li>Verify all information about colleges and courses independently</li>
                <li>Make your own informed decisions based on our guidance</li>
                <li>Not misuse our services or website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F97316] rounded-full" />
                5. Intellectual Property
              </h2>
              <p>
                All content on the CollegeSure website, including text, images, and
                design, is the property of Brainzima Innovation Institute and is
                protected by applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F97316] rounded-full" />
                6. Limitation of Liability
              </h2>
              <p>
                CollegeSure and Brainzima Innovation Institute shall not be liable
                for any indirect, incidental, or consequential damages arising from
                the use of our services or any admission decisions made based on our
                guidance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F97316] rounded-full" />
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any
                time. Continued use of our services after changes constitutes your
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F97316] rounded-full" />
                8. Contact
              </h2>
              <p>
                For questions about these Terms, contact us at:{" "}
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
