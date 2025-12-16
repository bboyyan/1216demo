# Project Plan: LUMIÈRE SPA Website (Astro + React + Framer Motion)

This plan outlines the steps to build the LUMIÈRE SPA official website using Astro as the framework, React for UI components, and Framer Motion for animations, based on the `PRD.md` and `code.md` provided.

## Phase 1: Project Initialization & Environment Setup
**Goal:** Initialize a new Astro project and install necessary dependencies.

1.  **Initialize Astro Project**
    *   Create a new Astro project using `npm create astro@latest`.
    *   Template: Empty or minimal.
2.  **Install Integrations & Libraries**
    *   Add React support: `npx astro add react`
    *   Add Tailwind CSS support: `npx astro add tailwind`
    *   Install Framer Motion: `npm install framer-motion`
    *   Install Lucide React (Icons): `npm install lucide-react`
    *   Install `clsx` and `tailwind-merge` for cleaner class management (optional but recommended).

## Phase 2: Design System & Configuration
**Goal:** Configure global styles, fonts, and Tailwind variables to match the PRD.

1.  **Tailwind Configuration (`tailwind.config.mjs`)**
    *   Extend the theme with the color palette from PRD section 4.1:
        *   Backgrounds: `#F2F0EB` (outer), `#FAFAFA` (inner/card)
        *   Text: `#171717` (primary), `#737373` (secondary)
        *   Accent: `#FB7185` (Rose-400), `#FECDD3` (Rose-200)
    *   Configure Fonts (PRD 4.2):
        *   Headings: `Playfair Display`
        *   Body: `Cormorant Garamond`
        *   UI: Sans-serif (system default)
2.  **Global Styles (`src/styles/global.css`)**
    *   Import Google Fonts (Playfair Display & Cormorant Garamond).
    *   Set base styles (`html`, `body` backgrounds).
    *   Define any custom utility classes if needed (though Tailwind is preferred).

## Phase 3: Component Architecture & Development
**Goal:** Break down the monolithic `code.md` into modular React components and implement Framer Motion animations.

### Component Structure (`src/components/`)

1.  **Layout/Container**
    *   `MainLayout.jsx`: The outer wrapper handling the "floating card" effect on desktop vs full width on mobile.
    
2.  **Navigation**
    *   `Navbar.jsx`:
        *   Responsive design.
        *   Desktop: Floating glassmorphism bar.
        *   Mobile: Full-screen overlay menu (using Framer Motion `AnimatePresence`).

3.  **Hero Section**
    *   `Hero.jsx`:
        *   Background image with mask.
        *   Text animations (staggered fade-in/slide-up via Framer Motion).
        *   **Interaction:** Desktop floating booking bar (can be a sub-component `BookingSearch.jsx`).

4.  **Content Sections**
    *   `Philosophy.jsx`: Brand concept section (Zig-zag layout).
        *   Implement "Picture-in-Picture" decoration.
    *   `SignatureTreatment.jsx`: Treatments section.
        *   Round masked images.
        *   List items with icons.
    *   `Stats.jsx`: Data and testimonials.
        *   Hover effects for numbers.
    *   `CTA.jsx`: Bottom call-to-action area.

5.  **Footer**
    *   `Footer.jsx`: Copyright and social links.
    *   `MobileFloatingBtn.jsx`: Sticky bottom button for mobile devices.

### Animation Strategy (Framer Motion)
*   Replace CSS `animate-slide-up`, `animate-fade-in` with `<motion.div>`:
    *   **Hero Text:** `initial={{ opacity: 0, y: 30 }}` -> `animate={{ opacity: 1, y: 0 }}` with delays.
    *   **Scroll Reveal:** Use `whileInView` for sections appearing as user scrolls.
    *   **Micro-interactions:** `whileHover` for buttons and cards (scale up, color change).
    *   **Mobile Menu:** `initial={{ opacity: 0 }}` -> `animate={{ opacity: 1 }}` for the overlay.

## Phase 4: Page Assembly
**Goal:** Assemble the components into the main page.

1.  **Index Page (`src/pages/index.astro`)**
    *   Import all React components.
    *   Use `client:load` for interactive components (Navbar, Hero with animations, MobileFloatingBtn).
    *   Ensure the structure uses the `MainLayout`.

## Phase 5: Polish & Review
**Goal:** Ensure responsiveness and visual fidelity.

1.  **Responsive Check**
    *   Verify Mobile (375px+) vs Desktop (1024px+) layouts.
    *   Check the "card container" effect on desktop (rounded corners, shadow).
2.  **Asset Optimization**
    *   Ensure images are properly sized/optimized (using Astro's `<Image />` component if possible, or standard `img` tags if dynamic).
3.  **Final Code Cleanup**
    *   Remove unused CSS and variables.

## Roadmap Checklist
- [ ] Initialize Astro Project with React & Tailwind
- [ ] Set up Tailwind Config & Fonts
- [ ] Create `Navbar` Component (Responsive + Motion)
- [ ] Create `Hero` Component (with Booking Bar)
- [ ] Create `Philosophy` Component
- [ ] Create `SignatureTreatment` Component
- [ ] Create `Stats` & `Footer` Components
- [ ] Assemble `index.astro`
- [ ] Final UI QA
