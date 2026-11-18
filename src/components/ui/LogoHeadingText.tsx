import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogoHeadingTextProps {
  children: React.ReactNode;
  /** Use "dark" when rendered over dark navy hero or CTA backgrounds for high contrast */
  mode?: "light" | "dark";
  className?: string;
}

/**
 * Renders any heading text using the official Insurance Sathi Logo color combination:
 * - Light surfaces: Deep Logo Navy (#0F2E8A) + 3-color Logo Umbrella gradient (#FF6B00 -> #16A34A -> #0284C7)
 * - Dark surfaces: Crisp White + bright 3-color Logo Umbrella gradient (#FF922B -> #4ADE80 -> #38BDF8)
 */
export function LogoHeadingText({
  children,
  mode = "light",
  className,
}: LogoHeadingTextProps) {
  const isDark = mode === "dark";
  const baseTextClass = isDark ? "text-white" : "text-[#0F2E8A]";
  const gradientClass = isDark ? "text-logo-gradient-dark" : "text-logo-gradient";

  if (typeof children !== "string") {
    return <span className={cn(baseTextClass, className)}>{children}</span>;
  }

  const trimmed = children.trim();
  const words = trimmed.split(/\s+/);

  if (words.length <= 1) {
    return <span className={cn(gradientClass, className)}>{trimmed}</span>;
  }

  if (words.length === 2) {
    return (
      <span className={cn(baseTextClass, className)}>
        {words[0]}{" "}
        <span className={gradientClass}>{words[1]}</span>
      </span>
    );
  }

  // Split into opening (base color), focal middle phrase (Logo 3-color gradient), and closing (base color)
  const startCount = Math.max(1, Math.floor(words.length * 0.25));
  const highlightEnd = Math.min(
    words.length - 1,
    Math.max(startCount + 1, Math.ceil(words.length * 0.72))
  );

  const prefix = words.slice(0, startCount).join(" ");
  const highlight = words.slice(startCount, highlightEnd).join(" ");
  const suffix = words.slice(highlightEnd).join(" ");

  return (
    <span className={cn(baseTextClass, className)}>
      {prefix}{" "}
      <span className={gradientClass}>{highlight}</span>
      {suffix ? ` ${suffix}` : ""}
    </span>
  );
}
