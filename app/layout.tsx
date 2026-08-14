import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { defaultMetadata, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { CounsellingModalProvider } from "@/components/providers/CounsellingModalProvider";
import JsonLd from "@/components/seo/JsonLd";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getWebPageSchema,
} from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#04164B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getWebPageSchema("/", "CollegeSure — College Admission & Career Guidance Platform", SITE_DESCRIPTION),
  ];

  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="icon" href="/faviconLogo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/faviconLogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/faviconLogo.png" />
        <link rel="alternate" type="application/rss+xml" title={`${SITE_NAME} RSS Feed`} href="/rss.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <JsonLd nodes={rootGraphNodes} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <SmoothScrollProvider>
          <CounsellingModalProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </CounsellingModalProvider>
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
