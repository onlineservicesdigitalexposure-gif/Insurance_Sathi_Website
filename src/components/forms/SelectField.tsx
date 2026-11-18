import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: readonly string[] | readonly SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      className,
      id,
      label,
      options,
      placeholder,
      error,
      helperText,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;
    const helperId = `${selectId}-helper`;
    const hasError = Boolean(error);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={selectId}
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
        )}

        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : helperText ? helperId : undefined}
            className={cn(
              "w-full appearance-none rounded-xl border bg-white px-3.5 py-2.5 pr-10 text-xs sm:text-sm text-brand-dark shadow-xs transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-brand-royal/20",
              hasError
                ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
                : "border-brand-border hover:border-slate-400 focus:border-brand-royal",
              disabled && "cursor-not-allowed bg-slate-100 text-slate-400",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => {
              const optionValue = typeof opt === "string" ? opt : opt.value;
              const optionLabel = typeof opt === "string" ? opt : opt.label;
              return (
                <option key={optionValue} value={optionValue}>
                  {optionLabel}
                </option>
              );
            })}
          </select>

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

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

SelectField.displayName = "SelectField";
