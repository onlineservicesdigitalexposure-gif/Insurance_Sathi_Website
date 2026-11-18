"use client";

import * as React from "react";
import { ListOrdered, ChevronDown, ChevronUp } from "lucide-react";
import type { BlogHeading } from "@/types";

export interface TableOfContentsProps {
  headings?: readonly BlogHeading[];
  className?: string;
}

export function TableOfContents({ headings, className = "" }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = React.useState<boolean>(false);

  // Set up intersection observer for scroll-spy
  React.useEffect(() => {
    if (!headings || headings.length < 2) return;

    const headingElements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, [headings]);

  // If there are no headings or fewer than 2, do not render
  if (!headings || headings.length < 2) {
    return null;
  }

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 90; // offset for sticky navigation header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className={`rounded-2xl border border-brand-border bg-white shadow-card overflow-hidden ${className}`}
    >
      {/* Mobile Toggle Button */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="flex w-full items-center justify-between p-4 text-left font-bold text-brand-dark lg:hidden"
        aria-expanded={isMobileOpen}
      >
        <span className="flex items-center gap-2 text-sm">
          <ListOrdered className="h-4 w-4 text-brand-royal" aria-hidden="true" />
          <span>Table of Contents ({headings.length} Sections)</span>
        </span>
        {isMobileOpen ? (
          <ChevronUp className="h-4 w-4 text-slate-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-500" />
        )}
      </button>

      {/* Desktop Header */}
      <div className="hidden border-b border-brand-border bg-slate-50/80 px-5 py-3.5 lg:flex items-center gap-2">
        <ListOrdered className="h-4 w-4 text-brand-royal" aria-hidden="true" />
        <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
          Table of Contents
        </span>
      </div>

      {/* Headings List */}
      <div className={`p-4 lg:block ${isMobileOpen ? "block" : "hidden"}`}>
        <ul className="space-y-2 text-xs sm:text-sm">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;

            return (
              <li
                key={heading.id}
                className={heading.level > 2 ? "pl-4" : ""}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleScrollTo(e, heading.id)}
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors leading-snug ${
                    isActive
                      ? "bg-brand-royal-50 font-bold text-brand-royal border-l-2 border-brand-royal"
                      : "text-slate-600 hover:bg-slate-50 hover:text-brand-navy"
                  }`}
                >
                  {heading.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
