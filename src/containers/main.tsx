'use server';

import Link from 'next/link';
import Image from 'next/image';
import {
  ClockIcon,
  RocketLaunchIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon,
  StarIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
} from '@heroicons/react/24/outline';
import ScrollContainer from './scroll-container';
import Footer from '@/components/footer';

export default async function Main() {
  return (
    <div className="flex flex-col w-full min-h-screen">
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
                <span className="px-2 py-1 text-white rounded-md bg-primary-500">
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

      {/* Outsourcing Problems Section - 회색 */}
      <div className="w-full py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
              많은 개발사는{' '}
              <span className="px-2 py-1 text-white rounded-md bg-primary-500">
                외부 하청에 일을 넘깁니다
              </span>
              <br className="mb-4" />
              <span className="block mt-3 text-black">알고 계신가요?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Problem Card 1 */}
            <div className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl">
              <div className="mb-6">
                <h3 className="mb-4 text-xl font-bold md:text-2xl text-primary-600">
                  기대했던 일정은 물거품이 되었어요
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-[400px] break-keep">
                  &ldquo;처음엔 빠른 개발을 약속했지만, 시간이 지날수록 일정은
                  계속 미뤄졌어요. 원래 개발팀이 아닌 하청업체가 작업을 맡고
                  있었더라고요. 상황은 복잡해졌고, 결국 프로젝트는 기약 없이
                  지연되었습니다.&rdquo;
                </p>
              </div>
              <div className="text-sm font-medium text-gray-500">
                예비창업패키지 창업가
              </div>
            </div>

            {/* Problem Card 2 */}
            <div className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl">
              <div className="mb-6">
                <h3 className="mb-4 text-xl font-bold md:text-2xl text-primary-600">
                  완성된 결과물이 쓸 수 없는 상태였습니다
                </h3>
                <p className="leading-relaxed text-gray-600">
                  &ldquo;몇 개월을 기다려 개발이 끝났다고 들었지만, 결과물은 제
                  요구사항과 전혀 달랐어요. 그때서야 알게 되었죠. 외주업체가
                  중간에 다른 개발사에 하청을 준 사실을요.&rdquo;
                </p>
              </div>
              <div className="text-sm font-medium text-gray-500">
                초기 라운드 창업가
              </div>
            </div>

            {/* Problem Card 3 */}
            <div className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl">
              <div className="mb-6">
                <h3 className="mb-4 text-xl font-bold md:text-2xl text-primary-600">
                  이틀이 지나도 아무 소식이 없었습니다
                </h3>
                <p className="leading-relaxed text-gray-600">
                  &ldquo;문제가 발생해 바로 수정이 필요했어요. 하지만 아무리
                  연락해도 답이 없었습니다. 이유는 간단했죠. 하청업체가 응답하지
                  않고 있었던 겁니다. 외주사도 어찌할 바를 몰라 답변만
                  지연되었죠.&rdquo;
                </p>
              </div>
              <div className="text-sm font-medium text-gray-500">
                중소 무역회사 대표님
              </div>
            </div>

            {/* Problem Card 4 */}
            <div className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl">
              <div className="mb-6">
                <h3 className="mb-4 text-xl font-bold md:text-2xl text-primary-600">
                  생각지 못한 비용이 눈덩이처럼 불어났어요
                </h3>
                <p className="leading-relaxed text-gray-600">
                  &ldquo;계약 당시엔 기본 포함이라고 했던 기능들이 없다고
                  하더군요. 하청업체에서 추가 개발이 필요하다며 새로 견적을
                  제시했어요. 계획했던 예산을 훨씬 초과해버렸습니다.&rdquo;
                </p>
              </div>
              <div className="text-sm font-medium text-gray-500">
                무역 솔루션 회사 대표님
              </div>
            </div>
          </div>

          {/* Solution Message */}
          <div className="mt-16 text-center">
            <p className="text-xl font-bold md:text-2xl text-primary-600">
              Exceed IT는 자체 인력으로만 개발합니다
            </p>
            <p className="mt-4 text-lg text-gray-600 md:text-xl">
              모든 과정을 직접 관리하고 소통하여 이러한 문제들을 원천 차단합니다
            </p>
          </div>
        </div>
      </div>

      {/* 100% 환불 보장 Section - 흰색 */}
      <div className="w-full py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="section-subtitle">업계 유일</h2>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              100% 환불 보장
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              저희는 아래 약속을 지키지 못할 경우,{' '}
              <strong className="text-primary-600">100% 환불</strong>을
              보장합니다. 고객님의 신뢰를 최우선으로 생각합니다.
            </p>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
                  <BuildingOfficeIcon className="w-12 h-12 text-primary-600" />
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:ml-10">
                <h3 className="text-2xl font-bold text-gray-900">
                  외부 하청 금지
                </h3>
                <p className="mt-4 text-gray-600">
                  모든 프로젝트는{' '}
                  <strong className="text-primary-600">내부 전문가</strong>가
                  직접 수행합니다. 외부 하청은 절대 하지 않습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
                  <CalendarDaysIcon className="w-12 h-12 text-primary-600" />
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:ml-10">
                <h3 className="text-2xl font-bold text-gray-900">
                  납기일 준수
                </h3>
                <p className="mt-4 text-gray-600">
                  약속된{' '}
                  <strong className="text-primary-600">
                    납기일을 100% 준수
                  </strong>
                  합니다. 지연 시 전액 환불을 보장합니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
                  <StarIcon className="w-12 h-12 text-primary-600" />
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:ml-10">
                <h3 className="text-2xl font-bold text-gray-900">
                  결과물 퀄리티 보장
                </h3>
                <p className="mt-4 text-gray-600">
                  <strong className="text-primary-600">기대한 퀄리티</strong>에
                  미치지 못할 경우, 고객님의 요청에 따라 100% 환불해 드립니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
                  <ShieldCheckIcon className="w-12 h-12 text-primary-600" />
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:ml-10">
                <h3 className="text-2xl font-bold text-gray-900">
                  지속적인 유지보수
                </h3>
                <p className="mt-4 text-gray-600">
                  프로젝트 종료 후에도{' '}
                  <strong className="text-primary-600">
                    6개월 무상 유지보수
                  </strong>
                  를 약속드립니다. 문제가 발생할 경우 신속하게 대응합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="section-subtitle">우리가 특별한 이유</h2>
            <p className="section-title">Why Us?</p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-4">
            <div className="p-8 transition-all duration-300 bg-white rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl">
                <ClockIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                24/7 피드백
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                언제든 답답한 기다림 없이
                <br />
                실시간 응대를 약속드립니다
              </p>
            </div>

            <div className="p-8 transition-all duration-300 bg-white rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl">
                <CurrencyDollarIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                추가금 제로
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                계약 이후 추가 비용 없이
                <br />
                약속된 결과물을 제공합니다
              </p>
            </div>

            <div className="p-8 transition-all duration-300 bg-white rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                빠른 결과물
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                효율적인 개발 프로세스로
                <br />
                신속한 결과물을 전달합니다
              </p>
            </div>

            <div className="p-8 transition-all duration-300 bg-white rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl">
                <ReceiptPercentIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                가격실명제
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                투명한 가격 정책으로
                <br />
                신뢰할 수 있는 견적 제공
              </p>
            </div>
          </div>
          <ScrollContainer />
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="w-full py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="section-subtitle">포트폴리오</h2>
            <p className="section-title">최근 진행한 프로젝트</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Portfolio Cards */}
            <div className="portfolio-card">
              <Image
                src="/almo.png"
                className="object-cover w-full h-48"
                alt="알바들 모여라 프로젝트"
                width={384}
                height={192}
              />
              <div className="p-8">
                <h3 className="card-title">알바들 모여라</h3>
                <p className="mb-4 text-gray-600">
                  프리터족을 위한 알바생 커뮤니티 디자인 및 개발
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Supabase</span>
                  <span className="tech-tag">Figma</span>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <Image
                src="/jab-training-phone.png"
                className="object-cover w-full h-48"
                alt="JAB TRAINING 프로젝트"
                width={384}
                height={192}
              />
              <div className="p-8">
                <h3 className="card-title">JAB TRAINING</h3>
                <p className="mb-4 text-gray-600">
                  복싱장 예약 어플리케이션 디자인 및 개발
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Supabase</span>
                  <span className="tech-tag">Figma</span>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <Image
                src="/first-snow.png"
                className="object-cover w-full h-48"
                alt="첫눈 프로젝트"
                width={384}
                height={192}
              />
              <div className="p-8">
                <h3 className="card-title">첫눈</h3>
                <p className="mb-4 text-gray-600">
                  BLE를 통한 오프라인 정보 교환 서비스 디자인 및 개발
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Supabase</span>
                  <span className="tech-tag">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - 흰색 */}
      <div className="w-full py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="section-subtitle">고객 후기</h2>
            <p className="section-title">고객들의 생생한 이야기</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-white rounded-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100">
                    <span className="text-xl font-bold text-primary-700">
                      J
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">JAB TRAINING</h4>
                  <p className="text-sm text-gray-600">복싱 트레이닝 센터</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                &quot;예약 시스템 도입 후 업무 효율이 200% 향상되었습니다.
                고객들도 편리하게 이용하고 있어 매우 만족스럽습니다.&quot;
              </p>
              <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100">
                    <span className="text-xl font-bold text-primary-700">
                      G
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">(주)곰표</h4>
                  <p className="text-sm text-gray-600">식품 유통 기업</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                &quot;프로젝트 기획부터 개발까지 모든 과정이 체계적이었고,
                결과물도 기대 이상이었습니다. 특히 소통이 원활했던 점이
                인상적이었습니다.&quot;
              </p>
              <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100">
                    <span className="text-xl font-bold text-primary-700">
                      A
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">알바들 모여라</h4>
                  <p className="text-sm text-gray-600">커뮤니티 플랫폼</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                &quot;사용자 경험을 최우선으로 고려한 디자인과 안정적인 개발로
                서비스 런칭 후 사용자 유입이 꾸준히 증가하고 있습니다.&quot;
              </p>
              <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="w-full py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  <span className="text-primary-600">자신있는 프로젝트만</span>{' '}
                  진행합니다
                </h2>
                <p className="mb-12 text-lg text-gray-600">
                  100% 내부 개발팀의 철저한 품질 관리와 파격적인 환불 보장제도를
                  제공합니다.
                  <br className="hidden md:block" />
                  <span className="inline-block mt-2 font-semibold text-primary-600">
                    2025년 딱 1개만 더
                  </span>{' '}
                  추가 진행 합니다.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="tel:010-4718-8591"
                  className="flex items-center gap-3 px-4 py-2 text-white rounded bg-primary-700"
                >
                  <PhoneIcon className="w-4 h-4" />
                  010-4718-8591
                </Link>
                <Link
                  href="mailto:sunghyun4718@gmail.com"
                  className="flex items-center gap-3 px-4 py-2 bg-white border rounded text-primary-600 border-primary-600"
                >
                  <EnvelopeIcon className="w-4 h-4" />
                  sunghyun4718@gmail.com
                </Link>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="form-label">이름</label>
                <input
                  type="text"
                  placeholder="홍길동"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">이메일</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">문의내용</label>
                <textarea
                  placeholder="프로젝트에 대해 설명해주세요."
                  rows={4}
                  className="form-input"
                ></textarea>
              </div>
              <button className="w-full btn-primary">문의하기</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
