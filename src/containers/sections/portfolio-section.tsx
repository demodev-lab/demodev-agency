"use server";

import PortfolioCard from "@/components/portfolio-card";

const PORTFOLIO_ITEMS = [
  {
    title: "Easerve",
    description: "1인샵 사장님을 위한 예약 서비스 디자인 및 개발",
    imageSrc: "/portfolio/easerve.png",
    imageAlt: "Easerve 프로젝트",
    technologies: ["Next.js", "Supabase", "Figma"],
  },
  {
    title: "알바들 모여라",
    description: "프리터족을 위한 알바생 커뮤니티 디자인 및 개발",
    imageSrc: "/portfolio/almo.png",
    imageAlt: "알바들 모여라 프로젝트",
    technologies: ["Next.js", "Flutter", "Supabase", "Figma"],
  },
  {
    title: "JAB TRAINING",
    description: "복싱장 예약 어플리케이션 디자인 및 개발",
    imageSrc: "/portfolio/jab-training.png",
    imageAlt: "JAB TRAINING 프로젝트",
    technologies: ["Next.js", "Flutter", "Supabase", "Figma"],
  },
  {
    title: "첫눈",
    description: "BLE를 통한 오프라인 정보 교환 서비스 디자인 및 개발",
    imageSrc: "/portfolio/first-snow.png",
    imageAlt: "첫눈 프로젝트",
    technologies: ["Next.js", "Flutter", "Supabase", "Figma"],
  },
];

export default async function PortfolioSection() {
  return (
    <div id="portfolio" className="w-full py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-subtitle">포트폴리오</h2>
          <p className="section-title">최근 진행한 프로젝트</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
