"use client";

import { Fragment } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const PORTFOLIO_ITEMS = [
  {
    title: "Easerve",
    description: "1인샵 사장님을 위한 예약 서비스 디자인 및 개발",
    imageSrc: "/portfolio/easerve.png",
    imageAlt: "Easerve 프로젝트",
    technologies: ["Next.js", "Supabase", "Figma"],
  },
  {
    title: "급진적 과부하",
    description: "온라인 PT 서비스 디자인 및 개발",
    imageSrc: "/portfolio/radical-overload.png",
    imageAlt: "급진적 과부하 프로젝트",
    technologies: ["Ruby on Rails", "Figma"],
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
    title: "ROBO",
    description: "의류 쇼핑몰 사내 ERP 디자인 및 개발",
    imageSrc: "/portfolio/robo.png",
    imageAlt: "ROBO 프로젝트",
    technologies: ["Next.js", "Ruby on Rails", "Figma"],
  },
  {
    title: "첫눈",
    description: "BLE를 통한 오프라인 정보 교환 서비스 디자인 및 개발",
    imageSrc: "/portfolio/first-snow.png",
    imageAlt: "첫눈 프로젝트",
    technologies: ["Next.js", "Flutter", "Supabase", "Figma"],
  },
];

export default function PortfolioSection() {
  return (
    <div id="portfolio" className="w-full py-24 bg-white relative">
      {/* 배경 요소 */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-40 w-64 h-64 bg-primary-50/40 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute left-10 bottom-20 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        <div className="mb-16 text-center animate-on-scroll">
          <div className="inline-flex items-center px-4 py-1 mb-3 rounded-full bg-primary-50 text-primary-600 text-sm font-medium">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary-400"></span>
            포트폴리오
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            최근 진행한 프로젝트
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            다양한 기술 스택을 활용하여 고객의 니즈에 맞는
            <br className="block sm:hidden" />
            최적의 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                  style={{
                    backgroundImage: `url(${item.imageSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-x-2">
                          {item.title}
                        </h3>
                        <p className="text-white/90 mb-4 transition-transform duration-300 group-hover:translate-x-2">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Fragment key={tech}>
                              <span className="bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-3 rounded-full">
                                {tech}
                              </span>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                      <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <ArrowUpRightIcon className="h-5 w-5 text-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center animate-on-scroll delay">
          <button className="button-3d px-8 py-3 rounded-lg text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black transition-all">
            더 많은 포트폴리오 보기
            <ArrowUpRightIcon className="w-4 h-4 ml-2 inline-block" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
