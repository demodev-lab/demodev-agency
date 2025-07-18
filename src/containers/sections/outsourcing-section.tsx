"use client";

import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

export default function OutsourcingSection() {
  return (
    <div className="w-full py-32 relative overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center animate-on-scroll">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-primary-50 text-primary-600 text-sm font-medium border border-primary-100 shadow-sm">
            <XCircleIcon className="w-4 h-4 mr-2 animate-pulse" />
            알고 계셨나요?
          </div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl max-w-4xl mx-auto">
            <p className="mb-4">많은 개발사는 </p>
            <span className="relative inline-block">
              <span className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/20">
                외부 하청에 일을 넘깁니다
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-600 border-2 border-white"></span>
                </span>
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            외부 하청으로 인한 문제점으로 고객들은
            <span className="block sm:inline">
              다양한 어려움을 겪고 있습니다
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mb-24">
          {/* 문제점 카드들 - 왼쪽 컬럼 */}
          <div className="space-y-10 animate-on-scroll delay">
            {/* 카드 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:blur-xl"></div>
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="flex items-start mb-6 gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-500">
                    <ExclamationTriangleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      기대했던 일정은 물거품이 되었어요
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      &ldquo;처음엔 빠른 개발을 약속했지만, 시간이 지날수록
                      일정은 계속 미뤄졌어요. 원래 개발팀이 아닌 하청업체가
                      작업을 맡고 있었더라고요. 상황은 복잡해졌고, 결국
                      프로젝트는 기약 없이 지연되었습니다.&rdquo;
                    </p>
                    <div className="mt-5 inline-flex items-center px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100">
                      예비창업패키지 창업가
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:blur-xl"></div>
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="flex items-start mb-6 gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-500">
                    <ExclamationTriangleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      이틀이 지나도 아무 소식이 없었습니다
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      &ldquo;문제가 발생해 바로 수정이 필요했어요. 하지만 아무리
                      연락해도 답이 없었습니다. 이유는 간단했죠. 하청업체가
                      응답하지 않고 있었던 겁니다. 외주사도 어찌할 바를 몰라
                      답변만 지연되었죠.&rdquo;
                    </p>
                    <div className="mt-5 inline-flex items-center px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100">
                      중소 무역회사 대표님
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 문제점 카드들 - 오른쪽 컬럼 */}
          <div className="space-y-10 animate-on-scroll delay-100">
            {/* 카드 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:blur-xl"></div>
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="flex items-start mb-6 gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-500">
                    <ExclamationTriangleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <span className="block sm:inline">
                        완성된 결과물이
                        <br className="block sm:hidden" />쓸 수 없는
                        상태였습니다
                      </span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      &ldquo;몇 개월을 기다려 개발이 끝났다고 들었지만, 결과물은
                      제 요구사항과 전혀 달랐어요. 그때서야 알게 되었죠.
                      외주업체가 중간에 다른 개발사에 하청을 준 사실을요.&rdquo;
                    </p>
                    <div className="mt-5 inline-flex items-center px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100">
                      초기 라운드 창업가
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 카드 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:blur-xl"></div>
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="flex items-start mb-6 gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-500">
                    <ExclamationTriangleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <span className="block sm:inline">
                        생각지 못한 비용이 눈덩이처럼
                        <br className="block sm:hidden" />
                        불어났어요
                      </span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      &ldquo;계약 당시엔 기본 포함이라고 했던 기능들이 없다고
                      하더군요. 하청업체에서 추가 개발이 필요하다며 새로 견적을
                      제시했어요. 계획했던 예산을 훨씬 초과해버렸습니다.&rdquo;
                    </p>
                    <div className="mt-5 inline-flex items-center px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100">
                      무역 솔루션 회사 대표님
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 솔루션 메시지 */}
        <div className="animate-on-scroll delay-200">
          <div className="relative rounded-3xl overflow-hidden">
            {/* 배경 그라데이션 및 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-500 opacity-90"></div>
            <div className="absolute inset-0 mix-blend-overlay opacity-20"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative p-12 md:p-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-white">
                  <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                    <ShieldCheckIcon className="w-4 h-4 mr-2" />
                    우리의 솔루션
                  </div>
                  <h3 className="text-3xl font-bold mb-6">
                    DemoDev는&nbsp;
                    <br className="block sm:hidden" />
                    자체 인력으로만 개발합니다
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    <span className="sm:hidden">
                      모든 과정을 직접 관리하고 소통하여
                      <br />
                      이러한 문제들을 원천 차단합니다.
                      <br />
                      투명한 개발 과정과 정직한 커뮤니케이션으로
                      <br />
                      고객 만족을 최우선으로 생각합니다.
                    </span>
                    <span className="hidden sm:inline">
                      모든 과정을 직접 관리하고 소통하여 이러한 문제들을 원천
                      차단합니다.
                      <br />
                      투명한 개발 과정과 정직한 커뮤니케이션으로 고객 만족을
                      최우선으로 생각합니다.
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                      <CheckCircleIcon className="w-5 h-5 mr-2" />
                      <span>직접 소통</span>
                    </div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                      <CheckCircleIcon className="w-5 h-5 mr-2" />
                      <span>일정 준수</span>
                    </div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                      <CheckCircleIcon className="w-5 h-5 mr-2" />
                      <span>추가 비용 없음</span>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                  <div className="relative flex items-center justify-center w-40 h-40 bg-white rounded-full shadow-2xl">
                    <div className="relative">
                      <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-primary-600 to-primary-400">
                        100%
                      </span>
                      <span className="absolute -bottom-6 left-0 right-0 text-center text-white text-sm font-medium">
                        자체 개발
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
