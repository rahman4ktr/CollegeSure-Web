import { sanityFetch } from './fetch';
import {
  allCoursesQuery,
  courseBySlugQuery,
  allNewsQuery,
  newsBySlugQuery,
  featuredNewsQuery,
  allNoticesQuery,
  activeNoticesQuery,
  allEventsQuery,
  upcomingEventsQuery,
  allFacultyQuery,
  allDepartmentsQuery,
  departmentBySlugQuery,
  allGalleryQuery,
  siteSettingsQuery,
  allCourseSlugsQuery,
  allNewsSlugsQuery,
  allDepartmentSlugsQuery,
} from '@/sanity/lib/queries';
import type {
  Course,
  University,
  Testimonial,
  News,
  Notice,
  EventItem,
  FacultyMember,
  Department,
  DepartmentDetail,
  GalleryAlbum,
  SiteSettings,
} from '@/lib/types';

// Static data fallbacks
import { courses as staticCourses, getCourseBySlug as getStaticCourseBySlug } from '@/lib/data/courses';
import { universities as staticUniversities } from '@/lib/data/universities';
import { testimonials as staticTestimonials } from '@/lib/data/testimonials';

interface ResolvedData<T> {
  data: T;
  source: 'cms' | 'static';
}

// ── Courses ───────────────────────────────────────────────────────────────

export async function getCourses(): Promise<ResolvedData<Course[]>> {
  const cmsData = await sanityFetch<Course[]>(allCoursesQuery, {}, { tags: ['courses'], revalidate: 3600 });
  if (cmsData && cmsData.length > 0) {
    return { data: cmsData, source: 'cms' };
  }
  return { data: staticCourses, source: 'static' };
}

export async function getCourseBySlug(slug: string): Promise<ResolvedData<Course | null>> {
  const cmsData = await sanityFetch<Course | null>(courseBySlugQuery, { slug }, { tags: ['courses'], revalidate: 3600 });
  if (cmsData) {
    return { data: cmsData, source: 'cms' };
  }
  const staticCourse = getStaticCourseBySlug(slug) || null;
  return { data: staticCourse, source: 'static' };
}

export async function getCoursesByCategory(category: string): Promise<ResolvedData<Course[]>> {
  const { data: allCourses, source } = await getCourses();
  const filtered = allCourses.filter((c) => c.category === category);
  return { data: filtered, source };
}

export async function getAllCourseSlugs(): Promise<string[]> {
  const cmsSlugs = await sanityFetch<string[]>(allCourseSlugsQuery, {}, { tags: ['courses'] });
  if (cmsSlugs && cmsSlugs.length > 0) {
    return cmsSlugs;
  }
  return staticCourses.map((c) => c.slug);
}

// ── Universities ──────────────────────────────────────────────────────────

export async function getUniversities(): Promise<ResolvedData<University[]>> {
  // Universities currently only have static data — CMS schema can be added later
  return { data: staticUniversities, source: 'static' };
}

// ── Testimonials ──────────────────────────────────────────────────────────

export async function getTestimonials(): Promise<ResolvedData<Testimonial[]>> {
  // Testimonials currently only have static data
  return { data: staticTestimonials, source: 'static' };
}

// ── News ──────────────────────────────────────────────────────────────────

export async function getNews(): Promise<News[]> {
  const data = await sanityFetch<News[]>(allNewsQuery, {}, { tags: ['news'], revalidate: 1800 });
  return data || [];
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  const data = await sanityFetch<News | null>(newsBySlugQuery, { slug }, { tags: ['news'], revalidate: 1800 });
  return data;
}

export async function getFeaturedNews(): Promise<News[]> {
  const data = await sanityFetch<News[]>(featuredNewsQuery, {}, { tags: ['news'], revalidate: 1800 });
  return data || [];
}

export async function getAllNewsSlugs(): Promise<string[]> {
  const data = await sanityFetch<string[]>(allNewsSlugsQuery, {}, { tags: ['news'] });
  return data || [];
}

// ── Notices ───────────────────────────────────────────────────────────────

export async function getNotices(): Promise<Notice[]> {
  const data = await sanityFetch<Notice[]>(allNoticesQuery, {}, { tags: ['notices'], revalidate: 1800 });
  return data || [];
}

export async function getActiveNotices(): Promise<Notice[]> {
  const data = await sanityFetch<Notice[]>(activeNoticesQuery, {}, { tags: ['notices'], revalidate: 1800 });
  return data || [];
}

// ── Events ────────────────────────────────────────────────────────────────

export async function getEvents(): Promise<EventItem[]> {
  const data = await sanityFetch<EventItem[]>(allEventsQuery, {}, { tags: ['events'], revalidate: 3600 });
  return data || [];
}

export async function getUpcomingEvents(): Promise<EventItem[]> {
  const data = await sanityFetch<EventItem[]>(upcomingEventsQuery, {}, { tags: ['events'], revalidate: 3600 });
  return data || [];
}

// ── Faculty ───────────────────────────────────────────────────────────────

export async function getFaculty(): Promise<FacultyMember[]> {
  const data = await sanityFetch<FacultyMember[]>(allFacultyQuery, {}, { tags: ['faculty'], revalidate: 86400 });
  return data || [];
}

// ── Departments ───────────────────────────────────────────────────────────

export async function getDepartments(): Promise<Department[]> {
  const data = await sanityFetch<Department[]>(allDepartmentsQuery, {}, { tags: ['departments'], revalidate: 86400 });
  return data || [];
}

export async function getDepartmentBySlug(slug: string): Promise<DepartmentDetail | null> {
  const data = await sanityFetch<DepartmentDetail | null>(departmentBySlugQuery, { slug }, { tags: ['departments'], revalidate: 86400 });
  return data;
}

export async function getAllDepartmentSlugs(): Promise<string[]> {
  const data = await sanityFetch<string[]>(allDepartmentSlugsQuery, {}, { tags: ['departments'] });
  return data || [];
}

// ── Gallery ───────────────────────────────────────────────────────────────

export async function getGallery(): Promise<GalleryAlbum[]> {
  const data = await sanityFetch<GalleryAlbum[]>(allGalleryQuery, {}, { tags: ['gallery'], revalidate: 86400 });
  return data || [];
}

// ── Site Settings ─────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const data = await sanityFetch<SiteSettings | null>(siteSettingsQuery, {}, { tags: ['settings'], revalidate: 3600 });
  return data;
}
