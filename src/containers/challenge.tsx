'use server';

import Footer from '@/components/footer';
import {
  ArrowRightIcon,
  UserGroupIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import FaqItem from '@/components/FaqItem';

export default async function Challenge() {
  const faqs = [
    {
      question: '교육 장소는 어디인가요?',
      answer: '서울 강남구 개포동역 인근에서 진행합니다.',
    },
    {
      question: '코딩을 몰라도 정말 웹사이트를 만들 수 있나요?',
      answer: '네, 현재까지 많은 수강생들이 100% 성공했습니다.',
    },
    {
      question: '수업시간은 얼마나 걸리나요?',
      answer:
        '웹사이트 완성까지 책임지고 완성시켜드립니다. 평균 3시간 잡고 진행하는데 연장 수업 가능합니다.',
    },
    {
      question: '배포까지 가능한가요?',
      answer: '네, 가능합니다. 배포까지 단 3시간이면 충분히 가능합니다.',
    },
    {
      question: '수업 일자는 언제인가요?',
      answer:
        '매주 토요일 오후 2시에 진행됩니다. 날짜는 구글 폼을 통해서 선택해주세요.',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
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
                <span className="block mb-3">v0와 Cursor로</span>
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
                웹사이트 완성까지{' '}
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-blue-600">
                  책임 케어
                </span>
                로 도와드립니다.
              </p>

              <div className="flex justify-center gap-4">
                <Link
                  href="https://forms.gle/wEK2zqgnSS4GgzVG7"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  신청하기 <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-24 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 sm:text-4xl">
              이런{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-blue-600">
                특별한 혜택
              </span>
              이 있어요
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="p-8 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-xl border border-gray-100 group">
                <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                  <AcademicCapIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  오프라인 맞춤형 교육
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  오프라인 교육으로
                  <br className="hidden lg:block" />
                  개인의 속도에 맞춰 진행됩니다.
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
                  책임감 있는 케어를 위해{' '}
                  <span className="font-semibold text-primary-600">4명만</span>{' '}
                  모집
                </p>
              </div>

              <div className="p-8 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-xl border border-gray-100 group">
                <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                  <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  책임 케어
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  웹사이트 완성까지 교육이 이어집니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="py-20 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              혁신적인 도구로{' '}
              <span className="text-primary-600">쉽게 배우세요</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="relative w-32 h-16 mb-6 mx-auto">
                    <Image
                      src="/v0-logo.png"
                      alt="v0 로고"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    AI 웹 디자인 도구
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    디자인 경험 없이도 AI가 도와주는 웹 디자인 도구.
                    <br className="hidden lg:block" />
                    프롬프트만 입력하면 멋진 웹사이트를 자동 생성해줍니다.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>원하는 디자인을 텍스트로 설명하기만 하세요</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>AI가 실시간으로 웹사이트를 디자인합니다</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>코드를 자동 생성하여 시간을 절약해줍니다</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="relative w-32 h-16 mb-6 mx-auto">
                    <Image
                      src="/cursor-logo.png"
                      alt="Cursor 로고"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    AI 코딩 도우미
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    프로그래밍 지식이 없어도 AI가 코드를 작성해주는 혁신적인
                    IDE.
                    <br className="hidden lg:block" />
                    한국어로 명령하면 코드가 완성됩니다.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>한국어로 코드 작성 명령을 내릴 수 있습니다</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>AI가 자동으로 코드를 작성하고 수정합니다</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>코드 오류도 AI가 자동으로 해결해줍니다</span>
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
              단 3시간만에 직접 만든 실제 교육생들의 웹사이트입니다
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/20250322-landing.png"
                    alt="교육생 포트폴리오 - 랜딩 페이지 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    비즈니스 컨설팅 웹사이트
                  </h3>
                  <p className="text-gray-600">
                    코딩 경험이 없는 교육생이 만든 첫 번째 웹사이트입니다.
                    프로페셔널한 디자인과 반응형 레이아웃으로 구성되었습니다.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/20250323-1-landing.png"
                    alt="교육생 포트폴리오 - 랜딩 페이지 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    온라인 코스 플랫폼
                  </h3>
                  <p className="text-gray-600">
                    디자인 전공자가 처음으로 코딩에 도전해 만든 교육
                    플랫폼입니다. 직관적인 UI와 모던한 디자인이 특징입니다.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/20250323-2-landing.png"
                    alt="교육생 포트폴리오 - 랜딩 페이지 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    제품 소개 웹사이트
                  </h3>
                  <p className="text-gray-600">
                    마케팅 담당자가 제품 홍보를 위해 직접 만든 웹사이트입니다.
                    세련된 디자인과 명확한 CTA 구성이 돋보입니다.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/20250323-3-landing.png"
                    alt="교육생 포트폴리오 - 랜딩 페이지 4"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    크리에이티브 스튜디오
                  </h3>
                  <p className="text-gray-600">
                    디자인 에이전시 대표가 자신의 비즈니스를 위해 제작한
                    웹사이트입니다. 창의적인 레이아웃과 인터랙티브한 요소가
                    특징입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                이 모든 웹사이트는 코딩 경험이 없는 교육생들이{' '}
                <strong>단 한 번의 수업</strong>으로 만든 결과물입니다
              </p>
              <Link
                href="https://forms.gle/wEK2zqgnSS4GgzVG7"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                나도 만들어보기 <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-8 mb-6">
                <div className="flex items-center justify-center">
                  <QuestionMarkCircleIcon className="w-8 h-8 text-primary-500" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
                자주 묻는 질문
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
                궁금한 점이 있으신가요? 아래에서 답을 찾아보세요.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-primary-50 to-blue-50">
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              지금 바로 시작하세요
            </h2>
            <div className="mb-6 flex justify-center items-center">
              <div className="inline-flex items-center bg-white px-6 py-3 rounded-xl shadow-sm">
                <span className="text-xl font-bold line-through text-gray-400 mr-3">
                  10만원
                </span>
                <div className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-md mr-3">
                  50% 할인
                </div>
                <span className="text-2xl font-bold text-primary-600">
                  5만원
                </span>
              </div>
            </div>
            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              특별 할인가로 웹사이트를 만들 수 있는 기회
              <br className="hidden sm:block" />
              <span className="font-semibold text-primary-600">딱 4자리</span>가
              남았습니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://forms.gle/wEK2zqgnSS4GgzVG7"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                할인가로 신청하기 <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
