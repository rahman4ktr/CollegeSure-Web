import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://collegesure.brainzima.com";
const SITE_NAME = "CollegeSure";
const BRAND_TITLE = "CollegeSure — College Admission & Career Guidance Platform";
const SITE_DESCRIPTION =
  "CollegeSure by Brainzima provides honest, transparent admissions guidance for Medical, Paramedical, Nursing, Engineering, BCA, BBA, B.Com and graduation courses.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BRAND_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "college admissions",
    "admission guidance",
    "college counselling Katihar",
    "college guidance Bihar",
    "medical admissions",
    "nursing admissions",
    "GNM nursing admissions",
    "B.Sc Nursing colleges",
    "B.Tech CSE admissions",
    "BCA course guidance",
    "BBA course guidance",
    "B.Com admissions",
    "free college counselling",
    "Brainzima Innovation Institute",
  ],
  authors: [{ name: "Brainzima Innovation Institute", url: "https://www.brainzima.com/" }],
  creator: "CollegeSure by Brainzima",
  publisher: "CollegeSure by Brainzima",
  icons: {
    icon: [
      { url: "/faviconLogo.png", type: "image/png" },
      { url: "/images/faviconLogo.png", type: "image/png" },
    ],
    shortcut: "/faviconLogo.png",
    apple: "/faviconLogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: BRAND_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: BRAND_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
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
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;

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
          url: `${SITE_URL}/og-image.png`,
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
      images: [`${SITE_URL}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION };
