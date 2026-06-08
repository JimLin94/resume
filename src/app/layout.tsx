import type { Metadata } from 'next';
import Script from 'next/script';
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply stored theme before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('jl-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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
      <body>{children}</body>
    </html>
  );
}
