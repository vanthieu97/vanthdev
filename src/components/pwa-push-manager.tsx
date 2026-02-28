'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/hooks/use-locale';
import { subscribeUser, unsubscribeUser, sendNotification } from '@/app/pwa/actions';

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const LABELS = {
  vi: {
    title: 'Thông báo đẩy',
    subscribed: 'Bạn đã đăng ký nhận thông báo.',
    notSubscribed: 'Bạn chưa đăng ký nhận thông báo.',
    subscribe: 'Đăng ký',
    unsubscribe: 'Hủy đăng ký',
    testMessage: 'Tin nhắn thử nghiệm',
    sendTest: 'Gửi thử',
    notSupported: 'Trình duyệt không hỗ trợ thông báo đẩy.',
    loading: 'Đang tải...',
  },
  en: {
    title: 'Push notifications',
    subscribed: 'You are subscribed to push notifications.',
    notSubscribed: 'You are not subscribed to push notifications.',
    subscribe: 'Subscribe',
    unsubscribe: 'Unsubscribe',
    testMessage: 'Test message',
    sendTest: 'Send test',
    notSupported: 'Push notifications are not supported.',
    loading: 'Loading...',
  },
};

export function PwaPushManager() {
  const locale = useLocale();
  const [isSupported, setIsSupported] = useState<boolean | null>(null);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const labels = LABELS[locale] ?? LABELS.en;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      registerServiceWorker();
    } else {
      setIsSupported(false);
    }
  }, []);

  async function registerServiceWorker() {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none',
      });
      const sub = await reg.pushManager.getSubscription();
      setSubscription(sub);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to register');
      setIsSupported(false);
    }
  }

  async function subscribeToPush() {
    const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
    if (!vapidKey) {
      setError('VAPID key not configured');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidKey) as BufferSource,
      });
      setSubscription(sub);
      const serialized = JSON.parse(JSON.stringify(sub)) as Parameters<typeof subscribeUser>[0];
      const result = await subscribeUser(serialized);
      if (!result.success && result.error) setError(result.error);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Subscribe failed');
    } finally {
      setLoading(false);
    }
  }

  async function unsubscribeFromPush() {
    if (!subscription) return;
    setLoading(true);
    setError(null);
    try {
      await subscription.unsubscribe();
      await unsubscribeUser(subscription.endpoint);
      setSubscription(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unsubscribe failed');
    } finally {
      setLoading(false);
    }
  }

  async function sendTestNotification() {
    if (!subscription) return;
    setLoading(true);
    setError(null);
    try {
      const result = await sendNotification({
        title: 'vanthdev',
        body: message || labels.testMessage,
      });
      if (!result.success && result.error) setError(result.error);
      else setMessage('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Send failed');
    } finally {
      setLoading(false);
    }
  }

  if (isSupported === null) {
    return <div className="text-sm text-[#6b6b6b] dark:text-slate-400">{labels.loading}</div>;
  }

  if (!isSupported) {
    return <p className="text-sm text-[#6b6b6b] dark:text-slate-400">{labels.notSupported}</p>;
  }

  return (
    <div className="space-y-3" role="region" aria-label={labels.title}>
      <p className="text-sm text-[#6b6b6b] dark:text-slate-400">
        {subscription ? labels.subscribed : labels.notSubscribed}
      </p>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2">
        {subscription ? (
          <>
            <button
              type="button"
              onClick={unsubscribeFromPush}
              disabled={loading}
              className="rounded-lg border border-[#ddd] bg-white px-3 py-1.5 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#f5f5f5] disabled:opacity-50 dark:border-[#4a4a5a] dark:bg-[#2d2d3d] dark:text-white/95 dark:hover:bg-[#3d3d4d]"
            >
              {labels.unsubscribe}
            </button>
            <input
              type="text"
              placeholder={labels.testMessage}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border border-[#ddd] bg-white px-3 py-1.5 text-sm text-[#1a1a1a] placeholder-[#999] dark:border-[#4a4a5a] dark:bg-[#2d2d3d] dark:text-white/95 dark:placeholder-slate-500"
              aria-label={labels.testMessage}
            />
            <button
              type="button"
              onClick={sendTestNotification}
              disabled={loading}
              className="rounded-lg bg-[#c41e3a] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#a01830] disabled:opacity-50"
            >
              {labels.sendTest}
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={subscribeToPush}
            disabled={loading}
            className="rounded-lg bg-[#c41e3a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#a01830] disabled:opacity-50"
          >
            {labels.subscribe}
          </button>
        )}
      </div>
    </div>
  );
}
