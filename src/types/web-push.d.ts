declare module 'web-push' {
  export interface PushSubscription {
    endpoint: string;
    keys?: { p256dh?: string; auth?: string };
    expirationTime?: number | null;
  }

  const webpush: {
    setVapidDetails(
      subject: string,
      publicKey: string,
      privateKey: string
    ): void;
    sendNotification(
      subscription: PushSubscription,
      payload: string | Buffer,
      options?: Record<string, unknown>
    ): Promise<{ statusCode: number }>;
  };

  export default webpush;
}
