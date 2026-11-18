import { Calendar, Clock, ShieldCheck, MapPin, Phone, User } from "lucide-react";
import type { BlogPostItem } from "@/types";
import { Breadcrumb } from "./Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

export interface PostHeroProps {
  post: BlogPostItem;
}

export function PostHero({ post }: PostHeroProps) {
  const authorDetails = post.authorDetails;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-navy-900 via-brand-navy to-brand-navy-800 text-white py-4">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-royal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: "Knowledge Hub", href: "/blog" },
              { label: post.title },
            ]}
            className="[&_ol]:text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-white"
          />
        </div>

        <div className="max-w-4xl">
          {/* Category & Reading Time */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="orange" size="sm" className="font-bold">
              {post.category}
            </Badge>
            <span className="text-slate-400">•</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Clock className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
            <span className="text-slate-400">•</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
              <time dateTime={post.publishedDateIso || undefined}>{post.publishedDate}</time>
            </div>
          </div>

          {/* H1 Title */}
          <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight sm:leading-snug">
            <LogoHeadingText mode="dark">{post.title}</LogoHeadingText>
          </h1>

          {/* Excerpt */}
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>

          {/* Verified Author Card */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy font-bold shadow-md">
                <User className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-base text-white">{post.author}</span>
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300 border border-emerald-500/30">
                    <ShieldCheck className="h-3 w-3" />
                    Verified Advisor
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {authorDetails?.role || post.authorRole || "Founder & Principal Insurance Advisor"}
                </p>
              </div>
            </div>

            {/* Location & Contact Trust Pill */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                <span>Duckbanglow More, Barasat</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                <span>9332364068</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
