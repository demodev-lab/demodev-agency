"use server";

import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  AcademicCapIcon,
  SparklesIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

export default async function EducationSection() {
  return (
    <div
      id="education"
      className="py-24 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* 배경 효과 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-primary-50 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-50 to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iI2VlZWVlZSIgc3Ryb2tlLXdpZHRoPSIxIiBjeD0iMTAiIGN5PSIxMCIgcj0iMiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <SparklesIcon className="h-6 w-6 text-primary-500 mr-2" />
            <span className="text-lg font-medium text-primary-600">
              우리의 교육 프로그램
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 sm:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
              교육 프로그램
            </span>
            으로
            <br className="hidden sm:block" />
            비즈니스를 성장시키세요
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-center text-gray-600 mb-8">
            코딩 경험이 없어도 가능한 웹사이트 제작 프로그램을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            className={
              "bg-white rounded-2xl shadow-xl hover-card animate-on-scroll delay relative overflow-hidden group transform transition-all duration-500 scale-105 ring-4 ring-primary-400/20"
            }
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100 to-transparent rounded-bl-full opacity-70 transition-all duration-300 group-hover:scale-110"></div>

            <div className="p-10">
              <div className="flex items-center mb-8 relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mr-4 shadow-inner">
                  <AcademicCapIcon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 relative z-10">
                  웹사이트 제작 챌린지
                </h3>
              </div>

              <ul className="space-y-4 mb-10 relative z-10">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">
                    코딩 경험이 없어도 참여 가능
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">
                    실전 중심의 오프라인 교육
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">소수 정예 맞춤형 교육</span>
                </li>
              </ul>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="text-3xl font-bold text-primary-600 mr-3">
                    99,000원
                  </div>
                  <div className="bg-primary-100 text-primary-600 text-sm font-medium px-3 py-1 rounded-full border border-primary-200">
                    33% 할인
                  </div>
                </div>

                <Link
                  href="/challenge"
                  className="button-3d inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  자세히 알아보기
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div
            className={
              "bg-white rounded-2xl shadow-xl hover-card animate-on-scroll delay relative overflow-hidden group transform transition-all duration-500 scale-105 ring-4 ring-blue-400/20"
            }
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-70 transition-all duration-300 group-hover:scale-110"></div>

            <div className="p-10">
              <div className="flex items-center mb-8 relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4 shadow-inner">
                  <CreditCardIcon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 relative z-10">
                  결제 모듈 워크샵
                </h3>
              </div>

              <ul className="space-y-4 mb-10 relative z-10">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">실제 결제 기능 구현</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">4단계 체계적 커리큘럼</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">개인 맞춤형 교육</span>
                </li>
              </ul>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mr-3">
                    490,000원
                  </div>
                  <div className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full border border-blue-200">
                    50% 할인
                  </div>
                </div>

                <Link
                  href="/workshop"
                  className="button-3d inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  자세히 알아보기
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
