import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <div id="contact" className="w-full py-24 relative overflow-hidden">
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 relative z-10">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-primary-50 text-primary-600 text-sm font-medium">
            <SparklesIcon className="w-4 h-4 mr-2" />
            상담 문의
          </div>
          <h2 className="text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 block sm:inline">
              자신있는 프로젝트만
            </span>
            <span className="block sm:inline">진행합니다</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            <span className="block sm:inline">
              100% 내부 개발팀의 철저한 품질 관리와
            </span>
            <span className="block sm:inline">
              파격적인 환불 보장제도를 제공합니다
            </span>
          </p>
        </div>

        {/* 문의하기 버튼 */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                상담 문의하기
              </h3>
              <Link
                href="https://www.pluuug.com/form/kR60s6EO6h?utm_source=company_website&utm_medium=referral&utm_campaign=homepage&utm_content=dev_form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-white bg-primary-600 hover:bg-primary-500 rounded-lg font-medium transition-all text-lg"
              >
                문의하기
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* 빠른 문의 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* 전화 문의 */}
          <Link
            href="tel:010-4718-8591"
            className="pl-2 block text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors"
          >
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 mr-4">
                  <PhoneIcon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  전화 문의
                </h4>
              </div>
              <span>010-4718-8591</span>
            </div>
          </Link>

          {/* 이메일 문의 */}
          <Link
            href="mailto:demo.dev.connect@gmail.com"
            className="pl-2 block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors break-all"
          >
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 mr-4">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  이메일 문의
                </h4>
              </div>
              <span>demo.dev.connect@gmail.com</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
