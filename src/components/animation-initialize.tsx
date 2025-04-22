"use client";

import { useEffect } from "react";
import { initScrollAnimations } from "@/utils/animation";

export default function AnimationInitialize() {
  useEffect(() => {
    initScrollAnimations();

    // 스크롤 이벤트 발생 시 애니메이션 재초기화
    const handleScroll = () => {
      initScrollAnimations();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
