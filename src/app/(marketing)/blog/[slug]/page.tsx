import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ShieldCheck, MessageCircle, Phone, MapPin, User } from "lucide-react";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  SITE_CONFIG,
} from "@/data";
import {
  PostHero,
  TableOfContents,
  PostContent,
  PostShareButtons,
  RelatedPosts,
  BlogEnquiryCta,
} from "@/components/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = "https://insurancesathi.in";

/**
 * Prerender all blog posts statically at build time.
 */
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Generate dynamic SEO and OpenGraph metadata for the blog post.
 */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Insurance Sathi",
      description: "The requested insurance article could not be found.",
    };
  }

  const siteUrl = BASE_URL;
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.coverImage ? `${siteUrl}${post.coverImage}` : undefined;

  return {
    title: `${post.seo.metaTitle} | Insurance Sathi`,
    description: post.seo.metaDescription,
    keywords: [...post.seo.keywords],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "Insurance Sathi",
      type: "article",
      publishedTime: post.publishedDateIso,
      modifiedTime: post.modifiedDateIso || post.publishedDateIso,
      authors: [post.author],
      tags: post.tags ? [...post.tags] : [],
      locale: "en_IN",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.coverAlt || post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

/**
 * Attractive, responsive loading skeleton fallback for blog posts
 */
function BlogPostSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50/50 animate-pulse" aria-busy="true" aria-label="Loading blog article">
      {/* Hero Skeleton */}
      <div className="relative overflow-hidden bg-brand-navy text-white">
        <div className="container-site max-w-4xl space-y-4">
          <div className="h-5 w-32 rounded-full bg-white/15" />
          <div className="h-10 w-4/5 rounded-xl bg-white/20" />
          <div className="h-5 w-2/3 rounded-lg bg-white/10" />
          <div className="flex items-center gap-4 pt-2">
            <div className="h-10 w-10 rounded-full bg-white/20" />
            <div className="space-y-2">
              <div className="h-4 w-32 rounded bg-white/20" />
              <div className="h-3 w-24 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Body Skeleton */}
      <div>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column Content Skeleton */}
            <div className="lg:col-span-8 space-y-8">
              <div className="aspect-[16/10] w-full rounded-2xl bg-slate-200" />
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-6">
                <div className="h-7 w-2/5 rounded bg-slate-200" />
                <div className="space-y-3">
                  <div className="h-4 w-full rounded bg-slate-100" />
                  <div className="h-4 w-11/12 rounded bg-slate-100" />
                  <div className="h-4 w-4/5 rounded bg-slate-100" />
                </div>
                <div className="h-6 w-1/3 rounded bg-slate-200 pt-4" />
                <div className="space-y-3">
                  <div className="h-4 w-full rounded bg-slate-100" />
                  <div className="h-4 w-10/12 rounded bg-slate-100" />
                  <div className="h-4 w-3/4 rounded bg-slate-100" />
                </div>
              </div>
            </div>

            {/* Right Column Sidebar Skeleton */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
                <div className="h-5 w-32 rounded bg-slate-200" />
                <div className="h-4 w-full rounded bg-slate-100" />
                <div className="h-4 w-4/5 rounded bg-slate-100" />
                <div className="h-4 w-3/5 rounded bg-slate-100" />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-slate-200" />
                  <div className="space-y-2">
                    <div className="h-4 w-28 rounded bg-slate-200" />
                    <div className="h-3 w-20 rounded bg-slate-100" />
                  </div>
                </div>
                <div className="h-12 w-full rounded-xl bg-slate-100" />
              </div>
            </div>
          </div>

          {/* Related Articles Skeleton */}
          <div className="mt-16 space-y-6">
            <div className="h-7 w-48 rounded bg-slate-200" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden space-y-3 p-4">
                  <div className="aspect-[16/9] w-full rounded-xl bg-slate-100" />
                  <div className="h-5 w-3/4 rounded bg-slate-200" />
                  <div className="h-4 w-full rounded bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Synchronous Server Component Root Page for Next.js 16 Partial Prerendering
 * Wrapped in React Suspense to isolate dynamic params resolution.
 */
export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <Suspense fallback={<BlogPostSkeleton />}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}

/**
 * Asynchronous BlogPost Content Renderer
 * Awaits params promise inside Suspense boundary.
 */
