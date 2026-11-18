import * as React from "react";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import type { BlogPostItem } from "@/types";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

export interface PostContentProps {
  post: BlogPostItem;
  className?: string;
}

/**
 * Helper to parse bold markdown syntax **text** into React elements
 */
function parseInlineMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-brand-dark">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function PostContent({ post, className = "" }: PostContentProps) {
  // Split raw markdown into blocks by double line-breaks
  const rawBlocks = post.content.split(/\n\n+/);

  // Map headings to IDs for anchor linking
  const headingIdMap = new Map<string, string>();
  if (post.headings) {
    for (const h of post.headings) {
      // Normalize heading title for fuzzy matching
      const cleanTitle = h.title.replace(/^[0-9.]+\s*/, "").trim().toLowerCase();
      headingIdMap.set(cleanTitle, h.id);
    }
  }

  return (
    <article className={`prose-insurance max-w-none text-slate-700 ${className}`}>
      {rawBlocks.map((block, blockIndex) => {
        const trimmed = block.trim();

        // 1. Heading H3 / H2 (lines starting with ### or ##)
        if (trimmed.startsWith("### ") || trimmed.startsWith("## ")) {
          const headingText = trimmed.replace(/^#{2,3}\s+/, "");
          const cleanTitle = headingText.replace(/^[0-9.]+\s*/, "").trim().toLowerCase();
          
          // Match ID from post.headings or generate a slug from headingText
          const matchedId =
            headingIdMap.get(cleanTitle) ||
            post.headings?.find((h) => headingText.includes(h.title) || h.title.includes(headingText))?.id ||
            headingText
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "");

          return (
            <div key={blockIndex} className="mt-10 mb-4 pt-4 first:mt-0 first:pt-0">
              <h2
                id={matchedId}
                className="group flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-[#0F2E8A] tracking-tight scroll-mt-24"
              >
                <LogoHeadingText>{headingText}</LogoHeadingText>
                <a
                  href={`#${matchedId}`}
                  className="opacity-0 group-hover:opacity-100 text-brand-royal transition-opacity text-base font-normal ml-1"
                  aria-label={`Direct link to ${headingText}`}
                >
                  #
                </a>
              </h2>
            </div>
          );
        }

        // 2. Unordered List (lines starting with "- ")
        if (trimmed.split("\n").every((line) => line.trim().startsWith("- ") || line.trim() === "")) {
          const items = trimmed
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.startsWith("- "))
            .map((line) => line.slice(2));

          return (
            <ul key={blockIndex} className="my-5 space-y-2.5 pl-2">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2.5 text-base sm:text-lg leading-relaxed text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-1 shrink-0" aria-hidden="true" />
                  <span>{parseInlineMarkdown(item)}</span>
                </li>
              ))}
            </ul>
          );
        }

        // 3. Ordered List (lines starting with "1. ", "2. ", etc.)
        if (trimmed.split("\n").every((line) => /^\d+\.\s+/.test(line.trim()) || line.trim() === "")) {
          const items = trimmed
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => /^\d+\.\s+/.test(line))
            .map((line) => line.replace(/^\d+\.\s+/, ""));

          return (
            <ol key={blockIndex} className="my-5 space-y-3 pl-2">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-royal-100 text-xs font-bold text-brand-royal mt-0.5">
                    {itemIdx + 1}
                  </span>
                  <span>{parseInlineMarkdown(item)}</span>
                </li>
              ))}
            </ol>
          );
        }

        // 4. Standard Paragraph
        return (
          <p
            key={blockIndex}
            className="mb-5 text-base sm:text-lg leading-relaxed text-slate-700"
          >
            {parseInlineMarkdown(trimmed)}
          </p>
        );
      })}

      {/* Regulatory Consumer Protection Notice */}
      <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7 text-amber-900 shadow-sm">
        <div className="flex items-start gap-3.5">
          <ShieldAlert className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <h3 className="font-bold text-amber-950 text-sm sm:text-base">
              Regulatory Consumer Protection Note
            </h3>
            <p className="mt-1.5 text-amber-800">
              Insurance is a subject matter of solicitation. Policy terms, waiting periods, sub-limits, and claim admissibility are strictly governed by the underlying policy wordings filed by insurers with the Insurance Regulatory and Development Authority of India (IRDAI).
            </p>
            <p className="mt-2 text-amber-800">
              Insurance Sathi provides advisory and facilitation services to policyholders across Barasat, Madhyamgram, and Habra. We do not underwrite insurance or issue unilateral claim settlement guarantees.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
