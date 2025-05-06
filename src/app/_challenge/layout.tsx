import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DemoDev | 원데이 클래스",
  description: "v0와 Cursor, Make로 나만의 웹사이트 만들기",
  keywords: [
    "원데이 클래스",
    "웹사이트 만들기",
    "v0",
    "Cursor",
    "Make",
    "커서",
    "메이크",
    "AI 코딩",
    "코딩 교육",
    "챌린지",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://demodev.io/challenge",
    siteName: "DemoDev",
    title: "DemoDev | 원데이 클래스",
    description: "v0와 Cursor, Make로 나만의 웹사이트 만들기",
    images: [
      {
        url: "/thumbnail-challenge.png",
        width: 1200,
        height: 630,
        alt: "DemoDev | 원데이 클래스",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DemoDev | 원데이 클래스",
    description: "v0와 Cursor, Make로 나만의 웹사이트 만들기",
    images: ["/thumbnail-challenge.png"],
  },
};

export default function ChallengeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
