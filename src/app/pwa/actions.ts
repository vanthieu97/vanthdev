'use server';

import webpush, { type PushSubscription } from 'web-push';

const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;

if (vapidPublicKey && vapidPrivateKey) {
  webpush.setVapidDetails(
    'mailto:support@vanthdev.com',
    vapidPublicKey,
    vapidPrivateKey
  );
}

// In-memory store for demo. In production, use a database.
const subscriptions = new Map<string, PushSubscription>();

export async function subscribeUser(sub: PushSubscription) {
  if (!vapidPublicKey || !vapidPrivateKey) {
    return { success: false, error: 'VAPID keys not configured' };
  }
  const key = sub.endpoint;
  subscriptions.set(key, sub);
  return { success: true };
}

export async function unsubscribeUser(endpoint?: string) {
  if (endpoint) {
    subscriptions.delete(endpoint);
  }
  return { success: true };
}

export async function sendNotification(payload: {
  title: string;
  body?: string;
  icon?: string;
}) {
  if (!vapidPublicKey || !vapidPrivateKey) {
    return { success: false, error: 'VAPID keys not configured' };
  }
  if (subscriptions.size === 0) {
    return { success: false, error: 'No subscriptions' };
  }

  const message = JSON.stringify({
    title: payload.title,
    body: payload.body ?? '',
    icon: payload.icon ?? '/vanthdev-logo-192.png',
  });

  const results = await Promise.allSettled(
    Array.from(subscriptions.values()).map((sub) =>
      webpush.sendNotification(sub, message)
    )
  );

  const failed = results.filter((r) => r.status === 'rejected').length;
  return {
    success: failed === 0,
    sent: results.length - failed,
    failed,
  };
}
