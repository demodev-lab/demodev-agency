"use server";

import Footer from "@/components/footer";
import {
  ArrowRightIcon,
  UserGroupIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PortfolioGallery from "@/components/portfolio-gallery";
import { challengeFaqs } from "@/constants/faq";
import ReviewCarousel from "@/components/review-carousel";
import GAPageView from "@/components/analytics/ga-page-view";
import GACtaButton from "@/components/analytics/ga-cta-button";
import { GA_CTA_EVENTS } from "@/constants/ga";

export default async function Challenge() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <GAPageView />
      <main>
        {/* Hero Section */}
        <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          {/* 백그라운드 패턴 */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-300 blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
          </div>

          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-primary-500" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block mb-3">v0와 Cursor, Make로</span>
                <span className="block mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-blue-600">
                    나만의 웹사이트
                  </span>
                  를
                </span>
                <span className="block">가져가세요.</span>
              </h1>

              <p className="mt-8 mb-12 text-xl leading-8 text-gray-600">
                코딩 경험이 없어도 괜찮습니다.
                <br className="hidden sm:block" />
                웹사이트 완성까지{" "}
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-blue-600">
                  책임 케어
                </span>
                로 도와드립니다.
              </p>

              <div className="flex justify-center gap-4">
                <Link
                  href="https://forms.gle/i1XmuRoUQuTMAVBJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GACtaButton
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105"
                    eventLabel={GA_CTA_EVENTS.onClickTopChallengeCTA}
                  >
                    신청하기 <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </GACtaButton>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-24 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 sm:text-4xl">
              이런{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-blue-600">
                특별한 혜택
              </span>
              이 있어요
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="p-8 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-xl border border-gray-100 group">
                <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                  <AcademicCapIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  실전 중심 오프라인 교육
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  기획부터 배포까지 실제 웹사이트를 만들어보며
                  <br className="hidden lg:block" />
                  AI 도구 활용법을 익힙니다.
                </p>
              </div>

              <div className="p-8 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-xl border border-gray-100 group">
                <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                  <UserGroupIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  한정된 인원
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  책임감 있는 케어를 위해{" "}
                  <span className="font-semibold text-primary-600">소수만</span>{" "}
                  모집
                </p>
              </div>

              <div className="p-8 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-xl border border-gray-100 group">
                <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                  <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  실용적인 자동화
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  웹사이트 제작뿐만 아니라
                  <br className="hidden lg:block" />
                  사용자 관리와 메일 발송까지 자동화합니다.
                </p>
              </div>

              <div className="p-8 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-xl border border-gray-100 group">
                <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                  <DocumentTextIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  강의 자료 평생 제공
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  강의 자료는 평생 제공되며 계속해서 업데이트 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="py-20 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              혁신적인 도구로{" "}
              <span className="text-primary-600">쉽게 배우세요</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="relative w-32 h-16 mb-6 mx-auto">
                    <Image
                      src="/logo/v0.png"
                      alt="v0 로고"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">v0</h3>
                  <p className="text-gray-600 mb-6 text-center">
                    디자인 경험 없이도 AI가 도와주는 웹 디자인 도구.
                    <br className="hidden lg:block" />
                    프롬프트만 입력하면 멋진 웹사이트를 자동 생성해줍니다.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    <li className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>원하는 디자인을 텍스트로 설명하기만 하세요</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>AI가 실시간으로 웹사이트를 디자인합니다</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>코드를 자동 생성하여 시간을 절약해줍니다</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="relative w-32 h-16 mb-6 mx-auto">
                    <Image
                      src="/logo/cursor.png"
                      alt="Cursor 로고"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Cursor
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    프로그래밍 지식이 없어도 AI가 코드를 대신 작성해주는 코딩
                    도구.
                    <br className="hidden lg:block" />
                    한국어로 명령하면 코드가 완성됩니다.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    <li className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>한국어로 코드 작성 명령을 내릴 수 있습니다</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>AI가 자동으로 코드를 작성하고 수정합니다</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>코드 오류도 AI가 자동으로 해결해줍니다</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="relative w-32 h-16 mb-6 mx-auto">
                    <Image
                      src="/logo/make.png"
                      alt="Make 로고"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Make</h3>
                  <p className="text-gray-600 mb-6 text-center">
                    코드 없이도 웹사이트의 기능을 자동화할 수 있는 도구.
                    <br className="hidden lg:block" />
                    드래그 앤 드롭으로 자동화 워크플로우를 만듭니다.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    <li className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>드래그 앤 드롭으로 자동화를 구축합니다</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>수천 개의 앱을 연동할 수 있습니다</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>반복 작업을 자동으로 처리해줍니다</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 포트폴리오 Section */}
        <div className="py-20 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 sm:text-4xl">
              교육생 <span className="text-primary-600">포트폴리오</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-center text-gray-600 mb-12">
              평균 2시간 20분동안 직접 만든 실제 교육생들의 웹사이트입니다
            </p>

            <PortfolioGallery />
          </div>
        </div>

        {/* 후기 Section */}
        <div className="py-20 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center gap-8 mb-6">
                <div className="flex items-center justify-center">
                  <ChatBubbleBottomCenterIcon className="w-8 h-8 text-primary-500" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
                교육생들의 <span className="text-primary-600">생생한 후기</span>
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-center text-gray-600 mb-8">
                수강생들이 직접 남긴 진솔한 후기를 확인해보세요
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ReviewCarousel />

              <div className="mt-10 bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-12 w-12 text-primary-300"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg text-gray-600 italic mb-4">
                      강의가 너무 유익해서 현기증 올 정도에요.
                    </p>
                    <p className="font-medium text-gray-900">
                      황OO님, 마케팅 회사 대표
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection faqs={challengeFaqs} />

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-primary-50 to-blue-50">
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              지금 바로 시작하세요
            </h2>
            <div className="mb-6 flex justify-center items-center">
              <div className="inline-flex items-center bg-white px-6 py-3 rounded-xl shadow-sm">
                <span className="text-2xl font-bold text-primary-600">
                  99,000원
                </span>
              </div>
            </div>
            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              단 99,000원으로 웹사이트를 만들 수 있는 기회
              <br className="hidden sm:block" />
              지금이 유일합니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://forms.gle/i1XmuRoUQuTMAVBJ9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GACtaButton
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105"
                  eventLabel={GA_CTA_EVENTS.onClickBottomChallengeCTA}
                >
                  신청하기 <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GACtaButton>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
