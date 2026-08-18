export interface NoticeItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  important: boolean;
  documentUrl?: string;
  documentName?: string;
}

export const staticNotices: NoticeItem[] = [
  {
    _id: "notice-1",
    title: "Urgent: Verification of 10+2 Marksheets for Nursing & Paramedical Batches",
    description: "All candidates applying for GNM, B.Sc Nursing, and Radiology must submit self-attested copies of 10th & 12th marksheets for early seat reservation.",
    category: "Admissions",
    publishedAt: "2026-08-16T11:00:00Z",
    important: true,
  },
  {
    _id: "notice-2",
    title: "B.Tech Direct Admission Counselling Round 2 Schedule Announced",
    description: "Second round of personalized counselling and branch preference selection for CSE, Mechanical, and Civil Engineering starts this Saturday.",
    category: "Counselling",
    publishedAt: "2026-08-14T15:00:00Z",
    important: true,
  },
  {
    _id: "notice-3",
    title: "Free Education Loan & Bihar Student Credit Card (BSCC) Guidance Desk",
    description: "Specialized assistance available for students applying for state government credit card loan schemes and bank education loans.",
    category: "Scholarships & Loans",
    publishedAt: "2026-08-08T10:30:00Z",
    important: false,
  },
];
