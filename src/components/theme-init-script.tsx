'use client';

import Script from 'next/script';

/**
 * Inline script to set theme class on html before React hydrates.
 * Prevents flash of wrong theme (FOUC).
 */
export function ThemeInitScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {`(function(){try{var m=document.cookie.match(/(?:^|; )theme=([^;]*)/);var t=m?decodeURIComponent(m[1]):null;if(t==='dark'||t==='light'){document.documentElement.classList.add(t)}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`}
    </Script>
  );
}
