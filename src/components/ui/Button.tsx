import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "royal" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.99]";

    const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
      primary:
        "bg-brand-orange text-white hover:bg-brand-orange-600 shadow-sm shadow-brand-orange/30 focus-visible:outline-brand-orange",
      secondary:
        "bg-brand-navy text-white hover:bg-brand-navy-800 shadow-sm focus-visible:outline-brand-navy",
      royal:
        "bg-brand-royal text-white hover:bg-brand-royal-600 shadow-sm shadow-brand-royal/30 focus-visible:outline-brand-royal",
      outline:
        "border border-brand-border bg-white text-brand-dark hover:bg-brand-royal-50 hover:border-brand-royal-300 hover:text-brand-royal focus-visible:outline-brand-royal",
      ghost:
        "bg-transparent text-brand-dark hover:bg-brand-navy-50 hover:text-brand-navy focus-visible:outline-brand-navy",
      white:
        "bg-white text-brand-navy hover:bg-brand-light shadow-md shadow-brand-navy/10 focus-visible:outline-white",
    };

    const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
      sm: "text-xs px-3 py-2 gap-1.5 rounded-lg",
      md: "text-sm px-5 py-2.5 gap-2 rounded-xl",
      lg: "text-base px-6 py-3.5 gap-2.5 rounded-xl font-extrabold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
