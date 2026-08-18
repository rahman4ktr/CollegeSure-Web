export interface FacultyMember {
  _id: string;
  name: string;
  designation: string;
  qualification: string;
  bio?: string;
  email?: string;
  departmentName?: string;
}

export const staticFaculty: FacultyMember[] = [
  {
    _id: "fac-1",
    name: "Dr. A. K. Sharma",
    designation: "Head of Medical Guidance Desk",
    qualification: "M.D. (Medicine), Senior Academic Advisor",
    bio: "Over 18 years of experience guiding students into top recognized Medical, Nursing, and Paramedical degree programs across India.",
    email: "medical.advisory@brainzima.com",
    departmentName: "School of Health & Medical Sciences",
  },
  {
    _id: "fac-2",
    name: "Prof. Rajesh Verma",
    designation: "Chief Technical Career Advisor",
    qualification: "M.Tech (CSE), Ex-Senior Systems Engineer",
    bio: "Specialist in engineering stream selection, coding curriculum mapping, and technology career placement strategy.",
    email: "tech.advisory@brainzima.com",
    departmentName: "Department of Engineering & Technology",
  },
  {
    _id: "fac-3",
    name: "Dr. Sunita Roy",
    designation: "Senior Nursing & Clinical Advisor",
    qualification: "M.Sc Nursing, Former Nursing Superintendent",
    bio: "Dedicated to helping nursing aspirants evaluate hospital training quality, INC accreditations, and clinical practice hours.",
    email: "nursing.advisory@brainzima.com",
    departmentName: "School of Nursing & Paramedical",
  },
  {
    _id: "fac-4",
    name: "Prof. Manoj Kumar",
    designation: "Management & Degree Programs Lead",
    qualification: "MBA (Finance & HR), B.Ed",
    bio: "Guiding students towards high-growth BCA, BBA, B.Com, and Graduation degrees with strong corporate internship linkages.",
    email: "management.advisory@brainzima.com",
    departmentName: "Department of Computer Applications & Management",
  },
];
