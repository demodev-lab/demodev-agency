import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DemoDev | 원데이 클래스",
  description: "v0와 Cursor, Make로 나만의 웹사이트 만들기",
};

export default function ChallengeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
