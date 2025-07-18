"use server";

import { PlayCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default async function YouTubeSection() {
  return (
    <div className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-700 bg-primary-50 rounded-full">
            AI 코딩 유튜브
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                유튜브를 통한
              </span>{" "}
              <br className="sm:hidden" />
              AI 개발 지식 공유
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-blue-400"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            최신 AI 코딩 기술과 트렌드를 공유하며
            <br className="sm:hidden" /> 신뢰를 쌓아가고 있습니다
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              AI 코딩의 모든 것을 알려드립니다
            </h3>

            <p className="text-gray-600 mb-8 text-center">
              단순한 개발사가 아닌, AI 코딩 교육자로서
              <br className="sm:hidden" />
              최신 기술과 노하우를 공유합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <ul className="space-y-4 mx-auto w-fit md:mx-0">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      매주 새로운 AI 코딩 기술 튜토리얼 공개
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      실제 프로젝트에 적용되는 AI 활용 사례 공유
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 mx-auto w-fit md:mx-0">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      3,000명 이상의 개발자와 함께하는 커뮤니티
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      시청자 질문에 기반한 맞춤형 솔루션 제공
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://www.youtube.com/channel/UCfZCgp-n4yLLEaX6E30Xh4w"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                <PlayCircleIcon className="w-6 h-6 mr-3" />
                유튜브 채널 방문하기
              </a>
            </div>
          </div>
        </div>

        {/* 주요 지표 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4 sm:px-10 bg-white rounded-2xl shadow-lg border border-gray-100 animate-on-scroll">
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-primary-600">10+</h3>
            <p className="text-gray-600 text-sm">튜토리얼 영상</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-primary-600">3K+</h3>
            <p className="text-gray-600 text-sm">구독자</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-primary-600">50K+</h3>
            <p className="text-gray-600 text-sm">월 조회수</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-primary-600">4.9</h3>
            <p className="text-gray-600 text-sm">시청자 만족도</p>
          </div>
        </div>
      </div>
    </div>
  );
}
