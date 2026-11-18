import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { LogoHeadingText } from "./LogoHeadingText";

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  mode?: "light" | "dark";
}

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  mode = "light",
  className,
  ...props
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = mode === "dark";

  return (
    <div
      className={cn(
        "flex flex-col space-y-4",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className
      )}
      {...props}
    >
      {badge && (
        <Badge
          variant={isDark ? "orange" : "royal"}
          size="md"
          icon={badgeIcon}
          className={cn(
            "uppercase font-extrabold tracking-wider",
            isDark && "bg-brand-orange/15 text-brand-orange-300 border-brand-orange/30"
          )}
        >
          {badge}
        </Badge>
      )}

      <h2
        className={cn(
          "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]",
          isDark ? "text-white" : "text-[#0F2E8A]"
        )}
      >
        <LogoHeadingText mode={mode}>{title}</LogoHeadingText>
      </h2>

      {/* Subtle Official Logo 3-Color Accent Underline */}
      <div
        className={cn(
          "h-1 w-20 rounded-full bg-logo-gradient",
          isCenter ? "mx-auto" : ""
        )}
        aria-hidden="true"
      />

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-slate-300" : "text-brand-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
