import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lunar New Year Countdown',
  description: 'Countdown to Lunar New Year with country and timezone support.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  icons: {
    icon: '/lunar-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
