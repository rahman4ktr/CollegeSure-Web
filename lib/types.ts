// CollegeSure — Shared TypeScript Interfaces

export interface Course {
  slug: string;
  name: string;
  category: "medical" | "engineering" | "graduation";
  categoryLabel: string;
  duration: string;
  eligibility: string;
  location: string;
  description: string;
  overview: string;
  careerInfo: string[];
  admissionProcess: string[];
  availableColleges: string[];
  faqs: FAQ[];
  relatedSlugs: string[];
  featured: boolean;
}

export interface University {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  type: "government" | "private" | "deemed";
  courses: string[];
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  studentName: string;
  course: string;
  city: string;
  quote: string;
  rating: number; // 1-5
  isPlaceholder: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CourseCategory {
  id: "medical" | "engineering" | "graduation";
  label: string;
  description: string;
  popularCourses: string[];
  icon: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}
