import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "navy" | "royal" | "orange" | "success" | "neutral";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant = "royal",
  size = "md",
  icon,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-bold tracking-wide rounded-full border transition-colors";

  const variantStyles = {
    navy: "bg-brand-navy-50 text-brand-navy border-brand-navy-200",
    royal: "bg-brand-royal-50 text-brand-royal border-brand-royal-200",
    orange: "bg-brand-orange-50 text-brand-orange-700 border-brand-orange-200",
    success: "bg-emerald-50 text-emerald-800 border-emerald-200",
    neutral: "bg-slate-100 text-brand-body border-brand-border",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px] gap-1",
    md: "px-3.5 py-1 text-xs gap-1.5",
  };

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
