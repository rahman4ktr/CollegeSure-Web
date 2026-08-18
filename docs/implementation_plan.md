# CollegeSure — UX Improvement + Sanity CMS Integration

Integrate Sanity CMS as the content layer for dynamic college content, improve UX with loading/error/empty states, add selective MUI components, enhance accessibility, and enrich SEO — all while preserving the existing CollegeSure visual design exactly as-is.

## User Review Required

### Sanity Project Setup
You need a Sanity project. I will scaffold the Sanity Studio and schemas, but you'll need to provide (or let me create) a Sanity project ID and dataset name. I can run `npx sanity@latest init` to create one interactively, or you can provide existing credentials.

### Existing Hardcoded Data
Currently all content (courses, universities, testimonials) lives in `lib/data/*.ts` files. The plan keeps these as **fallback data** so the site works even if Sanity is unavailable. CMS data takes priority when available; static data is the safety net.

### Next.js 16.3
This project uses Next.js 16.3 with App Router. I've reviewed the local Next.js docs and will follow documented patterns.

---

## Open Questions

1. **Sanity Project**: Do you already have a Sanity project, or should I create a new one via `npx sanity@latest init`? If existing, please provide:
   - Project ID
   - Dataset name (e.g. `production`)
   - Any existing API tokens

2. **Content Pages**: The current site does NOT have dedicated News, Notices, Events, Faculty, or Departments pages. Should I:
   - **(A)** Create new routes for `/news`, `/notices`, `/events`, `/faculty`, `/departments` with the **same visual style** as existing pages? *(Recommended)*
   - **(B)** Only add Sanity schemas and defer page creation to later?

3. **Gallery Page**: There is no existing gallery page. Should I create one, or is gallery content only embedded within other pages?

4. **Sanity Studio Location**: Should the Sanity Studio be:
   - **(A)** Embedded in the Next.js app at `/studio` route? *(Recommended — single deployment)*
   - **(B)** A separate standalone Sanity Studio project?

5. **MUI Theme**: MUI will be used selectively. Should I install the full `@mui/material` or only specific packages?

---

## Proposed Changes

The work is organized into **8 phases**, each building on the previous.

---

### Phase 1: Sanity Setup & Schema Design

Set up Sanity CMS project, define all document schemas, and configure the studio.

**New Files:**
- `sanity.config.ts` — Studio configuration, embedded at `/studio` route
- `sanity.cli.ts` — CLI configuration
- `sanity/env.ts` — Centralized env vars
- `sanity/lib/client.ts` — Read/write client with CDN caching
- `sanity/lib/image.ts` — Image URL builder with responsive sizing
- `sanity/lib/queries.ts` — All GROQ queries centralized
- `sanity/schemas/index.ts` — Schema registry
- `sanity/schemas/news.ts` — title, slug, excerpt, content (Portable Text), featuredImage, category, publishedAt, author, featured, seo
- `sanity/schemas/notice.ts` — title, description, file upload, category, publishedAt, important, expiryDate
- `sanity/schemas/event.ts` — title, description, image, date, times, location, registrationLink, featured
- `sanity/schemas/faculty.ts` — name, designation, department ref, qualification, profileImage, bio, email, socialLinks
- `sanity/schemas/department.ts` — name, slug, description, image, faculty refs, course refs
- `sanity/schemas/course.ts` — mirrors existing Course type + seo fields + relatedCourses refs
- `sanity/schemas/gallery.ts` — title, images with caption/alt, category
- `sanity/schemas/siteSettings.ts` — singleton for contact, social links, banner

**Modified Files:**
- `.env.local` — Add Sanity env vars
- `.gitignore` — Add Sanity ignores
- `next.config.ts` — Add `cdn.sanity.io` to image remotePatterns
- `package.json` — Add: sanity, next-sanity, @sanity/image-url, @sanity/vision, @portabletext/react

---

### Phase 2: Data Fetching Layer

Clean data-fetching architecture: Sanity first, falls back to static data.

**New Files:**
- `lib/sanity/fetch.ts` — Reusable `sanityFetch<T>()` with error handling, ISR tags, TypeScript generics
- `lib/sanity/resolvers.ts` — All data resolvers: getCourses(), getCourseBySlug(), getUniversities(), getTestimonials(), getNews(), getNotices(), getEvents(), getFaculty(), getDepartments(). Each returns `{ data, source: 'cms' | 'static' }`

**Modified Files:**
- `lib/types.ts` — Add: News, Notice, Event, Faculty, Department, GalleryItem, SiteSettings types

---

### Phase 3: UX Infrastructure — Loading, Error, Empty States

Reusable UX primitives using existing design tokens from `globals.css`.

**New Files:**
- `components/ui/Skeleton.tsx` — Skeleton loader variants (card, text, image, avatar)
- `components/ui/EmptyStatePage.tsx` — Empty state with icon, title, description, optional CTA
- `components/ui/ErrorState.tsx` — Error state with retry button
- `components/ui/ContentWrapper.tsx` — HOC handling loading → error → empty → content
- `components/ui/ErrorBoundary.tsx` — React Error Boundary for client components

---

### Phase 4: MUI Integration (Selective)

