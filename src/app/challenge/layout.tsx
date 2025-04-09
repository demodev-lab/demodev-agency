import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DemoDev | 원데이 클래스",
  description: "원데이 클래스 소개 페이지",
};

export default function ChallengeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
