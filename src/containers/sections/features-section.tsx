"use server";

import {
  ClockIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";

export default async function FeatureSection() {
  return (
    <div className="relative w-full py-28 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-700 bg-primary-50 rounded-full">
            우리가 특별한 이유
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="relative inline-block">
              Why{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Us
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-blue-400"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            <span className="hidden sm:inline">
              단순한 개발이 아닌, 비즈니스 성장을 위한 최고의 선택
            </span>
            <span className="inline sm:hidden">
              단순한 개발이 아닌,
              <br />
              비즈니스 성장을 위한 최고의 선택
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 카드 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:blur-xl"></div>
            <div className="p-8 bg-white hover:bg-white/95 rounded-2xl shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-xl border border-gray-100 animate-on-scroll">
              <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-inner">
                <ClockIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                24/7 피드백
              </h3>
              <p className="text-gray-600">
                언제든 답답한 기다림 없이
                <br />
                실시간 응대를 약속드립니다
              </p>
            </div>
          </div>

          {/* 카드 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:blur-xl"></div>
            <div className="p-8 bg-white hover:bg-white/95 rounded-2xl shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-xl border border-gray-100 animate-on-scroll delay-100">
              <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-inner">
                <CurrencyDollarIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                추가금 제로
              </h3>
              <p className="text-gray-600">
                계약 이후 추가 비용 없이
                <br />
                약속된 결과물을 제공합니다
              </p>
            </div>
          </div>

          {/* 카드 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:blur-xl"></div>
            <div className="p-8 bg-white hover:bg-white/95 rounded-2xl shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-xl border border-gray-100 animate-on-scroll delay-200">
              <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-inner">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                빠른 결과물
              </h3>
              <p className="text-gray-600">
                효율적인 개발 프로세스로
                <br />
                신속한 결과물을 전달합니다
              </p>
            </div>
          </div>

          {/* 카드 4 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:blur-xl"></div>
            <div className="p-8 bg-white hover:bg-white/95 rounded-2xl shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-xl border border-gray-100 animate-on-scroll delay-300">
              <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-inner">
                <ReceiptPercentIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                가격실명제
              </h3>
              <p className="text-gray-600">
                투명한 가격 정책으로
                <br />
                신뢰할 수 있는 견적 제공
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