MUI only for functional components, themed to match CollegeSure palette.

**New Files:**
- `lib/mui-theme.ts` — Custom theme: Primary #04164B, Secondary #B30F66, Inter font, CollegeSure radii
- `components/providers/MuiProvider.tsx` — ThemeProvider wrapper for root layout
- `components/ui/FeedbackSnackbar.tsx` — MUI Snackbar + Alert for form feedback

**Modified Files:**
- `package.json` — Add: @mui/material, @emotion/react, @emotion/styled
- Use MUI Dialog for CounsellingModal (better focus trap, a11y)
- Use MUI CircularProgress for loading indicators
- Use MUI Tooltip, Alert where appropriate

---

### Phase 5: Page Integration — Connect Pages to Sanity

Wire up existing + new pages to Sanity via resolvers. **No UI changes to existing pages.**

**Modified Existing Pages:**
- `components/sections/FeaturedCourses.tsx` — Accept optional courses prop, skeleton loading
- `app/courses/page.tsx` — Fetch from resolver, ISR revalidation
- `app/courses/[slug]/page.tsx` — Resolver fetch, ISR
- `app/universities/page.tsx` — Resolver fetch
- `app/courses/medical/page.tsx`, `engineering/page.tsx`, `graduation/page.tsx` — Category resolver

**New Pages (same visual style as existing pages):**
- `app/news/page.tsx` — News list with grid, categories, skeleton/empty/error states
- `app/news/[slug]/page.tsx` — News detail with Portable Text, Article schema
- `app/notices/page.tsx` — Notices list, important highlight, expired handling, file downloads
- `app/events/page.tsx` — Events with upcoming/past separation, Event schema
- `app/faculty/page.tsx` — Faculty directory grouped by department
- `app/departments/page.tsx` — Department listing
- `app/departments/[slug]/page.tsx` — Department detail with courses and faculty

---

### Phase 6: Accessibility & Form UX Improvements

No visual changes — internal behavior improvements only.

**Modified Components:**
- `components/layout/Navbar.tsx` — aria-expanded, aria-controls, keyboard nav, focus return
- `components/layout/Footer.tsx` — aria-label on links, nav landmarks
- `components/forms/InquiryForm.tsx` — aria-invalid, aria-describedby, double-submit prevention, preserved input on error, Snackbar feedback
- `components/ui/CounsellingModal.tsx` — MUI Dialog for focus trap, same visual, aria-labelledby
- `app/free-counselling/page.tsx` — Fix bug: sets isSubmitted=true on error (line 111), add error feedback, preserve form data

**All pages audit:**
- Heading hierarchy (single h1)
- aria-label on icon-only buttons
- Meaningful alt text on all images
- role="status" on loading indicators

---

### Phase 7: SEO Enhancements with CMS Data

**New Files:**
- `lib/schema-cms.ts` — Schema generators: getNewsArticleSchema(), getEventSchema(), getDepartmentSchema(), getFacultySchema()

**Modified Files:**
- `app/sitemap.ts` — Add Sanity routes (news, departments, events), use _updatedAt for lastModified
- `app/rss.xml/route.ts` — Include latest Sanity news with proper pubDate
- All new detail pages — Generate title, description, OG, Twitter, canonical, JSON-LD from CMS

---

### Phase 8: Performance & Security

**Performance:**
- All new pages default to Server Components
- Client Components only for: filters, forms, accordions
- ISR: 1 hour for news, 24 hours for departments/courses
- Sanity images: responsive srcSet, WebP, lazy loading
- No unnecessary "use client"

**Security:**
- SANITY_API_TOKEN server-side only (never in client bundle)
- NEXT_PUBLIC_* vars are safe (read-only public config)
- Studio at /studio protected by Sanity auth

**Modified Files:**
- `next.config.ts` — cdn.sanity.io in remotePatterns

---

## File Summary

| Phase | New Files | Modified Files |
|-------|-----------|----------------|
| 1. Sanity Setup | ~15 | 4 |
| 2. Data Layer | 2 | 1 |
| 3. UX Infrastructure | 5 | 0 |
| 4. MUI Integration | 3 | 1 |
| 5. Page Integration | ~10 | ~8 |
| 6. Accessibility | 0 | ~6 |
| 7. SEO | 1 | 3 |
| 8. Performance | 0 | 2 |
| **Total** | **~36** | **~25** |

---

## Verification Plan

### Automated
```bash
npm run build    # Must succeed
npm run lint     # Must pass
npx tsc --noEmit # No type errors
```

### Manual Checklist
- [ ] All existing routes load without errors
- [ ] Course filter works on /courses
- [ ] Mobile responsive — no horizontal scroll
- [ ] Forms submit with validation, loading, success states
- [ ] Sanity Studio accessible at /studio
- [ ] CMS content loads on connected pages
- [ ] Fallback to static data when Sanity unavailable
- [ ] No console errors or hydration warnings
- [ ] SEO: sitemap, RSS, structured data
- [ ] PWA manifest works
- [ ] Sanity images with responsive sizes
- [ ] Keyboard navigation, focus management, screen reader labels
- [ ] No exposed secrets in client bundle
