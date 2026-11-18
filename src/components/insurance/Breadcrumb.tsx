import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: readonly BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
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
            className="flex items-center gap-1 text-slate-300 transition-colors hover:text-white"
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
                  className="font-bold text-white truncate max-w-[200px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  itemProp="item"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={position.toString()} />
              {!isLast && (
                <ChevronRight className="h-3 w-3 text-slate-400" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
