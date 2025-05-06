"use server";

import {
  SparklesIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export default async function AIToolsSection() {
  return (
    <div className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-700 bg-primary-50 rounded-full">
            AI 기술 활용
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="relative inline-block">
              AI를 가장 잘{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                활용하는 개발사
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-blue-400"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            AI를 활용하여 가격에 거품을 없앴습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI 코드 어시스턴트 카드 */}
          <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-8 bg-white border border-gray-100 h-full">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-inner">
                <CodeBracketIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                AI 코드 어시스턴트
              </h3>
              <p className="text-gray-600 mb-4">
                Cursor, Windsurf 등 AI 코드 생성 도구를 활용하여 개발 속도를
                최대 40% 향상시킵니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-600" />
                  <span>자동 코드 생성 및 추천</span>
                </li>
                <li className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-600" />
                  <span>코드 리팩토링 자동화</span>
                </li>
                <li className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-600" />
                  <span>실시간 코드 최적화</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI 디자인 최적화 카드 */}
          <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-8 bg-white border border-gray-100 h-full">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 shadow-inner">
                <CpuChipIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                AI 디자인 통합
              </h3>
              <p className="text-gray-600 mb-4">
                v0, Lovable 같은 AI 도구로 디자인에서 개발까지 완벽한 통합
                파이프라인을 구축합니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-600" />
                  <span>디자인에서 코드로 자동 변환</span>
                </li>
                <li className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-600" />
                  <span>AI 기반 UI/UX 최적화</span>
                </li>
                <li className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-600" />
                  <span>반응형 디자인 자동화</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI 테스트 자동화 카드 */}
          <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-8 bg-white border border-gray-100 h-full">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 shadow-inner">
                <DocumentTextIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                AI 테스트 자동화
              </h3>
              <p className="text-gray-600 mb-4">
                AI 기반 테스트 생성 및 분석으로 QA 과정을 혁신적으로 개선합니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-600" />
                  <span>자동 테스트 케이스 생성</span>
                </li>
                <li className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-600" />
                  <span>AI 기반 버그 예측 및 수정</span>
                </li>
                <li className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-600" />
                  <span>지속적 품질 모니터링</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 주요 수치 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4 sm:px-10 bg-white rounded-2xl shadow-lg border border-gray-100 animate-on-scroll">
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-primary-600">40%</h3>
            <p className="text-gray-600 text-sm">개발 시간 단축</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-primary-600">95%</h3>
            <p className="text-gray-600 text-sm">버그 사전 감지율</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-primary-600">60%</h3>
            <p className="text-gray-600 text-sm">유지보수 비용 절감</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-primary-600">5+</h3>
            <p className="text-gray-600 text-sm">전문 AI 도구 통합</p>
          </div>
        </div>
      </div>
    </div>
  );
}
