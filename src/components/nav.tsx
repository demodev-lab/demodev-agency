'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname(); // 현재 경로 가져오기

  // 활성 링크 확인 함수
  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 shadow-sm bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-12">
          <div className="h-16 flex items-center">
            <Link href="/">
              <div className="relative h-[2.13rem]">
                <Image
                  src="/logo.png"
                  alt="Exceed IT 로고"
                  width={100}
                  height={30}
                />
              </div>
            </Link>
          </div>
          <div className="md:flex gap-8">
            <Link
              href="/"
              className={`nav-link ${isActive('/') ? 'text-primary-700 font-bold' : 'text-gray-500'}`}
            >
              홈
            </Link>
            <Link
              href="/portfolio"
              className={`nav-link ${isActive('/portfolio') ? 'text-primary-700 font-bold' : 'text-gray-500'}`}
            >
              포트폴리오
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${isActive('/contact') ? 'text-primary-700 font-bold' : 'text-gray-500'}`}
            >
              문의하기
            </Link>
          </div>
        </div>
        <Link href={'/contact'} className="btn-primary">
          무료 상담
        </Link>
      </div>
    </nav>
  );
}
