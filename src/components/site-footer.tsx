'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PwaPushManager } from '@/components/pwa-push-manager';

function getSiteDisplayName(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
  const hostname = new URL(url).hostname;
  return hostname.replace(/^www\./, '') || hostname;
}

function isLocalEnv(): boolean {
  if (typeof window === 'undefined') return false;
  const h = window.location.hostname;
  return h === 'localhost' || h === '127.0.0.1';
}

export function SiteFooter() {
  const siteDisplayName = getSiteDisplayName();
  const [showPushSection, setShowPushSection] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setShowPushSection(isLocalEnv());
  }, []);

  return (
    <footer className="relative z-20 border-t border-[#e8e6e3] dark:border-white/10 bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-4 py-8 pb-4 md:px-6 md:py-8 md:pb-5">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="vanthdev-btn-wrap inline-block">
              <Link
                href="/"
                className="vanthdev-btn-inner inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-sm no-underline text-[#1a1a1a] hover:text-[#c41e3a] transition-colors dark:text-white/95 dark:hover:text-amber-400"
              >
                <span className="text-base">✦</span>
                {siteDisplayName}
              </Link>
            </span>
          </div>
          <p className="text-[#999] dark:text-slate-500 text-xs tracking-wide">
            Tin tức được cập nhật liên tục
          </p>
          {showPushSection && (
            <details className="group mt-2 w-full max-w-sm rounded-xl border border-[#e8e6e3] bg-white/50 p-4 dark:border-white/10 dark:bg-white/5">
              <summary className="cursor-pointer list-none text-sm font-medium text-[#1a1a1a] dark:text-white/90">
                🔔 Thông báo đẩy
              </summary>
              <div className="mt-2">
                <PwaPushManager />
              </div>
            </details>
          )}
        </div>
      </div>
    </footer>
  );
}
