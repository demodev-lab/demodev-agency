'use server';

import Link from 'next/link';
import Image from 'next/image';
import {
  ClockIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  PencilIcon,
  CodeBracketIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';

export default async function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
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
              <Link className="nav-link active" href="/">
                홈
              </Link>
              <Link href="/portfolio" className="nav-link">
                포트폴리오
              </Link>
              <Link href="#" className="nav-link">
                문의하기
              </Link>
            </div>
          </div>
          <button className="btn-primary">무료 상담</button>
        </div>
      </nav>
      <div
        className="w-full relative bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-80">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <div className="mb-2 md:mb-4">퀄리티에 대한 확신,</div>
              <div>
                불만족시{' '}
                <span className="bg-primary-500 text-white px-2 py-1 rounded-md">
                  100% 환불 보장
                </span>
              </div>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              자신감의 이유,{' '}
              <span className="font-bold border-b-2 border-gray-600 text-gray-600">
                3분이면 확인 가능합니다
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary-lg">프로젝트 문의하기</button>
              <button className="btn-secondary-lg">포트폴리오 보기</button>
            </div>
          </div>
        </div>
      </div>

      {/* Outsourcing Problems Section */}
      <div className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              많은 개발사가 외부 하청에 의존한다는 사실
              <br className="mb-4" />
              <span className="text-gray-500 block mt-3">알고 계신가요?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary-600 mb-4">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary-600 mb-4">
                  완성된 결과물이 쓸 수 없는 상태였습니다
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary-600 mb-4">
                  이틀이 지나도 아무 소식이 없었습니다
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary-600 mb-4">
                  생각지 못한 비용이 눈덩이처럼 불어났어요
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
          <div className="text-center mt-16">
            <p className="text-xl md:text-2xl font-bold text-primary-600">
              Exceed IT는 100% 자체 인력으로 개발합니다
            </p>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              모든 과정을 직접 관리하고 소통하여 이러한 문제들을 원천 차단합니다
            </p>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">우리가 특별한 이유</h2>
            <p className="section-title">Why Us?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center items-center h-20 w-20 bg-primary-50 rounded-2xl mb-6 mx-auto">
                <ClockIcon className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                24/7 피드백
              </h3>
              <p className="text-gray-600">
                언제든지 답답한 기다림 없이. 주 7일 24시간 즉각 응대 약속합니다.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center items-center h-20 w-20 bg-primary-50 rounded-2xl mb-6 mx-auto">
                <UserGroupIcon className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                젊은 열정
              </h3>
              <p className="text-gray-600">
                트렌드를 아는 젊은 개발팀이 최신 기술과 신선한 아이디어로
                프로젝트를 실행합니다.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center items-center h-20 w-20 bg-primary-50 rounded-2xl mb-6 mx-auto">
                <RocketLaunchIcon className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                빠른 결과물
              </h3>
              <p className="text-gray-600">
                스타트업 마인드로 효율을 중시하며, 짧은 개발 주기로 최적의
                결과를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="w-full bg-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-title">Our Experience</p>
          </div>

          <div className="relative">
            <div className="flex animate-scroll space-x-16 whitespace-nowrap">
              {/* 첫 번째 세트 */}
              <div className="flex items-center shrink-0">
                <Image
                  src="/jab-training.png"
                  alt="JAB TRAINING 로고"
                  width={92}
                  height={49}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/inno.png"
                  alt="이노베이션 아카데미 로고"
                  width={92}
                  height={49}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/sogang.png"
                  alt="서강대학교 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/sejong.png"
                  alt="세종대학교 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/gom.png"
                  alt="곰표 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/42.png"
                  alt="42 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/twig.png"
                  alt="twig 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/life.png"
                  alt="라해스 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/next.png"
                  alt="넥스트 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              {/* 두 번째 세트 (무한 스크롤을 위한 복제) */}
              <div className="flex items-center shrink-0">
                <Image
                  src="/jab-training.png"
                  alt="JAB TRAINING 로고"
                  width={92}
                  height={49}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/inno.png"
                  alt="이노베이션 아카데미 로고"
                  width={92}
                  height={49}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/sogang.png"
                  alt="서강대학교 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/sejong.png"
                  alt="세종대학교 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/gom.png"
                  alt="곰표 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center shrink-0">
                <Image
                  src="/42.png"
                  alt="42 로고"
                  width={160}
                  height={160}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">핵심 서비스</h2>
            <p className="section-title">최고의 디지털 솔루션을 제공합니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="service-card">
              <div className="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-3xl mb-10 mx-auto">
                <GlobeAltIcon className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="card-title">웹 개발</h3>
              <p className="card-text">
                반응형 웹사이트부터 복잡한 웹 애플리케이션까지, 최신 기술을
                활용한 맞춤형 웹 개발 서비스를 제공합니다.
              </p>
            </div>

            <div className="service-card">
              <div className="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-3xl mb-10 mx-auto">
                <DevicePhoneMobileIcon className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="card-title">앱 개발</h3>
              <p className="card-text">
                iOS와 Android 플랫폼에 최적화된 네이티브 및 크로스 플랫폼 앱
                개발 서비스를 제공합니다.
              </p>
            </div>

            <div className="service-card">
              <div className="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-3xl mb-10 mx-auto">
                <SwatchIcon className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="card-title">UI/UX 디자인</h3>
              <p className="card-text">
                사용자 중심의 직관적인 인터페이스와 최적의 사용자 경험을
                제공하는 디자인 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">성과</h2>
            <p className="section-title">신뢰할 수 있는 수치로 증명합니다</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                100%
              </div>
              <p className="text-lg text-gray-600">고객 만족도</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                10+
              </div>
              <p className="text-lg text-gray-600">전문 개발자</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">포트폴리오</h2>
            <p className="section-title">최근 진행한 프로젝트</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Cards */}
            <div className="portfolio-card">
              <Image
                src="/almo.png"
                className="w-full h-48 object-cover"
                alt="알바들 모여라 프로젝트"
                width={384}
                height={192}
              />
              <div className="p-8">
                <h3 className="card-title">알바들 모여라</h3>
                <p className="text-gray-600 mb-4">
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
                className="w-full h-48 object-cover"
                alt="JAB TRAINING 프로젝트"
                width={384}
                height={192}
              />
              <div className="p-8">
                <h3 className="card-title">JAB TRAINING</h3>
                <p className="text-gray-600 mb-4">
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
                className="w-full h-48 object-cover"
                alt="첫눈 프로젝트"
                width={384}
                height={192}
              />
              <div className="p-8">
                <h3 className="card-title">첫눈</h3>
                <p className="text-gray-600 mb-4">
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

          <div className="text-center mt-12">
            <button className="btn-primary-lg">더 많은 프로젝트 보기</button>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">개발 프로세스</h2>
            <p className="section-title">체계적인 프로세스로 진행됩니다</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Process Steps */}
            <div className="process-step">
              <div className="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-full mb-6 mx-auto">
                <LightBulbIcon className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="step-title">1. 기획 및 분석</h3>
              <p className="step-text">
                요구사항 분석과
                <br />
                프로젝트 범위 설정
              </p>
            </div>

            <div className="process-step">
              <div className="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-full mb-6 mx-auto">
                <PencilIcon className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="step-title">2. 디자인</h3>
              <p className="step-text">
                UI/UX 디자인 및
                <br />
                프로토타입 제작
              </p>
            </div>

            <div className="process-step">
              <div className="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-full mb-6 mx-auto">
                <CodeBracketIcon className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="step-title">3. 개발</h3>
              <p className="step-text">
                프론트엔드/백엔드
                <br />
                개발 및 테스트
              </p>
            </div>

            <div className="process-step">
              <div className="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-full mb-6 mx-auto">
                <RocketLaunchIcon className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="step-title">4. 배포</h3>
              <p className="step-text">
                시스템 배포 및
                <br />
                유지보수
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">고객 후기</h2>
            <p className="section-title">고객들의 생생한 이야기</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-bold text-xl">
                      J
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">JAB TRAINING</h4>
                  <p className="text-gray-600 text-sm">복싱 트레이닝 센터</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                &quot;예약 시스템 도입 후 업무 효율이 200% 향상되었습니다.
                고객들도 편리하게 이용하고 있어 매우 만족스럽습니다.&quot;
              </p>
              <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-bold text-xl">
                      G
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">(주)곰표</h4>
                  <p className="text-gray-600 text-sm">식품 유통 기업</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                &quot;프로젝트 기획부터 개발까지 모든 과정이 체계적이었고,
                결과물도 기대 이상이었습니다. 특히 소통이 원활했던 점이
                인상적이었습니다.&quot;
              </p>
              <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-bold text-xl">
                      A
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">알바들 모여라</h4>
                  <p className="text-gray-600 text-sm">커뮤니티 플랫폼</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                &quot;사용자 경험을 최우선으로 고려한 디자인과 안정적인 개발로
                서비스 런칭 후 사용자 유입이 꾸준히 증가하고 있습니다.&quot;
              </p>
              <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  프로젝트 문의하기
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  귀사의 프로젝트에 대해 상담해보세요. 전문가가 최적의 솔루션을
                  제안해드립니다.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="tel:010-7662-0146" legacyBehavior>
                  <a className="flex items-center gap-3 bg-primary-700 text-white px-4 py-2 rounded">
                    <PhoneIcon className="h-4 w-4" />
                    010-7662-0146
                  </a>
                </Link>
                <Link href="mailto:aiden.pren@gmail.com" legacyBehavior>
                  <a className="flex items-center gap-3 bg-white text-primary-600 px-4 py-2 rounded border-primary-600 border">
                    <EnvelopeIcon className="h-4 w-4" />
                    aiden.pren@gmail.com
                  </a>
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
              <button className="btn-primary w-full">문의하기</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Exceed IT 로고"
                  width={100} // 로고의 너비를 설정하세요
                  height={30} // 로고의 높이를 설정하세요
                />
              </div>
              <p className="text-gray-400">
                최고의 기술력과 창의력으로 디지털 혁신을 선도하는 웹/앱 개발
                전문 기업입니다.
              </p>
            </div>

            <div>
              <h3 className="footer-heading">바로가기</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">서비스</a>
                </li>
                <li>
                  <a href="#">포트폴리오</a>
                </li>
                <li>
                  <a href="#">프로세스</a>
                </li>
                <li>
                  <a href="#">문의하기</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">연락처</h3>
              <ul className="footer-info">
                <li>
                  <PhoneIcon className="h-4 w-4 text-gray-400" />
                  010-7662-0146
                </li>
                <li>
                  <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                  aiden.pren@gmail.com
                </li>
                <li>
                  <MapPinIcon className="h-4 w-4 text-gray-400" />
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
    </div>
  );
}
