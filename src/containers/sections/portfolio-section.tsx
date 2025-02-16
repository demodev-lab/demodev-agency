'use server';

import Image from 'next/image';

export default async function PortfolioSection() {
  return (
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
  );
}
