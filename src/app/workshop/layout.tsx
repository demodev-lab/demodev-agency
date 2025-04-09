import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DemoDev | 결제모듈 워크샵",
  description: "결제 모듈이 있는 실전 웹사이트 만들기",
};

export default function WorkshopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
