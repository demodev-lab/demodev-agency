"use client";

import {
  ChatBubbleLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

export default function TestimonialSection() {
  return (
    <div className="w-full py-32 relative overflow-hidden">
      {/* 배경 효과 */}

      {/* 장식 요소 */}

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center animate-on-scroll">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-primary-50 text-primary-600 text-sm font-medium border border-primary-100 shadow-sm">
            <ChatBubbleLeftIcon className="w-4 h-4 mr-2 animate-pulse" />
            고객 후기
          </div>
          <h2 className="text-4xl font-bold mb-6 sm:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500">
              고객들의 생생한 이야기
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            우리의 서비스를 이용한 고객들의
            <br className="block sm:hidden" />
            진솔한 후기를 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* 카드 1 */}
          <div className="animate-on-scroll delay-100">
            <div className="group relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* 상단 곡선 장식 */}
              <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-primary-500 to-primary-400"></div>

              {/* 호버 효과 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="p-8 relative z-10">
                {/* 상단 정보 */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary-200 rounded-full opacity-30 scale-125 animate-pulse"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 text-white font-bold text-xl shadow-lg border-4 border-white">
                      J
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        JAB TRAINING
                      </h3>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <StarIconSolid
                            key={index}
                            className="w-5 h-5 text-primary-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">복싱 트레이닝 센터</p>
                  </div>
                </div>

                {/* 인용 부호 */}
                <div className="mb-6 relative">
                  <div className="absolute -top-2 -left-2 text-primary-200 opacity-60">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.975 8C7.05833 11.3 4 16.4 4 21.35C4 25.7167 6.95 28 10.025 28C12.6917 28 14.95 25.7167 14.95 22.8333C14.95 19.95 12.8583 17.85 10.2083 17.85C9.66667 17.85 8.94167 17.9417 8.575 18.0333C9.025 15.3 11.8833 12.05 14.4917 10.375L11.975 8ZM25.9083 8C20.9917 11.3 17.9333 16.4 17.9333 21.35C17.9333 25.7167 20.8833 28 23.9583 28C26.625 28 28.8833 25.7167 28.8833 22.8333C28.8833 19.95 26.7917 17.85 24.1417 17.85C23.6 17.85 22.875 17.9417 22.5083 18.0333C22.9583 15.3 25.8167 12.05 28.425 10.375L25.9083 8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-700 leading-relaxed pl-5">
                    예약 시스템 도입 후 업무 효율이 200% 향상되었습니다.
                    고객들도 편리하게 이용하고 있어 매우 만족스럽습니다. 특히
                    사용이 직관적이라 직원들도 바로 적응했습니다.
                  </p>
                </div>

                {/* 하단 장식선 */}
                <div className="w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 카드 2 */}
          <div className="animate-on-scroll delay-200">
            <div className="group relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* 상단 곡선 장식 */}
              <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-primary-500 to-primary-400"></div>

              {/* 호버 효과 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="p-8 relative z-10">
                {/* 상단 정보 */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary-200 rounded-full opacity-30 scale-125 animate-pulse"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 text-white font-bold text-xl shadow-lg border-4 border-white">
                      G
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        (주)곰표
                      </h3>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <StarIconSolid
                            key={index}
                            className="w-5 h-5 text-primary-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">식품 유통 기업</p>
                  </div>
                </div>

                {/* 인용 부호 */}
                <div className="mb-6 relative">
                  <div className="absolute -top-2 -left-2 text-primary-200 opacity-60">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.975 8C7.05833 11.3 4 16.4 4 21.35C4 25.7167 6.95 28 10.025 28C12.6917 28 14.95 25.7167 14.95 22.8333C14.95 19.95 12.8583 17.85 10.2083 17.85C9.66667 17.85 8.94167 17.9417 8.575 18.0333C9.025 15.3 11.8833 12.05 14.4917 10.375L11.975 8ZM25.9083 8C20.9917 11.3 17.9333 16.4 17.9333 21.35C17.9333 25.7167 20.8833 28 23.9583 28C26.625 28 28.8833 25.7167 28.8833 22.8333C28.8833 19.95 26.7917 17.85 24.1417 17.85C23.6 17.85 22.875 17.9417 22.5083 18.0333C22.9583 15.3 25.8167 12.05 28.425 10.375L25.9083 8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-700 leading-relaxed pl-5">
                    프로젝트 기획부터 개발까지 모든 과정이 체계적이었고,
                    결과물도 기대 이상이었습니다. 특히 소통이 원활했던 점이
                    인상적이었습니다. 다음 프로젝트도 함께 하고 싶습니다.
                  </p>
                </div>

                {/* 하단 장식선 */}
                <div className="w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 카드 3 */}
          <div className="animate-on-scroll delay-300">
            <div className="group relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* 상단 곡선 장식 */}
              <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-primary-500 to-primary-400"></div>

              {/* 호버 효과 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="p-8 relative z-10">
                {/* 상단 정보 */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary-200 rounded-full opacity-30 scale-125 animate-pulse"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 text-white font-bold text-xl shadow-lg border-4 border-white">
                      A
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        알바들 모여라
                      </h3>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <StarIconSolid
                            key={index}
                            className="w-5 h-5 text-primary-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">커뮤니티 플랫폼</p>
                  </div>
                </div>

                {/* 인용 부호 */}
                <div className="mb-6 relative">
                  <div className="absolute -top-2 -left-2 text-primary-200 opacity-60">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.975 8C7.05833 11.3 4 16.4 4 21.35C4 25.7167 6.95 28 10.025 28C12.6917 28 14.95 25.7167 14.95 22.8333C14.95 19.95 12.8583 17.85 10.2083 17.85C9.66667 17.85 8.94167 17.9417 8.575 18.0333C9.025 15.3 11.8833 12.05 14.4917 10.375L11.975 8ZM25.9083 8C20.9917 11.3 17.9333 16.4 17.9333 21.35C17.9333 25.7167 20.8833 28 23.9583 28C26.625 28 28.8833 25.7167 28.8833 22.8333C28.8833 19.95 26.7917 17.85 24.1417 17.85C23.6 17.85 22.875 17.9417 22.5083 18.0333C22.9583 15.3 25.8167 12.05 28.425 10.375L25.9083 8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-700 leading-relaxed pl-5">
                    사용자 경험을 최우선으로 고려한 디자인과 안정적인 개발로
                    서비스 런칭 후 사용자 유입이 꾸준히 증가하고 있습니다.
                    기술적인 문제도 신속하게 해결해 주셔서 감사합니다.
                  </p>
                </div>

                {/* 하단 장식선 */}
                <div className="w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center animate-on-scroll delay-400">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 blur-xl opacity-20 rounded-full transform scale-110"></div>
            <div className="button-3d inline-flex items-center px-8 py-4 rounded-xl bg-white shadow-xl border border-primary-100 relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 mr-4">
                <UserCircleIcon className="w-6 h-6 text-primary-500" />
              </div>
              <div className="text-left">
                <p className="text-primary-600 font-bold">100% 환불 보장</p>
                <p className="text-gray-600 text-sm">
                  안심하고 프로젝트를 맡겨주세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
