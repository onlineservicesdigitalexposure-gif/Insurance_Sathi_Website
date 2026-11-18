import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getRelatedServices,
  SITE_CONFIG,
} from "@/data";
import {
  ServiceHero,
  ServiceCoverage,
  ServiceProcess,
  ServiceDocuments,
  ServiceFaqAccordion,
  ServiceContactCta,
  RelatedServices,
} from "@/components/services";

export interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Static Route Generation for all 5 core services + alias routes
 */
export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * Dynamic Metadata for SEO & Social Graph
 */
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} - ${SITE_CONFIG.name} Barasat`,
    description: service.seo.metaDescription,
    keywords: [...service.seo.keywords],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      type: "website",
      locale: SITE_CONFIG.meta.locale,
      url: `/services/${service.slug}`,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: service.imagePath,
          width: 800,
          height: 600,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      images: [service.imagePath],
    },
  };
}

/**
 * Loading skeleton fallback for Service detail pages
 */
function ServicePageSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50/50 animate-pulse" aria-busy="true" aria-label="Loading service details">
      {/* Hero Skeleton */}
      <div className="relative overflow-hidden bg-brand-navy text-white">
        <div className="container-site max-w-4xl space-y-4">
          <div className="h-6 w-32 rounded-full bg-white/15" />
          <div className="h-10 w-4/5 rounded-xl bg-white/20" />
          <div className="h-5 w-2/3 rounded-lg bg-white/10" />
        </div>
      </div>

      {/* Main Skeleton */}
      <div className="container-site space-y-8">
        <div className="h-48 rounded-2xl border border-slate-200 bg-white p-8 space-y-4">
          <div className="h-6 w-1/3 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-100" />
          <div className="h-4 w-4/5 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

/**
 * Synchronous Server Component Root Page for Next.js 16 Partial Prerendering
 * Wrapped in React Suspense to isolate dynamic params resolution.
 */
export default function ServicePage({ params }: ServicePageProps) {
  return (
    <Suspense fallback={<ServicePageSkeleton />}>
      <ServicePageContent params={params} />
    </Suspense>
  );
}

/**
 * Asynchronous Service Page Content Renderer
 * Awaits params promise inside Suspense boundary.
 */
async function ServicePageContent({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  // Return standard Next.js 404 for invalid slugs
  if (!service) {
    notFound();
  }

  // Get other services for internal linking
  const relatedServices = getRelatedServices(service.slug, 4);

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        provider: {
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          telephone: SITE_CONFIG.contact.phone,
          email: SITE_CONFIG.contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE_CONFIG.address.street,
            addressLocality: SITE_CONFIG.address.city,
            addressRegion: SITE_CONFIG.address.state,
            postalCode: SITE_CONFIG.address.postalCode,
            addressCountry: "IN",
          },
        },
        areaServed: SITE_CONFIG.targetLocations.map((loc) => ({
          "@type": "AdministrativeArea",
          name: loc,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://insurancesathi.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://insurancesathi.in/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://insurancesathi.in/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <article className="flex flex-col">
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section with Breadcrumb, Title, Subtitle, Highlights & Image */}
      <ServiceHero service={service} />

      {/* 2. What the Service Covers (Scope & Boundaries) */}
      <ServiceCoverage service={service} />

      {/* 3. How the Process Works (Step-by-Step Workflow) */}
      <ServiceProcess service={service} />

      {/* 4. Required Documents Checklist & Regulatory Disclaimer */}
      <ServiceDocuments service={service} />

      {/* 5. Service-Specific Frequently Asked Questions */}
      <ServiceFaqAccordion service={service} />

      {/* 6. Contact & WhatsApp Call-to-Action Banner */}
      <ServiceContactCta service={service} />

      {/* 7. Related Core Services (Internal Linking) */}
      <RelatedServices relatedServices={relatedServices} />
    </article>
  );
}
