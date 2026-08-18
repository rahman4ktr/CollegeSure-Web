export interface EventItem {
  _id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  registrationLink?: string;
  featured?: boolean;
}

export const staticEvents: EventItem[] = [
  {
    _id: "evt-1",
    title: "Mega College Admission & Career Fair 2026 — Katihar",
    description: "Meet official representatives and senior admission counsellors from 50+ UGC & AICTE recognized private & deemed universities. Free 1-on-1 career mapping.",
    date: "2026-09-05T09:30:00Z",
    startTime: "09:30 AM",
    endTime: "05:00 PM",
    location: "Brainzima Institute Campus, Anathalaya Rd, Katihar, Bihar",
    registrationLink: "/free-counselling",
    featured: true,
  },
  {
    _id: "evt-2",
    title: "Online Webinar: How to Select the Right B.Tech Branch (CSE vs AI vs Core)",
    description: "Live interactive session with industry tech leads and engineering faculty discussing curriculum scope, placement statistics, and career longevity.",
    date: "2026-08-28T16:00:00Z",
    startTime: "04:00 PM",
    endTime: "05:30 PM",
    location: "Online Zoom / YouTube Live",
    registrationLink: "/free-counselling",
    featured: true,
  },
  {
    _id: "evt-3",
    title: "Medical & Nursing Guidance Workshop for Parents & Students",
    description: "Detailed session explaining hospital clinical exposure, INC accreditation checks, fee transparency, and hostel safety for nursing candidates.",
    date: "2026-09-12T11:00:00Z",
    startTime: "11:00 AM",
    endTime: "01:30 PM",
    location: "CollegeSure Counselling Hall, Katihar",
    registrationLink: "/contact",
    featured: false,
  },
];
