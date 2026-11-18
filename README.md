# Insurance Sathi — Advisory Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3.3-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)

**Insurance Sathi** is a high-performance advisory website for an independent insurance advisory and policyholder facilitation service based at **Duckbanglow More, Barasat, North 24 Parganas, West Bengal 700124**, founded by **MD Abrahim**.

The platform provides impartial insurance comparisons, policy servicing, premium payment facilitation, lapsed policy revival guidance, and claim assistance across **Barasat**, **Madhyamgram**, and **Habra**.

---

## 🌟 Key Features

- **8 Dedicated Insurance Categories:** Dynamic deep-dive guides for Life, Health, Motor, Term, Home, Travel, Business, and Personal Accident Insurance.
- **5 Core Advisory Services:** End-to-end facilitation workflows for New Policies, Policy Servicing & Nominee Updates, Premium Deposit Assistance, Lapsed Policy Revival, and Claims Guidance.
- **Local SEO Corridors:** Location-specific landing pages for Barasat (Headquarters), Madhyamgram, and Habra.
- **Interactive Educational Blog:** 6 original insurance guides with category filtering, real-time search, table of contents, and reading times.
- **Instant WhatsApp Lead Dispatch:** Reusable form built with React Hook Form and Zod that validates leads and dispatches formatted inquiries directly to WhatsApp (`wa.me/919332364068`).
- **Global Responsive Floating Action:** Non-obtrusive sticky contact widget for instant WhatsApp and phone access on mobile and desktop.
- **100% Static Prerendering (SSG):** All 83 pages are prerendered at build time for sub-second page loads.
- **Statutory IRDAI Disclaimers:** Transparent advisory disclaimers, Section 45 disclosure notices, and DPDP Act 2023 compliant privacy terms.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16.4.6 (App Router with Partial Prefetching)
- **UI Library:** React 19.3.0
- **Styling:** Tailwind CSS 4.3.3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Validation:** Zod 4.6.7 & React Hook Form
- **Language:** TypeScript 5 (Strict Mode)

---

## 📁 Project Structure

```text
├── public/                     # Static assets (SVGs, OG card, favicon)
│   └── images/
│       ├── blog/               # Educational blog vector illustrations
│       ├── insurance/          # Insurance category illustrations
│       ├── services/           # Service illustration assets
│       └── og-image.svg        # 1200x630 Open Graph share card
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (marketing)/        # Route group for marketing pages
│   │   │   ├── about/          # /about (Founder background & pillars)
│   │   │   ├── blog/           # /blog & /blog/[slug] (Educational guides)
│   │   │   ├── contact/        # /contact (Office directions & hours)
│   │   │   ├── insurance/      # /insurance & /insurance/[slug]
│   │   │   ├── locations/      # /locations/[slug] (Barasat, Madhyamgram, Habra)
│   │   │   ├── privacy-policy/ # /privacy-policy (DPDP Act 2023)
│   │   │   ├── services/       # /services & /services/[slug]
│   │   │   └── terms-and-conditions/ # /terms-and-conditions (IRDAI notices)
│   │   ├── globals.css         # Tailwind CSS 4 design system tokens
│   │   ├── layout.tsx          # Root layout with header, footer & schema
│   │   ├── not-found.tsx       # Branded 404 recovery screen
│   │   ├── global-error.tsx    # Root client error boundary
│   │   ├── robots.ts           # Dynamic /robots.txt
│   │   └── sitemap.ts          # Dynamic /sitemap.xml
│   ├── components/             # Modular UI components
│   │   ├── blog/               # Blog cards, filter bar, breadcrumb
│   │   ├── forms/              # Reusable WhatsApp enquiry form
│   │   ├── insurance/          # Category comparison heroes & FAQs
│   │   ├── layout/             # Header, TopBar, Navbar, Footer, FloatingContact
│   │   ├── sections/           # Modular homepage feature sections
│   │   ├── services/           # Service process heroes & step guides
│   │   └── ui/                 # Atomic design tokens (Badge, Button, Card, Accordion)
│   ├── data/                   # Centralized TypeScript content models
│   └── types/                  # Global TypeScript contracts
├── .env.example                # Example environment variables
├── DEPLOYMENT.md               # Complete Vercel deployment manual
├── PRODUCTION_CHECKLIST.md     # Pre-flight sign-off checklist
└── next.config.ts              # Next.js production & security headers configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `20.x` or `22.x` installed.
- npm, pnpm, or yarn.

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/your-username/insurance_sathi_website.git
cd insurance_sathi_website

# Install dependencies
npm install
```

### 2. Environment Configuration

Copy the example environment configuration:

```bash
cp .env.example .env.local
```

### 3. Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Quality Verification & Testing

Run the full static analysis and build verification suite before submitting pull requests:

```bash
# 1. Type check across all files
npx tsc --noEmit

# 2. Run ESLint verification
npm run lint

# 3. Compile full production build
npm run build
```

---

## ☁️ Deployment on Vercel

For full instructions, refer to [DEPLOYMENT.md](file:///e:/DEOS%20CompanyWebsites(Office%20Folder)/insurance_sathi_website/DEPLOYMENT.md).

Quick Deploy via Vercel CLI:

```bash
# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Vercel Project Settings

- **Framework Preset:** `Next.js`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node.js Version:** `20.x`

---

## ⚖️ Statutory Notice

Insurance is the subject matter of solicitation. Insurance Sathi operates as an independent insurance advisory and policyholder assistance service based in Barasat, West Bengal. We provide policy comparisons, administrative servicing, and claim documentation guidance. Policy terms, waiting periods, coverage inclusions, sub-limits, and final claim settlement decisions are determined solely by the respective underwriting insurance companies as per prevailing IRDAI regulations.

---

## 📄 License

Proprietary — All rights reserved by **Insurance Sathi** & **MD Abrahim**.
