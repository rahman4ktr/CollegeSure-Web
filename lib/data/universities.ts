import type { University } from "@/lib/types";

export const universities: University[] = [
  {
    id: "city-medical-college",
    name: "City Medical College & Hospital",
    location: "City, State",
    city: "City",
    state: "State",
    type: "private",
    courses: ["GNM Nursing", "B.Sc Nursing", "Paramedical Diplomas"],
    description:
      "A well-equipped private medical college with modern facilities and experienced faculty. Offers a range of nursing and paramedical programs.",
    highlights: [
      "Modern hospital training facility",
      "Experienced nursing faculty",
      "Strong clinical exposure",
      "State council approved",
    ],
  },
  {
    id: "state-engineering-college",
    name: "State Engineering College",
    location: "City, State",
    city: "City",
    state: "State",
    type: "government",
    courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Civil"],
    description:
      "An established government engineering college offering AICTE-approved B.Tech programs across multiple engineering disciplines.",
    highlights: [
      "AICTE approved",
      "Affordable government fees",
      "Good placement record",
      "Strong academic faculty",
    ],
  },
  {
    id: "premier-management-college",
    name: "Premier Management College",
    location: "City, State",
    city: "City",
    state: "State",
    type: "private",
    courses: ["BBA", "BCA", "B.Com"],
    description:
      "A commerce and management-focused college offering modern undergraduate programs in business, computer applications, and commerce.",
    highlights: [
      "Industry-oriented curriculum",
      "Active placement cell",
      "Modern computer labs",
      "Strong industry connections",
    ],
  },
  {
    id: "regional-nursing-school",
    name: "Regional Nursing & Paramedical School",
    location: "City, State",
    city: "City",
    state: "State",
    type: "private",
    courses: ["GNM Nursing", "B.Sc Radiology", "Paramedical Courses"],
    description:
      "A focused paramedical institution offering nursing and allied health programs with strong hospital affiliation.",
    highlights: [
      "Hospital-affiliated training",
      "Small batch sizes",
      "Personalized attention",
      "INC recognized programs",
    ],
  },
  {
    id: "polytechnic-institute",
    name: "Central Polytechnic Institute",
    location: "City, State",
    city: "City",
    state: "State",
    type: "government",
    courses: ["Diploma Engineering", "B.Tech (Lateral Entry)"],
    description:
      "A government polytechnic institute offering diploma and lateral entry engineering programs.",
    highlights: [
      "Government fees",
      "Practical-focused curriculum",
      "Strong workshop facilities",
      "AICTE approved",
    ],
  },
  {
    id: "commerce-arts-college",
    name: "Commerce & Arts College",
    location: "City, State",
    city: "City",
    state: "State",
    type: "private",
    courses: ["B.Com", "BBA", "BA"],
    description:
      "A well-established arts and commerce college affiliated with the state university.",
    highlights: [
      "University affiliated",
      "Affordable fees",
      "Experienced faculty",
      "Cultural activities",
    ],
  },
];
