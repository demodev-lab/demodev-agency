"use client";

import Image from "next/image";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/demodev.png"
                alt="DemoDev 로고"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400">
              <span className="block sm:inline">
                최고의 기술력과 창의력으로 디지털 혁신을 선도하는 웹/앱 개발
                전문
              </span>
              <span className="block sm:inline">기업입니다.</span>
            </p>
          </div>

          <div>
            <h3 className="footer-heading">바로가기</h3>
            <ul className="footer-links">
              <li>
                <a onClick={() => scrollToSection("portfolio")}>포트폴리오</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("contact")}>문의하기</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">연락처</h3>
            <ul className="footer-info">
              <li>
                <a href="tel:010-4718-8591" className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  010-4718-8591
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@demodev.io"
                  className="flex items-center gap-2"
                >
                  <EnvelopeIcon className="w-4 h-4 " />
                  contact@demodev.io
                </a>
              </li>
              <li>
                <MapPinIcon className="w-4 h-4" />
                서울 서초구 강남대로 527 13층
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-500 text-sm space-y-2">
            <p>상호명: 대모산개발단</p>
            <p>대표자: 고성현</p>
            <p>사업자 등록 번호: 259-52-00902</p>
            <p>주소: 서울 서초구 강남대로 527 13층</p>
            <p className="text-gray-500 mt-4">
              © {new Date().getFullYear()} DemoDev. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
}
