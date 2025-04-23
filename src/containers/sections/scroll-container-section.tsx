"use client";

import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function ScrollContainerSection() {
  return (
    <div className="w-full py-24 bg-gray-50 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/30 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center animate-on-scroll">
          <div className="inline-flex items-center px-4 py-1 mb-3 rounded-full bg-primary-50 text-primary-600 text-sm font-medium">
            <SparklesIcon className="w-4 h-4 mr-2" />
            우리의 경험
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">우리의 경험</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            신뢰할 수 있는 다양한 파트너들과 함께 성공적인 프로젝트를 진행해
            왔습니다
          </p>
        </div>

        <div className="scroll-container backdrop-blur-sm bg-white/50 rounded-2xl p-8 shadow-lg animate-on-scroll delay">
          <div className="scroll-content animate-scroll">
            {/* First set */}
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="logo-item group">
                <div className="relative w-auto h-12 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={160}
                    className="object-contain w-auto h-12"
                  />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless scroll */}
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="logo-item group">
                <div className="relative w-auto h-12 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={160}
                    className="object-contain w-auto h-12"
                  />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 animate-on-scroll delay">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                10+
              </div>
              <div className="text-gray-600">프로젝트 완료</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                10+
              </div>
              <div className="text-gray-600">협력 파트너</div>
            </div>
            {/* <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                3년+
              </div>
              <div className="text-gray-600">업계 경험</div>
            </div> */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 로고 데이터 분리
const logos = [
  {
    src: "/experience/seogang.png",
    alt: "서강대학교 로고",
  },
  {
    src: "/experience/sejong.png",
    alt: "세종대학교 로고",
  },
  {
    src: "/experience/inno.png",
    alt: "이노베이션 아카데미 로고",
  },
  {
    src: "/experience/42.png",
    alt: "42 로고",
  },
  {
    src: "/experience/twig.png",
    alt: "twig 로고",
  },
  {
    src: "/experience/life.png",
    alt: "라해스 로고",
  },
  {
    src: "/experience/nxr.png",
    alt: "넥스트 로고",
  },
  {
    src: "/experience/gompyo.png",
    alt: "곰표 로고",
  },
  {
    src: "/experience/jab-training.png",
    alt: "JAB TRAINING 로고",
  },
];
