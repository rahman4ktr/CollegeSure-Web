import { groq } from 'next-sanity';

// ═══════════════════════════════════════════════════════════════════════════
// GROQ Queries — Centralized, typed, reusable
// ═══════════════════════════════════════════════════════════════════════════

export const allNewsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    category,
    publishedAt,
    author,
    featured,
    "seo": seo { title, description, ogImage }
  }
`;

export const newsBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    category,
    publishedAt,
    author,
    featured,
    "seo": seo { title, description, ogImage }
  }
`;

export const featuredNewsQuery = groq`
  *[_type == "news" && featured == true] | order(publishedAt desc) [0...5] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    category,
    publishedAt
  }
`;

export const allNoticesQuery = groq`
  *[_type == "notice"] | order(publishedAt desc) {
    _id,
    title,
    description,
    "documentUrl": document.asset->url,
    "documentName": document.asset->originalFilename,
    category,
    publishedAt,
    important,
    expiryDate
  }
`;

export const activeNoticesQuery = groq`
  *[_type == "notice" && (
    !defined(expiryDate) || expiryDate >= now()
  )] | order(important desc, publishedAt desc) {
    _id,
    title,
    description,
    "documentUrl": document.asset->url,
    "documentName": document.asset->originalFilename,
    category,
    publishedAt,
    important,
    expiryDate
  }
`;

export const allEventsQuery = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    description,
    image,
    date,
    startTime,
    endTime,
    location,
    registrationLink,
    featured
  }
`;

export const upcomingEventsQuery = groq`
  *[_type == "event" && date >= now()] | order(date asc) {
    _id,
    title,
    description,
    image,
    date,
    startTime,
    endTime,
    location,
    registrationLink,
    featured
  }
`;

export const allFacultyQuery = groq`
  *[_type == "faculty"] | order(name asc) {
    _id,
    name,
    designation,
    "department": department->{ _id, name, slug },
    qualification,
    profileImage,
    bio,
    email,
    socialLinks
  }
`;

export const allDepartmentsQuery = groq`
  *[_type == "department"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    image,
    "facultyCount": count(*[_type == "faculty" && department._ref == ^._id]),
    "courseCount": count(courses)
  }
`;

export const departmentBySlugQuery = groq`
  *[_type == "department" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    image,
    "faculty": *[_type == "faculty" && department._ref == ^._id] | order(name asc) {
      _id, name, designation, qualification, profileImage, bio, email
    },
    "courses": courses[]-> {
      _id, name, slug, category, categoryLabel, duration, eligibility, description, featured
    }
  }
`;

export const allCoursesQuery = groq`
  *[_type == "course"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    category,
    categoryLabel,
    duration,
    eligibility,
    location,
    description,
    overview,
    careerInfo,
    admissionProcess,
    availableColleges,
    faqs,
    "relatedSlugs": relatedCourses[]->slug.current,
    featured
  }
`;

export const courseBySlugQuery = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    category,
    categoryLabel,
    duration,
    eligibility,
    location,
    description,
    overview,
    careerInfo,
    admissionProcess,
    availableColleges,
    faqs,
    "relatedSlugs": relatedCourses[]->slug.current,
    featured,
    "seo": seo { title, description, ogImage }
  }
`;

export const allGalleryQuery = groq`
  *[_type == "gallery"] | order(publishedAt desc) {
    _id,
    title,
    images[] {
      asset->,
      caption,
      alt
    },
    category,
    publishedAt
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    contactEmail,
    contactPhone,
    whatsappNumber,
    address,
    socialLinks,
    announcementBanner {
      enabled,
      text,
      link,
      variant
    }
  }
`;

export const allCourseSlugsQuery = groq`
  *[_type == "course" && defined(slug.current)].slug.current
`;

export const allNewsSlugsQuery = groq`
  *[_type == "news" && defined(slug.current)].slug.current
`;

export const allDepartmentSlugsQuery = groq`
  *[_type == "department" && defined(slug.current)].slug.current
`;
