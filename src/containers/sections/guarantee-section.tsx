"use client";

import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function GuaranteeSection() {
  return (
    <div id="guarantee" className="w-full py-32 relative overflow-hidden">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center animate-on-scroll">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-primary-50 text-primary-600 text-sm font-medium border border-primary-100 shadow-sm">
            <SparklesIcon className="w-4 h-4 mr-2 animate-pulse" />
            업계 유일
          </div>
          <h2 className="text-4xl font-bold mb-6 sm:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500">
              100% 환불 보장
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            저희는 아래 약속을 지키지 못할 경우,{" "}
            <span className="font-bold text-white px-3 py-1.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full inline-flex items-center shadow-lg shadow-primary-500/20">
              <CheckBadgeIcon className="w-5 h-5 mr-1" />
              100% 환불
            </span>{" "}
            을 보장합니다.
          </p>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            고객님의 신뢰를 최우선으로 생각합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* 카드 1 */}
          <div className="animate-on-scroll delay-100">
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* 배경 효과 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/5 rounded-full"></div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-500/10 rounded-full animate-pulse"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                    <BuildingOfficeIcon className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-4">
                  외부 하청 금지
                </h3>

                <p className="text-gray-600 mb-6">
                  모든 프로젝트는{" "}
                  <span className="font-bold text-primary-600 px-2 py-0.5 bg-primary-50 rounded-md">
                    내부 전문가
                  </span>
                  가 직접 수행합니다. 외부 하청은 절대 하지 않습니다.
                </p>

                <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 카드 2 */}
          <div className="animate-on-scroll delay-200">
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* 배경 효과 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/5 rounded-full"></div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-500/10 rounded-full animate-pulse"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                    <CalendarDaysIcon className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-4">
                  납기일 준수
                </h3>

                <p className="text-gray-600 mb-6">
                  약속된{" "}
                  <span className="font-bold text-primary-600 px-2 py-0.5 bg-primary-50 rounded-md">
                    납기일을 100% 준수
                  </span>
                  합니다. <br />
                  지연 시 전액 환불을 보장합니다.
                </p>

                <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 카드 3 */}
          <div className="animate-on-scroll delay-300">
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* 배경 효과 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/5 rounded-full"></div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-500/10 rounded-full animate-pulse"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                    <StarIcon className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-4">
                  결과물 퀄리티 보장
                </h3>

                <p className="text-gray-600 mb-6">
                  <span className="font-bold text-primary-600 px-2 py-0.5 bg-primary-50 rounded-md">
                    기대한 퀄리티
                  </span>
                  에 미치지 못할 경우, 고객님의 요청에 따라 100% 환불해
                  드립니다.
                </p>

                <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 카드 4 */}
          <div className="animate-on-scroll delay-400">
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* 배경 효과 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/5 rounded-full"></div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-500/10 rounded-full animate-pulse"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                    <ShieldCheckIcon className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-4">
                  지속적인 유지보수
                </h3>

                <p className="text-gray-600 mb-6">
                  프로젝트 종료 후에도{" "}
                  <span className="font-bold text-primary-600 px-2 py-0.5 bg-primary-50 rounded-md">
                    6개월 무상 유지보수
                  </span>
                  를 약속드립니다. 문제가 발생할 경우 신속하게 대응합니다.
                </p>

                <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
