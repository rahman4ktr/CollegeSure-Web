export const groq = (strings: TemplateStringsArray, ...values: any[]) =>
  strings.reduce((result, str, i) => result + str + (values[i] || ''), '');

export const allNewsQuery = '';
export const newsBySlugQuery = '';
export const featuredNewsQuery = '';
export const allNoticesQuery = '';
export const activeNoticesQuery = '';
export const allEventsQuery = '';
export const upcomingEventsQuery = '';
export const allFacultyQuery = '';
export const allDepartmentsQuery = '';
export const departmentBySlugQuery = '';
export const allCoursesQuery = '';
export const courseBySlugQuery = '';
export const allGalleryQuery = '';
export const siteSettingsQuery = '';
export const allCourseSlugsQuery = '';
export const allNewsSlugsQuery = '';
export const allDepartmentSlugsQuery = '';
