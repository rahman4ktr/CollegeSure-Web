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
} from '@/lib/types';

import { courses as staticCourses, getCourseBySlug as getStaticCourseBySlug } from '@/lib/data/courses';
import { universities as staticUniversities } from '@/lib/data/universities';
import { testimonials as staticTestimonials } from '@/lib/data/testimonials';
import { staticNews, getStaticNewsBySlug } from '@/lib/data/news';
import { staticNotices } from '@/lib/data/notices';
import { staticEvents } from '@/lib/data/events';
import { staticFaculty } from '@/lib/data/faculty';
import { staticDepartments, getStaticDepartmentBySlug } from '@/lib/data/departments';

interface ResolvedData<T> {
  data: T;
  source: 'static';
}

// ── Courses ───────────────────────────────────────────────────────────────

export async function getCourses(): Promise<ResolvedData<Course[]>> {
  return { data: staticCourses, source: 'static' };
}

export async function getCourseBySlug(slug: string): Promise<ResolvedData<Course | null>> {
  const staticCourse = getStaticCourseBySlug(slug) || null;
  return { data: staticCourse, source: 'static' };
}

export async function getCoursesByCategory(category: string): Promise<ResolvedData<Course[]>> {
  const filtered = staticCourses.filter((c) => c.category === category);
  return { data: filtered, source: 'static' };
}

export async function getAllCourseSlugs(): Promise<string[]> {
  return staticCourses.map((c) => c.slug);
}

// ── Universities ──────────────────────────────────────────────────────────

export async function getUniversities(): Promise<ResolvedData<University[]>> {
  return { data: staticUniversities, source: 'static' };
}

// ── Testimonials ──────────────────────────────────────────────────────────

export async function getTestimonials(): Promise<ResolvedData<Testimonial[]>> {
  return { data: staticTestimonials, source: 'static' };
}

// ── News ──────────────────────────────────────────────────────────────────

export async function getNews(): Promise<News[]> {
  return staticNews as unknown as News[];
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  const news = getStaticNewsBySlug(slug);
  return (news as unknown as News) || null;
}

export async function getFeaturedNews(): Promise<News[]> {
  return staticNews.slice(0, 3) as unknown as News[];
}

export async function getAllNewsSlugs(): Promise<string[]> {
  return staticNews.map((n) => n.slug.current);
}

// ── Notices ───────────────────────────────────────────────────────────────

export async function getNotices(): Promise<Notice[]> {
  return staticNotices as unknown as Notice[];
}

export async function getActiveNotices(): Promise<Notice[]> {
  return staticNotices as unknown as Notice[];
}

// ── Events ────────────────────────────────────────────────────────────────

export async function getEvents(): Promise<EventItem[]> {
  return staticEvents as unknown as EventItem[];
}

export async function getUpcomingEvents(): Promise<EventItem[]> {
  return staticEvents as unknown as EventItem[];
}

// ── Faculty ───────────────────────────────────────────────────────────────

export async function getFaculty(): Promise<FacultyMember[]> {
  return staticFaculty as unknown as FacultyMember[];
}

// ── Departments ───────────────────────────────────────────────────────────

export async function getDepartments(): Promise<Department[]> {
  return staticDepartments as unknown as Department[];
}

export async function getDepartmentBySlug(slug: string): Promise<DepartmentDetail | null> {
  const dept = getStaticDepartmentBySlug(slug);
  return (dept as unknown as DepartmentDetail) || null;
}

export async function getAllDepartmentSlugs(): Promise<string[]> {
  return staticDepartments.map((d) => d.slug.current);
}

// ── Site Settings ─────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<null> {
  return null;
}
