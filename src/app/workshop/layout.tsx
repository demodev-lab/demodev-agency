import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DemoDev | 결제모듈 워크샵",
  description: "결제 모듈이 있는 실전 웹사이트 만들기",
  keywords: [
    "결제모듈",
    "웹사이트 만들기",
    "v0",
    "Cursor",
    "Make",
    "Stripe",
    "Paypal",
    "Lemon Squeezy",
    "커서",
    "메이크",
    "AI 코딩",
    "코딩 교육",
    "워크샵",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://demodev.io/workshop",
    siteName: "DemoDev",
    title: "DemoDev | 결제모듈 워크샵",
    description: "결제 모듈이 있는 실전 웹사이트 만들기",
    images: [
      {
        url: "/thumbnail-workshop.png",
        width: 1200,
        height: 630,
        alt: "DemoDev | 결제모듈 워크샵",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DemoDev | 결제모듈 워크샵",
    description: "결제 모듈이 있는 실전 웹사이트 만들기",
    images: ["/thumbnail-workshop.png"],
  },
};

export default function WorkshopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
