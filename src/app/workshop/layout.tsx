import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DemoDev | 결제모듈 워크샵",
  description: "결제모듈 워크샵 소개 페이지",
};

export default function WorkshopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
