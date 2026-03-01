import React from 'react';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

export type BreadcrumbItem = {
  /** Path like '/' or '/news'. Omit for current page (renders as plain text) */
  href?: string;
  label: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  /** Full URL of current page for JSON-LD. Omit to skip schema output */
  currentPageUrl?: string;
  className?: string;
};

function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
  currentPageUrl: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const url =
        isLast && !item.href
          ? currentPageUrl
          : item.href === '/'
            ? BASE_URL
            : `${BASE_URL}${item.href?.startsWith('/') ? '' : '/'}${item.href ?? ''}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: url,
      };
    }),
  };
}

export function Breadcrumb({ items, currentPageUrl, className = 'mb-8' }: BreadcrumbProps) {
  const jsonLd = currentPageUrl ? buildBreadcrumbJsonLd(items, currentPageUrl) : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#6b6b6b] dark:text-slate-400">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                {item.href !== undefined ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#c41e3a] dark:hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#1a1a1a] dark:text-white/95">{item.label}</span>
                )}
              </li>
              {index < items.length - 1 && <li aria-hidden>/</li>}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
}
