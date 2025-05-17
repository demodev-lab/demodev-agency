"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GACtaButton from "@/components/analytics/ga-cta-button";
import { GA_CTA_EVENTS } from "@/constants/ga";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 감지 이벤트
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // 메뉴 클릭 시 모바일 메뉴 닫기
    }
  };

  // 홈페이지 및 스크롤 상태에 따른 네비게이션 스타일 결정
  const navBackgroundClass =
    isHomePage && !isScrolled
      ? "bg-transparent backdrop-blur-sm transition-all duration-300"
      : "bg-white shadow-sm transition-all duration-300";

  const textColorClass =
    isHomePage && !isScrolled ? "text-white" : "text-gray-500";

  const activeTextColorClass =
    isHomePage && !isScrolled
      ? "text-white font-bold"
      : "text-primary-700 font-bold";

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 z-50 ${navBackgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex items-center gap-16">
          <div className="h-16 flex items-center">
            <GACtaButton eventLabel={GA_CTA_EVENTS.onClickNavHome}>
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image
                    src="/demodev.png"
                    alt="DemoDev"
                    width={100}
                    height={24}
                    className={`object-contain ${isHomePage && !isScrolled ? "filter brightness-0 invert" : ""}`}
                  />
                </div>
              </Link>
            </GACtaButton>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex gap-8">
            <GACtaButton eventLabel={GA_CTA_EVENTS.onClickNavHome}>
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? activeTextColorClass : textColorClass}`}
              >
                홈
              </Link>
            </GACtaButton>
            <GACtaButton eventLabel={GA_CTA_EVENTS.onClickNavChallenge}>
              <Link
                href="/challenge"
                className={`nav-link ${pathname === "/challenge" ? activeTextColorClass : textColorClass}`}
              >
                환급 챌린지
              </Link>
            </GACtaButton>
            {/* <GACtaButton eventLabel={GA_CTA_EVENTS.onClickNavWorkshop}>
              <Link
                href="/workshop"
                className={`nav-link ${pathname === "/workshop" ? activeTextColorClass : textColorClass}`}
              >
                결제모듈 워크샵
              </Link>
            </GACtaButton> */}
          </div>
        </div>

        {/* 무료 상담 버튼 */}
        <div className="flex items-center gap-4">
          {isHomePage && (
            <button
              onClick={() => scrollToSection("contact")}
              className={`hidden md:block ${isScrolled ? "btn-primary" : "bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-all"}`}
            >
              무료 상담
            </button>
          )}

          {/* 모바일 메뉴 토글 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon
                className={`h-6 w-6 ${isHomePage && !isScrolled ? "text-white" : ""}`}
              />
            ) : (
              <Bars3Icon
                className={`h-6 w-6 ${isHomePage && !isScrolled ? "text-white" : ""}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-16 bg-white z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col p-4 space-y-4"
            >
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg ${
                  pathname === "/"
                    ? "bg-primary-50 text-primary-700 font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GACtaButton eventLabel={GA_CTA_EVENTS.onClickNavHome}>
                  홈
                </GACtaButton>
              </Link>
              <Link
                href="/challenge"
                className={`px-4 py-2 rounded-lg ${
                  pathname === "/challenge"
                    ? "bg-primary-50 text-primary-700 font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GACtaButton eventLabel={GA_CTA_EVENTS.onClickNavChallenge}>
                  원데이 클래스
                </GACtaButton>
              </Link>
              {/* <Link
                href="/workshop"
                className={`px-4 py-2 rounded-lg ${
                  pathname === "/workshop"
                    ? "bg-primary-50 text-primary-700 font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GACtaButton eventLabel={GA_CTA_EVENTS.onClickNavWorkshop}>
                  결제모듈 워크샵
                </GACtaButton>
              </Link> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
