import './globals.css';
import cx from 'classnames';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { LINKEDIN_URL } from '@constants/config';

const notoSans = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Jim's resume",
  description: 'Looking for a Front-End developer?',
  authors: {
    name: 'Jim Lin',
    url: LINKEDIN_URL,
  },
  robots: 'index, follow',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(notoSans.className, 'leading-4 tracking-wide')}>
        {children}
      </body>
    </html>
  );
}
