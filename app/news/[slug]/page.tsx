import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";
import CTASection from "@/components/sections/CTASection";
import { getNewsBySlug, getAllNewsSlugs } from "@/lib/resolvers";
import {
  getCollegeSureOrganizationSchema,
  getCollegeSureWebSiteSchema,
  getNewsArticleSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 1800;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    return { title: "News Article Not Found" };
  }

  const title = `${news.title} | CollegeSure News`;
  const description = news.excerpt || news.title;
  const url = `${SITE_URL}/news/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: news.publishedAt,
    },
    alternates: { canonical: url },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) notFound();

  const imgUrl = null;
  const formattedDate = news.publishedAt
    ? new Date(news.publishedAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const newsGraphNodes = [
    getCollegeSureOrganizationSchema(),
    getCollegeSureWebSiteSchema(),
    getNewsArticleSchema(news),
  ];

  return (
    <div className="relative overflow-hidden bg-[#FDFDFD]">
      <JsonLd nodes={newsGraphNodes} />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#04164B] via-[#040943] to-[#591084] text-white py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "News", href: "/news" },
              { label: news.title },
            ]}
            className="text-white/70 [&>span]:text-white/40 mb-4"
          />

          <div className="max-w-4xl">
            {news.category && (
              <Badge variant="teal" className="mb-4 bg-white/10 text-white border-white/20">
                {news.category}
              </Badge>
            )}

            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-4 text-white">
              {news.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-white/80">
              {formattedDate && (
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#F7D51A]" />
                  {formattedDate}
                </span>
              )}
              {news.author && (
                <span className="flex items-center gap-1.5">
                  <User size={14} className="text-[#0D9488]" />
                  By {news.author}
                </span>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Body */}
      <div className="bg-[#F8FAFC] section-py">
        <Container narrow>
          <ScrollReveal direction="up">
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
              {imgUrl && (
                <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 bg-[#F1F5F9]">
                  <Image
                    src={imgUrl}
                    alt={news.featuredImage?.alt || news.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {news.excerpt && (
                <p className="text-lg font-semibold text-[#0B3C5D] leading-relaxed mb-6 pb-6 border-b border-[#E2E8F0]">
                  {news.excerpt}
                </p>
              )}

              {news.content && (
                <div className="prose prose-slate max-w-none text-[#475569] leading-relaxed">
                  <p className="text-base text-[#475569] leading-relaxed whitespace-pre-line">
                    {typeof news.content === "string" ? news.content : JSON.stringify(news.content)}
                  </p>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0a7a6f] transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back to All News
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </div>

      <CTASection
        title="Need Personal Admission Guidance?"
        description="Our experts are here to clear your doubts and guide you through the process."
        showButtons={false}
      />
    </div>
  );
}
