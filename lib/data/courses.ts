import type { Course } from "@/lib/types";

export const courses: Course[] = [
  // ─── MEDICAL & PARAMEDICAL ───────────────────────────────────────────────
  {
    slug: "gnm-nursing",
    name: "GNM Nursing",
    category: "medical",
    categoryLabel: "Medical & Paramedical",
    duration: "3 Years + 6 Months Internship",
    eligibility: "10+2 with Physics, Chemistry, Biology — Minimum 45%",
    location: "Multiple Cities",
    description:
      "General Nursing and Midwifery (GNM) is one of the most respected paramedical programs. Graduates work in hospitals, clinics, and community health settings.",
    overview:
      "The GNM program equips students with comprehensive nursing skills covering patient care, midwifery, community health, and clinical practice. The program combines theoretical knowledge with hands-on hospital training.",
    careerInfo: [
      "Staff Nurse in government and private hospitals",
      "Community Health Nurse",
      "School Nurse",
      "Home Care Nurse",
      "Opportunities in armed forces medical corps",
    ],
    admissionProcess: [
      "Check eligibility: 10+2 with PCB and minimum 45% marks",
      "Fill the online inquiry form or visit our office",
      "Receive personalized college recommendations",
      "Complete college application and documentation",
      "Confirm admission with our support team",
    ],
    availableColleges: [
      "Government Nursing College",
      "District Hospital Nursing School",
      "Private Nursing Institutes (city-specific)",
    ],
    faqs: [
      {
        question: "What is the eligibility for GNM Nursing?",
        answer:
          "You need 10+2 with Physics, Chemistry, and Biology with a minimum of 45% marks. Some colleges may have slightly different cut-offs.",
      },
      {
        question: "Is GNM a good career choice?",
        answer:
          "GNM offers stable and rewarding career opportunities in healthcare. Nurses are in high demand in hospitals, clinics, and community health centers across India.",
      },
      {
        question: "Can I pursue further studies after GNM?",
        answer:
          "Yes, after GNM you can pursue B.Sc Nursing through a bridge course, or specialize in areas like midwifery, critical care, or community health.",
      },
    ],
    relatedSlugs: ["bsc-nursing", "bsc-radiology", "paramedical-diploma"],
    featured: true,
  },
  {
    slug: "bsc-nursing",
    name: "B.Sc Nursing",
    category: "medical",
    categoryLabel: "Medical & Paramedical",
    duration: "4 Years",
    eligibility: "10+2 with Physics, Chemistry, Biology — Minimum 45%",
    location: "Multiple Cities",
    description:
      "B.Sc Nursing is a professional undergraduate degree that prepares students for a career in nursing with a strong scientific foundation.",
    overview:
      "The Bachelor of Science in Nursing program provides an in-depth education in nursing science, patient care, healthcare management, and community health. It is recognized by the Indian Nursing Council.",
    careerInfo: [
      "Registered Nurse in hospitals",
      "Nursing Officer in government sector",
      "Community Health Worker",
      "Nursing Educator",
      "Opportunities in international healthcare",
    ],
    admissionProcess: [
      "Verify eligibility: 10+2 with PCB, minimum 45%",
      "Contact CollegeSure for personalized guidance",
      "Shortlist colleges based on location and preference",
      "Complete application and documentation process",
      "Secure admission with our end-to-end support",
    ],
    availableColleges: [
      "Government Nursing College",
      "Medical College-affiliated Nursing Schools",
      "Private B.Sc Nursing Colleges",
    ],
    faqs: [
      {
        question: "What is the difference between GNM and B.Sc Nursing?",
        answer:
          "B.Sc Nursing is a 4-year degree program offering a broader scientific curriculum, while GNM is a 3-year diploma program. B.Sc Nursing opens more career paths including nursing education and management.",
      },
      {
        question: "Is B.Sc Nursing recognized by the Indian Nursing Council?",
        answer:
          "Yes, B.Sc Nursing programs approved by the Indian Nursing Council (INC) are nationally recognized and required for registration as a nurse in India.",
      },
    ],
    relatedSlugs: ["gnm-nursing", "bsc-radiology"],
    featured: true,
  },
  {
    slug: "bsc-radiology",
    name: "B.Sc Radiology & Imaging Technology",
    category: "medical",
    categoryLabel: "Medical & Paramedical",
    duration: "3 Years",
    eligibility: "10+2 with Physics, Chemistry, Biology — Minimum 45%",
    location: "Multiple Cities",
    description:
      "A specialized paramedical program focusing on diagnostic imaging techniques including X-Ray, CT Scan, MRI, and Ultrasound.",
    overview:
      "This program trains students in radiographic techniques, radiation physics, patient positioning, and medical imaging technology used in modern diagnostics.",
    careerInfo: [
      "Radiographer in hospitals and diagnostic centers",
      "CT/MRI Technologist",
      "Sonographer",
      "Radiation Therapy Technician",
    ],
    admissionProcess: [
      "Confirm 10+2 PCB eligibility",
      "Submit inquiry to CollegeSure",
      "Get college shortlist and counselling",
      "Complete application",
      "Get admission support",
    ],
    availableColleges: [
      "Medical College Affiliated Radiology Departments",
      "Private Paramedical Colleges",
    ],
    faqs: [
      {
        question: "Is there good job scope after B.Sc Radiology?",
        answer:
          "Yes, radiology technologists are in high demand in hospitals, diagnostic labs, and imaging centers. The field offers growth with specializations in MRI, CT, and nuclear medicine.",
      },
    ],
    relatedSlugs: ["gnm-nursing", "bsc-nursing"],
    featured: false,
  },
  // ─── ENGINEERING ─────────────────────────────────────────────────────────
  {
    slug: "btech-computer-science",
    name: "B.Tech Computer Science Engineering",
    category: "engineering",
    categoryLabel: "Engineering",
    duration: "4 Years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics — Minimum 45%",
    location: "Multiple Cities",
    description:
      "One of the most sought-after engineering degrees, B.Tech CSE focuses on software development, algorithms, data structures, AI, and systems programming.",
    overview:
      "The Computer Science Engineering program provides a rigorous technical education covering programming, databases, networking, AI/ML, and software engineering.",
    careerInfo: [
      "Software Developer / Engineer",
      "Data Analyst",
      "Web and App Developer",
      "System Administrator",
      "IT Consultant",
    ],
    admissionProcess: [
      "Confirm 10+2 PCM eligibility",
      "Appear for JEE Main or state entrance exam if required",
      "Contact CollegeSure for college shortlisting",
      "Complete application and documents",
      "Confirm admission",
    ],
    availableColleges: [
      "Government Engineering Colleges",
      "Private Engineering Colleges",
      "Deemed Universities",
    ],
    faqs: [
      {
        question: "Is JEE mandatory for B.Tech CSE?",
        answer:
          "For government colleges, JEE Main or state CET scores are typically required. Many private colleges offer direct admission based on 10+2 marks.",
      },
      {
        question: "What is the fee range for B.Tech CSE?",
        answer:
          "Fees vary widely. Government colleges are more affordable while private colleges range from moderate to premium. We can help you find the right college for your budget.",
      },
    ],
    relatedSlugs: ["btech-mechanical", "btech-civil", "bca"],
    featured: true,
  },
  {
    slug: "btech-mechanical",
    name: "B.Tech Mechanical Engineering",
    category: "engineering",
    categoryLabel: "Engineering",
    duration: "4 Years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics — Minimum 45%",
    location: "Multiple Cities",
    description:
      "Mechanical Engineering is a core branch covering thermodynamics, fluid mechanics, manufacturing, and design.",
    overview:
      "This program trains students in mechanical design, manufacturing processes, thermodynamics, and engineering mathematics. Strong practical exposure through labs and workshops.",
    careerInfo: [
      "Mechanical Engineer in manufacturing",
      "Design Engineer",
      "HVAC Engineer",
      "Production Manager",
      "Civil Services (GATE pathway)",
    ],
    admissionProcess: [
      "Confirm 10+2 PCM eligibility",
      "Check state entrance exam requirements",
      "Contact CollegeSure for guidance",
      "Apply and submit documents",
      "Secure admission",
    ],
    availableColleges: [
      "Government Engineering Colleges",
      "Private Engineering Colleges",
    ],
    faqs: [
      {
        question: "Is Mechanical Engineering still in demand?",
        answer:
          "Yes, mechanical engineers are required in manufacturing, automobile, aerospace, energy, and construction sectors.",
      },
    ],
    relatedSlugs: ["btech-computer-science", "btech-civil"],
    featured: false,
  },
  {
    slug: "btech-civil",
    name: "B.Tech Civil Engineering",
    category: "engineering",
    categoryLabel: "Engineering",
    duration: "4 Years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics — Minimum 45%",
    location: "Multiple Cities",
    description:
      "Civil Engineering covers infrastructure design, construction, surveying, and urban planning.",
    overview:
      "Students learn structural design, construction management, geotechnics, hydraulics, and transportation engineering.",
    careerInfo: [
      "Civil Engineer in construction",
      "Structural Engineer",
      "Site Engineer",
      "Urban Planner",
      "Government PWD Officer",
    ],
    admissionProcess: [
      "Confirm 10+2 PCM eligibility",
      "Contact CollegeSure",
      "Get personalized shortlist",
      "Complete documentation",
      "Confirm admission",
    ],
    availableColleges: [
      "Government Engineering Colleges",
      "Private Engineering Colleges",
    ],
    faqs: [
      {
        question: "Are there government job opportunities for Civil Engineers?",
        answer:
          "Yes, civil engineers can work with government departments like PWD, NHAI, Railways, and municipal corporations through competitive exams.",
      },
    ],
    relatedSlugs: ["btech-mechanical", "btech-computer-science"],
    featured: false,
  },
  // ─── GRADUATION ──────────────────────────────────────────────────────────
  {
    slug: "bca",
    name: "BCA — Bachelor of Computer Applications",
    category: "graduation",
    categoryLabel: "Graduation",
    duration: "3 Years",
    eligibility: "10+2 in any stream — Minimum 45%",
    location: "Multiple Cities",
    description:
      "BCA is a 3-year undergraduate program focused on computer applications, programming, and software development.",
    overview:
      "The BCA program covers programming languages, database management, software engineering, and web technologies. Ideal for students wanting a tech career without the engineering route.",
    careerInfo: [
      "Software Developer",
      "Web Developer",
      "Database Administrator",
      "System Analyst",
      "IT Support Specialist",
    ],
    admissionProcess: [
      "Confirm 10+2 eligibility in any stream",
      "Contact CollegeSure for college options",
      "Get personalized guidance",
      "Complete application",
      "Secure admission",
    ],
    availableColleges: [
      "Private BCA Colleges",
      "University-affiliated Colleges",
    ],
    faqs: [
      {
        question: "Can arts students apply for BCA?",
        answer:
          "Most BCA programs accept students from any 10+2 stream. However, some colleges may require Mathematics at 10+2 level.",
      },
      {
        question: "What can I do after BCA?",
        answer:
          "After BCA you can pursue MCA (Master of Computer Applications), MBA, work in IT companies, or start your own tech venture.",
      },
    ],
    relatedSlugs: ["bba", "btech-computer-science"],
    featured: true,
  },
  {
    slug: "bba",
    name: "BBA — Bachelor of Business Administration",
    category: "graduation",
    categoryLabel: "Graduation",
    duration: "3 Years",
    eligibility: "10+2 in any stream — Minimum 45%",
    location: "Multiple Cities",
    description:
      "BBA is a management-focused undergraduate program covering business administration, marketing, finance, and entrepreneurship.",
    overview:
      "The BBA program provides a strong foundation in business principles, management strategies, marketing, finance, human resources, and entrepreneurship.",
    careerInfo: [
      "Business Analyst",
      "Marketing Executive",
      "HR Executive",
      "Entrepreneur",
      "MBA pathway",
    ],
    admissionProcess: [
      "Confirm 10+2 eligibility",
      "Reach out to CollegeSure",
      "Get college shortlist",
      "Apply and submit documents",
      "Get admission confirmed",
    ],
    availableColleges: ["Private Management Colleges", "University Colleges"],
    faqs: [
      {
        question: "Is BBA better than B.Com?",
        answer:
          "Both are excellent options. BBA focuses on management and business administration while B.Com focuses more on commerce and accounts. Your career goal should guide the choice.",
      },
    ],
    relatedSlugs: ["bcom", "bca"],
    featured: true,
  },
  {
    slug: "bcom",
    name: "B.Com — Bachelor of Commerce",
    category: "graduation",
    categoryLabel: "Graduation",
    duration: "3 Years",
    eligibility: "10+2 with Commerce stream — Minimum 45%",
    location: "Multiple Cities",
    description:
      "B.Com is a popular undergraduate program covering accountancy, finance, taxation, economics, and business law.",
    overview:
      "The Bachelor of Commerce program provides a thorough understanding of financial accounting, business economics, taxation, auditing, and commercial law.",
    careerInfo: [
      "Accountant",
      "Tax Consultant",
      "Finance Analyst",
      "CA/CS Pathway",
      "Banking and Insurance",
    ],
    admissionProcess: [
      "Confirm 10+2 Commerce eligibility",
      "Contact CollegeSure",
      "Get guidance and college list",
      "Apply and document",
      "Admission confirmed",
    ],
    availableColleges: [
      "Government Colleges",
      "University-affiliated Colleges",
      "Private Commerce Colleges",
    ],
    faqs: [
      {
        question: "Can I do CA along with B.Com?",
        answer:
          "Yes, many students pursue CA foundation and intermediate alongside B.Com. It is a popular combination for a career in accountancy.",
      },
    ],
    relatedSlugs: ["bba", "bca"],
    featured: false,
  },
];

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((c) => c.slug === slug);

export const getCoursesByCategory = (
  category: Course["category"]
): Course[] => courses.filter((c) => c.category === category);

export const getFeaturedCourses = (): Course[] =>
  courses.filter((c) => c.featured);

export const getRelatedCourses = (slugs: string[]): Course[] =>
  courses.filter((c) => slugs.includes(c.slug));

export const getAllSlugs = (): string[] => courses.map((c) => c.slug);
