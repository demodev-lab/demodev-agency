import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 shadow-sm bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-12">
          <div className="h-16 flex items-center">
            <div className="relative h-[2.13rem]">
              <Image
                src="/logo.png"
                alt="Exceed IT 로고"
                width={100} // 347x82
                height={30}
              />
            </div>
          </div>
          <div className="md:flex gap-8">
            <Link href="/" legacyBehavior>
              <a className="nav-link active">홈</a>
            </Link>
            <Link href="/portfolio" legacyBehavior>
              <a className="nav-link">포트폴리오</a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="nav-link">문의하기</a>
            </Link>
          </div>
        </div>
        <button className="btn-primary">무료 상담</button>
      </div>
    </nav>
  );
}
