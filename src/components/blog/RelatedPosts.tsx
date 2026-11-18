import { BookOpen } from "lucide-react";
import type { BlogPostItem } from "@/types";
import { PostCard } from "./PostCard";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

export interface RelatedPostsProps {
  posts: readonly BlogPostItem[];
  currentCategory: string;
  className?: string;
}

export function RelatedPosts({ posts, currentCategory, className = "" }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className={`border-t border-brand-border/80 ${className}`} aria-labelledby="related-posts-heading">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-royal">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            <span>More in {currentCategory} &amp; Advisory</span>
          </div>
          <h2 id="related-posts-heading" className="mt-1 text-2xl font-bold text-[#0F2E8A]">
            <LogoHeadingText>Related Insurance Guides</LogoHeadingText>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
