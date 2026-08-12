# Implementation Plan - Global 30-Second Instant Counselling Modal

Build a **global, premium, non-intrusive “Free Counselling / Instant Support” popup system** that displays across all public pages after ~30 seconds of active browsing session, adhering to strict UX, accessibility, session persistence, responsive layout (bottom sheet on mobile, centered modal on desktop), and progressive disclosure rules.

## User Review Required
> [!NOTE]
> The current application already has a `CounsellingModal` and `CounsellingModalProvider`. We will enhance the global provider and component system to include automatic 30-second active session tracking, multi-step progressive form UX, bottom-sheet responsive layout, and `sessionStorage` guard logic without introducing duplicate modals or breaking existing manual trigger buttons ("Get Free Counselling").

## Proposed Changes

### Global Provider & Session Timer Logic
#### [MODIFY] [CounsellingModalProvider.tsx](file:///c:/Users/ajit%20kumar/Desktop/NEXT%20FULL%20STAKE/sir_project/components/providers/CounsellingModalProvider.tsx)
- Integrate session state management using `sessionStorage` (`counselling_modal_shown` or `counselling_form_submitted`).
- Implement an active browsing timer (~30 seconds cumulative time using `visibilitychange` & `focus/blur` handling to ensure timing only counts active engagement).
- Across page navigation in Next.js App Router (using path changes), preserve cumulative active time in `sessionStorage` or keep provider state alive (since Root Layout doesn't unmount on page navigation).
- Prevent triggering if already shown, dismissed ("Maybe Later" / close), or submitted during the session.

### Premium Modal Component & Multi-Step Progressive Form UX
#### [MODIFY] [CounsellingModal.tsx](file:///c:/Users/ajit%20kumar/Desktop/NEXT%20FULL%20STAKE/sir_project/components/ui/CounsellingModal.tsx)
- Refactor the design into a **premium support modal**:
  - Header: **🟢 Counsellor Online** • *Need help choosing your next step?* • *Get free guidance about courses, admissions, careers and fees.*
  - Left / Top Support Panel: *"Hi! 👋 Need some help?"* with indicators (*Free Counselling*, *Quick Support*, *Course Guidance*, *Admission Help*) and dynamic live status.
  - Multi-step progressive disclosure form:
    - **Step 1**: Quick selectable topic buttons (`🎓 Course`, `📝 Admission`, `💼 Career`, `💰 Fees`, `📚 Other`).
    - **Step 2**: Name & Phone input (`+91 Enter phone number`) revealed cleanly.
    - **Step 3**: Optional Question / Message textarea (`Tell us what you'd like to know...`).
    - CTAs: Primary **Get Free Counselling →** & Secondary **Maybe Later**.
  - Success State:
    - **✓ Request Received**: *Thanks! Your counselling request has been sent to our team.*
    - Immediate action buttons: **WhatsApp Us →** & **Call Now →** & **Close**.
- Responsive layout:
  - **Desktop**: Centered modal with smooth 200–300ms scale (`96% -> 100%`) & subtle fade backdrop.
  - **Mobile**: Bottom-sheet style modal with drag handle, vertical scroll support, safe-area awareness, and sticky accessible CTA.
- Accessibility & UX:
  - `role="dialog"`, `aria-modal="true"`, focus trapping, ESC key listener, restore focus.

## Verification Plan

### Automated / Browser Verification
- Use `browser_subagent` to test opening pages, waiting ~30 seconds active session, verifying popup trigger, testing step-by-step form interaction, testing mobile responsive layout, and checking `sessionStorage` dismissal/submission flags.
