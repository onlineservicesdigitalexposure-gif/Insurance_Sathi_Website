"use client";

import * as React from "react";
import { Share2, Check, Copy, MessageCircle } from "lucide-react";
import type { BlogPostItem } from "@/types";

export interface PostShareButtonsProps {
  post: BlogPostItem;
  className?: string;
}

export function PostShareButtons({ post, className = "" }: PostShareButtonsProps) {
  const [copied, setCopied] = React.useState(false);

  const shareText = `${post.title} | Insurance Sathi Guide`;
  const shareUrl = `https://insurancesathi.in/blog/${post.slug}`;

  const handleCopyLink = async () => {
    try {
      const urlToCopy =
        typeof window !== "undefined" && window.location.href
          ? window.location.href
          : shareUrl;

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(urlToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\nRead here: ${shareUrl}`)}`;
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div
      className={`rounded-2xl border border-brand-border bg-white p-5 shadow-card sm:p-6 ${className}`}
      aria-label="Share this guide"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-royal-50 text-brand-royal">
            <Share2 className="h-4 w-4" aria-hidden="true" />
          </div>
          <div>
            <span className="block text-sm font-bold text-brand-dark">Share This Guide</span>
            <span className="text-xs text-brand-muted">Help friends &amp; family protect their finances</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* WhatsApp */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition-transform hover:scale-105 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Share on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#0077B5] px-3.5 py-2 text-xs font-bold text-white shadow-sm transition-transform hover:scale-105 hover:bg-[#006396] focus:outline-none focus:ring-2 focus:ring-[#0077B5]/40"
            aria-label="Share on LinkedIn"
          >
            <span>LinkedIn</span>
          </a>

          {/* Twitter / X */}
          <a
            href={twitterHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition-transform hover:scale-105 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Share on X"
          >
            <span>X (Twitter)</span>
          </a>

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all focus:outline-none focus:ring-2 ${
              copied
                ? "border-emerald-500 bg-emerald-50 text-emerald-700 focus:ring-emerald-300"
                : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-brand-navy focus:ring-slate-300"
            }`}
            aria-label="Copy article link"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-slate-500" aria-hidden="true" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
