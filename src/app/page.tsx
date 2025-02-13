'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col">
        {/* Navigation */}
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
              <div className="hidden md:flex gap-8">
                <a href="#" className="nav-link active">
                  홈
                </a>
                <a href="#" className="nav-link">
                  포트폴리오
                </a>
                <a href="#" className="nav-link">
                  문의하기
                </a>
              </div>
            </div>
            <button className="btn-primary">무료 상담</button>
          </div>
        </nav>

        <div className="h-16"></div>

        {/* Hero Section */}
        <div
          className="w-full bg-gradient-to-br from-indigo-50 to-white relative bg-cover bg-center"
          style={{ backgroundImage: "url('/banner.png')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-80">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                혁신적인 웹/앱 개발로
                <br />
                비즈니스의 성장을 이끕니다.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                10년 이상의 경험을 바탕으로 최신 기술과 트렌드를 접목한
                <br className="hidden md:block" />
                맞춤형 디지털 솔루션을 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary-lg">프로젝트 문의하기</button>
                <button className="btn-secondary-lg">포트폴리오 보기</button>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-subtitle">신뢰할 수 있는 파트너</h2>
              <p className="section-title">기업들이 선택한 개발 파트너</p>
            </div>
            <div className="flex justify-center items-center gap-16">
              <Image
                src="/jab-training.png"
                alt="JAB TRAINING 로고"
                width={92}
                height={49}
              />
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                (주)곰표
              </span>
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
                  <Image
                    src="/web-icon.png"
                    alt="웹 개발 아이콘"
                    width={25}
                    height={20}
                  />
                </div>
                <h3 className="card-title">웹 개발</h3>
                <p className="card-text">
                  반응형 웹사이트부터 복잡한 웹 애플리케이션까지, 최신 기술을
                  활용한 맞춤형 웹 개발 서비스를 제공합니다.
                </p>
              </div>

              <div className="service-card">
                <div className="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-3xl mb-10 mx-auto">
                  <Image
                    src="/mobile-icon.png"
                    alt="앱 개발 아이콘"
                    width={14}
                    height={20}
                  />
                </div>
                <h3 className="card-title">앱 개발</h3>
                <p className="card-text">
                  iOS와 Android 플랫폼에 최적화된 네이티브 및 크로스 플랫폼 앱
                  개발 서비스를 제공합니다.
                </p>
              </div>

              <div className="service-card">
                <div className="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-3xl mb-10 mx-auto">
                  <Image
                    src="/design-icon.png"
                    alt="UI/UX 디자인 아이콘"
                    width={22}
                    height={20}
                  />
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
                    예약 DB 관리 디자인 및 개발
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
                  <Image
                    src="/bulb-icon.png"
                    alt="기획 및 분석 아이콘"
                    width={17}
                    height={24}
                  />
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
                  <Image
                    src="/pencil-icon.png"
                    alt="디자인 아이콘"
                    width={24}
                    height={24}
                  />
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
                  <Image
                    src="/code-icon.png"
                    alt="개발 아이콘"
                    width={30}
                    height={24}
                  />
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
                  <Image
                    src="/rocket-icon.png"
                    alt="배포 아이콘"
                    width={24}
                    height={24}
                  />
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

        {/* Contact Section */}
        <div className="w-full bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  프로젝트 문의하기
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  귀사의 프로젝트에 대해 상담해보세요. 전문가가 최적의 솔루션을
                  제안해드립니다.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="tel:02-1234-5678" className="contact-link">
                    <svg className="w-5 h-5" />
                    02-1234-5678
                  </a>
                  <a href="mailto:contact@company.com" className="contact-link">
                    <svg className="w-5 h-5" />
                    contact@company.com
                  </a>
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
                    <svg className="w-5 h-5" />
                    02-1234-5678
                  </li>
                  <li>
                    <svg className="w-5 h-5" />
                    contact@company.com
                  </li>
                  <li>
                    <svg className="w-5 h-5" />
                    서울시 강남구 테헤란로 123
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
    </div>
  );
}
