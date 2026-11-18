import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import type { BlogPostItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

export interface PostCardProps {
  post: BlogPostItem;
  className?: string;
}

export function PostCard({ post, className = "" }: PostCardProps) {
  const postUrl = `/blog/${post.slug}`;

  return (
    <Card
      interactive
      className={`group flex flex-col justify-between overflow-hidden border-brand-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-royal-300 hover:shadow-card-hover ${className}`}
    >
      <div>
        {/* Cover Image Container */}
        <Link href={postUrl} className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-100">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-navy-50 to-brand-royal-50 p-6 text-brand-navy-400">
              <span className="font-semibold text-sm">Insurance Sathi Knowledge Hub</span>
            </div>
          )}

          {/* Floating Category Badge */}
          <div className="absolute left-4 top-4 z-10">
            <Badge variant="royal" size="sm" className="shadow-sm backdrop-blur-md">
              {post.category}
            </Badge>
          </div>
        </Link>

        {/* Content Body */}
        <CardContent className="p-6">
          {/* Metadata Row: Date & Reading Time */}
          <div className="flex items-center gap-4 text-xs text-brand-muted">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              <span>{post.publishedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-lg font-bold text-brand-dark leading-snug group-hover:text-brand-royal transition-colors line-clamp-2">
            <Link href={postUrl}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="mt-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </div>

      {/* Footer: Author & Read More Link */}
      <div className="flex items-center justify-between border-t border-brand-border/60 bg-slate-50/70 px-6 py-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy-100 text-brand-navy font-bold">
            <User className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
          <div>
            <span className="font-semibold text-brand-dark block leading-none">{post.author}</span>
            <span className="text-[10px] text-brand-muted leading-none">Verified Advisor</span>
          </div>
        </div>

        <Link
          href={postUrl}
          className="inline-flex items-center gap-1 font-bold text-brand-royal transition-colors group-hover:text-brand-navy group-hover:translate-x-0.5"
          aria-label={`Read full article: ${post.title}`}
        >
          <span>Read Guide</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}
