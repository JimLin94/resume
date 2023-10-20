import cx from 'classnames';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Noto_Sans_JP } from 'next/font/google';
import {
  LINKEDIN_URL,
  GIT_PAGE_URL,
  EMAIL,
  SITE_NAME,
  AUTHOR,
  DESCRIPTION,
  LANDSCAPE_PROFILE_META_IMG_PATH,
} from '@constants/config';

import './globals.css';

const notoSans = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: DESCRIPTION,
  authors: {
    name: AUTHOR,
    url: LINKEDIN_URL,
  },
  robots: 'index, follow',
  icons: '/favicon.ico',
  metadataBase: new URL(GIT_PAGE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: GIT_PAGE_URL,
    title: SITE_NAME,
    description: DESCRIPTION,
    emails: EMAIL,
    images: [LANDSCAPE_PROFILE_META_IMG_PATH],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GN6V015Q73"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || []; function gtag()
            {window.dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-GN6V015Q73');
          `}
        </Script>
      </head>
      <body className={cx(notoSans.className, 'leading-4 tracking-wide')}>
        {children}
      </body>
    </html>
  );
}
