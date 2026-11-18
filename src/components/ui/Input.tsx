import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const hasError = Boolean(errorMessage);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-bold uppercase tracking-wider text-brand-dark"
          >
            {label}
            {required && <span className="ml-1 text-brand-orange">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="pointer-events-none absolute left-3.5 flex items-center text-brand-subtle">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            type={type}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              "w-full rounded-xl border bg-white px-4 py-3 text-sm font-medium text-brand-dark transition-all duration-150 placeholder:text-brand-subtle",
              "border-brand-border focus:border-brand-royal focus:ring-4 focus:ring-brand-royal/10 focus:outline-none",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              hasError &&
                "border-brand-error text-brand-error focus:border-brand-error focus:ring-brand-error/15",
              disabled && "cursor-not-allowed bg-slate-50 text-slate-400 opacity-60",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="pointer-events-none absolute right-3.5 flex items-center text-brand-subtle">
              {rightIcon}
            </div>
          )}
        </div>

        {hasError ? (
          <p id={errorId} className="text-xs font-semibold text-brand-error">
            {errorMessage}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-xs text-brand-muted">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
