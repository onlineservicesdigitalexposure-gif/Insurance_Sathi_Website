import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  currentCount?: number;
  maxCount?: number;
}

export const TextareaField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(
  (
    {
      className,
      id,
      label,
      error,
      helperText,
      required,
      disabled,
      currentCount,
      maxCount,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id ?? generatedId;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;
    const hasError = Boolean(error);

    return (
      <div className="w-full space-y-1.5">
        <div className="flex items-center justify-between">
          {label && (
            <label
              htmlFor={textareaId}
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark"
            >
              {label}
              {required && (
                <span className="ml-1 text-brand-orange" aria-hidden="true">
                  *
                </span>
              )}
              {!required && (
                <span className="ml-1 text-[11px] font-normal lowercase text-slate-400">
                  (optional)
                </span>
              )}
            </label>
          )}

          {typeof currentCount === "number" && typeof maxCount === "number" && (
            <span
              className={cn(
                "text-[11px] tabular-nums",
                currentCount > maxCount
                  ? "font-bold text-rose-600"
                  : "text-slate-400"
              )}
            >
              {currentCount}/{maxCount}
            </span>
          )}
        </div>

        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : helperText ? helperId : undefined}
          className={cn(
            "w-full rounded-xl border bg-white p-3 text-xs sm:text-sm text-brand-dark shadow-xs transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-brand-royal/20 resize-y",
            hasError
              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
              : "border-brand-border hover:border-slate-400 focus:border-brand-royal",
            disabled && "cursor-not-allowed bg-slate-100 text-slate-400",
            className
          )}
          {...props}
        />

        {error ? (
          <p id={errorId} role="alert" className="text-xs font-medium text-rose-600">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-[11.5px] text-brand-muted">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

TextareaField.displayName = "TextareaField";
