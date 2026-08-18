import type { Course } from "@/lib/types";
import { courses } from "./courses";

export interface Department {
  _id: string;
  name: string;
  slug: { current: string };
  description: string;
  facultyCount: number;
  courseCount: number;
}

export interface DepartmentDetail extends Department {
  courses: Course[];
  faculty: {
    _id: string;
    name: string;
    designation: string;
    qualification: string;
    bio?: string;
  }[];
}

export const staticDepartments: DepartmentDetail[] = [
  {
    _id: "dept-1",
    name: "School of Health & Medical Sciences",
    slug: { current: "medical-health-sciences" },
    description: "Covering GNM Nursing, B.Sc Nursing, B.Sc Radiology, B.Pharm, D.Pharm, and Allied Paramedical Sciences with verified hospital affiliations.",
    facultyCount: 8,
    courseCount: 3,
    courses: courses.filter((c) => c.category === "medical"),
    faculty: [
      {
        _id: "fac-1",
        name: "Dr. A. K. Sharma",
        designation: "Head of Medical Guidance Desk",
        qualification: "M.D. (Medicine), Senior Academic Advisor",
        bio: "Over 18 years of experience guiding medical students.",
      },
      {
        _id: "fac-3",
        name: "Dr. Sunita Roy",
        designation: "Senior Nursing & Clinical Advisor",
        qualification: "M.Sc Nursing",
        bio: "Specialist in nursing hospital attachment verification.",
      },
    ],
  },
  {
    _id: "dept-2",
    name: "Department of Engineering & Technology",
    slug: { current: "engineering-technology" },
    description: "Featuring B.Tech CSE, Mechanical, Civil Engineering, and AI/ML programs with state-of-the-art labs and high campus recruitment.",
    facultyCount: 12,
    courseCount: 3,
    courses: courses.filter((c) => c.category === "engineering"),
    faculty: [
      {
        _id: "fac-2",
        name: "Prof. Rajesh Verma",
        designation: "Chief Technical Career Advisor",
        qualification: "M.Tech (CSE)",
        bio: "Engineering branch placement specialist.",
      },
    ],
  },
  {
    _id: "dept-3",
    name: "Department of Computer Applications & Management",
    slug: { current: "computer-applications-management" },
    description: "Offering BCA, BBA, B.Com, and General Degree courses with digital skills training and corporate internship connections.",
    facultyCount: 6,
    courseCount: 3,
    courses: courses.filter((c) => c.category === "graduation"),
    faculty: [
      {
        _id: "fac-4",
        name: "Prof. Manoj Kumar",
        designation: "Management & Degree Programs Lead",
        qualification: "MBA (Finance & HR)",
        bio: "Professional degree guidance expert.",
      },
    ],
  },
];

export function getStaticDepartmentBySlug(slug: string): DepartmentDetail | null {
  return staticDepartments.find((d) => d.slug.current === slug) || null;
}
