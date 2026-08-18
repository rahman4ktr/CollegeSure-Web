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
  image?: string;
  rating?: number;
  students?: number | string;
  programs?: number;
  placement?: string;
  established?: string;
  accentColor?: string;
  tags?: string[];
  featured?: boolean;
  gallery?: string[];
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

// ═══════════════════════════════════════════════════════════════════════════
// Content Types — Local Static Data
// ═══════════════════════════════════════════════════════════════════════════

export interface CMSSlug {
  _type: 'slug';
  current: string;
}

export interface CMSImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface News {
  _id: string;
  title: string;
  slug: CMSSlug;
  excerpt?: string;
  content?: unknown[]; // Portable Text blocks
  featuredImage?: CMSImage;
  category?: string;
  publishedAt?: string;
  author?: string;
  featured?: boolean;
  seo?: {
    title?: string;
    description?: string;
    ogImage?: CMSImage;
  };
}

export interface Notice {
  _id: string;
  title: string;
  description?: string;
  documentUrl?: string;
  documentName?: string;
  category?: string;
  publishedAt?: string;
  important?: boolean;
  expiryDate?: string;
}

export interface EventItem {
  _id: string;
  title: string;
  description?: string;
  image?: CMSImage;
  date: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  registrationLink?: string;
  featured?: boolean;
}

export interface FacultyMember {
  _id: string;
  name: string;
  designation?: string;
  department?: {
    _id: string;
    name: string;
    slug: CMSSlug;
  };
  qualification?: string;
  profileImage?: CMSImage;
  bio?: string;
  email?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
}

export interface Department {
  _id: string;
  name: string;
  slug: CMSSlug;
  description?: string;
  image?: CMSImage;
  facultyCount?: number;
  courseCount?: number;
}

export interface DepartmentDetail extends Department {
  faculty?: FacultyMember[];
  courses?: Course[];
}

export interface GalleryAlbum {
  _id: string;
  title: string;
  images?: Array<{
    asset: unknown;
    caption?: string;
    alt?: string;
  }>;
  category?: string;
  publishedAt?: string;
}

export interface SiteSettings {
  _id: string;
  contactEmail?: string;
  contactPhone?: string;
  whatsappNumber?: string;
  address?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
  announcementBanner?: {
    enabled: boolean;
    text?: string;
    link?: string;
    variant?: 'info' | 'success' | 'warning' | 'important';
  };
}

