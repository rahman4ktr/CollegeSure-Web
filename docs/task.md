# CollegeSure — Implementation Task Tracker

## Phase 1: Sanity Setup & Schema Design
- [x] Create sanity/env.ts
- [x] Create sanity.config.ts
- [x] Create sanity.cli.ts  
- [x] Create sanity/lib/client.ts
- [x] Create sanity/lib/image.ts
- [x] Create sanity/lib/queries.ts
- [x] Create all schemas (news, notice, event, faculty, department, course, gallery, siteSettings)
- [x] Create sanity/schemas/index.ts
- [x] Create app/studio/[[...tool]]/page.tsx & layout.tsx
- [x] Update .env.local
- [x] Update next.config.ts

## Phase 2: Data Fetching Layer
- [x] Create lib/sanity/fetch.ts
- [x] Create lib/sanity/resolvers.ts
- [x] Update lib/types.ts

## Phase 3: UX Infrastructure
- [x] Create components/ui/Skeleton.tsx
- [x] Create components/ui/EmptyStatePage.tsx
- [x] Create components/ui/ErrorState.tsx
- [x] Create components/ui/ContentWrapper.tsx
- [x] Create components/ui/ErrorBoundary.tsx

## Phase 4: MUI Integration
- [x] Create lib/mui-theme.ts
- [x] Create components/providers/MuiProvider.tsx
- [x] Create components/ui/FeedbackSnackbar.tsx
- [x] Update app/layout.tsx with MuiProvider

## Phase 5: Page Integration
- [x] Update existing course pages (listing + detail + categories)
- [x] Update universities page
- [x] Create /news listing & /news/[slug] detail pages
- [x] Create /notices page
- [x] Create /events page
- [x] Create /faculty page
- [x] Create /departments & /departments/[slug] pages

## Phase 6: Accessibility & Forms
- [x] Fix free-counselling submission error handling bug & add FeedbackSnackbar
- [x] Improve InquiryForm with validation and ARIA support
- [x] Update Navbar with CMS page navigation links & ARIA attributes
- [x] Update Footer with CMS page navigation links & ARIA attributes

## Phase 7: SEO
- [x] Create lib/schema-cms.ts
- [x] Update sitemap.ts with dynamic news, courses, and department routes
- [x] Update rss.xml/route.ts with dynamic Sanity news feeds

## Phase 8: Package Installation & Verification
- [ ] Run `npm install sanity next-sanity @sanity/image-url @sanity/vision @portabletext/react @mui/material @emotion/react @emotion/styled`
