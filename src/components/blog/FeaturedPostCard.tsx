import Link from "next/link";
import Image from "next/image";
import { Sparkles, Clock, Calendar, ArrowRight, ShieldCheck, User } from "lucide-react";
import type { BlogPostItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

export interface FeaturedPostCardProps {
  post: BlogPostItem;
  className?: string;
}

export function FeaturedPostCard({ post, className = "" }: FeaturedPostCardProps) {
  const postUrl = `/blog/${post.slug}`;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-brand-royal-200 bg-white shadow-card-hover transition-all duration-300 hover:border-brand-royal-400 ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Cover Image Column */}
        <Link
          href={postUrl}
          className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-100 lg:col-span-7"
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full min-h-[280px] items-center justify-center bg-gradient-to-br from-brand-navy-100 to-brand-royal-100 p-8 text-brand-navy">
              <span className="text-base font-bold">Featured Insurance Guide</span>
            </div>
          )}

          {/* Featured Pill Overlay */}
          <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white shadow-md">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Featured Guide</span>
            </span>
            <Badge variant="royal" size="sm" className="bg-white/95 text-brand-navy shadow-sm backdrop-blur-md">
              {post.category}
            </Badge>
          </div>
        </Link>

        {/* Text Content Column */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
          <div>
            {/* Meta Info */}
            <div className="flex items-center gap-3 text-xs text-brand-muted">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-brand-royal" aria-hidden="true" />
                <span>{post.publishedDate}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-brand-royal" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-xl sm:text-2xl font-bold text-[#0F2E8A] leading-tight transition-colors">
              <Link href={postUrl}>
                <LogoHeadingText>{post.title}</LogoHeadingText>
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="mt-3.5 text-sm sm:text-base text-brand-muted leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Row: Verified Author Pill & Read CTA */}
          <div className="mt-8 pt-6 border-t border-brand-border/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white shadow-sm">
                <User className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm text-brand-dark">{post.author}</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" aria-label="Verified Advisor" />
                </div>
                <span className="text-xs text-brand-muted block">Founder &amp; Insurance Advisor</span>
              </div>
            </div>

            <Link
              href={postUrl}
              className="inline-flex items-center justify-center font-bold tracking-tight rounded-xl bg-brand-orange text-white hover:bg-brand-orange-600 shadow-sm shadow-brand-orange/30 px-5 py-2.5 text-sm gap-2 transition-all active:scale-[0.99] group/btn"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
