import { Course } from "@/lib/types";

export const CANONICAL_SITE_URL = "https://collegesure.brainzima.com";
export const ORGANIZATION_ID = `${CANONICAL_SITE_URL}/#organization`;
export const PARENT_ORGANIZATION_ID = `${CANONICAL_SITE_URL}/#parent-organization`;
export const WEBSITE_ID = `${CANONICAL_SITE_URL}/#website`;

/**
 * Returns canonical CollegeSure Organization Schema object
 */
export function getCollegeSureOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    "name": "CollegeSure",
    "alternateName": "CollegeSure by Brainzima",
    "url": CANONICAL_SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "@id": `${CANONICAL_SITE_URL}/#logo`,
      "url": `${CANONICAL_SITE_URL}/faviconLogo.png`,
      "caption": "CollegeSure Logo",
    },
    "description":
      "CollegeSure is an education and admissions guidance platform by Brainzima Innovation Institute, helping students explore verified courses, colleges, and admission procedures with complete transparency.",
    "email": "contact@brainzima.com",
    "telephone": "+91-7979864304",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Anathalaya Rd, near Bachcha Hospital",
      "addressLocality": "Katihar",
      "addressRegion": "Bihar",
      "postalCode": "854105",
      "addressCountry": "IN",
    },
    "parentOrganization": {
      "@type": "Organization",
      "@id": PARENT_ORGANIZATION_ID,
      "name": "Brainzima Innovation Institute",
      "url": "https://www.brainzima.com/",
      "sameAs": [
        "https://linkedin.com/company/brainzima/",
        "https://www.facebook.com/brainzima",
        "https://www.instagram.com/brainzima/",
        "https://github.com/brainzima",
      ],
    },
  };
}

/**
 * Returns canonical CollegeSure WebSite Schema object
 */
export function getCollegeSureWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "url": CANONICAL_SITE_URL,
    "name": "CollegeSure",
    "alternateName": "CollegeSure Guidance Platform",
    "description": "College Admission & Career Guidance Platform by Brainzima Innovation Institute",
    "publisher": {
      "@id": ORGANIZATION_ID,
    },
    "inLanguage": "en-IN",
  };
}

/**
 * Returns WebPage schema for specific URLs
 */
export function getWebPageSchema(
  path: string,
  name: string,
  description: string,
  pageType: "WebPage" | "AboutPage" | "ContactPage" | "ItemPage" = "WebPage"
) {
  const pageUrl = path === "/" ? CANONICAL_SITE_URL : `${CANONICAL_SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    "@type": pageType,
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": name,
    "description": description,
    "isPartOf": {
      "@id": WEBSITE_ID,
    },
    "about": {
      "@id": ORGANIZATION_ID,
    },
    "inLanguage": "en-IN",
  };
}

/**
 * Returns BreadcrumbList schema object
 */
export function getBreadcrumbSchema(path: string, items: { name: string; url: string }[]) {
  const pageUrl = path === "/" ? CANONICAL_SITE_URL : `${CANONICAL_SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": items.map((item, index) => {
      const fullUrl = item.url.startsWith("http")
        ? item.url
        : `${CANONICAL_SITE_URL}${item.url.startsWith("/") ? item.url : `/${item.url}`}`;
      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": fullUrl,
      };
    }),
  };
}

/**
 * Returns Course Schema object for verified course detail pages
 */
export function getCourseSchema(course: Course) {
  const courseUrl = `${CANONICAL_SITE_URL}/courses/${course.slug}`;
  return {
    "@type": "Course",
    "@id": `${courseUrl}#course`,
    "name": course.name,
    "description": course.description,
    "url": courseUrl,
    "educationalLevel": "Undergraduate",
    "timeRequired": course.duration,
    "occupationalCredentialAwarded": course.name,
    "provider": {
      "@id": ORGANIZATION_ID,
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Full-Time",
      "courseWorkload": course.duration,
      "location": course.location,
    },
  };
}

/**
 * Returns FAQPage schema object
 */
export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

/**
 * Builds a single unified @graph JSON-LD structure
 */
export function buildJsonLdGraph(nodes: (object | null | undefined)[]) {
  const validNodes = nodes.filter((n): n is object => Boolean(n));
  return {
    "@context": "https://schema.org",
    "@graph": validNodes,
  };
}

export function getNewsArticleSchema(news: any) {
  const articleUrl = `${CANONICAL_SITE_URL}/news/${news.slug?.current || news._id}`;

  return {
    "@type": "NewsArticle",
    "@id": `${articleUrl}#article`,
    "url": articleUrl,
    "headline": news.title,
    "description": news.excerpt || news.title,
    "datePublished": news.publishedAt || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": news.author || "CollegeSure Admissions Team",
    },
    "publisher": {
      "@id": ORGANIZATION_ID,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
}

export function getEventSchema(event: any) {
  const eventUrl = `${CANONICAL_SITE_URL}/events#${event._id}`;

  return {
    "@type": "Event",
    "@id": eventUrl,
    "name": event.title,
    "description": event.description,
    "startDate": event.date,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": event.location || "CollegeSure Guidance Center",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Katihar",
        "addressRegion": "Bihar",
        "addressCountry": "IN",
      },
    },
    "organizer": {
      "@id": ORGANIZATION_ID,
    },
  };
}
