import Link from 'next/link';

export default async function HeroSection() {
  return (
    <div
      className="relative w-full bg-center bg-cover"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div className="px-4 py-32 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-80">
        <div className="relative z-10 max-w-2xl">
          <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            <div className="mb-2 md:mb-4">퀄리티에 대한 확신,</div>
            <div>
              불만족시{' '}
              <span className="px-2 py-1 text-white rounded-md bg-primary-700">
                100% 환불 보장
              </span>
            </div>
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            자신감의 이유,{' '}
            <span className="font-bold text-gray-600 border-b-2 border-gray-600">
              3분이면 확인 가능합니다
            </span>
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={'/contact'} className="btn-primary-lg">
              프로젝트 문의하기
            </Link>
            <Link href={'/portfolio'} className="btn-secondary-lg">
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
