export interface NewsArticle {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  author: string;
  featured?: boolean;
}

export const staticNews: NewsArticle[] = [
  {
    _id: "news-1",
    title: "NEET UG 2026 Registration & Counselling Guidelines Released",
    slug: { current: "neet-ug-2026-registration-guidelines" },
    excerpt: "National Testing Agency (NTA) issues fresh advisory for NEET UG 2026 candidates regarding document verification, eligibility criteria, and seat allocation rules.",
    content: "The National Testing Agency has released official counselling guidelines for NEET UG 2026. Students aspiring for Medical, Nursing, and Paramedical courses across top recognized medical colleges are advised to ensure all 10th & 12th certificates, domicile documents, and category proofs are verified prior to round 1 counselling.",
    category: "Medical Entrance",
    publishedAt: "2026-08-15T10:00:00Z",
    author: "CollegeSure Advisory Team",
    featured: true,
  },
  {
    _id: "news-2",
    title: "B.Tech Computer Science & AI Admissions See 40% Spike in Demand",
    slug: { current: "btech-cse-ai-admissions-demand-spike" },
    excerpt: "Top private and deemed technical universities report overwhelming application volume for Artificial Intelligence, Data Science, and Software Engineering specializations.",
    content: "Engineering aspirants across Bihar and Eastern India are overwhelmingly favoring B.Tech Computer Science, Artificial Intelligence, and Cyber Security specializations. CollegeSure counsellors highlight top private institutions offering industry-sponsored labs, AWS & IBM certifications, and early campus recruitment.",
    category: "Engineering Update",
    publishedAt: "2026-08-12T14:30:00Z",
    author: "CollegeSure Tech Desk",
    featured: true,
  },
  {
    _id: "news-3",
    title: "GNM & B.Sc Nursing Direct Admission Guidance open for 2026 Batch",
    slug: { current: "nursing-admissions-guidance-2026" },
    excerpt: "INC-recognized nursing colleges announce direct counselling rounds for GNM and B.Sc Nursing programs with full hospital clinical attachment.",
    content: "Indian Nursing Council (INC) recognized colleges in Karnataka, West Bengal, and Bihar have initiated admission verification rounds for GNM Nursing and B.Sc Nursing candidates. Students with 10+2 Biology background can access 100% transparent guidance and hostel fee structures directly through CollegeSure.",
    category: "Nursing & Health",
    publishedAt: "2026-08-10T09:15:00Z",
    author: "CollegeSure Healthcare Advisor",
    featured: false,
  },
];

export function getStaticNewsBySlug(slug: string): NewsArticle | null {
  return staticNews.find((n) => n.slug.current === slug) || null;
}
