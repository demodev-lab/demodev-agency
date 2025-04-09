"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // 메뉴 클릭 시 모바일 메뉴 닫기
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 shadow-sm bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex items-center gap-16">
          <div className="h-16 flex items-center">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="/demodev.png"
                  alt="DemoDev 텍스트"
                  width={100}
                  height={24}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "text-primary-700 font-bold" : "text-gray-500"}`}
            >
              홈
            </Link>
            <Link
              href="/challenge"
              className={`nav-link ${pathname === "/challenge" ? "text-primary-700 font-bold" : "text-gray-500"}`}
            >
              원데이 클래스
            </Link>
            <Link
              href="/workshop"
              className={`nav-link ${pathname === "/workshop" ? "text-primary-700 font-bold" : "text-gray-500"}`}
            >
              결제모듈 워크샵
            </Link>
          </div>
        </div>

        {/* 무료 상담 버튼 */}
        <div className="flex items-center gap-4">
          {isHomePage && (
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block btn-primary"
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
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
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
                홈
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
                원데이 클래스
              </Link>
              <Link
                href="/workshop"
                className={`px-4 py-2 rounded-lg ${
                  pathname === "/workshop"
                    ? "bg-primary-50 text-primary-700 font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                결제모듈 워크샵
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
