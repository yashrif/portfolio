import type { Metadata } from 'next';
import { Berkshire_Swash, Inter, Work_Sans } from 'next/font/google';
import { Suspense } from 'react';

import { GoogleAnalytics } from '@/app/_components/analytics/GoogleAnalytics';
import { AnalyticsWrapper } from '@/app/_components/analytics/AnalyticsWrapper';
import { ThemeProvider } from '@/app/_contexts/ThemeContext';
import { analyticsConfig } from '@/app/_lib/config/analytics';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const berkshireSwash = Berkshire_Swash({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-berkshire-swash',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Yashrif',
  description: 'Personal website of Yashrif Arifin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.variable} ${workSans.variable} ${berkshireSwash.variable}`}
      >
        <Suspense>
          <ThemeProvider>
            <AnalyticsWrapper>
              <div className='relative flex flex-col justify-between min-h-screen overflow-x-hidden'>
                {children}
              </div>
            </AnalyticsWrapper>
          </ThemeProvider>
        </Suspense>
        {/* 📊 Google Analytics */}
        {analyticsConfig.isEnabled && (
          <GoogleAnalytics gaId={analyticsConfig.gaId} />
        )}
      </body>
    </html>
  );
}
