"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 애니메이션 적용
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full bg-center bg-cover min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 오버레이 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* 배경 패턴 */}
      <div className="absolute inset-0 backdrop-blur-lg"></div>

      <div className="px-4 py-32 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-40 relative z-10">
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-center sm:text-left">
              <div className="mb-4">
                퀄리티에 대한{" "}
                <span className="gradient-text bg-gradient-to-r from-primary-400 to-blue-400">
                  확신
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                불만족시{" "}
                <span className="mt-2 sm:mt-0 sm:ml-3 px-4 py-2 text-white rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg shadow-primary-500/30">
                  100% 환불 보장
                </span>
              </div>
            </h1>

            <p className="mb-8 text-xl text-gray-200 md:text-2xl max-w-2xl">
              자신감의 이유,{" "}
              <span className="font-bold text-white">
                3분이면 확인 가능합니다
              </span>
            </p>

            <div className="flex flex-col gap-5 sm:flex-row">
              <button
                onClick={() => scrollToSection("contact")}
                className="button-3d bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg text-lg font-medium inline-flex items-center justify-center hover:from-primary-500 hover:to-primary-400 transform transition-all"
              >
                프로젝트 문의하기
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-medium transition-all"
              >
                포트폴리오 보기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 다운 표시 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
