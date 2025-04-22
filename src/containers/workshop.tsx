"use server";

import Footer from "@/components/footer";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  CreditCardIcon,
  UserGroupIcon,
  LightBulbIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import FaqSection from "@/components/faq-section";
import { workshopFaqs } from "@/constants/faq";
import { curriculum } from "@/constants/workshop";
import GAPageView from "@/components/analytics/ga-page-view";
import GACtaButton from "@/components/analytics/ga-cta-button";
import { GA_CTA_EVENTS } from "@/constants/ga";
import AnimationInitialize from "@/components/animation-initialize";

export default async function Workshop() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <GAPageView />
      <AnimationInitialize />
      <main>
        {/* Hero Section */}
        <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          {/* 백그라운드 패턴 */}
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-300 blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
          </div>

          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <CreditCardIcon className="w-8 h-8 text-primary-500" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-on-scroll">
                <span className="block mb-3">결제 모듈이 있는</span>
                <span className="block mb-3 gradient-text">실전 웹사이트</span>
                <span className="block">만들어보세요</span>
              </h1>

              <p className="mt-8 mb-12 text-xl leading-8 text-gray-600 animate-on-scroll delay-50">
                코딩 경험이 없어도 괜찮습니다.
                <br className="hidden sm:block" />
                쉽게{" "}
                <span className="font-semibold text-blue-400">
                  결제 기능까지
                </span>{" "}
                완성할 수 있습니다.
              </p>

              <div className="flex justify-center gap-4 animate-on-scroll delay-50">
                <Link
                  href="https://forms.gle/qq5DnX55xiaQKQN37"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GACtaButton
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl button-3d"
                    eventLabel={GA_CTA_EVENTS.onClickTopWorkshopCTA}
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 sm:text-4xl animate-on-scroll">
              이런 <span className="gradient-text">특별한 혜택</span>이 있어요
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-8 transition-all duration-300 rounded-2xl hover-card animate-on-scroll delay-50 glass-effect bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 transition-all duration-300">
                  <CalendarIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors">
                  4단계 완성 과정
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  <span className="font-semibold text-blue-600">
                    단계별 체계적인 커리큘럼
                  </span>
                  <br className="hidden lg:block" />
                  으로 진행됩니다.
                </p>
              </div>

              <div className="p-8 transition-all duration-300 rounded-2xl hover-card animate-on-scroll delay-50 glass-effect bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 transition-all duration-300">
                  <CreditCardIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors">
                  실제 결제 기능
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  레몬스퀴즈 서비스를 활용해
                  <br className="hidden lg:block" />
                  <span className="font-semibold text-blue-600">
                    실제 결제
                  </span>{" "}
                  기능을 구현합니다.
                </p>
              </div>

              <div className="p-8 transition-all duration-300 rounded-2xl hover-card animate-on-scroll delay-50 glass-effect bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 transition-all duration-300">
                  <UserGroupIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors">
                  개인 맞춤형 교육
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  개인별 판매 상품에
                  <br className="hidden lg:block" />
                  <span className="font-semibold text-blue-600">
                    적합한 결제방식
                  </span>
                  으로 진행됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-30"></div>
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-30"></div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-on-scroll">
              <span className="gradient-text">4단계 커리큘럼</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {curriculum.map((week) => (
                <div
                  key={week.week}
                  className={
                    "bg-white rounded-2xl shadow-xl overflow-hidden hover-card animate-on-scroll delay-50"
                  }
                >
                  <div className="p-8 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-30"></div>
                    <div className="flex items-center mb-6 relative z-10">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-4">
                        {week.week}단계
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {week.title}
                      </h3>
                    </div>
                    <ul className="space-y-4 relative z-10">
                      {week.contents.map((content, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                          <span>{content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 기대 효과 Section */}
        <div className="py-20 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-on-scroll">
              이런 분들에게 <span className="gradient-text">추천</span>합니다
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover-card transition-all duration-300 animate-on-scroll delay-50">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl mr-3">
                    1
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    실제 서비스를 만들고 싶은 분
                  </h3>
                </div>
                <p className="text-gray-600">
                  결제 기능이 포함된 완성도 높은 웹사이트를 만들어 실제 서비스를
                  운영하고 싶으신 분들에게 적합합니다.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover-card transition-all duration-300 animate-on-scroll delay-50">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl mr-3">
                    2
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    온라인 숍 창업 희망자
                  </h3>
                </div>
                <p className="text-gray-600">
                  자신만의 온라인 상점을 열고 싶은 창업자들에게 필요한 기술적
                  역량을 제공합니다.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover-card transition-all duration-300 animate-on-scroll delay-50">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl mr-3">
                    3
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    실전 코딩 학습 희망자
                  </h3>
                </div>
                <p className="text-gray-600">
                  기술적인 접근보다 빠르게 실용적인 코딩을 하고 싶은 분에게
                  적합합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section with Payment */}
        <div
          id="signup"
          className="py-20 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <div className="relative z-10 p-8 md:p-12 bg-white rounded-2xl shadow-xl animate-on-scroll">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative">
                <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                  지금 바로 신청하세요
                </h2>
                <div className="mb-6 flex justify-center items-center">
                  <div className="inline-flex items-center bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">
                    <span className="text-xl font-bold line-through text-gray-400 mr-3">
                      99만원
                    </span>
                    <div className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-md mr-3">
                      50만원 할인
                    </div>
                    <span className="text-2xl font-bold text-blue-600">
                      49만원
                    </span>
                  </div>
                </div>
                <p className="mb-10 text-xl leading-relaxed text-gray-600">
                  특별 할인가로 결제 시스템 구현 방법을 배울 수 있는 기회
                  <br className="hidden sm:block" />
                  <span className="font-semibold text-blue-600">
                    한정 인원만
                  </span>
                  모집합니다.
                </p>

                <div className="mt-8 flex justify-center">
                  <Link
                    href="https://forms.gle/qq5DnX55xiaQKQN37"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GACtaButton
                      className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl button-3d"
                      eventLabel={GA_CTA_EVENTS.onClickBottomWorkshopCTA}
                    >
                      신청하기 <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </GACtaButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection faqs={workshopFaqs} />

        {/* 외주 서비스 섹션 */}
        <div className="py-20 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
                웹사이트가 <span className="gradient-text">급하게 필요</span>
                하신가요?
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-center text-gray-600 mb-8">
                DemoDev의 전문 개발팀이 고객님의 웹사이트를 직접 제작해드립니다
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg animate-on-scroll delay-200 hover-card relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  전문 외주 개발 서비스
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <LightBulbIcon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        기획부터 배포까지
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      원스톱 서비스로 편리하게 진행
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <CodeBracketIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        최신 기술 스택
                      </h4>
                    </div>
                    <p className="text-gray-600">최신 기술로 품질 보장</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <RocketLaunchIcon className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        빠른 개발 속도
                      </h4>
                    </div>
                    <p className="text-gray-600">효율적인 프로젝트 관리</p>
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
      </main>
      <Footer />
    </div>
  );
}