async function BlogPostContent({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.category, 3);
  const siteUrl = BASE_URL;
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const authorDetails = post.authorDetails;

  // Schema.org BlogPosting & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": postUrl,
          url: postUrl,
          name: post.title,
        },
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage ? `${siteUrl}${post.coverImage}` : undefined,
        datePublished: post.publishedDateIso,
        dateModified: post.modifiedDateIso || post.publishedDateIso,
        mainEntityOfPage: postUrl,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: authorDetails?.role || post.authorRole || "Founder & Principal Insurance Advisor",
          description: authorDetails?.credentials || "Insurance Advisor guiding families across Barasat, Madhyamgram & Habra",
          worksFor: {
            "@type": "LocalBusiness",
            name: "Insurance Sathi",
            telephone: SITE_CONFIG.contact.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: SITE_CONFIG.address.street,
              addressLocality: SITE_CONFIG.address.city,
              addressRegion: SITE_CONFIG.address.state,
              postalCode: SITE_CONFIG.address.postalCode,
              addressCountry: "IN",
            },
          },
        },
        publisher: {
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          telephone: SITE_CONFIG.contact.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE_CONFIG.address.street,
            addressLocality: SITE_CONFIG.address.city,
            addressRegion: SITE_CONFIG.address.state,
            postalCode: SITE_CONFIG.address.postalCode,
            addressCountry: "IN",
          },
        },
        articleSection: post.category,
        keywords: post.tags?.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${postUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Knowledge Hub",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50/50">
        {/* Post Hero */}
        <PostHero post={post} />

        {/* Main Article Body Container */}
        <div>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Article Content & Shares */}
              <div className="lg:col-span-8 space-y-8">
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-2 shadow-card">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt || post.title}
                        fill
                        preload
                        sizes="(max-width: 1024px) 100vw, 750px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Mobile Table of Contents */}
                {post.headings && post.headings.length > 0 && (
                  <div className="block lg:hidden">
                    <TableOfContents headings={post.headings} />
                  </div>
                )}

                {/* Article Content */}
                <div className="rounded-2xl border border-brand-border bg-white p-6 sm:p-10 shadow-card">
                  <PostContent post={post} />
                </div>

                {/* Social Share Buttons */}
                <PostShareButtons post={post} />
              </div>

              {/* Right Column: Sticky Sidebar with Desktop TOC & Verified Author */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                {/* Desktop Table of Contents */}
                {post.headings && post.headings.length > 0 && (
                  <div className="hidden lg:block">
                    <TableOfContents headings={post.headings} />
                  </div>
                )}

                {/* Verified Author Profile Card */}
                <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-card">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-royal">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>Verified Insurance Advisor</span>
                  </div>

                  <div className="mt-4 flex items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white shadow-sm font-bold">
                      <User className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark leading-snug">{post.author}</h4>
                      <p className="text-xs text-brand-muted">
                        {authorDetails?.role || post.authorRole || "Founder, Insurance Sathi"}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {authorDetails?.credentials ||
                      "Guiding local policyholders across Barasat, Madhyamgram, and Habra with honest, claim-tested advice."}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-brand-muted">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{authorDetails?.location || "Duckbanglow More, Barasat, WB 700124"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand-orange shrink-0" />
                      <span>Direct: +91 9332364068</span>
                    </div>
                  </div>

                  {/* Consultation CTA */}
                  <div className="mt-6">
                    <a
                      href="https://wa.me/919332364068?text=Hello%20MD%20Abrahim,%20I%20have%20a%20question%20regarding%20insurance."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Consult on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Quick Assistance Box */}
                <div className="rounded-2xl border border-brand-royal-100 bg-brand-royal-50/50 p-6 text-brand-dark">
                  <h4 className="font-bold text-sm text-brand-navy">Need In-Person Assistance?</h4>
                  <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                    Walk in to our Duckbanglow More office in Barasat for document verification, claim form filing, or revival quotations.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-block text-xs font-bold text-brand-royal hover:text-brand-navy hover:underline"
                  >
                    Contact Our Office →
                  </Link>
                </div>
              </aside>
            </div>

            {/* Bottom In-Article Consultation Form */}
            <div className="mt-16">
              <BlogEnquiryCta category={post.category} />
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <RelatedPosts posts={relatedPosts} currentCategory={post.category} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
