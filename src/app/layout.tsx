import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { cn } from "@/libs/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 뷰포트 설정
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://demodev.io"),
  title: "DemoDev - 퀄리티에 대한 확신",
  description: "퀄리티에 대한 확신, DemoDev에서 최고의 개발 경험을 만나보세요.",
  keywords: ["개발", "웹개발", "프로그래밍", "프론트엔드", "백엔드", "풀스택"],
  authors: [{ name: "DemoDev Team" }],
  creator: "DemoDev",
  publisher: "DemoDev",

  // 로봇 메타 태그 설정
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Open Graph 확장
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://demodev.io",
    siteName: "DemoDev",
    title: "DemoDev - 퀄리티에 대한 확신",
    description:
      "퀄리티에 대한 확신, DemoDev에서 최고의 개발 경험을 만나보세요.",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "DemoDev",
      },
    ],
  },

  // Twitter 카드
  twitter: {
    card: "summary_large_image",
    title: "DemoDev - 퀄리티에 대한 확신",
    description:
      "퀄리티에 대한 확신, DemoDev에서 최고의 개발 경험을 만나보세요.",
    images: ["/thumbnail.png"],
  },

  // 아이콘 설정
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/icon-512x512.png" }],
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },

  // 대체 링크 및 정규화 URL
  alternates: {
    canonical: "https://demodev.io",
    languages: {
      "ko-KR": "https://demodev.io",
      // "en-US": "https://demodev.io/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
        suppressHydrationWarning
      >
        <Nav />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          </>
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
