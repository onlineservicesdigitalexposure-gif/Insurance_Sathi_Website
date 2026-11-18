import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: readonly BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`w-full ${className}`}>
      <ol
        className="flex flex-wrap items-center gap-1.5 text-xs text-brand-muted"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Root Home Item */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center gap-1.5"
        >
          <Link
            href="/"
            itemProp="item"
            className="flex items-center gap-1 text-slate-500 transition-colors hover:text-brand-navy"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
          <ChevronRight className="h-3 w-3 text-slate-400" aria-hidden="true" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 2;

          return (
            <li
              key={item.label}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-1.5"
            >
              {isLast || !item.href ? (
                <span
                  itemProp="name"
                  className="font-medium text-brand-dark max-w-[240px] truncate sm:max-w-md"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="text-slate-500 transition-colors hover:text-brand-navy"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <ChevronRight className="h-3 w-3 text-slate-400" aria-hidden="true" />
                </>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
