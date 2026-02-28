'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocale } from '@/hooks/use-locale';

const STORAGE_KEY = 'pwa-install-prompt-last-seen';
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours
const AUTO_HIDE_MS = 5000; // 5 seconds

const LABELS = {
  vi: {
    title: 'Cài đặt ứng dụng',
    addToHome: 'Thêm vào màn hình chính',
    hint: 'Cài đặt để truy cập nhanh từ màn hình chính.',
    iosHint:
      'Để cài đặt trên iOS: nhấn nút chia sẻ và chọn "Thêm vào Màn hình chính".',
    dismiss: 'Đóng',
  },
  en: {
    title: 'Install app',
    addToHome: 'Add to Home Screen',
    hint: 'Install for quick access from your home screen.',
    iosHint:
      'To install on iOS: tap the share button and select "Add to Home Screen".',
    dismiss: 'Dismiss',
  },
};

function shouldShowByCooldown(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const last = localStorage.getItem(STORAGE_KEY);
    if (!last) return true;
    const lastMs = parseInt(last, 10);
    if (Number.isNaN(lastMs)) return true;
    return Date.now() - lastMs >= COOLDOWN_MS;
  } catch {
    return true;
  }
}

function markShown(): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}

export function PwaInstallPrompt() {
  const locale = useLocale();
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const labels = LABELS[locale] ?? LABELS.en;

  const hide = useCallback(() => {
    markShown();
    setIsVisible(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream?: boolean }).MSStream
    );
    setIsStandalone(
      window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    );

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  useEffect(() => {
    if (isStandalone) {
      setIsVisible(false);
      return;
    }
    if (!isIOS && !deferredPrompt) return;

    if (!shouldShowByCooldown()) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    timerRef.current = setTimeout(hide, AUTO_HIDE_MS);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isStandalone, isIOS, deferredPrompt, hide]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        hide();
      }
    }
  };

  const handleDismiss = () => {
    hide();
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label={labels.title}
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:bg-[#2d2d3d] dark:shadow-black/30 md:left-auto md:right-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-[#1a1a1a] dark:text-white/95">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-[#6b6b6b] dark:text-slate-400">
            {isIOS ? labels.iosHint : labels.hint}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {!isIOS && deferredPrompt && (
            <button
              type="button"
              onClick={handleInstall}
              className="rounded-xl bg-[#c41e3a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#a01830] focus:ring-2 focus:ring-[#c41e3a] focus:ring-offset-2 dark:focus:ring-offset-[#0a0f1a]"
            >
              {labels.addToHome}
            </button>
          )}
          <button
            type="button"
            onClick={handleDismiss}
            aria-label={labels.dismiss}
            className="rounded-lg px-3 py-1.5 text-sm text-[#6b6b6b] transition-colors hover:bg-[#eee] hover:text-[#1a1a1a] dark:text-slate-400 dark:hover:bg-[#4a4a5a] dark:hover:text-white"
          >
            {labels.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
