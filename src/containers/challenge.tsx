'use server';

import Footer from '@/components/footer';
import {
  ArrowRightIcon,
  UserGroupIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Challenge() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-24 overflow-hidden bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block mb-3">V0와 Cursor로</span>
                <span className="block mb-3">
                  <span className="text-primary-600">나만의 웹사이트</span>를
                </span>
                <span className="block">만들어보세요</span>
              </h1>
              <p className="mt-8 mb-12 text-xl leading-8 text-gray-600">
                코딩 경험이 없어도 괜찮습니다.
                <br className="hidden sm:block" />
                웹사이트 완성까지{' '}
                <span className="font-semibold text-primary-600">
                  1:1 책임 케어
                </span>
                로 도와드립니다.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
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
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="p-10 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-8 bg-primary-100 rounded-xl">
                  <AcademicCapIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  오프라인 맞춤형 교육
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  1:1 오프라인 교육으로
                  <br className="hidden lg:block" />
                  개인의 속도에 맞춰 진행됩니다.
                </p>
              </div>

              <div className="p-10 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-8 bg-primary-100 rounded-xl">
                  <UserGroupIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  한정된 인원
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  책임감 있는 케어를 위해{' '}
                  <span className="font-semibold text-primary-600">5명만</span>{' '}
                  모집합니다.
                  <br className="hidden lg:block" />
                  빠른 신청은 기회를 잡을 수 있는 가장 확실한 방법입니다.
                </p>
              </div>

              <div className="p-10 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-8 bg-primary-100 rounded-xl">
                  <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  1:1 책임 케어
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  웹사이트 완성까지 포기하지 않도록 도와드립니다.
                  <br className="hidden lg:block" />
                  실시간 피드백과 코드 리뷰로 막히는 부분을 해결해드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-primary-50">
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              지금 바로 시작하세요
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              나만의 웹사이트를 만들 수 있는 기회,
              <br className="hidden sm:block" />
              <span className="font-semibold text-primary-600">
                5자리 중 2자리
              </span>
              가 남았습니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              신청하기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
