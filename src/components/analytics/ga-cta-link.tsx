"use client";

import { GA_CTA_EVENT } from "@/constants/ga";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

type GAButtonProps = {
  children: React.ReactNode;
  eventLabel: GA_CTA_EVENT;
  href: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function GACtaLink({
  className,
  children,
  eventLabel,
  href,
  onClick,
  ...rest
}: GAButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    sendGAEvent("event", eventLabel); // GA4에 이벤트 전송
    sendGTMEvent("event", eventLabel); // GTM에 이벤트 전송
    if (onClick) {
      onClick(e);
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </Link>
  );
}
