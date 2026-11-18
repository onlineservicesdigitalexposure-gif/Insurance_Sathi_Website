# Insurance Sathi — Production Readiness Checklist

This document serves as the mandatory pre-flight and sign-off checklist for deploying **Insurance Sathi** to production.

---

## 1. Code Quality & Static Analysis
- [x] **TypeScript Validation:** `npx tsc --noEmit` exits with code `0` (Zero type errors).
- [x] **ESLint Linting:** `npm run lint` exits with code `0` (Zero warnings, zero errors).
- [x] **No Debug Code:** Verified zero `console.log`, `debugger`, or alert statements in `src/`.
- [x] **No Unused Imports:** All React hooks, Lucide icons, and helper imports are clean and tree-shaken.
- [x] **Production Build:** `npm run build` completes cleanly with 83 static prerendered HTML routes.

---

## 2. Security & Compliance
- [x] **Zero Secrets in Codebase:** No private keys, database strings, or auth tokens committed.
- [x] **Safe Environment Variables:** `.env.example` documents only public client-side variables (`NEXT_PUBLIC_*`).
- [x] **Git Hygiene:** `.env*` files ignored in `.gitignore`, except `.env.example`.
- [x] **HTTP Security Headers:** Configured in `next.config.ts` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- [x] **SVG Security:** Strict CSP sandbox applied to SVGs in `next/image` (`dangerouslyAllowSVG` with script execution blocked).
- [x] **Data Protection Compliance:** Privacy Policy reflects Digital Personal Data Protection (DPDP) Act 2023 & Indian IT Act 2000.
- [x] **IRDAI Statutory Disclaimers:** Statutory notices present in footer, terms, insurance details, and claims guidance (advisor status, non-underwriter, Section 45 disclosure duties).

---

## 3. SEO & Structured Data
- [x] **Canonical URLs:** All routes provide canonical link tags (`alternates.canonical`).
- [x] **Semantic Heading Hierarchy:** Exactly one `<h1>` per page across all 83 static pages.
- [x] **Open Graph & Twitter Cards:** Full 1200x630 branded social share cards (`/images/og-image.svg`).
- [x] **Sitemap:** Dynamic `/sitemap.xml` with all core, service, insurance, location, and blog URLs with appropriate priority and frequency tags.
- [x] **Robots:** Dynamic `/robots.txt` allowing search engine crawling and referencing `/sitemap.xml`.
- [x] **Structured Data (JSON-LD):**
  - Root Layout: `InsuranceAgency` / `LocalBusiness`
  - About Us: `AboutPage` + `BreadcrumbList`
  - Contact Us: `ContactPage` + `BreadcrumbList`
  - Blog Posts: `Article` + `BreadcrumbList`
  - Locations: `LocalBusiness` / `FinancialService`
- [x] **Zero Fabricated Reviews:** No fake ratings, artificial reviews, or false stars included in JSON-LD.

---

## 4. UI / UX & Responsiveness
- [x] **Desktop (1920px & 1440px):** Layout constrained within readable container width (`container-site`), sticky navigation with backdrop filter.
- [x] **Tablet (768px):** Clean two-column card grids, accessible touch navigation.
- [x] **Mobile (390px & 360px):** Tested on standard and compact viewports, slide-out mobile drawer with touch triggers (>44px height).
- [x] **Floating Contact Widget:** Responsive quick-action buttons for WhatsApp, direct call, and consultation lead form with non-blocking z-index.
- [x] **Accessibility (WCAG 2.1 AA):**
  - `#main-content` skip-link for keyboard navigation.
  - Proper `aria-expanded`, `aria-label`, and `role` attributes on modals, drawers, and accordions.
  - High contrast brand colors (#123B75 navy, #2463C5 royal blue, #F28C28 orange on white/light backgrounds).

---

## 5. Functional & Business Verification
- [x] **Business Address:** Duckbanglow More, Barasat, North 24 Parganas, West Bengal 700124 verified across footer, contact, layout, and schemas.
- [x] **Founder Identity:** MD Abrahim (Proprietor) referenced accurately.
- [x] **Direct Phone Helpline:** `tel:9332364068` verified across all action buttons and top bar.
- [x] **Direct Email:** `mailto:mdabrahim.mollah@gmail.com` verified across all links.
- [x] **WhatsApp Dispatch:** Verified `wa.me/919332364068` formats inquiry payloads cleanly.
- [x] **Enquiry Form Flow:** Zod validation prevents invalid submissions, formats structured message, and dispatches to WhatsApp automatically.
- [x] **Error Recovery:** Custom 404 page (`/_not-found`) and root error boundary (`/global-error.tsx`) in place.

---

## 6. Rollback & Maintenance Plan
- **Instant Rollback:** Vercel retains past successful deployments. In the event of a regression, open the **Deployments** tab on Vercel and click **Promote to Production** on the previous stable deployment.
- **Preview Environments:** All Git branches and Pull Requests automatically receive isolated preview URLs for QA testing before merging to `main`.
