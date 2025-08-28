"use client";

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
  LightBulbIcon,
  CodeBracketIcon,
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
import AnimationInitialize from "@/components/animation-initialize";
import Toast from "@/components/toast";
import { useState } from "react";

export default function Challenge() {
  const [showToast, setShowToast] = useState(false);

  const handleChallengeClick = () => {
    setShowToast(true);
    // 실제 신청 로직은 여기에 추가
  };
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <GAPageView />
      <AnimationInitialize />

      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* 백그라운드 패턴 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-300 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-8 mb-8 animate-on-scroll">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-600/10 backdrop-blur-sm">
                <SparklesIcon className="w-8 h-8 text-primary-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-on-scroll">
              <span className="block mb-3">대모산개발단</span>
              <span className="block mb-3 gradient-text">n8n 초보 탈출</span>
              <span className="block">챌린지</span>
            </h1>

            <p className="mt-8 mb-12 text-xl leading-8 text-gray-600 animate-on-scroll delay">
              n8n을 처음 접하는 분들도 괜찮습니다.
              <br className="block sm:hidden" />
              자동화 시스템 구축까지{" "}
              <span className="font-semibold text-primary-400">
                33,000원
              </span>{" "}
              (얼리버드 40% 할인)
            </p>

            <div className="flex justify-center gap-4 animate-on-scroll delay">
              <GACtaButton
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl button-3d cursor-pointer"
                eventLabel={GA_CTA_EVENTS.onClickTopChallengeCTA}
                onClick={handleChallengeClick}
              >
                n8n 챌린지 신청하기 <ArrowRightIcon className="w-5 h-5 ml-2" />
              </GACtaButton>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 sm:text-4xl animate-on-scroll">
            챌린지 완주시 <br className="block md:hidden" />
            <span className="gradient-text">특별한 혜택</span>이 있어요
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-8 transition-all duration-300 rounded-2xl hover-card animate-on-scroll delay glass-effect bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                <AcademicCapIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                오프라인 1:1 컨설팅
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                <span className="font-semibold text-primary-600">
                  MVP 개발 로드맵
                </span>{" "}
                제공
              </p>
            </div>

            <div className="p-8 transition-all duration-300 rounded-2xl hover-card animate-on-scroll delay glass-effect bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                <UserGroupIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                0원 무료 교육
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                챌린지 완주시{" "}
                <span className="font-semibold text-primary-600">
                  전액 현금 환급
                </span>{" "}
                보장
              </p>
            </div>

            <div className="p-8 transition-all duration-300 rounded-2xl hover-card animate-on-scroll delay glass-effect bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                Make 자동화 강의자료
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                자동화를 위한{" "}
                <span className="font-semibold text-primary-600">
                  보너스 강의 자료
                </span>{" "}
                제공
              </p>
            </div>

            <div className="p-8 transition-all duration-300 rounded-2xl hover-card animate-on-scroll delay glass-effect bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                <DocumentTextIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                녹화본 제공
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                <span className="font-semibold text-primary-600">
                  강의 녹화본
                </span>{" "}
                무료 제공
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6 animate-on-scroll">
            n8n 챌린지에서{" "}
            <span className="text-primary-600">
              자동화 노하우를 배울 수 있어요
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-center text-gray-600 mb-12 animate-on-scroll delay">
            n8n 초보여도 괜찮습니다 <br className="block md:hidden" />
            전문가 수준의 자동화 시스템을 만들 수 있습니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover-card animate-on-scroll delay">
              <div className="p-8 flex flex-col flex-grow relative group transition-all duration-300 cursor-default hover:bg-gradient-to-br hover:from-primary-50 hover:to-white hover:shadow-2xl hover:scale-[1.03]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                <div className="relative w-32 h-16 mb-6 mx-auto">
                  <Image
                    src="/logo/n8n.png"
                    alt="n8n 로고"
                    fill
                    className="object-contain group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 transition-colors duration-300 group-hover:text-primary-600">
                  n8n
                </h3>
                <p className="text-gray-600 mb-6 text-center transition-colors duration-300 group-hover:text-primary-700">
                  코딩 없이도 자동화 워크플로우를 만들 수 있는 노코드 플랫폼.
                  <br className="block md:hidden" />
                  <br className="hidden md:block" />
                  드래그 앵 드롭만으로
                  <br className="hidden md:block" />
                  복잡한 자동화를 구축할 수 있습니다.
                </p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:text-primary-500 transition-all duration-300" />
                    <span className="transition-colors duration-300 group-hover:text-primary-700">
                      400+ 개의 앱과 서비스를 연결할 수 있습니다
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:text-primary-500 transition-all duration-300" />
                    <span className="transition-colors duration-300 group-hover:text-primary-700">
                      비주얼 인터페이스로 쉽게 워크플로우 생성
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:text-primary-500 transition-all duration-300" />
                    <span className="transition-colors duration-300 group-hover:text-primary-700">
                      복잡한 비즈니스 로직도 코드 없이 구현 가능
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover-card animate-on-scroll delay transform scale-105 z-10">
              <div className="p-8 flex flex-col flex-grow relative group transition-all duration-300 cursor-default hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:shadow-2xl hover:scale-[1.03]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                <div className="relative w-32 h-16 mb-6 mx-auto">
                  <Image
                    src="/logo/cursor.png"
                    alt="Cursor 로고"
                    fill
                    className="object-contain group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 transition-colors duration-300 group-hover:text-blue-600">
                  Cursor
                </h3>
                <p className="text-gray-600 mb-6 text-center transition-colors duration-300 group-hover:text-blue-700">
                  프로그래밍 지식이 없어도 AI가 코드를
                  <br className="block lg:hidden" />
                  <br className="hidden lg:block" />
                  대신 작성해주는 코딩 도구.
                  <br className="hidden lg:block" />
                  <br className="block lg:hidden" />
                  한국어로 명령하면 코드가 완성됩니다.
                </p>
                <ul className="space-y-3 mt-auto flex flex-col items-start">
                  <li className="flex items-start justify-start w-full">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300" />
                    <span className="transition-colors duration-300 group-hover:text-blue-700 text-left w-full">
                      한국어로 코드 작성 명령을 내릴 수 있습니다
                    </span>
                  </li>
                  <li className="flex items-start justify-start w-full">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300" />
                    <span className="transition-colors duration-300 group-hover:text-blue-700 text-left w-full">
                      AI가 자동으로 코드를 작성하고 수정합니다
                    </span>
                  </li>
                  <li className="flex items-start justify-start w-full">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300" />
                    <span className="transition-colors duration-300 group-hover:text-blue-700 text-left w-full">
                      코드 오류도 AI가 자동으로 해결해줍니다
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover-card animate-on-scroll delay">
              <div className="p-8 flex flex-col flex-grow relative group transition-all duration-300 cursor-pointer hover:cursor-default hover:bg-gradient-to-br hover:from-purple-50 hover:to-white hover:shadow-2xl hover:scale-[1.03]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                <div className="relative w-32 h-16 mb-6 mx-auto">
                  <Image
                    src="/logo/make.png"
                    alt="Make 로고"
                    fill
                    className="object-contain group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 transition-colors duration-300 group-hover:text-purple-600">
                  Make
                </h3>
                <p className="text-gray-600 mb-6 text-center transition-colors duration-300 group-hover:text-purple-700">
                  코드 없이도 웹사이트의 기능을
                  <br className="hidden md:block" />
                  자동화할 수 있는 도구.
                  <br className="block lg:hidden" />
                  <br className="hidden lg:block" />
                  드래그 앤 드롭으로
                  <br className="hidden md:block" />
                  자동화 워크플로우를 만듭니다.
                </p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-300" />
                    <span className="transition-colors duration-300 group-hover:text-purple-700">
                      드래그 앤 드롭으로 자동화를 구축합니다
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-300" />
                    <span className="transition-colors duration-300 group-hover:text-purple-700">
                      수천 개의 앱을 연동할 수 있습니다
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-300" />
                    <span className="transition-colors duration-300 group-hover:text-purple-700">
                      반복 작업을 자동으로 처리해줍니다
                    </span>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 sm:text-4xl animate-on-scroll">
            교육생 <span className="gradient-text">포트폴리오</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-center text-gray-600 mb-12 animate-on-scroll delay">
            평균 3시간 동안 실제 교육생들이 만든 웹사이트입니다
          </p>

          <div className="animate-on-scroll delay">
            <PortfolioGallery />
          </div>
        </div>
      </div>

      {/* 후기 Section */}
      <div className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-8 mb-6 animate-on-scroll">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100">
                <ChatBubbleBottomCenterIcon className="w-8 h-8 text-primary-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl animate-on-scroll delay">
              교육생들의 <span className="gradient-text">생생한 후기</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-center text-gray-600 mb-8 animate-on-scroll delay">
              수강생들이 직접 남긴 진솔한 후기를 확인해보세요
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-on-scroll delay">
            <ReviewCarousel />

            <div className="mt-10 bg-white p-8 rounded-2xl shadow-md hover-card">
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

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="relative z-10 p-8 md:p-12 bg-white rounded-2xl shadow-xl animate-on-scroll">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                지금 바로 시작하세요
              </h2>
              <div className="mb-6 flex justify-center items-center">
                <div className="inline-flex items-center bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 hover:shadow-2xl hover:border-primary-200 hover:scale-105 group">
                  <span className="text-2xl font-bold text-primary-600 transition-colors duration-300 group-hover:text-primary-700">
                    33,000원
                  </span>
                  <div className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-md ml-3 transition-all duration-300 group-hover:bg-red-200 group-hover:text-red-600 group-hover:scale-110">
                    얼리버드 40% 할인
                  </div>
                </div>
              </div>
              <p className="mb-10 text-xl leading-relaxed text-gray-600">
                n8n 자동화 시스템을 만들 수 있는 기회
                <br className="block sm:hidden" />
                <span className="font-semibold text-primary-600">
                  9월 1일 오전 12시 1분 ~ 9월 5일 오후 11시 59분{" "}
                </span>
                (D-4) 일정으로 진행됩니다.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <GACtaButton
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl button-3d cursor-pointer"
                  eventLabel={GA_CTA_EVENTS.onClickBottomChallengeCTA}
                  onClick={handleChallengeClick}
                >
                  n8n 챌린지 신청하기{" "}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GACtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 상세 정보 섹션 */}
      <div className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 sm:text-4xl">
              5일간 진행하는
              <br />
              <span className="gradient-text">
                &lsquo;대모산개발단 n8n 초보 탈출 챌린지&rsquo;
              </span>
              의<br />
              참가자를 모집합니다!
            </h2>
            <div className="space-y-2 text-lg text-gray-600">
              <p>🔔 모집 일정 : ~2025.08.31 23시까지</p>
              <p>🔔 공식 일정 : (자세한 사항은 본문 참조)</p>
              <p>🔔 얼리버드 40% 할인 | 언제 가격이 올라갈지 몰라요!</p>
            </div>
          </div>

          {/* 문제 제시 */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg animate-on-scroll delay">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              이런 고민 있으시죠?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "n8n 도전하고 싶지만, 뭐부터 해야할지 모르시나요?",
                "n8n에 관심있는데 계속 미루기만 하나요?",
                "단순 작업 반복하느라 시간 낭비하고 있지 않으신가요?",
                "AI 도구들을 연결해서 나만의 시스템을 만들고 싶으신가요?",
                "본업은 있는데 가볍게 사이드프로젝트를 하고 싶으신가요?",
              ].map((question, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{question}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <h4 className="text-xl font-bold text-primary-600">
                그동안 미루던 n8n, 지금 바로 시작하세요
              </h4>
              <p className="text-gray-600 mt-2">
                No.1 AI 활용 교육 회사 대모산개발단이 &lsquo;초보자들을 위한
                챌린지&rsquo;를 엽니다.
              </p>
            </div>
          </div>

          {/* 대모산개발단 소개 */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg animate-on-scroll delay">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🫵🏻 대모산개발단은 이런 곳이에요
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                · 팔로워가 0명에서, 3달만에 구독자 5000명을 달성한 바이브코딩
                크리에이터입니다.
              </p>
              <p>
                · 영재고, AI 장관상 출신 개발자로 구성된 소프트웨어 개발
                에이전시도 운영하고 있습니다.
              </p>
              <p>
                · 모두가 각자의 영역에서 &ldquo;소프트웨어 빌더&rdquo;가 될 수
                있도록 돕습니다.
              </p>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://www.youtube.com/@%EB%8C%80%EB%AA%A8%EC%82%B0%EA%B0%9C%EB%B0%9C%EB%8B%A8"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                🔗 대모산개발단 유튜브
              </a>
            </div>
          </div>

          {/* 프로그램 스케줄 */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg animate-on-scroll delay">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📌 프로그램 스케줄
            </h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800 font-semibold mb-2">
                ⚠️ 안내사항
              </p>
              <div className="text-sm text-yellow-700 space-y-1">
                <p>
                  · 실시간 강의가 아닌 VOD 강의를 통해 원하시는 시간에 수강이
                  가능합니다.
                </p>
                <p>· 각 강의는 당일 자정에 오픈됩니다.</p>
                <p>
                  · EX) 9/2(화) 00:00에 &lsquo;[VOD] 이미지 자동화하기&rsquo;가
                  오픈됩니다!
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      날짜
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      시간
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      내용
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      date: "8/31 (일)",
                      time: "8PM",
                      content: "카카오톡 입장",
                    },
                    {
                      date: "9/1 (월)",
                      time: "-",
                      content: "[VOD] n8n 설치와 간단한 gmail 자동화",
                    },
                    {
                      date: "9/2 (화)",
                      time: "-",
                      content: "[VOD] 이미지 자동화하기",
                    },
                    {
                      date: "9/3 (수)",
                      time: "-",
                      content: "[VOD] 미드저니 클론하기",
                    },
                    {
                      date: "9/4 (목)",
                      time: "-",
                      content: "[VOD] 동영상 자동화하기",
                    },
                    {
                      date: "9/5 (금)",
                      time: "-",
                      content: "[VOD] n8n 워크플로우 자동화 프로세스 연구하기",
                    },
                  ].map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border border-gray-300 px-4 py-3">
                        {item.date}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        {item.time}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        {item.content}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-gray-700 mb-2">
                Discord 명령어 하나로 AI 이미지와 영상을 자동 생성하는 챌린지
                형식의 n8n 자동화 부트캠프를 진행합니다.
              </p>
              <p className="text-gray-700">
                본 챌린지는 5일간 진행되며, 참가비는{" "}
                <span className="font-bold text-primary-600">33,000원</span>
                (얼리버드 40% 할인)입니다.
              </p>
            </div>
          </div>

          {/* 진행 방식 */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg animate-on-scroll delay">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🏆 진행 방식
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">목표</h4>
                <p className="text-gray-600">
                  Discord 기반 AI 콘텐츠 자동 생성 시스템 구축
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">특징</h4>
                <div className="space-y-1 text-gray-600">
                  <p>· 실전 자동화 워크플로우 중심의 챌린지</p>
                  <p>· VOD 강의를 통한 단계별 학습</p>
                  <p>· 계속해서 업데이트 되는 강의자료와 함께 복습 체계화</p>
                </div>
              </div>
            </div>
          </div>

          {/* 대상 */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg animate-on-scroll delay">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🔭 이런 분들이라면 함께해요!
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>
                ·{" "}
                <span className="font-semibold text-primary-600">
                  콘텐츠 크리에이터 | 마케터 | 디자이너 | AI 자동화에 관심 있는
                  모든 분
                </span>
              </p>
              <p>· 남을 위한 일이 아니라 나의 일을 시작하고 싶은 사람</p>
              <p>
                · AI 이미지·영상 생성을 자동화 시스템으로 구축하고 싶은 사람
              </p>
              <p>· n8n을 활용한 실무 자동화 경험을 쌓고 싶은 사람</p>
            </div>
          </div>

          {/* 결과물 미리보기 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-on-scroll delay">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🔭 어떤 결과물이 나올지 궁금해요
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 text-center mb-4">
                  챌린지를 통해 완성하게 될{" "}
                  <span className="font-bold text-primary-600">
                    실제 동작하는 자동화 시스템
                  </span>
                  을 미리 확인해보세요!
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black">
                <video
                  controls
                  className="w-full h-auto max-h-96"
                  poster="/thumbnail-challenge.png"
                >
                  <source src="/videos/DELL_U2721DE.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">
                  📈 5일 후 당신이 얻게 될 것들:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Discord 명령어로 AI 이미지 자동 생성</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>n8n 워크플로우 설계 능력</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>API 연동 및 데이터 처리 스킬</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>실무에 바로 적용 가능한 자동화 시스템</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection faqs={challengeFaqs} />

      {/* 외주 서비스 섹션 */}
      <div className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
              자동화 시스템이 <span className="gradient-text">급하게 필요</span>
              하신가요?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-center text-gray-600 mb-8">
              대모산개발단의 전문 자동화 팀이 고객님의 n8n 자동화 시스템을
              <br className="block sm:hidden" />
              직접 구축해드립니다
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg animate-on-scroll delay hover-card relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-64 h-64 sm:w-80 sm:h-80 bg-primary-100 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 sm:w-80 sm:h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                전문 n8n 자동화 구축 서비스
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-100 flex items-center justify-center mr-0 sm:mr-4 mb-0 sm:mb-0">
                      <LightBulbIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    설계부터 운영까지
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    원스톱 서비스로 편리하게 진행
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mr-0 sm:mr-4 mb-0 sm:mb-0">
                      <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    최신 기술 스택
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    최신 기술로 품질 보장
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mr-0 sm:mr-4 mb-0 sm:mb-0">
                      <RocketLaunchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    빠른 개발 속도
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    효율적인 프로젝트 관리
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 button-3d"
                >
                  외주 개발 문의하기
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* 토스트 컴포넌트 */}
      <Toast
        message="심사 중입니다. 빠른 시일 내에 연락드리겠습니다!"
        type="info"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        duration={4000}
      />
    </main>
  );
}
