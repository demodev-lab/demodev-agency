'use client';

import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default async function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Exceed IT 로고"
                width={100}
                height={30}
              />
            </div>
            <p className="text-gray-400">
              최고의 기술력과 창의력으로 디지털 혁신을 선도하는 웹/앱 개발 전문
              기업입니다.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">바로가기</h3>
            <ul className="footer-links">
              <li>
                <a onClick={() => scrollToSection('portfolio')}>포트폴리오</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('contact')}>문의하기</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">연락처</h3>
            <ul className="footer-info">
              <li>
                <PhoneIcon className="w-4 h-4 text-gray-400" />
                010-4718-8591
              </li>
              <li>
                <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                sunghyun4718@gmail.com
              </li>
              <li>
                <MapPinIcon className="w-4 h-4 text-gray-400" />
                서울특별시 강남구 개포로 416
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2025 Company. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
}
