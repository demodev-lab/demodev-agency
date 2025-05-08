"use client";

import {
  CalculatorIcon,
  ArrowRightIcon,
  LightBulbIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function GPTCalculatorSection() {
  return (
    <div className="w-full py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50/40 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-primary-100/30 rounded-full blur-2xl opacity-40 -z-10"></div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center animate-on-scroll">
          <div className="inline-flex items-center px-4 py-1 mb-3 rounded-full bg-primary-50 text-primary-600 text-sm font-medium">
            <LightBulbIcon className="w-4 h-4 mr-2" />
            개발 비용 계산기
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            정확한 외주 개발 비용을
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
              AI로 계산해보세요
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            일반 개발 방식과 AI 활용 개발 방식의 비용을 비교하여
            <br className="sm:hidden" /> 얼마나 절감할 수 있는지 확인해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - GPT description */}
          <div className="animate-on-scroll delay">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-50 to-transparent rounded-bl-full"></div>

              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mr-5">
                  <CalculatorIcon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  외주 개발 견적 계산기
                </h3>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      요구사항 입력
                    </h4>
                    <p className="text-gray-600">
                      원하는 프로젝트의 요구사항과 기능들을 자연어로 설명하세요
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      AI 견적 계산
                    </h4>
                    <p className="text-gray-600">
                      AI가 업계 기준과 경험을 바탕으로 적정 견적을 계산합니다
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      상세 비용 분석
                    </h4>
                    <p className="text-gray-600">
                      항목별 비용 분석과 함께 개발 기간 예상을 확인하세요
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <Link
                  href="https://chatgpt.com/g/g-681a1872c1d48191b7819648a9c4e960-demodebeu-ai-gyeonjeog-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                  <span>무료로 견적 계산하기</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - GPT preview */}
          <div className="animate-on-scroll delay-100">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-primary-600 p-4 text-white">
                    <h4 className="font-bold text-center">
                      외주 개발 비용 계산 결과
                    </h4>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">웹 프론트엔드 개발</span>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-400 line-through">
                          ₩6,500,000
                        </span>
                        <span className="font-medium">₩5,200,000</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">백엔드 API 개발</span>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-400 line-through">
                          ₩6,000,000
                        </span>
                        <span className="font-medium">₩4,800,000</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">데이터베이스 설계</span>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-400 line-through">
                          ₩2,500,000
                        </span>
                        <span className="font-medium">₩1,800,000</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">서버 구축 및 배포</span>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-400 line-through">
                          ₩1,800,000
                        </span>
                        <span className="font-medium">₩1,200,000</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 font-bold">
                      <span>총 견적 금액</span>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500 line-through">
                          ₩16,800,000
                        </span>
                        <span className="text-primary-600 text-xl">
                          ₩13,000,000
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                      <p className="text-primary-700 text-sm">
                        예상 개발 기간:{" "}
                        <span className="font-medium">8-10주</span>
                      </p>
                      <p className="text-green-600 text-sm font-medium mt-1">
                        AI 활용으로 약 23% 비용 절감 효과!
                      </p>
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
