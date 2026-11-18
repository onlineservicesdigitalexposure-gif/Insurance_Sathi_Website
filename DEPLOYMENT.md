# Insurance Sathi — Vercel Production Deployment Guide

This guide provides end-to-end instructions for deploying the **Insurance Sathi** advisory website to **Vercel** with zero downtime, optimal edge performance, and production-grade security.

---

## 1. Architecture & Deployment Overview

- **Framework:** Next.js 16.4.6 (App Router)
- **Rendering Model:** 100% Static Prerendered (SSG) with Partial Prefetching
- **Styling:** Tailwind CSS 4.3.3
- **Primary Domain:** `https://insurancesathi.in`
- **Hosting Target:** Vercel Edge Network
- **Build System:** Webpack bundler (`next build --webpack`)

---

## 2. Prerequisites

1. A [Vercel](https://vercel.com) account.
2. Access to the Git repository containing this project (GitHub, GitLab, or Bitbucket).
3. Access to the DNS management panel for `insurancesathi.in` (e.g., GoDaddy, Cloudflare, Namecheap).
4. Node.js `20.x` or `22.x` installed locally.

---

## 3. Deployment Method A: Vercel Dashboard (Recommended)

### Step 1: Import the Repository
1. Navigate to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New…** > **Project**.
3. Select your Git provider and import the `insurance_sathi_website` repository.

### Step 2: Configure Project Settings
In the **Configure Project** screen, configure the following settings:

| Setting | Value | Notes |
| :--- | :--- | :--- |
| **Framework Preset** | `Next.js` | Automatically detected |
| **Root Directory** | `./` | Root of repository |
| **Build Command** | `npm run build` | Executes `next build --webpack` |
| **Output Directory** | `.next` | Default Next.js build output |
| **Install Command** | `npm install` | Default |
| **Node.js Version** | `20.x` | Set in Project Settings > General |

### Step 3: Add Environment Variables
Expand the **Environment Variables** section and add the values defined in `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=https://insurancesathi.in
NEXT_PUBLIC_PHONE_RAW=9332364068
NEXT_PUBLIC_PHONE_FORMATTED="+91 93323 64068"
NEXT_PUBLIC_WHATSAPP_RAW=919332364068
NEXT_PUBLIC_CONTACT_EMAIL=mdabrahim.mollah@gmail.com
NEXT_PUBLIC_OFFICE_LANDMARK="Duckbanglow More"
NEXT_PUBLIC_OFFICE_CITY="Barasat"
NEXT_PUBLIC_OFFICE_DISTRICT="North 24 Parganas"
NEXT_PUBLIC_OFFICE_STATE="West Bengal"
NEXT_PUBLIC_OFFICE_PINCODE="700124"
NEXT_PUBLIC_OFFICE_COUNTRY="India"
NODE_ENV=production
```

> **Security Note:** This application is intentionally built as an ultra-fast, zero-vulnerability static frontend that routes customer leads directly to MD Abrahim via WhatsApp and telephone. There are no private API keys, database connection strings, or third-party backend credentials to leak.

### Step 4: Deploy
Click **Deploy**. Vercel will:
1. Run `npm install`.
2. Execute `next build --webpack`.
3. Type-check all TypeScript files (`tsc`).
4. Prerender all 83 static routes and endpoints.
5. Deploy to the global Edge CDN in ~60 seconds.

---

## 4. Deployment Method B: Vercel CLI

If deploying from your terminal:

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Login to your account
vercel login

# 3. Link project & deploy to preview
vercel

# 4. Deploy directly to production
vercel --prod
```

---

## 5. Custom Domain & DNS Configuration

To bind `https://insurancesathi.in` to your Vercel deployment:

1. In the Vercel project dashboard, navigate to **Settings** > **Domains**.
2. Enter `insurancesathi.in` and select **Add**.
3. Choose to automatically redirect `www.insurancesathi.in` to the apex `insurancesathi.in`.
4. Configure the following DNS records at your domain registrar:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (Apex) | `76.76.21.21` | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 300 |

*Vercel automatically provisions and renews SSL/TLS certificates through Let's Encrypt once DNS records propagate.*

---

## 6. HTTP Security Headers & Optimization

The deployment automatically applies production security headers configured in `next.config.ts`:

- **Strict SVG Sanitization:** `next/image` is secured with a sandboxed Content Security Policy (`default-src 'self'; script-src 'none'; sandbox;`).
- **X-Content-Type-Options:** `nosniff`
- **X-Frame-Options:** `SAMEORIGIN` (prevents clickjacking)
- **X-XSS-Protection:** `1; mode=block`
- **Referrer-Policy:** `strict-origin-when-cross-origin`
- **Permissions-Policy:** `camera=(), microphone=(), geolocation=()`

---

## 7. Post-Deployment Verification Checklist

Once the production deployment is live:

1. **Verify HTTPS & SSL:** Navigate to `https://insurancesathi.in` and confirm the padlock icon is valid.
2. **Verify Canonical Redirect:** Confirm `http://` redirects to `https://` and `www.` redirects to apex.
3. **Verify Sitemap:** Open `https://insurancesathi.in/sitemap.xml` and ensure all 83 URLs are listed with correct priorities.
4. **Verify Robots.txt:** Open `https://insurancesathi.in/robots.txt` and confirm `Sitemap: https://insurancesathi.in/sitemap.xml` is present.
5. **Verify WhatsApp Dispatch:** Fill out the enquiry form on `/contact` or `/insurance/health-insurance` and submit. Ensure WhatsApp Web or the WhatsApp mobile app opens with the formatted query addressed to `9332364068`.
6. **Verify Phone Links:** Click on any phone link to confirm it dials `+91 93323 64068`.
7. **Verify 404 Page:** Open `https://insurancesathi.in/random-non-existent-url` to ensure the branded custom 404 recovery screen loads cleanly.
