import { NextResponse } from "next";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";
import { getNews } from "@/lib/sanity/resolvers";

export async function GET() {
  const date = new Date().toUTCString();

  const staticItems = [
    {
      title: "Medical & Paramedical Admissions Guidance 2026",
      link: `${SITE_URL}/courses/medical`,
      description:
        "Complete admission guidance for MBBS, B.Sc Nursing, GNM, B.Pharm, D.Pharm, and Allied Health Sciences across top colleges.",
      pubDate: date,
    },
    {
      title: "Engineering (B.Tech / M.Tech) Admissions",
      link: `${SITE_URL}/courses/engineering`,
      description:
        "Comprehensive guidance for Computer Science, Mechanical, Civil, ECE, and AI/ML B.Tech & Diploma programs.",
      pubDate: date,
    },
    {
      title: "Graduation Programs (BCA, BBA, B.Com, BA)",
      link: `${SITE_URL}/courses/graduation`,
      description:
        "Top college options and direct admission support for BCA, BBA, B.Com, and General Degree courses.",
      pubDate: date,
    },
    {
      title: "Free Instant Career & Admission Counselling",
      link: `${SITE_URL}/free-counselling`,
      description:
        "Get 100% free, instant personalized guidance from expert counsellors regarding courses, fees, eligibility, and direct admissions.",
      pubDate: date,
    },
    {
      title: "Partner Universities & Colleges Directory",
      link: `${SITE_URL}/universities`,
      description:
        "Browse top private and deemed colleges across Bihar, West Bengal, Karnataka, and major educational hubs.",
      pubDate: date,
    },
    {
      title: "Step-by-Step Admission Process Guide",
      link: `${SITE_URL}/admission-process`,
      description:
        "Learn how CollegeSure guides you through course selection, application, document verification, and seat confirmation.",
      pubDate: date,
    },
  ];

  const news = await getNews();
  const newsItems = news.map((item) => ({
    title: item.title,
    link: `${SITE_URL}/news/${item.slug?.current || item._id}`,
    description: item.excerpt || item.title,
    pubDate: item.publishedAt ? new Date(item.publishedAt).toUTCString() : date,
  }));

  const items = [...newsItems, ...staticItems];

  const rssItemsXml = items
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
    )
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${SITE_NAME}]]></title>
    <link>${SITE_URL}</link>
    <description><![CDATA[${SITE_DESCRIPTION}]]></description>
    <language>en-in</language>
    <lastBuildDate>${date}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
