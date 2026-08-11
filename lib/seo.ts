import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://brainzima.com";
const SITE_NAME = "CollegeSure by Brainzima";
const SITE_DESCRIPTION =
  "CollegeSure helps students and parents find the right college and course. Expert admissions guidance for Medical, Paramedical, Engineering, BCA, BBA, B.Com and other graduation programs.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Your College. Our Assurance.`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "college admissions",
    "admission guidance",
    "medical admissions",
    "nursing admissions",
    "engineering admissions",
    "BCA admissions",
    "BBA admissions",
    "college counselling",
    "courses after 12th",
    "college selection",
    "GNM nursing",
    "B.Sc Nursing",
    "B.Tech admissions",
    "free counselling",
  ],
  authors: [{ name: "Brainzima Innovation Institute" }],
  creator: "Brainzima Innovation Institute",
  publisher: "Brainzima Innovation Institute",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/images/faviconLogo.png", type: "image/png" },
      { url: "/faviconLogo.png", type: "image/png" },
    ],
    shortcut: "/images/faviconLogo.png",
    apple: "/images/faviconLogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Your College. Our Assurance.`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Your College. Our Assurance.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Your College. Our Assurance.`,
    description: SITE_DESCRIPTION,
    creator: "@brainzima",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": `${SITE_URL}/rss.xml`,
    },
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = "/"
): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${SITE_URL}/rss.xml`,
      },
    },
  };
}

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION };
