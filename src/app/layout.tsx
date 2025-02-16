import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://exceedit.vercel.app/'),
  title: 'ExceedIT',
  description: '퀄리티에 대한 확신, ExceedIT',
  openGraph: {
    title: 'ExceedIT',
    description: '퀄리티에 대한 확신, ExceedIT',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 600,
        alt: 'ExceedIT',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
