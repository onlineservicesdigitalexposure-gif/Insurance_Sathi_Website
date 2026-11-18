"use client";

import * as React from "react";
import { Search, X, Filter, BookOpen, AlertCircle, ArrowDown } from "lucide-react";
import type { BlogPostItem } from "@/types";
import { PostCard } from "./PostCard";
import { FeaturedPostCard } from "./FeaturedPostCard";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import { Button } from "@/components/ui/Button";

export interface BlogListingViewProps {
  posts: readonly BlogPostItem[];
  categories: readonly string[];
}

export function BlogListingView({ posts, categories }: BlogListingViewProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [visibleCount, setVisibleCount] = React.useState<number>(6);

  // Filter posts based on category and search query
  const filteredPosts = React.useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchExcerpt = post.excerpt.toLowerCase().includes(q);
      const matchTags = post.tags?.some((t) => t.toLowerCase().includes(q));
      const matchCategory = post.category.toLowerCase().includes(q);

      return matchTitle || matchExcerpt || matchTags || matchCategory;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Handlers for state updates without useEffect
  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(6);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setVisibleCount(6);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setVisibleCount(6);
  };

  const handleResetAll = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setVisibleCount(6);
  };

  // Featured post logic:
  // If user is on "All" category with no search query, show the featured post at top, then list remaining
  const isDefaultView = selectedCategory === "All" && !searchQuery.trim();
  const featuredPost = isDefaultView ? posts.find((p) => p.isFeatured) || posts[0] : null;
  const standardPosts = isDefaultView
    ? filteredPosts.filter((p) => p.id !== featuredPost?.id)
    : filteredPosts;

  const visibleStandardPosts = standardPosts.slice(0, visibleCount);
  const hasMore = visibleStandardPosts.length < standardPosts.length;

  return (
    <div className="bg-slate-50 min-h-[600px] py-4">
      <div className="container-site">
        {/* Controls Bar: Search & Category Filters */}
        <div className="rounded-2xl border border-brand-border bg-white p-5 sm:p-6 shadow-card mb-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search articles by topic, e.g. waiting period, cashless, DGH..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/80 py-2.5 pl-10 pr-10 text-sm text-brand-dark placeholder:text-slate-400 focus:border-brand-royal focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-royal/20 transition-all"
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                  aria-label="Clear search query"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-500 mr-1">
                <Filter className="h-3.5 w-3.5 text-slate-400" />
                Category:
              </span>

              <button
                type="button"
                onClick={() => handleSelectCategory("All")}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === "All"
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Guides ({posts.length})
              </button>

              {categories.map((cat) => {
                const count = posts.filter((p) => p.category === cat).length;
                const isSelected = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleSelectCategory(cat)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-brand-royal text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-brand-muted">
            <div>
              <span>
                Showing{" "}
                <strong className="text-brand-dark">
                  {isDefaultView ? (featuredPost ? 1 : 0) + visibleStandardPosts.length : filteredPosts.length}
                </strong>{" "}
                of <strong className="text-brand-dark">{posts.length}</strong> published insurance guides
              </span>
              {searchQuery && (
                <span className="ml-2 text-brand-royal font-medium">
                  matching &ldquo;{searchQuery}&rdquo;
                </span>
              )}
            </div>

            {(selectedCategory !== "All" || searchQuery) && (
              <button
                type="button"
                onClick={handleResetAll}
                className="text-brand-orange hover:text-brand-orange-600 font-semibold hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Content Section */}
        {filteredPosts.length === 0 ? (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <AlertCircle className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand-dark">No Articles Found</h3>
            <p className="mt-2 text-sm text-brand-muted max-w-md mx-auto">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Try searching with different keywords or reset your filters.
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleResetAll}
              className="mt-6"
            >
              Clear Search &amp; View All Articles
            </Button>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Featured Post (Only in Default Unfiltered View) */}
            {isDefaultView && featuredPost && (
              <section aria-label="Featured Educational Guide">
                <FeaturedPostCard post={featuredPost} />
              </section>
            )}

            {/* Articles Grid */}
            <section aria-label="Insurance Guides Grid">
              {isDefaultView && (
                <div className="mb-6 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-brand-royal" />
                  <h2 className="text-xl font-bold text-[#0F2E8A]">
                    <LogoHeadingText>All Educational Guides</LogoHeadingText>
                  </h2>
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visibleStandardPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Load More Pagination */}
              {hasMore && (
                <div className="mt-12 text-center">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="group"
                  >
                    <span>Load More Guides</span>
                    <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Button>
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
