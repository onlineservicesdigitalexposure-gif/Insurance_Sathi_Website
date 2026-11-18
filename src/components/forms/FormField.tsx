import * as React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  label,
  htmlFor,
  required = false,
  error,
  helperText,
  children,
  className,
}: FormFieldProps) {
  const errorId = `${htmlFor}-error`;
  const helperId = `${htmlFor}-helper`;

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={htmlFor}
          className="block text-xs font-bold uppercase tracking-wider text-brand-dark"
        >
          {label}
          {required && <span className="ml-1 text-brand-orange" aria-hidden="true">*</span>}
          {!required && (
            <span className="ml-1 text-[11px] font-normal lowercase text-slate-400">
              (optional)
            </span>
          )}
        </label>
      </div>

      {children}

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-in fade-in-50 duration-150"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-[11.5px] text-brand-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
